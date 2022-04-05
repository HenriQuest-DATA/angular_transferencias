import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'extrato', pathMatch: 'full'},
  {path: 'extrato', component: ExtratoComponent},
  {path: 'transferencia', component: NovaTransferenciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //for root pois é um módulo principal, se fosse um módulo filho seria for child
  //esttou setando as minhas rotas
  exports: [RouterModule] //daí exportando elas para serem importadas pelo appmodule e disponibilizadas por todo o projeto
})

export class AppRoutingModule{

}
