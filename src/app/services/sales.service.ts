import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sale } from '../models/sale';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(environment.api+ 'sales/get');
  }

  getById(id:any): Observable<Sale> {
    return this.http.get<Sale>(environment.api+ 'sales/get/'+id);
  }
   create(data:any): Observable<any> {
    return this.http.post<any>(environment.api+ 'sales/add', JSON.stringify(data));
  }

  findAll(): Observable<Sale[]> {
    return this.http.get<Sale[]>(environment.api+ 'sales/get');
  }
  delete(id:number): Observable<any> {


    return this.http.delete<any>(environment.api+ 'sales/'+id );
  }

}
