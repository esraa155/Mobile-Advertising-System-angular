
import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogueBoxComponent } from 'src/app/components/dialogue-box/dialogue-box.component';
import { RealTimeDialogueBoxComponent } from '../../real-time-locations/real-time-dialogue-box/real-time-dialogue-box.component';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SenderNameService } from 'src/app/components/shared/services/sender-name.service';


@Component({
  selector: 'app-sender-data',
  templateUrl: './sender-data.component.html',
  styleUrls: ['./sender-data.component.scss']
})
export class SenderDataComponent implements OnInit{

  constructor(){
    
  }
  
  ngOnInit(): void {
    
  }
}