import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router'; //Removed because it is not used in this code snippet
import { Produto } from './features/produtos/produto/produto';
import {ListaProdutos} from './features/produtos/lista-produtos/lista-produtos';

@Component({
  selector: 'app-root',
  imports: [ListaProdutos, Produto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
}
