import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JWT } from '../general/jwt';
import { Prediction } from '../models/prediction';

@Injectable({
  providedIn: 'root'
})
export class PredictionsService {

  constructor(private http: HttpClient) { }

  getPredictions() {
    return this.http
    .get(environment.url + "/api/predictions", { headers: JWT.getHeader() });
  }

  postPredictions(predictions: Array<Prediction>) {
    let headers = JWT.getHeader();
    
    return this.http
    .post(environment.url + "/api/predictions", 
    { predictions: predictions }, 
    { headers: JWT.getHeader() });
  }
}
