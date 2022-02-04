import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPracticanteComponent } from './form-practicante.component';

describe('FormPracticanteComponent', () => {
  let component: FormPracticanteComponent;
  let fixture: ComponentFixture<FormPracticanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPracticanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPracticanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
