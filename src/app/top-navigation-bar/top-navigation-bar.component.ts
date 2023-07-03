import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-navigation-bar',
  templateUrl: './top-navigation-bar.component.html',
  styleUrls: ['./top-navigation-bar.component.css'],
})
export class TopNavigationBarComponent {
  constructor(
    public router: Router,
    private _snackBar: MatSnackBar,
  ) {}
  
  dropdown = false;
  users: any[] = JSON.parse(localStorage.getItem('users') || '');
  user: any[] = [];
  currUser: any = JSON.parse(localStorage.getItem('currentUser') || '');

  openLogOutSnackBar() { //Function for opening the logout snackbar
    this._snackBar.open('You have logged out successfully!', 'OK!', {
      duration: 10000,
      verticalPosition: 'top',
      panelClass: 'snackBar',
    });
  }

  logOut() { //Logs the user out, navigates him to /login and opens the logout snackbar
    this.router.navigate(['/login']);
    this.openLogOutSnackBar();
    this.user = this.users.filter((check) => {
      if (check.email === this.currUser.email) {
        check.lastLogin = this.currUser.currLogin;
      }
    });
    localStorage.setItem('users', JSON.stringify(this.users));
    localStorage.removeItem('currentUser');
  }

  toggleDrop(){
    if(this.dropdown){
      this.dropdown = true;
    } else this.dropdown = false;
  }
}
