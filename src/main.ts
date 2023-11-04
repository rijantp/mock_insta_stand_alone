import { bootstrapApplication } from '@angular/platform-browser'
import { AppComponent } from './app/app.component'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideRouter } from '@angular/router'
import { appRoutes } from './app/app.route'
import { importProvidersFrom, isDevMode } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { provideState, provideStore } from '@ngrx/store'
import { authFeatureKey, authReducer } from './app/auth/store/reducer'
import * as authEffects from './app/auth/store/effects'
import { provideEffects } from '@ngrx/effects'

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(appRoutes),
    importProvidersFrom(HttpClientModule),
    provideStore(),
    provideState(authFeatureKey, authReducer),
    provideEffects(authEffects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
  ],
})
