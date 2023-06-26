import { Apollo } from 'apollo-angular';
import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { ApiData } from '../models/apiData';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RnmApiService {
  searchValue = "";
  statusValue = "";
  speciesValue = "";
  genderValue = "";
  page = 1;
  querySatus = new BehaviorSubject<boolean>(false);

  constructor(private apollo: Apollo) {}

  setSearchValue(value: string){
    this.searchValue = value;
  }

  get getQueryChange(){
    return this.querySatus.asObservable();
  }

  getCharacters() {
    console.log("Search: ",this.searchValue)
    const query = gql`
      query GetCharacters {
        characters(page: ${this.page}, filter: {name: "${this.searchValue}", status:"${this.statusValue}", species:"${this.speciesValue}", gender:"${this.genderValue}"}) {
          info {
            count
            pages
            next
            prev
          }
          results {
            id
            name
            status
            species
            type
            gender
            origin {
              name
            }
            location {
              name
            }
            image
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
