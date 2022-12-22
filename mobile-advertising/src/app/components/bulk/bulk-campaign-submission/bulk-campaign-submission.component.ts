import { formatDate } from '@angular/common';
import { Component, OnInit,NgZone, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { Subscription } from 'rxjs';
import { DialogueBoxComponent } from '../../dialogue-box/dialogue-box.component';
@Component({
  selector: 'app-bulk-campaign-submission',
  templateUrl: './bulk-campaign-submission.component.html',
  styleUrls: ['./bulk-campaign-submission.component.scss'],
})
export class BulkCampaignSubmissionComponent implements OnInit, OnDestroy {



  singleSMSForm! : FormGroup;
  private subscriptions = new Subscription();
  testDial = new FormControl('', Validators.min(1111111111));
  smsBody!: string;
  minDate: Date;
  currentDate:any = new Date();

  constructor(public dialog: MatDialog, private fb: FormBuilder) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 0, 0, 1);
   }
  

  ngOnInit(): void {
    this.singleSMSForm = this.fb.group({
     // senderName: new FormControl<string>('asd', Validators.required),
      date: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      smsBody: new FormControl('', Validators.required),
      testDial: new FormControl('', Validators.min(1111111111)),
    });

    this.subscriptions.add(this.singleSMSForm.valueChanges.subscribe(val => {
      console.log("single SMS form: ")
      console.log(val);
      
      //on valid send the sms to the dials 
    }));

    this.subscriptions.add(this.singleSMSForm.get("smsBody")?.valueChanges.subscribe(val => {
      this.smsBody = this.singleSMSForm.get("smsBody")?.value;
    }));
  }


  openDialog(): void {
    this.dialog.open(DialogueBoxComponent,{
      width:'350px',
      data:"right click"
    })
    
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
  
}
