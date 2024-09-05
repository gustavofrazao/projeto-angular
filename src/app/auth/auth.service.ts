import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {

    if (username === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
      this.router.navigate(['home']);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  getAuthStatus(): boolean {
    return this.isAuthenticated;
  }

  /* getAuthStatus() {
    return localStorage.getItem('token');
  } */
}
