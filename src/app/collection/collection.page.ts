import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-collection',
  templateUrl: 'collection.page.html',
  styleUrls: ['collection.page.scss']
})
export class Collection {

  @ViewChild('slideWithNav', {static: true}) slideWithNav: IonSlides;
  @ViewChild('slideWithNav2', {static: true}) slideWithNav2: IonSlides;
  @ViewChild('slideWithNav3', {static: true}) slideWithNav3: IonSlides;

  sliderOne: any;
  sliderTwo: any;
  sliderThree: any;


  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: false
  };
  slideOptsTwo = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: false
  };
  slideOptsThree = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: false
  };

  constructor() {
    this.sliderOne =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {
            id: 1,
            image: '../../assets/img/ar1.jpg'
          },
          {
            id: 2,
            image: '../../assets/img/ar2.jpg'
          },
          {
            id: 3,
            image: '../../assets/img/ar3.jpg'
          },
          {
            id: 4,
            image: '../../assets/img/ar4.jpg'
          },
          {
            id: 5,
            image: '../../assets/img/ar5.jpg'
          },
          {
            id: 6,
            image: '../../assets/img/ar6.jpg'
          },
          {
            id: 7,
            image: '../../assets/img/ar7.jpg'
          },
          {
            id: 8,
            image: '../../assets/img/ar8.jpg'
          },
          {
            id: 9,
            image: '../../assets/img/ar9.jpg'
          },
          {
            id: 10,
            image: '../../assets/img/ar10.jpg'
          },
          {
            id: 11,
            image: '../../assets/img/ar11.jpg'
          },
          {
            id: 12,
            image: '../../assets/img/ar12.jpg'
          },
          {
            id: 13,
            image: '../../assets/img/ar13.jpg'
          },
          {
            id: 14,
            image: '../../assets/img/ar14.jpg'
          },
          {
            id: 15,
            image: '../../assets/img/ar15.jpg'
          },
        ]
      };

    this.sliderTwo =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {
            id: 16,
            image: '../../assets/img/ar16.jpg'
          },
          {
            id: 17,
            image: '../../assets/img/ar17.jpg'
          },
          {
            id: 18,
            image: '../../assets/img/ar18.jpg'
          },
          {
            id: 19,
            image: '../../assets/img/ar19.jpg'
          },
          {
            id: 20,
            image: '../../assets/img/ar20.jpg'
          },
          {
            id: 21,
            image: '../../assets/img/ar21.jpg'
          },
          {
            id: 22,
            image: '../../assets/img/ar22.jpg'
          },
          {
            id: 23,
            image: '../../assets/img/ar23.jpg'
          },
          {
            id: 24,
            image: '../../assets/img/ar24.jpg'
          },
          {
            id: 25,
            image: '../../assets/img/ar25.jpg'
          },
          {
            id: 26,
            image: '../../assets/img/ar26.jpg'
          },
          {
            id: 27,
            image: '../../assets/img/ar27.jpg'
          },
          {
            id: 28,
            image: '../../assets/img/ar28.jpg'
          },
          {
            id: 29,
            image: '../../assets/img/ar29.jpg'
          },
          {
            id: 30,
            image: '../../assets/img/ar30.jpg'
          },
          {
            id: 31,
            image: '../../assets/img/ar31.jpg'
          },
          {
            id: 32,
            image: '../../assets/img/ar32.jpg'
          },
          {
            id: 33,
            image: '../../assets/img/ar33.jpg'
          },
          {
            id: 34,
            image: '../../assets/img/ar34.jpg'
          },
          {
            id: 35,
            image: '../../assets/img/ar35.jpg'
          },
          {
            id: 36,
            image: '../../assets/img/ar36.jpg'
          },
          {
            id: 37,
            image: '../../assets/img/ar37.jpg'
          },
          {
            id: 38,
            image: '../../assets/img/ar38.jpg'
          },
          {
            id: 39,
            image: '../../assets/img/ar39.jpg'
          }
        ]
      };

    this.sliderThree =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {
            id: 40,
            image: '../../assets/img/ar40.jpg'
          },
          {
            id: 41,
            image: '../../assets/img/ar41.jpg'
          },
          {
            id: 42,
            image: '../../assets/img/ar42.jpg'
          },
          {
            id: 43,
            image: '../../assets/img/ar43.jpg'
          },
          {
            id: 44,
            image: '../../assets/img/ar44.jpg'
          },
          {
            id: 45,
            image: '../../assets/img/ar45.jpg'
          },
          {
            id: 46,
            image: '../../assets/img/ar46.jpg'
          },
          {
            id: 47,
            image: '../../assets/img/ar47.jpg'
          },
          {
            id: 48,
            image: '../../assets/img/ar48.jpg'
          },
          {
            id: 49,
            image: '../../assets/img/ar49.jpg'
          },
          {
            id: 50,
            image: '../../assets/img/ar50.jpg'
          },
          {
            id: 51,
            image: '../../assets/img/ar51.jpg'
          }
        ]
      };
  }

  //Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation
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
