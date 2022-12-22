import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-real-time-dialogue-box',
  templateUrl: './real-time-dialogue-box.component.html',
  styleUrls: ['./real-time-dialogue-box.component.scss']
})
export class RealTimeDialogueBoxComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RealTimeDialogueBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.data)
  }

  ngOnInit(): void {
  }
}
