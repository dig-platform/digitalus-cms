import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {ContentModule} from './content/content.module';
import {ImagesModule} from './images/images.module';



@NgModule({
  declarations: [],
  imports: [
    ContentModule,
    ImagesModule
  ],
  // todo figure out if there is a way to lazy load the plugin modules
  exports: [
    ContentModule,
    ImagesModule
  ],
})
export class PluginsModule { }
