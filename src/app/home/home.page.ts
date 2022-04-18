import { Component } from '@angular/core';
import {DigPluginService} from '../lib/dig/modules/dig-plugin/dig-plugin.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private plugins: DigPluginService) {
    console.log(plugins.find('content'));
  }

}
