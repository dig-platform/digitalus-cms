import {Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';

export enum ImageInterfaces {
  single = 'single',
  grid = 'grid',
  slideshow = 'slideshow'
}
export interface Image {
  uid?: string;
  src: string;
  title?: string;
  size?: number;
  type?: string;
}

export interface ImagesState {
  images: Image[];
  interfaceName: ImageInterfaces;
  interfaceOptions?: {
    sortable?: boolean;
    grid: {
      // number of columns in the grid
      cols?: number;
      padding?: boolean;
    };
    slideshow: {
      options?: any; // swiperjs options: https://swiperjs.com/swiper-api#parameters
      speed?: number;
      pager?: boolean; // If true, show the pagination
      scrollbar?: boolean; // If true, show the scrollbar
    };
  };
}

export const initialState: ImagesState = {
  images: [],
  interfaceName: ImageInterfaces.single,
  interfaceOptions: {
    grid: {
      cols: 1,
      padding: true
    },
    slideshow: {
      options: {},
      speed: 1000,
      pager: true,
      scrollbar: false
    }
  }
};

@Injectable()
export class ImagesStore extends ComponentStore<ImagesState> {
  constructor() {
    super({...initialState});
  }

  setImages(images: Image[]) {
    this.patchState({images: [...images]});
  }

  addImage(image: Image) {
    this.patchState((state) => {
      console.log(state);
      return {images: [...state.images, image]};
    });
  }

  removeImage(uid: string) {
    this.patchState((state) => ({...state, images: state.images.filter(i => i.uid !== uid)}));
  }

  setInterface(interfaceName: ImageInterfaces, options?: any) {
    this.patchState({
      interfaceName,
      interfaceOptions: {...options}
    });
  }
}
