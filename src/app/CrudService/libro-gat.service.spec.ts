import { TestBed } from '@angular/core/testing';

import { LibroGatService } from './libro-gat.service';

describe('LibroGatService', () => {
  let service: LibroGatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibroGatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
