import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuero',
  templateUrl: './cuero.component.html',
  styleUrls: ['./cuero.component.scss']
})
export class CueroComponent implements OnInit {

  constructor() { }

  @Input()
  cuero:boolean = false;
  
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

    audio.load();
    audio.play();
  }

}
