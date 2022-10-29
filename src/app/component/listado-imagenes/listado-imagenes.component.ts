import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-imagenes',
  templateUrl: './listado-imagenes.component.html',
  styleUrls: ['./listado-imagenes.component.scss']
})
export class ListadoImagenesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  @Input()
  carnes:boolean = false;


  playSound(num: number){

    let audio = new Audio();

    if(num == 1) {
      audio.src = "../../../assets/sonidos/vaca 3.wav";
    }

    if(num == 2) {
      audio.src = "../../../assets/sonidos/chancho 5.wav";
    }

    if(num == 3) {
      audio.src = "../../../assets/sonidos/gallina 2.wav";
    }

    if(num == 4) {
      audio.src = "../../../assets/sonidos/PATO.mp3";
    }

    audio.load();
    audio.play();
  }

}
