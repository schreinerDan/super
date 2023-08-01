import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { ListProductsComponent } from './product/list-products/list-products.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { IndexProductComponent } from './product/index-product/index-product.component';
import { AddProductTypeComponent } from './product-type/add-product-type/add-product-type.component';
import { IndexProductTypeComponent } from './product-type/index-product-type/index-product-type.component';
import { SaleProductComponent } from './product/sale-product/sale-product.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'product/list', component: ListProductsComponent},
  {path: 'product/index', component: IndexProductComponent},
  {path: 'product/add', component: AddProductComponent},
  {path: 'product-type/add', component: AddProductTypeComponent},
  {path: 'product-type/index', component: IndexProductTypeComponent},
  {path: 'product/sale', component: SaleProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
