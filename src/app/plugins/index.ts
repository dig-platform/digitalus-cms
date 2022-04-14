import {ImagesFormComponent} from './images/components/images-form/images-form.component';
import {ImagesViewComponent} from './images/components/images-view/images-view.component';
import {ContentFormComponent} from './content/components/content-form/content-form.component';
import {ContentViewComponent} from './content/components/content-view/content-view.component';

export interface DigPlugin {
  key?: string;
  title: string;
  icon: string;
  form: any;
  view: any;
}
export interface DigPluginMap {
  [key: string]: DigPlugin;
}

// todo we need to figure out how to lazy load these

export const plugins: DigPluginMap = {
  content: {
    title: 'Content',
    icon: 'document-text',
    form: ContentFormComponent,
    view: ContentViewComponent
  },
  images: {
    title: 'Images',
    icon: 'images',
    form: ImagesFormComponent,
    view: ImagesViewComponent
  }
};

export const pluginArray: DigPlugin[] = Object.keys(plugins).map(key => ({...plugins[key], key}));
