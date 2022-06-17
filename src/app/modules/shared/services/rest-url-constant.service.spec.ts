import { TestBed } from '@angular/core/testing';

import { RestUrlConstantService } from './rest-url-constant.service';

describe('RestUrlConstantService', () => {
  let service: RestUrlConstantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestUrlConstantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
