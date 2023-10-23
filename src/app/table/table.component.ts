import {Component, ViewChild, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule, MatTableDataSource, MatTableDataSourcePaginator} from '@angular/material/table';
import {MatSortModule, MatSort} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule, MatPaginator} from '@angular/material/paginator';
import { PrincipalService } from 'src/app/principal/principal.service';


export interface UserData {
  simbolo: string;
  nome: string;
}

@Component({
  selector: 'app-table',
  styleUrls: ['table.component.css'],
  templateUrl: 'table.component.html',
  })
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['simbolo', 'nome'];
  dataSource: MatTableDataSource<UserData>= new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  //constructor (private principalService: PrincipalService) {}
  

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
