import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulatetransferComponent } from './regulatetransfer.component';

describe('RegulatetransferComponent', () => {
  let component: RegulatetransferComponent;
  let fixture: ComponentFixture<RegulatetransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegulatetransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulatetransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
