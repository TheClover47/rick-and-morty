import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, Validators } from '@angular/forms';
import { userExistsValidator } from '../shared/user.validator';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { AppState } from '../store/models/state.model';
import { AddItemAction, UserActionType } from '../store/actions/user.action';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private fb: FormBuilder, private router: Router, private store: Store<AppState> ,private _snackBar: MatSnackBar){}

  ngOnInit(): void {
  }

  get name(){
    return this.registrationForm.controls.name
  }

  get email(){
    return this.registrationForm.controls.email
  }

  get password(){
    return this.registrationForm.controls.password
  }

  registrationForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*.{1,}$/)], userExistsValidator],
    password: ['', [Validators.required, Validators.pattern(/(?=.*\d.*)(?=.*[a-zA-Z].*)(?=.*[!#\$%&\?@].*).{8,}/)]],
  })

  user = {name: '', email: '', password: '', lastLogin: ''};

  openRegSnackBar() {
    this._snackBar.open("You have registered successfully!", "Alright!", {
      duration: 10000, verticalPosition: 'top', panelClass: 'snackBar'
    });
  }

  onSubmit(){
    const get = localStorage.getItem('users') || "[]";
    if(get){
      const users: User[] = JSON.parse(get);
      if(this.name.value && typeof(this.registrationForm.controls.email.value) == 'string' && this.registrationForm.controls.email.value && this.password.value){
        this.user.name = this.name.value;
        this.user.email = this.registrationForm.controls.email.value;
        this.user.password = this.password.value;
      }
      users.push(this.user)
      localStorage.setItem('users', JSON.stringify(users))
      this.store.dispatch(new AddItemAction(this.user));
    }
    this.openRegSnackBar();
    this.router.navigate(['/login']);
  }
}
