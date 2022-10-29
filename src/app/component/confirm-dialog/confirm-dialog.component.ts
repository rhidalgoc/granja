import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MultipleSelectorModel } from './MultipleSelectorModel';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string) { }

  ngOnInit(): void {
  }

@Input()
  Seleccionados:MultipleSelectorModel[] = [];
@Input()
NoSeleccionados:MultipleSelectorModel[] = [
  {llave:1, valor:'Gallina', url:'https://st.depositphotos.com/1526816/2124/v/600/depositphotos_21243767-stock-illustration-a-hen-and-her-seven.jpg'},
  {llave:2, valor:'León', url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHK70kCQmPe4WpN9y1D5VZ-tywcRAPAZ-_8Q&usqp=CAU'},
  {llave:3, valor:'Pato', url:'https://img.freepik.com/vector-gratis/pato-lindo-blanco_1308-41058.jpg?w=360'},
  {llave:4, valor:'Jirafa', url:'https://img.freepik.com/vector-premium/cute-dibujos-animados-jirafa-aislado-sobre-fondo-blanco_29190-4965.jpg?w=2000'},
  {llave:5, valor:'Vaca', url:'https://static.vecteezy.com/system/resources/previews/006/325/863/non_2x/cow-cartoon-colored-clipart-illustration-free-vector.jpg'},
  {llave:6, valor:'Oveja', url:'https://img.freepik.com/vector-premium/linda-sonrisa-oveja-dibujos-animados_157186-369.jpg'},
  {llave:7, valor:'Caballo', url:'https://static.vecteezy.com/system/resources/previews/007/528/325/non_2x/horse-cartoon-colored-clipart-illustration-free-vector.jpg'}
];

correctas:MultipleSelectorModel[] =[
  {llave:1, valor:'', url:''},
  {llave:3, valor:'', url:''},
  {llave:5, valor:'', url:''},
  {llave:6, valor:'', url:''},
  {llave:7, valor:'', url:''},

]
  onClickNO():void {
    this.dialogRef.close();
  }

  cerrar(){
    this.dialogRef.close();
}

seleccionar(item:MultipleSelectorModel, index:number) {
  this.Seleccionados.push(item);
  this.NoSeleccionados.splice(index, 1);  // para que no se repita en los Seleccionados
}

seleccionarTodo(){
  this.Seleccionados.push(...this.NoSeleccionados);
  this.NoSeleccionados = [];     // Inicializar el arreglo a vacio a NoSeleccionados
}

deseleccionarTodo(){
  this.NoSeleccionados.push(...this.Seleccionados);
  this.Seleccionados = [];       // Inicializar el arreglo a vacio a Seleccionados
}

deseleccionar(item:MultipleSelectorModel, index:number){
  this.NoSeleccionados.push(item);
    this.Seleccionados.splice(index, 1);    // para que no se repita en los NoSeleccionados
}

validar(){
  
  if(this.Seleccionados.length > 0){
    const result = this.Seleccionados.filter(c=>this.correctas.some(s=>s.llave===c.llave));
    console.log('result ', result);
    console.log(this.Seleccionados);
    if(result.length === 5 && this.Seleccionados.length == 5 ){
      Swal.fire({
        title: 'EXCELENTE, ¡LO HAS LOGRADO!',
        width: 300,
        padding: '3em',
        color: '#fff',
        background: '#fff url(https://t3.ftcdn.net/jpg/05/07/90/94/360_F_507909483_W6ldhp2xpfI4CdCDufaJR2PO0brpYXRY.jpg)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://i.pinimg.com/originals/1b/a3/9e/1ba39e07810a0d7690b199d823d1ddfb.gif")
          left top
          no-repeat
        `
      })
    } else {
      Swal.fire({
        title: '¡INTENTALO DE NUEVO!',
        width: 300,
        padding: '3em',
        color: '#fff',
        background: '#fff url(https://st.depositphotos.com/1216711/3861/v/600/depositphotos_38610425-stock-illustration-illustration-of-cobweb.jpg)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://www.gifcen.com/wp-content/uploads/2022/03/venom-gif-5.gif")
          left top
          no-repeat
        `
      })
    }
  } else{
    Swal.fire('ATENCIÓN, !FALTAN ANIMALES POR SELECCIONAR!')
  }
  /*for (let animal of this.Seleccionados){
    console.log(animal.llave);
  }*/

}

}
