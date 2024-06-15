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
      const trailer = data.results.find((video: any) => 
        video.type === 'Trailer' ||
        video.type === 'Featurette' || 
        video.type === 'Opening Credits' && 
        video.site === 'YouTube');
      if (trailer) {
        this.trailerVideoId = trailer.key;
      }
    });
  }

  openDialog() {
    if (this.trailerVideoId) {
      this.dialog.open(VideoDialogComponent, {
        width: '60%',
        // maxWidth: '100vw',
        height: '50%',
        // maxHeight: '100vh', 
        data: { videoId: this.trailerVideoId },
        panelClass: 'custom-height-adjustment',
        disableClose: false
      });
    } else {
      console.error('No trailer video ID available');
    }
  }
}

