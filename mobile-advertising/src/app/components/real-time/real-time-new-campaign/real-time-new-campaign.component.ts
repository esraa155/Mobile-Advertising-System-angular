import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators, ControlContainer, FormGroupDirective } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DialogueBoxComponent } from '../../dialogue-box/dialogue-box.component';
@Component({
  selector: 'app-real-time-new-campaign',
  templateUrl: './real-time-new-campaign.component.html',
  styleUrls: ['./real-time-new-campaign.component.scss'],
  viewProviders:[{ provide: ControlContainer, useExisting: FormGroupDirective}]
})
export class RealTimeNewCampaignComponent implements OnInit {

  minDate: Date;
  title = 'test-time';
  currentDate:any = new Date();
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  realTimeForm! : FormGroup;
  private subscriptions = new Subscription();

  constructor(public dialog:MatDialog, private fb: FormBuilder) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 0, 0, 1);
    
   }
  public selectedMoment = new Date();
  openDialog(): void {
    this.dialog.open(DialogueBoxComponent,{
      width:'350px',
      data:"right click"
    })
    
  }
  ngOnInit(): void {
    this.realTimeForm = this.fb.group({
      smsDetails : this.fb.group({
        smsBody: new FormControl('', Validators.required),
        smsDescription :  new FormControl('', Validators.required),
        testDial: new FormControl('', Validators.min(1111111111)),
      }),
       campaignDetails : this.fb.group({
       campaignLocation: new FormControl('', Validators.required),
         campaignIncludes: new FormControl('',Validators.required),
         campaignExcludes: new FormControl<string>('',Validators.required),
          Quota : new FormControl(''),
          Dailylimit : new FormControl(''),
          Frequency : new FormControl(''),
          ExcludeComuters: new FormControl(''),
          startDate :new FormControl('', Validators.required),
          endDate : new FormControl('', Validators.required),
          starttime :new FormControl('', Validators.required),
         endtime : new FormControl('', Validators.required),
      }),
      test : new FormControl('test')
     });
    this.onChanges();
  }

  onChanges(): void {
    this.subscriptions.add(this.realTimeForm.valueChanges.subscribe(val => {
      console.log("parent Real-time form: ")
      console.log(val);
    }));
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
  
}
