import { Component, Input, Output, EventEmitter} from '@angular/core';
import { UpperCasePipe, LowerCasePipe, CurrencyPipe } from '@angular/common';
import { PrecoRealPipe } from '../../../shared/pipes/preco-real-pipe';

@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, PrecoRealPipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
  // produto = 'Notebook';
  // preco = 5000;
  // mostrarProduto = true;
  // mostrarPreco = true;
  // produtos = [
  //   { nome: 'Notebook', preco: 5000 },
  //   { nome: 'Smartphone', preco: 3000 },
  //   { nome: 'Tablet', preco: 2000 },
  //   { nome: 'Monitor', preco: 1000 },
  //   { nome: 'Teclado', preco: 200 },
  // ];
@Input() produto: string = '';
@Input() preco: number = 0;
@Output () produtoSelecionado = new EventEmitter<string>();
selecionarProduto() {
  this.produtoSelecionado.emit(this.produto);
}
}
