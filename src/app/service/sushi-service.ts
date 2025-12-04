import { Injectable } from '@angular/core';
import { SushiModel } from '../model/sushi-model';
import { IngredienteModel } from '../model/ingrediente-model';

@Injectable({
  providedIn: 'root',
})
export class SushiService {
  // Atributos
  ingredientes: IngredienteModel[] = [];

  // Métodos
  public generarSushi(base: string, toppings: string[], extras: string[], sauces: string[]) {
    // Creamos una lista con los ingredientes
    let ingredientesSelec: string[] = [base]
  }

  // Getters & Setters

  public getIngredientes(): IngredienteModel[] {
    return this.ingredientes;
  }
  public setIngredientes(value: IngredienteModel[]) {
    this.ingredientes = value;
  }
}
