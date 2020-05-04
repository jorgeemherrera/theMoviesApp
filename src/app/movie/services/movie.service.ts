import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, catchError, tap, map } from 'rxjs/operators';
import { Movie, movies } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private moviesTopURL = 'http://www.mocky.io/v2/5dc3c053300000540034757b';
  private moviesURL = "http://localhost:3000/movies";
  
  constructor(private http: HttpClient) {}

  getMovies() {
    return of(movies);
  }

  getTopMovies() {
    return this.http.get<Movie[]>(this.moviesTopURL).pipe(this.addDelay);
  }

  getMoviesURL() {
    return this.http.get<Movie[]>(this.moviesURL).pipe(this.addDelay);
  }

  movie(id: number) {
    console.log(id);
    return of(movies.find(movie => +movie.id === +id));
  }

  getMoviesId(id: number) {
    return this.http.get<Movie>(`${this.moviesURL}/${id}`);
  }

  addMovie(movie: Movie) {
    return this.http.post(this.moviesURL, movie);
  }
  
  removeMovie(id: number) {
    return this.http.delete<Movie>(`${this.moviesURL}/${id}`)
    .pipe(tap(status => console.log("status: " + status)),
    catchError(this.handleError));
  }

  addDelay(obs: Observable<any>) {
    return obs.pipe(delay(1000));
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
}
