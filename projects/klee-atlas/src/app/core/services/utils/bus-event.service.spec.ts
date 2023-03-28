import { TestBed } from '@angular/core/testing';

import { BusEventService } from './bus-event.service';

describe('BusEventService', () => {
  let service: BusEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
