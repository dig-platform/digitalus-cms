import { createAction, props } from '@ngrx/store';
import {Page} from './page.reducer';

export const loadPages = createAction(
  '[Page] LoadPages'
);
export const setPages = createAction(
  '[Page] SetPages',
  props<{pages: Page[]}>()
);
export const createPage = createAction(
  '[Page] CreatePage'
);
export const loadPage = createAction(
  '[Page] LoadPage',
  props<{uid?: string; path?: string}>()
);
export const savePage = createAction(
  '[Page] SavePage',
  props<{page: Page}>()
);
export const setPageStatus = createAction(
  '[Page] SetPageStatus',
  props<{uid?: string; path?: string; status: string}>()
);
export const deletePage = createAction(
  '[Page] DeletePage',
  props<{uid?: string; path?: string}>()
);
export const setPage = createAction(
  '[Page] SetPage',
  props<{page: Page}>()
);




