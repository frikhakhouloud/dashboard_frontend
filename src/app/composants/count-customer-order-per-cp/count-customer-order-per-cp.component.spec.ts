import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountCustomerOrderPerCpComponent } from './count-customer-order-per-cp.component';

describe('CountCustomerOrderPerCpComponent', () => {
  let component: CountCustomerOrderPerCpComponent;
  let fixture: ComponentFixture<CountCustomerOrderPerCpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountCustomerOrderPerCpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountCustomerOrderPerCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
