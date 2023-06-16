import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCountPerDivisionComponent } from './filter-count-per-division.component';

describe('FilterCountPerDivisionComponent', () => {
  let component: FilterCountPerDivisionComponent;
  let fixture: ComponentFixture<FilterCountPerDivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCountPerDivisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterCountPerDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
