import { Action, createReducer, on } from '@ngrx/store';
import * as ProfileActions from './profile.actions';

export const profileFeatureKey = 'profile';

export interface State {
  isAdmin?: boolean;
  uid: string;
  displayName: string;
  photoURL: string;
  email: string;
  phoneNumber: string;
  role?: string;
}

export const initialState: State = {
  isAdmin: false,
  uid: null,
  displayName: null,
  photoURL: null,
  email: null,
  phoneNumber: null,
  role: 'guest'
};

export const reducer = createReducer(
  initialState,
  on(ProfileActions.setProfile, (state, {profile}) => ({...profile})),
  on(ProfileActions.resetProfile, (state) => (undefined)),
);
