import { TestBed } from '@angular/core/testing';

import { ScryService } from './scry.service';

describe('ScryService', () => {
  let service: ScryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
