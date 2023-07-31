import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductType } from '../models/product-type';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(environment.api+ 'product-types/get');
  }

   create(data:any): Observable<any> {
    return this.http.post<any>(environment.api+ 'product-types/add', JSON.stringify(data));
  }

  findAll(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(environment.api+ 'product-types/get');
  }
  delete(id:number): Observable<any> {


    return this.http.delete<any>(environment.api+ 'product-types/'+id );
  }

}
