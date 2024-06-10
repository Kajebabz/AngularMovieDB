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
  totalItems: number = 0; // Total number of items to be paginated

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies() {
    this.moviesService.fetchUpcomingMovies(this.currentPage).subscribe(data => {
      this.movies = data.results.filter((movie: any) => movie.poster_path !== null);
      this.totalItems = data.total_results; // Assign total items for pagination
      this.isLoading = false;
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.fetchMovies(); // Fetch movies for the new page
  }
}


