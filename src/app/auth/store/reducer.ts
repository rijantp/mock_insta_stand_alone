import { createFeature, createReducer, on } from '@ngrx/store'
import { UserInfoInterface } from 'src/app/shared/types/user-info.interface'
import { authActions } from './action'
import { AuthStateInterface } from '../types/auth-state.interface'

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  backendValidation: null,
  loggedInUser: undefined,
}

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.signin, (state) => {
      return { ...state, isSubmitting: true, backendValidation: null }
    }),
    on(authActions.login, (state) => {
      return { ...state, isSubmitting: true, backendValidation: null }
    }),
    on(authActions.signinSuccess, (state, action) => {
      return {
        ...state,
        isSubmitting: false,
        backendValidation: null,
        loggedInUser: { ...action.loggedInUser },
      }
    }),
    on(authActions.loginSuccess, (state, action) => {
      return {
        ...state,
        isSubmitting: false,
        backendValidation: null,
        loggedInUser: { ...action.loggedInUser },
      }
    }),
    on(authActions.signinFailure, (state, action) => {
      return {
        ...state,
        isSubmitting: false,
        backendValidation: action.error,
        loggedInUser: null,
      }
    }),
    on(authActions.loginFailure, (state, action) => {
      return {
        ...state,
        isSubmitting: false,
        backendValidation: action.error,
        loggedInUser: null,
      }
    }),
    on(authActions.setUserFromLocalstorage, (state, action) => {
      return {
        ...state,
        loggedInUser: action.loggedInUser,
      }
    }),
    on(authActions.removeUserFromLocalstorage, (state) => {
      return {
        ...state,
        loggedInUser: undefined,
      }
    }),
  ),
})

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting,
  selectIsLoading,
  selectAuthState,
  selectBackendValidation,
  selectLoggedInUser,
} = authFeature
