// todo strictly type promise
export declare type DigPluginLoader = () => Promise<any>;

export interface DigPlugin {
  key: string;
  title: string;
  icon?: string;
  description?: string;
  load: DigPluginLoader;
}

export declare type DigPlugins = DigPlugin[];

export interface DigPluginModuleClass {
  components: DigPlugins;
}
