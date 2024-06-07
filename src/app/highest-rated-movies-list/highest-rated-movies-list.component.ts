import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-highest-rated-movies-list',
  templateUrl: './highest-rated-movies-list.component.html',
  styleUrls: ['./highest-rated-movies-list.component.css']
})
export class HighestRatedMoviesListComponent implements OnInit {
  currentPage: number = 1;
  movies: any[] = [];
  isLoading: boolean = true;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies() {
    this.moviesService.fetchHighestRatedMovies(this.currentPage).subscribe(data => {
      this.movies = data.results.filter((movie: any) => movie.poster_path !== null && movie.vote_average !== 0);
      this.isLoading = false;
    });
  }

  nextPage() {
    this.currentPage++;
    this.fetchMovies();
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchMovies();
    }
  }
}
