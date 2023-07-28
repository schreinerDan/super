import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { ListProductsComponent } from './product/list-products/list-products.component';
import { AddProductComponent } from './product/add-product/add-product.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'product/list', component: ListProductsComponent},
  {path: 'product/add', component: AddProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
