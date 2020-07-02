import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrearAlumnoComponent } from './crear-alumno/crear-alumno.component';
import { TablaAlumnoComponent } from './tabla-alumno/tabla-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearAlumnoComponent,
    TablaAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
