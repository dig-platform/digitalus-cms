import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImagesFormComponent} from './components/images-form/images-form.component';
import {ImagesViewComponent} from './components/images-view/images-view.component';
import {IonicModule} from '@ionic/angular';



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
    IonicModule
  ]
})
export class ImagesModule { }
