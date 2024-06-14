import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MoviesService } from '../../services/movies.service';
import { VideoDialogComponent } from '../../shared/video-dialog/video-dialog.component';
import { MatIcon } from '@angular/material/icon';
import { MatCard, MatCardImage, MatCardContent } from '@angular/material/card';

// Bruger backticks `` til multi-line strings og som også tillader mig at bruge expressions i mine strings med interpolation syntax.
// single quotes '' supporter ikke expressions i en string, der skal man bruge concatenation for dynamisk content. Derudover er '' til single-strings.
// Hvis der skal tilføjes flere strings til single quotes skal der bruges concatenation eller escape characters.
// concatenation: let multi-string = string1 + ' ' + string2    ..  altså 2 strings sat sammen med et mellemrum f.eks. 
// Escape characters er f.eks. \n \t 

// Dette eksempel er bare for at vise at hele komponenten kan laves i ÉN fil så der ikke er en .css og .html fil tilhørende.

@Component({
    selector: 'app-movie-card',

    template: `
    <mat-card class="moviecard">
    <img mat-card-image [src]="'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.poster_path" [alt]="movie.title" />
    <mat-card-content>
      <h3 class="mat-card-title">{{ movie.title.substring(0, 200) }}</h3>
      <mat-icon aria-hidden="true">star_half</mat-icon>
      <span class="ml-1">{{ movie.vote_average }}</span>
      <p class="mat-card-subtitle">{{ movie.overview.substring(0, 125).concat('....') }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
          <mat-icon aria-hidden="true">event</mat-icon>
          <span class="ml-1">{{ movie.release_date }}</span>
        </div>
        <mat-icon aria-hidden="true" class="cursor-icon" (click)="openDialog()">play_circle</mat-icon>
      </div>
    </mat-card-content>
    </mat-card>
    `,
    
    styles: `
  .moviecard {
    border: 1px solid #000000;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(240, 238, 238, 0.1);
    margin: 4px;
    background-color: #32383e;
  }
  
  .moviecard mat-card-content {
    padding: 16px;
  }

  .cursor-icon {
    cursor: pointer;
  }
    `,

    standalone: true,
    imports: [MatCard, MatCardImage, MatCardContent, MatIcon]

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
      width: '80vw',
      maxWidth: '100vw',
      height: '45vw',
      maxHeight: '100vh', 
      data: { videoId: this.trailerVideoId }
    });
  }
  
}




