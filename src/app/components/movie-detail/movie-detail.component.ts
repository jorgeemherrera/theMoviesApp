import { Component, OnInit } from '@angular/core';

import { NavbarService } from './../navbar/services/navbar.service';
import { MovieService } from './../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  constructor(
    private movieService: MovieService,
    private navbarService: NavbarService) { }

  ngOnInit() {
    this.movieService.getMovies();
    this.navbarService.title.next('The Movies App!');
  }
}
