// src/main.ts
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes'; // Ensure this points to your routes file
import { importProvidersFrom } from '@angular/core';


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)), // Setup routing this way
    // ...any other global providers...
  ]
}).catch(err => console.error(err));
