import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductControllerService } from 'src/app/controllers/product-controller.service';
import { Product } from 'src/app/models/product';



@Component({
  selector: 'app-index-product',
  templateUrl: './index-product.component.html',
  styleUrls: ['./index-product.component.css']
})
export class IndexProductComponent implements OnInit{
  public hidden = false;
  public hasDuplicated = false;
  public products: Product[]=[];
  dataSources:Product[]=[];

  public displayedColumns = ['id','name','description','type_id','price','actions'];

  constructor(public productController: ProductControllerService,private router:Router)
  {}
  ngOnInit(): void {
    this.getData();
  }

  getData() {

    this.productController.findAllProducts().subscribe((result)=>{
      this.products=result;
      console.log(this.products);
      this.dataSources= this.products;
    });
  }
  public addProduct(){
    this.router.navigate(['/product/add']);
  }


  public searchProducts(key: string): void{
    console.log(key);
    const result: Product[] =[];
    for(const product of this.products){
      if(product.name.toLowerCase().indexOf(key.toLowerCase())!== -1 ||
        product.description.toLowerCase().indexOf(key.toLowerCase())!== -1 ){

        result.push(product);

      }
    }

    this.products = result;

    if (result.length ===0 || !key)
    {
        this.getData();
    }

  }

  public removeProduct(id: string){
    this.productController.removeProduct(id)
  }
}
