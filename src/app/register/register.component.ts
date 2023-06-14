import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, Validators } from '@angular/forms';
import { userExistsValidator } from '../shared/user.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private fb: FormBuilder){}

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

  onSubmit(){
    if(typeof(this.email.value) === 'string'){
      localStorage.setItem(this.email.value, JSON.stringify(this.registrationForm.value))
    }
  }
}
