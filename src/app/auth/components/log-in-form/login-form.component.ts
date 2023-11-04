import {
  Component,
  Input,
  OnInit,
  inject,
  ChangeDetectionStrategy,
  CUSTOM_ELEMENTS_SCHEMA,
  OnChanges,
  SimpleChanges,
} from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button'
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { LoginFormGroupInterface } from '../../types/login-formgroup.interface'
import { UsersListComponent } from 'src/app/users-list/users-list.component'
import { Observable, iif } from 'rxjs'
import { FormTypeEnum } from '../../constants/form-type.enum'
import { confirmPassword } from '../../validators/confirm-password.validator'
import { CommonModule } from '@angular/common'
import { ErrorStateMatcher } from '@angular/material/core'
import { LogInFormInterface } from '../../types/login-form.interface'
import { SigninFormInterface } from '../../types/signin-form.interface'
import { Store } from '@ngrx/store'
import { authActions } from '../../store/action'
import { AuthStateInterface } from '../../types/auth-state.interface'
import { selectIsSubmitting } from '../../store/reducer'
import { ConfirmValidParentMatcher } from 'src/app/shared/validators/error-state-matcher'

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    UsersListComponent,
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogInFormComponent implements OnInit, OnChanges {
  @Input() button: string = ''
  formType: typeof FormTypeEnum = FormTypeEnum
  confirmValidParentMatcher = new ConfirmValidParentMatcher()

  private store = inject(Store<{ auth: AuthStateInterface }>)

  isSubmitting$: Observable<boolean> = this.store.select(selectIsSubmitting)

  loginForm: FormGroup = new FormGroup<LoginFormGroupInterface>(
    {
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      confirmPassword: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    },
    { validators: [confirmPassword] },
  )

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes['button'].currentValue === FormTypeEnum.LOGIN) {
        this.loginForm.controls['name'].removeValidators([Validators.required])
        this.loginForm.controls['name'].updateValueAndValidity()
        this.loginForm.controls['confirmPassword'].removeValidators([
          Validators.required,
        ])
        this.loginForm.controls['confirmPassword'].updateValueAndValidity()
        this.loginForm.removeValidators([confirmPassword])
        this.loginForm.updateValueAndValidity()
      }
    }
  }

  ngOnInit(): void {
    this.loginForm.controls['name'].statusChanges.subscribe()
  }

  onSubmit(): void {
    const loginValue: LogInFormInterface = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value,
    }

    const signinValue: SigninFormInterface = {
      ...loginValue,
      name: this.loginForm.controls['name'].value,
    }

    this.button === FormTypeEnum.LOGIN
      ? this.store.dispatch(authActions.login({ request: loginValue }))
      : this.store.dispatch(authActions.signin({ request: signinValue }))
  }
}
