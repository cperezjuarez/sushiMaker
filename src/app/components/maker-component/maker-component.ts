import { Component } from '@angular/core';
import { IngredienteService } from '../../service/ingrediente-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IngredienteModel } from '../../model/ingrediente-model';

@Component({
  selector: 'app-maker-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './maker-component.html',
  styleUrl: './maker-component.css',
})
export class MakerComponent {
  // Atributos
  ingredientes: IngredienteService; // Objeto con todos los ingredientes
  bases: IngredienteModel[] = [];
  toppings: IngredienteModel[] = [];
  extras: IngredienteModel[] = [];
  sauces: IngredienteModel[] = [];

  baseSelec!: string;
  toppingsSelec: string[] = []
  extrasSelec: string[] = []
  saucesSelec: string[] = []

  // Constructor
  constructor(ingredientes: IngredienteService) {
    // Asignamos 
    this.ingredientes = ingredientes;

    // Categorizamos los ingredientes según sus categorias
    this.ingredientes.getIngredientes().forEach(ingrediente => {
      if (ingrediente.getCategoria() == 'base') { this.bases.push(ingrediente) }
      if (ingrediente.getCategoria() == 'topping') { this.toppings.push(ingrediente) }
      if (ingrediente.getCategoria() == 'extra') { this.extras.push(ingrediente) }
      if (ingrediente.getCategoria() == 'sauce') { this.sauces.push(ingrediente) }
    });
  }

  // Métodos para manejar checkboxes
  public toggleTopping(topping: string, event: any) {
    if (event.target.checked) {
      this.toppingsSelec.push(topping);
    } else {
      this.toppingsSelec = this.toppingsSelec.filter(t => t !== topping);
    }
  }

  public toggleExtra(extra: string, event: any) {
    if (event.target.checked) {
      this.extrasSelec.push(extra);
    } else {
      this.extrasSelec = this.extrasSelec.filter(e => e !== extra);
    }
  }

  public toggleSauce(sauce: string, event: any) {
    if (event.target.checked) {
      this.saucesSelec.push(sauce);
    } else {
      this.saucesSelec = this.saucesSelec.filter(s => s !== sauce);
    }
  }

  public crearPedido() {
    
  }

  // Getters & Setters
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

  public getBaseSelec(): string {
    return this.baseSelec;
  }
  public setBaseSelec(value: string) {
    this.baseSelec = value;
  }

  public getToppingsSelec(): string[] {
    return this.toppingsSelec;
  }
  public setToppingsSelec(value: string[]) {
    this.toppingsSelec = value;
  }

  public getExtrasSelec(): string[] {
    return this.extrasSelec;
  }
  public setExtrasSelec(value: string[]) {
    this.extrasSelec = value;
  }

  public getSaucesSelec(): string[] {
    return this.saucesSelec;
  }
  public setSaucesSelec(value: string[]) {
    this.saucesSelec = value;
  }
}
