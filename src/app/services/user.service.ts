import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currUser= {
    name: '',
    currLogin: '',
    email: ''
  }
  
  add(key: string, value: User){
    value.name = 'Bob';
    localStorage.setItem(key, JSON.stringify(value));
  }

  constructor() { }

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
      const users = localStorage.getItem('users');
      if (users) {
          const storedUser: User[] = JSON.parse(users);
          const login: User[] = storedUser.filter(check => { console.log(check); return check.email === user.email && check.password === user.password});
          if (login.length) {
              this.currUser.name = login[0].name;
              this.currUser.email = login[0].email;
              this.currUser.currLogin = formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en');
              localStorage.setItem('currentUser', JSON.stringify(this.currUser))
              user.name = login[0].name
              return true;
          } else {
              return false;
          }
      } else {
          return false;// Don't say "Not a registered user"
      }
  }
}
