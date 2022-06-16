import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialbankWalletComponent } from './commercialbank-wallet.component';

describe('CommercialbankWalletComponent', () => {
  let component: CommercialbankWalletComponent;
  let fixture: ComponentFixture<CommercialbankWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialbankWalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialbankWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
