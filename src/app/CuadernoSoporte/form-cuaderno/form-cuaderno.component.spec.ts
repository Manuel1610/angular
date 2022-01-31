import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCuadernoComponent } from './form-cuaderno.component';

describe('FormCuadernoComponent', () => {
  let component: FormCuadernoComponent;
  let fixture: ComponentFixture<FormCuadernoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCuadernoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCuadernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
