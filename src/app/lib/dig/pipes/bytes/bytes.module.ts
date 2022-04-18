import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BytesPipe } from './bytes.pipe';



@NgModule({
  declarations: [
    BytesPipe
  ],
  exports: [
    BytesPipe
  ],
  imports: [
    CommonModule
  ]
})
export class BytesModule { }
