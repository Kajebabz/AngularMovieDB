import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestRatedMoviesListComponent } from './highest-rated-movies-list.component';

describe('HighestRatedMoviesListComponent', () => {
  let component: HighestRatedMoviesListComponent;
  let fixture: ComponentFixture<HighestRatedMoviesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighestRatedMoviesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighestRatedMoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
