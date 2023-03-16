import { productsData } from './../../core/product.data';
import { Component } from '@angular/core';

@Component({
  selector: 'ecom-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  public products = productsData;

  public removeProduct(id: string){
    console.log(`Remove product ${id}`);
    
  }
}
