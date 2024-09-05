import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriaComponent } from './categoria/categoria.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { LoginComponent } from './auth/login/login.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  
  { path: '', component: MainLayoutComponent, canActivate: [AuthGuard], children: [
    { path: 'categorias', component: CategoriaComponent }
  ] },
  
  { path: '', component: MainLayoutComponent, canActivate: [AuthGuard], children: [
    { path: 'pessoas', component: PessoasComponent }
  ] },
  
  { path: '', component: MainLayoutComponent, canActivate: [AuthGuard], children: [
    { path: 'lancamentos', component: LancamentosComponent }
  ] },
  
  {
    path: 'home',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent }
    ]
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
