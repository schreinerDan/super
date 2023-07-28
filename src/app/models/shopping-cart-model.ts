import { ProductModel } from "./product-model";

export class ShoppingCartModel {
    public item_num=0;
    public item:ProductModel = new ProductModel();
    public qtd:number=0;
    public total_price:number=0;

    
}
