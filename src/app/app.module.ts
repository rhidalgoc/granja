import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaComponent } from './component/portada/portada.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import {MatMenuModule} from '@angular/material/menu';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';
import { ListadoImagenesComponent } from './component/listado-imagenes/listado-imagenes.component';
import { ListadoGenericoComponent } from './component/listado-generico/listado-generico.component';

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    ConfirmDialogComponent,
    ListadoImagenesComponent,
    ListadoGenericoComponent
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
    MatMenuModule,
    HttpClientModule

  ],
  entryComponents: [ConfirmDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
