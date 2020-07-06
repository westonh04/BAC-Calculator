(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-da73c8fd.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-da73c8fd.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
const HapticEngine = {
    getEngine() {
        const win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available() {
        return !!this.getEngine();
    },
    isCordova() {
        return !!window.TapticEngine;
    },
    isCapacitor() {
        const win = window;
        return !!win.Capacitor;
    },
    impact(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style });
    },
    notification(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style });
    },
    selection() {
        this.impact({ style: 'light' });
    },
    selectionStart() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
    HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
        }
    }
    return false;
};




/***/ }),

/***/ "./src/app/services/bac-calc.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/bac-calc.service.ts ***!
  \**********************************************/
/*! exports provided: BacCalcService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BacCalcService", function() { return BacCalcService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let BacCalcService = class BacCalcService {
    constructor(navController, router) {
        this.navController = navController;
        this.router = router;
        this.beers = 0;
        this.wines = 0;
        this.shots = 0;
        this.cocktails = 0;
        this.drinks = 0.00;
        this.weightDrink = 0;
        this.timeDecrease = 0;
        this.hours = 0;
        this.bacPercent = 0;
    }
    //increase drinks
    addBeer() {
        this.beers += 1;
    }
    addWine() {
        this.wines += 1;
    }
    addShot() {
        this.shots += 1;
    }
    addCocktail() {
        this.cocktails += 1;
    }
    addhour() {
        this.hours += 1;
    }
    //clear tab 2 inputs
    reset() {
        this.beers = 0;
        this.wines = 0;
        this.shots = 0;
        this.cocktails = 0;
        this.drinks = 0;
        this.hours = 0;
    }
    //function to calcualate BAC on tab 3 using known values from research
    bac() {
        this.drinks = this.shots + this.beers + this.wines + (this.cocktails * 1.5);
        if (this.saveGender = "m") {
            if (this.weight <= 100) {
                this.weightDrink = 0.038;
            }
            if (this.weight > 100 && this.weight < 110) {
                this.weightDrink = 0.038;
            }
            if (this.weight >= 110 && this.weight < 120) {
                this.weightDrink = 0.034;
            }
            if (this.weight >= 120 && this.weight < 130) {
                this.weightDrink = 0.031;
            }
            if (this.weight >= 130 && this.weight < 140) {
                this.weightDrink = 0.029;
            }
            if (this.weight >= 140 && this.weight < 150) {
                this.weightDrink = 0.027;
            }
            if (this.weight >= 150 && this.weight < 160) {
                this.weightDrink = 0.025;
            }
            if (this.weight >= 160 && this.weight < 170) {
                this.weightDrink = 0.023;
            }
            if (this.weight >= 170 && this.weight < 180) {
                this.weightDrink = 0.022;
            }
            if (this.weight >= 180 && this.weight < 190) {
                this.weightDrink = 0.021;
            }
            if (this.weight >= 190 && this.weight < 200) {
                this.weightDrink = 0.020;
            }
            if (this.weight >= 200 && this.weight < 210) {
                this.weightDrink = 0.019;
            }
            if (this.weight >= 210 && this.weight < 220) {
                this.weightDrink = 0.018;
            }
            if (this.weight >= 220 && this.weight < 230) {
                this.weightDrink = 0.017;
            }
            if (this.weight >= 230 && this.weight < 240) {
                this.weightDrink = 0.016;
            }
            if (this.weight > 240) {
                this.weightDrink = 0.015;
            }
        }
        if (this.saveGender = "f") {
            if (this.weight <= 100) {
                this.weightDrink = 0.047;
            }
            if (this.weight > 100 && this.weight < 110) {
                this.weightDrink = 0.047;
            }
            if (this.weight >= 110 && this.weight < 120) {
                this.weightDrink = 0.042;
            }
            if (this.weight >= 120 && this.weight < 130) {
                this.weightDrink = 0.039;
            }
            if (this.weight >= 130 && this.weight < 140) {
                this.weightDrink = 0.036;
            }
            if (this.weight >= 140 && this.weight < 150) {
                this.weightDrink = 0.033;
            }
            if (this.weight >= 150 && this.weight < 160) {
                this.weightDrink = 0.031;
            }
            if (this.weight >= 160 && this.weight < 170) {
                this.weightDrink = 0.029;
            }
            if (this.weight >= 170 && this.weight < 180) {
                this.weightDrink = 0.027;
            }
            if (this.weight >= 180 && this.weight < 190) {
                this.weightDrink = 0.026;
            }
            if (this.weight >= 190 && this.weight < 200) {
                this.weightDrink = 0.024;
            }
            if (this.weight >= 200 && this.weight < 210) {
                this.weightDrink = 0.023;
            }
            if (this.weight >= 210 && this.weight < 220) {
                this.weightDrink = 0.022;
            }
            if (this.weight >= 220 && this.weight < 230) {
                this.weightDrink = 0.021;
            }
            if (this.weight >= 230 && this.weight < 240) {
                this.weightDrink = 0.020;
            }
            if (this.weight >= 240 && this.weight < 250) {
                this.weightDrink = 0.019;
            }
            if (this.weight > 250) {
                this.weightDrink = 0.018;
            }
        }
        //round to 2 decimals
        this.bacPercent = this.weightDrink * this.drinks;
        this.timeDecrease = 0.015 * this.hours;
        if (this.bacPercent >= 0.015) {
            this.bacPercent -= this.timeDecrease;
            //returns the description of the effects on the body
            if (this.bacPercent < 0.02) {
                this.result = "You should feel no difference at this level.";
            }
            if (this.bacPercent >= 0.02 && this.bacPercent < 0.04) {
                this.result = "You should have no loss of coordination, slight euphoria, and loss of shyness. Relaxation, but depressant effects are not apparent.";
            }
            if (this.bacPercent >= 0.04 && this.bacPercent < 0.06) {
                this.result = "Feeling of well-being, relaxation, lower inhibitions, and sensation of warmth. Euphoria. Some minor impairment of judgment and memory, lowering of caution.";
            }
            if (this.bacPercent >= 0.06 && this.bacPercent < 0.1) {
                this.result = "Slight impairment of balance, speech, vision, reaction time, and hearing. Euphoria. Reduced judgment and self-control. Impaired reasoning and memory.";
            }
            if (this.bacPercent >= 0.1 && this.bacPercent < 0.13) {
                this.result = "Significant impairment of motor coordination and loss of good judgment. Speech may be slurred; balance, peripheral vision, reaction time, and hearing will be impaired.";
            }
            if (this.bacPercent >= 0.13 && this.bacPercent < 0.16) {
                this.result = "Gross motor impairment and lack of physical control. Blurred vision and major loss of balance. Euphoria is reducing and beginning dysphoria (a state of feeling unwell)";
            }
            if (this.bacPercent >= 0.16 && this.bacPercent < 0.20) {
                this.result = "Dysphoria predominates, nausea may appear. The drinker has the appearance of a sloppy drunk.";
            }
            if (this.bacPercent >= 0.20 && this.bacPercent < 0.25) {
                this.result = "Needs assistance in walking; total mental confusion. Dysphoria with nausea and vomiting; possible blackout.";
            }
            if (this.bacPercent >= 0.25 && this.bacPercent < 0.4) {
                this.result = "Alcohol poisoning. Loss of consciousness.";
            }
        }
        else {
            this.result = "	Onset of coma, possible death due to respiratory arrest.";
        }
    }
    //corrects a small issue with gender changing when it's not supposed to
    save() {
        this.saveGender = this.selectedGender;
    }
};
BacCalcService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
BacCalcService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BacCalcService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map