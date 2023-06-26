import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RnmApiService } from '../services/rnm-api.service';
import { Store } from '@ngrx/store';
import { AppState } from '../store/models/state.model';
import { AddCharacterAction } from '../store/actions/character.action';
import { Character } from '../models/character';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  constructor(private fb: FormBuilder, private rnm: RnmApiService, private store: Store<AppState>, private router: Router) {}

  ngOnInit() {}

  characters!: Character[];
  character!: Character;
  searchValue = '';
  searchForm = this.fb.nonNullable.group({ searchValue: '' });

  fetchCharacterData() {
    this.rnm.setSearchValue(this.searchValue);
    this.rnm.querySatus.next(!this.rnm.querySatus);
  }

  onSearchSubmit() {
    this.searchValue = this.searchForm.value.searchValue ?? '';
    console.log("On enter: ",this.searchValue);
    this.fetchCharacterData();
    this.router.navigate(['browse']);
  }
  searchCharacter(){
    this.searchValue = this.searchForm.value.searchValue ?? '';
    console.log("Search Icon: ",this.searchValue);
    // this.fetchCharacterData();
    this.router.navigate(['browse']);
  }
}
