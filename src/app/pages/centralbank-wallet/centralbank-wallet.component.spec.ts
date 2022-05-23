import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralbankWalletComponent } from './centralbank-wallet.component';

describe('CentralbankWalletComponent', () => {
  let component: CentralbankWalletComponent;
  let fixture: ComponentFixture<CentralbankWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralbankWalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralbankWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
