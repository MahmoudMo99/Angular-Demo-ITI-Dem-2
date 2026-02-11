import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginApi } from './login-api';

describe('LoginApi', () => {
  let component: LoginApi;
  let fixture: ComponentFixture<LoginApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginApi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
