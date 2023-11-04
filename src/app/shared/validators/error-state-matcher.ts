import { FormControl } from '@angular/forms'
import { ErrorStateMatcher } from '@angular/material/core'

export class ConfirmValidParentMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl): boolean {
    return (control.parent?.invalid && control.touched) ?? false
  }
}
