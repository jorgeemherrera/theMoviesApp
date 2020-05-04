import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';
import { MovieRoutingModule } from './../components/movie-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
  CommonModule, 
  MovieRoutingModule
  ]
})
export class MovieModule { }
