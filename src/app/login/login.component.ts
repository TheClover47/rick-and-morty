import { Component } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:User = {name: '',email: '', password:''};
  submitted = false;
  regExPattern = "/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*.{1,}$/";

  constructor(private _loginService: UserService, private router: Router, private _snackBar: MatSnackBar){}

  addUser(){
    this._loginService.add(this.user.email, this.user)
  }

  openLogOutSnackBar() { //Function for opening a snackbar
    this._snackBar.open('Wrong Details!', 'OK!', {
      duration: 10000,
      verticalPosition: 'top',
      panelClass: 'snackBar',
    });
  }

  onSubmit(){
    const status: Boolean = this._loginService.loginUser(this.user);
    if(status){
      this.submitted = true;
      this.router.navigate(['/dashboard']);
    }
    else alert("Wrong credentials!")
  }
}
