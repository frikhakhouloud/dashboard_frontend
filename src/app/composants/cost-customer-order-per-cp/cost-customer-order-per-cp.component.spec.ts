import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostCustomerOrderPerCpComponent } from './cost-customer-order-per-cp.component';

describe('CostCustomerOrderPerCpComponent', () => {
  let component: CostCustomerOrderPerCpComponent;
  let fixture: ComponentFixture<CostCustomerOrderPerCpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostCustomerOrderPerCpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostCustomerOrderPerCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
