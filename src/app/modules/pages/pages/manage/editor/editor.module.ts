import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditorPageRoutingModule } from './editor-routing.module';

import { EditorPage } from './editor.page';
import {PluginContainerModule} from '../../../../../lib/components/plugin-container/plugin-container.module';
import {PluginEditorModule} from '../../../../../lib/components/plugin-editor/plugin-editor.module';
import {SelectPluginModule} from '../../../../../lib/directives/select-plugin/select-plugin.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditorPageRoutingModule,
    SelectPluginModule,
    PluginContainerModule,
    PluginEditorModule,
    SelectPluginModule,
  ],
  declarations: [EditorPage]
})
export class EditorPageModule {}
