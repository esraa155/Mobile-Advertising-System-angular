import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { Subscription } from 'rxjs';
import{ FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-bulk-arpu',
  templateUrl: './arpu.component.html',
  styleUrls: ['./arpu.component.scss']
})
export class ArpuComponent implements OnInit, OnDestroy {

  minARPU = 0;
  maxARPU = 5000;
  


  private subscriptions = new Subscription();


  @Input() formGroupName!: string
  bulkForm!: FormGroup
  

  selectedMinARPU = new FormControl('', Validators.min(1));
  selectedMaxARPU = new FormControl('', Validators.min(100));
  constructor(private rootFormGroup: FormGroupDirective, private fb: FormBuilder) { }
  


  ngOnInit(): void {
    this.bulkForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;

    this.subscriptions.add(this.bulkForm.get("selectedMinARPU")?.valueChanges.subscribe(value => {
      this.selectedMinARPU = value;
    })); 

    this.subscriptions.add(this.bulkForm.get("selectedMaxARPU")?.valueChanges.subscribe(value => {
      this.selectedMaxARPU = value;
    }));
  }

  onChange(t: number)
  {
    let selectedARPU;
    switch(t)
    {
      case 0:
        selectedARPU = this.bulkForm.get("selectedMaxARPU");
        selectedARPU?.setValue('');

        // reset min too because min can not be bigger than max
        selectedARPU = this.bulkForm.get("selectedMinARPU");
        selectedARPU?.setValue('');
        
        break;
      case 1:
        selectedARPU = this.bulkForm.get("selectedMinARPU");
        selectedARPU?.setValue('');
        break;

    }
    
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
