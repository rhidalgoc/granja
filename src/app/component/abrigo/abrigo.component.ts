import { Component, Input, OnInit } from '@angular/core';
import { ServiceParametrosService } from 'src/app/services/service-parametros.service';

@Component({
  selector: 'app-abrigo',
  templateUrl: './abrigo.component.html',
  styleUrls: ['./abrigo.component.scss']
})
export class AbrigoComponent implements OnInit {

  constructor(private servicioParametros:ServiceParametrosService) { }

  
  @Input()
  abrigo:boolean = false;

  lana:boolean;
  cuero:boolean;

  lanasActivo:number;
  cuerosActivo:number;


  ngOnInit(): void {
    this.servicioParametros.disparadorPararmetro.subscribe(data => {
      this.lana = false;
      this.cuero = false;
    })
  }

  abrirLanaAnimales(){
    this.lana = true;
    this.cuero = false;
    this.lanasActivo = 1;
    this.cuerosActivo = 0;
  }

  abrirCueroAnimales(){
    this.cuero = true;
    this.lana = false;
    this.lanasActivo = 0;
    this.cuerosActivo = 1;
  }

}
