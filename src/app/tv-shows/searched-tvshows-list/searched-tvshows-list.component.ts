import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TvshowsService } from '../../services/tvshows.service';
import { TvshowCardComponent } from '../tvshow-card/tvshow-card.component';

import { PaginationComponent } from '../../shared/pagination/pagination.component';

@Component({
    selector: 'app-searched-tvshows-list',
    templateUrl: './searched-tvshows-list.component.html',
    styleUrl: './searched-tvshows-list.component.css',
    standalone: true,
    imports: [PaginationComponent, TvshowCardComponent]
})
export class SearchedTvshowsListComponent implements OnInit {
  searchQuery: string = '';
  currentPage: number = 1;
  totalPages: number = 1;
  tvShows: any[] = [];
  isLoading: boolean = true;

  constructor(
    private tvshowService: TvshowsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['query'] || '';
      this.currentPage = +params['page'] || 1;
      this.fetchTvShows();
    });
  }

  fetchTvShows(): void {
    if (this.searchQuery) {
      this.isLoading = true;
      this.tvshowService.searchTvShows(this.searchQuery, this.currentPage).subscribe(
        (data) => {
          this.tvShows = data.results.filter((tvShows: any) => tvShows.profile_path !== null);
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