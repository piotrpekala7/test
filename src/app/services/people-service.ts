import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeopleResult, People } from '../models/people';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  apiURL: string = 'https://swapi.co/api/people';

  constructor(private httpClient: HttpClient) {}

  getPeople(): Observable<PeopleResult> {
      return this.httpClient.get<PeopleResult>(this.apiURL);
  }

  getSinglePerson(number: number): Observable<People> {
      return this.httpClient.get<People>(`${this.apiURL}/${number}/`)
  }
}
