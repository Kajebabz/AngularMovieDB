import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighestRatedMoviesListComponent } from './highest-rated-movies-list/highest-rated-movies-list.component';
import { UpcomingMoviesListComponent } from './upcoming-movies-list/upcoming-movies-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent }, 
  { path: 'HighestRatedMovies', component: HighestRatedMoviesListComponent },
  { path: 'UpcomingMovies', component: UpcomingMoviesListComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
