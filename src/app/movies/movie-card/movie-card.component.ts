import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MoviesService } from '../../services/movies.service';
import { VideoDialogComponent } from '../../shared/video-dialog/video-dialog.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any;
  trailerVideoId: string = '';

  constructor(private moviesService: MoviesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchMovieVideos();
  }

  fetchMovieVideos() {
    this.moviesService.fetchMovieVideos(this.movie.id).subscribe(data => {
      console.log(data)
      const trailer = data.results.find((video: any) => video.type === 'Trailer');
      if (trailer) {
        this.trailerVideoId = trailer.key;
      }
    });
  }

  openDialog() {
    this.dialog.open(VideoDialogComponent, {
      width: '60%',
      // maxWidth: '100vw',
      height: '50%',
      // maxHeight: '100vh', 
      data: { videoId: this.trailerVideoId },
      panelClass: 'custom-height-adjustment',
      disableClose: false
    });
  }
  
}




