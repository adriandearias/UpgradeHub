import { AvengersInterface } from '../../../core/avengers.interface';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-avenger',
  templateUrl: './avenger.component.html',
  styleUrls: ['./avenger.component.scss']
})
export class AvengerComponent implements OnInit{
  @Input() public avenger?: AvengersInterface;
  @Output() public onActiveAvenger = new EventEmitter<void>()
  ngOnInit(): void {
    console.log('init avenger');
  }
  public activeAvenger(){
    this.onActiveAvenger.emit()
  }
}
