import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RnmApiService {

  constructor(private http: HttpClient) { }

  getData(){
    let url="https://rickandmortyapi.com/api/character";
    return this.http.get(url);
  }
}