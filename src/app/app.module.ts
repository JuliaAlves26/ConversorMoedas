import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';
import {BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule } from '@angular/material/icon';
import {MatTableModule } from '@angular/material/table';
import {MatPaginatorModule } from '@angular/material/paginator';
import {MatFormFieldModule } from '@angular/material/form-field';
import {NgModule } from '@angular/core';
import {PrincipalComponent } from './principal/principal.component';
import {TopoComponent } from './topo/topo.component';
import {ConverterComponent} from './converter-moedas/converter-moedas.component';
import {HistoricoConversoesComponent} from './historico-conversoes/historico-conversoes.component';
import {ListarMoedasComponent } from './listar-moedas/listar-moedas.component';
import {MatInputModule } from '@angular/material/input';
import {FormsModule } from '@angular/forms';
import {MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PrincipalComponent,
    ConverterComponent,
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
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatSortModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

