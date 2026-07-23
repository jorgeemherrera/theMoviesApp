import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { MovieService } from '../../movie/services/movie.service';
import { NavbarService } from '../../navbar/services/navbar.service';

@Component({
  selector: 'app-top-five',
  standalone: false,
  templateUrl: './top-five.component.html',
  styleUrls: ['./top-five.component.scss']
})
export class TopFiveComponent implements OnInit {

  title: 'Top 5 Movies'
  movies$: Observable<Movie[]>;
  constructor(
    private movieService: MovieService,
    private navbarService: NavbarService) { }

  ngOnInit() {
    this.movies$ = this.movieService.getTopMovies();
    this.navbarService.title.next('The Movies App!');
  }
}
