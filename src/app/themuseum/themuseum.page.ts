import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-themuseum',
  templateUrl: 'themuseum.page.html',
  styleUrls: ['themuseum.page.scss']
})

export class TheMuseum {

  @ViewChild('slideWithNav', { static: true }) slideWithNav: IonSlides;
  sliderOne: any;

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  constructor() {
    this.sliderOne =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {
            id: 1,
            image: 'src/assets/img/ar1.jpg'
          },
          {
            id: 2,
            image: 'src/assets/img/ar2.jpg'
          },
          {
            id: 3,
            image: 'src/assets/img/ar3.jpg'
          },
          {
            id: 4,
            image: 'src/assets/img/ar4.jpg'
          }
        ]
      };
  }//constructor

  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

}
