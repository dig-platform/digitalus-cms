import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props
} from '@ngrx/store';
import {DigPlugins} from './dig-plugin';

export const setPlugins = createAction(
  '[DigPlugin] SetPlugins',
  props<{plugins: DigPlugins}>()
);

export const digPluginFeatureKey = 'dig-plugin';

export interface State {
  plugins: DigPlugins;
}

export const initialState: State = {
  plugins: []
};

export const reducer = createReducer(
  initialState,
  on(setPlugins, (state, {plugins}) => ({...state, plugins: [...plugins]})),
);

export const selectPluginState = createFeatureSelector<State>(digPluginFeatureKey);

export const selectPlugins = createSelector(
  selectPluginState,
  (state: State) => ([...state.plugins])
);

