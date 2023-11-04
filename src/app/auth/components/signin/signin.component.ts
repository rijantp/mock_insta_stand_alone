import { Component, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthPageComponent } from '../auth-page/auth-page.component'
import { FormTypeEnum } from '../../constants/form-type.enum'

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, AuthPageComponent],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SigninComponent {
  formType: string = FormTypeEnum.SIGNIN
}
