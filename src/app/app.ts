import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Home } from './main-content/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    Header,
    Home
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
