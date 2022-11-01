import { Component, Input, OnInit } from '@angular/core';
import { ServiceParametrosService } from 'src/app/services/service-parametros.service';

@Component({
  selector: 'app-listado-imagenes',
  templateUrl: './listado-imagenes.component.html',
  styleUrls: ['./listado-imagenes.component.scss']
})
export class ListadoImagenesComponent implements OnInit {

  constructor(private servicioParametros:ServiceParametrosService) {
   }

   @Input()
   animalesMostrar = false;
 
  @Input()
  productos: any[];

  @Input()
  animales: any[] = [];

  ngOnInit() {
    this.servicioParametros.disparadorPararmetro.subscribe(data => {
      this.animalesMostrar = false;
    })
  }

  abrirAnimal(idproducto:number, sonido:string) {
    
    let ini = this.productos[0];
    let ter = this.productos[this.productos.length-1]
    let prodActual = idproducto;
    const el: HTMLElement = document.getElementById(idproducto.toString());
    el.className = 'badge bg-danger';
    el.style.borderRadius = '10px'; 
   
    for(let i = ini.id; i <= ter.id; i++){
      if(i != prodActual){
        const el2: HTMLElement = document.getElementById(i.toString());
        el2.className = "None"; 
      }
    }

    this.animalesMostrar = true;
    this.servicioParametros.getAnimales().subscribe((data)=>{
      this.animales = data.filter(d => d.idproducto == idproducto);
    })   

    if(idproducto == 6 || idproducto == 7 || idproducto == 8){
      this.playSound(sonido);
    }
  }

  playSound(ruta: string){
    let audio = new Audio();
    audio.src = ruta;
    audio.load();
    audio.play();
  }
}
