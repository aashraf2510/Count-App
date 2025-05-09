import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
// import { counterReducer, counterTwoReducer } from './store/counter.reducer';
import { counterReducer } from './store/counter.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),

    provideStore({
      counter: counterReducer,
      // counterTwo: counterTwoReducer,
    }),
  ],
};
