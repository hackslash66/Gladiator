import { TestBed } from '@angular/core/testing';

import { AdmintableService } from './admintable.service';

describe('AdmintableService', () => {
  let service: AdmintableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmintableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
