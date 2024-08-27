import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'projeto-angular';

  constructor(private router: Router) {}

  goToCategoria() {
    this.router.navigate(['/categoria']);
  }
}
