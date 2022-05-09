import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateMerchantComponent } from './activate-merchant.component';

describe('ActivateMerchantComponent', () => {
  let component: ActivateMerchantComponent;
  let fixture: ComponentFixture<ActivateMerchantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivateMerchantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
