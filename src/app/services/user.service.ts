import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(environment.api+ '/products/get/');
  }
  login(data:any): Observable<any> {
    return this.http.post<any>(environment.api+ 'users/login',JSON.stringify(data));
  }

  get(data:any): Observable<any[]> {
    return this.http.get<any[]>(environment.api+ 'users/get');
  }
}
