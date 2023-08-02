/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SaleControllerService } from './sale-controller.service';

describe('Service: SaleController', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaleControllerService]
    });
  });

  it('should ...', inject([SaleControllerService], (service: SaleControllerService) => {
    expect(service).toBeTruthy();
  }));
});
