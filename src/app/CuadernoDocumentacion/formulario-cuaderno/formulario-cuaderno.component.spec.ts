import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCuadernoComponent } from './formulario-cuaderno.component';

describe('FormularioCuadernoComponent', () => {
  let component: FormularioCuadernoComponent;
  let fixture: ComponentFixture<FormularioCuadernoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCuadernoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCuadernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
