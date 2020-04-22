(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["collection-collection-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/collection/collection.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/collection/collection.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <img src=\"../../assets/img/arlogo.png\" width=\"50px\" style=\"display:inline-block\" height=\"50px\" style=\"margin-top:20px;margin-left:20px;\" />\n    <ion-title style=\"display:inline-block;margin-bottom:20px;\">\n      <p style=\"font-size:15px;margin:0px;\">LA MACCHINA DEL TEMPO</p>\n      <p style=\"font-size:10px;font-weight:200;margin:0px;\">MUSEO STORICO ALFA ROMEO</p>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title style=\"color:#AF1F2D\">THROUGH THE YEARS</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>FROM 10 TO 30</ion-card-title>\n    </ion-card-header>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <span class=\"slider-nav arrow-prev\" (click)=\"slidePrev(sliderOne,slideWithNav)\">\n            <div class=\"prev-icon-custom custon-nav\" [class.disabled]=\"sliderOne.isBeginningSlide\"></div>\n          </span>\n        </ion-col>\n        <ion-col size=\"10\">\n\n          <ion-slides pager=\"true\" [options]=\"slideOptsOne\" #slideWithNav (ionSlideDidChange)=\"SlideDidChange(sliderOne,slideWithNav)\">\n            <ion-slide *ngFor=\"let s of sliderOne.slidesItems\">\n              <img src=\"../../assets/img/ar{{s.id}}.jpg\">\n            </ion-slide>\n          </ion-slides>\n\n        </ion-col>\n        <ion-col size=\"1\">\n          <span class=\"slider-nav arrow-next\" (click)=\"slideNext(sliderOne,slideWithNav)\">\n            <div class=\"next-icon-custom custon-nav\" [class.disabled]=\"sliderOne.isEndSlide\"></div>\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>FROM 40 T0 60</ion-card-title>\n    </ion-card-header>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <span class=\"slider-nav arrow-prev\" (click)=\"slidePrev(sliderTwo,slideWithNav2)\">\n            <div class=\"prev-icon-custom custon-nav\" [class.disabled]=\"sliderTwo.isBeginningSlide\"></div>\n          </span>\n        </ion-col>\n        <ion-col size=\"10\">\n\n          <ion-slides pager=\"true\" [options]=\"slideOptsTwo\" #slideWithNav2 (ionSlideDidChange)=\"SlideDidChange(sliderTwo,slideWithNav2)\">\n            <ion-slide *ngFor=\"let s of sliderTwo.slidesItems\">\n              <img src=\"../../assets/img/ar{{s.id}}.jpg\">\n            </ion-slide>\n          </ion-slides>\n\n        </ion-col>\n        <ion-col size=\"1\">\n          <span class=\"slider-nav arrow-next\" (click)=\"slideNext(sliderTwo,slideWithNav2)\">\n            <div class=\"next-icon-custom custon-nav\" [class.disabled]=\"sliderTwo.isEndSlide\"></div>\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>FROM 70 TO 2010</ion-card-title>\n    </ion-card-header>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <span class=\"slider-nav arrow-prev\" (click)=\"slidePrev(sliderThree,slideWithNav3)\">\n            <div class=\"prev-icon-custom custon-nav\" [class.disabled]=\"sliderThree.isBeginningSlide\"></div>\n          </span>\n        </ion-col>\n        <ion-col size=\"10\">\n\n          <ion-slides pager=\"true\" [options]=\"slideOptsThree\" #slideWithNav3 (ionSlideDidChange)=\"SlideDidChange(sliderThree,slideWithNav3)\">\n            <ion-slide *ngFor=\"let s of sliderThree.slidesItems\">\n              <img src=\"../../assets/img/ar{{s.id}}.jpg\">\n            </ion-slide>\n          </ion-slides>\n\n        </ion-col>\n        <ion-col size=\"1\">\n          <span class=\"slider-nav arrow-next\" (click)=\"slideNext(sliderThree,slideWithNav3)\">\n            <div class=\"next-icon-custom custon-nav\" [class.disabled]=\"sliderThree.isEndSlide\"></div>\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/collection/collection.module.ts":
/*!*************************************************!*\
  !*** ./src/app/collection/collection.module.ts ***!
  \*************************************************/
/*! exports provided: CollectionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionModule", function() { return CollectionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _collection_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./collection.page */ "./src/app/collection/collection.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");








let CollectionModule = class CollectionModule {
};
CollectionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _collection_page__WEBPACK_IMPORTED_MODULE_6__["Collection"] }])
        ],
        declarations: [_collection_page__WEBPACK_IMPORTED_MODULE_6__["Collection"]]
    })
], CollectionModule);



