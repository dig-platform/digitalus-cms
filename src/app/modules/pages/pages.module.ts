import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromPage from './store/page.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PageEffects } from './store/page.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromPage.pageFeatureKey, fromPage.reducer),
    EffectsModule.forFeature([PageEffects])
  ]
})
export class PagesModule { }
