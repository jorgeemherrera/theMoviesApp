import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { NavbarService } from '../../components/navbar/services/navbar.service';
import { Movie } from '../models/movie.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movies$: Observable<Movie[]>;
  constructor(
    private movieService: MovieService,
    private navbarService: NavbarService) { }

  ngOnInit() {
    this.movies$ = this.movieService.getMovies();
    this.navbarService.title.next('The Movies App!');
  }
}
