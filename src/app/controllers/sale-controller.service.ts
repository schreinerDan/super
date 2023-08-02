import { Injectable } from '@angular/core';
import { SalesService } from '../services/sales.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Sale } from '../models/sale';
import { StorageService } from '../shared/storage.service';

@Injectable({
  providedIn: 'root'
})
export class SaleControllerService {

  constructor(public salesService:SalesService,public storage:StorageService,private router: Router) { }




  getAllSales():Observable<Sale[]>{
    return this.salesService.getAll();
  }



  addSale(data:any): Observable<Sale>{
    return this.salesService.create(data);
  }

}
