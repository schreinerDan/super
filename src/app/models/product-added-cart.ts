import { Product } from './product';
import { ProductModel } from './product-model';
export class ProductAddedCart {
    index:number=-1;
    product:Product=new Product();
    qtd:number=0;

    constructor(product_:Product,qtd_:number){
      this.product=product_;
      this.qtd=qtd_;
    }

    qtdIncrement():any {
      if( this.qtd <=this.product.stock_quantity  ){
        this.qtd++;
      }
      return this.qtd;
    }

    qtdDecrement(){
      if(this.qtd>0){
        this.qtd--;
      }
      return this.qtd;
    }

  }
