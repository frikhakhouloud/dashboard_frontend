import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostCustomerOrderPerDivisionComponent } from './cost-customer-order-per-division.component';

describe('CostCustomerOrderPerDivisionComponent', () => {
  let component: CostCustomerOrderPerDivisionComponent;
  let fixture: ComponentFixture<CostCustomerOrderPerDivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostCustomerOrderPerDivisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostCustomerOrderPerDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
