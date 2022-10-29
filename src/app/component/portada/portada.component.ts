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

  ngOnInit(): void {
  }

  alimentos:boolean;
  abrigo:boolean;
  trabajo:boolean;

  alimentoActivo:number;
  abrigoActivo:number;
  trabajoActivo:number;

  abrirAlimento(){
    this.alimentos = true;
    this.abrigo = false;
    this.trabajo = false;
    this.servicioParametros.disparadorPararmetro.emit({
      data:false
    });
    this.alimentoActivo = 1;
    this.abrigoActivo = 0
    this.trabajoActivo = 0
  }

  abrirAbrigo(){
    this.abrigo = true;
    this.alimentos = false;   
    this.trabajo = false;
    this.servicioParametros.disparadorPararmetro.emit({
      data:false
    });
    this.abrigoActivo = 1
    this.alimentoActivo = 0;
    this.trabajoActivo = 0;

  }

  abrirTrabajo(){
    this.trabajo = true;
    this.alimentos = false;
    this.abrigo = false;
    this.servicioParametros.disparadorPararmetro.emit({
      data:false
    });
    this.trabajoActivo = 1;
    this.alimentoActivo = 0;
    this.abrigoActivo = 0;
    
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
