import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RnmApiService } from '../services/rnm-api.service';
import { Store } from '@ngrx/store';
import { AppState } from '../store/models/state.model';
import { Character } from '../models/character';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  constructor(
    private fb: FormBuilder,
    private rnm: RnmApiService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  characters!: Character[];
  character!: Character;
  searchValue = '';
  searchForm = this.fb.nonNullable.group({ searchValue: '' });

  fetchCharacterData() { //Sets searchvalue and updates the query
    this.rnm.setSearchValue(this.searchValue);
    this.rnm.querySatus.next(!this.rnm.querySatus);
  }

  onSearchSubmit() { //Search function for pressing enter
    this.searchValue = this.searchForm.value.searchValue ?? '';
    this.fetchCharacterData();
    this.router.navigate(['characters']);
  }
  iconSearch() { //Search function for search icon
    this.searchValue = this.searchForm.value.searchValue ?? '';
    this.fetchCharacterData();
    this.router.navigate(['characters']);
  }
}
