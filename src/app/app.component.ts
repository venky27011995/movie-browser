import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-browser';
  movies = {
    "movies1": "Avengers",
    "movie2": "IronMan",
    "movie3": "Hulk",
    "movie4": "Black Panther"
  }

}
