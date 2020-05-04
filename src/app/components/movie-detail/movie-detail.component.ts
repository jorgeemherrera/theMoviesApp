import { Component, OnInit } from '@angular/core';

import { NavbarService } from './../navbar/services/navbar.service';
import { MovieService } from './../../services/movie.service';
import { Movie } from './../../models/movie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movies: [];
  constructor(
    private movieService: MovieService,
    private navbarService: NavbarService) { }

  ngOnInit() {
    let test = this.movieService.getMovies().subscribe(res => {
      this.movies = res['movies'];
    });
    console.log('test', test)
    this.navbarService.title.next('The Movies App!');
  }
}
