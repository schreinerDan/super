import { ProductControllerService } from './../../../controllers/product-controller.service';
import { ProductAddedCart } from '../../../models/product-added-cart';
import { Component, Input, OnInit } from '@angular/core';

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
  constructor(public productActionService: ProductControllerService) {}

  ngOnInit(): void {}
  addItemCart(productItem: any) {
    let p_: ProductAddedCart = new ProductAddedCart(productItem, this.quantity);
    // this.itemIndex = this.productActionService.addProductCart(p_);
    this.itemAdded = true;
  }

  removeItemCart() {
    // this.itemIndex = this.productActionService.removeProductCart(
      // this.itemIndex
    // );
    this.itemAdded = false;
    this.quantity = 1;
  }

  clickIncreaseItem(productItem: any): void {
    this.quantity++;

    if (this.itemAdded) {
      this.quantity =
        this.productActionService.storage.shoppingCart[
          this.itemIndex
        ].qtdIncrement();
    }
  }

  clickDecreaseItem(productItem: any): void {
    if (this.quantity > 1) {
      this.quantity--;
      if (this.itemAdded) {
        this.quantity =
          this.productActionService.storage.shoppingCart[
            this.itemIndex
          ].qtdDecrement();
      }
    }
  }
}
