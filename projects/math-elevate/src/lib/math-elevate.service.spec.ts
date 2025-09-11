import { TestBed } from '@angular/core/testing';

import { MathElevateService } from './math-elevate.service';

describe('MathElevateService', () => {
  let service: MathElevateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathElevateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
