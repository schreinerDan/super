import { Product } from "./product";

export class ProductSold {
  public id: any;
  public  product: Product;
  public price: any;
  public quantity: number;
  public total: any;

  constructor(id: any, product: Product, price: any, quantity: number, priceTotal: any) {
    this.id = id;
    this.product = product;
    this.price = price;
    this.quantity = quantity;
    this.total = priceTotal;

}

}
