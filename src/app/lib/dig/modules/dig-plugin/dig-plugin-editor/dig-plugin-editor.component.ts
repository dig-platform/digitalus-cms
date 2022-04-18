import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dig-plugin-editor',
  templateUrl: './dig-plugin-editor.component.html',
  styleUrls: ['./dig-plugin-editor.component.scss'],
})
export class DigPluginEditorComponent implements OnInit, AfterViewInit {
  @Input() view = 'view';
  @Input() plugin: any;
  @Output() pluginChange: EventEmitter<any> = new EventEmitter<any>();

  private loaded: boolean;

  constructor() { }

  ngOnInit() {
  }

  handleChange(ev) {
    if (this.loaded) {
      this.plugin = {...this.plugin, data: {...ev}};
      this.pluginChange.emit(ev);
    }
  }

  ngAfterViewInit(): void {
    this.loaded = true;
  }

}
