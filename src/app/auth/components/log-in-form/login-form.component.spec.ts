import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInFormComponent } from './login-form.component';

describe('LogInFormComponent', () => {
  let component: LogInFormComponent;
  let fixture: ComponentFixture<LogInFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LogInFormComponent],
    });
    fixture = TestBed.createComponent(LogInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
