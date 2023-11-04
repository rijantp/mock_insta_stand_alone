import { inject } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { AuthService } from '../services/auth.service'
import { authActions } from './action'
import { map, switchMap, catchError, of } from 'rxjs'
import { UserInfoInterface } from 'src/app/shared/types/user-info.interface'

export const signinEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(authActions.signin),
      switchMap(({ request }) => {
        return authService.signinUser(request).pipe(
          map((currentUser: UserInfoInterface) => {
            return authActions.signinSuccess({ loggedInUser: currentUser })
          }),
          catchError((error) => {
            return of(authActions.signinFailure({ error: error }))
          }),
        )
      }),
    )
  },
  { functional: true },
)
