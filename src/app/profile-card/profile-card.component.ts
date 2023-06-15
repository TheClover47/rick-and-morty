import { Component } from '@angular/core';
import { RnmApiService } from '../services/rnm-api.service';
import { Character } from '../models/character';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {
  characters: any;
  gender: any;
  status: any;

  constructor(private rnm: RnmApiService){
    this.rnm.getData().subscribe(data=>{this.characters = data});
  }

  test(){
    console.log(this.characters);
  }

}
