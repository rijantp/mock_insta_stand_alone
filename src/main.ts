import { bootstrapApplication } from '@angular/platform-browser'
import { AppComponent } from './app/app.component'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideRouter } from '@angular/router'
import { appRoutes } from './app/app.route'
import { importProvidersFrom } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(appRoutes),
    importProvidersFrom(HttpClientModule),
  ],
})
