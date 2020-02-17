import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

// IMPORTAR RUTAS
import { ROUTES } from './app.routes';
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { GaleriaComponent } from './components/home/galeria.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    PeliculaComponent,
    PeliculaImagenPipe,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
