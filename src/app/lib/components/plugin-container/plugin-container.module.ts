import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PluginContainerComponent} from './plugin-container.component';
import {PluginDirective} from './plugin.directive';
import {UploadModule} from '../../directives/upload/upload.module';
import {IonicModule} from '@ionic/angular';
import {ImagesModule} from '../../../plugins/images/images.module';
import {PluginsModule} from '../../../plugins/plugins.module';



@NgModule({
  declarations: [
    PluginContainerComponent,
    PluginDirective
  ],
  imports: [
    CommonModule,
    IonicModule,
    PluginsModule
  ],
  exports: [
    PluginContainerComponent
  ]
})
export class PluginContainerModule { }
