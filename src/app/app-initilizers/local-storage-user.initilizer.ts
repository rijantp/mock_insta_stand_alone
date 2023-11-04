import { Observable, of } from 'rxjs'
import { LocalStorageService } from '../shared/services/local-storage.service'
import { Store } from '@ngrx/store'
import { authActions } from '../auth/store/action'
import { UserInfoInterface } from '../shared/types/user-info.interface'

export function initializeUser(
  storageService: LocalStorageService,
  store: Store,
): () => Observable<any> {
  return () => {
    const userInfo: UserInfoInterface | null = storageService.get(
      'loggedinUser',
    ) as UserInfoInterface
    if (userInfo) {
      store.dispatch(
        authActions.setUserFromLocalstorage({ loggedInUser: userInfo }),
      )
    }
    return of()
  }
}