/***/ }),

/***/ "./src/app/collection/collection.page.scss":
/*!*************************************************!*\
  !*** ./src/app/collection/collection.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n\n.custon-nav {\n  height: 48px;\n  width: 20px;\n  cursor: pointer;\n  vertical-align: middle;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.prev-icon-custom {\n  background: url('arrow-left.png') no-repeat scroll 0px 0px;\n}\n\n.prev-icon-custom.disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n\n.next-icon-custom {\n  background: url('arrow-right.png') no-repeat scroll -32px 0px;\n}\n\n.next-icon-custom.disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n\n.slider-nav ion-icon {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9uZ3J1YmlzaWMvRG9jdW1lbnRzL2lvbmljLXdvcmtzcGFjZS9BUk1TL3NyYy9hcHAvY29sbGVjdGlvbi9jb2xsZWN0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29sbGVjdGlvbi9jb2xsZWN0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDQUo7O0FERUE7RUFDSSwwREFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNFSjs7QURBQTtFQUNJLDZEQUFBO0FDR0o7O0FEREE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ0lKOztBRERJO0VBQ0ksWUFBQTtBQ0lSIiwiZmlsZSI6InNyYy9hcHAvY29sbGVjdGlvbi9jb2xsZWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuLmN1c3Rvbi1uYXZ7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi5wcmV2LWljb24tY3VzdG9te1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2Fycm93LWxlZnQucG5nKSBuby1yZXBlYXQgc2Nyb2xsIDBweCAwcHg7XG59XG4ucHJldi1pY29uLWN1c3RvbS5kaXNhYmxlZHtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLm5leHQtaWNvbi1jdXN0b217XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvYXJyb3ctcmlnaHQucG5nKSBuby1yZXBlYXQgc2Nyb2xsIC0zMnB4IDBweDtcbn1cbi5uZXh0LWljb24tY3VzdG9tLmRpc2FibGVke1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4uc2xpZGVyLW5hdntcbiAgICBpb24taWNvbntcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbn1cbiIsImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuLmN1c3Rvbi1uYXYge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLnByZXYtaWNvbi1jdXN0b20ge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9hcnJvdy1sZWZ0LnBuZykgbm8tcmVwZWF0IHNjcm9sbCAwcHggMHB4O1xufVxuXG4ucHJldi1pY29uLWN1c3RvbS5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4ubmV4dC1pY29uLWN1c3RvbSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2Fycm93LXJpZ2h0LnBuZykgbm8tcmVwZWF0IHNjcm9sbCAtMzJweCAwcHg7XG59XG5cbi5uZXh0LWljb24tY3VzdG9tLmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC40O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5zbGlkZXItbmF2IGlvbi1pY29uIHtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/collection/collection.page.ts":
/*!***********************************************!*\
  !*** ./src/app/collection/collection.page.ts ***!
  \***********************************************/
/*! exports provided: Collection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return Collection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let Collection = class Collection {
    constructor() {
        this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: false
        };
        this.slideOptsTwo = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: false
        };
        this.slideOptsThree = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: false
        };
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
        });
        ;
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
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideWithNav', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], Collection.prototype, "slideWithNav", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideWithNav2', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], Collection.prototype, "slideWithNav2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideWithNav3', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], Collection.prototype, "slideWithNav3", void 0);
Collection = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-collection',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./collection.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/collection/collection.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./collection.page.scss */ "./src/app/collection/collection.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Collection);



/***/ })

}]);
//# sourceMappingURL=collection-collection-module-es2015.js.map