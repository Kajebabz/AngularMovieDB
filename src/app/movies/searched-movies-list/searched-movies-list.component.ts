import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-searched-movies-list',
  templateUrl: './searched-movies-list.component.html',
  styleUrl: './searched-movies-list.component.css'
})
export class SearchedMoviesListComponent implements OnInit {
  searchQuery: string = '';
  currentPage: number = 1;
  totalPages: number = 1;
  movies: any[] = [];
  isLoading: boolean = true;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['query'] || '';
      this.currentPage = +params['page'] || 1;
      this.fetchMovies();
    });
  }

  fetchMovies(): void {
    if (this.searchQuery) {
      this.isLoading = true;
      this.moviesService.searchMovies(this.searchQuery, this.currentPage).subscribe(
        (data) => {
          this.movies = data.results.filter((movies: any) => movies.profile_path !== null);
          this.totalPages = data.total_pages;
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;
          console.error('Error loading search results', error);
        }
      );
    }
  }

  onNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateQueryParams();
    }
  }

  onPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateQueryParams();
    }
  }

  private updateQueryParams(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        query: this.searchQuery,
        page: this.currentPage
      },
      queryParamsHandling: 'merge'
    });
  }
}