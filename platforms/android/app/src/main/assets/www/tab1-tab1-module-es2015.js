(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <ion-content [fullscreen]=\"true\">\n  \n  <ion-header>\n    <ion-toolbar color=\"dark\">\n      <ion-title class=\"ion-text-center\">BAC Calculator</ion-title>\n    </ion-toolbar>\n    <ion-text class=\"ion-text-center\">\n      <h4>User Information</h4>\n    </ion-text>\n  </ion-header>\n    \n  <form [formGroup]=\"createUserForm\" (submit)=\"createUser()\">\n  <ion-grid>\n    <ion-row class=\"ion-padding-top\">\n      <ion-col>\n        <ion-list>  \n          <ion-item>\n            <ion-label>Name</ion-label>\n            <ion-input \n                type=\"text\"\n                class=\"ion-text-right\"\n                required=\"true\"\n                formControlName=\"name\">\n                </ion-input>\n          </ion-item>\n      </ion-list>\n     </ion-col>\n    </ion-row>\n      <ion-row>\n       <ion-col>\n\n        <ion-list>\n          <ion-item>\n            <ion-label>Gender</ion-label>\n            <ion-select placeholder=\"Select One\" [(ngModel)]=\"myService.selectedGender\" formControlName=\"gender\">\n              <ion-select-option value=\"f\">Female</ion-select-option>\n              <ion-select-option value=\"m\">Male</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n\n       </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-padding-top\">\n        <ion-col>\n          <ion-list>  \n            <ion-item>\n              <ion-label>Birthday</ion-label>\n              <ion-datetime displayFormat=\"MM/DD/YYYY\" min=\"1900-01-01\" max=\"1999-01-01\" formControlName=\"birthday\"></ion-datetime>\n            </ion-item>\n\n        </ion-list>\n\n       </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-padding-top\">\n        <ion-col>\n          <ion-list>  \n            <ion-item>\n              <ion-label>Weight (lbs.)</ion-label>\n              <ion-input \n                  [(ngModel)]=\"myService.weight\"\n                  type=\"number\"\n                  class=\"ion-text-right\"\n                  required=\"true\"\n                  formControlName=\"weight\">\n                  </ion-input>\n            </ion-item>\n        </ion-list>\n       </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col></ion-col>\n        <ion-col>\n\n          <ion-button [disabled]=\"!createUserForm.valid\" (click)=\"myService.save()\" expand=\"block\" color=\"dark\" type=\"submit\" [routerLink]=\"['/tabs/tab2']\">Done</ion-button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n    </form>\n\n\n\n\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/services/firestore.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/firestore.service.ts ***!
  \***********************************************/
/*! exports provided: FirestoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreService", function() { return FirestoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/__ivy_ngcc__/firestore/es2015/index.js");



let FirestoreService = class FirestoreService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    createUser(name, gender, birthday, weight) {
        const id = this.firestore.createId();
        return this.firestore.doc(`users/${id}`).set({
            id,
            name,
            gender,
            birthday,
            weight,
        });
    }
};
FirestoreService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
FirestoreService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FirestoreService);



/***/ }),

/***/ "./src/app/tab1/tab1-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/tab1/tab1-routing.module.ts");







let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_6__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_bac_calc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bac-calc.service */ "./src/app/services/bac-calc.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");








let Tab1Page = class Tab1Page {
    constructor(myService, navController, router, loadingCtrl, alertCtrl, firestoreService, formBuilder) {
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
            weight: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
    }
    createUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create();
            const name = this.createUserForm.value.name;
            const gender = this.createUserForm.value.gender;
            const birthday = this.createUserForm.value.birthday;
            const weight = this.createUserForm.value.weight;
            this.firestoreService
                .createUser(name, gender, birthday, weight)
                .then(() => {
                loading.dismiss().then(() => {
                    this.router.navigateByUrl('');
                });
            }, error => {
                console.error(error);
            });
            return yield loading.present();
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_bac_calc_service__WEBPACK_IMPORTED_MODULE_2__["BacCalcService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    })
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map