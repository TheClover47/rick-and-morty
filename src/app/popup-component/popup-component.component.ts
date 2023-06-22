import { Component, Inject } from '@angular/core';
import { Character } from '../models/character';
import { Store } from '@ngrx/store';
import { AppState } from '../store/models/state.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-component',
  templateUrl: './popup-component.component.html',
  styleUrls: ['./popup-component.component.css']
})
export class PopupComponentComponent {

  constructor(private store: Store<AppState>,
    public dialogRef: MatDialogRef<PopupComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id: number},){
  }
  
  characterItems!: Array<Character>;

  ngOnInit(): void {
    this.store.select(state => state).subscribe(data => {
      this.characterItems = data.characters.map(data => {return data});
      this.characterItems = this.characterItems.filter(character=>{return character.id == this.data.id})
      console.log("this is the store: ",data);
    });
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
