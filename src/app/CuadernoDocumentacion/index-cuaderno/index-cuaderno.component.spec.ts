import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCuadernoComponent } from './index-cuaderno.component';

describe('IndexCuadernoComponent', () => {
  let component: IndexCuadernoComponent;
  let fixture: ComponentFixture<IndexCuadernoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexCuadernoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCuadernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
