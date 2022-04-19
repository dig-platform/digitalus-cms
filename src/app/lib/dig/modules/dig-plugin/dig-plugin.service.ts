import {Injectable, NgModule, Optional, ViewContainerRef, ViewRef} from '@angular/core';
import {DigPlugin, DigPlugins} from './dig-plugin';
import {BehaviorSubject, Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {selectPlugins, setPlugins} from './dig-plugin.store';
import {first, map} from 'rxjs/operators';

export class DigPluginConfig {
  plugins: DigPlugins;
}
@Injectable({
  providedIn: 'root'
})
export class DigPluginService {
  private digPlugins: Observable<DigPlugins>;
  private pluginConfig: DigPluginConfig;

  constructor(@Optional() config: DigPluginConfig, private store: Store) {
    if (config) {
      store.dispatch(setPlugins({plugins: config.plugins.map(p => {
        const plugin = {...p};
        delete plugin.load;
        return plugin;
      })}));
      this.pluginConfig = {...config};
    }
  }

  find(key: string): DigPlugin {
    return this.pluginConfig.plugins.find(p => p.key === key);
  }

  loadModule(key: string) {
    return this.find(key)?.load();
  }

  // loads a plugin into the view
  // todo type promise
  async load(viewContainerRef: ViewContainerRef, key: string, view: string, data: any = {}): Promise<any> {
    const pluginModule = await this.loadModule(key);
    const component = pluginModule.components[view];
    viewContainerRef.clear();
    const componentRef: {instance: any} = viewContainerRef.createComponent(component);
    componentRef.instance.data = data;
    return componentRef;
  }
}
