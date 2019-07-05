import { Injectable } from '@angular/core';
import { environment } from '@src/environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {
  url: string;
  version: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = environment.api.qaUrl;
    this.version = environment.api.v4;
  }

  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  get(url: string, path: string, params: HttpParams = new HttpParams()): Observable<any> {
    const apiUrl = url ? url : this.url + this.version;
    return this.http.get(`${apiUrl}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  put(url: string, path: string, body: object = {}): Observable<any> {
    const apiUrl = url ? url : this.url + this.version;
    return this.http.put(
      `${apiUrl}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  post(url: string, path: string, body: object = {}): Observable<any> {
    const apiUrl = url ? url : this.url + this.version;
    return this.http.post(
      `${apiUrl}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  delete(url: string, path: string): Observable<any> {
    const apiUrl = url ? url : this.url + this.version;
    return this.http.delete(
      `${apiUrl}${path}`
    ).pipe(catchError(this.formatErrors));
  }
}
