import { Component, HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { User } from '../models/user';

@Component({
  selector: 'app-top-navigation-bar',
  templateUrl: './top-navigation-bar.component.html',
  styleUrls: ['./top-navigation-bar.component.css']
})
export class TopNavigationBarComponent {
  isMobile: boolean = false;
  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private breakpointObserver: BreakpointObserver
  ) {}

  users: any[] = JSON.parse(localStorage.getItem('users') || '');
  user: any[] = [];
  currUser: any = JSON.parse(localStorage.getItem('currentUser') || '');

  // ngOnInit() {
  //   this.breakpointObserver
  //     .observe([Breakpoints.Handset])
  //     .subscribe((result) => {
  //       this.isMobile = result.matches;
  //     });
  //   console.log('isMobile', this.isMobile);
  // }
  @HostListener('window:resize')
  onWindowResize() {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
    console.log('isMobile', this.isMobile);
  }
  // check viewport
  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
    console.log('isMobile', this.isMobile);
  }

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
