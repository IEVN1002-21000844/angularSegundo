import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgModel, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';

interface Usuarios{
  nombre:string;
  apellidop:string;
  apellidom:string;
  dia:string;
  mes:string;
  anio:string;
  sexos:string;
}

@Component({
  selector: 'app-ejemplo1',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './zodicao.component.html',
  styles: './zodicao.component.css'
})

export default class Zodicao {
  formGroup!:FormGroup;

  nombreR = '';
  edadR = 0;
  signoR = '';
  imgR='';
  
  datos:Usuarios={
    nombre: '',
    apellidop: '',
    apellidom: '',
    dia: '',
    mes: '',
    anio: '',
    sexos: ''
  }

  constructor(private fb:FormBuilder) { }

    ngOnInit(): void{
      this.formGroup=this.initForm();
    }
    initForm():FormGroup{
      return this.fb.group({
        nombre:[''],
        apellidop:[''],
        apellidom:[''],
        dia:[''],
        mes:[''],
        anio:[''],
        sexos:[''],
      })
    }

    onSubmit():void{
      const{nombre, apellidop, apellidom, dia, mes, anio, sexos} = this.formGroup.value;
      this.datos.nombre= nombre;
      this.datos.apellidop= apellidop;
      this.datos.apellidom= apellidom;
      this.datos.dia= dia;
      this.datos.mes= mes;
      this.datos.anio= anio;
      this.datos.sexos= sexos;

      this.nombreR = nombre;
      this.edadR = this.edadCalculo(anio);
      this.signoR = this.zodiac(anio);
      this.imgR = this.imagenesZ(this.signoR);
      console.log(this.formGroup.value);
      console.log(this.edadR, this.signoR);

      const fechaNacimiento = new Date(anio, mes - 1, dia);
      const hoy = new Date();
      this.edadR = hoy.getFullYear() - fechaNacimiento.getFullYear();
      
      if (mes > hoy.getMonth() + 1 || (mes === hoy.getMonth() + 1 && dia > hoy.getDate())) {
        this.edadR--;
      }
  


    }

    edadCalculo(year:number):number{
      return 2024 - year;
    }

    zodiac(year:number):string{
      let verdad = '';

      const zodiaco:{[nombre: string]: number[]} =  {
        'Rata': [1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020],
        'Buey': [1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021],
        'Tigre': [1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022],
        'Conejo': [1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023],
        'Dragón': [1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024],
        'Serpiente': [1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025],
        'Caballo': [1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026],
        'Cabra': [1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027],
        'Mono': [1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028],
        'Gallo': [1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029],
        'Perro': [1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030],
        'Cerdo': [1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031],
      };

      
      
      
      Object.keys(zodiaco).forEach(signo => {
        zodiaco[signo].forEach(anio => {
          if(year === anio){
            verdad = signo;
          }
        });
      });
      return verdad;
    }

    imagenesZ(tipo: string): string {
      let imagenZ = '';
    
      const imagen: { [tipo: string]: string } = {
        'Rata': 'https://es.astrologyk.com/img/es/chino/rata.jpg',
        'Buey': 'https://es.astrologyk.com/img/es/chino/buey.jpg',
        'Tigre': 'https://es.astrologyk.com/img/es/chino/tigre.jpg',
        'Conejo': 'https://es.astrologyk.com/img/es/chino/conejo.jpg',
        'Dragón': 'https://es.astrologyk.com/img/es/chino/dragon.jpg',
        'Serpiente': 'https://es.astrologyk.com/img/es/chino/serpiente.jpg',
        'Caballo': 'https://es.astrologyk.com/img/es/chino/caballo.jpg',
        'Cabra': 'https://es.astrologyk.com/img/es/chino/cabra.jpg',
        'Mono': 'https://es.astrologyk.com/img/es/chino/mono.jpg',
        'Gallo': 'https://es.astrologyk.com/img/es/chino/gallo.jpg',
        'Perro': 'https://es.astrologyk.com/img/es/chino/perro.jpg',
        'Cerdo': 'https://es.astrologyk.com/img/es/chino/cerdo.jpg',
      };
    
      Object.keys(imagen).forEach(signo => {
        if (tipo === signo) {  
          imagenZ = imagen[signo];  
        }
      });
    
      return imagenZ; 
    }
    
}