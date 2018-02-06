/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LogindataService } from './logindata.service';

describe('Service: Logindata', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogindataService]
    });
  });

  it('should ...', inject([LogindataService], (service: LogindataService) => {
    expect(service).toBeTruthy();
  }));
});