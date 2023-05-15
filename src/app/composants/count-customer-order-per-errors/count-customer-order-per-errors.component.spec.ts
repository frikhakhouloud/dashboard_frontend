import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountCustomerOrderPerErrorsComponent } from './count-customer-order-per-errors.component';

describe('CountCustomerOrderPerErrorsComponent', () => {
  let component: CountCustomerOrderPerErrorsComponent;
  let fixture: ComponentFixture<CountCustomerOrderPerErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountCustomerOrderPerErrorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountCustomerOrderPerErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
