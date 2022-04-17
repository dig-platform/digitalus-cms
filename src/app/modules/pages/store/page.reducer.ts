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
  uid?: string;
  title?: string;
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
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
}

export interface PageState {
  active: Page;
  list: Page[];
}

export const initialState: PageState = {
  active: null,
  list: []
};

export const reducer = createReducer(
  initialState,
  on(PageActions.setPages, (state, {pages}) => ({...state, list: [...pages]})),
  on(PageActions.setPage, (state, {page}) => ({...state, active: {...state.active, ...page}})),
  on(PageActions.setPlugins, (state, {plugins}) => ({...state, active: {...state.active, plugins: [...plugins]}})),
  on(PageActions.addPlugin, (state, {plugin}) => ({...state, active: {...state.active, plugins: [...state.active.plugins, {...plugin}]}})),
  on(PageActions.removePlugin, (state, {uid}) => (
    {...state, active: {...state.active, plugins: [...state.active.plugins].filter(p => p.uid !== uid)}}
  )),
  on(PageActions.setPluginData, (state, {uid, data}) => (
    {...state, active: {...state.active, plugins: [...state.active.plugins].map(p => p.uid === uid ? {...p, data: {...data}} : {...p})}})
  ),
);
