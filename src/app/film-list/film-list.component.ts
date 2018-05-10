import { Component, OnInit } from '@angular/core';
import { FilmListItem } from '../model/film-list-item'

import { FilmService } from '../films.service'

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  filmList: Array<FilmListItem>
  filmUrl: string = "/films"

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.filmService.getFilmsList().subscribe(
        films => this.filmList = films,
        error => console.log(error)
    );
  }

}
