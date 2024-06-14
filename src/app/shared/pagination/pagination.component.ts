import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css'],
    standalone: true,
    imports: [MatButton]
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Output() nextPage: EventEmitter<void> = new EventEmitter<void>();
  @Output() previousPage: EventEmitter<void> = new EventEmitter<void>();

  onNext(): void {
    this.nextPage.emit();
  }

  onPrevious(): void {
    this.previousPage.emit();
  }
}



