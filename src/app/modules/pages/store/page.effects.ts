import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {concatMap, first, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {EMPTY, from, Observable} from 'rxjs';

import * as PageActions from './page.actions';
import {Store} from '@ngrx/store';
import {selectProfileState} from '../../profile/store/profile.selectors';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {Page, PageStatus} from './page.reducer';
import {v4 as uuid} from 'uuid';
import {selectActivePage} from './page.selectors';


@Injectable()
export class PageEffects {
  loadPages$ = createEffect(() => this.actions$.pipe(
    ofType(PageActions.loadPages),
    switchMap(action => this.afs.collection<Page>('pages', ref => ref.orderBy('permalink')).valueChanges().pipe(
      map(pages => PageActions.setPages({pages}))
    ))
  ));

  loadPage$ = createEffect(() => this.actions$.pipe(
    ofType(PageActions.loadPage),
    switchMap(({uid, path}) => {
      if (path) {
        return this.afs.collection<Page>('pages', ref => ref.where('permalink', '==', path)).valueChanges().pipe(
          map(pages => PageActions.setPage({page: pages[0]}))
        );
      } else if (uid) {
        return this.afs.collection<Page>('pages').doc(uid).valueChanges().pipe(
          map(page => PageActions.setPage({page}))
        );
      }
    })
  ));

  savePage$ = createEffect(() => this.actions$.pipe(
    ofType(PageActions.savePage),
    switchMap(action => this.store.select(selectProfileState).pipe(
      first(profile => !! profile.uid),
      switchMap(profile => {
        const page = {...action.page};
        if (page.uid) {
          page.updatedAt = new Date();
          page.updatedBy = profile.uid;
        } else {
          page.uid = uuid();
          page.createdAt = new Date();
          page.createdBy = profile.uid;
          page.status = PageStatus.new;
        }
        return from(this.afs.collection<Page>('pages').doc(page.uid).set(page, {merge: true})
          .then(ref => PageActions.setPage({page})));
      })
    ))
  ));

  saveActivePage$ = createEffect(() => this.actions$.pipe(
    ofType(PageActions.saveActivePage),
    withLatestFrom(this.store.select(selectActivePage)),
    map(([action, page]) => PageActions.savePage({page}))
  ));


  constructor(
    private actions$: Actions,
    private afs: AngularFirestore,
    private store: Store
  ) {}

}
