import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostCustomerOrderPerErrorsComponent } from './cost-customer-order-per-errors.component';

describe('CostCustomerOrderPerErrorsComponent', () => {
  let component: CostCustomerOrderPerErrorsComponent;
  let fixture: ComponentFixture<CostCustomerOrderPerErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostCustomerOrderPerErrorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostCustomerOrderPerErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
