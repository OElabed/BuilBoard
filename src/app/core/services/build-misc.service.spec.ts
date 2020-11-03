import { TestBed } from '@angular/core/testing';

import { BuildMiscService } from './build-misc.service';

describe('BuildMiscService', () => {
  let service: BuildMiscService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildMiscService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
