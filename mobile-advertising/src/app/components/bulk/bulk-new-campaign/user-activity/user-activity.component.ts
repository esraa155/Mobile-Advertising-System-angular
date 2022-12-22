import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';


export interface Task {
  name: string;
  completed: boolean;
  value: string,
  subtasks?: Task[];
}

@Component({
  selector: 'app-bulk-user-activity',
  templateUrl: './user-activity.component.html',
  styleUrls: ['./user-activity.component.scss']
})
export class UserActivityComponent implements OnInit {

  //user activity
  task: Task = {
    name: 'Select All',
    completed: false,
    value: 'all',
    subtasks: [
      {name: 'Using Data',  value:'usingData',  completed: false},
      {name: 'Was Roaming', value:'wasRoaming', completed: false},
      {name: 'First Class', value:'firstClass', completed: false},
      {name: 'USIM',        value:'usim',       completed: false},
      {name: 'Orange Cash', value:'orangeCash', completed: false},
    ],
  };
  allComplete: boolean = false;
  subtasksLength: number = 5;

  @Input() formGroupName!: string
  bulkForm!: FormGroup
  
  constructor(private rootFormGroup: FormGroupDirective, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.bulkForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup
  }

  updateAllComplete() {


    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {

    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;

    
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    let checkArray: FormArray = this.bulkForm.get('userActivity') as FormArray;

    //assign all subtasks to true or false
    this.task.subtasks!.forEach(t => (t.completed = completed));

    //remove all elements from the form array
    const checkArrayLength = checkArray.length;
    for(let i = 0 ; i<checkArrayLength ; i++)
        checkArray.removeAt(0);

       
    //fill the array again if complete is true 
    if(completed){
      for(let i = 0 ; i< this.subtasksLength ; i++)
        checkArray.push(new FormControl(this.task.subtasks![i].value));      
    }

    
  
  }

  //to update the form array 
  updateForm(e, index)
  {
    const value = e.source.value;
    const checkArray: FormArray = this.bulkForm.get('userActivity') as FormArray;
    
    if (e.checked) {
      checkArray.push(new FormControl(value));
      this.task.subtasks![index].completed = true;
    } else {
      this.task.subtasks![index].completed = false;
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
