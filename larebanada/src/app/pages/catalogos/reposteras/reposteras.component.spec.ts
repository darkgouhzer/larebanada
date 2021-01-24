import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposterasComponent } from './reposteras.component';

describe('ReposterasComponent', () => {
  let component: ReposterasComponent;
  let fixture: ComponentFixture<ReposterasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReposterasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposterasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
