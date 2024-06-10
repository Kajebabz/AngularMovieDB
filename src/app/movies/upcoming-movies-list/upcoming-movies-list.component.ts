import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-upcoming-movies-list',
  templateUrl: './upcoming-movies-list.component.html',
  styleUrls: ['./upcoming-movies-list.component.css']
})
export class UpcomingMoviesListComponent implements OnInit {
  currentPage: number = 1;
  movies: any[] = [];
  isLoading: boolean = true;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies() {
    this.moviesService.fetchUpcomingMovies(this.currentPage).subscribe(data => {
      this.movies = data.results.filter((movie: any) => movie.poster_path !== null);
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

