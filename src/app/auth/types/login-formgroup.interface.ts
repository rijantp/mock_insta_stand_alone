import { FormControl } from '@angular/forms'

export interface LoginFormGroupInterface {
  name: FormControl<string>
  email: FormControl<string>
  password: FormControl<string>
  confirmPassword?: FormControl<string>
}
