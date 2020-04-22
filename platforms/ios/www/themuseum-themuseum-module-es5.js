function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["themuseum-themuseum-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/themuseum/themuseum.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/themuseum/themuseum.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemuseumThemuseumPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header style=\"background-color: white;\">\n  <a href=\"https://www.facebook.com/museoalfaromeo\" target=\"_blank\"><img src=\"../../assets/icon/fb.png\" height=\"20px\" width=\"20px\" style=\"margin:10px;\"/></a>\n  <a href=\"https://www.instagram.com/museoalfaromeo/\" target=\"_blank\"><img src=\"../../assets/icon/ig.png\" height=\"20px\" width=\"20px\" style=\"margin:10px;\"/></a>\n  <a href=\"https://www.tripadvisor.it/Attraction_Review-g1643829-d1906809-Reviews-Museo_Storico_Alfa_Romeo-Arese_Province_of_Milan_Lombardy.html\" target=\"_blank\"><img src=\"../../assets/icon/ta.png\" height=\"20px\" width=\"20px\" style=\"margin:10px;\"/></a>\n</ion-header>\n-->\n<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <img src=\"../../assets/img/arlogo.png\" width=\"50px\" style=\"display:inline-block\" height=\"50px\" style=\"margin-top:20px;margin-left:20px;\" />\n    <ion-title style=\"display:inline-block;margin-bottom:20px;\">\n      <p style=\"font-size:15px;margin:0px;\">LA MACCHINA DEL TEMPO</p>\n      <p style=\"font-size:10px;font-weight:200;margin:0px;\">MUSEO STORICO ALFA ROMEO</p>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"1\">\n        <span class=\"slider-nav arrow-prev\" (click)=\"slidePrev(sliderOne,slideWithNav)\">\n          <div class=\"prev-icon-custom custon-nav\" [class.disabled]=\"sliderOne.isBeginningSlide\"></div>\n        </span>\n      </ion-col>\n      <ion-col size=\"10\">\n\n        <ion-slides pager=\"true\" [options]=\"slideOptsOne\" #slideWithNav (ionSlideDidChange)=\"SlideDidChange(sliderOne,slideWithNav)\">\n          <ion-slide *ngFor=\"let s of sliderOne.slidesItems\">\n            <img src=\"../../assets/img/{{s.id}}.jpg\">\n          </ion-slide>\n        </ion-slides>\n\n      </ion-col>\n      <ion-col size=\"1\">\n        <span class=\"slider-nav arrow-next\" (click)=\"slideNext(sliderOne,slideWithNav)\">\n          <div class=\"next-icon-custom custon-nav\" [class.disabled]=\"sliderOne.isEndSlide\"></div>\n        </span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>WELCOME TO MUSEO STORICO ALFA ROMEO</ion-card-subtitle>\n      <ion-card-title>LA MACCHINA DEL TEMPO</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <h2 style=\"color:#AF1F2D\">MYTH AND FUTURE. IN A UNIQUE PLACE.</h2>\n      The Alfa Romeo Museum has been completely renovated and is even more prestigious. The historical site in Arese has a new look and is opened to public with a refined arrangement that reflects Alfa Romeo's distinctive DNA. Six floors of history\n      binding past, present and future and complimenting the achievements of an extraordinary brand, its vehicles, its technology and style.<br /><br />\n\n      <h2 style=\"color:#AF1F2D\">GUARDING THE LEGEND.</h2>\n      Lines that have changed the way we imagine design; cars and drivers who set the pace for competition on the track; technologies that have redefined the standards of innovation. Beauty, speed, robustness and steady production: this is Alfa\n      Romeo's legacy. It's driving passion, it's evolution, it's our heart.\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/themuseum/themuseum.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/themuseum/themuseum.module.ts ***!
    \***********************************************/

  /*! exports provided: TheMuseumModule */

  /***/
  function srcAppThemuseumThemuseumModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TheMuseumModule", function () {
      return TheMuseumModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _themuseum_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./themuseum.page */
    "./src/app/themuseum/themuseum.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");

    var TheMuseumModule = function TheMuseumModule() {
      _classCallCheck(this, TheMuseumModule);
    };

    TheMuseumModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _themuseum_page__WEBPACK_IMPORTED_MODULE_6__["TheMuseum"]
      }])],
      declarations: [_themuseum_page__WEBPACK_IMPORTED_MODULE_6__["TheMuseum"]]
    })], TheMuseumModule);
    /***/
  },

  /***/
  "./src/app/themuseum/themuseum.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/themuseum/themuseum.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemuseumThemuseumPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n\n--ion-toolbar-background {\n  --background-color: #C11E1E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9uZ3J1YmlzaWMvRG9jdW1lbnRzL2lvbmljLXdvcmtzcGFjZS9BUk1TL3NyYy9hcHAvdGhlbXVzZXVtL3RoZW11c2V1bS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RoZW11c2V1bS90aGVtdXNldW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90aGVtdXNldW0vdGhlbXVzZXVtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjQzExRTFFO1xufVxuIiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4tLWlvbi10b29sYmFyLWJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQtY29sb3I6ICNDMTFFMUU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/themuseum/themuseum.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/themuseum/themuseum.page.ts ***!
    \*********************************************/

  /*! exports provided: TheMuseum */

  /***/
  function srcAppThemuseumThemuseumPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TheMuseum", function () {
      return TheMuseum;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var TheMuseum = /*#__PURE__*/function () {
      function TheMuseum() {
        _classCallCheck(this, TheMuseum);

        this.slideOptsOne = {
          initialSlide: 0,
          slidesPerView: 1,
          autoplay: true
        };
        this.sliderOne = {
          isBeginningSlide: true,
          isEndSlide: false,
          slidesItems: [{
            id: 1,
            image: 'src/assets/img/ar1.jpg'
          }, {
            id: 2,
            image: 'src/assets/img/ar2.jpg'
          }, {
            id: 3,
            image: 'src/assets/img/ar3.jpg'
          }, {
            id: 4,
            image: 'src/assets/img/ar4.jpg'
          }]
        };
      } //constructor


      _createClass(TheMuseum, [{
        key: "slideNext",
        value: function slideNext(object, slideView) {
          var _this = this;

          slideView.slideNext(500).then(function () {
            _this.checkIfNavDisabled(object, slideView);
          });
        }
      }, {
        key: "slidePrev",
        value: function slidePrev(object, slideView) {
          var _this2 = this;

          slideView.slidePrev(500).then(function () {
            _this2.checkIfNavDisabled(object, slideView);
          });
          ;
        }
      }, {
        key: "SlideDidChange",
        value: function SlideDidChange(object, slideView) {
          this.checkIfNavDisabled(object, slideView);
        }
      }, {
        key: "checkIfNavDisabled",
        value: function checkIfNavDisabled(object, slideView) {
          this.checkisBeginning(object, slideView);
          this.checkisEnd(object, slideView);
        }
      }, {
        key: "checkisBeginning",
        value: function checkisBeginning(object, slideView) {
          slideView.isBeginning().then(function (istrue) {
            object.isBeginningSlide = istrue;
          });
        }
      }, {
        key: "checkisEnd",
        value: function checkisEnd(object, slideView) {
          slideView.isEnd().then(function (istrue) {
            object.isEndSlide = istrue;
          });
        }
      }]);

      return TheMuseum;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideWithNav', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], TheMuseum.prototype, "slideWithNav", void 0);
    TheMuseum = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-themuseum',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./themuseum.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/themuseum/themuseum.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./themuseum.page.scss */
      "./src/app/themuseum/themuseum.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TheMuseum);
    /***/
  }
}]);
//# sourceMappingURL=themuseum-themuseum-module-es5.js.map