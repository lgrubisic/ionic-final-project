function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"], {
  /***/
  "../../../node_modules/@ionic-native/core/bootstrap.js":
  /*!************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/@ionic-native/core/bootstrap.js ***!
    \************************************************************************/

  /*! exports provided: checkReady */

  /***/
  function node_modulesIonicNativeCoreBootstrapJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "checkReady", function () {
      return checkReady;
    });

    function checkReady() {
      if (typeof process === 'undefined') {
        var win_1 = typeof window !== 'undefined' ? window : {};
        var DEVICE_READY_TIMEOUT_1 = 5000; // To help developers using cordova, we listen for the device ready event and
        // log an error if it didn't fire in a reasonable amount of time. Generally,
        // when this happens, developers should remove and reinstall plugins, since
        // an inconsistent plugin is often the culprit.

        var before_1 = Date.now();
        var didFireReady_1 = false;
        win_1.document.addEventListener('deviceready', function () {
          console.log("Ionic Native: deviceready event fired after " + (Date.now() - before_1) + " ms");
          didFireReady_1 = true;
        });
        setTimeout(function () {
          if (!didFireReady_1 && win_1.cordova) {
            console.warn("Ionic Native: deviceready did not fire within " + DEVICE_READY_TIMEOUT_1 + "ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.");
          }
        }, DEVICE_READY_TIMEOUT_1);
      }
    } //# sourceMappingURL=bootstrap.js.map

    /***/

  },

  /***/
  "../../../node_modules/@ionic-native/core/decorators/common.js":
  /*!********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/@ionic-native/core/decorators/common.js ***!
    \********************************************************************************/

  /*! exports provided: ERR_CORDOVA_NOT_AVAILABLE, ERR_PLUGIN_NOT_INSTALLED, getPromise, wrapPromise, checkAvailability, instanceAvailability, setIndex, callCordovaPlugin, callInstance, getPlugin, get, pluginWarn, cordovaWarn, wrap, wrapInstance */

  /***/
  function node_modulesIonicNativeCoreDecoratorsCommonJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ERR_CORDOVA_NOT_AVAILABLE", function () {
      return ERR_CORDOVA_NOT_AVAILABLE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ERR_PLUGIN_NOT_INSTALLED", function () {
      return ERR_PLUGIN_NOT_INSTALLED;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getPromise", function () {
      return getPromise;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "wrapPromise", function () {
      return wrapPromise;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "checkAvailability", function () {
      return checkAvailability;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "instanceAvailability", function () {
      return instanceAvailability;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setIndex", function () {
      return setIndex;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "callCordovaPlugin", function () {
      return callCordovaPlugin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "callInstance", function () {
      return callInstance;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getPlugin", function () {
      return getPlugin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "get", function () {
      return get;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pluginWarn", function () {
      return pluginWarn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cordovaWarn", function () {
      return cordovaWarn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "wrap", function () {
      return wrap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "wrapInstance", function () {
      return wrapInstance;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "../../../node_modules/rxjs/_esm2015/index.js");

    var ERR_CORDOVA_NOT_AVAILABLE = {
      error: 'cordova_not_available'
    };
    var ERR_PLUGIN_NOT_INSTALLED = {
      error: 'plugin_not_installed'
    };

    function getPromise(callback) {
      var tryNativePromise = function tryNativePromise() {
        if (Promise) {
          return new Promise(function (resolve, reject) {
            callback(resolve, reject);
          });
        } else {
          console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
        }
      };

      if (typeof window !== 'undefined' && window.angular) {
        var doc = window.document;
        var injector = window.angular.element(doc.querySelector('[ng-app]') || doc.body).injector();

        if (injector) {
          var $q = injector.get('$q');
          return $q(function (resolve, reject) {
            callback(resolve, reject);
          });
        }

        console.warn("Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.");
      }

      return tryNativePromise();
    }

    function wrapPromise(pluginObj, methodName, args, opts) {
      if (opts === void 0) {
        opts = {};
      }

      var pluginResult, rej;
      var p = getPromise(function (resolve, reject) {
        if (opts.destruct) {
          pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return resolve(args);
          }, function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return reject(args);
          });
        } else {
          pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject);
        }

        rej = reject;
      }); // Angular throws an error on unhandled rejection, but in this case we have already printed
      // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
      // to error

      if (pluginResult && pluginResult.error) {
        p["catch"](function () {});
        typeof rej === 'function' && rej(pluginResult.error);
      }

      return p;
    }

    function wrapOtherPromise(pluginObj, methodName, args, opts) {
      if (opts === void 0) {
        opts = {};
      }

      return getPromise(function (resolve, reject) {
        var pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts);

        if (pluginResult) {
          if (pluginResult.error) {
            reject(pluginResult.error);
          } else if (pluginResult.then) {
            pluginResult.then(resolve)["catch"](reject);
          }
        } else {
          reject({
            error: 'unexpected_error'
          });
        }
      });
    }

    function wrapObservable(pluginObj, methodName, args, opts) {
      if (opts === void 0) {
        opts = {};
      }

      return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
        var pluginResult;

        if (opts.destruct) {
          pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return observer.next(args);
          }, function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return observer.error(args);
          });
        } else {
          pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
        }

        if (pluginResult && pluginResult.error) {
          observer.error(pluginResult.error);
          observer.complete();
        }

        return function () {
          try {
            if (opts.clearFunction) {
              if (opts.clearWithArgs) {
                return callCordovaPlugin(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
              }

              return callCordovaPlugin(pluginObj, opts.clearFunction, []);
            }
          } catch (e) {
            console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
            console.warn(e);
          }
        };
      });
    }
    /**
     * Wrap the event with an observable
     * @private
     * @param event event name
     * @param element The element to attach the event listener to
     * @returns {Observable}
     */


    function wrapEventObservable(event, element) {
      element = typeof window !== 'undefined' && element ? get(window, element) : element || (typeof window !== 'undefined' ? window : {});
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(element, event);
    }

    function checkAvailability(plugin, methodName, pluginName) {
      var pluginRef, pluginInstance, pluginPackage;

      if (typeof plugin === 'string') {
        pluginRef = plugin;
      } else {
        pluginRef = plugin.constructor.getPluginRef();
        pluginName = plugin.constructor.getPluginName();
        pluginPackage = plugin.constructor.getPluginInstallName();
      }

      pluginInstance = getPlugin(pluginRef);

      if (!pluginInstance || !!methodName && typeof pluginInstance[methodName] === 'undefined') {
        if (typeof window === 'undefined' || !window.cordova) {
          cordovaWarn(pluginName, methodName);
          return ERR_CORDOVA_NOT_AVAILABLE;
        }

        pluginWarn(pluginName, pluginPackage, methodName);
        return ERR_PLUGIN_NOT_INSTALLED;
      }

      return true;
    }
    /**
     * Checks if _objectInstance exists and has the method/property
     * @private
     */


    function instanceAvailability(pluginObj, methodName) {
      return pluginObj._objectInstance && (!methodName || typeof pluginObj._objectInstance[methodName] !== 'undefined');
    }

    function setIndex(args, opts, resolve, reject) {
      if (opts === void 0) {
        opts = {};
      } // ignore resolve and reject in case sync


      if (opts.sync) {
        return args;
      } // If the plugin method expects myMethod(success, err, options)


      if (opts.callbackOrder === 'reverse') {
        // Get those arguments in the order [resolve, reject, ...restOfArgs]
        args.unshift(reject);
        args.unshift(resolve);
      } else if (opts.callbackStyle === 'node') {
        args.push(function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      } else if (opts.callbackStyle === 'object' && opts.successName && opts.errorName) {
        var obj = {};
        obj[opts.successName] = resolve;
        obj[opts.errorName] = reject;
        args.push(obj);
      } else if (typeof opts.successIndex !== 'undefined' || typeof opts.errorIndex !== 'undefined') {
        var setSuccessIndex = function setSuccessIndex() {
          // If we've specified a success/error index
          if (opts.successIndex > args.length) {
            args[opts.successIndex] = resolve;
          } else {
            args.splice(opts.successIndex, 0, resolve);
          }
        };

        var setErrorIndex = function setErrorIndex() {
          // We don't want that the reject cb gets spliced into the position of an optional argument that has not been
          // defined and thus causing non expected behavior.
          if (opts.errorIndex > args.length) {
            args[opts.errorIndex] = reject; // insert the reject fn at the correct specific index
          } else {
            args.splice(opts.errorIndex, 0, reject); // otherwise just splice it into the array
          }
        };

        if (opts.successIndex > opts.errorIndex) {
          setErrorIndex();
          setSuccessIndex();
        } else {
          setSuccessIndex();
          setErrorIndex();
        }
      } else {
        // Otherwise, let's tack them on to the end of the argument list
        // which is 90% of cases
        args.push(resolve);
        args.push(reject);
      }

      return args;
    }

    function callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject) {
      if (opts === void 0) {
        opts = {};
      } // Try to figure out where the success/error callbacks need to be bound
      // to our promise resolve/reject handlers.


      args = setIndex(args, opts, resolve, reject);
      var availabilityCheck = checkAvailability(pluginObj, methodName);

      if (availabilityCheck === true) {
        var pluginInstance = getPlugin(pluginObj.constructor.getPluginRef());
        return pluginInstance[methodName].apply(pluginInstance, args);
      } else {
        return availabilityCheck;
      }
    }

    function callInstance(pluginObj, methodName, args, opts, resolve, reject) {
      if (opts === void 0) {
        opts = {};
      }

      args = setIndex(args, opts, resolve, reject);

      if (instanceAvailability(pluginObj, methodName)) {
        return pluginObj._objectInstance[methodName].apply(pluginObj._objectInstance, args);
      }
    }

    function getPlugin(pluginRef) {
      if (typeof window !== 'undefined') {
        return get(window, pluginRef);
      }

      return null;
    }

    function get(element, path) {
      var paths = path.split('.');
      var obj = element;

      for (var i = 0; i < paths.length; i++) {
        if (!obj) {
          return null;
        }

        obj = obj[paths[i]];
      }

      return obj;
    }

    function pluginWarn(pluginName, plugin, method) {
      if (method) {
        console.warn('Native: tried calling ' + pluginName + '.' + method + ', but the ' + pluginName + ' plugin is not installed.');
      } else {
        console.warn("Native: tried accessing the " + pluginName + " plugin but it's not installed.");
      }

      if (plugin) {
        console.warn("Install the " + pluginName + " plugin: 'ionic cordova plugin add " + plugin + "'");
      }
    }
    /**
     * @private
     * @param pluginName
     * @param method
     */


    function cordovaWarn(pluginName, method) {
      if (typeof process === 'undefined') {
        if (method) {
          console.warn('Native: tried calling ' + pluginName + '.' + method + ', but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
        } else {
          console.warn('Native: tried accessing the ' + pluginName + ' plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
        }
      }
    }
    /**
     * @private
     */


    var wrap = function wrap(pluginObj, methodName, opts) {
      if (opts === void 0) {
        opts = {};
      }

      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        if (opts.sync) {
          // Sync doesn't wrap the plugin with a promise or observable, it returns the result as-is
          return callCordovaPlugin(pluginObj, methodName, args, opts);
        } else if (opts.observable) {
          return wrapObservable(pluginObj, methodName, args, opts);
        } else if (opts.eventObservable && opts.event) {
          return wrapEventObservable(opts.event, opts.element);
        } else if (opts.otherPromise) {
          return wrapOtherPromise(pluginObj, methodName, args, opts);
        } else {
          return wrapPromise(pluginObj, methodName, args, opts);
        }
      };
    };
    /**
     * @private
     */


    function wrapInstance(pluginObj, methodName, opts) {
      if (opts === void 0) {
        opts = {};
      }

      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        if (opts.sync) {
          return callInstance(pluginObj, methodName, args, opts);
        } else if (opts.observable) {
          return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            var pluginResult;

            if (opts.destruct) {
              pluginResult = callInstance(pluginObj, methodName, args, opts, function () {
                var args = [];

                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
                }

                return observer.next(args);
              }, function () {
                var args = [];

                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
                }

                return observer.error(args);
              });
            } else {
              pluginResult = callInstance(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
            }

            if (pluginResult && pluginResult.error) {
              observer.error(pluginResult.error);
            }

            return function () {
              try {
                if (opts.clearWithArgs) {
                  return callInstance(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                }

                return callInstance(pluginObj, opts.clearFunction, []);
              } catch (e) {
                console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
                console.warn(e);
              }
            };
          });
        } else if (opts.otherPromise) {
          return getPromise(function (resolve, reject) {
            var result;

            if (opts.destruct) {
              result = callInstance(pluginObj, methodName, args, opts, function () {
                var args = [];

                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
                }

                return resolve(args);
              }, function () {
                var args = [];

                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
                }

                return reject(args);
              });
            } else {
              result = callInstance(pluginObj, methodName, args, opts, resolve, reject);
            }

            if (result && result.then) {
              result.then(resolve, reject);
            } else {
              reject();
            }
          });
        } else {
          var pluginResult_1, rej_1;
          var p = getPromise(function (resolve, reject) {
            if (opts.destruct) {
              pluginResult_1 = callInstance(pluginObj, methodName, args, opts, function () {
                var args = [];

                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
                }

                return resolve(args);
              }, function () {
                var args = [];

                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
                }

                return reject(args);
              });
            } else {
              pluginResult_1 = callInstance(pluginObj, methodName, args, opts, resolve, reject);
            }

            rej_1 = reject;
          }); // Angular throws an error on unhandled rejection, but in this case we have already printed
          // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
          // to error

          if (pluginResult_1 && pluginResult_1.error) {
            p["catch"](function () {});
            typeof rej_1 === 'function' && rej_1(pluginResult_1.error);
          }

          return p;
        }
      };
    } //# sourceMappingURL=common.js.map

    /***/

  },

  /***/
  "../../../node_modules/@ionic-native/core/decorators/cordova-function-override.js":
  /*!***************************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/@ionic-native/core/decorators/cordova-function-override.js ***!
    \***************************************************************************************************/

  /*! exports provided: cordovaFunctionOverride */

  /***/
  function node_modulesIonicNativeCoreDecoratorsCordovaFunctionOverrideJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cordovaFunctionOverride", function () {
      return cordovaFunctionOverride;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "../../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./common */
    "../../../node_modules/@ionic-native/core/decorators/common.js");

    function overrideFunction(pluginObj, methodName) {
      return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
        var availabilityCheck = Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkAvailability"])(pluginObj, methodName);

        if (availabilityCheck === true) {
          var pluginInstance_1 = Object(_common__WEBPACK_IMPORTED_MODULE_1__["getPlugin"])(pluginObj.constructor.getPluginRef());
          pluginInstance_1[methodName] = observer.next.bind(observer);
          return function () {
            return pluginInstance_1[methodName] = function () {};
          };
        } else {
          observer.error(availabilityCheck);
          observer.complete();
        }
      });
    }

    function cordovaFunctionOverride(pluginObj, methodName, args) {
      if (args === void 0) {
        args = [];
      }

      return overrideFunction(pluginObj, methodName);
    } //# sourceMappingURL=cordova-function-override.js.map

    /***/

  },

  /***/
  "../../../node_modules/@ionic-native/core/decorators/cordova-instance.js":
  /*!******************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/@ionic-native/core/decorators/cordova-instance.js ***!
    \******************************************************************************************/

  /*! exports provided: cordovaInstance */

  /***/
  function node_modulesIonicNativeCoreDecoratorsCordovaInstanceJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cordovaInstance", function () {
      return cordovaInstance;
    });
    /* harmony import */


    var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./common */
    "../../../node_modules/@ionic-native/core/decorators/common.js");

    function cordovaInstance(pluginObj, methodName, config, args) {
      args = Array.from(args);
      return Object(_common__WEBPACK_IMPORTED_MODULE_0__["wrapInstance"])(pluginObj, methodName, config).apply(this, args);
    } //# sourceMappingURL=cordova-instance.js.map

    /***/

  },

  /***/
  "../../../node_modules/@ionic-native/core/decorators/cordova-property.js":
  /*!******************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/@ionic-native/core/decorators/cordova-property.js ***!
    \******************************************************************************************/

  /*! exports provided: cordovaPropertyGet, cordovaPropertySet */

  /***/
  function node_modulesIonicNativeCoreDecoratorsCordovaPropertyJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cordovaPropertyGet", function () {
      return cordovaPropertyGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cordovaPropertySet", function () {
      return cordovaPropertySet;
    });
    /* harmony import */


    var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./common */
    "../../../node_modules/@ionic-native/core/decorators/common.js");

    function cordovaPropertyGet(pluginObj, key) {
      if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(pluginObj, key) === true) {
        return Object(_common__WEBPACK_IMPORTED_MODULE_0__["getPlugin"])(pluginObj.constructor.getPluginRef())[key];
      }

      return null;
    }

    function cordovaPropertySet(pluginObj, key, value) {
      if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(pluginObj, key) === true) {
        Object(_common__WEBPACK_IMPORTED_MODULE_0__["getPlugin"])(pluginObj.constructor.getPluginRef())[key] = value;
      }
    } //# sourceMappingURL=cordova-property.js.map

    /***/

  },

  /***/
  "../../../node_modules/@ionic-native/core/decorators/cordova.js":
  /*!*********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/@ionic-native/core/decorators/cordova.js ***!
    \*********************************************************************************/

  /*! exports provided: cordova */

  /***/
  function node_modulesIonicNativeCoreDecoratorsCordovaJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cordova", function () {
      return cordova;
    });
    /* harmony import */


    var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./common */
    "../../../node_modules/@ionic-native/core/decorators/common.js");

    function cordova(pluginObj, methodName, config, args) {
      return Object(_common__WEBPACK_IMPORTED_MODULE_0__["wrap"])(pluginObj, methodName, config).apply(this, args);
    } //# sourceMappingURL=cordova.js.map

    /***/

  },

  /***/
  "../../../node_modules/@ionic-native/core/decorators/instance-property.js":
  /*!*******************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/@ionic-native/core/decorators/instance-property.js ***!
    \*******************************************************************************************/

  /*! exports provided: instancePropertyGet, instancePropertySet */

  /***/
  function node_modulesIonicNativeCoreDecoratorsInstancePropertyJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "instancePropertyGet", function () {
      return instancePropertyGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "instancePropertySet", function () {
      return instancePropertySet;
    });

    function instancePropertyGet(pluginObj, key) {
      if (pluginObj._objectInstance && pluginObj._objectInstance[key]) {
        return pluginObj._objectInstance[key];
      }

      return null;
    }

    function instancePropertySet(pluginObj, key, value) {
      if (pluginObj._objectInstance) {
        pluginObj._objectInstance[key] = value;
      }
    } //# sourceMappingURL=instance-property.js.map

    /***/

  },

  /***/
  "../../../node_modules/@ionic-native/core/decorators/interfaces.js":
  /*!************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/@ionic-native/core/decorators/interfaces.js ***!
    \************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicNativeCoreDecoratorsInterfacesJs(module, exports) {//# sourceMappingURL=interfaces.js.map

    /***/
  },

  /***/
  "../../../node_modules/@ionic-native/core/index.js":
  /*!********************************************************************!*\
    !*** /Users/leongrubisic/node_modules/@ionic-native/core/index.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicNativeCoreIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./bootstrap */
    "../../../node_modules/@ionic-native/core/bootstrap.js");
    /* harmony import */


    var _ionic_native_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ionic-native-plugin */
    "../../../node_modules/@ionic-native/core/ionic-native-plugin.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IonicNativePlugin", function () {
      return _ionic_native_plugin__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"];
    });
    /* harmony import */


    var _decorators_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./decorators/common */
    "../../../node_modules/@ionic-native/core/decorators/common.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "checkAvailability", function () {
      return _decorators_common__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "instanceAvailability", function () {
      return _decorators_common__WEBPACK_IMPORTED_MODULE_2__["instanceAvailability"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "wrap", function () {
      return _decorators_common__WEBPACK_IMPORTED_MODULE_2__["wrap"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getPromise", function () {
      return _decorators_common__WEBPACK_IMPORTED_MODULE_2__["getPromise"];
    });
    /* harmony import */


    var _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./decorators/cordova */
    "../../../node_modules/@ionic-native/core/decorators/cordova.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "cordova", function () {
      return _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__["cordova"];
    });
    /* harmony import */


    var _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./decorators/cordova-function-override */
    "../../../node_modules/@ionic-native/core/decorators/cordova-function-override.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "cordovaFunctionOverride", function () {
      return _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__["cordovaFunctionOverride"];
    });
    /* harmony import */


    var _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./decorators/cordova-instance */
    "../../../node_modules/@ionic-native/core/decorators/cordova-instance.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "cordovaInstance", function () {
      return _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__["cordovaInstance"];
    });
    /* harmony import */


    var _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./decorators/cordova-property */
    "../../../node_modules/@ionic-native/core/decorators/cordova-property.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "cordovaPropertyGet", function () {
      return _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__["cordovaPropertyGet"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "cordovaPropertySet", function () {
      return _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__["cordovaPropertySet"];
    });
    /* harmony import */


    var _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./decorators/instance-property */
    "../../../node_modules/@ionic-native/core/decorators/instance-property.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "instancePropertyGet", function () {
      return _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__["instancePropertyGet"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "instancePropertySet", function () {
      return _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__["instancePropertySet"];
    });
    /* harmony import */


    var _decorators_interfaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./decorators/interfaces */
    "../../../node_modules/@ionic-native/core/decorators/interfaces.js");
    /* harmony import */


    var _decorators_interfaces__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_decorators_interfaces__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _decorators_interfaces__WEBPACK_IMPORTED_MODULE_8__) {
      if (["IonicNativePlugin", "checkAvailability", "instanceAvailability", "wrap", "getPromise", "cordova", "cordovaFunctionOverride", "cordovaInstance", "cordovaPropertyGet", "cordovaPropertySet", "instancePropertyGet", "instancePropertySet", "default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _decorators_interfaces__WEBPACK_IMPORTED_MODULE_8__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    } // Decorators


    Object(_bootstrap__WEBPACK_IMPORTED_MODULE_0__["checkReady"])(); //# sourceMappingURL=index.js.map

    /***/
  },

  /***/
  "../../../node_modules/@ionic-native/core/ionic-native-plugin.js":
  /*!**********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/@ionic-native/core/ionic-native-plugin.js ***!
    \**********************************************************************************/

  /*! exports provided: IonicNativePlugin */

  /***/
  function node_modulesIonicNativeCoreIonicNativePluginJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IonicNativePlugin", function () {
      return IonicNativePlugin;
    });
    /* harmony import */


    var _decorators_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./decorators/common */
    "../../../node_modules/@ionic-native/core/decorators/common.js");
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./util */
    "../../../node_modules/@ionic-native/core/util.js");

    var IonicNativePlugin =
    /** @class */
    function () {
      function IonicNativePlugin() {}
      /**
       * Returns a boolean that indicates whether the plugin is installed
       * @return {boolean}
       */


      IonicNativePlugin.installed = function () {
        var isAvailable = Object(_decorators_common__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(this.pluginRef) === true;
        return isAvailable;
      };
      /**
       * Returns the original plugin object
       */


      IonicNativePlugin.getPlugin = function () {
        if (typeof window !== 'undefined') {
          return Object(_util__WEBPACK_IMPORTED_MODULE_1__["get"])(window, this.pluginRef);
        }

        return null;
      };
      /**
       * Returns the plugin's name
       */


      IonicNativePlugin.getPluginName = function () {
        var pluginName = this.pluginName;
        return pluginName;
      };
      /**
       * Returns the plugin's reference
       */


      IonicNativePlugin.getPluginRef = function () {
        var pluginRef = this.pluginRef;
        return pluginRef;
      };
      /**
       * Returns the plugin's install name
       */


      IonicNativePlugin.getPluginInstallName = function () {
        var plugin = this.plugin;
        return plugin;
      };
      /**
       * Returns the plugin's supported platforms
       */


      IonicNativePlugin.getSupportedPlatforms = function () {
        var platform = this.platforms;
        return platform;
      };

      IonicNativePlugin.pluginName = '';
      IonicNativePlugin.pluginRef = '';
      IonicNativePlugin.plugin = '';
      IonicNativePlugin.repo = '';
      IonicNativePlugin.platforms = [];
      IonicNativePlugin.install = '';
      return IonicNativePlugin;
    }(); //# sourceMappingURL=ionic-native-plugin.js.map

    /***/

  },

  /***/
  "../../../node_modules/@ionic-native/core/util.js":
  /*!*******************************************************************!*\
    !*** /Users/leongrubisic/node_modules/@ionic-native/core/util.js ***!
    \*******************************************************************/

  /*! exports provided: get, getPromise */

  /***/
  function node_modulesIonicNativeCoreUtilJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "get", function () {
      return get;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getPromise", function () {
      return getPromise;
    });
    /**
     * @private
     */


    function get(element, path) {
      var paths = path.split('.');
      var obj = element;

      for (var i = 0; i < paths.length; i++) {
        if (!obj) {
          return null;
        }

        obj = obj[paths[i]];
      }

      return obj;
    }
    /**
     * @private
     */


    function getPromise(callback) {
      if (callback === void 0) {
        callback = function callback() {};
      }

      var tryNativePromise = function tryNativePromise() {
        if (typeof Promise === 'function' || typeof window !== 'undefined' && window.Promise) {
          return new Promise(function (resolve, reject) {
            callback(resolve, reject);
          });
        } else {
          console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
        }
      };

      return tryNativePromise();
    } //# sourceMappingURL=util.js.map

    /***/

  },

  /***/
  "../../../node_modules/@ionic-native/google-maps/index.js":
  /*!***************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/@ionic-native/google-maps/index.js ***!
    \***************************************************************************/

  /*! exports provided: LatLng, LatLngBounds, VisibleRegion, StreetViewSource, GoogleMapsEvent, GoogleMapsAnimation, GoogleMapsMapTypeId, GoogleMaps, BaseClass, BaseArrayClass, Circle, Environment, Geocoder, LocationService, Encoding, Poly, Spherical, StreetViewPanorama, GoogleMap, GroundOverlay, HtmlInfoWindow, Marker, MarkerCluster, Polygon, Polyline, TileOverlay, KmlOverlay */

  /***/
  function node_modulesIonicNativeGoogleMapsIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LatLng", function () {
      return LatLng;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LatLngBounds", function () {
      return LatLngBounds;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisibleRegion", function () {
      return VisibleRegion;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StreetViewSource", function () {
      return StreetViewSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleMapsEvent", function () {
      return GoogleMapsEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleMapsAnimation", function () {
      return GoogleMapsAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleMapsMapTypeId", function () {
      return GoogleMapsMapTypeId;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleMaps", function () {
      return GoogleMaps;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseClass", function () {
      return BaseClass;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseArrayClass", function () {
      return BaseArrayClass;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Circle", function () {
      return Circle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Environment", function () {
      return Environment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Geocoder", function () {
      return Geocoder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationService", function () {
      return LocationService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Encoding", function () {
      return Encoding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Poly", function () {
      return Poly;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Spherical", function () {
      return Spherical;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StreetViewPanorama", function () {
      return StreetViewPanorama;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleMap", function () {
      return GoogleMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroundOverlay", function () {
      return GroundOverlay;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HtmlInfoWindow", function () {
      return HtmlInfoWindow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Marker", function () {
      return Marker;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkerCluster", function () {
      return MarkerCluster;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Polygon", function () {
      return Polygon;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Polyline", function () {
      return Polyline;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TileOverlay", function () {
      return TileOverlay;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KmlOverlay", function () {
      return KmlOverlay;
    });
    /* harmony import */


    var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ionic-native/core */
    "../../../node_modules/@ionic-native/core/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "../../../node_modules/rxjs/_esm2015/index.js");

    var __extends = undefined && undefined.__extends || function () {
      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      return function (d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var _this = undefined;
    var TARGET_ELEMENT_FINDING_QUERYS = ['.show-page #', 'ion-router-outlet[main] #', '#'];

    var LatLng =
    /** @class */
    function () {
      function LatLng(lat, lng) {
        this.lat = lat;
        this.lng = lng;
      }

      LatLng.prototype.equals = function (other) {
        return this.lat === other.lat && this.lng === other.lng;
      };

      LatLng.prototype.toString = function () {
        return this.lat + ',' + this.lng;
      };

      LatLng.prototype.toUrlValue = function (precision) {
        precision = precision || 6;
        return this.lat.toFixed(precision) + ',' + this.lng.toFixed(precision);
      };

      return LatLng;
    }();

    var LatLngBounds =
    /** @class */
    function () {
      function LatLngBounds(points) {
        this._objectInstance = new (GoogleMaps.getPlugin().LatLngBounds)(points);
      }

      LatLngBounds.prototype.toString = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "toString", {
          "sync": true
        }, arguments);
      };

      LatLngBounds.prototype.toUrlValue = function (precision) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "toUrlValue", {
          "sync": true
        }, arguments);
      };

      LatLngBounds.prototype.extend = function (LatLng) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "extend", {
          "sync": true
        }, arguments);
      };

      LatLngBounds.prototype.contains = function (LatLng) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "contains", {
          "sync": true
        }, arguments);
      };

      LatLngBounds.prototype.getCenter = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getCenter", {
          "sync": true
        }, arguments);
      };

      Object.defineProperty(LatLngBounds.prototype, "northeast", {
        get: function get() {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "northeast");
        },
        set: function set(value) {
          Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "northeast", value);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(LatLngBounds.prototype, "southwest", {
        get: function get() {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "southwest");
        },
        set: function set(value) {
          Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "southwest", value);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(LatLngBounds.prototype, "type", {
        get: function get() {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "type");
        },
        set: function set(value) {
          Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "type", value);
        },
        enumerable: true,
        configurable: true
      });
      return LatLngBounds;
    }();

    var VisibleRegion =
    /** @class */
    function () {
      function VisibleRegion(southwest, northeast, farLeft, farRight, nearLeft, nearRight) {
        this._objectInstance = new (GoogleMaps.getPlugin().VisibleRegion)(southwest, northeast, farLeft, farRight, nearLeft, nearRight);
      }

      VisibleRegion.prototype.toString = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "toString", {
          "sync": true
        }, arguments);
      };

      VisibleRegion.prototype.toUrlValue = function (precision) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "toUrlValue", {
          "sync": true
        }, arguments);
      };

      VisibleRegion.prototype.contains = function (LatLng) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "contains", {
          "sync": true
        }, arguments);
      };

      Object.defineProperty(VisibleRegion.prototype, "northeast", {
        get: function get() {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "northeast");
        },
        set: function set(value) {
          Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "northeast", value);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(VisibleRegion.prototype, "southwest", {
        get: function get() {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "southwest");
        },
        set: function set(value) {
          Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "southwest", value);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(VisibleRegion.prototype, "farLeft", {
        get: function get() {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "farLeft");
        },
        set: function set(value) {
          Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "farLeft", value);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(VisibleRegion.prototype, "farRight", {
        get: function get() {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "farRight");
        },
        set: function set(value) {
          Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "farRight", value);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(VisibleRegion.prototype, "nearLeft", {
        get: function get() {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "nearLeft");
        },
        set: function set(value) {
          Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "nearLeft", value);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(VisibleRegion.prototype, "nearRight", {
        get: function get() {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "nearRight");
        },
        set: function set(value) {
          Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "nearRight", value);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(VisibleRegion.prototype, "type", {
        get: function get() {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertyGet"])(this, "type");
        },
        set: function set(value) {
          Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instancePropertySet"])(this, "type", value);
        },
        enumerable: true,
        configurable: true
      });
      return VisibleRegion;
    }();
    /**
     * @hidden
     */


    var StreetViewSource = {
      DEFAULT: 'DEFAULT',
      OUTDOOR: 'OUTDOOR'
    };
    /**
     * @hidden
     * You can listen to these events where appropriate
     */

    var GoogleMapsEvent = {
      MAP_READY: 'map_ready',
      MAP_CLICK: 'map_click',
      MAP_LONG_CLICK: 'map_long_click',
      POI_CLICK: 'poi_click',
      MY_LOCATION_CLICK: 'my_location_click',
      MY_LOCATION_BUTTON_CLICK: 'my_location_button_click',
      INDOOR_BUILDING_FOCUSED: 'indoor_building_focused',
      INDOOR_LEVEL_ACTIVATED: 'indoor_level_activated',
      CAMERA_MOVE_START: 'camera_move_start',
      CAMERA_MOVE: 'camera_move',
      CAMERA_MOVE_END: 'camera_move_end',
      OVERLAY_CLICK: 'overlay_click',
      POLYGON_CLICK: 'polygon_click',
      POLYLINE_CLICK: 'polyline_click',
      CIRCLE_CLICK: 'circle_click',
      GROUND_OVERLAY_CLICK: 'groundoverlay_click',
      INFO_CLICK: 'info_click',
      INFO_LONG_CLICK: 'info_long_click',
      INFO_CLOSE: 'info_close',
      INFO_OPEN: 'info_open',
      MARKER_CLICK: 'marker_click',
      MARKER_DRAG: 'marker_drag',
      MARKER_DRAG_START: 'marker_drag_start',
      MARKER_DRAG_END: 'marker_drag_end',
      MAP_DRAG: 'map_drag',
      MAP_DRAG_START: 'map_drag_start',
      MAP_DRAG_END: 'map_drag_end',
      KML_CLICK: 'kml_click',
      PANORAMA_READY: 'panorama_ready',
      PANORAMA_CAMERA_CHANGE: 'panorama_camera_change',
      PANORAMA_LOCATION_CHANGE: 'panorama_location_change',
      PANORAMA_CLICK: 'panorama_click'
    };
    /**
     * @hidden
     */

    var GoogleMapsAnimation = {
      BOUNCE: 'BOUNCE',
      DROP: 'DROP'
    };
    /**
     * @hidden
     */

    var GoogleMapsMapTypeId = {
      NORMAL: 'MAP_TYPE_NORMAL',
      ROADMAP: 'MAP_TYPE_NORMAL',
      SATELLITE: 'MAP_TYPE_SATELLITE',
      HYBRID: 'MAP_TYPE_HYBRID',
      TERRAIN: 'MAP_TYPE_TERRAIN',
      NONE: 'MAP_TYPE_NONE'
    };

    var GoogleMaps =
    /** @class */
    function (_super) {
      __extends(GoogleMaps, _super);

      function GoogleMaps() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      /**
       * Creates a new GoogleMap instance
       * @param element {string | HTMLElement} Element ID or reference to attach the map to
       * @param options {GoogleMapOptions} [options] Options
       * @return {GoogleMap}
       */


      GoogleMaps.create = function (element, options) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
          if (element instanceof HTMLElement) {
            if (!element.offsetParent) {
              throw new Error('Element must be under <body>');
            }

            if (element.getAttribute('__pluginMapId')) {
              throw new Error(element.tagName + "[__pluginMapId='" + element.getAttribute('__pluginMapId') + "'] has already map.");
            }
          } else if (typeof element === 'object') {
            options = element;
            element = null;
          }

          var googleMap = new GoogleMap(element, options);
          googleMap.set('_overlays', {});
          return googleMap;
        } else {
          var errorMessage = ['[GoogleMaps]'];

          if (!window.cordova) {
            errorMessage.push('You need to execute "$> ionic cordova run browser".');
            errorMessage.push('"$> ionic serve" is not supported.');
          } else {
            errorMessage.push('cordova-plugin-googlemaps is not installed or not ready yet.');
          }

          if (element instanceof HTMLElement) {
            displayErrorMessage(element, errorMessage.join('<br />'));
          } else if (typeof element === 'string') {
            var targets = Array.from(document.querySelectorAll('#' + element));

            if (targets.length > 0) {
              targets = targets.filter(function (target) {
                return !target.hasAttribute('__pluginmapid');
              });
            }

            if (targets.length === 1 && targets[0]) {
              displayErrorMessage(targets[0], errorMessage.join('<br />'));
            }
          }

          throw new Error(errorMessage.join(''));
        }
      };
      /**
       * @deprecation keep this for backward compatibility.
       * @hidden
       */


      GoogleMaps.prototype.create = function (element, options) {
        console.error('GoogleMaps', '[deprecated] Please use GoogleMaps.create()');
        return GoogleMaps.create(element, options);
      };
      /**
       * Creates a new StreetView instance
       * @param element {string | HTMLElement} Element ID or reference to attach the map to
       * @param options {StreetViewOptions} [options] Options
       * @return {StreetViewPanorama}
       */


      GoogleMaps.createPanorama = function (element, options) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
          if (element instanceof HTMLElement) {
            if (!element.offsetParent) {
              throw new Error('Element must be under <body>');
            }

            if (element.getAttribute('__pluginMapId')) {
              throw new Error(element.tagName + "[__pluginMapId='" + element.getAttribute('__pluginMapId') + "'] has already map.");
            }
          }

          return new StreetViewPanorama(element, options);
        } else {
          var errorMessage = ['[GoogleMaps]'];

          if (!window.cordova) {
            errorMessage.push('You need to execute "$> ionic cordova run browser".');
            errorMessage.push('"$> ionic serve" is not supported.');
          } else {
            errorMessage.push('cordova-plugin-googlemaps is not installed or not ready yet.');
          }

          if (element instanceof HTMLElement) {
            displayErrorMessage(element, errorMessage.join('<br />'));
          } else if (typeof element === 'string') {
            var targets = Array.from(document.querySelectorAll('#' + element));

            if (targets.length > 0) {
              targets = targets.filter(function (target) {
                return !target.hasAttribute('__pluginmapid');
              });
            }

            if (targets.length === 1 && targets[0]) {
              displayErrorMessage(targets[0], errorMessage.join('<br />'));
            }
          }

          throw new Error(errorMessage.join(''));
        }
      };

      GoogleMaps.pluginName = "GoogleMaps";
      GoogleMaps.pluginRef = "plugin.google.maps";
      GoogleMaps.plugin = "cordova-plugin-googlemaps";
      GoogleMaps.repo = "https://github.com/mapsplugin/cordova-plugin-googlemaps";
      GoogleMaps.document = "https://ionicframework.com/docs/native/google-maps/";
      GoogleMaps.install = "ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID=\"YOUR_ANDROID_API_KEY_IS_HERE\" --variable API_KEY_FOR_IOS=\"YOUR_IOS_API_KEY_IS_HERE\"";
      GoogleMaps.installVariables = ["API_KEY_FOR_ANDROID", "API_KEY_FOR_IOS"];
      GoogleMaps.platforms = ["Android", "iOS", "Browser"];
      return GoogleMaps;
    }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["IonicNativePlugin"]);

    var displayErrorMessage = function displayErrorMessage(element, message) {
      var errorDiv = document.createElement('div');
      errorDiv.innerHTML = message;
      errorDiv.style.color = 'red';
      errorDiv.style.position = 'absolute';
      errorDiv.style.width = '80%';
      errorDiv.style.height = '50%';
      errorDiv.style.top = '0px';
      errorDiv.style.bottom = '0px';
      errorDiv.style.right = '0px';
      errorDiv.style.left = '0px';
      errorDiv.style.padding = '0px';
      errorDiv.style.margin = 'auto';
      element.style.position = 'relative';
      element.style.backgroundColor = '#ccc7';
      element.appendChild(errorDiv);
    };

    var normalizeArgumentsOfEventListener = function normalizeArgumentsOfEventListener(_objectInstance, args) {
      if (args[args.length - 1] instanceof GoogleMaps.getPlugin().BaseClass) {
        if (args[args.length - 1].type === 'Map' || args[args.length - 1].type === 'StreetViewPanorama') {
          args[args.length - 1] = _this;
        } else if (_objectInstance.__pgmId.indexOf('markercluster_') !== -1) {
          var _overlays = _objectInstance.getMap().get('_overlays') || {};

          var overlay = _overlays[args[args.length - 1].getId()];

          if (!overlay) {
            var markerJS = args[args.length - 1];
            var markerId_1 = markerJS.getId();
            var markerCluster = _objectInstance;
            overlay = new Marker(markerCluster.getMap(), markerJS);
            _objectInstance.getMap().get('_overlays')[markerId_1] = overlay;
            markerJS.one(markerJS.getId() + '_remove', function () {
              _objectInstance.getMap().get('_overlays')[markerId_1] = null;
              delete _objectInstance.getMap().get('_overlays')[markerId_1];
            });
          }

          args[args.length - 1] = overlay;
        } else {
          args[args.length - 1] = _objectInstance.getMap().get('_overlays')[args[args.length - 1].getId()];
        }
      }

      return args;
    };

    var BaseClass =
    /** @class */
    function () {
      function BaseClass(objInstance) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
          if (!objInstance) {
            objInstance = new (GoogleMaps.getPlugin().BaseClass)();
          }

          this._objectInstance = objInstance;
        } else {
          throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before executing any methods.');
        }
      }

      BaseClass.prototype.addEventListener = function (eventName) {
        var _this = this;

        return function () {
          if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
              _this._objectInstance.addEventListener(eventName, function () {
                var args = [];

                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
                }

                var newArgs = normalizeArgumentsOfEventListener.call(_this, _this._objectInstance, args);
                observer.next(newArgs);
              });
            });
          }
        }();
      };

      BaseClass.prototype.addEventListenerOnce = function (eventName) {
        var _this = this;

        return function () {
          if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve) {
              _this._objectInstance.one(eventName, function () {
                var args = [];

                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
                }

                var newArgs = normalizeArgumentsOfEventListener.call(_this, _this._objectInstance, args);
                resolve(newArgs);
              });
            });
          }
        }();
      };

      BaseClass.prototype.addListenerOnce = function (eventName) {
        var _this = this;

        return function () {
          if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
            console.warn('[GoogleMaps] "addListenerOnce" is deprecated. Please use "addEventListenerOnce".');
            return _this.addEventListenerOnce(eventName);
          }
        }();
      };

      BaseClass.prototype.get = function (key) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "get", {
          "sync": true
        }, arguments);
      };

      BaseClass.prototype.set = function (key, value, noNotify) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "set", {
          "sync": true
        }, arguments);
      };

      BaseClass.prototype.bindTo = function (key, target, targetKey, noNotify) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "bindTo", {
          "sync": true
        }, arguments);
      };

      BaseClass.prototype.on = function (eventName) {
        var _this = this;

        return function () {
          if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
              _this._objectInstance.on(eventName, function () {
                var args = [];

                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
                }

                var newArgs = normalizeArgumentsOfEventListener.call(_this, _this._objectInstance, args);
                observer.next(newArgs);
              });
            });
          }
        }();
      };

      BaseClass.prototype.one = function (eventName) {
        var _this = this;

        return function () {
          if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve) {
              _this._objectInstance.one(eventName, function () {
                var args = [];

                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
                }

                var newArgs = normalizeArgumentsOfEventListener.call(_this, _this._objectInstance, args);
                resolve(newArgs);
              });
            });
          }
        }();
      };

      BaseClass.prototype.hasEventListener = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "hasEventListener", {
          "sync": true
        }, arguments);
      };

      BaseClass.prototype.empty = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "empty", {
          "sync": true
        }, arguments);
      };

      BaseClass.prototype.trigger = function (eventName) {
        var parameters = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          parameters[_i - 1] = arguments[_i];
        }

        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "trigger", {
          "sync": true
        }, arguments);
      };

      BaseClass.prototype.destroy = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "destroy", {
          "sync": true
        }, arguments);
      };

      BaseClass.prototype.removeEventListener = function (eventName, listener) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "removeEventListener", {
          "sync": true
        }, arguments);
      };

      BaseClass.prototype.off = function (eventName, listener) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "off", {
          "sync": true
        }, arguments);
      };

      BaseClass.plugin = "cordova-plugin-googlemaps";
      BaseClass.pluginName = "GoogleMaps";
      BaseClass.pluginRef = "plugin.google.maps.BaseClass";
      BaseClass.repo = "";
      return BaseClass;
    }();

    var BaseArrayClass =
    /** @class */
    function (_super) {
      __extends(BaseArrayClass, _super);

      function BaseArrayClass(initialData) {
        var _this = this;

        if (initialData instanceof GoogleMaps.getPlugin().BaseArrayClass) {
          _this = _super.call(this, initialData) || this;
        } else if (Array.isArray(initialData)) {
          _this = _super.call(this, new (GoogleMaps.getPlugin().BaseArrayClass)(initialData)) || this;
        } else {
          _this = _super.call(this, new (GoogleMaps.getPlugin().BaseArrayClass)([])) || this;
        }

        return _this;
      }

      BaseArrayClass.prototype.empty = function (noNotify) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "empty", {
          "sync": true
        }, arguments);
      };

      BaseArrayClass.prototype.forEach = function (fn) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "forEach", {
          "sync": true
        }, arguments);
      };
      /**
       * Iterate over each element, calling the provided callback.
       * @param fn {Function}
       * @return {Promise<void>}
       */


      BaseArrayClass.prototype.forEachAsync = function (fn) {
        var _this = this;

        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve) {
          _this._objectInstance.forEach(fn, resolve);
        });
      };

      BaseArrayClass.prototype.map = function (fn) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "map", {
          "sync": true
        }, arguments);
      };
      /**
       * Iterate over each element, calling the provided callback.
       * Then you can get the results of each callback.
       * @param fn {Function}
       * @param callback {Function}
       * @return {Promise<any>} returns a new array with the results
       */


      BaseArrayClass.prototype.mapAsync = function (fn) {
        var _this = this;

        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve) {
          _this._objectInstance.map(fn, resolve);
        });
      };
      /**
       * Same as `mapAsync`, but keep the execution order
       * @param fn {Function}
       * @param callback {Function}
       * @return {Promise<any>} returns a new array with the results
       */


      BaseArrayClass.prototype.mapSeries = function (fn) {
        var _this = this;

        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve) {
          _this._objectInstance.mapSeries(fn, resolve);
        });
      };

      BaseArrayClass.prototype.filter = function (fn) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "filter", {
          "sync": true
        }, arguments);
      };
      /**
       * The filterAsync() method creates a new array with all elements that pass the test implemented by the provided function.
       * @param fn {Function}
       * @param callback {Function}
       * @return {Promise<T[]>} returns a new filtered array
       */


      BaseArrayClass.prototype.filterAsync = function (fn) {
        var _this = this;

        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve) {
          _this._objectInstance.filter(fn, resolve);
        });
      };

      BaseArrayClass.prototype.getArray = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getArray", {
          "sync": true
        }, arguments);
      };

      BaseArrayClass.prototype.getAt = function (index) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getAt", {
          "sync": true
        }, arguments);
      };

      BaseArrayClass.prototype.getLength = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getLength", {
          "sync": true
        }, arguments);
      };

      BaseArrayClass.prototype.indexOf = function (element) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "indexOf", {
          "sync": true
        }, arguments);
      };

      BaseArrayClass.prototype.reverse = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "reverse", {
          "sync": true
        }, arguments);
      };

      BaseArrayClass.prototype.sort = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "sort", {
          "sync": true
        }, arguments);
      };

      BaseArrayClass.prototype.insertAt = function (index, element, noNotify) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "insertAt", {
          "sync": true
        }, arguments);
      };

      BaseArrayClass.prototype.pop = function (noNotify) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "pop", {
          "sync": true
        }, arguments);
      };

      BaseArrayClass.prototype.push = function (element, noNotify) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "push", {
          "sync": true
        }, arguments);
      };

      BaseArrayClass.prototype.removeAt = function (index, noNotify) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "removeAt", {
          "sync": true
        }, arguments);
      };

      BaseArrayClass.prototype.setAt = function (index, element, noNotify) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setAt", {
          "sync": true
        }, arguments);
      };

      BaseArrayClass.pluginName = "BaseArrayClass";
      BaseArrayClass.plugin = "cordova-plugin-googlemaps";
      BaseArrayClass.pluginRef = "plugin.google.maps.BaseArrayClass";
      return BaseArrayClass;
    }(BaseClass);

    var Circle =
    /** @class */
    function (_super) {
      __extends(Circle, _super);

      function Circle(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;

        _this._map = _map;
        return _this;
      }

      Circle.prototype.getId = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", {
          "sync": true
        }, arguments);
      };
      /**
       * Returns the map instance.
       * @return {GoogleMap}
       */


      Circle.prototype.getMap = function () {
        return this._map;
      };

      Circle.prototype.setCenter = function (latLng) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setCenter", {
          "sync": true
        }, arguments);
      };

      Circle.prototype.getCenter = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getCenter", {
          "sync": true
        }, arguments);
      };

      Circle.prototype.getRadius = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getRadius", {
          "sync": true
        }, arguments);
      };

      Circle.prototype.setRadius = function (radius) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setRadius", {
          "sync": true
        }, arguments);
      };

      Circle.prototype.setFillColor = function (color) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setFillColor", {
          "sync": true
        }, arguments);
      };

      Circle.prototype.getFillColor = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getFillColor", {
          "sync": true
        }, arguments);
      };

      Circle.prototype.setStrokeWidth = function (strokeWidth) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setStrokeWidth", {
          "sync": true
        }, arguments);
      };

      Circle.prototype.getStrokeWidth = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getStrokeWidth", {
          "sync": true
        }, arguments);
      };

      Circle.prototype.setStrokeColor = function (strokeColor) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setStrokeColor", {
          "sync": true
        }, arguments);
      };

      Circle.prototype.getStrokeColor = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getStrokeColor", {
          "sync": true
        }, arguments);
      };

      Circle.prototype.setClickable = function (clickable) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setClickable", {
          "sync": true
        }, arguments);
      };

      Circle.prototype.getClickable = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getClickable", {
          "sync": true
        }, arguments);
      };

      Circle.prototype.setZIndex = function (zIndex) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setZIndex", {
          "sync": true
        }, arguments);
      };

      Circle.prototype.getZIndex = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getZIndex", {
          "sync": true
        }, arguments);
      };

      Circle.prototype.remove = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments);
      };

      Circle.prototype.getBounds = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getBounds", {
          "sync": true
        }, arguments);
      };

      Circle.prototype.setVisible = function (visible) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", {
          "sync": true
        }, arguments);
      };

      Circle.prototype.getVisible = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getVisible", {
          "sync": true
        }, arguments);
      };

      return Circle;
    }(BaseClass);

    var Environment =
    /** @class */
    function () {
      function Environment() {}
      /**
       * Set environment variables.
       */


      Environment.setEnv = function (envOptions) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
          throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }

        GoogleMaps.getPlugin().environment.setEnv(envOptions);
      };
      /**
       * Get the open source software license information for Google Maps SDK for iOS.
       * @return {Promise<any>}
       */


      Environment.getLicenseInfo = function () {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
          throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }

        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve) {
          GoogleMaps.getPlugin().environment.getLicenseInfo(function (text) {
            return resolve(text);
          });
        });
      };
      /**
       * Specifies the background color of the app.
       * @param color
       */


      Environment.setBackgroundColor = function (color) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
          throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }

        GoogleMaps.getPlugin().environment.setBackgroundColor(color);
      };
      /**
       * @deprecation This method is static. Please use Environment.getLicenseInfo()
       * @hidden
       */


      Environment.prototype.getLicenseInfo = function () {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Environment.getLicenseInfo()');
        return Environment.getLicenseInfo();
      };
      /**
       * @deprecation This method is static. Please use Environment.setBackgroundColor()
       * @hidden
       */


      Environment.prototype.setBackgroundColor = function (color) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Environment.setBackgroundColor()');
        Environment.setBackgroundColor(color);
      };

      Environment.plugin = "cordova-plugin-googlemaps";
      Environment.pluginName = "GoogleMaps";
      Environment.pluginRef = "plugin.google.maps.environment";
      Environment.repo = "";
      return Environment;
    }();

    var Geocoder =
    /** @class */
    function () {
      function Geocoder() {}
      /**
       * @deprecation This method is static. Please use Geocoder.geocode()
       * @hidden
       */


      Geocoder.prototype.geocode = function (request) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Geocoder.geocode()');
        return Geocoder.geocode(request);
      };
      /**
       * Converts position to address and vice versa
       * @param {GeocoderRequest} request Request object with either an address or a position
       * @return {Promise<GeocoderResult[] | BaseArrayClass<GeocoderResult>>}
       */


      Geocoder.geocode = function (request) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
          throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }

        if (request.address instanceof Array || Array.isArray(request.address) || request.position instanceof Array || Array.isArray(request.position)) {
          // -------------------------
          // Geocoder.geocode({
          //   address: [
          //    "Kyoto, Japan",
          //    "Tokyo, Japan"
          //   ]
          // })
          // -------------------------
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
            GoogleMaps.getPlugin().Geocoder.geocode(request, function (mvcArray) {
              if (mvcArray) {
                resolve(new BaseArrayClass(mvcArray));
              } else {
                reject();
              }
            });
          });
        } else {
          // -------------------------
          // Geocoder.geocode({
          //   address: "Kyoto, Japan"
          // })
          // -------------------------
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
            GoogleMaps.getPlugin().Geocoder.geocode(request, function (results) {
              if (results) {
                resolve(results);
              } else {
                reject();
              }
            });
          });
        }
      };

      Geocoder.pluginName = "GoogleMaps";
      Geocoder.pluginRef = "plugin.google.maps.Geocoder";
      Geocoder.plugin = "cordova-plugin-googlemaps";
      Geocoder.repo = "";
      return Geocoder;
    }();

    var LocationService =
    /** @class */
    function () {
      function LocationService() {}
      /**
       * Get the current device location without map
       * @return {Promise<MyLocation>}
       */


      LocationService.getMyLocation = function (options) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
          throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }

        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
          GoogleMaps.getPlugin().LocationService.getMyLocation(options, resolve, reject);
        });
      };
      /**
       * Return true if the application has geolocation permission
       * @return {Promise<boolean>}
       */


      LocationService.hasPermission = function () {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
          throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }

        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
          GoogleMaps.getPlugin().LocationService.hasPermission(resolve, reject);
        });
      };

      LocationService.pluginName = "GoogleMaps";
      LocationService.pluginRef = "plugin.google.maps.LocationService";
      LocationService.plugin = "cordova-plugin-googlemaps";
      LocationService.repo = "";
      return LocationService;
    }();

    var Encoding =
    /** @class */
    function () {
      function Encoding() {}
      /**
       * Decodes an encoded path string into a sequence of LatLngs.
       * @param encoded {string} an encoded path string
       * @param precision? {number} default: 5
       * @return {LatLng}
       */


      Encoding.decodePath = function (encoded, precision) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
          throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }

        return GoogleMaps.getPlugin().encoding.decodePath(encoded, precision);
      };
      /**
       * Encodes a sequence of LatLngs into an encoded path string.
       * @param path {ILatLng[] | BaseArrayClass<ILatLng>} a sequence of LatLngs
       * @return {string}
       */


      Encoding.encodePath = function (path) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
          throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }

        return GoogleMaps.getPlugin().encoding.encodePath(path);
      };
      /**
       * @deprecation This method is static. Please use Encoding.decodePath()
       * @hidden
       */


      Encoding.prototype.decodePath = function (encoded, precision) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Encoding.decodePath()');
        return Encoding.decodePath(encoded, precision);
      };
      /**
       * @deprecation This method is static. Please use Encoding.encodePath()
       * @hidden
       */


      Encoding.prototype.encodePath = function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Encoding.encodePath()');
        return Encoding.encodePath(path);
      };

      Encoding.pluginName = "GoogleMaps";
      Encoding.pluginRef = "plugin.google.maps.geometry.encoding";
      Encoding.plugin = "cordova-plugin-googlemaps";
      Encoding.repo = "";
      return Encoding;
    }();

    var Poly =
    /** @class */
    function () {
      function Poly() {}
      /**
       * Returns true if the specified location is in the polygon path
       * @param location {ILatLng}
       * @param path {ILatLng[]}
       * @return {boolean}
       */


      Poly.containsLocation = function (location, path) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
          throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }

        return GoogleMaps.getPlugin().geometry.poly.containsLocation(location, path);
      };
      /**
       * Returns true if the specified location is on the polyline path
       * @param location {ILatLng}
       * @param path {ILatLng[]}
       * @return {boolean}
       */


      Poly.isLocationOnEdge = function (location, path) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
          throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }

        return GoogleMaps.getPlugin().geometry.poly.isLocationOnEdge(location, path);
      };

      Poly.pluginName = "GoogleMaps";
      Poly.pluginRef = "plugin.google.maps.geometry.poly";
      Poly.plugin = "cordova-plugin-googlemaps";
      Poly.repo = "";
      return Poly;
    }();

    var Spherical =
    /** @class */
    function () {
      function Spherical() {}
      /**
       * Returns the distance, in meters, between two LatLngs.
       * @param locationA {ILatLng}
       * @param locationB {ILatLng}
       * @return {number}
       */


      Spherical.computeDistanceBetween = function (from, to) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
          throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }

        return GoogleMaps.getPlugin().geometry.spherical.computeDistanceBetween(from, to);
      };
      /**
       * Returns the LatLng resulting from moving a distance from an origin in the specified heading (expressed in degrees clockwise from north)
       * @param from {ILatLng}
       * @param distance {number}
       * @param heading {number}
       * @return {LatLng}
       */


      Spherical.computeOffset = function (from, distance, heading) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
          throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }

        return GoogleMaps.getPlugin().geometry.spherical.computeOffset(from, distance, heading);
      };
      /**
       * Returns the location of origin when provided with a LatLng destination, meters travelled and original heading. Headings are expressed in degrees clockwise from North. This function returns null when no solution is available.
       * @param to {ILatLng} The destination LatLng.
       * @param distance {number} The distance travelled, in meters.
       * @param heading {number} The heading in degrees clockwise from north.
       * @return {LatLng}
       */


      Spherical.computeOffsetOrigin = function (to, distance, heading) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
          throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }

        return GoogleMaps.getPlugin().geometry.spherical.computeOffsetOrigin(to, distance, heading);
      };
      /**
       * Returns the length of the given path.
       * @param path {ILatLng[] | BaseArrayClass<ILatLng>}
       * @return {number}
       */


      Spherical.computeLength = function (path) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
          throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }

        return GoogleMaps.getPlugin().geometry.spherical.computeLength(path);
      };
      /**
       * Returns the area of a closed path. The computed area uses the same units as the radius.
       * @param path {ILatLng[] | BaseArrayClass<ILatLng>}.
       * @return {number}
       */


      Spherical.computeArea = function (path) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
          throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }

        return GoogleMaps.getPlugin().geometry.spherical.computeLength(path);
      };
      /**
       * Returns the signed area of a closed path. The signed area may be used to determine the orientation of the path.
       * @param path {ILatLng[] | BaseArrayClass<ILatLng>}.
       * @return {number}
       */


      Spherical.computeSignedArea = function (path) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
          throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }

        return GoogleMaps.getPlugin().geometry.spherical.computeSignedArea(path);
      };
      /**
       * Returns the heading from one LatLng to another LatLng. Headings are expressed in degrees clockwise from North within the range (-180,180).
       * @param from {ILatLng}
       * @param to {ILatLng}
       * @return {number}
       */


      Spherical.computeHeading = function (from, to) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
          throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }

        return GoogleMaps.getPlugin().geometry.spherical.computeHeading(from, to);
      };
      /**
       * Returns the LatLng which lies the given fraction of the way between the origin LatLng and the destination LatLng.
       * @param from {ILatLng}     The LatLng from which to start.
       * @param to {ILatLng}       The LatLng toward which to travel.
       * @param fraction {number}  A fraction of the distance to travel from 0.0 to 1.0 .
       * @return {LatLng}
       */


      Spherical.interpolate = function (from, to, fraction) {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
          throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }

        return GoogleMaps.getPlugin().geometry.spherical.interpolate(from, to, fraction);
      };
      /**
       * @deprecation This method is static. Please use Spherical.computeDistanceBetween()
       * @hidden
       */


      Spherical.prototype.computeDistanceBetween = function (from, to) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeDistanceBetween()');
        return Spherical.computeDistanceBetween(from, to);
      };
      /**
       * @deprecation This method is static. Please use Spherical.computeOffset()
       * @hidden
       */


      Spherical.prototype.computeOffset = function (from, distance, heading) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeOffset()');
        return Spherical.computeOffset(from, distance, heading);
      };
      /**
       * @deprecation This method is static. Please use Spherical.computeOffsetOrigin()
       * @hidden
       */


      Spherical.prototype.computeOffsetOrigin = function (to, distance, heading) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeOffsetOrigin()');
        return Spherical.computeOffsetOrigin(to, distance, heading);
      };
      /**
       * @deprecation This method is static. Please use Spherical.computeLength()
       * @hidden
       */


      Spherical.prototype.computeLength = function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeLength()');
        return Spherical.computeLength(path);
      };
      /**
       * @deprecation This method is static. Please use Spherical.computeArea()
       * @hidden
       */


      Spherical.prototype.computeArea = function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeArea()');
        return Spherical.computeArea(path);
      };
      /**
       * @deprecation This method is static. Please use Spherical.computeSignedArea()
       * @hidden
       */


      Spherical.prototype.computeSignedArea = function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeSignedArea()');
        return Spherical.computeSignedArea(path);
      };
      /**
       * @deprecation This method is static. Please use Spherical.computeHeading()
       * @hidden
       */


      Spherical.prototype.computeHeading = function (from, to) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeHeading()');
        return Spherical.computeHeading(from, to);
      };
      /**
       * @deprecation This method is static. Please use Spherical.interpolate()
       * @hidden
       */


      Spherical.prototype.interpolate = function (from, to, fraction) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.interpolate()');
        return Spherical.interpolate(from, to, fraction);
      };

      Spherical.pluginName = "GoogleMaps";
      Spherical.pluginRef = "plugin.google.maps.geometry.spherical";
      Spherical.plugin = "cordova-plugin-googlemaps";
      Spherical.repo = "";
      return Spherical;
    }();

    var StreetViewPanorama =
    /** @class */
    function (_super) {
      __extends(StreetViewPanorama, _super);

      function StreetViewPanorama(element, options) {
        var _this = this;

        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
          // -------------------
          // Create a panorama
          // -------------------
          if (element instanceof HTMLElement) {
            if (element.offsetWidth >= 100 && element.offsetHeight >= 100) {
              _this = _super.call(this, GoogleMaps.getPlugin().StreetView.getPanorama(element, options)) || this;
            } else {
              throw new Error(element.tagName + ' is too small. Must be bigger than 100x100.');
            }
          } else if (typeof element === 'string') {
            _this = _super.call(this, GoogleMaps.getPlugin().StreetView.getPanorama(Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
              var count;
              var i;
              count = 0;
              var timer = setInterval(function () {
                var targets;

                for (i = 0; i < TARGET_ELEMENT_FINDING_QUERYS.length; i++) {
                  targets = Array.from(document.querySelectorAll(TARGET_ELEMENT_FINDING_QUERYS[i] + element));

                  if (targets.length > 0) {
                    targets = targets.filter(function (target) {
                      return !target.hasAttribute('__pluginmapid');
                    });
                  }

                  if (targets.length === 1 && targets[0] && targets[0].offsetWidth >= 100 && targets[0].offsetHeight >= 100) {
                    clearInterval(timer);
                    resolve([targets[0], options]);
                    return;
                  }
                }

                if (count++ < 20) {
                  return;
                }

                clearInterval(timer);

                _this._objectInstance.remove();

                if (targets.length > 0 && targets[0] && targets[0].offsetWidth < 100 || targets[0].offsetHeight < 100) {
                  reject(new Error(targets[0].tagName + '[#' + element + '] is too small. Must be bigger than 100x100.'));
                } else {
                  if (targets.length > 1) {
                    reject(new Error('There are multiple "' + element + '" elements. Use different id to prevent error.'));
                  } else {
                    reject(new Error('Can not find the element [#' + element + ']'));
                  }
                }
              }, 100);
            }), options)) || this;
          }
        } else {
          var errorMessage = ['[GoogleMaps]'];

          if (!window.cordova) {
            errorMessage.push('You need to execute "$> ionic cordova run browser".');
            errorMessage.push('"$> ionic serve" is not supported.');
          } else {
            errorMessage.push('cordova-plugin-googlemaps is not installed or not ready yet.');
          }

          if (element instanceof HTMLElement) {
            displayErrorMessage(element, errorMessage.join('<br />'));
          } else if (typeof element === 'string') {
            var targets = Array.from(document.querySelectorAll('#' + element));

            if (targets.length > 0) {
              targets = targets.filter(function (target) {
                return !target.hasAttribute('__pluginmapid');
              });
            }

            if (targets.length === 1 && targets[0]) {
              displayErrorMessage(targets[0], errorMessage.join('<br />'));
            }
          }

          throw new Error(errorMessage.join(''));
        }

        return _this;
      }

      StreetViewPanorama.prototype.setPov = function (pov) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setPov", {}, arguments);
      };

      StreetViewPanorama.prototype.setPosition = function (cameraPosition) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setPosition", {}, arguments);
      };

      StreetViewPanorama.prototype.setPanningGesturesEnabled = function (gestureEnable) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setPanningGesturesEnabled", {
          "sync": true
        }, arguments);
      };

      StreetViewPanorama.prototype.getPanningGesturesEnabled = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getPanningGesturesEnabled", {
          "sync": true
        }, arguments);
      };

      StreetViewPanorama.prototype.setZoomGesturesEnabled = function (gestureEnable) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setZoomGesturesEnabled", {
          "sync": true
        }, arguments);
      };

      StreetViewPanorama.prototype.getZoomGesturesEnabled = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getZoomGesturesEnabled", {
          "sync": true
        }, arguments);
      };

      StreetViewPanorama.prototype.setStreetNamesEnabled = function (gestureEnable) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setStreetNamesEnabled", {
          "sync": true
        }, arguments);
      };

      StreetViewPanorama.prototype.getStreetNamesEnabled = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getStreetNamesEnabled", {
          "sync": true
        }, arguments);
      };

      StreetViewPanorama.prototype.setNavigationEnabled = function (gestureEnable) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setNavigationEnabled", {
          "sync": true
        }, arguments);
      };

      StreetViewPanorama.prototype.getNavigationEnabled = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getNavigationEnabled", {
          "sync": true
        }, arguments);
      };

      StreetViewPanorama.prototype.getLinks = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getLinks", {
          "sync": true
        }, arguments);
      };

      StreetViewPanorama.prototype.getLocation = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getLocation", {
          "sync": true
        }, arguments);
      };

      StreetViewPanorama.prototype.getPanoId = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getPanoId", {
          "sync": true
        }, arguments);
      };

      StreetViewPanorama.prototype.getPosition = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getPosition", {
          "sync": true
        }, arguments);
      };

      StreetViewPanorama.prototype.remove = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments);
      };

      StreetViewPanorama.pluginName = "StreetViewPanorama";
      StreetViewPanorama.plugin = "cordova-plugin-googlemaps";
      return StreetViewPanorama;
    }(BaseClass);

    var GoogleMap =
    /** @class */
    function (_super) {
      __extends(GoogleMap, _super);

      function GoogleMap(element, options, __timeout) {
        var _this = this;

        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
          // ---------------
          // Create a map
          // ---------------
          if (element instanceof HTMLElement) {
            if (!element.offsetParent) {
              throw new Error('Element must be under <body>');
            }

            if (element.offsetWidth >= 100 && element.offsetHeight >= 100) {
              _this = _super.call(this, GoogleMaps.getPlugin().Map.getMap(element, options)) || this;
            } else {
              throw new Error(element.tagName + ' is too small. Must be bigger than 100x100.');
            }
          } else if (typeof element === 'string') {
            _this = _super.call(this, GoogleMaps.getPlugin().Map.getMap(Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
              var count;
              var i;
              count = 0;
              var timer = setInterval(function () {
                var targets;

                for (i = 0; i < TARGET_ELEMENT_FINDING_QUERYS.length; i++) {
                  targets = Array.from(document.querySelectorAll(TARGET_ELEMENT_FINDING_QUERYS[i] + element));

                  if (targets.length > 0) {
                    targets = targets.filter(function (target) {
                      return !target.hasAttribute('__pluginmapid');
                    });
                  }

                  if (targets.length === 1 && targets[0] && targets[0].offsetWidth >= 100 && targets[0].offsetHeight >= 100) {
                    clearInterval(timer);
                    resolve([targets[0], options]);
                    return;
                  }
                }

                if (count++ < 20) {
                  return;
                }

                clearInterval(timer);

                _this._objectInstance.remove();

                if (targets.length > 0 && targets[0] && targets[0].offsetWidth < 100 || targets[0].offsetHeight < 100) {
                  reject(new Error(targets[0].tagName + '[#' + element + '] is too small. Must be bigger than 100x100.'));
                } else {
                  if (targets.length > 1) {
                    reject(new Error('There are multiple "' + element + '" elements. Use different id to prevent error.'));
                  } else {
                    reject(new Error('Can not find the element [#' + element + ']'));
                  }
                }
              }, __timeout == null ? 100 : __timeout);
            }), options)) || this;
          } else if (element === null && options) {
            _this = _super.call(this, GoogleMaps.getPlugin().Map.getMap(null, options)) || this;
          }
        } else {
          var errorMessage = ['[GoogleMaps]'];

          if (!window.cordova) {
            errorMessage.push('You need to execute "$> ionic cordova run browser".');
            errorMessage.push('"$> ionic serve" is not supported.');
          } else {
            errorMessage.push('cordova-plugin-googlemaps is not installed or not ready yet.');
          }

          console.error(errorMessage.join(''));

          if (element instanceof HTMLElement) {
            displayErrorMessage(element, errorMessage.join('<br />'));
          } else if (typeof element === 'string') {
            var targets = Array.from(document.querySelectorAll('#' + element));

            if (targets.length > 0) {
              targets = targets.filter(function (target) {
                return !target.hasAttribute('__pluginmapid');
              });
            }

            if (targets.length === 1 && targets[0]) {
              displayErrorMessage(targets[0], errorMessage.join('<br />'));
            }
          }
        }

        return _this;
      }

      GoogleMap.prototype.setDiv = function (domNode) {
        var _this = this;

        return function () {
          if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
            if (!domNode) {
              _this._objectInstance.setDiv();

              return;
            }

            if (typeof domNode === 'string') {
              Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
                var i, targets;

                for (i = 0; i < TARGET_ELEMENT_FINDING_QUERYS.length; i++) {
                  targets = Array.from(document.querySelectorAll(TARGET_ELEMENT_FINDING_QUERYS[i] + domNode));

                  if (targets.length > 0) {
                    targets = targets.filter(function (target) {
                      return !target.hasAttribute('__pluginmapid');
                    });
                  }

                  if (targets.length === 1 && targets[0] && targets[0].offsetWidth >= 100 && targets[0].offsetHeight >= 100) {
                    resolve(targets[0]);
                    return;
                  }
                }

                reject('Can not find [#' + domNode + '] element');
              }).then(function (element) {
                _this._objectInstance.setDiv(element);
              });
            } else {
              if (domNode instanceof HTMLElement && !domNode.offsetParent && domNode.offsetWidth >= 100 && domNode.offsetHeight >= 100) {
                _this._objectInstance.setDiv(domNode);
              } else {
                throw new Error(domNode.tagName + ' is too small. Must be bigger than 100x100.');
              }
            }
          }
        }();
      };

      GoogleMap.prototype.getDiv = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getDiv", {
          "sync": true
        }, arguments);
      };

      GoogleMap.prototype.setMapTypeId = function (mapTypeId) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setMapTypeId", {
          "sync": true
        }, arguments);
      };

      GoogleMap.prototype.animateCamera = function (cameraPosition) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "animateCamera", {}, arguments);
      };

      GoogleMap.prototype.animateCameraZoomIn = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "animateCameraZoomIn", {}, arguments);
      };

      GoogleMap.prototype.animateCameraZoomOut = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "animateCameraZoomOut", {}, arguments);
      };

      GoogleMap.prototype.moveCamera = function (cameraPosition) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "moveCamera", {}, arguments);
      };

      GoogleMap.prototype.moveCameraZoomIn = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "moveCameraZoomIn", {}, arguments);
      };

      GoogleMap.prototype.moveCameraZoomOut = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "moveCameraZoomOut", {}, arguments);
      };

      GoogleMap.prototype.getCameraPosition = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getCameraPosition", {
          "sync": true
        }, arguments);
      };

      GoogleMap.prototype.getCameraTarget = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getCameraTarget", {
          "sync": true
        }, arguments);
      };

      GoogleMap.prototype.getCameraZoom = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getCameraZoom", {
          "sync": true
        }, arguments);
      };

      GoogleMap.prototype.getCameraBearing = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getCameraBearing", {
          "sync": true
        }, arguments);
      };

      GoogleMap.prototype.getCameraTilt = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getCameraTilt", {
          "sync": true
        }, arguments);
      };

      GoogleMap.prototype.setCameraTarget = function (latLng) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setCameraTarget", {
          "sync": true
        }, arguments);
      };

      GoogleMap.prototype.setCameraZoom = function (zoomLevel) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setCameraZoom", {
          "sync": true
        }, arguments);
      };

      GoogleMap.prototype.setCameraTilt = function (tiltAngle) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setCameraTilt", {
          "sync": true
        }, arguments);
      };

      GoogleMap.prototype.setCameraBearing = function (bearing) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setCameraBearing", {
          "sync": true
        }, arguments);
      };

      GoogleMap.prototype.panBy = function (x, y) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "panBy", {
          "sync": true
        }, arguments);
      };

      GoogleMap.prototype.getVisibleRegion = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getVisibleRegion", {
          "sync": true
        }, arguments);
      };

      GoogleMap.prototype.getMyLocation = function (options) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getMyLocation", {}, arguments);
      };

      GoogleMap.prototype.setClickable = function (isClickable) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setClickable", {
          "sync": true
        }, arguments);
      };

      GoogleMap.prototype.remove = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments);
      };

      GoogleMap.prototype.clear = function () {
        var _this = this;

        return function () {
          if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
            if (_this.get('_overlays')) {
              Object.keys(_this.get('_overlays')).forEach(function (overlayId) {
                _this.get('_overlays')[overlayId] = null;
                delete _this.get('_overlays')[overlayId];
              });
            }

            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve) {
              _this._objectInstance.clear(function () {
                return resolve();
              });
            });
          }
        }();
      };

      GoogleMap.prototype.fromLatLngToPoint = function (latLng) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "fromLatLngToPoint", {}, arguments);
      };

      GoogleMap.prototype.fromPointToLatLng = function (point) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "fromPointToLatLng", {}, arguments);
      };

      GoogleMap.prototype.setMyLocationEnabled = function (enabled) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setMyLocationEnabled", {
          "sync": true
        }, arguments);
      };

      GoogleMap.prototype.setMyLocationButtonEnabled = function (enabled) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setMyLocationButtonEnabled", {
          "sync": true
        }, arguments);
      };

      GoogleMap.prototype.getFocusedBuilding = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getFocusedBuilding", {}, arguments);
      };

      GoogleMap.prototype.setIndoorEnabled = function (enabled) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setIndoorEnabled", {
          "sync": true
        }, arguments);
      };

      GoogleMap.prototype.setTrafficEnabled = function (enabled) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setTrafficEnabled", {
          "sync": true
        }, arguments);
      };

      GoogleMap.prototype.setCompassEnabled = function (enabled) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setCompassEnabled", {
          "sync": true
        }, arguments);
      };

      GoogleMap.prototype.setAllGesturesEnabled = function (enabled) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setAllGesturesEnabled", {
          "sync": true
        }, arguments);
      };

      GoogleMap.prototype.setVisible = function (visible) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", {
          "sync": true
        }, arguments);
      };

      GoogleMap.prototype.setPadding = function (top, right, bottom, left) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setPadding", {
          "sync": true
        }, arguments);
      };

      GoogleMap.prototype.setOptions = function (options) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setOptions", {
          "sync": true
        }, arguments);
      };

      GoogleMap.prototype.addMarker = function (options) {
        var _this = this;

        return function () {
          if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
              _this._objectInstance.addMarker(options, function (marker) {
                if (marker) {
                  var overlayId_1 = marker.getId();
                  var overlay_1 = new Marker(_this, marker);
                  _this.get('_overlays')[overlayId_1] = overlay_1;
                  marker.one(overlayId_1 + '_remove', function () {
                    if (_this.get('_overlays')) {
                      _this.get('_overlays')[overlayId_1] = null;
                      overlay_1.destroy();
                    }
                  });
                  resolve(overlay_1);
                } else {
                  reject();
                }
              });
            });
          }
        }();
      };

      GoogleMap.prototype.addMarkerSync = function (options) {
        var _this = this;

        return function () {
          if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
            var marker = _this._objectInstance.addMarker(options);

            var overlayId = marker.getId();
            var overlay = new Marker(_this, marker);
            _this.get('_overlays')[overlayId] = overlay;
            marker.one(overlayId + '_remove', function () {
              if (_this.get('_overlays')) {
                _this.get('_overlays')[overlayId] = null;
                overlay.destroy();
              }
            });
            return overlay;
          }
        }();
      };

      GoogleMap.prototype.addMarkerCluster = function (options) {
        var _this = this;

        return function () {
          if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
              _this._objectInstance.addMarkerCluster(options, function (markerCluster) {
                if (markerCluster) {
                  var overlayId_2 = markerCluster.getId();
                  var overlay_2 = new MarkerCluster(_this, markerCluster);
                  _this.get('_overlays')[overlayId_2] = overlay_2;
                  markerCluster.one('remove', function () {
                    if (_this.get('_overlays')) {
                      _this.get('_overlays')[overlayId_2] = null;
                      overlay_2.destroy();
                    }
                  });
                  markerCluster.set('_overlays', new BaseArrayClass());
                  resolve(overlay_2);
                } else {
                  reject();
                }
              });
            });
          }
        }();
      };

      GoogleMap.prototype.addMarkerClusterSync = function (options) {
        var _this = this;

        return function () {
          if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
            var markerCluster = _this._objectInstance.addMarkerCluster(options);

            var overlayId = markerCluster.getId();
            var overlay = new MarkerCluster(_this, markerCluster);
            _this.get('_overlays')[overlayId] = overlay;
            markerCluster.one(overlayId + '_remove', function () {
              if (_this.get('_overlays')) {
                _this.get('_overlays')[overlayId] = null;
                overlay.destroy();
              }
            });
            markerCluster.set('_overlays', new BaseArrayClass());
            return overlay;
          }
        }();
      };

      GoogleMap.prototype.addCircle = function (options) {
        var _this = this;

        return function () {
          if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
              _this._objectInstance.addCircle(options, function (circle) {
                if (circle) {
                  var overlayId_3 = circle.getId();
                  var overlay_3 = new Circle(_this, circle);
                  _this.get('_overlays')[overlayId_3] = overlay_3;
                  circle.one(overlayId_3 + '_remove', function () {
                    if (_this.get('_overlays')) {
                      _this.get('_overlays')[overlayId_3] = null;
                      overlay_3.destroy();
                    }
                  });
                  resolve(overlay_3);
                } else {
                  reject();
                }
              });
            });
          }
        }();
      };

      GoogleMap.prototype.addCircleSync = function (options) {
        var _this = this;

        return function () {
          if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
            var circle = _this._objectInstance.addCircle(options);

            var overlayId = circle.getId();
            var overlay = new Circle(_this, circle);
            _this.get('_overlays')[overlayId] = overlay;
            circle.one(overlayId + '_remove', function () {
              if (_this.get('_overlays')) {
                _this.get('_overlays')[overlayId] = null;
                overlay.destroy();
              }
            });
            return overlay;
          }
        }();
      };

      GoogleMap.prototype.addPolygon = function (options) {
        var _this = this;

        return function () {
          if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
              _this._objectInstance.addPolygon(options, function (polygon) {
                if (polygon) {
                  var overlayId_4 = polygon.getId();
                  var overlay_4 = new Polygon(_this, polygon);
                  _this.get('_overlays')[overlayId_4] = overlay_4;
                  polygon.one(overlayId_4 + '_remove', function () {
                    if (_this.get('_overlays')) {
                      _this.get('_overlays')[overlayId_4] = null;
                      overlay_4.destroy();
                    }
                  });
                  resolve(overlay_4);
                } else {
                  reject();
                }
              });
            });
          }
        }();
      };

      GoogleMap.prototype.addPolygonSync = function (options) {
        var _this = this;

        return function () {
          if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
            var polygon = _this._objectInstance.addPolygon(options);

            var overlayId = polygon.getId();
            var overlay = new Polygon(_this, polygon);
            _this.get('_overlays')[overlayId] = overlay;
            polygon.one(overlayId + '_remove', function () {
              if (_this.get('_overlays')) {
                _this.get('_overlays')[overlayId] = null;
                overlay.destroy();
              }
            });
            return overlay;
          }
        }();
      };

      GoogleMap.prototype.addPolyline = function (options) {
        var _this = this;

        return function () {
          if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
              _this._objectInstance.addPolyline(options, function (polyline) {
                if (polyline) {
                  var overlayId_5 = polyline.getId();
                  var overlay_5 = new Polyline(_this, polyline);
                  _this.get('_overlays')[overlayId_5] = overlay_5;
                  polyline.one(overlayId_5 + '_remove', function () {
                    if (_this.get('_overlays')) {
                      _this.get('_overlays')[overlayId_5] = null;
                      overlay_5.destroy();
                    }
                  });
                  resolve(overlay_5);
                } else {
                  reject();
                }
              });
            });
          }
        }();
      };

      GoogleMap.prototype.addPolylineSync = function (options) {
        var _this = this;

        return function () {
          if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
            var polyline = _this._objectInstance.addPolyline(options);

            var overlayId = polyline.getId();
            var overlay = new Polyline(_this, polyline);
            _this.get('_overlays')[overlayId] = overlay;
            polyline.one(overlayId + '_remove', function () {
              if (_this.get('_overlays')) {
                _this.get('_overlays')[overlayId] = null;
                overlay.destroy();
              }
            });
            return overlay;
          }
        }();
      };

      GoogleMap.prototype.addTileOverlay = function (options) {
        var _this = this;

        return function () {
          if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
              _this._objectInstance.addTileOverlay(options, function (tileOverlay) {
                if (tileOverlay) {
                  var overlayId_6 = tileOverlay.getId();
                  var overlay_6 = new TileOverlay(_this, tileOverlay);
                  _this.get('_overlays')[overlayId_6] = overlay_6;
                  tileOverlay.one(overlayId_6 + '_remove', function () {
                    if (_this.get('_overlays')) {
                      _this.get('_overlays')[overlayId_6] = null;
                      overlay_6.destroy();
                    }
                  });
                  resolve(overlay_6);
                } else {
                  reject();
                }
              });
            });
          }
        }();
      };

      GoogleMap.prototype.addTileOverlaySync = function (options) {
        var _this = this;

        return function () {
          if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
            var tileOverlay = _this._objectInstance.addTileOverlay(options);

            var overlayId = tileOverlay.getId();
            var overlay = new TileOverlay(_this, tileOverlay);
            _this.get('_overlays')[overlayId] = overlay;
            tileOverlay.one(overlayId + '_remove', function () {
              if (_this.get('_overlays')) {
                _this.get('_overlays')[overlayId] = null;
                overlay.destroy();
              }
            });
            return overlay;
          }
        }();
      };

      GoogleMap.prototype.addGroundOverlay = function (options) {
        var _this = this;

        return function () {
          if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
              _this._objectInstance.addGroundOverlay(options, function (groundOverlay) {
                if (groundOverlay) {
                  var overlayId_7 = groundOverlay.getId();
                  var overlay_7 = new GroundOverlay(_this, groundOverlay);
                  _this.get('_overlays')[overlayId_7] = overlay_7;
                  groundOverlay.one(overlayId_7 + '_remove', function () {
                    if (_this.get('_overlays')) {
                      _this.get('_overlays')[overlayId_7] = null;
                      overlay_7.destroy();
                    }
                  });
                  resolve(overlay_7);
                } else {
                  reject();
                }
              });
            });
          }
        }();
      };

      GoogleMap.prototype.addGroundOverlaySync = function (options) {
        var _this = this;

        return function () {
          if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
            var groundOverlay = _this._objectInstance.addGroundOverlay(options);

            var overlayId = groundOverlay.getId();
            var overlay = new GroundOverlay(_this, groundOverlay);
            _this.get('_overlays')[overlayId] = overlay;
            groundOverlay.one(overlayId + '_remove', function () {
              if (_this.get('_overlays')) {
                _this.get('_overlays')[overlayId] = null;
                overlay.destroy();
              }
            });
            return overlay;
          }
        }();
      };

      GoogleMap.prototype.addKmlOverlay = function (options) {
        var _this = this;

        return function () {
          if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["instanceAvailability"])(_this) === true) {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["getPromise"])(function (resolve, reject) {
              _this._objectInstance.addKmlOverlay(options, function (kmlOverlay) {
                if (kmlOverlay) {
                  var overlayId_8 = kmlOverlay.getId();
                  var overlay_8 = new KmlOverlay(_this, kmlOverlay);
                  _this.get('_overlays')[overlayId_8] = overlay_8;
                  kmlOverlay.one(overlayId_8 + '_remove', function () {
                    if (_this.get('_overlays')) {
                      _this.get('_overlays')[overlayId_8] = null;
                      overlay_8.destroy();
                    }
                  });
                  resolve(overlay_8);
                } else {
                  reject();
                }
              });
            });
          }
        }();
      };

      GoogleMap.prototype.toDataURL = function (options) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "toDataURL", {}, arguments);
      };

      GoogleMap.pluginName = "GoogleMaps";
      GoogleMap.plugin = "cordova-plugin-googlemaps";
      return GoogleMap;
    }(BaseClass);

    var GroundOverlay =
    /** @class */
    function (_super) {
      __extends(GroundOverlay, _super);

      function GroundOverlay(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;

        _this._map = _map;
        return _this;
      }

      GroundOverlay.prototype.getId = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", {
          "sync": true
        }, arguments);
      };
      /**
       * Returns the map instance.
       * @return {GoogleMap}
       */


      GroundOverlay.prototype.getMap = function () {
        return this._map;
      };

      GroundOverlay.prototype.setBounds = function (bounds) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setBounds", {
          "sync": true
        }, arguments);
      };

      GroundOverlay.prototype.setBearing = function (bearing) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setBearing", {
          "sync": true
        }, arguments);
      };

      GroundOverlay.prototype.getBearing = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getBearing", {
          "sync": true
        }, arguments);
      };

      GroundOverlay.prototype.setImage = function (imageUrl) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setImage", {
          "sync": true
        }, arguments);
      };

      GroundOverlay.prototype.setOpacity = function (opacity) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setOpacity", {
          "sync": true
        }, arguments);
      };

      GroundOverlay.prototype.getOpacity = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getOpacity", {
          "sync": true
        }, arguments);
      };

      GroundOverlay.prototype.setClickable = function (clickable) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setClickable", {
          "sync": true
        }, arguments);
      };

      GroundOverlay.prototype.getClickable = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getClickable", {
          "sync": true
        }, arguments);
      };

      GroundOverlay.prototype.setVisible = function (visible) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", {
          "sync": true
        }, arguments);
      };

      GroundOverlay.prototype.getVisible = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getVisible", {
          "sync": true
        }, arguments);
      };

      GroundOverlay.prototype.setZIndex = function (index) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setZIndex", {
          "sync": true
        }, arguments);
      };

      GroundOverlay.prototype.getZIndex = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getZIndex", {
          "sync": true
        }, arguments);
      };

      GroundOverlay.prototype.remove = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments);
      };

      return GroundOverlay;
    }(BaseClass);

    var HtmlInfoWindow =
    /** @class */
    function (_super) {
      __extends(HtmlInfoWindow, _super);

      function HtmlInfoWindow() {
        return _super.call(this, new (GoogleMaps.getPlugin().HtmlInfoWindow)()) || this;
      }

      HtmlInfoWindow.prototype.setBackgroundColor = function (color) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setBackgroundColor", {}, arguments);
      };

      HtmlInfoWindow.prototype.setContent = function (content, cssOptions) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setContent", {}, arguments);
      };

      HtmlInfoWindow.prototype.open = function (marker) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "open", {}, arguments);
      };

      HtmlInfoWindow.prototype.close = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "close", {}, arguments);
      };

      HtmlInfoWindow.plugin = "cordova-plugin-googlemaps";
      HtmlInfoWindow.pluginName = "GoogleMaps";
      HtmlInfoWindow.pluginRef = "plugin.google.maps.HtmlInfoWindow";
      HtmlInfoWindow.repo = "";
      return HtmlInfoWindow;
    }(BaseClass);

    var Marker =
    /** @class */
    function (_super) {
      __extends(Marker, _super);

      function Marker(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;

        _this._map = _map;
        return _this;
      }

      Marker.prototype.getId = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", {
          "sync": true
        }, arguments);
      };
      /**
       * Returns the map instance.
       * @return {GoogleMap}
       */


      Marker.prototype.getMap = function () {
        return this._map;
      };

      Marker.prototype.setPosition = function (latLng) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setPosition", {
          "sync": true
        }, arguments);
      };

      Marker.prototype.getPosition = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getPosition", {
          "sync": true
        }, arguments);
      };

      Marker.prototype.showInfoWindow = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "showInfoWindow", {
          "sync": true
        }, arguments);
      };

      Marker.prototype.hideInfoWindow = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "hideInfoWindow", {
          "sync": true
        }, arguments);
      };

      Marker.prototype.setAnimation = function (animation) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setAnimation", {
          "sync": true
        }, arguments);
      };

      Marker.prototype.setDisableAutoPan = function (disableAutoPan) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setDisableAutoPan", {
          "sync": true
        }, arguments);
      };

      Marker.prototype.setVisible = function (visible) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", {
          "sync": true
        }, arguments);
      };

      Marker.prototype.isVisible = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "isVisible", {
          "sync": true
        }, arguments);
      };

      Marker.prototype.setTitle = function (title) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setTitle", {
          "sync": true
        }, arguments);
      };

      Marker.prototype.getTitle = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getTitle", {
          "sync": true
        }, arguments);
      };

      Marker.prototype.setSnippet = function (snippet) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setSnippet", {
          "sync": true
        }, arguments);
      };

      Marker.prototype.getSnippet = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getSnippet", {
          "sync": true
        }, arguments);
      };

      Marker.prototype.setOpacity = function (alpha) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setOpacity", {
          "sync": true
        }, arguments);
      };

      Marker.prototype.getOpacity = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getOpacity", {
          "sync": true
        }, arguments);
      };

      Marker.prototype.remove = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments);
      };

      Marker.prototype.setIconAnchor = function (x, y) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setIconAnchor", {
          "sync": true
        }, arguments);
      };

      Marker.prototype.setInfoWindowAnchor = function (x, y) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setInfoWindowAnchor", {
          "sync": true
        }, arguments);
      };

      Marker.prototype.isInfoWindowShown = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "isInfoWindowShown", {
          "sync": true
        }, arguments);
      };

      Marker.prototype.setZIndex = function (zIndex) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setZIndex", {
          "sync": true
        }, arguments);
      };

      Marker.prototype.getZIndex = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getZIndex", {
          "sync": true
        }, arguments);
      };

      Marker.prototype.setDraggable = function (draggable) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setDraggable", {
          "sync": true
        }, arguments);
      };

      Marker.prototype.isDraggable = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "isDraggable", {
          "sync": true
        }, arguments);
      };

      Marker.prototype.setFlat = function (flat) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setFlat", {
          "sync": true
        }, arguments);
      };

      Marker.prototype.setIcon = function (icon) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setIcon", {
          "sync": true
        }, arguments);
      };

      Marker.prototype.setRotation = function (rotation) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setRotation", {
          "sync": true
        }, arguments);
      };

      Marker.prototype.getRotation = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getRotation", {
          "sync": true
        }, arguments);
      };

      return Marker;
    }(BaseClass);

    var MarkerCluster =
    /** @class */
    function (_super) {
      __extends(MarkerCluster, _super);

      function MarkerCluster(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;

        _this._map = _map;
        return _this;
      }

      MarkerCluster.prototype.getId = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", {
          "sync": true
        }, arguments);
      };

      MarkerCluster.prototype.addMarker = function (marker) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "addMarker", {
          "sync": true
        }, arguments);
      };

      MarkerCluster.prototype.addMarkers = function (markers) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "addMarkers", {
          "sync": true
        }, arguments);
      };

      MarkerCluster.prototype.remove = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments);
      };
      /**
       * Returns the map instance.
       * @return {GoogleMap}
       */


      MarkerCluster.prototype.getMap = function () {
        return this._map;
      };

      return MarkerCluster;
    }(BaseClass);

    var Polygon =
    /** @class */
    function (_super) {
      __extends(Polygon, _super);

      function Polygon(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;

        _this._map = _map;
        return _this;
      }

      Polygon.prototype.getId = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", {
          "sync": true
        }, arguments);
      };
      /**
       * Returns the map instance.
       * @return {GoogleMap}
       */


      Polygon.prototype.getMap = function () {
        return this._map;
      };

      Polygon.prototype.setPoints = function (points) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setPoints", {
          "sync": true
        }, arguments);
      };
      /**
       * Returns an instance of the BaseArrayClass.
       * You can modify the points.
       * @return {BaseArrayClass<ILatLng>}
       */


      Polygon.prototype.getPoints = function () {
        return new BaseArrayClass(this._objectInstance.getPoints());
      };

      Polygon.prototype.setHoles = function (holes) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setHoles", {
          "sync": true
        }, arguments);
      };
      /**
       * Returns an instance of the BaseArrayClass.
       * You can modify the holes.
       * @return {BaseArrayClass<ILatLng[]>}
       */


      Polygon.prototype.getHoles = function () {
        var holes = this._objectInstance.getPoints();

        var results = new BaseArrayClass();
        holes.forEach(function (hole) {
          results.push(hole);
        });
        return results;
      };

      Polygon.prototype.setFillColor = function (fillColor) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setFillColor", {
          "sync": true
        }, arguments);
      };

      Polygon.prototype.getFillColor = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getFillColor", {
          "sync": true
        }, arguments);
      };

      Polygon.prototype.setStrokeColor = function (strokeColor) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setStrokeColor", {
          "sync": true
        }, arguments);
      };

      Polygon.prototype.getStrokeColor = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getStrokeColor", {
          "sync": true
        }, arguments);
      };

      Polygon.prototype.setClickable = function (clickable) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setClickable", {
          "sync": true
        }, arguments);
      };

      Polygon.prototype.getClickable = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getClickable", {
          "sync": true
        }, arguments);
      };

      Polygon.prototype.setVisible = function (visible) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", {
          "sync": true
        }, arguments);
      };

      Polygon.prototype.getVisible = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getVisible", {
          "sync": true
        }, arguments);
      };

      Polygon.prototype.setZIndex = function (zIndex) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setZIndex", {
          "sync": true
        }, arguments);
      };

      Polygon.prototype.getZIndex = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getZIndex", {
          "sync": true
        }, arguments);
      };

      Polygon.prototype.remove = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments);
      };

      Polygon.prototype.setStrokeWidth = function (strokeWidth) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setStrokeWidth", {
          "sync": true
        }, arguments);
      };

      Polygon.prototype.getStrokeWidth = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getStrokeWidth", {
          "sync": true
        }, arguments);
      };

      Polygon.prototype.setGeodesic = function (geodesic) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setGeodesic", {
          "sync": true
        }, arguments);
      };

      Polygon.prototype.getGeodesic = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getGeodesic", {
          "sync": true
        }, arguments);
      };

      return Polygon;
    }(BaseClass);

    var Polyline =
    /** @class */
    function (_super) {
      __extends(Polyline, _super);

      function Polyline(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;

        _this._map = _map;
        return _this;
      }

      Polyline.prototype.getId = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", {
          "sync": true
        }, arguments);
      };
      /**
       * Returns the map instance.
       * @return {GoogleMap}
       */


      Polyline.prototype.getMap = function () {
        return this._map;
      };

      Polyline.prototype.setPoints = function (points) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setPoints", {
          "sync": true
        }, arguments);
      };
      /**
       * Returns an instance of the BaseArrayClass
       * You can modify the points.
       * @return {BaseArrayClass<ILatLng>}
       */


      Polyline.prototype.getPoints = function () {
        return new BaseArrayClass(this._objectInstance.getPoints());
      };

      Polyline.prototype.setGeoDesic = function (geoDesic) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setGeoDesic", {
          "sync": true
        }, arguments);
      };

      Polyline.prototype.getGeodesic = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getGeodesic", {
          "sync": true
        }, arguments);
      };

      Polyline.prototype.setVisible = function (visible) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", {
          "sync": true
        }, arguments);
      };

      Polyline.prototype.getVisible = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getVisible", {
          "sync": true
        }, arguments);
      };

      Polyline.prototype.setClickable = function (clickable) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setClickable", {
          "sync": true
        }, arguments);
      };

      Polyline.prototype.getClickable = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getClickable", {
          "sync": true
        }, arguments);
      };

      Polyline.prototype.setStrokeColor = function (strokeColor) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setStrokeColor", {
          "sync": true
        }, arguments);
      };

      Polyline.prototype.getStrokeColor = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getStrokeColor", {
          "sync": true
        }, arguments);
      };

      Polyline.prototype.setStrokeWidth = function (strokeWidth) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setStrokeWidth", {
          "sync": true
        }, arguments);
      };

      Polyline.prototype.getStrokeWidth = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getStrokeWidth", {
          "sync": true
        }, arguments);
      };

      Polyline.prototype.setZIndex = function (index) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setZIndex", {
          "sync": true
        }, arguments);
      };

      Polyline.prototype.getZIndex = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getZIndex", {
          "sync": true
        }, arguments);
      };

      Polyline.prototype.remove = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments);
      };

      return Polyline;
    }(BaseClass);

    var TileOverlay =
    /** @class */
    function (_super) {
      __extends(TileOverlay, _super);

      function TileOverlay(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;

        _this._map = _map;
        return _this;
      }

      TileOverlay.prototype.getId = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", {
          "sync": true
        }, arguments);
      };
      /**
       * Returns the map instance.
       * @return {GoogleMap}
       */


      TileOverlay.prototype.getMap = function () {
        return this._map;
      };

      TileOverlay.prototype.setFadeIn = function (fadeIn) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setFadeIn", {
          "sync": true
        }, arguments);
      };

      TileOverlay.prototype.getFadeIn = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getFadeIn", {
          "sync": true
        }, arguments);
      };

      TileOverlay.prototype.setZIndex = function (zIndex) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setZIndex", {
          "sync": true
        }, arguments);
      };

      TileOverlay.prototype.getZIndex = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getZIndex", {
          "sync": true
        }, arguments);
      };

      TileOverlay.prototype.setOpacity = function (opacity) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setOpacity", {
          "sync": true
        }, arguments);
      };

      TileOverlay.prototype.getOpacity = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getOpacity", {
          "sync": true
        }, arguments);
      };

      TileOverlay.prototype.setVisible = function (visible) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", {
          "sync": true
        }, arguments);
      };

      TileOverlay.prototype.getVisible = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getVisible", {
          "sync": true
        }, arguments);
      };

      TileOverlay.prototype.getTileSize = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getTileSize", {
          "sync": true
        }, arguments);
      };

      TileOverlay.prototype.remove = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments);
      };

      return TileOverlay;
    }(BaseClass);

    var KmlOverlay =
    /** @class */
    function (_super) {
      __extends(KmlOverlay, _super);

      function KmlOverlay(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;

        _this._map = _map;
        Object.defineProperty(self, 'camera', {
          value: _this._objectInstance.camera,
          writable: false
        });
        Object.defineProperty(self, 'kmlData', {
          value: _this._objectInstance.kmlData,
          writable: false
        });
        return _this;
      }

      KmlOverlay.prototype.getDefaultViewport = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getDefaultViewport", {
          "sync": true
        }, arguments);
      };

      KmlOverlay.prototype.getId = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getId", {
          "sync": true
        }, arguments);
      };
      /**
       * Returns the map instance.
       * @return {GoogleMap}
       */


      KmlOverlay.prototype.getMap = function () {
        return this._map;
      };

      KmlOverlay.prototype.setVisible = function (visible) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setVisible", {
          "sync": true
        }, arguments);
      };

      KmlOverlay.prototype.getVisible = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getVisible", {
          "sync": true
        }, arguments);
      };

      KmlOverlay.prototype.setClickable = function (clickable) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "setClickable", {
          "sync": true
        }, arguments);
      };

      KmlOverlay.prototype.getClickable = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "getClickable", {
          "sync": true
        }, arguments);
      };

      KmlOverlay.prototype.remove = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaInstance"])(this, "remove", {}, arguments);
      };

      return KmlOverlay;
    }(BaseClass); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2dvb2dsZS1tYXBzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkFnNklBO0FBaDZJQSxPQUFPLHNHQU9MLGlCQUFpQixFQUNqQixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLElBQU0sNkJBQTZCLEdBQWE7SUFDOUMsY0FBYztJQUNkLDJCQUEyQjtJQUMzQixHQUFHO0NBQ0osQ0FBQzs7SUF1QkEsZ0JBQVksR0FBVyxFQUFFLEdBQVc7UUFDbEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBRUQsdUJBQU0sR0FBTixVQUFPLEtBQWM7UUFDbkIsT0FBTyxJQUFJLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzFELENBQUM7SUFFRCx5QkFBUSxHQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ25DLENBQUM7SUFFRCwyQkFBVSxHQUFWLFVBQVcsU0FBa0I7UUFDM0IsU0FBUyxHQUFHLFNBQVMsSUFBSSxDQUFDLENBQUM7UUFFM0IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekUsQ0FBQztpQkF4REg7Ozs7SUEwRUUsc0JBQVksTUFBa0I7UUFDNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFPRCwrQkFBUTtJQVVSLGlDQUFVLGFBQUMsU0FBa0I7SUFTN0IsNkJBQU0sYUFBQyxNQUFlO0lBUXRCLCtCQUFRLGFBQUMsTUFBZTtJQVN4QixnQ0FBUzswQkFsRFcsbUNBQVM7Ozs7OzswQkFDVCxtQ0FBUzs7Ozs7OzBCQUNULDhCQUFJOzs7Ozs7dUJBdkUxQjs7OztJQTQ1QkUsdUJBQVksU0FBdUIsRUFBRSxTQUF1QixFQUFFLE9BQWdCLEVBQUUsUUFBaUIsRUFBRSxRQUFpQixFQUFFLFNBQWtCO1FBQ3RJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2xJLENBQUM7SUFPRCxnQ0FBUTtJQVVSLGtDQUFVLGFBQUMsU0FBa0I7SUFVN0IsZ0NBQVEsYUFBQyxNQUFlOzBCQTlESixvQ0FBUzs7Ozs7OzBCQU1ULG9DQUFTOzs7Ozs7MEJBS1Qsa0NBQU87Ozs7OzswQkFLUCxtQ0FBUTs7Ozs7OzBCQUtSLG1DQUFROzs7Ozs7MEJBS1Isb0NBQVM7Ozs7OzswQkFLVCwrQkFBSTs7Ozs7O3dCQTE1QjFCOzs7QUErN0JBOztHQUVHO0FBQ0gsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQUc7SUFDOUIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsT0FBTyxFQUFFLFNBQVM7Q0FDbkIsQ0FBQztBQW1GRjs7O0dBR0c7QUFDSCxNQUFNLENBQUMsSUFBTSxlQUFlLEdBQUc7SUFDN0IsU0FBUyxFQUFFLFdBQVc7SUFDdEIsU0FBUyxFQUFFLFdBQVc7SUFDdEIsY0FBYyxFQUFFLGdCQUFnQjtJQUNoQyxTQUFTLEVBQUUsV0FBVztJQUN0QixpQkFBaUIsRUFBRSxtQkFBbUI7SUFDdEMsd0JBQXdCLEVBQUUsMEJBQTBCO0lBQ3BELHVCQUF1QixFQUFFLHlCQUF5QjtJQUNsRCxzQkFBc0IsRUFBRSx3QkFBd0I7SUFDaEQsaUJBQWlCLEVBQUUsbUJBQW1CO0lBQ3RDLFdBQVcsRUFBRSxhQUFhO0lBQzFCLGVBQWUsRUFBRSxpQkFBaUI7SUFDbEMsYUFBYSxFQUFFLGVBQWU7SUFDOUIsYUFBYSxFQUFFLGVBQWU7SUFDOUIsY0FBYyxFQUFFLGdCQUFnQjtJQUNoQyxZQUFZLEVBQUUsY0FBYztJQUM1QixvQkFBb0IsRUFBRSxxQkFBcUI7SUFDM0MsVUFBVSxFQUFFLFlBQVk7SUFDeEIsZUFBZSxFQUFFLGlCQUFpQjtJQUNsQyxVQUFVLEVBQUUsWUFBWTtJQUN4QixTQUFTLEVBQUUsV0FBVztJQUN0QixZQUFZLEVBQUUsY0FBYztJQUM1QixXQUFXLEVBQUUsYUFBYTtJQUMxQixpQkFBaUIsRUFBRSxtQkFBbUI7SUFDdEMsZUFBZSxFQUFFLGlCQUFpQjtJQUNsQyxRQUFRLEVBQUUsVUFBVTtJQUNwQixjQUFjLEVBQUUsZ0JBQWdCO0lBQ2hDLFlBQVksRUFBRSxjQUFjO0lBQzVCLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLGNBQWMsRUFBRSxnQkFBZ0I7SUFDaEMsc0JBQXNCLEVBQUUsd0JBQXdCO0lBQ2hELHdCQUF3QixFQUFFLDBCQUEwQjtJQUNwRCxjQUFjLEVBQUUsZ0JBQWdCO0NBQ2pDLENBQUM7QUFFRjs7R0FFRztBQUNILE1BQU0sQ0FBQyxJQUFNLG1CQUFtQixHQUFHO0lBQ2pDLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLElBQUksRUFBRSxNQUFNO0NBQ2IsQ0FBQztBQUVGOztHQUVHO0FBQ0gsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUc7SUFDakMsTUFBTSxFQUFFLGlCQUFpQjtJQUN6QixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFNBQVMsRUFBRSxvQkFBb0I7SUFDL0IsTUFBTSxFQUFFLGlCQUFpQjtJQUN6QixPQUFPLEVBQUUsa0JBQWtCO0lBQzNCLElBQUksRUFBRSxlQUFlO0NBQ3RCLENBQUM7O0lBdUg4Qiw4QkFBaUI7Ozs7SUFFL0M7Ozs7O09BS0c7SUFDSSxpQkFBTSxHQUFiLFVBQWMsT0FBZ0QsRUFBRSxPQUEwQjtRQUN4RixJQUFJLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQzNGLElBQUksT0FBTyxZQUFZLFdBQVcsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUU7b0JBQ3pCLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztpQkFDakQ7Z0JBQ0QsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxFQUFFO29CQUN6QyxNQUFNLElBQUksS0FBSyxDQUFJLE9BQU8sQ0FBQyxPQUFPLHdCQUFtQixPQUFPLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyx3QkFBcUIsQ0FBQyxDQUFDO2lCQUNsSDthQUNGO2lCQUFNLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO2dCQUN0QyxPQUFPLEdBQUcsT0FBMkIsQ0FBQztnQkFDdEMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUNoQjtZQUNELElBQU0sU0FBUyxHQUFjLElBQUksU0FBUyxDQUFDLE9BQStCLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDckYsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDL0IsT0FBTyxTQUFTLENBQUM7U0FDbEI7YUFBTTtZQUNMLElBQU0sWUFBWSxHQUFhO2dCQUM3QixjQUFjO2FBQ2YsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO2dCQUNuQixZQUFZLENBQUMsSUFBSSxDQUFDLHFEQUFxRCxDQUFDLENBQUM7Z0JBQ3pFLFlBQVksQ0FBQyxJQUFJLENBQUMsb0NBQW9DLENBQUMsQ0FBQzthQUN6RDtpQkFBTTtnQkFDTCxZQUFZLENBQUMsSUFBSSxDQUFDLDhEQUE4RCxDQUFDLENBQUM7YUFDbkY7WUFFRCxJQUFJLE9BQU8sWUFBWSxXQUFXLEVBQUU7Z0JBQ2xDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDM0Q7aUJBQU0sSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7Z0JBQ3RDLElBQUksT0FBTyxHQUFVLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUMxRSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUN0QixPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFDLE1BQU07d0JBQzlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUMvQyxDQUFDLENBQUMsQ0FBQztpQkFDSjtnQkFDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDdEMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDOUQ7YUFDRjtZQUVELE1BQU0sSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILDJCQUFNLEdBQU4sVUFBTyxPQUFnRCxFQUFFLE9BQTBCO1FBQ2pGLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLDZDQUE2QyxDQUFDLENBQUM7UUFDM0UsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSx5QkFBYyxHQUFyQixVQUFzQixPQUE2QixFQUFFLE9BQTJCO1FBQzlFLElBQUksaUJBQWlCLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDM0YsSUFBSSxPQUFPLFlBQVksV0FBVyxFQUFFO2dCQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRTtvQkFDekIsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO2lCQUNqRDtnQkFDRCxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLEVBQUU7b0JBQ3pDLE1BQU0sSUFBSSxLQUFLLENBQUksT0FBTyxDQUFDLE9BQU8sd0JBQW1CLE9BQU8sQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLHdCQUFxQixDQUFDLENBQUM7aUJBQ2xIO2FBQ0Y7WUFDRCxPQUFPLElBQUksa0JBQWtCLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ2pEO2FBQU07WUFDTCxJQUFNLFlBQVksR0FBYTtnQkFDN0IsY0FBYzthQUNmLENBQUM7WUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtnQkFDbkIsWUFBWSxDQUFDLElBQUksQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO2dCQUN6RSxZQUFZLENBQUMsSUFBSSxDQUFDLG9DQUFvQyxDQUFDLENBQUM7YUFDekQ7aUJBQU07Z0JBQ0wsWUFBWSxDQUFDLElBQUksQ0FBQyw4REFBOEQsQ0FBQyxDQUFDO2FBQ25GO1lBRUQsSUFBSSxPQUFPLFlBQVksV0FBVyxFQUFFO2dCQUNsQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQzNEO2lCQUFNLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO2dCQUN0QyxJQUFJLE9BQU8sR0FBVSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDMUUsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDdEIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQyxNQUFNO3dCQUM5QixPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDL0MsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7Z0JBQ0QsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ3RDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7aUJBQzlEO2FBQ0Y7WUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7Ozs7Ozs7OztxQkFqekNIO0VBd3NDZ0MsaUJBQWlCO1NBQXBDLFVBQVU7QUE0R3ZCLElBQU0sbUJBQW1CLEdBQUcsVUFBQyxPQUFvQixFQUFFLE9BQWU7SUFDaEUsSUFBTSxRQUFRLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUQsUUFBUSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7SUFDN0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQzdCLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUNyQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDN0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzlCLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztJQUMzQixRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDOUIsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQzdCLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUM1QixRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDL0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBRS9CLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUNwQyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7SUFDeEMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUM7QUFFRixJQUFNLGlDQUFpQyxHQUFHLFVBQUMsZUFBb0IsRUFBRSxJQUFXO0lBQzFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFlBQVksVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRTtRQUNyRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLG9CQUFvQixFQUFFO1lBQy9GLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQztTQUM5QjthQUFNLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNuRSxJQUFNLFNBQVMsR0FBUSxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN2RSxJQUFJLE9BQU8sR0FBVyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNaLElBQU0sUUFBUSxHQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxJQUFNLFVBQVEsR0FBVyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzFDLElBQU0sYUFBYSxHQUFrQixlQUFnQyxDQUFDO2dCQUN0RSxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUN2RCxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFVBQVEsQ0FBQyxHQUFHLE9BQU8sQ0FBQztnQkFDOUQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsU0FBUyxFQUFFO29CQUN6QyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFVBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDM0QsT0FBTyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFVBQVEsQ0FBQyxDQUFDO2dCQUM3RCxDQUFDLENBQUMsQ0FBQzthQUNKO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO1NBQ2pDO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDbEc7S0FDRjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDOztJQWVBLG1CQUFZLFdBQWlCO1FBQzNCLElBQUksaUJBQWlCLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDM0YsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDaEIsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQzthQUN4RDtZQUNELElBQUksQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDO1NBQ3BDO2FBQU07WUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLG1HQUFtRyxDQUFDLENBQUM7U0FDdEg7SUFDSCxDQUFDO0lBUUQsb0NBQWdCLGFBQUMsU0FBaUI7OztzREFBbUI7Z0JBQ25ELE9BQU8sSUFBSSxVQUFVLENBQUMsVUFBQyxRQUFRO29CQUM3QixLQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRTt3QkFBQyxjQUFjOzZCQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7NEJBQWQseUJBQWM7O3dCQUM5RCxJQUFNLE9BQU8sR0FBRyxpQ0FBaUMsQ0FBQyxJQUFJLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ3pGLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3pCLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2FBQ0o7OztJQXlCRCx3Q0FBb0IsYUFBQyxTQUFpQjs7O3NEQUFnQjtnQkFDcEQsT0FBTyxVQUFVLENBQU0sVUFBQyxPQUFPO29CQUM3QixLQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUU7d0JBQUMsY0FBYzs2QkFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjOzRCQUFkLHlCQUFjOzt3QkFDakQsSUFBTSxPQUFPLEdBQUcsaUNBQWlDLENBQUMsSUFBSSxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUN6RixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ25CLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2FBQ0o7OztJQVNELG1DQUFlLGFBQUMsU0FBaUI7OztzREFBZ0I7Z0JBQy9DLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0ZBQWtGLENBQUMsQ0FBQztnQkFDakcsT0FBTyxLQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDN0M7OztJQU9ELHVCQUFHLGFBQUMsR0FBVztJQVdmLHVCQUFHLGFBQUMsR0FBVyxFQUFFLEtBQVUsRUFBRSxRQUFrQjtJQVcvQywwQkFBTSxhQUFDLEdBQVcsRUFBRSxNQUFXLEVBQUUsU0FBa0IsRUFBRSxRQUFrQjtJQVN2RSxzQkFBRSxhQUFDLFNBQWlCOzs7c0RBQW1CO2dCQUNyQyxPQUFPLElBQUksVUFBVSxDQUFDLFVBQUMsUUFBUTtvQkFDN0IsS0FBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFO3dCQUFDLGNBQWM7NkJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYzs0QkFBZCx5QkFBYzs7d0JBQ2hELElBQU0sT0FBTyxHQUFHLGlDQUFpQyxDQUFDLElBQUksQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDekYsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDekIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDSjs7O0lBdUJELHVCQUFHLGFBQUMsU0FBaUI7OztzREFBZ0I7Z0JBQ25DLE9BQU8sVUFBVSxDQUFNLFVBQUMsT0FBTztvQkFDN0IsS0FBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFO3dCQUFDLGNBQWM7NkJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYzs0QkFBZCx5QkFBYzs7d0JBQ2pELElBQU0sT0FBTyxHQUFHLGlDQUFpQyxDQUFDLElBQUksQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDekYsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNuQixDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFRRCxvQ0FBZ0I7SUFRaEIseUJBQUs7SUFTTCwyQkFBTyxhQUFDLFNBQWlCO1FBQUUsb0JBQW9CO2FBQXBCLFVBQW9CLEVBQXBCLHFCQUFvQixFQUFwQixJQUFvQjtZQUFwQixtQ0FBb0I7Ozs7SUFRL0MsMkJBQU87SUF3QlAsdUNBQW1CLGFBQUMsU0FBa0IsRUFBRSxRQUF5QztJQVNqRix1QkFBRyxhQUFDLFNBQWtCLEVBQUUsUUFBeUM7Ozs7O29CQS9qRG5FOztTQTIyQ2EsU0FBUzs7SUFpT2lCLGtDQUFTO0lBRTlDLHdCQUFZLFdBQXVCO1FBQW5DLGlCQVFDO1FBUEMsSUFBSSxXQUFXLFlBQVksVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLGNBQWMsRUFBRTtZQUNoRSxRQUFBLGtCQUFNLFdBQVcsQ0FBQyxTQUFDO1NBQ3BCO2FBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3JDLFFBQUEsa0JBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFDO1NBQ2pFO2FBQU07WUFDTCxRQUFBLGtCQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBQztTQUN4RDs7SUFDSCxDQUFDO0lBT0QsOEJBQUssYUFBQyxRQUFrQjtJQVF4QixnQ0FBTyxhQUFDLEVBQXdDO0lBR2hEOzs7O09BSUc7SUFDSCxxQ0FBWSxHQUFaLFVBQWEsRUFBZ0Q7UUFBN0QsaUJBSUM7UUFIQyxPQUFPLFVBQVUsQ0FBTyxVQUFDLE9BQU87WUFDOUIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQVNELDRCQUFHLGFBQUMsRUFBc0M7SUFJMUM7Ozs7OztPQU1HO0lBQ0gsaUNBQVEsR0FBUixVQUFTLEVBQStEO1FBQXhFLGlCQUlDO1FBSEMsT0FBTyxVQUFVLENBQVEsVUFBQyxPQUFPO1lBQy9CLEtBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGtDQUFTLEdBQVQsVUFBVSxFQUErRDtRQUF6RSxpQkFJQztRQUhDLE9BQU8sVUFBVSxDQUFRLFVBQUMsT0FBTztZQUMvQixLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBUUQsK0JBQU0sYUFBQyxFQUEwQztJQUlqRDs7Ozs7T0FLRztJQUNILG9DQUFXLEdBQVgsVUFBWSxFQUE2RDtRQUF6RSxpQkFJQztRQUhDLE9BQU8sVUFBVSxDQUFRLFVBQUMsT0FBTztZQUMvQixLQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBT0QsaUNBQVE7SUFVUiw4QkFBSyxhQUFDLEtBQWE7SUFRbkIsa0NBQVM7SUFVVCxnQ0FBTyxhQUFDLE9BQVU7SUFRbEIsZ0NBQU87SUFPUCw2QkFBSTtJQVdKLGlDQUFRLGFBQUMsS0FBYSxFQUFFLE9BQVUsRUFBRSxRQUFrQjtJQVN0RCw0QkFBRyxhQUFDLFFBQWtCO0lBVXRCLDZCQUFJLGFBQUMsT0FBVSxFQUFFLFFBQWtCO0lBU25DLGlDQUFRLGFBQUMsS0FBYSxFQUFFLFFBQWtCO0lBUzFDLDhCQUFLLGFBQUMsS0FBYSxFQUFFLE9BQVUsRUFBRSxRQUFrQjs7Ozt5QkE3d0RyRDtFQTRrRHVDLFNBQVM7U0FBbkMsY0FBYzs7SUF5TUMsMEJBQVM7SUFJbkMsZ0JBQVksSUFBZSxFQUFFLGVBQW9CO1FBQWpELFlBQ0Usa0JBQU0sZUFBZSxDQUFDLFNBRXZCO1FBREMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7O0lBQ25CLENBQUM7SUFPRCxzQkFBSztJQUlMOzs7T0FHRztJQUNILHVCQUFNLEdBQU47UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQU9ELDBCQUFTLGFBQUMsTUFBZTtJQVF6QiwwQkFBUztJQVNULDBCQUFTO0lBU1QsMEJBQVMsYUFBQyxNQUFjO0lBUXhCLDZCQUFZLGFBQUMsS0FBYTtJQVExQiw2QkFBWTtJQVNaLCtCQUFjLGFBQUMsV0FBbUI7SUFRbEMsK0JBQWM7SUFTZCwrQkFBYyxhQUFDLFdBQW1CO0lBUWxDLCtCQUFjO0lBU2QsNkJBQVksYUFBQyxTQUFrQjtJQVEvQiw2QkFBWTtJQVNaLDBCQUFTLGFBQUMsTUFBYztJQVF4QiwwQkFBUztJQVFULHVCQUFNO0lBV04sMEJBQVM7SUFTVCwyQkFBVSxhQUFDLE9BQWdCO0lBUTNCLDJCQUFVO2lCQXQ4RFo7RUFxeEQ0QixTQUFTOzs7OztJQWlNbkM7O09BRUc7SUFDSSxrQkFBTSxHQUFiLFVBQWMsVUFBc0I7UUFDbEMsSUFBSSxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUM1RixNQUFNLElBQUksS0FBSyxDQUFDLG1HQUFtRyxDQUFDLENBQUM7U0FDdEg7UUFDRCxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksMEJBQWMsR0FBckI7UUFDRSxJQUFJLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQzVGLE1BQU0sSUFBSSxLQUFLLENBQUMsbUdBQW1HLENBQUMsQ0FBQztTQUN0SDtRQUNELE9BQU8sVUFBVSxDQUFNLFVBQUMsT0FBTztZQUM3QixVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxVQUFDLElBQVksSUFBSyxPQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBYixDQUFhLENBQUMsQ0FBQztRQUNyRixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSSw4QkFBa0IsR0FBekIsVUFBMEIsS0FBYTtRQUNyQyxJQUFJLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQzVGLE1BQU0sSUFBSSxLQUFLLENBQUMsbUdBQW1HLENBQUMsQ0FBQztTQUN0SDtRQUNELFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVEOzs7T0FHRztJQUNILG9DQUFjLEdBQWQ7UUFDRSxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSw2RUFBNkUsQ0FBQyxDQUFDO1FBQzNHLE9BQU8sV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7O09BR0c7SUFDSCx3Q0FBa0IsR0FBbEIsVUFBbUIsS0FBYTtRQUM5QixPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxpRkFBaUYsQ0FBQyxDQUFDO1FBQy9HLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7OztzQkF4Z0VIOztTQW85RGEsV0FBVzs7OztJQWtFdEI7OztPQUdHO0lBQ0gsMEJBQU8sR0FBUCxVQUFRLE9BQXdCO1FBQzlCLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLG1FQUFtRSxDQUFDLENBQUM7UUFDakcsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksZ0JBQU8sR0FBZCxVQUFlLE9BQXdCO1FBRXJDLElBQUksaUJBQWlCLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxLQUFLLEVBQUU7WUFDNUYsTUFBTSxJQUFJLEtBQUssQ0FBQyxtR0FBbUcsQ0FBQyxDQUFDO1NBQ3RIO1FBQ0QsSUFBSSxPQUFPLENBQUMsT0FBTyxZQUFZLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDcEUsT0FBTyxDQUFDLFFBQVEsWUFBWSxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDdEUsNEJBQTRCO1lBQzVCLHFCQUFxQjtZQUNyQixlQUFlO1lBQ2YscUJBQXFCO1lBQ3JCLG9CQUFvQjtZQUNwQixNQUFNO1lBQ04sS0FBSztZQUNMLDRCQUE0QjtZQUM1QixPQUFPLFVBQVUsQ0FBbUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtnQkFDbEUsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQUMsUUFBYTtvQkFDN0QsSUFBSSxRQUFRLEVBQUU7d0JBQ1osT0FBTyxDQUFDLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7cUJBQ3ZDO3lCQUFNO3dCQUNMLE1BQU0sRUFBRSxDQUFDO3FCQUNWO2dCQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsNEJBQTRCO1lBQzVCLHFCQUFxQjtZQUNyQiw0QkFBNEI7WUFDNUIsS0FBSztZQUNMLDRCQUE0QjtZQUM1QixPQUFPLFVBQVUsQ0FBbUIsVUFBQyxPQUFPLEVBQUUsTUFBTTtnQkFDbEQsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQUMsT0FBeUI7b0JBQ3pFLElBQUksT0FBTyxFQUFFO3dCQUNYLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztxQkFDbEI7eUJBQU07d0JBQ0wsTUFBTSxFQUFFLENBQUM7cUJBQ1Y7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Ozs7bUJBNWtFSDs7U0FvaEVhLFFBQVE7Ozs7SUF1RW5COzs7T0FHRztJQUNJLDZCQUFhLEdBQXBCLFVBQXFCLE9BQTJCO1FBQzlDLElBQUksaUJBQWlCLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxLQUFLLEVBQUU7WUFDNUYsTUFBTSxJQUFJLEtBQUssQ0FBQyxtR0FBbUcsQ0FBQyxDQUFDO1NBQ3RIO1FBQ0QsT0FBTyxVQUFVLENBQWEsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUM1QyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2pGLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNEOzs7T0FHRztJQUNJLDZCQUFhLEdBQXBCO1FBQ0UsSUFBSSxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUM1RixNQUFNLElBQUksS0FBSyxDQUFDLG1HQUFtRyxDQUFDLENBQUM7U0FDdEg7UUFDRCxPQUFPLFVBQVUsQ0FBVSxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ3pDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN4RSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OzBCQWxuRUg7O1NBeWxFYSxlQUFlOzs7O0lBdUMxQjs7Ozs7T0FLRztJQUNJLG1CQUFVLEdBQWpCLFVBQWtCLE9BQWUsRUFBRSxTQUFrQjtRQUNuRCxJQUFJLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQzVGLE1BQU0sSUFBSSxLQUFLLENBQUMsbUdBQW1HLENBQUMsQ0FBQztTQUN0SDtRQUNELE9BQU8sVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksbUJBQVUsR0FBakIsVUFBa0IsSUFBeUM7UUFDekQsSUFBSSxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUM1RixNQUFNLElBQUksS0FBSyxDQUFDLG1HQUFtRyxDQUFDLENBQUM7U0FDdEg7UUFDRCxPQUFPLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRDs7O09BR0c7SUFDSCw2QkFBVSxHQUFWLFVBQVcsT0FBZSxFQUFFLFNBQWtCO1FBQzVDLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLHNFQUFzRSxDQUFDLENBQUM7UUFDcEcsT0FBTyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsNkJBQVUsR0FBVixVQUFXLElBQXlDO1FBQ2xELE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLHNFQUFzRSxDQUFDLENBQUM7UUFDcEcsT0FBTyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O21CQXpxRUg7O1NBOG5FYSxRQUFROzs7O0lBeURuQjs7Ozs7T0FLRztJQUNJLHFCQUFnQixHQUF2QixVQUF3QixRQUFpQixFQUFFLElBQWU7UUFDeEQsSUFBSSxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUM1RixNQUFNLElBQUksS0FBSyxDQUFDLG1HQUFtRyxDQUFDLENBQUM7U0FDdEg7UUFDRCxPQUFPLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxxQkFBZ0IsR0FBdkIsVUFBd0IsUUFBaUIsRUFBRSxJQUFlO1FBQ3hELElBQUksaUJBQWlCLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxLQUFLLEVBQUU7WUFDNUYsTUFBTSxJQUFJLEtBQUssQ0FBQyxtR0FBbUcsQ0FBQyxDQUFDO1NBQ3RIO1FBQ0QsT0FBTyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0UsQ0FBQzs7Ozs7ZUEvc0VIOztTQXFyRWEsSUFBSTs7OztJQXdDZjs7Ozs7T0FLRztJQUNJLGdDQUFzQixHQUE3QixVQUE4QixJQUFhLEVBQUUsRUFBVztRQUN0RCxJQUFJLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQzVGLE1BQU0sSUFBSSxLQUFLLENBQUMsbUdBQW1HLENBQUMsQ0FBQztTQUN0SDtRQUNELE9BQU8sVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSx1QkFBYSxHQUFwQixVQUFxQixJQUFhLEVBQUUsUUFBZ0IsRUFBRSxPQUFlO1FBQ25FLElBQUksaUJBQWlCLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxLQUFLLEVBQUU7WUFDNUYsTUFBTSxJQUFJLEtBQUssQ0FBQyxtR0FBbUcsQ0FBQyxDQUFDO1NBQ3RIO1FBQ0QsT0FBTyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksNkJBQW1CLEdBQTFCLFVBQTJCLEVBQVcsRUFBRSxRQUFnQixFQUFFLE9BQWU7UUFDdkUsSUFBSSxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUM1RixNQUFNLElBQUksS0FBSyxDQUFDLG1HQUFtRyxDQUFDLENBQUM7U0FDdEg7UUFDRCxPQUFPLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSx1QkFBYSxHQUFwQixVQUFxQixJQUF5QztRQUM1RCxJQUFJLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQzVGLE1BQU0sSUFBSSxLQUFLLENBQUMsbUdBQW1HLENBQUMsQ0FBQztTQUN0SDtRQUNELE9BQU8sVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0kscUJBQVcsR0FBbEIsVUFBbUIsSUFBeUM7UUFDMUQsSUFBSSxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUM1RixNQUFNLElBQUksS0FBSyxDQUFDLG1HQUFtRyxDQUFDLENBQUM7U0FDdEg7UUFDRCxPQUFPLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDJCQUFpQixHQUF4QixVQUF5QixJQUF5QztRQUNoRSxJQUFJLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQzVGLE1BQU0sSUFBSSxLQUFLLENBQUMsbUdBQW1HLENBQUMsQ0FBQztTQUN0SDtRQUNELE9BQU8sVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksd0JBQWMsR0FBckIsVUFBc0IsSUFBYSxFQUFFLEVBQVc7UUFDOUMsSUFBSSxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUM1RixNQUFNLElBQUksS0FBSyxDQUFDLG1HQUFtRyxDQUFDLENBQUM7U0FDdEg7UUFDRCxPQUFPLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLHFCQUFXLEdBQWxCLFVBQW1CLElBQWEsRUFBRSxFQUFXLEVBQUUsUUFBZ0I7UUFDN0QsSUFBSSxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUM1RixNQUFNLElBQUksS0FBSyxDQUFDLG1HQUFtRyxDQUFDLENBQUM7U0FDdEg7UUFDRCxPQUFPLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRDs7O09BR0c7SUFDSCwwQ0FBc0IsR0FBdEIsVUFBdUIsSUFBYSxFQUFFLEVBQVc7UUFDL0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsbUZBQW1GLENBQUMsQ0FBQztRQUNqSCxPQUFPLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVEOzs7T0FHRztJQUNILGlDQUFhLEdBQWIsVUFBYyxJQUFhLEVBQUUsUUFBZ0IsRUFBRSxPQUFlO1FBQzVELE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLDBFQUEwRSxDQUFDLENBQUM7UUFDeEcsT0FBTyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVEOzs7T0FHRztJQUNILHVDQUFtQixHQUFuQixVQUFvQixFQUFXLEVBQUUsUUFBZ0IsRUFBRSxPQUFlO1FBQ2hFLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLGdGQUFnRixDQUFDLENBQUM7UUFDOUcsT0FBTyxTQUFTLENBQUMsbUJBQW1CLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsaUNBQWEsR0FBYixVQUFjLElBQXlDO1FBQ3JELE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLDBFQUEwRSxDQUFDLENBQUM7UUFDeEcsT0FBTyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7O09BR0c7SUFDSCwrQkFBVyxHQUFYLFVBQVksSUFBeUM7UUFDbkQsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsd0VBQXdFLENBQUMsQ0FBQztRQUN0RyxPQUFPLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7T0FHRztJQUNILHFDQUFpQixHQUFqQixVQUFrQixJQUF5QztRQUN6RCxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSw4RUFBOEUsQ0FBQyxDQUFDO1FBQzVHLE9BQU8sU0FBUyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxrQ0FBYyxHQUFkLFVBQWUsSUFBYSxFQUFFLEVBQVc7UUFDdkMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsMkVBQTJFLENBQUMsQ0FBQztRQUN6RyxPQUFPLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7O09BR0c7SUFDSCwrQkFBVyxHQUFYLFVBQVksSUFBYSxFQUFFLEVBQVcsRUFBRSxRQUFnQjtRQUN0RCxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSx3RUFBd0UsQ0FBQyxDQUFDO1FBQ3RHLE9BQU8sU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7O29CQTM0RUg7O1NBMnRFYSxTQUFTOztJQTBMa0Isc0NBQVM7SUFDL0MsNEJBQVksT0FBNkIsRUFBRSxPQUEyQjtRQUF0RSxpQkFnRkM7UUE5RUMsSUFBSSxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUMzRixzQkFBc0I7WUFDdEIsb0JBQW9CO1lBQ3BCLHNCQUFzQjtZQUN0QixJQUFJLE9BQU8sWUFBWSxXQUFXLEVBQUU7Z0JBQ2xDLElBQUksT0FBTyxDQUFDLFdBQVcsSUFBSSxHQUFHLElBQUksT0FBTyxDQUFDLFlBQVksSUFBSSxHQUFHLEVBQUU7b0JBQzdELFFBQUEsa0JBQU0sVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFNBQUM7aUJBQ3hFO3FCQUFNO29CQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyw2Q0FBNkMsQ0FBQyxDQUFDO2lCQUNsRjthQUNGO2lCQUFNLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO2dCQUV0QyxRQUFBLGtCQUFNLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBUSxVQUFDLE9BQU8sRUFBRSxNQUFNO29CQUNwRixJQUFJLEtBQWEsQ0FBQztvQkFDbEIsSUFBSSxDQUFTLENBQUM7b0JBQ2QsS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFDVixJQUFNLEtBQUssR0FBUSxXQUFXLENBQUM7d0JBQzdCLElBQUksT0FBYyxDQUFDO3dCQUNuQixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLDZCQUE2QixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs0QkFDekQsT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7NEJBQzVGLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0NBQ3RCLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUMsTUFBTTtvQ0FDOUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7Z0NBQy9DLENBQUMsQ0FBQyxDQUFDOzZCQUNKOzRCQUNELElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLElBQUksR0FBRyxFQUFFO2dDQUN6RyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0NBQ3JCLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2dDQUMvQixPQUFPOzZCQUNSO3lCQUVGO3dCQUNELElBQUksS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFOzRCQUNoQixPQUFPO3lCQUNSO3dCQUNELGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDckIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzt3QkFDOUIsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxHQUFHLEVBQUU7NEJBQ3JHLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxPQUFPLEdBQUcsOENBQThDLENBQUMsQ0FBQyxDQUFDO3lCQUN6Rzs2QkFBTTs0QkFDTCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dDQUN0QixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsc0JBQXNCLEdBQUcsT0FBTyxHQUFHLGdEQUFnRCxDQUFDLENBQUMsQ0FBQzs2QkFDeEc7aUNBQU07Z0NBQ0wsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLDZCQUE2QixHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDOzZCQUNsRTt5QkFDRjtvQkFDSCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ1YsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsU0FBQzthQUVmO1NBQ0Y7YUFBTTtZQUVMLElBQU0sWUFBWSxHQUFhO2dCQUM3QixjQUFjO2FBQ2YsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO2dCQUNuQixZQUFZLENBQUMsSUFBSSxDQUFDLHFEQUFxRCxDQUFDLENBQUM7Z0JBQ3pFLFlBQVksQ0FBQyxJQUFJLENBQUMsb0NBQW9DLENBQUMsQ0FBQzthQUN6RDtpQkFBTTtnQkFDTCxZQUFZLENBQUMsSUFBSSxDQUFDLDhEQUE4RCxDQUFDLENBQUM7YUFDbkY7WUFFRCxJQUFJLE9BQU8sWUFBWSxXQUFXLEVBQUU7Z0JBQ2xDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDM0Q7aUJBQU0sSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7Z0JBQ3RDLElBQUksT0FBTyxHQUFVLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUMxRSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUN0QixPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFDLE1BQU07d0JBQzlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUMvQyxDQUFDLENBQUMsQ0FBQztpQkFDSjtnQkFDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDdEMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDOUQ7YUFDRjtZQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3hDOztJQUVILENBQUM7SUFPRCxtQ0FBTSxhQUFDLEdBQXlCO0lBTWhDLHdDQUFXLGFBQUMsY0FBb0Q7SUFPaEUsc0RBQXlCLGFBQUMsYUFBc0I7SUFPaEQsc0RBQXlCO0lBT3pCLG1EQUFzQixhQUFDLGFBQXNCO0lBTzdDLG1EQUFzQjtJQU90QixrREFBcUIsYUFBQyxhQUFzQjtJQU81QyxrREFBcUI7SUFPckIsaURBQW9CLGFBQUMsYUFBc0I7SUFPM0MsaURBQW9CO0lBT3BCLHFDQUFRO0lBT1Isd0NBQVc7SUFPWCxzQ0FBUztJQU9ULHdDQUFXO0lBT1gsbUNBQU07Ozs2QkE5a0ZSO0VBcTVFd0MsU0FBUztTQUFwQyxrQkFBa0I7O0lBd01BLDZCQUFTO0lBQ3RDLG1CQUFZLE9BQTZCLEVBQUUsT0FBMEIsRUFBRSxTQUFrQjtRQUF6RixpQkFxRkM7UUFuRkMsSUFBSSxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUMzRixrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixJQUFJLE9BQU8sWUFBWSxXQUFXLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFO29CQUN6QixNQUFNLElBQUksS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7aUJBQ2pEO2dCQUNELElBQUksT0FBTyxDQUFDLFdBQVcsSUFBSSxHQUFHLElBQUksT0FBTyxDQUFDLFlBQVksSUFBSSxHQUFHLEVBQUU7b0JBQzdELFFBQUEsa0JBQU0sVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFNBQUM7aUJBQzVEO3FCQUFNO29CQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyw2Q0FBNkMsQ0FBQyxDQUFDO2lCQUNsRjthQUNGO2lCQUFNLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO2dCQUV0QyxRQUFBLGtCQUFNLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBUSxVQUFDLE9BQU8sRUFBRSxNQUFNO29CQUN4RSxJQUFJLEtBQWEsQ0FBQztvQkFDbEIsSUFBSSxDQUFTLENBQUM7b0JBQ2QsS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFDVixJQUFNLEtBQUssR0FBUSxXQUFXLENBQUM7d0JBQzdCLElBQUksT0FBYyxDQUFDO3dCQUNuQixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLDZCQUE2QixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs0QkFDekQsT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7NEJBQzVGLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0NBQ3RCLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUMsTUFBTTtvQ0FDOUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7Z0NBQy9DLENBQUMsQ0FBQyxDQUFDOzZCQUNKOzRCQUNELElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLElBQUksR0FBRyxFQUFFO2dDQUN6RyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0NBQ3JCLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2dDQUMvQixPQUFPOzZCQUNSO3lCQUVGO3dCQUNELElBQUksS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFOzRCQUNoQixPQUFPO3lCQUNSO3dCQUNELGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDckIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzt3QkFDOUIsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxHQUFHLEVBQUU7NEJBQ3JHLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxPQUFPLEdBQUcsOENBQThDLENBQUMsQ0FBQyxDQUFDO3lCQUN6Rzs2QkFBTTs0QkFDTCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dDQUN0QixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsc0JBQXNCLEdBQUcsT0FBTyxHQUFHLGdEQUFnRCxDQUFDLENBQUMsQ0FBQzs2QkFDeEc7aUNBQU07Z0NBQ0wsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLDZCQUE2QixHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDOzZCQUNsRTt5QkFDRjtvQkFDSCxDQUFDLEVBQUUsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDMUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsU0FBQzthQUVmO2lCQUFNLElBQUksT0FBTyxLQUFLLElBQUksSUFBSSxPQUFPLEVBQUU7Z0JBQ3RDLFFBQUEsa0JBQU0sVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLFNBQUM7YUFDekQ7U0FDRjthQUFNO1lBRUwsSUFBTSxZQUFZLEdBQWE7Z0JBQzdCLGNBQWM7YUFDZixDQUFDO1lBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7Z0JBQ25CLFlBQVksQ0FBQyxJQUFJLENBQUMscURBQXFELENBQUMsQ0FBQztnQkFDekUsWUFBWSxDQUFDLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO2FBQ3pEO2lCQUFNO2dCQUNMLFlBQVksQ0FBQyxJQUFJLENBQUMsOERBQThELENBQUMsQ0FBQzthQUNuRjtZQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXJDLElBQUksT0FBTyxZQUFZLFdBQVcsRUFBRTtnQkFDbEMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUMzRDtpQkFBTSxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtnQkFDdEMsSUFBSSxPQUFPLEdBQVUsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQzFFLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3RCLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUMsTUFBTTt3QkFDOUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQy9DLENBQUMsQ0FBQyxDQUFDO2lCQUNKO2dCQUNELElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUN0QyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2lCQUM5RDthQUNGO1NBRUY7O0lBQ0gsQ0FBQztJQU9ELDBCQUFNLGFBQUMsT0FBOEI7OztzREFBUTtnQkFDM0MsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDWixLQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUM5QixPQUFPO2lCQUNSO2dCQUNELElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO29CQUMvQixDQUFDLFVBQVUsQ0FBTSxVQUFDLE9BQU8sRUFBRSxNQUFNO3dCQUMvQixJQUFJLENBQUMsRUFBRSxPQUFjLENBQUM7d0JBQ3RCLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsNkJBQTZCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOzRCQUN6RCxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQzs0QkFDNUYsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQ0FDdEIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQyxNQUFNO29DQUM5QixPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztnQ0FDL0MsQ0FBQyxDQUFDLENBQUM7NkJBQ0o7NEJBQ0QsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsSUFBSSxHQUFHLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksSUFBSSxHQUFHLEVBQUU7Z0NBQ3pHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFnQixDQUFDLENBQUM7Z0NBQ25DLE9BQU87NkJBQ1I7eUJBRUY7d0JBQ0QsTUFBTSxDQUFDLGlCQUFpQixHQUFHLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQztvQkFDcEQsQ0FBQyxDQUFDLENBQUM7eUJBQ0YsSUFBSSxDQUFDLFVBQUMsT0FBb0I7d0JBQ3pCLEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN2QyxDQUFDLENBQUMsQ0FBQztpQkFDSjtxQkFBTTtvQkFDTCxJQUFJLE9BQU8sWUFBWSxXQUFXO3dCQUM5QixDQUFDLE9BQU8sQ0FBQyxZQUFZO3dCQUNyQixPQUFPLENBQUMsV0FBVyxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQUMsWUFBWSxJQUFJLEdBQUcsRUFBRTt3QkFDN0QsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQ3RDO3lCQUFNO3dCQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyw2Q0FBNkMsQ0FBQyxDQUFDO3FCQUNsRjtpQkFDRjthQUNGOzs7SUFPRCwwQkFBTTtJQVNOLGdDQUFZLGFBQUMsU0FBMkI7SUFReEMsaUNBQWEsYUFBQyxjQUFtQztJQVNqRCx1Q0FBbUI7SUFTbkIsd0NBQW9CO0lBU3BCLDhCQUFVLGFBQUMsY0FBbUM7SUFTOUMsb0NBQWdCO0lBU2hCLHFDQUFpQjtJQVNqQixxQ0FBaUI7SUFTakIsbUNBQWU7SUFTZixpQ0FBYTtJQVNiLG9DQUFnQjtJQVNoQixpQ0FBYTtJQVNiLG1DQUFlLGFBQUMsTUFBMkI7SUFRM0MsaUNBQWEsYUFBQyxTQUFpQjtJQVEvQixpQ0FBYSxhQUFDLFNBQWlCO0lBTy9CLG9DQUFnQixhQUFDLE9BQVk7SUFTN0IseUJBQUssYUFBQyxDQUFTLEVBQUUsQ0FBUztJQU8xQixvQ0FBZ0I7SUFTaEIsaUNBQWEsYUFBQyxPQUEyQjtJQVd6QyxnQ0FBWSxhQUFDLFdBQW9CO0lBUWpDLDBCQUFNO0lBaUJOLHlCQUFLOzs7c0RBQWlCO2dCQUNwQixJQUFJLEtBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUU7b0JBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFNBQWlCO3dCQUMzRCxLQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQzt3QkFDeEMsT0FBTyxLQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUMxQyxDQUFDLENBQUMsQ0FBQztpQkFDSjtnQkFDRCxPQUFPLFVBQVUsQ0FBTSxVQUFDLE9BQU87b0JBQzdCLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLGNBQU0sT0FBQSxPQUFPLEVBQUUsRUFBVCxDQUFTLENBQUMsQ0FBQztnQkFDOUMsQ0FBQyxDQUFDLENBQUM7YUFDSjs7O0lBT0QscUNBQWlCLGFBQUMsTUFBZTtJQVNqQyxxQ0FBaUIsYUFBQyxLQUFlO0lBT2pDLHdDQUFvQixhQUFDLE9BQWdCO0lBUXJDLDhDQUEwQixhQUFDLE9BQWdCO0lBTzNDLHNDQUFrQjtJQVNsQixvQ0FBZ0IsYUFBQyxPQUFnQjtJQVFqQyxxQ0FBaUIsYUFBQyxPQUFnQjtJQVFsQyxxQ0FBaUIsYUFBQyxPQUFnQjtJQVFsQyx5Q0FBcUIsYUFBQyxPQUFnQjtJQVF0Qyw4QkFBVSxhQUFDLE9BQWdCO0lBVzNCLDhCQUFVLGFBQUMsR0FBVyxFQUFFLEtBQWMsRUFBRSxNQUFlLEVBQUUsSUFBYTtJQU90RSw4QkFBVSxhQUFDLE9BQXlCO0lBU3BDLDZCQUFTLGFBQUMsT0FBc0I7OztzREFBeUI7Z0JBQ3ZELE9BQU8sVUFBVSxDQUFTLFVBQUMsT0FBTyxFQUFFLE1BQU07b0JBQ3hDLEtBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFDLE1BQVc7d0JBQ2xELElBQUksTUFBTSxFQUFFOzRCQUNWLElBQU0sV0FBUyxHQUFXLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzs0QkFDekMsSUFBTSxTQUFPLEdBQVcsSUFBSSxNQUFNLENBQUMsS0FBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDOzRCQUNqRCxLQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVMsQ0FBQyxHQUFHLFNBQU8sQ0FBQzs0QkFDM0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFTLEdBQUcsU0FBUyxFQUFFO2dDQUNoQyxJQUFJLEtBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUU7b0NBQ3pCLEtBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO29DQUN4QyxTQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7aUNBQ25COzRCQUNILENBQUMsQ0FBQyxDQUFDOzRCQUNILE9BQU8sQ0FBQyxTQUFPLENBQUMsQ0FBQzt5QkFDbEI7NkJBQU07NEJBQ0wsTUFBTSxFQUFFLENBQUM7eUJBQ1Y7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDSjs7O0lBUUQsaUNBQWEsYUFBQyxPQUFzQjs7O3NEQUFVO2dCQUM1QyxJQUFNLE1BQU0sR0FBUSxLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDNUQsSUFBTSxTQUFTLEdBQVcsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN6QyxJQUFNLE9BQU8sR0FBVyxJQUFJLE1BQU0sQ0FBQyxLQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ2pELEtBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsT0FBTyxDQUFDO2dCQUMzQyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxTQUFTLEVBQUU7b0JBQ2hDLElBQUksS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRTt3QkFDekIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUM7d0JBQ3hDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztxQkFDbkI7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxPQUFPLENBQUM7YUFDaEI7OztJQVFELG9DQUFnQixhQUFDLE9BQTZCOzs7c0RBQWdDO2dCQUM1RSxPQUFPLFVBQVUsQ0FBZ0IsVUFBQyxPQUFPLEVBQUUsTUFBTTtvQkFDL0MsS0FBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxhQUFrQjt3QkFDaEUsSUFBSSxhQUFhLEVBQUU7NEJBQ2pCLElBQU0sV0FBUyxHQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs0QkFDeEMsSUFBTSxTQUFPLEdBQUcsSUFBSSxhQUFhLENBQUMsS0FBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDOzRCQUN2RCxLQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVMsQ0FBQyxHQUFHLFNBQU8sQ0FBQzs0QkFDM0MsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0NBQzFCLElBQUksS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRTtvQ0FDekIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFTLENBQUMsR0FBRyxJQUFJLENBQUM7b0NBQ3hDLFNBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQ0FDbkI7NEJBQ0gsQ0FBQyxDQUFDLENBQUM7NEJBQ0gsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxjQUFjLEVBQUUsQ0FBQyxDQUFDOzRCQUNyRCxPQUFPLENBQUMsU0FBTyxDQUFDLENBQUM7eUJBQ2xCOzZCQUFNOzRCQUNMLE1BQU0sRUFBRSxDQUFDO3lCQUNWO29CQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2FBQ0o7OztJQVFELHdDQUFvQixhQUFDLE9BQTZCOzs7c0RBQWlCO2dCQUNqRSxJQUFNLGFBQWEsR0FBUSxLQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMxRSxJQUFNLFNBQVMsR0FBVyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2hELElBQU0sT0FBTyxHQUFrQixJQUFJLGFBQWEsQ0FBQyxLQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7Z0JBQ3RFLEtBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsT0FBTyxDQUFDO2dCQUMzQyxhQUFhLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxTQUFTLEVBQUU7b0JBQ3ZDLElBQUksS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRTt3QkFDekIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUM7d0JBQ3hDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztxQkFDbkI7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxjQUFjLEVBQUUsQ0FBQyxDQUFDO2dCQUNyRCxPQUFPLE9BQU8sQ0FBQzthQUNoQjs7O0lBUUQsNkJBQVMsYUFBQyxPQUFzQjs7O3NEQUF5QjtnQkFDdkQsT0FBTyxVQUFVLENBQVMsVUFBQyxPQUFPLEVBQUUsTUFBTTtvQkFDeEMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQUMsTUFBVzt3QkFDbEQsSUFBSSxNQUFNLEVBQUU7NEJBQ1YsSUFBTSxXQUFTLEdBQVcsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDOzRCQUN6QyxJQUFNLFNBQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7NEJBQ3pDLEtBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBUyxDQUFDLEdBQUcsU0FBTyxDQUFDOzRCQUMzQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVMsR0FBRyxTQUFTLEVBQUU7Z0NBQ2hDLElBQUksS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRTtvQ0FDekIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFTLENBQUMsR0FBRyxJQUFJLENBQUM7b0NBQ3hDLFNBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQ0FDbkI7NEJBQ0gsQ0FBQyxDQUFDLENBQUM7NEJBQ0gsT0FBTyxDQUFDLFNBQU8sQ0FBQyxDQUFDO3lCQUNsQjs2QkFBTTs0QkFDTCxNQUFNLEVBQUUsQ0FBQzt5QkFDVjtvQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFRRCxpQ0FBYSxhQUFDLE9BQXNCOzs7c0RBQVU7Z0JBQzVDLElBQU0sTUFBTSxHQUFRLEtBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM1RCxJQUFNLFNBQVMsR0FBVyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3pDLElBQU0sT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLEtBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDekMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUM7Z0JBQzNDLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLFNBQVMsRUFBRTtvQkFDaEMsSUFBSSxLQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFO3dCQUN6QixLQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQzt3QkFDeEMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO3FCQUNuQjtnQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDSCxPQUFPLE9BQU8sQ0FBQzthQUNoQjs7O0lBT0QsOEJBQVUsYUFBQyxPQUF1Qjs7O3NEQUEwQjtnQkFDMUQsT0FBTyxVQUFVLENBQVUsVUFBQyxPQUFPLEVBQUUsTUFBTTtvQkFDekMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFVBQUMsT0FBWTt3QkFDcEQsSUFBSSxPQUFPLEVBQUU7NEJBQ1gsSUFBTSxXQUFTLEdBQVcsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDOzRCQUMxQyxJQUFNLFNBQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxLQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7NEJBQzNDLEtBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBUyxDQUFDLEdBQUcsU0FBTyxDQUFDOzRCQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVMsR0FBRyxTQUFTLEVBQUU7Z0NBQ2pDLElBQUksS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRTtvQ0FDekIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFTLENBQUMsR0FBRyxJQUFJLENBQUM7b0NBQ3hDLFNBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQ0FDbkI7NEJBQ0gsQ0FBQyxDQUFDLENBQUM7NEJBQ0gsT0FBTyxDQUFDLFNBQU8sQ0FBQyxDQUFDO3lCQUNsQjs2QkFBTTs0QkFDTCxNQUFNLEVBQUUsQ0FBQzt5QkFDVjtvQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFRRCxrQ0FBYyxhQUFDLE9BQXVCOzs7c0RBQVc7Z0JBQy9DLElBQU0sT0FBTyxHQUFRLEtBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5RCxJQUFNLFNBQVMsR0FBVyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzFDLElBQU0sT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLEtBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDM0MsS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUM7Z0JBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLFNBQVMsRUFBRTtvQkFDakMsSUFBSSxLQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFO3dCQUN6QixLQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQzt3QkFDeEMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO3FCQUNuQjtnQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDSCxPQUFPLE9BQU8sQ0FBQzthQUNoQjs7O0lBUUQsK0JBQVcsYUFBQyxPQUF3Qjs7O3NEQUEyQjtnQkFDN0QsT0FBTyxVQUFVLENBQVcsVUFBQyxPQUFPLEVBQUUsTUFBTTtvQkFDMUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFVBQUMsUUFBYTt3QkFDdEQsSUFBSSxRQUFRLEVBQUU7NEJBQ1osSUFBTSxXQUFTLEdBQVcsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDOzRCQUMzQyxJQUFNLFNBQU8sR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7NEJBQzdDLEtBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBUyxDQUFDLEdBQUcsU0FBTyxDQUFDOzRCQUMzQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVMsR0FBRyxTQUFTLEVBQUU7Z0NBQ2xDLElBQUksS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRTtvQ0FDekIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFTLENBQUMsR0FBRyxJQUFJLENBQUM7b0NBQ3hDLFNBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQ0FDbkI7NEJBQ0gsQ0FBQyxDQUFDLENBQUM7NEJBQ0gsT0FBTyxDQUFDLFNBQU8sQ0FBQyxDQUFDO3lCQUNsQjs2QkFBTTs0QkFDTCxNQUFNLEVBQUUsQ0FBQzt5QkFDVjtvQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFRRCxtQ0FBZSxhQUFDLE9BQXdCOzs7c0RBQVk7Z0JBQ2xELElBQU0sUUFBUSxHQUFRLEtBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoRSxJQUFNLFNBQVMsR0FBVyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzNDLElBQU0sT0FBTyxHQUFHLElBQUksUUFBUSxDQUFDLEtBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDN0MsS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUM7Z0JBQzNDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLFNBQVMsRUFBRTtvQkFDbEMsSUFBSSxLQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFO3dCQUN6QixLQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQzt3QkFDeEMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO3FCQUNuQjtnQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDSCxPQUFPLE9BQU8sQ0FBQzthQUNoQjs7O0lBUUQsa0NBQWMsYUFBQyxPQUEyQjs7O3NEQUE4QjtnQkFDdEUsT0FBTyxVQUFVLENBQWMsVUFBQyxPQUFPLEVBQUUsTUFBTTtvQkFDN0MsS0FBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFVBQUMsV0FBZ0I7d0JBQzVELElBQUksV0FBVyxFQUFFOzRCQUNmLElBQU0sV0FBUyxHQUFXLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs0QkFDOUMsSUFBTSxTQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsS0FBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDOzRCQUNuRCxLQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVMsQ0FBQyxHQUFHLFNBQU8sQ0FBQzs0QkFDM0MsV0FBVyxDQUFDLEdBQUcsQ0FBQyxXQUFTLEdBQUcsU0FBUyxFQUFFO2dDQUNyQyxJQUFJLEtBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUU7b0NBQ3pCLEtBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO29DQUN4QyxTQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7aUNBQ25COzRCQUNILENBQUMsQ0FBQyxDQUFDOzRCQUNILE9BQU8sQ0FBQyxTQUFPLENBQUMsQ0FBQzt5QkFDbEI7NkJBQU07NEJBQ0wsTUFBTSxFQUFFLENBQUM7eUJBQ1Y7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDSjs7O0lBUUQsc0NBQWtCLGFBQUMsT0FBMkI7OztzREFBZTtnQkFDM0QsSUFBTSxXQUFXLEdBQVEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3RFLElBQU0sU0FBUyxHQUFXLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDOUMsSUFBTSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsS0FBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUNuRCxLQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztnQkFDM0MsV0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsU0FBUyxFQUFFO29CQUNyQyxJQUFJLEtBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUU7d0JBQ3pCLEtBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO3dCQUN4QyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7cUJBQ25CO2dCQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNILE9BQU8sT0FBTyxDQUFDO2FBQ2hCOzs7SUFRRCxvQ0FBZ0IsYUFBQyxPQUE2Qjs7O3NEQUFnQztnQkFDNUUsT0FBTyxVQUFVLENBQWdCLFVBQUMsT0FBTyxFQUFFLE1BQU07b0JBQy9DLEtBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsYUFBa0I7d0JBQ2hFLElBQUksYUFBYSxFQUFFOzRCQUNqQixJQUFNLFdBQVMsR0FBVyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ2hELElBQU0sU0FBTyxHQUFHLElBQUksYUFBYSxDQUFDLEtBQUksRUFBRSxhQUFhLENBQUMsQ0FBQzs0QkFDdkQsS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFTLENBQUMsR0FBRyxTQUFPLENBQUM7NEJBQzNDLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBUyxHQUFHLFNBQVMsRUFBRTtnQ0FDdkMsSUFBSSxLQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFO29DQUN6QixLQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQztvQ0FDeEMsU0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO2lDQUNuQjs0QkFDSCxDQUFDLENBQUMsQ0FBQzs0QkFDSCxPQUFPLENBQUMsU0FBTyxDQUFDLENBQUM7eUJBQ2xCOzZCQUFNOzRCQUNMLE1BQU0sRUFBRSxDQUFDO3lCQUNWO29CQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2FBQ0o7OztJQVFELHdDQUFvQixhQUFDLE9BQTZCOzs7c0RBQWlCO2dCQUNqRSxJQUFNLGFBQWEsR0FBUSxLQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMxRSxJQUFNLFNBQVMsR0FBVyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2hELElBQU0sT0FBTyxHQUFHLElBQUksYUFBYSxDQUFDLEtBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztnQkFDdkQsS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUM7Z0JBQzNDLGFBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLFNBQVMsRUFBRTtvQkFDdkMsSUFBSSxLQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFO3dCQUN6QixLQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQzt3QkFDeEMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO3FCQUNuQjtnQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDSCxPQUFPLE9BQU8sQ0FBQzthQUNoQjs7O0lBUUQsaUNBQWEsYUFBQyxPQUEwQjs7O3NEQUF1QjtnQkFDN0QsT0FBTyxVQUFVLENBQWEsVUFBQyxPQUFPLEVBQUUsTUFBTTtvQkFDNUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLFVBQUMsVUFBZTt3QkFDMUQsSUFBSSxVQUFVLEVBQUU7NEJBQ2QsSUFBTSxXQUFTLEdBQVcsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDOzRCQUM3QyxJQUFNLFNBQU8sR0FBRyxJQUFJLFVBQVUsQ0FBQyxLQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7NEJBQ2pELEtBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBUyxDQUFDLEdBQUcsU0FBTyxDQUFDOzRCQUMzQyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVMsR0FBRyxTQUFTLEVBQUU7Z0NBQ3BDLElBQUksS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRTtvQ0FDekIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFTLENBQUMsR0FBRyxJQUFJLENBQUM7b0NBQ3hDLFNBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQ0FDbkI7NEJBQ0gsQ0FBQyxDQUFDLENBQUM7NEJBQ0gsT0FBTyxDQUFDLFNBQU8sQ0FBQyxDQUFDO3lCQUNsQjs2QkFBTTs0QkFDTCxNQUFNLEVBQUUsQ0FBQzt5QkFDVjtvQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFRRCw2QkFBUyxhQUFDLE9BQTBCOzs7b0JBcjRHdEM7RUE2bEYrQixTQUFTO1NBQTNCLFNBQVM7O0lBK3lCYSxpQ0FBUztJQUkxQyx1QkFBWSxJQUFlLEVBQUUsZUFBb0I7UUFBakQsWUFDRSxrQkFBTSxlQUFlLENBQUMsU0FFdkI7UUFEQyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs7SUFDbkIsQ0FBQztJQU9ELDZCQUFLO0lBSUw7OztPQUdHO0lBQ0gsOEJBQU0sR0FBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBT0QsaUNBQVMsYUFBQyxNQUFpQjtJQVEzQixrQ0FBVSxhQUFDLE9BQWU7SUFPMUIsa0NBQVU7SUFTVixnQ0FBUSxhQUFDLFFBQWdCO0lBT3pCLGtDQUFVLGFBQUMsT0FBZTtJQVExQixrQ0FBVTtJQVNWLG9DQUFZLGFBQUMsU0FBa0I7SUFRL0Isb0NBQVk7SUFTWixrQ0FBVSxhQUFDLE9BQWdCO0lBUTNCLGtDQUFVO0lBU1YsaUNBQVMsYUFBQyxLQUFhO0lBUXZCLGlDQUFTO0lBUVQsOEJBQU07d0JBN2dIUjtFQTQ0R21DLFNBQVM7OztJQWlKUixrQ0FBUztJQUUzQztlQUNFLGtCQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBT0QsMkNBQWtCLGFBQUMsS0FBYTtJQVNoQyxtQ0FBVSxhQUFDLE9BQXlCLEVBQUUsVUFBZ0I7SUFRdEQsNkJBQUksYUFBQyxNQUFXO0lBT2hCLDhCQUFLOzs7Ozt5QkFoa0hQO0VBNmhIb0MsU0FBUztTQUFoQyxjQUFjOztJQTJDQywwQkFBUztJQUluQyxnQkFBWSxJQUFlLEVBQUUsZUFBb0I7UUFBakQsWUFDRSxrQkFBTSxlQUFlLENBQUMsU0FFdkI7UUFEQyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs7SUFDbkIsQ0FBQztJQU9ELHNCQUFLO0lBSUw7OztPQUdHO0lBQ0gsdUJBQU0sR0FBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBT0QsNEJBQVcsYUFBQyxNQUFlO0lBUzNCLDRCQUFXO0lBUVgsK0JBQWM7SUFPZCwrQkFBYztJQVFkLDZCQUFZLGFBQUMsU0FBaUI7SUFROUIsa0NBQWlCLGFBQUMsY0FBdUI7SUFRekMsMkJBQVUsYUFBQyxPQUFnQjtJQU8zQiwwQkFBUztJQVNULHlCQUFRLGFBQUMsS0FBYTtJQVF0Qix5QkFBUTtJQVNSLDJCQUFVLGFBQUMsT0FBZTtJQVExQiwyQkFBVTtJQVNWLDJCQUFVLGFBQUMsS0FBYTtJQVF4QiwyQkFBVTtJQVFWLHVCQUFNO0lBWU4sOEJBQWEsYUFBQyxDQUFTLEVBQUUsQ0FBUztJQVNsQyxvQ0FBbUIsYUFBQyxDQUFTLEVBQUUsQ0FBUztJQVF4QyxrQ0FBaUI7SUFTakIsMEJBQVMsYUFBQyxNQUFjO0lBUXhCLDBCQUFTO0lBU1QsNkJBQVksYUFBQyxTQUFrQjtJQVEvQiw0QkFBVztJQVNYLHdCQUFPLGFBQUMsSUFBYTtJQVNyQix3QkFBTyxhQUFDLElBQWdCO0lBU3hCLDRCQUFXLGFBQUMsUUFBZ0I7SUFRNUIsNEJBQVc7aUJBM3pIYjtFQXdrSDRCLFNBQVM7OztJQTRQRixpQ0FBUztJQUkxQyx1QkFBWSxJQUFlLEVBQUUsZUFBb0I7UUFBakQsWUFDRSxrQkFBTSxlQUFlLENBQUMsU0FFdkI7UUFEQyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs7SUFDbkIsQ0FBQztJQU9ELDZCQUFLO0lBVUwsaUNBQVMsYUFBQyxNQUFxQjtJQVEvQixrQ0FBVSxhQUFDLE9BQXdCO0lBT25DLDhCQUFNO0lBT047OztPQUdHO0lBQ0gsOEJBQU0sR0FBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO3dCQXgzSEg7RUFvMEhtQyxTQUFTOzs7SUEyRGYsMkJBQVM7SUFJcEMsaUJBQVksSUFBZSxFQUFFLGVBQW9CO1FBQWpELFlBQ0Usa0JBQU0sZUFBZSxDQUFDLFNBRXZCO1FBREMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7O0lBQ25CLENBQUM7SUFPRCx1QkFBSztJQUlMOzs7T0FHRztJQUNILHdCQUFNLEdBQU47UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQU9ELDJCQUFTLGFBQUMsTUFBaUI7SUFHM0I7Ozs7T0FJRztJQUNILDJCQUFTLEdBQVQ7UUFDRSxPQUFPLElBQUksY0FBYyxDQUFVLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBT0QsMEJBQVEsYUFBQyxLQUFrQjtJQUczQjs7OztPQUlHO0lBQ0gsMEJBQVEsR0FBUjtRQUNFLElBQU0sS0FBSyxHQUFnQixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzVELElBQU0sT0FBTyxHQUE4QixJQUFJLGNBQWMsRUFBYSxDQUFDO1FBQzNFLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFlO1lBQzVCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBT0QsOEJBQVksYUFBQyxTQUFpQjtJQVE5Qiw4QkFBWTtJQVNaLGdDQUFjLGFBQUMsV0FBbUI7SUFRbEMsZ0NBQWM7SUFTZCw4QkFBWSxhQUFDLFNBQWtCO0lBTy9CLDhCQUFZO0lBU1osNEJBQVUsYUFBQyxPQUFnQjtJQVEzQiw0QkFBVTtJQVNWLDJCQUFTLGFBQUMsTUFBYztJQVF4QiwyQkFBUztJQVFULHdCQUFNO0lBVU4sZ0NBQWMsYUFBQyxXQUFtQjtJQU9sQyxnQ0FBYztJQVNkLDZCQUFXLGFBQUMsUUFBaUI7SUFRN0IsNkJBQVc7a0JBMWpJYjtFQSszSDZCLFNBQVM7OztJQW9NUiw0QkFBUztJQUlyQyxrQkFBWSxJQUFlLEVBQUUsZUFBb0I7UUFBakQsWUFDRSxrQkFBTSxlQUFlLENBQUMsU0FFdkI7UUFEQyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs7SUFDbkIsQ0FBQztJQU9ELHdCQUFLO0lBSUw7OztPQUdHO0lBQ0gseUJBQU0sR0FBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBT0QsNEJBQVMsYUFBQyxNQUFpQjtJQUczQjs7OztPQUlHO0lBQ0gsNEJBQVMsR0FBVDtRQUNFLE9BQU8sSUFBSSxjQUFjLENBQVUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFPRCw4QkFBVyxhQUFDLFFBQWlCO0lBTzdCLDhCQUFXO0lBU1gsNkJBQVUsYUFBQyxPQUFnQjtJQVEzQiw2QkFBVTtJQVNWLCtCQUFZLGFBQUMsU0FBa0I7SUFRL0IsK0JBQVk7SUFTWixpQ0FBYyxhQUFDLFdBQW1CO0lBUWxDLGlDQUFjO0lBU2QsaUNBQWMsYUFBQyxXQUFtQjtJQVFsQyxpQ0FBYztJQVNkLDRCQUFTLGFBQUMsS0FBYTtJQVF2Qiw0QkFBUztJQVFULHlCQUFNO21CQXZ0SVI7RUFta0k4QixTQUFTOzs7SUE4Sk4sK0JBQVM7SUFJeEMscUJBQVksSUFBZSxFQUFFLGVBQW9CO1FBQWpELFlBQ0Usa0JBQU0sZUFBZSxDQUFDLFNBRXZCO1FBREMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7O0lBQ25CLENBQUM7SUFPRCwyQkFBSztJQUlMOzs7T0FHRztJQUNILDRCQUFNLEdBQU47UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQU9ELCtCQUFTLGFBQUMsTUFBZTtJQVF6QiwrQkFBUztJQVNULCtCQUFTLGFBQUMsTUFBYztJQVF4QiwrQkFBUztJQVNULGdDQUFVLGFBQUMsT0FBZTtJQVExQixnQ0FBVTtJQVNWLGdDQUFVLGFBQUMsT0FBZ0I7SUFRM0IsZ0NBQVU7SUFRVixpQ0FBVztJQVFYLDRCQUFNO3NCQTMwSVI7RUFpdUlpQyxTQUFTOzs7SUFvSFYsOEJBQVM7SUFJdkMsb0JBQVksSUFBZSxFQUFFLGVBQW9CO1FBQWpELFlBQ0Usa0JBQU0sZUFBZSxDQUFDLFNBV3ZCO1FBVkMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFakIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFO1lBQ2xDLEtBQUssRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLE1BQU07WUFDbEMsUUFBUSxFQUFFLEtBQUs7U0FDbEIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFO1lBQ25DLEtBQUssRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLE9BQU87WUFDbkMsUUFBUSxFQUFFLEtBQUs7U0FDbEIsQ0FBQyxDQUFDOztJQUNMLENBQUM7SUFNRCx1Q0FBa0I7SUFPbEIsMEJBQUs7SUFFTDs7O09BR0c7SUFDSCwyQkFBTSxHQUFOLGNBQXNCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFPekMsK0JBQVUsYUFBQyxPQUFnQjtJQU8zQiwrQkFBVTtJQU9WLGlDQUFZLGFBQUMsU0FBa0I7SUFPL0IsaUNBQVk7SUFNWiwyQkFBTTtxQkExNUlSO0VBcTFJZ0MsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvcmRvdmFDaGVjayxcbiAgQ29yZG92YUluc3RhbmNlLFxuICBJbnN0YW5jZUNoZWNrLFxuICBJbnN0YW5jZVByb3BlcnR5LFxuICBJb25pY05hdGl2ZVBsdWdpbixcbiAgUGx1Z2luLFxuICBjaGVja0F2YWlsYWJpbGl0eSxcbiAgZ2V0UHJvbWlzZVxufSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5jb25zdCBUQVJHRVRfRUxFTUVOVF9GSU5ESU5HX1FVRVJZUzogc3RyaW5nW10gPSBbXG4gICcuc2hvdy1wYWdlICMnLFxuICAnaW9uLXJvdXRlci1vdXRsZXRbbWFpbl0gIycsXG4gICcjJ1xuXTtcblxuZXhwb3J0IHR5cGUgTWFwVHlwZSA9XG4gICdNQVBfVFlQRV9OT1JNQUwnXG4gIHwgJ01BUF9UWVBFX1JPQURNQVAnXG4gIHwgJ01BUF9UWVBFX1NBVEVMTElURSdcbiAgfCAnTUFQX1RZUEVfSFlCUklEJ1xuICB8ICdNQVBfVFlQRV9URVJSQUlOJ1xuICB8ICdNQVBfVFlQRV9OT05FJztcblxuZXhwb3J0IGludGVyZmFjZSBJTGF0TG5nIHtcbiAgbGF0OiBudW1iZXI7XG4gIGxuZzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIExhdExuZyBpbXBsZW1lbnRzIElMYXRMbmcge1xuXG4gIGxhdDogbnVtYmVyO1xuICBsbmc6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihsYXQ6IG51bWJlciwgbG5nOiBudW1iZXIpIHtcbiAgICB0aGlzLmxhdCA9IGxhdDtcbiAgICB0aGlzLmxuZyA9IGxuZztcbiAgfVxuXG4gIGVxdWFscyhvdGhlcjogSUxhdExuZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmxhdCA9PT0gb3RoZXIubGF0ICYmIHRoaXMubG5nID09PSBvdGhlci5sbmc7XG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmxhdCArICcsJyArIHRoaXMubG5nO1xuICB9XG5cbiAgdG9VcmxWYWx1ZShwcmVjaXNpb24/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHByZWNpc2lvbiA9IHByZWNpc2lvbiB8fCA2O1xuXG4gICAgcmV0dXJuIHRoaXMubGF0LnRvRml4ZWQocHJlY2lzaW9uKSArICcsJyArIHRoaXMubG5nLnRvRml4ZWQocHJlY2lzaW9uKTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElMYXRMbmdCb3VuZHMge1xuICBub3J0aGVhc3Q6IElMYXRMbmc7XG4gIHNvdXRod2VzdDogSUxhdExuZztcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBMYXRMbmdCb3VuZHMgaW1wbGVtZW50cyBJTGF0TG5nQm91bmRzIHtcblxuICBASW5zdGFuY2VQcm9wZXJ0eSgpIG5vcnRoZWFzdDogSUxhdExuZztcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBzb3V0aHdlc3Q6IElMYXRMbmc7XG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgdHlwZTogc3RyaW5nO1xuICBwcml2YXRlIF9vYmplY3RJbnN0YW5jZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHBvaW50cz86IElMYXRMbmdbXSkge1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gbmV3IChHb29nbGVNYXBzLmdldFBsdWdpbigpKS5MYXRMbmdCb3VuZHMocG9pbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0byBzdHJpbmdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyBvZiB0aGUgZm9ybSBcImxhdF9zdyxsbmdfc3csbGF0X25lLGxuZ19uZVwiIGZvciB0aGlzIGJvdW5kcywgd2hlcmUgXCJzd1wiIGNvcnJlc3BvbmRzIHRvIHRoZSBzb3V0aHdlc3QgY29ybmVyIG9mIHRoZSBib3VuZGluZyBib3gsIHdoaWxlIFwibmVcIiBjb3JyZXNwb25kcyB0byB0aGUgbm9ydGhlYXN0IGNvcm5lciBvZiB0aGF0IGJveC5cbiAgICogQHBhcmFtIHByZWNpc2lvbiB7bnVtYmVyfVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICB0b1VybFZhbHVlKHByZWNpc2lvbj86IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dGVuZHMgdGhpcyBib3VuZHMgdG8gY29udGFpbiB0aGUgZ2l2ZW4gcG9pbnQuXG4gICAqIEBwYXJhbSBMYXRMbmcge0lMYXRMbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBleHRlbmQoTGF0TG5nOiBJTGF0TG5nKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBsYXQvbG5nIGlzIGluIHRoaXMgYm91bmRzLlxuICAgKiBAcGFyYW0gTGF0TG5nIHtJTGF0TG5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgY29udGFpbnMoTGF0TG5nOiBJTGF0TG5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIHRoZSBjZW50ZXIgb2YgdGhpcyBMYXRMbmdCb3VuZHNcbiAgICogQHJldHVybiB7TGF0TG5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2VudGVyKCk6IExhdExuZyB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlTWFwQ29udHJvbE9wdGlvbnMge1xuXG4gIC8qKlxuICAgKiBUdXJucyB0aGUgY29tcGFzcyBvbiBvciBvZmYuXG4gICAqL1xuICBjb21wYXNzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVHVybnMgdGhlIG15TG9jYXRpb24gYnV0dG9uIG9uIG9yIG9mZi4gSWYgdHVybnMgb24gdGhpcyBidXR0b24sIHRoZSBhcHBsaWNhdGlvbiBkaXNwbGF5cyBhIHBlcm1pc3Npb24gZGlhbG9nIHRvIG9idGFpbiB0aGUgZ2VvbG9jYXRpb24gZGF0YS5cbiAgICovXG4gIG15TG9jYXRpb25CdXR0b24/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUdXJucyB0aGUgbXlMb2NhdGlvbiBjb250cm9sKGJsdWUgZG90KSBvbiBvciBvZmYuIElmIHR1cm5zIG9uIHRoaXMgY29udHJvbCwgdGhlIGFwcGxpY2F0aW9uIGRpc3BsYXlzIGEgcGVybWlzc2lvbiBkaWFsb2cgdG8gb2J0YWluIHRoZSBnZW9sb2NhdGlvbiBkYXRhLlxuICAgKi9cbiAgbXlMb2NhdGlvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFR1cm5zIHRoZSBpbmRvb3IgcGlja2VyIG9uIG9yIG9mZi5cbiAgICovXG4gIGluZG9vclBpY2tlcj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICoqQW5kcm9pZCoqXG4gICAqIFR1cm5zIHRoZSBtYXAgdG9vbGJhciBvbiBvciBvZmYuXG4gICAqL1xuICBtYXBUb29sYmFyPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogKipBbmRyb2lkKipcbiAgICogVHVybnMgdGhlIHpvb20gY29udHJvbGxlciBvbiBvciBvZmYuXG4gICAqL1xuICB6b29tPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQWNjZXB0IGV4dHJhIHByb3BlcnRpZXMgZm9yIGZ1dHVyZSB1cGRhdGVzXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlTWFwR2VzdHVyZU9wdGlvbnMge1xuXG4gIC8qKlxuICAgKiBTZXQgZmFsc2UgdG8gZGlzYWJsZSB0aGUgc2Nyb2xsIGdlc3R1cmUgKGRlZmF1bHQ6IHRydWUpXG4gICAqL1xuICBzY3JvbGw/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZXQgZmFsc2UgdG8gZGlzYWJsZSB0aGUgdGlsdCBnZXN0dXJlIChkZWZhdWx0OiB0cnVlKVxuICAgKi9cbiAgdGlsdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCBmYWxzZSB0byBkaXNhYmxlIHRoZSB6b29tIGdlc3R1cmUgKGRlZmF1bHQ6IHRydWUpXG4gICAqL1xuICB6b29tPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IGZhbHNlIHRvIGRpc2FibGUgdGhlIHJvdGF0ZSBnZXN0dXJlIChkZWZhdWx0OiB0cnVlKVxuICAgKi9cbiAgcm90YXRlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQWNjZXB0IGV4dHJhIHByb3BlcnRpZXMgZm9yIGZ1dHVyZSB1cGRhdGVzXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlTWFwWm9vbU9wdGlvbnMge1xuICBtaW5ab29tPzogbnVtYmVyO1xuICBtYXhab29tPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdvb2dsZU1hcFBhZGRpbmdPcHRpb25zIHtcbiAgbGVmdD86IG51bWJlcjtcbiAgdG9wPzogbnVtYmVyO1xuICBib3R0b20/OiBudW1iZXI7XG4gIHJpZ2h0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdvb2dsZU1hcFByZWZlcmVuY2VPcHRpb25zIHtcblxuICAvKipcbiAgICogTWluaW11bSBhbmQgbWF4aW11bSB6b29tIGxldmVscyBmb3Igem9vbWluZyBnZXN0dXJlcy5cbiAgICovXG4gIHpvb20/OiBHb29nbGVNYXBab29tT3B0aW9ucztcblxuICAvKipcbiAgICogUGFkZGluZ3Mgb2YgY29udHJvbHMuXG4gICAqL1xuICBwYWRkaW5nPzogR29vZ2xlTWFwUGFkZGluZ09wdGlvbnM7XG5cbiAgLyoqXG4gICAqIFR1cm5zIHRoZSAzRCBidWlsZGluZ3MgbGF5ZXIgb24gb3Igb2ZmLlxuICAgKi9cbiAgYnVpbGRpbmc/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBib3VuZHMgbGltaXQgZm9yIHVzZXIgcGFubmluZyBnZXN0dXJlLlxuICAgKi9cbiAgZ2VzdHVyZUJvdW5kcz86IElMYXRMbmdbXTtcblxuICAvKipcbiAgICogQWNjZXB0IGV4dHJhIHByb3BlcnRpZXMgZm9yIGZ1dHVyZSB1cGRhdGVzXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlTWFwT3B0aW9ucyB7XG5cbiAgLyoqXG4gICAqIG1hcFR5cGUgW29wdGlvbnNdXG4gICAqL1xuICBtYXBUeXBlPzogTWFwVHlwZSB8IHN0cmluZztcblxuICAvKipcbiAgICogY29udHJvbHMgW29wdGlvbnNdXG4gICAqL1xuICBjb250cm9scz86IEdvb2dsZU1hcENvbnRyb2xPcHRpb25zO1xuXG4gIC8qKlxuICAgKiBnZXN0dXJlcyBbb3B0aW9uc11cbiAgICovXG4gIGdlc3R1cmVzPzogR29vZ2xlTWFwR2VzdHVyZU9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIE1hcCBzdHlsZXMgW29wdGlvbnNdXG4gICAqIEByZWYgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvc3R5bGUtcmVmZXJlbmNlXG4gICAqL1xuICBzdHlsZXM/OiBhbnlbXTtcblxuICAvKipcbiAgICogSW5pdGlhbCBjYW1lcmEgcG9zaXRpb24gW29wdGlvbnNdXG4gICAqL1xuICBjYW1lcmE/OiBDYW1lcmFQb3NpdGlvbjxhbnk+O1xuXG4gIC8qKlxuICAgKiBwcmVmZXJlbmNlcyBbb3B0aW9uc11cbiAgICovXG4gIHByZWZlcmVuY2VzPzogR29vZ2xlTWFwUHJlZmVyZW5jZU9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBleHRyYSBwcm9wZXJ0aWVzIGZvciBmdXR1cmUgdXBkYXRlc1xuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVBvc2l0aW9uPFQ+IHtcbiAgLyoqXG4gICAqIFRoZSBjZW50ZXIgbG9jYXRpb24gb2YgdGhlIGNhbWVyYSB2aWV3LlxuICAgKlxuICAgKiBbdXNhZ2UgMV1cbiAgICpcbiAgICogbGV0IGNhbWVyYVBvczogQ2FtZXJhUG9zaXRpb248SUxhdExuZz4gPSB7XG4gICAqICAgdGFyZ2V0OiB7bGF0OiAuLi4sIGxuZzogLi4ufSxcbiAgICogICB6b29tOiAxMFxuICAgKiB9XG4gICAqXG4gICAqIFt1c2FnZSAyXSBUaGUgem9vbSBwcm9wZXJ0eSBpcyBpZ25vcmVkIHdoZW4geW91IHNwZWNpZnkgbXVsdGlwbGUgcG9zaXRpb25cbiAgICpcbiAgICogbGV0IGNhbWVyYVBvczogQ2FtZXJhUG9zaXRpb248SUxhdExuZ1tdPiA9IHtcbiAgICogICB0YXJnZXQ6IFtcbiAgICogICAgICB7bGF0OiAuLi4sIGxuZzogLi4ufSxcbiAgICogICAgICB7bGF0OiAuLi4sIGxuZzogLi4ufSxcbiAgICogICAgICB7bGF0OiAuLi4sIGxuZzogLi4ufVxuICAgKiAgIF1cbiAgICogfVxuICAgKi9cbiAgdGFyZ2V0PzogVDtcbiAgLyoqXG4gICAqIFZpZXcgYW5nbGVcbiAgICovXG4gIHRpbHQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBab29tIGxldmVsXG4gICAqL1xuICB6b29tPzogbnVtYmVyO1xuICAvKipcbiAgICogTWFwIG9yaWVudGF0aW9uXG4gICAqL1xuICBiZWFyaW5nPzogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGR1cmF0aW9uIG9mIGFuaW1hdGlvbiBpbiBtaWxsaXNlY29uZHNcbiAgICovXG4gIGR1cmF0aW9uPzogbnVtYmVyO1xuICAvKipcbiAgICogQ2FtZXJhIHBhZGRpbmcgaW4gcGl4ZWxcbiAgICovXG4gIHBhZGRpbmc/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2lyY2xlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBDZW50ZXIgcG9zaXRpb24gb2YgY2lyY2xlXG4gICAqL1xuICBjZW50ZXI6IElMYXRMbmc7XG5cbiAgLyoqXG4gICAqIFJhZGl1cyBvZiBjaXJjbGUgaW4gbWV0ZXJcbiAgICovXG4gIHJhZGl1czogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHN0cm9rZSBjb2xvclxuICAgKiAocmdiLCByZ2JhLCAjUlJHR0JCLCBcImNvbG9ybmFtZVwiLCAuLi5ldGMpXG4gICAqL1xuICBzdHJva2VDb2xvcj86IHN0cmluZztcblxuICAvKipcbiAgICogU2V0IHRoZSBzdHJva2Ugd2lkdGggaW4gcGl4ZWxcbiAgICovXG4gIHN0cm9rZVdpZHRoPzogbnVtYmVyO1xuICAvKipcbiAgICogU2V0IHRoZSBpbnNpZGUgY29sb3Igb2YgY2lyY2xlXG4gICAqIChyZ2IsIHJnYmEsICNSUkdHQkIsIFwiY29sb3JuYW1lXCIsIC4uLmV0YylcbiAgICovXG4gIGZpbGxDb2xvcj86IHN0cmluZztcblxuICAvKipcbiAgICogU2V0IHRvIHRydWUgdG8gcmVjZWl2ZSB0aGUgQ0lSQ0xFX0NMSUNLIGV2ZW50XG4gICAqIChkZWZhdWx0OiBmYWxzZSlcbiAgICovXG4gIGNsaWNrYWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCB0byBmYWxzZSB0byBoaWRlXG4gICAqL1xuICB2aXNpYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogWi1pbmRleFxuICAgKi9cbiAgekluZGV4PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgb3duIHByb3BlcnRpZXNcbiAgICogWW91IGNhbiBnZXQgdGhlIHByb3BlcnR5IGxhdGVyIHVzaW5nIGBnZXQoKWAgbWV0aG9kLlxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlb2NvZGVyUmVxdWVzdCB7XG5cbiAgLyoqXG4gICAqIFRoZSBhZGRyZXNzIHByb3BlcnR5IG9yIHBvc2l0aW9uIHByb3BlcnR5IGlzIHJlcXVpcmVkLlxuICAgKiBZb3UgY2FuIG5vdCBzcGVjaWZ5IGJvdGggcHJvcGVydHkgYXQgdGhlIHNhbWUgdGltZS5cbiAgICpcbiAgICogW2dlb2NvZGluZyB1c2FnZTFdXG4gICAqIGxldCByZXF1ZXN0OiBHZW9jb2RlclJlcXVlc3QgPSB7XG4gICAqICAgYWRkcmVzczogXCJMb3MgQW5nZWxlcywgQ2FsaWZvcm5pYSwgVVNBXCJcbiAgICogfVxuICAgKlxuICAgKiBbZ2VvY29kaW5nIHVzYWdlMl1cbiAgICogbGV0IHJlcXVlc3Q6IEdlb2NvZGVyUmVxdWVzdCA9IHtcbiAgICogICBhZGRyZXNzOiBbXG4gICAqICAgIFwiTG9zIEFuZ2VsZXMsIENhbGlmb3JuaWEsIFVTQVwiLFxuICAgKiAgICBcIlNhbiBGcmFuY2lzY28sIENhbGlmb3JuaWEsIFVTQVwiLFxuICAgKiAgIF1cbiAgICogfVxuICAgKi9cbiAgYWRkcmVzcz86IHN0cmluZyB8IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKlxuICAgKiBbcmV2ZXJzZS1nZW9jb2RpbmcgdXNhZ2UxXVxuICAgKiBsZXQgcmVxdWVzdDogR2VvY29kZXJSZXF1ZXN0ID0ge1xuICAgKiAgIHBvc2l0aW9uOiB7XCJsYXRcIjogMzcuNDIxNjU1LCBcImxuZ1wiOiAtMTIyLjA4NTYzN31cbiAgICogfVxuICAgKlxuICAgKiBbcmV2ZXJzZS1nZW9jb2RpbmcgdXNhZ2UyXVxuICAgKiBsZXQgcmVxdWVzdDogR2VvY29kZXJSZXF1ZXN0ID0ge1xuICAgKiAgIHBvc2l0aW9uOiBbXG4gICAqICAgIHtcImxhdFwiOiAzNy40MjE2NTUsIFwibG5nXCI6IC0xMjIuMDg1NjM3fSxcbiAgICogICAge1wibGF0XCI6IDM3LjMzMiwgXCJsbmdcIjogLTEyMi4wMzA3ODF9XG4gICAqICAgXVxuICAgKiB9XG4gICAqL1xuICBwb3NpdGlvbj86IElMYXRMbmcgfCBJTGF0TG5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VvY29kZXJSZXN1bHQge1xuICBhZG1pbkFyZWE/OiBzdHJpbmc7XG4gIGNvdW50cnk/OiBzdHJpbmc7XG4gIGNvdW50cnlDb2RlPzogc3RyaW5nO1xuICBleHRyYT86IHtcbiAgICBmZWF0dXJlTmFtZT86IHN0cmluZztcbiAgICBsaW5lcz86IHN0cmluZ1tdO1xuICAgIHBlcm1pc2VzPzogc3RyaW5nO1xuICAgIHBob25lPzogc3RyaW5nO1xuICAgIHVybD86IHN0cmluZ1xuICB9O1xuICBsb2NhbGU/OiBzdHJpbmc7XG4gIGxvY2FsaXR5Pzogc3RyaW5nO1xuICBwb3NpdGlvbj86IElMYXRMbmc7XG4gIHBvc3RhbENvZGU/OiBzdHJpbmc7XG4gIHN1YkFkbWluQXJlYT86IHN0cmluZztcbiAgc3ViTG9jYWxpdHk/OiBzdHJpbmc7XG4gIHN1YlRob3JvdWdoZmFyZT86IHN0cmluZztcbiAgdGhvcm91Z2hmYXJlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdyb3VuZE92ZXJsYXlPcHRpb25zIHtcbiAgLyoqXG4gICAqIFVSTCBvZiBvdmVybGF5XG4gICAqL1xuICB1cmw6IHN0cmluZztcblxuICAvKipcbiAgICogQm91bmRzLCBhcnJheSBvZiBJTGF0TG5nXG4gICAqL1xuICBib3VuZHM6IElMYXRMbmdbXTtcblxuICAvKipcbiAgICogU2V0IHRvIHRydWUgdG8gcmVjZWl2ZSB0aGUgR1JPVU5EX09WRVJMQVlfQ0xJQ0sgZXZlbnRcbiAgICogKGRlZmF1bHQ6IGZhbHNlKVxuICAgKi9cbiAgY2xpY2thYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IHRvIGZhbHNlIHRvIGhpZGVcbiAgICovXG4gIHZpc2libGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBPcGFjaXR5LiBGcm9tIDAuMCB0byAxLjAgLlxuICAgKi9cbiAgb3BhY2l0eT86IG51bWJlcjtcblxuICAvKipcbiAgICogQmVhcmluZ1xuICAgKi9cbiAgYmVhcmluZz86IG51bWJlcjtcblxuICAvKipcbiAgICogWi1pbmRleFxuICAgKi9cbiAgekluZGV4PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgb3duIHByb3BlcnRpZXNcbiAgICogWW91IGNhbiBnZXQgdGhlIHByb3BlcnR5IGxhdGVyIHVzaW5nIGBnZXQoKWAgbWV0aG9kLlxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlckljb24ge1xuICB1cmw/OiBzdHJpbmc7XG4gIHNpemU/OiB7XG4gICAgd2lkdGg/OiBudW1iZXI7XG4gICAgaGVpZ2h0PzogbnVtYmVyO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlck9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIGljb24gaW1hZ2UgdXJsIG9yIHByb3BlcnRpZXMuIEFsc28geW91IGNhbiBzcGVjaWZ5IEhUTUwgQ29sb3IgdmFsdWVzLiBBbHRlcm5hdGl2ZWx5IHlvdSBjYW4gc3BlY2lmeSB0aGUgaW1hZ2UgYXMgQmFzZTY0XG4gICAqL1xuICBpY29uPzogYW55O1xuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgaW5mb1dpbmRvdy5cbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgc25pcHBldCBvZiB0aGUgaW5mb1dpbmRvdy5cbiAgICovXG4gIHNuaXBwZXQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgbWFya2VyLlxuICAgKi9cbiAgcG9zaXRpb246IElMYXRMbmc7XG5cbiAgLyoqXG4gICAqICBTcGVjaWZ5IHRoZSBhbmNob3Igb2YgdGhlIEluZm9XaW5kb3dcbiAgICovXG4gIGluZm9XaW5kb3dBbmNob3I/OiBudW1iZXJbXTtcblxuICAvKipcbiAgICogXHRTcGVjaWZ5IHRoZSBhbmNob3Igb2YgaWNvbiBpbWFnZVxuICAgKi9cbiAgYW5jaG9yPzogbnVtYmVyW107XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIGVuYWJsZSB0byBkcmFnIHRoZSBtYXJrZXIuIChEZWZhdWx0OiBmYWxzZSkgSW1wb3J0YW50ISBEcmFnIHN0YXJ0cyBhZnRlciBsb25nIHByZXNzZWQgb24gdGhlIG1hcmtlci5cbiAgICovXG4gIGRyYWdnYWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byB1c2UgYSBmbGF0IG1hcmtlci4gKERlZmF1bHQ6IGZhbHNlKVxuICAgKi9cbiAgZmxhdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICBTZXQgcm90YXRpb24gYW5nbGUuIChEZWZhdWx0OiAwKVxuICAgKi9cbiAgcm90YXRpb24/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNldCBmYWxzZSBpZiB5b3Ugd2FudCB0byBoaWRlLiAoRGVmYXVsdDogdHJ1ZSlcbiAgICovXG4gIHZpc2libGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IHRoZSBvcHRpb25zIGZvciB0aXRsZS4gVGhpcyBwcm9wZXJ0eSB3b3JrIGZvciBub3JtYWwgSW5mb1dpbmRvdy5cbiAgICovXG4gIHN0eWxlcz86IGFueTtcblxuICAvKipcbiAgICogV2hpY2ggYW5pbWF0aW9uIHRvIHBsYXkgd2hlbiBtYXJrZXIgaXMgYWRkZWQgdG8gYSBtYXAuXG4gICAqL1xuICBhbmltYXRpb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEhpZ2hlciB6SW5kZXggdmFsdWUgb3ZlcmxheXMgd2lsbCBiZSBkcmF3biBvbiB0b3Agb2YgbG93ZXIgekluZGV4IHZhbHVlIHRpbGUgbGF5ZXJzIGFuZCBvdmVybGF5cy5cbiAgICovXG4gIHpJbmRleD86IG51bWJlcjtcblxuICAvKipcbiAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSBhdXRvIHBhbm5pbmcgd2hlbiB0aGUgbWFya2VyIGlzIGNsaWNrZWQuXG4gICAqL1xuICBkaXNhYmxlQXV0b1Bhbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBvd24gcHJvcGVydGllc1xuICAgKiBZb3UgY2FuIGdldCB0aGUgcHJvcGVydHkgbGF0ZXIgdXNpbmcgYGdldCgpYCBtZXRob2QuXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFya2VyTGFiZWwge1xuICAvKipcbiAgICogU2V0IHRydWUgaWYgdXNlIGJvbGQgZm9udFxuICAgKi9cbiAgYm9sZD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCBmb250IHNpemUgaW4gcGl4ZWxcbiAgICovXG4gIGZvbnRTaXplPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBjb2xvciBzdHJpbmdzXG4gICAqL1xuICBjb2xvcj86IHN0cmluZztcblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgdXNlIGl0YWxpYyBmb250XG4gICAqL1xuICBpdGFsaWM/OiBib29sZWFuO1xuXG59XG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlckNsdXN0ZXJJY29uIHtcbiAgLyoqXG4gICAqIE1pbmltdW0gbnVtYmVyIG9mIGNsdXN0ZXJpbmdcbiAgICovXG4gIG1pbj86IG51bWJlcjtcblxuICAvKipcbiAgICogTWF4aW11bSBudW1iZXIgb2YgY2x1c3RlcmluZ1xuICAgKi9cbiAgbWF4PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBhbmNob3IgcG9zaXRpb24gb2YgdGhlIG1hcmtlclxuICAgKi9cbiAgYW5jaG9yPzogYW55O1xuXG4gIC8qKlxuICAgKiBsYWJlbCBvcHRpb24gZm9yIGNsdXN0ZXJlZCBtYXJrZXJcbiAgICovXG4gIGxhYmVsPzogTWFya2VyTGFiZWw7XG5cbiAgLyoqXG4gICAqIGljb24gdXJsXG4gICAqL1xuICB1cmw6IHN0cmluZztcblxuICAvKipcbiAgICogaWNvbiBzaXplXG4gICAqL1xuICBzaXplPzoge1xuICAgIHdpZHRoPzogbnVtYmVyO1xuICAgIGhlaWdodD86IG51bWJlcjtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYXJrZXJDbHVzdGVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBNYXhpbXVtIHpvb20gbGV2ZWwgb2YgY2x1c3RlcmluZ1xuICAgKiAoZGVmYXVsdDogMTUsIG1heDogMTgpXG4gICAqL1xuICBtYXhab29tTGV2ZWw/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERyYXcgYSByZWN0YW5nbGUgdGhhdCBjb250YWlucyBhbGwgbG9jYXRpb25zIG9mIGNsdXN0ZXJlZCB3aGVuIHlvdSB0YXAgb24gYSBjbHVzdGVyIG1hcmtlci5cbiAgICogKGRlZmF1bHQ6IHRydWUpXG4gICAqL1xuICBib3VuZHNEcmF3PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogUG9zaXRpb24gbGlzdFxuICAgKiBbXG4gICAqICAge3RpdGxlOiBcInN0b3JlIEFcIiwgcG9zaXRpb246IHtsYXQ6IC4uLiwgbG5nOiAuLi59fSxcbiAgICogICB7dGl0bGU6IFwic3RvcmUgQlwiLCBwb3NpdGlvbjoge2xhdDogLi4uLCBsbmc6IC4uLn19LFxuICAgKiAgIHt0aXRsZTogXCJzdG9yZSBDXCIsIHBvc2l0aW9uOiB7bGF0OiAuLi4sIGxuZzogLi4ufX1cbiAgICogXVxuICAgKi9cbiAgbWFya2VyczogTWFya2VyT3B0aW9uc1tdO1xuXG4gIC8qKlxuICAgKiBDb25kaXRpb25zIG9mIGNsdXN0ZXJpbmdcbiAgICogW1xuICAgKiAgIHtpY29uOiBcImFzc2V0cy9zbWFsbC5wbmdcIiwgbWluOiAyLCBtYXg6IDEwfSxcbiAgICogICB7aWNvbjogXCJhc3NldHMvbWlkZGxlLnBuZ1wiLCBtaW46IDExLCBtYXg6IDMwfSxcbiAgICogICB7aWNvbjogXCJhc3NldHMvbGFyZ2UucG5nXCIsIG1pbjogMzF9XG4gICAqIF1cbiAgICovXG4gIGljb25zOiBNYXJrZXJDbHVzdGVySWNvbltdO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgb3duIHByb3BlcnRpZXNcbiAgICogWW91IGNhbiBnZXQgdGhlIHByb3BlcnR5IGxhdGVyIHVzaW5nIGBnZXQoKWAgbWV0aG9kLlxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE15TG9jYXRpb24ge1xuICBsYXRMbmc/OiBMYXRMbmc7XG4gIGVsYXBzZWRSZWFsdGltZU5hbm9zPzogYW55O1xuICB0aW1lPzogc3RyaW5nO1xuICBhY2N1cmFjeT86IGFueTtcbiAgYmVhcmluZz86IG51bWJlcjtcbiAgYWx0aXR1ZGU/OiBhbnk7XG4gIHNwZWVkPzogbnVtYmVyO1xuICBwcm92aWRlcj86IGFueTtcbiAgaGFzaENvZGU/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXlMb2NhdGlvbk9wdGlvbnMge1xuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gdHJ5IHRvIHVzZSBHUFMgbWFuZGF0b3J5LlxuICAgKiBJbiBmYWxzZSwgdGhlIHBsdWdpbiB0cnkgdG8gdXNlIEdQUyBhbmQgbmV0d29yay5cbiAgICogKGRlZmF1bHQ6IGZhbHNlKVxuICAgKi9cbiAgZW5hYmxlSGlnaEFjY3VyYWN5PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb2x5Z29uT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBQYXNzIElMYXRMbmdbXSB0byBzcGVjaWZ5IHRoZSB2ZXJ0aXhlcy5cbiAgICogWW91IG5lZWQgdG8gY29udGFpbiB0d28gcG9pbnRzIGF0IGxlYXN0LlxuICAgKi9cbiAgcG9pbnRzOiBJTGF0TG5nW107XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIGRyYXcgdGhlIGN1cnZlIHBvbHlnb24gYmFzZWQgb24gdGhlIGVhcnRoXG4gICAqIChkZWZhdWx0OiBmYWxzZSlcbiAgICovXG4gIGdlb2Rlc2ljPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IHRoZSBzdHJva2UgY29sb3JcbiAgICogKHJnYiwgcmdiYSwgI1JSR0dCQiwgXCJjb2xvcm5hbWVcIiwgLi4uZXRjKVxuICAgKi9cbiAgc3Ryb2tlQ29sb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc3Ryb2tlIHdpZHRoIGluIHBpeGVsXG4gICAqL1xuICBzdHJva2VXaWR0aD86IG51bWJlcjtcblxuICAvKipcbiAgICogU2V0IHRoZSBpbnNpZGUgY29sb3Igb2YgcG9seWdvblxuICAgKiAocmdiLCByZ2JhLCAjUlJHR0JCLCBcImNvbG9ybmFtZVwiLCAuLi5ldGMpXG4gICAqL1xuICBmaWxsQ29sb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCBmYWxzZSBpZiB5b3Ugd2FudCB0byBjcmVhdGUgaW52aXNpYmxlIHBvbHlnb25cbiAgICogKEludmlzaWJsZSBwb2x5Z29uIGlzIG5vdCBjbGlja2FibGUsIGRlZmF1bHQgdHJ1ZSlcbiAgICovXG4gIHZpc2libGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBIaWVyYXJjaHkgei1pbmRleFxuICAgKi9cbiAgekluZGV4PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBQYXNzIElMYXRMbmdbXVtdIHRvIGNyZWF0ZSBob2xlcyBpbiBwb2x5Z29uXG4gICAqL1xuICBob2xlcz86IElMYXRMbmdbXVtdO1xuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byByZWNlaXZlIHRoZSBQT0xZR09OX0NMSUNLIGV2ZW50XG4gICAqIChkZWZhdWx0OiBmYWxzZSlcbiAgICovXG4gIGNsaWNrYWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBvd24gcHJvcGVydGllc1xuICAgKiBZb3UgY2FuIGdldCB0aGUgcHJvcGVydHkgbGF0ZXIgdXNpbmcgYGdldCgpYCBtZXRob2QuXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9seWxpbmVPcHRpb25zIHtcbiAgLyoqXG4gICAqIFBhc3MgSUxhdExuZ1tdIHRvIHNwZWNpZnkgdGhlIHZlcnRpeGVzLlxuICAgKiBZb3UgbmVlZCB0byBjb250YWluIHR3byBwb2ludHMgYXQgbGVhc3QuXG4gICAqL1xuICBwb2ludHM6IElMYXRMbmdbXTtcblxuICAvKipcbiAgICogU2V0IGZhbHNlIGlmIHlvdSB3YW50IHRvIGNyZWF0ZSBpbnZpc2libGUgcG9seWxpbmVcbiAgICogKEludmlzaWJsZSBwb2x5bGluZSBpcyBub3QgY2xpY2thYmxlLCBkZWZhdWx0IHRydWUpXG4gICAqL1xuICB2aXNpYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gZHJhdyB0aGUgY3VydmUgcG9seWxpbmUgYmFzZWQgb24gdGhlIGVhcnRoXG4gICAqIChkZWZhdWx0OiBmYWxzZSlcbiAgICovXG4gIGdlb2Rlc2ljPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IHRoZSBzdHJva2UgY29sb3JcbiAgICogKHJnYiwgcmdiYSwgI1JSR0dCQiwgXCJjb2xvcm5hbWVcIiwgLi4uZXRjKVxuICAgKi9cbiAgY29sb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc3Ryb2tlIHdpZHRoIGluIHBpeGVsXG4gICAqL1xuICB3aWR0aD86IG51bWJlcjtcblxuICAvKipcbiAgICogSGllcmFyY2h5IHotaW5kZXhcbiAgICovXG4gIHpJbmRleD86IG51bWJlcjtcblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gcmVjZWl2ZSB0aGUgUE9MWUxJTkVfQ0xJQ0sgZXZlbnRcbiAgICogKGRlZmF1bHQ6IGZhbHNlKVxuICAgKi9cbiAgY2xpY2thYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQWNjZXB0IG93biBwcm9wZXJ0aWVzXG4gICAqIFlvdSBjYW4gZ2V0IHRoZSBwcm9wZXJ0eSBsYXRlciB1c2luZyBgZ2V0KClgIG1ldGhvZC5cbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaWxlT3ZlcmxheU9wdGlvbnMge1xuICAvKipcbiAgICogVGhpcyBjYWxsYmFjayBtdXN0IFJldHVybnMgc3RyaW5nIG9mIGltYWdlIFVSTCwgb3IgUHJvbWlzZS5cbiAgICogSWYgbm8gdGlsZSwgeW91IG5lZWQgdG8gUmV0dXJucyBudWxsLlxuICAgKi9cbiAgLy8gZ2V0VGlsZTogKHg6IG51bWJlciwgeTogbnVtYmVyLCB6b29tOiBudW1iZXIpID0+IHN0cmluZyB8IFByb21pc2U8c3RyaW5nPjtcbiAgZ2V0VGlsZTogKHg6IG51bWJlciwgeTogbnVtYmVyLCB6b29tOiBudW1iZXIpID0+IHN0cmluZztcblxuICAvKipcbiAgICogU2V0IGZhbHNlIGlmIHlvdSB3YW50IHRvIGNyZWF0ZSBpbnZpc2libGUgdGlsZWxheWVyXG4gICAqIChkZWZhdWx0IHRydWUpXG4gICAqL1xuICB2aXNpYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogSGllcmFyY2h5IHotaW5kZXggb2YgdGlsZWxheWVyXG4gICAqL1xuICB6SW5kZXg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQ6IDUxMnB4XG4gICAqL1xuICB0aWxlU2l6ZT86IG51bWJlcjtcblxuICAvKipcbiAgICogRGVmYXVsdDogMS4wXG4gICAqL1xuICBvcGFjaXR5PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byBkaXNwbGF5IHRoZSB0aWxlIGluZm9ybWF0aW9uIG92ZXIgdGhlIHRpbGUgaW1hZ2VzLlxuICAgKi9cbiAgZGVidWc/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgb3duIHByb3BlcnRpZXNcbiAgICogWW91IGNhbiBnZXQgdGhlIHByb3BlcnR5IGxhdGVyIHVzaW5nIGBnZXQoKWAgbWV0aG9kLlxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRvRGF0YVVybE9wdGlvbnMge1xuICAvKipcbiAgICogVHJ1ZSBpZiB5b3Ugd2FudCBnZXQgaGlnaCBxdWFsaXR5IG1hcCBzbmFwc2hvdFxuICAgKi9cbiAgdW5jb21wcmVzcz86IGJvb2xlYW47XG59XG5cblxuLyoqXG4gKiBPcHRpb25zIGZvciBtYXAuYWRkS21sT3ZlcmxheSgpIG1ldGhvZFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEttbE92ZXJsYXlPcHRpb25zIHtcbiAgLypcbiAgICogVGhlIHVybCBvciBmaWxlIHBhdGggb2YgS01MIGZpbGUuIEtNWiBmb3JtYXQgaXMgbm90IHN1cHBvcnRlZC5cbiAgICovXG4gIHVybDogc3RyaW5nO1xuXG4gIC8qXG4gICAqIERvIG5vdCBmaXJlIHRoZSBLTUxfQ0xJQ0sgZXZlbnQgaWYgZmFsc2UuIERlZmF1bHQgaXMgdHJ1ZS5cbiAgICovXG4gIGNsaWNrYWJsZT86IGJvb2xlYW47XG5cbiAgLypcbiAgICogRG8gbm90IGRpc3BsYXkgdGhlIGRlZmF1bHQgaW5mb1dpbmRvdyBpZiB0cnVlLiBEZWZhdWx0IGlzIGZhbHNlLlxuICAgKi9cbiAgc3VwcHJlc3NJbmZvV2luZG93cz86IGJvb2xlYW47XG5cbiAgLypcbiAgICogaWNvbiBvcHRpb25cbiAgICovXG4gIGljb24/OiBzdHJpbmcgfCBNYXJrZXJJY29uO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgb3duIHByb3BlcnRpZXMgZm9yIGZ1dHVyZSB1cGRhdGVcbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuXG5cbi8qKlxuICogT3B0aW9ucyBmb3IgRW52aXJvbm1lbnQuc2V0RW52KClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFbnZPcHRpb25zIHtcbiAgLypcbiAgICogQVBJIGtleSBmb3IgR29vZ2xlIE1hcHMgSmF2YVNjcmlwdCBBUEkgdjMgZm9yIGBodHRwczpgIChvbiBzZXJ2ZXIpXG4gICAqL1xuICBBUElfS0VZX0ZPUl9CUk9XU0VSX1JFTEVBU0U/OiBzdHJpbmc7XG5cbiAgLypcbiAgICogQVBJIGtleSBmb3IgR29vZ2xlIE1hcHMgSmF2YVNjcmlwdCBBUEkgdjMgZm9yIGBodHRwOmAgKGxvY2FsIGRldmVsb3BtZW50KVxuICAgKi9cbiAgQVBJX0tFWV9GT1JfQlJPV1NFUl9ERUJVRz86IHN0cmluZztcblxuICAvKipcbiAgICogQWNjZXB0IG93biBwcm9wZXJ0aWVzIGZvciBmdXR1cmUgdXBkYXRlXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgVmlzaWJsZVJlZ2lvbiBpbXBsZW1lbnRzIElMYXRMbmdCb3VuZHMge1xuICBwcml2YXRlIF9vYmplY3RJbnN0YW5jZTogYW55O1xuXG4gIC8qKlxuICAgKiBUaGUgbm9ydGhlYXN0IG9mIHRoZSBib3VuZHMgdGhhdCBjb250YWlucyB0aGUgZmFyTGVmdCwgZmFyUmlnaHQsIG5lYXJMZWZ0IGFuZCBuZWFyUmlnaHQuXG4gICAqIFNpbmNlIHRoZSBtYXAgdmlldyBpcyBhYmxlIHRvIHJvdGF0ZSwgdGhlIGZhclJpZ2h0IGlzIG5vdCB0aGUgc2FtZSBhcyB0aGUgbm9ydGhlYXN0LlxuICAgKi9cbiAgQEluc3RhbmNlUHJvcGVydHkoKSBub3J0aGVhc3Q6IElMYXRMbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBzb3V0aHdlc3Qgb2YgdGhlIGJvdW5kcyB0aGF0IGNvbnRhaW5zIHRoZSBmYXJMZWZ0LCBmYXJSaWdodCwgbmVhckxlZnQgYW5kIG5lYXJSaWdodC5cbiAgICogU2luY2UgdGhlIG1hcCB2aWV3IGlzIGFibGUgdG8gcm90YXRlLCB0aGUgbmVhckxlZnQgaXMgbm90IHRoZSBzYW1lIGFzIHRoZSBzb3V0aHdlc3QuXG4gICAqL1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIHNvdXRod2VzdDogSUxhdExuZztcblxuICAvKipcbiAgICogVGhlIGZhckxlZnQgaW5kaWNhdGVzIHRoZSBsYXQvbG5nIG9mIHRoZSB0b3AtbGVmdCBvZiB0aGUgbWFwIHZpZXcuXG4gICAqL1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGZhckxlZnQ6IElMYXRMbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBmYXJSaWdodCBpbmRpY2F0ZXMgdGhlIGxhdC9sbmcgb2YgdGhlIHRvcC1yaWdodCBvZiB0aGUgbWFwIHZpZXcuXG4gICAqL1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGZhclJpZ2h0OiBJTGF0TG5nO1xuXG4gIC8qKlxuICAgKiBUaGUgbmVhckxlZnQgaW5kaWNhdGVzIHRoZSBsYXQvbG5nIG9mIHRoZSBib3R0b20tbGVmdCBvZiB0aGUgbWFwIHZpZXcuXG4gICAqL1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIG5lYXJMZWZ0OiBJTGF0TG5nO1xuXG4gIC8qKlxuICAgKiBUaGUgbmVhclJpZ2h0IGluZGljYXRlcyB0aGUgbGF0L2xuZyBvZiB0aGUgYm90dG9tLXJpZ2h0IG9mIHRoZSBtYXAgdmlldy5cbiAgICovXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgbmVhclJpZ2h0OiBJTGF0TG5nO1xuXG4gIC8qKlxuICAgKiBjb25zdGFudCB2YWx1ZSA6IGBWaXNpYmxlUmVnaW9uYFxuICAgKi9cbiAgQEluc3RhbmNlUHJvcGVydHkoKSB0eXBlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3Ioc291dGh3ZXN0OiBMYXRMbmdCb3VuZHMsIG5vcnRoZWFzdDogTGF0TG5nQm91bmRzLCBmYXJMZWZ0OiBJTGF0TG5nLCBmYXJSaWdodDogSUxhdExuZywgbmVhckxlZnQ6IElMYXRMbmcsIG5lYXJSaWdodDogSUxhdExuZykge1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gbmV3IChHb29nbGVNYXBzLmdldFBsdWdpbigpKS5WaXNpYmxlUmVnaW9uKHNvdXRod2VzdCwgbm9ydGhlYXN0LCBmYXJMZWZ0LCBmYXJSaWdodCwgbmVhckxlZnQsIG5lYXJSaWdodCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdG8gc3RyaW5nXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgb2YgdGhlIGZvcm0gXCJsYXRfc3csbG5nX3N3LGxhdF9uZSxsbmdfbmVcIiBmb3IgdGhpcyBib3VuZHMsIHdoZXJlIFwic3dcIiBjb3JyZXNwb25kcyB0byB0aGUgc291dGh3ZXN0IGNvcm5lciBvZiB0aGUgYm91bmRpbmcgYm94LCB3aGlsZSBcIm5lXCIgY29ycmVzcG9uZHMgdG8gdGhlIG5vcnRoZWFzdCBjb3JuZXIgb2YgdGhhdCBib3guXG4gICAqIEBwYXJhbSBwcmVjaXNpb24ge251bWJlcn1cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgdG9VcmxWYWx1ZShwcmVjaXNpb24/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbGF0L2xuZyBpcyBpbiB0aGlzIGJvdW5kcy5cbiAgICogQHBhcmFtIExhdExuZyB7SUxhdExuZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGNvbnRhaW5zKExhdExuZzogSUxhdExuZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY29uc3QgU3RyZWV0Vmlld1NvdXJjZSA9IHtcbiAgREVGQVVMVDogJ0RFRkFVTFQnLFxuICBPVVRET09SOiAnT1VURE9PUidcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2V0UG92T3B0aW9uIHtcbiAgYmVhcmluZzogbnVtYmVyO1xuICByYWRpdXM/OiBudW1iZXI7XG4gIHpvb20/OiBudW1iZXI7XG4gIGR1cmF0aW9uOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIFN0cmVldFZpZXdTZXRQb3NpdGlvbk9wdGlvbiB7XG4gIHRhcmdldDogSUxhdExuZztcbiAgc291cmNlPzogc3RyaW5nO1xuICByYWRpdXM/OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIFN0cmVldFZpZXdDYW1lcmFQYW5vIHtcbiAgdGFyZ2V0OiBzdHJpbmc7XG4gIGJlYXJpbmc/OiBudW1iZXI7XG4gIHRpbHQ/OiBudW1iZXI7XG4gIHpvb20/OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIFN0cmVldFZpZXdDYW1lcmFQb3NpdGlvbiB7XG4gIHRhcmdldDogSUxhdExuZztcbiAgc291cmNlPzogc3RyaW5nO1xuICByYWRpdXM/OiBudW1iZXI7XG4gIGJlYXJpbmc/OiBudW1iZXI7XG4gIHRpbHQ/OiBudW1iZXI7XG4gIHpvb20/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RyZWV0Vmlld0NvbnRyb2xPcHRpb25zIHtcbiAgc3RyZWV0TmFtZXM/OiBib29sZWFuO1xuICBuYXZpZ2F0aW9uPzogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3RyZWV0Vmlld0dlc3R1cmVPcHRpb25zIHtcbiAgcGFubmluZz86IGJvb2xlYW47XG4gIHpvb21pbmc/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0cmVldFZpZXdPcHRpb25zIHtcblxuICAvKlxuICAgKiBjYW1lcmE6IFtvcHRpb25zXSBJbml0aWFsIGNhbWVyYSBwb3NpdGlvblxuICAgKi9cbiAgY2FtZXJhPzogU3RyZWV0Vmlld0NhbWVyYVBhbm8gfCBTdHJlZXRWaWV3Q2FtZXJhUG9zaXRpb247XG5cbiAgLyoqXG4gICAqIGNvbnRyb2xzIFtvcHRpb25zXVxuICAgKi9cbiAgY29udHJvbHM/OiBTdHJlZXRWaWV3Q29udHJvbE9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIGdlc3R1cmVzIFtvcHRpb25zXVxuICAgKi9cbiAgZ2VzdHVyZXM/OiBTdHJlZXRWaWV3R2VzdHVyZU9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBleHRyYSBwcm9wZXJ0aWVzIGZvciBmdXR1cmUgdXBkYXRlc1xuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RyZWV0Vmlld05hdmlnYXRpb25MaW5rIHtcblxuICAvKipcbiAgICogcGFub3JhbWEgSWRcbiAgICovXG4gIHBhbm9JZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBiZWFyaW5nIChoZWFkaW5nKVxuICAgKi9cbiAgYmVhcmluZzogbnVtYmVyO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RyZWV0Vmlld0xvY2F0aW9uIHtcblxuICBsYXRMbmc6IElMYXRMbmc7XG5cbiAgbGlua3M6IFN0cmVldFZpZXdOYXZpZ2F0aW9uTGlua1tdO1xuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICogWW91IGNhbiBsaXN0ZW4gdG8gdGhlc2UgZXZlbnRzIHdoZXJlIGFwcHJvcHJpYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBHb29nbGVNYXBzRXZlbnQgPSB7XG4gIE1BUF9SRUFEWTogJ21hcF9yZWFkeScsXG4gIE1BUF9DTElDSzogJ21hcF9jbGljaycsXG4gIE1BUF9MT05HX0NMSUNLOiAnbWFwX2xvbmdfY2xpY2snLFxuICBQT0lfQ0xJQ0s6ICdwb2lfY2xpY2snLFxuICBNWV9MT0NBVElPTl9DTElDSzogJ215X2xvY2F0aW9uX2NsaWNrJyxcbiAgTVlfTE9DQVRJT05fQlVUVE9OX0NMSUNLOiAnbXlfbG9jYXRpb25fYnV0dG9uX2NsaWNrJyxcbiAgSU5ET09SX0JVSUxESU5HX0ZPQ1VTRUQ6ICdpbmRvb3JfYnVpbGRpbmdfZm9jdXNlZCcsXG4gIElORE9PUl9MRVZFTF9BQ1RJVkFURUQ6ICdpbmRvb3JfbGV2ZWxfYWN0aXZhdGVkJyxcbiAgQ0FNRVJBX01PVkVfU1RBUlQ6ICdjYW1lcmFfbW92ZV9zdGFydCcsXG4gIENBTUVSQV9NT1ZFOiAnY2FtZXJhX21vdmUnLFxuICBDQU1FUkFfTU9WRV9FTkQ6ICdjYW1lcmFfbW92ZV9lbmQnLFxuICBPVkVSTEFZX0NMSUNLOiAnb3ZlcmxheV9jbGljaycsXG4gIFBPTFlHT05fQ0xJQ0s6ICdwb2x5Z29uX2NsaWNrJyxcbiAgUE9MWUxJTkVfQ0xJQ0s6ICdwb2x5bGluZV9jbGljaycsXG4gIENJUkNMRV9DTElDSzogJ2NpcmNsZV9jbGljaycsXG4gIEdST1VORF9PVkVSTEFZX0NMSUNLOiAnZ3JvdW5kb3ZlcmxheV9jbGljaycsXG4gIElORk9fQ0xJQ0s6ICdpbmZvX2NsaWNrJyxcbiAgSU5GT19MT05HX0NMSUNLOiAnaW5mb19sb25nX2NsaWNrJyxcbiAgSU5GT19DTE9TRTogJ2luZm9fY2xvc2UnLFxuICBJTkZPX09QRU46ICdpbmZvX29wZW4nLFxuICBNQVJLRVJfQ0xJQ0s6ICdtYXJrZXJfY2xpY2snLFxuICBNQVJLRVJfRFJBRzogJ21hcmtlcl9kcmFnJyxcbiAgTUFSS0VSX0RSQUdfU1RBUlQ6ICdtYXJrZXJfZHJhZ19zdGFydCcsXG4gIE1BUktFUl9EUkFHX0VORDogJ21hcmtlcl9kcmFnX2VuZCcsXG4gIE1BUF9EUkFHOiAnbWFwX2RyYWcnLFxuICBNQVBfRFJBR19TVEFSVDogJ21hcF9kcmFnX3N0YXJ0JyxcbiAgTUFQX0RSQUdfRU5EOiAnbWFwX2RyYWdfZW5kJyxcbiAgS01MX0NMSUNLOiAna21sX2NsaWNrJyxcbiAgUEFOT1JBTUFfUkVBRFk6ICdwYW5vcmFtYV9yZWFkeScsXG4gIFBBTk9SQU1BX0NBTUVSQV9DSEFOR0U6ICdwYW5vcmFtYV9jYW1lcmFfY2hhbmdlJyxcbiAgUEFOT1JBTUFfTE9DQVRJT05fQ0hBTkdFOiAncGFub3JhbWFfbG9jYXRpb25fY2hhbmdlJyxcbiAgUEFOT1JBTUFfQ0xJQ0s6ICdwYW5vcmFtYV9jbGljaydcbn07XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY29uc3QgR29vZ2xlTWFwc0FuaW1hdGlvbiA9IHtcbiAgQk9VTkNFOiAnQk9VTkNFJyxcbiAgRFJPUDogJ0RST1AnXG59O1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNvbnN0IEdvb2dsZU1hcHNNYXBUeXBlSWQgPSB7XG4gIE5PUk1BTDogJ01BUF9UWVBFX05PUk1BTCcsXG4gIFJPQURNQVA6ICdNQVBfVFlQRV9OT1JNQUwnLFxuICBTQVRFTExJVEU6ICdNQVBfVFlQRV9TQVRFTExJVEUnLFxuICBIWUJSSUQ6ICdNQVBfVFlQRV9IWUJSSUQnLFxuICBURVJSQUlOOiAnTUFQX1RZUEVfVEVSUkFJTicsXG4gIE5PTkU6ICdNQVBfVFlQRV9OT05FJ1xufTtcblxuLyoqXG4gKiBAbmFtZSBHb29nbGUgTWFwc1xuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiB1c2VzIHRoZSBuYXRpdmUgR29vZ2xlIE1hcHMgU0RLXG4gKiBOb3RlOiBBcyBvZiBJb25pYyBuYXRpdmUgNC4wLCB0aGlzIHVzaW5nIHRoZSAyLjAgdmVyc2lvbiBvZiB0aGUgZ29vZ2xlIG1hcHMgcGx1Z2luLiBQbGVhc2UgbWFrZSBzdXJlIHlvdXIgcGx1Z2luIGlzIHVwZGF0ZWRcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHtcbiAqICBHb29nbGVNYXBzLFxuICogIEdvb2dsZU1hcCxcbiAqICBHb29nbGVNYXBzRXZlbnQsXG4gKiAgR29vZ2xlTWFwT3B0aW9ucyxcbiAqICBDYW1lcmFQb3NpdGlvbixcbiAqICBNYXJrZXJPcHRpb25zLFxuICogIE1hcmtlclxuICogfSBmcm9tICdAaW9uaWMtbmF0aXZlL2dvb2dsZS1tYXBzJztcbiAqIGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlL1wiO1xuICpcbiAqIEBDb21wb25lbnQoe1xuICogICBzZWxlY3RvcjogJ3BhZ2UtaG9tZScsXG4gKiAgIHRlbXBsYXRlVXJsOiAnaG9tZS5odG1sJ1xuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBIb21lUGFnZSB7XG4gKiAgIG1hcDogR29vZ2xlTWFwO1xuICogICBjb25zdHJ1Y3RvcigpIHsgfVxuICpcbiAqICAgaW9uVmlld0RpZExvYWQoKSB7XG4gKiAgICB0aGlzLmxvYWRNYXAoKTtcbiAqICAgfVxuICpcbiAqICBsb2FkTWFwKCkge1xuICpcbiAqICAgICBsZXQgbWFwT3B0aW9uczogR29vZ2xlTWFwT3B0aW9ucyA9IHtcbiAqICAgICAgIGNhbWVyYToge1xuICogICAgICAgICB0YXJnZXQ6IHtcbiAqICAgICAgICAgICBsYXQ6IDQzLjA3NDE5MDQsXG4gKiAgICAgICAgICAgbG5nOiAtODkuMzgwOTgwMlxuICogICAgICAgICB9LFxuICogICAgICAgICB6b29tOiAxOCxcbiAqICAgICAgICAgdGlsdDogMzBcbiAqICAgICAgIH1cbiAqICAgICB9XG4gKlxuICogICAgIHRoaXMubWFwID0gR29vZ2xlTWFwcy5jcmVhdGUoJ21hcF9jYW52YXMnLCBtYXBPcHRpb25zKTtcbiAqXG4gKiAgICAgbGV0IG1hcmtlcjogTWFya2VyID0gdGhpcy5tYXAuYWRkTWFya2VyU3luYyh7XG4gKiAgICAgICB0aXRsZTogJ0lvbmljJyxcbiAqICAgICAgIGljb246ICdibHVlJyxcbiAqICAgICAgIGFuaW1hdGlvbjogJ0RST1AnLFxuICogICAgICAgcG9zaXRpb246IHtcbiAqICAgICAgICAgbGF0OiA0My4wNzQxOTA0LFxuICogICAgICAgICBsbmc6IC04OS4zODA5ODAyXG4gKiAgICAgICB9XG4gKiAgICAgfSk7XG4gKlxuICogICAgIG1hcmtlci5vbihHb29nbGVNYXBzRXZlbnQuTUFSS0VSX0NMSUNLKVxuICogICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gKiAgICAgICAgIGFsZXJ0KCdjbGlja2VkJyk7XG4gKiAgICAgICB9KTtcbiAqICAgICB9KTtcbiAqICAgfVxuICogfVxuICpcbiAqIGBgYFxuICogQGNsYXNzZXNcbiAqIEdvb2dsZU1hcHNcbiAqIEdvb2dsZU1hcFxuICogU3RyZWV0Vmlld1xuICogQ2lyY2xlXG4gKiBFbmNvZGluZ1xuICogRW52aXJvbm1lbnRcbiAqIEdlb2NvZGVyXG4gKiBHcm91bmRPdmVybGF5XG4gKiBIdG1sSW5mb1dpbmRvd1xuICogR2VvY29kZXJcbiAqIExhdExuZ1xuICogTGF0TG5nQm91bmRzXG4gKiBNYXJrZXJcbiAqIE1hcmtlckNsdXN0ZXJcbiAqIFBvbHlnb25cbiAqIFBvbHlsaW5lXG4gKiBTcGhlcmljYWxcbiAqIEttbE92ZXJsYXlcbiAqIFBvbHlcbiAqIFRpbGVPdmVybGF5XG4gKiBCYXNlQ2xhc3NcbiAqIEJhc2VBcnJheUNsYXNzXG4gKiBAaW50ZXJmYWNlc1xuICogR29vZ2xlTWFwT3B0aW9uc1xuICogQ2FtZXJhUG9zaXRpb25cbiAqIENpcmNsZU9wdGlvbnNcbiAqIEdlb2NvZGVyUmVxdWVzdFxuICogR2VvY29kZXJSZXN1bHRcbiAqIEdyb3VuZE92ZXJsYXlPcHRpb25zXG4gKiBJTGF0TG5nXG4gKiBNYXJrZXJJY29uXG4gKiBNYXJrZXJPcHRpb25zXG4gKiBNYXJrZXJDbHVzdGVySWNvblxuICogTWFya2VyQ2x1c3Rlck9wdGlvbnNcbiAqIE15TG9jYXRpb25cbiAqIE15TG9jYXRpb25PcHRpb25zXG4gKiBQb2x5Z29uT3B0aW9uc1xuICogUG9seWxpbmVPcHRpb25zXG4gKiBUaWxlT3ZlcmxheU9wdGlvbnNcbiAqIEttbE92ZXJsYXlPcHRpb25zXG4gKiBWaXNpYmxlUmVnaW9uXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL21hcHNwbHVnaW4vY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcycsXG4gIGRvY3VtZW50OiAnaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9uYXRpdmUvZ29vZ2xlLW1hcHMvJyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIC0tdmFyaWFibGUgQVBJX0tFWV9GT1JfQU5EUk9JRD1cIllPVVJfQU5EUk9JRF9BUElfS0VZX0lTX0hFUkVcIiAtLXZhcmlhYmxlIEFQSV9LRVlfRk9SX0lPUz1cIllPVVJfSU9TX0FQSV9LRVlfSVNfSEVSRVwiJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydBUElfS0VZX0ZPUl9BTkRST0lEJywgJ0FQSV9LRVlfRk9SX0lPUyddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnQnJvd3NlciddXG59KVxuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcHMgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgR29vZ2xlTWFwIGluc3RhbmNlXG4gICAqIEBwYXJhbSBlbGVtZW50IHtzdHJpbmcgfCBIVE1MRWxlbWVudH0gRWxlbWVudCBJRCBvciByZWZlcmVuY2UgdG8gYXR0YWNoIHRoZSBtYXAgdG9cbiAgICogQHBhcmFtIG9wdGlvbnMge0dvb2dsZU1hcE9wdGlvbnN9IFtvcHRpb25zXSBPcHRpb25zXG4gICAqIEByZXR1cm4ge0dvb2dsZU1hcH1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGUoZWxlbWVudDogc3RyaW5nIHwgSFRNTEVsZW1lbnQgfCBHb29nbGVNYXBPcHRpb25zLCBvcHRpb25zPzogR29vZ2xlTWFwT3B0aW9ucyk6IEdvb2dsZU1hcCB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQub2Zmc2V0UGFyZW50KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbGVtZW50IG11c3QgYmUgdW5kZXIgPGJvZHk+Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdfX3BsdWdpbk1hcElkJykpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7ZWxlbWVudC50YWdOYW1lfVtfX3BsdWdpbk1hcElkPScke2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdfX3BsdWdpbk1hcElkJyl9J10gaGFzIGFscmVhZHkgbWFwLmApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBvcHRpb25zID0gZWxlbWVudCBhcyBHb29nbGVNYXBPcHRpb25zO1xuICAgICAgICBlbGVtZW50ID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGdvb2dsZU1hcDogR29vZ2xlTWFwID0gbmV3IEdvb2dsZU1hcChlbGVtZW50IGFzIEhUTUxFbGVtZW50IHwgc3RyaW5nLCBvcHRpb25zKTtcbiAgICAgIGdvb2dsZU1hcC5zZXQoJ19vdmVybGF5cycsIHt9KTtcbiAgICAgIHJldHVybiBnb29nbGVNYXA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZTogc3RyaW5nW10gPSBbXG4gICAgICAgICdbR29vZ2xlTWFwc10nXG4gICAgICBdO1xuICAgICAgaWYgKCF3aW5kb3cuY29yZG92YSkge1xuICAgICAgICBlcnJvck1lc3NhZ2UucHVzaCgnWW91IG5lZWQgdG8gZXhlY3V0ZSBcIiQ+IGlvbmljIGNvcmRvdmEgcnVuIGJyb3dzZXJcIi4nKTtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnB1c2goJ1wiJD4gaW9uaWMgc2VydmVcIiBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnB1c2goJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IGluc3RhbGxlZCBvciBub3QgcmVhZHkgeWV0LicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGRpc3BsYXlFcnJvck1lc3NhZ2UoZWxlbWVudCwgZXJyb3JNZXNzYWdlLmpvaW4oJzxiciAvPicpKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGxldCB0YXJnZXRzOiBhbnlbXSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnIycgKyBlbGVtZW50KSk7XG4gICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0YXJnZXRzID0gdGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICF0YXJnZXQuaGFzQXR0cmlidXRlKCdfX3BsdWdpbm1hcGlkJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID09PSAxICYmIHRhcmdldHNbMF0pIHtcbiAgICAgICAgICBkaXNwbGF5RXJyb3JNZXNzYWdlKHRhcmdldHNbMF0sIGVycm9yTWVzc2FnZS5qb2luKCc8YnIgLz4nKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZS5qb2luKCcnKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvbiBrZWVwIHRoaXMgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNyZWF0ZShlbGVtZW50OiBzdHJpbmcgfCBIVE1MRWxlbWVudCB8IEdvb2dsZU1hcE9wdGlvbnMsIG9wdGlvbnM/OiBHb29nbGVNYXBPcHRpb25zKTogR29vZ2xlTWFwIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBQbGVhc2UgdXNlIEdvb2dsZU1hcHMuY3JlYXRlKCknKTtcbiAgICByZXR1cm4gR29vZ2xlTWFwcy5jcmVhdGUoZWxlbWVudCwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBTdHJlZXRWaWV3IGluc3RhbmNlXG4gICAqIEBwYXJhbSBlbGVtZW50IHtzdHJpbmcgfCBIVE1MRWxlbWVudH0gRWxlbWVudCBJRCBvciByZWZlcmVuY2UgdG8gYXR0YWNoIHRoZSBtYXAgdG9cbiAgICogQHBhcmFtIG9wdGlvbnMge1N0cmVldFZpZXdPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9uc1xuICAgKiBAcmV0dXJuIHtTdHJlZXRWaWV3UGFub3JhbWF9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlUGFub3JhbWEoZWxlbWVudDogc3RyaW5nIHwgSFRNTEVsZW1lbnQsIG9wdGlvbnM/OiBTdHJlZXRWaWV3T3B0aW9ucyk6IFN0cmVldFZpZXdQYW5vcmFtYSB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQub2Zmc2V0UGFyZW50KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbGVtZW50IG11c3QgYmUgdW5kZXIgPGJvZHk+Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdfX3BsdWdpbk1hcElkJykpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7ZWxlbWVudC50YWdOYW1lfVtfX3BsdWdpbk1hcElkPScke2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdfX3BsdWdpbk1hcElkJyl9J10gaGFzIGFscmVhZHkgbWFwLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFN0cmVldFZpZXdQYW5vcmFtYShlbGVtZW50LCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZXJyb3JNZXNzYWdlOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgJ1tHb29nbGVNYXBzXSdcbiAgICAgIF07XG4gICAgICBpZiAoIXdpbmRvdy5jb3Jkb3ZhKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS5wdXNoKCdZb3UgbmVlZCB0byBleGVjdXRlIFwiJD4gaW9uaWMgY29yZG92YSBydW4gYnJvd3NlclwiLicpO1xuICAgICAgICBlcnJvck1lc3NhZ2UucHVzaCgnXCIkPiBpb25pYyBzZXJ2ZVwiIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvck1lc3NhZ2UucHVzaCgnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgaW5zdGFsbGVkIG9yIG5vdCByZWFkeSB5ZXQuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgZGlzcGxheUVycm9yTWVzc2FnZShlbGVtZW50LCBlcnJvck1lc3NhZ2Uuam9pbignPGJyIC8+JykpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbGV0IHRhcmdldHM6IGFueVtdID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjJyArIGVsZW1lbnQpKTtcbiAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRhcmdldHMgPSB0YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIXRhcmdldC5oYXNBdHRyaWJ1dGUoJ19fcGx1Z2lubWFwaWQnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDEgJiYgdGFyZ2V0c1swXSkge1xuICAgICAgICAgIGRpc3BsYXlFcnJvck1lc3NhZ2UodGFyZ2V0c1swXSwgZXJyb3JNZXNzYWdlLmpvaW4oJzxiciAvPicpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZS5qb2luKCcnKSk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRpc3BsYXlFcnJvck1lc3NhZ2UgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQsIG1lc3NhZ2U6IHN0cmluZykgPT4ge1xuICBjb25zdCBlcnJvckRpdjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZXJyb3JEaXYuaW5uZXJIVE1MID0gbWVzc2FnZTtcbiAgZXJyb3JEaXYuc3R5bGUuY29sb3IgPSAncmVkJztcbiAgZXJyb3JEaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICBlcnJvckRpdi5zdHlsZS53aWR0aCA9ICc4MCUnO1xuICBlcnJvckRpdi5zdHlsZS5oZWlnaHQgPSAnNTAlJztcbiAgZXJyb3JEaXYuc3R5bGUudG9wID0gJzBweCc7XG4gIGVycm9yRGl2LnN0eWxlLmJvdHRvbSA9ICcwcHgnO1xuICBlcnJvckRpdi5zdHlsZS5yaWdodCA9ICcwcHgnO1xuICBlcnJvckRpdi5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gIGVycm9yRGl2LnN0eWxlLnBhZGRpbmcgPSAnMHB4JztcbiAgZXJyb3JEaXYuc3R5bGUubWFyZ2luID0gJ2F1dG8nO1xuXG4gIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjY2NjNyc7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZXJyb3JEaXYpO1xufTtcblxuY29uc3Qgbm9ybWFsaXplQXJndW1lbnRzT2ZFdmVudExpc3RlbmVyID0gKF9vYmplY3RJbnN0YW5jZTogYW55LCBhcmdzOiBhbnlbXSk6IGFueVtdID0+IHtcbiAgaWYgKGFyZ3NbYXJncy5sZW5ndGggLSAxXSBpbnN0YW5jZW9mIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuQmFzZUNsYXNzKSB7XG4gICAgaWYgKGFyZ3NbYXJncy5sZW5ndGggLSAxXS50eXBlID09PSAnTWFwJyB8fCBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0udHlwZSA9PT0gJ1N0cmVldFZpZXdQYW5vcmFtYScpIHtcbiAgICAgIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9IHRoaXM7XG4gICAgfSBlbHNlIGlmIChfb2JqZWN0SW5zdGFuY2UuX19wZ21JZC5pbmRleE9mKCdtYXJrZXJjbHVzdGVyXycpICE9PSAtMSkge1xuICAgICAgY29uc3QgX292ZXJsYXlzOiBhbnkgPSBfb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKSB8fCB7fTtcbiAgICAgIGxldCBvdmVybGF5OiBNYXJrZXIgPSBfb3ZlcmxheXNbYXJnc1thcmdzLmxlbmd0aCAtIDFdLmdldElkKCldO1xuICAgICAgaWYgKCFvdmVybGF5KSB7XG4gICAgICAgIGNvbnN0IG1hcmtlckpTOiBhbnkgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG4gICAgICAgIGNvbnN0IG1hcmtlcklkOiBzdHJpbmcgPSBtYXJrZXJKUy5nZXRJZCgpO1xuICAgICAgICBjb25zdCBtYXJrZXJDbHVzdGVyOiBNYXJrZXJDbHVzdGVyID0gX29iamVjdEluc3RhbmNlIGFzIE1hcmtlckNsdXN0ZXI7XG4gICAgICAgIG92ZXJsYXkgPSBuZXcgTWFya2VyKG1hcmtlckNsdXN0ZXIuZ2V0TWFwKCksIG1hcmtlckpTKTtcbiAgICAgICAgX29iamVjdEluc3RhbmNlLmdldE1hcCgpLmdldCgnX292ZXJsYXlzJylbbWFya2VySWRdID0gb3ZlcmxheTtcbiAgICAgICAgbWFya2VySlMub25lKG1hcmtlckpTLmdldElkKCkgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgICBfb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVttYXJrZXJJZF0gPSBudWxsO1xuICAgICAgICAgIGRlbGV0ZSBfb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVttYXJrZXJJZF07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgYXJnc1thcmdzLmxlbmd0aCAtIDFdID0gb3ZlcmxheTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJnc1thcmdzLmxlbmd0aCAtIDFdID0gX29iamVjdEluc3RhbmNlLmdldE1hcCgpLmdldCgnX292ZXJsYXlzJylbYXJnc1thcmdzLmxlbmd0aCAtIDFdLmdldElkKCldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJncztcbn07XG5cbi8qKlxuICogQGhpZGRlblxuICogaHR0cHM6Ly9naXRodWIuY29tL21hcHNwbHVnaW4vY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcy1kb2MvYmxvYi9tYXN0ZXIvdjIuMC4wL2NsYXNzL0Jhc2VDbGFzcy9SRUFETUUubWRcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcy5CYXNlQ2xhc3MnLFxuICByZXBvOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBCYXNlQ2xhc3Mge1xuICBwcm90ZWN0ZWQgX29iamVjdEluc3RhbmNlOiBhbnk7XG5cbiAgY29uc3RydWN0b3Iob2JqSW5zdGFuY2U/OiBhbnkpIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSB0cnVlKSB7XG4gICAgICBpZiAoIW9iakluc3RhbmNlKSB7XG4gICAgICAgIG9iakluc3RhbmNlID0gbmV3IChHb29nbGVNYXBzLmdldFBsdWdpbigpLkJhc2VDbGFzcykoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gb2JqSW5zdGFuY2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgZXhlY3V0aW5nIGFueSBtZXRob2RzLicpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGV2ZW50IGxpc3RlbmVyLlxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IGV2ZW50IG5hbWUgeW91IHdhbnQgdG8gb2JzZXJ2ZS5cbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgY29uc3QgbmV3QXJncyA9IG5vcm1hbGl6ZUFyZ3VtZW50c09mRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHRoaXMuX29iamVjdEluc3RhbmNlLCBhcmdzKTtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChuZXdBcmdzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cblxuICAvKipcbiAgICogQXR0YWNoZXMgdGhlIGhhbmRsZXIgZm9yIHRoZSBldmVudCB0aGF0IGlzIHRocm93biBieSB0aGUgdGFyZ2V0LCB3aGVyZSB0aGUgbWluaW11bSBpbnRlcnZhbCBiZXR3ZWVuIGV2ZW50cyAoaW4gbWlsbGlzZWNvbmRzKSBpcyBzcGVjaWZpZWQgYXMgYSBwYXJhbWV0ZXIuXG4gICAqIEBwYXJhbSBldmVudE5hbWUge3N0cmluZ30gZXZlbnQgbmFtZSB5b3Ugd2FudCB0byBvYnNlcnZlLlxuICAgKiBAcGFyYW0gdGhyb3R0bGVJbnRlcnZhbCB7bnVtYmVyfSB0aHJvdHRsZSBpbnRlcnZhbCBpbiBtaWxsaXNlY29uZHNcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgLy8gYWRkVGhyb3R0bGVkRXZlbnRMaXN0ZW5lcihldmVudE5hbWU6IHN0cmluZywgdGhyb3R0bGVJbnRlcnZhbDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgLy8gICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyKSA9PiB7XG4gIC8vICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRUaHJvdHRsZWRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gIC8vICAgICAgIGNvbnN0IG5ld0FyZ3MgPSBub3JtYWxpemVBcmd1bWVudHNPZkV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLCB0aGlzLl9vYmplY3RJbnN0YW5jZSwgYXJncyk7XG4gIC8vICAgICAgIG9ic2VydmVyLm5leHQobmV3QXJncyk7XG4gIC8vICAgICB9KTtcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdGhhdCB3b3JrcyBvbmNlLlxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IGV2ZW50IG5hbWUgeW91IHdhbnQgdG8gb2JzZXJ2ZS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRFdmVudExpc3RlbmVyT25jZShldmVudE5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55PigocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2Uub25lKGV2ZW50TmFtZSwgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0FyZ3MgPSBub3JtYWxpemVBcmd1bWVudHNPZkV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLCB0aGlzLl9vYmplY3RJbnN0YW5jZSwgYXJncyk7XG4gICAgICAgIHJlc29sdmUobmV3QXJncyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKiBBZGRzIGFuIGV2ZW50IGxpc3RlbmVyIHRoYXQgd29ya3Mgb25jZS5cbiAgICogQHBhcmFtIGV2ZW50TmFtZSB7c3RyaW5nfSBldmVudCBuYW1lIHlvdSB3YW50IHRvIG9ic2VydmUuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkTGlzdGVuZXJPbmNlKGV2ZW50TmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zb2xlLndhcm4oJ1tHb29nbGVNYXBzXSBcImFkZExpc3RlbmVyT25jZVwiIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgXCJhZGRFdmVudExpc3RlbmVyT25jZVwiLicpO1xuICAgIHJldHVybiB0aGlzLmFkZEV2ZW50TGlzdGVuZXJPbmNlKGV2ZW50TmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIHZhbHVlXG4gICAqIEBwYXJhbSBrZXkge2FueX1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldChrZXk6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSB2YWx1ZVxuICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IFRoZSBrZXkgbmFtZSBmb3IgdGhlIHZhbHVlLiBgKGtleSlfY2hhbmdlZGAgd2lsbCBiZSBmaXJlZCB3aGVuIHlvdSBzZXQgdmFsdWUgdGhyb3VnaCB0aGlzIG1ldGhvZC5cbiAgICogQHBhcmFtIHZhbHVlIHthbnl9XG4gICAqIEBwYXJhbSBub05vdGlmeSB7Ym9vbGVhbn0gW29wdGlvbnNdIFRydWUgaWYgeW91IHdhbnQgdG8gcHJldmVudCBmaXJpbmcgdGhlIGAoa2V5KV9jaGFuZ2VkYCBldmVudC5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgbm9Ob3RpZnk/OiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogQmluZCBhIGtleSB0byBhbm90aGVyIG9iamVjdFxuICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IFRoZSBwcm9wZXJ0eSBuYW1lIHlvdSB3YW50IHRvIG9ic2VydmUuXG4gICAqIEBwYXJhbSB0YXJnZXQge2FueX0gVGhlIHRhcmdldCBvYmplY3QgeW91IHdhbnQgdG8gb2JzZXJ2ZS5cbiAgICogQHBhcmFtIHRhcmdldEtleT8ge3N0cmluZ30gW29wdGlvbnNdICBUaGUgcHJvcGVydHkgbmFtZSB5b3Ugd2FudCB0byBvYnNlcnZlLiBJZiB5b3Ugb21pdCB0aGlzLCB0aGUgYGtleWAgYXJndW1lbnQgaXMgdXNlZC5cbiAgICogQHBhcmFtIG5vTm90aWZ5PyB7Ym9vbGVhbn0gW29wdGlvbnNdIFRydWUgaWYgeW91IHdhbnQgdG8gcHJldmVudCBgKGtleSlfY2hhbmdlZGAgZXZlbnQgd2hlbiB5b3UgYmluZCBmaXJzdCB0aW1lLCBiZWNhdXNlIHRoZSBpbnRlcm5hbCBzdGF0dXMgaXMgY2hhbmdlZCBmcm9tIGB1bmRlZmluZWRgIHRvIHNvbWV0aGluZy5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGJpbmRUbyhrZXk6IHN0cmluZywgdGFyZ2V0OiBhbnksIHRhcmdldEtleT86IHN0cmluZywgbm9Ob3RpZnk/OiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogQWxpYXMgb2YgYGFkZEV2ZW50TGlzdGVuZXJgXG4gICAqIEBwYXJhbSBrZXkge3N0cmluZ30gVGhlIHByb3BlcnR5IG5hbWUgeW91IHdhbnQgdG8gb2JzZXJ2ZS5cbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIG9uKGV2ZW50TmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5vbihldmVudE5hbWUsICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdBcmdzID0gbm9ybWFsaXplQXJndW1lbnRzT2ZFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdGhpcy5fb2JqZWN0SW5zdGFuY2UsIGFyZ3MpO1xuICAgICAgICBvYnNlcnZlci5uZXh0KG5ld0FyZ3MpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWxpYXMgb2YgYGFkZFRocm90dGxlZEV2ZW50TGlzdGVuZXJgXG4gICAqIEBwYXJhbSBrZXkge3N0cmluZ30gVGhlIHByb3BlcnR5IG5hbWUgeW91IHdhbnQgdG8gb2JzZXJ2ZS5cbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgLy8gQEluc3RhbmNlQ2hlY2soeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIC8vIG9uVGhyb3R0bGVkKGV2ZW50TmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgLy8gICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyKSA9PiB7XG4gIC8vICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5vblRocm90dGxlZChldmVudE5hbWUsICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAvLyAgICAgICBjb25zdCBuZXdBcmdzID0gbm9ybWFsaXplQXJndW1lbnRzT2ZFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdGhpcy5fb2JqZWN0SW5zdGFuY2UsIGFyZ3MpO1xuICAvLyAgICAgICBvYnNlcnZlci5uZXh0KG5ld0FyZ3MpO1xuICAvLyAgICAgfSk7XG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICAvKipcbiAgICogQWxpYXMgb2YgYGFkZEV2ZW50TGlzdGVuZXJPbmNlYFxuICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IFRoZSBwcm9wZXJ0eSBuYW1lIHlvdSB3YW50IHRvIG9ic2VydmUuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgb25lKGV2ZW50TmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5vbmUoZXZlbnROYW1lLCAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgY29uc3QgbmV3QXJncyA9IG5vcm1hbGl6ZUFyZ3VtZW50c09mRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHRoaXMuX29iamVjdEluc3RhbmNlLCBhcmdzKTtcbiAgICAgICAgcmVzb2x2ZShuZXdBcmdzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0cnVlIGlmIHRoaXMgb2JqZWN0IGhhcyBldmVudCBsaXN0ZW5lciBmb3IgZXZlbnQgbmFtZVxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IEV2ZW50IG5hbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGhhc0V2ZW50TGlzdGVuZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbGwgc3RvcmVkIHZhbHVlc1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZW1wdHkoKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2ggZXZlbnQuXG4gICAqIEBwYXJhbSBldmVudE5hbWUge3N0cmluZ30gRXZlbnQgbmFtZVxuICAgKiBAcGFyYW0gcGFyYW1ldGVycyB7YW55fSBbb3B0aW9uc10gVGhlIGRhdGEgeW91IHdhbnQgdG8gcGFzcyB0byBldmVudCBsaXN0ZXJuZXJzLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgdHJpZ2dlcihldmVudE5hbWU6IHN0cmluZywgLi4ucGFyYW1ldGVyczogYW55W10pOiB2b2lkIHtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVzIG9mZigpIGFuZCBlbXB0eSgpXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9vYmplY3RJbnN0YW5jZS50eXBlID09PSAnTWFwJykge1xuICAgICAgY29uc3QgbWFwOiBHb29nbGVNYXAgPSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKTtcbiAgICAgIGlmIChtYXApIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX29iamVjdEluc3RhbmNlLmdldE1hcCgpLmdldCgnX292ZXJsYXlzJylbdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0SWQoKV07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBldmVudCBsaXN0ZW5lcihzKVxuICAgKiBUaGUgYHJlbW92ZUV2ZW50TGlzdGVuZXIoKWAgaGFzIHRocmVlIHVzYWdlczpcbiAgICogIC0gcmVtb3ZlRXZlbnRMaXN0ZW5lcihcImV2ZW50TmFtZVwiLCBsaXN0ZW5lckZ1bmN0aW9uKTtcbiAgICogICAgIFRoaXMgcmVtb3ZlcyBvbmUgcGFydGljdWxhciBldmVudCBsaXN0ZW5lclxuICAgKiAgLSByZW1vdmVFdmVudExpc3RlbmVyKFwiZXZlbnROYW1lXCIpO1xuICAgKiAgICAgVGhpcyByZW1vdmVzIHRoZSBldmVudCBsaXN0ZW5lcnMgdGhhdCBhZGRlZCBmb3IgdGhlIGV2ZW50IG5hbWUuXG4gICAqICAtIHJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcbiAgICogICAgIFRoaXMgcmVtb3ZlcyBhbGwgbGlzdGVuZXJzLlxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IFtvcHRpb25zXSBFdmVudCBuYW1lXG4gICAqIEBwYXJhbSBsaXN0ZW5lciB7RnVuY3Rpb259IFtvcHRpb25zXSBFdmVudCBsaXN0ZW5lclxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWU/OiBzdHJpbmcsIGxpc3RlbmVyPzogKC4uLnBhcmFtZXRlcnM6IGFueVtdKSA9PiB2b2lkKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBBbGlhcyBvZiBgcmVtb3ZlRXZlbnRMaXN0ZW5lcmBcbiAgICpcbiAgICogQHBhcmFtIGV2ZW50TmFtZSB7c3RyaW5nfSBbb3B0aW9uc10gRXZlbnQgbmFtZVxuICAgKiBAcGFyYW0gbGlzdGVuZXIge0Z1bmN0aW9ufSBbb3B0aW9uc10gRXZlbnQgbGlzdGVuZXJcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIG9mZihldmVudE5hbWU/OiBzdHJpbmcsIGxpc3RlbmVyPzogKC4uLnBhcmFtZXRlcnM6IGFueVtdKSA9PiB2b2lkKTogdm9pZCB7fVxuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICogaHR0cHM6Ly9naXRodWIuY29tL21hcHNwbHVnaW4vY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcy1kb2MvYmxvYi9tYXN0ZXIvdjIuMC4wL2NsYXNzL0Jhc2VBcnJheUNsYXNzL1JFQURNRS5tZFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0Jhc2VBcnJheUNsYXNzJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcy5CYXNlQXJyYXlDbGFzcydcbn0pXG5leHBvcnQgY2xhc3MgQmFzZUFycmF5Q2xhc3M8VD4gZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxEYXRhPzogVFtdIHwgYW55KSB7XG4gICAgaWYgKGluaXRpYWxEYXRhIGluc3RhbmNlb2YgR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5CYXNlQXJyYXlDbGFzcykge1xuICAgICAgc3VwZXIoaW5pdGlhbERhdGEpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShpbml0aWFsRGF0YSkpIHtcbiAgICAgIHN1cGVyKG5ldyAoR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5CYXNlQXJyYXlDbGFzcykoaW5pdGlhbERhdGEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3VwZXIobmV3IChHb29nbGVNYXBzLmdldFBsdWdpbigpLkJhc2VBcnJheUNsYXNzKShbXSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFsbCBlbGVtZW50cyBmcm9tIHRoZSBhcnJheS5cbiAgICogQHBhcmFtIG5vTm90aWZ5PyB7Ym9vbGVhbn0gW29wdGlvbnNdIFNldCB0cnVlIHRvIHByZXZlbnQgcmVtb3ZlX2F0IGV2ZW50cy5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGVtcHR5KG5vTm90aWZ5PzogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGUgb3ZlciBlYWNoIGVsZW1lbnQsIGNhbGxpbmcgdGhlIHByb3ZpZGVkIGNhbGxiYWNrLlxuICAgKiBAcGFyYW0gZm4ge0Z1bmN0aW9ufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZm9yRWFjaChmbjogKGVsZW1lbnQ6IFQsIGluZGV4PzogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZSBvdmVyIGVhY2ggZWxlbWVudCwgY2FsbGluZyB0aGUgcHJvdmlkZWQgY2FsbGJhY2suXG4gICAqIEBwYXJhbSBmbiB7RnVuY3Rpb259XG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBmb3JFYWNoQXN5bmMoZm46ICgoZWxlbWVudDogVCwgY2FsbGJhY2s6ICgpID0+IHZvaWQpID0+IHZvaWQpKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmZvckVhY2goZm4sIHJlc29sdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGUgb3ZlciBlYWNoIGVsZW1lbnQsIHRoZW4gUmV0dXJucyBhIG5ldyB2YWx1ZS5cbiAgICogVGhlbiB5b3UgY2FuIGdldCB0aGUgcmVzdWx0cyBvZiBlYWNoIGNhbGxiYWNrLlxuICAgKiBAcGFyYW0gZm4ge0Z1bmN0aW9ufVxuICAgKiBAcmV0dXJuIHtPYmplY3RbXX0gcmV0dXJucyBhIG5ldyBhcnJheSB3aXRoIHRoZSByZXN1bHRzXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBtYXAoZm46IChlbGVtZW50OiBULCBpbmRleDogbnVtYmVyKSA9PiBhbnkpOiBhbnlbXSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGUgb3ZlciBlYWNoIGVsZW1lbnQsIGNhbGxpbmcgdGhlIHByb3ZpZGVkIGNhbGxiYWNrLlxuICAgKiBUaGVuIHlvdSBjYW4gZ2V0IHRoZSByZXN1bHRzIG9mIGVhY2ggY2FsbGJhY2suXG4gICAqIEBwYXJhbSBmbiB7RnVuY3Rpb259XG4gICAqIEBwYXJhbSBjYWxsYmFjayB7RnVuY3Rpb259XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIG5ldyBhcnJheSB3aXRoIHRoZSByZXN1bHRzXG4gICAqL1xuICBtYXBBc3luYyhmbjogKChlbGVtZW50OiBULCBjYWxsYmFjazogKG5ld0VsZW1lbnQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZCkpOiBQcm9taXNlPGFueVtdPiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55W10+KChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5tYXAoZm4sIHJlc29sdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhbWUgYXMgYG1hcEFzeW5jYCwgYnV0IGtlZXAgdGhlIGV4ZWN1dGlvbiBvcmRlclxuICAgKiBAcGFyYW0gZm4ge0Z1bmN0aW9ufVxuICAgKiBAcGFyYW0gY2FsbGJhY2sge0Z1bmN0aW9ufVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBuZXcgYXJyYXkgd2l0aCB0aGUgcmVzdWx0c1xuICAgKi9cbiAgbWFwU2VyaWVzKGZuOiAoKGVsZW1lbnQ6IFQsIGNhbGxiYWNrOiAobmV3RWxlbWVudDogYW55KSA9PiB2b2lkKSA9PiB2b2lkKSk6IFByb21pc2U8YW55W10+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnlbXT4oKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLm1hcFNlcmllcyhmbiwgcmVzb2x2ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGZpbHRlcigpIG1ldGhvZCBjcmVhdGVzIGEgbmV3IGFycmF5IHdpdGggYWxsIGVsZW1lbnRzIHRoYXQgcGFzcyB0aGUgdGVzdCBpbXBsZW1lbnRlZCBieSB0aGUgcHJvdmlkZWQgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSBmbiB7RnVuY3Rpb259XG4gICAqIEByZXR1cm4ge1RbXX0gcmV0dXJucyBhIG5ldyBmaWx0ZXJlZCBhcnJheVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZmlsdGVyKGZuOiAoZWxlbWVudDogVCwgaW5kZXg6IG51bWJlcikgPT4gYm9vbGVhbik6IFRbXSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBmaWx0ZXJBc3luYygpIG1ldGhvZCBjcmVhdGVzIGEgbmV3IGFycmF5IHdpdGggYWxsIGVsZW1lbnRzIHRoYXQgcGFzcyB0aGUgdGVzdCBpbXBsZW1lbnRlZCBieSB0aGUgcHJvdmlkZWQgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSBmbiB7RnVuY3Rpb259XG4gICAqIEBwYXJhbSBjYWxsYmFjayB7RnVuY3Rpb259XG4gICAqIEByZXR1cm4ge1Byb21pc2U8VFtdPn0gcmV0dXJucyBhIG5ldyBmaWx0ZXJlZCBhcnJheVxuICAgKi9cbiAgZmlsdGVyQXN5bmMoZm46IChlbGVtZW50OiBULCBjYWxsYmFjazogKHJlc3VsdDogYm9vbGVhbikgPT4gdm9pZCkgPT4gdm9pZCk6IFByb21pc2U8VFtdPiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55W10+KChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5maWx0ZXIoZm4sIHJlc29sdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIHVuZGVybHlpbmcgQXJyYXkuXG4gICAqIEByZXR1cm4ge09iamVjdFtdfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0QXJyYXkoKTogVFtdIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgKiBAcGFyYW0gaW5kZXgge251bWJlcn1cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0QXQoaW5kZXg6IG51bWJlcik6IGFueSB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIHRoZSBlbGVtZW50cy5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0TGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBpbmRleE9mKCkgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGluZGV4IGF0IHdoaWNoIGEgZ2l2ZW4gZWxlbWVudCBjYW4gYmUgZm91bmQgaW4gdGhlIGFycmF5LCBvciAtMSBpZiBpdCBpcyBub3QgcHJlc2VudC5cbiAgICogQHBhcmFtIGVsZW1lbnQge09iamVjdH1cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgaW5kZXhPZihlbGVtZW50OiBUKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhlIHJldmVyc2UoKSBtZXRob2QgcmV2ZXJzZXMgYW4gYXJyYXkgaW4gcGxhY2UuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICByZXZlcnNlKCk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBzb3J0KCkgbWV0aG9kIHNvcnRzIHRoZSBlbGVtZW50cyBvZiBhbiBhcnJheSBpbiBwbGFjZSBhbmQgcmV0dXJucyB0aGUgYXJyYXkuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzb3J0KCk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydHMgYW4gZWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgKiBAcGFyYW0gaW5kZXgge251bWJlcn1cbiAgICogQHBhcmFtIGVsZW1lbnQge09iamVjdH1cbiAgICogQHBhcmFtIG5vTm90aWZ5PyB7Ym9vbGVhbn0gW29wdGlvbnNdIFNldCB0cnVlIHRvIHByZXZlbnQgaW5zZXJ0X2F0IGV2ZW50LlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBpbnNlcnRBdChpbmRleDogbnVtYmVyLCBlbGVtZW50OiBULCBub05vdGlmeT86IGJvb2xlYW4pIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBsYXN0IGVsZW1lbnQgb2YgdGhlIGFycmF5IGFuZCByZXR1cm5zIHRoYXQgZWxlbWVudC5cbiAgICogQHBhcmFtIG5vTm90aWZ5PyB7Ym9vbGVhbn0gW29wdGlvbnNdIFNldCB0cnVlIHRvIHByZXZlbnQgcmVtb3ZlX2F0IGV2ZW50LlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBwb3Aobm9Ob3RpZnk/OiBib29sZWFuKTogVCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgb25lIGVsZW1lbnQgdG8gdGhlIGVuZCBvZiB0aGUgYXJyYXkgYW5kIHJldHVybnMgdGhlIG5ldyBsZW5ndGggb2YgdGhlIGFycmF5LlxuICAgKiBAcGFyYW0gZWxlbWVudCB7b2JqZWN0fVxuICAgKiBAcGFyYW0gbm9Ob3RpZnk/IHtib29sZWFufSBTZXQgdHJ1ZSB0byBwcmV2ZW50IGluc2VydF9hdCBldmVudHMuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBwdXNoKGVsZW1lbnQ6IFQsIG5vTm90aWZ5PzogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gZWxlbWVudCBmcm9tIHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAqIEBwYXJhbSBpbmRleCB7bnVtYmVyfVxuICAgKiBAcGFyYW0gbm9Ob3RpZnk/IHtib29sZWFufSBbb3B0aW9uc10gU2V0IHRydWUgdG8gcHJldmVudCByZW1vdmVfYXQgZXZlbnQuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICByZW1vdmVBdChpbmRleDogbnVtYmVyLCBub05vdGlmeT86IGJvb2xlYW4pOiBUIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFNldHMgYW4gZWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgKiBAcGFyYW0gaW5kZXgge251bWJlcn1cbiAgICogQHBhcmFtIGVsZW1lbnQge29iamVjdH1cbiAgICogQHBhcmFtIG5vTm90aWZ5PyB7Ym9vbGVhbn0gW29wdGlvbnNdIFNldCB0cnVlIHRvIHByZXZlbnQgc2V0X2F0IGV2ZW50LlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0QXQoaW5kZXg6IG51bWJlciwgZWxlbWVudDogVCwgbm9Ob3RpZnk/OiBib29sZWFuKTogdm9pZCB7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWFwc3BsdWdpbi9jb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzLWRvYy9ibG9iL21hc3Rlci92Mi4wLjAvY2xhc3MvQ2lyY2xlL1JFQURNRS5tZFxuICovXG5leHBvcnQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgQmFzZUNsYXNzIHtcblxuICBwcml2YXRlIF9tYXA6IEdvb2dsZU1hcDtcblxuICBjb25zdHJ1Y3RvcihfbWFwOiBHb29nbGVNYXAsIF9vYmplY3RJbnN0YW5jZTogYW55KSB7XG4gICAgc3VwZXIoX29iamVjdEluc3RhbmNlKTtcbiAgICB0aGlzLl9tYXAgPSBfbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIElEIG9mIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXAgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge0dvb2dsZU1hcH1cbiAgICovXG4gIGdldE1hcCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9tYXA7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgY2VudGVyIHBvc2l0aW9uLlxuICAgKiBAcGFyYW0gbGF0TG5nIHtJTGF0TG5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q2VudGVyKGxhdExuZzogSUxhdExuZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgY2VudGVyIHBvc2l0aW9uXG4gICAqIEByZXR1cm4ge0lMYXRMbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRDZW50ZXIoKTogSUxhdExuZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgY2lyY2xlIHJhZGl1cy5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0UmFkaXVzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGNpcmNsZSByYWRpdXMuXG4gICAqIEBwYXJhbSByYWRpdXMge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFJhZGl1cyhyYWRpdXM6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGZpbGxpbmcgY29sb3IgKGlubmVyIGNvbG9yKS5cbiAgICogQHBhcmFtIGNvbG9yIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRGaWxsQ29sb3IoY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgY2lyY2xlIGZpbGxpbmcgY29sb3IgKGlubmVyIGNvbG9yKS5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0RmlsbENvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHN0cm9rZSB3aWR0aC5cbiAgICogQHBhcmFtIHN0cm9rZVdpZHRoIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRTdHJva2VXaWR0aChzdHJva2VXaWR0aDogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBjaXJjbGUgc3Ryb2tlIHdpZHRoICh1bml0OiBwaXhlbCkuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFN0cm9rZVdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHN0cm9rZSBjb2xvciAob3V0dGVyIGNvbG9yKS5cbiAgICogQHBhcmFtIHN0cm9rZUNvbG9yIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRTdHJva2VDb2xvcihzdHJva2VDb2xvcjogc3RyaW5nKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBjaXJjbGUgc3Ryb2tlIGNvbG9yIChvdXRlciBjb2xvcikuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFN0cm9rZUNvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgY2xpY2stYWJpbGl0eSBvZiB0aGUgY2lyY2xlLlxuICAgKiBAcGFyYW0gY2xpY2thYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q2xpY2thYmxlKGNsaWNrYWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgY2lyY2xlIGlzIGNsaWNrYWJsZS5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldENsaWNrYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgY2lyY2xlIHpJbmRleCBvcmRlci5cbiAgICogQHBhcmFtIHpJbmRleCB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0WkluZGV4KHpJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBjaXJjbGUgekluZGV4LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRaSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjaXJjbGUuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVtb3ZlKCk6IHZvaWQge1xuICAgIGRlbGV0ZSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpW3RoaXMuZ2V0SWQoKV07XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlKCk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGF0TG5nQm91bmRzIChyZWN0YW5nbGUpIHRoYXQgY29udGFpbnMgdGhlIGNpcmNsZS5cbiAgICogQHJldHVybiB7TGF0TG5nQm91bmRzfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Qm91bmRzKCk6IExhdExuZ0JvdW5kcyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjaXJjbGUgdmlzaWJpbGl0eVxuICAgKiBAcGFyYW0gdmlzaWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgY2lyY2xlIGlzIHZpc2libGUuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcy5lbnZpcm9ubWVudCcsXG4gIHJlcG86ICcnXG59KVxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcblxuICAvKipcbiAgICogU2V0IGVudmlyb25tZW50IHZhcmlhYmxlcy5cbiAgICovXG4gIHN0YXRpYyBzZXRFbnYoZW52T3B0aW9uczogRW52T3B0aW9ucyk6IHZvaWQge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5lbnZpcm9ubWVudC5zZXRFbnYoZW52T3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBvcGVuIHNvdXJjZSBzb2Z0d2FyZSBsaWNlbnNlIGluZm9ybWF0aW9uIGZvciBHb29nbGUgTWFwcyBTREsgZm9yIGlPUy5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgc3RhdGljIGdldExpY2Vuc2VJbmZvKCk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlKSA9PiB7XG4gICAgICBHb29nbGVNYXBzLmdldFBsdWdpbigpLmVudmlyb25tZW50LmdldExpY2Vuc2VJbmZvKCh0ZXh0OiBzdHJpbmcpID0+IHJlc29sdmUodGV4dCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgYXBwLlxuICAgKiBAcGFyYW0gY29sb3JcbiAgICovXG4gIHN0YXRpYyBzZXRCYWNrZ3JvdW5kQ29sb3IoY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5lbnZpcm9ubWVudC5zZXRCYWNrZ3JvdW5kQ29sb3IoY29sb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvbiBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgRW52aXJvbm1lbnQuZ2V0TGljZW5zZUluZm8oKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBnZXRMaWNlbnNlSW5mbygpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBFbnZpcm9ubWVudC5nZXRMaWNlbnNlSW5mbygpJyk7XG4gICAgcmV0dXJuIEVudmlyb25tZW50LmdldExpY2Vuc2VJbmZvKCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0aW9uIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBFbnZpcm9ubWVudC5zZXRCYWNrZ3JvdW5kQ29sb3IoKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBzZXRCYWNrZ3JvdW5kQ29sb3IoY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBFbnZpcm9ubWVudC5zZXRCYWNrZ3JvdW5kQ29sb3IoKScpO1xuICAgIEVudmlyb25tZW50LnNldEJhY2tncm91bmRDb2xvcihjb2xvcik7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcy5HZW9jb2RlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICByZXBvOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBHZW9jb2RlciB7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvbiBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgR2VvY29kZXIuZ2VvY29kZSgpXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGdlb2NvZGUocmVxdWVzdDogR2VvY29kZXJSZXF1ZXN0KTogUHJvbWlzZTxHZW9jb2RlclJlc3VsdFtdIHwgQmFzZUFycmF5Q2xhc3M8R2VvY29kZXJSZXN1bHRbXT4+IHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgR2VvY29kZXIuZ2VvY29kZSgpJyk7XG4gICAgcmV0dXJuIEdlb2NvZGVyLmdlb2NvZGUocmVxdWVzdCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgcG9zaXRpb24gdG8gYWRkcmVzcyBhbmQgdmljZSB2ZXJzYVxuICAgKiBAcGFyYW0ge0dlb2NvZGVyUmVxdWVzdH0gcmVxdWVzdCBSZXF1ZXN0IG9iamVjdCB3aXRoIGVpdGhlciBhbiBhZGRyZXNzIG9yIGEgcG9zaXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxHZW9jb2RlclJlc3VsdFtdIHwgQmFzZUFycmF5Q2xhc3M8R2VvY29kZXJSZXN1bHQ+Pn1cbiAgICovXG4gIHN0YXRpYyBnZW9jb2RlKHJlcXVlc3Q6IEdlb2NvZGVyUmVxdWVzdCk6IFByb21pc2U8R2VvY29kZXJSZXN1bHRbXSB8IEJhc2VBcnJheUNsYXNzPEdlb2NvZGVyUmVzdWx0W10+PiB7XG5cbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIGlmIChyZXF1ZXN0LmFkZHJlc3MgaW5zdGFuY2VvZiBBcnJheSB8fCBBcnJheS5pc0FycmF5KHJlcXVlc3QuYWRkcmVzcykgfHxcbiAgICAgIHJlcXVlc3QucG9zaXRpb24gaW5zdGFuY2VvZiBBcnJheSB8fCBBcnJheS5pc0FycmF5KHJlcXVlc3QucG9zaXRpb24pKSB7XG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBHZW9jb2Rlci5nZW9jb2RlKHtcbiAgICAgIC8vICAgYWRkcmVzczogW1xuICAgICAgLy8gICAgXCJLeW90bywgSmFwYW5cIixcbiAgICAgIC8vICAgIFwiVG9reW8sIEphcGFuXCJcbiAgICAgIC8vICAgXVxuICAgICAgLy8gfSlcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIHJldHVybiBnZXRQcm9taXNlPEJhc2VBcnJheUNsYXNzPEdlb2NvZGVyUmVzdWx0W10+PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuR2VvY29kZXIuZ2VvY29kZShyZXF1ZXN0LCAobXZjQXJyYXk6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChtdmNBcnJheSkge1xuICAgICAgICAgICAgcmVzb2x2ZShuZXcgQmFzZUFycmF5Q2xhc3MobXZjQXJyYXkpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBHZW9jb2Rlci5nZW9jb2RlKHtcbiAgICAgIC8vICAgYWRkcmVzczogXCJLeW90bywgSmFwYW5cIlxuICAgICAgLy8gfSlcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIHJldHVybiBnZXRQcm9taXNlPEdlb2NvZGVyUmVzdWx0W10+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5HZW9jb2Rlci5nZW9jb2RlKHJlcXVlc3QsIChyZXN1bHRzOiBHZW9jb2RlclJlc3VsdFtdKSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdHMpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdHb29nbGVNYXBzJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2luLmdvb2dsZS5tYXBzLkxvY2F0aW9uU2VydmljZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICByZXBvOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBMb2NhdGlvblNlcnZpY2Uge1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgZGV2aWNlIGxvY2F0aW9uIHdpdGhvdXQgbWFwXG4gICAqIEByZXR1cm4ge1Byb21pc2U8TXlMb2NhdGlvbj59XG4gICAqL1xuICBzdGF0aWMgZ2V0TXlMb2NhdGlvbihvcHRpb25zPzogTXlMb2NhdGlvbk9wdGlvbnMpOiBQcm9taXNlPE15TG9jYXRpb24+IHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBnZXRQcm9taXNlPE15TG9jYXRpb24+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuTG9jYXRpb25TZXJ2aWNlLmdldE15TG9jYXRpb24ob3B0aW9ucywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHRydWUgaWYgdGhlIGFwcGxpY2F0aW9uIGhhcyBnZW9sb2NhdGlvbiBwZXJtaXNzaW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBzdGF0aWMgaGFzUGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBnZXRQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuTG9jYXRpb25TZXJ2aWNlLmhhc1Blcm1pc3Npb24ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdHb29nbGVNYXBzJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2luLmdvb2dsZS5tYXBzLmdlb21ldHJ5LmVuY29kaW5nJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcycsXG4gIHJlcG86ICcnXG59KVxuZXhwb3J0IGNsYXNzIEVuY29kaW5nIHtcblxuICAvKipcbiAgICogRGVjb2RlcyBhbiBlbmNvZGVkIHBhdGggc3RyaW5nIGludG8gYSBzZXF1ZW5jZSBvZiBMYXRMbmdzLlxuICAgKiBAcGFyYW0gZW5jb2RlZCB7c3RyaW5nfSBhbiBlbmNvZGVkIHBhdGggc3RyaW5nXG4gICAqIEBwYXJhbSBwcmVjaXNpb24/IHtudW1iZXJ9IGRlZmF1bHQ6IDVcbiAgICogQHJldHVybiB7TGF0TG5nfVxuICAgKi9cbiAgc3RhdGljIGRlY29kZVBhdGgoZW5jb2RlZDogc3RyaW5nLCBwcmVjaXNpb24/OiBudW1iZXIpOiBJTGF0TG5nW10ge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZW5jb2RpbmcuZGVjb2RlUGF0aChlbmNvZGVkLCBwcmVjaXNpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuY29kZXMgYSBzZXF1ZW5jZSBvZiBMYXRMbmdzIGludG8gYW4gZW5jb2RlZCBwYXRoIHN0cmluZy5cbiAgICogQHBhcmFtIHBhdGgge0lMYXRMbmdbXSB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+fSBhIHNlcXVlbmNlIG9mIExhdExuZ3NcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGVuY29kZVBhdGgocGF0aDogSUxhdExuZ1tdIHwgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz4pOiBzdHJpbmcge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZW5jb2RpbmcuZW5jb2RlUGF0aChwYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb24gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIEVuY29kaW5nLmRlY29kZVBhdGgoKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBkZWNvZGVQYXRoKGVuY29kZWQ6IHN0cmluZywgcHJlY2lzaW9uPzogbnVtYmVyKTogSUxhdExuZ1tdIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgRW5jb2RpbmcuZGVjb2RlUGF0aCgpJyk7XG4gICAgcmV0dXJuIEVuY29kaW5nLmRlY29kZVBhdGgoZW5jb2RlZCwgcHJlY2lzaW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb24gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIEVuY29kaW5nLmVuY29kZVBhdGgoKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBlbmNvZGVQYXRoKHBhdGg6IElMYXRMbmdbXSB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+KTogc3RyaW5nIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgRW5jb2RpbmcuZW5jb2RlUGF0aCgpJyk7XG4gICAgcmV0dXJuIEVuY29kaW5nLmVuY29kZVBhdGgocGF0aCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcy5nZW9tZXRyeS5wb2x5JyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcycsXG4gIHJlcG86ICcnXG59KVxuZXhwb3J0IGNsYXNzIFBvbHkge1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHNwZWNpZmllZCBsb2NhdGlvbiBpcyBpbiB0aGUgcG9seWdvbiBwYXRoXG4gICAqIEBwYXJhbSBsb2NhdGlvbiB7SUxhdExuZ31cbiAgICogQHBhcmFtIHBhdGgge0lMYXRMbmdbXX1cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBjb250YWluc0xvY2F0aW9uKGxvY2F0aW9uOiBJTGF0TG5nLCBwYXRoOiBJTGF0TG5nW10pOiBib29sZWFuIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LnBvbHkuY29udGFpbnNMb2NhdGlvbihsb2NhdGlvbiwgcGF0aCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBzcGVjaWZpZWQgbG9jYXRpb24gaXMgb24gdGhlIHBvbHlsaW5lIHBhdGhcbiAgICogQHBhcmFtIGxvY2F0aW9uIHtJTGF0TG5nfVxuICAgKiBAcGFyYW0gcGF0aCB7SUxhdExuZ1tdfVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGlzTG9jYXRpb25PbkVkZ2UobG9jYXRpb246IElMYXRMbmcsIHBhdGg6IElMYXRMbmdbXSk6IGJvb2xlYW4ge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZ2VvbWV0cnkucG9seS5pc0xvY2F0aW9uT25FZGdlKGxvY2F0aW9uLCBwYXRoKTtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdHb29nbGVNYXBzJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2luLmdvb2dsZS5tYXBzLmdlb21ldHJ5LnNwaGVyaWNhbCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICByZXBvOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBTcGhlcmljYWwge1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBkaXN0YW5jZSwgaW4gbWV0ZXJzLCBiZXR3ZWVuIHR3byBMYXRMbmdzLlxuICAgKiBAcGFyYW0gbG9jYXRpb25BIHtJTGF0TG5nfVxuICAgKiBAcGFyYW0gbG9jYXRpb25CIHtJTGF0TG5nfVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBzdGF0aWMgY29tcHV0ZURpc3RhbmNlQmV0d2Vlbihmcm9tOiBJTGF0TG5nLCB0bzogSUxhdExuZyk6IG51bWJlciB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICByZXR1cm4gR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5nZW9tZXRyeS5zcGhlcmljYWwuY29tcHV0ZURpc3RhbmNlQmV0d2Vlbihmcm9tLCB0byk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgTGF0TG5nIHJlc3VsdGluZyBmcm9tIG1vdmluZyBhIGRpc3RhbmNlIGZyb20gYW4gb3JpZ2luIGluIHRoZSBzcGVjaWZpZWQgaGVhZGluZyAoZXhwcmVzc2VkIGluIGRlZ3JlZXMgY2xvY2t3aXNlIGZyb20gbm9ydGgpXG4gICAqIEBwYXJhbSBmcm9tIHtJTGF0TG5nfVxuICAgKiBAcGFyYW0gZGlzdGFuY2Uge251bWJlcn1cbiAgICogQHBhcmFtIGhlYWRpbmcge251bWJlcn1cbiAgICogQHJldHVybiB7TGF0TG5nfVxuICAgKi9cbiAgc3RhdGljIGNvbXB1dGVPZmZzZXQoZnJvbTogSUxhdExuZywgZGlzdGFuY2U6IG51bWJlciwgaGVhZGluZzogbnVtYmVyKTogTGF0TG5nIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlT2Zmc2V0KGZyb20sIGRpc3RhbmNlLCBoZWFkaW5nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsb2NhdGlvbiBvZiBvcmlnaW4gd2hlbiBwcm92aWRlZCB3aXRoIGEgTGF0TG5nIGRlc3RpbmF0aW9uLCBtZXRlcnMgdHJhdmVsbGVkIGFuZCBvcmlnaW5hbCBoZWFkaW5nLiBIZWFkaW5ncyBhcmUgZXhwcmVzc2VkIGluIGRlZ3JlZXMgY2xvY2t3aXNlIGZyb20gTm9ydGguIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBudWxsIHdoZW4gbm8gc29sdXRpb24gaXMgYXZhaWxhYmxlLlxuICAgKiBAcGFyYW0gdG8ge0lMYXRMbmd9IFRoZSBkZXN0aW5hdGlvbiBMYXRMbmcuXG4gICAqIEBwYXJhbSBkaXN0YW5jZSB7bnVtYmVyfSBUaGUgZGlzdGFuY2UgdHJhdmVsbGVkLCBpbiBtZXRlcnMuXG4gICAqIEBwYXJhbSBoZWFkaW5nIHtudW1iZXJ9IFRoZSBoZWFkaW5nIGluIGRlZ3JlZXMgY2xvY2t3aXNlIGZyb20gbm9ydGguXG4gICAqIEByZXR1cm4ge0xhdExuZ31cbiAgICovXG4gIHN0YXRpYyBjb21wdXRlT2Zmc2V0T3JpZ2luKHRvOiBJTGF0TG5nLCBkaXN0YW5jZTogbnVtYmVyLCBoZWFkaW5nOiBudW1iZXIpOiBMYXRMbmcge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZ2VvbWV0cnkuc3BoZXJpY2FsLmNvbXB1dGVPZmZzZXRPcmlnaW4odG8sIGRpc3RhbmNlLCBoZWFkaW5nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsZW5ndGggb2YgdGhlIGdpdmVuIHBhdGguXG4gICAqIEBwYXJhbSBwYXRoIHtJTGF0TG5nW10gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPn1cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgc3RhdGljIGNvbXB1dGVMZW5ndGgocGF0aDogSUxhdExuZ1tdIHwgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz4pOiBudW1iZXIge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZ2VvbWV0cnkuc3BoZXJpY2FsLmNvbXB1dGVMZW5ndGgocGF0aCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYXJlYSBvZiBhIGNsb3NlZCBwYXRoLiBUaGUgY29tcHV0ZWQgYXJlYSB1c2VzIHRoZSBzYW1lIHVuaXRzIGFzIHRoZSByYWRpdXMuXG4gICAqIEBwYXJhbSBwYXRoIHtJTGF0TG5nW10gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPn0uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHN0YXRpYyBjb21wdXRlQXJlYShwYXRoOiBJTGF0TG5nW10gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPik6IG51bWJlciB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICByZXR1cm4gR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5nZW9tZXRyeS5zcGhlcmljYWwuY29tcHV0ZUxlbmd0aChwYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzaWduZWQgYXJlYSBvZiBhIGNsb3NlZCBwYXRoLiBUaGUgc2lnbmVkIGFyZWEgbWF5IGJlIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSBvcmllbnRhdGlvbiBvZiB0aGUgcGF0aC5cbiAgICogQHBhcmFtIHBhdGgge0lMYXRMbmdbXSB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+fS5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgc3RhdGljIGNvbXB1dGVTaWduZWRBcmVhKHBhdGg6IElMYXRMbmdbXSB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+KTogbnVtYmVyIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlU2lnbmVkQXJlYShwYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBoZWFkaW5nIGZyb20gb25lIExhdExuZyB0byBhbm90aGVyIExhdExuZy4gSGVhZGluZ3MgYXJlIGV4cHJlc3NlZCBpbiBkZWdyZWVzIGNsb2Nrd2lzZSBmcm9tIE5vcnRoIHdpdGhpbiB0aGUgcmFuZ2UgKC0xODAsMTgwKS5cbiAgICogQHBhcmFtIGZyb20ge0lMYXRMbmd9XG4gICAqIEBwYXJhbSB0byB7SUxhdExuZ31cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgc3RhdGljIGNvbXB1dGVIZWFkaW5nKGZyb206IElMYXRMbmcsIHRvOiBJTGF0TG5nKTogbnVtYmVyIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlSGVhZGluZyhmcm9tLCB0byk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgTGF0TG5nIHdoaWNoIGxpZXMgdGhlIGdpdmVuIGZyYWN0aW9uIG9mIHRoZSB3YXkgYmV0d2VlbiB0aGUgb3JpZ2luIExhdExuZyBhbmQgdGhlIGRlc3RpbmF0aW9uIExhdExuZy5cbiAgICogQHBhcmFtIGZyb20ge0lMYXRMbmd9ICAgICBUaGUgTGF0TG5nIGZyb20gd2hpY2ggdG8gc3RhcnQuXG4gICAqIEBwYXJhbSB0byB7SUxhdExuZ30gICAgICAgVGhlIExhdExuZyB0b3dhcmQgd2hpY2ggdG8gdHJhdmVsLlxuICAgKiBAcGFyYW0gZnJhY3Rpb24ge251bWJlcn0gIEEgZnJhY3Rpb24gb2YgdGhlIGRpc3RhbmNlIHRvIHRyYXZlbCBmcm9tIDAuMCB0byAxLjAgLlxuICAgKiBAcmV0dXJuIHtMYXRMbmd9XG4gICAqL1xuICBzdGF0aWMgaW50ZXJwb2xhdGUoZnJvbTogSUxhdExuZywgdG86IElMYXRMbmcsIGZyYWN0aW9uOiBudW1iZXIpOiBMYXRMbmcge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZ2VvbWV0cnkuc3BoZXJpY2FsLmludGVycG9sYXRlKGZyb20sIHRvLCBmcmFjdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0aW9uIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuY29tcHV0ZURpc3RhbmNlQmV0d2VlbigpXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbXB1dGVEaXN0YW5jZUJldHdlZW4oZnJvbTogSUxhdExuZywgdG86IElMYXRMbmcpOiBudW1iZXIge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuY29tcHV0ZURpc3RhbmNlQmV0d2VlbigpJyk7XG4gICAgcmV0dXJuIFNwaGVyaWNhbC5jb21wdXRlRGlzdGFuY2VCZXR3ZWVuKGZyb20sIHRvKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb24gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5jb21wdXRlT2Zmc2V0KClcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29tcHV0ZU9mZnNldChmcm9tOiBJTGF0TG5nLCBkaXN0YW5jZTogbnVtYmVyLCBoZWFkaW5nOiBudW1iZXIpOiBMYXRMbmcge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuY29tcHV0ZU9mZnNldCgpJyk7XG4gICAgcmV0dXJuIFNwaGVyaWNhbC5jb21wdXRlT2Zmc2V0KGZyb20sIGRpc3RhbmNlLCBoZWFkaW5nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb24gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5jb21wdXRlT2Zmc2V0T3JpZ2luKClcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29tcHV0ZU9mZnNldE9yaWdpbih0bzogSUxhdExuZywgZGlzdGFuY2U6IG51bWJlciwgaGVhZGluZzogbnVtYmVyKTogTGF0TG5nIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVPZmZzZXRPcmlnaW4oKScpO1xuICAgIHJldHVybiBTcGhlcmljYWwuY29tcHV0ZU9mZnNldE9yaWdpbih0bywgZGlzdGFuY2UsIGhlYWRpbmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvbiBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVMZW5ndGgoKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjb21wdXRlTGVuZ3RoKHBhdGg6IElMYXRMbmdbXSB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+KTogbnVtYmVyIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVMZW5ndGgoKScpO1xuICAgIHJldHVybiBTcGhlcmljYWwuY29tcHV0ZUxlbmd0aChwYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb24gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5jb21wdXRlQXJlYSgpXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbXB1dGVBcmVhKHBhdGg6IElMYXRMbmdbXSB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+KTogbnVtYmVyIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVBcmVhKCknKTtcbiAgICByZXR1cm4gU3BoZXJpY2FsLmNvbXB1dGVBcmVhKHBhdGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvbiBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVTaWduZWRBcmVhKClcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29tcHV0ZVNpZ25lZEFyZWEocGF0aDogSUxhdExuZ1tdIHwgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz4pOiBudW1iZXIge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuY29tcHV0ZVNpZ25lZEFyZWEoKScpO1xuICAgIHJldHVybiBTcGhlcmljYWwuY29tcHV0ZVNpZ25lZEFyZWEocGF0aCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0aW9uIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuY29tcHV0ZUhlYWRpbmcoKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjb21wdXRlSGVhZGluZyhmcm9tOiBJTGF0TG5nLCB0bzogSUxhdExuZyk6IG51bWJlciB7XG4gICAgY29uc29sZS5lcnJvcignR29vZ2xlTWFwcycsICdbZGVwcmVjYXRlZF0gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5jb21wdXRlSGVhZGluZygpJyk7XG4gICAgcmV0dXJuIFNwaGVyaWNhbC5jb21wdXRlSGVhZGluZyhmcm9tLCB0byk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0aW9uIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuaW50ZXJwb2xhdGUoKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBpbnRlcnBvbGF0ZShmcm9tOiBJTGF0TG5nLCB0bzogSUxhdExuZywgZnJhY3Rpb246IG51bWJlcik6IExhdExuZyB7XG4gICAgY29uc29sZS5lcnJvcignR29vZ2xlTWFwcycsICdbZGVwcmVjYXRlZF0gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5pbnRlcnBvbGF0ZSgpJyk7XG4gICAgcmV0dXJuIFNwaGVyaWNhbC5pbnRlcnBvbGF0ZShmcm9tLCB0bywgZnJhY3Rpb24pO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1N0cmVldFZpZXdQYW5vcmFtYScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnXG59KVxuZXhwb3J0IGNsYXNzIFN0cmVldFZpZXdQYW5vcmFtYSBleHRlbmRzIEJhc2VDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IHN0cmluZyB8IEhUTUxFbGVtZW50LCBvcHRpb25zPzogU3RyZWV0Vmlld09wdGlvbnMpIHtcblxuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IHRydWUpIHtcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIC8vIENyZWF0ZSBhIHBhbm9yYW1hXG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50Lm9mZnNldFdpZHRoID49IDEwMCAmJiBlbGVtZW50Lm9mZnNldEhlaWdodCA+PSAxMDApIHtcbiAgICAgICAgICBzdXBlcihHb29nbGVNYXBzLmdldFBsdWdpbigpLlN0cmVldFZpZXcuZ2V0UGFub3JhbWEoZWxlbWVudCwgb3B0aW9ucykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlbGVtZW50LnRhZ05hbWUgKyAnIGlzIHRvbyBzbWFsbC4gTXVzdCBiZSBiaWdnZXIgdGhhbiAxMDB4MTAwLicpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuXG4gICAgICAgIHN1cGVyKEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuU3RyZWV0Vmlldy5nZXRQYW5vcmFtYShnZXRQcm9taXNlPGFueVtdPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgbGV0IGNvdW50OiBudW1iZXI7XG4gICAgICAgICAgbGV0IGk6IG51bWJlcjtcbiAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgY29uc3QgdGltZXI6IGFueSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGxldCB0YXJnZXRzOiBhbnlbXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBUQVJHRVRfRUxFTUVOVF9GSU5ESU5HX1FVRVJZUy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB0YXJnZXRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFRBUkdFVF9FTEVNRU5UX0ZJTkRJTkdfUVVFUllTW2ldICsgZWxlbWVudCkpO1xuICAgICAgICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0cyA9IHRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAhdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnX19wbHVnaW5tYXBpZCcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA9PT0gMSAmJiB0YXJnZXRzWzBdICYmIHRhcmdldHNbMF0ub2Zmc2V0V2lkdGggPj0gMTAwICYmIHRhcmdldHNbMF0ub2Zmc2V0SGVpZ2h0ID49IDEwMCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoW3RhcmdldHNbMF0sIG9wdGlvbnNdKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KysgPCAyMCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICAgICAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID4gMCAmJiB0YXJnZXRzWzBdICYmIHRhcmdldHNbMF0ub2Zmc2V0V2lkdGggPCAxMDAgfHwgdGFyZ2V0c1swXS5vZmZzZXRIZWlnaHQgPCAxMDApIHtcbiAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcih0YXJnZXRzWzBdLnRhZ05hbWUgKyAnWyMnICsgZWxlbWVudCArICddIGlzIHRvbyBzbWFsbC4gTXVzdCBiZSBiaWdnZXIgdGhhbiAxMDB4MTAwLicpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdUaGVyZSBhcmUgbXVsdGlwbGUgXCInICsgZWxlbWVudCArICdcIiBlbGVtZW50cy4gVXNlIGRpZmZlcmVudCBpZCB0byBwcmV2ZW50IGVycm9yLicpKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdDYW4gbm90IGZpbmQgdGhlIGVsZW1lbnQgWyMnICsgZWxlbWVudCArICddJykpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSksIG9wdGlvbnMpKTtcblxuICAgICAgfVxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZTogc3RyaW5nW10gPSBbXG4gICAgICAgICdbR29vZ2xlTWFwc10nXG4gICAgICBdO1xuICAgICAgaWYgKCF3aW5kb3cuY29yZG92YSkge1xuICAgICAgICBlcnJvck1lc3NhZ2UucHVzaCgnWW91IG5lZWQgdG8gZXhlY3V0ZSBcIiQ+IGlvbmljIGNvcmRvdmEgcnVuIGJyb3dzZXJcIi4nKTtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnB1c2goJ1wiJD4gaW9uaWMgc2VydmVcIiBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnB1c2goJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IGluc3RhbGxlZCBvciBub3QgcmVhZHkgeWV0LicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGRpc3BsYXlFcnJvck1lc3NhZ2UoZWxlbWVudCwgZXJyb3JNZXNzYWdlLmpvaW4oJzxiciAvPicpKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGxldCB0YXJnZXRzOiBhbnlbXSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnIycgKyBlbGVtZW50KSk7XG4gICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0YXJnZXRzID0gdGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICF0YXJnZXQuaGFzQXR0cmlidXRlKCdfX3BsdWdpbm1hcGlkJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID09PSAxICYmIHRhcmdldHNbMF0pIHtcbiAgICAgICAgICBkaXNwbGF5RXJyb3JNZXNzYWdlKHRhcmdldHNbMF0sIGVycm9yTWVzc2FnZS5qb2luKCc8YnIgLz4nKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2Uuam9pbignJykpO1xuICAgIH1cblxuICB9XG5cblxuICAvKipcbiAgICogU2V0cyB0aGUgcG9pbnQgb2YgdmlldyBmb3IgdGhlIFN0cmVldCBWaWV3IHBhbm9yYW1hLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHNldFBvdihwb3Y6IFN0cmVldFZpZXdDYW1lcmFQYW5vKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBTdHJlZXRWaWV3UGFub3JhbWEgdG8gYSBnaXZlbiBsb2NhdGlvbi5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBzZXRQb3NpdGlvbihjYW1lcmFQb3NpdGlvbjogU3RyaW5nIHwgU3RyZWV0Vmlld1NldFBvc2l0aW9uT3B0aW9uKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBhYmlsaXR5IGZvciB1c2VycyB0byB1c2UgcGFuIGFyb3VuZCBvbiB0aGUgcGFub3JhbWEgdXNpbmcgZ2VzdHVyZXMuXG4gICAqIEBwYXJhbSBnZXN0dXJlRW5hYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0UGFubmluZ0dlc3R1cmVzRW5hYmxlZChnZXN0dXJlRW5hYmxlOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgcGFubmluZyBnZXN0dXJlIGlzIGVuYWJsZWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRQYW5uaW5nR2VzdHVyZXNFbmFibGVkKCk6IGJvb2xlYW4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgYWJpbGl0eSBmb3IgdXNlcnMgdG8gem9vbSBvbiB0aGUgcGFub3JhbWEgdXNpbmcgZ2VzdHVyZXMuXG4gICAqIEBwYXJhbSBnZXN0dXJlRW5hYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Wm9vbUdlc3R1cmVzRW5hYmxlZChnZXN0dXJlRW5hYmxlOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgem9vbWluZyBnZXN0dXJlIGlzIGVuYWJsZWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRab29tR2VzdHVyZXNFbmFibGVkKCk6IGJvb2xlYW4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgYWJpbGl0eSBmb3IgdXNlcnMgdG8gc2VlIHN0cmVldCBuYW1lcyBvbiB0aGUgcGFub3JhbWEuXG4gICAqIEBwYXJhbSBnZXN0dXJlRW5hYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0U3RyZWV0TmFtZXNFbmFibGVkKGdlc3R1cmVFbmFibGU6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0cnVlIGlmIHRoZSBzdHJlZXQgbmFtZXMgY29udHJvbCBpcyBlbmFibGVkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0U3RyZWV0TmFtZXNFbmFibGVkKCk6IGJvb2xlYW4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgYWJpbGl0eSBmb3IgdXNlcnMgdG8gbW92ZSBiZXR3ZWVuIHBhbm9yYW1hcy5cbiAgICogQHBhcmFtIGdlc3R1cmVFbmFibGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXROYXZpZ2F0aW9uRW5hYmxlZChnZXN0dXJlRW5hYmxlOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgbmF2aWdhdGlvbiBjb250cm9sIGlzIGVuYWJsZWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXROYXZpZ2F0aW9uRW5hYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbmF2aWdhdGlvbiBsaW5rcyAoU3RyZWV0Vmlld0xvY2F0aW9uLmxpbmtzKVxuICAgKiBAcmV0dXJuIHtTdHJlZXRWaWV3TmF2aWdhdGlvbkxpbmtbXX1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldExpbmtzKCk6IFN0cmVldFZpZXdOYXZpZ2F0aW9uTGlua1tdIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgKiBAcmV0dXJuIHtTdHJlZXRWaWV3TG9jYXRpb259XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRMb2NhdGlvbigpOiBTdHJlZXRWaWV3TG9jYXRpb24geyByZXR1cm47IH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBjdXJyZW50IHBhbm9yYW1hIGlkXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFBhbm9JZCgpOiBzdHJpbmcgeyByZXR1cm47IH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBjdXJyZW50IHBvc2l0aW9uIChTdHJlZXRWaWV3TG9jYXRpb24ubGF0TG5nKVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRQb3NpdGlvbigpOiBJTGF0TG5nIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgYSBwYW5vcmFtYSBjb21wbGV0ZWx5XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICByZW1vdmUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmUoKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfVxuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0dvb2dsZU1hcHMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzJ1xufSlcbmV4cG9ydCBjbGFzcyBHb29nbGVNYXAgZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCB8IHN0cmluZywgb3B0aW9ucz86IEdvb2dsZU1hcE9wdGlvbnMsIF9fdGltZW91dD86IG51bWJlcikge1xuXG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gdHJ1ZSkge1xuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBDcmVhdGUgYSBtYXBcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLVxuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQub2Zmc2V0UGFyZW50KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbGVtZW50IG11c3QgYmUgdW5kZXIgPGJvZHk+Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQub2Zmc2V0V2lkdGggPj0gMTAwICYmIGVsZW1lbnQub2Zmc2V0SGVpZ2h0ID49IDEwMCkge1xuICAgICAgICAgIHN1cGVyKEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuTWFwLmdldE1hcChlbGVtZW50LCBvcHRpb25zKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVsZW1lbnQudGFnTmFtZSArICcgaXMgdG9vIHNtYWxsLiBNdXN0IGJlIGJpZ2dlciB0aGFuIDEwMHgxMDAuJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG5cbiAgICAgICAgc3VwZXIoR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5NYXAuZ2V0TWFwKGdldFByb21pc2U8YW55W10+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBsZXQgY291bnQ6IG51bWJlcjtcbiAgICAgICAgICBsZXQgaTogbnVtYmVyO1xuICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICBjb25zdCB0aW1lcjogYW55ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHRhcmdldHM6IGFueVtdO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IFRBUkdFVF9FTEVNRU5UX0ZJTkRJTkdfUVVFUllTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHRhcmdldHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoVEFSR0VUX0VMRU1FTlRfRklORElOR19RVUVSWVNbaV0gKyBlbGVtZW50KSk7XG4gICAgICAgICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRzID0gdGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuICF0YXJnZXQuaGFzQXR0cmlidXRlKCdfX3BsdWdpbm1hcGlkJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID09PSAxICYmIHRhcmdldHNbMF0gJiYgdGFyZ2V0c1swXS5vZmZzZXRXaWR0aCA+PSAxMDAgJiYgdGFyZ2V0c1swXS5vZmZzZXRIZWlnaHQgPj0gMTAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShbdGFyZ2V0c1swXSwgb3B0aW9uc10pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQrKyA8IDIwKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlKCk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPiAwICYmIHRhcmdldHNbMF0gJiYgdGFyZ2V0c1swXS5vZmZzZXRXaWR0aCA8IDEwMCB8fCB0YXJnZXRzWzBdLm9mZnNldEhlaWdodCA8IDEwMCkge1xuICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKHRhcmdldHNbMF0udGFnTmFtZSArICdbIycgKyBlbGVtZW50ICsgJ10gaXMgdG9vIHNtYWxsLiBNdXN0IGJlIGJpZ2dlciB0aGFuIDEwMHgxMDAuJykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1RoZXJlIGFyZSBtdWx0aXBsZSBcIicgKyBlbGVtZW50ICsgJ1wiIGVsZW1lbnRzLiBVc2UgZGlmZmVyZW50IGlkIHRvIHByZXZlbnQgZXJyb3IuJykpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0NhbiBub3QgZmluZCB0aGUgZWxlbWVudCBbIycgKyBlbGVtZW50ICsgJ10nKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBfX3RpbWVvdXQgPT0gbnVsbCA/IDEwMCA6IF9fdGltZW91dCk7XG4gICAgICAgIH0pLCBvcHRpb25zKSk7XG5cbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudCA9PT0gbnVsbCAmJiBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuTWFwLmdldE1hcChudWxsLCBvcHRpb25zKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcblxuICAgICAgY29uc3QgZXJyb3JNZXNzYWdlOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgJ1tHb29nbGVNYXBzXSdcbiAgICAgIF07XG4gICAgICBpZiAoIXdpbmRvdy5jb3Jkb3ZhKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS5wdXNoKCdZb3UgbmVlZCB0byBleGVjdXRlIFwiJD4gaW9uaWMgY29yZG92YSBydW4gYnJvd3NlclwiLicpO1xuICAgICAgICBlcnJvck1lc3NhZ2UucHVzaCgnXCIkPiBpb25pYyBzZXJ2ZVwiIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvck1lc3NhZ2UucHVzaCgnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgaW5zdGFsbGVkIG9yIG5vdCByZWFkeSB5ZXQuJyk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yTWVzc2FnZS5qb2luKCcnKSk7XG5cbiAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgZGlzcGxheUVycm9yTWVzc2FnZShlbGVtZW50LCBlcnJvck1lc3NhZ2Uuam9pbignPGJyIC8+JykpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbGV0IHRhcmdldHM6IGFueVtdID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjJyArIGVsZW1lbnQpKTtcbiAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRhcmdldHMgPSB0YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIXRhcmdldC5oYXNBdHRyaWJ1dGUoJ19fcGx1Z2lubWFwaWQnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDEgJiYgdGFyZ2V0c1swXSkge1xuICAgICAgICAgIGRpc3BsYXlFcnJvck1lc3NhZ2UodGFyZ2V0c1swXSwgZXJyb3JNZXNzYWdlLmpvaW4oJzxiciAvPicpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIG1hcCBkaXZcbiAgICogQHBhcmFtIGRvbU5vZGUge0hUTUxFbGVtZW50IHwgc3RyaW5nfSBbb3B0aW9uc10gSWYgeW91IHdhbnQgdG8gZGlzcGxheSB0aGUgbWFwIGluIGFuIGh0bWwgZWxlbWVudCwgeW91IG5lZWQgdG8gc3BlY2lmeSBhbiBlbGVtZW50IG9yIGlkLiBJZiBvbWl0IHRoaXMgYXJndW1lbnQsIHRoZSBtYXAgaXMgZGV0YWNoZWQgZnJvbSB3ZWJ2aWV3LlxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBzZXREaXYoZG9tTm9kZT86IEhUTUxFbGVtZW50IHwgc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCFkb21Ob2RlKSB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5zZXREaXYoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkb21Ob2RlID09PSAnc3RyaW5nJykge1xuICAgICAgKGdldFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCBpLCB0YXJnZXRzOiBhbnlbXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IFRBUkdFVF9FTEVNRU5UX0ZJTkRJTkdfUVVFUllTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGFyZ2V0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChUQVJHRVRfRUxFTUVOVF9GSU5ESU5HX1FVRVJZU1tpXSArIGRvbU5vZGUpKTtcbiAgICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0YXJnZXRzID0gdGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gIXRhcmdldC5oYXNBdHRyaWJ1dGUoJ19fcGx1Z2lubWFwaWQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDEgJiYgdGFyZ2V0c1swXSAmJiB0YXJnZXRzWzBdLm9mZnNldFdpZHRoID49IDEwMCAmJiB0YXJnZXRzWzBdLm9mZnNldEhlaWdodCA+PSAxMDApIHtcbiAgICAgICAgICAgIHJlc29sdmUodGFyZ2V0c1swXSBhcyBIVE1MRWxlbWVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgcmVqZWN0KCdDYW4gbm90IGZpbmQgWyMnICsgZG9tTm9kZSArICddIGVsZW1lbnQnKTtcbiAgICAgIH0pKVxuICAgICAgLnRoZW4oKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnNldERpdihlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZG9tTm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmXG4gICAgICAgICAgIWRvbU5vZGUub2Zmc2V0UGFyZW50ICYmXG4gICAgICAgICAgZG9tTm9kZS5vZmZzZXRXaWR0aCA+PSAxMDAgJiYgZG9tTm9kZS5vZmZzZXRIZWlnaHQgPj0gMTAwKSB7XG4gICAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnNldERpdihkb21Ob2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihkb21Ob2RlLnRhZ05hbWUgKyAnIGlzIHRvbyBzbWFsbC4gTXVzdCBiZSBiaWdnZXIgdGhhbiAxMDB4MTAwLicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXAgSFRNTCBlbGVtZW50XG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0RGl2KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgbWFwIHR5cGUgaWRcbiAgICogQHBhcmFtIG1hcFR5cGVJZCB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0TWFwVHlwZUlkKG1hcFR5cGVJZDogTWFwVHlwZSB8IHN0cmluZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmVzIHRoZSBjYW1lcmEgd2l0aCBhbmltYXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGFuaW1hdGVDYW1lcmEoY2FtZXJhUG9zaXRpb246IENhbWVyYVBvc2l0aW9uPGFueT4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBab29taW5nIGluIHRoZSBjYW1lcmEgd2l0aCBhbmltYXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGFuaW1hdGVDYW1lcmFab29tSW4oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogWm9vbWluZyBvdXQgdGhlIGNhbWVyYSB3aXRoIGFuaW1hdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgYW5pbWF0ZUNhbWVyYVpvb21PdXQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTW92ZXMgdGhlIGNhbWVyYSB3aXRob3V0IGFuaW1hdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgbW92ZUNhbWVyYShjYW1lcmFQb3NpdGlvbjogQ2FtZXJhUG9zaXRpb248YW55Pik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFpvb21pbmcgaW4gdGhlIGNhbWVyYSB3aXRob3V0IGFuaW1hdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgbW92ZUNhbWVyYVpvb21JbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBab29taW5nIG91dCB0aGUgY2FtZXJhIHdpdGhvdXQgYW5pbWF0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBtb3ZlQ2FtZXJhWm9vbU91dCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBjYW1lcmEuXG4gICAqIEByZXR1cm4ge0NhbWVyYVBvc2l0aW9ufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2FtZXJhUG9zaXRpb24oKTogQ2FtZXJhUG9zaXRpb248SUxhdExuZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgY2FtZXJhIHRhcmdldCBwb3NpdGlvblxuICAgKiBAcmV0dXJuIHtJTGF0TG5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2FtZXJhVGFyZ2V0KCk6IElMYXRMbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgY2FtZXJhIHpvb20gbGV2ZWxcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2FtZXJhWm9vbSgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgY2FtZXJhIGJlYXJpbmdcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2FtZXJhQmVhcmluZygpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgY2FtZXJhIHRpbHQgKHZpZXcgYW5nbGUpXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldENhbWVyYVRpbHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjZW50ZXIgcG9zaXRpb24gb2YgdGhlIGNhbWVyYSB2aWV3XG4gICAqIEBwYXJhbSBsYXRMbmcge0lMYXRMbmcgfCBJTGF0TG5nW119XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDYW1lcmFUYXJnZXQobGF0TG5nOiBJTGF0TG5nIHwgSUxhdExuZ1tdKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHpvb20gbGV2ZWwgb2YgdGhlIGNhbWVyYVxuICAgKiBAcGFyYW0gem9vbUxldmVsIHtudW1iZXJ9IFpvb20gbGV2ZWxcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldENhbWVyYVpvb20oem9vbUxldmVsOiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGNhbWVyYSB2aWV3IGFuZ2xlXG4gICAqIEBwYXJhbSB0aWx0QW5nbGUge251bWJlcn0gVGlsdCBhbmdsZVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q2FtZXJhVGlsdCh0aWx0QW5nbGU6IG51bWJlcik6IHZvaWQge31cblxuICAvKipcbiAgICogU2V0IGNhbWVyYSBiZWFyaW5nXG4gICAqIEBwYXJhbSBiZWFyaW5nIHthbnl9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDYW1lcmFCZWFyaW5nKGJlYXJpbmc6IGFueSk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGNlbnRlciBvZiB0aGUgbWFwIGJ5IHRoZSBnaXZlbiBkaXN0YW5jZSBpbiBwaXhlbHNcbiAgICogQHBhcmFtIHgge251bWJlcn1cbiAgICogQHBhcmFtIHkge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHBhbkJ5KHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7IH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IHZpc2libGUgcmVnaW9uIChzb3V0aFdlc3QgYW5kIG5vcnRoRWFzdClcbiAgICogQHJldHVybiB7VmlzaWJsZVJlZ2lvbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFZpc2libGVSZWdpb24oKTogVmlzaWJsZVJlZ2lvbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBkZXZpY2UgbG9jYXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxNeUxvY2F0aW9uPn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBnZXRNeUxvY2F0aW9uKG9wdGlvbnM/OiBNeUxvY2F0aW9uT3B0aW9ucyk6IFByb21pc2U8TXlMb2NhdGlvbj4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPE15TG9jYXRpb24+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuTG9jYXRpb25TZXJ2aWNlLmdldE15TG9jYXRpb24ob3B0aW9ucywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZmFsc2UgdG8gaWdub3JlIGFsbCBjbGlja3Mgb24gdGhlIG1hcFxuICAgKiBAcGFyYW0gaXNDbGlja2FibGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDbGlja2FibGUoaXNDbGlja2FibGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IGEgbWFwIGNvbXBsZXRlbHlcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHJlbW92ZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkuZm9yRWFjaCgob3ZlcmxheUlkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICBkZWxldGUgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF07XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55PigocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBvdmVybGF5cywgc3VjaCBhcyBtYXJrZXJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBjbGVhcigpOiBQcm9taXNlPGFueT4ge1xuICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkuZm9yRWFjaCgob3ZlcmxheUlkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICBkZWxldGUgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF07XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55PigocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuY2xlYXIoKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHRoZSB1bml0IGZyb20gTGF0TG5nIHRvIHRoZSBwaXhlbHMgZnJvbSB0aGUgbGVmdC90b3Agb2YgdGhlIG1hcCBkaXZcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGZyb21MYXRMbmdUb1BvaW50KGxhdExuZzogSUxhdExuZyk6IFByb21pc2U8YW55W10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCB0aGUgdW5pdCBmcm9tIHRoZSBwaXhlbHMgZnJvbSB0aGUgbGVmdC90b3AgdG8gdGhlIExhdExuZ1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPExhdExuZz59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgZnJvbVBvaW50VG9MYXRMbmcocG9pbnQ6IG51bWJlcltdKTogUHJvbWlzZTxMYXRMbmc+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIHNob3cgdGhlIE15TG9jYXRpb24gY29udHJvbCAoYmx1ZSBkb3QpXG4gICAqIEBwYXJhbSBlbmFibGVkIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0TXlMb2NhdGlvbkVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIHNob3cgdGhlIE15TG9jYXRpb24gYnV0dG9uXG4gICAqIEBwYXJhbSBlbmFibGVkIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0TXlMb2NhdGlvbkJ1dHRvbkVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50bHkgZm9jdXNlZCBidWlsZGluZ1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgZ2V0Rm9jdXNlZEJ1aWxkaW5nKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIHNob3cgdGhlIGluZG9vciBtYXBcbiAgICogQHBhcmFtIGVuYWJsZWQge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRJbmRvb3JFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byBzaG93IHRoZSB0cmFmZmljIGxheWVyXG4gICAqIEBwYXJhbSBlbmFibGVkIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0VHJhZmZpY0VuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIHNob3cgdGhlIGNvbXBhc3MgYnV0dG9uXG4gICAqIEBwYXJhbSBlbmFibGVkIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q29tcGFzc0VuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHByZWZlcmVuY2UgZm9yIHdoZXRoZXIgYWxsIGdlc3R1cmVzIHNob3VsZCBiZSBlbmFibGVkIG9yIGRpc2FibGVkXG4gICAqIEBwYXJhbSBlbmFibGVkIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0QWxsR2VzdHVyZXNFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdmlzaWJpbGl0eSBvZiB0aGUgbWFwXG4gICAqIEBwYXJhbSB2aXNpYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogQWRqdXN0IHRoZSBtYXAgcGFkZGluZyAoc2FtZSBhcyBDU1MgcGFkZGluZyBydWxlKVxuICAgKiBAcGFyYW0gdG9wIHtudW1iZXJ9XG4gICAqIEBwYXJhbSByaWdodCB7bnVtYmVyfVxuICAgKiBAcGFyYW0gbGVmdCB7bnVtYmVyfVxuICAgKiBAcGFyYW0gYm90dG9tIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRQYWRkaW5nKHRvcDogbnVtYmVyLCByaWdodD86IG51bWJlciwgYm90dG9tPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyKTogdm9pZCB7IH1cblxuICAvKipcbiAgICogU2V0IG9wdGlvbnNcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldE9wdGlvbnMob3B0aW9uczogR29vZ2xlTWFwT3B0aW9ucyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBtYXJrZXJcbiAgICogQHBhcmFtIG9wdGlvbnMge01hcmtlck9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxNYXJrZXI+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRNYXJrZXIob3B0aW9uczogTWFya2VyT3B0aW9ucyk6IFByb21pc2U8TWFya2VyIHwgYW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8TWFya2VyPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRNYXJrZXIob3B0aW9ucywgKG1hcmtlcjogYW55KSA9PiB7XG4gICAgICAgIGlmIChtYXJrZXIpIHtcbiAgICAgICAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IG1hcmtlci5nZXRJZCgpO1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXk6IE1hcmtlciA9IG5ldyBNYXJrZXIodGhpcywgbWFya2VyKTtcbiAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgICAgICAgbWFya2VyLm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXNvbHZlKG92ZXJsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbWFya2VyIGluIHN5bmNocm9ub3VzXG4gICAqIEBwYXJhbSBvcHRpb25zIHtNYXJrZXJPcHRpb25zfSBvcHRpb25zXG4gICAqIEBSZXR1cm5zIHtNYXJrZXJ9XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZE1hcmtlclN5bmMob3B0aW9uczogTWFya2VyT3B0aW9ucyk6IE1hcmtlciB7XG4gICAgY29uc3QgbWFya2VyOiBhbnkgPSB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRNYXJrZXIob3B0aW9ucyk7XG4gICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSBtYXJrZXIuZ2V0SWQoKTtcbiAgICBjb25zdCBvdmVybGF5OiBNYXJrZXIgPSBuZXcgTWFya2VyKHRoaXMsIG1hcmtlcik7XG4gICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgIG1hcmtlci5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG92ZXJsYXk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG1hcmtlciBjbHVzdGVyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtNYXJrZXJDbHVzdGVyT3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPE1hcmtlckNsdXN0ZXI+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRNYXJrZXJDbHVzdGVyKG9wdGlvbnM6IE1hcmtlckNsdXN0ZXJPcHRpb25zKTogUHJvbWlzZTxNYXJrZXJDbHVzdGVyIHwgYW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8TWFya2VyQ2x1c3Rlcj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkTWFya2VyQ2x1c3RlcihvcHRpb25zLCAobWFya2VyQ2x1c3RlcjogYW55KSA9PiB7XG4gICAgICAgIGlmIChtYXJrZXJDbHVzdGVyKSB7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheUlkID0gbWFya2VyQ2x1c3Rlci5nZXRJZCgpO1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgTWFya2VyQ2x1c3Rlcih0aGlzLCBtYXJrZXJDbHVzdGVyKTtcbiAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgICAgICAgbWFya2VyQ2x1c3Rlci5vbmUoJ3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBtYXJrZXJDbHVzdGVyLnNldCgnX292ZXJsYXlzJywgbmV3IEJhc2VBcnJheUNsYXNzKCkpO1xuICAgICAgICAgIHJlc29sdmUob3ZlcmxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBtYXJrZXIgY2x1c3RlciBpbiBzeW5jaHJvbm91c1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7TWFya2VyQ2x1c3Rlck9wdGlvbnN9IG9wdGlvbnNcbiAgICogQFJldHVybnMge01hcmtlckNsdXN0ZXJ9XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZE1hcmtlckNsdXN0ZXJTeW5jKG9wdGlvbnM6IE1hcmtlckNsdXN0ZXJPcHRpb25zKTogTWFya2VyQ2x1c3RlciB7XG4gICAgY29uc3QgbWFya2VyQ2x1c3RlcjogYW55ID0gdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkTWFya2VyQ2x1c3RlcihvcHRpb25zKTtcbiAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IG1hcmtlckNsdXN0ZXIuZ2V0SWQoKTtcbiAgICBjb25zdCBvdmVybGF5OiBNYXJrZXJDbHVzdGVyID0gbmV3IE1hcmtlckNsdXN0ZXIodGhpcywgbWFya2VyQ2x1c3Rlcik7XG4gICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgIG1hcmtlckNsdXN0ZXIub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIG1hcmtlckNsdXN0ZXIuc2V0KCdfb3ZlcmxheXMnLCBuZXcgQmFzZUFycmF5Q2xhc3MoKSk7XG4gICAgcmV0dXJuIG92ZXJsYXk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNpcmNsZVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7Q2lyY2xlT3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPENpcmNsZT59XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZENpcmNsZShvcHRpb25zOiBDaXJjbGVPcHRpb25zKTogUHJvbWlzZTxDaXJjbGUgfCBhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxDaXJjbGU+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmFkZENpcmNsZShvcHRpb25zLCAoY2lyY2xlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGNpcmNsZSkge1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gY2lyY2xlLmdldElkKCk7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBDaXJjbGUodGhpcywgY2lyY2xlKTtcbiAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgICAgICAgY2lyY2xlLm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXNvbHZlKG92ZXJsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2lyY2xlIGluIHN5bmNocm9ub3VzXG4gICAqIEBwYXJhbSBvcHRpb25zIHtDaXJjbGVPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm4ge0NpcmNsZX1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkQ2lyY2xlU3luYyhvcHRpb25zOiBDaXJjbGVPcHRpb25zKTogQ2lyY2xlIHtcbiAgICBjb25zdCBjaXJjbGU6IGFueSA9IHRoaXMuX29iamVjdEluc3RhbmNlLmFkZENpcmNsZShvcHRpb25zKTtcbiAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IGNpcmNsZS5nZXRJZCgpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgQ2lyY2xlKHRoaXMsIGNpcmNsZSk7XG4gICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgIGNpcmNsZS5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG92ZXJsYXk7XG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgYSBwb2x5Z29uXG4gICAqIEBwYXJhbSBvcHRpb25zIHtQb2x5Z29uT3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPFBvbHlnb24+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRQb2x5Z29uKG9wdGlvbnM6IFBvbHlnb25PcHRpb25zKTogUHJvbWlzZTxQb2x5Z29uIHwgYW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8UG9seWdvbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkUG9seWdvbihvcHRpb25zLCAocG9seWdvbjogYW55KSA9PiB7XG4gICAgICAgIGlmIChwb2x5Z29uKSB7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSBwb2x5Z29uLmdldElkKCk7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBQb2x5Z29uKHRoaXMsIHBvbHlnb24pO1xuICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICAgICAgICBwb2x5Z29uLm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXNvbHZlKG92ZXJsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgcG9seWdvbiBpbiBzeW5jaHJvbm91c1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7UG9seWdvbk9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7UG9seWdvbn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkUG9seWdvblN5bmMob3B0aW9uczogUG9seWdvbk9wdGlvbnMpOiBQb2x5Z29uIHtcbiAgICBjb25zdCBwb2x5Z29uOiBhbnkgPSB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRQb2x5Z29uKG9wdGlvbnMpO1xuICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gcG9seWdvbi5nZXRJZCgpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgUG9seWdvbih0aGlzLCBwb2x5Z29uKTtcbiAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgcG9seWdvbi5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG92ZXJsYXk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHBvbHlsaW5lXG4gICAqIEBwYXJhbSBvcHRpb25zIHtQb2x5bGluZU9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxQb2x5bGluZT59XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZFBvbHlsaW5lKG9wdGlvbnM6IFBvbHlsaW5lT3B0aW9ucyk6IFByb21pc2U8UG9seWxpbmUgfCBhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxQb2x5bGluZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkUG9seWxpbmUob3B0aW9ucywgKHBvbHlsaW5lOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHBvbHlsaW5lKSB7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSBwb2x5bGluZS5nZXRJZCgpO1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgUG9seWxpbmUodGhpcywgcG9seWxpbmUpO1xuICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICAgICAgICBwb2x5bGluZS5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVzb2x2ZShvdmVybGF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHBvbHlsaW5lIGluIHN5bmNocm9ub3VzXG4gICAqIEBwYXJhbSBvcHRpb25zIHtQb2x5bGluZU9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7UG9seWxpbmV9XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZFBvbHlsaW5lU3luYyhvcHRpb25zOiBQb2x5bGluZU9wdGlvbnMpOiBQb2x5bGluZSB7XG4gICAgY29uc3QgcG9seWxpbmU6IGFueSA9IHRoaXMuX29iamVjdEluc3RhbmNlLmFkZFBvbHlsaW5lKG9wdGlvbnMpO1xuICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gcG9seWxpbmUuZ2V0SWQoKTtcbiAgICBjb25zdCBvdmVybGF5ID0gbmV3IFBvbHlsaW5lKHRoaXMsIHBvbHlsaW5lKTtcbiAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgcG9seWxpbmUub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvdmVybGF5O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSB0aWxlIG92ZXJsYXlcbiAgICogQHBhcmFtIG9wdGlvbnMge1RpbGVPdmVybGF5T3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPFRpbGVPdmVybGF5Pn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkVGlsZU92ZXJsYXkob3B0aW9uczogVGlsZU92ZXJsYXlPcHRpb25zKTogUHJvbWlzZTxUaWxlT3ZlcmxheSB8IGFueT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPFRpbGVPdmVybGF5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRUaWxlT3ZlcmxheShvcHRpb25zLCAodGlsZU92ZXJsYXk6IGFueSkgPT4ge1xuICAgICAgICBpZiAodGlsZU92ZXJsYXkpIHtcbiAgICAgICAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IHRpbGVPdmVybGF5LmdldElkKCk7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBUaWxlT3ZlcmxheSh0aGlzLCB0aWxlT3ZlcmxheSk7XG4gICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgICAgICAgIHRpbGVPdmVybGF5Lm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXNvbHZlKG92ZXJsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgdGlsZSBvdmVybGF5IGluIHN5bmNocm9ub3VzXG4gICAqIEBwYXJhbSBvcHRpb25zIHtUaWxlT3ZlcmxheU9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7VGlsZU92ZXJsYXl9XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZFRpbGVPdmVybGF5U3luYyhvcHRpb25zOiBUaWxlT3ZlcmxheU9wdGlvbnMpOiBUaWxlT3ZlcmxheSB7XG4gICAgY29uc3QgdGlsZU92ZXJsYXk6IGFueSA9IHRoaXMuX29iamVjdEluc3RhbmNlLmFkZFRpbGVPdmVybGF5KG9wdGlvbnMpO1xuICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gdGlsZU92ZXJsYXkuZ2V0SWQoKTtcbiAgICBjb25zdCBvdmVybGF5ID0gbmV3IFRpbGVPdmVybGF5KHRoaXMsIHRpbGVPdmVybGF5KTtcbiAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgdGlsZU92ZXJsYXkub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvdmVybGF5O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBncm91bmQgb3ZlcmxheVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7R3JvdW5kT3ZlcmxheU9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxHcm91bmRPdmVybGF5Pn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkR3JvdW5kT3ZlcmxheShvcHRpb25zOiBHcm91bmRPdmVybGF5T3B0aW9ucyk6IFByb21pc2U8R3JvdW5kT3ZlcmxheSB8IGFueT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPEdyb3VuZE92ZXJsYXk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmFkZEdyb3VuZE92ZXJsYXkob3B0aW9ucywgKGdyb3VuZE92ZXJsYXk6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZ3JvdW5kT3ZlcmxheSkge1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gZ3JvdW5kT3ZlcmxheS5nZXRJZCgpO1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgR3JvdW5kT3ZlcmxheSh0aGlzLCBncm91bmRPdmVybGF5KTtcbiAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgICAgICAgZ3JvdW5kT3ZlcmxheS5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVzb2x2ZShvdmVybGF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGdyb3VuZCBvdmVybGF5IGluIHN5bmNocm9ub3VzXG4gICAqIEBwYXJhbSBvcHRpb25zIHtHcm91bmRPdmVybGF5T3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtHcm91bmRPdmVybGF5fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRHcm91bmRPdmVybGF5U3luYyhvcHRpb25zOiBHcm91bmRPdmVybGF5T3B0aW9ucyk6IEdyb3VuZE92ZXJsYXkge1xuICAgIGNvbnN0IGdyb3VuZE92ZXJsYXk6IGFueSA9IHRoaXMuX29iamVjdEluc3RhbmNlLmFkZEdyb3VuZE92ZXJsYXkob3B0aW9ucyk7XG4gICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSBncm91bmRPdmVybGF5LmdldElkKCk7XG4gICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBHcm91bmRPdmVybGF5KHRoaXMsIGdyb3VuZE92ZXJsYXkpO1xuICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICBncm91bmRPdmVybGF5Lm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb3ZlcmxheTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEga21sIG92ZXJsYXlcbiAgICogQHBhcmFtIG9wdGlvbnMge0ttbE92ZXJsYXlPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8S21sT3ZlcmxheT59XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZEttbE92ZXJsYXkob3B0aW9uczogS21sT3ZlcmxheU9wdGlvbnMpOiBQcm9taXNlPEttbE92ZXJsYXk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxLbWxPdmVybGF5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRLbWxPdmVybGF5KG9wdGlvbnMsIChrbWxPdmVybGF5OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGttbE92ZXJsYXkpIHtcbiAgICAgICAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IGttbE92ZXJsYXkuZ2V0SWQoKTtcbiAgICAgICAgICBjb25zdCBvdmVybGF5ID0gbmV3IEttbE92ZXJsYXkodGhpcywga21sT3ZlcmxheSk7XG4gICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgICAgICAgIGttbE92ZXJsYXkub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJlc29sdmUob3ZlcmxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGJhc2U2NCBlbmNvZGVkIHNjcmVlbiBjYXB0dXJlIG9mIHRoZSBtYXAuXG4gICAqIEBwYXJhbSBvcHRpb25zIHtUb0RhdGFVcmxPcHRpb25zfSBbb3B0aW9uc10gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgdG9EYXRhVVJMKG9wdGlvbnM/OiBUb0RhdGFVcmxPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHsgcmV0dXJuOyB9XG5cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBHcm91bmRPdmVybGF5IGV4dGVuZHMgQmFzZUNsYXNzIHtcblxuICBwcml2YXRlIF9tYXA6IEdvb2dsZU1hcDtcblxuICBjb25zdHJ1Y3RvcihfbWFwOiBHb29nbGVNYXAsIF9vYmplY3RJbnN0YW5jZTogYW55KSB7XG4gICAgc3VwZXIoX29iamVjdEluc3RhbmNlKTtcbiAgICB0aGlzLl9tYXAgPSBfbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIElEIG9mIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXAgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge0dvb2dsZU1hcH1cbiAgICovXG4gIGdldE1hcCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9tYXA7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgYm91bmRzIG9mIHRoZSBHcm91bmRPdmVybGF5XG4gICAqIEBwYXJhbSBib3VuZHMgeyBJTGF0TG5nW119XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRCb3VuZHMoYm91bmRzOiBJTGF0TG5nW10pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBiZWFyaW5nIG9mIHRoZSBncm91bmQgb3ZlcmxheVxuICAgKiBAcGFyYW0gYmVhcmluZyB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0QmVhcmluZyhiZWFyaW5nOiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGJlYXJpbmcgdmFsdWVcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEJlYXJpbmcoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgaW1hZ2Ugb2YgdGhlIGdyb3VuZCBvdmVybGF5XG4gICAqIEBwYXJhbSBpbWFnZVVybCB7c3RyaW5nfSBVUkwgb2YgaW1hZ2VcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEltYWdlKGltYWdlVXJsOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIG9wYWNpdHkgb2YgdGhlIGdyb3VuZCBvdmVybGF5IGZyb20gMC4wIHRvIDEuMFxuICAgKiBAcGFyYW0gb3BhY2l0eSB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0T3BhY2l0eShvcGFjaXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IG9wYWNpdHlcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0T3BhY2l0eSgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIGNsaWNrLWFiaWxpdHkgb2YgdGhlIGdyb3VuZCBvdmVybGF5XG4gICAqIEBwYXJhbSBjbGlja2FibGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDbGlja2FibGUoY2xpY2thYmxlOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBncm91bmQgb3ZlcmxheSBpcyBjbGlja2FibGVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldENsaWNrYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB2aXNpYmlsaXR5IG9mIHRoZSBncm91bmQgb3ZlcmxheVxuICAgKiBAcGFyYW0gdmlzaWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ3JvdW5kIG92ZXJsYXkgaXMgdmlzaWJsZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0VmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgZ3JvdW5kIG92ZXJsYXkgekluZGV4IG9yZGVyXG4gICAqIEBwYXJhbSBpbmRleCB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0WkluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGdyb3VuZCBvdmVybGF5IHpJbmRleFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRaSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBncm91bmQgb3ZlcmxheVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHJlbW92ZSgpOiB2b2lkIHtcbiAgICBkZWxldGUgdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVt0aGlzLmdldElkKCldO1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcycsXG4gIHBsdWdpbk5hbWU6ICdHb29nbGVNYXBzJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2luLmdvb2dsZS5tYXBzLkh0bWxJbmZvV2luZG93JyxcbiAgcmVwbzogJydcbn0pXG5leHBvcnQgY2xhc3MgSHRtbEluZm9XaW5kb3cgZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKG5ldyAoR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5IdG1sSW5mb1dpbmRvdykoKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgYmFja2dyb3VuZENvbG9yXG4gICAqIEBwYXJhbSBjb2xvciB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHNldEJhY2tncm91bmRDb2xvcihjb2xvcjogc3RyaW5nKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHlvdXIgSFRNTCBjb250ZW50cy5cbiAgICogQHBhcmFtIGNvbnRlbnQge2FueX0gU3RyaW5nIGNvbnRhaW5pbmcgdGV4dCBvciBIVE1MIGVsZW1lbnRcbiAgICogQHBhcmFtIGNzc09wdGlvbnM/IHthbnl9IENTUyBzdHlsZXMgZm9yIHRoZSBjb250YWluZXIgZWxlbWVudCBvZiBIVE1MSW5mb1dpbmRvd1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHNldENvbnRlbnQoY29udGVudDogc3RyaW5nIHwgRWxlbWVudCwgY3NzT3B0aW9ucz86IGFueSk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gdGhlIGh0bWxJbmZvV2luZG93XG4gICAqIEBwYXJhbSBtYXJrZXIge01hcmtlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBvcGVuKG1hcmtlcjogYW55KTogYW55IHtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZSB0aGUgaHRtbEluZm9XaW5kb3dcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBjbG9zZSgpOiB2b2lkIHtcbiAgfVxuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgTWFya2VyIGV4dGVuZHMgQmFzZUNsYXNzIHtcblxuICBwcml2YXRlIF9tYXA6IEdvb2dsZU1hcDtcblxuICBjb25zdHJ1Y3RvcihfbWFwOiBHb29nbGVNYXAsIF9vYmplY3RJbnN0YW5jZTogYW55KSB7XG4gICAgc3VwZXIoX29iamVjdEluc3RhbmNlKTtcbiAgICB0aGlzLl9tYXAgPSBfbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIElEIG9mIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXAgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge0dvb2dsZU1hcH1cbiAgICovXG4gIGdldE1hcCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9tYXA7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBtYXJrZXIgcG9zaXRpb24uXG4gICAqIEBwYXJhbSBsYXRMbmcge0lMYXRMbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRQb3NpdGlvbihsYXRMbmc6IElMYXRMbmcpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWFya2VyIHBvc2l0aW9uLlxuICAgKiBAcmV0dXJuIHtJTGF0TG5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0UG9zaXRpb24oKTogSUxhdExuZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIG5vcm1hbCBpbmZvV2luZG93IG9mIHRoZSBtYXJrZXIuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzaG93SW5mb1dpbmRvdygpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBub3JtYWwgaW5mb1dpbmRvdyBvZiB0aGUgbWFya2VyLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgaGlkZUluZm9XaW5kb3coKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogU3BlY2lmeSB0aGUgYW5pbWF0aW9uIGVpdGhlciBgRFJPUGAgb3IgYEJPVU5DRWBcbiAgICogQHBhcmFtIGFuaW1hdGlvbiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0QW5pbWF0aW9uKGFuaW1hdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91ICoqZG8gbm90IHdhbnQqKiB0byBtb3ZlIHRoZSBtYXAgd2hlbiB5b3UgY2xpY2sgb24gdGhlIG1hcmtlci5cbiAgICogQHBhcmFtIGRpc2FibGVBdXRvUGFuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0RGlzYWJsZUF1dG9QYW4oZGlzYWJsZUF1dG9QYW46IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZmFsc2UgaWYgeW91IHdhbnQgdG8gaGlkZSB0aGUgbWFya2VyLlxuICAgKiBAcGFyYW0gdmlzaWJsZVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBtYXJrZXIgaXMgdmlzaWJsZVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgaXNWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRpdGxlIG9mIHRoZSBub3JtYWwgaW5mb1dpbmRvdy5cbiAgICogQHBhcmFtIHRpdGxlIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRUaXRsZSh0aXRsZTogc3RyaW5nKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdGl0bGUgc3RyaW5ncy5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0VGl0bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyBzbmlwcGV0IG9mIHRoZSBub3JtYWwgaW5mb1dpbmRvdy5cbiAgICogQHBhcmFtIHNuaXBwZXQge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFNuaXBwZXQoc25pcHBldDogc3RyaW5nKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc25pcHBldCBzdHJpbmdzLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRTbmlwcGV0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIG1hcmtlciBvcGFjaXR5IGZyb20gMC4wIHRvIDEuMC5cbiAgICogQHBhcmFtIGFscGhhIHtudW1iZXJ9IE9wYWNpdHlcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldE9wYWNpdHkoYWxwaGE6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hcmtlciBvcGFjaXR5LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IE9wYWNpdHlcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldE9wYWNpdHkoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBtYXJrZXIuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVtb3ZlKCk6IHZvaWQge1xuICAgIGRlbGV0ZSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpW3RoaXMuZ2V0SWQoKV07XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlKCk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgaW5mbyB3aW5kb3cgYW5jaG9yLiBUaGlzIGRlZmF1bHRzIHRvIDUwJSBmcm9tIHRoZSBsZWZ0IG9mIHRoZSBpbWFnZSBhbmQgYXQgdGhlIGJvdHRvbSBvZiB0aGUgaW1hZ2UuXG4gICAqIEBwYXJhbSB4IHtudW1iZXJ9IERpc3RhbmNlIGZyb20gbGVmdCBvZiB0aGUgaWNvbiBpbWFnZSBpbiBwaXhlbHMuXG4gICAqIEBwYXJhbSB5IHtudW1iZXJ9IERpc3RhbmNlIGZyb20gdG9wIG9mIHRoZSBpY29uIGltYWdlIGluIHBpeGVscy5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEljb25BbmNob3IoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBpbmZvIHdpbmRvdyBhbmNob3IuIFRoaXMgZGVmYXVsdHMgdG8gNTAlIGZyb20gdGhlIGxlZnQgb2YgdGhlIGltYWdlIGFuZCBhdCB0aGUgdG9wIG9mIHRoZSBpbWFnZS5cbiAgICogQHBhcmFtIHgge251bWJlcn0gRGlzdGFuY2UgZnJvbSBsZWZ0IG9mIHRoZSBpY29uIGltYWdlIGluIHBpeGVscy5cbiAgICogQHBhcmFtIHkge251bWJlcn0gRGlzdGFuY2UgZnJvbSB0b3Agb2YgdGhlIGljb24gaW1hZ2UgaW4gcGl4ZWxzLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0SW5mb1dpbmRvd0FuY2hvcih4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgaW5mb1dpbmRvdyBpcyBzaG93biBvbiB0aGUgbWFya2VyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBpc0luZm9XaW5kb3dTaG93bigpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSGlnaGVyIHpJbmRleCB2YWx1ZSBvdmVybGF5cyB3aWxsIGJlIGRyYXduIG9uIHRvcCBvZiBsb3dlciB6SW5kZXggdmFsdWUgdGlsZSBsYXllcnMgYW5kIG92ZXJsYXlzLlxuICAgKiBAcGFyYW0geSB7bnVtYmVyfSB6LWluZGV4XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRaSW5kZXgoekluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgei1pbmRleFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRaSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IGFsbG93IGFsbCB1c2VycyB0byBkcmFnIHRoZSBtYXJrZXIuXG4gICAqIEBwYXJhbSBkcmFnZ2FibGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXREcmFnZ2FibGUoZHJhZ2dhYmxlOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBtYXJrZXIgZHJhZyBpcyBlbmFibGVkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgaXNEcmFnZ2FibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIGJlIGZsYXQgbWFya2VyLlxuICAgKiBAcGFyYW0gZmxhdCB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEZsYXQoZmxhdDogYm9vbGVhbik6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIGljb24gdXJsIGFuZC9vciBzaXplXG4gICAqIEBwYXJhbSBpY29uXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRJY29uKGljb246IE1hcmtlckljb24pOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBtYXJrZXIgcm90YXRpb24gYW5nbGUuXG4gICAqIEBwYXJhbSByb3RhdGlvbiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Um90YXRpb24ocm90YXRpb246IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hcmtlciByb3RhdGlvbiBhbmdsZS5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Um90YXRpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIE1hcmtlckNsdXN0ZXIgZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuXG4gIHByaXZhdGUgX21hcDogR29vZ2xlTWFwO1xuXG4gIGNvbnN0cnVjdG9yKF9tYXA6IEdvb2dsZU1hcCwgX29iamVjdEluc3RhbmNlOiBhbnkpIHtcbiAgICBzdXBlcihfb2JqZWN0SW5zdGFuY2UpO1xuICAgIHRoaXMuX21hcCA9IF9tYXA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgSUQgb2YgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBvbmUgbWFya2VyIGxvY2F0aW9uXG4gICAqIEBwYXJhbSBtYXJrZXIge01hcmtlck9wdGlvbnN9IG9uZSBsb2NhdGlvblxuICAgKiBAcGFyYW0gc2tpcFJlZHJhdz8ge2Jvb2xlYW59IG1hcmtlciBjbHVzdGVyIGRvZXMgbm90IHJlZHJhdyB0aGUgbWFya2VyIGNsdXN0ZXIgaWYgdHJ1ZS5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGFkZE1hcmtlcihtYXJrZXI6IE1hcmtlck9wdGlvbnMpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbWFya2VyIGxvY2F0aW9uc1xuICAgKiBAcGFyYW0gbWFya2VycyB7TWFya2VyT3B0aW9uc1tdfSBtdWx0aXBsZSBsb2NhdGlvblxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgYWRkTWFya2VycyhtYXJrZXJzOiBNYXJrZXJPcHRpb25zW10pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIG1hcmtlciBjbHVzdGVyXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVtb3ZlKCk6IHZvaWQge1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnNldCgnX292ZXJsYXlzJywgdW5kZWZpbmVkKTtcbiAgICBkZWxldGUgdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVt0aGlzLmdldElkKCldO1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hcCBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7R29vZ2xlTWFwfVxuICAgKi9cbiAgZ2V0TWFwKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgfVxuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgUG9seWdvbiBleHRlbmRzIEJhc2VDbGFzcyB7XG5cbiAgcHJpdmF0ZSBfbWFwOiBHb29nbGVNYXA7XG5cbiAgY29uc3RydWN0b3IoX21hcDogR29vZ2xlTWFwLCBfb2JqZWN0SW5zdGFuY2U6IGFueSkge1xuICAgIHN1cGVyKF9vYmplY3RJbnN0YW5jZSk7XG4gICAgdGhpcy5fbWFwID0gX21hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBJRCBvZiBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWFwIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtHb29nbGVNYXB9XG4gICAqL1xuICBnZXRNYXAoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHBvbHlnb24gcG9pbnRzLlxuICAgKiBAcGFyYW0gcG9pbnRzIHtJTGF0TG5nW119XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRQb2ludHMocG9pbnRzOiBJTGF0TG5nW10pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIHRoZSBCYXNlQXJyYXlDbGFzcy5cbiAgICogWW91IGNhbiBtb2RpZnkgdGhlIHBvaW50cy5cbiAgICogQHJldHVybiB7QmFzZUFycmF5Q2xhc3M8SUxhdExuZz59XG4gICAqL1xuICBnZXRQb2ludHMoKTogQmFzZUFycmF5Q2xhc3M8SUxhdExuZz4ge1xuICAgIHJldHVybiBuZXcgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz4odGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0UG9pbnRzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHBvbHlnb24gaG9sZXMuXG4gICAqIEBwYXJhbSBob2xlcyB7SUxhdExuZ1tdW119XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRIb2xlcyhob2xlczogSUxhdExuZ1tdW10pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIHRoZSBCYXNlQXJyYXlDbGFzcy5cbiAgICogWW91IGNhbiBtb2RpZnkgdGhlIGhvbGVzLlxuICAgKiBAcmV0dXJuIHtCYXNlQXJyYXlDbGFzczxJTGF0TG5nW10+fVxuICAgKi9cbiAgZ2V0SG9sZXMoKTogQmFzZUFycmF5Q2xhc3M8SUxhdExuZ1tdPiB7XG4gICAgY29uc3QgaG9sZXM6IElMYXRMbmdbXVtdID0gdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0UG9pbnRzKCk7XG4gICAgY29uc3QgcmVzdWx0czogQmFzZUFycmF5Q2xhc3M8SUxhdExuZ1tdPiA9IG5ldyBCYXNlQXJyYXlDbGFzczxJTGF0TG5nW10+KCk7XG4gICAgaG9sZXMuZm9yRWFjaCgoaG9sZTogSUxhdExuZ1tdKSA9PiB7XG4gICAgICByZXN1bHRzLnB1c2goaG9sZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgZmlsbGluZyBjb2xvciAoaW5uZXIgY29sb3IpXG4gICAqIEBwYXJhbSBmaWxsQ29sb3Ige3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEZpbGxDb2xvcihmaWxsQ29sb3I6IHN0cmluZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgcG9seWdvbiBmaWxsaW5nIGNvbG9yIChpbm5lciBjb2xvcikuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEZpbGxDb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBzdHJva2UgY29sb3IgKG91dGVyIGNvbG9yKVxuICAgKiBAcGFyYW0gc3Ryb2tlQ29sb3Ige3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFN0cm9rZUNvbG9yKHN0cm9rZUNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHBvbHlnb24gc3Ryb2tlIGNvbG9yIChvdXRlciBjb2xvcilcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0U3Ryb2tlQ29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyBjbGljay1hYmlsaXR5IG9mIHRoZSBwb2x5Z29uXG4gICAqIEBwYXJhbSBjbGlja2FibGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDbGlja2FibGUoY2xpY2thYmxlOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwb2x5Z29uIGlzIGNsaWNrYWJsZVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2xpY2thYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHZpc2liaWxpdHkgb2YgdGhlIHBvbHlnb25cbiAgICogQHBhcmFtIHZpc2libGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBvbHlnb24gaXMgdmlzaWJsZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0VmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgcG9seWdvbiB6SW5kZXggb3JkZXIuXG4gICAqIEBwYXJhbSB6SW5kZXgge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFpJbmRleCh6SW5kZXg6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgcG9seWdvbiB6SW5kZXhcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0WkluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgcG9seWdvbi5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICByZW1vdmUoKTogdm9pZCB7XG4gICAgZGVsZXRlIHRoaXMuX29iamVjdEluc3RhbmNlLmdldE1hcCgpLmdldCgnX292ZXJsYXlzJylbdGhpcy5nZXRJZCgpXTtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmUoKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBwb2x5Z29uIHN0cm9rZSB3aWR0aFxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0U3Ryb2tlV2lkdGgoc3Ryb2tlV2lkdGg6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHBvbHlnb24gc3Ryb2tlIHdpZHRoXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRTdHJva2VXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIGVkZ2VzIG9mIHRoZSBwb2x5Z29uIGFyZSBpbnRlcnByZXRlZCBhcyBnZW9kZXNpYyBhbmQgd2lsbCBmb2xsb3cgdGhlIGN1cnZhdHVyZSBvZiB0aGUgRWFydGguXG4gICAqIEBwYXJhbSBnZW9kZXNpYyB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEdlb2Rlc2ljKGdlb2Rlc2ljOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwb2x5Z29uIGlzIGdlb2Rlc2ljLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0R2VvZGVzaWMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBQb2x5bGluZSBleHRlbmRzIEJhc2VDbGFzcyB7XG5cbiAgcHJpdmF0ZSBfbWFwOiBHb29nbGVNYXA7XG5cbiAgY29uc3RydWN0b3IoX21hcDogR29vZ2xlTWFwLCBfb2JqZWN0SW5zdGFuY2U6IGFueSkge1xuICAgIHN1cGVyKF9vYmplY3RJbnN0YW5jZSk7XG4gICAgdGhpcy5fbWFwID0gX21hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBJRCBvZiBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWFwIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtHb29nbGVNYXB9XG4gICAqL1xuICBnZXRNYXAoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHBvbHlsaW5lIHBvaW50cy5cbiAgICogQHBhcmFtIHBvaW50cyB7SUxhdExuZ1tdfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0UG9pbnRzKHBvaW50czogSUxhdExuZ1tdKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBpbnN0YW5jZSBvZiB0aGUgQmFzZUFycmF5Q2xhc3NcbiAgICogWW91IGNhbiBtb2RpZnkgdGhlIHBvaW50cy5cbiAgICogQHJldHVybiB7QmFzZUFycmF5Q2xhc3M8SUxhdExuZz59XG4gICAqL1xuICBnZXRQb2ludHMoKTogQmFzZUFycmF5Q2xhc3M8SUxhdExuZz4ge1xuICAgIHJldHVybiBuZXcgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz4odGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0UG9pbnRzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgZWRnZXMgb2YgdGhlIHBvbHlsaW5lIGFyZSBpbnRlcnByZXRlZCBhcyBnZW9kZXNpYyBhbmQgd2lsbCBmb2xsb3cgdGhlIGN1cnZhdHVyZSBvZiB0aGUgRWFydGguXG4gICAqIEBwYXJhbSBnZW9EZXNpYyB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEdlb0Rlc2ljKGdlb0Rlc2ljOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwb2x5bGluZSBpcyBnZW9kZXNpY1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0R2VvZGVzaWMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdmlzaWJpbGl0eSBvZiB0aGUgcG9seWxpbmVcbiAgICogQHBhcmFtIHZpc2libGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBvbHlsaW5lIGlzIHZpc2libGVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgY2xpY2stYWJpbGl0eSBvZiB0aGUgcG9seWxpbmVcbiAgICogQHBhcmFtIGNsaWNrYWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldENsaWNrYWJsZShjbGlja2FibGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBvbHlsaW5lIGlzIGNsaWNrYWJsZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2xpY2thYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBwb2x5bGluZSBjb2xvclxuICAgKiBAcGFyYW0gc3Ryb2tlQ29sb3Ige3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFN0cm9rZUNvbG9yKHN0cm9rZUNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHBvbHlsaW5lIGNvbG9yXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFN0cm9rZUNvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHBvbHlsaW5lIHN0cm9rZSB3aWR0aFxuICAgKiBAcGFyYW0gc3Ryb2tlV2lkdGgge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFN0cm9rZVdpZHRoKHN0cm9rZVdpZHRoOiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHN0cm9rZSB3aWR0aCAodW5pdDogcGl4ZWwpLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRTdHJva2VXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBwb2x5bGluZSB6SW5kZXggb3JkZXIuXG4gICAqIEBwYXJhbSBpbmRleCB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0WkluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHBvbHlsaW5lIHpJbmRleFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRaSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBwb2x5bGluZVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHJlbW92ZSgpOiB2b2lkIHtcbiAgICBkZWxldGUgdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVt0aGlzLmdldElkKCldO1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgVGlsZU92ZXJsYXkgZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuXG4gIHByaXZhdGUgX21hcDogR29vZ2xlTWFwO1xuXG4gIGNvbnN0cnVjdG9yKF9tYXA6IEdvb2dsZU1hcCwgX29iamVjdEluc3RhbmNlOiBhbnkpIHtcbiAgICBzdXBlcihfb2JqZWN0SW5zdGFuY2UpO1xuICAgIHRoaXMuX21hcCA9IF9tYXA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgSUQgb2YgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hcCBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7R29vZ2xlTWFwfVxuICAgKi9cbiAgZ2V0TWFwKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgd2hldGhlciB0aGUgdGlsZXMgc2hvdWxkIGZhZGUgaW4uXG4gICAqIEBwYXJhbSBmYWRlSW4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRGYWRlSW4oZmFkZUluOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHdoZXRoZXIgdGhlIHRpbGVzIHNob3VsZCBmYWRlIGluXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRGYWRlSW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgekluZGV4IG9mIHRoZSB0aWxlIG92ZXJsYXlcbiAgICogQHBhcmFtIHpJbmRleCB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0WkluZGV4KHpJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgekluZGV4IG9mIHRoZSB0aWxlIG92ZXJsYXlcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0WkluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgb3BhY2l0eSBvZiB0aGUgdGlsZSBvdmVybGF5XG4gICAqIEBwYXJhbSBvcGFjaXR5IHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRPcGFjaXR5KG9wYWNpdHk6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG9wYWNpdHkgb2YgdGhlIHRpbGUgb3ZlcmxheVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRPcGFjaXR5KCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBmYWxzZSBpZiB5b3Ugd2FudCB0byBoaWRlXG4gICAqIEBwYXJhbSB2aXNpYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSB0aWxlIG92ZXJsYXkgaXMgdmlzaWJsZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0VmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRpbGUgc2l6ZVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0VGlsZVNpemUoKTogYW55IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSB0aWxlIG92ZXJsYXlcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICByZW1vdmUoKTogdm9pZCB7XG4gICAgZGVsZXRlIHRoaXMuX29iamVjdEluc3RhbmNlLmdldE1hcCgpLmdldCgnX292ZXJsYXlzJylbdGhpcy5nZXRJZCgpXTtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmUoKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIEttbE92ZXJsYXkgZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuXG4gIHByaXZhdGUgX21hcDogR29vZ2xlTWFwO1xuXG4gIGNvbnN0cnVjdG9yKF9tYXA6IEdvb2dsZU1hcCwgX29iamVjdEluc3RhbmNlOiBhbnkpIHtcbiAgICBzdXBlcihfb2JqZWN0SW5zdGFuY2UpO1xuICAgIHRoaXMuX21hcCA9IF9tYXA7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZiwgJ2NhbWVyYScsIHtcbiAgICAgICAgdmFsdWU6IHRoaXMuX29iamVjdEluc3RhbmNlLmNhbWVyYSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYsICdrbWxEYXRhJywge1xuICAgICAgICB2YWx1ZTogdGhpcy5fb2JqZWN0SW5zdGFuY2Uua21sRGF0YSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmlld3BvcnQgdG8gY29udGFpbnMgYWxsIG92ZXJsYXlzXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXREZWZhdWx0Vmlld3BvcnQoKTogQ2FtZXJhUG9zaXRpb248SUxhdExuZyB8IElMYXRMbmdbXT4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgSUQgb2YgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldElkKCk6IHN0cmluZyB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXAgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge0dvb2dsZU1hcH1cbiAgICovXG4gIGdldE1hcCgpOiBHb29nbGVNYXAgeyByZXR1cm4gdGhpcy5fbWFwOyB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdmlzaWJpbGl0eSBvZiB0aGUga21sIG92ZXJsYXlcbiAgICogQHBhcmFtIHZpc2libGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUga21sIG92ZXJsYXkgaXMgdmlzaWJsZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0VmlzaWJsZSgpOiBib29sZWFuIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgY2xpY2stYWJpbGl0eSBvZiB0aGUgS21sT3ZlcmxheVxuICAgKiBAcGFyYW0gY2xpY2thYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q2xpY2thYmxlKGNsaWNrYWJsZTogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBLbWxPdmVybGF5IGlzIGNsaWNrYWJsZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2xpY2thYmxlKCk6IGJvb2xlYW4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBLbWxPdmVybGF5XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVtb3ZlKCk6IHZvaWQge1xuICAgIGRlbGV0ZSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpW3RoaXMuZ2V0SWQoKV07XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlKCk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/index.js":
  /*!***************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/index.js ***!
    \***************************************************************/

  /*! exports provided: Observable, ConnectableObservable, GroupedObservable, observable, Subject, BehaviorSubject, ReplaySubject, AsyncSubject, asapScheduler, asyncScheduler, queueScheduler, animationFrameScheduler, VirtualTimeScheduler, VirtualAction, Scheduler, Subscription, Subscriber, Notification, NotificationKind, pipe, noop, identity, isObservable, ArgumentOutOfRangeError, EmptyError, ObjectUnsubscribedError, UnsubscriptionError, TimeoutError, bindCallback, bindNodeCallback, combineLatest, concat, defer, empty, forkJoin, from, fromEvent, fromEventPattern, generate, iif, interval, merge, never, of, onErrorResumeNext, pairs, partition, race, range, throwError, timer, using, zip, scheduled, EMPTY, NEVER, config */

  /***/
  function node_modulesRxjs_esm2015IndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _internal_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./internal/Observable */
    "../../../node_modules/rxjs/_esm2015/internal/Observable.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Observable", function () {
      return _internal_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"];
    });
    /* harmony import */


    var _internal_observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./internal/observable/ConnectableObservable */
    "../../../node_modules/rxjs/_esm2015/internal/observable/ConnectableObservable.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ConnectableObservable", function () {
      return _internal_observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_1__["ConnectableObservable"];
    });
    /* harmony import */


    var _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./internal/operators/groupBy */
    "../../../node_modules/rxjs/_esm2015/internal/operators/groupBy.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GroupedObservable", function () {
      return _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_2__["GroupedObservable"];
    });
    /* harmony import */


    var _internal_symbol_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./internal/symbol/observable */
    "../../../node_modules/rxjs/_esm2015/internal/symbol/observable.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "observable", function () {
      return _internal_symbol_observable__WEBPACK_IMPORTED_MODULE_3__["observable"];
    });
    /* harmony import */


    var _internal_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./internal/Subject */
    "../../../node_modules/rxjs/_esm2015/internal/Subject.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Subject", function () {
      return _internal_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"];
    });
    /* harmony import */


    var _internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./internal/BehaviorSubject */
    "../../../node_modules/rxjs/_esm2015/internal/BehaviorSubject.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BehaviorSubject", function () {
      return _internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"];
    });
    /* harmony import */


    var _internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./internal/ReplaySubject */
    "../../../node_modules/rxjs/_esm2015/internal/ReplaySubject.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ReplaySubject", function () {
      return _internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_6__["ReplaySubject"];
    });
    /* harmony import */


    var _internal_AsyncSubject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./internal/AsyncSubject */
    "../../../node_modules/rxjs/_esm2015/internal/AsyncSubject.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AsyncSubject", function () {
      return _internal_AsyncSubject__WEBPACK_IMPORTED_MODULE_7__["AsyncSubject"];
    });
    /* harmony import */


    var _internal_scheduler_asap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./internal/scheduler/asap */
    "../../../node_modules/rxjs/_esm2015/internal/scheduler/asap.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "asapScheduler", function () {
      return _internal_scheduler_asap__WEBPACK_IMPORTED_MODULE_8__["asap"];
    });
    /* harmony import */


    var _internal_scheduler_async__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./internal/scheduler/async */
    "../../../node_modules/rxjs/_esm2015/internal/scheduler/async.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "asyncScheduler", function () {
      return _internal_scheduler_async__WEBPACK_IMPORTED_MODULE_9__["async"];
    });
    /* harmony import */


    var _internal_scheduler_queue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./internal/scheduler/queue */
    "../../../node_modules/rxjs/_esm2015/internal/scheduler/queue.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "queueScheduler", function () {
      return _internal_scheduler_queue__WEBPACK_IMPORTED_MODULE_10__["queue"];
    });
    /* harmony import */


    var _internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./internal/scheduler/animationFrame */
    "../../../node_modules/rxjs/_esm2015/internal/scheduler/animationFrame.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "animationFrameScheduler", function () {
      return _internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_11__["animationFrame"];
    });
    /* harmony import */


    var _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./internal/scheduler/VirtualTimeScheduler */
    "../../../node_modules/rxjs/_esm2015/internal/scheduler/VirtualTimeScheduler.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "VirtualTimeScheduler", function () {
      return _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__["VirtualTimeScheduler"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "VirtualAction", function () {
      return _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__["VirtualAction"];
    });
    /* harmony import */


    var _internal_Scheduler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./internal/Scheduler */
    "../../../node_modules/rxjs/_esm2015/internal/Scheduler.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Scheduler", function () {
      return _internal_Scheduler__WEBPACK_IMPORTED_MODULE_13__["Scheduler"];
    });
    /* harmony import */


    var _internal_Subscription__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./internal/Subscription */
    "../../../node_modules/rxjs/_esm2015/internal/Subscription.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Subscription", function () {
      return _internal_Subscription__WEBPACK_IMPORTED_MODULE_14__["Subscription"];
    });
    /* harmony import */


    var _internal_Subscriber__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./internal/Subscriber */
    "../../../node_modules/rxjs/_esm2015/internal/Subscriber.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Subscriber", function () {
      return _internal_Subscriber__WEBPACK_IMPORTED_MODULE_15__["Subscriber"];
    });
    /* harmony import */


    var _internal_Notification__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./internal/Notification */
    "../../../node_modules/rxjs/_esm2015/internal/Notification.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Notification", function () {
      return _internal_Notification__WEBPACK_IMPORTED_MODULE_16__["Notification"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NotificationKind", function () {
      return _internal_Notification__WEBPACK_IMPORTED_MODULE_16__["NotificationKind"];
    });
    /* harmony import */


    var _internal_util_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./internal/util/pipe */
    "../../../node_modules/rxjs/_esm2015/internal/util/pipe.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "pipe", function () {
      return _internal_util_pipe__WEBPACK_IMPORTED_MODULE_17__["pipe"];
    });
    /* harmony import */


    var _internal_util_noop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./internal/util/noop */
    "../../../node_modules/rxjs/_esm2015/internal/util/noop.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "noop", function () {
      return _internal_util_noop__WEBPACK_IMPORTED_MODULE_18__["noop"];
    });
    /* harmony import */


    var _internal_util_identity__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./internal/util/identity */
    "../../../node_modules/rxjs/_esm2015/internal/util/identity.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "identity", function () {
      return _internal_util_identity__WEBPACK_IMPORTED_MODULE_19__["identity"];
    });
    /* harmony import */


    var _internal_util_isObservable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./internal/util/isObservable */
    "../../../node_modules/rxjs/_esm2015/internal/util/isObservable.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isObservable", function () {
      return _internal_util_isObservable__WEBPACK_IMPORTED_MODULE_20__["isObservable"];
    });
    /* harmony import */


    var _internal_util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./internal/util/ArgumentOutOfRangeError */
    "../../../node_modules/rxjs/_esm2015/internal/util/ArgumentOutOfRangeError.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ArgumentOutOfRangeError", function () {
      return _internal_util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_21__["ArgumentOutOfRangeError"];
    });
    /* harmony import */


    var _internal_util_EmptyError__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./internal/util/EmptyError */
    "../../../node_modules/rxjs/_esm2015/internal/util/EmptyError.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EmptyError", function () {
      return _internal_util_EmptyError__WEBPACK_IMPORTED_MODULE_22__["EmptyError"];
    });
    /* harmony import */


    var _internal_util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./internal/util/ObjectUnsubscribedError */
    "../../../node_modules/rxjs/_esm2015/internal/util/ObjectUnsubscribedError.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ObjectUnsubscribedError", function () {
      return _internal_util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_23__["ObjectUnsubscribedError"];
    });
    /* harmony import */


    var _internal_util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./internal/util/UnsubscriptionError */
    "../../../node_modules/rxjs/_esm2015/internal/util/UnsubscriptionError.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UnsubscriptionError", function () {
      return _internal_util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_24__["UnsubscriptionError"];
    });
    /* harmony import */


    var _internal_util_TimeoutError__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./internal/util/TimeoutError */
    "../../../node_modules/rxjs/_esm2015/internal/util/TimeoutError.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TimeoutError", function () {
      return _internal_util_TimeoutError__WEBPACK_IMPORTED_MODULE_25__["TimeoutError"];
    });
    /* harmony import */


    var _internal_observable_bindCallback__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./internal/observable/bindCallback */
    "../../../node_modules/rxjs/_esm2015/internal/observable/bindCallback.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "bindCallback", function () {
      return _internal_observable_bindCallback__WEBPACK_IMPORTED_MODULE_26__["bindCallback"];
    });
    /* harmony import */


    var _internal_observable_bindNodeCallback__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./internal/observable/bindNodeCallback */
    "../../../node_modules/rxjs/_esm2015/internal/observable/bindNodeCallback.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "bindNodeCallback", function () {
      return _internal_observable_bindNodeCallback__WEBPACK_IMPORTED_MODULE_27__["bindNodeCallback"];
    });
    /* harmony import */


    var _internal_observable_combineLatest__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./internal/observable/combineLatest */
    "../../../node_modules/rxjs/_esm2015/internal/observable/combineLatest.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "combineLatest", function () {
      return _internal_observable_combineLatest__WEBPACK_IMPORTED_MODULE_28__["combineLatest"];
    });
    /* harmony import */


    var _internal_observable_concat__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./internal/observable/concat */
    "../../../node_modules/rxjs/_esm2015/internal/observable/concat.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "concat", function () {
      return _internal_observable_concat__WEBPACK_IMPORTED_MODULE_29__["concat"];
    });
    /* harmony import */


    var _internal_observable_defer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./internal/observable/defer */
    "../../../node_modules/rxjs/_esm2015/internal/observable/defer.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "defer", function () {
      return _internal_observable_defer__WEBPACK_IMPORTED_MODULE_30__["defer"];
    });
    /* harmony import */


    var _internal_observable_empty__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./internal/observable/empty */
    "../../../node_modules/rxjs/_esm2015/internal/observable/empty.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "empty", function () {
      return _internal_observable_empty__WEBPACK_IMPORTED_MODULE_31__["empty"];
    });
    /* harmony import */


    var _internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./internal/observable/forkJoin */
    "../../../node_modules/rxjs/_esm2015/internal/observable/forkJoin.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "forkJoin", function () {
      return _internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_32__["forkJoin"];
    });
    /* harmony import */


    var _internal_observable_from__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./internal/observable/from */
    "../../../node_modules/rxjs/_esm2015/internal/observable/from.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "from", function () {
      return _internal_observable_from__WEBPACK_IMPORTED_MODULE_33__["from"];
    });
    /* harmony import */


    var _internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./internal/observable/fromEvent */
    "../../../node_modules/rxjs/_esm2015/internal/observable/fromEvent.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "fromEvent", function () {
      return _internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_34__["fromEvent"];
    });
    /* harmony import */


    var _internal_observable_fromEventPattern__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./internal/observable/fromEventPattern */
    "../../../node_modules/rxjs/_esm2015/internal/observable/fromEventPattern.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "fromEventPattern", function () {
      return _internal_observable_fromEventPattern__WEBPACK_IMPORTED_MODULE_35__["fromEventPattern"];
    });
    /* harmony import */


    var _internal_observable_generate__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./internal/observable/generate */
    "../../../node_modules/rxjs/_esm2015/internal/observable/generate.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "generate", function () {
      return _internal_observable_generate__WEBPACK_IMPORTED_MODULE_36__["generate"];
    });
    /* harmony import */


    var _internal_observable_iif__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./internal/observable/iif */
    "../../../node_modules/rxjs/_esm2015/internal/observable/iif.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "iif", function () {
      return _internal_observable_iif__WEBPACK_IMPORTED_MODULE_37__["iif"];
    });
    /* harmony import */


    var _internal_observable_interval__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./internal/observable/interval */
    "../../../node_modules/rxjs/_esm2015/internal/observable/interval.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "interval", function () {
      return _internal_observable_interval__WEBPACK_IMPORTED_MODULE_38__["interval"];
    });
    /* harmony import */


    var _internal_observable_merge__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./internal/observable/merge */
    "../../../node_modules/rxjs/_esm2015/internal/observable/merge.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "merge", function () {
      return _internal_observable_merge__WEBPACK_IMPORTED_MODULE_39__["merge"];
    });
    /* harmony import */


    var _internal_observable_never__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./internal/observable/never */
    "../../../node_modules/rxjs/_esm2015/internal/observable/never.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "never", function () {
      return _internal_observable_never__WEBPACK_IMPORTED_MODULE_40__["never"];
    });
    /* harmony import */


    var _internal_observable_of__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./internal/observable/of */
    "../../../node_modules/rxjs/_esm2015/internal/observable/of.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "of", function () {
      return _internal_observable_of__WEBPACK_IMPORTED_MODULE_41__["of"];
    });
    /* harmony import */


    var _internal_observable_onErrorResumeNext__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./internal/observable/onErrorResumeNext */
    "../../../node_modules/rxjs/_esm2015/internal/observable/onErrorResumeNext.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "onErrorResumeNext", function () {
      return _internal_observable_onErrorResumeNext__WEBPACK_IMPORTED_MODULE_42__["onErrorResumeNext"];
    });
    /* harmony import */


    var _internal_observable_pairs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./internal/observable/pairs */
    "../../../node_modules/rxjs/_esm2015/internal/observable/pairs.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "pairs", function () {
      return _internal_observable_pairs__WEBPACK_IMPORTED_MODULE_43__["pairs"];
    });
    /* harmony import */


    var _internal_observable_partition__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./internal/observable/partition */
    "../../../node_modules/rxjs/_esm2015/internal/observable/partition.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "partition", function () {
      return _internal_observable_partition__WEBPACK_IMPORTED_MODULE_44__["partition"];
    });
    /* harmony import */


    var _internal_observable_race__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./internal/observable/race */
    "../../../node_modules/rxjs/_esm2015/internal/observable/race.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "race", function () {
      return _internal_observable_race__WEBPACK_IMPORTED_MODULE_45__["race"];
    });
    /* harmony import */


    var _internal_observable_range__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./internal/observable/range */
    "../../../node_modules/rxjs/_esm2015/internal/observable/range.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "range", function () {
      return _internal_observable_range__WEBPACK_IMPORTED_MODULE_46__["range"];
    });
    /* harmony import */


    var _internal_observable_throwError__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./internal/observable/throwError */
    "../../../node_modules/rxjs/_esm2015/internal/observable/throwError.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "throwError", function () {
      return _internal_observable_throwError__WEBPACK_IMPORTED_MODULE_47__["throwError"];
    });
    /* harmony import */


    var _internal_observable_timer__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./internal/observable/timer */
    "../../../node_modules/rxjs/_esm2015/internal/observable/timer.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "timer", function () {
      return _internal_observable_timer__WEBPACK_IMPORTED_MODULE_48__["timer"];
    });
    /* harmony import */


    var _internal_observable_using__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./internal/observable/using */
    "../../../node_modules/rxjs/_esm2015/internal/observable/using.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "using", function () {
      return _internal_observable_using__WEBPACK_IMPORTED_MODULE_49__["using"];
    });
    /* harmony import */


    var _internal_observable_zip__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./internal/observable/zip */
    "../../../node_modules/rxjs/_esm2015/internal/observable/zip.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "zip", function () {
      return _internal_observable_zip__WEBPACK_IMPORTED_MODULE_50__["zip"];
    });
    /* harmony import */


    var _internal_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./internal/scheduled/scheduled */
    "../../../node_modules/rxjs/_esm2015/internal/scheduled/scheduled.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "scheduled", function () {
      return _internal_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_51__["scheduled"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EMPTY", function () {
      return _internal_observable_empty__WEBPACK_IMPORTED_MODULE_31__["EMPTY"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NEVER", function () {
      return _internal_observable_never__WEBPACK_IMPORTED_MODULE_40__["NEVER"];
    });
    /* harmony import */


    var _internal_config__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./internal/config */
    "../../../node_modules/rxjs/_esm2015/internal/config.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "config", function () {
      return _internal_config__WEBPACK_IMPORTED_MODULE_52__["config"];
    }); //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/AsyncSubject.js":
  /*!*******************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/AsyncSubject.js ***!
    \*******************************************************************************/

  /*! exports provided: AsyncSubject */

  /***/
  function node_modulesRxjs_esm2015InternalAsyncSubjectJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsyncSubject", function () {
      return AsyncSubject;
    });
    /* harmony import */


    var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Subject */
    "../../../node_modules/rxjs/_esm2015/internal/Subject.js");
    /* harmony import */


    var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Subscription */
    "../../../node_modules/rxjs/_esm2015/internal/Subscription.js");

    var AsyncSubject = /*#__PURE__*/function (_Subject__WEBPACK_IMP) {
      _inherits(AsyncSubject, _Subject__WEBPACK_IMP);

      var _super2 = _createSuper(AsyncSubject);

      function AsyncSubject() {
        var _this2;

        _classCallCheck(this, AsyncSubject);

        _this2 = _super2.apply(this, arguments);
        _this2.value = null;
        _this2.hasNext = false;
        _this2.hasCompleted = false;
        return _this2;
      }

      _createClass(AsyncSubject, [{
        key: "_subscribe",
        value: function _subscribe(subscriber) {
          if (this.hasError) {
            subscriber.error(this.thrownError);
            return _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
          } else if (this.hasCompleted && this.hasNext) {
            subscriber.next(this.value);
            subscriber.complete();
            return _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
          }

          return _get(_getPrototypeOf(AsyncSubject.prototype), "_subscribe", this).call(this, subscriber);
        }
      }, {
        key: "next",
        value: function next(value) {
          if (!this.hasCompleted) {
            this.value = value;
            this.hasNext = true;
          }
        }
      }, {
        key: "error",
        value: function error(_error) {
          if (!this.hasCompleted) {
            _get(_getPrototypeOf(AsyncSubject.prototype), "error", this).call(this, _error);
          }
        }
      }, {
        key: "complete",
        value: function complete() {
          this.hasCompleted = true;

          if (this.hasNext) {
            _get(_getPrototypeOf(AsyncSubject.prototype), "next", this).call(this, this.value);
          }

          _get(_getPrototypeOf(AsyncSubject.prototype), "complete", this).call(this);
        }
      }]);

      return AsyncSubject;
    }(_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]); //# sourceMappingURL=AsyncSubject.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/BehaviorSubject.js":
  /*!**********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/BehaviorSubject.js ***!
    \**********************************************************************************/

  /*! exports provided: BehaviorSubject */

  /***/
  function node_modulesRxjs_esm2015InternalBehaviorSubjectJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BehaviorSubject", function () {
      return BehaviorSubject;
    });
    /* harmony import */


    var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Subject */
    "../../../node_modules/rxjs/_esm2015/internal/Subject.js");
    /* harmony import */


    var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./util/ObjectUnsubscribedError */
    "../../../node_modules/rxjs/_esm2015/internal/util/ObjectUnsubscribedError.js");

    var BehaviorSubject = /*#__PURE__*/function (_Subject__WEBPACK_IMP2) {
      _inherits(BehaviorSubject, _Subject__WEBPACK_IMP2);

      var _super3 = _createSuper(BehaviorSubject);

      function BehaviorSubject(_value) {
        var _this3;

        _classCallCheck(this, BehaviorSubject);

        _this3 = _super3.call(this);
        _this3._value = _value;
        return _this3;
      }

      _createClass(BehaviorSubject, [{
        key: "_subscribe",
        value: function _subscribe(subscriber) {
          var subscription = _get(_getPrototypeOf(BehaviorSubject.prototype), "_subscribe", this).call(this, subscriber);

          if (subscription && !subscription.closed) {
            subscriber.next(this._value);
          }

          return subscription;
        }
      }, {
        key: "getValue",
        value: function getValue() {
          if (this.hasError) {
            throw this.thrownError;
          } else if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__["ObjectUnsubscribedError"]();
          } else {
            return this._value;
          }
        }
      }, {
        key: "next",
        value: function next(value) {
          _get(_getPrototypeOf(BehaviorSubject.prototype), "next", this).call(this, this._value = value);
        }
      }, {
        key: "value",
        get: function get() {
          return this.getValue();
        }
      }]);

      return BehaviorSubject;
    }(_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]); //# sourceMappingURL=BehaviorSubject.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/InnerSubscriber.js":
  /*!**********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/InnerSubscriber.js ***!
    \**********************************************************************************/

  /*! exports provided: InnerSubscriber */

  /***/
  function node_modulesRxjs_esm2015InternalInnerSubscriberJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InnerSubscriber", function () {
      return InnerSubscriber;
    });
    /* harmony import */


    var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Subscriber */
    "../../../node_modules/rxjs/_esm2015/internal/Subscriber.js");

    var InnerSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_) {
      _inherits(InnerSubscriber, _Subscriber__WEBPACK_);

      var _super4 = _createSuper(InnerSubscriber);

      function InnerSubscriber(parent, outerValue, outerIndex) {
        var _this4;

        _classCallCheck(this, InnerSubscriber);

        _this4 = _super4.call(this);
        _this4.parent = parent;
        _this4.outerValue = outerValue;
        _this4.outerIndex = outerIndex;
        _this4.index = 0;
        return _this4;
      }

      _createClass(InnerSubscriber, [{
        key: "_next",
        value: function _next(value) {
          this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
        }
      }, {
        key: "_error",
        value: function _error(error) {
          this.parent.notifyError(error, this);
          this.unsubscribe();
        }
      }, {
        key: "_complete",
        value: function _complete() {
          this.parent.notifyComplete(this);
          this.unsubscribe();
        }
      }]);

      return InnerSubscriber;
    }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=InnerSubscriber.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/Notification.js":
  /*!*******************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/Notification.js ***!
    \*******************************************************************************/

  /*! exports provided: NotificationKind, Notification */

  /***/
  function node_modulesRxjs_esm2015InternalNotificationJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationKind", function () {
      return NotificationKind;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Notification", function () {
      return Notification;
    });
    /* harmony import */


    var _observable_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./observable/empty */
    "../../../node_modules/rxjs/_esm2015/internal/observable/empty.js");
    /* harmony import */


    var _observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./observable/of */
    "../../../node_modules/rxjs/_esm2015/internal/observable/of.js");
    /* harmony import */


    var _observable_throwError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./observable/throwError */
    "../../../node_modules/rxjs/_esm2015/internal/observable/throwError.js");

    var NotificationKind;

    (function (NotificationKind) {
      NotificationKind["NEXT"] = "N";
      NotificationKind["ERROR"] = "E";
      NotificationKind["COMPLETE"] = "C";
    })(NotificationKind || (NotificationKind = {}));

    var Notification = /*#__PURE__*/function () {
      function Notification(kind, value, error) {
        _classCallCheck(this, Notification);

        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
      }

      _createClass(Notification, [{
        key: "observe",
        value: function observe(observer) {
          switch (this.kind) {
            case 'N':
              return observer.next && observer.next(this.value);

            case 'E':
              return observer.error && observer.error(this.error);

            case 'C':
              return observer.complete && observer.complete();
          }
        }
      }, {
        key: "do",
        value: function _do(next, error, complete) {
          var kind = this.kind;

          switch (kind) {
            case 'N':
              return next && next(this.value);

            case 'E':
              return error && error(this.error);

            case 'C':
              return complete && complete();
          }
        }
      }, {
        key: "accept",
        value: function accept(nextOrObserver, error, complete) {
          if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
          } else {
            return this["do"](nextOrObserver, error, complete);
          }
        }
      }, {
        key: "toObservable",
        value: function toObservable() {
          var kind = this.kind;

          switch (kind) {
            case 'N':
              return Object(_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])(this.value);

            case 'E':
              return Object(_observable_throwError__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.error);

            case 'C':
              return Object(_observable_empty__WEBPACK_IMPORTED_MODULE_0__["empty"])();
          }

          throw new Error('unexpected notification kind value');
        }
      }], [{
        key: "createNext",
        value: function createNext(value) {
          if (typeof value !== 'undefined') {
            return new Notification('N', value);
          }

          return Notification.undefinedValueNotification;
        }
      }, {
        key: "createError",
        value: function createError(err) {
          return new Notification('E', undefined, err);
        }
      }, {
        key: "createComplete",
        value: function createComplete() {
          return Notification.completeNotification;
        }
      }]);

      return Notification;
    }();

    Notification.completeNotification = new Notification('C');
    Notification.undefinedValueNotification = new Notification('N', undefined); //# sourceMappingURL=Notification.js.map

    /***/
  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/Observable.js":
  /*!*****************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/Observable.js ***!
    \*****************************************************************************/

  /*! exports provided: Observable */

  /***/
  function node_modulesRxjs_esm2015InternalObservableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Observable", function () {
      return Observable;
    });
    /* harmony import */


    var _util_canReportError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./util/canReportError */
    "../../../node_modules/rxjs/_esm2015/internal/util/canReportError.js");
    /* harmony import */


    var _util_toSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./util/toSubscriber */
    "../../../node_modules/rxjs/_esm2015/internal/util/toSubscriber.js");
    /* harmony import */


    var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./symbol/observable */
    "../../../node_modules/rxjs/_esm2015/internal/symbol/observable.js");
    /* harmony import */


    var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./util/pipe */
    "../../../node_modules/rxjs/_esm2015/internal/util/pipe.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./config */
    "../../../node_modules/rxjs/_esm2015/internal/config.js");

    var Observable = /*#__PURE__*/function () {
      function Observable(subscribe) {
        _classCallCheck(this, Observable);

        this._isScalar = false;

        if (subscribe) {
          this._subscribe = subscribe;
        }
      }

      _createClass(Observable, [{
        key: "lift",
        value: function lift(operator) {
          var observable = new Observable();
          observable.source = this;
          observable.operator = operator;
          return observable;
        }
      }, {
        key: "subscribe",
        value: function subscribe(observerOrNext, error, complete) {
          var operator = this.operator;
          var sink = Object(_util_toSubscriber__WEBPACK_IMPORTED_MODULE_1__["toSubscriber"])(observerOrNext, error, complete);

          if (operator) {
            sink.add(operator.call(sink, this.source));
          } else {
            sink.add(this.source || _config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
          }

          if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
              sink.syncErrorThrowable = false;

              if (sink.syncErrorThrown) {
                throw sink.syncErrorValue;
              }
            }
          }

          return sink;
        }
      }, {
        key: "_trySubscribe",
        value: function _trySubscribe(sink) {
          try {
            return this._subscribe(sink);
          } catch (err) {
            if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
              sink.syncErrorThrown = true;
              sink.syncErrorValue = err;
            }

            if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_0__["canReportError"])(sink)) {
              sink.error(err);
            } else {
              console.warn(err);
            }
          }
        }
      }, {
        key: "forEach",
        value: function forEach(next, promiseCtor) {
          var _this5 = this;

          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this5.subscribe(function (value) {
              try {
                next(value);
              } catch (err) {
                reject(err);

                if (subscription) {
                  subscription.unsubscribe();
                }
              }
            }, reject, resolve);
          });
        }
      }, {
        key: "_subscribe",
        value: function _subscribe(subscriber) {
          var source = this.source;
          return source && source.subscribe(subscriber);
        }
      }, {
        key: _symbol_observable__WEBPACK_IMPORTED_MODULE_2__["observable"],
        value: function value() {
          return this;
        }
      }, {
        key: "pipe",
        value: function pipe() {
          for (var _len = arguments.length, operations = new Array(_len), _key = 0; _key < _len; _key++) {
            operations[_key] = arguments[_key];
          }

          if (operations.length === 0) {
            return this;
          }

          return Object(_util_pipe__WEBPACK_IMPORTED_MODULE_3__["pipeFromArray"])(operations)(this);
        }
      }, {
        key: "toPromise",
        value: function toPromise(promiseCtor) {
          var _this6 = this;

          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function (resolve, reject) {
            var value;

            _this6.subscribe(function (x) {
              return value = x;
            }, function (err) {
              return reject(err);
            }, function () {
              return resolve(value);
            });
          });
        }
      }]);

      return Observable;
    }();

    Observable.create = function (subscribe) {
      return new Observable(subscribe);
    };

    function getPromiseCtor(promiseCtor) {
      if (!promiseCtor) {
        promiseCtor = _config__WEBPACK_IMPORTED_MODULE_4__["config"].Promise || Promise;
      }

      if (!promiseCtor) {
        throw new Error('no Promise impl found');
      }

      return promiseCtor;
    } //# sourceMappingURL=Observable.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/Observer.js":
  /*!***************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/Observer.js ***!
    \***************************************************************************/

  /*! exports provided: empty */

  /***/
  function node_modulesRxjs_esm2015InternalObserverJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "empty", function () {
      return empty;
    });
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./config */
    "../../../node_modules/rxjs/_esm2015/internal/config.js");
    /* harmony import */


    var _util_hostReportError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./util/hostReportError */
    "../../../node_modules/rxjs/_esm2015/internal/util/hostReportError.js");

    var empty = {
      closed: true,
      next: function next(value) {},
      error: function error(err) {
        if (_config__WEBPACK_IMPORTED_MODULE_0__["config"].useDeprecatedSynchronousErrorHandling) {
          throw err;
        } else {
          Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_1__["hostReportError"])(err);
        }
      },
      complete: function complete() {}
    }; //# sourceMappingURL=Observer.js.map

    /***/
  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/OuterSubscriber.js":
  /*!**********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/OuterSubscriber.js ***!
    \**********************************************************************************/

  /*! exports provided: OuterSubscriber */

  /***/
  function node_modulesRxjs_esm2015InternalOuterSubscriberJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OuterSubscriber", function () {
      return OuterSubscriber;
    });
    /* harmony import */


    var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Subscriber */
    "../../../node_modules/rxjs/_esm2015/internal/Subscriber.js");

    var OuterSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_2) {
      _inherits(OuterSubscriber, _Subscriber__WEBPACK_2);

      var _super5 = _createSuper(OuterSubscriber);

      function OuterSubscriber() {
        _classCallCheck(this, OuterSubscriber);

        return _super5.apply(this, arguments);
      }

      _createClass(OuterSubscriber, [{
        key: "notifyNext",
        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
          this.destination.next(innerValue);
        }
      }, {
        key: "notifyError",
        value: function notifyError(error, innerSub) {
          this.destination.error(error);
        }
      }, {
        key: "notifyComplete",
        value: function notifyComplete(innerSub) {
          this.destination.complete();
        }
      }]);

      return OuterSubscriber;
    }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=OuterSubscriber.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/ReplaySubject.js":
  /*!********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/ReplaySubject.js ***!
    \********************************************************************************/

  /*! exports provided: ReplaySubject */

  /***/
  function node_modulesRxjs_esm2015InternalReplaySubjectJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReplaySubject", function () {
      return ReplaySubject;
    });
    /* harmony import */


    var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Subject */
    "../../../node_modules/rxjs/_esm2015/internal/Subject.js");
    /* harmony import */


    var _scheduler_queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./scheduler/queue */
    "../../../node_modules/rxjs/_esm2015/internal/scheduler/queue.js");
    /* harmony import */


    var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Subscription */
    "../../../node_modules/rxjs/_esm2015/internal/Subscription.js");
    /* harmony import */


    var _operators_observeOn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./operators/observeOn */
    "../../../node_modules/rxjs/_esm2015/internal/operators/observeOn.js");
    /* harmony import */


    var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./util/ObjectUnsubscribedError */
    "../../../node_modules/rxjs/_esm2015/internal/util/ObjectUnsubscribedError.js");
    /* harmony import */


    var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./SubjectSubscription */
    "../../../node_modules/rxjs/_esm2015/internal/SubjectSubscription.js");

    var ReplaySubject = /*#__PURE__*/function (_Subject__WEBPACK_IMP3) {
      _inherits(ReplaySubject, _Subject__WEBPACK_IMP3);

      var _super6 = _createSuper(ReplaySubject);

      function ReplaySubject() {
        var _this7;

        var bufferSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.POSITIVE_INFINITY;
        var windowTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.POSITIVE_INFINITY;
        var scheduler = arguments.length > 2 ? arguments[2] : undefined;

        _classCallCheck(this, ReplaySubject);

        _this7 = _super6.call(this);
        _this7.scheduler = scheduler;
        _this7._events = [];
        _this7._infiniteTimeWindow = false;
        _this7._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        _this7._windowTime = windowTime < 1 ? 1 : windowTime;

        if (windowTime === Number.POSITIVE_INFINITY) {
          _this7._infiniteTimeWindow = true;
          _this7.next = _this7.nextInfiniteTimeWindow;
        } else {
          _this7.next = _this7.nextTimeWindow;
        }

        return _this7;
      }

      _createClass(ReplaySubject, [{
        key: "nextInfiniteTimeWindow",
        value: function nextInfiniteTimeWindow(value) {
          var _events = this._events;

          _events.push(value);

          if (_events.length > this._bufferSize) {
            _events.shift();
          }

          _get(_getPrototypeOf(ReplaySubject.prototype), "next", this).call(this, value);
        }
      }, {
        key: "nextTimeWindow",
        value: function nextTimeWindow(value) {
          this._events.push(new ReplayEvent(this._getNow(), value));

          this._trimBufferThenGetEvents();

          _get(_getPrototypeOf(ReplaySubject.prototype), "next", this).call(this, value);
        }
      }, {
        key: "_subscribe",
        value: function _subscribe(subscriber) {
          var _infiniteTimeWindow = this._infiniteTimeWindow;

          var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();

          var scheduler = this.scheduler;
          var len = _events.length;
          var subscription;

          if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
          } else if (this.isStopped || this.hasError) {
            subscription = _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
          } else {
            this.observers.push(subscriber);
            subscription = new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__["SubjectSubscription"](this, subscriber);
          }

          if (scheduler) {
            subscriber.add(subscriber = new _operators_observeOn__WEBPACK_IMPORTED_MODULE_3__["ObserveOnSubscriber"](subscriber, scheduler));
          }

          if (_infiniteTimeWindow) {
            for (var i = 0; i < len && !subscriber.closed; i++) {
              subscriber.next(_events[i]);
            }
          } else {
            for (var _i2 = 0; _i2 < len && !subscriber.closed; _i2++) {
              subscriber.next(_events[_i2].value);
            }
          }

          if (this.hasError) {
            subscriber.error(this.thrownError);
          } else if (this.isStopped) {
            subscriber.complete();
          }

          return subscription;
        }
      }, {
        key: "_getNow",
        value: function _getNow() {
          return (this.scheduler || _scheduler_queue__WEBPACK_IMPORTED_MODULE_1__["queue"]).now();
        }
      }, {
        key: "_trimBufferThenGetEvents",
        value: function _trimBufferThenGetEvents() {
          var now = this._getNow();

          var _bufferSize = this._bufferSize;
          var _windowTime = this._windowTime;
          var _events = this._events;
          var eventsCount = _events.length;
          var spliceCount = 0;

          while (spliceCount < eventsCount) {
            if (now - _events[spliceCount].time < _windowTime) {
              break;
            }

            spliceCount++;
          }

          if (eventsCount > _bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
          }

          if (spliceCount > 0) {
            _events.splice(0, spliceCount);
          }

          return _events;
        }
      }]);

      return ReplaySubject;
    }(_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]);

    var ReplayEvent = function ReplayEvent(time, value) {
      _classCallCheck(this, ReplayEvent);

      this.time = time;
      this.value = value;
    }; //# sourceMappingURL=ReplaySubject.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/Scheduler.js":
  /*!****************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/Scheduler.js ***!
    \****************************************************************************/

  /*! exports provided: Scheduler */

  /***/
  function node_modulesRxjs_esm2015InternalSchedulerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Scheduler", function () {
      return Scheduler;
    });

    var Scheduler = /*#__PURE__*/function () {
      function Scheduler(SchedulerAction) {
        var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Scheduler.now;

        _classCallCheck(this, Scheduler);

        this.SchedulerAction = SchedulerAction;
        this.now = now;
      }

      _createClass(Scheduler, [{
        key: "schedule",
        value: function schedule(work) {
          var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var state = arguments.length > 2 ? arguments[2] : undefined;
          return new this.SchedulerAction(this, work).schedule(state, delay);
        }
      }]);

      return Scheduler;
    }();

    Scheduler.now = function () {
      return Date.now();
    }; //# sourceMappingURL=Scheduler.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/Subject.js":
  /*!**************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/Subject.js ***!
    \**************************************************************************/

  /*! exports provided: SubjectSubscriber, Subject, AnonymousSubject */

  /***/
  function node_modulesRxjs_esm2015InternalSubjectJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubjectSubscriber", function () {
      return SubjectSubscriber;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Subject", function () {
      return Subject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnonymousSubject", function () {
      return AnonymousSubject;
    });
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Observable */
    "../../../node_modules/rxjs/_esm2015/internal/Observable.js");
    /* harmony import */


    var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Subscriber */
    "../../../node_modules/rxjs/_esm2015/internal/Subscriber.js");
    /* harmony import */


    var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Subscription */
    "../../../node_modules/rxjs/_esm2015/internal/Subscription.js");
    /* harmony import */


    var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./util/ObjectUnsubscribedError */
    "../../../node_modules/rxjs/_esm2015/internal/util/ObjectUnsubscribedError.js");
    /* harmony import */


    var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./SubjectSubscription */
    "../../../node_modules/rxjs/_esm2015/internal/SubjectSubscription.js");
    /* harmony import */


    var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../internal/symbol/rxSubscriber */
    "../../../node_modules/rxjs/_esm2015/internal/symbol/rxSubscriber.js");

    var SubjectSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_3) {
      _inherits(SubjectSubscriber, _Subscriber__WEBPACK_3);

      var _super7 = _createSuper(SubjectSubscriber);

      function SubjectSubscriber(destination) {
        var _this8;

        _classCallCheck(this, SubjectSubscriber);

        _this8 = _super7.call(this, destination);
        _this8.destination = destination;
        return _this8;
      }

      return SubjectSubscriber;
    }(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]);

    var Subject = /*#__PURE__*/function (_Observable__WEBPACK_) {
      _inherits(Subject, _Observable__WEBPACK_);

      var _super8 = _createSuper(Subject);

      function Subject() {
        var _this9;

        _classCallCheck(this, Subject);

        _this9 = _super8.call(this);
        _this9.observers = [];
        _this9.closed = false;
        _this9.isStopped = false;
        _this9.hasError = false;
        _this9.thrownError = null;
        return _this9;
      }

      _createClass(Subject, [{
        key: _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_5__["rxSubscriber"],
        value: function value() {
          return new SubjectSubscriber(this);
        }
      }, {
        key: "lift",
        value: function lift(operator) {
          var subject = new AnonymousSubject(this, this);
          subject.operator = operator;
          return subject;
        }
      }, {
        key: "next",
        value: function next(value) {
          if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__["ObjectUnsubscribedError"]();
          }

          if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();

            for (var i = 0; i < len; i++) {
              copy[i].next(value);
            }
          }
        }
      }, {
        key: "error",
        value: function error(err) {
          if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__["ObjectUnsubscribedError"]();
          }

          this.hasError = true;
          this.thrownError = err;
          this.isStopped = true;
          var observers = this.observers;
          var len = observers.length;
          var copy = observers.slice();

          for (var i = 0; i < len; i++) {
            copy[i].error(err);
          }

          this.observers.length = 0;
        }
      }, {
        key: "complete",
        value: function complete() {
          if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__["ObjectUnsubscribedError"]();
          }

          this.isStopped = true;
          var observers = this.observers;
          var len = observers.length;
          var copy = observers.slice();

          for (var i = 0; i < len; i++) {
            copy[i].complete();
          }

          this.observers.length = 0;
        }
      }, {
        key: "unsubscribe",
        value: function unsubscribe() {
          this.isStopped = true;
          this.closed = true;
          this.observers = null;
        }
      }, {
        key: "_trySubscribe",
        value: function _trySubscribe(subscriber) {
          if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__["ObjectUnsubscribedError"]();
          } else {
            return _get(_getPrototypeOf(Subject.prototype), "_trySubscribe", this).call(this, subscriber);
          }
        }
      }, {
        key: "_subscribe",
        value: function _subscribe(subscriber) {
          if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__["ObjectUnsubscribedError"]();
          } else if (this.hasError) {
            subscriber.error(this.thrownError);
            return _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
          } else if (this.isStopped) {
            subscriber.complete();
            return _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
          } else {
            this.observers.push(subscriber);
            return new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_4__["SubjectSubscription"](this, subscriber);
          }
        }
      }, {
        key: "asObservable",
        value: function asObservable() {
          var observable = new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
          observable.source = this;
          return observable;
        }
      }]);

      return Subject;
    }(_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]);

    Subject.create = function (destination, source) {
      return new AnonymousSubject(destination, source);
    };

    var AnonymousSubject = /*#__PURE__*/function (_Subject) {
      _inherits(AnonymousSubject, _Subject);

      var _super9 = _createSuper(AnonymousSubject);

      function AnonymousSubject(destination, source) {
        var _this10;

        _classCallCheck(this, AnonymousSubject);

        _this10 = _super9.call(this);
        _this10.destination = destination;
        _this10.source = source;
        return _this10;
      }

      _createClass(AnonymousSubject, [{
        key: "next",
        value: function next(value) {
          var destination = this.destination;

          if (destination && destination.next) {
            destination.next(value);
          }
        }
      }, {
        key: "error",
        value: function error(err) {
          var destination = this.destination;

          if (destination && destination.error) {
            this.destination.error(err);
          }
        }
      }, {
        key: "complete",
        value: function complete() {
          var destination = this.destination;

          if (destination && destination.complete) {
            this.destination.complete();
          }
        }
      }, {
        key: "_subscribe",
        value: function _subscribe(subscriber) {
          var source = this.source;

          if (source) {
            return this.source.subscribe(subscriber);
          } else {
            return _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
          }
        }
      }]);

      return AnonymousSubject;
    }(Subject); //# sourceMappingURL=Subject.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/SubjectSubscription.js":
  /*!**************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/SubjectSubscription.js ***!
    \**************************************************************************************/

  /*! exports provided: SubjectSubscription */

  /***/
  function node_modulesRxjs_esm2015InternalSubjectSubscriptionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubjectSubscription", function () {
      return SubjectSubscription;
    });
    /* harmony import */


    var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Subscription */
    "../../../node_modules/rxjs/_esm2015/internal/Subscription.js");

    var SubjectSubscription = /*#__PURE__*/function (_Subscription__WEBPAC) {
      _inherits(SubjectSubscription, _Subscription__WEBPAC);

      var _super10 = _createSuper(SubjectSubscription);

      function SubjectSubscription(subject, subscriber) {
        var _this11;

        _classCallCheck(this, SubjectSubscription);

        _this11 = _super10.call(this);
        _this11.subject = subject;
        _this11.subscriber = subscriber;
        _this11.closed = false;
        return _this11;
      }

      _createClass(SubjectSubscription, [{
        key: "unsubscribe",
        value: function unsubscribe() {
          if (this.closed) {
            return;
          }

          this.closed = true;
          var subject = this.subject;
          var observers = subject.observers;
          this.subject = null;

          if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
          }

          var subscriberIndex = observers.indexOf(this.subscriber);

          if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
          }
        }
      }]);

      return SubjectSubscription;
    }(_Subscription__WEBPACK_IMPORTED_MODULE_0__["Subscription"]); //# sourceMappingURL=SubjectSubscription.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/Subscriber.js":
  /*!*****************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/Subscriber.js ***!
    \*****************************************************************************/

  /*! exports provided: Subscriber, SafeSubscriber */

  /***/
  function node_modulesRxjs_esm2015InternalSubscriberJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Subscriber", function () {
      return Subscriber;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafeSubscriber", function () {
      return SafeSubscriber;
    });
    /* harmony import */


    var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./util/isFunction */
    "../../../node_modules/rxjs/_esm2015/internal/util/isFunction.js");
    /* harmony import */


    var _Observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Observer */
    "../../../node_modules/rxjs/_esm2015/internal/Observer.js");
    /* harmony import */


    var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Subscription */
    "../../../node_modules/rxjs/_esm2015/internal/Subscription.js");
    /* harmony import */


    var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../internal/symbol/rxSubscriber */
    "../../../node_modules/rxjs/_esm2015/internal/symbol/rxSubscriber.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./config */
    "../../../node_modules/rxjs/_esm2015/internal/config.js");
    /* harmony import */


    var _util_hostReportError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./util/hostReportError */
    "../../../node_modules/rxjs/_esm2015/internal/util/hostReportError.js");

    var Subscriber = /*#__PURE__*/function (_Subscription__WEBPAC2) {
      _inherits(Subscriber, _Subscription__WEBPAC2);

      var _super11 = _createSuper(Subscriber);

      function Subscriber(destinationOrNext, error, complete) {
        var _this12;

        _classCallCheck(this, Subscriber);

        _this12 = _super11.call(this);
        _this12.syncErrorValue = null;
        _this12.syncErrorThrown = false;
        _this12.syncErrorThrowable = false;
        _this12.isStopped = false;

        switch (arguments.length) {
          case 0:
            _this12.destination = _Observer__WEBPACK_IMPORTED_MODULE_1__["empty"];
            break;

          case 1:
            if (!destinationOrNext) {
              _this12.destination = _Observer__WEBPACK_IMPORTED_MODULE_1__["empty"];
              break;
            }

            if (typeof destinationOrNext === 'object') {
              if (destinationOrNext instanceof Subscriber) {
                _this12.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                _this12.destination = destinationOrNext;
                destinationOrNext.add(_assertThisInitialized(_this12));
              } else {
                _this12.syncErrorThrowable = true;
                _this12.destination = new SafeSubscriber(_assertThisInitialized(_this12), destinationOrNext);
              }

              break;
            }

          default:
            _this12.syncErrorThrowable = true;
            _this12.destination = new SafeSubscriber(_assertThisInitialized(_this12), destinationOrNext, error, complete);
            break;
        }

        return _this12;
      }

      _createClass(Subscriber, [{
        key: _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_3__["rxSubscriber"],
        value: function value() {
          return this;
        }
      }, {
        key: "next",
        value: function next(value) {
          if (!this.isStopped) {
            this._next(value);
          }
        }
      }, {
        key: "error",
        value: function error(err) {
          if (!this.isStopped) {
            this.isStopped = true;

            this._error(err);
          }
        }
      }, {
        key: "complete",
        value: function complete() {
          if (!this.isStopped) {
            this.isStopped = true;

            this._complete();
          }
        }
      }, {
        key: "unsubscribe",
        value: function unsubscribe() {
          if (this.closed) {
            return;
          }

          this.isStopped = true;

          _get(_getPrototypeOf(Subscriber.prototype), "unsubscribe", this).call(this);
        }
      }, {
        key: "_next",
        value: function _next(value) {
          this.destination.next(value);
        }
      }, {
        key: "_error",
        value: function _error(err) {
          this.destination.error(err);
          this.unsubscribe();
        }
      }, {
        key: "_complete",
        value: function _complete() {
          this.destination.complete();
          this.unsubscribe();
        }
      }, {
        key: "_unsubscribeAndRecycle",
        value: function _unsubscribeAndRecycle() {
          var _parentOrParents = this._parentOrParents;
          this._parentOrParents = null;
          this.unsubscribe();
          this.closed = false;
          this.isStopped = false;
          this._parentOrParents = _parentOrParents;
          return this;
        }
      }], [{
        key: "create",
        value: function create(next, error, complete) {
          var subscriber = new Subscriber(next, error, complete);
          subscriber.syncErrorThrowable = false;
          return subscriber;
        }
      }]);

      return Subscriber;
    }(_Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"]);

    var SafeSubscriber = /*#__PURE__*/function (_Subscriber) {
      _inherits(SafeSubscriber, _Subscriber);

      var _super12 = _createSuper(SafeSubscriber);

      function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this13;

        _classCallCheck(this, SafeSubscriber);

        _this13 = _super12.call(this);
        _this13._parentSubscriber = _parentSubscriber;
        var next;

        var context = _assertThisInitialized(_this13);

        if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(observerOrNext)) {
          next = observerOrNext;
        } else if (observerOrNext) {
          next = observerOrNext.next;
          error = observerOrNext.error;
          complete = observerOrNext.complete;

          if (observerOrNext !== _Observer__WEBPACK_IMPORTED_MODULE_1__["empty"]) {
            context = Object.create(observerOrNext);

            if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(context.unsubscribe)) {
              _this13.add(context.unsubscribe.bind(context));
            }

            context.unsubscribe = _this13.unsubscribe.bind(_assertThisInitialized(_this13));
          }
        }

        _this13._context = context;
        _this13._next = next;
        _this13._error = error;
        _this13._complete = complete;
        return _this13;
      }

      _createClass(SafeSubscriber, [{
        key: "next",
        value: function next(value) {
          if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;

            if (!_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(this._next, value);
            } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
              this.unsubscribe();
            }
          }
        }
      }, {
        key: "error",
        value: function error(err) {
          if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = _config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling;

            if (this._error) {
              if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._error, err);

                this.unsubscribe();
              } else {
                this.__tryOrSetError(_parentSubscriber, this._error, err);

                this.unsubscribe();
              }
            } else if (!_parentSubscriber.syncErrorThrowable) {
              this.unsubscribe();

              if (useDeprecatedSynchronousErrorHandling) {
                throw err;
              }

              Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__["hostReportError"])(err);
            } else {
              if (useDeprecatedSynchronousErrorHandling) {
                _parentSubscriber.syncErrorValue = err;
                _parentSubscriber.syncErrorThrown = true;
              } else {
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__["hostReportError"])(err);
              }

              this.unsubscribe();
            }
          }
        }
      }, {
        key: "complete",
        value: function complete() {
          var _this14 = this;

          if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;

            if (this._complete) {
              var wrappedComplete = function wrappedComplete() {
                return _this14._complete.call(_this14._context);
              };

              if (!_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(wrappedComplete);

                this.unsubscribe();
              } else {
                this.__tryOrSetError(_parentSubscriber, wrappedComplete);

                this.unsubscribe();
              }
            } else {
              this.unsubscribe();
            }
          }
        }
      }, {
        key: "__tryOrUnsub",
        value: function __tryOrUnsub(fn, value) {
          try {
            fn.call(this._context, value);
          } catch (err) {
            this.unsubscribe();

            if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
              throw err;
            } else {
              Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__["hostReportError"])(err);
            }
          }
        }
      }, {
        key: "__tryOrSetError",
        value: function __tryOrSetError(parent, fn, value) {
          if (!_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
          }

          try {
            fn.call(this._context, value);
          } catch (err) {
            if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
              parent.syncErrorValue = err;
              parent.syncErrorThrown = true;
              return true;
            } else {
              Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__["hostReportError"])(err);
              return true;
            }
          }

          return false;
        }
      }, {
        key: "_unsubscribe",
        value: function _unsubscribe() {
          var _parentSubscriber = this._parentSubscriber;
          this._context = null;
          this._parentSubscriber = null;

          _parentSubscriber.unsubscribe();
        }
      }]);

      return SafeSubscriber;
    }(Subscriber); //# sourceMappingURL=Subscriber.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/Subscription.js":
  /*!*******************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/Subscription.js ***!
    \*******************************************************************************/

  /*! exports provided: Subscription */

  /***/
  function node_modulesRxjs_esm2015InternalSubscriptionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Subscription", function () {
      return Subscription;
    });
    /* harmony import */


    var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./util/isArray */
    "../../../node_modules/rxjs/_esm2015/internal/util/isArray.js");
    /* harmony import */


    var _util_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./util/isObject */
    "../../../node_modules/rxjs/_esm2015/internal/util/isObject.js");
    /* harmony import */


    var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./util/isFunction */
    "../../../node_modules/rxjs/_esm2015/internal/util/isFunction.js");
    /* harmony import */


    var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./util/UnsubscriptionError */
    "../../../node_modules/rxjs/_esm2015/internal/util/UnsubscriptionError.js");

    var Subscription = /*#__PURE__*/function () {
      function Subscription(unsubscribe) {
        _classCallCheck(this, Subscription);

        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;

        if (unsubscribe) {
          this._unsubscribe = unsubscribe;
        }
      }

      _createClass(Subscription, [{
        key: "unsubscribe",
        value: function unsubscribe() {
          var errors;

          if (this.closed) {
            return;
          }

          var _parentOrParents = this._parentOrParents,
              _unsubscribe = this._unsubscribe,
              _subscriptions = this._subscriptions;
          this.closed = true;
          this._parentOrParents = null;
          this._subscriptions = null;

          if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
          } else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
              var parent = _parentOrParents[index];
              parent.remove(this);
            }
          }

          if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(_unsubscribe)) {
            try {
              _unsubscribe.call(this);
            } catch (e) {
              errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"] ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
          }

          if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(_subscriptions)) {
            var _index = -1;

            var len = _subscriptions.length;

            while (++_index < len) {
              var sub = _subscriptions[_index];

              if (Object(_util_isObject__WEBPACK_IMPORTED_MODULE_1__["isObject"])(sub)) {
                try {
                  sub.unsubscribe();
                } catch (e) {
                  errors = errors || [];

                  if (e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"]) {
                    errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                  } else {
                    errors.push(e);
                  }
                }
              }
            }
          }

          if (errors) {
            throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"](errors);
          }
        }
      }, {
        key: "add",
        value: function add(teardown) {
          var subscription = teardown;

          if (!teardown) {
            return Subscription.EMPTY;
          }

          switch (typeof teardown) {
            case 'function':
              subscription = new Subscription(teardown);

            case 'object':
              if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                return subscription;
              } else if (this.closed) {
                subscription.unsubscribe();
                return subscription;
              } else if (!(subscription instanceof Subscription)) {
                var tmp = subscription;
                subscription = new Subscription();
                subscription._subscriptions = [tmp];
              }

              break;

            default:
              {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
              }
          }

          var _subscription = subscription,
              _parentOrParents = _subscription._parentOrParents;

          if (_parentOrParents === null) {
            subscription._parentOrParents = this;
          } else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
              return subscription;
            }

            subscription._parentOrParents = [_parentOrParents, this];
          } else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
          } else {
            return subscription;
          }

          var subscriptions = this._subscriptions;

          if (subscriptions === null) {
            this._subscriptions = [subscription];
          } else {
            subscriptions.push(subscription);
          }

          return subscription;
        }
      }, {
        key: "remove",
        value: function remove(subscription) {
          var subscriptions = this._subscriptions;

          if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);

            if (subscriptionIndex !== -1) {
              subscriptions.splice(subscriptionIndex, 1);
            }
          }
        }
      }]);

      return Subscription;
    }();

    Subscription.EMPTY = function (empty) {
      empty.closed = true;
      return empty;
    }(new Subscription());

    function flattenUnsubscriptionErrors(errors) {
      return errors.reduce(function (errs, err) {
        return errs.concat(err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"] ? err.errors : err);
      }, []);
    } //# sourceMappingURL=Subscription.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/config.js":
  /*!*************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/config.js ***!
    \*************************************************************************/

  /*! exports provided: config */

  /***/
  function node_modulesRxjs_esm2015InternalConfigJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "config", function () {
      return config;
    });

    var _enable_super_gross_mode_that_will_cause_bad_things = false;
    var config = {
      Promise: undefined,

      set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
          var error = new Error();
          console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
          console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }

        _enable_super_gross_mode_that_will_cause_bad_things = value;
      },

      get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
      }

    }; //# sourceMappingURL=config.js.map

    /***/
  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/observable/ConnectableObservable.js":
  /*!***************************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/observable/ConnectableObservable.js ***!
    \***************************************************************************************************/

  /*! exports provided: ConnectableObservable, connectableObservableDescriptor */

  /***/
  function node_modulesRxjs_esm2015InternalObservableConnectableObservableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectableObservable", function () {
      return ConnectableObservable;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "connectableObservableDescriptor", function () {
      return connectableObservableDescriptor;
    });
    /* harmony import */


    var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Subject */
    "../../../node_modules/rxjs/_esm2015/internal/Subject.js");
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../Observable */
    "../../../node_modules/rxjs/_esm2015/internal/Observable.js");
    /* harmony import */


    var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Subscriber */
    "../../../node_modules/rxjs/_esm2015/internal/Subscriber.js");
    /* harmony import */


    var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Subscription */
    "../../../node_modules/rxjs/_esm2015/internal/Subscription.js");
    /* harmony import */


    var _operators_refCount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../operators/refCount */
    "../../../node_modules/rxjs/_esm2015/internal/operators/refCount.js");

    var ConnectableObservable = /*#__PURE__*/function (_Observable__WEBPACK_2) {
      _inherits(ConnectableObservable, _Observable__WEBPACK_2);

      var _super13 = _createSuper(ConnectableObservable);

      function ConnectableObservable(source, subjectFactory) {
        var _this15;

        _classCallCheck(this, ConnectableObservable);

        _this15 = _super13.call(this);
        _this15.source = source;
        _this15.subjectFactory = subjectFactory;
        _this15._refCount = 0;
        _this15._isComplete = false;
        return _this15;
      }

      _createClass(ConnectableObservable, [{
        key: "_subscribe",
        value: function _subscribe(subscriber) {
          return this.getSubject().subscribe(subscriber);
        }
      }, {
        key: "getSubject",
        value: function getSubject() {
          var subject = this._subject;

          if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
          }

          return this._subject;
        }
      }, {
        key: "connect",
        value: function connect() {
          var connection = this._connection;

          if (!connection) {
            this._isComplete = false;
            connection = this._connection = new _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
            connection.add(this.source.subscribe(new ConnectableSubscriber(this.getSubject(), this)));

            if (connection.closed) {
              this._connection = null;
              connection = _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
            }
          }

          return connection;
        }
      }, {
        key: "refCount",
        value: function refCount() {
          return Object(_operators_refCount__WEBPACK_IMPORTED_MODULE_4__["refCount"])()(this);
        }
      }]);

      return ConnectableObservable;
    }(_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]);

    var connectableObservableDescriptor = function () {
      var connectableProto = ConnectableObservable.prototype;
      return {
        operator: {
          value: null
        },
        _refCount: {
          value: 0,
          writable: true
        },
        _subject: {
          value: null,
          writable: true
        },
        _connection: {
          value: null,
          writable: true
        },
        _subscribe: {
          value: connectableProto._subscribe
        },
        _isComplete: {
          value: connectableProto._isComplete,
          writable: true
        },
        getSubject: {
          value: connectableProto.getSubject
        },
        connect: {
          value: connectableProto.connect
        },
        refCount: {
          value: connectableProto.refCount
        }
      };
    }();

    var ConnectableSubscriber = /*#__PURE__*/function (_Subject__WEBPACK_IMP4) {
      _inherits(ConnectableSubscriber, _Subject__WEBPACK_IMP4);

      var _super14 = _createSuper(ConnectableSubscriber);

      function ConnectableSubscriber(destination, connectable) {
        var _this16;

        _classCallCheck(this, ConnectableSubscriber);

        _this16 = _super14.call(this, destination);
        _this16.connectable = connectable;
        return _this16;
      }

      _createClass(ConnectableSubscriber, [{
        key: "_error",
        value: function _error(err) {
          this._unsubscribe();

          _get(_getPrototypeOf(ConnectableSubscriber.prototype), "_error", this).call(this, err);
        }
      }, {
        key: "_complete",
        value: function _complete() {
          this.connectable._isComplete = true;

          this._unsubscribe();

          _get(_getPrototypeOf(ConnectableSubscriber.prototype), "_complete", this).call(this);
        }
      }, {
        key: "_unsubscribe",
        value: function _unsubscribe() {
          var connectable = this.connectable;

          if (connectable) {
            this.connectable = null;
            var connection = connectable._connection;
            connectable._refCount = 0;
            connectable._subject = null;
            connectable._connection = null;

            if (connection) {
              connection.unsubscribe();
            }
          }
        }
      }]);

      return ConnectableSubscriber;
    }(_Subject__WEBPACK_IMPORTED_MODULE_0__["SubjectSubscriber"]);

    var RefCountOperator = /*#__PURE__*/function () {
      function RefCountOperator(connectable) {
        _classCallCheck(this, RefCountOperator);

        this.connectable = connectable;
      }

      _createClass(RefCountOperator, [{
        key: "call",
        value: function call(subscriber, source) {
          var connectable = this.connectable;
          connectable._refCount++;
          var refCounter = new RefCountSubscriber(subscriber, connectable);
          var subscription = source.subscribe(refCounter);

          if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
          }

          return subscription;
        }
      }]);

      return RefCountOperator;
    }();

    var RefCountSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_4) {
      _inherits(RefCountSubscriber, _Subscriber__WEBPACK_4);

      var _super15 = _createSuper(RefCountSubscriber);

      function RefCountSubscriber(destination, connectable) {
        var _this17;

        _classCallCheck(this, RefCountSubscriber);

        _this17 = _super15.call(this, destination);
        _this17.connectable = connectable;
        return _this17;
      }

      _createClass(RefCountSubscriber, [{
        key: "_unsubscribe",
        value: function _unsubscribe() {
          var connectable = this.connectable;

          if (!connectable) {
            this.connection = null;
            return;
          }

          this.connectable = null;
          var refCount = connectable._refCount;

          if (refCount <= 0) {
            this.connection = null;
            return;
          }

          connectable._refCount = refCount - 1;

          if (refCount > 1) {
            this.connection = null;
            return;
          }

          var connection = this.connection;
          var sharedConnection = connectable._connection;
          this.connection = null;

          if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
          }
        }
      }]);

      return RefCountSubscriber;
    }(_Subscriber__WEBPACK_IMPORTED_MODULE_2__["Subscriber"]); //# sourceMappingURL=ConnectableObservable.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/observable/bindCallback.js":
  /*!******************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/observable/bindCallback.js ***!
    \******************************************************************************************/

  /*! exports provided: bindCallback */

  /***/
  function node_modulesRxjs_esm2015InternalObservableBindCallbackJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "bindCallback", function () {
      return bindCallback;
    });
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Observable */
    "../../../node_modules/rxjs/_esm2015/internal/Observable.js");
    /* harmony import */


    var _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../AsyncSubject */
    "../../../node_modules/rxjs/_esm2015/internal/AsyncSubject.js");
    /* harmony import */


    var _operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../operators/map */
    "../../../node_modules/rxjs/_esm2015/internal/operators/map.js");
    /* harmony import */


    var _util_canReportError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../util/canReportError */
    "../../../node_modules/rxjs/_esm2015/internal/util/canReportError.js");
    /* harmony import */


    var _util_isArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../util/isArray */
    "../../../node_modules/rxjs/_esm2015/internal/util/isArray.js");
    /* harmony import */


    var _util_isScheduler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../util/isScheduler */
    "../../../node_modules/rxjs/_esm2015/internal/util/isScheduler.js");

    function bindCallback(callbackFunc, resultSelector, scheduler) {
      if (resultSelector) {
        if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_5__["isScheduler"])(resultSelector)) {
          scheduler = resultSelector;
        } else {
          return function () {
            return bindCallback(callbackFunc, scheduler).apply(void 0, arguments).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (args) {
              return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_4__["isArray"])(args) ? resultSelector.apply(void 0, _toConsumableArray(args)) : resultSelector(args);
            }));
          };
        }
      }

      return function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        var context = this;
        var subject;
        var params = {
          context: context,
          subject: subject,
          callbackFunc: callbackFunc,
          scheduler: scheduler
        };
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
          if (!scheduler) {
            if (!subject) {
              subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();

              var handler = function handler() {
                for (var _len3 = arguments.length, innerArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                  innerArgs[_key3] = arguments[_key3];
                }

                subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                subject.complete();
              };

              try {
                callbackFunc.apply(context, [].concat(args, [handler]));
              } catch (err) {
                if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_3__["canReportError"])(subject)) {
                  subject.error(err);
                } else {
                  console.warn(err);
                }
              }
            }

            return subject.subscribe(subscriber);
          } else {
            var state = {
              args: args,
              subscriber: subscriber,
              params: params
            };
            return scheduler.schedule(dispatch, 0, state);
          }
        });
      };
    }

    function dispatch(state) {
      var _this18 = this;

      var self = this;
      var args = state.args,
          subscriber = state.subscriber,
          params = state.params;
      var callbackFunc = params.callbackFunc,
          context = params.context,
          scheduler = params.scheduler;
      var subject = params.subject;

      if (!subject) {
        subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();

        var handler = function handler() {
          for (var _len4 = arguments.length, innerArgs = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            innerArgs[_key4] = arguments[_key4];
          }

          var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;

          _this18.add(scheduler.schedule(dispatchNext, 0, {
            value: value,
            subject: subject
          }));
        };

        try {
          callbackFunc.apply(context, [].concat(_toConsumableArray(args), [handler]));
        } catch (err) {
          subject.error(err);
        }
      }

      this.add(subject.subscribe(subscriber));
    }

    function dispatchNext(state) {
      var value = state.value,
          subject = state.subject;
      subject.next(value);
      subject.complete();
    }

    function dispatchError(state) {
      var err = state.err,
          subject = state.subject;
      subject.error(err);
    } //# sourceMappingURL=bindCallback.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/observable/bindNodeCallback.js":
  /*!**********************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/observable/bindNodeCallback.js ***!
    \**********************************************************************************************/

  /*! exports provided: bindNodeCallback */

  /***/
  function node_modulesRxjs_esm2015InternalObservableBindNodeCallbackJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "bindNodeCallback", function () {
      return bindNodeCallback;
    });
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Observable */
    "../../../node_modules/rxjs/_esm2015/internal/Observable.js");
    /* harmony import */


    var _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../AsyncSubject */
    "../../../node_modules/rxjs/_esm2015/internal/AsyncSubject.js");
    /* harmony import */


    var _operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../operators/map */
    "../../../node_modules/rxjs/_esm2015/internal/operators/map.js");
    /* harmony import */


    var _util_canReportError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../util/canReportError */
    "../../../node_modules/rxjs/_esm2015/internal/util/canReportError.js");
    /* harmony import */


    var _util_isScheduler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../util/isScheduler */
    "../../../node_modules/rxjs/_esm2015/internal/util/isScheduler.js");
    /* harmony import */


    var _util_isArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../util/isArray */
    "../../../node_modules/rxjs/_esm2015/internal/util/isArray.js");

    function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
      if (resultSelector) {
        if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_4__["isScheduler"])(resultSelector)) {
          scheduler = resultSelector;
        } else {
          return function () {
            return bindNodeCallback(callbackFunc, scheduler).apply(void 0, arguments).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (args) {
              return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_5__["isArray"])(args) ? resultSelector.apply(void 0, _toConsumableArray(args)) : resultSelector(args);
            }));
          };
        }
      }

      return function () {
        for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }

        var params = {
          subject: undefined,
          args: args,
          callbackFunc: callbackFunc,
          scheduler: scheduler,
          context: this
        };
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
          var context = params.context;
          var subject = params.subject;

          if (!scheduler) {
            if (!subject) {
              subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();

              var handler = function handler() {
                for (var _len6 = arguments.length, innerArgs = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                  innerArgs[_key6] = arguments[_key6];
                }

                var err = innerArgs.shift();

                if (err) {
                  subject.error(err);
                  return;
                }

                subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                subject.complete();
              };

              try {
                callbackFunc.apply(context, [].concat(args, [handler]));
              } catch (err) {
                if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_3__["canReportError"])(subject)) {
                  subject.error(err);
                } else {
                  console.warn(err);
                }
              }
            }

            return subject.subscribe(subscriber);
          } else {
            return scheduler.schedule(dispatch, 0, {
              params: params,
              subscriber: subscriber,
              context: context
            });
          }
        });
      };
    }

    function dispatch(state) {
      var _this19 = this;

      var params = state.params,
          subscriber = state.subscriber,
          context = state.context;
      var callbackFunc = params.callbackFunc,
          args = params.args,
          scheduler = params.scheduler;
      var subject = params.subject;

      if (!subject) {
        subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();

        var handler = function handler() {
          for (var _len7 = arguments.length, innerArgs = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            innerArgs[_key7] = arguments[_key7];
          }

          var err = innerArgs.shift();

          if (err) {
            _this19.add(scheduler.schedule(dispatchError, 0, {
              err: err,
              subject: subject
            }));
          } else {
            var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;

            _this19.add(scheduler.schedule(dispatchNext, 0, {
              value: value,
              subject: subject
            }));
          }
        };

        try {
          callbackFunc.apply(context, [].concat(_toConsumableArray(args), [handler]));
        } catch (err) {
          this.add(scheduler.schedule(dispatchError, 0, {
            err: err,
            subject: subject
          }));
        }
      }

      this.add(subject.subscribe(subscriber));
    }

    function dispatchNext(arg) {
      var value = arg.value,
          subject = arg.subject;
      subject.next(value);
      subject.complete();
    }

    function dispatchError(arg) {
      var err = arg.err,
          subject = arg.subject;
      subject.error(err);
    } //# sourceMappingURL=bindNodeCallback.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/observable/combineLatest.js":
  /*!*******************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/observable/combineLatest.js ***!
    \*******************************************************************************************/

  /*! exports provided: combineLatest, CombineLatestOperator, CombineLatestSubscriber */

  /***/
  function node_modulesRxjs_esm2015InternalObservableCombineLatestJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "combineLatest", function () {
      return combineLatest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CombineLatestOperator", function () {
      return CombineLatestOperator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CombineLatestSubscriber", function () {
      return CombineLatestSubscriber;
    });
    /* harmony import */


    var _util_isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../util/isScheduler */
    "../../../node_modules/rxjs/_esm2015/internal/util/isScheduler.js");
    /* harmony import */


    var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../util/isArray */
    "../../../node_modules/rxjs/_esm2015/internal/util/isArray.js");
    /* harmony import */


    var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../OuterSubscriber */
    "../../../node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
    /* harmony import */


    var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../util/subscribeToResult */
    "../../../node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");
    /* harmony import */


    var _fromArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./fromArray */
    "../../../node_modules/rxjs/_esm2015/internal/observable/fromArray.js");

    var NONE = {};

    function combineLatest() {
      for (var _len8 = arguments.length, observables = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        observables[_key8] = arguments[_key8];
      }

      var resultSelector = null;
      var scheduler = null;

      if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_0__["isScheduler"])(observables[observables.length - 1])) {
        scheduler = observables.pop();
      }

      if (typeof observables[observables.length - 1] === 'function') {
        resultSelector = observables.pop();
      }

      if (observables.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(observables[0])) {
        observables = observables[0];
      }

      return Object(_fromArray__WEBPACK_IMPORTED_MODULE_4__["fromArray"])(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
    }

    var CombineLatestOperator = /*#__PURE__*/function () {
      function CombineLatestOperator(resultSelector) {
        _classCallCheck(this, CombineLatestOperator);

        this.resultSelector = resultSelector;
      }

      _createClass(CombineLatestOperator, [{
        key: "call",
        value: function call(subscriber, source) {
          return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
        }
      }]);

      return CombineLatestOperator;
    }();

    var CombineLatestSubscriber = /*#__PURE__*/function (_OuterSubscriber__WEB) {
      _inherits(CombineLatestSubscriber, _OuterSubscriber__WEB);

      var _super16 = _createSuper(CombineLatestSubscriber);

      function CombineLatestSubscriber(destination, resultSelector) {
        var _this20;

        _classCallCheck(this, CombineLatestSubscriber);

        _this20 = _super16.call(this, destination);
        _this20.resultSelector = resultSelector;
        _this20.active = 0;
        _this20.values = [];
        _this20.observables = [];
        return _this20;
      }

      _createClass(CombineLatestSubscriber, [{
        key: "_next",
        value: function _next(observable) {
          this.values.push(NONE);
          this.observables.push(observable);
        }
      }, {
        key: "_complete",
        value: function _complete() {
          var observables = this.observables;
          var len = observables.length;

          if (len === 0) {
            this.destination.complete();
          } else {
            this.active = len;
            this.toRespond = len;

            for (var i = 0; i < len; i++) {
              var observable = observables[i];
              this.add(Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__["subscribeToResult"])(this, observable, observable, i));
            }
          }
        }
      }, {
        key: "notifyComplete",
        value: function notifyComplete(unused) {
          if ((this.active -= 1) === 0) {
            this.destination.complete();
          }
        }
      }, {
        key: "notifyNext",
        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
          var values = this.values;
          var oldVal = values[outerIndex];
          var toRespond = !this.toRespond ? 0 : oldVal === NONE ? --this.toRespond : this.toRespond;
          values[outerIndex] = innerValue;

          if (toRespond === 0) {
            if (this.resultSelector) {
              this._tryResultSelector(values);
            } else {
              this.destination.next(values.slice());
            }
          }
        }
      }, {
        key: "_tryResultSelector",
        value: function _tryResultSelector(values) {
          var result;

          try {
            result = this.resultSelector.apply(this, values);
          } catch (err) {
            this.destination.error(err);
            return;
          }

          this.destination.next(result);
        }
      }]);

      return CombineLatestSubscriber;
    }(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__["OuterSubscriber"]); //# sourceMappingURL=combineLatest.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/observable/concat.js":
  /*!************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/observable/concat.js ***!
    \************************************************************************************/

  /*! exports provided: concat */

  /***/
  function node_modulesRxjs_esm2015InternalObservableConcatJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "concat", function () {
      return concat;
    });
    /* harmony import */


    var _of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./of */
    "../../../node_modules/rxjs/_esm2015/internal/observable/of.js");
    /* harmony import */


    var _operators_concatAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../operators/concatAll */
    "../../../node_modules/rxjs/_esm2015/internal/operators/concatAll.js");

    function concat() {
      return Object(_operators_concatAll__WEBPACK_IMPORTED_MODULE_1__["concatAll"])()(Object(_of__WEBPACK_IMPORTED_MODULE_0__["of"]).apply(void 0, arguments));
    } //# sourceMappingURL=concat.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/observable/defer.js":
  /*!***********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/observable/defer.js ***!
    \***********************************************************************************/

  /*! exports provided: defer */

  /***/
  function node_modulesRxjs_esm2015InternalObservableDeferJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "defer", function () {
      return defer;
    });
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Observable */
    "../../../node_modules/rxjs/_esm2015/internal/Observable.js");
    /* harmony import */


    var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./from */
    "../../../node_modules/rxjs/_esm2015/internal/observable/from.js");
    /* harmony import */


    var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./empty */
    "../../../node_modules/rxjs/_esm2015/internal/observable/empty.js");

    function defer(observableFactory) {
      return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var input;

        try {
          input = observableFactory();
        } catch (err) {
          subscriber.error(err);
          return undefined;
        }

        var source = input ? Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(input) : Object(_empty__WEBPACK_IMPORTED_MODULE_2__["empty"])();
        return source.subscribe(subscriber);
      });
    } //# sourceMappingURL=defer.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/observable/empty.js":
  /*!***********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/observable/empty.js ***!
    \***********************************************************************************/

  /*! exports provided: EMPTY, empty */

  /***/
  function node_modulesRxjs_esm2015InternalObservableEmptyJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EMPTY", function () {
      return EMPTY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "empty", function () {
      return empty;
    });
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Observable */
    "../../../node_modules/rxjs/_esm2015/internal/Observable.js");

    var EMPTY = new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
      return subscriber.complete();
    });

    function empty(scheduler) {
      return scheduler ? emptyScheduled(scheduler) : EMPTY;
    }

    function emptyScheduled(scheduler) {
      return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        return scheduler.schedule(function () {
          return subscriber.complete();
        });
      });
    } //# sourceMappingURL=empty.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/observable/forkJoin.js":
  /*!**************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/observable/forkJoin.js ***!
    \**************************************************************************************/

  /*! exports provided: forkJoin */

  /***/
  function node_modulesRxjs_esm2015InternalObservableForkJoinJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "forkJoin", function () {
      return forkJoin;
    });
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Observable */
    "../../../node_modules/rxjs/_esm2015/internal/Observable.js");
    /* harmony import */


    var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../util/isArray */
    "../../../node_modules/rxjs/_esm2015/internal/util/isArray.js");
    /* harmony import */


    var _operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../operators/map */
    "../../../node_modules/rxjs/_esm2015/internal/operators/map.js");
    /* harmony import */


    var _util_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../util/isObject */
    "../../../node_modules/rxjs/_esm2015/internal/util/isObject.js");
    /* harmony import */


    var _from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./from */
    "../../../node_modules/rxjs/_esm2015/internal/observable/from.js");

    function forkJoin() {
      for (var _len9 = arguments.length, sources = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        sources[_key9] = arguments[_key9];
      }

      if (sources.length === 1) {
        var first = sources[0];

        if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(first)) {
          return forkJoinInternal(first, null);
        }

        if (Object(_util_isObject__WEBPACK_IMPORTED_MODULE_3__["isObject"])(first) && Object.getPrototypeOf(first) === Object.prototype) {
          var keys = Object.keys(first);
          return forkJoinInternal(keys.map(function (key) {
            return first[key];
          }), keys);
        }
      }

      if (typeof sources[sources.length - 1] === 'function') {
        var resultSelector = sources.pop();
        sources = sources.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(sources[0]) ? sources[0] : sources;
        return forkJoinInternal(sources, null).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (args) {
          return resultSelector.apply(void 0, _toConsumableArray(args));
        }));
      }

      return forkJoinInternal(sources, null);
    }

    function forkJoinInternal(sources, keys) {
      return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var len = sources.length;

        if (len === 0) {
          subscriber.complete();
          return;
        }

        var values = new Array(len);
        var completed = 0;
        var emitted = 0;

        var _loop = function _loop(i) {
          var source = Object(_from__WEBPACK_IMPORTED_MODULE_4__["from"])(sources[i]);
          var hasValue = false;
          subscriber.add(source.subscribe({
            next: function next(value) {
              if (!hasValue) {
                hasValue = true;
                emitted++;
              }

              values[i] = value;
            },
            error: function error(err) {
              return subscriber.error(err);
            },
            complete: function complete() {
              completed++;

              if (completed === len || !hasValue) {
                if (emitted === len) {
                  subscriber.next(keys ? keys.reduce(function (result, key, i) {
                    return result[key] = values[i], result;
                  }, {}) : values);
                }

                subscriber.complete();
              }
            }
          }));
        };

        for (var i = 0; i < len; i++) {
          _loop(i);
        }
      });
    } //# sourceMappingURL=forkJoin.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/observable/from.js":
  /*!**********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/observable/from.js ***!
    \**********************************************************************************/

  /*! exports provided: from */

  /***/
  function node_modulesRxjs_esm2015InternalObservableFromJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "from", function () {
      return from;
    });
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Observable */
    "../../../node_modules/rxjs/_esm2015/internal/Observable.js");
    /* harmony import */


    var _util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../util/subscribeTo */
    "../../../node_modules/rxjs/_esm2015/internal/util/subscribeTo.js");
    /* harmony import */


    var _scheduled_scheduled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../scheduled/scheduled */
    "../../../node_modules/rxjs/_esm2015/internal/scheduled/scheduled.js");

    function from(input, scheduler) {
      if (!scheduler) {
        if (input instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
          return input;
        }

        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(input));
      } else {
        return Object(_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_2__["scheduled"])(input, scheduler);
      }
    } //# sourceMappingURL=from.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/observable/fromArray.js":
  /*!***************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/observable/fromArray.js ***!
    \***************************************************************************************/

  /*! exports provided: fromArray */

  /***/
  function node_modulesRxjs_esm2015InternalObservableFromArrayJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fromArray", function () {
      return fromArray;
    });
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Observable */
    "../../../node_modules/rxjs/_esm2015/internal/Observable.js");
    /* harmony import */


    var _util_subscribeToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../util/subscribeToArray */
    "../../../node_modules/rxjs/_esm2015/internal/util/subscribeToArray.js");
    /* harmony import */


    var _scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../scheduled/scheduleArray */
    "../../../node_modules/rxjs/_esm2015/internal/scheduled/scheduleArray.js");

    function fromArray(input, scheduler) {
      if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeToArray__WEBPACK_IMPORTED_MODULE_1__["subscribeToArray"])(input));
      } else {
        return Object(_scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__["scheduleArray"])(input, scheduler);
      }
    } //# sourceMappingURL=fromArray.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/observable/fromEvent.js":
  /*!***************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/observable/fromEvent.js ***!
    \***************************************************************************************/

  /*! exports provided: fromEvent */

  /***/
  function node_modulesRxjs_esm2015InternalObservableFromEventJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fromEvent", function () {
      return fromEvent;
    });
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Observable */
    "../../../node_modules/rxjs/_esm2015/internal/Observable.js");
    /* harmony import */


    var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../util/isArray */
    "../../../node_modules/rxjs/_esm2015/internal/util/isArray.js");
    /* harmony import */


    var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../util/isFunction */
    "../../../node_modules/rxjs/_esm2015/internal/util/isFunction.js");
    /* harmony import */


    var _operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../operators/map */
    "../../../node_modules/rxjs/_esm2015/internal/operators/map.js");

    var toString = function () {
      return Object.prototype.toString;
    }();

    function fromEvent(target, eventName, options, resultSelector) {
      if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(options)) {
        resultSelector = options;
        options = undefined;
      }

      if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (args) {
          return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(args) ? resultSelector.apply(void 0, _toConsumableArray(args)) : resultSelector(args);
        }));
      }

      return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        function handler(e) {
          if (arguments.length > 1) {
            subscriber.next(Array.prototype.slice.call(arguments));
          } else {
            subscriber.next(e);
          }
        }

        setupSubscription(target, eventName, handler, subscriber, options);
      });
    }

    function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
      var unsubscribe;

      if (isEventTarget(sourceObj)) {
        var source = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);

        unsubscribe = function unsubscribe() {
          return source.removeEventListener(eventName, handler, options);
        };
      } else if (isJQueryStyleEventEmitter(sourceObj)) {
        var _source = sourceObj;
        sourceObj.on(eventName, handler);

        unsubscribe = function unsubscribe() {
          return _source.off(eventName, handler);
        };
      } else if (isNodeStyleEventEmitter(sourceObj)) {
        var _source2 = sourceObj;
        sourceObj.addListener(eventName, handler);

        unsubscribe = function unsubscribe() {
          return _source2.removeListener(eventName, handler);
        };
      } else if (sourceObj && sourceObj.length) {
        for (var i = 0, len = sourceObj.length; i < len; i++) {
          setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
        }
      } else {
        throw new TypeError('Invalid event target');
      }

      subscriber.add(unsubscribe);
    }

    function isNodeStyleEventEmitter(sourceObj) {
      return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
    }

    function isJQueryStyleEventEmitter(sourceObj) {
      return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
    }

    function isEventTarget(sourceObj) {
      return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
    } //# sourceMappingURL=fromEvent.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/observable/fromEventPattern.js":
  /*!**********************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/observable/fromEventPattern.js ***!
    \**********************************************************************************************/

  /*! exports provided: fromEventPattern */

  /***/
  function node_modulesRxjs_esm2015InternalObservableFromEventPatternJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fromEventPattern", function () {
      return fromEventPattern;
    });
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Observable */
    "../../../node_modules/rxjs/_esm2015/internal/Observable.js");
    /* harmony import */


    var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../util/isArray */
    "../../../node_modules/rxjs/_esm2015/internal/util/isArray.js");
    /* harmony import */


    var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../util/isFunction */
    "../../../node_modules/rxjs/_esm2015/internal/util/isFunction.js");
    /* harmony import */


    var _operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../operators/map */
    "../../../node_modules/rxjs/_esm2015/internal/operators/map.js");

    function fromEventPattern(addHandler, removeHandler, resultSelector) {
      if (resultSelector) {
        return fromEventPattern(addHandler, removeHandler).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (args) {
          return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(args) ? resultSelector.apply(void 0, _toConsumableArray(args)) : resultSelector(args);
        }));
      }

      return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var handler = function handler() {
          for (var _len10 = arguments.length, e = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
            e[_key10] = arguments[_key10];
          }

          return subscriber.next(e.length === 1 ? e[0] : e);
        };

        var retValue;

        try {
          retValue = addHandler(handler);
        } catch (err) {
          subscriber.error(err);
          return undefined;
        }

        if (!Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(removeHandler)) {
          return undefined;
        }

        return function () {
          return removeHandler(handler, retValue);
        };
      });
    } //# sourceMappingURL=fromEventPattern.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/observable/generate.js":
  /*!**************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/observable/generate.js ***!
    \**************************************************************************************/

  /*! exports provided: generate */

  /***/
  function node_modulesRxjs_esm2015InternalObservableGenerateJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "generate", function () {
      return generate;
    });
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Observable */
    "../../../node_modules/rxjs/_esm2015/internal/Observable.js");
    /* harmony import */


    var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../util/identity */
    "../../../node_modules/rxjs/_esm2015/internal/util/identity.js");
    /* harmony import */


    var _util_isScheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../util/isScheduler */
    "../../../node_modules/rxjs/_esm2015/internal/util/isScheduler.js");

    function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
      var resultSelector;
      var initialState;

      if (arguments.length == 1) {
        var options = initialStateOrOptions;
        initialState = options.initialState;
        condition = options.condition;
        iterate = options.iterate;
        resultSelector = options.resultSelector || _util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"];
        scheduler = options.scheduler;
      } else if (resultSelectorOrObservable === undefined || Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_2__["isScheduler"])(resultSelectorOrObservable)) {
        initialState = initialStateOrOptions;
        resultSelector = _util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"];
        scheduler = resultSelectorOrObservable;
      } else {
        initialState = initialStateOrOptions;
        resultSelector = resultSelectorOrObservable;
      }

      return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var state = initialState;

        if (scheduler) {
          return scheduler.schedule(dispatch, 0, {
            subscriber: subscriber,
            iterate: iterate,
            condition: condition,
            resultSelector: resultSelector,
            state: state
          });
        }

        do {
          if (condition) {
            var conditionResult = void 0;

            try {
              conditionResult = condition(state);
            } catch (err) {
              subscriber.error(err);
              return undefined;
            }

            if (!conditionResult) {
              subscriber.complete();
              break;
            }
          }

          var value = void 0;

          try {
            value = resultSelector(state);
          } catch (err) {
            subscriber.error(err);
            return undefined;
          }

          subscriber.next(value);

          if (subscriber.closed) {
            break;
          }

          try {
            state = iterate(state);
          } catch (err) {
            subscriber.error(err);
            return undefined;
          }
        } while (true);

        return undefined;
      });
    }

    function dispatch(state) {
      var subscriber = state.subscriber,
          condition = state.condition;

      if (subscriber.closed) {
        return undefined;
      }

      if (state.needIterate) {
        try {
          state.state = state.iterate(state.state);
        } catch (err) {
          subscriber.error(err);
          return undefined;
        }
      } else {
        state.needIterate = true;
      }

      if (condition) {
        var conditionResult;

        try {
          conditionResult = condition(state.state);
        } catch (err) {
          subscriber.error(err);
          return undefined;
        }

        if (!conditionResult) {
          subscriber.complete();
          return undefined;
        }

        if (subscriber.closed) {
          return undefined;
        }
      }

      var value;

      try {
        value = state.resultSelector(state.state);
      } catch (err) {
        subscriber.error(err);
        return undefined;
      }

      if (subscriber.closed) {
        return undefined;
      }

      subscriber.next(value);

      if (subscriber.closed) {
        return undefined;
      }

      return this.schedule(state);
    } //# sourceMappingURL=generate.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/observable/iif.js":
  /*!*********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/observable/iif.js ***!
    \*********************************************************************************/

  /*! exports provided: iif */

  /***/
  function node_modulesRxjs_esm2015InternalObservableIifJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "iif", function () {
      return iif;
    });
    /* harmony import */


    var _defer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./defer */
    "../../../node_modules/rxjs/_esm2015/internal/observable/defer.js");
    /* harmony import */


    var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./empty */
    "../../../node_modules/rxjs/_esm2015/internal/observable/empty.js");

    function iif(condition) {
      var trueResult = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _empty__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
      var falseResult = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _empty__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
      return Object(_defer__WEBPACK_IMPORTED_MODULE_0__["defer"])(function () {
        return condition() ? trueResult : falseResult;
      });
    } //# sourceMappingURL=iif.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/observable/interval.js":
  /*!**************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/observable/interval.js ***!
    \**************************************************************************************/

  /*! exports provided: interval */

  /***/
  function node_modulesRxjs_esm2015InternalObservableIntervalJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "interval", function () {
      return interval;
    });
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Observable */
    "../../../node_modules/rxjs/_esm2015/internal/Observable.js");
    /* harmony import */


    var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../scheduler/async */
    "../../../node_modules/rxjs/_esm2015/internal/scheduler/async.js");
    /* harmony import */


    var _util_isNumeric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../util/isNumeric */
    "../../../node_modules/rxjs/_esm2015/internal/util/isNumeric.js");

    function interval() {
      var period = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];

      if (!Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(period) || period < 0) {
        period = 0;
      }

      if (!scheduler || typeof scheduler.schedule !== 'function') {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
      }

      return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        subscriber.add(scheduler.schedule(dispatch, period, {
          subscriber: subscriber,
          counter: 0,
          period: period
        }));
        return subscriber;
      });
    }

    function dispatch(state) {
      var subscriber = state.subscriber,
          counter = state.counter,
          period = state.period;
      subscriber.next(counter);
      this.schedule({
        subscriber: subscriber,
        counter: counter + 1,
        period: period
      }, period);
    } //# sourceMappingURL=interval.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/observable/merge.js":
  /*!***********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/observable/merge.js ***!
    \***********************************************************************************/

  /*! exports provided: merge */

  /***/
  function node_modulesRxjs_esm2015InternalObservableMergeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "merge", function () {
      return merge;
    });
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Observable */
    "../../../node_modules/rxjs/_esm2015/internal/Observable.js");
    /* harmony import */


    var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../util/isScheduler */
    "../../../node_modules/rxjs/_esm2015/internal/util/isScheduler.js");
    /* harmony import */


    var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../operators/mergeAll */
    "../../../node_modules/rxjs/_esm2015/internal/operators/mergeAll.js");
    /* harmony import */


    var _fromArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./fromArray */
    "../../../node_modules/rxjs/_esm2015/internal/observable/fromArray.js");

    function merge() {
      var concurrent = Number.POSITIVE_INFINITY;
      var scheduler = null;

      for (var _len11 = arguments.length, observables = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        observables[_key11] = arguments[_key11];
      }

      var last = observables[observables.length - 1];

      if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__["isScheduler"])(last)) {
        scheduler = observables.pop();

        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
          concurrent = observables.pop();
        }
      } else if (typeof last === 'number') {
        concurrent = observables.pop();
      }

      if (scheduler === null && observables.length === 1 && observables[0] instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
        return observables[0];
      }

      return Object(_operators_mergeAll__WEBPACK_IMPORTED_MODULE_2__["mergeAll"])(concurrent)(Object(_fromArray__WEBPACK_IMPORTED_MODULE_3__["fromArray"])(observables, scheduler));
    } //# sourceMappingURL=merge.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/observable/never.js":
  /*!***********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/observable/never.js ***!
    \***********************************************************************************/

  /*! exports provided: NEVER, never */

  /***/
  function node_modulesRxjs_esm2015InternalObservableNeverJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NEVER", function () {
      return NEVER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "never", function () {
      return never;
    });
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Observable */
    "../../../node_modules/rxjs/_esm2015/internal/Observable.js");
    /* harmony import */


    var _util_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../util/noop */
    "../../../node_modules/rxjs/_esm2015/internal/util/noop.js");

    var NEVER = new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](_util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"]);

    function never() {
      return NEVER;
    } //# sourceMappingURL=never.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/observable/of.js":
  /*!********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/observable/of.js ***!
    \********************************************************************************/

  /*! exports provided: of */

  /***/
  function node_modulesRxjs_esm2015InternalObservableOfJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "of", function () {
      return of;
    });
    /* harmony import */


    var _util_isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../util/isScheduler */
    "../../../node_modules/rxjs/_esm2015/internal/util/isScheduler.js");
    /* harmony import */


    var _fromArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./fromArray */
    "../../../node_modules/rxjs/_esm2015/internal/observable/fromArray.js");
    /* harmony import */


    var _scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../scheduled/scheduleArray */
    "../../../node_modules/rxjs/_esm2015/internal/scheduled/scheduleArray.js");

    function of() {
      for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
        args[_key12] = arguments[_key12];
      }

      var scheduler = args[args.length - 1];

      if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_0__["isScheduler"])(scheduler)) {
        args.pop();
        return Object(_scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__["scheduleArray"])(args, scheduler);
      } else {
        return Object(_fromArray__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(args);
      }
    } //# sourceMappingURL=of.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/observable/onErrorResumeNext.js":
  /*!***********************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/observable/onErrorResumeNext.js ***!
    \***********************************************************************************************/

  /*! exports provided: onErrorResumeNext */

  /***/
  function node_modulesRxjs_esm2015InternalObservableOnErrorResumeNextJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "onErrorResumeNext", function () {
      return onErrorResumeNext;
    });
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Observable */
    "../../../node_modules/rxjs/_esm2015/internal/Observable.js");
    /* harmony import */


    var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./from */
    "../../../node_modules/rxjs/_esm2015/internal/observable/from.js");
    /* harmony import */


    var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../util/isArray */
    "../../../node_modules/rxjs/_esm2015/internal/util/isArray.js");
    /* harmony import */


    var _empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./empty */
    "../../../node_modules/rxjs/_esm2015/internal/observable/empty.js");

    function onErrorResumeNext() {
      for (var _len13 = arguments.length, sources = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
        sources[_key13] = arguments[_key13];
      }

      if (sources.length === 0) {
        return _empty__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
      }

      var first = sources[0],
          remainder = sources.slice(1);

      if (sources.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_2__["isArray"])(first)) {
        return onErrorResumeNext.apply(void 0, _toConsumableArray(first));
      }

      return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var subNext = function subNext() {
          return subscriber.add(onErrorResumeNext.apply(void 0, _toConsumableArray(remainder)).subscribe(subscriber));
        };

        return Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(first).subscribe({
          next: function next(value) {
            subscriber.next(value);
          },
          error: subNext,
          complete: subNext
        });
      });
    } //# sourceMappingURL=onErrorResumeNext.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/observable/pairs.js":
  /*!***********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/observable/pairs.js ***!
    \***********************************************************************************/

  /*! exports provided: pairs, dispatch */

  /***/
  function node_modulesRxjs_esm2015InternalObservablePairsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pairs", function () {
      return pairs;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dispatch", function () {
      return dispatch;
    });
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Observable */
    "../../../node_modules/rxjs/_esm2015/internal/Observable.js");
    /* harmony import */


    var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../Subscription */
    "../../../node_modules/rxjs/_esm2015/internal/Subscription.js");

    function pairs(obj, scheduler) {
      if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
          var keys = Object.keys(obj);

          for (var i = 0; i < keys.length && !subscriber.closed; i++) {
            var key = keys[i];

            if (obj.hasOwnProperty(key)) {
              subscriber.next([key, obj[key]]);
            }
          }

          subscriber.complete();
        });
      } else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
          var keys = Object.keys(obj);
          var subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
          subscription.add(scheduler.schedule(dispatch, 0, {
            keys: keys,
            index: 0,
            subscriber: subscriber,
            subscription: subscription,
            obj: obj
          }));
          return subscription;
        });
      }
    }

    function dispatch(state) {
      var keys = state.keys,
          index = state.index,
          subscriber = state.subscriber,
          subscription = state.subscription,
          obj = state.obj;

      if (!subscriber.closed) {
        if (index < keys.length) {
          var key = keys[index];
          subscriber.next([key, obj[key]]);
          subscription.add(this.schedule({
            keys: keys,
            index: index + 1,
            subscriber: subscriber,
            subscription: subscription,
            obj: obj
          }));
        } else {
          subscriber.complete();
        }
      }
    } //# sourceMappingURL=pairs.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/observable/partition.js":
  /*!***************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/observable/partition.js ***!
    \***************************************************************************************/

  /*! exports provided: partition */

  /***/
  function node_modulesRxjs_esm2015InternalObservablePartitionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "partition", function () {
      return partition;
    });
    /* harmony import */


    var _util_not__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../util/not */
    "../../../node_modules/rxjs/_esm2015/internal/util/not.js");
    /* harmony import */


    var _util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../util/subscribeTo */
    "../../../node_modules/rxjs/_esm2015/internal/util/subscribeTo.js");
    /* harmony import */


    var _operators_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../operators/filter */
    "../../../node_modules/rxjs/_esm2015/internal/operators/filter.js");
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Observable */
    "../../../node_modules/rxjs/_esm2015/internal/Observable.js");

    function partition(source, predicate, thisArg) {
      return [Object(_operators_filter__WEBPACK_IMPORTED_MODULE_2__["filter"])(predicate, thisArg)(new _Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](Object(_util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(source))), Object(_operators_filter__WEBPACK_IMPORTED_MODULE_2__["filter"])(Object(_util_not__WEBPACK_IMPORTED_MODULE_0__["not"])(predicate, thisArg))(new _Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](Object(_util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(source)))];
    } //# sourceMappingURL=partition.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/observable/race.js":
  /*!**********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/observable/race.js ***!
    \**********************************************************************************/

  /*! exports provided: race, RaceOperator, RaceSubscriber */

  /***/
  function node_modulesRxjs_esm2015InternalObservableRaceJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "race", function () {
      return race;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RaceOperator", function () {
      return RaceOperator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RaceSubscriber", function () {
      return RaceSubscriber;
    });
    /* harmony import */


    var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../util/isArray */
    "../../../node_modules/rxjs/_esm2015/internal/util/isArray.js");
    /* harmony import */


    var _fromArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./fromArray */
    "../../../node_modules/rxjs/_esm2015/internal/observable/fromArray.js");
    /* harmony import */


    var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../OuterSubscriber */
    "../../../node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
    /* harmony import */


    var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../util/subscribeToResult */
    "../../../node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");

    function race() {
      for (var _len14 = arguments.length, observables = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
        observables[_key14] = arguments[_key14];
      }

      if (observables.length === 1) {
        if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(observables[0])) {
          observables = observables[0];
        } else {
          return observables[0];
        }
      }

      return Object(_fromArray__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(observables, undefined).lift(new RaceOperator());
    }

    var RaceOperator = /*#__PURE__*/function () {
      function RaceOperator() {
        _classCallCheck(this, RaceOperator);
      }

      _createClass(RaceOperator, [{
        key: "call",
        value: function call(subscriber, source) {
          return source.subscribe(new RaceSubscriber(subscriber));
        }
      }]);

      return RaceOperator;
    }();

    var RaceSubscriber = /*#__PURE__*/function (_OuterSubscriber__WEB2) {
      _inherits(RaceSubscriber, _OuterSubscriber__WEB2);

      var _super17 = _createSuper(RaceSubscriber);

      function RaceSubscriber(destination) {
        var _this21;

        _classCallCheck(this, RaceSubscriber);

        _this21 = _super17.call(this, destination);
        _this21.hasFirst = false;
        _this21.observables = [];
        _this21.subscriptions = [];
        return _this21;
      }

      _createClass(RaceSubscriber, [{
        key: "_next",
        value: function _next(observable) {
          this.observables.push(observable);
        }
      }, {
        key: "_complete",
        value: function _complete() {
          var observables = this.observables;
          var len = observables.length;

          if (len === 0) {
            this.destination.complete();
          } else {
            for (var i = 0; i < len && !this.hasFirst; i++) {
              var observable = observables[i];
              var subscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__["subscribeToResult"])(this, observable, observable, i);

              if (this.subscriptions) {
                this.subscriptions.push(subscription);
              }

              this.add(subscription);
            }

            this.observables = null;
          }
        }
      }, {
        key: "notifyNext",
        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
          if (!this.hasFirst) {
            this.hasFirst = true;

            for (var i = 0; i < this.subscriptions.length; i++) {
              if (i !== outerIndex) {
                var subscription = this.subscriptions[i];
                subscription.unsubscribe();
                this.remove(subscription);
              }
            }

            this.subscriptions = null;
          }

          this.destination.next(innerValue);
        }
      }]);

      return RaceSubscriber;
    }(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__["OuterSubscriber"]); //# sourceMappingURL=race.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/observable/range.js":
  /*!***********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/observable/range.js ***!
    \***********************************************************************************/

  /*! exports provided: range, dispatch */

  /***/
  function node_modulesRxjs_esm2015InternalObservableRangeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "range", function () {
      return range;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dispatch", function () {
      return dispatch;
    });
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Observable */
    "../../../node_modules/rxjs/_esm2015/internal/Observable.js");

    function range() {
      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var count = arguments.length > 1 ? arguments[1] : undefined;
      var scheduler = arguments.length > 2 ? arguments[2] : undefined;
      return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        if (count === undefined) {
          count = start;
          start = 0;
        }

        var index = 0;
        var current = start;

        if (scheduler) {
          return scheduler.schedule(dispatch, 0, {
            index: index,
            count: count,
            start: start,
            subscriber: subscriber
          });
        } else {
          do {
            if (index++ >= count) {
              subscriber.complete();
              break;
            }

            subscriber.next(current++);

            if (subscriber.closed) {
              break;
            }
          } while (true);
        }

        return undefined;
      });
    }

    function dispatch(state) {
      var start = state.start,
          index = state.index,
          count = state.count,
          subscriber = state.subscriber;

      if (index >= count) {
        subscriber.complete();
        return;
      }

      subscriber.next(start);

      if (subscriber.closed) {
        return;
      }

      state.index = index + 1;
      state.start = start + 1;
      this.schedule(state);
    } //# sourceMappingURL=range.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/observable/throwError.js":
  /*!****************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/observable/throwError.js ***!
    \****************************************************************************************/

  /*! exports provided: throwError */

  /***/
  function node_modulesRxjs_esm2015InternalObservableThrowErrorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "throwError", function () {
      return throwError;
    });
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Observable */
    "../../../node_modules/rxjs/_esm2015/internal/Observable.js");

    function throwError(error, scheduler) {
      if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
          return subscriber.error(error);
        });
      } else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
          return scheduler.schedule(dispatch, 0, {
            error: error,
            subscriber: subscriber
          });
        });
      }
    }

    function dispatch(_ref) {
      var error = _ref.error,
          subscriber = _ref.subscriber;
      subscriber.error(error);
    } //# sourceMappingURL=throwError.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/observable/timer.js":
  /*!***********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/observable/timer.js ***!
    \***********************************************************************************/

  /*! exports provided: timer */

  /***/
  function node_modulesRxjs_esm2015InternalObservableTimerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "timer", function () {
      return timer;
    });
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Observable */
    "../../../node_modules/rxjs/_esm2015/internal/Observable.js");
    /* harmony import */


    var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../scheduler/async */
    "../../../node_modules/rxjs/_esm2015/internal/scheduler/async.js");
    /* harmony import */


    var _util_isNumeric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../util/isNumeric */
    "../../../node_modules/rxjs/_esm2015/internal/util/isNumeric.js");
    /* harmony import */


    var _util_isScheduler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../util/isScheduler */
    "../../../node_modules/rxjs/_esm2015/internal/util/isScheduler.js");

    function timer() {
      var dueTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var periodOrScheduler = arguments.length > 1 ? arguments[1] : undefined;
      var scheduler = arguments.length > 2 ? arguments[2] : undefined;
      var period = -1;

      if (Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(periodOrScheduler)) {
        period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
      } else if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_3__["isScheduler"])(periodOrScheduler)) {
        scheduler = periodOrScheduler;
      }

      if (!Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_3__["isScheduler"])(scheduler)) {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
      }

      return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var due = Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(dueTime) ? dueTime : +dueTime - scheduler.now();
        return scheduler.schedule(dispatch, due, {
          index: 0,
          period: period,
          subscriber: subscriber
        });
      });
    }

    function dispatch(state) {
      var index = state.index,
          period = state.period,
          subscriber = state.subscriber;
      subscriber.next(index);

      if (subscriber.closed) {
        return;
      } else if (period === -1) {
        return subscriber.complete();
      }

      state.index = index + 1;
      this.schedule(state, period);
    } //# sourceMappingURL=timer.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/observable/using.js":
  /*!***********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/observable/using.js ***!
    \***********************************************************************************/

  /*! exports provided: using */

  /***/
  function node_modulesRxjs_esm2015InternalObservableUsingJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "using", function () {
      return using;
    });
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Observable */
    "../../../node_modules/rxjs/_esm2015/internal/Observable.js");
    /* harmony import */


    var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./from */
    "../../../node_modules/rxjs/_esm2015/internal/observable/from.js");
    /* harmony import */


    var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./empty */
    "../../../node_modules/rxjs/_esm2015/internal/observable/empty.js");

    function using(resourceFactory, observableFactory) {
      return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var resource;

        try {
          resource = resourceFactory();
        } catch (err) {
          subscriber.error(err);
          return undefined;
        }

        var result;

        try {
          result = observableFactory(resource);
        } catch (err) {
          subscriber.error(err);
          return undefined;
        }

        var source = result ? Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(result) : _empty__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
        var subscription = source.subscribe(subscriber);
        return function () {
          subscription.unsubscribe();

          if (resource) {
            resource.unsubscribe();
          }
        };
      });
    } //# sourceMappingURL=using.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/observable/zip.js":
  /*!*********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/observable/zip.js ***!
    \*********************************************************************************/

  /*! exports provided: zip, ZipOperator, ZipSubscriber */

  /***/
  function node_modulesRxjs_esm2015InternalObservableZipJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "zip", function () {
      return zip;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZipOperator", function () {
      return ZipOperator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZipSubscriber", function () {
      return ZipSubscriber;
    });
    /* harmony import */


    var _fromArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./fromArray */
    "../../../node_modules/rxjs/_esm2015/internal/observable/fromArray.js");
    /* harmony import */


    var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../util/isArray */
    "../../../node_modules/rxjs/_esm2015/internal/util/isArray.js");
    /* harmony import */


    var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Subscriber */
    "../../../node_modules/rxjs/_esm2015/internal/Subscriber.js");
    /* harmony import */


    var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../OuterSubscriber */
    "../../../node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
    /* harmony import */


    var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../util/subscribeToResult */
    "../../../node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");
    /* harmony import */


    var _internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../internal/symbol/iterator */
    "../../../node_modules/rxjs/_esm2015/internal/symbol/iterator.js");

    function zip() {
      for (var _len15 = arguments.length, observables = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
        observables[_key15] = arguments[_key15];
      }

      var resultSelector = observables[observables.length - 1];

      if (typeof resultSelector === 'function') {
        observables.pop();
      }

      return Object(_fromArray__WEBPACK_IMPORTED_MODULE_0__["fromArray"])(observables, undefined).lift(new ZipOperator(resultSelector));
    }

    var ZipOperator = /*#__PURE__*/function () {
      function ZipOperator(resultSelector) {
        _classCallCheck(this, ZipOperator);

        this.resultSelector = resultSelector;
      }

      _createClass(ZipOperator, [{
        key: "call",
        value: function call(subscriber, source) {
          return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
        }
      }]);

      return ZipOperator;
    }();

    var ZipSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_5) {
      _inherits(ZipSubscriber, _Subscriber__WEBPACK_5);

      var _super18 = _createSuper(ZipSubscriber);

      function ZipSubscriber(destination, resultSelector) {
        var _this22;

        var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object.create(null);

        _classCallCheck(this, ZipSubscriber);

        _this22 = _super18.call(this, destination);
        _this22.iterators = [];
        _this22.active = 0;
        _this22.resultSelector = typeof resultSelector === 'function' ? resultSelector : null;
        _this22.values = values;
        return _this22;
      }

      _createClass(ZipSubscriber, [{
        key: "_next",
        value: function _next(value) {
          var iterators = this.iterators;

          if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value)) {
            iterators.push(new StaticArrayIterator(value));
          } else if (typeof value[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_5__["iterator"]] === 'function') {
            iterators.push(new StaticIterator(value[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_5__["iterator"]]()));
          } else {
            iterators.push(new ZipBufferIterator(this.destination, this, value));
          }
        }
      }, {
        key: "_complete",
        value: function _complete() {
          var iterators = this.iterators;
          var len = iterators.length;
          this.unsubscribe();

          if (len === 0) {
            this.destination.complete();
            return;
          }

          this.active = len;

          for (var i = 0; i < len; i++) {
            var iterator = iterators[i];

            if (iterator.stillUnsubscribed) {
              var destination = this.destination;
              destination.add(iterator.subscribe(iterator, i));
            } else {
              this.active--;
            }
          }
        }
      }, {
        key: "notifyInactive",
        value: function notifyInactive() {
          this.active--;

          if (this.active === 0) {
            this.destination.complete();
          }
        }
      }, {
        key: "checkIterators",
        value: function checkIterators() {
          var iterators = this.iterators;
          var len = iterators.length;
          var destination = this.destination;

          for (var i = 0; i < len; i++) {
            var iterator = iterators[i];

            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
              return;
            }
          }

          var shouldComplete = false;
          var args = [];

          for (var _i3 = 0; _i3 < len; _i3++) {
            var _iterator = iterators[_i3];

            var result = _iterator.next();

            if (_iterator.hasCompleted()) {
              shouldComplete = true;
            }

            if (result.done) {
              destination.complete();
              return;
            }

            args.push(result.value);
          }

          if (this.resultSelector) {
            this._tryresultSelector(args);
          } else {
            destination.next(args);
          }

          if (shouldComplete) {
            destination.complete();
          }
        }
      }, {
        key: "_tryresultSelector",
        value: function _tryresultSelector(args) {
          var result;

          try {
            result = this.resultSelector.apply(this, args);
          } catch (err) {
            this.destination.error(err);
            return;
          }

          this.destination.next(result);
        }
      }]);

      return ZipSubscriber;
    }(_Subscriber__WEBPACK_IMPORTED_MODULE_2__["Subscriber"]);

    var StaticIterator = /*#__PURE__*/function () {
      function StaticIterator(iterator) {
        _classCallCheck(this, StaticIterator);

        this.iterator = iterator;
        this.nextResult = iterator.next();
      }

      _createClass(StaticIterator, [{
        key: "hasValue",
        value: function hasValue() {
          return true;
        }
      }, {
        key: "next",
        value: function next() {
          var result = this.nextResult;
          this.nextResult = this.iterator.next();
          return result;
        }
      }, {
        key: "hasCompleted",
        value: function hasCompleted() {
          var nextResult = this.nextResult;
          return nextResult && nextResult.done;
        }
      }]);

      return StaticIterator;
    }();

    var StaticArrayIterator = /*#__PURE__*/function () {
      function StaticArrayIterator(array) {
        _classCallCheck(this, StaticArrayIterator);

        this.array = array;
        this.index = 0;
        this.length = 0;
        this.length = array.length;
      }

      _createClass(StaticArrayIterator, [{
        key: _internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_5__["iterator"],
        value: function value() {
          return this;
        }
      }, {
        key: "next",
        value: function next(value) {
          var i = this.index++;
          var array = this.array;
          return i < this.length ? {
            value: array[i],
            done: false
          } : {
            value: null,
            done: true
          };
        }
      }, {
        key: "hasValue",
        value: function hasValue() {
          return this.array.length > this.index;
        }
      }, {
        key: "hasCompleted",
        value: function hasCompleted() {
          return this.array.length === this.index;
        }
      }]);

      return StaticArrayIterator;
    }();

    var ZipBufferIterator = /*#__PURE__*/function (_OuterSubscriber__WEB3) {
      _inherits(ZipBufferIterator, _OuterSubscriber__WEB3);

      var _super19 = _createSuper(ZipBufferIterator);

      function ZipBufferIterator(destination, parent, observable) {
        var _this23;

        _classCallCheck(this, ZipBufferIterator);

        _this23 = _super19.call(this, destination);
        _this23.parent = parent;
        _this23.observable = observable;
        _this23.stillUnsubscribed = true;
        _this23.buffer = [];
        _this23.isComplete = false;
        return _this23;
      }

      _createClass(ZipBufferIterator, [{
        key: _internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_5__["iterator"],
        value: function value() {
          return this;
        }
      }, {
        key: "next",
        value: function next() {
          var buffer = this.buffer;

          if (buffer.length === 0 && this.isComplete) {
            return {
              value: null,
              done: true
            };
          } else {
            return {
              value: buffer.shift(),
              done: false
            };
          }
        }
      }, {
        key: "hasValue",
        value: function hasValue() {
          return this.buffer.length > 0;
        }
      }, {
        key: "hasCompleted",
        value: function hasCompleted() {
          return this.buffer.length === 0 && this.isComplete;
        }
      }, {
        key: "notifyComplete",
        value: function notifyComplete() {
          if (this.buffer.length > 0) {
            this.isComplete = true;
            this.parent.notifyInactive();
          } else {
            this.destination.complete();
          }
        }
      }, {
        key: "notifyNext",
        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
          this.buffer.push(innerValue);
          this.parent.checkIterators();
        }
      }, {
        key: "subscribe",
        value: function subscribe(value, index) {
          return Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__["subscribeToResult"])(this, this.observable, this, index);
        }
      }]);

      return ZipBufferIterator;
    }(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_3__["OuterSubscriber"]); //# sourceMappingURL=zip.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/operators/concatAll.js":
  /*!**************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/operators/concatAll.js ***!
    \**************************************************************************************/

  /*! exports provided: concatAll */

  /***/
  function node_modulesRxjs_esm2015InternalOperatorsConcatAllJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "concatAll", function () {
      return concatAll;
    });
    /* harmony import */


    var _mergeAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./mergeAll */
    "../../../node_modules/rxjs/_esm2015/internal/operators/mergeAll.js");

    function concatAll() {
      return Object(_mergeAll__WEBPACK_IMPORTED_MODULE_0__["mergeAll"])(1);
    } //# sourceMappingURL=concatAll.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/operators/filter.js":
  /*!***********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/operators/filter.js ***!
    \***********************************************************************************/

  /*! exports provided: filter */

  /***/
  function node_modulesRxjs_esm2015InternalOperatorsFilterJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "filter", function () {
      return filter;
    });
    /* harmony import */


    var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Subscriber */
    "../../../node_modules/rxjs/_esm2015/internal/Subscriber.js");

    function filter(predicate, thisArg) {
      return function filterOperatorFunction(source) {
        return source.lift(new FilterOperator(predicate, thisArg));
      };
    }

    var FilterOperator = /*#__PURE__*/function () {
      function FilterOperator(predicate, thisArg) {
        _classCallCheck(this, FilterOperator);

        this.predicate = predicate;
        this.thisArg = thisArg;
      }

      _createClass(FilterOperator, [{
        key: "call",
        value: function call(subscriber, source) {
          return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
        }
      }]);

      return FilterOperator;
    }();

    var FilterSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_6) {
      _inherits(FilterSubscriber, _Subscriber__WEBPACK_6);

      var _super20 = _createSuper(FilterSubscriber);

      function FilterSubscriber(destination, predicate, thisArg) {
        var _this24;

        _classCallCheck(this, FilterSubscriber);

        _this24 = _super20.call(this, destination);
        _this24.predicate = predicate;
        _this24.thisArg = thisArg;
        _this24.count = 0;
        return _this24;
      }

      _createClass(FilterSubscriber, [{
        key: "_next",
        value: function _next(value) {
          var result;

          try {
            result = this.predicate.call(this.thisArg, value, this.count++);
          } catch (err) {
            this.destination.error(err);
            return;
          }

          if (result) {
            this.destination.next(value);
          }
        }
      }]);

      return FilterSubscriber;
    }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=filter.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/operators/groupBy.js":
  /*!************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/operators/groupBy.js ***!
    \************************************************************************************/

  /*! exports provided: groupBy, GroupedObservable */

  /***/
  function node_modulesRxjs_esm2015InternalOperatorsGroupByJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "groupBy", function () {
      return groupBy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupedObservable", function () {
      return GroupedObservable;
    });
    /* harmony import */


    var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Subscriber */
    "../../../node_modules/rxjs/_esm2015/internal/Subscriber.js");
    /* harmony import */


    var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../Subscription */
    "../../../node_modules/rxjs/_esm2015/internal/Subscription.js");
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Observable */
    "../../../node_modules/rxjs/_esm2015/internal/Observable.js");
    /* harmony import */


    var _Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Subject */
    "../../../node_modules/rxjs/_esm2015/internal/Subject.js");

    function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
      return function (source) {
        return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
      };
    }

    var GroupByOperator = /*#__PURE__*/function () {
      function GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector) {
        _classCallCheck(this, GroupByOperator);

        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
      }

      _createClass(GroupByOperator, [{
        key: "call",
        value: function call(subscriber, source) {
          return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
        }
      }]);

      return GroupByOperator;
    }();

    var GroupBySubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_7) {
      _inherits(GroupBySubscriber, _Subscriber__WEBPACK_7);

      var _super21 = _createSuper(GroupBySubscriber);

      function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
        var _this25;

        _classCallCheck(this, GroupBySubscriber);

        _this25 = _super21.call(this, destination);
        _this25.keySelector = keySelector;
        _this25.elementSelector = elementSelector;
        _this25.durationSelector = durationSelector;
        _this25.subjectSelector = subjectSelector;
        _this25.groups = null;
        _this25.attemptedToUnsubscribe = false;
        _this25.count = 0;
        return _this25;
      }

      _createClass(GroupBySubscriber, [{
        key: "_next",
        value: function _next(value) {
          var key;

          try {
            key = this.keySelector(value);
          } catch (err) {
            this.error(err);
            return;
          }

          this._group(value, key);
        }
      }, {
        key: "_group",
        value: function _group(value, key) {
          var groups = this.groups;

          if (!groups) {
            groups = this.groups = new Map();
          }

          var group = groups.get(key);
          var element;

          if (this.elementSelector) {
            try {
              element = this.elementSelector(value);
            } catch (err) {
              this.error(err);
            }
          } else {
            element = value;
          }

          if (!group) {
            group = this.subjectSelector ? this.subjectSelector() : new _Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            groups.set(key, group);
            var groupedObservable = new GroupedObservable(key, group, this);
            this.destination.next(groupedObservable);

            if (this.durationSelector) {
              var duration;

              try {
                duration = this.durationSelector(new GroupedObservable(key, group));
              } catch (err) {
                this.error(err);
                return;
              }

              this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
            }
          }

          if (!group.closed) {
            group.next(element);
          }
        }
      }, {
        key: "_error",
        value: function _error(err) {
          var groups = this.groups;

          if (groups) {
            groups.forEach(function (group, key) {
              group.error(err);
            });
            groups.clear();
          }

          this.destination.error(err);
        }
      }, {
        key: "_complete",
        value: function _complete() {
          var groups = this.groups;

          if (groups) {
            groups.forEach(function (group, key) {
              group.complete();
            });
            groups.clear();
          }

          this.destination.complete();
        }
      }, {
        key: "removeGroup",
        value: function removeGroup(key) {
          this.groups["delete"](key);
        }
      }, {
        key: "unsubscribe",
        value: function unsubscribe() {
          if (!this.closed) {
            this.attemptedToUnsubscribe = true;

            if (this.count === 0) {
              _get(_getPrototypeOf(GroupBySubscriber.prototype), "unsubscribe", this).call(this);
            }
          }
        }
      }]);

      return GroupBySubscriber;
    }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]);

    var GroupDurationSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_8) {
      _inherits(GroupDurationSubscriber, _Subscriber__WEBPACK_8);

      var _super22 = _createSuper(GroupDurationSubscriber);

      function GroupDurationSubscriber(key, group, parent) {
        var _this26;

        _classCallCheck(this, GroupDurationSubscriber);

        _this26 = _super22.call(this, group);
        _this26.key = key;
        _this26.group = group;
        _this26.parent = parent;
        return _this26;
      }

      _createClass(GroupDurationSubscriber, [{
        key: "_next",
        value: function _next(value) {
          this.complete();
        }
      }, {
        key: "_unsubscribe",
        value: function _unsubscribe() {
          var parent = this.parent,
              key = this.key;
          this.key = this.parent = null;

          if (parent) {
            parent.removeGroup(key);
          }
        }
      }]);

      return GroupDurationSubscriber;
    }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]);

    var GroupedObservable = /*#__PURE__*/function (_Observable__WEBPACK_3) {
      _inherits(GroupedObservable, _Observable__WEBPACK_3);

      var _super23 = _createSuper(GroupedObservable);

      function GroupedObservable(key, groupSubject, refCountSubscription) {
        var _this27;

        _classCallCheck(this, GroupedObservable);

        _this27 = _super23.call(this);
        _this27.key = key;
        _this27.groupSubject = groupSubject;
        _this27.refCountSubscription = refCountSubscription;
        return _this27;
      }

      _createClass(GroupedObservable, [{
        key: "_subscribe",
        value: function _subscribe(subscriber) {
          var subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
          var refCountSubscription = this.refCountSubscription,
              groupSubject = this.groupSubject;

          if (refCountSubscription && !refCountSubscription.closed) {
            subscription.add(new InnerRefCountSubscription(refCountSubscription));
          }

          subscription.add(groupSubject.subscribe(subscriber));
          return subscription;
        }
      }]);

      return GroupedObservable;
    }(_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]);

    var InnerRefCountSubscription = /*#__PURE__*/function (_Subscription__WEBPAC3) {
      _inherits(InnerRefCountSubscription, _Subscription__WEBPAC3);

      var _super24 = _createSuper(InnerRefCountSubscription);

      function InnerRefCountSubscription(parent) {
        var _this28;

        _classCallCheck(this, InnerRefCountSubscription);

        _this28 = _super24.call(this);
        _this28.parent = parent;
        parent.count++;
        return _this28;
      }

      _createClass(InnerRefCountSubscription, [{
        key: "unsubscribe",
        value: function unsubscribe() {
          var parent = this.parent;

          if (!parent.closed && !this.closed) {
            _get(_getPrototypeOf(InnerRefCountSubscription.prototype), "unsubscribe", this).call(this);

            parent.count -= 1;

            if (parent.count === 0 && parent.attemptedToUnsubscribe) {
              parent.unsubscribe();
            }
          }
        }
      }]);

      return InnerRefCountSubscription;
    }(_Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]); //# sourceMappingURL=groupBy.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/operators/map.js":
  /*!********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/operators/map.js ***!
    \********************************************************************************/

  /*! exports provided: map, MapOperator */

  /***/
  function node_modulesRxjs_esm2015InternalOperatorsMapJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "map", function () {
      return map;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapOperator", function () {
      return MapOperator;
    });
    /* harmony import */


    var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Subscriber */
    "../../../node_modules/rxjs/_esm2015/internal/Subscriber.js");

    function map(project, thisArg) {
      return function mapOperation(source) {
        if (typeof project !== 'function') {
          throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }

        return source.lift(new MapOperator(project, thisArg));
      };
    }

    var MapOperator = /*#__PURE__*/function () {
      function MapOperator(project, thisArg) {
        _classCallCheck(this, MapOperator);

        this.project = project;
        this.thisArg = thisArg;
      }

      _createClass(MapOperator, [{
        key: "call",
        value: function call(subscriber, source) {
          return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
        }
      }]);

      return MapOperator;
    }();

    var MapSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_9) {
      _inherits(MapSubscriber, _Subscriber__WEBPACK_9);

      var _super25 = _createSuper(MapSubscriber);

      function MapSubscriber(destination, project, thisArg) {
        var _this29;

        _classCallCheck(this, MapSubscriber);

        _this29 = _super25.call(this, destination);
        _this29.project = project;
        _this29.count = 0;
        _this29.thisArg = thisArg || _assertThisInitialized(_this29);
        return _this29;
      }

      _createClass(MapSubscriber, [{
        key: "_next",
        value: function _next(value) {
          var result;

          try {
            result = this.project.call(this.thisArg, value, this.count++);
          } catch (err) {
            this.destination.error(err);
            return;
          }

          this.destination.next(result);
        }
      }]);

      return MapSubscriber;
    }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=map.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/operators/mergeAll.js":
  /*!*************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/operators/mergeAll.js ***!
    \*************************************************************************************/

  /*! exports provided: mergeAll */

  /***/
  function node_modulesRxjs_esm2015InternalOperatorsMergeAllJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mergeAll", function () {
      return mergeAll;
    });
    /* harmony import */


    var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./mergeMap */
    "../../../node_modules/rxjs/_esm2015/internal/operators/mergeMap.js");
    /* harmony import */


    var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../util/identity */
    "../../../node_modules/rxjs/_esm2015/internal/util/identity.js");

    function mergeAll() {
      var concurrent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.POSITIVE_INFINITY;
      return Object(_mergeMap__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"], concurrent);
    } //# sourceMappingURL=mergeAll.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/operators/mergeMap.js":
  /*!*************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/operators/mergeMap.js ***!
    \*************************************************************************************/

  /*! exports provided: mergeMap, MergeMapOperator, MergeMapSubscriber */

  /***/
  function node_modulesRxjs_esm2015InternalOperatorsMergeMapJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mergeMap", function () {
      return mergeMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MergeMapOperator", function () {
      return MergeMapOperator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MergeMapSubscriber", function () {
      return MergeMapSubscriber;
    });
    /* harmony import */


    var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../util/subscribeToResult */
    "../../../node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");
    /* harmony import */


    var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../OuterSubscriber */
    "../../../node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
    /* harmony import */


    var _InnerSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../InnerSubscriber */
    "../../../node_modules/rxjs/_esm2015/internal/InnerSubscriber.js");
    /* harmony import */


    var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./map */
    "../../../node_modules/rxjs/_esm2015/internal/operators/map.js");
    /* harmony import */


    var _observable_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../observable/from */
    "../../../node_modules/rxjs/_esm2015/internal/observable/from.js");

    function mergeMap(project, resultSelector) {
      var concurrent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.POSITIVE_INFINITY;

      if (typeof resultSelector === 'function') {
        return function (source) {
          return source.pipe(mergeMap(function (a, i) {
            return Object(_observable_from__WEBPACK_IMPORTED_MODULE_4__["from"])(project(a, i)).pipe(Object(_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (b, ii) {
              return resultSelector(a, b, i, ii);
            }));
          }, concurrent));
        };
      } else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
      }

      return function (source) {
        return source.lift(new MergeMapOperator(project, concurrent));
      };
    }

    var MergeMapOperator = /*#__PURE__*/function () {
      function MergeMapOperator(project) {
        var concurrent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.POSITIVE_INFINITY;

        _classCallCheck(this, MergeMapOperator);

        this.project = project;
        this.concurrent = concurrent;
      }

      _createClass(MergeMapOperator, [{
        key: "call",
        value: function call(observer, source) {
          return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
        }
      }]);

      return MergeMapOperator;
    }();

    var MergeMapSubscriber = /*#__PURE__*/function (_OuterSubscriber__WEB4) {
      _inherits(MergeMapSubscriber, _OuterSubscriber__WEB4);

      var _super26 = _createSuper(MergeMapSubscriber);

      function MergeMapSubscriber(destination, project) {
        var _this30;

        var concurrent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.POSITIVE_INFINITY;

        _classCallCheck(this, MergeMapSubscriber);

        _this30 = _super26.call(this, destination);
        _this30.project = project;
        _this30.concurrent = concurrent;
        _this30.hasCompleted = false;
        _this30.buffer = [];
        _this30.active = 0;
        _this30.index = 0;
        return _this30;
      }

      _createClass(MergeMapSubscriber, [{
        key: "_next",
        value: function _next(value) {
          if (this.active < this.concurrent) {
            this._tryNext(value);
          } else {
            this.buffer.push(value);
          }
        }
      }, {
        key: "_tryNext",
        value: function _tryNext(value) {
          var result;
          var index = this.index++;

          try {
            result = this.project(value, index);
          } catch (err) {
            this.destination.error(err);
            return;
          }

          this.active++;

          this._innerSub(result, value, index);
        }
      }, {
        key: "_innerSub",
        value: function _innerSub(ish, value, index) {
          var innerSubscriber = new _InnerSubscriber__WEBPACK_IMPORTED_MODULE_2__["InnerSubscriber"](this, value, index);
          var destination = this.destination;
          destination.add(innerSubscriber);
          var innerSubscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_0__["subscribeToResult"])(this, ish, undefined, undefined, innerSubscriber);

          if (innerSubscription !== innerSubscriber) {
            destination.add(innerSubscription);
          }
        }
      }, {
        key: "_complete",
        value: function _complete() {
          this.hasCompleted = true;

          if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
          }

          this.unsubscribe();
        }
      }, {
        key: "notifyNext",
        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
          this.destination.next(innerValue);
        }
      }, {
        key: "notifyComplete",
        value: function notifyComplete(innerSub) {
          var buffer = this.buffer;
          this.remove(innerSub);
          this.active--;

          if (buffer.length > 0) {
            this._next(buffer.shift());
          } else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
          }
        }
      }]);

      return MergeMapSubscriber;
    }(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_1__["OuterSubscriber"]); //# sourceMappingURL=mergeMap.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/operators/observeOn.js":
  /*!**************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/operators/observeOn.js ***!
    \**************************************************************************************/

  /*! exports provided: observeOn, ObserveOnOperator, ObserveOnSubscriber, ObserveOnMessage */

  /***/
  function node_modulesRxjs_esm2015InternalOperatorsObserveOnJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "observeOn", function () {
      return observeOn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObserveOnOperator", function () {
      return ObserveOnOperator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObserveOnSubscriber", function () {
      return ObserveOnSubscriber;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObserveOnMessage", function () {
      return ObserveOnMessage;
    });
    /* harmony import */


    var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Subscriber */
    "../../../node_modules/rxjs/_esm2015/internal/Subscriber.js");
    /* harmony import */


    var _Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../Notification */
    "../../../node_modules/rxjs/_esm2015/internal/Notification.js");

    function observeOn(scheduler) {
      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return function observeOnOperatorFunction(source) {
        return source.lift(new ObserveOnOperator(scheduler, delay));
      };
    }

    var ObserveOnOperator = /*#__PURE__*/function () {
      function ObserveOnOperator(scheduler) {
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, ObserveOnOperator);

        this.scheduler = scheduler;
        this.delay = delay;
      }

      _createClass(ObserveOnOperator, [{
        key: "call",
        value: function call(subscriber, source) {
          return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
        }
      }]);

      return ObserveOnOperator;
    }();

    var ObserveOnSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_10) {
      _inherits(ObserveOnSubscriber, _Subscriber__WEBPACK_10);

      var _super27 = _createSuper(ObserveOnSubscriber);

      function ObserveOnSubscriber(destination, scheduler) {
        var _this31;

        var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, ObserveOnSubscriber);

        _this31 = _super27.call(this, destination);
        _this31.scheduler = scheduler;
        _this31.delay = delay;
        return _this31;
      }

      _createClass(ObserveOnSubscriber, [{
        key: "scheduleMessage",
        value: function scheduleMessage(notification) {
          var destination = this.destination;
          destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
        }
      }, {
        key: "_next",
        value: function _next(value) {
          this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createNext(value));
        }
      }, {
        key: "_error",
        value: function _error(err) {
          this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createError(err));
          this.unsubscribe();
        }
      }, {
        key: "_complete",
        value: function _complete() {
          this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createComplete());
          this.unsubscribe();
        }
      }], [{
        key: "dispatch",
        value: function dispatch(arg) {
          var notification = arg.notification,
              destination = arg.destination;
          notification.observe(destination);
          this.unsubscribe();
        }
      }]);

      return ObserveOnSubscriber;
    }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]);

    var ObserveOnMessage = function ObserveOnMessage(notification, destination) {
      _classCallCheck(this, ObserveOnMessage);

      this.notification = notification;
      this.destination = destination;
    }; //# sourceMappingURL=observeOn.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/operators/refCount.js":
  /*!*************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/operators/refCount.js ***!
    \*************************************************************************************/

  /*! exports provided: refCount */

  /***/
  function node_modulesRxjs_esm2015InternalOperatorsRefCountJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "refCount", function () {
      return refCount;
    });
    /* harmony import */


    var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Subscriber */
    "../../../node_modules/rxjs/_esm2015/internal/Subscriber.js");

    function refCount() {
      return function refCountOperatorFunction(source) {
        return source.lift(new RefCountOperator(source));
      };
    }

    var RefCountOperator = /*#__PURE__*/function () {
      function RefCountOperator(connectable) {
        _classCallCheck(this, RefCountOperator);

        this.connectable = connectable;
      }

      _createClass(RefCountOperator, [{
        key: "call",
        value: function call(subscriber, source) {
          var connectable = this.connectable;
          connectable._refCount++;
          var refCounter = new RefCountSubscriber(subscriber, connectable);
          var subscription = source.subscribe(refCounter);

          if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
          }

          return subscription;
        }
      }]);

      return RefCountOperator;
    }();

    var RefCountSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_11) {
      _inherits(RefCountSubscriber, _Subscriber__WEBPACK_11);

      var _super28 = _createSuper(RefCountSubscriber);

      function RefCountSubscriber(destination, connectable) {
        var _this32;

        _classCallCheck(this, RefCountSubscriber);

        _this32 = _super28.call(this, destination);
        _this32.connectable = connectable;
        return _this32;
      }

      _createClass(RefCountSubscriber, [{
        key: "_unsubscribe",
        value: function _unsubscribe() {
          var connectable = this.connectable;

          if (!connectable) {
            this.connection = null;
            return;
          }

          this.connectable = null;
          var refCount = connectable._refCount;

          if (refCount <= 0) {
            this.connection = null;
            return;
          }

          connectable._refCount = refCount - 1;

          if (refCount > 1) {
            this.connection = null;
            return;
          }

          var connection = this.connection;
          var sharedConnection = connectable._connection;
          this.connection = null;

          if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
          }
        }
      }]);

      return RefCountSubscriber;
    }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=refCount.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/scheduled/scheduleArray.js":
  /*!******************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/scheduled/scheduleArray.js ***!
    \******************************************************************************************/

  /*! exports provided: scheduleArray */

  /***/
  function node_modulesRxjs_esm2015InternalScheduledScheduleArrayJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scheduleArray", function () {
      return scheduleArray;
    });
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Observable */
    "../../../node_modules/rxjs/_esm2015/internal/Observable.js");
    /* harmony import */


    var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../Subscription */
    "../../../node_modules/rxjs/_esm2015/internal/Subscription.js");

    function scheduleArray(input, scheduler) {
      return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        var i = 0;
        sub.add(scheduler.schedule(function () {
          if (i === input.length) {
            subscriber.complete();
            return;
          }

          subscriber.next(input[i++]);

          if (!subscriber.closed) {
            sub.add(this.schedule());
          }
        }));
        return sub;
      });
    } //# sourceMappingURL=scheduleArray.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/scheduled/scheduleIterable.js":
  /*!*********************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/scheduled/scheduleIterable.js ***!
    \*********************************************************************************************/

  /*! exports provided: scheduleIterable */

  /***/
  function node_modulesRxjs_esm2015InternalScheduledScheduleIterableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scheduleIterable", function () {
      return scheduleIterable;
    });
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Observable */
    "../../../node_modules/rxjs/_esm2015/internal/Observable.js");
    /* harmony import */


    var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../Subscription */
    "../../../node_modules/rxjs/_esm2015/internal/Subscription.js");
    /* harmony import */


    var _symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../symbol/iterator */
    "../../../node_modules/rxjs/_esm2015/internal/symbol/iterator.js");

    function scheduleIterable(input, scheduler) {
      if (!input) {
        throw new Error('Iterable cannot be null');
      }

      return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        var iterator;
        sub.add(function () {
          if (iterator && typeof iterator["return"] === 'function') {
            iterator["return"]();
          }
        });
        sub.add(scheduler.schedule(function () {
          iterator = input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__["iterator"]]();
          sub.add(scheduler.schedule(function () {
            if (subscriber.closed) {
              return;
            }

            var value;
            var done;

            try {
              var result = iterator.next();
              value = result.value;
              done = result.done;
            } catch (err) {
              subscriber.error(err);
              return;
            }

            if (done) {
              subscriber.complete();
            } else {
              subscriber.next(value);
              this.schedule();
            }
          }));
        }));
        return sub;
      });
    } //# sourceMappingURL=scheduleIterable.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/scheduled/scheduleObservable.js":
  /*!***********************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/scheduled/scheduleObservable.js ***!
    \***********************************************************************************************/

  /*! exports provided: scheduleObservable */

  /***/
  function node_modulesRxjs_esm2015InternalScheduledScheduleObservableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scheduleObservable", function () {
      return scheduleObservable;
    });
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Observable */
    "../../../node_modules/rxjs/_esm2015/internal/Observable.js");
    /* harmony import */


    var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../Subscription */
    "../../../node_modules/rxjs/_esm2015/internal/Subscription.js");
    /* harmony import */


    var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../symbol/observable */
    "../../../node_modules/rxjs/_esm2015/internal/symbol/observable.js");

    function scheduleObservable(input, scheduler) {
      return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        sub.add(scheduler.schedule(function () {
          var observable = input[_symbol_observable__WEBPACK_IMPORTED_MODULE_2__["observable"]]();

          sub.add(observable.subscribe({
            next: function next(value) {
              sub.add(scheduler.schedule(function () {
                return subscriber.next(value);
              }));
            },
            error: function error(err) {
              sub.add(scheduler.schedule(function () {
                return subscriber.error(err);
              }));
            },
            complete: function complete() {
              sub.add(scheduler.schedule(function () {
                return subscriber.complete();
              }));
            }
          }));
        }));
        return sub;
      });
    } //# sourceMappingURL=scheduleObservable.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/scheduled/schedulePromise.js":
  /*!********************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/scheduled/schedulePromise.js ***!
    \********************************************************************************************/

  /*! exports provided: schedulePromise */

  /***/
  function node_modulesRxjs_esm2015InternalScheduledSchedulePromiseJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "schedulePromise", function () {
      return schedulePromise;
    });
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Observable */
    "../../../node_modules/rxjs/_esm2015/internal/Observable.js");
    /* harmony import */


    var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../Subscription */
    "../../../node_modules/rxjs/_esm2015/internal/Subscription.js");

    function schedulePromise(input, scheduler) {
      return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        sub.add(scheduler.schedule(function () {
          return input.then(function (value) {
            sub.add(scheduler.schedule(function () {
              subscriber.next(value);
              sub.add(scheduler.schedule(function () {
                return subscriber.complete();
              }));
            }));
          }, function (err) {
            sub.add(scheduler.schedule(function () {
              return subscriber.error(err);
            }));
          });
        }));
        return sub;
      });
    } //# sourceMappingURL=schedulePromise.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/scheduled/scheduled.js":
  /*!**************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/scheduled/scheduled.js ***!
    \**************************************************************************************/

  /*! exports provided: scheduled */

  /***/
  function node_modulesRxjs_esm2015InternalScheduledScheduledJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scheduled", function () {
      return scheduled;
    });
    /* harmony import */


    var _scheduleObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./scheduleObservable */
    "../../../node_modules/rxjs/_esm2015/internal/scheduled/scheduleObservable.js");
    /* harmony import */


    var _schedulePromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./schedulePromise */
    "../../../node_modules/rxjs/_esm2015/internal/scheduled/schedulePromise.js");
    /* harmony import */


    var _scheduleArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./scheduleArray */
    "../../../node_modules/rxjs/_esm2015/internal/scheduled/scheduleArray.js");
    /* harmony import */


    var _scheduleIterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./scheduleIterable */
    "../../../node_modules/rxjs/_esm2015/internal/scheduled/scheduleIterable.js");
    /* harmony import */


    var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../util/isInteropObservable */
    "../../../node_modules/rxjs/_esm2015/internal/util/isInteropObservable.js");
    /* harmony import */


    var _util_isPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../util/isPromise */
    "../../../node_modules/rxjs/_esm2015/internal/util/isPromise.js");
    /* harmony import */


    var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../util/isArrayLike */
    "../../../node_modules/rxjs/_esm2015/internal/util/isArrayLike.js");
    /* harmony import */


    var _util_isIterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../util/isIterable */
    "../../../node_modules/rxjs/_esm2015/internal/util/isIterable.js");

    function scheduled(input, scheduler) {
      if (input != null) {
        if (Object(_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_4__["isInteropObservable"])(input)) {
          return Object(_scheduleObservable__WEBPACK_IMPORTED_MODULE_0__["scheduleObservable"])(input, scheduler);
        } else if (Object(_util_isPromise__WEBPACK_IMPORTED_MODULE_5__["isPromise"])(input)) {
          return Object(_schedulePromise__WEBPACK_IMPORTED_MODULE_1__["schedulePromise"])(input, scheduler);
        } else if (Object(_util_isArrayLike__WEBPACK_IMPORTED_MODULE_6__["isArrayLike"])(input)) {
          return Object(_scheduleArray__WEBPACK_IMPORTED_MODULE_2__["scheduleArray"])(input, scheduler);
        } else if (Object(_util_isIterable__WEBPACK_IMPORTED_MODULE_7__["isIterable"])(input) || typeof input === 'string') {
          return Object(_scheduleIterable__WEBPACK_IMPORTED_MODULE_3__["scheduleIterable"])(input, scheduler);
        }
      }

      throw new TypeError((input !== null && typeof input || input) + ' is not observable');
    } //# sourceMappingURL=scheduled.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/scheduler/Action.js":
  /*!***********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/scheduler/Action.js ***!
    \***********************************************************************************/

  /*! exports provided: Action */

  /***/
  function node_modulesRxjs_esm2015InternalSchedulerActionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Action", function () {
      return Action;
    });
    /* harmony import */


    var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Subscription */
    "../../../node_modules/rxjs/_esm2015/internal/Subscription.js");

    var Action = /*#__PURE__*/function (_Subscription__WEBPAC4) {
      _inherits(Action, _Subscription__WEBPAC4);

      var _super29 = _createSuper(Action);

      function Action(scheduler, work) {
        _classCallCheck(this, Action);

        return _super29.call(this);
      }

      _createClass(Action, [{
        key: "schedule",
        value: function schedule(state) {
          var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          return this;
        }
      }]);

      return Action;
    }(_Subscription__WEBPACK_IMPORTED_MODULE_0__["Subscription"]); //# sourceMappingURL=Action.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameAction.js":
  /*!*************************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameAction.js ***!
    \*************************************************************************************************/

  /*! exports provided: AnimationFrameAction */

  /***/
  function node_modulesRxjs_esm2015InternalSchedulerAnimationFrameActionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimationFrameAction", function () {
      return AnimationFrameAction;
    });
    /* harmony import */


    var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./AsyncAction */
    "../../../node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js");

    var AnimationFrameAction = /*#__PURE__*/function (_AsyncAction__WEBPACK) {
      _inherits(AnimationFrameAction, _AsyncAction__WEBPACK);

      var _super30 = _createSuper(AnimationFrameAction);

      function AnimationFrameAction(scheduler, work) {
        var _this33;

        _classCallCheck(this, AnimationFrameAction);

        _this33 = _super30.call(this, scheduler, work);
        _this33.scheduler = scheduler;
        _this33.work = work;
        return _this33;
      }

      _createClass(AnimationFrameAction, [{
        key: "requestAsyncId",
        value: function requestAsyncId(scheduler, id) {
          var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

          if (delay !== null && delay > 0) {
            return _get(_getPrototypeOf(AnimationFrameAction.prototype), "requestAsyncId", this).call(this, scheduler, id, delay);
          }

          scheduler.actions.push(this);
          return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () {
            return scheduler.flush(null);
          }));
        }
      }, {
        key: "recycleAsyncId",
        value: function recycleAsyncId(scheduler, id) {
          var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

          if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
            return _get(_getPrototypeOf(AnimationFrameAction.prototype), "recycleAsyncId", this).call(this, scheduler, id, delay);
          }

          if (scheduler.actions.length === 0) {
            cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
          }

          return undefined;
        }
      }]);

      return AnimationFrameAction;
    }(_AsyncAction__WEBPACK_IMPORTED_MODULE_0__["AsyncAction"]); //# sourceMappingURL=AnimationFrameAction.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameScheduler.js":
  /*!****************************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameScheduler.js ***!
    \****************************************************************************************************/

  /*! exports provided: AnimationFrameScheduler */

  /***/
  function node_modulesRxjs_esm2015InternalSchedulerAnimationFrameSchedulerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimationFrameScheduler", function () {
      return AnimationFrameScheduler;
    });
    /* harmony import */


    var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./AsyncScheduler */
    "../../../node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js");

    var AnimationFrameScheduler = /*#__PURE__*/function (_AsyncScheduler__WEBP) {
      _inherits(AnimationFrameScheduler, _AsyncScheduler__WEBP);

      var _super31 = _createSuper(AnimationFrameScheduler);

      function AnimationFrameScheduler() {
        _classCallCheck(this, AnimationFrameScheduler);

        return _super31.apply(this, arguments);
      }

      _createClass(AnimationFrameScheduler, [{
        key: "flush",
        value: function flush(action) {
          this.active = true;
          this.scheduled = undefined;
          var actions = this.actions;
          var error;
          var index = -1;
          var count = actions.length;
          action = action || actions.shift();

          do {
            if (error = action.execute(action.state, action.delay)) {
              break;
            }
          } while (++index < count && (action = actions.shift()));

          this.active = false;

          if (error) {
            while (++index < count && (action = actions.shift())) {
              action.unsubscribe();
            }

            throw error;
          }
        }
      }]);

      return AnimationFrameScheduler;
    }(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__["AsyncScheduler"]); //# sourceMappingURL=AnimationFrameScheduler.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/scheduler/AsapAction.js":
  /*!***************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/scheduler/AsapAction.js ***!
    \***************************************************************************************/

  /*! exports provided: AsapAction */

  /***/
  function node_modulesRxjs_esm2015InternalSchedulerAsapActionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsapAction", function () {
      return AsapAction;
    });
    /* harmony import */


    var _util_Immediate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../util/Immediate */
    "../../../node_modules/rxjs/_esm2015/internal/util/Immediate.js");
    /* harmony import */


    var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./AsyncAction */
    "../../../node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js");

    var AsapAction = /*#__PURE__*/function (_AsyncAction__WEBPACK2) {
      _inherits(AsapAction, _AsyncAction__WEBPACK2);

      var _super32 = _createSuper(AsapAction);

      function AsapAction(scheduler, work) {
        var _this34;

        _classCallCheck(this, AsapAction);

        _this34 = _super32.call(this, scheduler, work);
        _this34.scheduler = scheduler;
        _this34.work = work;
        return _this34;
      }

      _createClass(AsapAction, [{
        key: "requestAsyncId",
        value: function requestAsyncId(scheduler, id) {
          var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

          if (delay !== null && delay > 0) {
            return _get(_getPrototypeOf(AsapAction.prototype), "requestAsyncId", this).call(this, scheduler, id, delay);
          }

          scheduler.actions.push(this);
          return scheduler.scheduled || (scheduler.scheduled = _util_Immediate__WEBPACK_IMPORTED_MODULE_0__["Immediate"].setImmediate(scheduler.flush.bind(scheduler, null)));
        }
      }, {
        key: "recycleAsyncId",
        value: function recycleAsyncId(scheduler, id) {
          var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

          if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
            return _get(_getPrototypeOf(AsapAction.prototype), "recycleAsyncId", this).call(this, scheduler, id, delay);
          }

          if (scheduler.actions.length === 0) {
            _util_Immediate__WEBPACK_IMPORTED_MODULE_0__["Immediate"].clearImmediate(id);

            scheduler.scheduled = undefined;
          }

          return undefined;
        }
      }]);

      return AsapAction;
    }(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__["AsyncAction"]); //# sourceMappingURL=AsapAction.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/scheduler/AsapScheduler.js":
  /*!******************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/scheduler/AsapScheduler.js ***!
    \******************************************************************************************/

  /*! exports provided: AsapScheduler */

  /***/
  function node_modulesRxjs_esm2015InternalSchedulerAsapSchedulerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsapScheduler", function () {
      return AsapScheduler;
    });
    /* harmony import */


    var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./AsyncScheduler */
    "../../../node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js");

    var AsapScheduler = /*#__PURE__*/function (_AsyncScheduler__WEBP2) {
      _inherits(AsapScheduler, _AsyncScheduler__WEBP2);

      var _super33 = _createSuper(AsapScheduler);

      function AsapScheduler() {
        _classCallCheck(this, AsapScheduler);

        return _super33.apply(this, arguments);
      }

      _createClass(AsapScheduler, [{
        key: "flush",
        value: function flush(action) {
          this.active = true;
          this.scheduled = undefined;
          var actions = this.actions;
          var error;
          var index = -1;
          var count = actions.length;
          action = action || actions.shift();

          do {
            if (error = action.execute(action.state, action.delay)) {
              break;
            }
          } while (++index < count && (action = actions.shift()));

          this.active = false;

          if (error) {
            while (++index < count && (action = actions.shift())) {
              action.unsubscribe();
            }

            throw error;
          }
        }
      }]);

      return AsapScheduler;
    }(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__["AsyncScheduler"]); //# sourceMappingURL=AsapScheduler.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js":
  /*!****************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js ***!
    \****************************************************************************************/

  /*! exports provided: AsyncAction */

  /***/
  function node_modulesRxjs_esm2015InternalSchedulerAsyncActionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsyncAction", function () {
      return AsyncAction;
    });
    /* harmony import */


    var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Action */
    "../../../node_modules/rxjs/_esm2015/internal/scheduler/Action.js");

    var AsyncAction = /*#__PURE__*/function (_Action__WEBPACK_IMPO) {
      _inherits(AsyncAction, _Action__WEBPACK_IMPO);

      var _super34 = _createSuper(AsyncAction);

      function AsyncAction(scheduler, work) {
        var _this35;

        _classCallCheck(this, AsyncAction);

        _this35 = _super34.call(this, scheduler, work);
        _this35.scheduler = scheduler;
        _this35.work = work;
        _this35.pending = false;
        return _this35;
      }

      _createClass(AsyncAction, [{
        key: "schedule",
        value: function schedule(state) {
          var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

          if (this.closed) {
            return this;
          }

          this.state = state;
          var id = this.id;
          var scheduler = this.scheduler;

          if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
          }

          this.pending = true;
          this.delay = delay;
          this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
          return this;
        }
      }, {
        key: "requestAsyncId",
        value: function requestAsyncId(scheduler, id) {
          var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          return setInterval(scheduler.flush.bind(scheduler, this), delay);
        }
      }, {
        key: "recycleAsyncId",
        value: function recycleAsyncId(scheduler, id) {
          var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

          if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
          }

          clearInterval(id);
          return undefined;
        }
      }, {
        key: "execute",
        value: function execute(state, delay) {
          if (this.closed) {
            return new Error('executing a cancelled action');
          }

          this.pending = false;

          var error = this._execute(state, delay);

          if (error) {
            return error;
          } else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
          }
        }
      }, {
        key: "_execute",
        value: function _execute(state, delay) {
          var errored = false;
          var errorValue = undefined;

          try {
            this.work(state);
          } catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
          }

          if (errored) {
            this.unsubscribe();
            return errorValue;
          }
        }
      }, {
        key: "_unsubscribe",
        value: function _unsubscribe() {
          var id = this.id;
          var scheduler = this.scheduler;
          var actions = scheduler.actions;
          var index = actions.indexOf(this);
          this.work = null;
          this.state = null;
          this.pending = false;
          this.scheduler = null;

          if (index !== -1) {
            actions.splice(index, 1);
          }

          if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
          }

          this.delay = null;
        }
      }]);

      return AsyncAction;
    }(_Action__WEBPACK_IMPORTED_MODULE_0__["Action"]); //# sourceMappingURL=AsyncAction.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js":
  /*!*******************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js ***!
    \*******************************************************************************************/

  /*! exports provided: AsyncScheduler */

  /***/
  function node_modulesRxjs_esm2015InternalSchedulerAsyncSchedulerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsyncScheduler", function () {
      return AsyncScheduler;
    });
    /* harmony import */


    var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Scheduler */
    "../../../node_modules/rxjs/_esm2015/internal/Scheduler.js");

    var AsyncScheduler = /*#__PURE__*/function (_Scheduler__WEBPACK_I) {
      _inherits(AsyncScheduler, _Scheduler__WEBPACK_I);

      var _super35 = _createSuper(AsyncScheduler);

      function AsyncScheduler(SchedulerAction) {
        var _this36;

        var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Scheduler__WEBPACK_IMPORTED_MODULE_0__["Scheduler"].now;

        _classCallCheck(this, AsyncScheduler);

        _this36 = _super35.call(this, SchedulerAction, function () {
          if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _assertThisInitialized(_this36)) {
            return AsyncScheduler.delegate.now();
          } else {
            return now();
          }
        });
        _this36.actions = [];
        _this36.active = false;
        _this36.scheduled = undefined;
        return _this36;
      }

      _createClass(AsyncScheduler, [{
        key: "schedule",
        value: function schedule(work) {
          var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var state = arguments.length > 2 ? arguments[2] : undefined;

          if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
          } else {
            return _get(_getPrototypeOf(AsyncScheduler.prototype), "schedule", this).call(this, work, delay, state);
          }
        }
      }, {
        key: "flush",
        value: function flush(action) {
          var actions = this.actions;

          if (this.active) {
            actions.push(action);
            return;
          }

          var error;
          this.active = true;

          do {
            if (error = action.execute(action.state, action.delay)) {
              break;
            }
          } while (action = actions.shift());

          this.active = false;

          if (error) {
            while (action = actions.shift()) {
              action.unsubscribe();
            }

            throw error;
          }
        }
      }]);

      return AsyncScheduler;
    }(_Scheduler__WEBPACK_IMPORTED_MODULE_0__["Scheduler"]); //# sourceMappingURL=AsyncScheduler.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/scheduler/QueueAction.js":
  /*!****************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/scheduler/QueueAction.js ***!
    \****************************************************************************************/

  /*! exports provided: QueueAction */

  /***/
  function node_modulesRxjs_esm2015InternalSchedulerQueueActionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QueueAction", function () {
      return QueueAction;
    });
    /* harmony import */


    var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./AsyncAction */
    "../../../node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js");

    var QueueAction = /*#__PURE__*/function (_AsyncAction__WEBPACK3) {
      _inherits(QueueAction, _AsyncAction__WEBPACK3);

      var _super36 = _createSuper(QueueAction);

      function QueueAction(scheduler, work) {
        var _this37;

        _classCallCheck(this, QueueAction);

        _this37 = _super36.call(this, scheduler, work);
        _this37.scheduler = scheduler;
        _this37.work = work;
        return _this37;
      }

      _createClass(QueueAction, [{
        key: "schedule",
        value: function schedule(state) {
          var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

          if (delay > 0) {
            return _get(_getPrototypeOf(QueueAction.prototype), "schedule", this).call(this, state, delay);
          }

          this.delay = delay;
          this.state = state;
          this.scheduler.flush(this);
          return this;
        }
      }, {
        key: "execute",
        value: function execute(state, delay) {
          return delay > 0 || this.closed ? _get(_getPrototypeOf(QueueAction.prototype), "execute", this).call(this, state, delay) : this._execute(state, delay);
        }
      }, {
        key: "requestAsyncId",
        value: function requestAsyncId(scheduler, id) {
          var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

          if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
            return _get(_getPrototypeOf(QueueAction.prototype), "requestAsyncId", this).call(this, scheduler, id, delay);
          }

          return scheduler.flush(this);
        }
      }]);

      return QueueAction;
    }(_AsyncAction__WEBPACK_IMPORTED_MODULE_0__["AsyncAction"]); //# sourceMappingURL=QueueAction.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/scheduler/QueueScheduler.js":
  /*!*******************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/scheduler/QueueScheduler.js ***!
    \*******************************************************************************************/

  /*! exports provided: QueueScheduler */

  /***/
  function node_modulesRxjs_esm2015InternalSchedulerQueueSchedulerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QueueScheduler", function () {
      return QueueScheduler;
    });
    /* harmony import */


    var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./AsyncScheduler */
    "../../../node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js");

    var QueueScheduler = /*#__PURE__*/function (_AsyncScheduler__WEBP3) {
      _inherits(QueueScheduler, _AsyncScheduler__WEBP3);

      var _super37 = _createSuper(QueueScheduler);

      function QueueScheduler() {
        _classCallCheck(this, QueueScheduler);

        return _super37.apply(this, arguments);
      }

      return QueueScheduler;
    }(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__["AsyncScheduler"]); //# sourceMappingURL=QueueScheduler.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/scheduler/VirtualTimeScheduler.js":
  /*!*************************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/scheduler/VirtualTimeScheduler.js ***!
    \*************************************************************************************************/

  /*! exports provided: VirtualTimeScheduler, VirtualAction */

  /***/
  function node_modulesRxjs_esm2015InternalSchedulerVirtualTimeSchedulerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VirtualTimeScheduler", function () {
      return VirtualTimeScheduler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VirtualAction", function () {
      return VirtualAction;
    });
    /* harmony import */


    var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./AsyncAction */
    "../../../node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js");
    /* harmony import */


    var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./AsyncScheduler */
    "../../../node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js");

    var VirtualTimeScheduler = /*#__PURE__*/function (_AsyncScheduler__WEBP4) {
      _inherits(VirtualTimeScheduler, _AsyncScheduler__WEBP4);

      var _super38 = _createSuper(VirtualTimeScheduler);

      function VirtualTimeScheduler() {
        var _this38;

        var SchedulerAction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : VirtualAction;
        var maxFrames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.POSITIVE_INFINITY;

        _classCallCheck(this, VirtualTimeScheduler);

        _this38 = _super38.call(this, SchedulerAction, function () {
          return _this38.frame;
        });
        _this38.maxFrames = maxFrames;
        _this38.frame = 0;
        _this38.index = -1;
        return _this38;
      }

      _createClass(VirtualTimeScheduler, [{
        key: "flush",
        value: function flush() {
          var actions = this.actions,
              maxFrames = this.maxFrames;
          var error, action;

          while ((action = actions[0]) && action.delay <= maxFrames) {
            actions.shift();
            this.frame = action.delay;

            if (error = action.execute(action.state, action.delay)) {
              break;
            }
          }

          if (error) {
            while (action = actions.shift()) {
              action.unsubscribe();
            }

            throw error;
          }
        }
      }]);

      return VirtualTimeScheduler;
    }(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"]);

    VirtualTimeScheduler.frameTimeFactor = 10;

    var VirtualAction = /*#__PURE__*/function (_AsyncAction__WEBPACK4) {
      _inherits(VirtualAction, _AsyncAction__WEBPACK4);

      var _super39 = _createSuper(VirtualAction);

      function VirtualAction(scheduler, work) {
        var _this39;

        var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : scheduler.index += 1;

        _classCallCheck(this, VirtualAction);

        _this39 = _super39.call(this, scheduler, work);
        _this39.scheduler = scheduler;
        _this39.work = work;
        _this39.index = index;
        _this39.active = true;
        _this39.index = scheduler.index = index;
        return _this39;
      }

      _createClass(VirtualAction, [{
        key: "schedule",
        value: function schedule(state) {
          var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

          if (!this.id) {
            return _get(_getPrototypeOf(VirtualAction.prototype), "schedule", this).call(this, state, delay);
          }

          this.active = false;
          var action = new VirtualAction(this.scheduler, this.work);
          this.add(action);
          return action.schedule(state, delay);
        }
      }, {
        key: "requestAsyncId",
        value: function requestAsyncId(scheduler, id) {
          var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          this.delay = scheduler.frame + delay;
          var actions = scheduler.actions;
          actions.push(this);
          actions.sort(VirtualAction.sortActions);
          return true;
        }
      }, {
        key: "recycleAsyncId",
        value: function recycleAsyncId(scheduler, id) {
          var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          return undefined;
        }
      }, {
        key: "_execute",
        value: function _execute(state, delay) {
          if (this.active === true) {
            return _get(_getPrototypeOf(VirtualAction.prototype), "_execute", this).call(this, state, delay);
          }
        }
      }], [{
        key: "sortActions",
        value: function sortActions(a, b) {
          if (a.delay === b.delay) {
            if (a.index === b.index) {
              return 0;
            } else if (a.index > b.index) {
              return 1;
            } else {
              return -1;
            }
          } else if (a.delay > b.delay) {
            return 1;
          } else {
            return -1;
          }
        }
      }]);

      return VirtualAction;
    }(_AsyncAction__WEBPACK_IMPORTED_MODULE_0__["AsyncAction"]); //# sourceMappingURL=VirtualTimeScheduler.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/scheduler/animationFrame.js":
  /*!*******************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/scheduler/animationFrame.js ***!
    \*******************************************************************************************/

  /*! exports provided: animationFrame */

  /***/
  function node_modulesRxjs_esm2015InternalSchedulerAnimationFrameJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "animationFrame", function () {
      return animationFrame;
    });
    /* harmony import */


    var _AnimationFrameAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./AnimationFrameAction */
    "../../../node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameAction.js");
    /* harmony import */


    var _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./AnimationFrameScheduler */
    "../../../node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameScheduler.js");

    var animationFrame = new _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_1__["AnimationFrameScheduler"](_AnimationFrameAction__WEBPACK_IMPORTED_MODULE_0__["AnimationFrameAction"]); //# sourceMappingURL=animationFrame.js.map

    /***/
  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/scheduler/asap.js":
  /*!*********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/scheduler/asap.js ***!
    \*********************************************************************************/

  /*! exports provided: asap */

  /***/
  function node_modulesRxjs_esm2015InternalSchedulerAsapJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "asap", function () {
      return asap;
    });
    /* harmony import */


    var _AsapAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./AsapAction */
    "../../../node_modules/rxjs/_esm2015/internal/scheduler/AsapAction.js");
    /* harmony import */


    var _AsapScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./AsapScheduler */
    "../../../node_modules/rxjs/_esm2015/internal/scheduler/AsapScheduler.js");

    var asap = new _AsapScheduler__WEBPACK_IMPORTED_MODULE_1__["AsapScheduler"](_AsapAction__WEBPACK_IMPORTED_MODULE_0__["AsapAction"]); //# sourceMappingURL=asap.js.map

    /***/
  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/scheduler/async.js":
  /*!**********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/scheduler/async.js ***!
    \**********************************************************************************/

  /*! exports provided: async */

  /***/
  function node_modulesRxjs_esm2015InternalSchedulerAsyncJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "async", function () {
      return async;
    });
    /* harmony import */


    var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./AsyncAction */
    "../../../node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js");
    /* harmony import */


    var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./AsyncScheduler */
    "../../../node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js");

    var async = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"](_AsyncAction__WEBPACK_IMPORTED_MODULE_0__["AsyncAction"]); //# sourceMappingURL=async.js.map

    /***/
  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/scheduler/queue.js":
  /*!**********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/scheduler/queue.js ***!
    \**********************************************************************************/

  /*! exports provided: queue */

  /***/
  function node_modulesRxjs_esm2015InternalSchedulerQueueJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "queue", function () {
      return queue;
    });
    /* harmony import */


    var _QueueAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./QueueAction */
    "../../../node_modules/rxjs/_esm2015/internal/scheduler/QueueAction.js");
    /* harmony import */


    var _QueueScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./QueueScheduler */
    "../../../node_modules/rxjs/_esm2015/internal/scheduler/QueueScheduler.js");

    var queue = new _QueueScheduler__WEBPACK_IMPORTED_MODULE_1__["QueueScheduler"](_QueueAction__WEBPACK_IMPORTED_MODULE_0__["QueueAction"]); //# sourceMappingURL=queue.js.map

    /***/
  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/symbol/iterator.js":
  /*!**********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/symbol/iterator.js ***!
    \**********************************************************************************/

  /*! exports provided: getSymbolIterator, iterator, $$iterator */

  /***/
  function node_modulesRxjs_esm2015InternalSymbolIteratorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getSymbolIterator", function () {
      return getSymbolIterator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "iterator", function () {
      return iterator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "$$iterator", function () {
      return $$iterator;
    });

    function getSymbolIterator() {
      if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
      }

      return Symbol.iterator;
    }

    var iterator = getSymbolIterator();
    var $$iterator = iterator; //# sourceMappingURL=iterator.js.map

    /***/
  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/symbol/observable.js":
  /*!************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/symbol/observable.js ***!
    \************************************************************************************/

  /*! exports provided: observable */

  /***/
  function node_modulesRxjs_esm2015InternalSymbolObservableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "observable", function () {
      return observable;
    });

    var observable = function () {
      return typeof Symbol === 'function' && Symbol.observable || '@@observable';
    }(); //# sourceMappingURL=observable.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/symbol/rxSubscriber.js":
  /*!**************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/symbol/rxSubscriber.js ***!
    \**************************************************************************************/

  /*! exports provided: rxSubscriber, $$rxSubscriber */

  /***/
  function node_modulesRxjs_esm2015InternalSymbolRxSubscriberJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "rxSubscriber", function () {
      return rxSubscriber;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "$$rxSubscriber", function () {
      return $$rxSubscriber;
    });

    var rxSubscriber = function () {
      return typeof Symbol === 'function' ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
    }();

    var $$rxSubscriber = rxSubscriber; //# sourceMappingURL=rxSubscriber.js.map

    /***/
  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/util/ArgumentOutOfRangeError.js":
  /*!***********************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/util/ArgumentOutOfRangeError.js ***!
    \***********************************************************************************************/

  /*! exports provided: ArgumentOutOfRangeError */

  /***/
  function node_modulesRxjs_esm2015InternalUtilArgumentOutOfRangeErrorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArgumentOutOfRangeError", function () {
      return ArgumentOutOfRangeError;
    });

    var ArgumentOutOfRangeErrorImpl = function () {
      function ArgumentOutOfRangeErrorImpl() {
        Error.call(this);
        this.message = 'argument out of range';
        this.name = 'ArgumentOutOfRangeError';
        return this;
      }

      ArgumentOutOfRangeErrorImpl.prototype = Object.create(Error.prototype);
      return ArgumentOutOfRangeErrorImpl;
    }();

    var ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl; //# sourceMappingURL=ArgumentOutOfRangeError.js.map

    /***/
  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/util/EmptyError.js":
  /*!**********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/util/EmptyError.js ***!
    \**********************************************************************************/

  /*! exports provided: EmptyError */

  /***/
  function node_modulesRxjs_esm2015InternalUtilEmptyErrorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmptyError", function () {
      return EmptyError;
    });

    var EmptyErrorImpl = function () {
      function EmptyErrorImpl() {
        Error.call(this);
        this.message = 'no elements in sequence';
        this.name = 'EmptyError';
        return this;
      }

      EmptyErrorImpl.prototype = Object.create(Error.prototype);
      return EmptyErrorImpl;
    }();

    var EmptyError = EmptyErrorImpl; //# sourceMappingURL=EmptyError.js.map

    /***/
  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/util/Immediate.js":
  /*!*********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/util/Immediate.js ***!
    \*********************************************************************************/

  /*! exports provided: Immediate, TestTools */

  /***/
  function node_modulesRxjs_esm2015InternalUtilImmediateJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Immediate", function () {
      return Immediate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestTools", function () {
      return TestTools;
    });

    var nextHandle = 1;

    var RESOLVED = function () {
      return Promise.resolve();
    }();

    var activeHandles = {};

    function findAndClearHandle(handle) {
      if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
      }

      return false;
    }

    var Immediate = {
      setImmediate: function setImmediate(cb) {
        var handle = nextHandle++;
        activeHandles[handle] = true;
        RESOLVED.then(function () {
          return findAndClearHandle(handle) && cb();
        });
        return handle;
      },
      clearImmediate: function clearImmediate(handle) {
        findAndClearHandle(handle);
      }
    };
    var TestTools = {
      pending: function pending() {
        return Object.keys(activeHandles).length;
      }
    }; //# sourceMappingURL=Immediate.js.map

    /***/
  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/util/ObjectUnsubscribedError.js":
  /*!***********************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/util/ObjectUnsubscribedError.js ***!
    \***********************************************************************************************/

  /*! exports provided: ObjectUnsubscribedError */

  /***/
  function node_modulesRxjs_esm2015InternalUtilObjectUnsubscribedErrorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObjectUnsubscribedError", function () {
      return ObjectUnsubscribedError;
    });

    var ObjectUnsubscribedErrorImpl = function () {
      function ObjectUnsubscribedErrorImpl() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
      }

      ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);
      return ObjectUnsubscribedErrorImpl;
    }();

    var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl; //# sourceMappingURL=ObjectUnsubscribedError.js.map

    /***/
  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/util/TimeoutError.js":
  /*!************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/util/TimeoutError.js ***!
    \************************************************************************************/

  /*! exports provided: TimeoutError */

  /***/
  function node_modulesRxjs_esm2015InternalUtilTimeoutErrorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimeoutError", function () {
      return TimeoutError;
    });

    var TimeoutErrorImpl = function () {
      function TimeoutErrorImpl() {
        Error.call(this);
        this.message = 'Timeout has occurred';
        this.name = 'TimeoutError';
        return this;
      }

      TimeoutErrorImpl.prototype = Object.create(Error.prototype);
      return TimeoutErrorImpl;
    }();

    var TimeoutError = TimeoutErrorImpl; //# sourceMappingURL=TimeoutError.js.map

    /***/
  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/util/UnsubscriptionError.js":
  /*!*******************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/util/UnsubscriptionError.js ***!
    \*******************************************************************************************/

  /*! exports provided: UnsubscriptionError */

  /***/
  function node_modulesRxjs_esm2015InternalUtilUnsubscriptionErrorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnsubscriptionError", function () {
      return UnsubscriptionError;
    });

    var UnsubscriptionErrorImpl = function () {
      function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ? "".concat(errors.length, " errors occurred during unsubscription:\n").concat(errors.map(function (err, i) {
          return "".concat(i + 1, ") ").concat(err.toString());
        }).join('\n  ')) : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
      }

      UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
      return UnsubscriptionErrorImpl;
    }();

    var UnsubscriptionError = UnsubscriptionErrorImpl; //# sourceMappingURL=UnsubscriptionError.js.map

    /***/
  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/util/canReportError.js":
  /*!**************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/util/canReportError.js ***!
    \**************************************************************************************/

  /*! exports provided: canReportError */

  /***/
  function node_modulesRxjs_esm2015InternalUtilCanReportErrorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "canReportError", function () {
      return canReportError;
    });
    /* harmony import */


    var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Subscriber */
    "../../../node_modules/rxjs/_esm2015/internal/Subscriber.js");

    function canReportError(observer) {
      while (observer) {
        var _observer = observer,
            closed = _observer.closed,
            destination = _observer.destination,
            isStopped = _observer.isStopped;

        if (closed || isStopped) {
          return false;
        } else if (destination && destination instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]) {
          observer = destination;
        } else {
          observer = null;
        }
      }

      return true;
    } //# sourceMappingURL=canReportError.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/util/hostReportError.js":
  /*!***************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/util/hostReportError.js ***!
    \***************************************************************************************/

  /*! exports provided: hostReportError */

  /***/
  function node_modulesRxjs_esm2015InternalUtilHostReportErrorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hostReportError", function () {
      return hostReportError;
    });

    function hostReportError(err) {
      setTimeout(function () {
        throw err;
      }, 0);
    } //# sourceMappingURL=hostReportError.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/util/identity.js":
  /*!********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/util/identity.js ***!
    \********************************************************************************/

  /*! exports provided: identity */

  /***/
  function node_modulesRxjs_esm2015InternalUtilIdentityJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "identity", function () {
      return identity;
    });

    function identity(x) {
      return x;
    } //# sourceMappingURL=identity.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/util/isArray.js":
  /*!*******************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/util/isArray.js ***!
    \*******************************************************************************/

  /*! exports provided: isArray */

  /***/
  function node_modulesRxjs_esm2015InternalUtilIsArrayJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isArray", function () {
      return isArray;
    });

    var isArray = function () {
      return Array.isArray || function (x) {
        return x && typeof x.length === 'number';
      };
    }(); //# sourceMappingURL=isArray.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/util/isArrayLike.js":
  /*!***********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/util/isArrayLike.js ***!
    \***********************************************************************************/

  /*! exports provided: isArrayLike */

  /***/
  function node_modulesRxjs_esm2015InternalUtilIsArrayLikeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isArrayLike", function () {
      return isArrayLike;
    });

    var isArrayLike = function isArrayLike(x) {
      return x && typeof x.length === 'number' && typeof x !== 'function';
    }; //# sourceMappingURL=isArrayLike.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/util/isFunction.js":
  /*!**********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/util/isFunction.js ***!
    \**********************************************************************************/

  /*! exports provided: isFunction */

  /***/
  function node_modulesRxjs_esm2015InternalUtilIsFunctionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isFunction", function () {
      return isFunction;
    });

    function isFunction(x) {
      return typeof x === 'function';
    } //# sourceMappingURL=isFunction.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/util/isInteropObservable.js":
  /*!*******************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/util/isInteropObservable.js ***!
    \*******************************************************************************************/

  /*! exports provided: isInteropObservable */

  /***/
  function node_modulesRxjs_esm2015InternalUtilIsInteropObservableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isInteropObservable", function () {
      return isInteropObservable;
    });
    /* harmony import */


    var _symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../symbol/observable */
    "../../../node_modules/rxjs/_esm2015/internal/symbol/observable.js");

    function isInteropObservable(input) {
      return input && typeof input[_symbol_observable__WEBPACK_IMPORTED_MODULE_0__["observable"]] === 'function';
    } //# sourceMappingURL=isInteropObservable.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/util/isIterable.js":
  /*!**********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/util/isIterable.js ***!
    \**********************************************************************************/

  /*! exports provided: isIterable */

  /***/
  function node_modulesRxjs_esm2015InternalUtilIsIterableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isIterable", function () {
      return isIterable;
    });
    /* harmony import */


    var _symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../symbol/iterator */
    "../../../node_modules/rxjs/_esm2015/internal/symbol/iterator.js");

    function isIterable(input) {
      return input && typeof input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__["iterator"]] === 'function';
    } //# sourceMappingURL=isIterable.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/util/isNumeric.js":
  /*!*********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/util/isNumeric.js ***!
    \*********************************************************************************/

  /*! exports provided: isNumeric */

  /***/
  function node_modulesRxjs_esm2015InternalUtilIsNumericJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isNumeric", function () {
      return isNumeric;
    });
    /* harmony import */


    var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./isArray */
    "../../../node_modules/rxjs/_esm2015/internal/util/isArray.js");

    function isNumeric(val) {
      return !Object(_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(val) && val - parseFloat(val) + 1 >= 0;
    } //# sourceMappingURL=isNumeric.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/util/isObject.js":
  /*!********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/util/isObject.js ***!
    \********************************************************************************/

  /*! exports provided: isObject */

  /***/
  function node_modulesRxjs_esm2015InternalUtilIsObjectJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isObject", function () {
      return isObject;
    });

    function isObject(x) {
      return x !== null && typeof x === 'object';
    } //# sourceMappingURL=isObject.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/util/isObservable.js":
  /*!************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/util/isObservable.js ***!
    \************************************************************************************/

  /*! exports provided: isObservable */

  /***/
  function node_modulesRxjs_esm2015InternalUtilIsObservableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isObservable", function () {
      return isObservable;
    });
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Observable */
    "../../../node_modules/rxjs/_esm2015/internal/Observable.js");

    function isObservable(obj) {
      return !!obj && (obj instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"] || typeof obj.lift === 'function' && typeof obj.subscribe === 'function');
    } //# sourceMappingURL=isObservable.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/util/isPromise.js":
  /*!*********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/util/isPromise.js ***!
    \*********************************************************************************/

  /*! exports provided: isPromise */

  /***/
  function node_modulesRxjs_esm2015InternalUtilIsPromiseJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isPromise", function () {
      return isPromise;
    });

    function isPromise(value) {
      return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
    } //# sourceMappingURL=isPromise.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/util/isScheduler.js":
  /*!***********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/util/isScheduler.js ***!
    \***********************************************************************************/

  /*! exports provided: isScheduler */

  /***/
  function node_modulesRxjs_esm2015InternalUtilIsSchedulerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isScheduler", function () {
      return isScheduler;
    });

    function isScheduler(value) {
      return value && typeof value.schedule === 'function';
    } //# sourceMappingURL=isScheduler.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/util/noop.js":
  /*!****************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/util/noop.js ***!
    \****************************************************************************/

  /*! exports provided: noop */

  /***/
  function node_modulesRxjs_esm2015InternalUtilNoopJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "noop", function () {
      return noop;
    });

    function noop() {} //# sourceMappingURL=noop.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/util/not.js":
  /*!***************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/util/not.js ***!
    \***************************************************************************/

  /*! exports provided: not */

  /***/
  function node_modulesRxjs_esm2015InternalUtilNotJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "not", function () {
      return not;
    });

    function not(pred, thisArg) {
      function notPred() {
        return !notPred.pred.apply(notPred.thisArg, arguments);
      }

      notPred.pred = pred;
      notPred.thisArg = thisArg;
      return notPred;
    } //# sourceMappingURL=not.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/util/pipe.js":
  /*!****************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/util/pipe.js ***!
    \****************************************************************************/

  /*! exports provided: pipe, pipeFromArray */

  /***/
  function node_modulesRxjs_esm2015InternalUtilPipeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pipe", function () {
      return pipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pipeFromArray", function () {
      return pipeFromArray;
    });
    /* harmony import */


    var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./identity */
    "../../../node_modules/rxjs/_esm2015/internal/util/identity.js");

    function pipe() {
      for (var _len16 = arguments.length, fns = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
        fns[_key16] = arguments[_key16];
      }

      return pipeFromArray(fns);
    }

    function pipeFromArray(fns) {
      if (fns.length === 0) {
        return _identity__WEBPACK_IMPORTED_MODULE_0__["identity"];
      }

      if (fns.length === 1) {
        return fns[0];
      }

      return function piped(input) {
        return fns.reduce(function (prev, fn) {
          return fn(prev);
        }, input);
      };
    } //# sourceMappingURL=pipe.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/util/subscribeTo.js":
  /*!***********************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/util/subscribeTo.js ***!
    \***********************************************************************************/

  /*! exports provided: subscribeTo */

  /***/
  function node_modulesRxjs_esm2015InternalUtilSubscribeToJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "subscribeTo", function () {
      return subscribeTo;
    });
    /* harmony import */


    var _subscribeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./subscribeToArray */
    "../../../node_modules/rxjs/_esm2015/internal/util/subscribeToArray.js");
    /* harmony import */


    var _subscribeToPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./subscribeToPromise */
    "../../../node_modules/rxjs/_esm2015/internal/util/subscribeToPromise.js");
    /* harmony import */


    var _subscribeToIterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./subscribeToIterable */
    "../../../node_modules/rxjs/_esm2015/internal/util/subscribeToIterable.js");
    /* harmony import */


    var _subscribeToObservable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./subscribeToObservable */
    "../../../node_modules/rxjs/_esm2015/internal/util/subscribeToObservable.js");
    /* harmony import */


    var _isArrayLike__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./isArrayLike */
    "../../../node_modules/rxjs/_esm2015/internal/util/isArrayLike.js");
    /* harmony import */


    var _isPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./isPromise */
    "../../../node_modules/rxjs/_esm2015/internal/util/isPromise.js");
    /* harmony import */


    var _isObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./isObject */
    "../../../node_modules/rxjs/_esm2015/internal/util/isObject.js");
    /* harmony import */


    var _symbol_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../symbol/iterator */
    "../../../node_modules/rxjs/_esm2015/internal/symbol/iterator.js");
    /* harmony import */


    var _symbol_observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../symbol/observable */
    "../../../node_modules/rxjs/_esm2015/internal/symbol/observable.js");

    var subscribeTo = function subscribeTo(result) {
      if (!!result && typeof result[_symbol_observable__WEBPACK_IMPORTED_MODULE_8__["observable"]] === 'function') {
        return Object(_subscribeToObservable__WEBPACK_IMPORTED_MODULE_3__["subscribeToObservable"])(result);
      } else if (Object(_isArrayLike__WEBPACK_IMPORTED_MODULE_4__["isArrayLike"])(result)) {
        return Object(_subscribeToArray__WEBPACK_IMPORTED_MODULE_0__["subscribeToArray"])(result);
      } else if (Object(_isPromise__WEBPACK_IMPORTED_MODULE_5__["isPromise"])(result)) {
        return Object(_subscribeToPromise__WEBPACK_IMPORTED_MODULE_1__["subscribeToPromise"])(result);
      } else if (!!result && typeof result[_symbol_iterator__WEBPACK_IMPORTED_MODULE_7__["iterator"]] === 'function') {
        return Object(_subscribeToIterable__WEBPACK_IMPORTED_MODULE_2__["subscribeToIterable"])(result);
      } else {
        var value = Object(_isObject__WEBPACK_IMPORTED_MODULE_6__["isObject"])(result) ? 'an invalid object' : "'".concat(result, "'");
        var msg = "You provided ".concat(value, " where a stream was expected.") + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
      }
    }; //# sourceMappingURL=subscribeTo.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/util/subscribeToArray.js":
  /*!****************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/util/subscribeToArray.js ***!
    \****************************************************************************************/

  /*! exports provided: subscribeToArray */

  /***/
  function node_modulesRxjs_esm2015InternalUtilSubscribeToArrayJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "subscribeToArray", function () {
      return subscribeToArray;
    });

    var subscribeToArray = function subscribeToArray(array) {
      return function (subscriber) {
        for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
          subscriber.next(array[i]);
        }

        subscriber.complete();
      };
    }; //# sourceMappingURL=subscribeToArray.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/util/subscribeToIterable.js":
  /*!*******************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/util/subscribeToIterable.js ***!
    \*******************************************************************************************/

  /*! exports provided: subscribeToIterable */

  /***/
  function node_modulesRxjs_esm2015InternalUtilSubscribeToIterableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "subscribeToIterable", function () {
      return subscribeToIterable;
    });
    /* harmony import */


    var _symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../symbol/iterator */
    "../../../node_modules/rxjs/_esm2015/internal/symbol/iterator.js");

    var subscribeToIterable = function subscribeToIterable(iterable) {
      return function (subscriber) {
        var iterator = iterable[_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__["iterator"]]();

        do {
          var item = iterator.next();

          if (item.done) {
            subscriber.complete();
            break;
          }

          subscriber.next(item.value);

          if (subscriber.closed) {
            break;
          }
        } while (true);

        if (typeof iterator["return"] === 'function') {
          subscriber.add(function () {
            if (iterator["return"]) {
              iterator["return"]();
            }
          });
        }

        return subscriber;
      };
    }; //# sourceMappingURL=subscribeToIterable.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/util/subscribeToObservable.js":
  /*!*********************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/util/subscribeToObservable.js ***!
    \*********************************************************************************************/

  /*! exports provided: subscribeToObservable */

  /***/
  function node_modulesRxjs_esm2015InternalUtilSubscribeToObservableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "subscribeToObservable", function () {
      return subscribeToObservable;
    });
    /* harmony import */


    var _symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../symbol/observable */
    "../../../node_modules/rxjs/_esm2015/internal/symbol/observable.js");

    var subscribeToObservable = function subscribeToObservable(obj) {
      return function (subscriber) {
        var obs = obj[_symbol_observable__WEBPACK_IMPORTED_MODULE_0__["observable"]]();

        if (typeof obs.subscribe !== 'function') {
          throw new TypeError('Provided object does not correctly implement Symbol.observable');
        } else {
          return obs.subscribe(subscriber);
        }
      };
    }; //# sourceMappingURL=subscribeToObservable.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/util/subscribeToPromise.js":
  /*!******************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/util/subscribeToPromise.js ***!
    \******************************************************************************************/

  /*! exports provided: subscribeToPromise */

  /***/
  function node_modulesRxjs_esm2015InternalUtilSubscribeToPromiseJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "subscribeToPromise", function () {
      return subscribeToPromise;
    });
    /* harmony import */


    var _hostReportError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./hostReportError */
    "../../../node_modules/rxjs/_esm2015/internal/util/hostReportError.js");

    var subscribeToPromise = function subscribeToPromise(promise) {
      return function (subscriber) {
        promise.then(function (value) {
          if (!subscriber.closed) {
            subscriber.next(value);
            subscriber.complete();
          }
        }, function (err) {
          return subscriber.error(err);
        }).then(null, _hostReportError__WEBPACK_IMPORTED_MODULE_0__["hostReportError"]);
        return subscriber;
      };
    }; //# sourceMappingURL=subscribeToPromise.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js":
  /*!*****************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js ***!
    \*****************************************************************************************/

  /*! exports provided: subscribeToResult */

  /***/
  function node_modulesRxjs_esm2015InternalUtilSubscribeToResultJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "subscribeToResult", function () {
      return subscribeToResult;
    });
    /* harmony import */


    var _InnerSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../InnerSubscriber */
    "../../../node_modules/rxjs/_esm2015/internal/InnerSubscriber.js");
    /* harmony import */


    var _subscribeTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./subscribeTo */
    "../../../node_modules/rxjs/_esm2015/internal/util/subscribeTo.js");
    /* harmony import */


    var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Observable */
    "../../../node_modules/rxjs/_esm2015/internal/Observable.js");

    function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
      var innerSubscriber = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : new _InnerSubscriber__WEBPACK_IMPORTED_MODULE_0__["InnerSubscriber"](outerSubscriber, outerValue, outerIndex);

      if (innerSubscriber.closed) {
        return undefined;
      }

      if (result instanceof _Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]) {
        return result.subscribe(innerSubscriber);
      }

      return Object(_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(result)(innerSubscriber);
    } //# sourceMappingURL=subscribeToResult.js.map

    /***/

  },

  /***/
  "../../../node_modules/rxjs/_esm2015/internal/util/toSubscriber.js":
  /*!************************************************************************************!*\
    !*** /Users/leongrubisic/node_modules/rxjs/_esm2015/internal/util/toSubscriber.js ***!
    \************************************************************************************/

  /*! exports provided: toSubscriber */

  /***/
  function node_modulesRxjs_esm2015InternalUtilToSubscriberJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toSubscriber", function () {
      return toSubscriber;
    });
    /* harmony import */


    var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Subscriber */
    "../../../node_modules/rxjs/_esm2015/internal/Subscriber.js");
    /* harmony import */


    var _symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../symbol/rxSubscriber */
    "../../../node_modules/rxjs/_esm2015/internal/symbol/rxSubscriber.js");
    /* harmony import */


    var _Observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Observer */
    "../../../node_modules/rxjs/_esm2015/internal/Observer.js");

    function toSubscriber(nextOrObserver, error, complete) {
      if (nextOrObserver) {
        if (nextOrObserver instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]) {
          return nextOrObserver;
        }

        if (nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__["rxSubscriber"]]) {
          return nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__["rxSubscriber"]]();
        }
      }

      if (!nextOrObserver && !error && !complete) {
        return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"](_Observer__WEBPACK_IMPORTED_MODULE_2__["empty"]);
      }

      return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"](nextOrObserver, error, complete);
    } //# sourceMappingURL=toSubscriber.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactContactPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <img src=\"../../assets/img/arlogo.png\" width=\"50px\" style=\"display:inline-block\" height=\"50px\" style=\"margin-top:20px;margin-left:20px;\" />\n    <ion-title style=\"display:inline-block;margin-bottom:20px;\">\n      <p style=\"font-size:15px;margin:0px;\">LA MACCHINA DEL TEMPO</p>\n      <p style=\"font-size:10px;font-weight:200;margin:0px;\">MUSEO STORICO ALFA ROMEO</p>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Contact Us</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p style=\"color:#0172C6;font-size:20px;font-weight:300;\">LA MACCHINA DEL TEMPO ​<br />MUSEO STORICO ALFA ROMEO​​​</p><br />\n\n      <a href=\"https://www.facebook.com/museoalfaromeo\" target=\"_blank\"><img src=\"../../assets/icon/fb.png\" width=\"30px\" height=\"30px\" /></a>&nbsp;\n      <a href=\"https://www.instagram.com/museoalfaromeo/\" target=\"_blank\"><img src=\"../../assets/icon/ig.png\" width=\"30px\" height=\"30px\" /></a>&nbsp;\n      <a href=\"https://www.tripadvisor.it/Attraction_Review-g1643829-d1906809-Reviews-Museo_Storico_Alfa_Romeo-Arese_Province_of_Milan_Lombardy.html\" target=\"_blank\"><img src=\"../../assets/icon/ta.jpg\" width=\"30px\" height=\"30px\" /></a><br />\n      Viale Alfa Romeo, Arese (Mi) - Italia<br />\n      phone +39 02 444 255 11<br /><br />\n\n      Informations: info@museoalfaromeo.com<br />\n      Educational: didattica@museoalfaromeo.com<br />\n      Events location: location@museoalfaromeo.com<br />\n      Groups and reservations: gruppi@museoalfaromeo.com<br />\n      Press Office: pressoffice@museoalfaromeo.com<br />\n      Centro Documentazione: centrodocumentazione@museoalfaromeo.com<br />\n      Alfa Romeo Caffè: alfaromeocaffe@itasteculture.it<br />\n      Sales Show room: motorvillagerearese@fcagroup.com<br />\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Location</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <div id=\"map\" style=\"height:300px;width:320px;\"></div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/contact/contact.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/contact/contact.module.ts ***!
    \*******************************************/

  /*! exports provided: ContactModule */

  /***/
  function srcAppContactContactModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactModule", function () {
      return ContactModule;
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


    var _contact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contact.page */
    "./src/app/contact/contact.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");

    var ContactModule = function ContactModule() {
      _classCallCheck(this, ContactModule);
    };

    ContactModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _contact_page__WEBPACK_IMPORTED_MODULE_6__["Contact"]
      }])],
      declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_6__["Contact"]]
    })], ContactModule);
    /***/
  },

  /***/
  "./src/app/contact/contact.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/contact/contact.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactContactPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n\n.map {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9uZ3J1YmlzaWMvRG9jdW1lbnRzL2lvbmljLXdvcmtzcGFjZS9BUk1TL3NyYy9hcHAvY29udGFjdC9jb250YWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29udGFjdC9jb250YWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4ubWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4ubWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/contact/contact.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/contact/contact.page.ts ***!
    \*****************************************/

  /*! exports provided: Contact */

  /***/
  function srcAppContactContactPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Contact", function () {
      return Contact;
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


    var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/google-maps */
    "../../../node_modules/@ionic-native/google-maps/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var Contact = /*#__PURE__*/function () {
      function Contact(platform) {
        _classCallCheck(this, Contact);

        this.platform = platform;
      }

      _createClass(Contact, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this40 = this;

          this.platform.ready().then(function () {
            return _this40.loadMap();
          });
        }
      }, {
        key: "loadMap",
        value: function loadMap() {
          var map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMaps"].create('map');

          map.one(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsEvent"].MAP_READY).then(function (data) {
            var coordinates = new _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["LatLng"](45.558484, 9.052425);
            console.log('map is ready to use.');
            var marker = map.addMarkerSync({
              title: 'Museo Storico Alfa Romeo',
              icon: 'red',
              animation: 'DROP',
              position: {
                lat: 45.558484,
                lng: 9.052425
              },
              map: map
            });
            map.setCameraTarget(coordinates);
            map.setCameraZoom(8);
          });
        }
      }]);

      return Contact;
    }();

    Contact.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }];
    };

    Contact = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.page.scss */
      "./src/app/contact/contact.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])], Contact);
    /***/
  }
}]);
//# sourceMappingURL=contact-contact-module-es5.js.map