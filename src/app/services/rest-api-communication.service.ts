import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RemoveDiacriticsService} from './remove-diacritics.service';

export interface Config {
  name: string;
  gender: string;
  probability: number;
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class RestApiCommunicationService {

  constructor(private httpClient: HttpClient, private diacritics: RemoveDiacriticsService ) { }

  public getInfo(name: string){
    return this.httpClient.get<Config>("https://api.genderize.io?name="+`${this.diacritics.removeDicretics(name)}`);
  }
}
