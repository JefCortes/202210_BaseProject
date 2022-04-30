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
  j=0;
  k=0;
  constructor(private plantaService: PlantaService) { }

  getPlantas(): void {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
    });
  }
  sumar(x:string){
    if(x=='j') this.j=this.j+1;
    if(x=='k') this.k=this.k+1;
  }

  ngOnInit() {
    this.getPlantas();
  }

}
