import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaActualizaProductoComponent } from './alta-actualiza-producto.component';

describe('AltaActualizaProductoComponent', () => {
  let component: AltaActualizaProductoComponent;
  let fixture: ComponentFixture<AltaActualizaProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaActualizaProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaActualizaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
