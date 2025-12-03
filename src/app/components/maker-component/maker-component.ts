import { Component } from '@angular/core';
import { IngredienteService } from '../../service/ingrediente-service';
import { CommonModule } from '@angular/common';
import { IngredienteModel } from '../../model/ingrediente-model';

@Component({
  selector: 'app-maker-component',
  imports: [CommonModule],
  templateUrl: './maker-component.html',
  styleUrl: './maker-component.css',
})
export class MakerComponent {
  // Atributos
  ingredientes!: IngredienteService; // Objeto con todos los ingredientes
  bases!: IngredienteModel[];
  toppings!: IngredienteModel[];
  extras!: IngredienteModel[];
  sauces!: IngredienteModel[];

  // Constructor
  constructor(ingredientes: IngredienteService) {
    // Asignamos 
    this.ingredientes = ingredientes;

    // Categorizar
    this.ingredientes.getIngredientes().forEach(ingrediente => {
      if (ingrediente.getCategoria() == 'base') {this.bases.push(ingrediente)}
      if (ingrediente.getCategoria() == 'topping') {this.toppings.push(ingrediente)}
      if (ingrediente.getCategoria() == 'extra') {this.extras.push(ingrediente)}
      if (ingrediente.getCategoria() == 'sauce') {this.sauces.push(ingrediente)}
    });
  }

  // Métodos
  public getIngredientes() {
    return this.ingredientes.getIngredientes()
  }

    public getBases(): IngredienteModel[] {
      return this.bases;
    }
    public setBases(value: IngredienteModel[]) {
      this.bases = value;
    }

    public getToppings(): IngredienteModel[] {
      return this.toppings;
    }
    public setToppings(value: IngredienteModel[]) {
      this.toppings = value;
    }

    public getExtras(): IngredienteModel[] {
      return this.extras;
    }
    public setExtras(value: IngredienteModel[]) {
      this.extras = value;
    }

    public getSauces(): IngredienteModel[] {
      return this.sauces;
    }
    public setSauces(value: IngredienteModel[]) {
      this.sauces = value;
    }
}
