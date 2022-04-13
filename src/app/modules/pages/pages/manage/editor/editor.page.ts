import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Page, PageStatus} from '../../../store/page.reducer';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.page.html',
  styleUrls: ['./editor.page.scss'],
})
export class EditorPage implements OnInit {

  public readonly form = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    permalink: new FormControl(null, [Validators.required])
  });

  constructor() { }


  get disableSave() {
    return ! this.form.dirty || ! this.form.valid;
  }

  ngOnInit() {
  }

  save() {
    const {title, permalink} = this.form.value;
    const page: Page = {
      title,
      permalink,
      status: PageStatus.draft,
    };
  }
}
