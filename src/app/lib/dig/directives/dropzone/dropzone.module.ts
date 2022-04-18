import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropzoneDirective} from './dropzone.directive';
import {IonicModule} from '@ionic/angular';



@NgModule({
  declarations: [DropzoneDirective],
  exports: [DropzoneDirective],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class DropzoneModule { }
