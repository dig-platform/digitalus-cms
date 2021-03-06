import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {catchError, concatMap, map} from 'rxjs/operators';
import {EMPTY, from} from 'rxjs';

import * as ProfileActions from './profile.actions';

import {AngularFireAuth} from '@angular/fire/compat/auth';


@Injectable()
export class ProfileEffects {
  loadProfile$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileActions.loadProfile),
    concatMap(() => this.auth.authState
      .pipe(
        map(auth => {
          if (auth) {
            const {uid, displayName, photoURL, email, phoneNumber} = auth;
            return ProfileActions.setProfile({profile: {uid, displayName, photoURL, email, phoneNumber}});
          } else {
            return ProfileActions.resetProfile();
          }
        }),
        catchError(() => EMPTY)
      ))
  ));
  signOut$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileActions.signOut),
    concatMap(() => from(this.auth.signOut())
      .pipe(
        map(action => ProfileActions.resetProfile()),
        catchError(() => EMPTY)
      ))
  ));

  constructor(
    private actions$: Actions,
    public readonly auth: AngularFireAuth
  ) {}

  ngrxOnInitEffects() {
    return {type: '[Profile] Load Profile'};
    // todo figure out how to return the reference
    // return ProfileActions.loadProfile;
  }
}
