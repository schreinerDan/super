import { TestBed } from '@angular/core/testing';

import { ShoppingCartControllersService } from './shopping-cart-controllers.service';

describe('ShoppingCartControllersService', () => {
  let service: ShoppingCartControllersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingCartControllersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
