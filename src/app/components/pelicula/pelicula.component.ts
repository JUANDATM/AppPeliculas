import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula: any;
  regresarA: string = "";
  busqueda: string = "";


  constructor( public ps: PeliculasService, public router: ActivatedRoute) {

    this.router.params.subscribe(parametros => {

      console.log(parametros);
      this.regresarA = parametros['pag'];

      if (parametros['busqueda']) {
        this.busqueda = parametros['busqueda']
      }

      this.ps.getPelicula(parametros['id']).subscribe(pelicula => {
        this.pelicula = pelicula;
        console.log(this.pelicula);
      });
    });
    }

  ngOnInit() {
  }

}
