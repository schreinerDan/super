import { Injectable } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';
import { StorageService } from '../shared/storage.service';
import { ProductAddedCart } from '../models/product-added-cart';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartControllersService {

  constructor(private cookieService:CookieService, productService:ProductsService,public storage:StorageService,private router: Router) { }

  AddProductToShoppingCart(product:ProductAddedCart):number{
    this.storage.shoppingCart.push(product);
    this.cookieService.delete('shoppingCart');
    this.cookieService.set('shoppingCart', JSON.stringify(this.storage.shoppingCart));
    return this.storage.shoppingCart.indexOf(product);
  }
  removeProductShoppingCart(index:number){
    this.storage.shoppingCart.splice(index, 1);
  }

}
