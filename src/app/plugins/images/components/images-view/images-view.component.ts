import {Component, Input, OnInit} from '@angular/core';
import {ImagesState} from '../../images.store';

@Component({
  selector: 'app-images-view',
  templateUrl: './images-view.component.html',
  styleUrls: ['./images-view.component.scss'],
})
export class ImagesViewComponent implements OnInit {
  @Input() data: ImagesState;

  constructor() { }

  get keyImage() {
    return this.data?.images?.map(i => i.src).shift();
  }

  get gridOptions() {
    return this.data?.interfaceOptions.grid;
  }

  get slideshowOptions() {
    return this.data?.interfaceOptions.slideshow;
  }

  get sliderOptions() {
    if (! this.slideshowOptions) {
      return {};
    }
    return {
      ...this.slideshowOptions.options,
      speed: this.slideshowOptions.speed,
      autoplay: true,
      initialSlide: 0
    };
  }

  get colSize() {
    const {grid} = this.data.interfaceOptions;
    const {cols} = grid;
    return 12 / cols;
  }

  ngOnInit() {
    console.log(this.data);
  }

}
