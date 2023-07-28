
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





@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    LoginComponent,
    AddProductComponent,
    ListProductsComponent,
    ProductCardComponent




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
    MatCardModule


  ],
  providers: [UserService,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
