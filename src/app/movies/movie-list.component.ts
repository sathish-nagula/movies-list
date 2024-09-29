import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms'

export interface Movie {
  Title: string;
  Year: number;
  imdbID: string;
}

interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Movie[];
}

@Component({
  standalone: true,
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  imports: [CommonModule, HttpClientModule, FormsModule]
})

export class MovieListComponent implements OnInit {
  year:number;
  movies: Movie[] = [];
  noResults = false;

  constructor(private http: HttpClient) {
    this.year = 2020;
  }

  ngOnInit() {
    //this.searchMovies();
  }
  searchMovies() {
    // if (!this.year) return;

    this.http.get<ApiResponse>(`https://jsonmock.hackerrank.com/api/moviesdata?Year=${this.year}`)
      .subscribe(response => {
        this.movies = response.data;
        this.noResults = this.movies.length === 0;
      });
  }

  
}
