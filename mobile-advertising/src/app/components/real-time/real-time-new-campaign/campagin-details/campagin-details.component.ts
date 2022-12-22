import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RealTimeDialogueBoxComponent } from '../../real-time-locations/real-time-dialogue-box/real-time-dialogue-box.component';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


export interface User {
  name: string;
}
@Component({
  selector: 'app-campagin-details',
  templateUrl: './campagin-details.component.html',
  styleUrls: ['./campagin-details.component.scss']
})





export class CampaginDetailsComponent implements OnInit {
  minDate: Date;
  title = 'test-time';
  currentDate:any = new Date();
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  private subscriptions = new Subscription();
  @Input() formGroupName!: string
  realTimeForm!: FormGroup

  subscriberTypes: Array<any> = [
    { name: 'Yes', value: 'Yes' },
    { name: 'No', value: 'No' }
  ];

  myControl = new FormControl<string | User>('');
  options: User[] = [{name: 'Cairo'}, {name: 'Giza'}, {name: 'Alex'}];
 
  campaignLocation=new FormControl<string>('',Validators.required);
  campaignIncludes= new FormControl<string>('');
  campaignExcludes= new FormControl<string>('');
  
  startDate =new FormControl('', Validators.required);
  endDate = new FormControl('', Validators.required);
  starttime =new FormControl('', Validators.required);
 endtime = new FormControl('', Validators.required);



  CampaginLocation_FilteredOptions!: Observable<string[]>;
  CampaginIncludes_FilteredOptions!: Observable<string[]>;
  CampaginExcludes_FilteredOptions!: Observable<string[]>;


  CampaginLocation_options: string[] = ['Cairo', 'Giza', 'Alex'];
  CampaginIncludes_options: string[] = ['Cairo', 'Giza', 'Alex'];
  CampaginExcludes_options: string[] =  ['Cairo', 'Giza', 'Alex'];
  
  
  

  constructor(public dialog:MatDialog,private fb: FormBuilder,private rootFormGroup: FormGroupDirective) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 0, 0, 1);
    
   }

  ngOnInit(): void {
    this.realTimeForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup

    console.log(this.realTimeForm);
    console.log(this.realTimeForm.get("test")?.value);


    this.subscriptions.add(this.campaignLocation.valueChanges.subscribe( value => {
      if(this.isOneOfTheOptions(<string> value , this.CampaginLocation_options))
        this.realTimeForm.get("campaignLocation")?.setValue(value);
      else
        this.realTimeForm.get("campaignLocation")?.value != '' ? this.realTimeForm.get("campaignLocation")?.setValue(''): null;
    }));


    this.subscriptions.add(this.campaignIncludes.valueChanges.subscribe(value => {
      if(this.isOneOfTheOptions(<string> value , this.CampaginIncludes_options))
        this.realTimeForm.get("campaignIncludes")?.setValue(value);
      else
      this.realTimeForm.get("campaignIncludes")?.value != '' ? this.realTimeForm.get("campaignIncludes")?.setValue(''): null;
    })); 

    this.subscriptions.add(this.campaignExcludes.valueChanges.subscribe(value => {
      if(this.isOneOfTheOptions(<string> value , this.CampaginExcludes_options))
        this.realTimeForm.get("campaignExcludes")?.setValue(value);
      else
        this.realTimeForm.get("campaignExcludes")?.value != '' ? this.realTimeForm.get("campaignExcludes")?.setValue(''): null;
    })); 


    //iterating over handset options
   
    this.CampaginLocation_FilteredOptions = this.campaignLocation.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = value;
        return name ? this._filter(name as string, this.CampaginLocation_options) : this.CampaginLocation_options.slice();
      }),
    );

    this.CampaginIncludes_FilteredOptions = this.campaignIncludes.valueChanges.pipe(
      startWith(''),
      map(value => {
        console.log(value);
        const name = value;
        return name ? this._filter(name as string, this.CampaginIncludes_options) : this.CampaginIncludes_options.slice();
      }),
    );

    

    this.CampaginExcludes_FilteredOptions = this.campaignExcludes.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = value;
        return name ? this._filter(name as string, this.CampaginExcludes_options) : this.CampaginExcludes_options.slice();
      }),
    );


  }  
  displayFn(user: string): string {
    return user;
  }

  private _filter(name: string, options : string []): string[] {
    const filterValue = name.toLowerCase();
    return options.filter(option => option.toLowerCase().includes(filterValue));
  }

  

  openDialog(): void {
    this.dialog.open(RealTimeDialogueBoxComponent,{
      width:'350px',
      data:"right click"
    })
    
  }
  ngOnChanges(changes: SimpleChanges): void {
      
  }
  onCheckboxChange(e, formArrayName:string) {
    
    const checkArray: FormArray = this.realTimeForm.get(formArrayName) as FormArray;
    if (e.checked) {
      checkArray.push(new FormControl(e.source.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: AbstractControl)  => {
        if (item.value == e.source.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
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
