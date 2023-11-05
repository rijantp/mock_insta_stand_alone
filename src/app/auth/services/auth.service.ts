import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { LogInFormInterface } from '../types/login-form.interface'
import { Observable } from 'rxjs'
import { environment } from 'src/environment/environment'
import { UserInfoInterface } from 'src/app/shared/types/user-info.interface'
import { SigninFormInterface } from '../types/signin-form.interface'
import { ValidationErrors } from '@angular/forms'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient)

  signinUser(body: SigninFormInterface): Observable<UserInfoInterface> {
    return this.http.post<UserInfoInterface>(
      `${environment.base_api_url}/users/signin`,
      body,
    )
  }

  logInUser(body: LogInFormInterface): Observable<UserInfoInterface> {
    return this.http.post<UserInfoInterface>(
      `${environment.base_api_url}/users/login`,
      body,
    )
  }

  checkMail(email: string): Observable<ValidationErrors | null> {
    return this.http.post<ValidationErrors | null>(
      `${environment.base_api_url}/users/checkMail`,
      { email: email },
    )
  }
}
