import { Component } from '@angular/core';
import { SushiService } from '../../service/sushi-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumen-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './resumen-component.html',
  styleUrl: './resumen-component.css',
})
export class ResumenComponent {
  router!: Router;
  sushiGenerator!: SushiService;

  // Constructor
  constructor(sushiGenerator: SushiService, router: Router) {
    this.sushiGenerator = sushiGenerator
    this.router = router
  }

  public obtenerSushi() {
    return this.sushiGenerator.getSushi()
  }

  public index() {
    this.router.navigate([''])
  }
}
