import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logged = true;

  constructor(
    private readonly http: HttpClient
  ) { }

  get isLogged(): boolean {
    return this.logged;
  }

  setLoginStatus(status: boolean): void {
    this.logged = status;
  }

  signIn(loginData: any): void {
    const url = 'localhost:3000/api/auth/login';
    this.http.post(url, { loginData }).subscribe(data => data);
  }

}
