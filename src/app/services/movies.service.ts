import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiKey = '5fdc37ea548c0298112fbbf6bd4a8dbb';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  fetchMovieVideos(movieId: number) {
    return this.http.get<any>(`${this.apiUrl}/movie/${movieId}/videos?api_key=${this.apiKey}`);
  }

  fetchHighestRatedMovies(page: number) {
    return this.http.get<any>(`${this.apiUrl}/movie/top_rated?api_key=${this.apiKey}&page=${page}`);
  }

  fetchUpcomingMovies(page: number) {
    return this.http.get<any>(`${this.apiUrl}/movie/upcoming?api_key=${this.apiKey}&page=${page}`);
  }

  fetchPopularMovies(page: number) {
    return this.http.get<any>(`${this.apiUrl}/discover/movie?api_key=${this.apiKey}&page=${page}`);
  }
}

