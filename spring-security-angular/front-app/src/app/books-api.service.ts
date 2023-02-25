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
    const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJjZWxvIiwiZXhwIjoxNjc3Mjk5Nzg2LCJpYXQiOjE2NzcyODE3ODZ9.GCZjHg_YYFQQu5N6PilDbbt_CclMOkkadLbwsg70HIN9fnXgGZqVTG8mWp4jMeMzGysaLDY3sF_wTnHS850hnA', 'My-Custom-Header': 'foobar' }
    return this.httpClient.get<Book[]>(
      "http://localhost:9000/api/books", {headers});
  }

}
