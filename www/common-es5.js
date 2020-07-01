function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    var attachComponent = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);

                if (!el.componentOnReady) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return el.componentOnReady();

              case 11:
                return _context.abrupt("return", el);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-da73c8fd.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-da73c8fd.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, d, h */

  /***/
  function node_modulesIonicCoreDistEsmHapticDa73c8fdJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticImpact;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return hapticSelectionEnd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelection;
    });

    var HapticEngine = {
      getEngine: function getEngine() {
        var win = window;
        return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
      },
      available: function available() {
        return !!this.getEngine();
      },
      isCordova: function isCordova() {
        return !!window.TapticEngine;
      },
      isCapacitor: function isCapacitor() {
        var win = window;
        return !!win.Capacitor;
      },
      impact: function impact(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({
          style: style
        });
      },
      notification: function notification(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({
          style: style
        });
      },
      selection: function selection() {
        this.impact({
          style: 'light'
        });
      },
      selectionStart: function selectionStart() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionStart();
        } else {
          engine.gestureSelectionStart();
        }
      },
      selectionChanged: function selectionChanged() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionChanged();
        } else {
          engine.gestureSelectionChanged();
        }
      },
      selectionEnd: function selectionEnd() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionChanged();
        } else {
          engine.gestureSelectionChanged();
        }
      }
    };
    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */

    var hapticSelection = function hapticSelection() {
      HapticEngine.selection();
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      HapticEngine.selectionStart();
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      HapticEngine.selectionChanged();
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      HapticEngine.selectionEnd();
    };
    /**
     * Use this to indicate success/failure/warning to the user.
     * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
     */


    var hapticImpact = function hapticImpact(options) {
      HapticEngine.impact(options);
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
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
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmThemeC2dc54d9Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color) {
      return typeof color === 'string' && color.length > 0 ? _defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true) : undefined;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction) {
        var router;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.abrupt("return", router.push(url, direction));

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function openURL(_x6, _x7, _x8) {
        return _ref3.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./src/app/services/bac-calc.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/bac-calc.service.ts ***!
    \**********************************************/

  /*! exports provided: BacCalcService */

  /***/
  function srcAppServicesBacCalcServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BacCalcService", function () {
      return BacCalcService;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BacCalcService = /*#__PURE__*/function () {
      function BacCalcService(navController, router) {
        _classCallCheck(this, BacCalcService);

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

      _createClass(BacCalcService, [{
        key: "addBeer",
        value: function addBeer() {
          this.beers += 1;
        }
      }, {
        key: "addWine",
        value: function addWine() {
          this.wines += 1;
        }
      }, {
        key: "addShot",
        value: function addShot() {
          this.shots += 1;
        }
      }, {
        key: "addCocktail",
        value: function addCocktail() {
          this.cocktails += 1;
        }
      }, {
        key: "addhour",
        value: function addhour() {
          this.hours += 1;
        }
      }, {
        key: "reset",
        value: function reset() {
          this.beers = 0;
          this.wines = 0;
          this.shots = 0;
          this.cocktails = 0;
          this.drinks = 0;
          this.hours = 0;
        }
      }, {
        key: "bac",
        value: function bac() {
          this.drinks = this.shots + this.beers + this.wines + this.cocktails * 1.5;

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

          this.bacPercent = this.weightDrink * this.drinks;
          this.timeDecrease = 0.015 * this.hours;

          if (this.bacPercent >= 0.015) {
            this.bacPercent -= this.timeDecrease; //round to 2 decimals

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
          } else {
            this.result = "	Onset of coma, possible death due to respiratory arrest.";
          }
        }
      }, {
        key: "save",
        value: function save() {
          this.saveGender = this.selectedGender;
        }
      }]);

      return BacCalcService;
    }();

    BacCalcService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    BacCalcService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BacCalcService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map