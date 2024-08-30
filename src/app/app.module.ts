import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';

const routes: Routes = [
  { path: 'categoria', component: CategoriaComponent },
  { path: '', redirectTo: '/categoria', pathMatch: 'full' }, // Redirecionar para 'categoria' por padrão
  { path: 'pessoas', component: PessoasComponent },
  { path: '', redirectTo: '/pessoas', pathMatch: 'full' }, // Redirecionar para 'categoria' por padrão
  { path: 'lancamentos', component: LancamentosComponent },
  { path: '', redirectTo: '/lancamentos', pathMatch: 'full' }, // Redirecionar para 'categoria' por padrão
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
export class AppModule { }
