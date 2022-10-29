import { Component, Input, OnInit } from '@angular/core';
import { ServiceParametrosService } from 'src/app/services/service-parametros.service';

@Component({
  selector: 'app-alimento',
  templateUrl: './alimento.component.html',
  styleUrls: ['./alimento.component.scss']
})
export class AlimentoComponent implements OnInit {

  constructor(private servicioParametros:ServiceParametrosService) { }

  @Input()
  alimentos:boolean = false;

  lacteos:boolean;
  huevos:boolean;
  carnes:boolean;

  lacteosActivo:number;
  huevosActivo:number;
  carnesActivo:number;

  ngOnInit(): void {
    this.servicioParametros.disparadorPararmetro.subscribe(data => {
      this.lacteos = false;
      this.huevos = false;
      this.carnes = false;
    })
   
  }


  abrirLacteosAnimales(){
    this.lacteos = true;
    this.huevos = false;
    this.carnes = false;
    this.lacteosActivo = 1;
    this.huevosActivo = 0;
    this.carnesActivo = 0;
  }

  
  abrirHuevosAnimales(){
    this.huevos = true;
    this.lacteos = false;
    this.carnes = false;
    this.lacteosActivo = 0;
    this.huevosActivo = 1;
    this.carnesActivo = 0;
  }

  abrirCarnesAnimales(){
    this.carnes = true
    this.lacteos = false;
    this.huevos = false;
    this.lacteosActivo = 0;
    this.huevosActivo = 0;
    this.carnesActivo = 1;
  }



}
