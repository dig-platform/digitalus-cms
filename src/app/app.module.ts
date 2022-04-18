import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/app/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/app/app.effects';
import { ProfileEffects } from './modules/profile/store/profile.effects';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {getFunctions, provideFunctions} from '@angular/fire/functions';
import {getAnalytics, provideAnalytics} from '@angular/fire/analytics';
import {getStorage, provideStorage} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireFunctionsModule} from '@angular/fire/compat/functions';
import { PERSISTENCE } from '@angular/fire/compat/auth';
import {ProfileModule} from './modules/profile/profile.module';
import {firebase, firebaseui, FirebaseUIModule} from 'firebaseui-angular';
import {PagesModule} from './modules/pages/pages.module';
import * as fromDig from './store/dig/dig.reducer';
import { DigEffects } from './store/dig/dig.effects';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MarkdownModule} from 'ngx-markdown';
import {AppPluginsModule} from './app-plugins.module';
import {DigPluginModule} from './lib/dig';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'redirect',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  tosUrl: '/docs/terms',
  privacyPolicyUrl: '/docs/privacy',
  credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AppPluginsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot(),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    ProfileModule,
    PagesModule,
    DigPluginModule,
    StoreModule.forFeature(fromDig.digFeatureKey, fromDig.reducer),
    EffectsModule.forFeature([DigEffects])
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
