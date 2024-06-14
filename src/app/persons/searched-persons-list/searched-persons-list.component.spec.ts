import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedPersonsListComponent } from './searched-persons-list.component';

describe('SearchedPersonsListComponent', () => {
  let component: SearchedPersonsListComponent;
  let fixture: ComponentFixture<SearchedPersonsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchedPersonsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchedPersonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
