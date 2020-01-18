import { TestBed } from '@angular/core/testing';

import { MynewserviceService } from './mynewservice.service';

describe('MynewserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MynewserviceService = TestBed.get(MynewserviceService);
    expect(service).toBeTruthy();
  });
});
