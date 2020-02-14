import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  peliculasPopulares: any[] = [];
  cartelera: any[] = [];

  constructor(public ps: PeliculasService) {
    this.ps.getCartelera()
        .subscribe( (data:any) => {
         console.log('CARTELERA:', data);
         this.cartelera = data;
      });
  }

}
