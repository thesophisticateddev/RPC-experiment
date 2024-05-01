import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Book } from './generated/book';
import { Movie, MovieServiceName } from './generated/movie';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    @Inject('RUST_SERVICE') private bookClient: ClientGrpc,
    @Inject('MOVIE_SERVICE') private movieClient: ClientGrpc,
  ) {}
  private bookService: Book;
  private movieService: Movie;

  onModuleInit() {
    this.bookService = this.bookClient.getService<Book>('Book');
    this.movieService = this.movieClient.getService<Movie>('Movie');
  }

  getHello() {
    return this.bookService.GetBook({ title: 'NestJS' });
  }

  getMovies() {
    return this.movieService.GetMovies({});
  }
}
