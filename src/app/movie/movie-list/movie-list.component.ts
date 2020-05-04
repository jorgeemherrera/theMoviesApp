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
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-50px)' }),
            stagger(
              '40ms',
              animate(
                '300ms ease-in',
                style({ opacity: 1, transform: 'translateY(0px)' }),
              ),
            ),
          ],
          { optional: true },
        ),
        query(
          ':leave',
          [animate('300ms', style({ opacity: 0, transform: 'rotate(90deg)' }))],
          {
            optional: true,
          },
        ),
      ]),
    ]),
  ]
})
export class MovieListComponent implements OnInit {
  movie: Movie[];
  movies$: Observable<Movie[]>;
  loadingMovies: Array<Number>;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private navbarService: NavbarService
  ) {}

  ngOnInit() {
    this.loadingMovies = new Array(10).fill(0).map((n, index) => index);
    this.movies$ = this.movieService.getMoviesURL();
    this.navbarService.title.next('The Movies App');
  }
  deleteMovie(movie: Movie){
    this.movieService.removeMovie(movie.id).subscribe();
  }
}
