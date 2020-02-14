import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  populares: any ;
  cartelera: any ;
  ninos: any ;

  constructor(public ps: PeliculasService) {
    this.ps.getCartelera()
        .subscribe( (data: any) => this.cartelera = data);

    this.ps.getPopulares()
        .subscribe( (data: any) => this.populares = data);

    this.ps.getPopularesNinos()
        .subscribe( (data: any) => this.ninos = data);
  }

}
