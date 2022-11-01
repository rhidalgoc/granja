import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceParametrosService } from 'src/app/services/service-parametros.service';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss']
})
export class PortadaComponent implements OnInit {

  constructor(private servicioParametros:ServiceParametrosService, public dialog: MatDialog, private router:Router) { }

  listProductos: any[] = [];

  ngOnInit(): void {
   
  }
  
  animalesMostrar:boolean;

  alimentos:boolean;
  abrigo:boolean;
  trabajo:boolean;

  alimentoActivo:number;
  abrigoActivo:number;
  trabajoActivo:number;


  abrirProducto(producto:number){
    let filter;

    this.animalesMostrar = false;
    this.servicioParametros.disparadorPararmetro.emit({
      data:false
    });

    if (producto == 1){
      this.alimentoActivo = 1;
      this.abrigoActivo = 0;
      this.trabajoActivo = 0;
      filter = "Alimento";
    } else if(producto == 2){
      this.alimentoActivo = 0;
      this.abrigoActivo = 1;
      this.trabajoActivo = 0;
      filter = "Abrigo";
    }else{
      this.alimentoActivo = 0;
      this.abrigoActivo = 0;
      this.trabajoActivo = 1;
      filter = "Trabajo";
    }

    this.servicioParametros.getProductos().subscribe((data)=>{
      this.listProductos = data.filter(d => d.categoria == filter);
    })   
  }

  openDialog():void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    })
  }

  abrirCuestionario(){
    window.open('https://preguntasyrespuestas-rhidalgo.netlify.app', "_blank");
  }

}
