import {
  Component,
  ComponentFactoryResolver, EventEmitter,
  Input,
  OnChanges,
  OnInit, Output, SimpleChanges,
  ViewChild
} from '@angular/core';
import {PluginDirective} from './plugin.directive';

import {plugins} from 'src/app/plugins';
import {ImagesFormComponent} from '../../../plugins/images/components/images-form/images-form.component';

@Component({
  selector: 'app-plugin-container',
  templateUrl: './plugin-container.component.html',
  styleUrls: ['./plugin-container.component.scss'],
})
export class PluginContainerComponent implements OnInit, OnChanges {
  @ViewChild(PluginDirective, {static: true}) pluginContainer!: PluginDirective;

  @Input() data: any;
  @Input() plugin: any;
  @Input() view: string;

  @Output() pluginChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const viewContainerRef = this.pluginContainer.viewContainerRef;
    viewContainerRef.clear();

    const component = plugins[this.plugin][this.view];

    // todo handle errors

    const componentRef: {instance: any} = viewContainerRef.createComponent(component);
    componentRef.instance.data = this.data;
    if (componentRef.instance.pluginChange) {
      componentRef.instance.pluginChange.subscribe(state => {
        this.pluginChange.emit(state);
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.view) {
      this.loadComponent();
    }
  }
}
