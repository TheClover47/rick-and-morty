import { Component } from '@angular/core';
import { RnmApiService } from '../services/rnm-api.service';
import { Character } from '../models/character';
import { Store } from '@ngrx/store';
import { AddCharacterAction } from '../store/actions/character.action';
import { AppState } from '../store/models/state.model';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {
  characters!: Array<Character>;
  character!: Character;
  status: any;

  constructor(private rnm: RnmApiService, private store: Store<AppState>){}

  ngOnInit(){
    this.rnm.getCharactersData().subscribe(data=>{
      this.characters = data.results;
      for(this.character of this.characters)
      this.store.dispatch(new AddCharacterAction(this.character))
    });
  }

  // test(){
  //   console.log(this.characters);
  // }

}
