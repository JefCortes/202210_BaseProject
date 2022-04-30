import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-planta-listado',
  templateUrl: './planta-listado.component.html',
  styleUrls: ['./planta-listado.component.css']
})
export class PlantaListadoComponent implements OnInit {

  plantas: Array<Planta> = [];
  constructor(private plantaService: PlantaService) { }

  getPlantas(): void {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
    });
  }

  ngOnInit() {
    this.getPlantas();
  }

}
