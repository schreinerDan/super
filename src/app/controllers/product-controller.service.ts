import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../shared/storage.service';
import { ProductsService } from '../services/products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductControllerService {

  constructor(private productService:ProductsService,public storage:StorageService,private router: Router) { }

  getAllProducts(): void{
    this.productService.getAll().subscribe((response)=>{
      this.storage.productsList=response;
    })
  }

  addProduct(data:any): void{
    this.productService.create(data).subscribe((response)=>{
      console.log(response);
    })
  }

}
