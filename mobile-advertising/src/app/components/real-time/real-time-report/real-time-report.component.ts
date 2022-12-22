import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


export interface UserData {
  id: string;
  loction:string;
  name: string;
  progress: string;
  fruit: string;
  start:string;
  End:string;
  Frequency:string;
  Quota:string;
  DailyTime:string;
  inclusionList:string;
  ExclusionList:string;
smsBody:string;
 Description:string;
}

/** Constants used to fill up our data base. */

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
const Location: string[] = [
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


@Component({
  selector: 'app-real-time-report',
  templateUrl: './real-time-report.component.html',
  styleUrls: ['./real-time-report.component.scss']
})
export class RealTimeReportComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['id','location' ,'first', 'start','End','Frequency','Quota','DailyTime', 'progress','Exclude','inclusionList','ExclusionList','smsBody','Description','action'];
  dataSource: MatTableDataSource<UserData>;

  constructor() { 
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
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
}

/** Builds and returns a new User. */
function createNewUser(progress: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';
const x=Location[Math.round(Math.random() * (Location.length - 1))] +
' ' +
Location[Math.round(Math.random() * (Location.length - 1))].charAt(0) +
'.';
  return {
    
    id: name,
    name: Math.round(Math.random() * 100).toString(),
    fruit: new Date("1998-01-31").toDateString(),
    loction:x,
    progress:Math.round(Math.random() * 100).toString(),
    start: new Date("1998-01-31").toDateString(),
    End: new Date("1998-01-31").toDateString(),
    Frequency: Math.round(Math.random() * 100).toString(),
    Quota: Math.round(Math.random() * 100).toString(),
    DailyTime: Math.round(Math.random() * 100).toString(),
  inclusionList:x,
  ExclusionList:x,
  smsBody:x,
  Description:x,
  };
}
