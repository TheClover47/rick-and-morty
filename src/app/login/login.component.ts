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
  user:User = {name: '',email: '', password:''};
  submitted = false;

  constructor(private _loginService: UserService, private router: Router){}

  addUser(){
    this._loginService.add(this.user.email, this.user)
  }

  onSubmit(){
    const status: Boolean = this._loginService.loginUser(this.user);
    if(status){
      alert("Welcome "+this.user.name+"!");
      this.submitted = true;
      this.router.navigate(['/dashboard']);
    }
    else alert("Wrong credentials!")/* alert("This user is not registered!"); */
  }
}
