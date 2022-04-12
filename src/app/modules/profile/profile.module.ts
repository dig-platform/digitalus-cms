import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {ProfileEffects} from './store/profile.effects';
import {StoreModule} from '@ngrx/store';
import * as fromProfile from './store/profile.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([ProfileEffects]),
    StoreModule.forFeature(fromProfile.profileFeatureKey, fromProfile.reducer)
  ]
})
export class ProfileModule { }
