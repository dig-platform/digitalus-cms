import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImagesFormComponent} from './components/images-form/images-form.component';
import {ImagesViewComponent} from './components/images-view/images-view.component';
import {IonicModule} from '@ionic/angular';
import {UploadModule} from '../../lib/directives/upload/upload.module';
import {BytesModule} from '../../lib/pipes/bytes/bytes.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



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
export class ImagesModule { }
