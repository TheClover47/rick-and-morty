import { Component } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user: any;
  constructor(){
    this.user = JSON.parse(localStorage.getItem('currentUser') || '');
  }
}
