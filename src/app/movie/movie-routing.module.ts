import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMovieComponent } from './add-movie/add-movie.component';
import { TopFiveComponent } from './top-five/top-five.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
  },
  {
    path: 'top',
    component: TopFiveComponent
  },
  {
    path: 'add',
    component: AddMovieComponent,
  },
  {
    path: ':id',
    component: MovieDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
exports: [RouterModule]
})
export class MovieRoutingModule { }
