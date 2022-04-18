import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditorPageRoutingModule } from './editor-routing.module';

import { EditorPage } from './editor.page';
import {UploadModule} from '../../../../../lib/dig/directives/upload/upload.module';
import {DigPluginModule} from '../../../../../lib/dig';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditorPageRoutingModule,
    DigPluginModule,
    UploadModule
  ],
  declarations: [EditorPage]
})
export class EditorPageModule {}
