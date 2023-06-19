import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './store/models/user.model';
import { State } from './store/models/state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rick-and-morty';

  users$!: Observable<Array<User>>;
  constructor(private store: Store<State>) {}
  ngOnInit(): void {
    this.users$ = this.store.select((store) => store.users);
  }

  test$ = JSON.stringify(this.users$);
}
