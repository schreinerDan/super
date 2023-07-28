import { ProductControllerService } from './../../controllers/product-controller.service';
import { Component } from '@angular/core';
import { ProductModel } from 'src/app/models/product-model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  model = new ProductModel();

  constructor(private productController:ProductControllerService) {

  }
  onSubmit() {

    this.productController.addProduct(this.model);





    }

}
