import { TestBed } from '@angular/core/testing';

import { LastSearchService } from './last-search.service';

describe('LastSearchService', () => {
  let service: LastSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
