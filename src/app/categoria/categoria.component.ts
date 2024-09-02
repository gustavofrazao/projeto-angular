import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})

export class CategoriaComponent implements OnInit {

  /* categorias = [
    {
      codigo: 2,
      nome: "Alimentação"
    },
    {
      codigo: 3,
      nome: "Supermercado"
    },
    {
      codigo: 4,
      nome: "Farmácia"
    },
    {
      codigo: 5,
      nome: "Outros"
    }
  ]; */

  categorias: any[] = [];

  constructor(private dataService: DataService) { }

  newCategoria: string = '';
  editCategoria: { codigo: number, nome: string } | null = null;

  addItem() {
    if (this.newCategoria.trim()) {
      const newCategoria = { codigo: Date.now(), nome: this.newCategoria.trim() };
      this.categorias.push(newCategoria);
      this.newCategoria = '';
    }
  }

  editItem(item: { codigo: number, nome: string }) {
    this.editCategoria = { ...item };
  }

  saveEdit() {
    if (this.editCategoria && this.editCategoria.nome.trim()) {
      const index = this.categorias.findIndex(item => item.codigo === this.editCategoria!.codigo);
      if (index !== -1) {
        this.categorias[index] = this.editCategoria!;
      }
      this.editCategoria = null;
    }
  }

  cancelEdit() {
    this.editCategoria = null;
  }

  removeItem(id: number) {
    this.categorias = this.categorias.filter(item => item.codigo !== id);
  }



  ngOnInit(): void {

    this.dataService.getDadosCategoria().subscribe(
      (resposta) => {
        this.categorias = resposta;
      },
      (erro) => {
        console.error('Erro ao buscar dados', erro);
      }
    );
  }

}
