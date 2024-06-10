import { Component, OnInit } from '@angular/core';
import { TvshowsService } from '../../services/tvshows.service';

@Component({
  selector: 'app-popular-tvshows-list',
  templateUrl: './popular-tvshows-list.component.html',
  styleUrl: './popular-tvshows-list.component.css'
})
export class PopularTvshowsListComponent implements OnInit {
  currentPage: number = 1;
  tvShows: any[] = [];
  isLoading: boolean = true;

  constructor(private tvshowsService: TvshowsService) {}

  ngOnInit(): void {
    this.fetchTvSeries();
  }

  fetchTvSeries() {
    this.tvshowsService.fetchPopularTvshows(this.currentPage).subscribe(data => {
      this.tvShows = data.results.filter((tvshow: any) => tvshow.poster_path !== null && tvshow.vote_average !== 0);
      this.isLoading = false;
    });
  }

  nextPage() {
    this.currentPage++;
    this.fetchTvSeries();
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchTvSeries();
    }
  }
}