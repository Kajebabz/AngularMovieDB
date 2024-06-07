import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any;
  showModal: boolean = false;
  trailerVideoId: string = '';

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.fetchMovieVideos();
  }

  fetchMovieVideos() {
    this.moviesService.fetchMovieVideos(this.movie.id).subscribe(data => {
      const trailer = data.results.find((video: any) => video.type === 'Trailer');
      if (trailer) {
        this.trailerVideoId = trailer.key;
      }
    });
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}

