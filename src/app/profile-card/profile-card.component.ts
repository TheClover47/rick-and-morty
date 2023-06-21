import { Component, OnInit } from '@angular/core';
import { RnmApiService } from '../services/rnm-api.service';
import { Character } from '../models/character';
import { Store } from '@ngrx/store';
import { AddCharacterAction } from '../store/actions/character.action';
import { AppState } from '../store/models/state.model';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
})
export class ProfileCardComponent implements OnInit {
  characters!: Character[];
  character!: Character;
  status: any;

  constructor(private rnm: RnmApiService, private store: Store<AppState>) {}

  ngOnInit() {
    this.rnm.getCharacters().subscribe((data: any) => {
      this.characters = data.data.characters.results;
      console.log(' this.characters', this.characters);
      for (this.character of this.characters)
        this.store.dispatch(new AddCharacterAction(this.character));
    });
  }
}
