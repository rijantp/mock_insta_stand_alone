import {
  ValidationErrors,
  AbstractControl,
  AsyncValidatorFn,
} from '@angular/forms'
import {
  Observable,
  catchError,
  debounceTime,
  distinctUntilChanged,
  of,
  switchMap,
  take,
} from 'rxjs'
import { AuthService } from '../../auth/services/auth.service'

export function emailValidator(authService: AuthService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return control.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((email: string) => {
        return authService.checkMail(email)
      }),
      take(1),
      catchError(() => of({ unableToVerifyEmail: true })),
    )
  }
}
