import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCostPerDivisionComponent } from './filter-cost-per-division.component';

describe('FilterCostPerDivisionComponent', () => {
  let component: FilterCostPerDivisionComponent;
  let fixture: ComponentFixture<FilterCostPerDivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCostPerDivisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterCostPerDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
