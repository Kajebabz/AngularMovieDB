import { Component, OnInit } from '@angular/core';
import { TvshowsService } from '../../services/tvshows.service';
import { TvshowCardComponent } from '../tvshow-card/tvshow-card.component';

import { PaginationComponent } from '../../shared/pagination/pagination.component';

@Component({
    selector: 'app-popular-tvshows-list',
    templateUrl: './popular-tvshows-list.component.html',
    styleUrls: ['./popular-tvshows-list.component.css'],
    standalone: true,
    imports: [PaginationComponent, TvshowCardComponent]
})
export class PopularTvshowsListComponent implements OnInit {
  currentPage: number = 1;
  totalPages: number = 1;
  tvShows: any[] = [];
  isLoading: boolean = true;

  constructor(private tvshowsService: TvshowsService) {}

  ngOnInit(): void {
    this.fetchTvShows();
  }

  fetchTvShows() {
    this.tvshowsService.fetchPopularTvshows(this.currentPage).subscribe(data => {
      this.tvShows = data.results.filter((tvshow: any) => tvshow.poster_path !== null && tvshow.vote_average !== 0);
      this.totalPages = data.total_pages;
      this.isLoading = false;
    });
  }

  onNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.fetchTvShows();
    }
  }

  onPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchTvShows();
    }
  }
}
