import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearAlumnoComponent } from './crear-alumno/crear-alumno.component';
import { TablaAlumnoComponent } from './tabla-alumno/tabla-alumno.component';

const routes: Routes = [
  {path: 'crear-alumno', component: CrearAlumnoComponent},
  {path: 'tabla-alumno', component: TablaAlumnoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
