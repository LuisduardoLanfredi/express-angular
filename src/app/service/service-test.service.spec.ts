/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceTestService } from './service-test.service';

describe('ServiceTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceTestService]
    });
  });

  it('should ...', inject([ServiceTestService], (service: ServiceTestService) => {
    expect(service).toBeTruthy();
  }));
});
