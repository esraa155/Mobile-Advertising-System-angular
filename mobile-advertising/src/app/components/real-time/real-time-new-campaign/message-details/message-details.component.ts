import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.scss']
})
export class MessageDetailsComponent implements OnInit {

   
  @Input() formGroupName!: string
  realTimeForm!: FormGroup
  smsBody! : string
  testDial = new FormControl('', Validators.min(1111111111));
  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.realTimeForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup
  }


}
