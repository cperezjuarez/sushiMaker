import { Injectable } from '@angular/core';
import { SushiModel } from '../model/sushi-model';

@Injectable({
  providedIn: 'root',
})
export class HistorialService {
  // Lista de sushis
  historialSushi: SushiModel[] = [];

  // Métodos
  añadirSushi(sushi: SushiModel) {
    this.historialSushi.push(sushi);
  }

  // Getters & Setters
  getHistorialSushi() {
    return this.historialSushi;
  }
  setHistorialSushi(value: SushiModel[]) {
    this.historialSushi = value;
  }
}
