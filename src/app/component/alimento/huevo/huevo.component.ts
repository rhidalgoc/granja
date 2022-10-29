import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-huevo',
  templateUrl: './huevo.component.html',
  styleUrls: ['./huevo.component.scss']
})
export class HuevoComponent implements OnInit {

  constructor() { }

  @Input()
  huevos:boolean = false;

  ngOnInit(): void {
  }

  playSound(num: number){

    let audio = new Audio();

    if(num == 1) {
      audio.src = "../../../../assets/sonidos/gallina 2.wav";
    }

    if(num == 2) {
      audio.src = "../../../../assets/sonidos/ganzos 2.wav";
    }

    if(num == 3) {
      audio.src = "../../../../assets/sonidos/pavo.mp3";
    }

    audio.load();
    audio.play();
  }

}
