import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { RnmApiService } from '../services/rnm-api.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  constructor(private rnm: RnmApiService){}

  length = 826;
  pageSize = 10;
  pageIndex = 0;

  hidePageSize = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.rnm.currPage = 1+e.pageIndex;
    this.rnm.querySatus.next(!this.rnm.querySatus);
  }

  

  nextPage(){
    // this.rnm.page = this.pageIndex;
  }
  prevPage(){}
  firstPage(){}
  lastPage(){}
}
