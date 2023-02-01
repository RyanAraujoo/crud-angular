import { TestBed } from '@angular/core/testing';

import { VehicleMockService } from './vehicle-mock.service';

describe('VehicleMockService', () => {
  let service: VehicleMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
