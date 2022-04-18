import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DigPlugins} from './dig-plugin';
import {DigPluginConfig, DigPluginService} from './dig-plugin.service';
import { DigPluginDirective } from './dig-plugin.directive';
import {DigPluginComponent} from './dig-plugin/dig-plugin.component';
import {DigPluginEditorComponent} from './dig-plugin-editor/dig-plugin-editor.component';
import {SelectPluginDirective} from './select-plugin/select-plugin.directive';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import * as fromPluginStore from './dig-plugin.store';
import {StoreModule} from '@ngrx/store';



@NgModule({
  declarations: [
    DigPluginDirective,
    DigPluginComponent,
    DigPluginEditorComponent,
    SelectPluginDirective
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromPluginStore.digPluginFeatureKey, fromPluginStore.reducer),
  ],
  providers: [
    DigPluginService
  ],
  exports: [
    DigPluginComponent,
    DigPluginEditorComponent,
    SelectPluginDirective
  ]
})
export class DigPluginModule {
  static forRoot(plugins: DigPlugins): ModuleWithProviders<DigPluginModule> {
    return {
      ngModule: DigPluginModule,
      providers: [
        {provide: DigPluginConfig, useValue: {plugins: [...plugins]}}
      ]
    };
  }
}
