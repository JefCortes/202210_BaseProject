/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { PlantaListadoComponent } from './planta-listado.component';
import { HttpClientModule } from '@angular/common/http';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

describe('PlantaListadoComponent', () => {
  let component: PlantaListadoComponent;
  let fixture: ComponentFixture<PlantaListadoComponent>;
  let debug: DebugElement;
  let td: HTMLElement;
  let th: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantaListadoComponent ],
      providers: [ PlantaService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaListadoComponent);
    component = fixture.componentInstance;
    component.plantas=[
        new Planta(
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.lorem.sentence()
        ),
        new Planta(
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.lorem.sentence()
        ),
        new Planta(
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.lorem.sentence()
        ),
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
    td = fixture.nativeElement.querySelector('td');
    th = fixture.nativeElement.querySelector('th');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an TH element as header', () => {
    let tableRows = fixture.nativeElement.querySelectorAll('tr')
    let headerRow = tableRows[0];
    expect(headerRow.cells[0].innerHTML).toBe('#');
    expect(headerRow.cells[1].innerHTML).toBe('Nombre Común');
    expect(headerRow.cells[2].innerHTML).toBe('Tipo');
    expect(headerRow.cells[3].innerHTML).toBe('Clima');
  });

  it('should have an TD element with nombre_comun in row 1', () => {
    let tableRows = fixture.nativeElement.querySelectorAll('tr')
    let row1 = tableRows[1];
    expect(row1.cells[0].innerHTML).toContain(component.plantas[0].id);
    expect(row1.cells[1].innerHTML).toContain(component.plantas[0].nombre_comun);
    expect(row1.cells[2].innerHTML).toContain(component.plantas[0].tipo);
    expect(row1.cells[3].innerHTML).toContain(component.plantas[0].clima);
  });

  it('should have an TD element with nombre_comun in row 2', () => {
    let tableRows = fixture.nativeElement.querySelectorAll('tr')
    let row2 = tableRows[2];
    expect(row2.cells[0].innerHTML).toContain(component.plantas[1].id);
    expect(row2.cells[1].innerHTML).toContain(component.plantas[1].nombre_comun);
    expect(row2.cells[2].innerHTML).toContain(component.plantas[1].tipo);
    expect(row2.cells[3].innerHTML).toContain(component.plantas[1].clima);
  });

  it('should have an TD element with nombre_comun in row 3', () => {
    let tableRows = fixture.nativeElement.querySelectorAll('tr')
    let row3 = tableRows[3];
    expect(row3.cells[0].innerHTML).toContain(component.plantas[2].id);
    expect(row3.cells[1].innerHTML).toContain(component.plantas[2].nombre_comun);
    expect(row3.cells[2].innerHTML).toContain(component.plantas[2].tipo);
    expect(row3.cells[3].innerHTML).toContain(component.plantas[2].clima);

  });

});
