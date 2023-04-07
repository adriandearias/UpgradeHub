import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit{
  mockCover: any = {
    cover: 'yest',
    name:'test',
    album: 'test'
  }

  constructor(){

  }

  ngOnInit(): void {
    
  }
}
