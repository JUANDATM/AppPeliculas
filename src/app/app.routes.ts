import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

export const ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'search/:texto', component: SearchComponent},
  {path: 'pelicula/:id/:pag', component: PeliculaComponent},
  {path: 'pelicula/:id/:pag/:busqueda', component: PeliculaComponent},
  {path: '', pathMatch: 'full' , redirectTo: 'home'},
  {path: '**', pathMatch: 'full' , redirectTo: 'home'},
];
