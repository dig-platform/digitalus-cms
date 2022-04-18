import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {DigPluginService} from '../dig-plugin.service';
import {DigPluginDirective} from '../dig-plugin.directive';

@Component({
  selector: 'app-dig-plugin',
  templateUrl: './dig-plugin.component.html',
  styleUrls: ['./dig-plugin.component.scss'],
})
export class DigPluginComponent implements OnInit {
  @ViewChild(DigPluginDirective, {static: true}) pluginContainer!: DigPluginDirective;
  @Input() data: any;
  @Input() plugin: any;
  @Input() view = 'view';

  @Output() pluginChange: EventEmitter<any> = new EventEmitter<any>();
  private previousState: any;

  constructor(private pluginService: DigPluginService) { }

  async ngOnInit() {
    const componentRef = await this.pluginService.load(
      this.pluginContainer.viewContainerRef,
      this.plugin,
      this.view,
      this.data
    );

    if (componentRef.instance.pluginChange) {
      componentRef.instance.pluginChange.subscribe(state => {
        if (state !== this.previousState) {
          this.pluginChange.emit(state);
        }
        this.previousState = {...state};
      });
    }
  }

}
