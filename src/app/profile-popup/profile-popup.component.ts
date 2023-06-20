import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponentComponent } from '../popup-component/popup-component.component';

@Component({
  selector: 'app-profile-popup',
  templateUrl: './profile-popup.component.html',
  styleUrls: ['./profile-popup.component.css']
})
export class ProfilePopupComponent {

  constructor(public dialog:MatDialog){}

  @Input() character: any;

  infoActive = false;

  onOpenDialog(){
    const dialogRef = this.dialog.open(PopupComponentComponent, {
      data: {id: this.character.id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
