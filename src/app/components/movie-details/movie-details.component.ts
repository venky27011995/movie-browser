import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { stringify } from '@angular/compiler/src/util';
import { ActivatedRoute } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie_Details: any;
  constructor(private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      let id = params['imdbID'];
      this.moviesService.getMovieDetails(id).subscribe(res => this.movie_Details = res)
    })
  }
  goBack() {
    window.history.back()
  }

}
