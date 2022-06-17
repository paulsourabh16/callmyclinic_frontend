import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordSuccessComponent } from './forget-password-success.component';

describe('ForgetPasswordSuccessComponent', () => {
  let component: ForgetPasswordSuccessComponent;
  let fixture: ComponentFixture<ForgetPasswordSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetPasswordSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPasswordSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
