import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LogInFormComponent } from '../log-in-form/login-form.component'
import { LogInFormInterface } from '../../types/login-form.interface'
import { FORM_MESSAGE } from '../../constants/form-message.map'
import { AuthPageInterface } from '../../types/auth-page.interface'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [CommonModule, LogInFormComponent, RouterLink],
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent {
  button: string = ''
  pageInfo: AuthPageInterface | undefined
  @Output() submit: EventEmitter<LogInFormInterface> =
    new EventEmitter<LogInFormInterface>()

  @Input() set formType(form: string) {
    this.button = form

    this.pageInfo = FORM_MESSAGE.get(form)
  }
}
