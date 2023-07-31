import { ProductModel} from '../models/product-model';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(environment.api+ 'products/get');
  }

   create(data:any): Observable<any> {
    return this.http.post<any>(environment.api+ 'products/add', JSON.stringify(data));
  }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.api+ 'products/get');
  }
  delete(id:number): Observable<any> {


    return this.http.delete<any>(environment.api+ 'products/'+id );
  }
}
