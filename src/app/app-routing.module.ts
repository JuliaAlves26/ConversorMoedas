import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ListarMoedasComponent } from './listar-moedas/listar-moedas.component';
import { ConverterComponent } from './converter-moedas/converter-moedas.component';
import { HistoricoConversoesComponent } from './historico-conversoes/historico-conversoes.component';


const routes: Routes = [
  {path: "", redirectTo: 'principal', pathMatch: 'full'},
  {path: "principal", component: PrincipalComponent},
  {path: "listar-moedas", component: ListarMoedasComponent},
  {path: "converter-moedas", component: ConverterComponent},
  {path: "historico-moedas", component: HistoricoConversoesComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }