import { Component, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthPageComponent } from '../auth-page/auth-page.component'
import { FormTypeEnum } from '../../constants/form-type.enum'
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, AuthPageComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  formtype: string = FormTypeEnum.LOGIN
}
