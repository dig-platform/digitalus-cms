export type DigLoader = () => Promise<any>;

export interface DigPlugin {
  key?: string;
  title: string;
  icon: string;
  views: {
    form?: DigLoader;
    render?: DigLoader;
  };
}
export interface DigPluginMap {
  [key: string]: DigPlugin;
}

// todo we need to figure out how to lazy load these

export const plugins: DigPluginMap = {
  content: {
    title: 'Content',
    icon: 'document-text',
    views: {
      form: () => import('src/app/plugins/content/components/content-form/content-form.component'),
      render: () => import('src/app/plugins/content/components/content-form/content-form.component'),
    }
  },
  // images: {
  //   title: 'Images',
  //   icon: 'images',
  //   form: () => import('src/app/plugins/images/images-plugin.component'),
  //   form: () => import('src/app/plugins/images/images-plugin.component')
  // },
};

export const pluginArray: DigPlugin[] = Object.keys(plugins).map(key => ({...plugins[key], key}));
