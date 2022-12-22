import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { LocationService } from '../location/services/location.service';


export interface User {
  name: string;
}

@Component({
  selector: 'app-bulk-handset',
  templateUrl: './handset.component.html',
  styleUrls: ['./handset.component.scss']
})
export class HandsetComponent implements OnInit, OnDestroy {

  private subscriptions = new Subscription();
  @Input() formGroupName!: string;
  bulkForm!: FormGroup;

  manufacturer = new FormControl<string>('');
  model =  new FormControl<string>('');
  operatingSystem = new FormControl<string>('');
  deviceType =  new FormControl<string>('');
  networkTechnology =  new FormControl<string>('');

  //handset options remember to get them from the backend and to subscribe for their service in the backend
  manufacturer_options: string[] = ['Ziad', 'Shelley', 'Igor'];
  model_options: string[] = ['Mary', 'Shelley', 'Igor'];
  operatingSystem_options: string[] = ['Mary', 'Shelley', 'Igor'];
  deviceType_options: string[] = ['Mary', 'Shelley', 'Igor'];
  networkTechnology_options: string[] = ['Mary', 'Shelley', 'Igor'];


  
  manufacturer_FilteredOptions!: Observable<string[]>;
  model_FilteredOptions!: Observable<string[]>;
  operatingSystem_FilteredOptions!: Observable<string[]>;
  deviceType_FilteredOptions!: Observable<string[]>;
  networkTechnology_FilteredOptions!: Observable<string[]>;


  //trial 
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

   
  constructor(private locationService: LocationService, private rootFormGroup: FormGroupDirective, private fb: FormBuilder) { }
  

  ngOnInit() {

    this.bulkForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
   
    //subscribe to form values
    
    this.subscriptions.add(this.manufacturer.valueChanges.subscribe( value => {
      if(this.isOneOfTheOptions(<string> value , this.manufacturer_options))
        this.bulkForm.get("manufacturer")?.setValue(value);
      else
        this.bulkForm.get("manufacturer")?.value != '' ? this.bulkForm.get("manufacturer")?.setValue(''): null;
    }));


    this.subscriptions.add(this.model.valueChanges.subscribe(value => {
      if(this.isOneOfTheOptions(<string> value , this.model_options))
        this.bulkForm.get("model")?.setValue(value);
      else
      this.bulkForm.get("model")?.value != '' ? this.bulkForm.get("model")?.setValue(''): null;
    })); 

    this.subscriptions.add(this.operatingSystem.valueChanges.subscribe(value => {
      if(this.isOneOfTheOptions(<string> value , this.operatingSystem_options))
        this.bulkForm.get("operatingSystem")?.setValue(value);
      else
        this.bulkForm.get("operatingSystem")?.value != '' ? this.bulkForm.get("operatingSystem")?.setValue(''): null;
    })); 

    this.subscriptions.add(this.deviceType.valueChanges.subscribe(value => {
      if(this.isOneOfTheOptions(<string> value , this.deviceType_options))
        this.bulkForm.get("deviceType")?.setValue(value);
      else
        this.bulkForm.get("deviceType")?.value != '' ? this.bulkForm.get("deviceType")?.setValue(''): null;
    })); 

    this.subscriptions.add(this.networkTechnology.valueChanges.subscribe(value => {
      if(this.isOneOfTheOptions(<string> value , this.networkTechnology_options))
        this.bulkForm.get("networkTechnology")?.setValue(value);
      else
        this.bulkForm.get("networkTechnology")?.value != '' ? this.bulkForm.get("networkTechnology")?.setValue(''): null;
    })); 





    //iterating over handset options

    
    this.manufacturer_FilteredOptions = this.manufacturer.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = value;
        return name ? this._filter(name as string, this.manufacturer_options) : this.manufacturer_options.slice();
      }),
    );

    this.model_FilteredOptions = this.model.valueChanges.pipe(
      startWith(''),
      map(value => {
        console.log(value);
        const name = value;
        return name ? this._filter(name as string, this.model_options) : this.model_options.slice();
      }),
    );

    

    this.operatingSystem_FilteredOptions = this.operatingSystem.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = value;
        return name ? this._filter(name as string, this.operatingSystem_options) : this.operatingSystem_options.slice();
      }),
    );

    this.deviceType_FilteredOptions = this.deviceType.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = value;
        return name ? this._filter(name as string, this.deviceType_options) : this.deviceType_options.slice();
      }),
    );

    this.networkTechnology_FilteredOptions = this.networkTechnology.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = value;
        return name ? this._filter(name as string, this.networkTechnology_options) : this.networkTechnology_options.slice();
      }),
    );
    
    

    //trial
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter2(value || '')),
    );

  }
  
  displayFn(user: string): string {
    return user;
  }

  private _filter(name: string, options : string []): string[] {
    const filterValue = name.toLowerCase();
    return options.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filter2(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  isOneOfTheOptions(option: string, options: string[]) : boolean {
    if(options.includes(option))
      return true;
    else
      return false;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
