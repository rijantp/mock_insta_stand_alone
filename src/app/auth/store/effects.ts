import { inject } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { AuthService } from '../services/auth.service'
import { authActions } from './action'
import { map, switchMap, catchError, of } from 'rxjs'
import { UserInfoInterface } from 'src/app/shared/types/user-info.interface'
import { LocalStorageService } from 'src/app/shared/services/local-storage.service'
import { Router } from '@angular/router'

export const signinEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    storageService = inject(LocalStorageService),
    router = inject(Router),
  ) => {
    return actions$.pipe(
      ofType(authActions.signin),
      switchMap(({ request }) => {
        return authService.signinUser(request).pipe(
          map((currentUser: UserInfoInterface) => {
            storageService.set('loggedinUser', currentUser)
            router.navigate(['/home'])
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
