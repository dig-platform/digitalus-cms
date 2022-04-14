import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {PluginEditorComponent} from './plugin-editor.component';
import {PluginContainerModule} from '../plugin-container/plugin-container.module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [PluginEditorComponent],
  exports: [PluginEditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PluginContainerModule
  ]
})
export class PluginEditorModule { }
