import { ProductModel } from '../models/product-model';
import { ShoppingCartModel } from '../models/shopping-cart-model';
import { Injectable } from '@angular/core';
import { ProductAddedCart } from '../models/product-added-cart';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public user:User=new User();
  public token:string="";
  public productsList:ProductModel[]=[];

  public shoppingCart:ProductAddedCart[]=[];

}
