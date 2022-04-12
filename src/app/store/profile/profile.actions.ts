import {createAction, props} from '@ngrx/store';
import {State} from './profile.reducer';

export const loadProfile = createAction(
  '[Profile] Load Profile',
);
export const setProfile = createAction(
  '[Profile] Set Profile',
  props<{profile: State}>()
);
export const resetProfile = createAction(
  '[Profile] Reset Profile'
);




