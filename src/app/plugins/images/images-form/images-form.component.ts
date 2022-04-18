import {ChangeDetectionStrategy, Component, Input, OnInit, Output} from '@angular/core';
import {Image, ImagesState, ImagesStore} from '../images.store';
import {Observable} from 'rxjs';
import {v4 as uuid} from 'uuid';
import {FormControl, FormGroup} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-images-form',
  templateUrl: './images-form.component.html',
  styleUrls: ['./images-form.component.scss'],
  providers: [ImagesStore]
})
export class ImagesFormComponent implements OnInit {
  @Input() data: ImagesState;
  @Output() pluginChange = this.store.select(state => ({...state}));

  public readonly interfaceForm = new FormGroup({
    interfaceName: new FormControl(),
    interfaceOptions: new FormGroup({
      grid: new FormGroup({
        cols: new FormControl(),
        padding: new FormControl(),
      }),
      slideshow: new FormGroup({
        options: new FormControl(),
        pager: new FormControl(),
        speed: new FormControl(),
        scrollbar: new FormControl(),
      })
    })
  });

  public images$: Observable<Image[]> = this.store.select(state => (state.images ? [...state.images] : []));
  public view = 'settings';
  public sortable: boolean;

  constructor(private readonly store: ImagesStore) {
  }

  ngOnInit() {
    if (this.data?.interfaceName) {
      this.interfaceForm.patchValue({
        interfaceName: this.data.interfaceName,
        interfaceOptions: this.data.interfaceOptions
      });
      this.store.patchState({...this.data});
    }

    this.interfaceForm.valueChanges.subscribe(({interfaceName, interfaceOptions}) =>
      this.store.setInterface(interfaceName, interfaceOptions));
  }

  addImage(ev) {
    this.store.addImage({
      uid: uuid(),
      src: ev.downloadURL,
      title: ev.name,
      size: ev.size,
      type: ev.type
    });
  }

  sortImages(ev, before: Image[]) {
    // todo this is sending the sort event up to the parent
    // todo there is a rerender here after you sort
    const after = ev.detail.complete(before);
    this.store.setImages([...after]);
    return false;
  }
}
