import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../shared/storage.service';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';
import { ProductType } from '../models/product-type';
import { ProductTypeService } from '../services/product-type.service';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeControllerService {

  constructor(public productTypeService:ProductTypeService,public storage:StorageService,private router: Router) { }



  getAllProductTypes():Observable<ProductType[]>{
    return this.productTypeService.getAll();
  }
  getProductTypeById(id:any):Observable<ProductType>{
    return this.productTypeService.getById(id);
  }


  addProductType(data:any): void{
    this.productTypeService.create(data).subscribe((response)=>{
      console.log(response);
      this.storage.message=response.message;
      this.router.navigate(['/product-type/index']);
    })
  }
  removeProductType(data:any): void{
    this.productTypeService.delete(data).subscribe((response)=>{
      console.log(response);
      this.storage.message=response.message;
      this.router.navigate(['/']);

    })
  }



}
