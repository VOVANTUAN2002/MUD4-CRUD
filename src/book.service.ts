import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from './books';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(API_URL + '/books');
  }

  find(id: any): Observable<Book> {
    return this.http.get<Book>(`${API_URL}/books/${id}`);
  }
  store(book: Book): Observable<Book> {
    return this.http.post<Book>(API_URL + '/books', book);
  }
  update(id: any, book: Book): Observable<Book> {
    return this.http.put<Book>(`${API_URL}/books/${id}`, book);
  }
  destroy(id: any): Observable<Book> {
    return this.http.delete<Book>(`${API_URL}/books/${id}`);
  }
  show(id: any): Observable<Book> {
    return this.http.get<Book>(`${API_URL}/books/${id}`);
  }
}
