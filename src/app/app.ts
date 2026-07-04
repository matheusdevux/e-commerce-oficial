import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router'; //Removed because it is not used in this code snippet
import { Produto } from './components/produto/produto';

@Component({
  selector: 'app-root',
  imports: [Produto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
}
