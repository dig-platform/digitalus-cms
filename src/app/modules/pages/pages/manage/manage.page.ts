import {Component, OnInit} from '@angular/core';
import {Page, PageStatus} from '../../store/page.reducer';
import {Store} from '@ngrx/store';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.page.html',
  styleUrls: ['./manage.page.scss'],
})
export class ManagePage implements OnInit {
  public filter: string;
  public pages: Page[] = [
    {
      uid: 'test',
      permalink: 'about',
      title: 'About Us',
      status: PageStatus.public
    },
    {
      uid: 'test-1',
      permalink: 'about/team',
      title: 'Our Team',
      status: PageStatus.public
    },
    {
      uid: 'test-2',
      permalink: 'about/offices',
      title: 'Offices',
      status: PageStatus.public
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) { }

  get filteredPages() {
    return this.pages.filter(p => {
      if (! this.filter) {
        return true;
      }
      const search = this.filter.toLowerCase().trim();
      const index = (p.title + p.permalink).toLowerCase().trim();
      return index.indexOf(search) > -1;
    });
  }

  ngOnInit() {
  }

  goToPage(ev) {
    if (ev.key === 'Enter' && this.filteredPages.length === 1) {
      return this.router.navigate(['editor', this.filteredPages[0].uid], {relativeTo: this.route});
    }
  }


}
