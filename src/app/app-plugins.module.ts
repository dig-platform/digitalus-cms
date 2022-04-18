import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DigPluginModule, DigPlugins} from './lib/dig';

export const plugins: DigPlugins = [
  {
    key: 'content',
    title: 'Content',
    icon: 'document-text',
    load: () => import('./plugins/content/content.module').then(module => module.ContentModule)
  },
  {
    key: 'images',
    title: 'Images',
    icon: 'images',
    load: () => import('./plugins/images/images.module').then(module => module.ImagesModule)
  },
];


@NgModule({
  imports: [
    DigPluginModule.forRoot(plugins)
  ],
  exports: [
    DigPluginModule
  ]
})
export class AppPluginsModule { }
