import { SaleProductComponent } from './product/sale-product/sale-product.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './layout/header/header.component';
import { LoginComponent } from './user/login/login.component';
import {MatInputModule} from '@angular/material/input';
import { UserService } from './services/user.service';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ListProductsComponent } from './product/list-products/list-products.component';
import { ProductCardComponent } from './product/components/product-card/product-card.component';
import { IndexProductComponent } from './product/index-product/index-product.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatOptionModule } from '@angular/material/core';
import { AddProductTypeComponent } from './product-type/add-product-type/add-product-type.component';
import { IndexProductTypeComponent } from './product-type/index-product-type/index-product-type.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ShoppingCartListComponent } from './shopping-cart/shopping-cart-list/shopping-cart-list.component';
import { SalesDialogComponent } from './sale/components/sales-dialog/sales-dialog.component';
import { IndexSaleComponent } from './sale/index-sale/index-sale.component';
import { AddSaleComponent } from './sale/add-sale/add-sale.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    LoginComponent,
    AddProductComponent,
    ListProductsComponent,
    ProductCardComponent,
    IndexProductComponent,
    AddProductTypeComponent,
    IndexProductTypeComponent,
    ShoppingCartListComponent,
    SaleProductComponent,
    SalesDialogComponent,
    IndexSaleComponent,
    AddSaleComponent







  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatDialogModule,
    MatSnackBarModule




  ],
  providers: [UserService,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
