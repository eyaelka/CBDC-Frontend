import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialbankDashboardComponent } from './commercialbank-dashboard.component';

describe('CommercialbankDashboardComponent', () => {
  let component: CommercialbankDashboardComponent;
  let fixture: ComponentFixture<CommercialbankDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialbankDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialbankDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
