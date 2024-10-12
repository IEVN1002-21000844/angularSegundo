import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgModel, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';

interface Usuarios{
  nombre:string;
  edad:number;
  email:string;
}

@Component({
  selector: 'app-ejemplo1',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ejemplo1.component.html',
  styles: './ejemplo1.component.css'
})
export class Ejemplo1Component {
  fromGroup! : FormGroup;
  materia = "pwa";
  tem=''
  alumnos:Usuarios={
    nombre: '',
    edad: 0,
    email:''
  }

  constructor(private fb:FormBuilder) { }

    ngOnInit(): void{
      this.fromGroup=this.initForm();
    }
    initForm():FormGroup{
      return this.fb.group({
        nombre:[''],
        edad:[''],
        email:[''],
      })
    }
    onSubmit():void{
      const{nombre,edad,email}=this.fromGroup.value;
      this.alumnos.nombre=nombre;
      this.alumnos.edad=edad;
      this.alumnos.email=email;
      let alumnoJSON=JSON.stringify(this.alumnos);

      console.log(this.fromGroup.value);

      localStorage.setItem('materia',this.materia);
      localStorage.setItem('alumno',alumnoJSON);
    }
    subImprimir():void{
      this.tem=localStorage.getItem('materia')!
      const alumnoGuardado=localStorage.getItem('alumno')
      if(alumnoGuardado){
        const alumno:Usuarios=JSON.parse(alumnoGuardado)
      }
    }
}