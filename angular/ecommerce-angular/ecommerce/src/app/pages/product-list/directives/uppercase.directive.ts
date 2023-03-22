import { Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[ecomUppercase]'
})

//! HostBonding lo que nos permite es asociar el valor de una variable que definamos a cierta propiedad
//! de una etiqueta HTML, en este caso un <p></p>
export class UppercaseDirective {
  @HostBinding('style.text-transform') public textTransform: string = 'capitalize';
  //! HostListener nos permite asociar un evente del elemtno sobre el que aplica la directiva a una función que definamos.
  @HostListener('mouseenter') public onMouseEnter(){
    this.textTransform = 'uppercase'
  };
  @HostListener('mouseleave') public onMouseLeave(){
    this.textTransform = 'capitalize'
  };

  constructor() { }
}
