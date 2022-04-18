import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseDatePipe } from './firebase-date.pipe';



@NgModule({
  declarations: [
    FirebaseDatePipe
  ],
  exports: [
    FirebaseDatePipe
  ],
  imports: [
    CommonModule
  ]
})
export class FirebaseDateModule { }
