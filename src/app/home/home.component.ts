import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MatButtonModule } from '@angular/material/button'
import { RouterLink } from '@angular/router'
import { Store } from '@ngrx/store'
import { authActions } from '../auth/store/action'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private store: Store = inject(Store)
  logOut(): void {
    this.store.dispatch(authActions.removeUserFromLocalstorage())
  }
}
