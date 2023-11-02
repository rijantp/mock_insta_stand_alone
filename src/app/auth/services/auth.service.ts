import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { LogInFormInterface } from '../types/login-form.interface'
import { Observable } from 'rxjs'
import { environment } from 'src/environment/environment'
import { UserInfoInterface } from 'src/app/shared/types/user-info.interface'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient)

  signinUser(body: LogInFormInterface): Observable<UserInfoInterface> {
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
}
