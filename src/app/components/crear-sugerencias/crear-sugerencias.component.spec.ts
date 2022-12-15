import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSugerenciasComponent } from './crear-sugerencias.component';

describe('CrearSugerenciasComponent', () => {
  let component: CrearSugerenciasComponent;
  let fixture: ComponentFixture<CrearSugerenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearSugerenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSugerenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
