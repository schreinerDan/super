import { OnInit } from '@angular/core';
import { ProductControllerService } from './../../controllers/product-controller.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  public data: any;

  constructor(public productController: ProductControllerService)
  {}
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.productController.getAllProducts();
      }

}
