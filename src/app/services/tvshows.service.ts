import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {
  private apiKey = '5fdc37ea548c0298112fbbf6bd4a8dbb';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  fetchPopularTvshows(page: number) {
    return this.http.get<any>(`${this.apiUrl}/discover/tv?api_key=${this.apiKey}&page=${page}`);
  }

  fetchTvseriesVideos(seriesId: number) {
    return this.http.get<any>(`${this.apiUrl}/tv/${seriesId}/videos?api_key=${this.apiKey}`);
  }
}
