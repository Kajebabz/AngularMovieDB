import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../../services/persons.service';

@Component({
  selector: 'app-popular-persons-list',
  templateUrl: './popular-persons-list.component.html',
  styleUrls: ['./popular-persons-list.component.css']
})
export class PopularPersonsListComponent implements OnInit {
  currentPage: number = 1;
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
        this.isLoading = false;
      },
    );
  }
}
