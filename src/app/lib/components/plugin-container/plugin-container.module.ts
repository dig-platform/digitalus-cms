import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PluginContainerComponent} from './plugin-container.component';
import {PluginDirective} from './plugin.directive';



@NgModule({
  declarations: [
    PluginContainerComponent,
    PluginDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PluginContainerComponent
  ]
})
export class PluginContainerModule { }
