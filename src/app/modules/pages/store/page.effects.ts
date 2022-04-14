import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {concatMap, first, map, switchMap} from 'rxjs/operators';
import {EMPTY, from, Observable} from 'rxjs';

import * as PageActions from './page.actions';
import {Store} from '@ngrx/store';
import {selectProfileState} from '../../profile/store/profile.selectors';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {Page, PageStatus} from './page.reducer';
import {v4 as uuid} from 'uuid';


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
    switchMap(action => this.afs.collection<Page>('pages').doc(action.uid).valueChanges().pipe(
      map(page => PageActions.setPage({page}))
    ))
  ));

  savePage$ = createEffect(() => this.actions$.pipe(
    ofType(PageActions.savePage),
    switchMap(action => this.store.select(selectProfileState).pipe(
      first(profile => !! profile.uid),
      switchMap(profile => {
        const page = {...action.page};
        console.log(page);
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


  constructor(
    private actions$: Actions,
    private afs: AngularFirestore,
    private store: Store
  ) {}

}
