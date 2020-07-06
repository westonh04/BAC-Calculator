function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n  <ion-content [fullscreen]=\"true\">\n  \n  <ion-header>\n    <ion-toolbar color=\"dark\">\n      <ion-title class=\"ion-text-center\">BAC Calculator</ion-title>\n    </ion-toolbar>\n    <ion-text class=\"ion-text-center\">\n      <h4>User Information</h4>\n    </ion-text>\n  </ion-header>\n    \n  <form [formGroup]=\"createUserForm\" (submit)=\"createUser()\">\n  <ion-grid>\n    <ion-row class=\"ion-padding-top\">\n      <ion-col>\n        <ion-list>  \n          <ion-item>\n            <ion-label>Name</ion-label>\n            <ion-input \n                type=\"text\"\n                class=\"ion-text-right\"\n                required=\"true\"\n                formControlName=\"name\"\n                >\n                </ion-input>\n          </ion-item>\n      </ion-list>\n     </ion-col>\n    </ion-row>\n      <ion-row>\n       <ion-col>\n\n        <ion-list>\n          <ion-item>\n            <ion-label>Gender</ion-label>\n            <ion-select placeholder=\"Select One\" [(ngModel)]=\"myService.selectedGender\" formControlName=\"gender\">\n              <ion-select-option value=\"f\">Female</ion-select-option>\n              <ion-select-option value=\"m\">Male</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n\n       </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-padding-top\">\n        <ion-col>\n          <ion-list>  \n            <ion-item>\n              <ion-label>Birthday</ion-label>\n              <ion-datetime displayFormat=\"MM/DD/YYYY\" min=\"1900-01-01\" max=\"1999-01-01\" formControlName=\"birthday\"></ion-datetime>\n            </ion-item>\n\n        </ion-list>\n\n       </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-padding-top\">\n        <ion-col>\n          <ion-list>  \n            <ion-item>\n              <ion-label>Weight (lbs.)</ion-label>\n              <ion-input \n                  [(ngModel)]=\"myService.weight\"\n                  type=\"number\"\n                  class=\"ion-text-right\"\n                  required=\"true\"\n                  formControlName=\"weight\">\n                  </ion-input>\n            </ion-item>\n        </ion-list>\n       </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col></ion-col>\n        <ion-col>\n\n          <ion-button [disabled]=\"!createUserForm.valid\" (click)=\"myService.save()\" expand=\"block\" color=\"dark\" type=\"submit\">Done</ion-button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n    </form>\n\n\n\n\n\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/services/firestore.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/firestore.service.ts ***!
    \***********************************************/

  /*! exports provided: FirestoreService */

  /***/
  function srcAppServicesFirestoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirestoreService", function () {
      return FirestoreService;
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


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/__ivy_ngcc__/firestore/es2015/index.js");

    var FirestoreService = /*#__PURE__*/function () {
      function FirestoreService(firestore) {
        _classCallCheck(this, FirestoreService);

        this.firestore = firestore;
      }

      _createClass(FirestoreService, [{
        key: "createUser",
        value: function createUser(name, gender, birthday, weight) {
          var id = this.firestore.createId();
          return this.firestore.doc("users/".concat(id)).set({
            id: id,
            name: name,
            gender: gender,
            birthday: birthday,
            weight: weight
          });
        }
      }]);

      return FirestoreService;
    }();

    FirestoreService.ctorParameters = function () {
      return [{
        type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    FirestoreService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FirestoreService);
    /***/
  },

  /***/
  "./src/app/tab1/tab1-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tab1/tab1-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: Tab1PageRoutingModule */

  /***/
  function srcAppTab1Tab1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
      return Tab1PageRoutingModule;
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


    var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/tab1/tab1.page.ts");

    var routes = [{
      path: '',
      component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
    }];

    var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
      _classCallCheck(this, Tab1PageRoutingModule);
    };

    Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab1PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tab1/tab1.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.module.ts ***!
    \*************************************/

  /*! exports provided: Tab1PageModule */

  /***/
  function srcAppTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
      return Tab1PageModule;
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/tab1/tab1.page.ts");
    /* harmony import */


    var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab1-routing.module */
    "./src/app/tab1/tab1-routing.module.ts");

    var Tab1PageModule = function Tab1PageModule() {
      _classCallCheck(this, Tab1PageModule);
    };

    Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_6__["Tab1PageRoutingModule"]],
      declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })], Tab1PageModule);
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab1/tab1.page.ts ***!
    \***********************************/

  /*! exports provided: Tab1Page */

  /***/
  function srcAppTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
      return Tab1Page;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_firestore_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/firestore.service */
    "./src/app/services/firestore.service.ts");

    var Tab1Page = /*#__PURE__*/function () {
      function Tab1Page(myService, navController, router, loadingCtrl, alertCtrl, firestoreService, formBuilder) {
        _classCallCheck(this, Tab1Page);

        this.myService = myService;
        this.navController = navController;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.firestoreService = firestoreService;
        this.createUserForm = formBuilder.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          birthday: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          weight: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
      }

      _createClass(Tab1Page, [{
        key: "createUser",
        value: function createUser() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var loading, name, gender, birthday, weight;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingCtrl.create();

                  case 2:
                    loading = _context.sent;
                    name = this.createUserForm.value.name;
                    gender = this.createUserForm.value.gender;
                    birthday = this.createUserForm.value.birthday;
                    weight = this.createUserForm.value.weight;
                    this.firestoreService.createUser(name, gender, birthday, weight).then(function () {
                      loading.dismiss().then(function () {
                        //[routerLink]="['']"
                        _this.router.navigateByUrl('/tabs/tab2');
                      });
                    }, function (error) {
                      console.error(error);
                    });
                    _context.next = 10;
                    return loading.present();

                  case 10:
                    return _context.abrupt("return", _context.sent);

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return Tab1Page;
    }();

    Tab1Page.ctorParameters = function () {
      return [{
        type: _services_bac_calc_service__WEBPACK_IMPORTED_MODULE_2__["BacCalcService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }];
    };

    Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab1',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tab1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tab1.page.scss */
      "./src/app/tab1/tab1.page.scss"))["default"]]
    })], Tab1Page);
    /***/
  }
}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map