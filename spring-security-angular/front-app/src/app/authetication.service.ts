import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutheticationService {

  constructor(private httpClient : HttpClient) { }

  login(username: String, password: String) {
    return this.httpClient.post<any>("http://localhost:9000/authenticate", { username, password })
    .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
    }));   
  }
}