import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCostPerOrganismeComponent } from './filter-cost-per-organisme.component';

describe('FilterCostPerOrganismeComponent', () => {
  let component: FilterCostPerOrganismeComponent;
  let fixture: ComponentFixture<FilterCostPerOrganismeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCostPerOrganismeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterCostPerOrganismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
