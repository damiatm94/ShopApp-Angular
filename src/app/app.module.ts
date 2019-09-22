import { ProductsService } from './products/services/products.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/components/products.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { OrdersComponent } from './orders/orders.component';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    WarehouseComponent,
    OrdersComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
