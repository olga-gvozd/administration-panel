import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ILoginData, ILoginToken } from '../core/models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logged = false;

  constructor(
    private readonly http: HttpClient
  ) { }

  get isLogged(): boolean {
    return this.logged;
  }

  setLoginStatus(status: boolean): void {
    this.logged = status;
  }

  signIn(loginData: ILoginData): Observable<ILoginToken | HttpErrorResponse> {
    const url = 'api/auth/login';
    const body = {...loginData, observe: 'response'}
    return this.http.post<ILoginToken | HttpErrorResponse>(url, body)
      .pipe(catchError((error: HttpErrorResponse) => of(error)));
  }

}
