import { Component } from '@angular/core';
import { AvengersInterface } from '../core/avengers.interface'
import { avengersData } from '../core/avengers.data'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public avengers = avengersData;
  public avengersActive: number = 0;
  public activeAvenger(avengers: AvengersInterface){
    if (avengers.isActive) {
      avengers.isActive = false;
      this.avengersActive--
      console.log('active on click');
    }
    else{
      avengers.isActive = true;
      this.avengersActive++;
    }
  }
}
