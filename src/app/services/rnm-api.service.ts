import { Apollo } from 'apollo-angular';
import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { ApiData } from '../models/apiData';

@Injectable({
  providedIn: 'root',
})
export class RnmApiService {
  searchValue = "";

  constructor(private apollo: Apollo) {}

  setSearchValue(value: string){
    this.searchValue = value;
  }

  getCharacters() {
    console.log("Search: ",this.searchValue)
    const query = gql`
      query GetCharacters {
        characters(filter: {name: "${this.searchValue}"}) {
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
