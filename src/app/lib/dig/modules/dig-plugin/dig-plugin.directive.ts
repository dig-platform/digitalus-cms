import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDigPlugin]'
})
export class DigPluginDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
  }

}
