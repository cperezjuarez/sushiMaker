import { Injectable } from '@angular/core';
import { IngredienteModel } from '../model/ingrediente-model';

@Injectable({
  providedIn: 'root',
})
export class IngredienteService {
  // Ingredientes (Atributos)
  public ingredientes: IngredienteModel[] = [
    new IngredienteModel('rice', 'base', 1, 10),
    new IngredienteModel('nori & rice', 'base', 1.2, 12),
    new IngredienteModel('salmon', 'topping', 0.8, 4),
    new IngredienteModel('tuna', 'topping', 0.8, 5),
    new IngredienteModel('cucumber', 'topping', 0.5, 3),
    new IngredienteModel('chicken', 'extra', 1.3, 6),
    new IngredienteModel('avocado', 'extra', 1.15, 3),
    new IngredienteModel('wasabi', 'sauce', 1.2, 1),
  ];

  // Métodos
  public BuscarIngrediente(nombre: string): IngredienteModel | undefined {
    return this.getIngredientes().find(ingrediente => ingrediente.getNombre().toLocaleLowerCase() === nombre.toLowerCase());
    return undefined;
  }

  // Getters & Setters
  public getIngredientes(): IngredienteModel[] {
    return this.ingredientes;
  }
  public setIngredients(value: IngredienteModel[]) {
    this.ingredientes = value;
  }
}
