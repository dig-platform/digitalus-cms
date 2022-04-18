import {Component, Input, NgModule, OnInit} from '@angular/core';
import {ContentData} from '../content-form/content-form.component';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.scss'],
})
export class ContentViewComponent implements OnInit {

  @Input() data: ContentData;

  constructor(
  ) { }

  ngOnInit() {
  }

}

