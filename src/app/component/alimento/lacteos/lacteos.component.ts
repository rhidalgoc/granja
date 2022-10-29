import { Component, Input, OnInit } from '@angular/core';
import { ServiceParametrosService } from 'src/app/services/service-parametros.service';

@Component({
  selector: 'app-lacteos',
  templateUrl: './lacteos.component.html',
  styleUrls: ['./lacteos.component.scss']
})
export class LacteosComponent implements OnInit {

  constructor() { 
  
  }

@Input()
lacteos:boolean = false;

  ngOnInit(): void {

  }

  playSound(num: number){

    let audio = new Audio();

    if(num == 1) {
      audio.src = "../../../../assets/sonidos/vaca 3.wav";
    }

    if(num == 2) {
      audio.src = "../../../../assets/sonidos/cabra 1.wav";
    }

    if(num == 3) {
      audio.src = "../../../../assets/sonidos/burro.wav";
    }

    audio.load();
    audio.play();
  }
}
