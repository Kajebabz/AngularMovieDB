import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighestRatedMoviesListComponent } from './movies/highest-rated-movies-list/highest-rated-movies-list.component';
import { UpcomingMoviesListComponent } from './movies/upcoming-movies-list/upcoming-movies-list.component';
import { HomeComponent } from './home/home.component';
import { PopularMoviesListComponent } from './movies/popular-movies-list/popular-movies-list.component';
import { PopularTvshowsListComponent } from './tv-shows/popular-tvshows-list/popular-tvshows-list.component';
import { PopularPersonsListComponent } from './persons/popular-persons-list/popular-persons-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Movies/PopularMovies', component: PopularMoviesListComponent}, 
  { path: 'Movies/HighestRatedMovies', component: HighestRatedMoviesListComponent },
  { path: 'Movies/UpcomingMovies', component: UpcomingMoviesListComponent },
  { path: 'TvShows/PopularTvShows', component: PopularTvshowsListComponent},
  { path: 'Persons/PopularPersons', component: PopularPersonsListComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
