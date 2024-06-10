import { Component, OnInit } from '@angular/core';
import { TvshowsService } from '../../services/tvshows.service';

@Component({
  selector: 'app-popular-tvshows-list',
  templateUrl: './popular-tvshows-list.component.html',
  styleUrls: ['./popular-tvshows-list.component.css']
})
export class PopularTvshowsListComponent implements OnInit {
  currentPage: number = 1;
  tvShows: any[] = [];
  isLoading: boolean = true;

  constructor(private tvshowsService: TvshowsService) {}

  ngOnInit(): void {
    this.fetchTvShows();
  }

  fetchTvShows() {
    this.tvshowsService.fetchPopularTvshows(this.currentPage).subscribe(data => {
      this.tvShows = data.results.filter((tvshow: any) => tvshow.poster_path !== null && tvshow.vote_average !== 0);
      this.isLoading = false;
    });
  }

  nextPage() {
    this.currentPage++;
    this.fetchTvShows();
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchTvShows();
    }
  }
}
