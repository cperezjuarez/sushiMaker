import { Component } from '@angular/core';
import { IngredienteService } from '../../service/ingrediente-service';
import { SushiService } from '../../service/sushi-service';
import { IngredienteModel } from '../../model/ingrediente-model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { HeaderLayout } from '../../layout/header-layout/header-layout';

@Component({
  selector: 'app-maker-page',
  imports: [CommonModule, FormsModule, HeaderLayout],
  templateUrl: './maker-page.html',
  styleUrl: './maker-page.css',
})
export class MakerPage {
  // Ingredientes separados por categoria
  bases: IngredienteModel[] = [];
  toppings: IngredienteModel[] = [];
  extras: IngredienteModel[] = [];
  sauces: IngredienteModel[] = [];

  // Ingredientes seleccionados por el usuario
  baseSelec?: IngredienteModel; // Puede ser undefined hasta que el usuario seleccione una base
  toppingsSelec: IngredienteModel[] = []
  extrasSelec: IngredienteModel[] = []
  saucesSelec: IngredienteModel[] = []

  // Constructor
  constructor( 
    private readonly ingredientes: IngredienteService, 
    private readonly sushiGenerator: SushiService, 
    private readonly router: Router
  ) {}

  // Método que se llamará al crear la instancia
  ngOnInit() {
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
  if (this.baseSelec) {
    this.sushiGenerator.generarSushi(this.baseSelec, this.toppingsSelec, this.extrasSelec, this.saucesSelec)
    this.router.navigate(['resumen']) // Rediregimos desde el componente para poder crear el objeto antes de redirigir
  } else {
    alert('No se ha seleccionado una base');
  }
}
}
