import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg: string = ''
  @HostListener('error') handleError(): void{
    const eleNative = this.theHost.nativeElement
    console.log('ERROR: img -> broken:' ,this.theHost);
    // eleNative.src = '../../../assets/images/no-img.jpg'
    eleNative.src = this.customImg
  } 

  constructor(private theHost: ElementRef) { 
    
  }

}
