import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { map, tap } from 'rxjs'
import { selectLoggedInUser } from 'src/app/auth/store/reducer'
import { RoutesEnum } from '../constants/routes.enum'
import { UserInfoInterface } from '../types/user-info.interface'

export const loggedInUserGuard: CanActivateFn = (
  route,
  state,
  store = inject(Store),
  router = inject(Router),
) => {
  return store.select(selectLoggedInUser).pipe(
    map((user: UserInfoInterface | undefined | null) => {
      return user === undefined || user === null
    }),
    tap((isNotLoggedIn: boolean) => {
      if (!isNotLoggedIn) router.navigate([RoutesEnum.HOME])
    }),
  )
}
