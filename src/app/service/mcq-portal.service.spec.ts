import { TestBed } from '@angular/core/testing';

import { McqPortalService } from './mcq-portal.service';

describe('McqPortalService', () => {
  let service: McqPortalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(McqPortalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
