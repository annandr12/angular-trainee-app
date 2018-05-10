import { Routes } from "@angular/router";

import { FilmComponent } from './film/film.component';
import { FilmListComponent } from './film-list/film-list.component';

export const routes: Routes = [
    {
      path: "",
      redirectTo: "films",
      pathMatch: "full"
    },
    {
      path: "films",
      component: FilmListComponent,
    },
    {
      path: "films/:id",
      component: FilmComponent
    },
];
