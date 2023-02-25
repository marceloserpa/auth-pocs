import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BooksApiService {

  constructor(private httpClient:HttpClient) { }

  getBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(
      "http://localhost:9000/api/books");
  }

}
