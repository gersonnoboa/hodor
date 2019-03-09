import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JWT } from '../general/jwt';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  
  constructor(private http: HttpClient) { }

  joinGroup(groupId: String) {
    return this.http
    .post(environment.url + "/api/group-users", 
    { group: groupId }, 
    { headers: JWT.getHeader() });
  }

  getGroups() {
    return this.http
    .get(environment.url + "/api/group-users",
    { headers: JWT.getHeader() });
  }
}
