import { Component } from '@angular/core';
import { HistorialService } from '../../service/historial-service';
import { CommonModule } from '@angular/common';
import { HeaderLayout } from '../../layout/header-layout/header-layout';
import { SushiModel } from '../../model/sushi-model';

@Component({
  selector: 'app-historial-page',
  imports: [CommonModule, HeaderLayout],
  templateUrl: './historial-page.html',
  styleUrl: './historial-page.css',
})
export class HistorialPage {
  // Constructor
  constructor(private readonly historial: HistorialService) {}

  // Métodos
  getHistorial(): SushiModel[] {
    return this.historial.getHistorialSushi();
  }
}
