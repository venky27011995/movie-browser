import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service'
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: any[];
  constructor(private movieService: MoviesService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(
      paramsTerm => this.movieService.searchMovies(paramsTerm['q']).subscribe(res => this.movies = res.Search)
    )

  }



}
