import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(private router: Router, private _snackBar: MatSnackBar){}

  openLogOutSnackBar() {
    this._snackBar.open("You have logged out successfully!", "Alright!", {
      duration: 10000, verticalPosition: 'top', panelClass: 'snackBar'
    });
  }

  logOut(){
    alert("Logging out!");
    this.router.navigate(['/login']);
    this.openLogOutSnackBar();
    localStorage.removeItem('currentUser');
  }
}
