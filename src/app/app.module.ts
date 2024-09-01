import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { LoginComponent } from './auth/login/login.component';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'categorias', component: CategoriaComponent,  canActivate: [AuthGuard] },
  { path: 'pessoas', component: PessoasComponent, canActivate: [AuthGuard] },
  { path: 'lancamentos', component: LancamentosComponent, canActivate: [AuthGuard] },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
