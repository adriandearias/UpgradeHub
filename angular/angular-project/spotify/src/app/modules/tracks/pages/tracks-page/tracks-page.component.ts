import { TracksModel } from './../../../../core/models/tracks.model';
import { TrackService } from './../../services/track.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
//! import * as dataRaw from '../../../../data/tracks.json'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.scss']
})
export class TracksPageComponent implements OnInit, OnDestroy{
  tracksTrending:Array<TracksModel> = []
  tracksRandom:Array<TracksModel> = []
  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService) {}

  ngOnInit(): void {
    
    this.trackService.getAllTracks$()
    .subscribe((response: TracksModel[]) =>{
      this.tracksTrending = response;
    })

    this.trackService.getAllRandom$()
    .subscribe((response: TracksModel[]) =>{
      this.tracksRandom = response;
    })

    // //así podemos ver el objeto que traemos en consola
    // const { data }: any = (dataRaw as any).default
    // console.log(data);
    // this.mockTracksList = data;

    //! const observer1$ = this.TrackService.dataTracksTrending$
    //! .subscribe(response =>{
    //!   this.tracksTrending = response,
    //!   this.tracksRandom = response
    //!   console.log('Canciones trending ----->' , response);
    //! })

    //! const observer2$ = this.TrackService.dataTracksRandom$
    //! .subscribe(response =>{
    //!   this.tracksRandom = [... this.tracksRandom, ... response]
    //!   console.log('Cancion random entrando ----->' , response);
    //! })

    //! this.listObservers$ = [observer1$, observer2$]
  }


  async loadDataAll(): Promise<any> {
    this.tracksTrending = await this.trackService.getAllTracks$().toPromise()
  }

  loadDataRandom(): void {
    this.trackService.getAllRandom$()
      .subscribe((response: TracksModel[]) => {
        this.tracksRandom = response
      }, err => {
        console.log('ERROR DE CONEXIÓN!!');
        
      })
  }

  ngOnDestroy(): void {
    //! this.listObservers$.forEach(u => u.unsubscribe())
  }
}
