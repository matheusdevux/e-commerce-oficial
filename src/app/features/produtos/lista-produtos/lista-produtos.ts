import { Component } from '@angular/core';
import { Produto } from '../produto/produto';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  produtos = [
    { nome: 'Notebook', preco: 5000 },
    { nome: 'Smartphone', preco: 3000 },
    { nome: 'Tablet', preco: 2000 },
    { nome: 'Monitor', preco: 1000 },
    { nome: 'Teclado', preco: 200 },
    { nome: 'Mouse', preco: 100 },
  ];
  exibirProdutoSelecionado(produto: string) {
    console.log('Produto selecionado:', produto);
  }
}
