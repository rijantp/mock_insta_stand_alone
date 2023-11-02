import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthPageComponent } from '../shared/auth-page/auth-page.component'
import { LogInFormInterface } from '../types/login-form.interface'
import { FormTypeEnum } from '../constants/form-type.enum'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, AuthPageComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  service = inject(AuthService)
  formtype: string = FormTypeEnum.LOGIN
  onSubmit(formValue: LogInFormInterface): void {
    this.service.logInUser(formValue).subscribe()
  }
}
