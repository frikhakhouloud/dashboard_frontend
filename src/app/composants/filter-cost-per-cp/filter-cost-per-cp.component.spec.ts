import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCostPerCpComponent } from './filter-cost-per-cp.component';

describe('FilterCostPerCpComponent', () => {
  let component: FilterCostPerCpComponent;
  let fixture: ComponentFixture<FilterCostPerCpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCostPerCpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterCostPerCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
