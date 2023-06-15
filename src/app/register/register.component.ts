import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, Validators } from '@angular/forms';
import { userExistsValidator } from '../shared/user.validator';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private fb: FormBuilder, private router: Router){}

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
    email: ['', [Validators.required, Validators.pattern(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)], userExistsValidator],
    password: ['', [Validators.required, Validators.pattern(/(?=.*\d.*)(?=.*[a-zA-Z].*)(?=.*[!#\$%&\?].*).{8,}/)]],
  })

  user: User = {name: '', email: '', password: ''};

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
    }
    this.router.navigate(['/login']);
  }
}
