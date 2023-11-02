import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LogInFormInterface } from '../types/login-form.interface'
import { AuthPageComponent } from '../shared/auth-page/auth-page.component'
import { FormTypeEnum } from '../constants/form-type.enum'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, AuthPageComponent],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  formType: string = FormTypeEnum.SIGNIN
  service = inject(AuthService)
  onSubmit(formValue: LogInFormInterface): void {
    this.service.signinUser(formValue).subscribe()
  }
}
