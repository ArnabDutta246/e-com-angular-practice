import { TestBed } from '@angular/core/testing';

import { PageDataResolverService } from './page-data-resolver.service';

describe('PageDataResolverService', () => {
  let service: PageDataResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageDataResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
