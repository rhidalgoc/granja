import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';
import { PortadaComponent } from './component/portada/portada.component';

const routes: Routes = [
  {path:'', component:PortadaComponent},
  {path: 'portada', component:PortadaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
