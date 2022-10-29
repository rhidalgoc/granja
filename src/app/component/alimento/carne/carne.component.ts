import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carne',
  templateUrl: './carne.component.html',
  styleUrls: ['./carne.component.scss']
})
export class CarneComponent implements OnInit {

  constructor() { }

  @Input()
  carnes:boolean = false;

  ngOnInit(): void {
  }

  playSound(num: number){

    let audio = new Audio();

    if(num == 1) {
      audio.src = "../../../../assets/sonidos/vaca 3.wav";
    }

    if(num == 2) {
      audio.src = "../../../../assets/sonidos/chancho 5.wav";
    }

    if(num == 3) {
      audio.src = "../../../../assets/sonidos/gallina 2.wav";
    }

    if(num == 4) {
      audio.src = "../../../../assets/sonidos/PATO.mp3";
    }

    audio.load();
    audio.play();
  }

}
