import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { gql } from 'apollo-angular';
import { ApiData } from '../models/apiData';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private apollo: Apollo) {}

  filterChange: boolean = false;
  currPage: number = 0;
  querySatus = new BehaviorSubject<boolean>(false);

  get getQueryChange() {
    return this.querySatus.asObservable();
  }

  getEpisodes() {
  const query = gql`
      query GetEpisodes {
        episodes(page: ${this.currPage}, 
          filter: {}) {
          info {
            count
            pages
            next
            prev
          }
          results {
            id
            name
            air_date
            episode
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

