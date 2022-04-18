import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadPageRoutingModule } from './read-routing.module';

import { ReadPage } from './read.page';
import {MarkdownModule} from 'ngx-markdown';
import {DigPluginModule} from '../../../../lib/dig';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadPageRoutingModule,
    DigPluginModule,
    MarkdownModule
  ],
  declarations: [ReadPage]
})
export class ReadPageModule {}
