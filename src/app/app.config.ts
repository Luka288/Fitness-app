import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { firebaseConfig } from './shared/consts/firebase.environment';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { API_URL } from './shared/consts/injection.tokens';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideHttpClient(withFetch()),
    {
      provide: API_URL,
      useValue: 'https://world.openfoodfacts.org/api/v0/product',
      // https://ge.openfoodfacts.org/api/v2/product/4860103230423
    },
  ],
};
