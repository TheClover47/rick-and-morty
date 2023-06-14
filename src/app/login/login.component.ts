import { Component } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = new User('','','');
  submitted = false;

  constructor(private _loginService: UserService, private router: Router){}

  addUser(){
    this._loginService.add(this.user.email, this.user)
  }

  onSubmit(){
    if(this._loginService.userExists(this.user)){
      // this.router.navigate(['/dashboard']);
      alert("Welcome "+this.user.name+"!");
      this.submitted = true;
    }
    else alert("This user is not registered!");
  }
}
