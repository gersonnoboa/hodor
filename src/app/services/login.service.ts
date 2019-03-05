import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: String, password: String) {
    return this.http
      .post(environment.url + "/api/auth", {
        username: username,
        password: password
      });
  }
}
