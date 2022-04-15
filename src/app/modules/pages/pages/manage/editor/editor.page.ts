import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Page, PageStatus} from '../../../store/page.reducer';
import {v4 as uuid} from 'uuid';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {
  addPlugin,
  createPage,
  loadPage,
  savePage,
  setPluginData, setPlugins
} from '../../../store/page.actions';
import {selectActivePage, selectPlugins} from '../../../store/page.selectors';
import {first, map, take} from 'rxjs/operators';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.page.html',
  styleUrls: ['./editor.page.scss'],
})
export class EditorPage implements OnInit {

  public readonly form = new FormGroup({
    uid: new FormControl(),
    plugins: new FormControl(),
    title: new FormControl(null, [Validators.required]),
    permalink: new FormControl(null, [Validators.required])
  });

  public plugins = [];

  public page: Page;

  public pageId: string;

  public sortable: boolean;
  private pluginsDirty: boolean;

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) { }


  get disableSave() {
    return false;
    return (! this.form.dirty && ! this.pluginsDirty) || ! this.form.valid;
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
        if (page.plugins) {
          this.plugins = [...page.plugins];
        }
      } else {
        this.form.reset();
        this.pageId = 'create';
      }
    });
  };

  save() {
    this.pluginsDirty = false;
    const page: Page = {...this.form.value, plugins: [...this.plugins]};
    this.store.dispatch(savePage({page}));
  }

  sortPlugins(ev) {
    this.store.select(selectPlugins).pipe(
      take(1),
      map(previous => {
        console.log(previous);
        const plugins = ev.detail.complete(previous);
        this.store.dispatch(setPlugins({plugins}));
        return plugins;
      })
    ).subscribe(plugins => this.plugins = plugins);
  }
  addPlugin(ev) {
    this.store.dispatch(addPlugin({plugin: {
      title: ev.title,
      plugin: ev.key,
      data: {},
      uid: uuid()
    }}));
  }

  setPluginData(uid, data) {
    this.store.dispatch(setPluginData({uid, data: {...data}}));
  }
}
