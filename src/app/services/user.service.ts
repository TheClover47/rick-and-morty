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
      const users = localStorage.getItem('users');
      if (users) {
          const storedUser: User[] = JSON.parse(users);
          const login: User[] = storedUser.filter(check => { return check.email === user.email && check.password === user.password});
          if (login.length) {
              localStorage.setItem('currentUser', JSON.stringify(login[0]));
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
