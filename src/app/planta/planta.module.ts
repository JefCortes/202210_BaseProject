import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantaListadoComponent } from './planta-listado/planta-listado.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [PlantaListadoComponent],
  declarations: [PlantaListadoComponent]
})
export class PlantaModule { }
