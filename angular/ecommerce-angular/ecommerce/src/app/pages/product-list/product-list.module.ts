import { UppercaseDirective } from './directives/uppercase.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    UppercaseDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductListModule { }
