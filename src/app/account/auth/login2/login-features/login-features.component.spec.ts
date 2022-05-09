import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFeaturesComponent } from './login-features.component';

describe('LoginFeaturesComponent', () => {
  let component: LoginFeaturesComponent;
  let fixture: ComponentFixture<LoginFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
