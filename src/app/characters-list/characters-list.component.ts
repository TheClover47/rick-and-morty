import { Component, OnInit } from '@angular/core';
import { RnmApiService } from '../services/rnm-api.service';
import { Character } from '../models/character';
import { Store } from '@ngrx/store';
import { AddCharacterAction } from '../store/actions/character.action';
import { AppState } from '../store/models/state.model';
import { subscribe } from 'graphql';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {
  characters!: Character[];
  character!: Character;
  status: any;
  charCount: number = 0;
  p: number = 1;

  order = "";

  constructor(private rnm: RnmApiService, private store: Store<AppState>) {
    this.rnm.currPage = 1;
  }

  ngOnInit() {
    this.rnm.getQueryChange.subscribe(nodata =>{
      this.rnm.getCharacters().forEach((data: any) => {
        if(this.rnm.filterChange == true){this.p = 1}
        this.characters = data.data.characters.results;
        for (this.character of this.characters){
          this.store.dispatch(new AddCharacterAction(this.character));
        }
          this.charCount = data.data.characters.info.count;
      });
      }
    )
  }
  getPage(page: number){
    this.rnm.filterChange = false;
    this.p = page;
    this.rnm.currPage = page;
    this.rnm.querySatus.next(!this.rnm.querySatus)
  }
}
