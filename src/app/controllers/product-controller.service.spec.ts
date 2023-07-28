/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductControllerService } from './product-controller.service';

describe('Service: ProductController', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductControllerService]
    });
  });

  it('should ...', inject([ProductControllerService], (service: ProductControllerService) => {
    expect(service).toBeTruthy();
  }));
});
