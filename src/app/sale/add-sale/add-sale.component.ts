import { ProductTypeControllerService } from 'src/app/controllers/product-type-controller.service';
import { Component } from '@angular/core';
import { SaleControllerService } from 'src/app/controllers/sale-controller.service';
import { Product } from 'src/app/models/product';
import { ProductControllerService } from 'src/app/controllers/product-controller.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductSold } from 'src/app/models/product-sold';
import { Sale } from 'src/app/models/sale';
import { ProductType } from 'src/app/models/product-type';
import { SalesDialogComponent } from '../components/sales-dialog/sales-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

export class SaleForm {
  id: any = 0;
  product: Product = new Product();
  productType: ProductType = new ProductType();
  price: any = 0;
  quantity: number = 0;
  totalPrice: number = 0;
}
@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.css'],
})
export class AddSaleComponent {
  public displayedColumns = [
    'id',
    'product',
    'price',
    'quantity',
    'totalPrice',
    'taxValue',
  ];
  activeSaleItem: SaleForm = new SaleForm();
  activeSale: Sale = new Sale();
  productSold: ProductSold[] = [];
  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private saleController: SaleControllerService,
    private productController: ProductControllerService,
    private productTypeController: ProductTypeControllerService
  ) {}
  onQuantityChange(qtd: any) {
    this.activeSaleItem.totalPrice = qtd * this.activeSaleItem.price;
  }
  onProductChange(id: any) {
    this.productController.getProduct(id).subscribe((result) => {
      this.activeSaleItem.product = result;
      this.activeSaleItem.price = result.price;
      this.productTypeController
        .getProductTypeById(this.activeSaleItem.product.type_id)
        .subscribe((result) => {
          this.activeSaleItem.productType = result;
        });
    });
  }
  onSubmit() {
    let productType: ProductType;

    let _product = new ProductSold(
      this.productSold.length + 1,
      this.activeSaleItem.product,
      this.activeSaleItem.productType,
      this.activeSaleItem.price,
      this.activeSaleItem.quantity,
      this.activeSaleItem.totalPrice
    );

    this.productSold = this.productSold.concat(_product);
    console.log(this.productSold);
  }
  onSale() {
    let dialogRef = this.dialog.open(SalesDialogComponent, {
      width: '300px',
      data: {
        amount: this.getTotal(),
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      const venda: Sale = new Sale();
      venda.amount = result.amount;
      venda.amount_paid = result.amount_paid;
      venda.difference = result.difference;
      venda.total_tax = this.getTotalTax();
      venda.products_solds = JSON.stringify(this.productSold);

      this.saleController.addSale(venda).subscribe((response: any) => {
        this.saleController.storage.message = response.message;
        this.snackBar.open('Venda realizada com sucesso!', 'Sucesso', {
          duration: 2000,
        });
        this.startSale();
      });
    });
  }
  startSale() {
    this.activeSale = new Sale();
    this.activeSaleItem = new SaleForm();
    this.productSold = [];
    this.activeSaleItem.id.focus();
  }
  getTotal(): number {
    this.activeSale.amount = this.productSold
      .map((t) => t.totalPrice)
      .reduce((acc, value) => acc + value, 0);
    return this.activeSale.amount;
  }
  getTotalTax(): number {
    this.activeSale.total_tax = this.productSold
      .map((t) => t.taxValue)
      .reduce((acc, value) => acc + value, 0);
    return this.activeSale.total_tax;
  }
}
