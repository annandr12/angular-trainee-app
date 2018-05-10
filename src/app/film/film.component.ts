import { Component, OnInit } from '@angular/core';
import { FilmItem } from '../model/film-item'
import { Router, ActivatedRoute, Params } from "@angular/router";

import { FilmService } from '../films.service'

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  film: FilmItem

  constructor(private filmService: FilmService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.activatedRoute.params.forEach((params: Params) => {
        let id = params["id"];
        this.filmService
            .getFilm(id)
            .subscribe(
            film => this.film = film,
            error => console.log(error)
          )
    });
  }

}
