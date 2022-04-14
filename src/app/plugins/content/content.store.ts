import {Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';

export interface ContentState {
  content: string;
}

@Injectable()
export class ContentStore extends ComponentStore<ContentState> {

  constructor() {
    super({content: null});
  }
}
