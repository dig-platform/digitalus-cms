import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ContentState, ContentStore} from '../../content.store';

export interface ContentData {
  content?: string;
  placeholder?: string;
}

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.scss'],
  providers: [ContentStore]
})
export class ContentFormComponent implements OnInit, OnChanges {
  @Input() data: ContentData;
  @Output() pluginChange = this.contentStore.select(state => ({...state}));

  constructor(private readonly contentStore: ContentStore) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes.data) {
    //   this.contentStore.setState({content: this.data.content});
    // }
  }

  ngOnInit() {
    this.contentStore.select(state => console.log({state}));
    this.contentStore.setState({content: this.data.content});
  }

  setState(ev?) {
    this.contentStore.setState({content: ev.detail.value});
  }

}
