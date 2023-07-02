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

  onStatus(){ //Filter by status
    this.rnm.statusValue = this.status;
    this.rnm.filterChange = true;
    this.rnm.querySatus.next(!this.rnm.querySatus);
  }

  onSpecies(){ //Filter by species
    this.rnm.speciesValue = this.species;
    this.rnm.filterChange = true;
    this.rnm.querySatus.next(!this.rnm.querySatus);
  }

  onGender(){ //Filter by gender
    this.rnm.genderValue = this.gender;
    this.rnm.filterChange = true;
    this.rnm.querySatus.next(!this.rnm.querySatus);
  }

  showSidenav(){ //Toggle the sidenav on mobile devices
    if(this.visible) this.visible = false;
    else this.visible = true;
  }
}
