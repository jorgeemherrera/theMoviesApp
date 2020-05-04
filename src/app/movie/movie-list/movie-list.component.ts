import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavbarService } from 'src/app/navbar/services/navbar.service';
import { Movie } from '../models/movie.model';
import { MovieService } from './../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movies$: Observable<Movie[]>;
  loadingMovies: Array<Number>;

  constructor(
    private movieService: MovieService,
    private navbarService: NavbarService,
  ) {}

  ngOnInit() {
    this.loadingMovies = new Array(10).fill(0).map((n, index) => index);

    this.movies$ = this.movieService.getMoviesURL();
    this.navbarService.title.next('The Movies App');
  }
}
