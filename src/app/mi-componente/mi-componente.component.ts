import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {

  edad: number;
  nombres: Array<string>;

  constructor() {
    this.edad = 20;
    this.nombres = ['AAA','EEE','III','OOO','UUU'];
   }

  ngOnInit(): void {

  }

  aumentarEdad(){
    this.edad++;
  }
  disminuirEdad(){
    this.edad--;
  }

}
