import { UserInfoInterface } from 'src/app/shared/types/user-info.interface'
import { BackendErrorInterface } from './backend-error.interface'

export interface AuthStateInterface {
  isSubmitting: boolean
  loggedInUser: UserInfoInterface | undefined | null
  isLoading: boolean
  backendValidation: BackendErrorInterface | null
}
