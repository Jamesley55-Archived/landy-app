import { TiktaktoComponent } from './tiktakto/tiktakto.component';
import { SonComponent } from './son/son.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MondeComponent } from './monde/monde.component';
import { EspaceComponent } from './espace/espace.component';
import { MemoireComponent } from './memoire/memoire.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent },
  { path: 'monde', component: MondeComponent },
  { path: 'espace', component: EspaceComponent },
  {path: "memoire", component: MemoireComponent}, 
  {path :"son", component:SonComponent}, 
  {path: "tiktakto" , component:TiktaktoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
