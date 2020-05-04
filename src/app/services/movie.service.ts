import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Movie } from './../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesURL = 'http://www.mocky.io/v2/5dc3c053300000540034757b';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getMovies() {
    return this.http.get<Movie[]>(this.moviesURL).pipe(this.addDelay);
  }
  movie(id: number) {
    return this.http.get<Movie[]>(`${this.moviesURL}/${id}`)
  }
  addDelay(obs: Observable<any>) {
    return obs.pipe(delay(1000));
  }
}
