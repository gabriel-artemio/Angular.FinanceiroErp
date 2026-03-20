import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { Layout } from './layout/layout';
import { Paciente } from './pages/paciente/paciente';
import { Parametrizacao } from './pages/parametrizacao/parametrizacao';

@NgModule({
  declarations: [
    App,
    Login,
    Home,
    Login,
    Home,
    Layout,
    Paciente,
    Parametrizacao
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
