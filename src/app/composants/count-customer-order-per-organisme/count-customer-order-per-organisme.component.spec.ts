import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountCustomerOrderPerOrganismeComponent } from './count-customer-order-per-organisme.component';

describe('CountCustomerOrderPerOrganismeComponent', () => {
  let component: CountCustomerOrderPerOrganismeComponent;
  let fixture: ComponentFixture<CountCustomerOrderPerOrganismeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountCustomerOrderPerOrganismeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountCustomerOrderPerOrganismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
