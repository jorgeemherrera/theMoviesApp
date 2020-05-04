import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMovieComponent } from '../movie/add-movie/add-movie.component';
import { HomeComponent } from './home/home.component';
import { TopFiveComponent } from './top-five/top-five.component';
import { MovieDetailComponent } from '../movie/movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add',
    component: AddMovieComponent
  },
  {
    path: 'top',
    component: TopFiveComponent
  },
  {
    path: ':id',
    component: MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
exports: [RouterModule]
})
export class MovieRoutingModule { }
