import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-plugin-editor',
  templateUrl: './plugin-editor.component.html',
  styleUrls: ['./plugin-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PluginEditorComponent implements OnInit, AfterViewInit {
  @Input() view = 'form';
  @Input() plugin: any;
  @Output() pluginChange: EventEmitter<any> = new EventEmitter<any>();

  private loaded: boolean;

  constructor() { }

  ngOnInit() {
  }

  handleChange(ev) {
    if (this.loaded) {
      this.pluginChange.emit(ev);
    }
  }

  ngAfterViewInit(): void {
    this.loaded = true;
  }

}
