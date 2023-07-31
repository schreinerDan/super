import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../shared/storage.service';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductControllerService {

  constructor(public productService:ProductsService,public storage:StorageService,private router: Router) { }

  getAllProducts(): void{
    this.productService.getAll().subscribe((response)=>{
      this.storage.productsList=response;
    })
  }

  findAllProducts():Observable<Product[]>{
    return this.productService.getAll();
  }



  addProduct(data:any): void{
    this.productService.create(data).subscribe((response)=>{
      console.log(response);
      this.storage.message=response.message;
      this.router.navigate(['/product/index']);
    })
  }
  removeProduct(data:any): void{
    this.productService.delete(data).subscribe((response)=>{
      console.log(response);
      this.storage.message=response.message;
      this.router.navigate(['/product/index']);
    })
  }

  uploadFile(data:any): void{
    this.productService.create(data).subscribe((response)=>{
      this.storage.message=response.message;
    })
  }

}
