import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistService {

  constructor() { }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  get token(): string | null {
    return localStorage.getItem('token');
  }

  clearToken(): void {
    localStorage.removeItem('token');
  }

}
