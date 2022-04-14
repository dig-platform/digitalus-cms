import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {DigPlugin, pluginArray} from 'src/app/plugins';

@Directive({
  selector: '[appSelectPlugin]'
})
export class SelectPluginDirective {
  public readonly plugins: DigPlugin[] = pluginArray;
  @Output() selected: EventEmitter<DigPlugin> = new EventEmitter<DigPlugin>();
  @Output() closed: EventEmitter<void> = new EventEmitter<void>();
  @Output() opened: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private actionSheetController: ActionSheetController
  ) { }

  @HostListener('click', ['$event.target'])
  onClick(el: any) {
    this.selectPlugin();
  }

  async selectPlugin() {
    const buttons: any[] = this.plugins.map(p => ({
      text: p.title,
      icon: p.icon,
      handler: () => {
        this.selected.emit(p);
      }
    }));
    buttons.push({
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        this.closed.emit();
      }
    });
    const actionSheet = await this.actionSheetController.create({
      header: 'Select plugin',
      buttons
    });
    await actionSheet.present();
  }
}
