import { HttpClient } from '@angular/common/http';
import { ProductControllerService } from './../../controllers/product-controller.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductModel } from 'src/app/models/product-model';
import { ProductTypeControllerService } from 'src/app/controllers/product-type-controller.service';
import { ProductType } from 'src/app/models/product-type';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  productTypes: any[] = [];

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.model.image = '/assets/p1.png';
      this.model.thumbnail = file;
    }
  }

  model = new Product();
  selected = 0;

  constructor(
    private productController: ProductControllerService,
    private productTypeController: ProductTypeControllerService
  ) {}
  ngOnInit(): void {
    this.productTypeController.getAllProductTypes().subscribe((result) => {
      this.productTypes = result;
      this.model.type_id = 0;
    });
  }

  onUpload() {
    // upload code goes here
  }

  onSubmit() {
    this.productController.addProduct(this.model);
  }
}
