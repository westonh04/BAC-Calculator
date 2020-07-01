function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3Tab3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n  <ion-content [fullscreen]=\"true\">\n\n    <ion-header>\n      <ion-toolbar color=\"dark\">\n        <ion-title class=\"ion-text-center\">BAC Calculator</ion-title>\n      </ion-toolbar>\n      <ion-text class=\"ion-text-center\">\n        <h4>Blood Alchol Content</h4>\n      </ion-text>\n    </ion-header>\n\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle class=\"ion-text-center\">Estimated Values Only</ion-card-subtitle>\n        <ion-card-title class =\"ion-text-center\" color=\"success\"><br>**{{myService.bacPercent}}%</ion-card-title>\n      </ion-card-header>\n    \n      <ion-card-content>\n        <div>{{myService.result}}</div><br><br>\n        **This application does not give confirmed results. This is\n         only an estimate that is calculated using data from trusted\n          sources based on your gender, age, and weight. This application\n           does not ever emply that you should opporate a vehicle under\n            the influence of alcohol. \n      </ion-card-content>\n\n   </ion-card>\n\n    <ion-footer>\n      \n      <div class=\"logo\" (click)=\"geoService.uberClick()\"><img src=\"..\\assets\\uber\\50px.png\" id=\"uberLogo\"> \n        <div class=\"center\">Ride With Uber</div>\n      </div>\n\n        <!--p>Lat: {{geoService.lat}}  Lon: {{geoService.lon}}</p-->\n       <!--ion-button (click)=\"geoService.whereAmI()\" >Where am I?</ion-button-->\n      \n    </ion-footer>\n    \n";
    /***/
  },

  /***/
  "./src/app/services/geo-location.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/geo-location.service.ts ***!
    \**************************************************/

  /*! exports provided: GeoLocationService */

  /***/
  function srcAppServicesGeoLocationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeoLocationService", function () {
      return GeoLocationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");

    var GeoLocationService = /*#__PURE__*/function () {
      function GeoLocationService(geolocation) {
        _classCallCheck(this, GeoLocationService);

        this.geolocation = geolocation;
      }

      _createClass(GeoLocationService, [{
        key: "whereAmI",
        value: function whereAmI() {
          var _this = this;

          this.geolocation.getCurrentPosition({
            timeout: 10000,
            enableHighAccuracy: true
          }).then(function (res) {
            _this.lat = res.coords.latitude;
            _this.lon = res.coords.longitude;
          })["catch"](function (e) {
            console.log(e);
          });
        }
      }, {
        key: "uberClick",
        value: function uberClick() {
          window.open('https://m.uber.com/?client_id=_ekladMFwT5r5gIXq0kgBkrvyc99LGiz&action=setPickup&pickup[latitude]=' + this.lat + '&pickup[longitude]=' + this.lon + '&product_id=a1111c8c-c720-46c3-8534-2fcdd730040d', '_system');
        }
      }]);

      return GeoLocationService;
    }();

    GeoLocationService.ctorParameters = function () {
      return [{
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]
      }];
    };

    GeoLocationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GeoLocationService);
    /***/
  },

  /***/
  "./src/app/tab3/tab3-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tab3/tab3-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: Tab3PageRoutingModule */

  /***/
  function srcAppTab3Tab3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function () {
      return Tab3PageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/tab3/tab3.page.ts");

    var routes = [{
      path: '',
      component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"]
    }];

    var Tab3PageRoutingModule = function Tab3PageRoutingModule() {
      _classCallCheck(this, Tab3PageRoutingModule);
    };

    Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab3PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tab3/tab3.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.module.ts ***!
    \*************************************/

  /*! exports provided: Tab3PageModule */

  /***/
  function srcAppTab3Tab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
      return Tab3PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/tab3/tab3.page.ts");
    /* harmony import */


    var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tab3-routing.module */
    "./src/app/tab3/tab3-routing.module.ts");

    var Tab3PageModule = function Tab3PageModule() {
      _classCallCheck(this, Tab3PageModule);
    };

    Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
      }]), _tab3_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab3PageRoutingModule"]],
      declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })], Tab3PageModule);
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3Tab3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".center {\n  padding: 10px 0;\n  text-align: center;\n}\n\n.logo {\n  padding: 10px 0;\n  border: 0px solid grey;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy9DOlxcQXBwc1xcR2l0XFxiYWMtY2FsYy9zcmNcXGFwcFxcdGFiM1xcdGFiMy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFjO0VBRWQsa0JBQWtCO0FDQXRCOztBREdDO0VBQ0csZUFBYztFQUNkLHNCQUFzQjtFQUN0QixrQkFBa0I7QUNBdEIiLCJmaWxlIjoic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XHJcbiAgICBwYWRkaW5nOjEwcHggMDtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuIC5sb2dvIHtcclxuICAgIHBhZGRpbmc6MTBweCAwO1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgZ3JleTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH0iLCIuY2VudGVyIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dvIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICBib3JkZXI6IDBweCBzb2xpZCBncmV5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab3/tab3.page.ts ***!
    \***********************************/

  /*! exports provided: Tab3Page */

  /***/
  function srcAppTab3Tab3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
      return Tab3Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_bac_calc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/bac-calc.service */
    "./src/app/services/bac-calc.service.ts");
    /* harmony import */


    var _services_geo_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/geo-location.service */
    "./src/app/services/geo-location.service.ts");

    var Tab3Page = /*#__PURE__*/function () {
      function Tab3Page(myService, geoService) {
        _classCallCheck(this, Tab3Page);

        this.myService = myService;
        this.geoService = geoService;
      }

      _createClass(Tab3Page, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          //run the calculator function in myService
          this.myService.bac(); //round to 2 decimals

          this.myService.bacPercent = parseFloat(this.myService.bacPercent).toFixed(2);
          this.geoService.whereAmI();
        }
      }]);

      return Tab3Page;
    }();

    Tab3Page.ctorParameters = function () {
      return [{
        type: _services_bac_calc_service__WEBPACK_IMPORTED_MODULE_2__["BacCalcService"]
      }, {
        type: _services_geo_location_service__WEBPACK_IMPORTED_MODULE_3__["GeoLocationService"]
      }];
    };

    Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab3',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tab3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tab3.page.scss */
      "./src/app/tab3/tab3.page.scss"))["default"]]
    })], Tab3Page);
    /***/
  }
}]);
//# sourceMappingURL=tab3-tab3-module-es5.js.map