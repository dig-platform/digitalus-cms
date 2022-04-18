import {Component, Input, NgModule, OnInit} from '@angular/core';
import {ContentState} from './content.store';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {MarkdownModule} from 'ngx-markdown';

@Component({
  selector: 'app-content-plugin',
  templateUrl: './content-plugin.component.html',
  styleUrls: ['./content-plugin.component.scss'],
})
export class PluginComponent implements OnInit {
  @Input() view: string;
  @Input() data: ContentState;

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }
}

@Component({
  selector: 'app-content-plugin-form',
  templateUrl: './form.component.html',
  styleUrls: ['./content-plugin.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() view: string;
  @Input() data: ContentState;

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }
}

@Component({
  selector: 'app-content-plugin-render',
  templateUrl: './render.component.html',
  styleUrls: ['./content-plugin.component.scss'],
})
export class RenderComponent implements OnInit {
  @Input() view: string;
  @Input() data: ContentState;

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }
}

@NgModule({
  declarations: [PluginComponent, FormComponent, RenderComponent],
  imports: [
    CommonModule,
    IonicModule,
    MarkdownModule
  ]
})
export class PluginModule { }
