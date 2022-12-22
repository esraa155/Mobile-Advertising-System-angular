import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../shared/user';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { FormControl, FormGroupDirective, NgForm, ValidatorFn } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  
  userForm!: FormGroup;
  user!: User;

  validationMessages = {
    'Username': {
      'required':      'User Name is required.',
    }
  }
 
  constructor(private fb: FormBuilder, private router: Router, private authenticationService: AuthenticationService) {
    this.createForm();
    
   }

  ngOnInit(): void {
  }

  createForm()
  {
    this.userForm = this.fb.group(
      {
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
      }
    );


    
  }

  onSubmit() {
    this.user = this.userForm.value;
    console.log(this.user);

    
    //authenticate the user
    let validUser:boolean = false;
    validUser = this.authenticationService.authenticate(this.user);

    if(validUser)
      this.router.navigateByUrl('/home');

    this.userForm.reset();
  }
};

