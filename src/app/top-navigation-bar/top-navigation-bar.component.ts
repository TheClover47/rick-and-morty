import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-top-navigation-bar',
  templateUrl: './top-navigation-bar.component.html',
  styleUrls: ['./top-navigation-bar.component.css'],
})
export class TopNavigationBarComponent {
  isMobile: boolean = false;
  constructor(
    public router: Router,
    private _snackBar: MatSnackBar,
    private breakpointObserver: BreakpointObserver
  ) {}

  users: any[] = JSON.parse(localStorage.getItem('users') || '');
  user: any[] = [];
  currUser: any = JSON.parse(localStorage.getItem('currentUser') || '');

  openLogOutSnackBar() {
    this._snackBar.open('You have logged out successfully!', 'Alright!', {
      duration: 10000,
      verticalPosition: 'top',
      panelClass: 'snackBar',
    });
  }

  logOut() {
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
}
