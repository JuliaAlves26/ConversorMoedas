import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PrincipalService } from '../principal/principal.service';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';


export interface UserData {
  simbolo: string;
  nome: string;
}
export interface SimboloCurrencies {
  simbolo: string;
  nome: string;
}

export interface NomeCurrencies {
  nome: string;
}

@Component({
  selector: 'app-listar-moedas',
  templateUrl: './listar-moedas.component.html',
  styleUrls: ['./listar-moedas.component.css'],

})


export class ListarMoedasComponent implements OnInit {
  displayedColumns: string[] = ['simbolo', 'nome'];
  dataSource: MatTableDataSource<UserData> = new MatTableDataSource<UserData>([]); pageSize: number = 20;

  @ViewChild('input', { static: true }) input: HTMLInputElement | undefined;
  @ViewChild(MatPaginator, { static: true }) paginator?: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort?: MatSort | undefined;


  constructor(private principalService: PrincipalService) {
    this.dataSource = new MatTableDataSource<UserData>([]);
  }


  ngOnInit() {
    this.principalService.NomeCurrencies().subscribe(
      (response) => {
        if (response.result === 'success' && response.supported_codes) {
          const currenciesArray: UserData[] = response.supported_codes.map((currency: any) => {
            return {
              simbolo: currency[0],
              nome: currency[1]
            };
          });

          this.dataSource = new MatTableDataSource<UserData>(currenciesArray);

          if (this.paginator) {
            this.dataSource.paginator = this.paginator;



          } if (this.sort) {
            this.dataSource.sort = this.sort;
          }

          this.dataSource.filterPredicate = (data: UserData, filter: string) => {
            const dataStr = `${data.simbolo.toLowerCase()} ${data.nome.toLowerCase()}`;
            return dataStr.indexOf(filter) !== -1;
          };
        }
      },
      (error) => {
        console.error('Erro ao buscar os dados da API', error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


