import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movies/movie-list.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [{ path: 'movies-list', component: MovieListComponent}];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }