import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { map, tap } from 'rxjs'
import { selectLoggedInUser } from 'src/app/auth/store/reducer'
import { UserInfoInterface } from '../types/user-info.interface'
import { RoutesEnum } from '../constants/routes.enum'

export const authGuard: CanActivateFn = (
  route,
  state,
  store = inject(Store),
  router = inject(Router),
) => {
  return store.select(selectLoggedInUser).pipe(
    map((user: UserInfoInterface | undefined | null) => {
      return user === undefined || user === null ? false : true
    }),
    tap((hasLoggedIn: boolean) => {
      if (!hasLoggedIn) router.navigate([RoutesEnum.AUTH])
    }),
  )
}
