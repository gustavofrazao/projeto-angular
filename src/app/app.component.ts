import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-angular';

  constructor(private router: Router) {}

  /* isAuthenticated: boolean;

  constructor(private router: Router, private authService: AuthService) { 
    this.isAuthenticated = this.authService.getAuthStatus();
    //console.log('isAuthenticated '+this.isAuthenticated)
  }

  ngOnInit():void {
    this.isAuthenticated = this.authService.getAuthStatus();
    console.log('isAuthenticated '+this.isAuthenticated)
  } */

  
}
