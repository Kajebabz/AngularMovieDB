import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTvshowsListComponent } from './popular-tvshows-list.component';

describe('PopularTvshowsListComponent', () => {
  let component: PopularTvshowsListComponent;
  let fixture: ComponentFixture<PopularTvshowsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PopularTvshowsListComponent]
})
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularTvshowsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
