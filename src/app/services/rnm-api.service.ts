import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiData } from '../models/apiData';

@Injectable({
  providedIn: 'root'
})
export class RnmApiService {

  constructor(private http: HttpClient) { }

  getCharactersData(){
    let url="https://rickandmortyapi.com/api/character";
    return this.http.get<ApiData>(url);
  }
}
