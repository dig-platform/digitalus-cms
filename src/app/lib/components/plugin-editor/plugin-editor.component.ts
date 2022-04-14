import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-plugin-editor',
  templateUrl: './plugin-editor.component.html',
  styleUrls: ['./plugin-editor.component.scss'],
})
export class PluginEditorComponent implements OnInit {
  @Input() view = 'form';
  @Input() plugin: any;
  @Input() data: any = {};
  @Output() pluginChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  handleChange(ev) {
    this.pluginChange.emit(ev);
  }

}
