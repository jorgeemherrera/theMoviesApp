import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../../../../handsOn/the-movies-app/src/app/movie/services/movie.service';
import { NavbarService } from './../navbar/services/navbar.service';

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
    this.getMovies();
    this.navbarService.title.next('The Movies App!');
  }

  getMovies() {
    this.movieService.getMovies();
  }

}
