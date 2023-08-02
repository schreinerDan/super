import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SaleControllerService } from 'src/app/controllers/sale-controller.service';
import { Sale } from 'src/app/models/sale';

@Component({
  selector: 'app-index-sale',
  templateUrl: './index-sale.component.html',
  styleUrls: ['./index-sale.component.css']
})
export class IndexSaleComponent {
  public sales: Sale[]=[];


  public displayedColumns = ['id','sale_date','amount','amount_paid','difference','total_tax','products_solds','actions'];

  constructor(public saleController: SaleControllerService,private router:Router)
  {}
  ngOnInit(): void {
    this.getData();
  }

  getData() {

    this.saleController.getAllSales().subscribe((result)=>{
      this.sales=result;
    });
  }
  public addSale(){
    this.router.navigate(['/sale/add']);
  }





}

