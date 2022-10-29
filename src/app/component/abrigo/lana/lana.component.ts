import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lana',
  templateUrl: './lana.component.html',
  styleUrls: ['./lana.component.scss']
})
export class LanaComponent implements OnInit {

  constructor() { }
  @Input()
  lana:boolean = false;


  ngOnInit(): void {
  }

  playSound(){

    let audio = new Audio();
    audio.src = "../../../../assets/sonidos/OVEJA.wav";
    audio.load();
    audio.play();
  
  }


}
