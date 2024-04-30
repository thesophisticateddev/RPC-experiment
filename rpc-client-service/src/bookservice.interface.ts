import { Observable } from 'rxjs';

interface BookRequest {
  title: string;
}

export interface BookService {
  GetBook(data: BookRequest): Observable<any>;
}
