import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonsService } from '../../services/persons.service';

@Component({
  selector: 'app-searched-persons-list',
  templateUrl: './searched-persons-list.component.html',
  styleUrls: ['./searched-persons-list.component.css']
})
export class SearchedPersonsListComponent implements OnInit {
  searchQuery: string = '';
  currentPage: number = 1;
  totalPages: number = 1;
  persons: any[] = [];
  isLoading: boolean = true;

  constructor(
    private personsService: PersonsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['query'] || '';
      this.currentPage = +params['page'] || 1;
      this.fetchPersons();
    });
  }

  fetchPersons(): void {
    if (this.searchQuery) {
      this.isLoading = true;
      this.personsService.searchPersons(this.searchQuery, this.currentPage).subscribe(
        (data) => {
          this.persons = data.results.filter((person: any) => person.profile_path !== null);
          this.totalPages = data.total_pages;
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;
          console.error('Error loading search results', error);
        }
      );
    }
  }

  onNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateQueryParams();
    }
  }

  onPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateQueryParams();
    }
  }

  private updateQueryParams(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        query: this.searchQuery,
        page: this.currentPage
      },
      queryParamsHandling: 'merge'
    });
  }
}





