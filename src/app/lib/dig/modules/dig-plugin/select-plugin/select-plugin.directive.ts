import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {DigPlugin} from '../dig-plugin';
import {DigPluginService} from '../dig-plugin.service';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectPlugins} from '../dig-plugin.store';
import {first, map} from 'rxjs/operators';

@Directive({
  selector: '[appSelectPlugin]'
})
export class SelectPluginDirective {
  public readonly plugins$: Observable<DigPlugin[]>;
  @Output() selected: EventEmitter<DigPlugin> = new EventEmitter<DigPlugin>();
  @Output() closed: EventEmitter<void> = new EventEmitter<void>();
  @Output() opened: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private actionSheetController: ActionSheetController,
    private pluginService: DigPluginService,
    private store: Store
  ) {
    this.plugins$ = this.store.select(selectPlugins);
  }

  @HostListener('click', ['$event.target'])
  onClick(el: any) {
    return this.selectPlugin();
  }

  async selectPlugin() {
    return this.plugins$.pipe(
      first(p => p.length > 0),
      map(async (plugins) => {
        const buttons: any[] = plugins.map(p => ({
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
      })
    ).toPromise();
  }
}
