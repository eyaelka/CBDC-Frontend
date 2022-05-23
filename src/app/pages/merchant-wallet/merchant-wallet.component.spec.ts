import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantWalletComponent } from './merchant-wallet.component';

describe('MerchantWalletComponent', () => {
  let component: MerchantWalletComponent;
  let fixture: ComponentFixture<MerchantWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantWalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
