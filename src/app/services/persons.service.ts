import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  private apiKey = '5fdc37ea548c0298112fbbf6bd4a8dbb';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  fetchPopularPersons(page: number) {
    return this.http.get<any>(`${this.apiUrl}/person/popular?api_key=${this.apiKey}&page=${page}`);
  }

  fetchPersonData(personId: number) {
    return this.http.get<any>(`${this.apiUrl}/person/${personId}?api_key=${this.apiKey}`);
  }
}