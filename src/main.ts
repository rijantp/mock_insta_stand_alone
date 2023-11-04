import { bootstrapApplication } from '@angular/platform-browser'
import { AppComponent } from './app/app.component'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideRouter } from '@angular/router'
import { appRoutes } from './app/app.route'
import { APP_INITIALIZER, importProvidersFrom, isDevMode } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { Store, provideState, provideStore } from '@ngrx/store'
import { authFeatureKey, authReducer } from './app/auth/store/reducer'
import * as authEffects from './app/auth/store/effects'
import { provideEffects } from '@ngrx/effects'
import { initializeUser } from './app/app-initilizers/local-storage-user.initilizer'
import { LocalStorageService } from './app/shared/services/local-storage.service'

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(appRoutes),
    importProvidersFrom(HttpClientModule),
    provideStore(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeUser,
      multi: true,
      deps: [LocalStorageService, Store],
    },
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
