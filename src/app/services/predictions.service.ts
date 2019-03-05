import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredictionsService {

  constructor(private http: HttpClient) { }

  getPredictions() {
    let headers = { "x-auth-token": "token" }
    return this.http
    .get(environment.url + "/api/predictions", { headers: headers})
    .pipe(catchError((error: HttpErrorResponse) => { return Observable.throw(error)}));
  }
}
