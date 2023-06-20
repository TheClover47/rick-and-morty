import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RnmApiService {

  constructor(private http: HttpClient) { }

  getCharactersData(searchValue: string){
    let url="https://rickandmortyapi.com/api/character";
    return this.http.get(`https://rickandmortyapi.com/api/character?name_like${searchValue}`);
  }
}
