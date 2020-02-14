import { Injectable } from '@angular/core';

import {HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


// tslint:disable-next-line: import-blacklist
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})

export class PeliculasService {
  private apikey: string = '149686482f06d811a4d245f24cbd6147';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }



  getPopulares(){
    let url = `${ this.urlMoviedb }/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=${this.apikey}&language=es`;

    return this.http.get( url )
                    .map( (res: any ) => res.results);
  }

  getPopularesNinos(){
    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;

    return this.http.get( url )
                    .map( (res: any ) => res.results);
  }


  buscarPelicula( texto: string ) {

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.get( url )
          .map( (res: any ) => res.results);
  }

  getCartelera(){
    let desde = new Date();
    let hasta = new Date();

    let desdeStr = [desde.getFullYear(), desde.getMonth() + 1 < 10 ? (desde.getMonth() + 1).toString().padStart(2, '0') : desde.getMonth() + 1, desde.getDate() < 10 ? (desde.getDate()).toString().padStart(2, '0') : desde.getDate()].join('-');
    let hastaStr = [hasta.getFullYear(), hasta.getMonth() + 1 < 10 ? (hasta.getMonth() + 1).toString().padStart(2, '0') : hasta.getMonth() + 1, hasta.getDate() < 10 ? (hasta.getDate()).toString().padStart(2, '0') : desde.getDate()].join('-');

    hasta.setDate(hasta.getDate() + 7 );

    const url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${hastaStr}&primary_release_date.lte=${desdeStr}&api_key=${this.apikey}&language=es`;

    return this.http.get( url )
                    .map( (res: any ) => res.results);
  }
}
