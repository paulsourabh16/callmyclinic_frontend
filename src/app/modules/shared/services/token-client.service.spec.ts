import { TestBed } from '@angular/core/testing';

import { TokenClientService } from './token-client.service';

describe('TokenClientService', () => {
  let service: TokenClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
