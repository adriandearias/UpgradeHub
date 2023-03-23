import { AvengersInterface } from '../../../core/avengers.interface';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-avenger',
  templateUrl: './avenger.component.html',
  styleUrls: ['./avenger.component.scss']
})
export class AvengerComponent {
  @Input() public avenger?: AvengersInterface;
  @Output() public onActiveAvenger = new EventEmitter<void>()
  
  public activeAvenger(){
    this.onActiveAvenger.emit()
  }
}
 