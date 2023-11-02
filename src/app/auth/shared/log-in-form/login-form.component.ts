import { Component, EventEmitter, Input, Output, inject } from '@angular/core'
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
import { LogInFormInterface } from '../../types/login-form.interface'
import { LoginFormGroupInterface } from '../../types/login-formgroup.interface'

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LogInFormComponent {
  @Input() button: string = ''
  @Output() submit: EventEmitter<LogInFormInterface> =
    new EventEmitter<LogInFormInterface>()

  loginForm: FormGroup = new FormGroup<LoginFormGroupInterface>({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  })

  onSubmit(): void {
    this.submit.emit(this.loginForm.value)
  }
}
