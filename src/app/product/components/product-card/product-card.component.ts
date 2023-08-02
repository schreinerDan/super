import { ProductControllerService } from './../../../controllers/product-controller.service';
import { ProductAddedCart } from '../../../models/product-added-cart';
import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartControllersService } from 'src/app/controllers/shopping-cart-controllers.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() productItem: any;
  quantity: number = 1;
  itemIndex: number = -1;
  itemAdded: boolean = false;
  constructor(public shoppingCartController: ShoppingCartControllersService) {}

  ngOnInit(): void {}
  addItemCart(productItem: any) {
    let product: ProductAddedCart = new ProductAddedCart(productItem, this.quantity);

    this.itemAdded = true;
    this.itemIndex=this.shoppingCartController.AddProductToShoppingCart(product);
  }

  removeItemCart() {

    this.itemAdded = false;
    this.quantity = 1;
    this.shoppingCartController.removeProductShoppingCart( this.itemIndex);
  }

  clickIncreaseItem(productItem: any): void {
    this.quantity++;

    if (this.itemAdded) {
      this.quantity =
        this.shoppingCartController.storage.shoppingCart[
          this.itemIndex
        ].qtdIncrement();
    }
  }

  clickDecreaseItem(productItem: any): void {
    if (this.quantity > 1) {
      this.quantity--;
      if (this.itemAdded) {
        this.quantity =
          this.shoppingCartController.storage.shoppingCart[
            this.itemIndex
          ].qtdDecrement();
      }
    }
  }
}
