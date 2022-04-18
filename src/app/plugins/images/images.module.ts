import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImagesFormComponent} from './images-form/images-form.component';
import {ImagesViewComponent} from './components/images-view/images-view.component';
import {IonicModule} from '@ionic/angular';
import {UploadModule} from '../../lib/dig/directives/upload/upload.module';
import {BytesModule} from '../../lib/dig/pipes/bytes/bytes.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContentFormComponent} from '../content/components/content-form/content-form.component';
import {ContentViewComponent} from '../content/components/content-view/content-view.component';



@NgModule({
  declarations: [
    ImagesFormComponent,
    ImagesViewComponent
  ],
  exports: [
    ImagesFormComponent,
    ImagesViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UploadModule,
    BytesModule
  ]
})
export class ImagesModule {
  static components = {
    form: ImagesFormComponent,
    view: ImagesViewComponent
  };
}
