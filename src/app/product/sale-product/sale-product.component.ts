import { ProductType } from 'src/app/models/product-type';
import { ProductTypeService } from './../../services/product-type.service';
import { ProductControllerService } from './../../controllers/product-controller.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product';
import { ProductSold } from 'src/app/models/product-sold';
import { ProductsService } from 'src/app/services/products.service';
export class SaleForm {
  item:any;
  product:Product=new Product();
  productType:ProductType=new ProductType();
  price:any;
  quantity:number=0;
  total:number=0;
}


@Component({
  selector: 'app-sale-product',
  templateUrl: './sale-product.component.html',
  styleUrls: ['./sale-product.component.css']
})
export class SaleProductComponent implements OnInit{
  public displayedColumns = ['id','product','price','quantity','total','tax'];
  public productsSolds: any[]=[] ;
  // displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource:ProductSold[] =[];
  saleForm = new SaleForm();
  total:any=0;
  totalTax:number=0;

constructor( private productController:ProductControllerService,private productService:ProductsService,private productTypeService:ProductTypeService  ){
  // this.productsSolds=[new ProductSold(1,new Product(),new ProductType(),12,1,12)];
}
ngOnInit(): void {

}
showForm(){
}

onProductChange(id:any){
  this.productService.getById(id).subscribe((result)=>{
    this.saleForm.product = result;
    this.saleForm.price = result.price;
    this.productTypeService.getById(result.type_id).subscribe((productType)=>{
      this.saleForm.productType = productType;

    })

  });


}
onQuantityChange(qtd:any){
  this.saleForm.total = qtd*this.saleForm.price;

}
onSubmit(){
  let _product = new ProductSold(this.saleForm.item,this.saleForm.product,this.saleForm.productType,this.saleForm.price,this.saleForm.quantity,this.saleForm.total)

  this.total +=this.saleForm.total;
  this.totalTax +=_product.tax;


  this.dataSource=this.dataSource.concat(_product);
  console.log(this.dataSource);


}

}
