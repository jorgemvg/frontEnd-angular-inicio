import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleados/empleado.component';
import { EmpresaComponent } from './empresas/empresa.component';
import { routing, appRoutingProviders } from './app.routing';
import {HomeComponent} from './home/home.component';
import {ContactoComponent} from './contacto/contacto.component';
import { ErrorComponent } from './error/error.component';
import { ConversorPipe } from './pipes/prueba.pipe';

import { HttpClientModule } from '@angular/common/http';
import {MaterialModule} from './material/material.module';

import {MenulateralComponent} from './menulateral/menulateral.component';
import {MenuListItemComponent} from './menulateral-item/menu-list-item.component';

import { NavService } from "./nav.service";

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    EmpresaComponent,
    HomeComponent,
    ContactoComponent,
    ErrorComponent,
    ConversorPipe,
    MenulateralComponent,
    MenuListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    MaterialModule
  ],
  providers: [appRoutingProviders, NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
