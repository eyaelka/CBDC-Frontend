import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralbankDashboardComponent } from './centralbank-dashboard.component';

describe('CentralbankDashboardComponent', () => {
  let component: CentralbankDashboardComponent;
  let fixture: ComponentFixture<CentralbankDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralbankDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralbankDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
