import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDig from './dig.reducer';

export const selectDigState = createFeatureSelector<fromDig.State>(
  fromDig.digFeatureKey
);
