import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductTypeControllerService } from 'src/app/controllers/product-type-controller.service';
import { ProductType } from 'src/app/models/product-type';

@Component({
  selector: 'app-add-product-type',
  templateUrl: './add-product-type.component.html',
  styleUrls: ['./add-product-type.component.css']
})
export class AddProductTypeComponent {
  model = new ProductType();

  constructor(
    private productTypeController: ProductTypeControllerService,
  ) {}

  onUpload() {
    // upload code goes here
  }

  onSubmit() {
    this.productTypeController.addProductType(this.model);
  }

}
