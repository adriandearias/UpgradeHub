import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { Observable, catchError, map, mergeMap, of } from 'rxjs';
import { environment } from 'src/environments/environment';

//! import * as dataRaw from '../../../data/tracks.json'

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  // dataTracksTrending$:Observable<TracksModel[]> = of([])
  // dataTracksRandom$:Observable<any> = of([])
  private readonly URL = environment.api

  constructor(private http: HttpClient) { 
    //! const { data }:any = (dataRaw as any).default;
    //! this.dataTracksTrending$ = of(data)
    //! this.dataTracksRandom$ = new Observable((observer) =>{
    //!   const trackExample: TracksModel = {
    //!     _id:9,
    //!     name: 'High on life',
    //!     album: 'Martin Garrix',
    //!     url: 'http://',
    //!     cover: 'data:image/jpeg;base64,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'
    //!   }
    //!   setTimeout(() => {
    //!     observer.next([trackExample])
    //!   }, 3500)
    //! })
  
  }

  private skipById(listTracks: TracksModel[], id: number):Promise<TracksModel[]> {
    return new Promise((resolve, reject) =>{
      const listTmp = listTracks.filter(a => a._id !== id)
      resolve(listTmp)
    })
  }

  //* @return todas las canciones
  getAllTracks$(): Observable<any>{
    return this.http.get(`${this.URL}/tracks`
    // ,{
    //   headers: new HttpHeaders({authorization: 'Bearer TOKEN'})}
      )
    .pipe(
      map(({ data }: any) =>{
        console.log(data);
        
        return data
      })
    )
  }
  //* @return canciones random
  getAllRandom$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
      .pipe(
        mergeMap(({ data }: any) => this.skipById(data, 2)),
        // map((dataRevertida) => { //TODO aplicar un filter comun de array
        //   return dataRevertida.filter((track: TrackModel) => track._id !== 1)
        // })
        catchError((err) => {
          const { status, statusText } = err;
          return of([])
        })
      )
  }
}
