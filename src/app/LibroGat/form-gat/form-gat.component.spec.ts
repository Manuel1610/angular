import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGatComponent } from './form-gat.component';

describe('FormGatComponent', () => {
  let component: FormGatComponent;
  let fixture: ComponentFixture<FormGatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
