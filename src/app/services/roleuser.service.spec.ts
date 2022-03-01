import { TestBed } from '@angular/core/testing';

import { RoleuserService } from './roleuser.service';

describe('RoleuserService', () => {
  let service: RoleuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
