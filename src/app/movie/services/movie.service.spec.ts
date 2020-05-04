import { TestBed, getTestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { MovieService } from './movie.service';
import { Movie } from 'src/app/movie/models/movie.model';

describe('MovieService', () => {
  let movieService: MovieService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [MovieService],
  });

  httpMock = getTestBed().get(HttpTestingController);
  movieService = getTestBed().get(MovieService);
});
it('it is created', () =>{
  expect(movieService).toBeTruthy();
});
it('should get all movies from Http', () => {
  // Arrange
  const dummyMovies: Movie[] = [
    {
      id: 10,
      title: 'The Mask',
      release: '1994',
      description: 'An ancient mask transforms a drab bank clerk into a smiling Romeo with superhuman powers.',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51zKzNdNcSL._AC_.jpg'
    },
    {
      id: 11,
      title: 'Titanic',
      release: '1997',
      description: 'Movie where DiCaprio dies',
      image: 'https://pics.filmaffinity.com/Titanic-321994924-large.jpg'
    }
  ];
  // Act
  movieService.getTopMovies().subscribe(res => {
    expect(res.length).toBe(2);
    expect(res).toEqual(dummyMovies);
  });
  // Http mock
  let req = httpMock.expectOne(movieService.moviesURL);
  expect(req.request.method).toBe("GET");
  req.flush(dummyMovies);
});
});
