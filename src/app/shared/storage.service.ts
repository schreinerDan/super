import { ProductAddedCart } from './../models/product-added-cart';
import { ProductModel } from '../models/product-model';
import { ShoppingCartModel } from '../models/shopping-cart-model';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { CookieService } from 'ngx-cookie-service';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public user:User=new User();
  public token:string="";
  public productsList:Product[]=[];
  private shoppingCart_:ProductAddedCart[]=[];
  public message:string="";
  constructor(private cookieService: CookieService) { }

  /**
   * name
   */

  public get shoppingCart():ProductAddedCart[] {
    let _shoppingCart= this.cookieService.get('shoppingCart');
    if(_shoppingCart!=""){
      this.shoppingCart_=JSON.parse(_shoppingCart);
    }
    return this.shoppingCart_;


  }
}
