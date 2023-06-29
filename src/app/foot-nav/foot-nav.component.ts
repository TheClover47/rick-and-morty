import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foot-nav',
  templateUrl: './foot-nav.component.html',
  styleUrls: ['./foot-nav.component.css']
})
export class FootNavComponent {
  constructor(private router: Router, private _snackBar: MatSnackBar){}

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

  scrollToTop(event: any) {
    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });
  }
}
