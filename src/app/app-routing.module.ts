import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlimentoComponent } from './component/alimento/alimento.component';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';
import { PortadaComponent } from './component/portada/portada.component';

const routes: Routes = [
  {path:'', component:PortadaComponent},
  {path: 'portada', component:PortadaComponent},
  {path: 'alimentos', component:AlimentoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
