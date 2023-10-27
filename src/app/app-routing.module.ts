import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  {path: "", redirectTo: 'principal', pathMatch: 'full'},
  {path: "principal", component: PrincipalComponent},
  {path: "table", component: TableComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
