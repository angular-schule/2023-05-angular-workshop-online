import { ApplicationConfig } from '@angular/platform-browser';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { provideRouter } from '@angular/router';
import localeDe from '@angular/common/locales/de';

import { appRoutes } from './app.routes';
import { exercisesRoutes } from './exercises/exercises.routes';
import { provideHttpClient } from '@angular/common/http';

registerLocaleData(localeDe);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([...appRoutes, ...exercisesRoutes]),
    provideHttpClient(),
    { provide: LOCALE_ID, useValue: 'de' }
  ]
};
