import { TestBed } from '@angular/core/testing';

import { MessageBaseService } from './message-base.service';

describe('MessageBaseService', () => {
  let service: MessageBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
