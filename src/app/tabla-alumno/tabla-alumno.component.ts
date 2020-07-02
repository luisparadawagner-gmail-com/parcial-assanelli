import { Component, OnInit } from '@angular/core';
import { Alumno } from '../Clase/Alumno';
import { Router, ActivatedRoute } from '@angular/router';
import { ComponentConsultarService } from '../Servicio/component-alumno-service';

@Component({
  selector: 'app-tabla-alumno',
  templateUrl: './tabla-alumno.component.html',
  styleUrls: ['./tabla-alumno.component.css']
})
export class TablaAlumnoComponent implements OnInit {

  displayedColumns: string[] = ['Nombre', 'Apellido', 'Edad', 'Materia', 'Fecha Cursada', 'Editar' ];
  dataSource: Alumno [] = [];

  constructor(private componentConsultarService : ComponentConsultarService, private router: Router) { }

  ngOnInit(): void {
    this.getAlumno(); 
  }

    getAlumno() {
      this.componentConsultarService.getAlumno().subscribe((alumnos) => {
        debugger;
        this.dataSource = alumnos;
         
  
      });
    }
    
    editar(element){
      debugger;
      this.router.navigate(['/crear-alumno-component', element])

  }

}
