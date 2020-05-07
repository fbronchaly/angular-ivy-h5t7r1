import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
a;
b;
c;

  constructor() {}

  ngOnInit() { 
    this.contador24;
  }

  contador24 = ()  =>{
    for (let i=0;    i=24;   i++){
     this.gestionHoras()
    }

  }



   gestionHoras = () => {
    this.c++;
    // Módulo contador de horas 
    if (this.b == 50) {
        this.b = 0;
    }

    if (this.c == 6) {
       this.a++;
        this.c = 0;
        this.c = 0;
    }

    this.b = this.b + 10;

    let horaActual2 = this.a.toString().padStart(2, 0);;
    let finalMinutos = this.b.toString().padStart(2, 0);;
    console.log(horaActual2, finalMinutos);
};

}