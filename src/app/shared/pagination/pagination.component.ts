import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() totalItems: number = 0;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  pageSizeOptions: number[] = [5, 10, 25];
  pageSize: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

  pageChanged(event: PageEvent) {
    this.pageChange.emit(event.pageIndex + 1);
  }
}


