import { TestBed } from '@angular/core/testing';

import { CuadernoSoporteService } from './cuaderno-soporte.service';

describe('CuadernoSoporteService', () => {
  let service: CuadernoSoporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuadernoSoporteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
