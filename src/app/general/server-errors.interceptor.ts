import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators';
import { JWT } from './jwt';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { General } from './general';

@Injectable()
export class ServerErrorsInterceptor implements HttpInterceptor {
  constructor(private router: Router, private snackBar: MatSnackBar) {
    
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
    .handle(request)
    .pipe(
      tap((event: HttpEvent<any>) => { }, (error: any) => { this.handleError(error) })
    )
  }

  private handleError(error) {
    if (error instanceof HttpErrorResponse && error.status == 401) {
      JWT.remove();
      this.router.navigateByUrl("/");
      General.show(this.snackBar, "Your session has expired. Please log in again.");
    }
  }
}