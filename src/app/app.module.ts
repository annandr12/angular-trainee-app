import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { FilmListComponent } from './film-list/film-list.component';

import { FilmService } from './films.service'
import { routes } from './app.routes';
import { CharacterComponent } from './character/character.component';
import { CharacterListComponent } from './character-list/character-list.component'


@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    FilmListComponent,
    CharacterComponent,
    CharacterListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
