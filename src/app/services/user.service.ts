import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JWT } from '../general/jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPredictions() {
    return this.http
      .get(environment.url + "/api/results/user", { headers: JWT.getHeader() });
  }

  registerUser(username: string, password: string) {
    return this.http
    .post(environment.url + "/api/users", {
      username: username,
      password: password
    });
  }
}
