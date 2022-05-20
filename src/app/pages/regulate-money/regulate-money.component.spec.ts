import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulateMoneyComponent } from './regulate-money.component';

describe('RegulateMoneyComponent', () => {
  let component: RegulateMoneyComponent;
  let fixture: ComponentFixture<RegulateMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegulateMoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulateMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
