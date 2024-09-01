import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  loginFailed: boolean = false;

  constructor(private authService: AuthService) {}

  onLogin(): void {
    if (!this.authService.login(this.username, this.password)) {
      this.loginFailed = true;
    }
  }

  ngOnInit(): void {
  }

}
