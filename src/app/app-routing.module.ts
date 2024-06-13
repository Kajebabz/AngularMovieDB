import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighestRatedMoviesListComponent } from './movies/highest-rated-movies-list/highest-rated-movies-list.component';
import { UpcomingMoviesListComponent } from './movies/upcoming-movies-list/upcoming-movies-list.component';
import { HomeComponent } from './home/home.component';
import { PopularMoviesListComponent } from './movies/popular-movies-list/popular-movies-list.component';
import { PopularTvshowsListComponent } from './tv-shows/popular-tvshows-list/popular-tvshows-list.component';
import { PopularPersonsListComponent } from './persons/popular-persons-list/popular-persons-list.component';
import { SearchedPersonsListComponent } from './persons/searched-persons-list/searched-persons-list.component';
import { SearchedTvshowsListComponent } from './tv-shows/searched-tvshows-list/searched-tvshows-list.component';
import { SearchedMoviesListComponent } from './movies/searched-movies-list/searched-movies-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Movies/PopularMovies', component: PopularMoviesListComponent}, 
  { path: 'Movies/HighestRatedMovies', component: HighestRatedMoviesListComponent },
  { path: 'Movies/UpcomingMovies', component: UpcomingMoviesListComponent },
  { path: 'TvShows/PopularTvShows', component: PopularTvshowsListComponent},
  { path: 'Persons/PopularPersons', component: PopularPersonsListComponent},
  
  { path: 'searched-persons', component: SearchedPersonsListComponent},
  { path: 'searched-tvshows', component: SearchedTvshowsListComponent},
  { path: 'searched-movies', component: SearchedMoviesListComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
