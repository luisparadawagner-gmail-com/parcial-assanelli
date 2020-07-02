import { Component, OnInit } from '@angular/core';
import  { FormBuilder } from '@angular/forms';

interface Materias {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.css']
})
export class CrearAlumnoComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
    materias : Materias[] = [
      { value : '0', viewValue : 'Matematica' },
      { value : '1', viewValue : 'Historia' },
      { value : '2', viewValue : 'Computacion' },
    ];

  alumnoForm = this.fb.group({
    nombre: [''],
    apellido: [''],
    edad: [''],
    materia: [''],
    fechaCursada: ['']

  })

  ngOnInit()  { }

  submit(){
    debugger;
    this.alumnoForm.value;

  }

}