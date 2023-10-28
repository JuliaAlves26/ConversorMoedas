import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PrincipalService } from '../principal/principal.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

export interface UserData {
  simbolo: string;
  nome: string;
}


@Component({
  selector: 'app-listar-moedas',
  templateUrl: './listar-moedas.component.html',
  styleUrls: ['./listar-moedas.component.css']
})


export class ListarMoedasComponent implements OnInit {
  displayedColumns: string[] = ['simbolo', 'nome'];
  dataSource: MatTableDataSource<UserData>= new MatTableDataSource<UserData>([]);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

    constructor(private principalService: PrincipalService) {
      this.dataSource = new MatTableDataSource<UserData>([]);
    }

    ngOnInit() {
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
      if (this.sort) {
        this.dataSource.sort = this.sort;
      }

          // this.principalService.NomeMoeda().subscribe(
    //   (response) => {
    //     if (response.result === 'success' && response.supported_codes) {
    //       const currenciesArray: UserData[] = response.supported_codes.map((currency: any) => {
    //         return {
    //           simbolo: currency[0],
    //           nome: currency[1]
    //         };
    //       });
    //       this.dataSource.data = currenciesArray;
    //     }},
    // );}
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    }
  }


