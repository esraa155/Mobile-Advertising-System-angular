import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DialogueBoxComponent } from 'src/app/components/dialogue-box/dialogue-box.component';
import { SenderNameService } from '../../services/sender-name.service';


@Component({
  selector: 'app-sender-name',
  templateUrl: './sender-name.component.html',
  styleUrls: ['./sender-name.component.scss'],
  viewProviders:[{ provide: ControlContainer, useExisting: FormGroupDirective}]
})
export class SenderNameComponent implements OnInit {
  
  @Input() controlName!: string
  parentForm!: FormGroup

  options!: string[];
  private subscriptions = new Subscription();

  //handset objects to get them from the backend
  senderName_FilteredOptions!: Observable<string[] | undefined>;
  

  constructor(public dialog:MatDialog, private senderNameService : SenderNameService, private rootFormGroup: FormGroupDirective) { }

  openDialog(): void {
    this.dialog.open(DialogueBoxComponent,{
      width:'350px',
      data:"right click"
    })
    
  }


  ngOnInit(): void {

    //this.parentForm = this.rootFormGroup.control.get(this.controlName) as FormGroup;
    this.rootFormGroup.form.addControl('senderName',new FormControl('', Validators.required));

    this.options = this.senderNameService.getSenderNames();
    this.subscriptions.add(this.senderNameService.senderNamesEmitter.subscribe(senderNames =>
      {
        console.log(senderNames);
        this.options = senderNames;
        this.displaySenderNames();      
      }));
    
    this.displaySenderNames();
  }


  displaySenderNames(){
          //iterating over sender names options
    this.senderName_FilteredOptions =  this.rootFormGroup.form.get("senderName")!.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = value;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(user: string): string {
    return user;
  }

  private _filter(name: string): string[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  ngOnDestroy()
  {
    this.subscriptions.unsubscribe();
  }
}
