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
import { MatFormFieldModule } from '@angular/material/form-field';
import {NgModule } from '@angular/core';
import {PrincipalComponent } from './principal/principal.component';
import {RodapeComponent } from './rodape/rodape.component';
import {TopoComponent } from './topo/topo.component';
import {TableComponent } from './table/table.component';




@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PrincipalComponent,
    RodapeComponent,
    TableComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


