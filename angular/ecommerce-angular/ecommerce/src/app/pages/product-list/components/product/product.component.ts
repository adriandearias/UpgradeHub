import { ProductI } from './../../../../core/product.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ecom-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  //! El decorador input permite recibir valores de entrada desde el componente padre,
  //! Esos valores pueden ser
  //! - De cualquier tipo
  //! - Todos los inputs que queramos
  @Input() public productToShow?: ProductI;
  //! El decortador output nos premite transmitir información a un componente
  @Output() public onRemoveProduct = new EventEmitter<void>();
  // @Input() public hasStock?: boolean;

  ngOnInit(): void{
    console.log('Init product');
    
  }

  public removeProduct (){
    this.onRemoveProduct.emit();
  }
}
