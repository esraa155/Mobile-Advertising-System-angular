import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RealTimeDialogueBoxComponent } from './real-time-dialogue-box/real-time-dialogue-box.component';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

///////////////////////////////////////////////////////////////////
///cells table

export interface PeriodicElement {
  position: number;
}

@Component({
  selector: 'app-real-time-locations',
  templateUrl: './real-time-locations.component.html',
  styleUrls: ['./real-time-locations.component.scss']
})
export class RealTimeLocationsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit', 'action'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  openDialog(): void {
    this.dialog.open(RealTimeDialogueBoxComponent,{
      width:'350px',
      data:"right click"
    })
    
  }
  

  ngOnInit(): void {
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
  
  ////////////////////////////////////////////////////////////////////////////////
}

/** Builds and returns a new User. */
function createNewUser(name: number): UserData {
  const process =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';
     const fruit
     =NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
     ' ' +
     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
     '.';
     const id
     =NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
     ' ' +
     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
     '.';
  return {
    id: id,
   
    name: name.toString(),
    progress:new Date("1998-01-31").toDateString(),
    fruit:new Date("1998-01-31").toDateString(),
  };



}
