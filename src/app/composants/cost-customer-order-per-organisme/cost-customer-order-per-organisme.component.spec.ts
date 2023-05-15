import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostCustomerOrderPerOrganismeComponent } from './cost-customer-order-per-organisme.component';

describe('CostCustomerOrderPerOrganismeComponent', () => {
  let component: CostCustomerOrderPerOrganismeComponent;
  let fixture: ComponentFixture<CostCustomerOrderPerOrganismeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostCustomerOrderPerOrganismeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostCustomerOrderPerOrganismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
