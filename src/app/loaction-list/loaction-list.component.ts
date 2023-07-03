import { Component } from '@angular/core';
import { LocationApiService } from '../services/location-api.service';
import { Location } from '../models/location';
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

  constructor(private http: HttpClient ,private rnm: LocationApiService, private loader: LoaderService) {
    this.rnm.currPage = 1;
    this.isLoading.next(true);
  }

  ngOnInit() {
    this.isLoading.next(true);
    this.rnm.getQueryChange.subscribe(nodata =>{
      this.rnm.getLocations().forEach((data: any) => {
        this.locations = data.data.locations.results;
          this.locationCount = data.data.locations.info.count;
          if(this.firstLoad){
            this.firstLoad = false;
          }
      });
      }
    )
  }
  getPage(page: number){
    this.p = page;
    this.rnm.currPage = page;
    this.rnm.querySatus.next(!this.rnm.querySatus)
  }
}
