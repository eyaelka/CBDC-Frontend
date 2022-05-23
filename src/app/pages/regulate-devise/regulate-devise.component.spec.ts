import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulateDeviseComponent } from './regulate-devise.component';

describe('RegulateDeviseComponent', () => {
  let component: RegulateDeviseComponent;
  let fixture: ComponentFixture<RegulateDeviseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegulateDeviseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulateDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
