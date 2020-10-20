import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

const baseUrl: string = 'http://www.omdbapi.com/?apikey=93498238';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  searchMovies(searchTerm: string): Observable<any> {

    return this.http.get(baseUrl, { params: { s: searchTerm } })
  }

  getMovieDetails(imdbID: string): Observable<any> {
    return this.http.get(baseUrl, { params: { i: imdbID } })
  }

}
