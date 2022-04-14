import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {MarkdownModule} from 'ngx-markdown';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarkdownModule
  ]
})
export class ContentModule { }
