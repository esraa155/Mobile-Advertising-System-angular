import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


export interface UserData {
  id: string;
  lac_cell: string;
}

/** Constants used to fill up our data base. */
const lac_cells: string[] = [
  '5521-2220',
  '5523-6220',
  '5522-6220',
  '5121-6222',
  '2131-6240',
  '1233-1232',
  '2345-5672'
];

@Component({
  selector: 'app-cells-table',
  templateUrl: './cells-table.component.html',
  styleUrls: ['./cells-table.component.scss']
})
export class CellsTableComponent implements AfterViewInit {
  id:number = 5;
  title!: string;
  displayedColumns: string[] = ['id', 'LAC-Cell', 'action'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
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

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const lac_cell =
  lac_cells[Math.round(Math.random() * (lac_cells.length - 1))] 

  return {
    id: id.toString(),
    lac_cell: lac_cell
  };
}
