import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
const routes: Routes = [
  {
    path: '',
    component: MovieItemComponent
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
