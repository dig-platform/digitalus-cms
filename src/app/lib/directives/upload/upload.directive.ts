import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/compat/storage';
import {LoadingController} from '@ionic/angular';
import {Subscription} from 'rxjs';
import {v4 as uuid} from 'uuid';

@Directive({
  selector: '[appUpload]'
})
export class UploadDirective {
  @Input() accept = '';
  @Input() path = 'uploads';
  @Input() makeUnique: boolean;
  @Input() uploadMessage = 'Uploading file...';
  @Input() multiple: boolean;

  @Output() uploaded: EventEmitter<any> = new EventEmitter<any>();

  private subs: Subscription[] = [];
  private fileInput: any;

  constructor(private storage: AngularFireStorage, private loadingController: LoadingController) { }

  @HostListener('click', ['$event.target'])
  onClick(el: any) {
    this.open(el);
  }

  detectFiles(event) {
    if (this.multiple) {
      return event.target.files.forEach(file => this.upload(file));
    } else {
      return this.upload(event.target.files[0]);
    }
  }

  open(host: any) {
    const uploader = document.createElement('input');
    uploader.style.display = 'none';
    uploader.type = 'file';
    uploader.accept = this.accept;
    uploader.click();
    uploader.addEventListener('change', ev => this.detectFiles(ev));
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
