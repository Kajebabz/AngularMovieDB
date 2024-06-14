import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../../services/persons.service';
import { PersonCardComponent } from '../person-card/person-card.component';

import { PaginationComponent } from '../../shared/pagination/pagination.component';

@Component({
    selector: 'app-popular-persons-list',
    templateUrl: './popular-persons-list.component.html',
    styleUrls: ['./popular-persons-list.component.css'],
    standalone: true,
    imports: [PaginationComponent, PersonCardComponent]
})
export class PopularPersonsListComponent implements OnInit {
  currentPage: number = 1;
  totalPages: number = 1;
  persons: any[] = [];
  isLoading: boolean = true;

  constructor(private personsService: PersonsService) {}

  ngOnInit(): void {
    this.fetchPersons();
  }

  fetchPersons(): void {
    this.isLoading = true;
    this.personsService.fetchPopularPersons(this.currentPage).subscribe(
      (data) => {
        this.persons = data.results.filter((person: any) => person.profile_path !== null);
        this.totalPages = data.total_pages;
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        console.error('Error loading persons', error);
      }
    );
  }

  onNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.fetchPersons();
    }
  }

  onPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchPersons();
    }
  }
}



