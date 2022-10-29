import { Component, Input, OnInit } from '@angular/core';
import { ServiceParametrosService } from 'src/app/services/service-parametros.service';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.scss']
})
export class TrabajoComponent implements OnInit {

  constructor() { }

  @Input()
  trabajo:boolean = false;

  ngOnInit(): void {

  }

  playSound(num: number){

    let audio = new Audio();

    if(num == 1) {
      audio.src = "../../../../assets/sonidos/galopar.mp3";
    }

    if(num == 2) {
      audio.src = "../../../../assets/sonidos/burro.wav";
    }

    if(num == 3) {
      audio.src = "../../../../assets/sonidos/vaca 3.wav";
    }

    audio.load();
    audio.play();
  }

}
