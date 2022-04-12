import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import * as ProfileActions from './store/profile/profile.actions';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private store: Store
  ) {
    store.dispatch(ProfileActions.loadProfile());
  }
}
