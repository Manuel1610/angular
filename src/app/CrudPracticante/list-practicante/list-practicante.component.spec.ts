import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPracticanteComponent } from './list-practicante.component';

describe('ListPracticanteComponent', () => {
  let component: ListPracticanteComponent;
  let fixture: ComponentFixture<ListPracticanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPracticanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPracticanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
