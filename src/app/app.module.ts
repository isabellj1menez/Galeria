import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectivabasicaComponent } from './components/directivabasica/directivabasica.component';
import { CambiocolorDirective } from './directives/cambiocolor.directive';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { CambiarimagenesDirective } from './directives/cambiarimagenes.directive';

@NgModule({
  declarations: [
    // pipes, componentes,
    AppComponent,
    DirectivabasicaComponent,
    CambiocolorDirective,
    GaleriaComponent,
    CambiarimagenesDirective
  ],
  imports: [
    // librerias externas que no estan en el core de angular
    BrowserModule
  ],
 
  providers: [ //servicios
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
