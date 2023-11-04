import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store'
import { SigninFormInterface } from '../types/signin-form.interface'
import { LogInFormInterface } from '../types/login-form.interface'
import { UserInfoInterface } from 'src/app/shared/types/user-info.interface'
import { BackendErrorInterface } from '../types/backend-error.interface'

// export const signin = createAction(
//   '[Auth] signin',
//   props<{ request: SigninFormInterface }>(),
// )
// export const login = createAction(
//   '[Auth] login',
//   props<{ request: LogInFormInterface }>(),
// )

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    signin: props<{ request: SigninFormInterface }>(),
    login: props<{ request: LogInFormInterface }>(),
    'signin success': props<{ loggedInUser: UserInfoInterface }>(),
    'login success': props<{ loggedInUser: UserInfoInterface }>(),
    'signin failure': props<{ error: BackendErrorInterface }>(),
    'login failure': props<{ error: BackendErrorInterface }>(),
  },
})
