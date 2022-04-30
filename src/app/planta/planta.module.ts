import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantaListadoComponent } from './planta-listado/planta-listado.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PlantaListadoComponent],
  declarations: [PlantaListadoComponent]
})
export class PlantaModule { }
