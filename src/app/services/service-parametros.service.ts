import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceParametrosService {

  constructor() { }

  @Output() disparadorPararmetro: EventEmitter<any> = new EventEmitter();
}
