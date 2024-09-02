import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:3000';  // Substitua pelo URL da sua API

  constructor(private http: HttpClient) { }

  getDadosCategoria(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/categoria');
  }

  getDadosPessoas(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/pessoas');
  }

  getDadosLancamentos(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/lancamentos');
  }
  
}
