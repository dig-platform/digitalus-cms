import { Action, createReducer, on } from '@ngrx/store';
import * as PageActions from './page.actions';

export const pageFeatureKey = 'page';

export enum PageStatus{
  'new' = 'new',
  'draft' = 'draft',
  'public' = 'public',
  'protected' = 'protected',
  'archive' = 'archive',
  'trash' = 'trash'
}

export interface PagePlugin{
  position: number;
  plugin: string;
  data?: any;
}

export interface PageLogEntry{
  event: string;
  comment?: string;
  createdAt: Date;
  detail?: any;
}

export interface Page{
  uid?: string;
  permalink: string;
  title: string;
  description?: string;
  image?: string;
  plugins?: PagePlugin[];
  status: PageStatus;
  log?: PageLogEntry[];
}

export interface State {
  active: Page;
  list: Page[];
}

export const initialState: State = {
  active: null,
  list: []
};

export const reducer = createReducer(
  initialState,

  on(PageActions.loadPages, state => state),

);
