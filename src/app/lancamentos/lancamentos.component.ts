import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lancamentos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css']
})
export class LancamentosComponent {

  /* lancamentos: any[] = [
    {
      codigo: 2,
      descricao: "Bahamas",
      observacao: null,
      dataVencimento: "10/02/2017",
      dataPagamento: "10/02/2017",
      valor: 100.32,
      tipo: "DESPESA",
      categoria: {
        codigo: 2,
        nome: "Alimentação"
      },
      pessoa: {
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
    },
    {
      codigo: 3,
      descricao: "Top Club",
      observacao: null,
      dataVencimento: "10/06/2017",
      dataPagamento: null,
      valor: 120.00,
      tipo: "RECEITA",
      categoria: {
        codigo: 3,
        nome: "Supermercado"
      },
      pessoa: {
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
      }
    },
    {
      codigo: 4,
      descricao: "CEMIG",
      observacao: "Geração",
      dataVencimento: "10/02/2017",
      dataPagamento: "10/02/2017",
      valor: 110.44,
      tipo: "RECEITA",
      categoria: {
        codigo: 3,
        nome: "Supermercado"
      },
      pessoa: {
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
      }
    },
    {
      codigo: 5,
      descricao: "DMAE",
      observacao: null,
      dataVencimento: "10/06/2017",
      dataPagamento: null,
      valor: 200.30,
      tipo: "DESPESA",
      categoria: {
        codigo: 3,
        nome: "Supermercado"
      },
      pessoa: {
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
      }
    },
    {
      codigo: 6,
      descricao: "Extra",
      observacao: null,
      dataVencimento: "10/03/2017",
      dataPagamento: "10/03/2017",
      valor: 1010.32,
      tipo: "RECEITA",
      categoria: {
        codigo: 4,
        nome: "Farmácia"
      },
      pessoa: {
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
      }
    },
    {
      codigo: 7,
      descricao: "Bahamas",
      observacao: null,
      dataVencimento: "10/06/2017",
      dataPagamento: null,
      valor: 500.00,
      tipo: "RECEITA",
      categoria: {
        codigo: 5,
        nome: "Outros"
      },
      pessoa: {
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
      }
    },
    {
      codigo: 8,
      descricao: "Top Club",
      observacao: null,
      dataVencimento: "10/03/2017",
      dataPagamento: "10/03/2017",
      valor: 400.32,
      tipo: "DESPESA",
      categoria: {
        codigo: 4,
        nome: "Farmácia"
      },
      pessoa: {
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
      }
    },
    {
      codigo: 9,
      descricao: "Despachante",
      observacao: "Multas",
      dataVencimento: "10/06/2017",
      dataPagamento: null,
      valor: 123.64,
      tipo: "DESPESA",
      categoria: {
        codigo: 3,
        nome: "Supermercado"
      },
      pessoa: {
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
      }
    },
    {
      codigo: 10,
      descricao: "Pneus",
      observacao: null,
      dataVencimento: "10/04/2017",
      dataPagamento: "10/04/2017",
      valor: 665.33,
      tipo: "RECEITA",
      categoria: {
        codigo: 5,
        nome: "Outros"
      },
      pessoa: {
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
      }
    },
    {
      codigo: 11,
      descricao: "Café",
      observacao: null,
      dataVencimento: "10/06/2017",
      dataPagamento: null,
      valor: 8.32,
      tipo: "DESPESA",
      categoria: {
        codigo: 4,
        nome: "Farmácia"
      },
      pessoa: {
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
      }
    },
    {
      codigo: 12,
      descricao: "Eletrônicos",
      observacao: null,
      dataVencimento: "10/04/2017",
      dataPagamento: "10/04/2017",
      valor: 2100.32,
      tipo: "DESPESA",
      categoria: {
        codigo: 5,
        nome: "Outros"
      },
      pessoa: {
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
      }
    },
    {
      codigo: 13,
      descricao: "Instrumentos",
      observacao: null,
      dataVencimento: "10/06/2017",
      dataPagamento: null,
      valor: 1040.32,
      tipo: "DESPESA",
      categoria: {
        codigo: 4,
        nome: "Farmácia"
      },
      pessoa: {
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
      }
    },
    {
      codigo: 14,
      descricao: "Café",
      observacao: null,
      dataVencimento: "10/04/2017",
      dataPagamento: "10/04/2017",
      valor: 4.32,
      tipo: "DESPESA",
      categoria: {
        codigo: 4,
        nome: "Farmácia"
      },
      pessoa: {
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
    },
    {
      codigo: 15,
      descricao: "Lanche",
      observacao: null,
      dataVencimento: "10/06/2017",
      dataPagamento: null,
      valor: 10.20,
      tipo: "DESPESA",
      categoria: {
        codigo: 4,
        nome: "Farmácia"
      },
      pessoa: {
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
      }
    },
    {
      codigo: 16,
      descricao: "NFE",
      observacao: "Prestão de Serviços",
      dataVencimento: "18/07/2024",
      dataPagamento: null,
      valor: 8000.00,
      tipo: "RECEITA",
      categoria: {
        codigo: 3,
        nome: "Supermercado"
      },
      pessoa: {
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
    },
    {
      codigo: 17,
      descricao: "NFE",
      observacao: "Prestão de Serviços",
      dataVencimento: "18/07/2024",
      dataPagamento: null,
      valor: 8000.00,
      tipo: "RECEITA",
      categoria: {
        codigo: 3,
        nome: "Supermercado"
      },
      pessoa: {
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
    }
  ] */

