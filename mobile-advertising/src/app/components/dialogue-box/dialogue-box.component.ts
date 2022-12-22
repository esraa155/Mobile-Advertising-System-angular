import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SenderNameService } from '../shared/services/sender-name.service';

@Component({
  selector: 'app-dialogue-box',
  templateUrl: './dialogue-box.component.html',
  styleUrls: ['./dialogue-box.component.scss']
})
export class DialogueBoxComponent implements OnInit {

  senderName!: string;
  
  constructor(
    public dialogRef: MatDialogRef<DialogueBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private senderNameService: SenderNameService
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void{
    this.senderNameService.addSenderName(this.senderName)
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
