import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {selectActivePage} from '../../store/page.selectors';
import {Observable} from 'rxjs';
import {Page} from '../../store/page.reducer';
import {loadPage} from '../../store/page.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.page.html',
  styleUrls: ['./read.page.scss'],
})
export class ReadPage implements OnInit {
  public readonly page$: Observable<Page> = this.store.select(selectActivePage);
  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) { }

  ngOnInit() {
    this.route.url.subscribe(urlSegments => {
      const path = urlSegments.map(s => s.path).join('/');
      this.store.dispatch(loadPage({path}));
    });
  }

}
