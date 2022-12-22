import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sms-footer',
  templateUrl: './sms-footer.component.html',
  styleUrls: ['./sms-footer.component.scss']
})
export class SmsFooterComponent implements OnInit {

  @Input() smsBody!: string;
  constructor() { }

  ngOnInit(): void {
  }

  ceil(number: any)
  {
    return Math.ceil(number);
  }

  smsLength()
  {
    if(this.smsBody == null)
      this.smsBody="";
    return this.smsBody.length;
  }

}
