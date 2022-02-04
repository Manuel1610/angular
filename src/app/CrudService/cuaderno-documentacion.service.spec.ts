import { TestBed } from '@angular/core/testing';

import { CuadernoDocumentacionService } from './cuaderno-documentacion.service';

describe('CuadernoDocumentacionService', () => {
  let service: CuadernoDocumentacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuadernoDocumentacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
