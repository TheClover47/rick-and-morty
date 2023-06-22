import { Component } from '@angular/core';

@Component({
  selector: 'app-side-navigation-panel',
  templateUrl: './side-navigation-panel.component.html',
  styleUrls: ['./side-navigation-panel.component.css']
})
export class SideNavigationPanelComponent {

  visible = false;

  showSidenav(){
    if(this.visible) this.visible = false;
    else this.visible = true;
  }
}
