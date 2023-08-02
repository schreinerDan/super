import { Product } from "./product";
import { ProductType } from "./product-type";

export class ProductSold {
  public id: any;
  public product: Product;
  public price: any;
  public productType: ProductType;
  public quantity: number;
  public total: number;
  public tax: number;

  constructor(id: any, product: Product,productType: ProductType, price: number, quantity: number, priceTotal: any) {
    this.id = id;
    this.product = product;
    this.productType = productType;
    this.price = price;
    this.quantity = quantity;
    this.total = priceTotal;
    this.tax = this.total*(this.productType.percentage/100);

}

}
