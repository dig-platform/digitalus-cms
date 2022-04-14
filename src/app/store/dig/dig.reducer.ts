import { Action, createReducer, on } from '@ngrx/store';
import * as DigActions from './dig.actions';

export const digFeatureKey = 'dig';

export interface State {
}

export const initialState: State = {
};

export const reducer = createReducer(
  initialState,

  on(DigActions.loadDigs, state => state),

);
