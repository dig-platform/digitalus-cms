import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditorPageRoutingModule } from './editor-routing.module';

import { EditorPage } from './editor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditorPageRoutingModule
  ],
  declarations: [EditorPage]
})
export class EditorPageModule {}
