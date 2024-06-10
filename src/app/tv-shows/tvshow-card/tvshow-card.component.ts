import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TvshowsService } from '../../services/tvshows.service';
import { VideoDialogComponent } from '../../shared/video-dialog/video-dialog.component';

@Component({
  selector: 'app-tvshow-card',
  templateUrl: './tvshow-card.component.html',
  styleUrls: ['./tvshow-card.component.css']
})
export class TvshowCardComponent implements OnInit {
  @Input() tvshow: any;
  trailerVideoId: string = '';

  constructor(private tvshowsService: TvshowsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchTvseriesVideos();
  }

  fetchTvseriesVideos() {
    this.tvshowsService.fetchTvseriesVideos(this.tvshow.id).subscribe(data => {
      console.log(data)
      const trailer = data.results.find((video: any) => video.type === 'Trailer');
      if (trailer) {
        this.trailerVideoId = trailer.key;
      }
    });
  }

  openDialog() {
    this.dialog.open(VideoDialogComponent, {
      width: '80vw',
      maxWidth: '100vw',
      height: '45vw',
      maxHeight: '100vh', 
      data: { videoId: this.trailerVideoId }
    });
  }
}
