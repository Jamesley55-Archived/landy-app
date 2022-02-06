import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule
} from '@angular/material/card';
import { GameCardComponent } from './game-card/game-card.component';
import { EspaceComponent } from './espace/espace.component';
import { MondeComponent } from './monde/monde.component';
import { SonComponent } from './son/son.component';
import { TiktaktoComponent } from './tiktakto/tiktakto.component';
import { MemoireComponent } from './memoire/memoire.component';
import { MainPageComponent } from './main-page/main-page.component';
@NgModule({
  declarations: [
    AppComponent,
    GameCardComponent,
    EspaceComponent,
    MondeComponent,
    SonComponent,
    TiktaktoComponent,
    MemoireComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
