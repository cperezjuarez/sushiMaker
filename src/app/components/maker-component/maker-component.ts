import { Component } from '@angular/core';
import { IngredienteService } from '../../service/ingrediente-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IngredienteModel } from '../../model/ingrediente-model';
import { SushiService } from '../../service/sushi-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maker-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './maker-component.html',
  styleUrl: './maker-component.css',
})
export class MakerComponent {
  // Atributos
  router!: Router; // Enrutador para cambiar de paginas
  ingredientes: IngredienteService; // Objeto con todos los ingredientes --- IngredienteService
  sushiGenerator!: SushiService; // Objeto para crear el sushi --- SushiService

  // Ingredientes separados por categoria
  bases: IngredienteModel[] = [];
  toppings: IngredienteModel[] = [];
  extras: IngredienteModel[] = [];
  sauces: IngredienteModel[] = [];

  // Ingredientes seleccionados por el usuario
  // Puede ser undefined hasta que el usuario seleccione una base
  baseSelec?: IngredienteModel;
  toppingsSelec: IngredienteModel[] = []
  extrasSelec: IngredienteModel[] = []
  saucesSelec: IngredienteModel[] = []

  // Constructor
  constructor(ingredientes: IngredienteService, sushiGenerator: SushiService, router: Router) {
    // Enrutador
    this.router = router;

    // Asignamos el objeto para los ingredientes y generador
    this.ingredientes = ingredientes;
    this.sushiGenerator = sushiGenerator;

    // Categorizamos los ingredientes según sus categorias
    this.bases = this.ingredientes.getIngredientes().filter(i => i.getCategoria() === 'base');
    this.toppings = this.ingredientes.getIngredientes().filter(i => i.getCategoria() === 'topping');
    this.extras = this.ingredientes.getIngredientes().filter(i => i.getCategoria() === 'extra');
    this.sauces = this.ingredientes.getIngredientes().filter(i => i.getCategoria() === 'sauce');
  }

  // Métodos para manejar checkboxes
  public toggleTopping(topping: IngredienteModel, event: any) {
    if (event.target.checked) {
      this.toppingsSelec.push(topping);
    } else {
      this.toppingsSelec = this.toppingsSelec.filter(t => t !== topping);
    }
  }

  public toggleExtra(extra: IngredienteModel, event: any) {
    if (event.target.checked) {
      this.extrasSelec.push(extra);
    } else {
      this.extrasSelec = this.extrasSelec.filter(e => e !== extra);
    }
  }

  public toggleSauce(sauce: IngredienteModel, event: any) {
    if (event.target.checked) {
      this.saucesSelec.push(sauce);
    } else {
      this.saucesSelec = this.saucesSelec.filter(s => s !== sauce);
    }
  }

  public crearPedido() {
    // Evitamos generar pedido si no hay base seleccionada
    if (this.baseSelec) {
      // Generamos el sushi
      this.sushiGenerator.generarSushi(this.baseSelec, this.toppingsSelec, this.extrasSelec, this.saucesSelec)
      
      // Cambiamos la ruta
      this.resumen()

    } else {
      console.warn('No se ha seleccionado una base');
    }
  }

  // Navegación
  public index() {
    this.router.navigate([''])
  }

  public resumen() {
    this.router.navigate(['/resumen'])
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

  public getBaseSelec(): IngredienteModel | undefined {
    return this.baseSelec;
  }
  public setBaseSelec(value: IngredienteModel) {
    this.baseSelec = value;
  }

  public getToppingsSelec(): IngredienteModel[] {
    return this.toppingsSelec;
  }
  public setToppingsSelec(value: IngredienteModel[]) {
    this.toppingsSelec = value;
  }

  public getExtrasSelec(): IngredienteModel[] {
    return this.extrasSelec;
  }
  public setExtrasSelec(value: IngredienteModel[]) {
    this.extrasSelec = value;
  }

  public getSaucesSelec(): IngredienteModel[] {
    return this.saucesSelec;
  }
  public setSaucesSelec(value: IngredienteModel[]) {
    this.saucesSelec = value;
  }
}
