import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {LoadingController} from '@ionic/angular';
import {v4 as uuid} from 'uuid';
import {Subscription} from 'rxjs';

@Directive({
  selector: '[appDropzone]'
})
export class DropzoneDirective {
  @Input() path = 'uploads';
  @Input() makeUnique: boolean;
  @Input() uploadMessage = 'Uploading file...';
  @Input() multiple: boolean;

  @Output() dropped: EventEmitter<any> = new EventEmitter<any>();
  @Output() uploaded: EventEmitter<any> = new EventEmitter<any>();
  private subs: Subscription[] = [];

  constructor(private storage: AngularFireStorage, private loadingController: LoadingController) { }

  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
  }
  @HostListener('dragleave', ['$event']) onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
  }
  @HostListener('drop', ['$event']) onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    const files = evt.dataTransfer.files;
    if (this.multiple) {
      files.forEach(file => this.upload(file));
    } else {
      this.upload(files[0]);
    }

    if (files) {
      const reader = new FileReader();

      reader.readAsBinaryString(files[0]);

      reader.onload = async () => {
        this.dropped.emit(reader.result);
      };
    }
  }
  async upload(file: any) {
    const loading = await this.loadingController.create({message: this.uploadMessage});
    await loading.present();
    let name = file.name;
    if (this.makeUnique) {
      const nameParts = name.split('.');
      const ext = nameParts.pop();
      name = `${nameParts.join('.')}-${uuid()}.${ext}`;
    }
    const filePath = this.path + '/' + name;
    this.storage.upload(filePath, file).then(() => {
      this.subs.push(this.storage.ref(filePath).getDownloadURL().subscribe(url => {
        file.downloadURL = url;
        this.uploaded.emit(file);
        loading.dismiss();
      }));
    });
  }
}
