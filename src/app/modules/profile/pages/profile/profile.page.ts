import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {selectProfileState} from '../../store/profile.selectors';
import {signOut} from '../../store/profile.actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public profile$;

  constructor(
    private store: Store
  ) {
    this.profile$ = store.select(selectProfileState);
  }

  ngOnInit() {
  }

  signInSuccessWithAuthResult(ev){
    console.log(ev);
  }
  signInFailure(ev) {
    console.log(ev);
  }

  signOut() {
    this.store.dispatch(signOut());
  }
}
