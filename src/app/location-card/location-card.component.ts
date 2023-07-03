import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponentComponent } from '../popup-component/popup-component.component';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.css']
})
export class LocationCardComponent {
  constructor(public dialog:MatDialog){}

  @Input() location: any;

  infoActive = false;

  onOpenDialog(){
    const dialogRef = this.dialog.open(PopupComponentComponent, {
      data: {id: this.location.id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
