import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RnmApiService } from '../services/rnm-api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  constructor(private fb: FormBuilder, private rnm: RnmApiService) {}

  ngOnInit() {
    this.fetchCharacterData();
  }

  characters: any;
  searchValue = '';
  searchForm = this.fb.nonNullable.group({ searchValue: '' });

  fetchCharacterData() {
    this.rnm.getCharacters().subscribe((data) => {
      this.characters = data;
    });
  }

  onSearchSubmit() {
    // alert(this.searchForm.get('searchValue'));
    this.searchValue = this.searchForm.value.searchValue ?? '';
    this.fetchCharacterData();
  }
}
