import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPage from './page.reducer';
import {PageState} from './page.reducer';

export const selectPageState = createFeatureSelector<fromPage.PageState>(
  fromPage.pageFeatureKey
);

export const selectPages = createSelector(
  selectPageState,
  (state: PageState) => (state.list ? [...state.list] : [])
);

export const selectActivePage = createSelector(
  selectPageState,
  (state: PageState) => (state.active ? {...state.active} : null)
);
export const selectPlugins = createSelector(
  selectPageState,
  (state: PageState) => (state.active ? [...state.active.plugins] : null)
);
