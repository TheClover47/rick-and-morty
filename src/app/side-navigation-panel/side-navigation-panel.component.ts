import { Component } from '@angular/core';
import { RnmApiService } from '../services/rnm-api.service';

@Component({
  selector: 'app-side-navigation-panel',
  templateUrl: './side-navigation-panel.component.html',
  styleUrls: ['./side-navigation-panel.component.css']
})
export class SideNavigationPanelComponent {

  constructor(private rnm: RnmApiService){
    rnm.statusValue = "";
    rnm.speciesValue = "";
    rnm.genderValue = "";
  }

  visible = false;
  status = "";
  species = "";
  gender = "";

  onStatus(){
    this.rnm.statusValue = this.status;
    this.rnm.querySatus.next(!this.rnm.querySatus);
  }

  onSpecies(){
    this.rnm.speciesValue = this.species;
    this.rnm.querySatus.next(!this.rnm.querySatus);
  }

  onGender(){
    this.rnm.genderValue = this.gender;
    this.rnm.querySatus.next(!this.rnm.querySatus);
  }

  showSidenav(){
    if(this.visible) this.visible = false;
    else this.visible = true;
  }
}
