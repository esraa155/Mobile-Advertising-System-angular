import { TestBed } from '@angular/core/testing';

import { SenderNameService } from './sender-name.service';

describe('SenderNameService', () => {
  let service: SenderNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SenderNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
