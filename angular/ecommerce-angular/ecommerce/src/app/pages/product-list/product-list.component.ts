import { productsData } from './../../core/product.data';
import { Component } from '@angular/core';

@Component({
  selector: 'ecom-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  public products = productsData;
  public inputValue: string = 'Valor Inicial';
  public originalProducts = productsData;

  public removeProduct(id: string){
    this.products = this.products.filter(product => product.id !== id);
    console.log(`Remove product ${id}`);
  }

  public filterProducts(){
    this.products = this.originalProducts.filter(product =>{
       product.name.toLowerCase().includes(this.inputValue.toLowerCase())
    });
  }
}
