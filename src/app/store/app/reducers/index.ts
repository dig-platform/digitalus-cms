import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import * as fromProfile from '../../profile/profile.reducer';


export interface State {

  [fromProfile.profileFeatureKey]: fromProfile.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromProfile.profileFeatureKey]: fromProfile.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
