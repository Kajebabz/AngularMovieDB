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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { VideoDialogComponent } from './shared/video-dialog/video-dialog.component';
import { PopularMoviesListComponent } from './movies/popular-movies-list/popular-movies-list.component';
import { PopularTvshowsListComponent } from './tv-shows/popular-tvshows-list/popular-tvshows-list.component';
import { TvshowCardComponent } from './tv-shows/tvshow-card/tvshow-card.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { PopularPersonsListComponent } from './persons/popular-persons-list/popular-persons-list.component';
import { PersonCardComponent } from './persons/person-card/person-card.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { SearchedPersonsListComponent } from './persons/searched-persons-list/searched-persons-list.component';
import { SearchedTvshowsListComponent } from './tv-shows/searched-tvshows-list/searched-tvshows-list.component';
import { SearchedMoviesListComponent } from './movies/searched-movies-list/searched-movies-list.component';

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
    TvshowCardComponent,
    PaginationComponent,
    PopularPersonsListComponent,
    PersonCardComponent,
    SearchBarComponent,
    SearchedPersonsListComponent,
    SearchedTvshowsListComponent,
    SearchedMoviesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatPaginatorModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
