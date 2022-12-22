import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {map, startWith} from 'rxjs/operators';






@Component({
  selector: 'app-new-bulk-campaign',
  templateUrl: './bulk-new-campaign.component.html',
  styleUrls: ['./bulk-new-campaign.component.scss']
})
export class BulkNewCampaignComponent implements OnInit, OnDestroy{
  
  bulkForm! : FormGroup;
  
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  minARPU = 0;
  maxARPU = 5000;
  private subscriptions = new Subscription();
  
  constructor(private fb: FormBuilder) { }
  
  
  

  ngOnInit(): void {
    this.bulkForm = this.fb.group({
      
      location: this.fb.group({
        selectedGovernorates: new FormControl(''),
        selectedAdminSections: new FormControl(''),
        selectedSheiakhas: new FormControl('')
      }),

      handSet : this.fb.group({
        manufacturer: new FormControl<string>(''),
        model: new FormControl<string>(''),
        operatingSystem: new FormControl<string>(''),
        deviceType: new FormControl<string>(''),
        networkTechnology: new FormControl<string>('')
      }),

      userActivity : this.fb.group({
        userActivity: this.fb.array([])
      }),

      userPlan : this.fb.group({
        subscriberType: this.fb.array([]),
        serviceType: this.fb.array([]),
      }),

      arpu : this.fb.group({
        selectedMinARPU : new FormControl('', Validators.min(1)),
        selectedMaxARPU : new FormControl('', Validators.min(100)),
      }),

    //   singleSmS : this.fb.group({
    //     SenderName : new FormControl<string>(''),
    //     smsBody : [],
    //      date : new FormControl<string>(''),
    //     time : new FormControl<string>(''),
    // }),


    });


    this.onChanges();
  }

  onChanges(): void {
    this.subscriptions.add(this.bulkForm.valueChanges.subscribe(val => {
      console.log("parent bulk form: ")
      console.log(val);

      //on change go to the backend and retrieve the total number of customers
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
  

}
