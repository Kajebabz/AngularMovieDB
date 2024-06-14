import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css'],
    standalone: true,
    imports: [FormsModule]
})
export class SearchBarComponent {
  searchQuery: string = '';

  constructor(
    private router: Router,
  ) {}

  search(): void {
    const currentRoute = this.router.url;

    if (currentRoute.includes('/Persons') || currentRoute.includes('/searched-persons')) {
      this.router.navigate(['/searched-persons'], { queryParams: { query: this.searchQuery, page: 1 }
      });
    } else if (currentRoute.includes('/TvShows') || currentRoute.includes('/searched-tvshows')) {
      this.router.navigate(['/searched-tvshows'], { queryParams: { query: this.searchQuery, page: 1 }
      });
    } else if (currentRoute.includes('/Movies') || currentRoute.includes('/searched-movies')) {
      this.router.navigate(['/searched-movies'], { queryParams: { query: this.searchQuery, page: 1 }
      });
    }
    this.searchQuery = '';
  }
}






