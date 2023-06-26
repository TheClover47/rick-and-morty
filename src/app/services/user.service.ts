import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currUser = {
    name: '',
    currLogin: '',
    lastLogin: '',
    email: '',
  };

  userClone: any;

  add(key: string, value: User) {
    value.name = 'Bob';
    localStorage.setItem(key, JSON.stringify(value));
  }

  loginUser(user: User) {
    const users = localStorage.getItem('users');
    if (users) {
      const storedUser: User[] = JSON.parse(users);
      const login: User[] = storedUser.filter((check) => {
        return check.email === user.email && check.password === user.password;
      });
      if (login.length) {
        this.currUser.name = login[0].name;
        this.currUser.email = login[0].email;
        this.currUser.currLogin = formatDate(
          new Date(),
          'dd-MM-yyyy hh:mm:ss a',
          'en'
        );
        this.userClone = login[0];
        if (this.userClone.lastLogin)
          this.currUser.lastLogin = this.userClone.lastLogin;
        else this.currUser.lastLogin = 'None';
        localStorage.setItem('currentUser', JSON.stringify(this.currUser));
        user.name = login[0].name;
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  loggedIn() {
    return !!localStorage.getItem('currentUser');
  }
}
