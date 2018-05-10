import { Injectable } from "@angular/core";
import { FilmListItem } from "./model/film-list-item";
import { FilmItem } from "./model/film-item";


import { Http, Response } from "@angular/http";


import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class FilmService {

  private url = "https://ghibliapi.herokuapp.com";

  constructor(private http: Http) { }

  public getFilmsList(): Observable<FilmListItem[]> {

    let films: Observable<FilmListItem[]> = this.http.get(this.url + '/films')
        .map(this.extractFilms)
        .catch(this.handleError);

    return films;
  }

  public getFilm(id: string): Observable<FilmItem> {
    let film: Observable<FilmItem> = this.http.get(this.url + '/films/' + id)
      .map(this.extractFilm)
      .catch(this.handleError)
    return film
  }

  private extractFilms(response: Response) {
    let res = response.json();
    let films: FilmListItem[] = [];
    for (let i = 0; i < res.length; i++) {
        films.push(new FilmListItem(res[i].id, res[i].title, res[i].description));
    }
    return films;
  }

  private extractFilm(response: Response) {
    let res = response.json();
    let film: FilmItem = new FilmItem({
      id: res.id,
      title: res.title,
      description: res.description,
      director: res.director,
      producer: res.producer,
      release_date: res.release_date,
      score: res.rt_score
    });
    return film
  }

  private handleError(error: any, cought: Observable<any>): any {
      let message = "";

      if (error instanceof Response) {
          let errorData = error.json().error || JSON.stringify(error.json());
          message = `${error.status} - ${error.statusText || ''} ${errorData}`
      } else {
          message = error.message ? error.message : error.toString();
      }

      console.error(message);

      return Observable.throw(message);
  }

}
