import { Injectable } from '@angular/core';
import {IBook} from '../interface/ibook';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: IBook[] = [];
  URL = 'http://localhost:3000/books';
  constructor(private http: HttpClient) { }
  getAll(): Observable<IBook[]>{
    return this.http.get<IBook[]>(this.URL);
  }
  getBookById(id: number): Observable<IBook>{
    return this.http.get<IBook>(this.URL + '/' + id);
  }
  add(book: IBook): Observable<any>{
    return this.http.post(this.URL , book);
  }
  delete(id: number): Observable<any>{
    return this.http.delete(this.URL + '/' + id);
  }
  edit(book: IBook , id: number): Observable<any> {
    return this.http.put(this.URL + '/' + id, book);
  }
}
