import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import { Episode } from '../models/episode';
import { RnmApiService } from '../services/rnm-api.service';
import { EpisodeService } from '../services/episode.service';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.css']
})
export class EpisodesListComponent {
  constructor(private loader: LoaderService, private ep: EpisodeService){
    this.isLoading.next(true);
    this.ep.currPage = 1;
  }

  episode!: Episode;
  episodes!: Episode[];
  isLoading: Subject<boolean> = this.loader.isLoading;
  firstLoad = true;
  p: number = 1;
  charCount: number = 0;
  order = "";

  ngOnInit() {
    this.isLoading.next(true);
    this.ep.getQueryChange.subscribe(nodata =>{
      this.ep.getEpisodes().forEach((data: any) => {
        if(this.ep.filterChange == true){this.p = 1}
        this.episodes = data.data.episodes.results;
        // for (this.episode of this.episodes){
        //   this.store.dispatch(new AddEpisodeAction(this.episode));
        // }
          this.charCount = data.data.episodes.info.count;
          if(this.firstLoad){
            this.firstLoad = false;
          }
      });
      }
    )
  }

  getPage(page: number){
    this.ep.filterChange = false;
    this.p = page;
    this.ep.currPage = page;
    this.ep.querySatus.next(!this.ep.querySatus)
  }
}
