import {Component, NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

@Component({
  selector: 'app-images-plugin',
  templateUrl: './images-plugin.component.html',
  styleUrls: ['./images-plugin.component.scss'],
})
export class PluginComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}

@NgModule({
  declarations: [PluginComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
class PluginModule { }
