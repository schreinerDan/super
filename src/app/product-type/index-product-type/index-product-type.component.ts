import { Router } from '@angular/router';
import { ProductTypeControllerService } from 'src/app/controllers/product-type-controller.service';
import { Product } from 'src/app/models/product';
import { ProductType } from './../../models/product-type';
import { Component } from '@angular/core';

@Component({
  selector: 'app-index-product-type',
  templateUrl: './index-product-type.component.html',
  styleUrls: ['./index-product-type.component.css']
})
export class IndexProductTypeComponent {
  public hidden = false;
  public hasDuplicated = false;
  public productTypes: ProductType[]=[];
  dataSources:ProductType[]=[];

  public displayedColumns = ['id','name','percentage','actions'];

  constructor(public productTypeController: ProductTypeControllerService,private router:Router)
  {}
  ngOnInit(): void {
    this.getData();
  }

  getData() {

    this.productTypeController.getAllProductTypes().subscribe((result)=>{
      this.productTypes=result;
      console.log(this.productTypes);
      this.dataSources= this.productTypes;
    });
  }
  public addProduct(){
    this.router.navigate(['/product-type/add']);
  }


  public searchProducts(key: string): void{
    console.log(key);
    const result: ProductType[] =[];
    for(const product of this.productTypes){
      if(product.name.toLowerCase().indexOf(key.toLowerCase())!== -1 ){

        result.push(product);

      }
    }

    this.productTypes = result;

    if (result.length ===0 || !key)
    {
        this.getData();
    }

  }

  public removeProduct(id: string){
    this.dataSources=[];

    this.productTypeController.removeProductType(id);
  }

}
