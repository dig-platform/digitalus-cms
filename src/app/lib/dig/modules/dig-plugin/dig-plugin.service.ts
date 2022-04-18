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

  constructor(@Optional() config: DigPluginConfig, private store: Store) {
    if (config) {
      store.dispatch(setPlugins({plugins: config.plugins}));
    }
    this.digPlugins = this.store.select(selectPlugins);
  }

  find(key: string): Observable<DigPlugin> {
    return this.digPlugins.pipe(
      map(plugins => plugins.find(p => p.key === key))
    );
  }

  async findAsync(key: string): Promise<DigPlugin> {
    return await this.find(key).pipe(first(p => !! p)).toPromise();
  }

  // loads a plugin into the view
  // todo type promise
  async load(viewContainerRef: ViewContainerRef, key: string, view: string, data: any = {}): Promise<any> {
    const plugin: any = await this.findAsync(key);
    const pluginModule = await plugin.load();
    const component = pluginModule.components[view];
    viewContainerRef.clear();
    const componentRef: {instance: any} = viewContainerRef.createComponent(component);
    componentRef.instance.data = data;
    return componentRef;
  }
}
