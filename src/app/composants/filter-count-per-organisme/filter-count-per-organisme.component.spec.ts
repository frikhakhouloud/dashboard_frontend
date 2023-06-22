import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCountPerOrganismeComponent } from './filter-count-per-organisme.component';

describe('FilterCountPerOrganismeComponent', () => {
  let component: FilterCountPerOrganismeComponent;
  let fixture: ComponentFixture<FilterCountPerOrganismeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCountPerOrganismeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterCountPerOrganismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
