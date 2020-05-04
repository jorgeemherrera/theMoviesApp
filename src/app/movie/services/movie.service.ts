import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Movie, movies } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesTopURL = 'http://www.mocky.io/v2/5dc3c053300000540034757b';
  private moviesURL = "http://localhost:3000/movies";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  getMovies() {
    return of(movies);
  }

  getTopMovies() {
    return this.http.get<Movie[]>(this.moviesTopURL).pipe(this.addDelay);
  }
  movie(id: number) {
    return of(
      movies.find(movie => +movie.id === +id)
    )
  }

  addMovie(movie: Movie) {
    return this.http.post(this.moviesURL, movie);
  }
  addDelay(obs: Observable<any>) {
    return obs.pipe(delay(1000));
  }
}
