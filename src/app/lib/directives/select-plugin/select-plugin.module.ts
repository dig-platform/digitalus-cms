import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectPluginDirective } from './select-plugin.directive';



@NgModule({
  declarations: [
    SelectPluginDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SelectPluginDirective
  ]
})
export class SelectPluginModule { }
