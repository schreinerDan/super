import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../shared/storage.service';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductControllerService {

  constructor(private snackBar: MatSnackBar,public productService:ProductsService,public storage:StorageService,private router: Router) { }

  getAllProducts(): void{
    this.productService.getAll().subscribe((response)=>{
      this.storage.productsList=response;
    })
  }
  getProductById(id:any): any{
    this.productService.getById(id).subscribe((response)=>{
      return response;
    });
    return null;
  }

  findAllProducts():Observable<Product[]>{
    return this.productService.getAll();
  }

  getProduct(id:any):Observable<Product>{
    return this.productService.getById(id);
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
    }, (errorResponse) => {
      // exibir mensagem snackbar
      this.snackBar.open(errorResponse.error.message, 'ERRO', {
        duration: 2000
      })
    })
  }

  uploadFile(data:any): void{
    this.productService.create(data).subscribe((response)=>{
      this.storage.message=response.message;
    })
  }

}
