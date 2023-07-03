import { Apollo } from 'apollo-angular';
import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { ApiData } from '../models/apiData';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationApiService {
  searchValue = '';
  currPage = 1;
  filterChange: boolean = false;
  querySatus = new BehaviorSubject<boolean>(false);

  constructor(private apollo: Apollo) {}

  setSearchValue(value: string) {
    this.searchValue = value;
  }

  get getQueryChange() {
    return this.querySatus.asObservable();
  }

  getLocations() {
    if (this.filterChange) {
      this.currPage = 1;
    }
    const query = gql`
      query GetLocations {
        locations(page: 1, 
          filter: {name: ""}) {
          info {
            count
            pages
            next
            prev
          }
          results {
            id
            name
            type
            dimension
            created
          }
        }
      }
    `;

    return this.apollo.query({
      query,
    });
  }
}


