import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedMoviesListComponent } from './searched-movies-list.component';

describe('SearchedMoviesListComponent', () => {
  let component: SearchedMoviesListComponent;
  let fixture: ComponentFixture<SearchedMoviesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SearchedMoviesListComponent]
})
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchedMoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
