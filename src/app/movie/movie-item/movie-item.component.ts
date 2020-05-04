import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { Movie } from 'src/app/movie/models/movie.model';
import { MovieService } from '../services/movie.service';
import { NavbarService } from './../../navbar/services/navbar.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  id: number;
  movie: Movie;
  movieSubs$: Subscription;

  constructor(
    private movieService: MovieService,
    private navbarService: NavbarService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.movieSubs$ = this.movieService.movie(this.id)
      .subscribe(movie => {
        this.movie = this.movie;
        console.log(this.movie)
        this.navbarService.title.next(this.movie.title)
      })
  }
  ngOnDestroy() {
    this.movieSubs$.unsubscribe();
  }
}
