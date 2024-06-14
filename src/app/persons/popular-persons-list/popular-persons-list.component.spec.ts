import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularPersonsListComponent } from './popular-persons-list.component';

describe('PopularPersonsListComponent', () => {
  let component: PopularPersonsListComponent;
  let fixture: ComponentFixture<PopularPersonsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PopularPersonsListComponent]
})
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularPersonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
