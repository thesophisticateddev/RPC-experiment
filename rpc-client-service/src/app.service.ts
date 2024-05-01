import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Book } from './generated/book';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(@Inject('RUST_SERVICE') private client: ClientGrpc) {}
  private bookService: Book;
  onModuleInit() {
    this.bookService = this.client.getService<Book>('Book');
  }

  getHello() {
    return this.bookService.GetBook({ title: 'NestJS' });
  }
}
