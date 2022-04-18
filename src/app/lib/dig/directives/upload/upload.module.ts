import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UploadDirective} from './upload.directive';
import {IonicModule} from '@ionic/angular';



@NgModule({
  declarations: [UploadDirective],
  exports: [UploadDirective],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class UploadModule { }
