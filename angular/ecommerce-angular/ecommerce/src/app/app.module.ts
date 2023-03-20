import { ProductListModule } from './pages/product-list/product-list.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }