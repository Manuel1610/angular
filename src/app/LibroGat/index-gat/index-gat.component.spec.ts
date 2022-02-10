import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexGatComponent } from './index-gat.component';

describe('IndexGatComponent', () => {
  let component: IndexGatComponent;
  let fixture: ComponentFixture<IndexGatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexGatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexGatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
