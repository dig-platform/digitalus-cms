import {Component, Input, OnInit} from '@angular/core';
import {ContentData} from '../content-form/content-form.component';
import {MarkdownService} from 'ngx-markdown';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.scss'],
})
export class ContentViewComponent implements OnInit {

  @Input() data: ContentData;

  constructor(
    private domSanitizer: DomSanitizer,
    private markdownService: MarkdownService
  ) { }

  get html() {
    const html = this.markdownService.compile(this.data.content);
    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }

  ngOnInit() {
  }

}
