import { TestBed } from '@angular/core/testing';

import { EmicardService } from './emicard.service';

describe('EmicardService', () => {
  let service: EmicardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmicardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
