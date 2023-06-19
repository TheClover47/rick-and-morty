import { Component, OnInit } from '@angular/core';
import { Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import { UserItem } from '../store/models/userItem.model';
import {AppState} from '../store/models/state.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  user: any;
  userItems!: Array<UserItem>;
  constructor(private store: Store<AppState>){
    this.user = JSON.parse(localStorage.getItem('currentUser') || '');
  }

  

  ngOnInit(): void {
    this.store.select(state => state).subscribe(data => {
      this.userItems = data.users.map(data => {return data});
    });
  }
}
