import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Page, PageStatus} from '../../../store/page.reducer';
import {v4 as uuid} from 'uuid';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {createPage, loadPage, savePage} from '../../../store/page.actions';
import {selectActivePage} from '../../../store/page.selectors';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.page.html',
  styleUrls: ['./editor.page.scss'],
})
export class EditorPage implements OnInit {

  public readonly form = new FormGroup({
    uid: new FormControl(),
    title: new FormControl(null, [Validators.required]),
    permalink: new FormControl(null, [Validators.required])
  });

  public plugins = [];

  public page: Page;

  public pageId: string;

  public sortable: boolean;

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) { }


  get disableSave() {
    return ! this.form.dirty || ! this.form.valid;
  }

  ngOnInit() {
    this.route.params.subscribe(({pageId}) => {
      this.pageId = pageId;
      if (pageId !== 'create') {
        this.store.dispatch(loadPage({uid: pageId}));
      }
    });
    this.store.select(selectActivePage).subscribe(page => {
      this.page = page;
      if (page) {
        this.pageId = page.uid;
        this.form.patchValue(page);
      } else {
        this.form.reset();
        this.pageId = 'create';
      }
    });
  };

  save() {
    this.store.dispatch(savePage({page: this.form.value}));
  }

  sortPlugins(ev) {
    this.plugins = ev.detail.complete(this.plugins);
    return true;
  }

  addPlugin(ev) {
    this.plugins.push({
      title: ev.title,
      plugin: ev.key,
      data: {},
      uid: uuid()
    });
  }

  setPluginData(plugin, event) {
  }
}
