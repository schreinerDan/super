import { Product } from "./product";
import { ProductModel } from "./product-model";

export class ShoppingCartModel {
    public item_num=0;
    public item:Product = new Product();
    public qtd:number=0;
    public total_price:number=0;


}
