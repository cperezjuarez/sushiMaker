import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MakerComponent } from './components/maker-component/maker-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MakerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sushiMaker');
}
