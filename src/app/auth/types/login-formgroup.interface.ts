import { FormControl } from '@angular/forms'

export interface LoginFormGroupInterface {
  name: FormControl<string>
  password: FormControl<string>
}