  lancamentos: any[] = []

    novoLancamento = {
      codigo: 0,
      descricao: '',
      observacao: '',
      dataVencimento: '',
      dataPagamento: '',
      valor: 0,
      tipo: '',
      categoria: {
        codigo: 0,
        nome: ''
      },
      pessoa: {
        codigo: 0,
        nome: '',
        ativo: true,
        endereco: {
          logradouro: '',
          numero: '',
          complemento: '',
          bairro: '',
          cep: '',
          cidade: '',
          estado: ''
        }
      }
    };

    pessoas = [
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
    ]

  categorias = [
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
    ];

    lancamentoEmEdicao: any = null;

    // Método para criar ou atualizar um lançamento
    salvarLancamento() {
      if(this.lancamentoEmEdicao) {
        const index = this.lancamentos.findIndex(l => l.codigo === this.lancamentoEmEdicao.codigo);
        if(index !== -1) {
      this.lancamentos[index] = { ...this.novoLancamento };
    }
    } else {
  this.novoLancamento.codigo = Date.now();
  this.lancamentos.push({ ...this.novoLancamento });
}
this.novoLancamento = this.resetarLancamento();
this.lancamentoEmEdicao = null;
  }

// Método para iniciar a edição de um lançamento
editarLancamento(lancamento: any) {
  this.lancamentoEmEdicao = lancamento;
  this.novoLancamento = { ...lancamento };
}

// Método para deletar um lançamento
deletarLancamento(codigo: number) {
  this.lancamentos = this.lancamentos.filter(l => l.codigo !== codigo);
}

// Método para resetar o formulário
resetarLancamento() {
  return {
    codigo: 0,
    descricao: '',
    observacao: '',
    dataVencimento: '',
    dataPagamento: '',
    valor: 0,
    tipo: '',
    categoria: {
      codigo: 0,
      nome: ''
    },
    pessoa: {
      codigo: 0,
      nome: '',
      ativo: true,
      endereco: {
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cep: '',
        cidade: '',
        estado: ''
      }
    }
  };
}

constructor(private dataService: DataService) { }

ngOnInit(): void {

  this.dataService.getDadosLancamentos().subscribe(
    (resposta) => {
      this.lancamentos = resposta;
    },
    (erro) => {
      console.error('Erro ao buscar dados', erro);
    }
  );
}

}
