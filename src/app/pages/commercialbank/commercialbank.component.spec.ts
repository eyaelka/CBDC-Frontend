import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialbankComponent } from './commercialbank.component';

describe('CommercialbankComponent', () => {
  let component: CommercialbankComponent;
  let fixture: ComponentFixture<CommercialbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialbankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
