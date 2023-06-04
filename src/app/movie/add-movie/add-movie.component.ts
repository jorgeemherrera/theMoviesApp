import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/navbar/services/navbar.service';
import { MovieService } from './../services/movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  movieForm = new UntypedFormGroup({
    title: new UntypedFormControl('', [Validators.required]),
    image: new UntypedFormControl('', [Validators.required]),
    genre: new UntypedFormControl('', [Validators.required]),
    release: new UntypedFormControl('', [Validators.required]),
    description: new UntypedFormControl('', [Validators.required])
  });

  constructor(
    private router: Router,
    private movieService: MovieService,
    private navbarService: NavbarService,
  ) {}

  title = 'Add Movie';

  ngOnInit() {
    this.navbarService.title.next('Add Movies');
  }

  addMovie() {
    if (this.movieForm.valid) {
      this.movieService.addMovie(this.movieForm.value).subscribe(res => {
        this.movieForm.reset();
        this.router.navigate(['/']);
      });
    }
  }
}
