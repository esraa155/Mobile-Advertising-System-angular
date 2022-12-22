import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogueBoxComponent } from 'src/app/components/dialogue-box/dialogue-box.component';

export interface smsDetails {
  smsID: number;
  body: string;
  date: Date;
  senderName: string;
}

interface INumber {
  parseInt: Function
}
declare var Number: INumber;

var ELEMENT_DATA!: smsDetails[];
/* = [
  {smsID: 1, senderName: 'Orange', date: new Date(2018, 0O5, 0O5), body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'},
  {smsID: 2, senderName: 'Orange', date: new Date(2018, 0O5, 0O5), body: ''},
  {smsID: 3, senderName: 'Orange', date: new Date(2018, 0O5, 0O5), body: ''}
];
*/
@Component({
  selector: 'app-multi-sms',
  templateUrl: './multi-sms.component.html',
  styleUrls: ['./multi-sms.component.scss']
})
export class MultiSmsComponent implements OnInit {
  campaignAccountFormControl = new FormControl('', [Validators.required]);
  numberOfSMSCampaigns!:number;
  minDate: Date;
  title = 'test-time';
  currentDate:any = new Date();
  isSingleSMSBody!: string;
  singleSMSBody!: string;

  isSingleSMSSenderName!: string;
  singleSMSsenderName!:string;

  ////// second card
  smsCard = false;
  displayedColumns: string[] = ['smsID', 'senderName', 'body', 'date'];
  dataSource: smsDetails[] = [];

  constructor(public dialog: MatDialog) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 0, 0, 1);
   }
   openDialog(): void {
    this.dialog.open(DialogueBoxComponent,{
      width:'350px',
      data:"right click"
    })
    
  }
  ngOnInit(): void {
  }


  onCriteriaSaved(event: Event)
  {
    if(this.smsCard == false)
      this.smsCard = true;

    // in order to clear the array on each button click
    this.dataSource = [];
    console.log(this.singleSMSsenderName);
    /// else it should check which criteria was changed and then change the sms card
    for (let i = 0; i < this.numberOfSMSCampaigns; i++) {
      this.dataSource.push({smsID: i+1, senderName: this.singleSMSsenderName, date: new Date(), body: this.singleSMSBody});
    }
  }

 
}