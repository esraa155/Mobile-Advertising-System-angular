import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SenderNameService {

  senderNames : string[] = ['Orange', 'My Orange', 'Orange Cash'];
  senderNamesEmitter = new Subject<string[]>();

  constructor() { }

  getSenderNames()
  {
    return this.senderNames.slice();
  }

  addSenderName(newSenderName: string)
  {
    this.senderNames.push(newSenderName)
    this.senderNamesEmitter.next(this.senderNames);
  }
}
