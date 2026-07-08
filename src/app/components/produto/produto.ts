import { Component } from '@angular/core';

@Component({
  selector: 'app-produto',
  imports: [],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
  produto = 'Notebook';
  preco = 5000;
  mostrarProduto = true;
  mostrarPreco = true;
  produtos = [
    { nome: 'Notebook', preco: 5000 },
    { nome: 'Smartphone', preco: 3000 },
    { nome: 'Tablet', preco: 2000 },
  ];
}
