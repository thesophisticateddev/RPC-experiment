import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { BookService } from './bookservice.interface';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(@Inject('RUST_SERVICE') private client: ClientGrpc) {}
  private bookService: BookService;
  onModuleInit() {
    this.bookService = this.client.getService('Book');
  }

  getHello() {
    return this.bookService.GetBook({ title: 'NestJS' });
  }
}
