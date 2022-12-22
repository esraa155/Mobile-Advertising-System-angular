import { LocationService } from './services/location.service';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bulk-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  providers: [LocationService]
})
export class LocationComponent implements OnInit, OnChanges, OnDestroy {


  private subscriptions = new Subscription();


  @Input() formGroupName!: string
  bulkForm!: FormGroup

   //Location

  value = '';

  selectedGovernorates = new FormControl('');
  governorateList!: string[];

  selectedAdminSections = new FormControl('');
  adminSectionList!: string[];

  selectedSheiakhas =  new FormControl('');
  sheiakhaList!: string[];

  
  
  constructor(private locationService: LocationService, private rootFormGroup: FormGroupDirective, private fb: FormBuilder) { }
  

  ngOnInit(): void {

    this.bulkForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
   
    //subscribe to form values
    this.subscriptions.add(this.selectedGovernorates.valueChanges.subscribe( value => {
      this.bulkForm.get("selectedGovernorates")?.setValue(value);
    }));


    this.subscriptions.add(this.selectedAdminSections.valueChanges.subscribe(value => {
      this.bulkForm.get("selectedAdminSections")?.setValue(value);
    })); 

    this.subscriptions.add(this.selectedSheiakhas.valueChanges.subscribe(value => {
      this.bulkForm.get("selectedSheiakhas")?.setValue(value);
    })); 
    



    //subscribe to location lists
    this.governorateList = this.locationService.getGovernorateList();
    this.adminSectionList = this.locationService.getAdminSectionList();
    this.sheiakhaList = this.locationService.getSheiakhaList();

    console.log(this.selectedGovernorates.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
      
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
