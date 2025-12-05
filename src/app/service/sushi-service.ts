import { Injectable } from '@angular/core';
import { SushiModel } from '../model/sushi-model';
import { IngredienteModel } from '../model/ingrediente-model';

@Injectable({
  providedIn: 'root',
})
export class SushiService {
  // Atributos
  ingredientes: IngredienteModel[] = [];
  sushi: SushiModel = new SushiModel();

  // Métodos
  public generarSushi(base: IngredienteModel, toppings: IngredienteModel[], extras: IngredienteModel[], sauces: IngredienteModel[]) {
    // Creamos una lista con los ingredientes
    this.ingredientes.push(base, ...toppings, ...extras, ...sauces)

    // Creamos el sushi
    this.sushi.setIngredientes(this.ingredientes)
  }

  // Getters & Setters

  public getIngredientes(): IngredienteModel[] {
    return this.ingredientes;
  }
  public setIngredientes(value: IngredienteModel[]) {
    this.ingredientes = value;
  }

  public getSushi(): SushiModel {
    return this.sushi;
  }
  public setSushi(value: SushiModel) {
    this.sushi = value;
  }
}
