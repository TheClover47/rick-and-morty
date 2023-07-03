import { Component } from '@angular/core';
import { LocationApiService } from '../services/location-api.service';
import { Location } from '../models/location';
import { Store } from '@ngrx/store';
import { AddCharacterAction } from '../store/actions/character.action';
import { AppState } from '../store/models/state.model';
import { LoaderService } from '../services/loader.service';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-loaction-list',
  templateUrl: './loaction-list.component.html',
  styleUrls: ['./loaction-list.component.css']
})
export class LoactionListComponent {
  locations!: Location[];
  location!: Location;
  status: any;
  locationCount: number = 0;
  p: number = 1;
  isLoading: Subject<boolean> = this.loader.isLoading;
  firstLoad = true;

  order = "";

  constructor(private http: HttpClient ,private rnm: LocationApiService, private store: Store<AppState>, private loader: LoaderService) {
    this.rnm.currPage = 1;
    this.isLoading.next(true);
  }

  ngOnInit() {
    this.isLoading.next(true);
    this.rnm.getQueryChange.subscribe(nodata =>{
      this.rnm.getLocations().forEach((data: any) => {
        if(this.rnm.filterChange == true){this.p = 1}
        this.locations = data.data.locations.results;
        /* for (this.character of this.characters){
          this.store.dispatch(new AddCharacterAction(this.character));
        } */
          this.locationCount = data.data.locations.info.count;
          if(this.firstLoad){
            this.firstLoad = false;
          }
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
