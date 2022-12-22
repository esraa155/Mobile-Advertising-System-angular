import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-bulk-user-plan',
  templateUrl: './user-plan.component.html',
  styleUrls: ['./user-plan.component.scss']
})
export class UserPlanComponent implements OnInit {

  subscriberTypes: Array<any> = [
    { name: 'Corporate', value: 'corporate' },
    { name: 'Personal', value: 'personal' }
  ];

  serviceTypes : Array<any> = [
    { name: 'Hybrid', value: 'hybrid' },
    { name: 'PrePaid', value: 'prePaid' },
    { name: 'PostPaid', value: 'postPaid' },
    { name: 'Others', value: 'others' }
  ];
  
  @Input() formGroupName!: string
  bulkForm!: FormGroup
  
  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.bulkForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup
  }


  onCheckboxChange(e, formArrayName:string) {
    
    const checkArray: FormArray = this.bulkForm.get(formArrayName) as FormArray;
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

}
