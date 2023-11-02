import { AuthPageInterface } from '../types/auth-page.interface'
import { FormTypeEnum } from './form-type.enum'

export const FORM_MESSAGE: Map<string, AuthPageInterface> = new Map([
  [FormTypeEnum.LOGIN, { message: 'new here, signin', path: '/auth/signin' }],
  [
    FormTypeEnum.SIGNIN,
    { message: 'already user, login', path: '/auth/login' },
  ],
])
