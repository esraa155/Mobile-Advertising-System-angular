import { Injectable } from '@angular/core';
import { User } from '../../shared/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(user : User)
  {
    return true;
  }
}
