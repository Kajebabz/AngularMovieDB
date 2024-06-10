import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './movies/movie-card/movie-card.component';
import { HighestRatedMoviesListComponent } from './movies/highest-rated-movies-list/highest-rated-movies-list.component';
import { UpcomingMoviesListComponent } from './movies/upcoming-movies-list/upcoming-movies-list.component';
import { HomeComponent } from './home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'
import { VideoDialogComponent } from './shared/video-dialog/video-dialog.component';
import { PopularMoviesListComponent } from './movies/popular-movies-list/popular-movies-list.component';
import { PopularTvshowsListComponent } from './tv-shows/popular-tvshows-list/popular-tvshows-list.component';
import { TvshowCardComponent } from './tv-shows/tvshow-card/tvshow-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    HighestRatedMoviesListComponent,
    UpcomingMoviesListComponent,
    HomeComponent,
    VideoDialogComponent,
    PopularMoviesListComponent,
    PopularTvshowsListComponent,
    TvshowCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
