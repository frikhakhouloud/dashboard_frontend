import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCountPerCpComponent } from './filter-count-per-cp.component';

describe('FilterCountPerCpComponent', () => {
  let component: FilterCountPerCpComponent;
  let fixture: ComponentFixture<FilterCountPerCpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCountPerCpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterCountPerCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
