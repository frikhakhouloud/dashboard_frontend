import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountCustomerOrderPerDivisionComponent } from './count-customer-order-per-division.component';

describe('CountCustomerOrderPerDivisionComponent', () => {
  let component: CountCustomerOrderPerDivisionComponent;
  let fixture: ComponentFixture<CountCustomerOrderPerDivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountCustomerOrderPerDivisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountCustomerOrderPerDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
