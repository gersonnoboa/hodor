import { Injectable } from '@angular/core';
import { JWT } from '../general/jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isUserLoggedOut() {
    return JWT.isMissingToken();
  }
}
