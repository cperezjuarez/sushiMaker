import { Component } from '@angular/core';
import { SushiService } from '../../service/sushi-service';
import { RouterLink } from "@angular/router";
import { HeaderLayout } from '../../layout/header-layout/header-layout';

@Component({
  selector: 'app-resumen-page',
  imports: [RouterLink, HeaderLayout],
  templateUrl: './resumen-page.html',
  styleUrl: './resumen-page.css',
})
export class ResumenPage {
  // Constructor
  constructor(private readonly sushiGenerator: SushiService) {}

  ngOnInit() {
    console.log('Sushi recibido en resumen:', this.sushiGenerator.getSushi());
  }

  public obtenerSushi() {
    return this.sushiGenerator.getSushi()
  }
}
