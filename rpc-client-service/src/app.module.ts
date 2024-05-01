import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'RUST_SERVICE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:50051',
          package: 'book',
          protoPath: join(__dirname, '../../rpc-rust/proto/book.proto'),
        },
      },
      {
        name: 'MOVIE_SERVICE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:50051',
          package: 'movie',
          protoPath: join(__dirname, '../../rpc-rust/proto/movie.proto'),
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
