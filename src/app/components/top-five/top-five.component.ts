import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie/services/movie.service';
import { NavbarService } from '../../navbar/services/navbar.service';

@Component({
  selector: 'app-top-five',
  templateUrl: './top-five.component.html',
  styleUrls: ['./top-five.component.scss']
})
export class TopFiveComponent implements OnInit {

  title: 'Top 5 Movies'
  movies: [];
  constructor(
    private movieService: MovieService,
    private navbarService: NavbarService) { }

  ngOnInit() {
    this.movieService.getTopMovies().subscribe(res => {
      this.movies = res['movies'];
    });
    this.navbarService.title.next('The Movies App!');
  }
}
