import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pessoas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  /* pessoas: any[] = [
    {
      codigo: 3,
      nome: "Luiz l",
      ativo: true,
      endereco: {
        logradouro: "Rua l",
        numero: "1",
        complemento: "",
        bairro: "Recife",
        cep: "54123678",
        cidade: "Recife",
        estado: "PE"
      }
    },
    {
      codigo: 4,
      nome: "Pedro p",
      ativo: true,
      endereco: {
        logradouro: "Rua p",
        numero: "1",
        complemento: "",
        bairro: "Recife",
        cep: "54123789",
        cidade: "Recife",
        estado: "PE"
      }
    },
    {
      codigo: 5,
      nome: "Tereza t",
      ativo: true,
      endereco: {
        logradouro: "Rua t",
        numero: "1",
        complemento: "",
        bairro: "Recife",
        cep: "54456123",
        cidade: "Recife",
        estado: "PE"
      }
    },
    {
      codigo: 6,
      nome: "Cristina c",
      ativo: true,
      endereco: {
        logradouro: "Rua c",
        numero: "1",
        complemento: "",
        bairro: "Recife",
        cep: "54456234",
        cidade: "Recife",
        estado: "PE"
      }
    },
    {
      codigo: 7,
      nome: "Wemerson w",
      ativo: true,
      endereco: {
        logradouro: "Rua w",
        numero: "1",
        complemento: "apt 611A",
        bairro: "Recife",
        cep: "54456345",
        cidade: "Recife",
        estado: "PE"
      }
    },
    {
      codigo: 8,
      nome: "Felipe f",
      ativo: true,
      endereco: {
        logradouro: "Rua f",
        numero: "1",
        complemento: "",
        bairro: "Recife",
        cep: "54456456",
        cidade: "Recife",
        estado: "PE"
      }
    },
    {
      codigo: 9,
      nome: "Antônio a",
      ativo: true,
      endereco: {
        logradouro: "Rua a",
        numero: "1",
        complemento: "",
        bairro: "Recife",
        cep: "54456567",
        cidade: "Recife",
        estado: "PE"
      }
    },
    {
      codigo: 10,
      nome: "Sheila s",
      ativo: false,
      endereco: {
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        cep: "",
        cidade: "",
        estado: ""
      }
    },
    {
      codigo: 2,
      nome: "João jj",
      ativo: false,
      endereco: {
        logradouro: "Rua jj",
        numero: "11",
        complemento: "casa verde",
        bairro: "Recife",
        cep: "54123567",
        cidade: "Recife",
        estado: "PE"
      }
    }
  ] */

  pessoas: any[] = [];

  newPessoa: any = {
    codigo: null,
    nome: '',
    ativo: false,
    endereco: {
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      cep: '',
      cidade: '',
      estado: '',
    },
  };

  addPessoa() {
    this.pessoas.push({ ...this.newPessoa });
    this.resetForm();
  }

  updatePessoa(codigo: number) {
    const index = this.pessoas.findIndex(pessoa => pessoa.codigo === codigo);
    if (index !== -1) {
      this.pessoas[index] = { ...this.newPessoa };
      this.resetForm();
    }
  }

  deletePessoa(codigo: number) {
    this.pessoas = this.pessoas.filter(pessoa => pessoa.codigo !== codigo);
  }

  editPessoa(codigo: number) {
    const pessoa = this.pessoas.find(pessoa => pessoa.codigo === codigo);
    if (pessoa) {
      this.newPessoa = { ...pessoa };
    }
  }

  resetForm() {
    this.newPessoa = {
      codigo: null,
      nome: '',
      ativo: false,
      endereco: {
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cep: '',
        cidade: '',
        estado: '',
      },
    };
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getDadosPessoas().subscribe(
      (resposta) => {
        this.pessoas = resposta;
      },
      (erro) => {
        console.error('Erro ao buscar dados', erro);
      }
    );
  }

}
