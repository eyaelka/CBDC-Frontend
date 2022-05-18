import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralbankformComponent } from './centralbankform.component';

describe('CentralbankformComponent', () => {
  let component: CentralbankformComponent;
  let fixture: ComponentFixture<CentralbankformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralbankformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralbankformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
