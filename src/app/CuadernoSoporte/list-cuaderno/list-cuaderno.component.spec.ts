import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCuadernoComponent } from './list-cuaderno.component';

describe('ListCuadernoComponent', () => {
  let component: ListCuadernoComponent;
  let fixture: ComponentFixture<ListCuadernoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCuadernoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCuadernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
