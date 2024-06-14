import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatCard, MatCardImage, MatCardContent } from '@angular/material/card';

@Component({
    selector: 'app-person-card',
    templateUrl: './person-card.component.html',
    styleUrls: ['./person-card.component.css'],
    standalone: true,
    imports: [MatCard, MatCardImage, MatCardContent, MatIcon]
})
export class PersonCardComponent {
  @Input() person: any;

  posterBasePath = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

  getGender(gender: number): string {
    switch (gender) {
      case 1:
        return 'Female';
      case 2:
        return 'Male';
      default:
        return 'Other';
    }
  }
}


