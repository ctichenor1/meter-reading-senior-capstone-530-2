import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { RouterTestingModule } from '@angular/router/testing';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'http://localhost:58999/api/Account/GetRoute?route=';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    routeN: string;
  constructor(private http: HttpClient) { }
    
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getAccountsByRoute(routeN): Observable<any> {
    return this.http.get(apiUrl + routeN, httpOptions).pipe( //input value goes here
      map(this.extractData),
      catchError(this.handleError));
  }
}