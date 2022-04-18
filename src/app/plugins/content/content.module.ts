import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {MarkdownModule} from 'ngx-markdown';
import {FormsModule} from '@angular/forms';
import {ContentFormComponent} from './components/content-form/content-form.component';
import {ContentViewComponent} from './components/content-view/content-view.component';
import {DigPluginModule, DigPluginModuleClass} from '../../lib/dig';



@NgModule({
  declarations: [
    ContentFormComponent,
    ContentViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarkdownModule
  ]
})
export class ContentModule {
  // todo find a way to access the decorators
  static components = {
    form: ContentFormComponent,
    view: ContentViewComponent
  };
}
