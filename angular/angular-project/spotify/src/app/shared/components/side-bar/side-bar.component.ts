import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  // public linksMenu: Array<any> = [
  //   {
  //     name: 'Home',
  //     icon: 'uil-estate'
  //   },
  //   {
  //     name: 'Buscar',
  //     icon: 'uil-estate'
  //   }
  // ]

  mainMenu: {
    defaultOptions: Array<any>;
    accesLink: Array<any>;
  } = { defaultOptions: [], accesLink: [] };
  
  customOptions: Array<any> = [];

  constructor() {}

  ngOnInit(): void {}
}
