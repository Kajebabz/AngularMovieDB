import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieCardComponent } from '../movie-card/movie-card.component';

import { PaginationComponent } from '../../shared/pagination/pagination.component';

@Component({
    selector: 'app-popular-movies-list',
    templateUrl: './popular-movies-list.component.html',
    styleUrl: './popular-movies-list.component.css',
    standalone: true,
    imports: [PaginationComponent, MovieCardComponent]
})
export class PopularMoviesListComponent implements OnInit {
  currentPage: number = 1;
  totalPages: number = 1;
  movies: any[] = [];
  isLoading: boolean = true;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies() {
    this.moviesService.fetchPopularMovies(this.currentPage).subscribe(data => {
      this.movies = data.results.filter((movie: any) => movie.poster_path !== null && movie.vote_average !== 0);
      this.totalPages = data.total_pages;
      this.isLoading = false;
    });
  }

  onNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.fetchMovies();
    }
  }

  onPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchMovies();
    }
  }
}