import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedTvshowsListComponent } from './searched-tvshows-list.component';

describe('SearchedTvshowsListComponent', () => {
  let component: SearchedTvshowsListComponent;
  let fixture: ComponentFixture<SearchedTvshowsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SearchedTvshowsListComponent]
})
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchedTvshowsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
