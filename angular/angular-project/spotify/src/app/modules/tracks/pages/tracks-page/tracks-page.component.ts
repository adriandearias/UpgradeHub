import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json'
import { TracksModel } from '@core/models/tracks.model';


@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.scss']
})
export class TracksPageComponent implements OnInit{
  mockTracksList:Array<TracksModel> = [
    
  ]

  constructor() {}

  ngOnInit(): void {
    //así podemos ver el objeto que traemos en consola
    const { data }: any = (dataRaw as any).default
    console.log(data);
    this.mockTracksList = data;
  }
}
