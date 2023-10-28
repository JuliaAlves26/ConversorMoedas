import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';
import {BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule } from '@angular/material/icon';
import {MatTableModule } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {MatFormFieldModule } from '@angular/material/form-field';
import {NgModule } from '@angular/core';
import {PrincipalComponent } from './principal/principal.component';
import {RodapeComponent } from './rodape/rodape.component';
import {TopoComponent } from './topo/topo.component';
import {ConverterMoedasComponent } from './converter-moedas/converter-moedas.component';
import {HistoricoConversoesComponent } from './historico-conversoes/historico-conversoes.component';
import {ListarMoedasComponent } from './listar-moedas/listar-moedas.component';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PrincipalComponent,
    RodapeComponent,
    ConverterMoedasComponent,
    HistoricoConversoesComponent,
    ListarMoedasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatMenuModule,
    MatIconModule,
    MatTableModule, 
    MatPaginatorModule,
    MatFormFieldModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

