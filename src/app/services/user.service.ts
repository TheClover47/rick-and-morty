import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  add(key: string, value: User){
    value.name = 'Bob';
    localStorage.setItem(key, JSON.stringify(value));
  }

  constructor() { }
  userExists(credentials: User){
    // for(let user of users){
    //   if(user.email===credentials.email && user.password===credentials.password){
    //     credentials.name = user.name;
    //     return true;
    //   }
    // }
    if(localStorage.getItem(credentials.email)){
      alert("You exist!");
      return true;
    }
    return false;
  }

  // UserRegistration() {
  //   storedUsers = localStorage.['UsersLogin'] ? JSON.parse(localStorage.['UsersLogin']) : [];
  //   userData = {
  //       email: "test@gmail.com",
  //       password: "goodPW123"
  //   };
  //   storedUsers.push(userData);
  //   localStorage.setItem('UsersLogin', JSON.stringify(storedUsers));
  //   window.location.reload();
  // }

  loginUser(user: User){
      const loginEmail = user.email;
      const loginPass = user.password;
      const email = localStorage.getItem(loginEmail);
      if (email) {
          const storedUser = JSON.parse(email);
          if (storedUser.email===loginEmail && storedUser.password===loginPass) {
              return console.log('Login successful')
          } else {
              return console.log('Wrong credentials')
          }
      } else {
          return console.log('Wrong credentials') // Don't say "Not a registered user"
      }
  }
}
