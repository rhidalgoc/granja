import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaComponent } from './component/portada/portada.component';
import { AlimentoComponent } from './component/alimento/alimento.component';
import { TrabajoComponent } from './component/trabajo/trabajo.component';
import { TransporteComponent } from './component/transporte/transporte.component';
import { AbrigoComponent } from './component/abrigo/abrigo.component';
import { LacteosComponent } from './component/alimento/lacteos/lacteos.component';
import { HuevoComponent } from './component/alimento/huevo/huevo.component';
import { CarneComponent } from './component/alimento/carne/carne.component';
import { LanaComponent } from './component/abrigo/lana/lana.component';
import { CueroComponent } from './component/abrigo/cuero/cuero.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import {MatMenuModule} from '@angular/material/menu';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';
import { ListadoImagenesComponent } from './component/listado-imagenes/listado-imagenes.component';

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    AlimentoComponent,
    TrabajoComponent,
    TransporteComponent,
    AbrigoComponent,
    LacteosComponent,
    HuevoComponent,
    CarneComponent,
    LanaComponent,
    CueroComponent,
    ConfirmDialogComponent,
    ListadoImagenesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule
  ],
  entryComponents: [ConfirmDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
