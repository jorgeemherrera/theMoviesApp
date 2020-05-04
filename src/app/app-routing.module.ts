import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopFiveComponent } from './components/top-five/top-five.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full',
  },
  {
    path: 'top',
    component: TopFiveComponent
  }
  {
    path: 'movies',
    loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule],
})
export class AppRoutingModule {}
