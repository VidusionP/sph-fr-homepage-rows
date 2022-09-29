/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/checkout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/checkout.js":
/*!*******************************!*\
  !*** ./assets/js/checkout.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var allureException = ["coco", "rose", "adele", "angelina", "jessica", "selena", "taylor", "julia", "nicole", "gwyneth", "ev7914", "tl6814", "ev5714", "mo5514", "mo7608", "ev5512", "ev5706", "ev6810", "eg6612", "eh16", "mh2206", "sh5206", "ep3608", "mh2216", "maya", "noya"];
var cartItems = null;
var skus = [];
var teamdeskItems = null;
var teamdeskPOItems = null;
/**
 * Get the inventory and po from teamdesk
 */

function cartGetDelivery() {
  if (cartItems) {
    // console.log(cartItems);
    skus = cartItems.lineItems.physicalItems.map(function (i) {
      var sku = i.sku;

      if (sku.indexOf("_N") == sku.length - 2) {
        sku = sku.slice(0, sku.length - 2);
      }

      return encodeURIComponent(sku);
    });
    fetch("//shp-webserver.glitch.me/get-teamdesk", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify({
        table: 'Inventory',
        filter: "Any([SKU],'" + skus.join(",") + "')"
      })
    }).then(function (r) {
      return r.json();
    }).then(function (r) {
      teamdeskItems = r;
      teamdeskPOItems = [];
      cartSetDelivery(); // fetch(`//shp-webserver.glitch.me/get-teamdesk`, {
      //     method: 'POST',
      //     headers: {
      //         'Content-Type': 'application/json',
      //         'Accept': 'application/json'
      //     },
      //     body: JSON.stringify({
      //         table: 't_763479',
      //         options: `?filter=Any([SKU],'${skus.join(",")}') and [Incoming Quantity]>0 and [Arrival Due Date]>ToDate('1/1/1')&sort=Arrival Due Date//ASC`                        
      //     })
      // })
      // .then(r=>r.json())
      // .then(r=>{
      //     teamdeskPOItems = r;
      //     cartSetDelivery();
      // })
      // .catch(e=>{
      //     console.log(e);
      //     cartSetDelivery();
      // })
    }).catch(function (e) {
      return console.log(e);
    });
  }
}
/**
 * Fill in the delivery information
 */


function cartSetDelivery() {
  if (teamdeskItems) {
    var qtyChecked = [];

    var _loop = function _loop() {
      var _step$value = _step.value,
          index = _step$value[0],
          sku = _step$value[1];

      if (sku.indexOf("_N") == sku.length - 2) {
        sku = sku.slice(0, sku.length - 2);
      }

      var item = teamdeskItems.find(function (s) {
        return encodeURIComponent(s.SKU.toUpperCase()) == sku.toUpperCase();
      });

      if (item) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".productList").find("li.productList-item").eq(index).find("ul.product-options").find(".cart-delivery").length == 0) {
          var qty = cartItems.lineItems.physicalItems[index].quantity;
          var buff = 0;

          if (qtyChecked[item.SKU]) {
            buff = qtyChecked[item.SKU];
            qtyChecked[item.SKU] += qty;
          } else {
            qtyChecked[item.SKU] = qty;
          }

          var content = "<strong>Heure d'exp\xE9dition pr\xE9vue:</strong><br/>";

          if (item["Total On Hand"] == item["Available Quantity"]) {
            if (Number(item["Quantity USA"]) > 0) {
              if (Number(item["Quantity USA"]) - buff > 0) {
                content += "Dans 3-4 jours: quantit\xE9 <strong>" + Math.min(item["Quantity USA"] - buff, qty) + "</strong><br/>";
                qty = qty - Math.min(item["Quantity USA"] - buff, qty);
                buff = 0;
              } else {
                buff -= Number(item["Quantity USA"]);
              }
            }

            if (Number(item["Quantity Canada"]) > 0 && qty > 0) {
              if (Number(item["Quantity Canada"]) - buff > 0) {
                content += "Dans 5-8 jours: quantit\xE9 <strong>" + Math.min(item["Quantity Canada"] - buff, qty) + "</strong><br/>";
                qty = qty - Math.min(item["Quantity Canada"] - buff, qty);
                buff = 0;
              } else {
                buff -= Number(item["Quantity Canada"]);
              }
            }
          } else {
            if (Number(item["Available Quantity"]) > 0) {
              if (Number(item["Available Quantity"]) - buff > 0) {
                content += "Dans 3-8 jours: quantit\xE9 <strong>" + Math.min(item["Available Quantity"] - buff, qty) + "</strong><br/>";
                qty = qty - Math.min(item["Available Quantity"] - buff, qty);
                buff = 0;
              } else {
                buff -= Number(item["Available Quantity"]);
              }
            }
          } // if (item["Virtual Quantity"] && qty>0) {                            
          //     if (item["Lock Status"]!="Locked for processing" && Number(item["Unlocked for sale quantity"]) > 0 && qty>0) {
          //         if (Number(item["Unlocked for sale quantity"])-buff > 0) {                                    
          //             content+=`1 week later: quantity <strong>${Math.min(item["Unlocked for sale quantity"]-buff, qty)}</strong><br/>`;                                    
          //             qty = qty - Math.min(item["Unlocked for sale quantity"]-buff, qty);                                    
          //             buff=0;
          //         } else {
          //             buff-=Number(item["Unlocked for sale quantity"]);
          //         }
          //     }
          //     let virtual={};                        
          //     if (Number(item["Quantity Incoming"])-2 > 0 && qty>0) {
          //         if (Number(item["Quantity Incoming"])-2 -buff > 0) {
          //             let inItems = teamdeskPOItems.filter(p=>p.SKU.toUpperCase() == item["SKU"].toUpperCase());
          //             let i=0, totalP=buff, tempqty = qty;
          //             while (i<inItems.length && tempqty>0) {
          //                 totalP+=Number(inItems[i]["Incoming Quantity"]);
          //                 tempqty = tempqty - Math.min(Number(inItems[i]["Incoming Quantity"]), tempqty);
          //                 i++;                                
          //             }
          //             if (i>0) {
          //                 let inItem = inItems[i-1];                                    
          //                 let mdiff = monthDiff(new Date(), new Date(inItem["Arrival Due Date"]));
          //                 if (mdiff==0) {                                    
          //                     if (allureException.includes(inItem["Part Number"])) {
          //                         mdiff+=3;
          //                     } else {
          //                         mdiff+=1;
          //                     }
          //                 } else if (allureException.includes(inItem["Part Number"])) {
          //                     mdiff+=2;
          //                 }
          //                 virtual[mdiff] = Math.min(totalP, qty);                                        
          //                 qty = tempqty;
          //                 buff=0;
          //             }
          //         } else {
          //             buff = buff - Number(item["Quantity Incoming"]) + 2;
          //         }
          //     }
          //     if (qty>0) {
          //         let m = item["Virtual Location"].slice(0,-1);
          //         if (virtual[m]) {
          //             virtual[m]+=qty;
          //         } else {
          //             virtual[m]=qty;
          //         }
          //     }
          //     // console.log(virtual);
          //     if (Object.keys(virtual).length > 0) {
          //         const options = {year: 'numeric', month: 'long'};
          //         let vkeys = Object.keys(virtual).sort(function(a,b) {
          //             return b-a;
          //         })                
          //         for (let key of vkeys) {
          //             if (Number(key)) {
          //                 let date = new Date();
          //                 date = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
          //                 date.setMonth(date.getMonth()+Number(key));
          //                 content+=`${date.toLocaleDateString('en-US', options)}: quantity <strong>${virtual[key]}</strong><br/>`;
          //             } else {
          //                 content+=`${key.replace("_","-")} months later: quantity <strong>${virtual[key]}</strong><br/>`;
          //             }
          //         }
          //     }
          // } 


          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".productList").find("li.productList-item").eq(index).find("ul.product-options").length > 0) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".productList").find("li.productList-item").eq(index).find("ul.product-options").append("<li class=\"product-option cart-delivery\">" + content + "</li>");
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".productList").find("li.productList-item").eq(index).find(".product-body").append("\n                            <ul class=\"product-options\"><li class=\"product-option cart-delivery\">" + content + "</li></ul>\n                        ");
          }
        } else {
          var _qty = cartItems.lineItems.physicalItems[index].quantity;

          if (qtyChecked[item.SKU]) {
            qtyChecked[item.SKU] += _qty;
          } else {
            qtyChecked[item.SKU] = _qty;
          }
        }
      } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".productList").find("li.productList-item").eq(index).find("ul.product-options").find(".cart-delivery").length == 0) {
        cmhRushItems = ['CMH', 'CMLACE', 'CMMONO', 'CMLACEPOLY', 'CMSKIN'];
        hairService = ["style#221", "style#222", "style#231", "style#232", "style#233", "style#234", "style#251", "style#331", "style#332", "style#334", "style#335", "style#341", "style#342", "style#343", "style#551", "style#552", "Style #Your_Own", "Online Services Pack"];
        var _content = "";

        if (cmhRushItems.includes(sku.toUpperCase())) {
          _content = "<strong>Heure d'exp\xE9dition pr\xE9vue:</strong><br/>Ivraison garantie dans un d\xE9lai de trois mois<br/>";
        } else if (hairService.includes(sku)) {
          _content = "<strong>Heure d'exp\xE9dition pr\xE9vue:</strong><br/>Dans 2-3 semaines<br/>";
        }

        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".productList").find("li.productList-item").eq(index).find("ul.product-options").append("<div class=\"cart-delivery\">" + _content + "</div>");
      }
    };

    for (var _iterator = _createForOfIteratorHelperLoose(skus.entries()), _step; !(_step = _iterator()).done;) {
      var cmhRushItems;
      var hairService;

      _loop();
    }
  }
}

window.addEventListener("DOMContentLoaded", function () {
  var _this = this;

  _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.getCart({
    includeOptions: true
  }, function (err, myCart) {
    if (err) {
      return;
    }

    if (myCart) {
      cartItems = {
        id: myCart.id,
        baseAmount: myCart.baseAmount,
        lineItems: myCart.lineItems
      };
      var checkInit = setInterval(function () {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("#cart-edit-link").length > 0 && ".cart-section".length > 0) {
          _this.clearInterval(checkInit);

          cartGetDelivery();
          var baction = setInterval(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".cart-actions button").length > 0) {
              clearInterval(baction);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(".cart-actions button").on("click", function () {
                setTimeout(function () {
                  cartSetDelivery();
                }, 500);
              });
            }
          }, 500);
        }
      }, 500);
    }
  });
});

/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/api.js":
/*!************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/api.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/request */ "./node_modules/@bigcommerce/stencil-utils/src/lib/request.js");
/* harmony import */ var _api_countries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/countries */ "./node_modules/@bigcommerce/stencil-utils/src/api/countries.js");
/* harmony import */ var _api_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/product */ "./node_modules/@bigcommerce/stencil-utils/src/api/product.js");
/* harmony import */ var _api_product_attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/product-attributes */ "./node_modules/@bigcommerce/stencil-utils/src/api/product-attributes.js");
/* harmony import */ var _api_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/search */ "./node_modules/@bigcommerce/stencil-utils/src/api/search.js");
/* harmony import */ var _api_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/cart */ "./node_modules/@bigcommerce/stencil-utils/src/api/cart.js");






var internals = {};
/**
 * Convenience function to request a page via ajax
 *
 * @param url
 * @param options
 * @param callback
 */

internals.getPage = function (url, options, callback) {
  Object(_lib_request__WEBPACK_IMPORTED_MODULE_0__["default"])(url, {
    method: 'GET',
    requestOptions: options
  }, callback);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  country: new _api_countries__WEBPACK_IMPORTED_MODULE_1__["default"](),
  productAttributes: new _api_product_attributes__WEBPACK_IMPORTED_MODULE_3__["default"](),
  product: new _api_product__WEBPACK_IMPORTED_MODULE_2__["default"](),
  search: new _api_search__WEBPACK_IMPORTED_MODULE_4__["default"](),
  cart: new _api_cart__WEBPACK_IMPORTED_MODULE_5__["default"](),
  getPage: internals.getPage
});

/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/api/base.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/api/base.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/request */ "./node_modules/@bigcommerce/stencil-utils/src/lib/request.js");


var _default = /*#__PURE__*/function () {
  /**
   * @Constructor
   */
  function _default(version) {
    this.remoteVersion = version || 'v1';
    this.remoteBaseEndpoint = '/remote/';
  }
  /**
   *
   * @param {String} url
   * @param {String} method ['GET', 'POST', 'PUT', 'DELETE']
   * @param {Object} options
   * @param {Boolean} remote
   * @param {Function} callback
   */


  var _proto = _default.prototype;

  _proto.makeRequest = function makeRequest(url, method, options, remote, callback) {
    Object(_lib_request__WEBPACK_IMPORTED_MODULE_0__["default"])(url, {
      method: method,
      remote: remote,
      requestOptions: options
    }, callback);
  }
  /**
   *
   * @param {String} endpoint
   * @param {String} method ['GET', 'POST', 'PUT', 'DELETE']
   * @param {Object} options
   * @param {Function} callback
   */
  ;

  _proto.remoteRequest = function remoteRequest(endpoint, method, options, callback) {
    var remoteUrl = this.remoteBaseEndpoint + this.remoteVersion + endpoint;
    this.makeRequest(remoteUrl, method, options, true, callback);
  };

  return _default;
}();



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/api/cart.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/api/cart.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/api/base.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks */ "./node_modules/@bigcommerce/stencil-utils/src/hooks.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var _default = /*#__PURE__*/function (_Base) {
  _inheritsLoose(_default, _Base);

  function _default() {
    return _Base.apply(this, arguments) || this;
  }

  var _proto = _default.prototype;

  /**
   * Get a collection of Carts. For now, this will only return an array of a single cart as multiple carts per session
   * are not currently supported.
   *
   * @param options
   * @param {Function} callback
   */
  _proto.getCarts = function getCarts(options, callback) {
    if (options === void 0) {
      options = {};
    }

    var url = '/api/storefront/carts';

    if (options.includeOptions) {
      url = this.includeOptions(url);
    }

    this.makeRequest(url, 'GET', options, true, function (err, response) {
      callback(err, response);
    });
  }
  /**
   * Get the current Cart's details, either with or without Product Option selections.
   * Can also be used to get a particular cart provided a cartId in the options.
   *
   * @param options
   * @param {Function} callback
   */
  ;

  _proto.getCart = function getCart(options, callback) {
    if (options === void 0) {
      options = {};
    }

    /* If no cart ID is provided, get the collection of carts and return the first one */
    if (!options.cartId) {
      return this.getCarts(options, function (err, response) {
        return callback(err, response[0]);
      });
    }

    var url = "/api/storefront/carts/" + options.cartId;

    if (options.includeOptions) {
      url = this.includeOptions(url);
    }

    this.makeRequest(url, 'GET', options, true, function (err, response) {
      callback(err, response);
    });
  }
  /**
   * Add the parameters to a URL needed to get product option details on cart line items
   * @param url
   */
  ;

  _proto.includeOptions = function includeOptions(url) {
    return url + "?include=lineItems.physicalItems.options,lineItems.digitalItems.options";
  }
  /**
   * Get a sum of the cart line item quantities
   *
   * @param options
   * @param {Function} callback
   */
  ;

  _proto.getCartQuantity = function getCartQuantity(options, callback) {
    if (options === void 0) {
      options = {};
    }

    this.getCart(options, function (err, response) {
      if (err) {
        return callback(err);
      }

      var quantity = 0;

      if (response) {
        var cart = response;
        var lineItemQuantities = [cart.lineItems.physicalItems, cart.lineItems.digitalItems, cart.lineItems.customItems].reduce(function (a, b) {
          return a.concat(b);
        }).filter(function (lineItem) {
          return !lineItem.parentId;
        }).map(function (lineItem) {
          return lineItem.quantity;
        }).reduce(function (accumulator, lineItemQuantity) {
          return accumulator + lineItemQuantity;
        }, 0);
        var giftCertificateQuantity = cart.lineItems.giftCertificates.length;
        quantity = lineItemQuantities + giftCertificateQuantity;
      }

      callback(null, quantity);
    });
  }
  /**
   * Add item to cart with options (variants)
   *
   * @param {FormData} formData
   * @param {Function} callback
   */
  ;

  _proto.itemAdd = function itemAdd(formData, callback) {
    this.remoteRequest('/cart/add', 'POST', {
      formData: formData
    }, function (err, response) {
      var emitData = {
        err: err,
        response: response
      };
      _hooks__WEBPACK_IMPORTED_MODULE_1__["default"].emit('cart-item-add-remote', emitData);
      callback(err, response);
    });
  }
  /**
   * Update cart item quantity
   *
   * @param {String|Object} itemId
   * @param {Number|Function} qty
   * @param {Function|null} callback
   */
  ;

  _proto.itemUpdate = function itemUpdate(itemId, qty, callback) {
    var callbackArg = callback;
    var items;

    if (Array.isArray(itemId) && typeof qty === 'function') {
      callbackArg = qty;
      items = itemId;
    } else {
      items = [{
        id: itemId,
        quantity: qty
      }];
    }

    this.update(items, function (err, response) {
      var emitData = {
        items: items,
        err: err,
        response: response
      };
      _hooks__WEBPACK_IMPORTED_MODULE_1__["default"].emit('cart-item-update-remote', emitData);
      callbackArg(err, response);
    });
  }
  /**
   * Remove cart items
   *
   * Calls the internal update function with quantity: 0
   *
   * @param {String} itemId
   * @param {Function} callback
   */
  ;

  _proto.itemRemove = function itemRemove(itemId, callback) {
    var items = [{
      id: itemId,
      quantity: 0
    }];
    this.update(items, function (err, response) {
      var emitData = {
        items: items,
        err: err,
        response: response
      };
      _hooks__WEBPACK_IMPORTED_MODULE_1__["default"].emit('cart-item-remove-remote', emitData);
      callback(err, response);
    });
  }
  /**
   * Get giftwrapping options
   * @param {String} itemId
   * @param {Object|Function} options
   * @param {Function|null} callback
   */
  ;

  _proto.getItemGiftWrappingOptions = function getItemGiftWrappingOptions(itemId, options, callback) {
    var opts = options || {};
    var callbackArg = callback;

    if (typeof opts === 'function') {
      callbackArg = opts;
      opts = {};
    }

    this.remoteRequest("/gift-wrapping/" + itemId, 'GET', opts, callbackArg);
  }
  /**
   * Submit giftwrapping options
   *
   * @param {String} itemId
   * @param {Function} callback
   */
  ;

  _proto.submitItemGiftWrappingOption = function submitItemGiftWrappingOption(itemId, params, callback) {
    this.remoteRequest("/gift-wrapping/" + itemId, 'POST', {
      params: params
    }, callback);
  }
  /**
   * Update cart items
   *
   * @param {Array} items
   * @param {Function} callback
   */
  ;

  _proto.update = function update(items, callback) {
    var payload = {
      items: items
    };
    this.remoteRequest('/cart/update', 'POST', {
      params: payload
    }, callback);
  }
  /**
   * Get cart content
   *
   * @param {Object} options
   * @param {Function} callback
   */
  ;

  _proto.getContent = function getContent(options, callback) {
    var opts = options || {};
    var callbackArg = callback;

    if (typeof opts === 'function') {
      callbackArg = opts;
      opts = {};
    }

    this.makeRequest('/cart.php', 'GET', opts, false, callbackArg);
  }
  /**
   * Get cart shipping quote
   *
   * @param {Object} params
   * @param {String|Array|Object} renderWith
   * @param {Function} callback
   */
  ;

  _proto.getShippingQuotes = function getShippingQuotes(params, renderWith, callback) {
    var options = {
      params: params
    };
    var callbackArg = callback;
    var renderWithArg = renderWith;

    if (typeof callbackArg !== 'function') {
      callbackArg = renderWithArg;
      renderWithArg = null;
    }

    if (renderWithArg) {
      options.template = renderWithArg;
    }

    this.remoteRequest('/shipping-quote', 'GET', options, callbackArg);
  }
  /**
   * Submit shipping quote based on quoteId
   *
   * @param {Number} quoteId
   * @param {Function} callback
   */
  ;

  _proto.submitShippingQuote = function submitShippingQuote(quoteId, callback) {
    var options = {
      params: {
        shipping_method: quoteId
      }
    };
    this.remoteRequest('/shipping-quote', 'POST', options, callback);
  }
  /**
   * Apply a coupon code or gift certificate to the cart
   *
   * @param {String} code
   * @param {Function} callback
   */
  ;

  _proto.applyCode = function applyCode(code, callback) {
    var options = {
      params: {
        code: code
      }
    };
    this.remoteRequest('/apply-code', 'POST', options, callback);
  }
  /**
   * Apply a coupon code or gift certificate to the cart
   *
   * @param {Number} code
   * @param {Function} callback
   */
  ;

  _proto.applyGiftCertificate = function applyGiftCertificate(code, callback) {
    var options = {
      params: {
        code: code
      }
    };
    this.remoteRequest('/gift-certificates', 'POST', options, callback);
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/api/countries.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/api/countries.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/api/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default = /*#__PURE__*/function (_Base) {
  _inheritsLoose(_default, _Base);

  /**
   * @Constructor
   */
  function _default(version) {
    var _this;

    // call parent
    _this = _Base.call(this, version) || this; // set up class variables

    _this.endpoint = '/country-states/';
    return _this;
  }
  /**
   *
   * Get country data by id wrapper
   *
   * @param {Number} id
   * @param {Function} callback
   */


  var _proto = _default.prototype;

  _proto.getById = function getById(id, callback) {
    var url = this.endpoint + id;
    this.remoteRequest(url, 'GET', {}, callback);
  }
  /**
   * Get country data by country name
   * @param name
   * @param callback
   */
  ;

  _proto.getByName = function getByName(name, callback) {
    var url = this.endpoint + name;
    this.remoteRequest(url, 'GET', {}, callback);
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/api/product-attributes.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/api/product-attributes.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/api/base.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks */ "./node_modules/@bigcommerce/stencil-utils/src/hooks.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/utils */ "./node_modules/@bigcommerce/stencil-utils/src/lib/utils.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var _default = /*#__PURE__*/function (_Base) {
  _inheritsLoose(_default, _Base);

  /**
   * @Constructor
   */
  function _default(version) {
    var _this;

    // call parent
    _this = _Base.call(this, version) || this; // set up class variables

    _this.endpoint = '/product-attributes/';
    _this.inCartEndpoint = '/configure-options/';
    return _this;
  }
  /**
   * @param {Number} productId
   * @param {Object} params
   * @param callback
   */


  var _proto = _default.prototype;

  _proto.optionChange = function optionChange(productId, params, template, callback) {
    if (template === void 0) {
      template = null;
    }

    var templateArg = template;
    var callbackArg = callback;

    if (typeof templateArg === 'function') {
      callbackArg = templateArg;
      templateArg = null;
    }

    var normalizedQs = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_2__["normalizeQueryStringParams"])(params);
    this.remoteRequest(this.endpoint + productId, 'POST', {
      params: normalizedQs,
      template: templateArg
    }, function (err, response) {
      var emitData = {
        err: err,
        response: response
      };
      _hooks__WEBPACK_IMPORTED_MODULE_1__["default"].emit('product-options-change-remote', emitData);
      callbackArg(err, response);
    });
  }
  /**
   * @param {Number} itemId
   * @param {Object} params
   * @param callback
   */
  ;

  _proto.configureInCart = function configureInCart(itemId, params, callback) {
    this.remoteRequest(this.inCartEndpoint + itemId, 'GET', params, function (err, response) {
      callback(err, response);
    });
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/api/product.js":
/*!********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/api/product.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/api/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default = /*#__PURE__*/function (_Base) {
  _inheritsLoose(_default, _Base);

  /**
   * @Constructor
   */
  function _default(version) {
    var _this;

    // call parent
    _this = _Base.call(this, version) || this; // set up class variables

    _this.endpoint = '/products.php?productId=';
    return _this;
  }
  /**
   *
   * @param {Number} productId
   * @param {Object} params
   * @param {Function} callback
   */


  var _proto = _default.prototype;

  _proto.getById = function getById(productId, params, callback) {
    var url = this.endpoint + productId;
    var paramsArg = params;
    var callbackArg = callback;

    if (typeof paramsArg === 'function') {
      callbackArg = paramsArg;
      paramsArg = {};
    }

    this.makeRequest(url, 'GET', paramsArg, false, callbackArg);
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/api/search.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/api/search.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks */ "./node_modules/@bigcommerce/stencil-utils/src/hooks.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/api/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var _default = /*#__PURE__*/function (_Base) {
  _inheritsLoose(_default, _Base);

  /**
   * @Constructor
   */
  function _default(version) {
    var _this;

    // call parent
    _this = _Base.call(this, version) || this; // set up class variables

    _this.endpoint = '/search.php?search_query=';
    return _this;
  }
  /**
   * Get search results
   * @param {String} query
   * @param {Object} params
   * @param {Function} callback
   */


  var _proto = _default.prototype;

  _proto.search = function search(query, params, callback) {
    var url = this.endpoint + encodeURIComponent(query);
    var paramsArg = params;
    var callbackArg = callback;

    if (typeof paramsArg === 'function') {
      callbackArg = paramsArg;
      paramsArg = {};
    }

    _hooks__WEBPACK_IMPORTED_MODULE_0__["default"].emit('search-quick-remote', query);
    this.makeRequest(url, 'GET', paramsArg, false, callbackArg);
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks.js":
/*!**************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hooks_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hooks/cart */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/cart.js");
/* harmony import */ var _hooks_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/cookie */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/cookie.js");
/* harmony import */ var _hooks_currency_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/currency-selector */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/currency-selector.js");
/* harmony import */ var _hooks_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/product */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/product.js");
/* harmony import */ var _hooks_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/search */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/search.js");
/* harmony import */ var _hooks_faceted_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/faceted-search */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/faceted-search.js");
/* harmony import */ var _hooks_sort_by__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/sort-by */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/sort-by.js");







var internals = {};
internals.classes = {
  cart: new _hooks_cart__WEBPACK_IMPORTED_MODULE_0__["default"](),
  cookie: new _hooks_cookie__WEBPACK_IMPORTED_MODULE_1__["default"](),
  currencySelector: new _hooks_currency_selector__WEBPACK_IMPORTED_MODULE_2__["default"](),
  product: new _hooks_product__WEBPACK_IMPORTED_MODULE_3__["default"](),
  search: new _hooks_search__WEBPACK_IMPORTED_MODULE_4__["default"](),
  facetedSearch: new _hooks_faceted_search__WEBPACK_IMPORTED_MODULE_5__["default"](),
  sortBy: new _hooks_sort_by__WEBPACK_IMPORTED_MODULE_6__["default"]()
};

internals.parseHooks = function (hookName) {
  var hookType = hookName.split('-')[0];

  if (internals.classes[hookType] === undefined) {
    throw new Error(hookType + " is not a valid hookType");
  }

  return internals.classes[hookType];
};

var Hooks = /*#__PURE__*/function () {
  function Hooks() {}

  var _proto = Hooks.prototype;

  _proto.on = function on(hookName, callback) {
    var hook = internals.parseHooks(hookName);
    return hook.on(hookName, callback);
  };

  _proto.off = function off(hookName, callback) {
    var hook = internals.parseHooks(hookName);
    return hook.off(hookName, callback);
  };

  _proto.emit = function emit(hookName) {
    var hook = internals.parseHooks(hookName);
    return hook.emit.apply(hook, arguments);
  };

  return Hooks;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Hooks());

/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var eventemitter2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter2 */ "./node_modules/eventemitter2/lib/eventemitter2.js");
/* harmony import */ var eventemitter2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var _default = /*#__PURE__*/function (_EventEmitter) {
  _inheritsLoose(_default, _EventEmitter);

  function _default() {
    var _this;

    _this = _EventEmitter.call(this) || this;
    _this.$body = jquery__WEBPACK_IMPORTED_MODULE_1___default()('body');
    return _this;
  }

  return _default;
}(eventemitter2__WEBPACK_IMPORTED_MODULE_0___default.a);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/cart.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/cart.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default = /*#__PURE__*/function (_BaseHooks) {
  _inheritsLoose(_default, _BaseHooks);

  /**
   * @Constructor
   */
  function _default() {
    var _this;

    // call parent
    _this = _BaseHooks.call(this) || this;

    _this.itemAdd();

    return _this;
  }

  var _proto = _default.prototype;

  _proto.itemAdd = function itemAdd() {
    var _this2 = this;

    this.$body.on('submit', '[data-cart-item-add]', function (event) {
      _this2.emit('cart-item-add', event, event.target);
    });
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/cookie.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/cookie.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default = /*#__PURE__*/function (_BaseHooks) {
  _inheritsLoose(_default, _BaseHooks);

  function _default() {
    return _BaseHooks.apply(this, arguments) || this;
  }

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/currency-selector.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/currency-selector.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default = /*#__PURE__*/function (_BaseHooks) {
  _inheritsLoose(_default, _BaseHooks);

  /**
   * @Constructor
   */
  function _default() {
    var _this;

    // call parent
    _this = _BaseHooks.call(this) || this;

    _this.currencySelector();

    return _this;
  }

  var _proto = _default.prototype;

  _proto.currencySelector = function currencySelector() {
    var _this2 = this;

    this.$body.on('input', '[data-currency-selector-toggle]', function (event) {
      _this2.emit('currencySelector-toggle', event);
    });
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/faceted-search.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/faceted-search.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default = /*#__PURE__*/function (_BaseHooks) {
  _inheritsLoose(_default, _BaseHooks);

  /**
   * @Constructor
   */
  function _default() {
    var _this;

    // call parent
    _this = _BaseHooks.call(this) || this;

    _this.searchEvents();

    return _this;
  }

  var _proto = _default.prototype;

  _proto.searchEvents = function searchEvents() {
    var _this2 = this;

    this.$body.on('click', '[data-faceted-search-facet]', function (event) {
      _this2.emit('facetedSearch-facet-clicked', event);
    });
    this.$body.on('submit', '[data-faceted-search-range]', function (event) {
      _this2.emit('facetedSearch-range-submitted', event);
    });
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/product.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/product.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default = /*#__PURE__*/function (_BaseHooks) {
  _inheritsLoose(_default, _BaseHooks);

  /**
   * @Constructor
   */
  function _default() {
    var _this;

    // call parent
    _this = _BaseHooks.call(this) || this;

    _this.optionsChange();

    return _this;
  }

  var _proto = _default.prototype;

  _proto.optionsChange = function optionsChange() {
    var _this2 = this;

    this.$body.on('change', '[data-product-option-change]', function (event) {
      _this2.emit('product-option-change', event, event.target);
    });
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/search.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/search.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default = /*#__PURE__*/function (_BaseHooks) {
  _inheritsLoose(_default, _BaseHooks);

  /**
   * @Constructor
   */
  function _default() {
    var _this;

    // call parent
    _this = _BaseHooks.call(this) || this;

    _this.quickSearch();

    return _this;
  }

  var _proto = _default.prototype;

  _proto.quickSearch = function quickSearch() {
    var _this2 = this;

    this.$body.on('input', '[data-search-quick]', function (event) {
      _this2.emit('search-quick', event);
    });
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/sort-by.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/sort-by.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var _default = /*#__PURE__*/function (_BaseHooks) {
  _inheritsLoose(_default, _BaseHooks);

  /**
   * @Constructor
   */
  function _default() {
    var _this;

    // call parent
    _this = _BaseHooks.call(this) || this;

    _this.sortByEvents();

    return _this;
  }

  var _proto = _default.prototype;

  _proto.sortByEvents = function sortByEvents() {
    var _this2 = this;

    this.$body.on('submit', '[data-sort-by]', function (event) {
      _this2.emit('sortBy-submitted', event);
    });
    this.$body.on('change', '[data-sort-by] select', function (event) {
      _this2.emit('sortBy-select-changed', event);

      if (!event.isDefaultPrevented()) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(event.currentTarget).closest('form').trigger('submit');
      }
    });
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/lib/request.js":
/*!********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/lib/request.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Checks whether or not the current method passed in is valid
 *
 * @param {string} method
 * @returns {boolean}
 */

function isValidHTTPMethod(method) {
  var allowedMethods = ['GET', 'POST', 'PUT', 'DELETE'];
  return allowedMethods.indexOf(method) !== -1;
}

/* harmony default export */ __webpack_exports__["default"] = (function (relativeUrl, opts, callback) {
  var defaultOptions = {
    method: 'GET',
    remote: false,
    requestOptions: {
      baseUrl: null,
      formData: null,
      params: {},
      config: {},
      template: []
    }
  };
  var options = Object.assign({}, defaultOptions, opts);
  var data = options.requestOptions.formData ? options.requestOptions.formData : options.requestOptions.params;
  var headers = {
    'stencil-config': options.requestOptions.config ? JSON.stringify(options.requestOptions.config) : '{}',
    'stencil-options': '{}',
    'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
  };
  var requestedTemplate = options.requestOptions.template;
  var usingTemplates = false;
  var usingSections = false;
  var templates = []; // Not a valid method

  if (!isValidHTTPMethod(options.method)) {
    return callback(new Error('Not a valid HTTP method'));
  }

  if (typeof requestedTemplate === 'object' && !Array.isArray(requestedTemplate)) {
    var template;
    usingSections = true;
    templates = [];

    for (template in requestedTemplate) {
      if (requestedTemplate.hasOwnProperty(template)) {
        templates.push(requestedTemplate[template]);
      }
    }
  } else if (typeof requestedTemplate === 'string') {
    templates = [requestedTemplate];
  } else if (Array.isArray(requestedTemplate) && requestedTemplate.length > 0) {
    templates = requestedTemplate;
  }

  if (templates.length > 0) {
    usingTemplates = true;
    headers['stencil-options'] = JSON.stringify({
      render_with: templates.join(',')
    });
  }

  var url = relativeUrl;

  if (options.requestOptions.baseUrl) {
    url = "" + options.requestOptions.baseUrl + url;
  } // make ajax request using jquery


  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
    method: options.method,
    url: url,
    xhrFields: {
      withCredentials: true
    },
    contentType: options.requestOptions.formData ? false : 'application/x-www-form-urlencoded; charset=UTF-8',
    processData: !options.requestOptions.formData,
    success: function success(response) {
      var ret;
      var content = options.remote ? response.content : response;

      if (usingTemplates) {
        // Remove the `components` prefix from the response if it's an object
        if (typeof content === 'object') {
          var keys = Object.keys(content);
          var key;

          for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
            key = _keys[_i];
            var cleanKey = key.replace(/^components\//, '');
            content[cleanKey] = content[key];
            delete content[key];
          }
        } // If using "sections", morph the content into the arbitrary keys => content object.


        if (usingSections) {
          var templateVariableNames = Object.keys(requestedTemplate);
          var templateVariable;

          for (var _i2 = 0, _templateVariableName = templateVariableNames; _i2 < _templateVariableName.length; _i2++) {
            templateVariable = _templateVariableName[_i2];
            content[templateVariable] = content[requestedTemplate[templateVariable]];
            delete content[requestedTemplate[templateVariable]];
          }
        }

        if (options.remote) {
          ret = response;
          ret.content = content;
        } else {
          ret = content;
        }
      } else {
        ret = response;
      }

      callback(null, ret);
    },
    error: function error(XHR, textStatus, err) {
      callback(err);
    },
    data: data,
    headers: headers
  });
});

/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/lib/utils.js":
/*!******************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/lib/utils.js ***!
  \******************************************************************/
/*! exports provided: normalizeQueryStringParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeQueryStringParams", function() { return normalizeQueryStringParams; });
// Utilities
var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/**
 * Normalize querystring params. Remove empty array values
 * @param {string} params
 * @returns {string} Normalized querystring
 */


function normalizeQueryStringParams(params) {
  var qsParams = queryString.parse(params);

  var isValidParam = function isValidParam(value) {
    return value !== '' && value !== undefined;
  };

  var optionsCollection = Object.keys(qsParams).reduce(function (normalized, key) {
    var param;

    if (qsParams[key] instanceof Array) {
      var _param;

      var filtered = qsParams[key].filter(isValidParam);
      param = (_param = {}, _param[key] = filtered, _param);
    } else if (isValidParam(qsParams[key])) {
      var _param2;

      param = (_param2 = {}, _param2[key] = qsParams[key], _param2);
    }

    return Object.assign({}, normalized, param);
  }, {});
  var paramString = queryString.stringify(optionsCollection);
  return paramString;
}

/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/main.js":
/*!*************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/main.js ***!
  \*************************************************************/
/*! exports provided: hooks, api, tools, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hooks */ "./node_modules/@bigcommerce/stencil-utils/src/hooks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hooks", function() { return _hooks__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./node_modules/@bigcommerce/stencil-utils/src/api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "api", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools */ "./node_modules/@bigcommerce/stencil-utils/src/tools.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tools", function() { return _tools__WEBPACK_IMPORTED_MODULE_2__["default"]; });




var StencilUtils = {
  hooks: _hooks__WEBPACK_IMPORTED_MODULE_0__["default"],
  api: _api__WEBPACK_IMPORTED_MODULE_1__["default"],
  tools: _tools__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/* harmony default export */ __webpack_exports__["default"] = (StencilUtils);
/* global define */

(function (root) {
  if (typeof define === 'function' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js") && root) {
    // Ignores below for https://github.com/eslint/eslint/issues/5150
    define(function () {
      // eslint-disable-line prefer-arrow-callback
      root.stencilUtils = StencilUtils; // eslint-disable-line no-param-reassign
    });
  } else if ( true && module.exports) {
    module.exports = StencilUtils;
  } else {
    window.stencilUtils = StencilUtils;
  }
})(undefined);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/tools.js":
/*!**************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/tools.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools/image */ "./node_modules/@bigcommerce/stencil-utils/src/tools/image.js");
/* harmony import */ var _tools_imageSrcset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools/imageSrcset */ "./node_modules/@bigcommerce/stencil-utils/src/tools/imageSrcset.js");
/* harmony import */ var _tools_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools/storage */ "./node_modules/@bigcommerce/stencil-utils/src/tools/storage.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  image: new _tools_image__WEBPACK_IMPORTED_MODULE_0__["default"](),
  imageSrcset: new _tools_imageSrcset__WEBPACK_IMPORTED_MODULE_1__["default"](),
  storage: new _tools_storage__WEBPACK_IMPORTED_MODULE_2__["default"]()
});

/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/tools/image.js":
/*!********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/tools/image.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
var _default = /*#__PURE__*/function () {
  function _default() {}

  var _proto = _default.prototype;

  _proto.getSrc = function getSrc(path, dimensions) {
    // Regex to test size string is of the form 123x123 or 100w
    var sizeRegex = /(^\d+w$)|(^(\d+?)x(\d+?)$)/g;
    var size;

    if (typeof dimensions === 'object') {
      var width = dimensions.width || 100;
      var height = dimensions.height || 100;
      size = width + "x" + height;
    } else if (typeof dimensions === 'string' && sizeRegex.test(dimensions)) {
      // If dimensions is a string and match the NNNxNNN or NNNw format
      size = dimensions;
    } else {
      // Use the original image size
      size = 'original';
    }

    return path.replace('{:size}', size);
  };

  return _default;
}();



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/tools/imageSrcset.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/tools/imageSrcset.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
var _default = /*#__PURE__*/function () {
  function _default() {}

  var _proto = _default.prototype;

  _proto.getSrcset = function getSrcset(url, sizes) {
    // Regex to test size string is of the form 123x123 or 100w
    var sizeRegex = /(^\d+w$)|(^(\d+?)x(\d+?)$)/; // Regex to test to that srcset descriptor is of the form 1x 1.5x 2x OR 123w

    var descriptorRegex = /(^\d+w$)|(^([0-9](\.[0-9]+)?)x)$/;
    var srcsets = {};

    if (!sizes) {
      // Use default srcsets if none are provided
      srcsets = {
        '80w': '80w',
        '160w': '160w',
        '320w': '320w',
        '640w': '640w',
        '960w': '960w',
        '1280w': '1280w',
        '1920w': '1920w',
        '2560w': '2560w'
      };
    } else if (sizes === Object(sizes) && !Object.keys(sizes).some(function (descriptor) {
      return !(descriptorRegex.test(descriptor) && sizeRegex.test(sizes[descriptor]));
    })) {
      // If object consists of valid srcsets, use it instead
      srcsets = sizes; // If there's only one argument, return a `src` only (also works for `srcset`)

      if (Object.keys(srcsets).length === 1) {
        return url.replace('{:size}', srcsets[Object.keys(srcsets)[0]]);
      }
    } else {
      throw new Error('Invalid srcset descriptor or size');
    } // eslint-disable-next-line new-cap


    return Object.keys(srcsets).map(function (descriptor) {
      return [url.replace('{:size}', srcsets[descriptor]), descriptor].join(' ');
    }).join(', ');
  };

  return _default;
}();



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/tools/storage.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/tools/storage.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
var _default = /*#__PURE__*/function () {
  function _default() {}

  var _proto = _default.prototype;

  /**
   * Check if a storage type (like localStorage or sessionStorage) is available for use
   * https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Testing_for_availability
   * @param type
   * @returns boolean
   */
  _proto.storageAvailable = function storageAvailable(type) {
    var storage = window[type];

    try {
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return e instanceof DOMException && ( // everything except Firefox
      e.code === 22 || // Firefox
      e.code === 1014 || // test name field too, because code might not be present
      // everything except Firefox
      e.name === 'QuotaExceededError' || // Firefox
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && // acknowledge QuotaExceededError only if there's something already stored
      storage.length !== 0;
    }
  };

  _proto.localStorageAvailable = function localStorageAvailable() {
    return this.storageAvailable('localStorage');
  };

  return _default;
}();



/***/ }),

/***/ "./node_modules/decode-uri-component/index.js":
/*!****************************************************!*\
  !*** ./node_modules/decode-uri-component/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ "./node_modules/eventemitter2/lib/eventemitter2.js":
/*!*********************************************************!*\
  !*** ./node_modules/eventemitter2/lib/eventemitter2.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * EventEmitter2
 * https://github.com/hij1nx/EventEmitter2
 *
 * Copyright (c) 2013 hij1nx
 * Licensed under the MIT license.
 */
;!function(undefined) {

  var isArray = Array.isArray ? Array.isArray : function _isArray(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  };
  var defaultMaxListeners = 10;

  function init() {
    this._events = {};
    if (this._conf) {
      configure.call(this, this._conf);
    }
  }

  function configure(conf) {
    if (conf) {

      this._conf = conf;

      conf.delimiter && (this.delimiter = conf.delimiter);
      conf.maxListeners && (this._events.maxListeners = conf.maxListeners);
      conf.wildcard && (this.wildcard = conf.wildcard);
      conf.newListener && (this.newListener = conf.newListener);

      if (this.wildcard) {
        this.listenerTree = {};
      }
    }
  }

  function EventEmitter(conf) {
    this._events = {};
    this.newListener = false;
    configure.call(this, conf);
  }

  //
  // Attention, function return type now is array, always !
  // It has zero elements if no any matches found and one or more
  // elements (leafs) if there are matches
  //
  function searchListenerTree(handlers, type, tree, i) {
    if (!tree) {
      return [];
    }
    var listeners=[], leaf, len, branch, xTree, xxTree, isolatedBranch, endReached,
        typeLength = type.length, currentType = type[i], nextType = type[i+1];
    if (i === typeLength && tree._listeners) {
      //
      // If at the end of the event(s) list and the tree has listeners
      // invoke those listeners.
      //
      if (typeof tree._listeners === 'function') {
        handlers && handlers.push(tree._listeners);
        return [tree];
      } else {
        for (leaf = 0, len = tree._listeners.length; leaf < len; leaf++) {
          handlers && handlers.push(tree._listeners[leaf]);
        }
        return [tree];
      }
    }

    if ((currentType === '*' || currentType === '**') || tree[currentType]) {
      //
      // If the event emitted is '*' at this part
      // or there is a concrete match at this patch
      //
      if (currentType === '*') {
        for (branch in tree) {
          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
            listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+1));
          }
        }
        return listeners;
      } else if(currentType === '**') {
        endReached = (i+1 === typeLength || (i+2 === typeLength && nextType === '*'));
        if(endReached && tree._listeners) {
          // The next element has a _listeners, add it to the handlers.
          listeners = listeners.concat(searchListenerTree(handlers, type, tree, typeLength));
        }

        for (branch in tree) {
          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
            if(branch === '*' || branch === '**') {
              if(tree[branch]._listeners && !endReached) {
                listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], typeLength));
              }
              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
            } else if(branch === nextType) {
              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+2));
            } else {
              // No match on this one, shift into the tree but not in the type array.
              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
            }
          }
        }
        return listeners;
      }

      listeners = listeners.concat(searchListenerTree(handlers, type, tree[currentType], i+1));
    }

    xTree = tree['*'];
    if (xTree) {
      //
      // If the listener tree will allow any match for this part,
      // then recursively explore all branches of the tree
      //
      searchListenerTree(handlers, type, xTree, i+1);
    }

    xxTree = tree['**'];
    if(xxTree) {
      if(i < typeLength) {
        if(xxTree._listeners) {
          // If we have a listener on a '**', it will catch all, so add its handler.
          searchListenerTree(handlers, type, xxTree, typeLength);
        }

        // Build arrays of matching next branches and others.
        for(branch in xxTree) {
          if(branch !== '_listeners' && xxTree.hasOwnProperty(branch)) {
            if(branch === nextType) {
              // We know the next element will match, so jump twice.
              searchListenerTree(handlers, type, xxTree[branch], i+2);
            } else if(branch === currentType) {
              // Current node matches, move into the tree.
              searchListenerTree(handlers, type, xxTree[branch], i+1);
            } else {
              isolatedBranch = {};
              isolatedBranch[branch] = xxTree[branch];
              searchListenerTree(handlers, type, { '**': isolatedBranch }, i+1);
            }
          }
        }
      } else if(xxTree._listeners) {
        // We have reached the end and still on a '**'
        searchListenerTree(handlers, type, xxTree, typeLength);
      } else if(xxTree['*'] && xxTree['*']._listeners) {
        searchListenerTree(handlers, type, xxTree['*'], typeLength);
      }
    }

    return listeners;
  }

  function growListenerTree(type, listener) {

    type = typeof type === 'string' ? type.split(this.delimiter) : type.slice();

    //
    // Looks for two consecutive '**', if so, don't add the event at all.
    //
    for(var i = 0, len = type.length; i+1 < len; i++) {
      if(type[i] === '**' && type[i+1] === '**') {
        return;
      }
    }

    var tree = this.listenerTree;
    var name = type.shift();

    while (name) {

      if (!tree[name]) {
        tree[name] = {};
      }

      tree = tree[name];

      if (type.length === 0) {

        if (!tree._listeners) {
          tree._listeners = listener;
        }
        else if(typeof tree._listeners === 'function') {
          tree._listeners = [tree._listeners, listener];
        }
        else if (isArray(tree._listeners)) {

          tree._listeners.push(listener);

          if (!tree._listeners.warned) {

            var m = defaultMaxListeners;

            if (typeof this._events.maxListeners !== 'undefined') {
              m = this._events.maxListeners;
            }

            if (m > 0 && tree._listeners.length > m) {

              tree._listeners.warned = true;
              console.error('(node) warning: possible EventEmitter memory ' +
                            'leak detected. %d listeners added. ' +
                            'Use emitter.setMaxListeners() to increase limit.',
                            tree._listeners.length);
              console.trace();
            }
          }
        }
        return true;
      }
      name = type.shift();
    }
    return true;
  }

  // By default EventEmitters will print a warning if more than
  // 10 listeners are added to it. This is a useful default which
  // helps finding memory leaks.
  //
  // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.

  EventEmitter.prototype.delimiter = '.';

  EventEmitter.prototype.setMaxListeners = function(n) {
    this._events || init.call(this);
    this._events.maxListeners = n;
    if (!this._conf) this._conf = {};
    this._conf.maxListeners = n;
  };

  EventEmitter.prototype.event = '';

  EventEmitter.prototype.once = function(event, fn) {
    this.many(event, 1, fn);
    return this;
  };

  EventEmitter.prototype.many = function(event, ttl, fn) {
    var self = this;

    if (typeof fn !== 'function') {
      throw new Error('many only accepts instances of Function');
    }

    function listener() {
      if (--ttl === 0) {
        self.off(event, listener);
      }
      fn.apply(this, arguments);
    }

    listener._origin = fn;

    this.on(event, listener);

    return self;
  };

  EventEmitter.prototype.emit = function() {

    this._events || init.call(this);

    var type = arguments[0];

    if (type === 'newListener' && !this.newListener) {
      if (!this._events.newListener) { return false; }
    }

    // Loop through the *_all* functions and invoke them.
    if (this._all) {
      var l = arguments.length;
      var args = new Array(l - 1);
      for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
      for (i = 0, l = this._all.length; i < l; i++) {
        this.event = type;
        this._all[i].apply(this, args);
      }
    }

    // If there is no 'error' event listener then throw.
    if (type === 'error') {

      if (!this._all &&
        !this._events.error &&
        !(this.wildcard && this.listenerTree.error)) {

        if (arguments[1] instanceof Error) {
          throw arguments[1]; // Unhandled 'error' event
        } else {
          throw new Error("Uncaught, unspecified 'error' event.");
        }
        return false;
      }
    }

    var handler;

    if(this.wildcard) {
      handler = [];
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
    }
    else {
      handler = this._events[type];
    }

    if (typeof handler === 'function') {
      this.event = type;
      if (arguments.length === 1) {
        handler.call(this);
      }
      else if (arguments.length > 1)
        switch (arguments.length) {
          case 2:
            handler.call(this, arguments[1]);
            break;
          case 3:
            handler.call(this, arguments[1], arguments[2]);
            break;
          // slower
          default:
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
            handler.apply(this, args);
        }
      return true;
    }
    else if (handler) {
      var l = arguments.length;
      var args = new Array(l - 1);
      for (var i = 1; i < l; i++) args[i - 1] = arguments[i];

      var listeners = handler.slice();
      for (var i = 0, l = listeners.length; i < l; i++) {
        this.event = type;
        listeners[i].apply(this, args);
      }
      return (listeners.length > 0) || !!this._all;
    }
    else {
      return !!this._all;
    }

  };

  EventEmitter.prototype.on = function(type, listener) {

    if (typeof type === 'function') {
      this.onAny(type);
      return this;
    }

    if (typeof listener !== 'function') {
      throw new Error('on only accepts instances of Function');
    }
    this._events || init.call(this);

    // To avoid recursion in the case that type == "newListeners"! Before
    // adding it to the listeners, first emit "newListeners".
    this.emit('newListener', type, listener);

    if(this.wildcard) {
      growListenerTree.call(this, type, listener);
      return this;
    }

    if (!this._events[type]) {
      // Optimize the case of one listener. Don't need the extra array object.
      this._events[type] = listener;
    }
    else if(typeof this._events[type] === 'function') {
      // Adding the second element, need to change to array.
      this._events[type] = [this._events[type], listener];
    }
    else if (isArray(this._events[type])) {
      // If we've already got an array, just append.
      this._events[type].push(listener);

      // Check for listener leak
      if (!this._events[type].warned) {

        var m = defaultMaxListeners;

        if (typeof this._events.maxListeners !== 'undefined') {
          m = this._events.maxListeners;
        }

        if (m > 0 && this._events[type].length > m) {

          this._events[type].warned = true;
          console.error('(node) warning: possible EventEmitter memory ' +
                        'leak detected. %d listeners added. ' +
                        'Use emitter.setMaxListeners() to increase limit.',
                        this._events[type].length);
          console.trace();
        }
      }
    }
    return this;
  };

  EventEmitter.prototype.onAny = function(fn) {

    if (typeof fn !== 'function') {
      throw new Error('onAny only accepts instances of Function');
    }

    if(!this._all) {
      this._all = [];
    }

    // Add the function to the event listener collection.
    this._all.push(fn);
    return this;
  };

  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

  EventEmitter.prototype.off = function(type, listener) {
    if (typeof listener !== 'function') {
      throw new Error('removeListener only takes instances of Function');
    }

    var handlers,leafs=[];

    if(this.wildcard) {
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
    }
    else {
      // does not use listeners(), so no side effect of creating _events[type]
      if (!this._events[type]) return this;
      handlers = this._events[type];
      leafs.push({_listeners:handlers});
    }

    for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
      var leaf = leafs[iLeaf];
      handlers = leaf._listeners;
      if (isArray(handlers)) {

        var position = -1;

        for (var i = 0, length = handlers.length; i < length; i++) {
          if (handlers[i] === listener ||
            (handlers[i].listener && handlers[i].listener === listener) ||
            (handlers[i]._origin && handlers[i]._origin === listener)) {
            position = i;
            break;
          }
        }

        if (position < 0) {
          continue;
        }

        if(this.wildcard) {
          leaf._listeners.splice(position, 1);
        }
        else {
          this._events[type].splice(position, 1);
        }

        if (handlers.length === 0) {
          if(this.wildcard) {
            delete leaf._listeners;
          }
          else {
            delete this._events[type];
          }
        }
        return this;
      }
      else if (handlers === listener ||
        (handlers.listener && handlers.listener === listener) ||
        (handlers._origin && handlers._origin === listener)) {
        if(this.wildcard) {
          delete leaf._listeners;
        }
        else {
          delete this._events[type];
        }
      }
    }

    return this;
  };

  EventEmitter.prototype.offAny = function(fn) {
    var i = 0, l = 0, fns;
    if (fn && this._all && this._all.length > 0) {
      fns = this._all;
      for(i = 0, l = fns.length; i < l; i++) {
        if(fn === fns[i]) {
          fns.splice(i, 1);
          return this;
        }
      }
    } else {
      this._all = [];
    }
    return this;
  };

  EventEmitter.prototype.removeListener = EventEmitter.prototype.off;

  EventEmitter.prototype.removeAllListeners = function(type) {
    if (arguments.length === 0) {
      !this._events || init.call(this);
      return this;
    }

    if(this.wildcard) {
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      var leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);

      for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
        var leaf = leafs[iLeaf];
        leaf._listeners = null;
      }
    }
    else {
      if (!this._events[type]) return this;
      this._events[type] = null;
    }
    return this;
  };

  EventEmitter.prototype.listeners = function(type) {
    if(this.wildcard) {
      var handlers = [];
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
      return handlers;
    }

    this._events || init.call(this);

    if (!this._events[type]) this._events[type] = [];
    if (!isArray(this._events[type])) {
      this._events[type] = [this._events[type]];
    }
    return this._events[type];
  };

  EventEmitter.prototype.listenersAny = function() {

    if(this._all) {
      return this._all;
    }
    else {
      return [];
    }

  };

  if (true) {
     // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return EventEmitter;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}();


/***/ }),

/***/ "./node_modules/jquery/dist/jquery.min.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/dist/jquery.min.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v3.6.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict"; true&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,y,s,c,v,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[S]&&(y=Ce(y)),v&&!v[S]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function $(){E.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||S.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(t,e){S.event.special[t]={setup:function(){return Se(this,t,Ce),!1},trigger:function(){return Se(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&(a=a.replace($e,"$1")),""!==a||ie(e)||(a=S.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=E.createElement("div").style,Xe={};function Ve(e){var t=S.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return B(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return B(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){S(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=S(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:yt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},v.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),v.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,S.ajaxSettings),t):Bt(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=S.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?S(v):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=E.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=S.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=S.event&&y.global)&&0==S.active++&&S.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(Et.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<S.inArray("script",y.dataTypes)&&S.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")}, true&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return S}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/query-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/query-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "./node_modules/strict-uri-encode/index.js");
var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var decodeComponent = __webpack_require__(/*! decode-uri-component */ "./node_modules/decode-uri-component/index.js");

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

function extract(str) {
	var queryStart = str.indexOf('?');
	if (queryStart === -1) {
		return '';
	}
	return str.slice(queryStart + 1);
}

function parse(str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^[?#&]/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeComponent(val);

		formatter(decodeComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	if (opts.sort === false) {
		opts.sort = function () {};
	}

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort(opts.sort).map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

exports.parseUrl = function (str, opts) {
	return {
		url: str.split('?')[0] || '',
		query: parse(extract(str), opts)
	};
};


/***/ }),

/***/ "./node_modules/strict-uri-encode/index.js":
/*!*************************************************!*\
  !*** ./node_modules/strict-uri-encode/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.min.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.min.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function i(t,e,n){return(i=d()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&l(i,n.prototype),i}).apply(null,arguments)}function p(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t,e,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function m(e){return Object.keys(e).map(function(t){return e[t]})}function h(t){return Array.prototype.slice.call(t)}function g(t,e){var n;n='"'.concat(t,'" is deprecated and will be removed in the next major release. Please use "').concat(e,'" instead.'),-1===z.indexOf(n)&&(z.push(n),_(n))}function v(t){return t&&"function"==typeof t.toPromise}function b(t){return v(t)?t.toPromise():Promise.resolve(t)}function y(t){return t&&Promise.resolve(t)===t}function w(t){return t instanceof Element||"object"===r(e=t)&&e.jquery;var e}function t(t){var e={};for(var n in t)e[t[n]]="swal2-"+t[n];return e}function C(t){var e=Q();return e?e.querySelector(t):null}function e(t){return C(".".concat(t))}function n(){var t=$();return h(t.querySelectorAll(".".concat(Y.icon)))}function k(){var t=n().filter(function(t){return vt(t)});return t.length?t[0]:null}function x(){return e(Y.title)}function P(){return e(Y.content)}function A(){return e(Y.image)}function B(){return e(Y["progress-steps"])}function S(){return e(Y["validation-message"])}function E(){return C(".".concat(Y.actions," .").concat(Y.confirm))}function O(){return C(".".concat(Y.actions," .").concat(Y.cancel))}function T(){return e(Y.actions)}function L(){return e(Y.header)}function j(){return e(Y.footer)}function q(){return e(Y["timer-progress-bar"])}function I(){return e(Y.close)}function V(){var t=h($().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(t,e){return t=parseInt(t.getAttribute("tabindex")),(e=parseInt(e.getAttribute("tabindex")))<t?1:t<e?-1:0}),e=h($().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(function(t){return"-1"!==t.getAttribute("tabindex")});return function(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}(t.concat(e)).filter(function(t){return vt(t)})}function M(){return!J()&&!document.body.classList.contains(Y["no-backdrop"])}function R(){return $().hasAttribute("data-loading")}function H(e,t){var n;e.textContent="",t&&(n=(new DOMParser).parseFromString(t,"text/html"),h(n.querySelector("head").childNodes).forEach(function(t){e.appendChild(t)}),h(n.querySelector("body").childNodes).forEach(function(t){e.appendChild(t)}))}function D(t,e){if(e){for(var n=e.split(/\s+/),o=0;o<n.length;o++)if(!t.classList.contains(n[o]))return;return 1}}function N(t,e,n){var o,i;if(i=e,h((o=t).classList).forEach(function(t){-1===m(Y).indexOf(t)&&-1===m(Z).indexOf(t)&&-1===m(i.showClass).indexOf(t)&&o.classList.remove(t)}),e.customClass&&e.customClass[n]){if("string"!=typeof e.customClass[n]&&!e.customClass[n].forEach)return _("Invalid type of customClass.".concat(n,'! Expected string or iterable object, got "').concat(r(e.customClass[n]),'"'));mt(t,e.customClass[n])}}var U="SweetAlert2:",_=function(t){console.warn("".concat(U," ").concat(t))},F=function(t){console.error("".concat(U," ").concat(t))},z=[],W=function(t){return"function"==typeof t?t():t},K=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Y=t(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","toast-column","show","hide","close","title","header","content","html-container","actions","confirm","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),Z=t(["success","warning","info","question","error"]),Q=function(){return document.body.querySelector(".".concat(Y.container))},$=function(){return e(Y.popup)},J=function(){return document.body.classList.contains(Y["toast-shown"])},X={previousBodyPadding:null};function G(t,e){if(!e)return null;switch(e){case"select":case"textarea":case"file":return gt(t,Y[e]);case"checkbox":return t.querySelector(".".concat(Y.checkbox," input"));case"radio":return t.querySelector(".".concat(Y.radio," input:checked"))||t.querySelector(".".concat(Y.radio," input:first-child"));case"range":return t.querySelector(".".concat(Y.range," input"));default:return gt(t,Y.input)}}function tt(t){var e;t.focus(),"file"!==t.type&&(e=t.value,t.value="",t.value=e)}function et(t,e,n){t&&e&&("string"==typeof e&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(function(e){t.forEach?t.forEach(function(t){n?t.classList.add(e):t.classList.remove(e)}):n?t.classList.add(e):t.classList.remove(e)}))}function nt(t,e,n){n||0===parseInt(n)?t.style[e]="number"==typeof n?"".concat(n,"px"):n:t.style.removeProperty(e)}function ot(t,e){var n=1<arguments.length&&void 0!==e?e:"flex";t.style.opacity="",t.style.display=n}function it(t){t.style.opacity="",t.style.display="none"}function rt(t,e,n){e?ot(t,n):it(t)}function at(t){return!!(t.scrollHeight>t.clientHeight)}function ct(t){var e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),o=parseFloat(e.getPropertyValue("transition-duration")||"0");return 0<n||0<o}function st(t,e){var n=1<arguments.length&&void 0!==e&&e,o=q();vt(o)&&(n&&(o.style.transition="none",o.style.width="100%"),setTimeout(function(){o.style.transition="width ".concat(t/1e3,"s linear"),o.style.width="0%"},10))}function ut(){return"undefined"==typeof window||"undefined"==typeof document}function lt(t){sn.isVisible()&&ft!==t.target.value&&sn.resetValidationMessage(),ft=t.target.value}function dt(t,e){t instanceof HTMLElement?e.appendChild(t):"object"===r(t)?wt(t,e):t&&H(e,t)}function pt(t,e){var n=T(),o=E(),i=O();e.showConfirmButton||e.showCancelButton||it(n),N(n,e,"actions"),xt(o,"confirm",e),xt(i,"cancel",e),e.buttonsStyling?function(t,e,n){mt([t,e],Y.styled),n.confirmButtonColor&&(t.style.backgroundColor=n.confirmButtonColor);n.cancelButtonColor&&(e.style.backgroundColor=n.cancelButtonColor);{var o;R()||(o=window.getComputedStyle(t).getPropertyValue("background-color"),t.style.borderLeftColor=o,t.style.borderRightColor=o)}}(o,i,e):(ht([o,i],Y.styled),o.style.backgroundColor=o.style.borderLeftColor=o.style.borderRightColor="",i.style.backgroundColor=i.style.borderLeftColor=i.style.borderRightColor=""),e.reverseButtons&&o.parentNode.insertBefore(i,o)}var ft,mt=function(t,e){et(t,e,!0)},ht=function(t,e){et(t,e,!1)},gt=function(t,e){for(var n=0;n<t.childNodes.length;n++)if(D(t.childNodes[n],e))return t.childNodes[n]},vt=function(t){return!(!t||!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))},bt='\n <div aria-labelledby="'.concat(Y.title,'" aria-describedby="').concat(Y.content,'" class="').concat(Y.popup,'" tabindex="-1">\n   <div class="').concat(Y.header,'">\n     <ul class="').concat(Y["progress-steps"],'"></ul>\n     <div class="').concat(Y.icon," ").concat(Z.error,'"></div>\n     <div class="').concat(Y.icon," ").concat(Z.question,'"></div>\n     <div class="').concat(Y.icon," ").concat(Z.warning,'"></div>\n     <div class="').concat(Y.icon," ").concat(Z.info,'"></div>\n     <div class="').concat(Y.icon," ").concat(Z.success,'"></div>\n     <img class="').concat(Y.image,'" />\n     <h2 class="').concat(Y.title,'" id="').concat(Y.title,'"></h2>\n     <button type="button" class="').concat(Y.close,'"></button>\n   </div>\n   <div class="').concat(Y.content,'">\n     <div id="').concat(Y.content,'" class="').concat(Y["html-container"],'"></div>\n     <input class="').concat(Y.input,'" />\n     <input type="file" class="').concat(Y.file,'" />\n     <div class="').concat(Y.range,'">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(Y.select,'"></select>\n     <div class="').concat(Y.radio,'"></div>\n     <label for="').concat(Y.checkbox,'" class="').concat(Y.checkbox,'">\n       <input type="checkbox" />\n       <span class="').concat(Y.label,'"></span>\n     </label>\n     <textarea class="').concat(Y.textarea,'"></textarea>\n     <div class="').concat(Y["validation-message"],'" id="').concat(Y["validation-message"],'"></div>\n   </div>\n   <div class="').concat(Y.actions,'">\n     <button type="button" class="').concat(Y.confirm,'">OK</button>\n     <button type="button" class="').concat(Y.cancel,'">Cancel</button>\n   </div>\n   <div class="').concat(Y.footer,'"></div>\n   <div class="').concat(Y["timer-progress-bar-container"],'">\n     <div class="').concat(Y["timer-progress-bar"],'"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),yt=function(t){var e,n,o,i,r,a,c,s,u,l,d,p,f,m,h,g=!!(e=Q())&&(e.parentNode.removeChild(e),ht([document.documentElement,document.body],[Y["no-backdrop"],Y["toast-shown"],Y["has-column"]]),!0);ut()?F("SweetAlert2 requires document to initialize"):((n=document.createElement("div")).className=Y.container,g&&mt(n,Y["no-transition"]),H(n,bt),(o="string"==typeof(i=t.target)?document.querySelector(i):i).appendChild(n),r=t,(a=$()).setAttribute("role",r.toast?"alert":"dialog"),a.setAttribute("aria-live",r.toast?"polite":"assertive"),r.toast||a.setAttribute("aria-modal","true"),c=o,"rtl"===window.getComputedStyle(c).direction&&mt(Q(),Y.rtl),s=P(),u=gt(s,Y.input),l=gt(s,Y.file),d=s.querySelector(".".concat(Y.range," input")),p=s.querySelector(".".concat(Y.range," output")),f=gt(s,Y.select),m=s.querySelector(".".concat(Y.checkbox," input")),h=gt(s,Y.textarea),u.oninput=lt,l.onchange=lt,f.onchange=lt,m.onchange=lt,h.oninput=lt,d.oninput=function(t){lt(t),p.value=d.value},d.onchange=function(t){lt(t),d.nextSibling.value=d.value})},wt=function(t,e){t.jquery?Ct(e,t):H(e,t.toString())},Ct=function(t,e){if(t.textContent="",0 in e)for(var n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},kt=function(){if(ut())return!1;var t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&void 0!==t.style[n])return e[n];return!1}();function xt(t,e,n){var o;rt(t,n["show".concat((o=e).charAt(0).toUpperCase()+o.slice(1),"Button")],"inline-block"),H(t,n["".concat(e,"ButtonText")]),t.setAttribute("aria-label",n["".concat(e,"ButtonAriaLabel")]),t.className=Y[e],N(t,n,"".concat(e,"Button")),mt(t,n["".concat(e,"ButtonClass")])}function Pt(t,e){var n,o,i,r,a,c,s,u,l=Q();l&&(n=l,"string"==typeof(o=e.backdrop)?n.style.background=o:o||mt([document.documentElement,document.body],Y["no-backdrop"]),!e.backdrop&&e.allowOutsideClick&&_('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),i=l,(r=e.position)in Y?mt(i,Y[r]):(_('The "position" parameter is not valid, defaulting to "center"'),mt(i,Y.center)),a=l,!(c=e.grow)||"string"!=typeof c||(s="grow-".concat(c))in Y&&mt(a,Y[s]),N(l,e,"container"),(u=document.body.getAttribute("data-swal2-queue-step"))&&(l.setAttribute("data-queue-step",u),document.body.removeAttribute("data-swal2-queue-step")))}function At(t,e){t.placeholder&&!e.inputPlaceholder||(t.placeholder=e.inputPlaceholder)}var Bt={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},St=["input","file","range","select","radio","checkbox","textarea"],Et=function(t){if(!jt[t.input])return F('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input,'"'));var e=Lt(t.input),n=jt[t.input](e,t);ot(n),setTimeout(function(){tt(n)})},Ot=function(t,e){var n=G(P(),t);if(n)for(var o in!function(t){for(var e=0;e<t.attributes.length;e++){var n=t.attributes[e].name;-1===["type","value","style"].indexOf(n)&&t.removeAttribute(n)}}(n),e)"range"===t&&"placeholder"===o||n.setAttribute(o,e[o])},Tt=function(t){var e=Lt(t.input);t.customClass&&mt(e,t.customClass.input)},Lt=function(t){var e=Y[t]?Y[t]:Y.input;return gt(P(),e)},jt={};jt.text=jt.email=jt.password=jt.number=jt.tel=jt.url=function(t,e){return"string"==typeof e.inputValue||"number"==typeof e.inputValue?t.value=e.inputValue:y(e.inputValue)||_('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(r(e.inputValue),'"')),At(t,e),t.type=e.input,t},jt.file=function(t,e){return At(t,e),t},jt.range=function(t,e){var n=t.querySelector("input"),o=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,o.value=e.inputValue,t},jt.select=function(t,e){var n;return t.textContent="",e.inputPlaceholder&&(n=document.createElement("option"),H(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)),t},jt.radio=function(t){return t.textContent="",t},jt.checkbox=function(t,e){var n=G(P(),"checkbox");n.value=1,n.id=Y.checkbox,n.checked=Boolean(e.inputValue);var o=t.querySelector("span");return H(o,e.inputPlaceholder),t},jt.textarea=function(e,t){var n,o;return e.value=t.inputValue,At(e,t),"MutationObserver"in window&&(n=parseInt(window.getComputedStyle($()).width),o=parseInt(window.getComputedStyle($()).paddingLeft)+parseInt(window.getComputedStyle($()).paddingRight),new MutationObserver(function(){var t=e.offsetWidth+o;$().style.width=n<t?"".concat(t,"px"):null}).observe(e,{attributes:!0,attributeFilter:["style"]})),e};function qt(t,e){var n,o,i,r,a,c=P().querySelector("#".concat(Y.content));e.html?(dt(e.html,c),ot(c,"block")):e.text?(c.textContent=e.text,ot(c,"block")):it(c),n=t,o=e,i=P(),r=Bt.innerParams.get(n),a=!r||o.input!==r.input,St.forEach(function(t){var e=Y[t],n=gt(i,e);Ot(t,o.inputAttributes),n.className=e,a&&it(n)}),o.input&&(a&&Et(o),Tt(o)),N(P(),e,"content")}function It(){return Q()&&Q().getAttribute("data-queue-step")}function Vt(t,s){var u=B();if(!s.progressSteps||0===s.progressSteps.length)return it(u),0;ot(u),u.textContent="";var l=parseInt(void 0===s.currentProgressStep?It():s.currentProgressStep);l>=s.progressSteps.length&&_("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),s.progressSteps.forEach(function(t,e){var n,o,i,r,a,c=(n=t,o=document.createElement("li"),mt(o,Y["progress-step"]),H(o,n),o);u.appendChild(c),e===l&&mt(c,Y["active-progress-step"]),e!==s.progressSteps.length-1&&(r=s,a=document.createElement("li"),mt(a,Y["progress-step-line"]),r.progressStepsDistance&&(a.style.width=r.progressStepsDistance),i=a,u.appendChild(i))})}function Mt(t,e){var n,o,i,r,a,c,s,u,l=L();N(l,e,"header"),Vt(0,e),n=t,o=e,(r=Bt.innerParams.get(n))&&o.icon===r.icon&&k()?N(k(),o,"icon"):(Dt(),o.icon&&(-1!==Object.keys(Z).indexOf(o.icon)?(i=C(".".concat(Y.icon,".").concat(Z[o.icon])),ot(i),Ut(i,o),Nt(),N(i,o,"icon"),mt(i,o.showClass.icon)):F('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(o.icon,'"')))),function(t){var e=A();if(!t.imageUrl)return it(e);ot(e,""),e.setAttribute("src",t.imageUrl),e.setAttribute("alt",t.imageAlt),nt(e,"width",t.imageWidth),nt(e,"height",t.imageHeight),e.className=Y.image,N(e,t,"image")}(e),a=e,c=x(),rt(c,a.title||a.titleText),a.title&&dt(a.title,c),a.titleText&&(c.innerText=a.titleText),N(c,a,"title"),s=e,u=I(),H(u,s.closeButtonHtml),N(u,s,"closeButton"),rt(u,s.showCloseButton),u.setAttribute("aria-label",s.closeButtonAriaLabel)}function Rt(t,e){var n,o,i,r;n=e,o=$(),nt(o,"width",n.width),nt(o,"padding",n.padding),n.background&&(o.style.background=n.background),zt(o,n),Pt(0,e),Mt(t,e),qt(t,e),pt(0,e),i=e,r=j(),rt(r,i.footer),i.footer&&dt(i.footer,r),N(r,i,"footer"),"function"==typeof e.onRender&&e.onRender($())}function Ht(){return E()&&E().click()}var Dt=function(){for(var t=n(),e=0;e<t.length;e++)it(t[e])},Nt=function(){for(var t=$(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),o=0;o<n.length;o++)n[o].style.backgroundColor=e},Ut=function(t,e){t.textContent="",e.iconHtml?H(t,_t(e.iconHtml)):"success"===e.icon?H(t,'\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    '):"error"===e.icon?H(t,'\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    '):H(t,_t({question:"?",warning:"!",info:"i"}[e.icon]))},_t=function(t){return'<div class="'.concat(Y["icon-content"],'">').concat(t,"</div>")},Ft=[],zt=function(t,e){t.className="".concat(Y.popup," ").concat(vt(t)?e.showClass.popup:""),e.toast?(mt([document.documentElement,document.body],Y["toast-shown"]),mt(t,Y.toast)):mt(t,Y.modal),N(t,e,"popup"),"string"==typeof e.customClass&&mt(t,e.customClass),e.icon&&mt(t,Y["icon-".concat(e.icon)])};function Wt(){var t=$();t||sn.fire(),t=$();var e=T(),n=E();ot(e),ot(n,"inline-block"),mt([t,e],Y.loading),n.disabled=!0,t.setAttribute("data-loading",!0),t.setAttribute("aria-busy",!0),t.focus()}function Kt(){return new Promise(function(t){var e=window.scrollX,n=window.scrollY;Xt.restoreFocusTimeout=setTimeout(function(){Xt.previousActiveElement&&Xt.previousActiveElement.focus?(Xt.previousActiveElement.focus(),Xt.previousActiveElement=null):document.body&&document.body.focus(),t()},100),void 0!==e&&void 0!==n&&window.scrollTo(e,n)})}function Yt(){if(Xt.timeout)return function(){var t=q(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";var n=parseInt(window.getComputedStyle(t).width),o=parseInt(e/n*100);t.style.removeProperty("transition"),t.style.width="".concat(o,"%")}(),Xt.timeout.stop()}function Zt(){if(Xt.timeout){var t=Xt.timeout.start();return st(t),t}}function Qt(t){return Object.prototype.hasOwnProperty.call(Gt,t)}function $t(t){return ee[t]}function Jt(t){for(var e in t)Qt(i=e)||_('Unknown parameter "'.concat(i,'"')),t.toast&&(o=e,-1!==ne.indexOf(o)&&_('The parameter "'.concat(o,'" is incompatible with toasts'))),$t(n=e)&&g(n,$t(n));var n,o,i}var Xt={},Gt={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconHtml:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:void 0,target:"body",backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showCancelButton:!1,preConfirm:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",showLoaderOnConfirm:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,onBeforeOpen:void 0,onOpen:void 0,onRender:void 0,onClose:void 0,onAfterClose:void 0,onDestroy:void 0,scrollbarPadding:!0},te=["allowEscapeKey","allowOutsideClick","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","footer","hideClass","html","icon","imageAlt","imageHeight","imageUrl","imageWidth","onAfterClose","onClose","onDestroy","progressSteps","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","text","title","titleText"],ee={animation:'showClass" and "hideClass'},ne=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusCancel","heightAuto","keydownListenerCapture"],oe=Object.freeze({isValidParameter:Qt,isUpdatableParameter:function(t){return-1!==te.indexOf(t)},isDeprecatedParameter:$t,argsToParams:function(o){var i={};return"object"!==r(o[0])||w(o[0])?["title","html","icon"].forEach(function(t,e){var n=o[e];"string"==typeof n||w(n)?i[t]=n:void 0!==n&&F("Unexpected type of ".concat(t,'! Expected "string" or "Element", got ').concat(r(n)))}):s(i,o[0]),i},isVisible:function(){return vt($())},clickConfirm:Ht,clickCancel:function(){return O()&&O().click()},getContainer:Q,getPopup:$,getTitle:x,getContent:P,getHtmlContainer:function(){return e(Y["html-container"])},getImage:A,getIcon:k,getIcons:n,getCloseButton:I,getActions:T,getConfirmButton:E,getCancelButton:O,getHeader:L,getFooter:j,getTimerProgressBar:q,getFocusableElements:V,getValidationMessage:S,isLoading:R,fire:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return i(this,e)},mixin:function(r){return function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(i,t);var n,o,e=(n=i,o=d(),function(){var t,e=u(n);return p(this,o?(t=u(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))});function i(){return a(this,i),e.apply(this,arguments)}return c(i,[{key:"_main",value:function(t){return f(u(i.prototype),"_main",this).call(this,s({},r,t))}}]),i}(this)},queue:function(t){var r=this;Ft=t;function a(t,e){Ft=[],t(e)}var c=[];return new Promise(function(i){!function e(n,o){n<Ft.length?(document.body.setAttribute("data-swal2-queue-step",n),r.fire(Ft[n]).then(function(t){void 0!==t.value?(c.push(t.value),e(n+1,o)):a(i,{dismiss:t.dismiss})})):a(i,{value:c})}(0)})},getQueueStep:It,insertQueueStep:function(t,e){return e&&e<Ft.length?Ft.splice(e,0,t):Ft.push(t)},deleteQueueStep:function(t){void 0!==Ft[t]&&Ft.splice(t,1)},showLoading:Wt,enableLoading:Wt,getTimerLeft:function(){return Xt.timeout&&Xt.timeout.getTimerLeft()},stopTimer:Yt,resumeTimer:Zt,toggleTimer:function(){var t=Xt.timeout;return t&&(t.running?Yt:Zt)()},increaseTimer:function(t){if(Xt.timeout){var e=Xt.timeout.increase(t);return st(e,!0),e}},isTimerRunning:function(){return Xt.timeout&&Xt.timeout.isRunning()}});function ie(){var t,e=Bt.innerParams.get(this);e&&(t=Bt.domCache.get(this),e.showConfirmButton||(it(t.confirmButton),e.showCancelButton||it(t.actions)),ht([t.popup,t.actions],Y.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.cancelButton.disabled=!1)}function re(){null===X.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(X.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(X.previousBodyPadding+function(){var t=document.createElement("div");t.className=Y["scrollbar-measure"],document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e}(),"px"))}function ae(){return!!window.MSInputMethodContext&&!!document.documentMode}function ce(){var t=Q(),e=$();t.style.removeProperty("align-items"),e.offsetTop<0&&(t.style.alignItems="flex-start")}var se=function(){navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i)||$().scrollHeight>window.innerHeight-44&&(Q().style.paddingBottom="".concat(44,"px"))},ue=function(){var e,t=Q();t.ontouchstart=function(t){e=le(t.target)},t.ontouchmove=function(t){e&&(t.preventDefault(),t.stopPropagation())}},le=function(t){var e=Q();return t===e||!(at(e)||"INPUT"===t.tagName||at(P())&&P().contains(t))},de={swalPromiseResolve:new WeakMap};function pe(t,e,n,o){var i;n?he(t,o):(Kt().then(function(){return he(t,o)}),Xt.keydownTarget.removeEventListener("keydown",Xt.keydownHandler,{capture:Xt.keydownListenerCapture}),Xt.keydownHandlerAdded=!1),e.parentNode&&!document.body.getAttribute("data-swal2-queue-step")&&e.parentNode.removeChild(e),M()&&(null!==X.previousBodyPadding&&(document.body.style.paddingRight="".concat(X.previousBodyPadding,"px"),X.previousBodyPadding=null),D(document.body,Y.iosfix)&&(i=parseInt(document.body.style.top,10),ht(document.body,Y.iosfix),document.body.style.top="",document.body.scrollTop=-1*i),"undefined"!=typeof window&&ae()&&window.removeEventListener("resize",ce),h(document.body.children).forEach(function(t){t.hasAttribute("data-previous-aria-hidden")?(t.setAttribute("aria-hidden",t.getAttribute("data-previous-aria-hidden")),t.removeAttribute("data-previous-aria-hidden")):t.removeAttribute("aria-hidden")})),ht([document.documentElement,document.body],[Y.shown,Y["height-auto"],Y["no-backdrop"],Y["toast-shown"],Y["toast-column"]])}function fe(t){var e,n,o,i=$();i&&(e=Bt.innerParams.get(this))&&!D(i,e.hideClass.popup)&&(n=de.swalPromiseResolve.get(this),ht(i,e.showClass.popup),mt(i,e.hideClass.popup),o=Q(),ht(o,e.showClass.backdrop),mt(o,e.hideClass.backdrop),function(t,e,n){var o=Q(),i=kt&&ct(e),r=n.onClose,a=n.onAfterClose;if(r!==null&&typeof r==="function"){r(e)}if(i){me(t,e,o,a)}else{pe(t,o,J(),a)}}(this,i,e),void 0!==t?(t.isDismissed=void 0!==t.dismiss,t.isConfirmed=void 0===t.dismiss):t={isDismissed:!0,isConfirmed:!1},n(t||{}))}var me=function(t,e,n,o){Xt.swalCloseEventFinishedCallback=pe.bind(null,t,n,J(),o),e.addEventListener(kt,function(t){t.target===e&&(Xt.swalCloseEventFinishedCallback(),delete Xt.swalCloseEventFinishedCallback)})},he=function(t,e){setTimeout(function(){"function"==typeof e&&e(),t._destroy()})};function ge(t,e,n){var o=Bt.domCache.get(t);e.forEach(function(t){o[t].disabled=n})}function ve(t,e){if(!t)return!1;if("radio"===t.type)for(var n=t.parentNode.parentNode.querySelectorAll("input"),o=0;o<n.length;o++)n[o].disabled=e;else t.disabled=e}var be=function(){function n(t,e){a(this,n),this.callback=t,this.remaining=e,this.running=!1,this.start()}return c(n,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date-this.started),this.remaining}},{key:"increase",value:function(t){var e=this.running;return e&&this.stop(),this.remaining+=t,e&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}]),n}(),ye={email:function(t,e){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address")},url:function(t,e){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")}};function we(t){var e,n;(e=t).inputValidator||Object.keys(ye).forEach(function(t){e.input===t&&(e.inputValidator=ye[t])}),t.showLoaderOnConfirm&&!t.preConfirm&&_("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),t.animation=W(t.animation),(n=t).target&&("string"!=typeof n.target||document.querySelector(n.target))&&("string"==typeof n.target||n.target.appendChild)||(_('Target parameter is not valid, defaulting to "body"'),n.target="body"),"string"==typeof t.title&&(t.title=t.title.split("\n").join("<br />")),yt(t)}function Ce(t){var e=Q(),n=$();"function"==typeof t.onBeforeOpen&&t.onBeforeOpen(n);var o=window.getComputedStyle(document.body).overflowY;je(e,n,t),Te(e,n),M()&&(Le(e,t.scrollbarPadding,o),h(document.body.children).forEach(function(t){t===Q()||function(t,e){if("function"==typeof t.contains)return t.contains(e)}(t,Q())||(t.hasAttribute("aria-hidden")&&t.setAttribute("data-previous-aria-hidden",t.getAttribute("aria-hidden")),t.setAttribute("aria-hidden","true"))})),J()||Xt.previousActiveElement||(Xt.previousActiveElement=document.activeElement),"function"==typeof t.onOpen&&setTimeout(function(){return t.onOpen(n)}),ht(e,Y["no-transition"])}function ke(t){var e,n=$();t.target===n&&(e=Q(),n.removeEventListener(kt,ke),e.style.overflowY="auto")}function xe(t,e){"select"===e.input||"radio"===e.input?Me(t,e):-1!==["text","email","number","tel","textarea"].indexOf(e.input)&&(v(e.inputValue)||y(e.inputValue))&&Re(t,e)}function Pe(t,e){t.disableButtons(),e.input?Ne(t,e):Ue(t,e,!0)}function Ae(t,e){t.disableButtons(),e(K.cancel)}function Be(t,e){t.closePopup({value:e})}function Se(e,t,n,o){t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1),n.toast||(t.keydownHandler=function(t){return ze(e,t,o)},t.keydownTarget=n.keydownListenerCapture?window:$(),t.keydownListenerCapture=n.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)}function Ee(t,e,n){var o=V(),i=0;if(i<o.length)return(e+=n)===o.length?e=0:-1===e&&(e=o.length-1),o[e].focus();$().focus()}function Oe(t,e,n){Bt.innerParams.get(t).toast?Qe(t,e,n):(Je(e),Xe(e),Ge(t,e,n))}var Te=function(t,e){kt&&ct(e)?(t.style.overflowY="hidden",e.addEventListener(kt,ke)):t.style.overflowY="auto"},Le=function(t,e,n){var o;(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints)&&!D(document.body,Y.iosfix)&&(o=document.body.scrollTop,document.body.style.top="".concat(-1*o,"px"),mt(document.body,Y.iosfix),ue(),se()),"undefined"!=typeof window&&ae()&&(ce(),window.addEventListener("resize",ce)),e&&"hidden"!==n&&re(),setTimeout(function(){t.scrollTop=0})},je=function(t,e,n){mt(t,n.showClass.backdrop),ot(e),mt(e,n.showClass.popup),mt([document.documentElement,document.body],Y.shown),n.heightAuto&&n.backdrop&&!n.toast&&mt([document.documentElement,document.body],Y["height-auto"])},qe=function(t){return t.checked?1:0},Ie=function(t){return t.checked?t.value:null},Ve=function(t){return t.files.length?null!==t.getAttribute("multiple")?t.files:t.files[0]:null},Me=function(e,n){function o(t){return He[n.input](i,De(t),n)}var i=P();v(n.inputOptions)||y(n.inputOptions)?(Wt(),b(n.inputOptions).then(function(t){e.hideLoading(),o(t)})):"object"===r(n.inputOptions)?o(n.inputOptions):F("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(r(n.inputOptions)))},Re=function(e,n){var o=e.getInput();it(o),b(n.inputValue).then(function(t){o.value="number"===n.input?parseFloat(t)||0:"".concat(t),ot(o),o.focus(),e.hideLoading()}).catch(function(t){F("Error in inputValue promise: ".concat(t)),o.value="",ot(o),o.focus(),e.hideLoading()})},He={select:function(t,e,i){function r(t,e,n){var o=document.createElement("option");o.value=n,H(o,e),i.inputValue.toString()===n.toString()&&(o.selected=!0),t.appendChild(o)}var a=gt(t,Y.select);e.forEach(function(t){var e,n=t[0],o=t[1];Array.isArray(o)?((e=document.createElement("optgroup")).label=n,e.disabled=!1,a.appendChild(e),o.forEach(function(t){return r(e,t[1],t[0])})):r(a,o,n)}),a.focus()},radio:function(t,e,a){var c=gt(t,Y.radio);e.forEach(function(t){var e=t[0],n=t[1],o=document.createElement("input"),i=document.createElement("label");o.type="radio",o.name=Y.radio,o.value=e,a.inputValue.toString()===e.toString()&&(o.checked=!0);var r=document.createElement("span");H(r,n),r.className=Y.label,i.appendChild(o),i.appendChild(r),c.appendChild(i)});var n=c.querySelectorAll("input");n.length&&n[0].focus()}},De=function o(n){var i=[];return"undefined"!=typeof Map&&n instanceof Map?n.forEach(function(t,e){var n=t;"object"===r(n)&&(n=o(n)),i.push([e,n])}):Object.keys(n).forEach(function(t){var e=n[t];"object"===r(e)&&(e=o(e)),i.push([t,e])}),i},Ne=function(e,n){var o=function(t,e){var n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return qe(n);case"radio":return Ie(n);case"file":return Ve(n);default:return e.inputAutoTrim?n.value.trim():n.value}}(e,n);n.inputValidator?(e.disableInput(),Promise.resolve().then(function(){return b(n.inputValidator(o,n.validationMessage))}).then(function(t){e.enableButtons(),e.enableInput(),t?e.showValidationMessage(t):Ue(e,n,o)})):e.getInput().checkValidity()?Ue(e,n,o):(e.enableButtons(),e.showValidationMessage(n.validationMessage))},Ue=function(e,t,n){t.showLoaderOnConfirm&&Wt(),t.preConfirm?(e.resetValidationMessage(),Promise.resolve().then(function(){return b(t.preConfirm(n,t.validationMessage))}).then(function(t){vt(S())||!1===t?e.hideLoading():Be(e,void 0===t?n:t)})):Be(e,n)},_e=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Left","Right","Up","Down"],Fe=["Escape","Esc"],ze=function(t,e,n){var o=Bt.innerParams.get(t);o.stopKeydownPropagation&&e.stopPropagation(),"Enter"===e.key?We(t,e,o):"Tab"===e.key?Ke(e,o):-1!==_e.indexOf(e.key)?Ye():-1!==Fe.indexOf(e.key)&&Ze(e,o,n)},We=function(t,e,n){if(!e.isComposing&&e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML){if(-1!==["textarea","file"].indexOf(n.input))return;Ht(),e.preventDefault()}},Ke=function(t){for(var e=t.target,n=V(),o=-1,i=0;i<n.length;i++)if(e===n[i]){o=i;break}t.shiftKey?Ee(0,o,-1):Ee(0,o,1),t.stopPropagation(),t.preventDefault()},Ye=function(){var t=E(),e=O();document.activeElement===t&&vt(e)?e.focus():document.activeElement===e&&vt(t)&&t.focus()},Ze=function(t,e,n){W(e.allowEscapeKey)&&(t.preventDefault(),n(K.esc))},Qe=function(e,t,n){t.popup.onclick=function(){var t=Bt.innerParams.get(e);t.showConfirmButton||t.showCancelButton||t.showCloseButton||t.input||n(K.close)}},$e=!1,Je=function(e){e.popup.onmousedown=function(){e.container.onmouseup=function(t){e.container.onmouseup=void 0,t.target===e.container&&($e=!0)}}},Xe=function(e){e.container.onmousedown=function(){e.popup.onmouseup=function(t){e.popup.onmouseup=void 0,t.target!==e.popup&&!e.popup.contains(t.target)||($e=!0)}}},Ge=function(n,o,i){o.container.onclick=function(t){var e=Bt.innerParams.get(n);$e?$e=!1:t.target===o.container&&W(e.allowOutsideClick)&&i(K.backdrop)}};var tn=function(t,e,n){var o=q();it(o),e.timer&&(t.timeout=new be(function(){n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(ot(o),setTimeout(function(){t.timeout.running&&st(e.timer)})))},en=function(t,e){if(!e.toast)return W(e.allowEnterKey)?e.focusCancel&&vt(t.cancelButton)?t.cancelButton.focus():e.focusConfirm&&vt(t.confirmButton)?t.confirmButton.focus():void Ee(0,-1,1):nn()},nn=function(){document.activeElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()};var on,rn=function(t){for(var e in t)t[e]=new WeakMap},an=Object.freeze({hideLoading:ie,disableLoading:ie,getInput:function(t){var e=Bt.innerParams.get(t||this),n=Bt.domCache.get(t||this);return n?G(n.content,e.input):null},close:fe,closePopup:fe,closeModal:fe,closeToast:fe,enableButtons:function(){ge(this,["confirmButton","cancelButton"],!1)},disableButtons:function(){ge(this,["confirmButton","cancelButton"],!0)},enableInput:function(){return ve(this.getInput(),!1)},disableInput:function(){return ve(this.getInput(),!0)},showValidationMessage:function(t){var e=Bt.domCache.get(this);H(e.validationMessage,t);var n=window.getComputedStyle(e.popup);e.validationMessage.style.marginLeft="-".concat(n.getPropertyValue("padding-left")),e.validationMessage.style.marginRight="-".concat(n.getPropertyValue("padding-right")),ot(e.validationMessage);var o=this.getInput();o&&(o.setAttribute("aria-invalid",!0),o.setAttribute("aria-describedBy",Y["validation-message"]),tt(o),mt(o,Y.inputerror))},resetValidationMessage:function(){var t=Bt.domCache.get(this);t.validationMessage&&it(t.validationMessage);var e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedBy"),ht(e,Y.inputerror))},getProgressSteps:function(){return Bt.domCache.get(this).progressSteps},_main:function(t){Jt(t),Xt.currentInstance&&Xt.currentInstance._destroy(),Xt.currentInstance=this;var e=function(t){var e=s({},Gt.showClass,t.showClass),n=s({},Gt.hideClass,t.hideClass),o=s({},Gt,t);if(o.showClass=e,o.hideClass=n,t.animation===false){o.showClass={popup:"swal2-noanimation",backdrop:"swal2-noanimation"};o.hideClass={}}return o}(t);we(e),Object.freeze(e),Xt.timeout&&(Xt.timeout.stop(),delete Xt.timeout),clearTimeout(Xt.restoreFocusTimeout);var n=function(t){var e={popup:$(),container:Q(),content:P(),actions:T(),confirmButton:E(),cancelButton:O(),closeButton:I(),validationMessage:S(),progressSteps:B()};return Bt.domCache.set(t,e),e}(this);return Rt(this,e),Bt.innerParams.set(this,e),function(n,o,i){return new Promise(function(t){var e=function t(e){n.closePopup({dismiss:e})};de.swalPromiseResolve.set(n,t);o.confirmButton.onclick=function(){return Pe(n,i)};o.cancelButton.onclick=function(){return Ae(n,e)};o.closeButton.onclick=function(){return e(K.close)};Oe(n,o,e);Se(n,Xt,i,e);if(i.toast&&(i.input||i.footer||i.showCloseButton)){mt(document.body,Y["toast-column"])}else{ht(document.body,Y["toast-column"])}xe(n,i);Ce(i);tn(Xt,i,e);en(o,i);setTimeout(function(){o.container.scrollTop=0})})}(this,n,e)},update:function(e){var t=$(),n=Bt.innerParams.get(this);if(!t||D(t,n.hideClass.popup))return _("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");var o={};Object.keys(e).forEach(function(t){sn.isUpdatableParameter(t)?o[t]=e[t]:_('Invalid parameter to update: "'.concat(t,'". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'))});var i=s({},n,o);Rt(this,i),Bt.innerParams.set(this,i),Object.defineProperties(this,{params:{value:s({},this.params,e),writable:!1,enumerable:!0}})},_destroy:function(){var t=Bt.domCache.get(this),e=Bt.innerParams.get(this);e&&(t.popup&&Xt.swalCloseEventFinishedCallback&&(Xt.swalCloseEventFinishedCallback(),delete Xt.swalCloseEventFinishedCallback),Xt.deferDisposalTimer&&(clearTimeout(Xt.deferDisposalTimer),delete Xt.deferDisposalTimer),"function"==typeof e.onDestroy&&e.onDestroy(),delete this.params,delete Xt.keydownHandler,delete Xt.keydownTarget,rn(Bt),rn(de))}}),cn=function(){function r(){if(a(this,r),"undefined"!=typeof window){"undefined"==typeof Promise&&F("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"),on=this;for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:o,writable:!1,enumerable:!0,configurable:!0}});var i=this._main(this.params);Bt.promise.set(this,i)}}return c(r,[{key:"then",value:function(t){return Bt.promise.get(this).then(t)}},{key:"finally",value:function(t){return Bt.promise.get(this).finally(t)}}]),r}();s(cn.prototype,an),s(cn,oe),Object.keys(an).forEach(function(t){cn[t]=function(){if(on)return on[t].apply(on,arguments)}}),cn.DismissReason=K,cn.version="9.17.2";var sn=cn;return sn.default=sn}),void 0!==this&&this.Sweetalert2&&(this.swal=this.sweetAlert=this.Swal=this.SweetAlert=this.Sweetalert2);

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoZWNrb3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvYXBpL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy9hcGkvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMvc3JjL2FwaS9jb3VudHJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy9hcGkvcHJvZHVjdC1hdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvYXBpL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy9hcGkvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvaG9va3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy9ob29rcy9iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvaG9va3MvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMvc3JjL2hvb2tzL2Nvb2tpZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMvc3JjL2hvb2tzL2N1cnJlbmN5LXNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvaG9va3MvZmFjZXRlZC1zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy9ob29rcy9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvaG9va3Mvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvaG9va3Mvc29ydC1ieS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMvc3JjL2xpYi9yZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMvc3JjL3Rvb2xzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvdG9vbHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy90b29scy9pbWFnZVNyY3NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMvc3JjL3Rvb2xzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlY29kZS11cmktY29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ldmVudGVtaXR0ZXIyL2xpYi9ldmVudGVtaXR0ZXIyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qcXVlcnkvZGlzdC9qcXVlcnkubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xdWVyeS1zdHJpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0cmljdC11cmktZW5jb2RlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9kaXN0L3N3ZWV0YWxlcnQyLm1pbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIl0sIm5hbWVzIjpbImFsbHVyZUV4Y2VwdGlvbiIsImNhcnRJdGVtcyIsInNrdXMiLCJ0ZWFtZGVza0l0ZW1zIiwidGVhbWRlc2tQT0l0ZW1zIiwiY2FydEdldERlbGl2ZXJ5IiwibGluZUl0ZW1zIiwicGh5c2ljYWxJdGVtcyIsIm1hcCIsImkiLCJza3UiLCJpbmRleE9mIiwibGVuZ3RoIiwic2xpY2UiLCJlbmNvZGVVUklDb21wb25lbnQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJhY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRhYmxlIiwiZmlsdGVyIiwiam9pbiIsInRoZW4iLCJyIiwianNvbiIsImNhcnRTZXREZWxpdmVyeSIsImNhdGNoIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJxdHlDaGVja2VkIiwiaW5kZXgiLCJpdGVtIiwiZmluZCIsInMiLCJTS1UiLCJ0b1VwcGVyQ2FzZSIsIiQiLCJlcSIsInF0eSIsInF1YW50aXR5IiwiYnVmZiIsImNvbnRlbnQiLCJOdW1iZXIiLCJNYXRoIiwibWluIiwiYXBwZW5kIiwiY21oUnVzaEl0ZW1zIiwiaGFpclNlcnZpY2UiLCJpbmNsdWRlcyIsImVudHJpZXMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwidXRpbHMiLCJhcGkiLCJjYXJ0IiwiZ2V0Q2FydCIsImluY2x1ZGVPcHRpb25zIiwiZXJyIiwibXlDYXJ0IiwiaWQiLCJiYXNlQW1vdW50IiwiY2hlY2tJbml0Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiYmFjdGlvbiIsIm9uIiwic2V0VGltZW91dCIsImludGVybmFscyIsImdldFBhZ2UiLCJ1cmwiLCJvcHRpb25zIiwiY2FsbGJhY2siLCJyZXF1ZXN0IiwicmVxdWVzdE9wdGlvbnMiLCJjb3VudHJ5IiwiQ291bnRyeUFwaSIsInByb2R1Y3RBdHRyaWJ1dGVzIiwiUHJvZHVjdEF0dHJpYnV0ZXNBcGkiLCJwcm9kdWN0IiwiUHJvZHVjdEFwaSIsInNlYXJjaCIsIlNlYXJjaEFwaSIsIkNhcnRBcGkiLCJ2ZXJzaW9uIiwicmVtb3RlVmVyc2lvbiIsInJlbW90ZUJhc2VFbmRwb2ludCIsIm1ha2VSZXF1ZXN0IiwicmVtb3RlIiwicmVtb3RlUmVxdWVzdCIsImVuZHBvaW50IiwicmVtb3RlVXJsIiwiZ2V0Q2FydHMiLCJyZXNwb25zZSIsImNhcnRJZCIsImdldENhcnRRdWFudGl0eSIsImxpbmVJdGVtUXVhbnRpdGllcyIsImRpZ2l0YWxJdGVtcyIsImN1c3RvbUl0ZW1zIiwicmVkdWNlIiwiYSIsImIiLCJjb25jYXQiLCJsaW5lSXRlbSIsInBhcmVudElkIiwiYWNjdW11bGF0b3IiLCJsaW5lSXRlbVF1YW50aXR5IiwiZ2lmdENlcnRpZmljYXRlUXVhbnRpdHkiLCJnaWZ0Q2VydGlmaWNhdGVzIiwiaXRlbUFkZCIsImZvcm1EYXRhIiwiZW1pdERhdGEiLCJIb29rcyIsImVtaXQiLCJpdGVtVXBkYXRlIiwiaXRlbUlkIiwiY2FsbGJhY2tBcmciLCJpdGVtcyIsIkFycmF5IiwiaXNBcnJheSIsInVwZGF0ZSIsIml0ZW1SZW1vdmUiLCJnZXRJdGVtR2lmdFdyYXBwaW5nT3B0aW9ucyIsIm9wdHMiLCJzdWJtaXRJdGVtR2lmdFdyYXBwaW5nT3B0aW9uIiwicGFyYW1zIiwicGF5bG9hZCIsImdldENvbnRlbnQiLCJnZXRTaGlwcGluZ1F1b3RlcyIsInJlbmRlcldpdGgiLCJyZW5kZXJXaXRoQXJnIiwidGVtcGxhdGUiLCJzdWJtaXRTaGlwcGluZ1F1b3RlIiwicXVvdGVJZCIsInNoaXBwaW5nX21ldGhvZCIsImFwcGx5Q29kZSIsImNvZGUiLCJhcHBseUdpZnRDZXJ0aWZpY2F0ZSIsIkJhc2UiLCJnZXRCeUlkIiwiZ2V0QnlOYW1lIiwibmFtZSIsImluQ2FydEVuZHBvaW50Iiwib3B0aW9uQ2hhbmdlIiwicHJvZHVjdElkIiwidGVtcGxhdGVBcmciLCJub3JtYWxpemVkUXMiLCJub3JtYWxpemVRdWVyeVN0cmluZ1BhcmFtcyIsImNvbmZpZ3VyZUluQ2FydCIsInBhcmFtc0FyZyIsInF1ZXJ5IiwiY2xhc3NlcyIsIkNhcnRIb29rcyIsImNvb2tpZSIsIkNvb2tpZUhvb2tzIiwiY3VycmVuY3lTZWxlY3RvciIsIkN1cnJlbmN5U2VsZWN0b3JIb29rcyIsIlByb2R1Y3RIb29rcyIsIlNlYXJjaEhvb2tzIiwiZmFjZXRlZFNlYXJjaCIsIkZhY2V0ZWRTZWFyY2hIb29rcyIsInNvcnRCeSIsIlNvcnRCeUhvb2tzIiwicGFyc2VIb29rcyIsImhvb2tOYW1lIiwiaG9va1R5cGUiLCJzcGxpdCIsInVuZGVmaW5lZCIsIkVycm9yIiwiaG9vayIsIm9mZiIsImFwcGx5IiwiYXJndW1lbnRzIiwiJGJvZHkiLCJFdmVudEVtaXR0ZXIiLCJldmVudCIsInRhcmdldCIsIkJhc2VIb29rcyIsInNlYXJjaEV2ZW50cyIsIm9wdGlvbnNDaGFuZ2UiLCJxdWlja1NlYXJjaCIsInNvcnRCeUV2ZW50cyIsImlzRGVmYXVsdFByZXZlbnRlZCIsImN1cnJlbnRUYXJnZXQiLCJjbG9zZXN0IiwidHJpZ2dlciIsImlzVmFsaWRIVFRQTWV0aG9kIiwiYWxsb3dlZE1ldGhvZHMiLCJyZWxhdGl2ZVVybCIsImRlZmF1bHRPcHRpb25zIiwiYmFzZVVybCIsImNvbmZpZyIsIk9iamVjdCIsImFzc2lnbiIsImRhdGEiLCJCQ0RhdGEiLCJjc3JmX3Rva2VuIiwicmVxdWVzdGVkVGVtcGxhdGUiLCJ1c2luZ1RlbXBsYXRlcyIsInVzaW5nU2VjdGlvbnMiLCJ0ZW1wbGF0ZXMiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJyZW5kZXJfd2l0aCIsImFqYXgiLCJ4aHJGaWVsZHMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJjb250ZW50VHlwZSIsInByb2Nlc3NEYXRhIiwic3VjY2VzcyIsInJldCIsImtleXMiLCJrZXkiLCJjbGVhbktleSIsInJlcGxhY2UiLCJ0ZW1wbGF0ZVZhcmlhYmxlTmFtZXMiLCJ0ZW1wbGF0ZVZhcmlhYmxlIiwiZXJyb3IiLCJYSFIiLCJ0ZXh0U3RhdHVzIiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwicXNQYXJhbXMiLCJwYXJzZSIsImlzVmFsaWRQYXJhbSIsInZhbHVlIiwib3B0aW9uc0NvbGxlY3Rpb24iLCJub3JtYWxpemVkIiwicGFyYW0iLCJmaWx0ZXJlZCIsInBhcmFtU3RyaW5nIiwiU3RlbmNpbFV0aWxzIiwiaG9va3MiLCJ0b29scyIsInJvb3QiLCJkZWZpbmUiLCJzdGVuY2lsVXRpbHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiaW1hZ2UiLCJJbWFnZVRvb2wiLCJpbWFnZVNyY3NldCIsIkltYWdlU3Jjc2V0VG9vbCIsInN0b3JhZ2UiLCJTdG9yYWdlVG9vbHMiLCJnZXRTcmMiLCJwYXRoIiwiZGltZW5zaW9ucyIsInNpemVSZWdleCIsInNpemUiLCJ3aWR0aCIsImhlaWdodCIsInRlc3QiLCJnZXRTcmNzZXQiLCJzaXplcyIsImRlc2NyaXB0b3JSZWdleCIsInNyY3NldHMiLCJzb21lIiwiZGVzY3JpcHRvciIsInN0b3JhZ2VBdmFpbGFibGUiLCJ0eXBlIiwieCIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiRE9NRXhjZXB0aW9uIiwibG9jYWxTdG9yYWdlQXZhaWxhYmxlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBRUE7QUFDQTtBQUVBLElBQUlBLGVBQWUsR0FBRyxDQUNsQixNQURrQixFQUVsQixNQUZrQixFQUdsQixPQUhrQixFQUlsQixVQUprQixFQUtsQixTQUxrQixFQU1sQixRQU5rQixFQU9sQixRQVBrQixFQVFsQixPQVJrQixFQVNsQixRQVRrQixFQVVsQixTQVZrQixFQVdsQixRQVhrQixFQVlsQixRQVprQixFQWFsQixRQWJrQixFQWNsQixRQWRrQixFQWVsQixRQWZrQixFQWdCbEIsUUFoQmtCLEVBaUJsQixRQWpCa0IsRUFrQmxCLFFBbEJrQixFQW1CbEIsUUFuQmtCLEVBb0JsQixNQXBCa0IsRUFxQmxCLFFBckJrQixFQXNCbEIsUUF0QmtC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NkJBQTZCLDJDQUEyQyxtQkFBbUIsZ0ZBQWdGLGtCQUFrQixVQUFVLGlDQUFpQyxpQ0FBaUMsT0FBTyxvREFBb0QsYUFBYSx3REFBd0QsZUFBZSxTQUFTLElBQUksOEdBQThHLGtCQUFrQixPQUFPLDRJQUE0SSw4QkFBOEIsT0FBTyw2REFBNkQsK0JBQStCLG9CQUFvQixjQUFjLFVBQVUsR0FBRywrQkFBK0IsbUNBQW1DLGdCQUFnQixrQ0FBa0MsZ0JBQWdCLGlDQUFpQyxtQkFBbUIsVUFBVSxhQUFhLG9EQUFvRCxvQ0FBb0MsS0FBSyxvQ0FBb0MsUUFBUSxNQUFNLFdBQVcsUUFBUSxzQkFBc0Isd0JBQXdCLEVBQUUsRUFBRSxXQUFXLG9CQUFvQixxQ0FBcUMscUxBQXFMLFNBQVMsbUNBQW1DLHFNQUFxTSxFQUFFLFVBQVUsTUFBTSxvRUFBb0UsUUFBUSxVQUFVLDJDQUEyQyxFQUFFLHFCQUFxQix1REFBdUQsMlZBQTJWLGdCQUFnQixhQUFhLHlDQUF5QyxtUEFBbVAsOENBQThDLElBQUksc0JBQXNCLHNEQUFzRCw4QkFBOEIsUUFBUSxtREFBbUQsRUFBRSw4QkFBOEIsd0JBQXdCLGFBQWEsNkJBQTZCLHFDQUFxQyxFQUFFLGdDQUFnQyx3Q0FBd0MsS0FBSyxHQUFHLGdFQUFnRSxpQkFBaUIsd0NBQXdDLHlDQUF5QyxVQUFVLHFCQUFxQiwwRzs7Ozs7Ozs7Ozs7QUNBdjJ4QztBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaGVja291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL2NoZWNrb3V0LmpzXCIpO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IF8sIHsgbWluIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5cclxudmFyIGFsbHVyZUV4Y2VwdGlvbiA9IFtcclxuICAgIFwiY29jb1wiLFxyXG4gICAgXCJyb3NlXCIsXHJcbiAgICBcImFkZWxlXCIsXHJcbiAgICBcImFuZ2VsaW5hXCIsXHJcbiAgICBcImplc3NpY2FcIixcclxuICAgIFwic2VsZW5hXCIsXHJcbiAgICBcInRheWxvclwiLFxyXG4gICAgXCJqdWxpYVwiLFxyXG4gICAgXCJuaWNvbGVcIixcclxuICAgIFwiZ3d5bmV0aFwiLFxyXG4gICAgXCJldjc5MTRcIixcclxuICAgIFwidGw2ODE0XCIsXHJcbiAgICBcImV2NTcxNFwiLFxyXG4gICAgXCJtbzU1MTRcIixcclxuICAgIFwibW83NjA4XCIsXHJcbiAgICBcImV2NTUxMlwiLFxyXG4gICAgXCJldjU3MDZcIixcclxuICAgIFwiZXY2ODEwXCIsXHJcbiAgICBcImVnNjYxMlwiLFxyXG4gICAgXCJlaDE2XCIsXHJcbiAgICBcIm1oMjIwNlwiLFxyXG4gICAgXCJzaDUyMDZcIixcclxuICAgIFwiZXAzNjA4XCIsXHJcbiAgICBcIm1oMjIxNlwiLFxyXG4gICAgXCJtYXlhXCIsXHJcbiAgICBcIm5veWFcIixcclxuXTtcclxuXHJcbnZhciBjYXJ0SXRlbXMgPSBudWxsO1xyXG52YXIgc2t1cz1bXTtcclxudmFyIHRlYW1kZXNrSXRlbXMgPSBudWxsO1xyXG52YXIgdGVhbWRlc2tQT0l0ZW1zID0gbnVsbDtcclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIGludmVudG9yeSBhbmQgcG8gZnJvbSB0ZWFtZGVza1xyXG4gKi9cclxuIGZ1bmN0aW9uIGNhcnRHZXREZWxpdmVyeSgpIHsgICAgXHJcbiAgICBpZiAoY2FydEl0ZW1zKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY2FydEl0ZW1zKTtcclxuICAgICAgICBza3VzID0gY2FydEl0ZW1zLmxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zLm1hcChpPT57XHJcbiAgICAgICAgICAgIGxldCBza3UgPSBpLnNrdTtcclxuICAgICAgICAgICAgaWYgKHNrdS5pbmRleE9mKFwiX05cIik9PXNrdS5sZW5ndGgtMikge1xyXG4gICAgICAgICAgICAgICAgc2t1ID0gc2t1LnNsaWNlKDAsc2t1Lmxlbmd0aC0yKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChza3UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZldGNoKGAvL3NocC13ZWJzZXJ2ZXIuZ2xpdGNoLm1lL2dldC10ZWFtZGVza2AsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICBhY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICB0YWJsZTogJ0ludmVudG9yeScsXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGBBbnkoW1NLVV0sJyR7c2t1cy5qb2luKFwiLFwiKX0nKWBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHI9PnIuanNvbigpKVxyXG4gICAgICAgIC50aGVuKHI9PntcclxuICAgICAgICAgICAgdGVhbWRlc2tJdGVtcyA9IHI7ICBcclxuXHJcbiAgICAgICAgICAgIHRlYW1kZXNrUE9JdGVtcyA9IFtdOyAgICAgICBcclxuICAgICAgICAgICAgY2FydFNldERlbGl2ZXJ5KCk7XHJcbiAgICAgICAgICAgIC8vIGZldGNoKGAvL3NocC13ZWJzZXJ2ZXIuZ2xpdGNoLm1lL2dldC10ZWFtZGVza2AsIHtcclxuICAgICAgICAgICAgLy8gICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAvLyAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAgICAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0YWJsZTogJ3RfNzYzNDc5JyxcclxuICAgICAgICAgICAgLy8gICAgICAgICBvcHRpb25zOiBgP2ZpbHRlcj1BbnkoW1NLVV0sJyR7c2t1cy5qb2luKFwiLFwiKX0nKSBhbmQgW0luY29taW5nIFF1YW50aXR5XT4wIGFuZCBbQXJyaXZhbCBEdWUgRGF0ZV0+VG9EYXRlKCcxLzEvMScpJnNvcnQ9QXJyaXZhbCBEdWUgRGF0ZS8vQVNDYCAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgLy8gLnRoZW4ocj0+ci5qc29uKCkpXHJcbiAgICAgICAgICAgIC8vIC50aGVuKHI9PntcclxuICAgICAgICAgICAgLy8gICAgIHRlYW1kZXNrUE9JdGVtcyA9IHI7XHJcbiAgICAgICAgICAgIC8vICAgICBjYXJ0U2V0RGVsaXZlcnkoKTtcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgLy8gLmNhdGNoKGU9PntcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAvLyAgICAgY2FydFNldERlbGl2ZXJ5KCk7XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZT0+Y29uc29sZS5sb2coZSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogRmlsbCBpbiB0aGUgZGVsaXZlcnkgaW5mb3JtYXRpb25cclxuICovXHJcbmZ1bmN0aW9uIGNhcnRTZXREZWxpdmVyeSgpIHsgICAgICAgIFxyXG4gICAgaWYgKHRlYW1kZXNrSXRlbXMpIHtcclxuICAgICAgICBsZXQgcXR5Q2hlY2tlZD1bXTtcclxuICAgICAgICBmb3IgKGxldCBbaW5kZXgsIHNrdV0gb2Ygc2t1cy5lbnRyaWVzKCkpIHsgICAgXHJcbiAgICAgICAgICAgIGlmIChza3UuaW5kZXhPZihcIl9OXCIpPT1za3UubGVuZ3RoLTIpIHtcclxuICAgICAgICAgICAgICAgIHNrdSA9IHNrdS5zbGljZSgwLHNrdS5sZW5ndGgtMik7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9ICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0ZWFtZGVza0l0ZW1zLmZpbmQocz0+ZW5jb2RlVVJJQ29tcG9uZW50KHMuU0tVLnRvVXBwZXJDYXNlKCkpPT1za3UudG9VcHBlckNhc2UoKSk7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChpdGVtKSB7ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICgkKFwiLnByb2R1Y3RMaXN0XCIpLmZpbmQoXCJsaS5wcm9kdWN0TGlzdC1pdGVtXCIpLmVxKGluZGV4KS5maW5kKFwidWwucHJvZHVjdC1vcHRpb25zXCIpLmZpbmQoXCIuY2FydC1kZWxpdmVyeVwiKS5sZW5ndGg9PTApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcXR5ID0gY2FydEl0ZW1zLmxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zW2luZGV4XS5xdWFudGl0eTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBidWZmID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocXR5Q2hlY2tlZFtpdGVtLlNLVV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmZiA9IHF0eUNoZWNrZWRbaXRlbS5TS1VdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdHlDaGVja2VkW2l0ZW0uU0tVXSs9cXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF0eUNoZWNrZWRbaXRlbS5TS1VdPXF0eTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQ9YDxzdHJvbmc+SGV1cmUgZCdleHDDqWRpdGlvbiBwcsOpdnVlOjwvc3Ryb25nPjxici8+YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1bXCJUb3RhbCBPbiBIYW5kXCJdID09IGl0ZW1bXCJBdmFpbGFibGUgUXVhbnRpdHlcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE51bWJlcihpdGVtW1wiUXVhbnRpdHkgVVNBXCJdKT4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKGl0ZW1bXCJRdWFudGl0eSBVU0FcIl0pLWJ1ZmY+MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQrPWBEYW5zIDMtNCBqb3VyczogcXVhbnRpdMOpIDxzdHJvbmc+JHtNYXRoLm1pbihpdGVtW1wiUXVhbnRpdHkgVVNBXCJdLWJ1ZmYsIHF0eSl9PC9zdHJvbmc+PGJyLz5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF0eSA9IHF0eSAtIE1hdGgubWluKGl0ZW1bXCJRdWFudGl0eSBVU0FcIl0tYnVmZiwgcXR5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmPTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmYtPU51bWJlcihpdGVtW1wiUXVhbnRpdHkgVVNBXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKGl0ZW1bXCJRdWFudGl0eSBDYW5hZGFcIl0pPjAgJiYgcXR5PjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoaXRlbVtcIlF1YW50aXR5IENhbmFkYVwiXSktYnVmZj4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCs9YERhbnMgNS04IGpvdXJzOiBxdWFudGl0w6kgPHN0cm9uZz4ke01hdGgubWluKGl0ZW1bXCJRdWFudGl0eSBDYW5hZGFcIl0tYnVmZiwgcXR5KX08L3N0cm9uZz48YnIvPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXR5ID0gcXR5IC0gTWF0aC5taW4oaXRlbVtcIlF1YW50aXR5IENhbmFkYVwiXS1idWZmLCBxdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmY9MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZiAtPSBOdW1iZXIoaXRlbVtcIlF1YW50aXR5IENhbmFkYVwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKGl0ZW1bXCJBdmFpbGFibGUgUXVhbnRpdHlcIl0pPjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoaXRlbVtcIkF2YWlsYWJsZSBRdWFudGl0eVwiXSktYnVmZj4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCs9YERhbnMgMy04IGpvdXJzOiBxdWFudGl0w6kgPHN0cm9uZz4ke01hdGgubWluKGl0ZW1bXCJBdmFpbGFibGUgUXVhbnRpdHlcIl0tYnVmZiwgcXR5KX08L3N0cm9uZz48YnIvPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXR5ID0gcXR5IC0gTWF0aC5taW4oaXRlbVtcIkF2YWlsYWJsZSBRdWFudGl0eVwiXS1idWZmLCBxdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmY9MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZiAtPSBOdW1iZXIoaXRlbVtcIkF2YWlsYWJsZSBRdWFudGl0eVwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGl0ZW1bXCJWaXJ0dWFsIFF1YW50aXR5XCJdICYmIHF0eT4wKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoaXRlbVtcIkxvY2sgU3RhdHVzXCJdIT1cIkxvY2tlZCBmb3IgcHJvY2Vzc2luZ1wiICYmIE51bWJlcihpdGVtW1wiVW5sb2NrZWQgZm9yIHNhbGUgcXVhbnRpdHlcIl0pID4gMCAmJiBxdHk+MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYgKE51bWJlcihpdGVtW1wiVW5sb2NrZWQgZm9yIHNhbGUgcXVhbnRpdHlcIl0pLWJ1ZmYgPiAwKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29udGVudCs9YDEgd2VlayBsYXRlcjogcXVhbnRpdHkgPHN0cm9uZz4ke01hdGgubWluKGl0ZW1bXCJVbmxvY2tlZCBmb3Igc2FsZSBxdWFudGl0eVwiXS1idWZmLCBxdHkpfTwvc3Ryb25nPjxici8+YDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBxdHkgPSBxdHkgLSBNYXRoLm1pbihpdGVtW1wiVW5sb2NrZWQgZm9yIHNhbGUgcXVhbnRpdHlcIl0tYnVmZiwgcXR5KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBidWZmPTA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGJ1ZmYtPU51bWJlcihpdGVtW1wiVW5sb2NrZWQgZm9yIHNhbGUgcXVhbnRpdHlcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCB2aXJ0dWFsPXt9OyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoTnVtYmVyKGl0ZW1bXCJRdWFudGl0eSBJbmNvbWluZ1wiXSktMiA+IDAgJiYgcXR5PjApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmIChOdW1iZXIoaXRlbVtcIlF1YW50aXR5IEluY29taW5nXCJdKS0yIC1idWZmID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxldCBpbkl0ZW1zID0gdGVhbWRlc2tQT0l0ZW1zLmZpbHRlcihwPT5wLlNLVS50b1VwcGVyQ2FzZSgpID09IGl0ZW1bXCJTS1VcIl0udG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGk9MCwgdG90YWxQPWJ1ZmYsIHRlbXBxdHkgPSBxdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgd2hpbGUgKGk8aW5JdGVtcy5sZW5ndGggJiYgdGVtcHF0eT4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRvdGFsUCs9TnVtYmVyKGluSXRlbXNbaV1bXCJJbmNvbWluZyBRdWFudGl0eVwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRlbXBxdHkgPSB0ZW1wcXR5IC0gTWF0aC5taW4oTnVtYmVyKGluSXRlbXNbaV1bXCJJbmNvbWluZyBRdWFudGl0eVwiXSksIHRlbXBxdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBpKys7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGk+MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBsZXQgaW5JdGVtID0gaW5JdGVtc1tpLTFdOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBsZXQgbWRpZmYgPSBtb250aERpZmYobmV3IERhdGUoKSwgbmV3IERhdGUoaW5JdGVtW1wiQXJyaXZhbCBEdWUgRGF0ZVwiXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBpZiAobWRpZmY9PTApIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmIChhbGx1cmVFeGNlcHRpb24uaW5jbHVkZXMoaW5JdGVtW1wiUGFydCBOdW1iZXJcIl0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgbWRpZmYrPTM7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIG1kaWZmKz0xO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFsbHVyZUV4Y2VwdGlvbi5pbmNsdWRlcyhpbkl0ZW1bXCJQYXJ0IE51bWJlclwiXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIG1kaWZmKz0yO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHZpcnR1YWxbbWRpZmZdID0gTWF0aC5taW4odG90YWxQLCBxdHkpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgcXR5ID0gdGVtcHF0eTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgYnVmZj0wO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgYnVmZiA9IGJ1ZmYgLSBOdW1iZXIoaXRlbVtcIlF1YW50aXR5IEluY29taW5nXCJdKSArIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKHF0eT4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBsZXQgbSA9IGl0ZW1bXCJWaXJ0dWFsIExvY2F0aW9uXCJdLnNsaWNlKDAsLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYgKHZpcnR1YWxbbV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2aXJ0dWFsW21dKz1xdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZpcnR1YWxbbV09cXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHZpcnR1YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoT2JqZWN0LmtleXModmlydHVhbCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHt5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZyd9O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbGV0IHZrZXlzID0gT2JqZWN0LmtleXModmlydHVhbCkuc29ydChmdW5jdGlvbihhLGIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm4gYi1hO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSkgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBmb3IgKGxldCBrZXkgb2YgdmtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZiAoTnVtYmVyKGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkYXRlLmdldFVUQ01vbnRoKCksIGRhdGUuZ2V0VVRDRGF0ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgZGF0ZS5zZXRNb250aChkYXRlLmdldE1vbnRoKCkrTnVtYmVyKGtleSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjb250ZW50Kz1gJHtkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCBvcHRpb25zKX06IHF1YW50aXR5IDxzdHJvbmc+JHt2aXJ0dWFsW2tleV19PC9zdHJvbmc+PGJyLz5gO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnRlbnQrPWAke2tleS5yZXBsYWNlKFwiX1wiLFwiLVwiKX0gbW9udGhzIGxhdGVyOiBxdWFudGl0eSA8c3Ryb25nPiR7dmlydHVhbFtrZXldfTwvc3Ryb25nPjxici8+YDtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyB9IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJChcIi5wcm9kdWN0TGlzdFwiKS5maW5kKFwibGkucHJvZHVjdExpc3QtaXRlbVwiKS5lcShpbmRleCkuZmluZChcInVsLnByb2R1Y3Qtb3B0aW9uc1wiKS5sZW5ndGg+MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3RMaXN0XCIpLmZpbmQoXCJsaS5wcm9kdWN0TGlzdC1pdGVtXCIpLmVxKGluZGV4KS5maW5kKFwidWwucHJvZHVjdC1vcHRpb25zXCIpLmFwcGVuZChgPGxpIGNsYXNzPVwicHJvZHVjdC1vcHRpb24gY2FydC1kZWxpdmVyeVwiPiR7Y29udGVudH08L2xpPmApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdExpc3RcIikuZmluZChcImxpLnByb2R1Y3RMaXN0LWl0ZW1cIikuZXEoaW5kZXgpLmZpbmQoXCIucHJvZHVjdC1ib2R5XCIpLmFwcGVuZChgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwcm9kdWN0LW9wdGlvbnNcIj48bGkgY2xhc3M9XCJwcm9kdWN0LW9wdGlvbiBjYXJ0LWRlbGl2ZXJ5XCI+JHtjb250ZW50fTwvbGk+PC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcXR5ID0gY2FydEl0ZW1zLmxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zW2luZGV4XS5xdWFudGl0eTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocXR5Q2hlY2tlZFtpdGVtLlNLVV0pIHsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXR5Q2hlY2tlZFtpdGVtLlNLVV0rPXF0eTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdHlDaGVja2VkW2l0ZW0uU0tVXT1xdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCQoXCIucHJvZHVjdExpc3RcIikuZmluZChcImxpLnByb2R1Y3RMaXN0LWl0ZW1cIikuZXEoaW5kZXgpLmZpbmQoXCJ1bC5wcm9kdWN0LW9wdGlvbnNcIikuZmluZChcIi5jYXJ0LWRlbGl2ZXJ5XCIpLmxlbmd0aD09MCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNtaFJ1c2hJdGVtcyA9IFsnQ01IJywgJ0NNTEFDRScsICdDTU1PTk8nLCAnQ01MQUNFUE9MWScsICdDTVNLSU4nXTtcclxuICAgICAgICAgICAgICAgIHZhciBoYWlyU2VydmljZSA9IFtcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlIzIyMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGUjMjIyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZSMyMzFcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlIzIzMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGUjMjMzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZSMyMzRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlIzI1MVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGUjMzMxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZSMzMzJcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlIzMzNFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGUjMzM1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZSMzNDFcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlIzM0MlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGUjMzQzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZSM1NTFcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlIzU1MlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiU3R5bGUgI1lvdXJfT3duXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJPbmxpbmUgU2VydmljZXMgUGFja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoY21oUnVzaEl0ZW1zLmluY2x1ZGVzKHNrdS50b1VwcGVyQ2FzZSgpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9YDxzdHJvbmc+SGV1cmUgZCdleHDDqWRpdGlvbiBwcsOpdnVlOjwvc3Ryb25nPjxici8+SXZyYWlzb24gZ2FyYW50aWUgZGFucyB1biBkw6lsYWkgZGUgdHJvaXMgbW9pczxici8+YDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFpclNlcnZpY2UuaW5jbHVkZXMoc2t1KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9YDxzdHJvbmc+SGV1cmUgZCdleHDDqWRpdGlvbiBwcsOpdnVlOjwvc3Ryb25nPjxici8+RGFucyAyLTMgc2VtYWluZXM8YnIvPmA7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0TGlzdFwiKS5maW5kKFwibGkucHJvZHVjdExpc3QtaXRlbVwiKS5lcShpbmRleCkuZmluZChcInVsLnByb2R1Y3Qtb3B0aW9uc1wiKS5hcHBlbmQoYDxkaXYgY2xhc3M9XCJjYXJ0LWRlbGl2ZXJ5XCI+JHtjb250ZW50fTwvZGl2PmApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkgeyAgICBcclxuICAgIHV0aWxzLmFwaS5jYXJ0LmdldENhcnQoe2luY2x1ZGVPcHRpb25zOiB0cnVlfSwgKGVyciwgbXlDYXJ0KSA9PiB7ICAgICAgICBcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICBpZiAobXlDYXJ0KSB7XHJcbiAgICAgICAgICAgIGNhcnRJdGVtcyA9IHtcclxuICAgICAgICAgICAgICAgIGlkOiBteUNhcnQuaWQsXHJcbiAgICAgICAgICAgICAgICBiYXNlQW1vdW50OiBteUNhcnQuYmFzZUFtb3VudCxcclxuICAgICAgICAgICAgICAgIGxpbmVJdGVtczogbXlDYXJ0LmxpbmVJdGVtcyxcclxuICAgICAgICAgICAgfTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGNoZWNrSW5pdCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICgkKFwiI2NhcnQtZWRpdC1saW5rXCIpLmxlbmd0aD4wICYmIChcIi5jYXJ0LXNlY3Rpb25cIikubGVuZ3RoPjApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFySW50ZXJ2YWwoY2hlY2tJbml0KTtcclxuICAgICAgICAgICAgICAgICAgICBjYXJ0R2V0RGVsaXZlcnkoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYmFjdGlvbiA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCIuY2FydC1hY3Rpb25zIGJ1dHRvblwiKS5sZW5ndGg+MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChiYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuY2FydC1hY3Rpb25zIGJ1dHRvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnRTZXREZWxpdmVyeSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDUwMCk7ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcbiIsImltcG9ydCByZXF1ZXN0IGZyb20gJy4vbGliL3JlcXVlc3QnO1xuXG5pbXBvcnQgQ291bnRyeUFwaSBmcm9tICcuL2FwaS9jb3VudHJpZXMnO1xuaW1wb3J0IFByb2R1Y3RBcGkgZnJvbSAnLi9hcGkvcHJvZHVjdCc7XG5pbXBvcnQgUHJvZHVjdEF0dHJpYnV0ZXNBcGkgZnJvbSAnLi9hcGkvcHJvZHVjdC1hdHRyaWJ1dGVzJztcbmltcG9ydCBTZWFyY2hBcGkgZnJvbSAnLi9hcGkvc2VhcmNoJztcbmltcG9ydCBDYXJ0QXBpIGZyb20gJy4vYXBpL2NhcnQnO1xuXG5jb25zdCBpbnRlcm5hbHMgPSB7fTtcblxuLyoqXG4gKiBDb252ZW5pZW5jZSBmdW5jdGlvbiB0byByZXF1ZXN0IGEgcGFnZSB2aWEgYWpheFxuICpcbiAqIEBwYXJhbSB1cmxcbiAqIEBwYXJhbSBvcHRpb25zXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqL1xuaW50ZXJuYWxzLmdldFBhZ2UgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHJlcXVlc3QodXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHJlcXVlc3RPcHRpb25zOiBvcHRpb25zLFxuICAgIH0sIGNhbGxiYWNrKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb3VudHJ5OiBuZXcgQ291bnRyeUFwaSgpLFxuICAgIHByb2R1Y3RBdHRyaWJ1dGVzOiBuZXcgUHJvZHVjdEF0dHJpYnV0ZXNBcGkoKSxcbiAgICBwcm9kdWN0OiBuZXcgUHJvZHVjdEFwaSgpLFxuICAgIHNlYXJjaDogbmV3IFNlYXJjaEFwaSgpLFxuICAgIGNhcnQ6IG5ldyBDYXJ0QXBpKCksXG4gICAgZ2V0UGFnZTogaW50ZXJuYWxzLmdldFBhZ2UsXG59O1xuIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vbGliL3JlcXVlc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzc1xue1xuICAgIC8qKlxuICAgICAqIEBDb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHZlcnNpb24pIHtcbiAgICAgICAgdGhpcy5yZW1vdGVWZXJzaW9uID0gdmVyc2lvbiB8fCAndjEnO1xuICAgICAgICB0aGlzLnJlbW90ZUJhc2VFbmRwb2ludCA9ICcvcmVtb3RlLyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZCBbJ0dFVCcsICdQT1NUJywgJ1BVVCcsICdERUxFVEUnXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtCb29sZWFufSByZW1vdGVcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIG1ha2VSZXF1ZXN0KHVybCwgbWV0aG9kLCBvcHRpb25zLCByZW1vdGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJlcXVlc3QodXJsLCB7XG4gICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICByZW1vdGUsXG4gICAgICAgICAgICByZXF1ZXN0T3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgfSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGVuZHBvaW50XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZCBbJ0dFVCcsICdQT1NUJywgJ1BVVCcsICdERUxFVEUnXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICByZW1vdGVSZXF1ZXN0KGVuZHBvaW50LCBtZXRob2QsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHJlbW90ZVVybCA9IHRoaXMucmVtb3RlQmFzZUVuZHBvaW50ICsgdGhpcy5yZW1vdGVWZXJzaW9uICsgZW5kcG9pbnQ7XG5cbiAgICAgICAgdGhpcy5tYWtlUmVxdWVzdChyZW1vdGVVcmwsIG1ldGhvZCwgb3B0aW9ucywgdHJ1ZSwgY2FsbGJhY2spO1xuICAgIH1cbn1cbiIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgSG9va3MgZnJvbSAnLi4vaG9va3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEJhc2Uge1xuICAgIC8qKlxuICAgICAqIEdldCBhIGNvbGxlY3Rpb24gb2YgQ2FydHMuIEZvciBub3csIHRoaXMgd2lsbCBvbmx5IHJldHVybiBhbiBhcnJheSBvZiBhIHNpbmdsZSBjYXJ0IGFzIG11bHRpcGxlIGNhcnRzIHBlciBzZXNzaW9uXG4gICAgICogYXJlIG5vdCBjdXJyZW50bHkgc3VwcG9ydGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIGdldENhcnRzKG9wdGlvbnMgPSB7fSwgY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHVybCA9ICcvYXBpL3N0b3JlZnJvbnQvY2FydHMnO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmluY2x1ZGVPcHRpb25zKSB7XG4gICAgICAgICAgICB1cmwgPSB0aGlzLmluY2x1ZGVPcHRpb25zKHVybCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1ha2VSZXF1ZXN0KHVybCwgJ0dFVCcsIG9wdGlvbnMsIHRydWUsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjdXJyZW50IENhcnQncyBkZXRhaWxzLCBlaXRoZXIgd2l0aCBvciB3aXRob3V0IFByb2R1Y3QgT3B0aW9uIHNlbGVjdGlvbnMuXG4gICAgICogQ2FuIGFsc28gYmUgdXNlZCB0byBnZXQgYSBwYXJ0aWN1bGFyIGNhcnQgcHJvdmlkZWQgYSBjYXJ0SWQgaW4gdGhlIG9wdGlvbnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgZ2V0Q2FydChvcHRpb25zID0ge30sIGNhbGxiYWNrKSB7XG4gICAgICAgIC8qIElmIG5vIGNhcnQgSUQgaXMgcHJvdmlkZWQsIGdldCB0aGUgY29sbGVjdGlvbiBvZiBjYXJ0cyBhbmQgcmV0dXJuIHRoZSBmaXJzdCBvbmUgKi9cbiAgICAgICAgaWYgKCFvcHRpb25zLmNhcnRJZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2FydHMob3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IGNhbGxiYWNrKGVyciwgcmVzcG9uc2VbMF0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB1cmwgPSBgL2FwaS9zdG9yZWZyb250L2NhcnRzLyR7b3B0aW9ucy5jYXJ0SWR9YDtcblxuICAgICAgICBpZiAob3B0aW9ucy5pbmNsdWRlT3B0aW9ucykge1xuICAgICAgICAgICAgdXJsID0gdGhpcy5pbmNsdWRlT3B0aW9ucyh1cmwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYWtlUmVxdWVzdCh1cmwsICdHRVQnLCBvcHRpb25zLCB0cnVlLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyLCByZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCB0aGUgcGFyYW1ldGVycyB0byBhIFVSTCBuZWVkZWQgdG8gZ2V0IHByb2R1Y3Qgb3B0aW9uIGRldGFpbHMgb24gY2FydCBsaW5lIGl0ZW1zXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqL1xuICAgIGluY2x1ZGVPcHRpb25zKHVybCkge1xuICAgICAgICByZXR1cm4gYCR7dXJsfT9pbmNsdWRlPWxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zLm9wdGlvbnMsbGluZUl0ZW1zLmRpZ2l0YWxJdGVtcy5vcHRpb25zYDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSBzdW0gb2YgdGhlIGNhcnQgbGluZSBpdGVtIHF1YW50aXRpZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBnZXRDYXJ0UXVhbnRpdHkob3B0aW9ucyA9IHt9LCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmdldENhcnQob3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBxdWFudGl0eSA9IDA7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJ0ID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZUl0ZW1RdWFudGl0aWVzID0gW1xuICAgICAgICAgICAgICAgICAgICBjYXJ0LmxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zLFxuICAgICAgICAgICAgICAgICAgICBjYXJ0LmxpbmVJdGVtcy5kaWdpdGFsSXRlbXMsXG4gICAgICAgICAgICAgICAgICAgIGNhcnQubGluZUl0ZW1zLmN1c3RvbUl0ZW1zLFxuICAgICAgICAgICAgICAgIF0ucmVkdWNlKChhLCBiKSA9PiBhLmNvbmNhdChiKSlcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihsaW5lSXRlbSA9PiAhbGluZUl0ZW0ucGFyZW50SWQpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAobGluZUl0ZW0gPT4gbGluZUl0ZW0ucXVhbnRpdHkpXG4gICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBsaW5lSXRlbVF1YW50aXR5KSA9PiBhY2N1bXVsYXRvciArIGxpbmVJdGVtUXVhbnRpdHksIDApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdpZnRDZXJ0aWZpY2F0ZVF1YW50aXR5ID0gY2FydC5saW5lSXRlbXMuZ2lmdENlcnRpZmljYXRlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgcXVhbnRpdHkgPSBsaW5lSXRlbVF1YW50aXRpZXMgKyBnaWZ0Q2VydGlmaWNhdGVRdWFudGl0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHF1YW50aXR5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGl0ZW0gdG8gY2FydCB3aXRoIG9wdGlvbnMgKHZhcmlhbnRzKVxuICAgICAqXG4gICAgICogQHBhcmFtIHtGb3JtRGF0YX0gZm9ybURhdGFcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIGl0ZW1BZGQoZm9ybURhdGEsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMucmVtb3RlUmVxdWVzdCgnL2NhcnQvYWRkJywgJ1BPU1QnLCB7IGZvcm1EYXRhIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbWl0RGF0YSA9IHtcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBIb29rcy5lbWl0KCdjYXJ0LWl0ZW0tYWRkLXJlbW90ZScsIGVtaXREYXRhKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgcmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgY2FydCBpdGVtIHF1YW50aXR5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGl0ZW1JZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfEZ1bmN0aW9ufSBxdHlcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufG51bGx9IGNhbGxiYWNrXG4gICAgICovXG4gICAgaXRlbVVwZGF0ZShpdGVtSWQsIHF0eSwgY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IGNhbGxiYWNrQXJnID0gY2FsbGJhY2s7XG4gICAgICAgIGxldCBpdGVtcztcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtSWQpICYmIHR5cGVvZiBxdHkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrQXJnID0gcXR5O1xuICAgICAgICAgICAgaXRlbXMgPSBpdGVtSWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVtcyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtSWQsXG4gICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiBxdHksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZShpdGVtcywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVtaXREYXRhID0ge1xuICAgICAgICAgICAgICAgIGl0ZW1zLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICByZXNwb25zZSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIEhvb2tzLmVtaXQoJ2NhcnQtaXRlbS11cGRhdGUtcmVtb3RlJywgZW1pdERhdGEpO1xuICAgICAgICAgICAgY2FsbGJhY2tBcmcoZXJyLCByZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBjYXJ0IGl0ZW1zXG4gICAgICpcbiAgICAgKiBDYWxscyB0aGUgaW50ZXJuYWwgdXBkYXRlIGZ1bmN0aW9uIHdpdGggcXVhbnRpdHk6IDBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpdGVtSWRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIGl0ZW1SZW1vdmUoaXRlbUlkLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBpdGVtcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogaXRlbUlkLFxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLnVwZGF0ZShpdGVtcywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVtaXREYXRhID0ge1xuICAgICAgICAgICAgICAgIGl0ZW1zLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICByZXNwb25zZSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIEhvb2tzLmVtaXQoJ2NhcnQtaXRlbS1yZW1vdmUtcmVtb3RlJywgZW1pdERhdGEpO1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyLCByZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBnaWZ0d3JhcHBpbmcgb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpdGVtSWRcbiAgICAgKiBAcGFyYW0ge09iamVjdHxGdW5jdGlvbn0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7RnVuY3Rpb258bnVsbH0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBnZXRJdGVtR2lmdFdyYXBwaW5nT3B0aW9ucyhpdGVtSWQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBvcHRzID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgbGV0IGNhbGxiYWNrQXJnID0gY2FsbGJhY2s7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWxsYmFja0FyZyA9IG9wdHM7XG4gICAgICAgICAgICBvcHRzID0ge307XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbW90ZVJlcXVlc3QoYC9naWZ0LXdyYXBwaW5nLyR7aXRlbUlkfWAsICdHRVQnLCBvcHRzLCBjYWxsYmFja0FyZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3VibWl0IGdpZnR3cmFwcGluZyBvcHRpb25zXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaXRlbUlkXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBzdWJtaXRJdGVtR2lmdFdyYXBwaW5nT3B0aW9uKGl0ZW1JZCwgcGFyYW1zLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnJlbW90ZVJlcXVlc3QoYC9naWZ0LXdyYXBwaW5nLyR7aXRlbUlkfWAsICdQT1NUJywgeyBwYXJhbXMgfSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBjYXJ0IGl0ZW1zXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBpdGVtc1xuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgdXBkYXRlKGl0ZW1zLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICAgICAgaXRlbXMsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5yZW1vdGVSZXF1ZXN0KCcvY2FydC91cGRhdGUnLCAnUE9TVCcsIHsgcGFyYW1zOiBwYXlsb2FkIH0sIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY2FydCBjb250ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgZ2V0Q29udGVudChvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgICBsZXQgb3B0cyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIGxldCBjYWxsYmFja0FyZyA9IGNhbGxiYWNrO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2tBcmcgPSBvcHRzO1xuICAgICAgICAgICAgb3B0cyA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYWtlUmVxdWVzdCgnL2NhcnQucGhwJywgJ0dFVCcsIG9wdHMsIGZhbHNlLCBjYWxsYmFja0FyZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGNhcnQgc2hpcHBpbmcgcXVvdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheXxPYmplY3R9IHJlbmRlcldpdGhcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIGdldFNoaXBwaW5nUXVvdGVzKHBhcmFtcywgcmVuZGVyV2l0aCwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGNhbGxiYWNrQXJnID0gY2FsbGJhY2s7XG4gICAgICAgIGxldCByZW5kZXJXaXRoQXJnID0gcmVuZGVyV2l0aDtcblxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrQXJnICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWxsYmFja0FyZyA9IHJlbmRlcldpdGhBcmc7XG4gICAgICAgICAgICByZW5kZXJXaXRoQXJnID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZW5kZXJXaXRoQXJnKSB7XG4gICAgICAgICAgICBvcHRpb25zLnRlbXBsYXRlID0gcmVuZGVyV2l0aEFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVtb3RlUmVxdWVzdCgnL3NoaXBwaW5nLXF1b3RlJywgJ0dFVCcsIG9wdGlvbnMsIGNhbGxiYWNrQXJnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgc2hpcHBpbmcgcXVvdGUgYmFzZWQgb24gcXVvdGVJZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHF1b3RlSWRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIHN1Ym1pdFNoaXBwaW5nUXVvdGUocXVvdGVJZCwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIHNoaXBwaW5nX21ldGhvZDogcXVvdGVJZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5yZW1vdGVSZXF1ZXN0KCcvc2hpcHBpbmctcXVvdGUnLCAnUE9TVCcsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSBhIGNvdXBvbiBjb2RlIG9yIGdpZnQgY2VydGlmaWNhdGUgdG8gdGhlIGNhcnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb2RlXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBhcHBseUNvZGUoY29kZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGNvZGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucmVtb3RlUmVxdWVzdCgnL2FwcGx5LWNvZGUnLCAnUE9TVCcsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSBhIGNvdXBvbiBjb2RlIG9yIGdpZnQgY2VydGlmaWNhdGUgdG8gdGhlIGNhcnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjb2RlXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBhcHBseUdpZnRDZXJ0aWZpY2F0ZShjb2RlLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgY29kZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5yZW1vdGVSZXF1ZXN0KCcvZ2lmdC1jZXJ0aWZpY2F0ZXMnLCAnUE9TVCcsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEJhc2VcbntcbiAgICAvKipcbiAgICAgKiBAQ29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih2ZXJzaW9uKSB7XG4gICAgICAgIC8vIGNhbGwgcGFyZW50XG4gICAgICAgIHN1cGVyKHZlcnNpb24pO1xuXG4gICAgICAgIC8vIHNldCB1cCBjbGFzcyB2YXJpYWJsZXNcbiAgICAgICAgdGhpcy5lbmRwb2ludCA9ICcvY291bnRyeS1zdGF0ZXMvJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEdldCBjb3VudHJ5IGRhdGEgYnkgaWQgd3JhcHBlclxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGlkXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBnZXRCeUlkKGlkLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmVuZHBvaW50ICsgaWQ7XG5cbiAgICAgICAgdGhpcy5yZW1vdGVSZXF1ZXN0KHVybCwgJ0dFVCcsIHt9LCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGNvdW50cnkgZGF0YSBieSBjb3VudHJ5IG5hbWVcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIGdldEJ5TmFtZShuYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmVuZHBvaW50ICsgbmFtZTtcblxuICAgICAgICB0aGlzLnJlbW90ZVJlcXVlc3QodXJsLCAnR0VUJywge30sIGNhbGxiYWNrKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IEhvb2tzIGZyb20gJy4uL2hvb2tzJztcbmltcG9ydCB7IG5vcm1hbGl6ZVF1ZXJ5U3RyaW5nUGFyYW1zIH0gZnJvbSAnLi4vbGliL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBCYXNlXG57XG4gICAgLyoqXG4gICAgICogQENvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodmVyc2lvbikge1xuICAgICAgICAvLyBjYWxsIHBhcmVudFxuICAgICAgICBzdXBlcih2ZXJzaW9uKTtcblxuICAgICAgICAvLyBzZXQgdXAgY2xhc3MgdmFyaWFibGVzXG4gICAgICAgIHRoaXMuZW5kcG9pbnQgPSAnL3Byb2R1Y3QtYXR0cmlidXRlcy8nO1xuICAgICAgICB0aGlzLmluQ2FydEVuZHBvaW50ID0gJy9jb25maWd1cmUtb3B0aW9ucy8nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBwcm9kdWN0SWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgb3B0aW9uQ2hhbmdlKHByb2R1Y3RJZCwgcGFyYW1zLCB0ZW1wbGF0ZSA9IG51bGwsIGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCB0ZW1wbGF0ZUFyZyA9IHRlbXBsYXRlO1xuICAgICAgICBsZXQgY2FsbGJhY2tBcmcgPSBjYWxsYmFjaztcblxuICAgICAgICBpZiAodHlwZW9mIHRlbXBsYXRlQXJnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWxsYmFja0FyZyA9IHRlbXBsYXRlQXJnO1xuICAgICAgICAgICAgdGVtcGxhdGVBcmcgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFFzID0gbm9ybWFsaXplUXVlcnlTdHJpbmdQYXJhbXMocGFyYW1zKTtcbiAgICAgICAgdGhpcy5yZW1vdGVSZXF1ZXN0KHRoaXMuZW5kcG9pbnQgKyBwcm9kdWN0SWQsICdQT1NUJywgeyBwYXJhbXM6IG5vcm1hbGl6ZWRRcywgdGVtcGxhdGU6IHRlbXBsYXRlQXJnIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbWl0RGF0YSA9IHtcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBIb29rcy5lbWl0KCdwcm9kdWN0LW9wdGlvbnMtY2hhbmdlLXJlbW90ZScsIGVtaXREYXRhKTtcbiAgICAgICAgICAgIGNhbGxiYWNrQXJnKGVyciwgcmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaXRlbUlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIGNvbmZpZ3VyZUluQ2FydChpdGVtSWQsIHBhcmFtcywgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5yZW1vdGVSZXF1ZXN0KHRoaXMuaW5DYXJ0RW5kcG9pbnQgKyBpdGVtSWQsICdHRVQnLCBwYXJhbXMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBCYXNlXG57XG4gICAgLyoqXG4gICAgICogQENvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodmVyc2lvbikge1xuICAgICAgICAvLyBjYWxsIHBhcmVudFxuICAgICAgICBzdXBlcih2ZXJzaW9uKTtcblxuICAgICAgICAvLyBzZXQgdXAgY2xhc3MgdmFyaWFibGVzXG4gICAgICAgIHRoaXMuZW5kcG9pbnQgPSAnL3Byb2R1Y3RzLnBocD9wcm9kdWN0SWQ9JztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBwcm9kdWN0SWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBnZXRCeUlkKHByb2R1Y3RJZCwgcGFyYW1zLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmVuZHBvaW50ICsgcHJvZHVjdElkO1xuICAgICAgICBsZXQgcGFyYW1zQXJnID0gcGFyYW1zO1xuICAgICAgICBsZXQgY2FsbGJhY2tBcmcgPSBjYWxsYmFjaztcblxuXG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1zQXJnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWxsYmFja0FyZyA9IHBhcmFtc0FyZztcbiAgICAgICAgICAgIHBhcmFtc0FyZyA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYWtlUmVxdWVzdCh1cmwsICdHRVQnLCBwYXJhbXNBcmcsIGZhbHNlLCBjYWxsYmFja0FyZyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEhvb2tzIGZyb20gJy4uL2hvb2tzJztcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQmFzZVxue1xuICAgIC8qKlxuICAgICAqIEBDb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHZlcnNpb24pIHtcbiAgICAgICAgLy8gY2FsbCBwYXJlbnRcbiAgICAgICAgc3VwZXIodmVyc2lvbik7XG5cbiAgICAgICAgLy8gc2V0IHVwIGNsYXNzIHZhcmlhYmxlc1xuICAgICAgICB0aGlzLmVuZHBvaW50ID0gJy9zZWFyY2gucGhwP3NlYXJjaF9xdWVyeT0nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBzZWFyY2ggcmVzdWx0c1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBxdWVyeVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIHNlYXJjaChxdWVyeSwgcGFyYW1zLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmVuZHBvaW50ICsgZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5KTtcbiAgICAgICAgbGV0IHBhcmFtc0FyZyA9IHBhcmFtcztcbiAgICAgICAgbGV0IGNhbGxiYWNrQXJnID0gY2FsbGJhY2s7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNBcmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrQXJnID0gcGFyYW1zQXJnO1xuICAgICAgICAgICAgcGFyYW1zQXJnID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBIb29rcy5lbWl0KCdzZWFyY2gtcXVpY2stcmVtb3RlJywgcXVlcnkpO1xuICAgICAgICB0aGlzLm1ha2VSZXF1ZXN0KHVybCwgJ0dFVCcsIHBhcmFtc0FyZywgZmFsc2UsIGNhbGxiYWNrQXJnKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ2FydEhvb2tzIGZyb20gJy4vaG9va3MvY2FydCc7XG5pbXBvcnQgQ29va2llSG9va3MgZnJvbSAnLi9ob29rcy9jb29raWUnO1xuaW1wb3J0IEN1cnJlbmN5U2VsZWN0b3JIb29rcyBmcm9tICcuL2hvb2tzL2N1cnJlbmN5LXNlbGVjdG9yJztcbmltcG9ydCBQcm9kdWN0SG9va3MgZnJvbSAnLi9ob29rcy9wcm9kdWN0JztcbmltcG9ydCBTZWFyY2hIb29rcyBmcm9tICcuL2hvb2tzL3NlYXJjaCc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaEhvb2tzIGZyb20gJy4vaG9va3MvZmFjZXRlZC1zZWFyY2gnO1xuaW1wb3J0IFNvcnRCeUhvb2tzIGZyb20gJy4vaG9va3Mvc29ydC1ieSc7XG5cbmNvbnN0IGludGVybmFscyA9IHt9O1xuXG5pbnRlcm5hbHMuY2xhc3NlcyA9IHtcbiAgICBjYXJ0OiBuZXcgQ2FydEhvb2tzKCksXG4gICAgY29va2llOiBuZXcgQ29va2llSG9va3MoKSxcbiAgICBjdXJyZW5jeVNlbGVjdG9yOiBuZXcgQ3VycmVuY3lTZWxlY3Rvckhvb2tzKCksXG4gICAgcHJvZHVjdDogbmV3IFByb2R1Y3RIb29rcygpLFxuICAgIHNlYXJjaDogbmV3IFNlYXJjaEhvb2tzKCksXG4gICAgZmFjZXRlZFNlYXJjaDogbmV3IEZhY2V0ZWRTZWFyY2hIb29rcygpLFxuICAgIHNvcnRCeTogbmV3IFNvcnRCeUhvb2tzKCksXG59O1xuXG5pbnRlcm5hbHMucGFyc2VIb29rcyA9IGZ1bmN0aW9uIChob29rTmFtZSkge1xuICAgIGNvbnN0IGhvb2tUeXBlID0gaG9va05hbWUuc3BsaXQoJy0nKVswXTtcblxuICAgIGlmIChpbnRlcm5hbHMuY2xhc3Nlc1tob29rVHlwZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7aG9va1R5cGV9IGlzIG5vdCBhIHZhbGlkIGhvb2tUeXBlYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGludGVybmFscy5jbGFzc2VzW2hvb2tUeXBlXTtcbn07XG5cbmNsYXNzIEhvb2tzIHtcbiAgICBvbihob29rTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgaG9vayA9IGludGVybmFscy5wYXJzZUhvb2tzKGhvb2tOYW1lKTtcblxuICAgICAgICByZXR1cm4gaG9vay5vbihob29rTmFtZSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIG9mZihob29rTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgaG9vayA9IGludGVybmFscy5wYXJzZUhvb2tzKGhvb2tOYW1lKTtcblxuICAgICAgICByZXR1cm4gaG9vay5vZmYoaG9va05hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBlbWl0KGhvb2tOYW1lKSB7XG4gICAgICAgIGNvbnN0IGhvb2sgPSBpbnRlcm5hbHMucGFyc2VIb29rcyhob29rTmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIGhvb2suZW1pdC5hcHBseShob29rLCBhcmd1bWVudHMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEhvb2tzKCk7XG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50ZW1pdHRlcjInO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEJhc2VIb29rcyBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEJhc2VIb29rcyB7XG5cbiAgICAvKipcbiAgICAgKiBAQ29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gY2FsbCBwYXJlbnRcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLml0ZW1BZGQoKTtcbiAgICB9XG5cbiAgICBpdGVtQWRkKCkge1xuICAgICAgICB0aGlzLiRib2R5Lm9uKCdzdWJtaXQnLCAnW2RhdGEtY2FydC1pdGVtLWFkZF0nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnY2FydC1pdGVtLWFkZCcsIGV2ZW50LCBldmVudC50YXJnZXQpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQmFzZUhvb2tzIGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQmFzZUhvb2tzIHt9XG4iLCJpbXBvcnQgQmFzZUhvb2tzIGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQmFzZUhvb2tzIHtcblxuICAgIC8qKlxuICAgICAqIEBDb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBjYWxsIHBhcmVudFxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuY3VycmVuY3lTZWxlY3RvcigpO1xuICAgIH1cblxuICAgIGN1cnJlbmN5U2VsZWN0b3IoKSB7XG4gICAgICAgIHRoaXMuJGJvZHkub24oJ2lucHV0JywgJ1tkYXRhLWN1cnJlbmN5LXNlbGVjdG9yLXRvZ2dsZV0nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnY3VycmVuY3lTZWxlY3Rvci10b2dnbGUnLCBldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBCYXNlSG9va3MgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBCYXNlSG9va3Mge1xuXG4gICAgLyoqXG4gICAgICogQENvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIGNhbGwgcGFyZW50XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zZWFyY2hFdmVudHMoKTtcbiAgICB9XG5cbiAgICBzZWFyY2hFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJGJvZHkub24oJ2NsaWNrJywgJ1tkYXRhLWZhY2V0ZWQtc2VhcmNoLWZhY2V0XScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdmYWNldGVkU2VhcmNoLWZhY2V0LWNsaWNrZWQnLCBldmVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGJvZHkub24oJ3N1Ym1pdCcsICdbZGF0YS1mYWNldGVkLXNlYXJjaC1yYW5nZV0nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnZmFjZXRlZFNlYXJjaC1yYW5nZS1zdWJtaXR0ZWQnLCBldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBCYXNlSG9va3MgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBCYXNlSG9va3Mge1xuXG4gICAgLyoqXG4gICAgICogQENvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIGNhbGwgcGFyZW50XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zQ2hhbmdlKCk7XG4gICAgfVxuXG4gICAgb3B0aW9uc0NoYW5nZSgpIHtcbiAgICAgICAgdGhpcy4kYm9keS5vbignY2hhbmdlJywgJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncHJvZHVjdC1vcHRpb24tY2hhbmdlJywgZXZlbnQsIGV2ZW50LnRhcmdldCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBCYXNlSG9va3MgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBCYXNlSG9va3Mge1xuXG4gICAgLyoqXG4gICAgICogQENvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIGNhbGwgcGFyZW50XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5xdWlja1NlYXJjaCgpO1xuICAgIH1cblxuICAgIHF1aWNrU2VhcmNoKCkge1xuICAgICAgICB0aGlzLiRib2R5Lm9uKCdpbnB1dCcsICdbZGF0YS1zZWFyY2gtcXVpY2tdJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3NlYXJjaC1xdWljaycsIGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEJhc2VIb29rcyBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBCYXNlSG9va3Mge1xuXG4gICAgLyoqXG4gICAgICogQENvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIGNhbGwgcGFyZW50XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zb3J0QnlFdmVudHMoKTtcbiAgICB9XG5cbiAgICBzb3J0QnlFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJGJvZHkub24oJ3N1Ym1pdCcsICdbZGF0YS1zb3J0LWJ5XScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdzb3J0Qnktc3VibWl0dGVkJywgZXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRib2R5Lm9uKCdjaGFuZ2UnLCAnW2RhdGEtc29ydC1ieV0gc2VsZWN0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3NvcnRCeS1zZWxlY3QtY2hhbmdlZCcsIGV2ZW50KTtcblxuICAgICAgICAgICAgaWYgKCEgZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmNsb3Nlc3QoJ2Zvcm0nKS50cmlnZ2VyKCdzdWJtaXQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhlIGN1cnJlbnQgbWV0aG9kIHBhc3NlZCBpbiBpcyB2YWxpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2RcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc1ZhbGlkSFRUUE1ldGhvZChtZXRob2QpIHtcbiAgICBjb25zdCBhbGxvd2VkTWV0aG9kcyA9IFsnR0VUJywgJ1BPU1QnLCAnUFVUJywgJ0RFTEVURSddO1xuXG4gICAgcmV0dXJuIGFsbG93ZWRNZXRob2RzLmluZGV4T2YobWV0aG9kKSAhPT0gLTE7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJlbGF0aXZlVXJsLCBvcHRzLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICByZW1vdGU6IGZhbHNlLFxuICAgICAgICByZXF1ZXN0T3B0aW9uczoge1xuICAgICAgICAgICAgYmFzZVVybDogbnVsbCxcbiAgICAgICAgICAgIGZvcm1EYXRhOiBudWxsLFxuICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgIGNvbmZpZzoge30sXG4gICAgICAgICAgICB0ZW1wbGF0ZTogW10sXG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdHMpO1xuICAgIGNvbnN0IGRhdGEgPSBvcHRpb25zLnJlcXVlc3RPcHRpb25zLmZvcm1EYXRhID8gb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucy5mb3JtRGF0YSA6IG9wdGlvbnMucmVxdWVzdE9wdGlvbnMucGFyYW1zO1xuICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAgICdzdGVuY2lsLWNvbmZpZyc6IG9wdGlvbnMucmVxdWVzdE9wdGlvbnMuY29uZmlnID8gSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5yZXF1ZXN0T3B0aW9ucy5jb25maWcpIDogJ3t9JyxcbiAgICAgICAgJ3N0ZW5jaWwtb3B0aW9ucyc6ICd7fScsXG4gICAgICAgICd4LXhzcmYtdG9rZW4nOiB3aW5kb3cuQkNEYXRhICYmIHdpbmRvdy5CQ0RhdGEuY3NyZl90b2tlbiA/IHdpbmRvdy5CQ0RhdGEuY3NyZl90b2tlbiA6ICcnLFxuICAgIH07XG4gICAgY29uc3QgcmVxdWVzdGVkVGVtcGxhdGUgPSBvcHRpb25zLnJlcXVlc3RPcHRpb25zLnRlbXBsYXRlO1xuXG4gICAgbGV0IHVzaW5nVGVtcGxhdGVzID0gZmFsc2U7XG4gICAgbGV0IHVzaW5nU2VjdGlvbnMgPSBmYWxzZTtcbiAgICBsZXQgdGVtcGxhdGVzID0gW107XG5cblxuICAgIC8vIE5vdCBhIHZhbGlkIG1ldGhvZFxuICAgIGlmICghaXNWYWxpZEhUVFBNZXRob2Qob3B0aW9ucy5tZXRob2QpKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhuZXcgRXJyb3IoJ05vdCBhIHZhbGlkIEhUVFAgbWV0aG9kJykpO1xuICAgIH1cblxuXG4gICAgaWYgKHR5cGVvZihyZXF1ZXN0ZWRUZW1wbGF0ZSkgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHJlcXVlc3RlZFRlbXBsYXRlKSkge1xuICAgICAgICBsZXQgdGVtcGxhdGU7XG5cbiAgICAgICAgdXNpbmdTZWN0aW9ucyA9IHRydWU7XG4gICAgICAgIHRlbXBsYXRlcyA9IFtdO1xuXG4gICAgICAgIGZvciAodGVtcGxhdGUgaW4gcmVxdWVzdGVkVGVtcGxhdGUpIHtcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0ZWRUZW1wbGF0ZS5oYXNPd25Qcm9wZXJ0eSh0ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZXMucHVzaChyZXF1ZXN0ZWRUZW1wbGF0ZVt0ZW1wbGF0ZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2YocmVxdWVzdGVkVGVtcGxhdGUpID09PSAnc3RyaW5nJykge1xuICAgICAgICB0ZW1wbGF0ZXMgPSBbcmVxdWVzdGVkVGVtcGxhdGVdO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZXF1ZXN0ZWRUZW1wbGF0ZSkgJiYgcmVxdWVzdGVkVGVtcGxhdGUubGVuZ3RoID4gMCkge1xuICAgICAgICB0ZW1wbGF0ZXMgPSByZXF1ZXN0ZWRUZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBpZiAodGVtcGxhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdXNpbmdUZW1wbGF0ZXMgPSB0cnVlO1xuXG4gICAgICAgIGhlYWRlcnNbJ3N0ZW5jaWwtb3B0aW9ucyddID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgcmVuZGVyX3dpdGg6IHRlbXBsYXRlcy5qb2luKCcsJyksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCB1cmwgPSByZWxhdGl2ZVVybDtcbiAgICBpZiAob3B0aW9ucy5yZXF1ZXN0T3B0aW9ucy5iYXNlVXJsKSB7XG4gICAgICAgIHVybCA9IGAke29wdGlvbnMucmVxdWVzdE9wdGlvbnMuYmFzZVVybH0ke3VybH1gO1xuICAgIH1cblxuICAgIC8vIG1ha2UgYWpheCByZXF1ZXN0IHVzaW5nIGpxdWVyeVxuICAgICQuYWpheCh7XG4gICAgICAgIG1ldGhvZDogb3B0aW9ucy5tZXRob2QsXG4gICAgICAgIHVybCxcbiAgICAgICAgeGhyRmllbGRzOiB7XG4gICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnRUeXBlOiBvcHRpb25zLnJlcXVlc3RPcHRpb25zLmZvcm1EYXRhID8gZmFsc2UgOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04JyxcbiAgICAgICAgcHJvY2Vzc0RhdGE6ICFvcHRpb25zLnJlcXVlc3RPcHRpb25zLmZvcm1EYXRhLFxuICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGxldCByZXQ7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gb3B0aW9ucy5yZW1vdGUgPyByZXNwb25zZS5jb250ZW50IDogcmVzcG9uc2U7XG5cbiAgICAgICAgICAgIGlmICh1c2luZ1RlbXBsYXRlcykge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgYGNvbXBvbmVudHNgIHByZWZpeCBmcm9tIHRoZSByZXNwb25zZSBpZiBpdCdzIGFuIG9iamVjdFxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YoY29udGVudCkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtleTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGVhbktleSA9IGtleS5yZXBsYWNlKC9eY29tcG9uZW50c1xcLy8sICcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFtjbGVhbktleV0gPSBjb250ZW50W2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUoY29udGVudFtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHVzaW5nIFwic2VjdGlvbnNcIiwgbW9ycGggdGhlIGNvbnRlbnQgaW50byB0aGUgYXJiaXRyYXJ5IGtleXMgPT4gY29udGVudCBvYmplY3QuXG4gICAgICAgICAgICAgICAgaWYgKHVzaW5nU2VjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcGxhdGVWYXJpYWJsZU5hbWVzID0gT2JqZWN0LmtleXMocmVxdWVzdGVkVGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcGxhdGVWYXJpYWJsZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh0ZW1wbGF0ZVZhcmlhYmxlIG9mIHRlbXBsYXRlVmFyaWFibGVOYW1lcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFt0ZW1wbGF0ZVZhcmlhYmxlXSA9IGNvbnRlbnRbcmVxdWVzdGVkVGVtcGxhdGVbdGVtcGxhdGVWYXJpYWJsZV1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNvbnRlbnRbcmVxdWVzdGVkVGVtcGxhdGVbdGVtcGxhdGVWYXJpYWJsZV1dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucmVtb3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldCA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICByZXQuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0ID0gY29udGVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldCA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXQpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogKFhIUiwgdGV4dFN0YXR1cywgZXJyKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICB9LFxuICAgICAgICBkYXRhLFxuICAgICAgICBoZWFkZXJzLFxuICAgIH0pO1xufVxuIiwiLy8gVXRpbGl0aWVzXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG4vKipcbiAqIE5vcm1hbGl6ZSBxdWVyeXN0cmluZyBwYXJhbXMuIFJlbW92ZSBlbXB0eSBhcnJheSB2YWx1ZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXNcbiAqIEByZXR1cm5zIHtzdHJpbmd9IE5vcm1hbGl6ZWQgcXVlcnlzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVF1ZXJ5U3RyaW5nUGFyYW1zKHBhcmFtcykge1xuICAgIGNvbnN0IHFzUGFyYW1zID0gcXVlcnlTdHJpbmcucGFyc2UocGFyYW1zKTtcblxuICAgIGNvbnN0IGlzVmFsaWRQYXJhbSA9ICh2YWx1ZSkgPT4gKHZhbHVlICE9PSAnJyAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKTtcblxuICAgIGNvbnN0IG9wdGlvbnNDb2xsZWN0aW9uID0gT2JqZWN0LmtleXMocXNQYXJhbXMpLnJlZHVjZSgobm9ybWFsaXplZCwga2V5KSA9PiB7XG4gICAgICAgIGxldCBwYXJhbTtcblxuICAgICAgICBpZiAocXNQYXJhbXNba2V5XSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IHFzUGFyYW1zW2tleV0uZmlsdGVyKGlzVmFsaWRQYXJhbSk7XG4gICAgICAgICAgICBwYXJhbSA9IHsgW2tleV06IGZpbHRlcmVkIH07XG4gICAgICAgIH0gZWxzZSBpZiAoaXNWYWxpZFBhcmFtKHFzUGFyYW1zW2tleV0pKSB7XG4gICAgICAgICAgICBwYXJhbSA9IHsgW2tleV06IHFzUGFyYW1zW2tleV0gfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBub3JtYWxpemVkLCBwYXJhbSk7XG4gICAgfSwge30pO1xuXG4gICAgY29uc3QgcGFyYW1TdHJpbmcgPSBxdWVyeVN0cmluZy5zdHJpbmdpZnkob3B0aW9uc0NvbGxlY3Rpb24pO1xuICAgIHJldHVybiBwYXJhbVN0cmluZztcbn1cbiIsImltcG9ydCBob29rcyBmcm9tICcuL2hvb2tzJztcbmltcG9ydCBhcGkgZnJvbSAnLi9hcGknO1xuaW1wb3J0IHRvb2xzIGZyb20gJy4vdG9vbHMnO1xuXG5jb25zdCBTdGVuY2lsVXRpbHMgPSB7XG4gICAgaG9va3MsXG4gICAgYXBpLFxuICAgIHRvb2xzLFxufTtcblxuZXhwb3J0IHsgaG9va3MsIGFwaSwgdG9vbHMgfTtcbmV4cG9ydCBkZWZhdWx0IFN0ZW5jaWxVdGlscztcblxuLyogZ2xvYmFsIGRlZmluZSAqL1xuKGZ1bmN0aW9uIChyb290KSB7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCAmJiByb290KSB7XG4gICAgICAgIC8vIElnbm9yZXMgYmVsb3cgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9lc2xpbnQvZXNsaW50L2lzc3Vlcy81MTUwXG4gICAgICAgIGRlZmluZShmdW5jdGlvbiAoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLWFycm93LWNhbGxiYWNrXG4gICAgICAgICAgICByb290LnN0ZW5jaWxVdGlscyA9IFN0ZW5jaWxVdGlsczsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gU3RlbmNpbFV0aWxzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5zdGVuY2lsVXRpbHMgPSBTdGVuY2lsVXRpbHM7XG4gICAgfVxufSh0aGlzKSk7XG4iLCJpbXBvcnQgSW1hZ2VUb29sIGZyb20gJy4vdG9vbHMvaW1hZ2UnO1xuaW1wb3J0IEltYWdlU3Jjc2V0VG9vbCBmcm9tICcuL3Rvb2xzL2ltYWdlU3Jjc2V0JztcbmltcG9ydCBTdG9yYWdlVG9vbHMgZnJvbSAnLi90b29scy9zdG9yYWdlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGltYWdlOiBuZXcgSW1hZ2VUb29sKCksXG4gICAgaW1hZ2VTcmNzZXQ6IG5ldyBJbWFnZVNyY3NldFRvb2woKSxcbiAgICBzdG9yYWdlOiBuZXcgU3RvcmFnZVRvb2xzKCksXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGdldFNyYyhwYXRoLCBkaW1lbnNpb25zKSB7XG4gICAgICAgIC8vIFJlZ2V4IHRvIHRlc3Qgc2l6ZSBzdHJpbmcgaXMgb2YgdGhlIGZvcm0gMTIzeDEyMyBvciAxMDB3XG4gICAgICAgIGNvbnN0IHNpemVSZWdleCA9IC8oXlxcZCt3JCl8KF4oXFxkKz8peChcXGQrPykkKS9nO1xuICAgICAgICBsZXQgc2l6ZTtcblxuICAgICAgICBpZiAodHlwZW9mKGRpbWVuc2lvbnMpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBkaW1lbnNpb25zLndpZHRoIHx8IDEwMDtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGRpbWVuc2lvbnMuaGVpZ2h0IHx8IDEwMDtcblxuICAgICAgICAgICAgc2l6ZSA9IGAke3dpZHRofXgke2hlaWdodH1gO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZihkaW1lbnNpb25zKSA9PT0gJ3N0cmluZycgJiYgc2l6ZVJlZ2V4LnRlc3QoZGltZW5zaW9ucykpIHtcbiAgICAgICAgICAgIC8vIElmIGRpbWVuc2lvbnMgaXMgYSBzdHJpbmcgYW5kIG1hdGNoIHRoZSBOTk54Tk5OIG9yIE5OTncgZm9ybWF0XG4gICAgICAgICAgICBzaXplID0gZGltZW5zaW9ucztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFVzZSB0aGUgb3JpZ2luYWwgaW1hZ2Ugc2l6ZVxuICAgICAgICAgICAgc2l6ZSA9ICdvcmlnaW5hbCc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGF0aC5yZXBsYWNlKCd7OnNpemV9Jywgc2l6ZSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGdldFNyY3NldCh1cmwsIHNpemVzKSB7XG4gICAgICAgIC8vIFJlZ2V4IHRvIHRlc3Qgc2l6ZSBzdHJpbmcgaXMgb2YgdGhlIGZvcm0gMTIzeDEyMyBvciAxMDB3XG4gICAgICAgIGNvbnN0IHNpemVSZWdleCA9IC8oXlxcZCt3JCl8KF4oXFxkKz8peChcXGQrPykkKS87XG4gICAgICAgIC8vIFJlZ2V4IHRvIHRlc3QgdG8gdGhhdCBzcmNzZXQgZGVzY3JpcHRvciBpcyBvZiB0aGUgZm9ybSAxeCAxLjV4IDJ4IE9SIDEyM3dcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvclJlZ2V4ID0gLyheXFxkK3ckKXwoXihbMC05XShcXC5bMC05XSspPyl4KSQvO1xuXG4gICAgICAgIGxldCBzcmNzZXRzID0ge307XG5cbiAgICAgICAgaWYgKCFzaXplcykge1xuICAgICAgICAgICAgLy8gVXNlIGRlZmF1bHQgc3Jjc2V0cyBpZiBub25lIGFyZSBwcm92aWRlZFxuICAgICAgICAgICAgc3Jjc2V0cyA9IHtcbiAgICAgICAgICAgICAgICAnODB3JzogJzgwdycsXG4gICAgICAgICAgICAgICAgJzE2MHcnOiAnMTYwdycsXG4gICAgICAgICAgICAgICAgJzMyMHcnOiAnMzIwdycsXG4gICAgICAgICAgICAgICAgJzY0MHcnOiAnNjQwdycsXG4gICAgICAgICAgICAgICAgJzk2MHcnOiAnOTYwdycsXG4gICAgICAgICAgICAgICAgJzEyODB3JzogJzEyODB3JyxcbiAgICAgICAgICAgICAgICAnMTkyMHcnOiAnMTkyMHcnLFxuICAgICAgICAgICAgICAgICcyNTYwdyc6ICcyNTYwdycsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKChzaXplcyA9PT0gT2JqZWN0KHNpemVzKSkgJiYgIU9iamVjdC5rZXlzKHNpemVzKS5zb21lKGRlc2NyaXB0b3IgPT5cbiAgICAgICAgICAgICEoZGVzY3JpcHRvclJlZ2V4LnRlc3QoZGVzY3JpcHRvcikgJiYgc2l6ZVJlZ2V4LnRlc3Qoc2l6ZXNbZGVzY3JpcHRvcl0pKVxuICAgICAgICApKSB7XG4gICAgICAgICAgICAvLyBJZiBvYmplY3QgY29uc2lzdHMgb2YgdmFsaWQgc3Jjc2V0cywgdXNlIGl0IGluc3RlYWRcbiAgICAgICAgICAgIHNyY3NldHMgPSBzaXplcztcbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3Mgb25seSBvbmUgYXJndW1lbnQsIHJldHVybiBhIGBzcmNgIG9ubHkgKGFsc28gd29ya3MgZm9yIGBzcmNzZXRgKVxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHNyY3NldHMpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAodXJsLnJlcGxhY2UoJ3s6c2l6ZX0nLCBzcmNzZXRzW09iamVjdC5rZXlzKHNyY3NldHMpWzBdXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHNyY3NldCBkZXNjcmlwdG9yIG9yIHNpemUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuZXctY2FwXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhzcmNzZXRzKS5tYXAoZGVzY3JpcHRvciA9PlxuICAgICAgICAgICAgW3VybC5yZXBsYWNlKCd7OnNpemV9Jywgc3Jjc2V0c1tkZXNjcmlwdG9yXSksIGRlc2NyaXB0b3JdLmpvaW4oJyAnKVxuICAgICAgICApLmpvaW4oJywgJyk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGEgc3RvcmFnZSB0eXBlIChsaWtlIGxvY2FsU3RvcmFnZSBvciBzZXNzaW9uU3RvcmFnZSkgaXMgYXZhaWxhYmxlIGZvciB1c2VcbiAgICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2ViX1N0b3JhZ2VfQVBJL1VzaW5nX3RoZV9XZWJfU3RvcmFnZV9BUEkjVGVzdGluZ19mb3JfYXZhaWxhYmlsaXR5XG4gICAgICogQHBhcmFtIHR5cGVcbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xuICAgICAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgICAgIGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICAgICAgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJlxuICAgICAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2NhbFN0b3JhZ2VBdmFpbGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpO1xuICAgIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b2tlbiA9ICclW2EtZjAtOV17Mn0nO1xudmFyIHNpbmdsZU1hdGNoZXIgPSBuZXcgUmVnRXhwKHRva2VuLCAnZ2knKTtcbnZhciBtdWx0aU1hdGNoZXIgPSBuZXcgUmVnRXhwKCcoJyArIHRva2VuICsgJykrJywgJ2dpJyk7XG5cbmZ1bmN0aW9uIGRlY29kZUNvbXBvbmVudHMoY29tcG9uZW50cywgc3BsaXQpIHtcblx0dHJ5IHtcblx0XHQvLyBUcnkgdG8gZGVjb2RlIHRoZSBlbnRpcmUgc3RyaW5nIGZpcnN0XG5cdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChjb21wb25lbnRzLmpvaW4oJycpKTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gRG8gbm90aGluZ1xuXHR9XG5cblx0aWYgKGNvbXBvbmVudHMubGVuZ3RoID09PSAxKSB7XG5cdFx0cmV0dXJuIGNvbXBvbmVudHM7XG5cdH1cblxuXHRzcGxpdCA9IHNwbGl0IHx8IDE7XG5cblx0Ly8gU3BsaXQgdGhlIGFycmF5IGluIDIgcGFydHNcblx0dmFyIGxlZnQgPSBjb21wb25lbnRzLnNsaWNlKDAsIHNwbGl0KTtcblx0dmFyIHJpZ2h0ID0gY29tcG9uZW50cy5zbGljZShzcGxpdCk7XG5cblx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuY2FsbChbXSwgZGVjb2RlQ29tcG9uZW50cyhsZWZ0KSwgZGVjb2RlQ29tcG9uZW50cyhyaWdodCkpO1xufVxuXG5mdW5jdGlvbiBkZWNvZGUoaW5wdXQpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGlucHV0KTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0dmFyIHRva2VucyA9IGlucHV0Lm1hdGNoKHNpbmdsZU1hdGNoZXIpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDE7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlucHV0ID0gZGVjb2RlQ29tcG9uZW50cyh0b2tlbnMsIGkpLmpvaW4oJycpO1xuXG5cdFx0XHR0b2tlbnMgPSBpbnB1dC5tYXRjaChzaW5nbGVNYXRjaGVyKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaW5wdXQ7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3VzdG9tRGVjb2RlVVJJQ29tcG9uZW50KGlucHV0KSB7XG5cdC8vIEtlZXAgdHJhY2sgb2YgYWxsIHRoZSByZXBsYWNlbWVudHMgYW5kIHByZWZpbGwgdGhlIG1hcCB3aXRoIHRoZSBgQk9NYFxuXHR2YXIgcmVwbGFjZU1hcCA9IHtcblx0XHQnJUZFJUZGJzogJ1xcdUZGRkRcXHVGRkZEJyxcblx0XHQnJUZGJUZFJzogJ1xcdUZGRkRcXHVGRkZEJ1xuXHR9O1xuXG5cdHZhciBtYXRjaCA9IG11bHRpTWF0Y2hlci5leGVjKGlucHV0KTtcblx0d2hpbGUgKG1hdGNoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdC8vIERlY29kZSBhcyBiaWcgY2h1bmtzIGFzIHBvc3NpYmxlXG5cdFx0XHRyZXBsYWNlTWFwW21hdGNoWzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFswXSk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gZGVjb2RlKG1hdGNoWzBdKTtcblxuXHRcdFx0aWYgKHJlc3VsdCAhPT0gbWF0Y2hbMF0pIHtcblx0XHRcdFx0cmVwbGFjZU1hcFttYXRjaFswXV0gPSByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bWF0Y2ggPSBtdWx0aU1hdGNoZXIuZXhlYyhpbnB1dCk7XG5cdH1cblxuXHQvLyBBZGQgYCVDMmAgYXQgdGhlIGVuZCBvZiB0aGUgbWFwIHRvIG1ha2Ugc3VyZSBpdCBkb2VzIG5vdCByZXBsYWNlIHRoZSBjb21iaW5hdG9yIGJlZm9yZSBldmVyeXRoaW5nIGVsc2Vcblx0cmVwbGFjZU1hcFsnJUMyJ10gPSAnXFx1RkZGRCc7XG5cblx0dmFyIGVudHJpZXMgPSBPYmplY3Qua2V5cyhyZXBsYWNlTWFwKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspIHtcblx0XHQvLyBSZXBsYWNlIGFsbCBkZWNvZGVkIGNvbXBvbmVudHNcblx0XHR2YXIga2V5ID0gZW50cmllc1tpXTtcblx0XHRpbnB1dCA9IGlucHV0LnJlcGxhY2UobmV3IFJlZ0V4cChrZXksICdnJyksIHJlcGxhY2VNYXBba2V5XSk7XG5cdH1cblxuXHRyZXR1cm4gaW5wdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVuY29kZWRVUkkpIHtcblx0aWYgKHR5cGVvZiBlbmNvZGVkVVJJICE9PSAnc3RyaW5nJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGBlbmNvZGVkVVJJYCB0byBiZSBvZiB0eXBlIGBzdHJpbmdgLCBnb3QgYCcgKyB0eXBlb2YgZW5jb2RlZFVSSSArICdgJyk7XG5cdH1cblxuXHR0cnkge1xuXHRcdGVuY29kZWRVUkkgPSBlbmNvZGVkVVJJLnJlcGxhY2UoL1xcKy9nLCAnICcpO1xuXG5cdFx0Ly8gVHJ5IHRoZSBidWlsdCBpbiBkZWNvZGVyIGZpcnN0XG5cdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkVVJJKTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gRmFsbGJhY2sgdG8gYSBtb3JlIGFkdmFuY2VkIGRlY29kZXJcblx0XHRyZXR1cm4gY3VzdG9tRGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZWRVUkkpO1xuXHR9XG59O1xuIiwiLyohXG4gKiBFdmVudEVtaXR0ZXIyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaGlqMW54L0V2ZW50RW1pdHRlcjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMgaGlqMW54XG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cbjshZnVuY3Rpb24odW5kZWZpbmVkKSB7XG5cbiAgdmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5ID8gQXJyYXkuaXNBcnJheSA6IGZ1bmN0aW9uIF9pc0FycmF5KG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuICB9O1xuICB2YXIgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgaWYgKHRoaXMuX2NvbmYpIHtcbiAgICAgIGNvbmZpZ3VyZS5jYWxsKHRoaXMsIHRoaXMuX2NvbmYpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbmZpZ3VyZShjb25mKSB7XG4gICAgaWYgKGNvbmYpIHtcblxuICAgICAgdGhpcy5fY29uZiA9IGNvbmY7XG5cbiAgICAgIGNvbmYuZGVsaW1pdGVyICYmICh0aGlzLmRlbGltaXRlciA9IGNvbmYuZGVsaW1pdGVyKTtcbiAgICAgIGNvbmYubWF4TGlzdGVuZXJzICYmICh0aGlzLl9ldmVudHMubWF4TGlzdGVuZXJzID0gY29uZi5tYXhMaXN0ZW5lcnMpO1xuICAgICAgY29uZi53aWxkY2FyZCAmJiAodGhpcy53aWxkY2FyZCA9IGNvbmYud2lsZGNhcmQpO1xuICAgICAgY29uZi5uZXdMaXN0ZW5lciAmJiAodGhpcy5uZXdMaXN0ZW5lciA9IGNvbmYubmV3TGlzdGVuZXIpO1xuXG4gICAgICBpZiAodGhpcy53aWxkY2FyZCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVyVHJlZSA9IHt9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEV2ZW50RW1pdHRlcihjb25mKSB7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgdGhpcy5uZXdMaXN0ZW5lciA9IGZhbHNlO1xuICAgIGNvbmZpZ3VyZS5jYWxsKHRoaXMsIGNvbmYpO1xuICB9XG5cbiAgLy9cbiAgLy8gQXR0ZW50aW9uLCBmdW5jdGlvbiByZXR1cm4gdHlwZSBub3cgaXMgYXJyYXksIGFsd2F5cyAhXG4gIC8vIEl0IGhhcyB6ZXJvIGVsZW1lbnRzIGlmIG5vIGFueSBtYXRjaGVzIGZvdW5kIGFuZCBvbmUgb3IgbW9yZVxuICAvLyBlbGVtZW50cyAobGVhZnMpIGlmIHRoZXJlIGFyZSBtYXRjaGVzXG4gIC8vXG4gIGZ1bmN0aW9uIHNlYXJjaExpc3RlbmVyVHJlZShoYW5kbGVycywgdHlwZSwgdHJlZSwgaSkge1xuICAgIGlmICghdHJlZSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICB2YXIgbGlzdGVuZXJzPVtdLCBsZWFmLCBsZW4sIGJyYW5jaCwgeFRyZWUsIHh4VHJlZSwgaXNvbGF0ZWRCcmFuY2gsIGVuZFJlYWNoZWQsXG4gICAgICAgIHR5cGVMZW5ndGggPSB0eXBlLmxlbmd0aCwgY3VycmVudFR5cGUgPSB0eXBlW2ldLCBuZXh0VHlwZSA9IHR5cGVbaSsxXTtcbiAgICBpZiAoaSA9PT0gdHlwZUxlbmd0aCAmJiB0cmVlLl9saXN0ZW5lcnMpIHtcbiAgICAgIC8vXG4gICAgICAvLyBJZiBhdCB0aGUgZW5kIG9mIHRoZSBldmVudChzKSBsaXN0IGFuZCB0aGUgdHJlZSBoYXMgbGlzdGVuZXJzXG4gICAgICAvLyBpbnZva2UgdGhvc2UgbGlzdGVuZXJzLlxuICAgICAgLy9cbiAgICAgIGlmICh0eXBlb2YgdHJlZS5fbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGhhbmRsZXJzICYmIGhhbmRsZXJzLnB1c2godHJlZS5fbGlzdGVuZXJzKTtcbiAgICAgICAgcmV0dXJuIFt0cmVlXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGVhZiA9IDAsIGxlbiA9IHRyZWUuX2xpc3RlbmVycy5sZW5ndGg7IGxlYWYgPCBsZW47IGxlYWYrKykge1xuICAgICAgICAgIGhhbmRsZXJzICYmIGhhbmRsZXJzLnB1c2godHJlZS5fbGlzdGVuZXJzW2xlYWZdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3RyZWVdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICgoY3VycmVudFR5cGUgPT09ICcqJyB8fCBjdXJyZW50VHlwZSA9PT0gJyoqJykgfHwgdHJlZVtjdXJyZW50VHlwZV0pIHtcbiAgICAgIC8vXG4gICAgICAvLyBJZiB0aGUgZXZlbnQgZW1pdHRlZCBpcyAnKicgYXQgdGhpcyBwYXJ0XG4gICAgICAvLyBvciB0aGVyZSBpcyBhIGNvbmNyZXRlIG1hdGNoIGF0IHRoaXMgcGF0Y2hcbiAgICAgIC8vXG4gICAgICBpZiAoY3VycmVudFR5cGUgPT09ICcqJykge1xuICAgICAgICBmb3IgKGJyYW5jaCBpbiB0cmVlKSB7XG4gICAgICAgICAgaWYgKGJyYW5jaCAhPT0gJ19saXN0ZW5lcnMnICYmIHRyZWUuaGFzT3duUHJvcGVydHkoYnJhbmNoKSkge1xuICAgICAgICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmNvbmNhdChzZWFyY2hMaXN0ZW5lclRyZWUoaGFuZGxlcnMsIHR5cGUsIHRyZWVbYnJhbmNoXSwgaSsxKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcnM7XG4gICAgICB9IGVsc2UgaWYoY3VycmVudFR5cGUgPT09ICcqKicpIHtcbiAgICAgICAgZW5kUmVhY2hlZCA9IChpKzEgPT09IHR5cGVMZW5ndGggfHwgKGkrMiA9PT0gdHlwZUxlbmd0aCAmJiBuZXh0VHlwZSA9PT0gJyonKSk7XG4gICAgICAgIGlmKGVuZFJlYWNoZWQgJiYgdHJlZS5fbGlzdGVuZXJzKSB7XG4gICAgICAgICAgLy8gVGhlIG5leHQgZWxlbWVudCBoYXMgYSBfbGlzdGVuZXJzLCBhZGQgaXQgdG8gdGhlIGhhbmRsZXJzLlxuICAgICAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5jb25jYXQoc2VhcmNoTGlzdGVuZXJUcmVlKGhhbmRsZXJzLCB0eXBlLCB0cmVlLCB0eXBlTGVuZ3RoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGJyYW5jaCBpbiB0cmVlKSB7XG4gICAgICAgICAgaWYgKGJyYW5jaCAhPT0gJ19saXN0ZW5lcnMnICYmIHRyZWUuaGFzT3duUHJvcGVydHkoYnJhbmNoKSkge1xuICAgICAgICAgICAgaWYoYnJhbmNoID09PSAnKicgfHwgYnJhbmNoID09PSAnKionKSB7XG4gICAgICAgICAgICAgIGlmKHRyZWVbYnJhbmNoXS5fbGlzdGVuZXJzICYmICFlbmRSZWFjaGVkKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmNvbmNhdChzZWFyY2hMaXN0ZW5lclRyZWUoaGFuZGxlcnMsIHR5cGUsIHRyZWVbYnJhbmNoXSwgdHlwZUxlbmd0aCkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5jb25jYXQoc2VhcmNoTGlzdGVuZXJUcmVlKGhhbmRsZXJzLCB0eXBlLCB0cmVlW2JyYW5jaF0sIGkpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihicmFuY2ggPT09IG5leHRUeXBlKSB7XG4gICAgICAgICAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5jb25jYXQoc2VhcmNoTGlzdGVuZXJUcmVlKGhhbmRsZXJzLCB0eXBlLCB0cmVlW2JyYW5jaF0sIGkrMikpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gTm8gbWF0Y2ggb24gdGhpcyBvbmUsIHNoaWZ0IGludG8gdGhlIHRyZWUgYnV0IG5vdCBpbiB0aGUgdHlwZSBhcnJheS5cbiAgICAgICAgICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmNvbmNhdChzZWFyY2hMaXN0ZW5lclRyZWUoaGFuZGxlcnMsIHR5cGUsIHRyZWVbYnJhbmNoXSwgaSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdGVuZXJzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuY29uY2F0KHNlYXJjaExpc3RlbmVyVHJlZShoYW5kbGVycywgdHlwZSwgdHJlZVtjdXJyZW50VHlwZV0sIGkrMSkpO1xuICAgIH1cblxuICAgIHhUcmVlID0gdHJlZVsnKiddO1xuICAgIGlmICh4VHJlZSkge1xuICAgICAgLy9cbiAgICAgIC8vIElmIHRoZSBsaXN0ZW5lciB0cmVlIHdpbGwgYWxsb3cgYW55IG1hdGNoIGZvciB0aGlzIHBhcnQsXG4gICAgICAvLyB0aGVuIHJlY3Vyc2l2ZWx5IGV4cGxvcmUgYWxsIGJyYW5jaGVzIG9mIHRoZSB0cmVlXG4gICAgICAvL1xuICAgICAgc2VhcmNoTGlzdGVuZXJUcmVlKGhhbmRsZXJzLCB0eXBlLCB4VHJlZSwgaSsxKTtcbiAgICB9XG5cbiAgICB4eFRyZWUgPSB0cmVlWycqKiddO1xuICAgIGlmKHh4VHJlZSkge1xuICAgICAgaWYoaSA8IHR5cGVMZW5ndGgpIHtcbiAgICAgICAgaWYoeHhUcmVlLl9saXN0ZW5lcnMpIHtcbiAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgbGlzdGVuZXIgb24gYSAnKionLCBpdCB3aWxsIGNhdGNoIGFsbCwgc28gYWRkIGl0cyBoYW5kbGVyLlxuICAgICAgICAgIHNlYXJjaExpc3RlbmVyVHJlZShoYW5kbGVycywgdHlwZSwgeHhUcmVlLCB0eXBlTGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJ1aWxkIGFycmF5cyBvZiBtYXRjaGluZyBuZXh0IGJyYW5jaGVzIGFuZCBvdGhlcnMuXG4gICAgICAgIGZvcihicmFuY2ggaW4geHhUcmVlKSB7XG4gICAgICAgICAgaWYoYnJhbmNoICE9PSAnX2xpc3RlbmVycycgJiYgeHhUcmVlLmhhc093blByb3BlcnR5KGJyYW5jaCkpIHtcbiAgICAgICAgICAgIGlmKGJyYW5jaCA9PT0gbmV4dFR5cGUpIHtcbiAgICAgICAgICAgICAgLy8gV2Uga25vdyB0aGUgbmV4dCBlbGVtZW50IHdpbGwgbWF0Y2gsIHNvIGp1bXAgdHdpY2UuXG4gICAgICAgICAgICAgIHNlYXJjaExpc3RlbmVyVHJlZShoYW5kbGVycywgdHlwZSwgeHhUcmVlW2JyYW5jaF0sIGkrMik7XG4gICAgICAgICAgICB9IGVsc2UgaWYoYnJhbmNoID09PSBjdXJyZW50VHlwZSkge1xuICAgICAgICAgICAgICAvLyBDdXJyZW50IG5vZGUgbWF0Y2hlcywgbW92ZSBpbnRvIHRoZSB0cmVlLlxuICAgICAgICAgICAgICBzZWFyY2hMaXN0ZW5lclRyZWUoaGFuZGxlcnMsIHR5cGUsIHh4VHJlZVticmFuY2hdLCBpKzEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaXNvbGF0ZWRCcmFuY2ggPSB7fTtcbiAgICAgICAgICAgICAgaXNvbGF0ZWRCcmFuY2hbYnJhbmNoXSA9IHh4VHJlZVticmFuY2hdO1xuICAgICAgICAgICAgICBzZWFyY2hMaXN0ZW5lclRyZWUoaGFuZGxlcnMsIHR5cGUsIHsgJyoqJzogaXNvbGF0ZWRCcmFuY2ggfSwgaSsxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZih4eFRyZWUuX2xpc3RlbmVycykge1xuICAgICAgICAvLyBXZSBoYXZlIHJlYWNoZWQgdGhlIGVuZCBhbmQgc3RpbGwgb24gYSAnKionXG4gICAgICAgIHNlYXJjaExpc3RlbmVyVHJlZShoYW5kbGVycywgdHlwZSwgeHhUcmVlLCB0eXBlTGVuZ3RoKTtcbiAgICAgIH0gZWxzZSBpZih4eFRyZWVbJyonXSAmJiB4eFRyZWVbJyonXS5fbGlzdGVuZXJzKSB7XG4gICAgICAgIHNlYXJjaExpc3RlbmVyVHJlZShoYW5kbGVycywgdHlwZSwgeHhUcmVlWycqJ10sIHR5cGVMZW5ndGgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsaXN0ZW5lcnM7XG4gIH1cblxuICBmdW5jdGlvbiBncm93TGlzdGVuZXJUcmVlKHR5cGUsIGxpc3RlbmVyKSB7XG5cbiAgICB0eXBlID0gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZS5zcGxpdCh0aGlzLmRlbGltaXRlcikgOiB0eXBlLnNsaWNlKCk7XG5cbiAgICAvL1xuICAgIC8vIExvb2tzIGZvciB0d28gY29uc2VjdXRpdmUgJyoqJywgaWYgc28sIGRvbid0IGFkZCB0aGUgZXZlbnQgYXQgYWxsLlxuICAgIC8vXG4gICAgZm9yKHZhciBpID0gMCwgbGVuID0gdHlwZS5sZW5ndGg7IGkrMSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZih0eXBlW2ldID09PSAnKionICYmIHR5cGVbaSsxXSA9PT0gJyoqJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHRyZWUgPSB0aGlzLmxpc3RlbmVyVHJlZTtcbiAgICB2YXIgbmFtZSA9IHR5cGUuc2hpZnQoKTtcblxuICAgIHdoaWxlIChuYW1lKSB7XG5cbiAgICAgIGlmICghdHJlZVtuYW1lXSkge1xuICAgICAgICB0cmVlW25hbWVdID0ge307XG4gICAgICB9XG5cbiAgICAgIHRyZWUgPSB0cmVlW25hbWVdO1xuXG4gICAgICBpZiAodHlwZS5sZW5ndGggPT09IDApIHtcblxuICAgICAgICBpZiAoIXRyZWUuX2xpc3RlbmVycykge1xuICAgICAgICAgIHRyZWUuX2xpc3RlbmVycyA9IGxpc3RlbmVyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodHlwZW9mIHRyZWUuX2xpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRyZWUuX2xpc3RlbmVycyA9IFt0cmVlLl9saXN0ZW5lcnMsIGxpc3RlbmVyXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0FycmF5KHRyZWUuX2xpc3RlbmVycykpIHtcblxuICAgICAgICAgIHRyZWUuX2xpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgICAgICAgIGlmICghdHJlZS5fbGlzdGVuZXJzLndhcm5lZCkge1xuXG4gICAgICAgICAgICB2YXIgbSA9IGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fZXZlbnRzLm1heExpc3RlbmVycyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgbSA9IHRoaXMuX2V2ZW50cy5tYXhMaXN0ZW5lcnM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtID4gMCAmJiB0cmVlLl9saXN0ZW5lcnMubGVuZ3RoID4gbSkge1xuXG4gICAgICAgICAgICAgIHRyZWUuX2xpc3RlbmVycy53YXJuZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCcobm9kZSkgd2FybmluZzogcG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGVhayBkZXRlY3RlZC4gJWQgbGlzdGVuZXJzIGFkZGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmVlLl9saXN0ZW5lcnMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIG5hbWUgPSB0eXBlLnNoaWZ0KCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhblxuICAvLyAxMCBsaXN0ZW5lcnMgYXJlIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2hcbiAgLy8gaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG4gIC8vXG4gIC8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuICAvLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cblxuICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmRlbGltaXRlciA9ICcuJztcblxuICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uKG4pIHtcbiAgICB0aGlzLl9ldmVudHMgfHwgaW5pdC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2V2ZW50cy5tYXhMaXN0ZW5lcnMgPSBuO1xuICAgIGlmICghdGhpcy5fY29uZikgdGhpcy5fY29uZiA9IHt9O1xuICAgIHRoaXMuX2NvbmYubWF4TGlzdGVuZXJzID0gbjtcbiAgfTtcblxuICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50ID0gJyc7XG5cbiAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24oZXZlbnQsIGZuKSB7XG4gICAgdGhpcy5tYW55KGV2ZW50LCAxLCBmbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5tYW55ID0gZnVuY3Rpb24oZXZlbnQsIHR0bCwgZm4pIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ21hbnkgb25seSBhY2NlcHRzIGluc3RhbmNlcyBvZiBGdW5jdGlvbicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICAgICAgaWYgKC0tdHRsID09PSAwKSB7XG4gICAgICAgIHNlbGYub2ZmKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIGxpc3RlbmVyLl9vcmlnaW4gPSBmbjtcblxuICAgIHRoaXMub24oZXZlbnQsIGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBzZWxmO1xuICB9O1xuXG4gIEV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5fZXZlbnRzIHx8IGluaXQuY2FsbCh0aGlzKTtcblxuICAgIHZhciB0eXBlID0gYXJndW1lbnRzWzBdO1xuXG4gICAgaWYgKHR5cGUgPT09ICduZXdMaXN0ZW5lcicgJiYgIXRoaXMubmV3TGlzdGVuZXIpIHtcbiAgICAgIGlmICghdGhpcy5fZXZlbnRzLm5ld0xpc3RlbmVyKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIH1cblxuICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgKl9hbGwqIGZ1bmN0aW9ucyBhbmQgaW52b2tlIHRoZW0uXG4gICAgaWYgKHRoaXMuX2FsbCkge1xuICAgICAgdmFyIGwgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkobCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBsOyBpKyspIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yIChpID0gMCwgbCA9IHRoaXMuX2FsbC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdGhpcy5ldmVudCA9IHR5cGU7XG4gICAgICAgIHRoaXMuX2FsbFtpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gICAgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcblxuICAgICAgaWYgKCF0aGlzLl9hbGwgJiZcbiAgICAgICAgIXRoaXMuX2V2ZW50cy5lcnJvciAmJlxuICAgICAgICAhKHRoaXMud2lsZGNhcmQgJiYgdGhpcy5saXN0ZW5lclRyZWUuZXJyb3IpKSB7XG5cbiAgICAgICAgaWYgKGFyZ3VtZW50c1sxXSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgYXJndW1lbnRzWzFdOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuY2F1Z2h0LCB1bnNwZWNpZmllZCAnZXJyb3InIGV2ZW50LlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGhhbmRsZXI7XG5cbiAgICBpZih0aGlzLndpbGRjYXJkKSB7XG4gICAgICBoYW5kbGVyID0gW107XG4gICAgICB2YXIgbnMgPSB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlLnNwbGl0KHRoaXMuZGVsaW1pdGVyKSA6IHR5cGUuc2xpY2UoKTtcbiAgICAgIHNlYXJjaExpc3RlbmVyVHJlZS5jYWxsKHRoaXMsIGhhbmRsZXIsIG5zLCB0aGlzLmxpc3RlbmVyVHJlZSwgMCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaGFuZGxlciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuZXZlbnQgPSB0eXBlO1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpXG4gICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vIHNsb3dlclxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgbCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShsIC0gMSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGw7IGkrKykgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaGFuZGxlcikge1xuICAgICAgdmFyIGwgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkobCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBsOyBpKyspIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICB2YXIgbGlzdGVuZXJzID0gaGFuZGxlci5zbGljZSgpO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHRoaXMuZXZlbnQgPSB0eXBlO1xuICAgICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKGxpc3RlbmVycy5sZW5ndGggPiAwKSB8fCAhIXRoaXMuX2FsbDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gISF0aGlzLl9hbGw7XG4gICAgfVxuXG4gIH07XG5cbiAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMub25BbnkodHlwZSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ29uIG9ubHkgYWNjZXB0cyBpbnN0YW5jZXMgb2YgRnVuY3Rpb24nKTtcbiAgICB9XG4gICAgdGhpcy5fZXZlbnRzIHx8IGluaXQuY2FsbCh0aGlzKTtcblxuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT0gXCJuZXdMaXN0ZW5lcnNcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lcnNcIi5cbiAgICB0aGlzLmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuXG4gICAgaWYodGhpcy53aWxkY2FyZCkge1xuICAgICAgZ3Jvd0xpc3RlbmVyVHJlZS5jYWxsKHRoaXMsIHR5cGUsIGxpc3RlbmVyKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKSB7XG4gICAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICAgIH1cbiAgICBlbHNlIGlmKHR5cGVvZiB0aGlzLl9ldmVudHNbdHlwZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gW3RoaXMuX2V2ZW50c1t0eXBlXSwgbGlzdGVuZXJdO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0FycmF5KHRoaXMuX2V2ZW50c1t0eXBlXSkpIHtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcblxuICAgICAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgICAgIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCkge1xuXG4gICAgICAgIHZhciBtID0gZGVmYXVsdE1heExpc3RlbmVycztcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2V2ZW50cy5tYXhMaXN0ZW5lcnMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgbSA9IHRoaXMuX2V2ZW50cy5tYXhMaXN0ZW5lcnM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobSA+IDAgJiYgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCA+IG0pIHtcblxuICAgICAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQgPSB0cnVlO1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJyhub2RlKSB3YXJuaW5nOiBwb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5ICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2xlYWsgZGV0ZWN0ZWQuICVkIGxpc3RlbmVycyBhZGRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGgpO1xuICAgICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uQW55ID0gZnVuY3Rpb24oZm4pIHtcblxuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignb25Bbnkgb25seSBhY2NlcHRzIGluc3RhbmNlcyBvZiBGdW5jdGlvbicpO1xuICAgIH1cblxuICAgIGlmKCF0aGlzLl9hbGwpIHtcbiAgICAgIHRoaXMuX2FsbCA9IFtdO1xuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZnVuY3Rpb24gdG8gdGhlIGV2ZW50IGxpc3RlbmVyIGNvbGxlY3Rpb24uXG4gICAgdGhpcy5fYWxsLnB1c2goZm4pO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uO1xuXG4gIEV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlbW92ZUxpc3RlbmVyIG9ubHkgdGFrZXMgaW5zdGFuY2VzIG9mIEZ1bmN0aW9uJyk7XG4gICAgfVxuXG4gICAgdmFyIGhhbmRsZXJzLGxlYWZzPVtdO1xuXG4gICAgaWYodGhpcy53aWxkY2FyZCkge1xuICAgICAgdmFyIG5zID0gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZS5zcGxpdCh0aGlzLmRlbGltaXRlcikgOiB0eXBlLnNsaWNlKCk7XG4gICAgICBsZWFmcyA9IHNlYXJjaExpc3RlbmVyVHJlZS5jYWxsKHRoaXMsIG51bGwsIG5zLCB0aGlzLmxpc3RlbmVyVHJlZSwgMCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gZG9lcyBub3QgdXNlIGxpc3RlbmVycygpLCBzbyBubyBzaWRlIGVmZmVjdCBvZiBjcmVhdGluZyBfZXZlbnRzW3R5cGVdXG4gICAgICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSkgcmV0dXJuIHRoaXM7XG4gICAgICBoYW5kbGVycyA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICAgIGxlYWZzLnB1c2goe19saXN0ZW5lcnM6aGFuZGxlcnN9KTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpTGVhZj0wOyBpTGVhZjxsZWFmcy5sZW5ndGg7IGlMZWFmKyspIHtcbiAgICAgIHZhciBsZWFmID0gbGVhZnNbaUxlYWZdO1xuICAgICAgaGFuZGxlcnMgPSBsZWFmLl9saXN0ZW5lcnM7XG4gICAgICBpZiAoaXNBcnJheShoYW5kbGVycykpIHtcblxuICAgICAgICB2YXIgcG9zaXRpb24gPSAtMTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoaGFuZGxlcnNbaV0gPT09IGxpc3RlbmVyIHx8XG4gICAgICAgICAgICAoaGFuZGxlcnNbaV0ubGlzdGVuZXIgJiYgaGFuZGxlcnNbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB8fFxuICAgICAgICAgICAgKGhhbmRsZXJzW2ldLl9vcmlnaW4gJiYgaGFuZGxlcnNbaV0uX29yaWdpbiA9PT0gbGlzdGVuZXIpKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLndpbGRjYXJkKSB7XG4gICAgICAgICAgbGVhZi5fbGlzdGVuZXJzLnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFuZGxlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgaWYodGhpcy53aWxkY2FyZCkge1xuICAgICAgICAgICAgZGVsZXRlIGxlYWYuX2xpc3RlbmVycztcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGhhbmRsZXJzID09PSBsaXN0ZW5lciB8fFxuICAgICAgICAoaGFuZGxlcnMubGlzdGVuZXIgJiYgaGFuZGxlcnMubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB8fFxuICAgICAgICAoaGFuZGxlcnMuX29yaWdpbiAmJiBoYW5kbGVycy5fb3JpZ2luID09PSBsaXN0ZW5lcikpIHtcbiAgICAgICAgaWYodGhpcy53aWxkY2FyZCkge1xuICAgICAgICAgIGRlbGV0ZSBsZWFmLl9saXN0ZW5lcnM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmQW55ID0gZnVuY3Rpb24oZm4pIHtcbiAgICB2YXIgaSA9IDAsIGwgPSAwLCBmbnM7XG4gICAgaWYgKGZuICYmIHRoaXMuX2FsbCAmJiB0aGlzLl9hbGwubGVuZ3RoID4gMCkge1xuICAgICAgZm5zID0gdGhpcy5fYWxsO1xuICAgICAgZm9yKGkgPSAwLCBsID0gZm5zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZihmbiA9PT0gZm5zW2ldKSB7XG4gICAgICAgICAgZm5zLnNwbGljZShpLCAxKTtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hbGwgPSBbXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmO1xuXG4gIEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAhdGhpcy5fZXZlbnRzIHx8IGluaXQuY2FsbCh0aGlzKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmKHRoaXMud2lsZGNhcmQpIHtcbiAgICAgIHZhciBucyA9IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUuc3BsaXQodGhpcy5kZWxpbWl0ZXIpIDogdHlwZS5zbGljZSgpO1xuICAgICAgdmFyIGxlYWZzID0gc2VhcmNoTGlzdGVuZXJUcmVlLmNhbGwodGhpcywgbnVsbCwgbnMsIHRoaXMubGlzdGVuZXJUcmVlLCAwKTtcblxuICAgICAgZm9yICh2YXIgaUxlYWY9MDsgaUxlYWY8bGVhZnMubGVuZ3RoOyBpTGVhZisrKSB7XG4gICAgICAgIHZhciBsZWFmID0gbGVhZnNbaUxlYWZdO1xuICAgICAgICBsZWFmLl9saXN0ZW5lcnMgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKSByZXR1cm4gdGhpcztcbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICAgIGlmKHRoaXMud2lsZGNhcmQpIHtcbiAgICAgIHZhciBoYW5kbGVycyA9IFtdO1xuICAgICAgdmFyIG5zID0gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZS5zcGxpdCh0aGlzLmRlbGltaXRlcikgOiB0eXBlLnNsaWNlKCk7XG4gICAgICBzZWFyY2hMaXN0ZW5lclRyZWUuY2FsbCh0aGlzLCBoYW5kbGVycywgbnMsIHRoaXMubGlzdGVuZXJUcmVlLCAwKTtcbiAgICAgIHJldHVybiBoYW5kbGVycztcbiAgICB9XG5cbiAgICB0aGlzLl9ldmVudHMgfHwgaW5pdC5jYWxsKHRoaXMpO1xuXG4gICAgaWYgKCF0aGlzLl9ldmVudHNbdHlwZV0pIHRoaXMuX2V2ZW50c1t0eXBlXSA9IFtdO1xuICAgIGlmICghaXNBcnJheSh0aGlzLl9ldmVudHNbdHlwZV0pKSB7XG4gICAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBbdGhpcy5fZXZlbnRzW3R5cGVdXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgfTtcblxuICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyc0FueSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgaWYodGhpcy5fYWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYWxsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgfTtcblxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICBkZWZpbmUoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gRXZlbnRFbWl0dGVyO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIC8vIENvbW1vbkpTXG4gICAgZXhwb3J0cy5FdmVudEVtaXR0ZXIyID0gRXZlbnRFbWl0dGVyO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsLlxuICAgIHdpbmRvdy5FdmVudEVtaXR0ZXIyID0gRXZlbnRFbWl0dGVyO1xuICB9XG59KCk7XG4iLCIvKiEgalF1ZXJ5IHYzLjYuMSB8IChjKSBPcGVuSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIHwganF1ZXJ5Lm9yZy9saWNlbnNlICovXG4hZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZS5kb2N1bWVudD90KGUsITApOmZ1bmN0aW9uKGUpe2lmKCFlLmRvY3VtZW50KXRocm93IG5ldyBFcnJvcihcImpRdWVyeSByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIik7cmV0dXJuIHQoZSl9OnQoZSl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnRoaXMsZnVuY3Rpb24oQyxlKXtcInVzZSBzdHJpY3RcIjt2YXIgdD1bXSxyPU9iamVjdC5nZXRQcm90b3R5cGVPZixzPXQuc2xpY2UsZz10LmZsYXQ/ZnVuY3Rpb24oZSl7cmV0dXJuIHQuZmxhdC5jYWxsKGUpfTpmdW5jdGlvbihlKXtyZXR1cm4gdC5jb25jYXQuYXBwbHkoW10sZSl9LHU9dC5wdXNoLGk9dC5pbmRleE9mLG49e30sbz1uLnRvU3RyaW5nLHk9bi5oYXNPd25Qcm9wZXJ0eSxhPXkudG9TdHJpbmcsbD1hLmNhbGwoT2JqZWN0KSx2PXt9LG09ZnVuY3Rpb24oZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmXCJudW1iZXJcIiE9dHlwZW9mIGUubm9kZVR5cGUmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGUuaXRlbX0seD1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZSYmZT09PWUud2luZG93fSxFPUMuZG9jdW1lbnQsYz17dHlwZTohMCxzcmM6ITAsbm9uY2U6ITAsbm9Nb2R1bGU6ITB9O2Z1bmN0aW9uIGIoZSx0LG4pe3ZhciByLGksbz0obj1ufHxFKS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2lmKG8udGV4dD1lLHQpZm9yKHIgaW4gYykoaT10W3JdfHx0LmdldEF0dHJpYnV0ZSYmdC5nZXRBdHRyaWJ1dGUocikpJiZvLnNldEF0dHJpYnV0ZShyLGkpO24uaGVhZC5hcHBlbmRDaGlsZChvKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG8pfWZ1bmN0aW9uIHcoZSl7cmV0dXJuIG51bGw9PWU/ZStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP25bby5jYWxsKGUpXXx8XCJvYmplY3RcIjp0eXBlb2YgZX12YXIgZj1cIjMuNi4xXCIsUz1mdW5jdGlvbihlLHQpe3JldHVybiBuZXcgUy5mbi5pbml0KGUsdCl9O2Z1bmN0aW9uIHAoZSl7dmFyIHQ9ISFlJiZcImxlbmd0aFwiaW4gZSYmZS5sZW5ndGgsbj13KGUpO3JldHVybiFtKGUpJiYheChlKSYmKFwiYXJyYXlcIj09PW58fDA9PT10fHxcIm51bWJlclwiPT10eXBlb2YgdCYmMDx0JiZ0LTEgaW4gZSl9Uy5mbj1TLnByb3RvdHlwZT17anF1ZXJ5OmYsY29uc3RydWN0b3I6UyxsZW5ndGg6MCx0b0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHMuY2FsbCh0aGlzKX0sZ2V0OmZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP3MuY2FsbCh0aGlzKTplPDA/dGhpc1tlK3RoaXMubGVuZ3RoXTp0aGlzW2VdfSxwdXNoU3RhY2s6ZnVuY3Rpb24oZSl7dmFyIHQ9Uy5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksZSk7cmV0dXJuIHQucHJldk9iamVjdD10aGlzLHR9LGVhY2g6ZnVuY3Rpb24oZSl7cmV0dXJuIFMuZWFjaCh0aGlzLGUpfSxtYXA6ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMucHVzaFN0YWNrKFMubWFwKHRoaXMsZnVuY3Rpb24oZSx0KXtyZXR1cm4gbi5jYWxsKGUsdCxlKX0pKX0sc2xpY2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2socy5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSxmaXJzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKDApfSxsYXN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoLTEpfSxldmVuOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKFMuZ3JlcCh0aGlzLGZ1bmN0aW9uKGUsdCl7cmV0dXJuKHQrMSklMn0pKX0sb2RkOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKFMuZ3JlcCh0aGlzLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQlMn0pKX0sZXE6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5sZW5ndGgsbj0rZSsoZTwwP3Q6MCk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKDA8PW4mJm48dD9bdGhpc1tuXV06W10pfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKCl9LHB1c2g6dSxzb3J0OnQuc29ydCxzcGxpY2U6dC5zcGxpY2V9LFMuZXh0ZW5kPVMuZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGUsdCxuLHIsaSxvLGE9YXJndW1lbnRzWzBdfHx7fSxzPTEsdT1hcmd1bWVudHMubGVuZ3RoLGw9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgYSYmKGw9YSxhPWFyZ3VtZW50c1tzXXx8e30scysrKSxcIm9iamVjdFwiPT10eXBlb2YgYXx8bShhKXx8KGE9e30pLHM9PT11JiYoYT10aGlzLHMtLSk7czx1O3MrKylpZihudWxsIT0oZT1hcmd1bWVudHNbc10pKWZvcih0IGluIGUpcj1lW3RdLFwiX19wcm90b19fXCIhPT10JiZhIT09ciYmKGwmJnImJihTLmlzUGxhaW5PYmplY3Qocil8fChpPUFycmF5LmlzQXJyYXkocikpKT8obj1hW3RdLG89aSYmIUFycmF5LmlzQXJyYXkobik/W106aXx8Uy5pc1BsYWluT2JqZWN0KG4pP246e30saT0hMSxhW3RdPVMuZXh0ZW5kKGwsbyxyKSk6dm9pZCAwIT09ciYmKGFbdF09cikpO3JldHVybiBhfSxTLmV4dGVuZCh7ZXhwYW5kbzpcImpRdWVyeVwiKyhmK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLGlzUmVhZHk6ITAsZXJyb3I6ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKGUpfSxub29wOmZ1bmN0aW9uKCl7fSxpc1BsYWluT2JqZWN0OmZ1bmN0aW9uKGUpe3ZhciB0LG47cmV0dXJuISghZXx8XCJbb2JqZWN0IE9iamVjdF1cIiE9PW8uY2FsbChlKSkmJighKHQ9cihlKSl8fFwiZnVuY3Rpb25cIj09dHlwZW9mKG49eS5jYWxsKHQsXCJjb25zdHJ1Y3RvclwiKSYmdC5jb25zdHJ1Y3RvcikmJmEuY2FsbChuKT09PWwpfSxpc0VtcHR5T2JqZWN0OmZ1bmN0aW9uKGUpe3ZhciB0O2Zvcih0IGluIGUpcmV0dXJuITE7cmV0dXJuITB9LGdsb2JhbEV2YWw6ZnVuY3Rpb24oZSx0LG4pe2IoZSx7bm9uY2U6dCYmdC5ub25jZX0sbil9LGVhY2g6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTA7aWYocChlKSl7Zm9yKG49ZS5sZW5ndGg7cjxuO3IrKylpZighMT09PXQuY2FsbChlW3JdLHIsZVtyXSkpYnJlYWt9ZWxzZSBmb3IociBpbiBlKWlmKCExPT09dC5jYWxsKGVbcl0scixlW3JdKSlicmVhaztyZXR1cm4gZX0sbWFrZUFycmF5OmZ1bmN0aW9uKGUsdCl7dmFyIG49dHx8W107cmV0dXJuIG51bGwhPWUmJihwKE9iamVjdChlKSk/Uy5tZXJnZShuLFwic3RyaW5nXCI9PXR5cGVvZiBlP1tlXTplKTp1LmNhbGwobixlKSksbn0saW5BcnJheTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIG51bGw9PXQ/LTE6aS5jYWxsKHQsZSxuKX0sbWVyZ2U6ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49K3QubGVuZ3RoLHI9MCxpPWUubGVuZ3RoO3I8bjtyKyspZVtpKytdPXRbcl07cmV0dXJuIGUubGVuZ3RoPWksZX0sZ3JlcDpmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPVtdLGk9MCxvPWUubGVuZ3RoLGE9IW47aTxvO2krKykhdChlW2ldLGkpIT09YSYmci5wdXNoKGVbaV0pO3JldHVybiByfSxtYXA6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz0wLGE9W107aWYocChlKSlmb3Iocj1lLmxlbmd0aDtvPHI7bysrKW51bGwhPShpPXQoZVtvXSxvLG4pKSYmYS5wdXNoKGkpO2Vsc2UgZm9yKG8gaW4gZSludWxsIT0oaT10KGVbb10sbyxuKSkmJmEucHVzaChpKTtyZXR1cm4gZyhhKX0sZ3VpZDoxLHN1cHBvcnQ6dn0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmKFMuZm5bU3ltYm9sLml0ZXJhdG9yXT10W1N5bWJvbC5pdGVyYXRvcl0pLFMuZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3IgU3ltYm9sXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGUsdCl7bltcIltvYmplY3QgXCIrdCtcIl1cIl09dC50b0xvd2VyQ2FzZSgpfSk7dmFyIGQ9ZnVuY3Rpb24obil7dmFyIGUsZCxiLG8saSxoLGYsZyx3LHUsbCxULEMsYSxFLHkscyxjLHYsUz1cInNpenpsZVwiKzEqbmV3IERhdGUscD1uLmRvY3VtZW50LGs9MCxyPTAsbT11ZSgpLHg9dWUoKSxBPXVlKCksTj11ZSgpLGo9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT09PXQmJihsPSEwKSwwfSxEPXt9Lmhhc093blByb3BlcnR5LHQ9W10scT10LnBvcCxMPXQucHVzaCxIPXQucHVzaCxPPXQuc2xpY2UsUD1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0wLHI9ZS5sZW5ndGg7bjxyO24rKylpZihlW25dPT09dClyZXR1cm4gbjtyZXR1cm4tMX0sUj1cImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsTT1cIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCIsST1cIig/OlxcXFxcXFxcW1xcXFxkYS1mQS1GXXsxLDZ9XCIrTStcIj98XFxcXFxcXFxbXlxcXFxyXFxcXG5cXFxcZl18W1xcXFx3LV18W15cXDAtXFxcXHg3Zl0pK1wiLFc9XCJcXFxcW1wiK00rXCIqKFwiK0krXCIpKD86XCIrTStcIiooWypeJHwhfl0/PSlcIitNK1wiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIrSStcIikpfClcIitNK1wiKlxcXFxdXCIsRj1cIjooXCIrSStcIikoPzpcXFxcKCgoJygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwiKXwoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIrVytcIikqKXwuKilcXFxcKXwpXCIsJD1uZXcgUmVnRXhwKE0rXCIrXCIsXCJnXCIpLEI9bmV3IFJlZ0V4cChcIl5cIitNK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitNK1wiKyRcIixcImdcIiksXz1uZXcgUmVnRXhwKFwiXlwiK00rXCIqLFwiK00rXCIqXCIpLHo9bmV3IFJlZ0V4cChcIl5cIitNK1wiKihbPit+XXxcIitNK1wiKVwiK00rXCIqXCIpLFU9bmV3IFJlZ0V4cChNK1wifD5cIiksWD1uZXcgUmVnRXhwKEYpLFY9bmV3IFJlZ0V4cChcIl5cIitJK1wiJFwiKSxHPXtJRDpuZXcgUmVnRXhwKFwiXiMoXCIrSStcIilcIiksQ0xBU1M6bmV3IFJlZ0V4cChcIl5cXFxcLihcIitJK1wiKVwiKSxUQUc6bmV3IFJlZ0V4cChcIl4oXCIrSStcInxbKl0pXCIpLEFUVFI6bmV3IFJlZ0V4cChcIl5cIitXKSxQU0VVRE86bmV3IFJlZ0V4cChcIl5cIitGKSxDSElMRDpuZXcgUmVnRXhwKFwiXjoob25seXxmaXJzdHxsYXN0fG50aHxudGgtbGFzdCktKGNoaWxkfG9mLXR5cGUpKD86XFxcXChcIitNK1wiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIrTStcIiooPzooWystXXwpXCIrTStcIiooXFxcXGQrKXwpKVwiK00rXCIqXFxcXCl8KVwiLFwiaVwiKSxib29sOm5ldyBSZWdFeHAoXCJeKD86XCIrUitcIikkXCIsXCJpXCIpLG5lZWRzQ29udGV4dDpuZXcgUmVnRXhwKFwiXlwiK00rXCIqWz4rfl18OihldmVufG9kZHxlcXxndHxsdHxudGh8Zmlyc3R8bGFzdCkoPzpcXFxcKFwiK00rXCIqKCg/Oi1cXFxcZCk/XFxcXGQqKVwiK00rXCIqXFxcXCl8KSg/PVteLV18JClcIixcImlcIil9LFk9L0hUTUwkL2ksUT0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLEo9L15oXFxkJC9pLEs9L15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LyxaPS9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLGVlPS9bK35dLyx0ZT1uZXcgUmVnRXhwKFwiXFxcXFxcXFxbXFxcXGRhLWZBLUZdezEsNn1cIitNK1wiP3xcXFxcXFxcXChbXlxcXFxyXFxcXG5cXFxcZl0pXCIsXCJnXCIpLG5lPWZ1bmN0aW9uKGUsdCl7dmFyIG49XCIweFwiK2Uuc2xpY2UoMSktNjU1MzY7cmV0dXJuIHR8fChuPDA/U3RyaW5nLmZyb21DaGFyQ29kZShuKzY1NTM2KTpTdHJpbmcuZnJvbUNoYXJDb2RlKG4+PjEwfDU1Mjk2LDEwMjMmbnw1NjMyMCkpfSxyZT0vKFtcXDAtXFx4MWZcXHg3Zl18Xi0/XFxkKXxeLSR8W15cXDAtXFx4MWZcXHg3Zi1cXHVGRkZGXFx3LV0vZyxpZT1mdW5jdGlvbihlLHQpe3JldHVybiB0P1wiXFwwXCI9PT1lP1wiXFx1ZmZmZFwiOmUuc2xpY2UoMCwtMSkrXCJcXFxcXCIrZS5jaGFyQ29kZUF0KGUubGVuZ3RoLTEpLnRvU3RyaW5nKDE2KStcIiBcIjpcIlxcXFxcIitlfSxvZT1mdW5jdGlvbigpe1QoKX0sYWU9YmUoZnVuY3Rpb24oZSl7cmV0dXJuITA9PT1lLmRpc2FibGVkJiZcImZpZWxkc2V0XCI9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCl9LHtkaXI6XCJwYXJlbnROb2RlXCIsbmV4dDpcImxlZ2VuZFwifSk7dHJ5e0guYXBwbHkodD1PLmNhbGwocC5jaGlsZE5vZGVzKSxwLmNoaWxkTm9kZXMpLHRbcC5jaGlsZE5vZGVzLmxlbmd0aF0ubm9kZVR5cGV9Y2F0Y2goZSl7SD17YXBwbHk6dC5sZW5ndGg/ZnVuY3Rpb24oZSx0KXtMLmFwcGx5KGUsTy5jYWxsKHQpKX06ZnVuY3Rpb24oZSx0KXt2YXIgbj1lLmxlbmd0aCxyPTA7d2hpbGUoZVtuKytdPXRbcisrXSk7ZS5sZW5ndGg9bi0xfX19ZnVuY3Rpb24gc2UodCxlLG4scil7dmFyIGksbyxhLHMsdSxsLGMsZj1lJiZlLm93bmVyRG9jdW1lbnQscD1lP2Uubm9kZVR5cGU6OTtpZihuPW58fFtdLFwic3RyaW5nXCIhPXR5cGVvZiB0fHwhdHx8MSE9PXAmJjkhPT1wJiYxMSE9PXApcmV0dXJuIG47aWYoIXImJihUKGUpLGU9ZXx8QyxFKSl7aWYoMTEhPT1wJiYodT1aLmV4ZWModCkpKWlmKGk9dVsxXSl7aWYoOT09PXApe2lmKCEoYT1lLmdldEVsZW1lbnRCeUlkKGkpKSlyZXR1cm4gbjtpZihhLmlkPT09aSlyZXR1cm4gbi5wdXNoKGEpLG59ZWxzZSBpZihmJiYoYT1mLmdldEVsZW1lbnRCeUlkKGkpKSYmdihlLGEpJiZhLmlkPT09aSlyZXR1cm4gbi5wdXNoKGEpLG59ZWxzZXtpZih1WzJdKXJldHVybiBILmFwcGx5KG4sZS5nZXRFbGVtZW50c0J5VGFnTmFtZSh0KSksbjtpZigoaT11WzNdKSYmZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpcmV0dXJuIEguYXBwbHkobixlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoaSkpLG59aWYoZC5xc2EmJiFOW3QrXCIgXCJdJiYoIXl8fCF5LnRlc3QodCkpJiYoMSE9PXB8fFwib2JqZWN0XCIhPT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpKXtpZihjPXQsZj1lLDE9PT1wJiYoVS50ZXN0KHQpfHx6LnRlc3QodCkpKXsoZj1lZS50ZXN0KHQpJiZ2ZShlLnBhcmVudE5vZGUpfHxlKT09PWUmJmQuc2NvcGV8fCgocz1lLmdldEF0dHJpYnV0ZShcImlkXCIpKT9zPXMucmVwbGFjZShyZSxpZSk6ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLHM9UykpLG89KGw9aCh0KSkubGVuZ3RoO3doaWxlKG8tLSlsW29dPShzP1wiI1wiK3M6XCI6c2NvcGVcIikrXCIgXCIreGUobFtvXSk7Yz1sLmpvaW4oXCIsXCIpfXRyeXtyZXR1cm4gSC5hcHBseShuLGYucXVlcnlTZWxlY3RvckFsbChjKSksbn1jYXRjaChlKXtOKHQsITApfWZpbmFsbHl7cz09PVMmJmUucmVtb3ZlQXR0cmlidXRlKFwiaWRcIil9fX1yZXR1cm4gZyh0LnJlcGxhY2UoQixcIiQxXCIpLGUsbixyKX1mdW5jdGlvbiB1ZSgpe3ZhciByPVtdO3JldHVybiBmdW5jdGlvbiBlKHQsbil7cmV0dXJuIHIucHVzaCh0K1wiIFwiKT5iLmNhY2hlTGVuZ3RoJiZkZWxldGUgZVtyLnNoaWZ0KCldLGVbdCtcIiBcIl09bn19ZnVuY3Rpb24gbGUoZSl7cmV0dXJuIGVbU109ITAsZX1mdW5jdGlvbiBjZShlKXt2YXIgdD1DLmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTt0cnl7cmV0dXJuISFlKHQpfWNhdGNoKGUpe3JldHVybiExfWZpbmFsbHl7dC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCksdD1udWxsfX1mdW5jdGlvbiBmZShlLHQpe3ZhciBuPWUuc3BsaXQoXCJ8XCIpLHI9bi5sZW5ndGg7d2hpbGUoci0tKWIuYXR0ckhhbmRsZVtuW3JdXT10fWZ1bmN0aW9uIHBlKGUsdCl7dmFyIG49dCYmZSxyPW4mJjE9PT1lLm5vZGVUeXBlJiYxPT09dC5ub2RlVHlwZSYmZS5zb3VyY2VJbmRleC10LnNvdXJjZUluZGV4O2lmKHIpcmV0dXJuIHI7aWYobil3aGlsZShuPW4ubmV4dFNpYmxpbmcpaWYobj09PXQpcmV0dXJuLTE7cmV0dXJuIGU/MTotMX1mdW5jdGlvbiBkZSh0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZlLnR5cGU9PT10fX1mdW5jdGlvbiBoZShuKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybihcImlucHV0XCI9PT10fHxcImJ1dHRvblwiPT09dCkmJmUudHlwZT09PW59fWZ1bmN0aW9uIGdlKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm5cImZvcm1cImluIGU/ZS5wYXJlbnROb2RlJiYhMT09PWUuZGlzYWJsZWQ/XCJsYWJlbFwiaW4gZT9cImxhYmVsXCJpbiBlLnBhcmVudE5vZGU/ZS5wYXJlbnROb2RlLmRpc2FibGVkPT09dDplLmRpc2FibGVkPT09dDplLmlzRGlzYWJsZWQ9PT10fHxlLmlzRGlzYWJsZWQhPT0hdCYmYWUoZSk9PT10OmUuZGlzYWJsZWQ9PT10OlwibGFiZWxcImluIGUmJmUuZGlzYWJsZWQ9PT10fX1mdW5jdGlvbiB5ZShhKXtyZXR1cm4gbGUoZnVuY3Rpb24obyl7cmV0dXJuIG89K28sbGUoZnVuY3Rpb24oZSx0KXt2YXIgbixyPWEoW10sZS5sZW5ndGgsbyksaT1yLmxlbmd0aDt3aGlsZShpLS0pZVtuPXJbaV1dJiYoZVtuXT0hKHRbbl09ZVtuXSkpfSl9KX1mdW5jdGlvbiB2ZShlKXtyZXR1cm4gZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUmJmV9Zm9yKGUgaW4gZD1zZS5zdXBwb3J0PXt9LGk9c2UuaXNYTUw9ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5uYW1lc3BhY2VVUkksbj1lJiYoZS5vd25lckRvY3VtZW50fHxlKS5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuIVkudGVzdCh0fHxuJiZuLm5vZGVOYW1lfHxcIkhUTUxcIil9LFQ9c2Uuc2V0RG9jdW1lbnQ9ZnVuY3Rpb24oZSl7dmFyIHQsbixyPWU/ZS5vd25lckRvY3VtZW50fHxlOnA7cmV0dXJuIHIhPUMmJjk9PT1yLm5vZGVUeXBlJiZyLmRvY3VtZW50RWxlbWVudCYmKGE9KEM9cikuZG9jdW1lbnRFbGVtZW50LEU9IWkoQykscCE9QyYmKG49Qy5kZWZhdWx0VmlldykmJm4udG9wIT09biYmKG4uYWRkRXZlbnRMaXN0ZW5lcj9uLmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIixvZSwhMSk6bi5hdHRhY2hFdmVudCYmbi5hdHRhY2hFdmVudChcIm9udW5sb2FkXCIsb2UpKSxkLnNjb3BlPWNlKGZ1bmN0aW9uKGUpe3JldHVybiBhLmFwcGVuZENoaWxkKGUpLmFwcGVuZENoaWxkKEMuY3JlYXRlRWxlbWVudChcImRpdlwiKSksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUucXVlcnlTZWxlY3RvckFsbCYmIWUucXVlcnlTZWxlY3RvckFsbChcIjpzY29wZSBmaWVsZHNldCBkaXZcIikubGVuZ3RofSksZC5hdHRyaWJ1dGVzPWNlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmNsYXNzTmFtZT1cImlcIiwhZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIil9KSxkLmdldEVsZW1lbnRzQnlUYWdOYW1lPWNlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmFwcGVuZENoaWxkKEMuY3JlYXRlQ29tbWVudChcIlwiKSksIWUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aH0pLGQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT1LLnRlc3QoQy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSxkLmdldEJ5SWQ9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIGEuYXBwZW5kQ2hpbGQoZSkuaWQ9UywhQy5nZXRFbGVtZW50c0J5TmFtZXx8IUMuZ2V0RWxlbWVudHNCeU5hbWUoUykubGVuZ3RofSksZC5nZXRCeUlkPyhiLmZpbHRlci5JRD1mdW5jdGlvbihlKXt2YXIgdD1lLnJlcGxhY2UodGUsbmUpO3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKT09PXR9fSxiLmZpbmQuSUQ9ZnVuY3Rpb24oZSx0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgdC5nZXRFbGVtZW50QnlJZCYmRSl7dmFyIG49dC5nZXRFbGVtZW50QnlJZChlKTtyZXR1cm4gbj9bbl06W119fSk6KGIuZmlsdGVyLklEPWZ1bmN0aW9uKGUpe3ZhciBuPWUucmVwbGFjZSh0ZSxuZSk7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEF0dHJpYnV0ZU5vZGUmJmUuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO3JldHVybiB0JiZ0LnZhbHVlPT09bn19LGIuZmluZC5JRD1mdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRCeUlkJiZFKXt2YXIgbixyLGksbz10LmdldEVsZW1lbnRCeUlkKGUpO2lmKG8pe2lmKChuPW8uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpKSYmbi52YWx1ZT09PWUpcmV0dXJuW29dO2k9dC5nZXRFbGVtZW50c0J5TmFtZShlKSxyPTA7d2hpbGUobz1pW3IrK10paWYoKG49by5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIikpJiZuLnZhbHVlPT09ZSlyZXR1cm5bb119cmV0dXJuW119fSksYi5maW5kLlRBRz1kLmdldEVsZW1lbnRzQnlUYWdOYW1lP2Z1bmN0aW9uKGUsdCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudHNCeVRhZ05hbWU/dC5nZXRFbGVtZW50c0J5VGFnTmFtZShlKTpkLnFzYT90LnF1ZXJ5U2VsZWN0b3JBbGwoZSk6dm9pZCAwfTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9W10saT0wLG89dC5nZXRFbGVtZW50c0J5VGFnTmFtZShlKTtpZihcIipcIj09PWUpe3doaWxlKG49b1tpKytdKTE9PT1uLm5vZGVUeXBlJiZyLnB1c2gobik7cmV0dXJuIHJ9cmV0dXJuIG99LGIuZmluZC5DTEFTUz1kLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmRSlyZXR1cm4gdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGUpfSxzPVtdLHk9W10sKGQucXNhPUsudGVzdChDLnF1ZXJ5U2VsZWN0b3JBbGwpKSYmKGNlKGZ1bmN0aW9uKGUpe3ZhciB0O2EuYXBwZW5kQ2hpbGQoZSkuaW5uZXJIVE1MPVwiPGEgaWQ9J1wiK1MrXCInPjwvYT48c2VsZWN0IGlkPSdcIitTK1wiLVxcclxcXFwnIG1zYWxsb3djYXB0dXJlPScnPjxvcHRpb24gc2VsZWN0ZWQ9Jyc+PC9vcHRpb24+PC9zZWxlY3Q+XCIsZS5xdWVyeVNlbGVjdG9yQWxsKFwiW21zYWxsb3djYXB0dXJlXj0nJ11cIikubGVuZ3RoJiZ5LnB1c2goXCJbKl4kXT1cIitNK1wiKig/OicnfFxcXCJcXFwiKVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbc2VsZWN0ZWRdXCIpLmxlbmd0aHx8eS5wdXNoKFwiXFxcXFtcIitNK1wiKig/OnZhbHVlfFwiK1IrXCIpXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIltpZH49XCIrUytcIi1dXCIpLmxlbmd0aHx8eS5wdXNoKFwifj1cIiksKHQ9Qy5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIlwiKSxlLmFwcGVuZENoaWxkKHQpLGUucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPScnXVwiKS5sZW5ndGh8fHkucHVzaChcIlxcXFxbXCIrTStcIipuYW1lXCIrTStcIio9XCIrTStcIiooPzonJ3xcXFwiXFxcIilcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmNoZWNrZWRcIikubGVuZ3RofHx5LnB1c2goXCI6Y2hlY2tlZFwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhI1wiK1MrXCIrKlwiKS5sZW5ndGh8fHkucHVzaChcIi4jLitbK35dXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIlxcXFxcXGZcIikseS5wdXNoKFwiW1xcXFxyXFxcXG5cXFxcZl1cIil9KSxjZShmdW5jdGlvbihlKXtlLmlubmVySFRNTD1cIjxhIGhyZWY9JycgZGlzYWJsZWQ9J2Rpc2FibGVkJz48L2E+PHNlbGVjdCBkaXNhYmxlZD0nZGlzYWJsZWQnPjxvcHRpb24vPjwvc2VsZWN0PlwiO3ZhciB0PUMuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO3Quc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiaGlkZGVuXCIpLGUuYXBwZW5kQ2hpbGQodCkuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiRFwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGgmJnkucHVzaChcIm5hbWVcIitNK1wiKlsqXiR8IX5dPz1cIiksMiE9PWUucXVlcnlTZWxlY3RvckFsbChcIjplbmFibGVkXCIpLmxlbmd0aCYmeS5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxhLmFwcGVuZENoaWxkKGUpLmRpc2FibGVkPSEwLDIhPT1lLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZGlzYWJsZWRcIikubGVuZ3RoJiZ5LnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIikseS5wdXNoKFwiLC4qOlwiKX0pKSwoZC5tYXRjaGVzU2VsZWN0b3I9Sy50ZXN0KGM9YS5tYXRjaGVzfHxhLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8YS5tb3pNYXRjaGVzU2VsZWN0b3J8fGEub01hdGNoZXNTZWxlY3Rvcnx8YS5tc01hdGNoZXNTZWxlY3RvcikpJiZjZShmdW5jdGlvbihlKXtkLmRpc2Nvbm5lY3RlZE1hdGNoPWMuY2FsbChlLFwiKlwiKSxjLmNhbGwoZSxcIltzIT0nJ106eFwiKSxzLnB1c2goXCIhPVwiLEYpfSkseT15Lmxlbmd0aCYmbmV3IFJlZ0V4cCh5LmpvaW4oXCJ8XCIpKSxzPXMubGVuZ3RoJiZuZXcgUmVnRXhwKHMuam9pbihcInxcIikpLHQ9Sy50ZXN0KGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24pLHY9dHx8Sy50ZXN0KGEuY29udGFpbnMpP2Z1bmN0aW9uKGUsdCl7dmFyIG49OT09PWUubm9kZVR5cGU/ZS5kb2N1bWVudEVsZW1lbnQ6ZSxyPXQmJnQucGFyZW50Tm9kZTtyZXR1cm4gZT09PXJ8fCEoIXJ8fDEhPT1yLm5vZGVUeXBlfHwhKG4uY29udGFpbnM/bi5jb250YWlucyhyKTplLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiYxNiZlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHIpKSl9OmZ1bmN0aW9uKGUsdCl7aWYodCl3aGlsZSh0PXQucGFyZW50Tm9kZSlpZih0PT09ZSlyZXR1cm4hMDtyZXR1cm4hMX0saj10P2Z1bmN0aW9uKGUsdCl7aWYoZT09PXQpcmV0dXJuIGw9ITAsMDt2YXIgbj0hZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbi0hdC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtyZXR1cm4gbnx8KDEmKG49KGUub3duZXJEb2N1bWVudHx8ZSk9PSh0Lm93bmVyRG9jdW1lbnR8fHQpP2UuY29tcGFyZURvY3VtZW50UG9zaXRpb24odCk6MSl8fCFkLnNvcnREZXRhY2hlZCYmdC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlKT09PW4/ZT09Q3x8ZS5vd25lckRvY3VtZW50PT1wJiZ2KHAsZSk/LTE6dD09Q3x8dC5vd25lckRvY3VtZW50PT1wJiZ2KHAsdCk/MTp1P1AodSxlKS1QKHUsdCk6MDo0Jm4/LTE6MSl9OmZ1bmN0aW9uKGUsdCl7aWYoZT09PXQpcmV0dXJuIGw9ITAsMDt2YXIgbixyPTAsaT1lLnBhcmVudE5vZGUsbz10LnBhcmVudE5vZGUsYT1bZV0scz1bdF07aWYoIWl8fCFvKXJldHVybiBlPT1DPy0xOnQ9PUM/MTppPy0xOm8/MTp1P1AodSxlKS1QKHUsdCk6MDtpZihpPT09bylyZXR1cm4gcGUoZSx0KTtuPWU7d2hpbGUobj1uLnBhcmVudE5vZGUpYS51bnNoaWZ0KG4pO249dDt3aGlsZShuPW4ucGFyZW50Tm9kZSlzLnVuc2hpZnQobik7d2hpbGUoYVtyXT09PXNbcl0pcisrO3JldHVybiByP3BlKGFbcl0sc1tyXSk6YVtyXT09cD8tMTpzW3JdPT1wPzE6MH0pLEN9LHNlLm1hdGNoZXM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gc2UoZSxudWxsLG51bGwsdCl9LHNlLm1hdGNoZXNTZWxlY3Rvcj1mdW5jdGlvbihlLHQpe2lmKFQoZSksZC5tYXRjaGVzU2VsZWN0b3ImJkUmJiFOW3QrXCIgXCJdJiYoIXN8fCFzLnRlc3QodCkpJiYoIXl8fCF5LnRlc3QodCkpKXRyeXt2YXIgbj1jLmNhbGwoZSx0KTtpZihufHxkLmRpc2Nvbm5lY3RlZE1hdGNofHxlLmRvY3VtZW50JiYxMSE9PWUuZG9jdW1lbnQubm9kZVR5cGUpcmV0dXJuIG59Y2F0Y2goZSl7Tih0LCEwKX1yZXR1cm4gMDxzZSh0LEMsbnVsbCxbZV0pLmxlbmd0aH0sc2UuY29udGFpbnM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4oZS5vd25lckRvY3VtZW50fHxlKSE9QyYmVChlKSx2KGUsdCl9LHNlLmF0dHI9ZnVuY3Rpb24oZSx0KXsoZS5vd25lckRvY3VtZW50fHxlKSE9QyYmVChlKTt2YXIgbj1iLmF0dHJIYW5kbGVbdC50b0xvd2VyQ2FzZSgpXSxyPW4mJkQuY2FsbChiLmF0dHJIYW5kbGUsdC50b0xvd2VyQ2FzZSgpKT9uKGUsdCwhRSk6dm9pZCAwO3JldHVybiB2b2lkIDAhPT1yP3I6ZC5hdHRyaWJ1dGVzfHwhRT9lLmdldEF0dHJpYnV0ZSh0KToocj1lLmdldEF0dHJpYnV0ZU5vZGUodCkpJiZyLnNwZWNpZmllZD9yLnZhbHVlOm51bGx9LHNlLmVzY2FwZT1mdW5jdGlvbihlKXtyZXR1cm4oZStcIlwiKS5yZXBsYWNlKHJlLGllKX0sc2UuZXJyb3I9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIrZSl9LHNlLnVuaXF1ZVNvcnQ9ZnVuY3Rpb24oZSl7dmFyIHQsbj1bXSxyPTAsaT0wO2lmKGw9IWQuZGV0ZWN0RHVwbGljYXRlcyx1PSFkLnNvcnRTdGFibGUmJmUuc2xpY2UoMCksZS5zb3J0KGopLGwpe3doaWxlKHQ9ZVtpKytdKXQ9PT1lW2ldJiYocj1uLnB1c2goaSkpO3doaWxlKHItLSllLnNwbGljZShuW3JdLDEpfXJldHVybiB1PW51bGwsZX0sbz1zZS5nZXRUZXh0PWZ1bmN0aW9uKGUpe3ZhciB0LG49XCJcIixyPTAsaT1lLm5vZGVUeXBlO2lmKGkpe2lmKDE9PT1pfHw5PT09aXx8MTE9PT1pKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZS50ZXh0Q29udGVudClyZXR1cm4gZS50ZXh0Q29udGVudDtmb3IoZT1lLmZpcnN0Q2hpbGQ7ZTtlPWUubmV4dFNpYmxpbmcpbis9byhlKX1lbHNlIGlmKDM9PT1pfHw0PT09aSlyZXR1cm4gZS5ub2RlVmFsdWV9ZWxzZSB3aGlsZSh0PWVbcisrXSluKz1vKHQpO3JldHVybiBufSwoYj1zZS5zZWxlY3RvcnM9e2NhY2hlTGVuZ3RoOjUwLGNyZWF0ZVBzZXVkbzpsZSxtYXRjaDpHLGF0dHJIYW5kbGU6e30sZmluZDp7fSxyZWxhdGl2ZTp7XCI+XCI6e2RpcjpcInBhcmVudE5vZGVcIixmaXJzdDohMH0sXCIgXCI6e2RpcjpcInBhcmVudE5vZGVcIn0sXCIrXCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wiLGZpcnN0OiEwfSxcIn5cIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCJ9fSxwcmVGaWx0ZXI6e0FUVFI6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbMV09ZVsxXS5yZXBsYWNlKHRlLG5lKSxlWzNdPShlWzNdfHxlWzRdfHxlWzVdfHxcIlwiKS5yZXBsYWNlKHRlLG5lKSxcIn49XCI9PT1lWzJdJiYoZVszXT1cIiBcIitlWzNdK1wiIFwiKSxlLnNsaWNlKDAsNCl9LENISUxEOmZ1bmN0aW9uKGUpe3JldHVybiBlWzFdPWVbMV0udG9Mb3dlckNhc2UoKSxcIm50aFwiPT09ZVsxXS5zbGljZSgwLDMpPyhlWzNdfHxzZS5lcnJvcihlWzBdKSxlWzRdPSsoZVs0XT9lWzVdKyhlWzZdfHwxKToyKihcImV2ZW5cIj09PWVbM118fFwib2RkXCI9PT1lWzNdKSksZVs1XT0rKGVbN10rZVs4XXx8XCJvZGRcIj09PWVbM10pKTplWzNdJiZzZS5lcnJvcihlWzBdKSxlfSxQU0VVRE86ZnVuY3Rpb24oZSl7dmFyIHQsbj0hZVs2XSYmZVsyXTtyZXR1cm4gRy5DSElMRC50ZXN0KGVbMF0pP251bGw6KGVbM10/ZVsyXT1lWzRdfHxlWzVdfHxcIlwiOm4mJlgudGVzdChuKSYmKHQ9aChuLCEwKSkmJih0PW4uaW5kZXhPZihcIilcIixuLmxlbmd0aC10KS1uLmxlbmd0aCkmJihlWzBdPWVbMF0uc2xpY2UoMCx0KSxlWzJdPW4uc2xpY2UoMCx0KSksZS5zbGljZSgwLDMpKX19LGZpbHRlcjp7VEFHOmZ1bmN0aW9uKGUpe3ZhciB0PWUucmVwbGFjZSh0ZSxuZSkudG9Mb3dlckNhc2UoKTtyZXR1cm5cIipcIj09PWU/ZnVuY3Rpb24oKXtyZXR1cm4hMH06ZnVuY3Rpb24oZSl7cmV0dXJuIGUubm9kZU5hbWUmJmUubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXR9fSxDTEFTUzpmdW5jdGlvbihlKXt2YXIgdD1tW2UrXCIgXCJdO3JldHVybiB0fHwodD1uZXcgUmVnRXhwKFwiKF58XCIrTStcIilcIitlK1wiKFwiK00rXCJ8JClcIikpJiZtKGUsZnVuY3Rpb24oZSl7cmV0dXJuIHQudGVzdChcInN0cmluZ1wiPT10eXBlb2YgZS5jbGFzc05hbWUmJmUuY2xhc3NOYW1lfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRBdHRyaWJ1dGUmJmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpfSl9LEFUVFI6ZnVuY3Rpb24obixyLGkpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD1zZS5hdHRyKGUsbik7cmV0dXJuIG51bGw9PXQ/XCIhPVwiPT09cjohcnx8KHQrPVwiXCIsXCI9XCI9PT1yP3Q9PT1pOlwiIT1cIj09PXI/dCE9PWk6XCJePVwiPT09cj9pJiYwPT09dC5pbmRleE9mKGkpOlwiKj1cIj09PXI/aSYmLTE8dC5pbmRleE9mKGkpOlwiJD1cIj09PXI/aSYmdC5zbGljZSgtaS5sZW5ndGgpPT09aTpcIn49XCI9PT1yPy0xPChcIiBcIit0LnJlcGxhY2UoJCxcIiBcIikrXCIgXCIpLmluZGV4T2YoaSk6XCJ8PVwiPT09ciYmKHQ9PT1pfHx0LnNsaWNlKDAsaS5sZW5ndGgrMSk9PT1pK1wiLVwiKSl9fSxDSElMRDpmdW5jdGlvbihoLGUsdCxnLHkpe3ZhciB2PVwibnRoXCIhPT1oLnNsaWNlKDAsMyksbT1cImxhc3RcIiE9PWguc2xpY2UoLTQpLHg9XCJvZi10eXBlXCI9PT1lO3JldHVybiAxPT09ZyYmMD09PXk/ZnVuY3Rpb24oZSl7cmV0dXJuISFlLnBhcmVudE5vZGV9OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbD12IT09bT9cIm5leHRTaWJsaW5nXCI6XCJwcmV2aW91c1NpYmxpbmdcIixjPWUucGFyZW50Tm9kZSxmPXgmJmUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxwPSFuJiYheCxkPSExO2lmKGMpe2lmKHYpe3doaWxlKGwpe2E9ZTt3aGlsZShhPWFbbF0paWYoeD9hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1mOjE9PT1hLm5vZGVUeXBlKXJldHVybiExO3U9bD1cIm9ubHlcIj09PWgmJiF1JiZcIm5leHRTaWJsaW5nXCJ9cmV0dXJuITB9aWYodT1bbT9jLmZpcnN0Q2hpbGQ6Yy5sYXN0Q2hpbGRdLG0mJnApe2Q9KHM9KHI9KGk9KG89KGE9YylbU118fChhW1NdPXt9KSlbYS51bmlxdWVJRF18fChvW2EudW5pcXVlSURdPXt9KSlbaF18fFtdKVswXT09PWsmJnJbMV0pJiZyWzJdLGE9cyYmYy5jaGlsZE5vZGVzW3NdO3doaWxlKGE9KytzJiZhJiZhW2xdfHwoZD1zPTApfHx1LnBvcCgpKWlmKDE9PT1hLm5vZGVUeXBlJiYrK2QmJmE9PT1lKXtpW2hdPVtrLHMsZF07YnJlYWt9fWVsc2UgaWYocCYmKGQ9cz0ocj0oaT0obz0oYT1lKVtTXXx8KGFbU109e30pKVthLnVuaXF1ZUlEXXx8KG9bYS51bmlxdWVJRF09e30pKVtoXXx8W10pWzBdPT09ayYmclsxXSksITE9PT1kKXdoaWxlKGE9KytzJiZhJiZhW2xdfHwoZD1zPTApfHx1LnBvcCgpKWlmKCh4P2Eubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWY6MT09PWEubm9kZVR5cGUpJiYrK2QmJihwJiYoKGk9KG89YVtTXXx8KGFbU109e30pKVthLnVuaXF1ZUlEXXx8KG9bYS51bmlxdWVJRF09e30pKVtoXT1bayxkXSksYT09PWUpKWJyZWFrO3JldHVybihkLT15KT09PWd8fGQlZz09MCYmMDw9ZC9nfX19LFBTRVVETzpmdW5jdGlvbihlLG8pe3ZhciB0LGE9Yi5wc2V1ZG9zW2VdfHxiLnNldEZpbHRlcnNbZS50b0xvd2VyQ2FzZSgpXXx8c2UuZXJyb3IoXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiK2UpO3JldHVybiBhW1NdP2Eobyk6MTxhLmxlbmd0aD8odD1bZSxlLFwiXCIsb10sYi5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KGUudG9Mb3dlckNhc2UoKSk/bGUoZnVuY3Rpb24oZSx0KXt2YXIgbixyPWEoZSxvKSxpPXIubGVuZ3RoO3doaWxlKGktLSllW249UChlLHJbaV0pXT0hKHRbbl09cltpXSl9KTpmdW5jdGlvbihlKXtyZXR1cm4gYShlLDAsdCl9KTphfX0scHNldWRvczp7bm90OmxlKGZ1bmN0aW9uKGUpe3ZhciByPVtdLGk9W10scz1mKGUucmVwbGFjZShCLFwiJDFcIikpO3JldHVybiBzW1NdP2xlKGZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG89cyhlLG51bGwscixbXSksYT1lLmxlbmd0aDt3aGlsZShhLS0pKGk9b1thXSkmJihlW2FdPSEodFthXT1pKSl9KTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIHJbMF09ZSxzKHIsbnVsbCxuLGkpLHJbMF09bnVsbCwhaS5wb3AoKX19KSxoYXM6bGUoZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiAwPHNlKHQsZSkubGVuZ3RofX0pLGNvbnRhaW5zOmxlKGZ1bmN0aW9uKHQpe3JldHVybiB0PXQucmVwbGFjZSh0ZSxuZSksZnVuY3Rpb24oZSl7cmV0dXJuLTE8KGUudGV4dENvbnRlbnR8fG8oZSkpLmluZGV4T2YodCl9fSksbGFuZzpsZShmdW5jdGlvbihuKXtyZXR1cm4gVi50ZXN0KG58fFwiXCIpfHxzZS5lcnJvcihcInVuc3VwcG9ydGVkIGxhbmc6IFwiK24pLG49bi5yZXBsYWNlKHRlLG5lKS50b0xvd2VyQ2FzZSgpLGZ1bmN0aW9uKGUpe3ZhciB0O2Rve2lmKHQ9RT9lLmxhbmc6ZS5nZXRBdHRyaWJ1dGUoXCJ4bWw6bGFuZ1wiKXx8ZS5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKXJldHVybih0PXQudG9Mb3dlckNhc2UoKSk9PT1ufHwwPT09dC5pbmRleE9mKG4rXCItXCIpfXdoaWxlKChlPWUucGFyZW50Tm9kZSkmJjE9PT1lLm5vZGVUeXBlKTtyZXR1cm4hMX19KSx0YXJnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9bi5sb2NhdGlvbiYmbi5sb2NhdGlvbi5oYXNoO3JldHVybiB0JiZ0LnNsaWNlKDEpPT09ZS5pZH0scm9vdDpmdW5jdGlvbihlKXtyZXR1cm4gZT09PWF9LGZvY3VzOmZ1bmN0aW9uKGUpe3JldHVybiBlPT09Qy5hY3RpdmVFbGVtZW50JiYoIUMuaGFzRm9jdXN8fEMuaGFzRm9jdXMoKSkmJiEhKGUudHlwZXx8ZS5ocmVmfHx+ZS50YWJJbmRleCl9LGVuYWJsZWQ6Z2UoITEpLGRpc2FibGVkOmdlKCEwKSxjaGVja2VkOmZ1bmN0aW9uKGUpe3ZhciB0PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT10JiYhIWUuY2hlY2tlZHx8XCJvcHRpb25cIj09PXQmJiEhZS5zZWxlY3RlZH0sc2VsZWN0ZWQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucGFyZW50Tm9kZSYmZS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsITA9PT1lLnNlbGVjdGVkfSxlbXB0eTpmdW5jdGlvbihlKXtmb3IoZT1lLmZpcnN0Q2hpbGQ7ZTtlPWUubmV4dFNpYmxpbmcpaWYoZS5ub2RlVHlwZTw2KXJldHVybiExO3JldHVybiEwfSxwYXJlbnQ6ZnVuY3Rpb24oZSl7cmV0dXJuIWIucHNldWRvcy5lbXB0eShlKX0saGVhZGVyOmZ1bmN0aW9uKGUpe3JldHVybiBKLnRlc3QoZS5ub2RlTmFtZSl9LGlucHV0OmZ1bmN0aW9uKGUpe3JldHVybiBRLnRlc3QoZS5ub2RlTmFtZSl9LGJ1dHRvbjpmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09dCYmXCJidXR0b25cIj09PWUudHlwZXx8XCJidXR0b25cIj09PXR9LHRleHQ6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZcInRleHRcIj09PWUudHlwZSYmKG51bGw9PSh0PWUuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSl8fFwidGV4dFwiPT09dC50b0xvd2VyQ2FzZSgpKX0sZmlyc3Q6eWUoZnVuY3Rpb24oKXtyZXR1cm5bMF19KSxsYXN0OnllKGZ1bmN0aW9uKGUsdCl7cmV0dXJuW3QtMV19KSxlcTp5ZShmdW5jdGlvbihlLHQsbil7cmV0dXJuW248MD9uK3Q6bl19KSxldmVuOnllKGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPTA7bjx0O24rPTIpZS5wdXNoKG4pO3JldHVybiBlfSksb2RkOnllKGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPTE7bjx0O24rPTIpZS5wdXNoKG4pO3JldHVybiBlfSksbHQ6eWUoZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj1uPDA/bit0OnQ8bj90Om47MDw9LS1yOyllLnB1c2gocik7cmV0dXJuIGV9KSxndDp5ZShmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPW48MD9uK3Q6bjsrK3I8dDspZS5wdXNoKHIpO3JldHVybiBlfSl9fSkucHNldWRvcy5udGg9Yi5wc2V1ZG9zLmVxLHtyYWRpbzohMCxjaGVja2JveDohMCxmaWxlOiEwLHBhc3N3b3JkOiEwLGltYWdlOiEwfSliLnBzZXVkb3NbZV09ZGUoZSk7Zm9yKGUgaW57c3VibWl0OiEwLHJlc2V0OiEwfSliLnBzZXVkb3NbZV09aGUoZSk7ZnVuY3Rpb24gbWUoKXt9ZnVuY3Rpb24geGUoZSl7Zm9yKHZhciB0PTAsbj1lLmxlbmd0aCxyPVwiXCI7dDxuO3QrKylyKz1lW3RdLnZhbHVlO3JldHVybiByfWZ1bmN0aW9uIGJlKHMsZSx0KXt2YXIgdT1lLmRpcixsPWUubmV4dCxjPWx8fHUsZj10JiZcInBhcmVudE5vZGVcIj09PWMscD1yKys7cmV0dXJuIGUuZmlyc3Q/ZnVuY3Rpb24oZSx0LG4pe3doaWxlKGU9ZVt1XSlpZigxPT09ZS5ub2RlVHlwZXx8ZilyZXR1cm4gcyhlLHQsbik7cmV0dXJuITF9OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYT1bayxwXTtpZihuKXt3aGlsZShlPWVbdV0paWYoKDE9PT1lLm5vZGVUeXBlfHxmKSYmcyhlLHQsbikpcmV0dXJuITB9ZWxzZSB3aGlsZShlPWVbdV0paWYoMT09PWUubm9kZVR5cGV8fGYpaWYoaT0obz1lW1NdfHwoZVtTXT17fSkpW2UudW5pcXVlSURdfHwob1tlLnVuaXF1ZUlEXT17fSksbCYmbD09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSllPWVbdV18fGU7ZWxzZXtpZigocj1pW2NdKSYmclswXT09PWsmJnJbMV09PT1wKXJldHVybiBhWzJdPXJbMl07aWYoKGlbY109YSlbMl09cyhlLHQsbikpcmV0dXJuITB9cmV0dXJuITF9fWZ1bmN0aW9uIHdlKGkpe3JldHVybiAxPGkubGVuZ3RoP2Z1bmN0aW9uKGUsdCxuKXt2YXIgcj1pLmxlbmd0aDt3aGlsZShyLS0paWYoIWlbcl0oZSx0LG4pKXJldHVybiExO3JldHVybiEwfTppWzBdfWZ1bmN0aW9uIFRlKGUsdCxuLHIsaSl7Zm9yKHZhciBvLGE9W10scz0wLHU9ZS5sZW5ndGgsbD1udWxsIT10O3M8dTtzKyspKG89ZVtzXSkmJihuJiYhbihvLHIsaSl8fChhLnB1c2gobyksbCYmdC5wdXNoKHMpKSk7cmV0dXJuIGF9ZnVuY3Rpb24gQ2UoZCxoLGcseSx2LGUpe3JldHVybiB5JiYheVtTXSYmKHk9Q2UoeSkpLHYmJiF2W1NdJiYodj1DZSh2LGUpKSxsZShmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscz1bXSx1PVtdLGw9dC5sZW5ndGgsYz1lfHxmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPTAsaT10Lmxlbmd0aDtyPGk7cisrKXNlKGUsdFtyXSxuKTtyZXR1cm4gbn0oaHx8XCIqXCIsbi5ub2RlVHlwZT9bbl06bixbXSksZj0hZHx8IWUmJmg/YzpUZShjLHMsZCxuLHIpLHA9Zz92fHwoZT9kOmx8fHkpP1tdOnQ6ZjtpZihnJiZnKGYscCxuLHIpLHkpe2k9VGUocCx1KSx5KGksW10sbixyKSxvPWkubGVuZ3RoO3doaWxlKG8tLSkoYT1pW29dKSYmKHBbdVtvXV09IShmW3Vbb11dPWEpKX1pZihlKXtpZih2fHxkKXtpZih2KXtpPVtdLG89cC5sZW5ndGg7d2hpbGUoby0tKShhPXBbb10pJiZpLnB1c2goZltvXT1hKTt2KG51bGwscD1bXSxpLHIpfW89cC5sZW5ndGg7d2hpbGUoby0tKShhPXBbb10pJiYtMTwoaT12P1AoZSxhKTpzW29dKSYmKGVbaV09ISh0W2ldPWEpKX19ZWxzZSBwPVRlKHA9PT10P3Auc3BsaWNlKGwscC5sZW5ndGgpOnApLHY/dihudWxsLHQscCxyKTpILmFwcGx5KHQscCl9KX1mdW5jdGlvbiBFZShlKXtmb3IodmFyIGksdCxuLHI9ZS5sZW5ndGgsbz1iLnJlbGF0aXZlW2VbMF0udHlwZV0sYT1vfHxiLnJlbGF0aXZlW1wiIFwiXSxzPW8/MTowLHU9YmUoZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1pfSxhLCEwKSxsPWJlKGZ1bmN0aW9uKGUpe3JldHVybi0xPFAoaSxlKX0sYSwhMCksYz1bZnVuY3Rpb24oZSx0LG4pe3ZhciByPSFvJiYobnx8dCE9PXcpfHwoKGk9dCkubm9kZVR5cGU/dShlLHQsbik6bChlLHQsbikpO3JldHVybiBpPW51bGwscn1dO3M8cjtzKyspaWYodD1iLnJlbGF0aXZlW2Vbc10udHlwZV0pYz1bYmUod2UoYyksdCldO2Vsc2V7aWYoKHQ9Yi5maWx0ZXJbZVtzXS50eXBlXS5hcHBseShudWxsLGVbc10ubWF0Y2hlcykpW1NdKXtmb3Iobj0rK3M7bjxyO24rKylpZihiLnJlbGF0aXZlW2Vbbl0udHlwZV0pYnJlYWs7cmV0dXJuIENlKDE8cyYmd2UoYyksMTxzJiZ4ZShlLnNsaWNlKDAscy0xKS5jb25jYXQoe3ZhbHVlOlwiIFwiPT09ZVtzLTJdLnR5cGU/XCIqXCI6XCJcIn0pKS5yZXBsYWNlKEIsXCIkMVwiKSx0LHM8biYmRWUoZS5zbGljZShzLG4pKSxuPHImJkVlKGU9ZS5zbGljZShuKSksbjxyJiZ4ZShlKSl9Yy5wdXNoKHQpfXJldHVybiB3ZShjKX1yZXR1cm4gbWUucHJvdG90eXBlPWIuZmlsdGVycz1iLnBzZXVkb3MsYi5zZXRGaWx0ZXJzPW5ldyBtZSxoPXNlLnRva2VuaXplPWZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLG8sYSxzLHUsbD14W2UrXCIgXCJdO2lmKGwpcmV0dXJuIHQ/MDpsLnNsaWNlKDApO2E9ZSxzPVtdLHU9Yi5wcmVGaWx0ZXI7d2hpbGUoYSl7Zm9yKG8gaW4gbiYmIShyPV8uZXhlYyhhKSl8fChyJiYoYT1hLnNsaWNlKHJbMF0ubGVuZ3RoKXx8YSkscy5wdXNoKGk9W10pKSxuPSExLChyPXouZXhlYyhhKSkmJihuPXIuc2hpZnQoKSxpLnB1c2goe3ZhbHVlOm4sdHlwZTpyWzBdLnJlcGxhY2UoQixcIiBcIil9KSxhPWEuc2xpY2Uobi5sZW5ndGgpKSxiLmZpbHRlcikhKHI9R1tvXS5leGVjKGEpKXx8dVtvXSYmIShyPXVbb10ocikpfHwobj1yLnNoaWZ0KCksaS5wdXNoKHt2YWx1ZTpuLHR5cGU6byxtYXRjaGVzOnJ9KSxhPWEuc2xpY2Uobi5sZW5ndGgpKTtpZighbilicmVha31yZXR1cm4gdD9hLmxlbmd0aDphP3NlLmVycm9yKGUpOngoZSxzKS5zbGljZSgwKX0sZj1zZS5jb21waWxlPWZ1bmN0aW9uKGUsdCl7dmFyIG4seSx2LG0seCxyLGk9W10sbz1bXSxhPUFbZStcIiBcIl07aWYoIWEpe3R8fCh0PWgoZSkpLG49dC5sZW5ndGg7d2hpbGUobi0tKShhPUVlKHRbbl0pKVtTXT9pLnB1c2goYSk6by5wdXNoKGEpOyhhPUEoZSwoeT1vLG09MDwodj1pKS5sZW5ndGgseD0wPHkubGVuZ3RoLHI9ZnVuY3Rpb24oZSx0LG4scixpKXt2YXIgbyxhLHMsdT0wLGw9XCIwXCIsYz1lJiZbXSxmPVtdLHA9dyxkPWV8fHgmJmIuZmluZC5UQUcoXCIqXCIsaSksaD1rKz1udWxsPT1wPzE6TWF0aC5yYW5kb20oKXx8LjEsZz1kLmxlbmd0aDtmb3IoaSYmKHc9dD09Q3x8dHx8aSk7bCE9PWcmJm51bGwhPShvPWRbbF0pO2wrKyl7aWYoeCYmbyl7YT0wLHR8fG8ub3duZXJEb2N1bWVudD09Q3x8KFQobyksbj0hRSk7d2hpbGUocz15W2ErK10paWYocyhvLHR8fEMsbikpe3IucHVzaChvKTticmVha31pJiYoaz1oKX1tJiYoKG89IXMmJm8pJiZ1LS0sZSYmYy5wdXNoKG8pKX1pZih1Kz1sLG0mJmwhPT11KXthPTA7d2hpbGUocz12W2ErK10pcyhjLGYsdCxuKTtpZihlKXtpZigwPHUpd2hpbGUobC0tKWNbbF18fGZbbF18fChmW2xdPXEuY2FsbChyKSk7Zj1UZShmKX1ILmFwcGx5KHIsZiksaSYmIWUmJjA8Zi5sZW5ndGgmJjE8dSt2Lmxlbmd0aCYmc2UudW5pcXVlU29ydChyKX1yZXR1cm4gaSYmKGs9aCx3PXApLGN9LG0/bGUocik6cikpKS5zZWxlY3Rvcj1lfXJldHVybiBhfSxnPXNlLnNlbGVjdD1mdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscyx1LGw9XCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSxjPSFyJiZoKGU9bC5zZWxlY3Rvcnx8ZSk7aWYobj1ufHxbXSwxPT09Yy5sZW5ndGgpe2lmKDI8KG89Y1swXT1jWzBdLnNsaWNlKDApKS5sZW5ndGgmJlwiSURcIj09PShhPW9bMF0pLnR5cGUmJjk9PT10Lm5vZGVUeXBlJiZFJiZiLnJlbGF0aXZlW29bMV0udHlwZV0pe2lmKCEodD0oYi5maW5kLklEKGEubWF0Y2hlc1swXS5yZXBsYWNlKHRlLG5lKSx0KXx8W10pWzBdKSlyZXR1cm4gbjtsJiYodD10LnBhcmVudE5vZGUpLGU9ZS5zbGljZShvLnNoaWZ0KCkudmFsdWUubGVuZ3RoKX1pPUcubmVlZHNDb250ZXh0LnRlc3QoZSk/MDpvLmxlbmd0aDt3aGlsZShpLS0pe2lmKGE9b1tpXSxiLnJlbGF0aXZlW3M9YS50eXBlXSlicmVhaztpZigodT1iLmZpbmRbc10pJiYocj11KGEubWF0Y2hlc1swXS5yZXBsYWNlKHRlLG5lKSxlZS50ZXN0KG9bMF0udHlwZSkmJnZlKHQucGFyZW50Tm9kZSl8fHQpKSl7aWYoby5zcGxpY2UoaSwxKSwhKGU9ci5sZW5ndGgmJnhlKG8pKSlyZXR1cm4gSC5hcHBseShuLHIpLG47YnJlYWt9fX1yZXR1cm4obHx8ZihlLGMpKShyLHQsIUUsbiwhdHx8ZWUudGVzdChlKSYmdmUodC5wYXJlbnROb2RlKXx8dCksbn0sZC5zb3J0U3RhYmxlPVMuc3BsaXQoXCJcIikuc29ydChqKS5qb2luKFwiXCIpPT09UyxkLmRldGVjdER1cGxpY2F0ZXM9ISFsLFQoKSxkLnNvcnREZXRhY2hlZD1jZShmdW5jdGlvbihlKXtyZXR1cm4gMSZlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKEMuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpKX0pLGNlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmlubmVySFRNTD1cIjxhIGhyZWY9JyMnPjwvYT5cIixcIiNcIj09PWUuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfSl8fGZlKFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLGZ1bmN0aW9uKGUsdCxuKXtpZighbilyZXR1cm4gZS5nZXRBdHRyaWJ1dGUodCxcInR5cGVcIj09PXQudG9Mb3dlckNhc2UoKT8xOjIpfSksZC5hdHRyaWJ1dGVzJiZjZShmdW5jdGlvbihlKXtyZXR1cm4gZS5pbm5lckhUTUw9XCI8aW5wdXQvPlwiLGUuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIpLFwiXCI9PT1lLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil9KXx8ZmUoXCJ2YWx1ZVwiLGZ1bmN0aW9uKGUsdCxuKXtpZighbiYmXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXJldHVybiBlLmRlZmF1bHRWYWx1ZX0pLGNlKGZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpfSl8fGZlKFIsZnVuY3Rpb24oZSx0LG4pe3ZhciByO2lmKCFuKXJldHVybiEwPT09ZVt0XT90LnRvTG93ZXJDYXNlKCk6KHI9ZS5nZXRBdHRyaWJ1dGVOb2RlKHQpKSYmci5zcGVjaWZpZWQ/ci52YWx1ZTpudWxsfSksc2V9KEMpO1MuZmluZD1kLFMuZXhwcj1kLnNlbGVjdG9ycyxTLmV4cHJbXCI6XCJdPVMuZXhwci5wc2V1ZG9zLFMudW5pcXVlU29ydD1TLnVuaXF1ZT1kLnVuaXF1ZVNvcnQsUy50ZXh0PWQuZ2V0VGV4dCxTLmlzWE1MRG9jPWQuaXNYTUwsUy5jb250YWlucz1kLmNvbnRhaW5zLFMuZXNjYXBlU2VsZWN0b3I9ZC5lc2NhcGU7dmFyIGg9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPVtdLGk9dm9pZCAwIT09bjt3aGlsZSgoZT1lW3RdKSYmOSE9PWUubm9kZVR5cGUpaWYoMT09PWUubm9kZVR5cGUpe2lmKGkmJlMoZSkuaXMobikpYnJlYWs7ci5wdXNoKGUpfXJldHVybiByfSxUPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPVtdO2U7ZT1lLm5leHRTaWJsaW5nKTE9PT1lLm5vZGVUeXBlJiZlIT09dCYmbi5wdXNoKGUpO3JldHVybiBufSxrPVMuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQ7ZnVuY3Rpb24gQShlLHQpe3JldHVybiBlLm5vZGVOYW1lJiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT10LnRvTG93ZXJDYXNlKCl9dmFyIE49L148KFthLXpdW15cXC9cXDA+OlxceDIwXFx0XFxyXFxuXFxmXSopW1xceDIwXFx0XFxyXFxuXFxmXSpcXC8/Pig/OjxcXC9cXDE+fCkkL2k7ZnVuY3Rpb24gaihlLG4scil7cmV0dXJuIG0obik/Uy5ncmVwKGUsZnVuY3Rpb24oZSx0KXtyZXR1cm4hIW4uY2FsbChlLHQsZSkhPT1yfSk6bi5ub2RlVHlwZT9TLmdyZXAoZSxmdW5jdGlvbihlKXtyZXR1cm4gZT09PW4hPT1yfSk6XCJzdHJpbmdcIiE9dHlwZW9mIG4/Uy5ncmVwKGUsZnVuY3Rpb24oZSl7cmV0dXJuLTE8aS5jYWxsKG4sZSkhPT1yfSk6Uy5maWx0ZXIobixlLHIpfVMuZmlsdGVyPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj10WzBdO3JldHVybiBuJiYoZT1cIjpub3QoXCIrZStcIilcIiksMT09PXQubGVuZ3RoJiYxPT09ci5ub2RlVHlwZT9TLmZpbmQubWF0Y2hlc1NlbGVjdG9yKHIsZSk/W3JdOltdOlMuZmluZC5tYXRjaGVzKGUsUy5ncmVwKHQsZnVuY3Rpb24oZSl7cmV0dXJuIDE9PT1lLm5vZGVUeXBlfSkpfSxTLmZuLmV4dGVuZCh7ZmluZDpmdW5jdGlvbihlKXt2YXIgdCxuLHI9dGhpcy5sZW5ndGgsaT10aGlzO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiB0aGlzLnB1c2hTdGFjayhTKGUpLmZpbHRlcihmdW5jdGlvbigpe2Zvcih0PTA7dDxyO3QrKylpZihTLmNvbnRhaW5zKGlbdF0sdGhpcykpcmV0dXJuITB9KSk7Zm9yKG49dGhpcy5wdXNoU3RhY2soW10pLHQ9MDt0PHI7dCsrKVMuZmluZChlLGlbdF0sbik7cmV0dXJuIDE8cj9TLnVuaXF1ZVNvcnQobik6bn0sZmlsdGVyOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnB1c2hTdGFjayhqKHRoaXMsZXx8W10sITEpKX0sbm90OmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnB1c2hTdGFjayhqKHRoaXMsZXx8W10sITApKX0saXM6ZnVuY3Rpb24oZSl7cmV0dXJuISFqKHRoaXMsXCJzdHJpbmdcIj09dHlwZW9mIGUmJmsudGVzdChlKT9TKGUpOmV8fFtdLCExKS5sZW5ndGh9fSk7dmFyIEQscT0vXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0rKSkkLzsoUy5mbi5pbml0PWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpO2lmKCFlKXJldHVybiB0aGlzO2lmKG49bnx8RCxcInN0cmluZ1wiPT10eXBlb2YgZSl7aWYoIShyPVwiPFwiPT09ZVswXSYmXCI+XCI9PT1lW2UubGVuZ3RoLTFdJiYzPD1lLmxlbmd0aD9bbnVsbCxlLG51bGxdOnEuZXhlYyhlKSl8fCFyWzFdJiZ0KXJldHVybiF0fHx0LmpxdWVyeT8odHx8bikuZmluZChlKTp0aGlzLmNvbnN0cnVjdG9yKHQpLmZpbmQoZSk7aWYoclsxXSl7aWYodD10IGluc3RhbmNlb2YgUz90WzBdOnQsUy5tZXJnZSh0aGlzLFMucGFyc2VIVE1MKHJbMV0sdCYmdC5ub2RlVHlwZT90Lm93bmVyRG9jdW1lbnR8fHQ6RSwhMCkpLE4udGVzdChyWzFdKSYmUy5pc1BsYWluT2JqZWN0KHQpKWZvcihyIGluIHQpbSh0aGlzW3JdKT90aGlzW3JdKHRbcl0pOnRoaXMuYXR0cihyLHRbcl0pO3JldHVybiB0aGlzfXJldHVybihpPUUuZ2V0RWxlbWVudEJ5SWQoclsyXSkpJiYodGhpc1swXT1pLHRoaXMubGVuZ3RoPTEpLHRoaXN9cmV0dXJuIGUubm9kZVR5cGU/KHRoaXNbMF09ZSx0aGlzLmxlbmd0aD0xLHRoaXMpOm0oZSk/dm9pZCAwIT09bi5yZWFkeT9uLnJlYWR5KGUpOmUoUyk6Uy5tYWtlQXJyYXkoZSx0aGlzKX0pLnByb3RvdHlwZT1TLmZuLEQ9UyhFKTt2YXIgTD0vXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxIPXtjaGlsZHJlbjohMCxjb250ZW50czohMCxuZXh0OiEwLHByZXY6ITB9O2Z1bmN0aW9uIE8oZSx0KXt3aGlsZSgoZT1lW3RdKSYmMSE9PWUubm9kZVR5cGUpO3JldHVybiBlfVMuZm4uZXh0ZW5kKHtoYXM6ZnVuY3Rpb24oZSl7dmFyIHQ9UyhlLHRoaXMpLG49dC5sZW5ndGg7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHZhciBlPTA7ZTxuO2UrKylpZihTLmNvbnRhaW5zKHRoaXMsdFtlXSkpcmV0dXJuITB9KX0sY2xvc2VzdDpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MCxpPXRoaXMubGVuZ3RoLG89W10sYT1cInN0cmluZ1wiIT10eXBlb2YgZSYmUyhlKTtpZighay50ZXN0KGUpKWZvcig7cjxpO3IrKylmb3Iobj10aGlzW3JdO24mJm4hPT10O249bi5wYXJlbnROb2RlKWlmKG4ubm9kZVR5cGU8MTEmJihhPy0xPGEuaW5kZXgobik6MT09PW4ubm9kZVR5cGUmJlMuZmluZC5tYXRjaGVzU2VsZWN0b3IobixlKSkpe28ucHVzaChuKTticmVha31yZXR1cm4gdGhpcy5wdXNoU3RhY2soMTxvLmxlbmd0aD9TLnVuaXF1ZVNvcnQobyk6byl9LGluZGV4OmZ1bmN0aW9uKGUpe3JldHVybiBlP1wic3RyaW5nXCI9PXR5cGVvZiBlP2kuY2FsbChTKGUpLHRoaXNbMF0pOmkuY2FsbCh0aGlzLGUuanF1ZXJ5P2VbMF06ZSk6dGhpc1swXSYmdGhpc1swXS5wYXJlbnROb2RlP3RoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoOi0xfSxhZGQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soUy51bmlxdWVTb3J0KFMubWVyZ2UodGhpcy5nZXQoKSxTKGUsdCkpKSl9LGFkZEJhY2s6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuYWRkKG51bGw9PWU/dGhpcy5wcmV2T2JqZWN0OnRoaXMucHJldk9iamVjdC5maWx0ZXIoZSkpfX0pLFMuZWFjaCh7cGFyZW50OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTtyZXR1cm4gdCYmMTEhPT10Lm5vZGVUeXBlP3Q6bnVsbH0scGFyZW50czpmdW5jdGlvbihlKXtyZXR1cm4gaChlLFwicGFyZW50Tm9kZVwiKX0scGFyZW50c1VudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gaChlLFwicGFyZW50Tm9kZVwiLG4pfSxuZXh0OmZ1bmN0aW9uKGUpe3JldHVybiBPKGUsXCJuZXh0U2libGluZ1wiKX0scHJldjpmdW5jdGlvbihlKXtyZXR1cm4gTyhlLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0QWxsOmZ1bmN0aW9uKGUpe3JldHVybiBoKGUsXCJuZXh0U2libGluZ1wiKX0scHJldkFsbDpmdW5jdGlvbihlKXtyZXR1cm4gaChlLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0VW50aWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBoKGUsXCJuZXh0U2libGluZ1wiLG4pfSxwcmV2VW50aWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBoKGUsXCJwcmV2aW91c1NpYmxpbmdcIixuKX0sc2libGluZ3M6ZnVuY3Rpb24oZSl7cmV0dXJuIFQoKGUucGFyZW50Tm9kZXx8e30pLmZpcnN0Q2hpbGQsZSl9LGNoaWxkcmVuOmZ1bmN0aW9uKGUpe3JldHVybiBUKGUuZmlyc3RDaGlsZCl9LGNvbnRlbnRzOmZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT1lLmNvbnRlbnREb2N1bWVudCYmcihlLmNvbnRlbnREb2N1bWVudCk/ZS5jb250ZW50RG9jdW1lbnQ6KEEoZSxcInRlbXBsYXRlXCIpJiYoZT1lLmNvbnRlbnR8fGUpLFMubWVyZ2UoW10sZS5jaGlsZE5vZGVzKSl9fSxmdW5jdGlvbihyLGkpe1MuZm5bcl09ZnVuY3Rpb24oZSx0KXt2YXIgbj1TLm1hcCh0aGlzLGksZSk7cmV0dXJuXCJVbnRpbFwiIT09ci5zbGljZSgtNSkmJih0PWUpLHQmJlwic3RyaW5nXCI9PXR5cGVvZiB0JiYobj1TLmZpbHRlcih0LG4pKSwxPHRoaXMubGVuZ3RoJiYoSFtyXXx8Uy51bmlxdWVTb3J0KG4pLEwudGVzdChyKSYmbi5yZXZlcnNlKCkpLHRoaXMucHVzaFN0YWNrKG4pfX0pO3ZhciBQPS9bXlxceDIwXFx0XFxyXFxuXFxmXSsvZztmdW5jdGlvbiBSKGUpe3JldHVybiBlfWZ1bmN0aW9uIE0oZSl7dGhyb3cgZX1mdW5jdGlvbiBJKGUsdCxuLHIpe3ZhciBpO3RyeXtlJiZtKGk9ZS5wcm9taXNlKT9pLmNhbGwoZSkuZG9uZSh0KS5mYWlsKG4pOmUmJm0oaT1lLnRoZW4pP2kuY2FsbChlLHQsbik6dC5hcHBseSh2b2lkIDAsW2VdLnNsaWNlKHIpKX1jYXRjaChlKXtuLmFwcGx5KHZvaWQgMCxbZV0pfX1TLkNhbGxiYWNrcz1mdW5jdGlvbihyKXt2YXIgZSxuO3I9XCJzdHJpbmdcIj09dHlwZW9mIHI/KGU9cixuPXt9LFMuZWFjaChlLm1hdGNoKFApfHxbXSxmdW5jdGlvbihlLHQpe25bdF09ITB9KSxuKTpTLmV4dGVuZCh7fSxyKTt2YXIgaSx0LG8sYSxzPVtdLHU9W10sbD0tMSxjPWZ1bmN0aW9uKCl7Zm9yKGE9YXx8ci5vbmNlLG89aT0hMDt1Lmxlbmd0aDtsPS0xKXt0PXUuc2hpZnQoKTt3aGlsZSgrK2w8cy5sZW5ndGgpITE9PT1zW2xdLmFwcGx5KHRbMF0sdFsxXSkmJnIuc3RvcE9uRmFsc2UmJihsPXMubGVuZ3RoLHQ9ITEpfXIubWVtb3J5fHwodD0hMSksaT0hMSxhJiYocz10P1tdOlwiXCIpfSxmPXthZGQ6ZnVuY3Rpb24oKXtyZXR1cm4gcyYmKHQmJiFpJiYobD1zLmxlbmd0aC0xLHUucHVzaCh0KSksZnVuY3Rpb24gbihlKXtTLmVhY2goZSxmdW5jdGlvbihlLHQpe20odCk/ci51bmlxdWUmJmYuaGFzKHQpfHxzLnB1c2godCk6dCYmdC5sZW5ndGgmJlwic3RyaW5nXCIhPT13KHQpJiZuKHQpfSl9KGFyZ3VtZW50cyksdCYmIWkmJmMoKSksdGhpc30scmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIFMuZWFjaChhcmd1bWVudHMsZnVuY3Rpb24oZSx0KXt2YXIgbjt3aGlsZSgtMTwobj1TLmluQXJyYXkodCxzLG4pKSlzLnNwbGljZShuLDEpLG48PWwmJmwtLX0pLHRoaXN9LGhhczpmdW5jdGlvbihlKXtyZXR1cm4gZT8tMTxTLmluQXJyYXkoZSxzKTowPHMubGVuZ3RofSxlbXB0eTpmdW5jdGlvbigpe3JldHVybiBzJiYocz1bXSksdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBhPXU9W10scz10PVwiXCIsdGhpc30sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hc30sbG9jazpmdW5jdGlvbigpe3JldHVybiBhPXU9W10sdHx8aXx8KHM9dD1cIlwiKSx0aGlzfSxsb2NrZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWF9LGZpcmVXaXRoOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGF8fCh0PVtlLCh0PXR8fFtdKS5zbGljZT90LnNsaWNlKCk6dF0sdS5wdXNoKHQpLGl8fGMoKSksdGhpc30sZmlyZTpmdW5jdGlvbigpe3JldHVybiBmLmZpcmVXaXRoKHRoaXMsYXJndW1lbnRzKSx0aGlzfSxmaXJlZDpmdW5jdGlvbigpe3JldHVybiEhb319O3JldHVybiBmfSxTLmV4dGVuZCh7RGVmZXJyZWQ6ZnVuY3Rpb24oZSl7dmFyIG89W1tcIm5vdGlmeVwiLFwicHJvZ3Jlc3NcIixTLkNhbGxiYWNrcyhcIm1lbW9yeVwiKSxTLkNhbGxiYWNrcyhcIm1lbW9yeVwiKSwyXSxbXCJyZXNvbHZlXCIsXCJkb25lXCIsUy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxTLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLDAsXCJyZXNvbHZlZFwiXSxbXCJyZWplY3RcIixcImZhaWxcIixTLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFMuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksMSxcInJlamVjdGVkXCJdXSxpPVwicGVuZGluZ1wiLGE9e3N0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIGl9LGFsd2F5czpmdW5jdGlvbigpe3JldHVybiBzLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyksdGhpc30sXCJjYXRjaFwiOmZ1bmN0aW9uKGUpe3JldHVybiBhLnRoZW4obnVsbCxlKX0scGlwZTpmdW5jdGlvbigpe3ZhciBpPWFyZ3VtZW50cztyZXR1cm4gUy5EZWZlcnJlZChmdW5jdGlvbihyKXtTLmVhY2gobyxmdW5jdGlvbihlLHQpe3ZhciBuPW0oaVt0WzRdXSkmJmlbdFs0XV07c1t0WzFdXShmdW5jdGlvbigpe3ZhciBlPW4mJm4uYXBwbHkodGhpcyxhcmd1bWVudHMpO2UmJm0oZS5wcm9taXNlKT9lLnByb21pc2UoKS5wcm9ncmVzcyhyLm5vdGlmeSkuZG9uZShyLnJlc29sdmUpLmZhaWwoci5yZWplY3QpOnJbdFswXStcIldpdGhcIl0odGhpcyxuP1tlXTphcmd1bWVudHMpfSl9KSxpPW51bGx9KS5wcm9taXNlKCl9LHRoZW46ZnVuY3Rpb24odCxuLHIpe3ZhciB1PTA7ZnVuY3Rpb24gbChpLG8sYSxzKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgbj10aGlzLHI9YXJndW1lbnRzLGU9ZnVuY3Rpb24oKXt2YXIgZSx0O2lmKCEoaTx1KSl7aWYoKGU9YS5hcHBseShuLHIpKT09PW8ucHJvbWlzZSgpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGVuYWJsZSBzZWxmLXJlc29sdXRpb25cIik7dD1lJiYoXCJvYmplY3RcIj09dHlwZW9mIGV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpJiZlLnRoZW4sbSh0KT9zP3QuY2FsbChlLGwodSxvLFIscyksbCh1LG8sTSxzKSk6KHUrKyx0LmNhbGwoZSxsKHUsbyxSLHMpLGwodSxvLE0scyksbCh1LG8sUixvLm5vdGlmeVdpdGgpKSk6KGEhPT1SJiYobj12b2lkIDAscj1bZV0pLChzfHxvLnJlc29sdmVXaXRoKShuLHIpKX19LHQ9cz9lOmZ1bmN0aW9uKCl7dHJ5e2UoKX1jYXRjaChlKXtTLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2smJlMuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayhlLHQuc3RhY2tUcmFjZSksdTw9aSsxJiYoYSE9PU0mJihuPXZvaWQgMCxyPVtlXSksby5yZWplY3RXaXRoKG4scikpfX07aT90KCk6KFMuRGVmZXJyZWQuZ2V0U3RhY2tIb29rJiYodC5zdGFja1RyYWNlPVMuRGVmZXJyZWQuZ2V0U3RhY2tIb29rKCkpLEMuc2V0VGltZW91dCh0KSl9fXJldHVybiBTLkRlZmVycmVkKGZ1bmN0aW9uKGUpe29bMF1bM10uYWRkKGwoMCxlLG0ocik/cjpSLGUubm90aWZ5V2l0aCkpLG9bMV1bM10uYWRkKGwoMCxlLG0odCk/dDpSKSksb1syXVszXS5hZGQobCgwLGUsbShuKT9uOk0pKX0pLnByb21pc2UoKX0scHJvbWlzZTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZT9TLmV4dGVuZChlLGEpOmF9fSxzPXt9O3JldHVybiBTLmVhY2gobyxmdW5jdGlvbihlLHQpe3ZhciBuPXRbMl0scj10WzVdO2FbdFsxXV09bi5hZGQsciYmbi5hZGQoZnVuY3Rpb24oKXtpPXJ9LG9bMy1lXVsyXS5kaXNhYmxlLG9bMy1lXVszXS5kaXNhYmxlLG9bMF1bMl0ubG9jayxvWzBdWzNdLmxvY2spLG4uYWRkKHRbM10uZmlyZSksc1t0WzBdXT1mdW5jdGlvbigpe3JldHVybiBzW3RbMF0rXCJXaXRoXCJdKHRoaXM9PT1zP3ZvaWQgMDp0aGlzLGFyZ3VtZW50cyksdGhpc30sc1t0WzBdK1wiV2l0aFwiXT1uLmZpcmVXaXRofSksYS5wcm9taXNlKHMpLGUmJmUuY2FsbChzLHMpLHN9LHdoZW46ZnVuY3Rpb24oZSl7dmFyIG49YXJndW1lbnRzLmxlbmd0aCx0PW4scj1BcnJheSh0KSxpPXMuY2FsbChhcmd1bWVudHMpLG89Uy5EZWZlcnJlZCgpLGE9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JbdF09dGhpcyxpW3RdPTE8YXJndW1lbnRzLmxlbmd0aD9zLmNhbGwoYXJndW1lbnRzKTplLC0tbnx8by5yZXNvbHZlV2l0aChyLGkpfX07aWYobjw9MSYmKEkoZSxvLmRvbmUoYSh0KSkucmVzb2x2ZSxvLnJlamVjdCwhbiksXCJwZW5kaW5nXCI9PT1vLnN0YXRlKCl8fG0oaVt0XSYmaVt0XS50aGVuKSkpcmV0dXJuIG8udGhlbigpO3doaWxlKHQtLSlJKGlbdF0sYSh0KSxvLnJlamVjdCk7cmV0dXJuIG8ucHJvbWlzZSgpfX0pO3ZhciBXPS9eKEV2YWx8SW50ZXJuYWx8UmFuZ2V8UmVmZXJlbmNlfFN5bnRheHxUeXBlfFVSSSlFcnJvciQvO1MuRGVmZXJyZWQuZXhjZXB0aW9uSG9vaz1mdW5jdGlvbihlLHQpe0MuY29uc29sZSYmQy5jb25zb2xlLndhcm4mJmUmJlcudGVzdChlLm5hbWUpJiZDLmNvbnNvbGUud2FybihcImpRdWVyeS5EZWZlcnJlZCBleGNlcHRpb246IFwiK2UubWVzc2FnZSxlLnN0YWNrLHQpfSxTLnJlYWR5RXhjZXB0aW9uPWZ1bmN0aW9uKGUpe0Muc2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGV9KX07dmFyIEY9Uy5EZWZlcnJlZCgpO2Z1bmN0aW9uICQoKXtFLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsJCksQy5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCQpLFMucmVhZHkoKX1TLmZuLnJlYWR5PWZ1bmN0aW9uKGUpe3JldHVybiBGLnRoZW4oZSlbXCJjYXRjaFwiXShmdW5jdGlvbihlKXtTLnJlYWR5RXhjZXB0aW9uKGUpfSksdGhpc30sUy5leHRlbmQoe2lzUmVhZHk6ITEscmVhZHlXYWl0OjEscmVhZHk6ZnVuY3Rpb24oZSl7KCEwPT09ZT8tLVMucmVhZHlXYWl0OlMuaXNSZWFkeSl8fChTLmlzUmVhZHk9ITApIT09ZSYmMDwtLVMucmVhZHlXYWl0fHxGLnJlc29sdmVXaXRoKEUsW1NdKX19KSxTLnJlYWR5LnRoZW49Ri50aGVuLFwiY29tcGxldGVcIj09PUUucmVhZHlTdGF0ZXx8XCJsb2FkaW5nXCIhPT1FLnJlYWR5U3RhdGUmJiFFLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbD9DLnNldFRpbWVvdXQoUy5yZWFkeSk6KEUuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwkKSxDLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsJCkpO3ZhciBCPWZ1bmN0aW9uKGUsdCxuLHIsaSxvLGEpe3ZhciBzPTAsdT1lLmxlbmd0aCxsPW51bGw9PW47aWYoXCJvYmplY3RcIj09PXcobikpZm9yKHMgaW4gaT0hMCxuKUIoZSx0LHMsbltzXSwhMCxvLGEpO2Vsc2UgaWYodm9pZCAwIT09ciYmKGk9ITAsbShyKXx8KGE9ITApLGwmJihhPyh0LmNhbGwoZSxyKSx0PW51bGwpOihsPXQsdD1mdW5jdGlvbihlLHQsbil7cmV0dXJuIGwuY2FsbChTKGUpLG4pfSkpLHQpKWZvcig7czx1O3MrKyl0KGVbc10sbixhP3I6ci5jYWxsKGVbc10scyx0KGVbc10sbikpKTtyZXR1cm4gaT9lOmw/dC5jYWxsKGUpOnU/dChlWzBdLG4pOm99LF89L14tbXMtLyx6PS8tKFthLXpdKS9nO2Z1bmN0aW9uIFUoZSx0KXtyZXR1cm4gdC50b1VwcGVyQ2FzZSgpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIGUucmVwbGFjZShfLFwibXMtXCIpLnJlcGxhY2UoeixVKX12YXIgVj1mdW5jdGlvbihlKXtyZXR1cm4gMT09PWUubm9kZVR5cGV8fDk9PT1lLm5vZGVUeXBlfHwhK2Uubm9kZVR5cGV9O2Z1bmN0aW9uIEcoKXt0aGlzLmV4cGFuZG89Uy5leHBhbmRvK0cudWlkKyt9Ry51aWQ9MSxHLnByb3RvdHlwZT17Y2FjaGU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZVt0aGlzLmV4cGFuZG9dO3JldHVybiB0fHwodD17fSxWKGUpJiYoZS5ub2RlVHlwZT9lW3RoaXMuZXhwYW5kb109dDpPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0aGlzLmV4cGFuZG8se3ZhbHVlOnQsY29uZmlndXJhYmxlOiEwfSkpKSx0fSxzZXQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk9dGhpcy5jYWNoZShlKTtpZihcInN0cmluZ1wiPT10eXBlb2YgdClpW1godCldPW47ZWxzZSBmb3IociBpbiB0KWlbWChyKV09dFtyXTtyZXR1cm4gaX0sZ2V0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PXQ/dGhpcy5jYWNoZShlKTplW3RoaXMuZXhwYW5kb10mJmVbdGhpcy5leHBhbmRvXVtYKHQpXX0sYWNjZXNzOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdm9pZCAwPT09dHx8dCYmXCJzdHJpbmdcIj09dHlwZW9mIHQmJnZvaWQgMD09PW4/dGhpcy5nZXQoZSx0KToodGhpcy5zZXQoZSx0LG4pLHZvaWQgMCE9PW4/bjp0KX0scmVtb3ZlOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj1lW3RoaXMuZXhwYW5kb107aWYodm9pZCAwIT09cil7aWYodm9pZCAwIT09dCl7bj0odD1BcnJheS5pc0FycmF5KHQpP3QubWFwKFgpOih0PVgodCkpaW4gcj9bdF06dC5tYXRjaChQKXx8W10pLmxlbmd0aDt3aGlsZShuLS0pZGVsZXRlIHJbdFtuXV19KHZvaWQgMD09PXR8fFMuaXNFbXB0eU9iamVjdChyKSkmJihlLm5vZGVUeXBlP2VbdGhpcy5leHBhbmRvXT12b2lkIDA6ZGVsZXRlIGVbdGhpcy5leHBhbmRvXSl9fSxoYXNEYXRhOmZ1bmN0aW9uKGUpe3ZhciB0PWVbdGhpcy5leHBhbmRvXTtyZXR1cm4gdm9pZCAwIT09dCYmIVMuaXNFbXB0eU9iamVjdCh0KX19O3ZhciBZPW5ldyBHLFE9bmV3IEcsSj0vXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sSz0vW0EtWl0vZztmdW5jdGlvbiBaKGUsdCxuKXt2YXIgcixpO2lmKHZvaWQgMD09PW4mJjE9PT1lLm5vZGVUeXBlKWlmKHI9XCJkYXRhLVwiK3QucmVwbGFjZShLLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCksXCJzdHJpbmdcIj09dHlwZW9mKG49ZS5nZXRBdHRyaWJ1dGUocikpKXt0cnl7bj1cInRydWVcIj09PShpPW4pfHxcImZhbHNlXCIhPT1pJiYoXCJudWxsXCI9PT1pP251bGw6aT09PStpK1wiXCI/K2k6Si50ZXN0KGkpP0pTT04ucGFyc2UoaSk6aSl9Y2F0Y2goZSl7fVEuc2V0KGUsdCxuKX1lbHNlIG49dm9pZCAwO3JldHVybiBufVMuZXh0ZW5kKHtoYXNEYXRhOmZ1bmN0aW9uKGUpe3JldHVybiBRLmhhc0RhdGEoZSl8fFkuaGFzRGF0YShlKX0sZGF0YTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIFEuYWNjZXNzKGUsdCxuKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihlLHQpe1EucmVtb3ZlKGUsdCl9LF9kYXRhOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gWS5hY2Nlc3MoZSx0LG4pfSxfcmVtb3ZlRGF0YTpmdW5jdGlvbihlLHQpe1kucmVtb3ZlKGUsdCl9fSksUy5mbi5leHRlbmQoe2RhdGE6ZnVuY3Rpb24obixlKXt2YXIgdCxyLGksbz10aGlzWzBdLGE9byYmby5hdHRyaWJ1dGVzO2lmKHZvaWQgMD09PW4pe2lmKHRoaXMubGVuZ3RoJiYoaT1RLmdldChvKSwxPT09by5ub2RlVHlwZSYmIVkuZ2V0KG8sXCJoYXNEYXRhQXR0cnNcIikpKXt0PWEubGVuZ3RoO3doaWxlKHQtLSlhW3RdJiYwPT09KHI9YVt0XS5uYW1lKS5pbmRleE9mKFwiZGF0YS1cIikmJihyPVgoci5zbGljZSg1KSksWihvLHIsaVtyXSkpO1kuc2V0KG8sXCJoYXNEYXRhQXR0cnNcIiwhMCl9cmV0dXJuIGl9cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIG4/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7US5zZXQodGhpcyxuKX0pOkIodGhpcyxmdW5jdGlvbihlKXt2YXIgdDtpZihvJiZ2b2lkIDA9PT1lKXJldHVybiB2b2lkIDAhPT0odD1RLmdldChvLG4pKT90OnZvaWQgMCE9PSh0PVoobyxuKSk/dDp2b2lkIDA7dGhpcy5lYWNoKGZ1bmN0aW9uKCl7US5zZXQodGhpcyxuLGUpfSl9LG51bGwsZSwxPGFyZ3VtZW50cy5sZW5ndGgsbnVsbCwhMCl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1EucmVtb3ZlKHRoaXMsZSl9KX19KSxTLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByO2lmKGUpcmV0dXJuIHQ9KHR8fFwiZnhcIikrXCJxdWV1ZVwiLHI9WS5nZXQoZSx0KSxuJiYoIXJ8fEFycmF5LmlzQXJyYXkobik/cj1ZLmFjY2VzcyhlLHQsUy5tYWtlQXJyYXkobikpOnIucHVzaChuKSkscnx8W119LGRlcXVldWU6ZnVuY3Rpb24oZSx0KXt0PXR8fFwiZnhcIjt2YXIgbj1TLnF1ZXVlKGUsdCkscj1uLmxlbmd0aCxpPW4uc2hpZnQoKSxvPVMuX3F1ZXVlSG9va3MoZSx0KTtcImlucHJvZ3Jlc3NcIj09PWkmJihpPW4uc2hpZnQoKSxyLS0pLGkmJihcImZ4XCI9PT10JiZuLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLGRlbGV0ZSBvLnN0b3AsaS5jYWxsKGUsZnVuY3Rpb24oKXtTLmRlcXVldWUoZSx0KX0sbykpLCFyJiZvJiZvLmVtcHR5LmZpcmUoKX0sX3F1ZXVlSG9va3M6ZnVuY3Rpb24oZSx0KXt2YXIgbj10K1wicXVldWVIb29rc1wiO3JldHVybiBZLmdldChlLG4pfHxZLmFjY2VzcyhlLG4se2VtcHR5OlMuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCl7WS5yZW1vdmUoZSxbdCtcInF1ZXVlXCIsbl0pfSl9KX19KSxTLmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24odCxuKXt2YXIgZT0yO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiB0JiYobj10LHQ9XCJmeFwiLGUtLSksYXJndW1lbnRzLmxlbmd0aDxlP1MucXVldWUodGhpc1swXSx0KTp2b2lkIDA9PT1uP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9Uy5xdWV1ZSh0aGlzLHQsbik7Uy5fcXVldWVIb29rcyh0aGlzLHQpLFwiZnhcIj09PXQmJlwiaW5wcm9ncmVzc1wiIT09ZVswXSYmUy5kZXF1ZXVlKHRoaXMsdCl9KX0sZGVxdWV1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Uy5kZXF1ZXVlKHRoaXMsZSl9KX0sY2xlYXJRdWV1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5xdWV1ZShlfHxcImZ4XCIsW10pfSxwcm9taXNlOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0xLGk9Uy5EZWZlcnJlZCgpLG89dGhpcyxhPXRoaXMubGVuZ3RoLHM9ZnVuY3Rpb24oKXstLXJ8fGkucmVzb2x2ZVdpdGgobyxbb10pfTtcInN0cmluZ1wiIT10eXBlb2YgZSYmKHQ9ZSxlPXZvaWQgMCksZT1lfHxcImZ4XCI7d2hpbGUoYS0tKShuPVkuZ2V0KG9bYV0sZStcInF1ZXVlSG9va3NcIikpJiZuLmVtcHR5JiYocisrLG4uZW1wdHkuYWRkKHMpKTtyZXR1cm4gcygpLGkucHJvbWlzZSh0KX19KTt2YXIgZWU9L1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8uc291cmNlLHRlPW5ldyBSZWdFeHAoXCJeKD86KFsrLV0pPXwpKFwiK2VlK1wiKShbYS16JV0qKSRcIixcImlcIiksbmU9W1wiVG9wXCIsXCJSaWdodFwiLFwiQm90dG9tXCIsXCJMZWZ0XCJdLHJlPUUuZG9jdW1lbnRFbGVtZW50LGllPWZ1bmN0aW9uKGUpe3JldHVybiBTLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKX0sb2U9e2NvbXBvc2VkOiEwfTtyZS5nZXRSb290Tm9kZSYmKGllPWZ1bmN0aW9uKGUpe3JldHVybiBTLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKXx8ZS5nZXRSb290Tm9kZShvZSk9PT1lLm93bmVyRG9jdW1lbnR9KTt2YXIgYWU9ZnVuY3Rpb24oZSx0KXtyZXR1cm5cIm5vbmVcIj09PShlPXR8fGUpLnN0eWxlLmRpc3BsYXl8fFwiXCI9PT1lLnN0eWxlLmRpc3BsYXkmJmllKGUpJiZcIm5vbmVcIj09PVMuY3NzKGUsXCJkaXNwbGF5XCIpfTtmdW5jdGlvbiBzZShlLHQsbixyKXt2YXIgaSxvLGE9MjAscz1yP2Z1bmN0aW9uKCl7cmV0dXJuIHIuY3VyKCl9OmZ1bmN0aW9uKCl7cmV0dXJuIFMuY3NzKGUsdCxcIlwiKX0sdT1zKCksbD1uJiZuWzNdfHwoUy5jc3NOdW1iZXJbdF0/XCJcIjpcInB4XCIpLGM9ZS5ub2RlVHlwZSYmKFMuY3NzTnVtYmVyW3RdfHxcInB4XCIhPT1sJiYrdSkmJnRlLmV4ZWMoUy5jc3MoZSx0KSk7aWYoYyYmY1szXSE9PWwpe3UvPTIsbD1sfHxjWzNdLGM9K3V8fDE7d2hpbGUoYS0tKVMuc3R5bGUoZSx0LGMrbCksKDEtbykqKDEtKG89cygpL3V8fC41KSk8PTAmJihhPTApLGMvPW87Yyo9MixTLnN0eWxlKGUsdCxjK2wpLG49bnx8W119cmV0dXJuIG4mJihjPStjfHwrdXx8MCxpPW5bMV0/YysoblsxXSsxKSpuWzJdOituWzJdLHImJihyLnVuaXQ9bCxyLnN0YXJ0PWMsci5lbmQ9aSkpLGl9dmFyIHVlPXt9O2Z1bmN0aW9uIGxlKGUsdCl7Zm9yKHZhciBuLHIsaSxvLGEscyx1LGw9W10sYz0wLGY9ZS5sZW5ndGg7YzxmO2MrKykocj1lW2NdKS5zdHlsZSYmKG49ci5zdHlsZS5kaXNwbGF5LHQ/KFwibm9uZVwiPT09biYmKGxbY109WS5nZXQocixcImRpc3BsYXlcIil8fG51bGwsbFtjXXx8KHIuc3R5bGUuZGlzcGxheT1cIlwiKSksXCJcIj09PXIuc3R5bGUuZGlzcGxheSYmYWUocikmJihsW2NdPSh1PWE9bz12b2lkIDAsYT0oaT1yKS5vd25lckRvY3VtZW50LHM9aS5ub2RlTmFtZSwodT11ZVtzXSl8fChvPWEuYm9keS5hcHBlbmRDaGlsZChhLmNyZWF0ZUVsZW1lbnQocykpLHU9Uy5jc3MobyxcImRpc3BsYXlcIiksby5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG8pLFwibm9uZVwiPT09dSYmKHU9XCJibG9ja1wiKSx1ZVtzXT11KSkpKTpcIm5vbmVcIiE9PW4mJihsW2NdPVwibm9uZVwiLFkuc2V0KHIsXCJkaXNwbGF5XCIsbikpKTtmb3IoYz0wO2M8ZjtjKyspbnVsbCE9bFtjXSYmKGVbY10uc3R5bGUuZGlzcGxheT1sW2NdKTtyZXR1cm4gZX1TLmZuLmV4dGVuZCh7c2hvdzpmdW5jdGlvbigpe3JldHVybiBsZSh0aGlzLCEwKX0saGlkZTpmdW5jdGlvbigpe3JldHVybiBsZSh0aGlzKX0sdG9nZ2xlOmZ1bmN0aW9uKGUpe3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgZT9lP3RoaXMuc2hvdygpOnRoaXMuaGlkZSgpOnRoaXMuZWFjaChmdW5jdGlvbigpe2FlKHRoaXMpP1ModGhpcykuc2hvdygpOlModGhpcykuaGlkZSgpfSl9fSk7dmFyIGNlLGZlLHBlPS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pLGRlPS88KFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKikvaSxoZT0vXiR8Xm1vZHVsZSR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pO2NlPUUuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLmFwcGVuZENoaWxkKEUuY3JlYXRlRWxlbWVudChcImRpdlwiKSksKGZlPUUuY3JlYXRlRWxlbWVudChcImlucHV0XCIpKS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJyYWRpb1wiKSxmZS5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJjaGVja2VkXCIpLGZlLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcInRcIiksY2UuYXBwZW5kQ2hpbGQoZmUpLHYuY2hlY2tDbG9uZT1jZS5jbG9uZU5vZGUoITApLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmNoZWNrZWQsY2UuaW5uZXJIVE1MPVwiPHRleHRhcmVhPng8L3RleHRhcmVhPlwiLHYubm9DbG9uZUNoZWNrZWQ9ISFjZS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWUsY2UuaW5uZXJIVE1MPVwiPG9wdGlvbj48L29wdGlvbj5cIix2Lm9wdGlvbj0hIWNlLmxhc3RDaGlsZDt2YXIgZ2U9e3RoZWFkOlsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sY29sOlsyLFwiPHRhYmxlPjxjb2xncm91cD5cIixcIjwvY29sZ3JvdXA+PC90YWJsZT5cIl0sdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSx0ZDpbMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLF9kZWZhdWx0OlswLFwiXCIsXCJcIl19O2Z1bmN0aW9uIHllKGUsdCl7dmFyIG47cmV0dXJuIG49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZS5nZXRFbGVtZW50c0J5VGFnTmFtZSh0fHxcIipcIik6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUucXVlcnlTZWxlY3RvckFsbD9lLnF1ZXJ5U2VsZWN0b3JBbGwodHx8XCIqXCIpOltdLHZvaWQgMD09PXR8fHQmJkEoZSx0KT9TLm1lcmdlKFtlXSxuKTpufWZ1bmN0aW9uIHZlKGUsdCl7Zm9yKHZhciBuPTAscj1lLmxlbmd0aDtuPHI7bisrKVkuc2V0KGVbbl0sXCJnbG9iYWxFdmFsXCIsIXR8fFkuZ2V0KHRbbl0sXCJnbG9iYWxFdmFsXCIpKX1nZS50Ym9keT1nZS50Zm9vdD1nZS5jb2xncm91cD1nZS5jYXB0aW9uPWdlLnRoZWFkLGdlLnRoPWdlLnRkLHYub3B0aW9ufHwoZ2Uub3B0Z3JvdXA9Z2Uub3B0aW9uPVsxLFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLFwiPC9zZWxlY3Q+XCJdKTt2YXIgbWU9Lzx8JiM/XFx3KzsvO2Z1bmN0aW9uIHhlKGUsdCxuLHIsaSl7Zm9yKHZhciBvLGEscyx1LGwsYyxmPXQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLHA9W10sZD0wLGg9ZS5sZW5ndGg7ZDxoO2QrKylpZigobz1lW2RdKXx8MD09PW8paWYoXCJvYmplY3RcIj09PXcobykpUy5tZXJnZShwLG8ubm9kZVR5cGU/W29dOm8pO2Vsc2UgaWYobWUudGVzdChvKSl7YT1hfHxmLmFwcGVuZENoaWxkKHQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkscz0oZGUuZXhlYyhvKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCksdT1nZVtzXXx8Z2UuX2RlZmF1bHQsYS5pbm5lckhUTUw9dVsxXStTLmh0bWxQcmVmaWx0ZXIobykrdVsyXSxjPXVbMF07d2hpbGUoYy0tKWE9YS5sYXN0Q2hpbGQ7Uy5tZXJnZShwLGEuY2hpbGROb2RlcyksKGE9Zi5maXJzdENoaWxkKS50ZXh0Q29udGVudD1cIlwifWVsc2UgcC5wdXNoKHQuY3JlYXRlVGV4dE5vZGUobykpO2YudGV4dENvbnRlbnQ9XCJcIixkPTA7d2hpbGUobz1wW2QrK10paWYociYmLTE8Uy5pbkFycmF5KG8scikpaSYmaS5wdXNoKG8pO2Vsc2UgaWYobD1pZShvKSxhPXllKGYuYXBwZW5kQ2hpbGQobyksXCJzY3JpcHRcIiksbCYmdmUoYSksbil7Yz0wO3doaWxlKG89YVtjKytdKWhlLnRlc3Qoby50eXBlfHxcIlwiKSYmbi5wdXNoKG8pfXJldHVybiBmfXZhciBiZT0vXihbXi5dKikoPzpcXC4oLispfCkvO2Z1bmN0aW9uIHdlKCl7cmV0dXJuITB9ZnVuY3Rpb24gVGUoKXtyZXR1cm4hMX1mdW5jdGlvbiBDZShlLHQpe3JldHVybiBlPT09ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIEUuYWN0aXZlRWxlbWVudH1jYXRjaChlKXt9fSgpPT0oXCJmb2N1c1wiPT09dCl9ZnVuY3Rpb24gRWUoZSx0LG4scixpLG8pe3ZhciBhLHM7aWYoXCJvYmplY3RcIj09dHlwZW9mIHQpe2ZvcihzIGluXCJzdHJpbmdcIiE9dHlwZW9mIG4mJihyPXJ8fG4sbj12b2lkIDApLHQpRWUoZSxzLG4scix0W3NdLG8pO3JldHVybiBlfWlmKG51bGw9PXImJm51bGw9PWk/KGk9bixyPW49dm9pZCAwKTpudWxsPT1pJiYoXCJzdHJpbmdcIj09dHlwZW9mIG4/KGk9cixyPXZvaWQgMCk6KGk9cixyPW4sbj12b2lkIDApKSwhMT09PWkpaT1UZTtlbHNlIGlmKCFpKXJldHVybiBlO3JldHVybiAxPT09byYmKGE9aSwoaT1mdW5jdGlvbihlKXtyZXR1cm4gUygpLm9mZihlKSxhLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pLmd1aWQ9YS5ndWlkfHwoYS5ndWlkPVMuZ3VpZCsrKSksZS5lYWNoKGZ1bmN0aW9uKCl7Uy5ldmVudC5hZGQodGhpcyx0LGkscixuKX0pfWZ1bmN0aW9uIFNlKGUsaSxvKXtvPyhZLnNldChlLGksITEpLFMuZXZlbnQuYWRkKGUsaSx7bmFtZXNwYWNlOiExLGhhbmRsZXI6ZnVuY3Rpb24oZSl7dmFyIHQsbixyPVkuZ2V0KHRoaXMsaSk7aWYoMSZlLmlzVHJpZ2dlciYmdGhpc1tpXSl7aWYoci5sZW5ndGgpKFMuZXZlbnQuc3BlY2lhbFtpXXx8e30pLmRlbGVnYXRlVHlwZSYmZS5zdG9wUHJvcGFnYXRpb24oKTtlbHNlIGlmKHI9cy5jYWxsKGFyZ3VtZW50cyksWS5zZXQodGhpcyxpLHIpLHQ9byh0aGlzLGkpLHRoaXNbaV0oKSxyIT09KG49WS5nZXQodGhpcyxpKSl8fHQ/WS5zZXQodGhpcyxpLCExKTpuPXt9LHIhPT1uKXJldHVybiBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLGUucHJldmVudERlZmF1bHQoKSxuJiZuLnZhbHVlfWVsc2Ugci5sZW5ndGgmJihZLnNldCh0aGlzLGkse3ZhbHVlOlMuZXZlbnQudHJpZ2dlcihTLmV4dGVuZChyWzBdLFMuRXZlbnQucHJvdG90eXBlKSxyLnNsaWNlKDEpLHRoaXMpfSksZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSl9fSkpOnZvaWQgMD09PVkuZ2V0KGUsaSkmJlMuZXZlbnQuYWRkKGUsaSx3ZSl9Uy5ldmVudD17Z2xvYmFsOnt9LGFkZDpmdW5jdGlvbih0LGUsbixyLGkpe3ZhciBvLGEscyx1LGwsYyxmLHAsZCxoLGcseT1ZLmdldCh0KTtpZihWKHQpKXtuLmhhbmRsZXImJihuPShvPW4pLmhhbmRsZXIsaT1vLnNlbGVjdG9yKSxpJiZTLmZpbmQubWF0Y2hlc1NlbGVjdG9yKHJlLGkpLG4uZ3VpZHx8KG4uZ3VpZD1TLmd1aWQrKyksKHU9eS5ldmVudHMpfHwodT15LmV2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpKSwoYT15LmhhbmRsZSl8fChhPXkuaGFuZGxlPWZ1bmN0aW9uKGUpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBTJiZTLmV2ZW50LnRyaWdnZXJlZCE9PWUudHlwZT9TLmV2ZW50LmRpc3BhdGNoLmFwcGx5KHQsYXJndW1lbnRzKTp2b2lkIDB9KSxsPShlPShlfHxcIlwiKS5tYXRjaChQKXx8W1wiXCJdKS5sZW5ndGg7d2hpbGUobC0tKWQ9Zz0ocz1iZS5leGVjKGVbbF0pfHxbXSlbMV0saD0oc1syXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxkJiYoZj1TLmV2ZW50LnNwZWNpYWxbZF18fHt9LGQ9KGk/Zi5kZWxlZ2F0ZVR5cGU6Zi5iaW5kVHlwZSl8fGQsZj1TLmV2ZW50LnNwZWNpYWxbZF18fHt9LGM9Uy5leHRlbmQoe3R5cGU6ZCxvcmlnVHlwZTpnLGRhdGE6cixoYW5kbGVyOm4sZ3VpZDpuLmd1aWQsc2VsZWN0b3I6aSxuZWVkc0NvbnRleHQ6aSYmUy5leHByLm1hdGNoLm5lZWRzQ29udGV4dC50ZXN0KGkpLG5hbWVzcGFjZTpoLmpvaW4oXCIuXCIpfSxvKSwocD11W2RdKXx8KChwPXVbZF09W10pLmRlbGVnYXRlQ291bnQ9MCxmLnNldHVwJiYhMSE9PWYuc2V0dXAuY2FsbCh0LHIsaCxhKXx8dC5hZGRFdmVudExpc3RlbmVyJiZ0LmFkZEV2ZW50TGlzdGVuZXIoZCxhKSksZi5hZGQmJihmLmFkZC5jYWxsKHQsYyksYy5oYW5kbGVyLmd1aWR8fChjLmhhbmRsZXIuZ3VpZD1uLmd1aWQpKSxpP3Auc3BsaWNlKHAuZGVsZWdhdGVDb3VudCsrLDAsYyk6cC5wdXNoKGMpLFMuZXZlbnQuZ2xvYmFsW2RdPSEwKX19LHJlbW92ZTpmdW5jdGlvbihlLHQsbixyLGkpe3ZhciBvLGEscyx1LGwsYyxmLHAsZCxoLGcseT1ZLmhhc0RhdGEoZSkmJlkuZ2V0KGUpO2lmKHkmJih1PXkuZXZlbnRzKSl7bD0odD0odHx8XCJcIikubWF0Y2goUCl8fFtcIlwiXSkubGVuZ3RoO3doaWxlKGwtLSlpZihkPWc9KHM9YmUuZXhlYyh0W2xdKXx8W10pWzFdLGg9KHNbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksZCl7Zj1TLmV2ZW50LnNwZWNpYWxbZF18fHt9LHA9dVtkPShyP2YuZGVsZWdhdGVUeXBlOmYuYmluZFR5cGUpfHxkXXx8W10scz1zWzJdJiZuZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIraC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIiksYT1vPXAubGVuZ3RoO3doaWxlKG8tLSljPXBbb10sIWkmJmchPT1jLm9yaWdUeXBlfHxuJiZuLmd1aWQhPT1jLmd1aWR8fHMmJiFzLnRlc3QoYy5uYW1lc3BhY2UpfHxyJiZyIT09Yy5zZWxlY3RvciYmKFwiKipcIiE9PXJ8fCFjLnNlbGVjdG9yKXx8KHAuc3BsaWNlKG8sMSksYy5zZWxlY3RvciYmcC5kZWxlZ2F0ZUNvdW50LS0sZi5yZW1vdmUmJmYucmVtb3ZlLmNhbGwoZSxjKSk7YSYmIXAubGVuZ3RoJiYoZi50ZWFyZG93biYmITEhPT1mLnRlYXJkb3duLmNhbGwoZSxoLHkuaGFuZGxlKXx8Uy5yZW1vdmVFdmVudChlLGQseS5oYW5kbGUpLGRlbGV0ZSB1W2RdKX1lbHNlIGZvcihkIGluIHUpUy5ldmVudC5yZW1vdmUoZSxkK3RbbF0sbixyLCEwKTtTLmlzRW1wdHlPYmplY3QodSkmJlkucmVtb3ZlKGUsXCJoYW5kbGUgZXZlbnRzXCIpfX0sZGlzcGF0Y2g6ZnVuY3Rpb24oZSl7dmFyIHQsbixyLGksbyxhLHM9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpLHU9Uy5ldmVudC5maXgoZSksbD0oWS5nZXQodGhpcyxcImV2ZW50c1wiKXx8T2JqZWN0LmNyZWF0ZShudWxsKSlbdS50eXBlXXx8W10sYz1TLmV2ZW50LnNwZWNpYWxbdS50eXBlXXx8e307Zm9yKHNbMF09dSx0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKylzW3RdPWFyZ3VtZW50c1t0XTtpZih1LmRlbGVnYXRlVGFyZ2V0PXRoaXMsIWMucHJlRGlzcGF0Y2h8fCExIT09Yy5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsdSkpe2E9Uy5ldmVudC5oYW5kbGVycy5jYWxsKHRoaXMsdSxsKSx0PTA7d2hpbGUoKGk9YVt0KytdKSYmIXUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSl7dS5jdXJyZW50VGFyZ2V0PWkuZWxlbSxuPTA7d2hpbGUoKG89aS5oYW5kbGVyc1tuKytdKSYmIXUuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSl1LnJuYW1lc3BhY2UmJiExIT09by5uYW1lc3BhY2UmJiF1LnJuYW1lc3BhY2UudGVzdChvLm5hbWVzcGFjZSl8fCh1LmhhbmRsZU9iaj1vLHUuZGF0YT1vLmRhdGEsdm9pZCAwIT09KHI9KChTLmV2ZW50LnNwZWNpYWxbby5vcmlnVHlwZV18fHt9KS5oYW5kbGV8fG8uaGFuZGxlcikuYXBwbHkoaS5lbGVtLHMpKSYmITE9PT0odS5yZXN1bHQ9cikmJih1LnByZXZlbnREZWZhdWx0KCksdS5zdG9wUHJvcGFnYXRpb24oKSkpfXJldHVybiBjLnBvc3REaXNwYXRjaCYmYy5wb3N0RGlzcGF0Y2guY2FsbCh0aGlzLHUpLHUucmVzdWx0fX0saGFuZGxlcnM6ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGksbyxhLHM9W10sdT10LmRlbGVnYXRlQ291bnQsbD1lLnRhcmdldDtpZih1JiZsLm5vZGVUeXBlJiYhKFwiY2xpY2tcIj09PWUudHlwZSYmMTw9ZS5idXR0b24pKWZvcig7bCE9PXRoaXM7bD1sLnBhcmVudE5vZGV8fHRoaXMpaWYoMT09PWwubm9kZVR5cGUmJihcImNsaWNrXCIhPT1lLnR5cGV8fCEwIT09bC5kaXNhYmxlZCkpe2ZvcihvPVtdLGE9e30sbj0wO248dTtuKyspdm9pZCAwPT09YVtpPShyPXRbbl0pLnNlbGVjdG9yK1wiIFwiXSYmKGFbaV09ci5uZWVkc0NvbnRleHQ/LTE8UyhpLHRoaXMpLmluZGV4KGwpOlMuZmluZChpLHRoaXMsbnVsbCxbbF0pLmxlbmd0aCksYVtpXSYmby5wdXNoKHIpO28ubGVuZ3RoJiZzLnB1c2goe2VsZW06bCxoYW5kbGVyczpvfSl9cmV0dXJuIGw9dGhpcyx1PHQubGVuZ3RoJiZzLnB1c2goe2VsZW06bCxoYW5kbGVyczp0LnNsaWNlKHUpfSksc30sYWRkUHJvcDpmdW5jdGlvbih0LGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShTLkV2ZW50LnByb3RvdHlwZSx0LHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6bShlKT9mdW5jdGlvbigpe2lmKHRoaXMub3JpZ2luYWxFdmVudClyZXR1cm4gZSh0aGlzLm9yaWdpbmFsRXZlbnQpfTpmdW5jdGlvbigpe2lmKHRoaXMub3JpZ2luYWxFdmVudClyZXR1cm4gdGhpcy5vcmlnaW5hbEV2ZW50W3RdfSxzZXQ6ZnVuY3Rpb24oZSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsdCx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ZX0pfX0pfSxmaXg6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbUy5leHBhbmRvXT9lOm5ldyBTLkV2ZW50KGUpfSxzcGVjaWFsOntsb2FkOntub0J1YmJsZTohMH0sY2xpY2s6e3NldHVwOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXN8fGU7cmV0dXJuIHBlLnRlc3QodC50eXBlKSYmdC5jbGljayYmQSh0LFwiaW5wdXRcIikmJlNlKHQsXCJjbGlja1wiLHdlKSwhMX0sdHJpZ2dlcjpmdW5jdGlvbihlKXt2YXIgdD10aGlzfHxlO3JldHVybiBwZS50ZXN0KHQudHlwZSkmJnQuY2xpY2smJkEodCxcImlucHV0XCIpJiZTZSh0LFwiY2xpY2tcIiksITB9LF9kZWZhdWx0OmZ1bmN0aW9uKGUpe3ZhciB0PWUudGFyZ2V0O3JldHVybiBwZS50ZXN0KHQudHlwZSkmJnQuY2xpY2smJkEodCxcImlucHV0XCIpJiZZLmdldCh0LFwiY2xpY2tcIil8fEEodCxcImFcIil9fSxiZWZvcmV1bmxvYWQ6e3Bvc3REaXNwYXRjaDpmdW5jdGlvbihlKXt2b2lkIDAhPT1lLnJlc3VsdCYmZS5vcmlnaW5hbEV2ZW50JiYoZS5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlPWUucmVzdWx0KX19fX0sUy5yZW1vdmVFdmVudD1mdW5jdGlvbihlLHQsbil7ZS5yZW1vdmVFdmVudExpc3RlbmVyJiZlLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxuKX0sUy5FdmVudD1mdW5jdGlvbihlLHQpe2lmKCEodGhpcyBpbnN0YW5jZW9mIFMuRXZlbnQpKXJldHVybiBuZXcgUy5FdmVudChlLHQpO2UmJmUudHlwZT8odGhpcy5vcmlnaW5hbEV2ZW50PWUsdGhpcy50eXBlPWUudHlwZSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1lLmRlZmF1bHRQcmV2ZW50ZWR8fHZvaWQgMD09PWUuZGVmYXVsdFByZXZlbnRlZCYmITE9PT1lLnJldHVyblZhbHVlP3dlOlRlLHRoaXMudGFyZ2V0PWUudGFyZ2V0JiYzPT09ZS50YXJnZXQubm9kZVR5cGU/ZS50YXJnZXQucGFyZW50Tm9kZTplLnRhcmdldCx0aGlzLmN1cnJlbnRUYXJnZXQ9ZS5jdXJyZW50VGFyZ2V0LHRoaXMucmVsYXRlZFRhcmdldD1lLnJlbGF0ZWRUYXJnZXQpOnRoaXMudHlwZT1lLHQmJlMuZXh0ZW5kKHRoaXMsdCksdGhpcy50aW1lU3RhbXA9ZSYmZS50aW1lU3RhbXB8fERhdGUubm93KCksdGhpc1tTLmV4cGFuZG9dPSEwfSxTLkV2ZW50LnByb3RvdHlwZT17Y29uc3RydWN0b3I6Uy5FdmVudCxpc0RlZmF1bHRQcmV2ZW50ZWQ6VGUsaXNQcm9wYWdhdGlvblN0b3BwZWQ6VGUsaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6VGUsaXNTaW11bGF0ZWQ6ITEscHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9d2UsZSYmIXRoaXMuaXNTaW11bGF0ZWQmJmUucHJldmVudERlZmF1bHQoKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9d2UsZSYmIXRoaXMuaXNTaW11bGF0ZWQmJmUuc3RvcFByb3BhZ2F0aW9uKCl9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkPXdlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLHRoaXMuc3RvcFByb3BhZ2F0aW9uKCl9fSxTLmVhY2goe2FsdEtleTohMCxidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsY2hhbmdlZFRvdWNoZXM6ITAsY3RybEtleTohMCxkZXRhaWw6ITAsZXZlbnRQaGFzZTohMCxtZXRhS2V5OiEwLHBhZ2VYOiEwLHBhZ2VZOiEwLHNoaWZ0S2V5OiEwLHZpZXc6ITAsXCJjaGFyXCI6ITAsY29kZTohMCxjaGFyQ29kZTohMCxrZXk6ITAsa2V5Q29kZTohMCxidXR0b246ITAsYnV0dG9uczohMCxjbGllbnRYOiEwLGNsaWVudFk6ITAsb2Zmc2V0WDohMCxvZmZzZXRZOiEwLHBvaW50ZXJJZDohMCxwb2ludGVyVHlwZTohMCxzY3JlZW5YOiEwLHNjcmVlblk6ITAsdGFyZ2V0VG91Y2hlczohMCx0b0VsZW1lbnQ6ITAsdG91Y2hlczohMCx3aGljaDohMH0sUy5ldmVudC5hZGRQcm9wKSxTLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbih0LGUpe1MuZXZlbnQuc3BlY2lhbFt0XT17c2V0dXA6ZnVuY3Rpb24oKXtyZXR1cm4gU2UodGhpcyx0LENlKSwhMX0sdHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiBTZSh0aGlzLHQpLCEwfSxfZGVmYXVsdDpmdW5jdGlvbihlKXtyZXR1cm4gWS5nZXQoZS50YXJnZXQsdCl9LGRlbGVnYXRlVHlwZTplfX0pLFMuZWFjaCh7bW91c2VlbnRlcjpcIm1vdXNlb3ZlclwiLG1vdXNlbGVhdmU6XCJtb3VzZW91dFwiLHBvaW50ZXJlbnRlcjpcInBvaW50ZXJvdmVyXCIscG9pbnRlcmxlYXZlOlwicG9pbnRlcm91dFwifSxmdW5jdGlvbihlLGkpe1MuZXZlbnQuc3BlY2lhbFtlXT17ZGVsZWdhdGVUeXBlOmksYmluZFR5cGU6aSxoYW5kbGU6ZnVuY3Rpb24oZSl7dmFyIHQsbj1lLnJlbGF0ZWRUYXJnZXQscj1lLmhhbmRsZU9iajtyZXR1cm4gbiYmKG49PT10aGlzfHxTLmNvbnRhaW5zKHRoaXMsbikpfHwoZS50eXBlPXIub3JpZ1R5cGUsdD1yLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpLGUudHlwZT1pKSx0fX19KSxTLmZuLmV4dGVuZCh7b246ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIEVlKHRoaXMsZSx0LG4scil9LG9uZTpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gRWUodGhpcyxlLHQsbixyLDEpfSxvZmY6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk7aWYoZSYmZS5wcmV2ZW50RGVmYXVsdCYmZS5oYW5kbGVPYmopcmV0dXJuIHI9ZS5oYW5kbGVPYmosUyhlLmRlbGVnYXRlVGFyZ2V0KS5vZmYoci5uYW1lc3BhY2U/ci5vcmlnVHlwZStcIi5cIityLm5hbWVzcGFjZTpyLm9yaWdUeXBlLHIuc2VsZWN0b3Isci5oYW5kbGVyKSx0aGlzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBlKXtmb3IoaSBpbiBlKXRoaXMub2ZmKGksdCxlW2ldKTtyZXR1cm4gdGhpc31yZXR1cm4hMSE9PXQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHR8fChuPXQsdD12b2lkIDApLCExPT09biYmKG49VGUpLHRoaXMuZWFjaChmdW5jdGlvbigpe1MuZXZlbnQucmVtb3ZlKHRoaXMsZSxuLHQpfSl9fSk7dmFyIGtlPS88c2NyaXB0fDxzdHlsZXw8bGluay9pLEFlPS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksTmU9L15cXHMqPCFcXFtDREFUQVxcW3xcXF1cXF0+XFxzKiQvZztmdW5jdGlvbiBqZShlLHQpe3JldHVybiBBKGUsXCJ0YWJsZVwiKSYmQSgxMSE9PXQubm9kZVR5cGU/dDp0LmZpcnN0Q2hpbGQsXCJ0clwiKSYmUyhlKS5jaGlsZHJlbihcInRib2R5XCIpWzBdfHxlfWZ1bmN0aW9uIERlKGUpe3JldHVybiBlLnR5cGU9KG51bGwhPT1lLmdldEF0dHJpYnV0ZShcInR5cGVcIikpK1wiL1wiK2UudHlwZSxlfWZ1bmN0aW9uIHFlKGUpe3JldHVyblwidHJ1ZS9cIj09PShlLnR5cGV8fFwiXCIpLnNsaWNlKDAsNSk/ZS50eXBlPWUudHlwZS5zbGljZSg1KTplLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIiksZX1mdW5jdGlvbiBMZShlLHQpe3ZhciBuLHIsaSxvLGEscztpZigxPT09dC5ub2RlVHlwZSl7aWYoWS5oYXNEYXRhKGUpJiYocz1ZLmdldChlKS5ldmVudHMpKWZvcihpIGluIFkucmVtb3ZlKHQsXCJoYW5kbGUgZXZlbnRzXCIpLHMpZm9yKG49MCxyPXNbaV0ubGVuZ3RoO248cjtuKyspUy5ldmVudC5hZGQodCxpLHNbaV1bbl0pO1EuaGFzRGF0YShlKSYmKG89US5hY2Nlc3MoZSksYT1TLmV4dGVuZCh7fSxvKSxRLnNldCh0LGEpKX19ZnVuY3Rpb24gSGUobixyLGksbyl7cj1nKHIpO3ZhciBlLHQsYSxzLHUsbCxjPTAsZj1uLmxlbmd0aCxwPWYtMSxkPXJbMF0saD1tKGQpO2lmKGh8fDE8ZiYmXCJzdHJpbmdcIj09dHlwZW9mIGQmJiF2LmNoZWNrQ2xvbmUmJkFlLnRlc3QoZCkpcmV0dXJuIG4uZWFjaChmdW5jdGlvbihlKXt2YXIgdD1uLmVxKGUpO2gmJihyWzBdPWQuY2FsbCh0aGlzLGUsdC5odG1sKCkpKSxIZSh0LHIsaSxvKX0pO2lmKGYmJih0PShlPXhlKHIsblswXS5vd25lckRvY3VtZW50LCExLG4sbykpLmZpcnN0Q2hpbGQsMT09PWUuY2hpbGROb2Rlcy5sZW5ndGgmJihlPXQpLHR8fG8pKXtmb3Iocz0oYT1TLm1hcCh5ZShlLFwic2NyaXB0XCIpLERlKSkubGVuZ3RoO2M8ZjtjKyspdT1lLGMhPT1wJiYodT1TLmNsb25lKHUsITAsITApLHMmJlMubWVyZ2UoYSx5ZSh1LFwic2NyaXB0XCIpKSksaS5jYWxsKG5bY10sdSxjKTtpZihzKWZvcihsPWFbYS5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxTLm1hcChhLHFlKSxjPTA7YzxzO2MrKyl1PWFbY10saGUudGVzdCh1LnR5cGV8fFwiXCIpJiYhWS5hY2Nlc3ModSxcImdsb2JhbEV2YWxcIikmJlMuY29udGFpbnMobCx1KSYmKHUuc3JjJiZcIm1vZHVsZVwiIT09KHUudHlwZXx8XCJcIikudG9Mb3dlckNhc2UoKT9TLl9ldmFsVXJsJiYhdS5ub01vZHVsZSYmUy5fZXZhbFVybCh1LnNyYyx7bm9uY2U6dS5ub25jZXx8dS5nZXRBdHRyaWJ1dGUoXCJub25jZVwiKX0sbCk6Yih1LnRleHRDb250ZW50LnJlcGxhY2UoTmUsXCJcIiksdSxsKSl9cmV0dXJuIG59ZnVuY3Rpb24gT2UoZSx0LG4pe2Zvcih2YXIgcixpPXQ/Uy5maWx0ZXIodCxlKTplLG89MDtudWxsIT0ocj1pW29dKTtvKyspbnx8MSE9PXIubm9kZVR5cGV8fFMuY2xlYW5EYXRhKHllKHIpKSxyLnBhcmVudE5vZGUmJihuJiZpZShyKSYmdmUoeWUocixcInNjcmlwdFwiKSksci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHIpKTtyZXR1cm4gZX1TLmV4dGVuZCh7aHRtbFByZWZpbHRlcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sY2xvbmU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHMsdSxsLGM9ZS5jbG9uZU5vZGUoITApLGY9aWUoZSk7aWYoISh2Lm5vQ2xvbmVDaGVja2VkfHwxIT09ZS5ub2RlVHlwZSYmMTEhPT1lLm5vZGVUeXBlfHxTLmlzWE1MRG9jKGUpKSlmb3IoYT15ZShjKSxyPTAsaT0obz15ZShlKSkubGVuZ3RoO3I8aTtyKyspcz1vW3JdLHU9YVtyXSx2b2lkIDAsXCJpbnB1dFwiPT09KGw9dS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSYmcGUudGVzdChzLnR5cGUpP3UuY2hlY2tlZD1zLmNoZWNrZWQ6XCJpbnB1dFwiIT09bCYmXCJ0ZXh0YXJlYVwiIT09bHx8KHUuZGVmYXVsdFZhbHVlPXMuZGVmYXVsdFZhbHVlKTtpZih0KWlmKG4pZm9yKG89b3x8eWUoZSksYT1hfHx5ZShjKSxyPTAsaT1vLmxlbmd0aDtyPGk7cisrKUxlKG9bcl0sYVtyXSk7ZWxzZSBMZShlLGMpO3JldHVybiAwPChhPXllKGMsXCJzY3JpcHRcIikpLmxlbmd0aCYmdmUoYSwhZiYmeWUoZSxcInNjcmlwdFwiKSksY30sY2xlYW5EYXRhOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxuLHIsaT1TLmV2ZW50LnNwZWNpYWwsbz0wO3ZvaWQgMCE9PShuPWVbb10pO28rKylpZihWKG4pKXtpZih0PW5bWS5leHBhbmRvXSl7aWYodC5ldmVudHMpZm9yKHIgaW4gdC5ldmVudHMpaVtyXT9TLmV2ZW50LnJlbW92ZShuLHIpOlMucmVtb3ZlRXZlbnQobixyLHQuaGFuZGxlKTtuW1kuZXhwYW5kb109dm9pZCAwfW5bUS5leHBhbmRvXSYmKG5bUS5leHBhbmRvXT12b2lkIDApfX19KSxTLmZuLmV4dGVuZCh7ZGV0YWNoOmZ1bmN0aW9uKGUpe3JldHVybiBPZSh0aGlzLGUsITApfSxyZW1vdmU6ZnVuY3Rpb24oZSl7cmV0dXJuIE9lKHRoaXMsZSl9LHRleHQ6ZnVuY3Rpb24oZSl7cmV0dXJuIEIodGhpcyxmdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwPT09ZT9TLnRleHQodGhpcyk6dGhpcy5lbXB0eSgpLmVhY2goZnVuY3Rpb24oKXsxIT09dGhpcy5ub2RlVHlwZSYmMTEhPT10aGlzLm5vZGVUeXBlJiY5IT09dGhpcy5ub2RlVHlwZXx8KHRoaXMudGV4dENvbnRlbnQ9ZSl9KX0sbnVsbCxlLGFyZ3VtZW50cy5sZW5ndGgpfSxhcHBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gSGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fGplKHRoaXMsZSkuYXBwZW5kQ2hpbGQoZSl9KX0scHJlcGVuZDpmdW5jdGlvbigpe3JldHVybiBIZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIHQ9amUodGhpcyxlKTt0Lmluc2VydEJlZm9yZShlLHQuZmlyc3RDaGlsZCl9fSl9LGJlZm9yZTpmdW5jdGlvbigpe3JldHVybiBIZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSx0aGlzKX0pfSxhZnRlcjpmdW5jdGlvbigpe3JldHVybiBIZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSx0aGlzLm5leHRTaWJsaW5nKX0pfSxlbXB0eTpmdW5jdGlvbigpe2Zvcih2YXIgZSx0PTA7bnVsbCE9KGU9dGhpc1t0XSk7dCsrKTE9PT1lLm5vZGVUeXBlJiYoUy5jbGVhbkRhdGEoeWUoZSwhMSkpLGUudGV4dENvbnRlbnQ9XCJcIik7cmV0dXJuIHRoaXN9LGNsb25lOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9bnVsbCE9ZSYmZSx0PW51bGw9PXQ/ZTp0LHRoaXMubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIFMuY2xvbmUodGhpcyxlLHQpfSl9LGh0bWw6ZnVuY3Rpb24oZSl7cmV0dXJuIEIodGhpcyxmdW5jdGlvbihlKXt2YXIgdD10aGlzWzBdfHx7fSxuPTAscj10aGlzLmxlbmd0aDtpZih2b2lkIDA9PT1lJiYxPT09dC5ub2RlVHlwZSlyZXR1cm4gdC5pbm5lckhUTUw7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJiFrZS50ZXN0KGUpJiYhZ2VbKGRlLmV4ZWMoZSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpXSl7ZT1TLmh0bWxQcmVmaWx0ZXIoZSk7dHJ5e2Zvcig7bjxyO24rKykxPT09KHQ9dGhpc1tuXXx8e30pLm5vZGVUeXBlJiYoUy5jbGVhbkRhdGEoeWUodCwhMSkpLHQuaW5uZXJIVE1MPWUpO3Q9MH1jYXRjaChlKXt9fXQmJnRoaXMuZW1wdHkoKS5hcHBlbmQoZSl9LG51bGwsZSxhcmd1bWVudHMubGVuZ3RoKX0scmVwbGFjZVdpdGg6ZnVuY3Rpb24oKXt2YXIgbj1bXTtyZXR1cm4gSGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5wYXJlbnROb2RlO1MuaW5BcnJheSh0aGlzLG4pPDAmJihTLmNsZWFuRGF0YSh5ZSh0aGlzKSksdCYmdC5yZXBsYWNlQ2hpbGQoZSx0aGlzKSl9LG4pfX0pLFMuZWFjaCh7YXBwZW5kVG86XCJhcHBlbmRcIixwcmVwZW5kVG86XCJwcmVwZW5kXCIsaW5zZXJ0QmVmb3JlOlwiYmVmb3JlXCIsaW5zZXJ0QWZ0ZXI6XCJhZnRlclwiLHJlcGxhY2VBbGw6XCJyZXBsYWNlV2l0aFwifSxmdW5jdGlvbihlLGEpe1MuZm5bZV09ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LG49W10scj1TKGUpLGk9ci5sZW5ndGgtMSxvPTA7bzw9aTtvKyspdD1vPT09aT90aGlzOnRoaXMuY2xvbmUoITApLFMocltvXSlbYV0odCksdS5hcHBseShuLHQuZ2V0KCkpO3JldHVybiB0aGlzLnB1c2hTdGFjayhuKX19KTt2YXIgUGU9bmV3IFJlZ0V4cChcIl4oXCIrZWUrXCIpKD8hcHgpW2EteiVdKyRcIixcImlcIiksUmU9L14tLS8sTWU9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O3JldHVybiB0JiZ0Lm9wZW5lcnx8KHQ9QyksdC5nZXRDb21wdXRlZFN0eWxlKGUpfSxJZT1mdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPXt9O2ZvcihpIGluIHQpb1tpXT1lLnN0eWxlW2ldLGUuc3R5bGVbaV09dFtpXTtmb3IoaSBpbiByPW4uY2FsbChlKSx0KWUuc3R5bGVbaV09b1tpXTtyZXR1cm4gcn0sV2U9bmV3IFJlZ0V4cChuZS5qb2luKFwifFwiKSxcImlcIiksRmU9XCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLCRlPW5ldyBSZWdFeHAoXCJeXCIrRmUrXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiK0ZlK1wiKyRcIixcImdcIik7ZnVuY3Rpb24gQmUoZSx0LG4pe3ZhciByLGksbyxhLHM9UmUudGVzdCh0KSx1PWUuc3R5bGU7cmV0dXJuKG49bnx8TWUoZSkpJiYoYT1uLmdldFByb3BlcnR5VmFsdWUodCl8fG5bdF0scyYmKGE9YS5yZXBsYWNlKCRlLFwiJDFcIikpLFwiXCIhPT1hfHxpZShlKXx8KGE9Uy5zdHlsZShlLHQpKSwhdi5waXhlbEJveFN0eWxlcygpJiZQZS50ZXN0KGEpJiZXZS50ZXN0KHQpJiYocj11LndpZHRoLGk9dS5taW5XaWR0aCxvPXUubWF4V2lkdGgsdS5taW5XaWR0aD11Lm1heFdpZHRoPXUud2lkdGg9YSxhPW4ud2lkdGgsdS53aWR0aD1yLHUubWluV2lkdGg9aSx1Lm1heFdpZHRoPW8pKSx2b2lkIDAhPT1hP2ErXCJcIjphfWZ1bmN0aW9uIF9lKGUsdCl7cmV0dXJue2dldDpmdW5jdGlvbigpe2lmKCFlKCkpcmV0dXJuKHRoaXMuZ2V0PXQpLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtkZWxldGUgdGhpcy5nZXR9fX0hZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7aWYobCl7dS5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246YWJzb2x1dGU7bGVmdDotMTExMTFweDt3aWR0aDo2MHB4O21hcmdpbi10b3A6MXB4O3BhZGRpbmc6MDtib3JkZXI6MFwiLGwuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94O292ZXJmbG93OnNjcm9sbDttYXJnaW46YXV0bztib3JkZXI6MXB4O3BhZGRpbmc6MXB4O3dpZHRoOjYwJTt0b3A6MSVcIixyZS5hcHBlbmRDaGlsZCh1KS5hcHBlbmRDaGlsZChsKTt2YXIgZT1DLmdldENvbXB1dGVkU3R5bGUobCk7bj1cIjElXCIhPT1lLnRvcCxzPTEyPT09dChlLm1hcmdpbkxlZnQpLGwuc3R5bGUucmlnaHQ9XCI2MCVcIixvPTM2PT09dChlLnJpZ2h0KSxyPTM2PT09dChlLndpZHRoKSxsLnN0eWxlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIixpPTEyPT09dChsLm9mZnNldFdpZHRoLzMpLHJlLnJlbW92ZUNoaWxkKHUpLGw9bnVsbH19ZnVuY3Rpb24gdChlKXtyZXR1cm4gTWF0aC5yb3VuZChwYXJzZUZsb2F0KGUpKX12YXIgbixyLGksbyxhLHMsdT1FLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksbD1FLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7bC5zdHlsZSYmKGwuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJjb250ZW50LWJveFwiLGwuY2xvbmVOb2RlKCEwKS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cIlwiLHYuY2xlYXJDbG9uZVN0eWxlPVwiY29udGVudC1ib3hcIj09PWwuc3R5bGUuYmFja2dyb3VuZENsaXAsUy5leHRlbmQodix7Ym94U2l6aW5nUmVsaWFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLHJ9LHBpeGVsQm94U3R5bGVzOmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxvfSxwaXhlbFBvc2l0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxufSxyZWxpYWJsZU1hcmdpbkxlZnQ6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLHN9LHNjcm9sbGJveFNpemU6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLGl9LHJlbGlhYmxlVHJEaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIGUsdCxuLHI7cmV0dXJuIG51bGw9PWEmJihlPUUuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpLHQ9RS5jcmVhdGVFbGVtZW50KFwidHJcIiksbj1FLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZS5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246YWJzb2x1dGU7bGVmdDotMTExMTFweDtib3JkZXItY29sbGFwc2U6c2VwYXJhdGVcIix0LnN0eWxlLmNzc1RleHQ9XCJib3JkZXI6MXB4IHNvbGlkXCIsdC5zdHlsZS5oZWlnaHQ9XCIxcHhcIixuLnN0eWxlLmhlaWdodD1cIjlweFwiLG4uc3R5bGUuZGlzcGxheT1cImJsb2NrXCIscmUuYXBwZW5kQ2hpbGQoZSkuYXBwZW5kQ2hpbGQodCkuYXBwZW5kQ2hpbGQobikscj1DLmdldENvbXB1dGVkU3R5bGUodCksYT1wYXJzZUludChyLmhlaWdodCwxMCkrcGFyc2VJbnQoci5ib3JkZXJUb3BXaWR0aCwxMCkrcGFyc2VJbnQoci5ib3JkZXJCb3R0b21XaWR0aCwxMCk9PT10Lm9mZnNldEhlaWdodCxyZS5yZW1vdmVDaGlsZChlKSksYX19KSl9KCk7dmFyIHplPVtcIldlYmtpdFwiLFwiTW96XCIsXCJtc1wiXSxVZT1FLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGUsWGU9e307ZnVuY3Rpb24gVmUoZSl7dmFyIHQ9Uy5jc3NQcm9wc1tlXXx8WGVbZV07cmV0dXJuIHR8fChlIGluIFVlP2U6WGVbZV09ZnVuY3Rpb24oZSl7dmFyIHQ9ZVswXS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSksbj16ZS5sZW5ndGg7d2hpbGUobi0tKWlmKChlPXplW25dK3QpaW4gVWUpcmV0dXJuIGV9KGUpfHxlKX12YXIgR2U9L14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvLFllPXtwb3NpdGlvbjpcImFic29sdXRlXCIsdmlzaWJpbGl0eTpcImhpZGRlblwiLGRpc3BsYXk6XCJibG9ja1wifSxRZT17bGV0dGVyU3BhY2luZzpcIjBcIixmb250V2VpZ2h0OlwiNDAwXCJ9O2Z1bmN0aW9uIEplKGUsdCxuKXt2YXIgcj10ZS5leGVjKHQpO3JldHVybiByP01hdGgubWF4KDAsclsyXS0obnx8MCkpKyhyWzNdfHxcInB4XCIpOnR9ZnVuY3Rpb24gS2UoZSx0LG4scixpLG8pe3ZhciBhPVwid2lkdGhcIj09PXQ/MTowLHM9MCx1PTA7aWYobj09PShyP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpKXJldHVybiAwO2Zvcig7YTw0O2ErPTIpXCJtYXJnaW5cIj09PW4mJih1Kz1TLmNzcyhlLG4rbmVbYV0sITAsaSkpLHI/KFwiY29udGVudFwiPT09biYmKHUtPVMuY3NzKGUsXCJwYWRkaW5nXCIrbmVbYV0sITAsaSkpLFwibWFyZ2luXCIhPT1uJiYodS09Uy5jc3MoZSxcImJvcmRlclwiK25lW2FdK1wiV2lkdGhcIiwhMCxpKSkpOih1Kz1TLmNzcyhlLFwicGFkZGluZ1wiK25lW2FdLCEwLGkpLFwicGFkZGluZ1wiIT09bj91Kz1TLmNzcyhlLFwiYm9yZGVyXCIrbmVbYV0rXCJXaWR0aFwiLCEwLGkpOnMrPVMuY3NzKGUsXCJib3JkZXJcIituZVthXStcIldpZHRoXCIsITAsaSkpO3JldHVybiFyJiYwPD1vJiYodSs9TWF0aC5tYXgoMCxNYXRoLmNlaWwoZVtcIm9mZnNldFwiK3RbMF0udG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpXS1vLXUtcy0uNSkpfHwwKSx1fWZ1bmN0aW9uIFplKGUsdCxuKXt2YXIgcj1NZShlKSxpPSghdi5ib3hTaXppbmdSZWxpYWJsZSgpfHxuKSYmXCJib3JkZXItYm94XCI9PT1TLmNzcyhlLFwiYm94U2l6aW5nXCIsITEsciksbz1pLGE9QmUoZSx0LHIpLHM9XCJvZmZzZXRcIit0WzBdLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKTtpZihQZS50ZXN0KGEpKXtpZighbilyZXR1cm4gYTthPVwiYXV0b1wifXJldHVybighdi5ib3hTaXppbmdSZWxpYWJsZSgpJiZpfHwhdi5yZWxpYWJsZVRyRGltZW5zaW9ucygpJiZBKGUsXCJ0clwiKXx8XCJhdXRvXCI9PT1hfHwhcGFyc2VGbG9hdChhKSYmXCJpbmxpbmVcIj09PVMuY3NzKGUsXCJkaXNwbGF5XCIsITEscikpJiZlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoJiYoaT1cImJvcmRlci1ib3hcIj09PVMuY3NzKGUsXCJib3hTaXppbmdcIiwhMSxyKSwobz1zIGluIGUpJiYoYT1lW3NdKSksKGE9cGFyc2VGbG9hdChhKXx8MCkrS2UoZSx0LG58fChpP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpLG8scixhKStcInB4XCJ9ZnVuY3Rpb24gZXQoZSx0LG4scixpKXtyZXR1cm4gbmV3IGV0LnByb3RvdHlwZS5pbml0KGUsdCxuLHIsaSl9Uy5leHRlbmQoe2Nzc0hvb2tzOntvcGFjaXR5OntnZXQ6ZnVuY3Rpb24oZSx0KXtpZih0KXt2YXIgbj1CZShlLFwib3BhY2l0eVwiKTtyZXR1cm5cIlwiPT09bj9cIjFcIjpufX19fSxjc3NOdW1iZXI6e2FuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiEwLGNvbHVtbkNvdW50OiEwLGZpbGxPcGFjaXR5OiEwLGZsZXhHcm93OiEwLGZsZXhTaHJpbms6ITAsZm9udFdlaWdodDohMCxncmlkQXJlYTohMCxncmlkQ29sdW1uOiEwLGdyaWRDb2x1bW5FbmQ6ITAsZ3JpZENvbHVtblN0YXJ0OiEwLGdyaWRSb3c6ITAsZ3JpZFJvd0VuZDohMCxncmlkUm93U3RhcnQ6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9yZGVyOiEwLG9ycGhhbnM6ITAsd2lkb3dzOiEwLHpJbmRleDohMCx6b29tOiEwfSxjc3NQcm9wczp7fSxzdHlsZTpmdW5jdGlvbihlLHQsbixyKXtpZihlJiYzIT09ZS5ub2RlVHlwZSYmOCE9PWUubm9kZVR5cGUmJmUuc3R5bGUpe3ZhciBpLG8sYSxzPVgodCksdT1SZS50ZXN0KHQpLGw9ZS5zdHlsZTtpZih1fHwodD1WZShzKSksYT1TLmNzc0hvb2tzW3RdfHxTLmNzc0hvb2tzW3NdLHZvaWQgMD09PW4pcmV0dXJuIGEmJlwiZ2V0XCJpbiBhJiZ2b2lkIDAhPT0oaT1hLmdldChlLCExLHIpKT9pOmxbdF07XCJzdHJpbmdcIj09PShvPXR5cGVvZiBuKSYmKGk9dGUuZXhlYyhuKSkmJmlbMV0mJihuPXNlKGUsdCxpKSxvPVwibnVtYmVyXCIpLG51bGwhPW4mJm49PW4mJihcIm51bWJlclwiIT09b3x8dXx8KG4rPWkmJmlbM118fChTLmNzc051bWJlcltzXT9cIlwiOlwicHhcIikpLHYuY2xlYXJDbG9uZVN0eWxlfHxcIlwiIT09bnx8MCE9PXQuaW5kZXhPZihcImJhY2tncm91bmRcIil8fChsW3RdPVwiaW5oZXJpdFwiKSxhJiZcInNldFwiaW4gYSYmdm9pZCAwPT09KG49YS5zZXQoZSxuLHIpKXx8KHU/bC5zZXRQcm9wZXJ0eSh0LG4pOmxbdF09bikpfX0sY3NzOmZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzPVgodCk7cmV0dXJuIFJlLnRlc3QodCl8fCh0PVZlKHMpKSwoYT1TLmNzc0hvb2tzW3RdfHxTLmNzc0hvb2tzW3NdKSYmXCJnZXRcImluIGEmJihpPWEuZ2V0KGUsITAsbikpLHZvaWQgMD09PWkmJihpPUJlKGUsdCxyKSksXCJub3JtYWxcIj09PWkmJnQgaW4gUWUmJihpPVFlW3RdKSxcIlwiPT09bnx8bj8obz1wYXJzZUZsb2F0KGkpLCEwPT09bnx8aXNGaW5pdGUobyk/b3x8MDppKTppfX0pLFMuZWFjaChbXCJoZWlnaHRcIixcIndpZHRoXCJdLGZ1bmN0aW9uKGUsdSl7Uy5jc3NIb29rc1t1XT17Z2V0OmZ1bmN0aW9uKGUsdCxuKXtpZih0KXJldHVybiFHZS50ZXN0KFMuY3NzKGUsXCJkaXNwbGF5XCIpKXx8ZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCYmZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aD9aZShlLHUsbik6SWUoZSxZZSxmdW5jdGlvbigpe3JldHVybiBaZShlLHUsbil9KX0sc2V0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpPU1lKGUpLG89IXYuc2Nyb2xsYm94U2l6ZSgpJiZcImFic29sdXRlXCI9PT1pLnBvc2l0aW9uLGE9KG98fG4pJiZcImJvcmRlci1ib3hcIj09PVMuY3NzKGUsXCJib3hTaXppbmdcIiwhMSxpKSxzPW4/S2UoZSx1LG4sYSxpKTowO3JldHVybiBhJiZvJiYocy09TWF0aC5jZWlsKGVbXCJvZmZzZXRcIit1WzBdLnRvVXBwZXJDYXNlKCkrdS5zbGljZSgxKV0tcGFyc2VGbG9hdChpW3VdKS1LZShlLHUsXCJib3JkZXJcIiwhMSxpKS0uNSkpLHMmJihyPXRlLmV4ZWModCkpJiZcInB4XCIhPT0oclszXXx8XCJweFwiKSYmKGUuc3R5bGVbdV09dCx0PVMuY3NzKGUsdSkpLEplKDAsdCxzKX19fSksUy5jc3NIb29rcy5tYXJnaW5MZWZ0PV9lKHYucmVsaWFibGVNYXJnaW5MZWZ0LGZ1bmN0aW9uKGUsdCl7aWYodClyZXR1cm4ocGFyc2VGbG9hdChCZShlLFwibWFyZ2luTGVmdFwiKSl8fGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdC1JZShlLHttYXJnaW5MZWZ0OjB9LGZ1bmN0aW9uKCl7cmV0dXJuIGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdH0pKStcInB4XCJ9KSxTLmVhY2goe21hcmdpbjpcIlwiLHBhZGRpbmc6XCJcIixib3JkZXI6XCJXaWR0aFwifSxmdW5jdGlvbihpLG8pe1MuY3NzSG9va3NbaStvXT17ZXhwYW5kOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLG49e30scj1cInN0cmluZ1wiPT10eXBlb2YgZT9lLnNwbGl0KFwiIFwiKTpbZV07dDw0O3QrKyluW2krbmVbdF0rb109clt0XXx8clt0LTJdfHxyWzBdO3JldHVybiBufX0sXCJtYXJnaW5cIiE9PWkmJihTLmNzc0hvb2tzW2krb10uc2V0PUplKX0pLFMuZm4uZXh0ZW5kKHtjc3M6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gQih0aGlzLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89e30sYT0wO2lmKEFycmF5LmlzQXJyYXkodCkpe2ZvcihyPU1lKGUpLGk9dC5sZW5ndGg7YTxpO2ErKylvW3RbYV1dPVMuY3NzKGUsdFthXSwhMSxyKTtyZXR1cm4gb31yZXR1cm4gdm9pZCAwIT09bj9TLnN0eWxlKGUsdCxuKTpTLmNzcyhlLHQpfSxlLHQsMTxhcmd1bWVudHMubGVuZ3RoKX19KSwoKFMuVHdlZW49ZXQpLnByb3RvdHlwZT17Y29uc3RydWN0b3I6ZXQsaW5pdDpmdW5jdGlvbihlLHQsbixyLGksbyl7dGhpcy5lbGVtPWUsdGhpcy5wcm9wPW4sdGhpcy5lYXNpbmc9aXx8Uy5lYXNpbmcuX2RlZmF1bHQsdGhpcy5vcHRpb25zPXQsdGhpcy5zdGFydD10aGlzLm5vdz10aGlzLmN1cigpLHRoaXMuZW5kPXIsdGhpcy51bml0PW98fChTLmNzc051bWJlcltuXT9cIlwiOlwicHhcIil9LGN1cjpmdW5jdGlvbigpe3ZhciBlPWV0LnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiBlJiZlLmdldD9lLmdldCh0aGlzKTpldC5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KHRoaXMpfSxydW46ZnVuY3Rpb24oZSl7dmFyIHQsbj1ldC5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gdGhpcy5vcHRpb25zLmR1cmF0aW9uP3RoaXMucG9zPXQ9Uy5lYXNpbmdbdGhpcy5lYXNpbmddKGUsdGhpcy5vcHRpb25zLmR1cmF0aW9uKmUsMCwxLHRoaXMub3B0aW9ucy5kdXJhdGlvbik6dGhpcy5wb3M9dD1lLHRoaXMubm93PSh0aGlzLmVuZC10aGlzLnN0YXJ0KSp0K3RoaXMuc3RhcnQsdGhpcy5vcHRpb25zLnN0ZXAmJnRoaXMub3B0aW9ucy5zdGVwLmNhbGwodGhpcy5lbGVtLHRoaXMubm93LHRoaXMpLG4mJm4uc2V0P24uc2V0KHRoaXMpOmV0LnByb3BIb29rcy5fZGVmYXVsdC5zZXQodGhpcyksdGhpc319KS5pbml0LnByb3RvdHlwZT1ldC5wcm90b3R5cGUsKGV0LnByb3BIb29rcz17X2RlZmF1bHQ6e2dldDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gMSE9PWUuZWxlbS5ub2RlVHlwZXx8bnVsbCE9ZS5lbGVtW2UucHJvcF0mJm51bGw9PWUuZWxlbS5zdHlsZVtlLnByb3BdP2UuZWxlbVtlLnByb3BdOih0PVMuY3NzKGUuZWxlbSxlLnByb3AsXCJcIikpJiZcImF1dG9cIiE9PXQ/dDowfSxzZXQ6ZnVuY3Rpb24oZSl7Uy5meC5zdGVwW2UucHJvcF0/Uy5meC5zdGVwW2UucHJvcF0oZSk6MSE9PWUuZWxlbS5ub2RlVHlwZXx8IVMuY3NzSG9va3NbZS5wcm9wXSYmbnVsbD09ZS5lbGVtLnN0eWxlW1ZlKGUucHJvcCldP2UuZWxlbVtlLnByb3BdPWUubm93OlMuc3R5bGUoZS5lbGVtLGUucHJvcCxlLm5vdytlLnVuaXQpfX19KS5zY3JvbGxUb3A9ZXQucHJvcEhvb2tzLnNjcm9sbExlZnQ9e3NldDpmdW5jdGlvbihlKXtlLmVsZW0ubm9kZVR5cGUmJmUuZWxlbS5wYXJlbnROb2RlJiYoZS5lbGVtW2UucHJvcF09ZS5ub3cpfX0sUy5lYXNpbmc9e2xpbmVhcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sc3dpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuLjUtTWF0aC5jb3MoZSpNYXRoLlBJKS8yfSxfZGVmYXVsdDpcInN3aW5nXCJ9LFMuZng9ZXQucHJvdG90eXBlLmluaXQsUy5meC5zdGVwPXt9O3ZhciB0dCxudCxydCxpdCxvdD0vXig/OnRvZ2dsZXxzaG93fGhpZGUpJC8sYXQ9L3F1ZXVlSG9va3MkLztmdW5jdGlvbiBzdCgpe250JiYoITE9PT1FLmhpZGRlbiYmQy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU/Qy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3QpOkMuc2V0VGltZW91dChzdCxTLmZ4LmludGVydmFsKSxTLmZ4LnRpY2soKSl9ZnVuY3Rpb24gdXQoKXtyZXR1cm4gQy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dHQ9dm9pZCAwfSksdHQ9RGF0ZS5ub3coKX1mdW5jdGlvbiBsdChlLHQpe3ZhciBuLHI9MCxpPXtoZWlnaHQ6ZX07Zm9yKHQ9dD8xOjA7cjw0O3IrPTItdClpW1wibWFyZ2luXCIrKG49bmVbcl0pXT1pW1wicGFkZGluZ1wiK25dPWU7cmV0dXJuIHQmJihpLm9wYWNpdHk9aS53aWR0aD1lKSxpfWZ1bmN0aW9uIGN0KGUsdCxuKXtmb3IodmFyIHIsaT0oZnQudHdlZW5lcnNbdF18fFtdKS5jb25jYXQoZnQudHdlZW5lcnNbXCIqXCJdKSxvPTAsYT1pLmxlbmd0aDtvPGE7bysrKWlmKHI9aVtvXS5jYWxsKG4sdCxlKSlyZXR1cm4gcn1mdW5jdGlvbiBmdChvLGUsdCl7dmFyIG4sYSxyPTAsaT1mdC5wcmVmaWx0ZXJzLmxlbmd0aCxzPVMuRGVmZXJyZWQoKS5hbHdheXMoZnVuY3Rpb24oKXtkZWxldGUgdS5lbGVtfSksdT1mdW5jdGlvbigpe2lmKGEpcmV0dXJuITE7Zm9yKHZhciBlPXR0fHx1dCgpLHQ9TWF0aC5tYXgoMCxsLnN0YXJ0VGltZStsLmR1cmF0aW9uLWUpLG49MS0odC9sLmR1cmF0aW9ufHwwKSxyPTAsaT1sLnR3ZWVucy5sZW5ndGg7cjxpO3IrKylsLnR3ZWVuc1tyXS5ydW4obik7cmV0dXJuIHMubm90aWZ5V2l0aChvLFtsLG4sdF0pLG48MSYmaT90OihpfHxzLm5vdGlmeVdpdGgobyxbbCwxLDBdKSxzLnJlc29sdmVXaXRoKG8sW2xdKSwhMSl9LGw9cy5wcm9taXNlKHtlbGVtOm8scHJvcHM6Uy5leHRlbmQoe30sZSksb3B0czpTLmV4dGVuZCghMCx7c3BlY2lhbEVhc2luZzp7fSxlYXNpbmc6Uy5lYXNpbmcuX2RlZmF1bHR9LHQpLG9yaWdpbmFsUHJvcGVydGllczplLG9yaWdpbmFsT3B0aW9uczp0LHN0YXJ0VGltZTp0dHx8dXQoKSxkdXJhdGlvbjp0LmR1cmF0aW9uLHR3ZWVuczpbXSxjcmVhdGVUd2VlbjpmdW5jdGlvbihlLHQpe3ZhciBuPVMuVHdlZW4obyxsLm9wdHMsZSx0LGwub3B0cy5zcGVjaWFsRWFzaW5nW2VdfHxsLm9wdHMuZWFzaW5nKTtyZXR1cm4gbC50d2VlbnMucHVzaChuKSxufSxzdG9wOmZ1bmN0aW9uKGUpe3ZhciB0PTAsbj1lP2wudHdlZW5zLmxlbmd0aDowO2lmKGEpcmV0dXJuIHRoaXM7Zm9yKGE9ITA7dDxuO3QrKylsLnR3ZWVuc1t0XS5ydW4oMSk7cmV0dXJuIGU/KHMubm90aWZ5V2l0aChvLFtsLDEsMF0pLHMucmVzb2x2ZVdpdGgobyxbbCxlXSkpOnMucmVqZWN0V2l0aChvLFtsLGVdKSx0aGlzfX0pLGM9bC5wcm9wcztmb3IoIWZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLG8sYTtmb3IobiBpbiBlKWlmKGk9dFtyPVgobildLG89ZVtuXSxBcnJheS5pc0FycmF5KG8pJiYoaT1vWzFdLG89ZVtuXT1vWzBdKSxuIT09ciYmKGVbcl09byxkZWxldGUgZVtuXSksKGE9Uy5jc3NIb29rc1tyXSkmJlwiZXhwYW5kXCJpbiBhKWZvcihuIGluIG89YS5leHBhbmQobyksZGVsZXRlIGVbcl0sbyluIGluIGV8fChlW25dPW9bbl0sdFtuXT1pKTtlbHNlIHRbcl09aX0oYyxsLm9wdHMuc3BlY2lhbEVhc2luZyk7cjxpO3IrKylpZihuPWZ0LnByZWZpbHRlcnNbcl0uY2FsbChsLG8sYyxsLm9wdHMpKXJldHVybiBtKG4uc3RvcCkmJihTLl9xdWV1ZUhvb2tzKGwuZWxlbSxsLm9wdHMucXVldWUpLnN0b3A9bi5zdG9wLmJpbmQobikpLG47cmV0dXJuIFMubWFwKGMsY3QsbCksbShsLm9wdHMuc3RhcnQpJiZsLm9wdHMuc3RhcnQuY2FsbChvLGwpLGwucHJvZ3Jlc3MobC5vcHRzLnByb2dyZXNzKS5kb25lKGwub3B0cy5kb25lLGwub3B0cy5jb21wbGV0ZSkuZmFpbChsLm9wdHMuZmFpbCkuYWx3YXlzKGwub3B0cy5hbHdheXMpLFMuZngudGltZXIoUy5leHRlbmQodSx7ZWxlbTpvLGFuaW06bCxxdWV1ZTpsLm9wdHMucXVldWV9KSksbH1TLkFuaW1hdGlvbj1TLmV4dGVuZChmdCx7dHdlZW5lcnM6e1wiKlwiOltmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMuY3JlYXRlVHdlZW4oZSx0KTtyZXR1cm4gc2Uobi5lbGVtLGUsdGUuZXhlYyh0KSxuKSxufV19LHR3ZWVuZXI6ZnVuY3Rpb24oZSx0KXttKGUpPyh0PWUsZT1bXCIqXCJdKTplPWUubWF0Y2goUCk7Zm9yKHZhciBuLHI9MCxpPWUubGVuZ3RoO3I8aTtyKyspbj1lW3JdLGZ0LnR3ZWVuZXJzW25dPWZ0LnR3ZWVuZXJzW25dfHxbXSxmdC50d2VlbmVyc1tuXS51bnNoaWZ0KHQpfSxwcmVmaWx0ZXJzOltmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscyx1LGwsYyxmPVwid2lkdGhcImluIHR8fFwiaGVpZ2h0XCJpbiB0LHA9dGhpcyxkPXt9LGg9ZS5zdHlsZSxnPWUubm9kZVR5cGUmJmFlKGUpLHk9WS5nZXQoZSxcImZ4c2hvd1wiKTtmb3IociBpbiBuLnF1ZXVlfHwobnVsbD09KGE9Uy5fcXVldWVIb29rcyhlLFwiZnhcIikpLnVucXVldWVkJiYoYS51bnF1ZXVlZD0wLHM9YS5lbXB0eS5maXJlLGEuZW1wdHkuZmlyZT1mdW5jdGlvbigpe2EudW5xdWV1ZWR8fHMoKX0pLGEudW5xdWV1ZWQrKyxwLmFsd2F5cyhmdW5jdGlvbigpe3AuYWx3YXlzKGZ1bmN0aW9uKCl7YS51bnF1ZXVlZC0tLFMucXVldWUoZSxcImZ4XCIpLmxlbmd0aHx8YS5lbXB0eS5maXJlKCl9KX0pKSx0KWlmKGk9dFtyXSxvdC50ZXN0KGkpKXtpZihkZWxldGUgdFtyXSxvPW98fFwidG9nZ2xlXCI9PT1pLGk9PT0oZz9cImhpZGVcIjpcInNob3dcIikpe2lmKFwic2hvd1wiIT09aXx8IXl8fHZvaWQgMD09PXlbcl0pY29udGludWU7Zz0hMH1kW3JdPXkmJnlbcl18fFMuc3R5bGUoZSxyKX1pZigodT0hUy5pc0VtcHR5T2JqZWN0KHQpKXx8IVMuaXNFbXB0eU9iamVjdChkKSlmb3IociBpbiBmJiYxPT09ZS5ub2RlVHlwZSYmKG4ub3ZlcmZsb3c9W2gub3ZlcmZsb3csaC5vdmVyZmxvd1gsaC5vdmVyZmxvd1ldLG51bGw9PShsPXkmJnkuZGlzcGxheSkmJihsPVkuZ2V0KGUsXCJkaXNwbGF5XCIpKSxcIm5vbmVcIj09PShjPVMuY3NzKGUsXCJkaXNwbGF5XCIpKSYmKGw/Yz1sOihsZShbZV0sITApLGw9ZS5zdHlsZS5kaXNwbGF5fHxsLGM9Uy5jc3MoZSxcImRpc3BsYXlcIiksbGUoW2VdKSkpLChcImlubGluZVwiPT09Y3x8XCJpbmxpbmUtYmxvY2tcIj09PWMmJm51bGwhPWwpJiZcIm5vbmVcIj09PVMuY3NzKGUsXCJmbG9hdFwiKSYmKHV8fChwLmRvbmUoZnVuY3Rpb24oKXtoLmRpc3BsYXk9bH0pLG51bGw9PWwmJihjPWguZGlzcGxheSxsPVwibm9uZVwiPT09Yz9cIlwiOmMpKSxoLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIikpLG4ub3ZlcmZsb3cmJihoLm92ZXJmbG93PVwiaGlkZGVuXCIscC5hbHdheXMoZnVuY3Rpb24oKXtoLm92ZXJmbG93PW4ub3ZlcmZsb3dbMF0saC5vdmVyZmxvd1g9bi5vdmVyZmxvd1sxXSxoLm92ZXJmbG93WT1uLm92ZXJmbG93WzJdfSkpLHU9ITEsZCl1fHwoeT9cImhpZGRlblwiaW4geSYmKGc9eS5oaWRkZW4pOnk9WS5hY2Nlc3MoZSxcImZ4c2hvd1wiLHtkaXNwbGF5Omx9KSxvJiYoeS5oaWRkZW49IWcpLGcmJmxlKFtlXSwhMCkscC5kb25lKGZ1bmN0aW9uKCl7Zm9yKHIgaW4gZ3x8bGUoW2VdKSxZLnJlbW92ZShlLFwiZnhzaG93XCIpLGQpUy5zdHlsZShlLHIsZFtyXSl9KSksdT1jdChnP3lbcl06MCxyLHApLHIgaW4geXx8KHlbcl09dS5zdGFydCxnJiYodS5lbmQ9dS5zdGFydCx1LnN0YXJ0PTApKX1dLHByZWZpbHRlcjpmdW5jdGlvbihlLHQpe3Q/ZnQucHJlZmlsdGVycy51bnNoaWZ0KGUpOmZ0LnByZWZpbHRlcnMucHVzaChlKX19KSxTLnNwZWVkPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1lJiZcIm9iamVjdFwiPT10eXBlb2YgZT9TLmV4dGVuZCh7fSxlKTp7Y29tcGxldGU6bnx8IW4mJnR8fG0oZSkmJmUsZHVyYXRpb246ZSxlYXNpbmc6biYmdHx8dCYmIW0odCkmJnR9O3JldHVybiBTLmZ4Lm9mZj9yLmR1cmF0aW9uPTA6XCJudW1iZXJcIiE9dHlwZW9mIHIuZHVyYXRpb24mJihyLmR1cmF0aW9uIGluIFMuZnguc3BlZWRzP3IuZHVyYXRpb249Uy5meC5zcGVlZHNbci5kdXJhdGlvbl06ci5kdXJhdGlvbj1TLmZ4LnNwZWVkcy5fZGVmYXVsdCksbnVsbCE9ci5xdWV1ZSYmITAhPT1yLnF1ZXVlfHwoci5xdWV1ZT1cImZ4XCIpLHIub2xkPXIuY29tcGxldGUsci5jb21wbGV0ZT1mdW5jdGlvbigpe20oci5vbGQpJiZyLm9sZC5jYWxsKHRoaXMpLHIucXVldWUmJlMuZGVxdWV1ZSh0aGlzLHIucXVldWUpfSxyfSxTLmZuLmV4dGVuZCh7ZmFkZVRvOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiB0aGlzLmZpbHRlcihhZSkuY3NzKFwib3BhY2l0eVwiLDApLnNob3coKS5lbmQoKS5hbmltYXRlKHtvcGFjaXR5OnR9LGUsbixyKX0sYW5pbWF0ZTpmdW5jdGlvbih0LGUsbixyKXt2YXIgaT1TLmlzRW1wdHlPYmplY3QodCksbz1TLnNwZWVkKGUsbixyKSxhPWZ1bmN0aW9uKCl7dmFyIGU9ZnQodGhpcyxTLmV4dGVuZCh7fSx0KSxvKTsoaXx8WS5nZXQodGhpcyxcImZpbmlzaFwiKSkmJmUuc3RvcCghMCl9O3JldHVybiBhLmZpbmlzaD1hLGl8fCExPT09by5xdWV1ZT90aGlzLmVhY2goYSk6dGhpcy5xdWV1ZShvLnF1ZXVlLGEpfSxzdG9wOmZ1bmN0aW9uKGksZSxvKXt2YXIgYT1mdW5jdGlvbihlKXt2YXIgdD1lLnN0b3A7ZGVsZXRlIGUuc3RvcCx0KG8pfTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgaSYmKG89ZSxlPWksaT12b2lkIDApLGUmJnRoaXMucXVldWUoaXx8XCJmeFwiLFtdKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT0hMCx0PW51bGwhPWkmJmkrXCJxdWV1ZUhvb2tzXCIsbj1TLnRpbWVycyxyPVkuZ2V0KHRoaXMpO2lmKHQpclt0XSYmclt0XS5zdG9wJiZhKHJbdF0pO2Vsc2UgZm9yKHQgaW4gcilyW3RdJiZyW3RdLnN0b3AmJmF0LnRlc3QodCkmJmEoclt0XSk7Zm9yKHQ9bi5sZW5ndGg7dC0tOyluW3RdLmVsZW0hPT10aGlzfHxudWxsIT1pJiZuW3RdLnF1ZXVlIT09aXx8KG5bdF0uYW5pbS5zdG9wKG8pLGU9ITEsbi5zcGxpY2UodCwxKSk7IWUmJm98fFMuZGVxdWV1ZSh0aGlzLGkpfSl9LGZpbmlzaDpmdW5jdGlvbihhKXtyZXR1cm4hMSE9PWEmJihhPWF8fFwiZnhcIiksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGUsdD1ZLmdldCh0aGlzKSxuPXRbYStcInF1ZXVlXCJdLHI9dFthK1wicXVldWVIb29rc1wiXSxpPVMudGltZXJzLG89bj9uLmxlbmd0aDowO2Zvcih0LmZpbmlzaD0hMCxTLnF1ZXVlKHRoaXMsYSxbXSksciYmci5zdG9wJiZyLnN0b3AuY2FsbCh0aGlzLCEwKSxlPWkubGVuZ3RoO2UtLTspaVtlXS5lbGVtPT09dGhpcyYmaVtlXS5xdWV1ZT09PWEmJihpW2VdLmFuaW0uc3RvcCghMCksaS5zcGxpY2UoZSwxKSk7Zm9yKGU9MDtlPG87ZSsrKW5bZV0mJm5bZV0uZmluaXNoJiZuW2VdLmZpbmlzaC5jYWxsKHRoaXMpO2RlbGV0ZSB0LmZpbmlzaH0pfX0pLFMuZWFjaChbXCJ0b2dnbGVcIixcInNob3dcIixcImhpZGVcIl0sZnVuY3Rpb24oZSxyKXt2YXIgaT1TLmZuW3JdO1MuZm5bcl09ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBudWxsPT1lfHxcImJvb2xlYW5cIj09dHlwZW9mIGU/aS5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dGhpcy5hbmltYXRlKGx0KHIsITApLGUsdCxuKX19KSxTLmVhY2goe3NsaWRlRG93bjpsdChcInNob3dcIiksc2xpZGVVcDpsdChcImhpZGVcIiksc2xpZGVUb2dnbGU6bHQoXCJ0b2dnbGVcIiksZmFkZUluOntvcGFjaXR5Olwic2hvd1wifSxmYWRlT3V0OntvcGFjaXR5OlwiaGlkZVwifSxmYWRlVG9nZ2xlOntvcGFjaXR5OlwidG9nZ2xlXCJ9fSxmdW5jdGlvbihlLHIpe1MuZm5bZV09ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB0aGlzLmFuaW1hdGUocixlLHQsbil9fSksUy50aW1lcnM9W10sUy5meC50aWNrPWZ1bmN0aW9uKCl7dmFyIGUsdD0wLG49Uy50aW1lcnM7Zm9yKHR0PURhdGUubm93KCk7dDxuLmxlbmd0aDt0KyspKGU9blt0XSkoKXx8blt0XSE9PWV8fG4uc3BsaWNlKHQtLSwxKTtuLmxlbmd0aHx8Uy5meC5zdG9wKCksdHQ9dm9pZCAwfSxTLmZ4LnRpbWVyPWZ1bmN0aW9uKGUpe1MudGltZXJzLnB1c2goZSksUy5meC5zdGFydCgpfSxTLmZ4LmludGVydmFsPTEzLFMuZnguc3RhcnQ9ZnVuY3Rpb24oKXtudHx8KG50PSEwLHN0KCkpfSxTLmZ4LnN0b3A9ZnVuY3Rpb24oKXtudD1udWxsfSxTLmZ4LnNwZWVkcz17c2xvdzo2MDAsZmFzdDoyMDAsX2RlZmF1bHQ6NDAwfSxTLmZuLmRlbGF5PWZ1bmN0aW9uKHIsZSl7cmV0dXJuIHI9Uy5meCYmUy5meC5zcGVlZHNbcl18fHIsZT1lfHxcImZ4XCIsdGhpcy5xdWV1ZShlLGZ1bmN0aW9uKGUsdCl7dmFyIG49Qy5zZXRUaW1lb3V0KGUscik7dC5zdG9wPWZ1bmN0aW9uKCl7Qy5jbGVhclRpbWVvdXQobil9fSl9LHJ0PUUuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGl0PUUuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKS5hcHBlbmRDaGlsZChFLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikpLHJ0LnR5cGU9XCJjaGVja2JveFwiLHYuY2hlY2tPbj1cIlwiIT09cnQudmFsdWUsdi5vcHRTZWxlY3RlZD1pdC5zZWxlY3RlZCwocnQ9RS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpLnZhbHVlPVwidFwiLHJ0LnR5cGU9XCJyYWRpb1wiLHYucmFkaW9WYWx1ZT1cInRcIj09PXJ0LnZhbHVlO3ZhciBwdCxkdD1TLmV4cHIuYXR0ckhhbmRsZTtTLmZuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihlLHQpe3JldHVybiBCKHRoaXMsUy5hdHRyLGUsdCwxPGFyZ3VtZW50cy5sZW5ndGgpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtTLnJlbW92ZUF0dHIodGhpcyxlKX0pfX0pLFMuZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89ZS5ub2RlVHlwZTtpZigzIT09byYmOCE9PW8mJjIhPT1vKXJldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBlLmdldEF0dHJpYnV0ZT9TLnByb3AoZSx0LG4pOigxPT09byYmUy5pc1hNTERvYyhlKXx8KGk9Uy5hdHRySG9va3NbdC50b0xvd2VyQ2FzZSgpXXx8KFMuZXhwci5tYXRjaC5ib29sLnRlc3QodCk/cHQ6dm9pZCAwKSksdm9pZCAwIT09bj9udWxsPT09bj92b2lkIFMucmVtb3ZlQXR0cihlLHQpOmkmJlwic2V0XCJpbiBpJiZ2b2lkIDAhPT0ocj1pLnNldChlLG4sdCkpP3I6KGUuc2V0QXR0cmlidXRlKHQsbitcIlwiKSxuKTppJiZcImdldFwiaW4gaSYmbnVsbCE9PShyPWkuZ2V0KGUsdCkpP3I6bnVsbD09KHI9Uy5maW5kLmF0dHIoZSx0KSk/dm9pZCAwOnIpfSxhdHRySG9va3M6e3R5cGU6e3NldDpmdW5jdGlvbihlLHQpe2lmKCF2LnJhZGlvVmFsdWUmJlwicmFkaW9cIj09PXQmJkEoZSxcImlucHV0XCIpKXt2YXIgbj1lLnZhbHVlO3JldHVybiBlLnNldEF0dHJpYnV0ZShcInR5cGVcIix0KSxuJiYoZS52YWx1ZT1uKSx0fX19fSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0wLGk9dCYmdC5tYXRjaChQKTtpZihpJiYxPT09ZS5ub2RlVHlwZSl3aGlsZShuPWlbcisrXSllLnJlbW92ZUF0dHJpYnV0ZShuKX19KSxwdD17c2V0OmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4hMT09PXQ/Uy5yZW1vdmVBdHRyKGUsbik6ZS5zZXRBdHRyaWJ1dGUobixuKSxufX0sUy5lYWNoKFMuZXhwci5tYXRjaC5ib29sLnNvdXJjZS5tYXRjaCgvXFx3Ky9nKSxmdW5jdGlvbihlLHQpe3ZhciBhPWR0W3RdfHxTLmZpbmQuYXR0cjtkdFt0XT1mdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPXQudG9Mb3dlckNhc2UoKTtyZXR1cm4gbnx8KGk9ZHRbb10sZHRbb109cixyPW51bGwhPWEoZSx0LG4pP286bnVsbCxkdFtvXT1pKSxyfX0pO3ZhciBodD0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLGd0PS9eKD86YXxhcmVhKSQvaTtmdW5jdGlvbiB5dChlKXtyZXR1cm4oZS5tYXRjaChQKXx8W10pLmpvaW4oXCIgXCIpfWZ1bmN0aW9uIHZ0KGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZSYmZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIn1mdW5jdGlvbiBtdChlKXtyZXR1cm4gQXJyYXkuaXNBcnJheShlKT9lOlwic3RyaW5nXCI9PXR5cGVvZiBlJiZlLm1hdGNoKFApfHxbXX1TLmZuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihlLHQpe3JldHVybiBCKHRoaXMsUy5wcm9wLGUsdCwxPGFyZ3VtZW50cy5sZW5ndGgpfSxyZW1vdmVQcm9wOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtkZWxldGUgdGhpc1tTLnByb3BGaXhbZV18fGVdfSl9fSksUy5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz1lLm5vZGVUeXBlO2lmKDMhPT1vJiY4IT09byYmMiE9PW8pcmV0dXJuIDE9PT1vJiZTLmlzWE1MRG9jKGUpfHwodD1TLnByb3BGaXhbdF18fHQsaT1TLnByb3BIb29rc1t0XSksdm9pZCAwIT09bj9pJiZcInNldFwiaW4gaSYmdm9pZCAwIT09KHI9aS5zZXQoZSxuLHQpKT9yOmVbdF09bjppJiZcImdldFwiaW4gaSYmbnVsbCE9PShyPWkuZ2V0KGUsdCkpP3I6ZVt0XX0scHJvcEhvb2tzOnt0YWJJbmRleDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0PVMuZmluZC5hdHRyKGUsXCJ0YWJpbmRleFwiKTtyZXR1cm4gdD9wYXJzZUludCh0LDEwKTpodC50ZXN0KGUubm9kZU5hbWUpfHxndC50ZXN0KGUubm9kZU5hbWUpJiZlLmhyZWY/MDotMX19fSxwcm9wRml4OntcImZvclwiOlwiaHRtbEZvclwiLFwiY2xhc3NcIjpcImNsYXNzTmFtZVwifX0pLHYub3B0U2VsZWN0ZWR8fChTLnByb3BIb29rcy5zZWxlY3RlZD17Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTtyZXR1cm4gdCYmdC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxudWxsfSxzZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnROb2RlO3QmJih0LnNlbGVjdGVkSW5kZXgsdC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCl9fSksUy5lYWNoKFtcInRhYkluZGV4XCIsXCJyZWFkT25seVwiLFwibWF4TGVuZ3RoXCIsXCJjZWxsU3BhY2luZ1wiLFwiY2VsbFBhZGRpbmdcIixcInJvd1NwYW5cIixcImNvbFNwYW5cIixcInVzZU1hcFwiLFwiZnJhbWVCb3JkZXJcIixcImNvbnRlbnRFZGl0YWJsZVwiXSxmdW5jdGlvbigpe1MucHJvcEZpeFt0aGlzLnRvTG93ZXJDYXNlKCldPXRoaXN9KSxTLmZuLmV4dGVuZCh7YWRkQ2xhc3M6ZnVuY3Rpb24odCl7dmFyIGUsbixyLGksbyxhO3JldHVybiBtKHQpP3RoaXMuZWFjaChmdW5jdGlvbihlKXtTKHRoaXMpLmFkZENsYXNzKHQuY2FsbCh0aGlzLGUsdnQodGhpcykpKX0pOihlPW10KHQpKS5sZW5ndGg/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7aWYocj12dCh0aGlzKSxuPTE9PT10aGlzLm5vZGVUeXBlJiZcIiBcIit5dChyKStcIiBcIil7Zm9yKG89MDtvPGUubGVuZ3RoO28rKylpPWVbb10sbi5pbmRleE9mKFwiIFwiK2krXCIgXCIpPDAmJihuKz1pK1wiIFwiKTthPXl0KG4pLHIhPT1hJiZ0aGlzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsYSl9fSk6dGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24odCl7dmFyIGUsbixyLGksbyxhO3JldHVybiBtKHQpP3RoaXMuZWFjaChmdW5jdGlvbihlKXtTKHRoaXMpLnJlbW92ZUNsYXNzKHQuY2FsbCh0aGlzLGUsdnQodGhpcykpKX0pOmFyZ3VtZW50cy5sZW5ndGg/KGU9bXQodCkpLmxlbmd0aD90aGlzLmVhY2goZnVuY3Rpb24oKXtpZihyPXZ0KHRoaXMpLG49MT09PXRoaXMubm9kZVR5cGUmJlwiIFwiK3l0KHIpK1wiIFwiKXtmb3Iobz0wO288ZS5sZW5ndGg7bysrKXtpPWVbb107d2hpbGUoLTE8bi5pbmRleE9mKFwiIFwiK2krXCIgXCIpKW49bi5yZXBsYWNlKFwiIFwiK2krXCIgXCIsXCIgXCIpfWE9eXQobiksciE9PWEmJnRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixhKX19KTp0aGlzOnRoaXMuYXR0cihcImNsYXNzXCIsXCJcIil9LHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKHQsbil7dmFyIGUscixpLG8sYT10eXBlb2YgdCxzPVwic3RyaW5nXCI9PT1hfHxBcnJheS5pc0FycmF5KHQpO3JldHVybiBtKHQpP3RoaXMuZWFjaChmdW5jdGlvbihlKXtTKHRoaXMpLnRvZ2dsZUNsYXNzKHQuY2FsbCh0aGlzLGUsdnQodGhpcyksbiksbil9KTpcImJvb2xlYW5cIj09dHlwZW9mIG4mJnM/bj90aGlzLmFkZENsYXNzKHQpOnRoaXMucmVtb3ZlQ2xhc3ModCk6KGU9bXQodCksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7aWYocylmb3Iobz1TKHRoaXMpLGk9MDtpPGUubGVuZ3RoO2krKylyPWVbaV0sby5oYXNDbGFzcyhyKT9vLnJlbW92ZUNsYXNzKHIpOm8uYWRkQ2xhc3Mocik7ZWxzZSB2b2lkIDAhPT10JiZcImJvb2xlYW5cIiE9PWF8fCgocj12dCh0aGlzKSkmJlkuc2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIsciksdGhpcy5zZXRBdHRyaWJ1dGUmJnRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixyfHwhMT09PXQ/XCJcIjpZLmdldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiKXx8XCJcIikpfSkpfSxoYXNDbGFzczpmdW5jdGlvbihlKXt2YXIgdCxuLHI9MDt0PVwiIFwiK2UrXCIgXCI7d2hpbGUobj10aGlzW3IrK10paWYoMT09PW4ubm9kZVR5cGUmJi0xPChcIiBcIit5dCh2dChuKSkrXCIgXCIpLmluZGV4T2YodCkpcmV0dXJuITA7cmV0dXJuITF9fSk7dmFyIHh0PS9cXHIvZztTLmZuLmV4dGVuZCh7dmFsOmZ1bmN0aW9uKG4pe3ZhciByLGUsaSx0PXRoaXNbMF07cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KGk9bShuKSx0aGlzLmVhY2goZnVuY3Rpb24oZSl7dmFyIHQ7MT09PXRoaXMubm9kZVR5cGUmJihudWxsPT0odD1pP24uY2FsbCh0aGlzLGUsUyh0aGlzKS52YWwoKSk6bik/dD1cIlwiOlwibnVtYmVyXCI9PXR5cGVvZiB0P3QrPVwiXCI6QXJyYXkuaXNBcnJheSh0KSYmKHQ9Uy5tYXAodCxmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9cIlwiOmUrXCJcIn0pKSwocj1TLnZhbEhvb2tzW3RoaXMudHlwZV18fFMudmFsSG9va3NbdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSkmJlwic2V0XCJpbiByJiZ2b2lkIDAhPT1yLnNldCh0aGlzLHQsXCJ2YWx1ZVwiKXx8KHRoaXMudmFsdWU9dCkpfSkpOnQ/KHI9Uy52YWxIb29rc1t0LnR5cGVdfHxTLnZhbEhvb2tzW3Qubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0pJiZcImdldFwiaW4gciYmdm9pZCAwIT09KGU9ci5nZXQodCxcInZhbHVlXCIpKT9lOlwic3RyaW5nXCI9PXR5cGVvZihlPXQudmFsdWUpP2UucmVwbGFjZSh4dCxcIlwiKTpudWxsPT1lP1wiXCI6ZTp2b2lkIDB9fSksUy5leHRlbmQoe3ZhbEhvb2tzOntvcHRpb246e2dldDpmdW5jdGlvbihlKXt2YXIgdD1TLmZpbmQuYXR0cihlLFwidmFsdWVcIik7cmV0dXJuIG51bGwhPXQ/dDp5dChTLnRleHQoZSkpfX0sc2VsZWN0OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQsbixyLGk9ZS5vcHRpb25zLG89ZS5zZWxlY3RlZEluZGV4LGE9XCJzZWxlY3Qtb25lXCI9PT1lLnR5cGUscz1hP251bGw6W10sdT1hP28rMTppLmxlbmd0aDtmb3Iocj1vPDA/dTphP286MDtyPHU7cisrKWlmKCgobj1pW3JdKS5zZWxlY3RlZHx8cj09PW8pJiYhbi5kaXNhYmxlZCYmKCFuLnBhcmVudE5vZGUuZGlzYWJsZWR8fCFBKG4ucGFyZW50Tm9kZSxcIm9wdGdyb3VwXCIpKSl7aWYodD1TKG4pLnZhbCgpLGEpcmV0dXJuIHQ7cy5wdXNoKHQpfXJldHVybiBzfSxzZXQ6ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGk9ZS5vcHRpb25zLG89Uy5tYWtlQXJyYXkodCksYT1pLmxlbmd0aDt3aGlsZShhLS0pKChyPWlbYV0pLnNlbGVjdGVkPS0xPFMuaW5BcnJheShTLnZhbEhvb2tzLm9wdGlvbi5nZXQociksbykpJiYobj0hMCk7cmV0dXJuIG58fChlLnNlbGVjdGVkSW5kZXg9LTEpLG99fX19KSxTLmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7Uy52YWxIb29rc1t0aGlzXT17c2V0OmZ1bmN0aW9uKGUsdCl7aWYoQXJyYXkuaXNBcnJheSh0KSlyZXR1cm4gZS5jaGVja2VkPS0xPFMuaW5BcnJheShTKGUpLnZhbCgpLHQpfX0sdi5jaGVja09ufHwoUy52YWxIb29rc1t0aGlzXS5nZXQ9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PT1lLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpP1wib25cIjplLnZhbHVlfSl9KSx2LmZvY3VzaW49XCJvbmZvY3VzaW5cImluIEM7dmFyIGJ0PS9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLyx3dD1mdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpfTtTLmV4dGVuZChTLmV2ZW50LHt0cmlnZ2VyOmZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbCxjLGYscD1bbnx8RV0sZD15LmNhbGwoZSxcInR5cGVcIik/ZS50eXBlOmUsaD15LmNhbGwoZSxcIm5hbWVzcGFjZVwiKT9lLm5hbWVzcGFjZS5zcGxpdChcIi5cIik6W107aWYobz1mPWE9bj1ufHxFLDMhPT1uLm5vZGVUeXBlJiY4IT09bi5ub2RlVHlwZSYmIWJ0LnRlc3QoZCtTLmV2ZW50LnRyaWdnZXJlZCkmJigtMTxkLmluZGV4T2YoXCIuXCIpJiYoZD0oaD1kLnNwbGl0KFwiLlwiKSkuc2hpZnQoKSxoLnNvcnQoKSksdT1kLmluZGV4T2YoXCI6XCIpPDAmJlwib25cIitkLChlPWVbUy5leHBhbmRvXT9lOm5ldyBTLkV2ZW50KGQsXCJvYmplY3RcIj09dHlwZW9mIGUmJmUpKS5pc1RyaWdnZXI9cj8yOjMsZS5uYW1lc3BhY2U9aC5qb2luKFwiLlwiKSxlLnJuYW1lc3BhY2U9ZS5uYW1lc3BhY2U/bmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK2guam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOm51bGwsZS5yZXN1bHQ9dm9pZCAwLGUudGFyZ2V0fHwoZS50YXJnZXQ9biksdD1udWxsPT10P1tlXTpTLm1ha2VBcnJheSh0LFtlXSksYz1TLmV2ZW50LnNwZWNpYWxbZF18fHt9LHJ8fCFjLnRyaWdnZXJ8fCExIT09Yy50cmlnZ2VyLmFwcGx5KG4sdCkpKXtpZighciYmIWMubm9CdWJibGUmJiF4KG4pKXtmb3Iocz1jLmRlbGVnYXRlVHlwZXx8ZCxidC50ZXN0KHMrZCl8fChvPW8ucGFyZW50Tm9kZSk7bztvPW8ucGFyZW50Tm9kZSlwLnB1c2gobyksYT1vO2E9PT0obi5vd25lckRvY3VtZW50fHxFKSYmcC5wdXNoKGEuZGVmYXVsdFZpZXd8fGEucGFyZW50V2luZG93fHxDKX1pPTA7d2hpbGUoKG89cFtpKytdKSYmIWUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSlmPW8sZS50eXBlPTE8aT9zOmMuYmluZFR5cGV8fGQsKGw9KFkuZ2V0KG8sXCJldmVudHNcIil8fE9iamVjdC5jcmVhdGUobnVsbCkpW2UudHlwZV0mJlkuZ2V0KG8sXCJoYW5kbGVcIikpJiZsLmFwcGx5KG8sdCksKGw9dSYmb1t1XSkmJmwuYXBwbHkmJlYobykmJihlLnJlc3VsdD1sLmFwcGx5KG8sdCksITE9PT1lLnJlc3VsdCYmZS5wcmV2ZW50RGVmYXVsdCgpKTtyZXR1cm4gZS50eXBlPWQscnx8ZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8Yy5fZGVmYXVsdCYmITEhPT1jLl9kZWZhdWx0LmFwcGx5KHAucG9wKCksdCl8fCFWKG4pfHx1JiZtKG5bZF0pJiYheChuKSYmKChhPW5bdV0pJiYoblt1XT1udWxsKSxTLmV2ZW50LnRyaWdnZXJlZD1kLGUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSYmZi5hZGRFdmVudExpc3RlbmVyKGQsd3QpLG5bZF0oKSxlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkmJmYucmVtb3ZlRXZlbnRMaXN0ZW5lcihkLHd0KSxTLmV2ZW50LnRyaWdnZXJlZD12b2lkIDAsYSYmKG5bdV09YSkpLGUucmVzdWx0fX0sc2ltdWxhdGU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByPVMuZXh0ZW5kKG5ldyBTLkV2ZW50LG4se3R5cGU6ZSxpc1NpbXVsYXRlZDohMH0pO1MuZXZlbnQudHJpZ2dlcihyLG51bGwsdCl9fSksUy5mbi5leHRlbmQoe3RyaWdnZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Uy5ldmVudC50cmlnZ2VyKGUsdCx0aGlzKX0pfSx0cmlnZ2VySGFuZGxlcjpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXNbMF07aWYobilyZXR1cm4gUy5ldmVudC50cmlnZ2VyKGUsdCxuLCEwKX19KSx2LmZvY3VzaW58fFMuZWFjaCh7Zm9jdXM6XCJmb2N1c2luXCIsYmx1cjpcImZvY3Vzb3V0XCJ9LGZ1bmN0aW9uKG4scil7dmFyIGk9ZnVuY3Rpb24oZSl7Uy5ldmVudC5zaW11bGF0ZShyLGUudGFyZ2V0LFMuZXZlbnQuZml4KGUpKX07Uy5ldmVudC5zcGVjaWFsW3JdPXtzZXR1cDpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcy5kb2N1bWVudHx8dGhpcyx0PVkuYWNjZXNzKGUscik7dHx8ZS5hZGRFdmVudExpc3RlbmVyKG4saSwhMCksWS5hY2Nlc3MoZSxyLCh0fHwwKSsxKX0sdGVhcmRvd246ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMuZG9jdW1lbnR8fHRoaXMsdD1ZLmFjY2VzcyhlLHIpLTE7dD9ZLmFjY2VzcyhlLHIsdCk6KGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihuLGksITApLFkucmVtb3ZlKGUscikpfX19KTt2YXIgVHQ9Qy5sb2NhdGlvbixDdD17Z3VpZDpEYXRlLm5vdygpfSxFdD0vXFw/LztTLnBhcnNlWE1MPWZ1bmN0aW9uKGUpe3ZhciB0LG47aWYoIWV8fFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiBudWxsO3RyeXt0PShuZXcgQy5ET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyhlLFwidGV4dC94bWxcIil9Y2F0Y2goZSl7fXJldHVybiBuPXQmJnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKVswXSx0JiYhbnx8Uy5lcnJvcihcIkludmFsaWQgWE1MOiBcIisobj9TLm1hcChuLmNoaWxkTm9kZXMsZnVuY3Rpb24oZSl7cmV0dXJuIGUudGV4dENvbnRlbnR9KS5qb2luKFwiXFxuXCIpOmUpKSx0fTt2YXIgU3Q9L1xcW1xcXSQvLGt0PS9cXHI/XFxuL2csQXQ9L14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLE50PS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtmdW5jdGlvbiBqdChuLGUscixpKXt2YXIgdDtpZihBcnJheS5pc0FycmF5KGUpKVMuZWFjaChlLGZ1bmN0aW9uKGUsdCl7cnx8U3QudGVzdChuKT9pKG4sdCk6anQobitcIltcIisoXCJvYmplY3RcIj09dHlwZW9mIHQmJm51bGwhPXQ/ZTpcIlwiKStcIl1cIix0LHIsaSl9KTtlbHNlIGlmKHJ8fFwib2JqZWN0XCIhPT13KGUpKWkobixlKTtlbHNlIGZvcih0IGluIGUpanQobitcIltcIit0K1wiXVwiLGVbdF0scixpKX1TLnBhcmFtPWZ1bmN0aW9uKGUsdCl7dmFyIG4scj1bXSxpPWZ1bmN0aW9uKGUsdCl7dmFyIG49bSh0KT90KCk6dDtyW3IubGVuZ3RoXT1lbmNvZGVVUklDb21wb25lbnQoZSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG51bGw9PW4/XCJcIjpuKX07aWYobnVsbD09ZSlyZXR1cm5cIlwiO2lmKEFycmF5LmlzQXJyYXkoZSl8fGUuanF1ZXJ5JiYhUy5pc1BsYWluT2JqZWN0KGUpKVMuZWFjaChlLGZ1bmN0aW9uKCl7aSh0aGlzLm5hbWUsdGhpcy52YWx1ZSl9KTtlbHNlIGZvcihuIGluIGUpanQobixlW25dLHQsaSk7cmV0dXJuIHIuam9pbihcIiZcIil9LFMuZm4uZXh0ZW5kKHtzZXJpYWxpemU6ZnVuY3Rpb24oKXtyZXR1cm4gUy5wYXJhbSh0aGlzLnNlcmlhbGl6ZUFycmF5KCkpfSxzZXJpYWxpemVBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBlPVMucHJvcCh0aGlzLFwiZWxlbWVudHNcIik7cmV0dXJuIGU/Uy5tYWtlQXJyYXkoZSk6dGhpc30pLmZpbHRlcihmdW5jdGlvbigpe3ZhciBlPXRoaXMudHlwZTtyZXR1cm4gdGhpcy5uYW1lJiYhUyh0aGlzKS5pcyhcIjpkaXNhYmxlZFwiKSYmTnQudGVzdCh0aGlzLm5vZGVOYW1lKSYmIUF0LnRlc3QoZSkmJih0aGlzLmNoZWNrZWR8fCFwZS50ZXN0KGUpKX0pLm1hcChmdW5jdGlvbihlLHQpe3ZhciBuPVModGhpcykudmFsKCk7cmV0dXJuIG51bGw9PW4/bnVsbDpBcnJheS5pc0FycmF5KG4pP1MubWFwKG4sZnVuY3Rpb24oZSl7cmV0dXJue25hbWU6dC5uYW1lLHZhbHVlOmUucmVwbGFjZShrdCxcIlxcclxcblwiKX19KTp7bmFtZTp0Lm5hbWUsdmFsdWU6bi5yZXBsYWNlKGt0LFwiXFxyXFxuXCIpfX0pLmdldCgpfX0pO3ZhciBEdD0vJTIwL2cscXQ9LyMuKiQvLEx0PS8oWz8mXSlfPVteJl0qLyxIdD0vXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKikkL2dtLE90PS9eKD86R0VUfEhFQUQpJC8sUHQ9L15cXC9cXC8vLFJ0PXt9LE10PXt9LEl0PVwiKi9cIi5jb25jYXQoXCIqXCIpLFd0PUUuY3JlYXRlRWxlbWVudChcImFcIik7ZnVuY3Rpb24gRnQobyl7cmV0dXJuIGZ1bmN0aW9uKGUsdCl7XCJzdHJpbmdcIiE9dHlwZW9mIGUmJih0PWUsZT1cIipcIik7dmFyIG4scj0wLGk9ZS50b0xvd2VyQ2FzZSgpLm1hdGNoKFApfHxbXTtpZihtKHQpKXdoaWxlKG49aVtyKytdKVwiK1wiPT09blswXT8obj1uLnNsaWNlKDEpfHxcIipcIiwob1tuXT1vW25dfHxbXSkudW5zaGlmdCh0KSk6KG9bbl09b1tuXXx8W10pLnB1c2godCl9fWZ1bmN0aW9uICR0KHQsaSxvLGEpe3ZhciBzPXt9LHU9dD09PU10O2Z1bmN0aW9uIGwoZSl7dmFyIHI7cmV0dXJuIHNbZV09ITAsUy5lYWNoKHRbZV18fFtdLGZ1bmN0aW9uKGUsdCl7dmFyIG49dChpLG8sYSk7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIG58fHV8fHNbbl0/dT8hKHI9bik6dm9pZCAwOihpLmRhdGFUeXBlcy51bnNoaWZ0KG4pLGwobiksITEpfSkscn1yZXR1cm4gbChpLmRhdGFUeXBlc1swXSl8fCFzW1wiKlwiXSYmbChcIipcIil9ZnVuY3Rpb24gQnQoZSx0KXt2YXIgbixyLGk9Uy5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnN8fHt9O2ZvcihuIGluIHQpdm9pZCAwIT09dFtuXSYmKChpW25dP2U6cnx8KHI9e30pKVtuXT10W25dKTtyZXR1cm4gciYmUy5leHRlbmQoITAsZSxyKSxlfVd0LmhyZWY9VHQuaHJlZixTLmV4dGVuZCh7YWN0aXZlOjAsbGFzdE1vZGlmaWVkOnt9LGV0YWc6e30sYWpheFNldHRpbmdzOnt1cmw6VHQuaHJlZix0eXBlOlwiR0VUXCIsaXNMb2NhbDovXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLy50ZXN0KFR0LnByb3RvY29sKSxnbG9iYWw6ITAscHJvY2Vzc0RhdGE6ITAsYXN5bmM6ITAsY29udGVudFR5cGU6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixhY2NlcHRzOntcIipcIjpJdCx0ZXh0OlwidGV4dC9wbGFpblwiLGh0bWw6XCJ0ZXh0L2h0bWxcIix4bWw6XCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsanNvbjpcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwifSxjb250ZW50czp7eG1sOi9cXGJ4bWxcXGIvLGh0bWw6L1xcYmh0bWwvLGpzb246L1xcYmpzb25cXGIvfSxyZXNwb25zZUZpZWxkczp7eG1sOlwicmVzcG9uc2VYTUxcIix0ZXh0OlwicmVzcG9uc2VUZXh0XCIsanNvbjpcInJlc3BvbnNlSlNPTlwifSxjb252ZXJ0ZXJzOntcIiogdGV4dFwiOlN0cmluZyxcInRleHQgaHRtbFwiOiEwLFwidGV4dCBqc29uXCI6SlNPTi5wYXJzZSxcInRleHQgeG1sXCI6Uy5wYXJzZVhNTH0sZmxhdE9wdGlvbnM6e3VybDohMCxjb250ZXh0OiEwfX0sYWpheFNldHVwOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ/QnQoQnQoZSxTLmFqYXhTZXR0aW5ncyksdCk6QnQoUy5hamF4U2V0dGluZ3MsZSl9LGFqYXhQcmVmaWx0ZXI6RnQoUnQpLGFqYXhUcmFuc3BvcnQ6RnQoTXQpLGFqYXg6ZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZSYmKHQ9ZSxlPXZvaWQgMCksdD10fHx7fTt2YXIgYyxmLHAsbixkLHIsaCxnLGksbyx5PVMuYWpheFNldHVwKHt9LHQpLHY9eS5jb250ZXh0fHx5LG09eS5jb250ZXh0JiYodi5ub2RlVHlwZXx8di5qcXVlcnkpP1Modik6Uy5ldmVudCx4PVMuRGVmZXJyZWQoKSxiPVMuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksdz15LnN0YXR1c0NvZGV8fHt9LGE9e30scz17fSx1PVwiY2FuY2VsZWRcIixUPXtyZWFkeVN0YXRlOjAsZ2V0UmVzcG9uc2VIZWFkZXI6ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoaCl7aWYoIW4pe249e307d2hpbGUodD1IdC5leGVjKHApKW5bdFsxXS50b0xvd2VyQ2FzZSgpK1wiIFwiXT0oblt0WzFdLnRvTG93ZXJDYXNlKCkrXCIgXCJdfHxbXSkuY29uY2F0KHRbMl0pfXQ9bltlLnRvTG93ZXJDYXNlKCkrXCIgXCJdfXJldHVybiBudWxsPT10P251bGw6dC5qb2luKFwiLCBcIil9LGdldEFsbFJlc3BvbnNlSGVhZGVyczpmdW5jdGlvbigpe3JldHVybiBoP3A6bnVsbH0sc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbihlLHQpe3JldHVybiBudWxsPT1oJiYoZT1zW2UudG9Mb3dlckNhc2UoKV09c1tlLnRvTG93ZXJDYXNlKCldfHxlLGFbZV09dCksdGhpc30sb3ZlcnJpZGVNaW1lVHlwZTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09aCYmKHkubWltZVR5cGU9ZSksdGhpc30sc3RhdHVzQ29kZTpmdW5jdGlvbihlKXt2YXIgdDtpZihlKWlmKGgpVC5hbHdheXMoZVtULnN0YXR1c10pO2Vsc2UgZm9yKHQgaW4gZSl3W3RdPVt3W3RdLGVbdF1dO3JldHVybiB0aGlzfSxhYm9ydDpmdW5jdGlvbihlKXt2YXIgdD1lfHx1O3JldHVybiBjJiZjLmFib3J0KHQpLGwoMCx0KSx0aGlzfX07aWYoeC5wcm9taXNlKFQpLHkudXJsPSgoZXx8eS51cmx8fFR0LmhyZWYpK1wiXCIpLnJlcGxhY2UoUHQsVHQucHJvdG9jb2wrXCIvL1wiKSx5LnR5cGU9dC5tZXRob2R8fHQudHlwZXx8eS5tZXRob2R8fHkudHlwZSx5LmRhdGFUeXBlcz0oeS5kYXRhVHlwZXx8XCIqXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2goUCl8fFtcIlwiXSxudWxsPT15LmNyb3NzRG9tYWluKXtyPUUuY3JlYXRlRWxlbWVudChcImFcIik7dHJ5e3IuaHJlZj15LnVybCxyLmhyZWY9ci5ocmVmLHkuY3Jvc3NEb21haW49V3QucHJvdG9jb2wrXCIvL1wiK1d0Lmhvc3QhPXIucHJvdG9jb2wrXCIvL1wiK3IuaG9zdH1jYXRjaChlKXt5LmNyb3NzRG9tYWluPSEwfX1pZih5LmRhdGEmJnkucHJvY2Vzc0RhdGEmJlwic3RyaW5nXCIhPXR5cGVvZiB5LmRhdGEmJih5LmRhdGE9Uy5wYXJhbSh5LmRhdGEseS50cmFkaXRpb25hbCkpLCR0KFJ0LHksdCxUKSxoKXJldHVybiBUO2ZvcihpIGluKGc9Uy5ldmVudCYmeS5nbG9iYWwpJiYwPT1TLmFjdGl2ZSsrJiZTLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIikseS50eXBlPXkudHlwZS50b1VwcGVyQ2FzZSgpLHkuaGFzQ29udGVudD0hT3QudGVzdCh5LnR5cGUpLGY9eS51cmwucmVwbGFjZShxdCxcIlwiKSx5Lmhhc0NvbnRlbnQ/eS5kYXRhJiZ5LnByb2Nlc3NEYXRhJiYwPT09KHkuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJih5LmRhdGE9eS5kYXRhLnJlcGxhY2UoRHQsXCIrXCIpKToobz15LnVybC5zbGljZShmLmxlbmd0aCkseS5kYXRhJiYoeS5wcm9jZXNzRGF0YXx8XCJzdHJpbmdcIj09dHlwZW9mIHkuZGF0YSkmJihmKz0oRXQudGVzdChmKT9cIiZcIjpcIj9cIikreS5kYXRhLGRlbGV0ZSB5LmRhdGEpLCExPT09eS5jYWNoZSYmKGY9Zi5yZXBsYWNlKEx0LFwiJDFcIiksbz0oRXQudGVzdChmKT9cIiZcIjpcIj9cIikrXCJfPVwiK0N0Lmd1aWQrKytvKSx5LnVybD1mK28pLHkuaWZNb2RpZmllZCYmKFMubGFzdE1vZGlmaWVkW2ZdJiZULnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLFMubGFzdE1vZGlmaWVkW2ZdKSxTLmV0YWdbZl0mJlQuc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIixTLmV0YWdbZl0pKSwoeS5kYXRhJiZ5Lmhhc0NvbnRlbnQmJiExIT09eS5jb250ZW50VHlwZXx8dC5jb250ZW50VHlwZSkmJlQuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLHkuY29udGVudFR5cGUpLFQuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLHkuZGF0YVR5cGVzWzBdJiZ5LmFjY2VwdHNbeS5kYXRhVHlwZXNbMF1dP3kuYWNjZXB0c1t5LmRhdGFUeXBlc1swXV0rKFwiKlwiIT09eS5kYXRhVHlwZXNbMF0/XCIsIFwiK0l0K1wiOyBxPTAuMDFcIjpcIlwiKTp5LmFjY2VwdHNbXCIqXCJdKSx5LmhlYWRlcnMpVC5zZXRSZXF1ZXN0SGVhZGVyKGkseS5oZWFkZXJzW2ldKTtpZih5LmJlZm9yZVNlbmQmJighMT09PXkuYmVmb3JlU2VuZC5jYWxsKHYsVCx5KXx8aCkpcmV0dXJuIFQuYWJvcnQoKTtpZih1PVwiYWJvcnRcIixiLmFkZCh5LmNvbXBsZXRlKSxULmRvbmUoeS5zdWNjZXNzKSxULmZhaWwoeS5lcnJvciksYz0kdChNdCx5LHQsVCkpe2lmKFQucmVhZHlTdGF0ZT0xLGcmJm0udHJpZ2dlcihcImFqYXhTZW5kXCIsW1QseV0pLGgpcmV0dXJuIFQ7eS5hc3luYyYmMDx5LnRpbWVvdXQmJihkPUMuc2V0VGltZW91dChmdW5jdGlvbigpe1QuYWJvcnQoXCJ0aW1lb3V0XCIpfSx5LnRpbWVvdXQpKTt0cnl7aD0hMSxjLnNlbmQoYSxsKX1jYXRjaChlKXtpZihoKXRocm93IGU7bCgtMSxlKX19ZWxzZSBsKC0xLFwiTm8gVHJhbnNwb3J0XCIpO2Z1bmN0aW9uIGwoZSx0LG4scil7dmFyIGksbyxhLHMsdSxsPXQ7aHx8KGg9ITAsZCYmQy5jbGVhclRpbWVvdXQoZCksYz12b2lkIDAscD1yfHxcIlwiLFQucmVhZHlTdGF0ZT0wPGU/NDowLGk9MjAwPD1lJiZlPDMwMHx8MzA0PT09ZSxuJiYocz1mdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscz1lLmNvbnRlbnRzLHU9ZS5kYXRhVHlwZXM7d2hpbGUoXCIqXCI9PT11WzBdKXUuc2hpZnQoKSx2b2lkIDA9PT1yJiYocj1lLm1pbWVUeXBlfHx0LmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihyKWZvcihpIGluIHMpaWYoc1tpXSYmc1tpXS50ZXN0KHIpKXt1LnVuc2hpZnQoaSk7YnJlYWt9aWYodVswXWluIG4pbz11WzBdO2Vsc2V7Zm9yKGkgaW4gbil7aWYoIXVbMF18fGUuY29udmVydGVyc1tpK1wiIFwiK3VbMF1dKXtvPWk7YnJlYWt9YXx8KGE9aSl9bz1vfHxhfWlmKG8pcmV0dXJuIG8hPT11WzBdJiZ1LnVuc2hpZnQobyksbltvXX0oeSxULG4pKSwhaSYmLTE8Uy5pbkFycmF5KFwic2NyaXB0XCIseS5kYXRhVHlwZXMpJiZTLmluQXJyYXkoXCJqc29uXCIseS5kYXRhVHlwZXMpPDAmJih5LmNvbnZlcnRlcnNbXCJ0ZXh0IHNjcmlwdFwiXT1mdW5jdGlvbigpe30pLHM9ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHMsdSxsPXt9LGM9ZS5kYXRhVHlwZXMuc2xpY2UoKTtpZihjWzFdKWZvcihhIGluIGUuY29udmVydGVycylsW2EudG9Mb3dlckNhc2UoKV09ZS5jb252ZXJ0ZXJzW2FdO289Yy5zaGlmdCgpO3doaWxlKG8paWYoZS5yZXNwb25zZUZpZWxkc1tvXSYmKG5bZS5yZXNwb25zZUZpZWxkc1tvXV09dCksIXUmJnImJmUuZGF0YUZpbHRlciYmKHQ9ZS5kYXRhRmlsdGVyKHQsZS5kYXRhVHlwZSkpLHU9byxvPWMuc2hpZnQoKSlpZihcIipcIj09PW8pbz11O2Vsc2UgaWYoXCIqXCIhPT11JiZ1IT09byl7aWYoIShhPWxbdStcIiBcIitvXXx8bFtcIiogXCIrb10pKWZvcihpIGluIGwpaWYoKHM9aS5zcGxpdChcIiBcIikpWzFdPT09byYmKGE9bFt1K1wiIFwiK3NbMF1dfHxsW1wiKiBcIitzWzBdXSkpeyEwPT09YT9hPWxbaV06ITAhPT1sW2ldJiYobz1zWzBdLGMudW5zaGlmdChzWzFdKSk7YnJlYWt9aWYoITAhPT1hKWlmKGEmJmVbXCJ0aHJvd3NcIl0pdD1hKHQpO2Vsc2UgdHJ5e3Q9YSh0KX1jYXRjaChlKXtyZXR1cm57c3RhdGU6XCJwYXJzZXJlcnJvclwiLGVycm9yOmE/ZTpcIk5vIGNvbnZlcnNpb24gZnJvbSBcIit1K1wiIHRvIFwiK299fX1yZXR1cm57c3RhdGU6XCJzdWNjZXNzXCIsZGF0YTp0fX0oeSxzLFQsaSksaT8oeS5pZk1vZGlmaWVkJiYoKHU9VC5nZXRSZXNwb25zZUhlYWRlcihcIkxhc3QtTW9kaWZpZWRcIikpJiYoUy5sYXN0TW9kaWZpZWRbZl09dSksKHU9VC5nZXRSZXNwb25zZUhlYWRlcihcImV0YWdcIikpJiYoUy5ldGFnW2ZdPXUpKSwyMDQ9PT1lfHxcIkhFQURcIj09PXkudHlwZT9sPVwibm9jb250ZW50XCI6MzA0PT09ZT9sPVwibm90bW9kaWZpZWRcIjoobD1zLnN0YXRlLG89cy5kYXRhLGk9IShhPXMuZXJyb3IpKSk6KGE9bCwhZSYmbHx8KGw9XCJlcnJvclwiLGU8MCYmKGU9MCkpKSxULnN0YXR1cz1lLFQuc3RhdHVzVGV4dD0odHx8bCkrXCJcIixpP3gucmVzb2x2ZVdpdGgodixbbyxsLFRdKTp4LnJlamVjdFdpdGgodixbVCxsLGFdKSxULnN0YXR1c0NvZGUodyksdz12b2lkIDAsZyYmbS50cmlnZ2VyKGk/XCJhamF4U3VjY2Vzc1wiOlwiYWpheEVycm9yXCIsW1QseSxpP286YV0pLGIuZmlyZVdpdGgodixbVCxsXSksZyYmKG0udHJpZ2dlcihcImFqYXhDb21wbGV0ZVwiLFtULHldKSwtLVMuYWN0aXZlfHxTLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RvcFwiKSkpfXJldHVybiBUfSxnZXRKU09OOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gUy5nZXQoZSx0LG4sXCJqc29uXCIpfSxnZXRTY3JpcHQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gUy5nZXQoZSx2b2lkIDAsdCxcInNjcmlwdFwiKX19KSxTLmVhY2goW1wiZ2V0XCIsXCJwb3N0XCJdLGZ1bmN0aW9uKGUsaSl7U1tpXT1mdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gbSh0KSYmKHI9cnx8bixuPXQsdD12b2lkIDApLFMuYWpheChTLmV4dGVuZCh7dXJsOmUsdHlwZTppLGRhdGFUeXBlOnIsZGF0YTp0LHN1Y2Nlc3M6bn0sUy5pc1BsYWluT2JqZWN0KGUpJiZlKSl9fSksUy5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uKGUpe3ZhciB0O2Zvcih0IGluIGUuaGVhZGVycylcImNvbnRlbnQtdHlwZVwiPT09dC50b0xvd2VyQ2FzZSgpJiYoZS5jb250ZW50VHlwZT1lLmhlYWRlcnNbdF18fFwiXCIpfSksUy5fZXZhbFVybD1mdW5jdGlvbihlLHQsbil7cmV0dXJuIFMuYWpheCh7dXJsOmUsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsY2FjaGU6ITAsYXN5bmM6ITEsZ2xvYmFsOiExLGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbigpe319LGRhdGFGaWx0ZXI6ZnVuY3Rpb24oZSl7Uy5nbG9iYWxFdmFsKGUsdCxuKX19KX0sUy5mbi5leHRlbmQoe3dyYXBBbGw6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuIHRoaXNbMF0mJihtKGUpJiYoZT1lLmNhbGwodGhpc1swXSkpLHQ9UyhlLHRoaXNbMF0ub3duZXJEb2N1bWVudCkuZXEoMCkuY2xvbmUoITApLHRoaXNbMF0ucGFyZW50Tm9kZSYmdC5pbnNlcnRCZWZvcmUodGhpc1swXSksdC5tYXAoZnVuY3Rpb24oKXt2YXIgZT10aGlzO3doaWxlKGUuZmlyc3RFbGVtZW50Q2hpbGQpZT1lLmZpcnN0RWxlbWVudENoaWxkO3JldHVybiBlfSkuYXBwZW5kKHRoaXMpKSx0aGlzfSx3cmFwSW5uZXI6ZnVuY3Rpb24obil7cmV0dXJuIG0obik/dGhpcy5lYWNoKGZ1bmN0aW9uKGUpe1ModGhpcykud3JhcElubmVyKG4uY2FsbCh0aGlzLGUpKX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPVModGhpcyksdD1lLmNvbnRlbnRzKCk7dC5sZW5ndGg/dC53cmFwQWxsKG4pOmUuYXBwZW5kKG4pfSl9LHdyYXA6ZnVuY3Rpb24odCl7dmFyIG49bSh0KTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGUpe1ModGhpcykud3JhcEFsbChuP3QuY2FsbCh0aGlzLGUpOnQpfSl9LHVud3JhcDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wYXJlbnQoZSkubm90KFwiYm9keVwiKS5lYWNoKGZ1bmN0aW9uKCl7Uyh0aGlzKS5yZXBsYWNlV2l0aCh0aGlzLmNoaWxkTm9kZXMpfSksdGhpc319KSxTLmV4cHIucHNldWRvcy5oaWRkZW49ZnVuY3Rpb24oZSl7cmV0dXJuIVMuZXhwci5wc2V1ZG9zLnZpc2libGUoZSl9LFMuZXhwci5wc2V1ZG9zLnZpc2libGU9ZnVuY3Rpb24oZSl7cmV0dXJuISEoZS5vZmZzZXRXaWR0aHx8ZS5vZmZzZXRIZWlnaHR8fGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpfSxTLmFqYXhTZXR0aW5ncy54aHI9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG5ldyBDLlhNTEh0dHBSZXF1ZXN0fWNhdGNoKGUpe319O3ZhciBfdD17MDoyMDAsMTIyMzoyMDR9LHp0PVMuYWpheFNldHRpbmdzLnhocigpO3YuY29ycz0hIXp0JiZcIndpdGhDcmVkZW50aWFsc1wiaW4genQsdi5hamF4PXp0PSEhenQsUy5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKGkpe3ZhciBvLGE7aWYodi5jb3JzfHx6dCYmIWkuY3Jvc3NEb21haW4pcmV0dXJue3NlbmQ6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPWkueGhyKCk7aWYoci5vcGVuKGkudHlwZSxpLnVybCxpLmFzeW5jLGkudXNlcm5hbWUsaS5wYXNzd29yZCksaS54aHJGaWVsZHMpZm9yKG4gaW4gaS54aHJGaWVsZHMpcltuXT1pLnhockZpZWxkc1tuXTtmb3IobiBpbiBpLm1pbWVUeXBlJiZyLm92ZXJyaWRlTWltZVR5cGUmJnIub3ZlcnJpZGVNaW1lVHlwZShpLm1pbWVUeXBlKSxpLmNyb3NzRG9tYWlufHxlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXXx8KGVbXCJYLVJlcXVlc3RlZC1XaXRoXCJdPVwiWE1MSHR0cFJlcXVlc3RcIiksZSlyLnNldFJlcXVlc3RIZWFkZXIobixlW25dKTtvPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbigpe28mJihvPWE9ci5vbmxvYWQ9ci5vbmVycm9yPXIub25hYm9ydD1yLm9udGltZW91dD1yLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLFwiYWJvcnRcIj09PWU/ci5hYm9ydCgpOlwiZXJyb3JcIj09PWU/XCJudW1iZXJcIiE9dHlwZW9mIHIuc3RhdHVzP3QoMCxcImVycm9yXCIpOnQoci5zdGF0dXMsci5zdGF0dXNUZXh0KTp0KF90W3Iuc3RhdHVzXXx8ci5zdGF0dXMsci5zdGF0dXNUZXh0LFwidGV4dFwiIT09KHIucmVzcG9uc2VUeXBlfHxcInRleHRcIil8fFwic3RyaW5nXCIhPXR5cGVvZiByLnJlc3BvbnNlVGV4dD97YmluYXJ5OnIucmVzcG9uc2V9Ont0ZXh0OnIucmVzcG9uc2VUZXh0fSxyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSl9fSxyLm9ubG9hZD1vKCksYT1yLm9uZXJyb3I9ci5vbnRpbWVvdXQ9byhcImVycm9yXCIpLHZvaWQgMCE9PXIub25hYm9ydD9yLm9uYWJvcnQ9YTpyLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpezQ9PT1yLnJlYWR5U3RhdGUmJkMuc2V0VGltZW91dChmdW5jdGlvbigpe28mJmEoKX0pfSxvPW8oXCJhYm9ydFwiKTt0cnl7ci5zZW5kKGkuaGFzQ29udGVudCYmaS5kYXRhfHxudWxsKX1jYXRjaChlKXtpZihvKXRocm93IGV9fSxhYm9ydDpmdW5jdGlvbigpe28mJm8oKX19fSksUy5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uKGUpe2UuY3Jvc3NEb21haW4mJihlLmNvbnRlbnRzLnNjcmlwdD0hMSl9KSxTLmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OlwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIn0sY29udGVudHM6e3NjcmlwdDovXFxiKD86amF2YXxlY21hKXNjcmlwdFxcYi99LGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbihlKXtyZXR1cm4gUy5nbG9iYWxFdmFsKGUpLGV9fX0pLFMuYWpheFByZWZpbHRlcihcInNjcmlwdFwiLGZ1bmN0aW9uKGUpe3ZvaWQgMD09PWUuY2FjaGUmJihlLmNhY2hlPSExKSxlLmNyb3NzRG9tYWluJiYoZS50eXBlPVwiR0VUXCIpfSksUy5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24obil7dmFyIHIsaTtpZihuLmNyb3NzRG9tYWlufHxuLnNjcmlwdEF0dHJzKXJldHVybntzZW5kOmZ1bmN0aW9uKGUsdCl7cj1TKFwiPHNjcmlwdD5cIikuYXR0cihuLnNjcmlwdEF0dHJzfHx7fSkucHJvcCh7Y2hhcnNldDpuLnNjcmlwdENoYXJzZXQsc3JjOm4udXJsfSkub24oXCJsb2FkIGVycm9yXCIsaT1mdW5jdGlvbihlKXtyLnJlbW92ZSgpLGk9bnVsbCxlJiZ0KFwiZXJyb3JcIj09PWUudHlwZT80MDQ6MjAwLGUudHlwZSl9KSxFLmhlYWQuYXBwZW5kQ2hpbGQoclswXSl9LGFib3J0OmZ1bmN0aW9uKCl7aSYmaSgpfX19KTt2YXIgVXQsWHQ9W10sVnQ9Lyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztTLmFqYXhTZXR1cCh7anNvbnA6XCJjYWxsYmFja1wiLGpzb25wQ2FsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgZT1YdC5wb3AoKXx8Uy5leHBhbmRvK1wiX1wiK0N0Lmd1aWQrKztyZXR1cm4gdGhpc1tlXT0hMCxlfX0pLFMuYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIixmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGE9ITEhPT1lLmpzb25wJiYoVnQudGVzdChlLnVybCk/XCJ1cmxcIjpcInN0cmluZ1wiPT10eXBlb2YgZS5kYXRhJiYwPT09KGUuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJlZ0LnRlc3QoZS5kYXRhKSYmXCJkYXRhXCIpO2lmKGF8fFwianNvbnBcIj09PWUuZGF0YVR5cGVzWzBdKXJldHVybiByPWUuanNvbnBDYWxsYmFjaz1tKGUuanNvbnBDYWxsYmFjayk/ZS5qc29ucENhbGxiYWNrKCk6ZS5qc29ucENhbGxiYWNrLGE/ZVthXT1lW2FdLnJlcGxhY2UoVnQsXCIkMVwiK3IpOiExIT09ZS5qc29ucCYmKGUudXJsKz0oRXQudGVzdChlLnVybCk/XCImXCI6XCI/XCIpK2UuanNvbnArXCI9XCIrciksZS5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4gb3x8Uy5lcnJvcihyK1wiIHdhcyBub3QgY2FsbGVkXCIpLG9bMF19LGUuZGF0YVR5cGVzWzBdPVwianNvblwiLGk9Q1tyXSxDW3JdPWZ1bmN0aW9uKCl7bz1hcmd1bWVudHN9LG4uYWx3YXlzKGZ1bmN0aW9uKCl7dm9pZCAwPT09aT9TKEMpLnJlbW92ZVByb3Aocik6Q1tyXT1pLGVbcl0mJihlLmpzb25wQ2FsbGJhY2s9dC5qc29ucENhbGxiYWNrLFh0LnB1c2gocikpLG8mJm0oaSkmJmkob1swXSksbz1pPXZvaWQgMH0pLFwic2NyaXB0XCJ9KSx2LmNyZWF0ZUhUTUxEb2N1bWVudD0oKFV0PUUuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLmJvZHkpLmlubmVySFRNTD1cIjxmb3JtPjwvZm9ybT48Zm9ybT48L2Zvcm0+XCIsMj09PVV0LmNoaWxkTm9kZXMubGVuZ3RoKSxTLnBhcnNlSFRNTD1mdW5jdGlvbihlLHQsbil7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGU/W106KFwiYm9vbGVhblwiPT10eXBlb2YgdCYmKG49dCx0PSExKSx0fHwodi5jcmVhdGVIVE1MRG9jdW1lbnQ/KChyPSh0PUUuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpKS5jcmVhdGVFbGVtZW50KFwiYmFzZVwiKSkuaHJlZj1FLmxvY2F0aW9uLmhyZWYsdC5oZWFkLmFwcGVuZENoaWxkKHIpKTp0PUUpLG89IW4mJltdLChpPU4uZXhlYyhlKSk/W3QuY3JlYXRlRWxlbWVudChpWzFdKV06KGk9eGUoW2VdLHQsbyksbyYmby5sZW5ndGgmJlMobykucmVtb3ZlKCksUy5tZXJnZShbXSxpLmNoaWxkTm9kZXMpKSk7dmFyIHIsaSxvfSxTLmZuLmxvYWQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhPXRoaXMscz1lLmluZGV4T2YoXCIgXCIpO3JldHVybi0xPHMmJihyPXl0KGUuc2xpY2UocykpLGU9ZS5zbGljZSgwLHMpKSxtKHQpPyhuPXQsdD12b2lkIDApOnQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiYoaT1cIlBPU1RcIiksMDxhLmxlbmd0aCYmUy5hamF4KHt1cmw6ZSx0eXBlOml8fFwiR0VUXCIsZGF0YVR5cGU6XCJodG1sXCIsZGF0YTp0fSkuZG9uZShmdW5jdGlvbihlKXtvPWFyZ3VtZW50cyxhLmh0bWwocj9TKFwiPGRpdj5cIikuYXBwZW5kKFMucGFyc2VIVE1MKGUpKS5maW5kKHIpOmUpfSkuYWx3YXlzKG4mJmZ1bmN0aW9uKGUsdCl7YS5lYWNoKGZ1bmN0aW9uKCl7bi5hcHBseSh0aGlzLG98fFtlLnJlc3BvbnNlVGV4dCx0LGVdKX0pfSksdGhpc30sUy5leHByLnBzZXVkb3MuYW5pbWF0ZWQ9ZnVuY3Rpb24odCl7cmV0dXJuIFMuZ3JlcChTLnRpbWVycyxmdW5jdGlvbihlKXtyZXR1cm4gdD09PWUuZWxlbX0pLmxlbmd0aH0sUy5vZmZzZXQ9e3NldE9mZnNldDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscyx1LGw9Uy5jc3MoZSxcInBvc2l0aW9uXCIpLGM9UyhlKSxmPXt9O1wic3RhdGljXCI9PT1sJiYoZS5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIpLHM9Yy5vZmZzZXQoKSxvPVMuY3NzKGUsXCJ0b3BcIiksdT1TLmNzcyhlLFwibGVmdFwiKSwoXCJhYnNvbHV0ZVwiPT09bHx8XCJmaXhlZFwiPT09bCkmJi0xPChvK3UpLmluZGV4T2YoXCJhdXRvXCIpPyhhPShyPWMucG9zaXRpb24oKSkudG9wLGk9ci5sZWZ0KTooYT1wYXJzZUZsb2F0KG8pfHwwLGk9cGFyc2VGbG9hdCh1KXx8MCksbSh0KSYmKHQ9dC5jYWxsKGUsbixTLmV4dGVuZCh7fSxzKSkpLG51bGwhPXQudG9wJiYoZi50b3A9dC50b3Atcy50b3ArYSksbnVsbCE9dC5sZWZ0JiYoZi5sZWZ0PXQubGVmdC1zLmxlZnQraSksXCJ1c2luZ1wiaW4gdD90LnVzaW5nLmNhbGwoZSxmKTpjLmNzcyhmKX19LFMuZm4uZXh0ZW5kKHtvZmZzZXQ6ZnVuY3Rpb24odCl7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdm9pZCAwPT09dD90aGlzOnRoaXMuZWFjaChmdW5jdGlvbihlKXtTLm9mZnNldC5zZXRPZmZzZXQodGhpcyx0LGUpfSk7dmFyIGUsbixyPXRoaXNbMF07cmV0dXJuIHI/ci5nZXRDbGllbnRSZWN0cygpLmxlbmd0aD8oZT1yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLG49ci5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LHt0b3A6ZS50b3Arbi5wYWdlWU9mZnNldCxsZWZ0OmUubGVmdCtuLnBhZ2VYT2Zmc2V0fSk6e3RvcDowLGxlZnQ6MH06dm9pZCAwfSxwb3NpdGlvbjpmdW5jdGlvbigpe2lmKHRoaXNbMF0pe3ZhciBlLHQsbixyPXRoaXNbMF0saT17dG9wOjAsbGVmdDowfTtpZihcImZpeGVkXCI9PT1TLmNzcyhyLFwicG9zaXRpb25cIikpdD1yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2Vsc2V7dD10aGlzLm9mZnNldCgpLG49ci5vd25lckRvY3VtZW50LGU9ci5vZmZzZXRQYXJlbnR8fG4uZG9jdW1lbnRFbGVtZW50O3doaWxlKGUmJihlPT09bi5ib2R5fHxlPT09bi5kb2N1bWVudEVsZW1lbnQpJiZcInN0YXRpY1wiPT09Uy5jc3MoZSxcInBvc2l0aW9uXCIpKWU9ZS5wYXJlbnROb2RlO2UmJmUhPT1yJiYxPT09ZS5ub2RlVHlwZSYmKChpPVMoZSkub2Zmc2V0KCkpLnRvcCs9Uy5jc3MoZSxcImJvcmRlclRvcFdpZHRoXCIsITApLGkubGVmdCs9Uy5jc3MoZSxcImJvcmRlckxlZnRXaWR0aFwiLCEwKSl9cmV0dXJue3RvcDp0LnRvcC1pLnRvcC1TLmNzcyhyLFwibWFyZ2luVG9wXCIsITApLGxlZnQ6dC5sZWZ0LWkubGVmdC1TLmNzcyhyLFwibWFyZ2luTGVmdFwiLCEwKX19fSxvZmZzZXRQYXJlbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9mZnNldFBhcmVudDt3aGlsZShlJiZcInN0YXRpY1wiPT09Uy5jc3MoZSxcInBvc2l0aW9uXCIpKWU9ZS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGV8fHJlfSl9fSksUy5lYWNoKHtzY3JvbGxMZWZ0OlwicGFnZVhPZmZzZXRcIixzY3JvbGxUb3A6XCJwYWdlWU9mZnNldFwifSxmdW5jdGlvbih0LGkpe3ZhciBvPVwicGFnZVlPZmZzZXRcIj09PWk7Uy5mblt0XT1mdW5jdGlvbihlKXtyZXR1cm4gQih0aGlzLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtpZih4KGUpP3I9ZTo5PT09ZS5ub2RlVHlwZSYmKHI9ZS5kZWZhdWx0Vmlldyksdm9pZCAwPT09bilyZXR1cm4gcj9yW2ldOmVbdF07cj9yLnNjcm9sbFRvKG8/ci5wYWdlWE9mZnNldDpuLG8/bjpyLnBhZ2VZT2Zmc2V0KTplW3RdPW59LHQsZSxhcmd1bWVudHMubGVuZ3RoKX19KSxTLmVhY2goW1widG9wXCIsXCJsZWZ0XCJdLGZ1bmN0aW9uKGUsbil7Uy5jc3NIb29rc1tuXT1fZSh2LnBpeGVsUG9zaXRpb24sZnVuY3Rpb24oZSx0KXtpZih0KXJldHVybiB0PUJlKGUsbiksUGUudGVzdCh0KT9TKGUpLnBvc2l0aW9uKClbbl0rXCJweFwiOnR9KX0pLFMuZWFjaCh7SGVpZ2h0OlwiaGVpZ2h0XCIsV2lkdGg6XCJ3aWR0aFwifSxmdW5jdGlvbihhLHMpe1MuZWFjaCh7cGFkZGluZzpcImlubmVyXCIrYSxjb250ZW50OnMsXCJcIjpcIm91dGVyXCIrYX0sZnVuY3Rpb24ocixvKXtTLmZuW29dPWZ1bmN0aW9uKGUsdCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aCYmKHJ8fFwiYm9vbGVhblwiIT10eXBlb2YgZSksaT1yfHwoITA9PT1lfHwhMD09PXQ/XCJtYXJnaW5cIjpcImJvcmRlclwiKTtyZXR1cm4gQih0aGlzLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtyZXR1cm4geChlKT8wPT09by5pbmRleE9mKFwib3V0ZXJcIik/ZVtcImlubmVyXCIrYV06ZS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIithXTo5PT09ZS5ub2RlVHlwZT8ocj1lLmRvY3VtZW50RWxlbWVudCxNYXRoLm1heChlLmJvZHlbXCJzY3JvbGxcIithXSxyW1wic2Nyb2xsXCIrYV0sZS5ib2R5W1wib2Zmc2V0XCIrYV0scltcIm9mZnNldFwiK2FdLHJbXCJjbGllbnRcIithXSkpOnZvaWQgMD09PW4/Uy5jc3MoZSx0LGkpOlMuc3R5bGUoZSx0LG4saSl9LHMsbj9lOnZvaWQgMCxuKX19KX0pLFMuZWFjaChbXCJhamF4U3RhcnRcIixcImFqYXhTdG9wXCIsXCJhamF4Q29tcGxldGVcIixcImFqYXhFcnJvclwiLFwiYWpheFN1Y2Nlc3NcIixcImFqYXhTZW5kXCJdLGZ1bmN0aW9uKGUsdCl7Uy5mblt0XT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5vbih0LGUpfX0pLFMuZm4uZXh0ZW5kKHtiaW5kOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdGhpcy5vbihlLG51bGwsdCxuKX0sdW5iaW5kOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMub2ZmKGUsbnVsbCx0KX0sZGVsZWdhdGU6ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIHRoaXMub24odCxlLG4scil9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihlLFwiKipcIik6dGhpcy5vZmYodCxlfHxcIioqXCIsbil9LGhvdmVyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMubW91c2VlbnRlcihlKS5tb3VzZWxlYXZlKHR8fGUpfX0pLFMuZWFjaChcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCByZXNpemUgc2Nyb2xsIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY29udGV4dG1lbnVcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oZSxuKXtTLmZuW25dPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIDA8YXJndW1lbnRzLmxlbmd0aD90aGlzLm9uKG4sbnVsbCxlLHQpOnRoaXMudHJpZ2dlcihuKX19KTt2YXIgR3Q9L15bXFxzXFx1RkVGRlxceEEwXSt8KFteXFxzXFx1RkVGRlxceEEwXSlbXFxzXFx1RkVGRlxceEEwXSskL2c7Uy5wcm94eT1mdW5jdGlvbihlLHQpe3ZhciBuLHIsaTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCYmKG49ZVt0XSx0PWUsZT1uKSxtKGUpKXJldHVybiByPXMuY2FsbChhcmd1bWVudHMsMiksKGk9ZnVuY3Rpb24oKXtyZXR1cm4gZS5hcHBseSh0fHx0aGlzLHIuY29uY2F0KHMuY2FsbChhcmd1bWVudHMpKSl9KS5ndWlkPWUuZ3VpZD1lLmd1aWR8fFMuZ3VpZCsrLGl9LFMuaG9sZFJlYWR5PWZ1bmN0aW9uKGUpe2U/Uy5yZWFkeVdhaXQrKzpTLnJlYWR5KCEwKX0sUy5pc0FycmF5PUFycmF5LmlzQXJyYXksUy5wYXJzZUpTT049SlNPTi5wYXJzZSxTLm5vZGVOYW1lPUEsUy5pc0Z1bmN0aW9uPW0sUy5pc1dpbmRvdz14LFMuY2FtZWxDYXNlPVgsUy50eXBlPXcsUy5ub3c9RGF0ZS5ub3csUy5pc051bWVyaWM9ZnVuY3Rpb24oZSl7dmFyIHQ9Uy50eXBlKGUpO3JldHVybihcIm51bWJlclwiPT09dHx8XCJzdHJpbmdcIj09PXQpJiYhaXNOYU4oZS1wYXJzZUZsb2F0KGUpKX0sUy50cmltPWZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP1wiXCI6KGUrXCJcIikucmVwbGFjZShHdCxcIiQxXCIpfSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZShcImpxdWVyeVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIFN9KTt2YXIgWXQ9Qy5qUXVlcnksUXQ9Qy4kO3JldHVybiBTLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oZSl7cmV0dXJuIEMuJD09PVMmJihDLiQ9UXQpLGUmJkMualF1ZXJ5PT09UyYmKEMualF1ZXJ5PVl0KSxTfSxcInVuZGVmaW5lZFwiPT10eXBlb2YgZSYmKEMualF1ZXJ5PUMuJD1TKSxTfSk7XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cmljdFVyaUVuY29kZSA9IHJlcXVpcmUoJ3N0cmljdC11cmktZW5jb2RlJyk7XG52YXIgb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIGRlY29kZUNvbXBvbmVudCA9IHJlcXVpcmUoJ2RlY29kZS11cmktY29tcG9uZW50Jyk7XG5cbmZ1bmN0aW9uIGVuY29kZXJGb3JBcnJheUZvcm1hdChvcHRzKSB7XG5cdHN3aXRjaCAob3B0cy5hcnJheUZvcm1hdCkge1xuXHRcdGNhc2UgJ2luZGV4Jzpcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgaW5kZXgpIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlID09PSBudWxsID8gW1xuXHRcdFx0XHRcdGVuY29kZShrZXksIG9wdHMpLFxuXHRcdFx0XHRcdCdbJyxcblx0XHRcdFx0XHRpbmRleCxcblx0XHRcdFx0XHQnXSdcblx0XHRcdFx0XS5qb2luKCcnKSA6IFtcblx0XHRcdFx0XHRlbmNvZGUoa2V5LCBvcHRzKSxcblx0XHRcdFx0XHQnWycsXG5cdFx0XHRcdFx0ZW5jb2RlKGluZGV4LCBvcHRzKSxcblx0XHRcdFx0XHQnXT0nLFxuXHRcdFx0XHRcdGVuY29kZSh2YWx1ZSwgb3B0cylcblx0XHRcdFx0XS5qb2luKCcnKTtcblx0XHRcdH07XG5cblx0XHRjYXNlICdicmFja2V0Jzpcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT09IG51bGwgPyBlbmNvZGUoa2V5LCBvcHRzKSA6IFtcblx0XHRcdFx0XHRlbmNvZGUoa2V5LCBvcHRzKSxcblx0XHRcdFx0XHQnW109Jyxcblx0XHRcdFx0XHRlbmNvZGUodmFsdWUsIG9wdHMpXG5cdFx0XHRcdF0uam9pbignJyk7XG5cdFx0XHR9O1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT09IG51bGwgPyBlbmNvZGUoa2V5LCBvcHRzKSA6IFtcblx0XHRcdFx0XHRlbmNvZGUoa2V5LCBvcHRzKSxcblx0XHRcdFx0XHQnPScsXG5cdFx0XHRcdFx0ZW5jb2RlKHZhbHVlLCBvcHRzKVxuXHRcdFx0XHRdLmpvaW4oJycpO1xuXHRcdFx0fTtcblx0fVxufVxuXG5mdW5jdGlvbiBwYXJzZXJGb3JBcnJheUZvcm1hdChvcHRzKSB7XG5cdHZhciByZXN1bHQ7XG5cblx0c3dpdGNoIChvcHRzLmFycmF5Rm9ybWF0KSB7XG5cdFx0Y2FzZSAnaW5kZXgnOlxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlLCBhY2N1bXVsYXRvcikge1xuXHRcdFx0XHRyZXN1bHQgPSAvXFxbKFxcZCopXFxdJC8uZXhlYyhrZXkpO1xuXG5cdFx0XHRcdGtleSA9IGtleS5yZXBsYWNlKC9cXFtcXGQqXFxdJC8sICcnKTtcblxuXHRcdFx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYWNjdW11bGF0b3Jba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHt9O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XVtyZXN1bHRbMV1dID0gdmFsdWU7XG5cdFx0XHR9O1xuXG5cdFx0Y2FzZSAnYnJhY2tldCc6XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUsIGFjY3VtdWxhdG9yKSB7XG5cdFx0XHRcdHJlc3VsdCA9IC8oXFxbXFxdKSQvLmV4ZWMoa2V5KTtcblx0XHRcdFx0a2V5ID0ga2V5LnJlcGxhY2UoL1xcW1xcXSQvLCAnJyk7XG5cblx0XHRcdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gdmFsdWU7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGFjY3VtdWxhdG9yW2tleV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSBbdmFsdWVdO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSBbXS5jb25jYXQoYWNjdW11bGF0b3Jba2V5XSwgdmFsdWUpO1xuXHRcdFx0fTtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUsIGFjY3VtdWxhdG9yKSB7XG5cdFx0XHRcdGlmIChhY2N1bXVsYXRvcltrZXldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gdmFsdWU7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IFtdLmNvbmNhdChhY2N1bXVsYXRvcltrZXldLCB2YWx1ZSk7XG5cdFx0XHR9O1xuXHR9XG59XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWx1ZSwgb3B0cykge1xuXHRpZiAob3B0cy5lbmNvZGUpIHtcblx0XHRyZXR1cm4gb3B0cy5zdHJpY3QgPyBzdHJpY3RVcmlFbmNvZGUodmFsdWUpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24ga2V5c1NvcnRlcihpbnB1dCkge1xuXHRpZiAoQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcblx0XHRyZXR1cm4gaW5wdXQuc29ydCgpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ29iamVjdCcpIHtcblx0XHRyZXR1cm4ga2V5c1NvcnRlcihPYmplY3Qua2V5cyhpbnB1dCkpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRcdHJldHVybiBOdW1iZXIoYSkgLSBOdW1iZXIoYik7XG5cdFx0fSkubWFwKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBpbnB1dFtrZXldO1xuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiBleHRyYWN0KHN0cikge1xuXHR2YXIgcXVlcnlTdGFydCA9IHN0ci5pbmRleE9mKCc/Jyk7XG5cdGlmIChxdWVyeVN0YXJ0ID09PSAtMSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXHRyZXR1cm4gc3RyLnNsaWNlKHF1ZXJ5U3RhcnQgKyAxKTtcbn1cblxuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRzKSB7XG5cdG9wdHMgPSBvYmplY3RBc3NpZ24oe2FycmF5Rm9ybWF0OiAnbm9uZSd9LCBvcHRzKTtcblxuXHR2YXIgZm9ybWF0dGVyID0gcGFyc2VyRm9yQXJyYXlGb3JtYXQob3B0cyk7XG5cblx0Ly8gQ3JlYXRlIGFuIG9iamVjdCB3aXRoIG5vIHByb3RvdHlwZVxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3F1ZXJ5LXN0cmluZy9pc3N1ZXMvNDdcblx0dmFyIHJldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0aWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXG5cdHN0ciA9IHN0ci50cmltKCkucmVwbGFjZSgvXls/IyZdLywgJycpO1xuXG5cdGlmICghc3RyKSB7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXG5cdHN0ci5zcGxpdCgnJicpLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG5cdFx0dmFyIHBhcnRzID0gcGFyYW0ucmVwbGFjZSgvXFwrL2csICcgJykuc3BsaXQoJz0nKTtcblx0XHQvLyBGaXJlZm94IChwcmUgNDApIGRlY29kZXMgYCUzRGAgdG8gYD1gXG5cdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9xdWVyeS1zdHJpbmcvcHVsbC8zN1xuXHRcdHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpO1xuXHRcdHZhciB2YWwgPSBwYXJ0cy5sZW5ndGggPiAwID8gcGFydHMuam9pbignPScpIDogdW5kZWZpbmVkO1xuXG5cdFx0Ly8gbWlzc2luZyBgPWAgc2hvdWxkIGJlIGBudWxsYDpcblx0XHQvLyBodHRwOi8vdzMub3JnL1RSLzIwMTIvV0QtdXJsLTIwMTIwNTI0LyNjb2xsZWN0LXVybC1wYXJhbWV0ZXJzXG5cdFx0dmFsID0gdmFsID09PSB1bmRlZmluZWQgPyBudWxsIDogZGVjb2RlQ29tcG9uZW50KHZhbCk7XG5cblx0XHRmb3JtYXR0ZXIoZGVjb2RlQ29tcG9uZW50KGtleSksIHZhbCwgcmV0KTtcblx0fSk7XG5cblx0cmV0dXJuIE9iamVjdC5rZXlzKHJldCkuc29ydCgpLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBrZXkpIHtcblx0XHR2YXIgdmFsID0gcmV0W2tleV07XG5cdFx0aWYgKEJvb2xlYW4odmFsKSAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheSh2YWwpKSB7XG5cdFx0XHQvLyBTb3J0IG9iamVjdCBrZXlzLCBub3QgdmFsdWVzXG5cdFx0XHRyZXN1bHRba2V5XSA9IGtleXNTb3J0ZXIodmFsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0W2tleV0gPSB2YWw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSwgT2JqZWN0LmNyZWF0ZShudWxsKSk7XG59XG5cbmV4cG9ydHMuZXh0cmFjdCA9IGV4dHJhY3Q7XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG5cbmV4cG9ydHMuc3RyaW5naWZ5ID0gZnVuY3Rpb24gKG9iaiwgb3B0cykge1xuXHR2YXIgZGVmYXVsdHMgPSB7XG5cdFx0ZW5jb2RlOiB0cnVlLFxuXHRcdHN0cmljdDogdHJ1ZSxcblx0XHRhcnJheUZvcm1hdDogJ25vbmUnXG5cdH07XG5cblx0b3B0cyA9IG9iamVjdEFzc2lnbihkZWZhdWx0cywgb3B0cyk7XG5cblx0aWYgKG9wdHMuc29ydCA9PT0gZmFsc2UpIHtcblx0XHRvcHRzLnNvcnQgPSBmdW5jdGlvbiAoKSB7fTtcblx0fVxuXG5cdHZhciBmb3JtYXR0ZXIgPSBlbmNvZGVyRm9yQXJyYXlGb3JtYXQob3B0cyk7XG5cblx0cmV0dXJuIG9iaiA/IE9iamVjdC5rZXlzKG9iaikuc29ydChvcHRzLnNvcnQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0dmFyIHZhbCA9IG9ialtrZXldO1xuXG5cdFx0aWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXG5cdFx0aWYgKHZhbCA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGVuY29kZShrZXksIG9wdHMpO1xuXHRcdH1cblxuXHRcdGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcblx0XHRcdHZhciByZXN1bHQgPSBbXTtcblxuXHRcdFx0dmFsLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAodmFsMikge1xuXHRcdFx0XHRpZiAodmFsMiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmVzdWx0LnB1c2goZm9ybWF0dGVyKGtleSwgdmFsMiwgcmVzdWx0Lmxlbmd0aCkpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiByZXN1bHQuam9pbignJicpO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbmNvZGUoa2V5LCBvcHRzKSArICc9JyArIGVuY29kZSh2YWwsIG9wdHMpO1xuXHR9KS5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4geC5sZW5ndGggPiAwO1xuXHR9KS5qb2luKCcmJykgOiAnJztcbn07XG5cbmV4cG9ydHMucGFyc2VVcmwgPSBmdW5jdGlvbiAoc3RyLCBvcHRzKSB7XG5cdHJldHVybiB7XG5cdFx0dXJsOiBzdHIuc3BsaXQoJz8nKVswXSB8fCAnJyxcblx0XHRxdWVyeTogcGFyc2UoZXh0cmFjdChzdHIpLCBvcHRzKVxuXHR9O1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0cikge1xuXHRyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvWyEnKCkqXS9nLCBmdW5jdGlvbiAoYykge1xuXHRcdHJldHVybiAnJScgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdH0pO1xufTtcbiIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOih0PXR8fHNlbGYpLlN3ZWV0YWxlcnQyPWUoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCl7cmV0dXJuKHI9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmdC5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmdCE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgdH0pKHQpfWZ1bmN0aW9uIGEodCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIG8odCxlKXtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIG89ZVtuXTtvLmVudW1lcmFibGU9by5lbnVtZXJhYmxlfHwhMSxvLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBvJiYoby53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsby5rZXksbyl9fWZ1bmN0aW9uIGModCxlLG4pe3JldHVybiBlJiZvKHQucHJvdG90eXBlLGUpLG4mJm8odCxuKSx0fWZ1bmN0aW9uIHMoKXtyZXR1cm4ocz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbih0KXtmb3IodmFyIGU9MTtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXt2YXIgbj1hcmd1bWVudHNbZV07Zm9yKHZhciBvIGluIG4pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sbykmJih0W29dPW5bb10pfXJldHVybiB0fSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIHUodCl7cmV0dXJuKHU9T2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5nZXRQcm90b3R5cGVPZjpmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZih0KX0pKHQpfWZ1bmN0aW9uIGwodCxlKXtyZXR1cm4obD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuX19wcm90b19fPWUsdH0pKHQsZSl9ZnVuY3Rpb24gZCgpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBSZWZsZWN0fHwhUmVmbGVjdC5jb25zdHJ1Y3QpcmV0dXJuITE7aWYoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSlyZXR1cm4hMTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm94eSlyZXR1cm4hMDt0cnl7cmV0dXJuIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSxbXSxmdW5jdGlvbigpe30pKSwhMH1jYXRjaCh0KXtyZXR1cm4hMX19ZnVuY3Rpb24gaSh0LGUsbil7cmV0dXJuKGk9ZCgpP1JlZmxlY3QuY29uc3RydWN0OmZ1bmN0aW9uKHQsZSxuKXt2YXIgbz1bbnVsbF07by5wdXNoLmFwcGx5KG8sZSk7dmFyIGk9bmV3KEZ1bmN0aW9uLmJpbmQuYXBwbHkodCxvKSk7cmV0dXJuIG4mJmwoaSxuLnByb3RvdHlwZSksaX0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX1mdW5jdGlvbiBwKHQsZSl7cmV0dXJuIWV8fFwib2JqZWN0XCIhPXR5cGVvZiBlJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBlP2Z1bmN0aW9uKHQpe2lmKHZvaWQgMD09PXQpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiB0fSh0KTplfWZ1bmN0aW9uIGYodCxlLG4pe3JldHVybihmPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBSZWZsZWN0JiZSZWZsZWN0LmdldD9SZWZsZWN0LmdldDpmdW5jdGlvbih0LGUsbil7dmFyIG89ZnVuY3Rpb24odCxlKXtmb3IoOyFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKSYmbnVsbCE9PSh0PXUodCkpOyk7cmV0dXJuIHR9KHQsZSk7aWYobyl7dmFyIGk9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvLGUpO3JldHVybiBpLmdldD9pLmdldC5jYWxsKG4pOmkudmFsdWV9fSkodCxlLG58fHQpfWZ1bmN0aW9uIG0oZSl7cmV0dXJuIE9iamVjdC5rZXlzKGUpLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0pfWZ1bmN0aW9uIGgodCl7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHQpfWZ1bmN0aW9uIGcodCxlKXt2YXIgbjtuPSdcIicuY29uY2F0KHQsJ1wiIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLiBQbGVhc2UgdXNlIFwiJykuY29uY2F0KGUsJ1wiIGluc3RlYWQuJyksLTE9PT16LmluZGV4T2YobikmJih6LnB1c2gobiksXyhuKSl9ZnVuY3Rpb24gdih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgdC50b1Byb21pc2V9ZnVuY3Rpb24gYih0KXtyZXR1cm4gdih0KT90LnRvUHJvbWlzZSgpOlByb21pc2UucmVzb2x2ZSh0KX1mdW5jdGlvbiB5KHQpe3JldHVybiB0JiZQcm9taXNlLnJlc29sdmUodCk9PT10fWZ1bmN0aW9uIHcodCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBFbGVtZW50fHxcIm9iamVjdFwiPT09cihlPXQpJiZlLmpxdWVyeTt2YXIgZX1mdW5jdGlvbiB0KHQpe3ZhciBlPXt9O2Zvcih2YXIgbiBpbiB0KWVbdFtuXV09XCJzd2FsMi1cIit0W25dO3JldHVybiBlfWZ1bmN0aW9uIEModCl7dmFyIGU9USgpO3JldHVybiBlP2UucXVlcnlTZWxlY3Rvcih0KTpudWxsfWZ1bmN0aW9uIGUodCl7cmV0dXJuIEMoXCIuXCIuY29uY2F0KHQpKX1mdW5jdGlvbiBuKCl7dmFyIHQ9JCgpO3JldHVybiBoKHQucXVlcnlTZWxlY3RvckFsbChcIi5cIi5jb25jYXQoWS5pY29uKSkpfWZ1bmN0aW9uIGsoKXt2YXIgdD1uKCkuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiB2dCh0KX0pO3JldHVybiB0Lmxlbmd0aD90WzBdOm51bGx9ZnVuY3Rpb24geCgpe3JldHVybiBlKFkudGl0bGUpfWZ1bmN0aW9uIFAoKXtyZXR1cm4gZShZLmNvbnRlbnQpfWZ1bmN0aW9uIEEoKXtyZXR1cm4gZShZLmltYWdlKX1mdW5jdGlvbiBCKCl7cmV0dXJuIGUoWVtcInByb2dyZXNzLXN0ZXBzXCJdKX1mdW5jdGlvbiBTKCl7cmV0dXJuIGUoWVtcInZhbGlkYXRpb24tbWVzc2FnZVwiXSl9ZnVuY3Rpb24gRSgpe3JldHVybiBDKFwiLlwiLmNvbmNhdChZLmFjdGlvbnMsXCIgLlwiKS5jb25jYXQoWS5jb25maXJtKSl9ZnVuY3Rpb24gTygpe3JldHVybiBDKFwiLlwiLmNvbmNhdChZLmFjdGlvbnMsXCIgLlwiKS5jb25jYXQoWS5jYW5jZWwpKX1mdW5jdGlvbiBUKCl7cmV0dXJuIGUoWS5hY3Rpb25zKX1mdW5jdGlvbiBMKCl7cmV0dXJuIGUoWS5oZWFkZXIpfWZ1bmN0aW9uIGooKXtyZXR1cm4gZShZLmZvb3Rlcil9ZnVuY3Rpb24gcSgpe3JldHVybiBlKFlbXCJ0aW1lci1wcm9ncmVzcy1iYXJcIl0pfWZ1bmN0aW9uIEkoKXtyZXR1cm4gZShZLmNsb3NlKX1mdW5jdGlvbiBWKCl7dmFyIHQ9aCgkKCkucXVlcnlTZWxlY3RvckFsbCgnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4PVwiLTFcIl0pOm5vdChbdGFiaW5kZXg9XCIwXCJdKScpKS5zb3J0KGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQ9cGFyc2VJbnQodC5nZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKSksKGU9cGFyc2VJbnQoZS5nZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKSkpPHQ/MTp0PGU/LTE6MH0pLGU9aCgkKCkucXVlcnlTZWxlY3RvckFsbCgnXFxuICBhW2hyZWZdLFxcbiAgYXJlYVtocmVmXSxcXG4gIGlucHV0Om5vdChbZGlzYWJsZWRdKSxcXG4gIHNlbGVjdDpub3QoW2Rpc2FibGVkXSksXFxuICB0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSksXFxuICBidXR0b246bm90KFtkaXNhYmxlZF0pLFxcbiAgaWZyYW1lLFxcbiAgb2JqZWN0LFxcbiAgZW1iZWQsXFxuICBbdGFiaW5kZXg9XCIwXCJdLFxcbiAgW2NvbnRlbnRlZGl0YWJsZV0sXFxuICBhdWRpb1tjb250cm9sc10sXFxuICB2aWRlb1tjb250cm9sc10sXFxuICBzdW1tYXJ5XFxuJykpLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm5cIi0xXCIhPT10LmdldEF0dHJpYnV0ZShcInRhYmluZGV4XCIpfSk7cmV0dXJuIGZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1bXSxuPTA7bjx0Lmxlbmd0aDtuKyspLTE9PT1lLmluZGV4T2YodFtuXSkmJmUucHVzaCh0W25dKTtyZXR1cm4gZX0odC5jb25jYXQoZSkpLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4gdnQodCl9KX1mdW5jdGlvbiBNKCl7cmV0dXJuIUooKSYmIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFlbXCJuby1iYWNrZHJvcFwiXSl9ZnVuY3Rpb24gUigpe3JldHVybiAkKCkuaGFzQXR0cmlidXRlKFwiZGF0YS1sb2FkaW5nXCIpfWZ1bmN0aW9uIEgoZSx0KXt2YXIgbjtlLnRleHRDb250ZW50PVwiXCIsdCYmKG49KG5ldyBET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyh0LFwidGV4dC9odG1sXCIpLGgobi5xdWVyeVNlbGVjdG9yKFwiaGVhZFwiKS5jaGlsZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2UuYXBwZW5kQ2hpbGQodCl9KSxoKG4ucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2hpbGROb2RlcykuZm9yRWFjaChmdW5jdGlvbih0KXtlLmFwcGVuZENoaWxkKHQpfSkpfWZ1bmN0aW9uIEQodCxlKXtpZihlKXtmb3IodmFyIG49ZS5zcGxpdCgvXFxzKy8pLG89MDtvPG4ubGVuZ3RoO28rKylpZighdC5jbGFzc0xpc3QuY29udGFpbnMobltvXSkpcmV0dXJuO3JldHVybiAxfX1mdW5jdGlvbiBOKHQsZSxuKXt2YXIgbyxpO2lmKGk9ZSxoKChvPXQpLmNsYXNzTGlzdCkuZm9yRWFjaChmdW5jdGlvbih0KXstMT09PW0oWSkuaW5kZXhPZih0KSYmLTE9PT1tKFopLmluZGV4T2YodCkmJi0xPT09bShpLnNob3dDbGFzcykuaW5kZXhPZih0KSYmby5jbGFzc0xpc3QucmVtb3ZlKHQpfSksZS5jdXN0b21DbGFzcyYmZS5jdXN0b21DbGFzc1tuXSl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUuY3VzdG9tQ2xhc3Nbbl0mJiFlLmN1c3RvbUNsYXNzW25dLmZvckVhY2gpcmV0dXJuIF8oXCJJbnZhbGlkIHR5cGUgb2YgY3VzdG9tQ2xhc3MuXCIuY29uY2F0KG4sJyEgRXhwZWN0ZWQgc3RyaW5nIG9yIGl0ZXJhYmxlIG9iamVjdCwgZ290IFwiJykuY29uY2F0KHIoZS5jdXN0b21DbGFzc1tuXSksJ1wiJykpO210KHQsZS5jdXN0b21DbGFzc1tuXSl9fXZhciBVPVwiU3dlZXRBbGVydDI6XCIsXz1mdW5jdGlvbih0KXtjb25zb2xlLndhcm4oXCJcIi5jb25jYXQoVSxcIiBcIikuY29uY2F0KHQpKX0sRj1mdW5jdGlvbih0KXtjb25zb2xlLmVycm9yKFwiXCIuY29uY2F0KFUsXCIgXCIpLmNvbmNhdCh0KSl9LHo9W10sVz1mdW5jdGlvbih0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3QoKTp0fSxLPU9iamVjdC5mcmVlemUoe2NhbmNlbDpcImNhbmNlbFwiLGJhY2tkcm9wOlwiYmFja2Ryb3BcIixjbG9zZTpcImNsb3NlXCIsZXNjOlwiZXNjXCIsdGltZXI6XCJ0aW1lclwifSksWT10KFtcImNvbnRhaW5lclwiLFwic2hvd25cIixcImhlaWdodC1hdXRvXCIsXCJpb3NmaXhcIixcInBvcHVwXCIsXCJtb2RhbFwiLFwibm8tYmFja2Ryb3BcIixcIm5vLXRyYW5zaXRpb25cIixcInRvYXN0XCIsXCJ0b2FzdC1zaG93blwiLFwidG9hc3QtY29sdW1uXCIsXCJzaG93XCIsXCJoaWRlXCIsXCJjbG9zZVwiLFwidGl0bGVcIixcImhlYWRlclwiLFwiY29udGVudFwiLFwiaHRtbC1jb250YWluZXJcIixcImFjdGlvbnNcIixcImNvbmZpcm1cIixcImNhbmNlbFwiLFwiZm9vdGVyXCIsXCJpY29uXCIsXCJpY29uLWNvbnRlbnRcIixcImltYWdlXCIsXCJpbnB1dFwiLFwiZmlsZVwiLFwicmFuZ2VcIixcInNlbGVjdFwiLFwicmFkaW9cIixcImNoZWNrYm94XCIsXCJsYWJlbFwiLFwidGV4dGFyZWFcIixcImlucHV0ZXJyb3JcIixcInZhbGlkYXRpb24tbWVzc2FnZVwiLFwicHJvZ3Jlc3Mtc3RlcHNcIixcImFjdGl2ZS1wcm9ncmVzcy1zdGVwXCIsXCJwcm9ncmVzcy1zdGVwXCIsXCJwcm9ncmVzcy1zdGVwLWxpbmVcIixcImxvYWRpbmdcIixcInN0eWxlZFwiLFwidG9wXCIsXCJ0b3Atc3RhcnRcIixcInRvcC1lbmRcIixcInRvcC1sZWZ0XCIsXCJ0b3AtcmlnaHRcIixcImNlbnRlclwiLFwiY2VudGVyLXN0YXJ0XCIsXCJjZW50ZXItZW5kXCIsXCJjZW50ZXItbGVmdFwiLFwiY2VudGVyLXJpZ2h0XCIsXCJib3R0b21cIixcImJvdHRvbS1zdGFydFwiLFwiYm90dG9tLWVuZFwiLFwiYm90dG9tLWxlZnRcIixcImJvdHRvbS1yaWdodFwiLFwiZ3Jvdy1yb3dcIixcImdyb3ctY29sdW1uXCIsXCJncm93LWZ1bGxzY3JlZW5cIixcInJ0bFwiLFwidGltZXItcHJvZ3Jlc3MtYmFyXCIsXCJ0aW1lci1wcm9ncmVzcy1iYXItY29udGFpbmVyXCIsXCJzY3JvbGxiYXItbWVhc3VyZVwiLFwiaWNvbi1zdWNjZXNzXCIsXCJpY29uLXdhcm5pbmdcIixcImljb24taW5mb1wiLFwiaWNvbi1xdWVzdGlvblwiLFwiaWNvbi1lcnJvclwiXSksWj10KFtcInN1Y2Nlc3NcIixcIndhcm5pbmdcIixcImluZm9cIixcInF1ZXN0aW9uXCIsXCJlcnJvclwiXSksUT1mdW5jdGlvbigpe3JldHVybiBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KFkuY29udGFpbmVyKSl9LCQ9ZnVuY3Rpb24oKXtyZXR1cm4gZShZLnBvcHVwKX0sSj1mdW5jdGlvbigpe3JldHVybiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhZW1widG9hc3Qtc2hvd25cIl0pfSxYPXtwcmV2aW91c0JvZHlQYWRkaW5nOm51bGx9O2Z1bmN0aW9uIEcodCxlKXtpZighZSlyZXR1cm4gbnVsbDtzd2l0Y2goZSl7Y2FzZVwic2VsZWN0XCI6Y2FzZVwidGV4dGFyZWFcIjpjYXNlXCJmaWxlXCI6cmV0dXJuIGd0KHQsWVtlXSk7Y2FzZVwiY2hlY2tib3hcIjpyZXR1cm4gdC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChZLmNoZWNrYm94LFwiIGlucHV0XCIpKTtjYXNlXCJyYWRpb1wiOnJldHVybiB0LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KFkucmFkaW8sXCIgaW5wdXQ6Y2hlY2tlZFwiKSl8fHQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoWS5yYWRpbyxcIiBpbnB1dDpmaXJzdC1jaGlsZFwiKSk7Y2FzZVwicmFuZ2VcIjpyZXR1cm4gdC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChZLnJhbmdlLFwiIGlucHV0XCIpKTtkZWZhdWx0OnJldHVybiBndCh0LFkuaW5wdXQpfX1mdW5jdGlvbiB0dCh0KXt2YXIgZTt0LmZvY3VzKCksXCJmaWxlXCIhPT10LnR5cGUmJihlPXQudmFsdWUsdC52YWx1ZT1cIlwiLHQudmFsdWU9ZSl9ZnVuY3Rpb24gZXQodCxlLG4pe3QmJmUmJihcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9ZS5zcGxpdCgvXFxzKy8pLmZpbHRlcihCb29sZWFuKSksZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3QuZm9yRWFjaD90LmZvckVhY2goZnVuY3Rpb24odCl7bj90LmNsYXNzTGlzdC5hZGQoZSk6dC5jbGFzc0xpc3QucmVtb3ZlKGUpfSk6bj90LmNsYXNzTGlzdC5hZGQoZSk6dC5jbGFzc0xpc3QucmVtb3ZlKGUpfSkpfWZ1bmN0aW9uIG50KHQsZSxuKXtufHwwPT09cGFyc2VJbnQobik/dC5zdHlsZVtlXT1cIm51bWJlclwiPT10eXBlb2Ygbj9cIlwiLmNvbmNhdChuLFwicHhcIik6bjp0LnN0eWxlLnJlbW92ZVByb3BlcnR5KGUpfWZ1bmN0aW9uIG90KHQsZSl7dmFyIG49MTxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1lP2U6XCJmbGV4XCI7dC5zdHlsZS5vcGFjaXR5PVwiXCIsdC5zdHlsZS5kaXNwbGF5PW59ZnVuY3Rpb24gaXQodCl7dC5zdHlsZS5vcGFjaXR5PVwiXCIsdC5zdHlsZS5kaXNwbGF5PVwibm9uZVwifWZ1bmN0aW9uIHJ0KHQsZSxuKXtlP290KHQsbik6aXQodCl9ZnVuY3Rpb24gYXQodCl7cmV0dXJuISEodC5zY3JvbGxIZWlnaHQ+dC5jbGllbnRIZWlnaHQpfWZ1bmN0aW9uIGN0KHQpe3ZhciBlPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQpLG49cGFyc2VGbG9hdChlLmdldFByb3BlcnR5VmFsdWUoXCJhbmltYXRpb24tZHVyYXRpb25cIil8fFwiMFwiKSxvPXBhcnNlRmxvYXQoZS5nZXRQcm9wZXJ0eVZhbHVlKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiKXx8XCIwXCIpO3JldHVybiAwPG58fDA8b31mdW5jdGlvbiBzdCh0LGUpe3ZhciBuPTE8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09ZSYmZSxvPXEoKTt2dChvKSYmKG4mJihvLnN0eWxlLnRyYW5zaXRpb249XCJub25lXCIsby5zdHlsZS53aWR0aD1cIjEwMCVcIiksc2V0VGltZW91dChmdW5jdGlvbigpe28uc3R5bGUudHJhbnNpdGlvbj1cIndpZHRoIFwiLmNvbmNhdCh0LzFlMyxcInMgbGluZWFyXCIpLG8uc3R5bGUud2lkdGg9XCIwJVwifSwxMCkpfWZ1bmN0aW9uIHV0KCl7cmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIHdpbmRvd3x8XCJ1bmRlZmluZWRcIj09dHlwZW9mIGRvY3VtZW50fWZ1bmN0aW9uIGx0KHQpe3NuLmlzVmlzaWJsZSgpJiZmdCE9PXQudGFyZ2V0LnZhbHVlJiZzbi5yZXNldFZhbGlkYXRpb25NZXNzYWdlKCksZnQ9dC50YXJnZXQudmFsdWV9ZnVuY3Rpb24gZHQodCxlKXt0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ/ZS5hcHBlbmRDaGlsZCh0KTpcIm9iamVjdFwiPT09cih0KT93dCh0LGUpOnQmJkgoZSx0KX1mdW5jdGlvbiBwdCh0LGUpe3ZhciBuPVQoKSxvPUUoKSxpPU8oKTtlLnNob3dDb25maXJtQnV0dG9ufHxlLnNob3dDYW5jZWxCdXR0b258fGl0KG4pLE4obixlLFwiYWN0aW9uc1wiKSx4dChvLFwiY29uZmlybVwiLGUpLHh0KGksXCJjYW5jZWxcIixlKSxlLmJ1dHRvbnNTdHlsaW5nP2Z1bmN0aW9uKHQsZSxuKXttdChbdCxlXSxZLnN0eWxlZCksbi5jb25maXJtQnV0dG9uQ29sb3ImJih0LnN0eWxlLmJhY2tncm91bmRDb2xvcj1uLmNvbmZpcm1CdXR0b25Db2xvcik7bi5jYW5jZWxCdXR0b25Db2xvciYmKGUuc3R5bGUuYmFja2dyb3VuZENvbG9yPW4uY2FuY2VsQnV0dG9uQ29sb3IpO3t2YXIgbztSKCl8fChvPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQpLmdldFByb3BlcnR5VmFsdWUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIpLHQuc3R5bGUuYm9yZGVyTGVmdENvbG9yPW8sdC5zdHlsZS5ib3JkZXJSaWdodENvbG9yPW8pfX0obyxpLGUpOihodChbbyxpXSxZLnN0eWxlZCksby5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9by5zdHlsZS5ib3JkZXJMZWZ0Q29sb3I9by5zdHlsZS5ib3JkZXJSaWdodENvbG9yPVwiXCIsaS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9aS5zdHlsZS5ib3JkZXJMZWZ0Q29sb3I9aS5zdHlsZS5ib3JkZXJSaWdodENvbG9yPVwiXCIpLGUucmV2ZXJzZUJ1dHRvbnMmJm8ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaSxvKX12YXIgZnQsbXQ9ZnVuY3Rpb24odCxlKXtldCh0LGUsITApfSxodD1mdW5jdGlvbih0LGUpe2V0KHQsZSwhMSl9LGd0PWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBuPTA7bjx0LmNoaWxkTm9kZXMubGVuZ3RoO24rKylpZihEKHQuY2hpbGROb2Rlc1tuXSxlKSlyZXR1cm4gdC5jaGlsZE5vZGVzW25dfSx2dD1mdW5jdGlvbih0KXtyZXR1cm4hKCF0fHwhKHQub2Zmc2V0V2lkdGh8fHQub2Zmc2V0SGVpZ2h0fHx0LmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSl9LGJ0PSdcXG4gPGRpdiBhcmlhLWxhYmVsbGVkYnk9XCInLmNvbmNhdChZLnRpdGxlLCdcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiJykuY29uY2F0KFkuY29udGVudCwnXCIgY2xhc3M9XCInKS5jb25jYXQoWS5wb3B1cCwnXCIgdGFiaW5kZXg9XCItMVwiPlxcbiAgIDxkaXYgY2xhc3M9XCInKS5jb25jYXQoWS5oZWFkZXIsJ1wiPlxcbiAgICAgPHVsIGNsYXNzPVwiJykuY29uY2F0KFlbXCJwcm9ncmVzcy1zdGVwc1wiXSwnXCI+PC91bD5cXG4gICAgIDxkaXYgY2xhc3M9XCInKS5jb25jYXQoWS5pY29uLFwiIFwiKS5jb25jYXQoWi5lcnJvciwnXCI+PC9kaXY+XFxuICAgICA8ZGl2IGNsYXNzPVwiJykuY29uY2F0KFkuaWNvbixcIiBcIikuY29uY2F0KFoucXVlc3Rpb24sJ1wiPjwvZGl2PlxcbiAgICAgPGRpdiBjbGFzcz1cIicpLmNvbmNhdChZLmljb24sXCIgXCIpLmNvbmNhdChaLndhcm5pbmcsJ1wiPjwvZGl2PlxcbiAgICAgPGRpdiBjbGFzcz1cIicpLmNvbmNhdChZLmljb24sXCIgXCIpLmNvbmNhdChaLmluZm8sJ1wiPjwvZGl2PlxcbiAgICAgPGRpdiBjbGFzcz1cIicpLmNvbmNhdChZLmljb24sXCIgXCIpLmNvbmNhdChaLnN1Y2Nlc3MsJ1wiPjwvZGl2PlxcbiAgICAgPGltZyBjbGFzcz1cIicpLmNvbmNhdChZLmltYWdlLCdcIiAvPlxcbiAgICAgPGgyIGNsYXNzPVwiJykuY29uY2F0KFkudGl0bGUsJ1wiIGlkPVwiJykuY29uY2F0KFkudGl0bGUsJ1wiPjwvaDI+XFxuICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIicpLmNvbmNhdChZLmNsb3NlLCdcIj48L2J1dHRvbj5cXG4gICA8L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVwiJykuY29uY2F0KFkuY29udGVudCwnXCI+XFxuICAgICA8ZGl2IGlkPVwiJykuY29uY2F0KFkuY29udGVudCwnXCIgY2xhc3M9XCInKS5jb25jYXQoWVtcImh0bWwtY29udGFpbmVyXCJdLCdcIj48L2Rpdj5cXG4gICAgIDxpbnB1dCBjbGFzcz1cIicpLmNvbmNhdChZLmlucHV0LCdcIiAvPlxcbiAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3M9XCInKS5jb25jYXQoWS5maWxlLCdcIiAvPlxcbiAgICAgPGRpdiBjbGFzcz1cIicpLmNvbmNhdChZLnJhbmdlLCdcIj5cXG4gICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIC8+XFxuICAgICAgIDxvdXRwdXQ+PC9vdXRwdXQ+XFxuICAgICA8L2Rpdj5cXG4gICAgIDxzZWxlY3QgY2xhc3M9XCInKS5jb25jYXQoWS5zZWxlY3QsJ1wiPjwvc2VsZWN0PlxcbiAgICAgPGRpdiBjbGFzcz1cIicpLmNvbmNhdChZLnJhZGlvLCdcIj48L2Rpdj5cXG4gICAgIDxsYWJlbCBmb3I9XCInKS5jb25jYXQoWS5jaGVja2JveCwnXCIgY2xhc3M9XCInKS5jb25jYXQoWS5jaGVja2JveCwnXCI+XFxuICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxcbiAgICAgICA8c3BhbiBjbGFzcz1cIicpLmNvbmNhdChZLmxhYmVsLCdcIj48L3NwYW4+XFxuICAgICA8L2xhYmVsPlxcbiAgICAgPHRleHRhcmVhIGNsYXNzPVwiJykuY29uY2F0KFkudGV4dGFyZWEsJ1wiPjwvdGV4dGFyZWE+XFxuICAgICA8ZGl2IGNsYXNzPVwiJykuY29uY2F0KFlbXCJ2YWxpZGF0aW9uLW1lc3NhZ2VcIl0sJ1wiIGlkPVwiJykuY29uY2F0KFlbXCJ2YWxpZGF0aW9uLW1lc3NhZ2VcIl0sJ1wiPjwvZGl2PlxcbiAgIDwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XCInKS5jb25jYXQoWS5hY3Rpb25zLCdcIj5cXG4gICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJykuY29uY2F0KFkuY29uZmlybSwnXCI+T0s8L2J1dHRvbj5cXG4gICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJykuY29uY2F0KFkuY2FuY2VsLCdcIj5DYW5jZWw8L2J1dHRvbj5cXG4gICA8L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVwiJykuY29uY2F0KFkuZm9vdGVyLCdcIj48L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVwiJykuY29uY2F0KFlbXCJ0aW1lci1wcm9ncmVzcy1iYXItY29udGFpbmVyXCJdLCdcIj5cXG4gICAgIDxkaXYgY2xhc3M9XCInKS5jb25jYXQoWVtcInRpbWVyLXByb2dyZXNzLWJhclwiXSwnXCI+PC9kaXY+XFxuICAgPC9kaXY+XFxuIDwvZGl2PlxcbicpLnJlcGxhY2UoLyhefFxcbilcXHMqL2csXCJcIikseXQ9ZnVuY3Rpb24odCl7dmFyIGUsbixvLGkscixhLGMscyx1LGwsZCxwLGYsbSxoLGc9ISEoZT1RKCkpJiYoZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpLGh0KFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsZG9jdW1lbnQuYm9keV0sW1lbXCJuby1iYWNrZHJvcFwiXSxZW1widG9hc3Qtc2hvd25cIl0sWVtcImhhcy1jb2x1bW5cIl1dKSwhMCk7dXQoKT9GKFwiU3dlZXRBbGVydDIgcmVxdWlyZXMgZG9jdW1lbnQgdG8gaW5pdGlhbGl6ZVwiKTooKG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkuY2xhc3NOYW1lPVkuY29udGFpbmVyLGcmJm10KG4sWVtcIm5vLXRyYW5zaXRpb25cIl0pLEgobixidCksKG89XCJzdHJpbmdcIj09dHlwZW9mKGk9dC50YXJnZXQpP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaSk6aSkuYXBwZW5kQ2hpbGQobikscj10LChhPSQoKSkuc2V0QXR0cmlidXRlKFwicm9sZVwiLHIudG9hc3Q/XCJhbGVydFwiOlwiZGlhbG9nXCIpLGEuc2V0QXR0cmlidXRlKFwiYXJpYS1saXZlXCIsci50b2FzdD9cInBvbGl0ZVwiOlwiYXNzZXJ0aXZlXCIpLHIudG9hc3R8fGEuc2V0QXR0cmlidXRlKFwiYXJpYS1tb2RhbFwiLFwidHJ1ZVwiKSxjPW8sXCJydGxcIj09PXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGMpLmRpcmVjdGlvbiYmbXQoUSgpLFkucnRsKSxzPVAoKSx1PWd0KHMsWS5pbnB1dCksbD1ndChzLFkuZmlsZSksZD1zLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KFkucmFuZ2UsXCIgaW5wdXRcIikpLHA9cy5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChZLnJhbmdlLFwiIG91dHB1dFwiKSksZj1ndChzLFkuc2VsZWN0KSxtPXMucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoWS5jaGVja2JveCxcIiBpbnB1dFwiKSksaD1ndChzLFkudGV4dGFyZWEpLHUub25pbnB1dD1sdCxsLm9uY2hhbmdlPWx0LGYub25jaGFuZ2U9bHQsbS5vbmNoYW5nZT1sdCxoLm9uaW5wdXQ9bHQsZC5vbmlucHV0PWZ1bmN0aW9uKHQpe2x0KHQpLHAudmFsdWU9ZC52YWx1ZX0sZC5vbmNoYW5nZT1mdW5jdGlvbih0KXtsdCh0KSxkLm5leHRTaWJsaW5nLnZhbHVlPWQudmFsdWV9KX0sd3Q9ZnVuY3Rpb24odCxlKXt0LmpxdWVyeT9DdChlLHQpOkgoZSx0LnRvU3RyaW5nKCkpfSxDdD1mdW5jdGlvbih0LGUpe2lmKHQudGV4dENvbnRlbnQ9XCJcIiwwIGluIGUpZm9yKHZhciBuPTA7biBpbiBlO24rKyl0LmFwcGVuZENoaWxkKGVbbl0uY2xvbmVOb2RlKCEwKSk7ZWxzZSB0LmFwcGVuZENoaWxkKGUuY2xvbmVOb2RlKCEwKSl9LGt0PWZ1bmN0aW9uKCl7aWYodXQoKSlyZXR1cm4hMTt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGU9e1dlYmtpdEFuaW1hdGlvbjpcIndlYmtpdEFuaW1hdGlvbkVuZFwiLE9BbmltYXRpb246XCJvQW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmRcIixhbmltYXRpb246XCJhbmltYXRpb25lbmRcIn07Zm9yKHZhciBuIGluIGUpaWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbikmJnZvaWQgMCE9PXQuc3R5bGVbbl0pcmV0dXJuIGVbbl07cmV0dXJuITF9KCk7ZnVuY3Rpb24geHQodCxlLG4pe3ZhciBvO3J0KHQsbltcInNob3dcIi5jb25jYXQoKG89ZSkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrby5zbGljZSgxKSxcIkJ1dHRvblwiKV0sXCJpbmxpbmUtYmxvY2tcIiksSCh0LG5bXCJcIi5jb25jYXQoZSxcIkJ1dHRvblRleHRcIildKSx0LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIixuW1wiXCIuY29uY2F0KGUsXCJCdXR0b25BcmlhTGFiZWxcIildKSx0LmNsYXNzTmFtZT1ZW2VdLE4odCxuLFwiXCIuY29uY2F0KGUsXCJCdXR0b25cIikpLG10KHQsbltcIlwiLmNvbmNhdChlLFwiQnV0dG9uQ2xhc3NcIildKX1mdW5jdGlvbiBQdCh0LGUpe3ZhciBuLG8saSxyLGEsYyxzLHUsbD1RKCk7bCYmKG49bCxcInN0cmluZ1wiPT10eXBlb2Yobz1lLmJhY2tkcm9wKT9uLnN0eWxlLmJhY2tncm91bmQ9bzpvfHxtdChbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LGRvY3VtZW50LmJvZHldLFlbXCJuby1iYWNrZHJvcFwiXSksIWUuYmFja2Ryb3AmJmUuYWxsb3dPdXRzaWRlQ2xpY2smJl8oJ1wiYWxsb3dPdXRzaWRlQ2xpY2tcIiBwYXJhbWV0ZXIgcmVxdWlyZXMgYGJhY2tkcm9wYCBwYXJhbWV0ZXIgdG8gYmUgc2V0IHRvIGB0cnVlYCcpLGk9bCwocj1lLnBvc2l0aW9uKWluIFk/bXQoaSxZW3JdKTooXygnVGhlIFwicG9zaXRpb25cIiBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkLCBkZWZhdWx0aW5nIHRvIFwiY2VudGVyXCInKSxtdChpLFkuY2VudGVyKSksYT1sLCEoYz1lLmdyb3cpfHxcInN0cmluZ1wiIT10eXBlb2YgY3x8KHM9XCJncm93LVwiLmNvbmNhdChjKSlpbiBZJiZtdChhLFlbc10pLE4obCxlLFwiY29udGFpbmVyXCIpLCh1PWRvY3VtZW50LmJvZHkuZ2V0QXR0cmlidXRlKFwiZGF0YS1zd2FsMi1xdWV1ZS1zdGVwXCIpKSYmKGwuc2V0QXR0cmlidXRlKFwiZGF0YS1xdWV1ZS1zdGVwXCIsdSksZG9jdW1lbnQuYm9keS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXN3YWwyLXF1ZXVlLXN0ZXBcIikpKX1mdW5jdGlvbiBBdCh0LGUpe3QucGxhY2Vob2xkZXImJiFlLmlucHV0UGxhY2Vob2xkZXJ8fCh0LnBsYWNlaG9sZGVyPWUuaW5wdXRQbGFjZWhvbGRlcil9dmFyIEJ0PXtwcm9taXNlOm5ldyBXZWFrTWFwLGlubmVyUGFyYW1zOm5ldyBXZWFrTWFwLGRvbUNhY2hlOm5ldyBXZWFrTWFwfSxTdD1bXCJpbnB1dFwiLFwiZmlsZVwiLFwicmFuZ2VcIixcInNlbGVjdFwiLFwicmFkaW9cIixcImNoZWNrYm94XCIsXCJ0ZXh0YXJlYVwiXSxFdD1mdW5jdGlvbih0KXtpZighanRbdC5pbnB1dF0pcmV0dXJuIEYoJ1VuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dCEgRXhwZWN0ZWQgXCJ0ZXh0XCIsIFwiZW1haWxcIiwgXCJwYXNzd29yZFwiLCBcIm51bWJlclwiLCBcInRlbFwiLCBcInNlbGVjdFwiLCBcInJhZGlvXCIsIFwiY2hlY2tib3hcIiwgXCJ0ZXh0YXJlYVwiLCBcImZpbGVcIiBvciBcInVybFwiLCBnb3QgXCInLmNvbmNhdCh0LmlucHV0LCdcIicpKTt2YXIgZT1MdCh0LmlucHV0KSxuPWp0W3QuaW5wdXRdKGUsdCk7b3Qobiksc2V0VGltZW91dChmdW5jdGlvbigpe3R0KG4pfSl9LE90PWZ1bmN0aW9uKHQsZSl7dmFyIG49RyhQKCksdCk7aWYobilmb3IodmFyIG8gaW4hZnVuY3Rpb24odCl7Zm9yKHZhciBlPTA7ZTx0LmF0dHJpYnV0ZXMubGVuZ3RoO2UrKyl7dmFyIG49dC5hdHRyaWJ1dGVzW2VdLm5hbWU7LTE9PT1bXCJ0eXBlXCIsXCJ2YWx1ZVwiLFwic3R5bGVcIl0uaW5kZXhPZihuKSYmdC5yZW1vdmVBdHRyaWJ1dGUobil9fShuKSxlKVwicmFuZ2VcIj09PXQmJlwicGxhY2Vob2xkZXJcIj09PW98fG4uc2V0QXR0cmlidXRlKG8sZVtvXSl9LFR0PWZ1bmN0aW9uKHQpe3ZhciBlPUx0KHQuaW5wdXQpO3QuY3VzdG9tQ2xhc3MmJm10KGUsdC5jdXN0b21DbGFzcy5pbnB1dCl9LEx0PWZ1bmN0aW9uKHQpe3ZhciBlPVlbdF0/WVt0XTpZLmlucHV0O3JldHVybiBndChQKCksZSl9LGp0PXt9O2p0LnRleHQ9anQuZW1haWw9anQucGFzc3dvcmQ9anQubnVtYmVyPWp0LnRlbD1qdC51cmw9ZnVuY3Rpb24odCxlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZS5pbnB1dFZhbHVlfHxcIm51bWJlclwiPT10eXBlb2YgZS5pbnB1dFZhbHVlP3QudmFsdWU9ZS5pbnB1dFZhbHVlOnkoZS5pbnB1dFZhbHVlKXx8XygnVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0VmFsdWUhIEV4cGVjdGVkIFwic3RyaW5nXCIsIFwibnVtYmVyXCIgb3IgXCJQcm9taXNlXCIsIGdvdCBcIicuY29uY2F0KHIoZS5pbnB1dFZhbHVlKSwnXCInKSksQXQodCxlKSx0LnR5cGU9ZS5pbnB1dCx0fSxqdC5maWxlPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIEF0KHQsZSksdH0sanQucmFuZ2U9ZnVuY3Rpb24odCxlKXt2YXIgbj10LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKSxvPXQucXVlcnlTZWxlY3RvcihcIm91dHB1dFwiKTtyZXR1cm4gbi52YWx1ZT1lLmlucHV0VmFsdWUsbi50eXBlPWUuaW5wdXQsby52YWx1ZT1lLmlucHV0VmFsdWUsdH0sanQuc2VsZWN0PWZ1bmN0aW9uKHQsZSl7dmFyIG47cmV0dXJuIHQudGV4dENvbnRlbnQ9XCJcIixlLmlucHV0UGxhY2Vob2xkZXImJihuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiksSChuLGUuaW5wdXRQbGFjZWhvbGRlciksbi52YWx1ZT1cIlwiLG4uZGlzYWJsZWQ9ITAsbi5zZWxlY3RlZD0hMCx0LmFwcGVuZENoaWxkKG4pKSx0fSxqdC5yYWRpbz1mdW5jdGlvbih0KXtyZXR1cm4gdC50ZXh0Q29udGVudD1cIlwiLHR9LGp0LmNoZWNrYm94PWZ1bmN0aW9uKHQsZSl7dmFyIG49RyhQKCksXCJjaGVja2JveFwiKTtuLnZhbHVlPTEsbi5pZD1ZLmNoZWNrYm94LG4uY2hlY2tlZD1Cb29sZWFuKGUuaW5wdXRWYWx1ZSk7dmFyIG89dC5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtyZXR1cm4gSChvLGUuaW5wdXRQbGFjZWhvbGRlciksdH0sanQudGV4dGFyZWE9ZnVuY3Rpb24oZSx0KXt2YXIgbixvO3JldHVybiBlLnZhbHVlPXQuaW5wdXRWYWx1ZSxBdChlLHQpLFwiTXV0YXRpb25PYnNlcnZlclwiaW4gd2luZG93JiYobj1wYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSgkKCkpLndpZHRoKSxvPXBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCQoKSkucGFkZGluZ0xlZnQpK3BhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCQoKSkucGFkZGluZ1JpZ2h0KSxuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbigpe3ZhciB0PWUub2Zmc2V0V2lkdGgrbzskKCkuc3R5bGUud2lkdGg9bjx0P1wiXCIuY29uY2F0KHQsXCJweFwiKTpudWxsfSkub2JzZXJ2ZShlLHthdHRyaWJ1dGVzOiEwLGF0dHJpYnV0ZUZpbHRlcjpbXCJzdHlsZVwiXX0pKSxlfTtmdW5jdGlvbiBxdCh0LGUpe3ZhciBuLG8saSxyLGEsYz1QKCkucXVlcnlTZWxlY3RvcihcIiNcIi5jb25jYXQoWS5jb250ZW50KSk7ZS5odG1sPyhkdChlLmh0bWwsYyksb3QoYyxcImJsb2NrXCIpKTplLnRleHQ/KGMudGV4dENvbnRlbnQ9ZS50ZXh0LG90KGMsXCJibG9ja1wiKSk6aXQoYyksbj10LG89ZSxpPVAoKSxyPUJ0LmlubmVyUGFyYW1zLmdldChuKSxhPSFyfHxvLmlucHV0IT09ci5pbnB1dCxTdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBlPVlbdF0sbj1ndChpLGUpO090KHQsby5pbnB1dEF0dHJpYnV0ZXMpLG4uY2xhc3NOYW1lPWUsYSYmaXQobil9KSxvLmlucHV0JiYoYSYmRXQobyksVHQobykpLE4oUCgpLGUsXCJjb250ZW50XCIpfWZ1bmN0aW9uIEl0KCl7cmV0dXJuIFEoKSYmUSgpLmdldEF0dHJpYnV0ZShcImRhdGEtcXVldWUtc3RlcFwiKX1mdW5jdGlvbiBWdCh0LHMpe3ZhciB1PUIoKTtpZighcy5wcm9ncmVzc1N0ZXBzfHwwPT09cy5wcm9ncmVzc1N0ZXBzLmxlbmd0aClyZXR1cm4gaXQodSksMDtvdCh1KSx1LnRleHRDb250ZW50PVwiXCI7dmFyIGw9cGFyc2VJbnQodm9pZCAwPT09cy5jdXJyZW50UHJvZ3Jlc3NTdGVwP0l0KCk6cy5jdXJyZW50UHJvZ3Jlc3NTdGVwKTtsPj1zLnByb2dyZXNzU3RlcHMubGVuZ3RoJiZfKFwiSW52YWxpZCBjdXJyZW50UHJvZ3Jlc3NTdGVwIHBhcmFtZXRlciwgaXQgc2hvdWxkIGJlIGxlc3MgdGhhbiBwcm9ncmVzc1N0ZXBzLmxlbmd0aCAoY3VycmVudFByb2dyZXNzU3RlcCBsaWtlIEpTIGFycmF5cyBzdGFydHMgZnJvbSAwKVwiKSxzLnByb2dyZXNzU3RlcHMuZm9yRWFjaChmdW5jdGlvbih0LGUpe3ZhciBuLG8saSxyLGEsYz0obj10LG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpLG10KG8sWVtcInByb2dyZXNzLXN0ZXBcIl0pLEgobyxuKSxvKTt1LmFwcGVuZENoaWxkKGMpLGU9PT1sJiZtdChjLFlbXCJhY3RpdmUtcHJvZ3Jlc3Mtc3RlcFwiXSksZSE9PXMucHJvZ3Jlc3NTdGVwcy5sZW5ndGgtMSYmKHI9cyxhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSxtdChhLFlbXCJwcm9ncmVzcy1zdGVwLWxpbmVcIl0pLHIucHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlJiYoYS5zdHlsZS53aWR0aD1yLnByb2dyZXNzU3RlcHNEaXN0YW5jZSksaT1hLHUuYXBwZW5kQ2hpbGQoaSkpfSl9ZnVuY3Rpb24gTXQodCxlKXt2YXIgbixvLGkscixhLGMscyx1LGw9TCgpO04obCxlLFwiaGVhZGVyXCIpLFZ0KDAsZSksbj10LG89ZSwocj1CdC5pbm5lclBhcmFtcy5nZXQobikpJiZvLmljb249PT1yLmljb24mJmsoKT9OKGsoKSxvLFwiaWNvblwiKTooRHQoKSxvLmljb24mJigtMSE9PU9iamVjdC5rZXlzKFopLmluZGV4T2Yoby5pY29uKT8oaT1DKFwiLlwiLmNvbmNhdChZLmljb24sXCIuXCIpLmNvbmNhdChaW28uaWNvbl0pKSxvdChpKSxVdChpLG8pLE50KCksTihpLG8sXCJpY29uXCIpLG10KGksby5zaG93Q2xhc3MuaWNvbikpOkYoJ1Vua25vd24gaWNvbiEgRXhwZWN0ZWQgXCJzdWNjZXNzXCIsIFwiZXJyb3JcIiwgXCJ3YXJuaW5nXCIsIFwiaW5mb1wiIG9yIFwicXVlc3Rpb25cIiwgZ290IFwiJy5jb25jYXQoby5pY29uLCdcIicpKSkpLGZ1bmN0aW9uKHQpe3ZhciBlPUEoKTtpZighdC5pbWFnZVVybClyZXR1cm4gaXQoZSk7b3QoZSxcIlwiKSxlLnNldEF0dHJpYnV0ZShcInNyY1wiLHQuaW1hZ2VVcmwpLGUuc2V0QXR0cmlidXRlKFwiYWx0XCIsdC5pbWFnZUFsdCksbnQoZSxcIndpZHRoXCIsdC5pbWFnZVdpZHRoKSxudChlLFwiaGVpZ2h0XCIsdC5pbWFnZUhlaWdodCksZS5jbGFzc05hbWU9WS5pbWFnZSxOKGUsdCxcImltYWdlXCIpfShlKSxhPWUsYz14KCkscnQoYyxhLnRpdGxlfHxhLnRpdGxlVGV4dCksYS50aXRsZSYmZHQoYS50aXRsZSxjKSxhLnRpdGxlVGV4dCYmKGMuaW5uZXJUZXh0PWEudGl0bGVUZXh0KSxOKGMsYSxcInRpdGxlXCIpLHM9ZSx1PUkoKSxIKHUscy5jbG9zZUJ1dHRvbkh0bWwpLE4odSxzLFwiY2xvc2VCdXR0b25cIikscnQodSxzLnNob3dDbG9zZUJ1dHRvbiksdS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIscy5jbG9zZUJ1dHRvbkFyaWFMYWJlbCl9ZnVuY3Rpb24gUnQodCxlKXt2YXIgbixvLGkscjtuPWUsbz0kKCksbnQobyxcIndpZHRoXCIsbi53aWR0aCksbnQobyxcInBhZGRpbmdcIixuLnBhZGRpbmcpLG4uYmFja2dyb3VuZCYmKG8uc3R5bGUuYmFja2dyb3VuZD1uLmJhY2tncm91bmQpLHp0KG8sbiksUHQoMCxlKSxNdCh0LGUpLHF0KHQsZSkscHQoMCxlKSxpPWUscj1qKCkscnQocixpLmZvb3RlciksaS5mb290ZXImJmR0KGkuZm9vdGVyLHIpLE4ocixpLFwiZm9vdGVyXCIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUub25SZW5kZXImJmUub25SZW5kZXIoJCgpKX1mdW5jdGlvbiBIdCgpe3JldHVybiBFKCkmJkUoKS5jbGljaygpfXZhciBEdD1mdW5jdGlvbigpe2Zvcih2YXIgdD1uKCksZT0wO2U8dC5sZW5ndGg7ZSsrKWl0KHRbZV0pfSxOdD1mdW5jdGlvbigpe2Zvcih2YXIgdD0kKCksZT13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0KS5nZXRQcm9wZXJ0eVZhbHVlKFwiYmFja2dyb3VuZC1jb2xvclwiKSxuPXQucXVlcnlTZWxlY3RvckFsbChcIltjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXSwgLnN3YWwyLXN1Y2Nlc3MtZml4XCIpLG89MDtvPG4ubGVuZ3RoO28rKyluW29dLnN0eWxlLmJhY2tncm91bmRDb2xvcj1lfSxVdD1mdW5jdGlvbih0LGUpe3QudGV4dENvbnRlbnQ9XCJcIixlLmljb25IdG1sP0godCxfdChlLmljb25IdG1sKSk6XCJzdWNjZXNzXCI9PT1lLmljb24/SCh0LCdcXG4gICAgICA8ZGl2IGNsYXNzPVwic3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLWxlZnRcIj48L2Rpdj5cXG4gICAgICA8c3BhbiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtbGluZS10aXBcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVwic3dhbDItc3VjY2Vzcy1saW5lLWxvbmdcIj48L3NwYW4+XFxuICAgICAgPGRpdiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtcmluZ1wiPjwvZGl2PiA8ZGl2IGNsYXNzPVwic3dhbDItc3VjY2Vzcy1maXhcIj48L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVwic3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLXJpZ2h0XCI+PC9kaXY+XFxuICAgICcpOlwiZXJyb3JcIj09PWUuaWNvbj9IKHQsJ1xcbiAgICAgIDxzcGFuIGNsYXNzPVwic3dhbDIteC1tYXJrXCI+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cInN3YWwyLXgtbWFyay1saW5lLWxlZnRcIj48L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cInN3YWwyLXgtbWFyay1saW5lLXJpZ2h0XCI+PC9zcGFuPlxcbiAgICAgIDwvc3Bhbj5cXG4gICAgJyk6SCh0LF90KHtxdWVzdGlvbjpcIj9cIix3YXJuaW5nOlwiIVwiLGluZm86XCJpXCJ9W2UuaWNvbl0pKX0sX3Q9ZnVuY3Rpb24odCl7cmV0dXJuJzxkaXYgY2xhc3M9XCInLmNvbmNhdChZW1wiaWNvbi1jb250ZW50XCJdLCdcIj4nKS5jb25jYXQodCxcIjwvZGl2PlwiKX0sRnQ9W10senQ9ZnVuY3Rpb24odCxlKXt0LmNsYXNzTmFtZT1cIlwiLmNvbmNhdChZLnBvcHVwLFwiIFwiKS5jb25jYXQodnQodCk/ZS5zaG93Q2xhc3MucG9wdXA6XCJcIiksZS50b2FzdD8obXQoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCxkb2N1bWVudC5ib2R5XSxZW1widG9hc3Qtc2hvd25cIl0pLG10KHQsWS50b2FzdCkpOm10KHQsWS5tb2RhbCksTih0LGUsXCJwb3B1cFwiKSxcInN0cmluZ1wiPT10eXBlb2YgZS5jdXN0b21DbGFzcyYmbXQodCxlLmN1c3RvbUNsYXNzKSxlLmljb24mJm10KHQsWVtcImljb24tXCIuY29uY2F0KGUuaWNvbildKX07ZnVuY3Rpb24gV3QoKXt2YXIgdD0kKCk7dHx8c24uZmlyZSgpLHQ9JCgpO3ZhciBlPVQoKSxuPUUoKTtvdChlKSxvdChuLFwiaW5saW5lLWJsb2NrXCIpLG10KFt0LGVdLFkubG9hZGluZyksbi5kaXNhYmxlZD0hMCx0LnNldEF0dHJpYnV0ZShcImRhdGEtbG9hZGluZ1wiLCEwKSx0LnNldEF0dHJpYnV0ZShcImFyaWEtYnVzeVwiLCEwKSx0LmZvY3VzKCl9ZnVuY3Rpb24gS3QoKXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24odCl7dmFyIGU9d2luZG93LnNjcm9sbFgsbj13aW5kb3cuc2Nyb2xsWTtYdC5yZXN0b3JlRm9jdXNUaW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtYdC5wcmV2aW91c0FjdGl2ZUVsZW1lbnQmJlh0LnByZXZpb3VzQWN0aXZlRWxlbWVudC5mb2N1cz8oWHQucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKCksWHQucHJldmlvdXNBY3RpdmVFbGVtZW50PW51bGwpOmRvY3VtZW50LmJvZHkmJmRvY3VtZW50LmJvZHkuZm9jdXMoKSx0KCl9LDEwMCksdm9pZCAwIT09ZSYmdm9pZCAwIT09biYmd2luZG93LnNjcm9sbFRvKGUsbil9KX1mdW5jdGlvbiBZdCgpe2lmKFh0LnRpbWVvdXQpcmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHQ9cSgpLGU9cGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodCkud2lkdGgpO3Quc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uXCIpLHQuc3R5bGUud2lkdGg9XCIxMDAlXCI7dmFyIG49cGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodCkud2lkdGgpLG89cGFyc2VJbnQoZS9uKjEwMCk7dC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb25cIiksdC5zdHlsZS53aWR0aD1cIlwiLmNvbmNhdChvLFwiJVwiKX0oKSxYdC50aW1lb3V0LnN0b3AoKX1mdW5jdGlvbiBadCgpe2lmKFh0LnRpbWVvdXQpe3ZhciB0PVh0LnRpbWVvdXQuc3RhcnQoKTtyZXR1cm4gc3QodCksdH19ZnVuY3Rpb24gUXQodCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChHdCx0KX1mdW5jdGlvbiAkdCh0KXtyZXR1cm4gZWVbdF19ZnVuY3Rpb24gSnQodCl7Zm9yKHZhciBlIGluIHQpUXQoaT1lKXx8XygnVW5rbm93biBwYXJhbWV0ZXIgXCInLmNvbmNhdChpLCdcIicpKSx0LnRvYXN0JiYobz1lLC0xIT09bmUuaW5kZXhPZihvKSYmXygnVGhlIHBhcmFtZXRlciBcIicuY29uY2F0KG8sJ1wiIGlzIGluY29tcGF0aWJsZSB3aXRoIHRvYXN0cycpKSksJHQobj1lKSYmZyhuLCR0KG4pKTt2YXIgbixvLGl9dmFyIFh0PXt9LEd0PXt0aXRsZTpcIlwiLHRpdGxlVGV4dDpcIlwiLHRleHQ6XCJcIixodG1sOlwiXCIsZm9vdGVyOlwiXCIsaWNvbjp2b2lkIDAsaWNvbkh0bWw6dm9pZCAwLHRvYXN0OiExLGFuaW1hdGlvbjohMCxzaG93Q2xhc3M6e3BvcHVwOlwic3dhbDItc2hvd1wiLGJhY2tkcm9wOlwic3dhbDItYmFja2Ryb3Atc2hvd1wiLGljb246XCJzd2FsMi1pY29uLXNob3dcIn0saGlkZUNsYXNzOntwb3B1cDpcInN3YWwyLWhpZGVcIixiYWNrZHJvcDpcInN3YWwyLWJhY2tkcm9wLWhpZGVcIixpY29uOlwic3dhbDItaWNvbi1oaWRlXCJ9LGN1c3RvbUNsYXNzOnZvaWQgMCx0YXJnZXQ6XCJib2R5XCIsYmFja2Ryb3A6ITAsaGVpZ2h0QXV0bzohMCxhbGxvd091dHNpZGVDbGljazohMCxhbGxvd0VzY2FwZUtleTohMCxhbGxvd0VudGVyS2V5OiEwLHN0b3BLZXlkb3duUHJvcGFnYXRpb246ITAsa2V5ZG93bkxpc3RlbmVyQ2FwdHVyZTohMSxzaG93Q29uZmlybUJ1dHRvbjohMCxzaG93Q2FuY2VsQnV0dG9uOiExLHByZUNvbmZpcm06dm9pZCAwLGNvbmZpcm1CdXR0b25UZXh0OlwiT0tcIixjb25maXJtQnV0dG9uQXJpYUxhYmVsOlwiXCIsY29uZmlybUJ1dHRvbkNvbG9yOnZvaWQgMCxjYW5jZWxCdXR0b25UZXh0OlwiQ2FuY2VsXCIsY2FuY2VsQnV0dG9uQXJpYUxhYmVsOlwiXCIsY2FuY2VsQnV0dG9uQ29sb3I6dm9pZCAwLGJ1dHRvbnNTdHlsaW5nOiEwLHJldmVyc2VCdXR0b25zOiExLGZvY3VzQ29uZmlybTohMCxmb2N1c0NhbmNlbDohMSxzaG93Q2xvc2VCdXR0b246ITEsY2xvc2VCdXR0b25IdG1sOlwiJnRpbWVzO1wiLGNsb3NlQnV0dG9uQXJpYUxhYmVsOlwiQ2xvc2UgdGhpcyBkaWFsb2dcIixzaG93TG9hZGVyT25Db25maXJtOiExLGltYWdlVXJsOnZvaWQgMCxpbWFnZVdpZHRoOnZvaWQgMCxpbWFnZUhlaWdodDp2b2lkIDAsaW1hZ2VBbHQ6XCJcIix0aW1lcjp2b2lkIDAsdGltZXJQcm9ncmVzc0JhcjohMSx3aWR0aDp2b2lkIDAscGFkZGluZzp2b2lkIDAsYmFja2dyb3VuZDp2b2lkIDAsaW5wdXQ6dm9pZCAwLGlucHV0UGxhY2Vob2xkZXI6XCJcIixpbnB1dFZhbHVlOlwiXCIsaW5wdXRPcHRpb25zOnt9LGlucHV0QXV0b1RyaW06ITAsaW5wdXRBdHRyaWJ1dGVzOnt9LGlucHV0VmFsaWRhdG9yOnZvaWQgMCx2YWxpZGF0aW9uTWVzc2FnZTp2b2lkIDAsZ3JvdzohMSxwb3NpdGlvbjpcImNlbnRlclwiLHByb2dyZXNzU3RlcHM6W10sY3VycmVudFByb2dyZXNzU3RlcDp2b2lkIDAscHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlOnZvaWQgMCxvbkJlZm9yZU9wZW46dm9pZCAwLG9uT3Blbjp2b2lkIDAsb25SZW5kZXI6dm9pZCAwLG9uQ2xvc2U6dm9pZCAwLG9uQWZ0ZXJDbG9zZTp2b2lkIDAsb25EZXN0cm95OnZvaWQgMCxzY3JvbGxiYXJQYWRkaW5nOiEwfSx0ZT1bXCJhbGxvd0VzY2FwZUtleVwiLFwiYWxsb3dPdXRzaWRlQ2xpY2tcIixcImJ1dHRvbnNTdHlsaW5nXCIsXCJjYW5jZWxCdXR0b25BcmlhTGFiZWxcIixcImNhbmNlbEJ1dHRvbkNvbG9yXCIsXCJjYW5jZWxCdXR0b25UZXh0XCIsXCJjbG9zZUJ1dHRvbkFyaWFMYWJlbFwiLFwiY2xvc2VCdXR0b25IdG1sXCIsXCJjb25maXJtQnV0dG9uQXJpYUxhYmVsXCIsXCJjb25maXJtQnV0dG9uQ29sb3JcIixcImNvbmZpcm1CdXR0b25UZXh0XCIsXCJjdXJyZW50UHJvZ3Jlc3NTdGVwXCIsXCJjdXN0b21DbGFzc1wiLFwiZm9vdGVyXCIsXCJoaWRlQ2xhc3NcIixcImh0bWxcIixcImljb25cIixcImltYWdlQWx0XCIsXCJpbWFnZUhlaWdodFwiLFwiaW1hZ2VVcmxcIixcImltYWdlV2lkdGhcIixcIm9uQWZ0ZXJDbG9zZVwiLFwib25DbG9zZVwiLFwib25EZXN0cm95XCIsXCJwcm9ncmVzc1N0ZXBzXCIsXCJyZXZlcnNlQnV0dG9uc1wiLFwic2hvd0NhbmNlbEJ1dHRvblwiLFwic2hvd0Nsb3NlQnV0dG9uXCIsXCJzaG93Q29uZmlybUJ1dHRvblwiLFwidGV4dFwiLFwidGl0bGVcIixcInRpdGxlVGV4dFwiXSxlZT17YW5pbWF0aW9uOidzaG93Q2xhc3NcIiBhbmQgXCJoaWRlQ2xhc3MnfSxuZT1bXCJhbGxvd091dHNpZGVDbGlja1wiLFwiYWxsb3dFbnRlcktleVwiLFwiYmFja2Ryb3BcIixcImZvY3VzQ29uZmlybVwiLFwiZm9jdXNDYW5jZWxcIixcImhlaWdodEF1dG9cIixcImtleWRvd25MaXN0ZW5lckNhcHR1cmVcIl0sb2U9T2JqZWN0LmZyZWV6ZSh7aXNWYWxpZFBhcmFtZXRlcjpRdCxpc1VwZGF0YWJsZVBhcmFtZXRlcjpmdW5jdGlvbih0KXtyZXR1cm4tMSE9PXRlLmluZGV4T2YodCl9LGlzRGVwcmVjYXRlZFBhcmFtZXRlcjokdCxhcmdzVG9QYXJhbXM6ZnVuY3Rpb24obyl7dmFyIGk9e307cmV0dXJuXCJvYmplY3RcIiE9PXIob1swXSl8fHcob1swXSk/W1widGl0bGVcIixcImh0bWxcIixcImljb25cIl0uZm9yRWFjaChmdW5jdGlvbih0LGUpe3ZhciBuPW9bZV07XCJzdHJpbmdcIj09dHlwZW9mIG58fHcobik/aVt0XT1uOnZvaWQgMCE9PW4mJkYoXCJVbmV4cGVjdGVkIHR5cGUgb2YgXCIuY29uY2F0KHQsJyEgRXhwZWN0ZWQgXCJzdHJpbmdcIiBvciBcIkVsZW1lbnRcIiwgZ290ICcpLmNvbmNhdChyKG4pKSl9KTpzKGksb1swXSksaX0saXNWaXNpYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIHZ0KCQoKSl9LGNsaWNrQ29uZmlybTpIdCxjbGlja0NhbmNlbDpmdW5jdGlvbigpe3JldHVybiBPKCkmJk8oKS5jbGljaygpfSxnZXRDb250YWluZXI6USxnZXRQb3B1cDokLGdldFRpdGxlOngsZ2V0Q29udGVudDpQLGdldEh0bWxDb250YWluZXI6ZnVuY3Rpb24oKXtyZXR1cm4gZShZW1wiaHRtbC1jb250YWluZXJcIl0pfSxnZXRJbWFnZTpBLGdldEljb246ayxnZXRJY29uczpuLGdldENsb3NlQnV0dG9uOkksZ2V0QWN0aW9uczpULGdldENvbmZpcm1CdXR0b246RSxnZXRDYW5jZWxCdXR0b246TyxnZXRIZWFkZXI6TCxnZXRGb290ZXI6aixnZXRUaW1lclByb2dyZXNzQmFyOnEsZ2V0Rm9jdXNhYmxlRWxlbWVudHM6VixnZXRWYWxpZGF0aW9uTWVzc2FnZTpTLGlzTG9hZGluZzpSLGZpcmU6ZnVuY3Rpb24oKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxlPW5ldyBBcnJheSh0KSxuPTA7bjx0O24rKyllW25dPWFyZ3VtZW50c1tuXTtyZXR1cm4gaSh0aGlzLGUpfSxtaXhpbjpmdW5jdGlvbihyKXtyZXR1cm4gZnVuY3Rpb24odCl7IWZ1bmN0aW9uKHQsZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSYmbnVsbCE9PWUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO3QucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoZSYmZS5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTp0LHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSxlJiZsKHQsZSl9KGksdCk7dmFyIG4sbyxlPShuPWksbz1kKCksZnVuY3Rpb24oKXt2YXIgdCxlPXUobik7cmV0dXJuIHAodGhpcyxvPyh0PXUodGhpcykuY29uc3RydWN0b3IsUmVmbGVjdC5jb25zdHJ1Y3QoZSxhcmd1bWVudHMsdCkpOmUuYXBwbHkodGhpcyxhcmd1bWVudHMpKX0pO2Z1bmN0aW9uIGkoKXtyZXR1cm4gYSh0aGlzLGkpLGUuYXBwbHkodGhpcyxhcmd1bWVudHMpfXJldHVybiBjKGksW3trZXk6XCJfbWFpblwiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiBmKHUoaS5wcm90b3R5cGUpLFwiX21haW5cIix0aGlzKS5jYWxsKHRoaXMscyh7fSxyLHQpKX19XSksaX0odGhpcyl9LHF1ZXVlOmZ1bmN0aW9uKHQpe3ZhciByPXRoaXM7RnQ9dDtmdW5jdGlvbiBhKHQsZSl7RnQ9W10sdChlKX12YXIgYz1bXTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oaSl7IWZ1bmN0aW9uIGUobixvKXtuPEZ0Lmxlbmd0aD8oZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN3YWwyLXF1ZXVlLXN0ZXBcIixuKSxyLmZpcmUoRnRbbl0pLnRoZW4oZnVuY3Rpb24odCl7dm9pZCAwIT09dC52YWx1ZT8oYy5wdXNoKHQudmFsdWUpLGUobisxLG8pKTphKGkse2Rpc21pc3M6dC5kaXNtaXNzfSl9KSk6YShpLHt2YWx1ZTpjfSl9KDApfSl9LGdldFF1ZXVlU3RlcDpJdCxpbnNlcnRRdWV1ZVN0ZXA6ZnVuY3Rpb24odCxlKXtyZXR1cm4gZSYmZTxGdC5sZW5ndGg/RnQuc3BsaWNlKGUsMCx0KTpGdC5wdXNoKHQpfSxkZWxldGVRdWV1ZVN0ZXA6ZnVuY3Rpb24odCl7dm9pZCAwIT09RnRbdF0mJkZ0LnNwbGljZSh0LDEpfSxzaG93TG9hZGluZzpXdCxlbmFibGVMb2FkaW5nOld0LGdldFRpbWVyTGVmdDpmdW5jdGlvbigpe3JldHVybiBYdC50aW1lb3V0JiZYdC50aW1lb3V0LmdldFRpbWVyTGVmdCgpfSxzdG9wVGltZXI6WXQscmVzdW1lVGltZXI6WnQsdG9nZ2xlVGltZXI6ZnVuY3Rpb24oKXt2YXIgdD1YdC50aW1lb3V0O3JldHVybiB0JiYodC5ydW5uaW5nP1l0Olp0KSgpfSxpbmNyZWFzZVRpbWVyOmZ1bmN0aW9uKHQpe2lmKFh0LnRpbWVvdXQpe3ZhciBlPVh0LnRpbWVvdXQuaW5jcmVhc2UodCk7cmV0dXJuIHN0KGUsITApLGV9fSxpc1RpbWVyUnVubmluZzpmdW5jdGlvbigpe3JldHVybiBYdC50aW1lb3V0JiZYdC50aW1lb3V0LmlzUnVubmluZygpfX0pO2Z1bmN0aW9uIGllKCl7dmFyIHQsZT1CdC5pbm5lclBhcmFtcy5nZXQodGhpcyk7ZSYmKHQ9QnQuZG9tQ2FjaGUuZ2V0KHRoaXMpLGUuc2hvd0NvbmZpcm1CdXR0b258fChpdCh0LmNvbmZpcm1CdXR0b24pLGUuc2hvd0NhbmNlbEJ1dHRvbnx8aXQodC5hY3Rpb25zKSksaHQoW3QucG9wdXAsdC5hY3Rpb25zXSxZLmxvYWRpbmcpLHQucG9wdXAucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1idXN5XCIpLHQucG9wdXAucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1sb2FkaW5nXCIpLHQuY29uZmlybUJ1dHRvbi5kaXNhYmxlZD0hMSx0LmNhbmNlbEJ1dHRvbi5kaXNhYmxlZD0hMSl9ZnVuY3Rpb24gcmUoKXtudWxsPT09WC5wcmV2aW91c0JvZHlQYWRkaW5nJiZkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodD53aW5kb3cuaW5uZXJIZWlnaHQmJihYLnByZXZpb3VzQm9keVBhZGRpbmc9cGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkuZ2V0UHJvcGVydHlWYWx1ZShcInBhZGRpbmctcmlnaHRcIikpLGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0PVwiXCIuY29uY2F0KFgucHJldmlvdXNCb2R5UGFkZGluZytmdW5jdGlvbigpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dC5jbGFzc05hbWU9WVtcInNjcm9sbGJhci1tZWFzdXJlXCJdLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodCk7dmFyIGU9dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aC10LmNsaWVudFdpZHRoO3JldHVybiBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHQpLGV9KCksXCJweFwiKSl9ZnVuY3Rpb24gYWUoKXtyZXR1cm4hIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCYmISFkb2N1bWVudC5kb2N1bWVudE1vZGV9ZnVuY3Rpb24gY2UoKXt2YXIgdD1RKCksZT0kKCk7dC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImFsaWduLWl0ZW1zXCIpLGUub2Zmc2V0VG9wPDAmJih0LnN0eWxlLmFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCIpfXZhciBzZT1mdW5jdGlvbigpe25hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhDcmlPU3xGeGlPU3xFZGdpT1N8WWFCcm93c2VyfFVDQnJvd3NlcikvaSl8fCQoKS5zY3JvbGxIZWlnaHQ+d2luZG93LmlubmVySGVpZ2h0LTQ0JiYoUSgpLnN0eWxlLnBhZGRpbmdCb3R0b209XCJcIi5jb25jYXQoNDQsXCJweFwiKSl9LHVlPWZ1bmN0aW9uKCl7dmFyIGUsdD1RKCk7dC5vbnRvdWNoc3RhcnQ9ZnVuY3Rpb24odCl7ZT1sZSh0LnRhcmdldCl9LHQub250b3VjaG1vdmU9ZnVuY3Rpb24odCl7ZSYmKHQucHJldmVudERlZmF1bHQoKSx0LnN0b3BQcm9wYWdhdGlvbigpKX19LGxlPWZ1bmN0aW9uKHQpe3ZhciBlPVEoKTtyZXR1cm4gdD09PWV8fCEoYXQoZSl8fFwiSU5QVVRcIj09PXQudGFnTmFtZXx8YXQoUCgpKSYmUCgpLmNvbnRhaW5zKHQpKX0sZGU9e3N3YWxQcm9taXNlUmVzb2x2ZTpuZXcgV2Vha01hcH07ZnVuY3Rpb24gcGUodCxlLG4sbyl7dmFyIGk7bj9oZSh0LG8pOihLdCgpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gaGUodCxvKX0pLFh0LmtleWRvd25UYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixYdC5rZXlkb3duSGFuZGxlcix7Y2FwdHVyZTpYdC5rZXlkb3duTGlzdGVuZXJDYXB0dXJlfSksWHQua2V5ZG93bkhhbmRsZXJBZGRlZD0hMSksZS5wYXJlbnROb2RlJiYhZG9jdW1lbnQuYm9keS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN3YWwyLXF1ZXVlLXN0ZXBcIikmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKSxNKCkmJihudWxsIT09WC5wcmV2aW91c0JvZHlQYWRkaW5nJiYoZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQ9XCJcIi5jb25jYXQoWC5wcmV2aW91c0JvZHlQYWRkaW5nLFwicHhcIiksWC5wcmV2aW91c0JvZHlQYWRkaW5nPW51bGwpLEQoZG9jdW1lbnQuYm9keSxZLmlvc2ZpeCkmJihpPXBhcnNlSW50KGRvY3VtZW50LmJvZHkuc3R5bGUudG9wLDEwKSxodChkb2N1bWVudC5ib2R5LFkuaW9zZml4KSxkb2N1bWVudC5ib2R5LnN0eWxlLnRvcD1cIlwiLGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wPS0xKmkpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJmFlKCkmJndpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsY2UpLGgoZG9jdW1lbnQuYm9keS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbih0KXt0Lmhhc0F0dHJpYnV0ZShcImRhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW5cIik/KHQuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIix0LmdldEF0dHJpYnV0ZShcImRhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW5cIikpLHQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlblwiKSk6dC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKX0pKSxodChbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LGRvY3VtZW50LmJvZHldLFtZLnNob3duLFlbXCJoZWlnaHQtYXV0b1wiXSxZW1wibm8tYmFja2Ryb3BcIl0sWVtcInRvYXN0LXNob3duXCJdLFlbXCJ0b2FzdC1jb2x1bW5cIl1dKX1mdW5jdGlvbiBmZSh0KXt2YXIgZSxuLG8saT0kKCk7aSYmKGU9QnQuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpKSYmIUQoaSxlLmhpZGVDbGFzcy5wb3B1cCkmJihuPWRlLnN3YWxQcm9taXNlUmVzb2x2ZS5nZXQodGhpcyksaHQoaSxlLnNob3dDbGFzcy5wb3B1cCksbXQoaSxlLmhpZGVDbGFzcy5wb3B1cCksbz1RKCksaHQobyxlLnNob3dDbGFzcy5iYWNrZHJvcCksbXQobyxlLmhpZGVDbGFzcy5iYWNrZHJvcCksZnVuY3Rpb24odCxlLG4pe3ZhciBvPVEoKSxpPWt0JiZjdChlKSxyPW4ub25DbG9zZSxhPW4ub25BZnRlckNsb3NlO2lmKHIhPT1udWxsJiZ0eXBlb2Ygcj09PVwiZnVuY3Rpb25cIil7cihlKX1pZihpKXttZSh0LGUsbyxhKX1lbHNle3BlKHQsbyxKKCksYSl9fSh0aGlzLGksZSksdm9pZCAwIT09dD8odC5pc0Rpc21pc3NlZD12b2lkIDAhPT10LmRpc21pc3MsdC5pc0NvbmZpcm1lZD12b2lkIDA9PT10LmRpc21pc3MpOnQ9e2lzRGlzbWlzc2VkOiEwLGlzQ29uZmlybWVkOiExfSxuKHR8fHt9KSl9dmFyIG1lPWZ1bmN0aW9uKHQsZSxuLG8pe1h0LnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjaz1wZS5iaW5kKG51bGwsdCxuLEooKSxvKSxlLmFkZEV2ZW50TGlzdGVuZXIoa3QsZnVuY3Rpb24odCl7dC50YXJnZXQ9PT1lJiYoWHQuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrKCksZGVsZXRlIFh0LnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjayl9KX0saGU9ZnVuY3Rpb24odCxlKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLHQuX2Rlc3Ryb3koKX0pfTtmdW5jdGlvbiBnZSh0LGUsbil7dmFyIG89QnQuZG9tQ2FjaGUuZ2V0KHQpO2UuZm9yRWFjaChmdW5jdGlvbih0KXtvW3RdLmRpc2FibGVkPW59KX1mdW5jdGlvbiB2ZSh0LGUpe2lmKCF0KXJldHVybiExO2lmKFwicmFkaW9cIj09PXQudHlwZSlmb3IodmFyIG49dC5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpLG89MDtvPG4ubGVuZ3RoO28rKyluW29dLmRpc2FibGVkPWU7ZWxzZSB0LmRpc2FibGVkPWV9dmFyIGJlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gbih0LGUpe2EodGhpcyxuKSx0aGlzLmNhbGxiYWNrPXQsdGhpcy5yZW1haW5pbmc9ZSx0aGlzLnJ1bm5pbmc9ITEsdGhpcy5zdGFydCgpfXJldHVybiBjKG4sW3trZXk6XCJzdGFydFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucnVubmluZ3x8KHRoaXMucnVubmluZz0hMCx0aGlzLnN0YXJ0ZWQ9bmV3IERhdGUsdGhpcy5pZD1zZXRUaW1lb3V0KHRoaXMuY2FsbGJhY2ssdGhpcy5yZW1haW5pbmcpKSx0aGlzLnJlbWFpbmluZ319LHtrZXk6XCJzdG9wXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ydW5uaW5nJiYodGhpcy5ydW5uaW5nPSExLGNsZWFyVGltZW91dCh0aGlzLmlkKSx0aGlzLnJlbWFpbmluZy09bmV3IERhdGUtdGhpcy5zdGFydGVkKSx0aGlzLnJlbWFpbmluZ319LHtrZXk6XCJpbmNyZWFzZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMucnVubmluZztyZXR1cm4gZSYmdGhpcy5zdG9wKCksdGhpcy5yZW1haW5pbmcrPXQsZSYmdGhpcy5zdGFydCgpLHRoaXMucmVtYWluaW5nfX0se2tleTpcImdldFRpbWVyTGVmdFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucnVubmluZyYmKHRoaXMuc3RvcCgpLHRoaXMuc3RhcnQoKSksdGhpcy5yZW1haW5pbmd9fSx7a2V5OlwiaXNSdW5uaW5nXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ydW5uaW5nfX1dKSxufSgpLHllPXtlbWFpbDpmdW5jdGlvbih0LGUpe3JldHVybi9eW2EtekEtWjAtOS4rXy1dK0BbYS16QS1aMC05Li1dK1xcLlthLXpBLVowLTktXXsyLDI0fSQvLnRlc3QodCk/UHJvbWlzZS5yZXNvbHZlKCk6UHJvbWlzZS5yZXNvbHZlKGV8fFwiSW52YWxpZCBlbWFpbCBhZGRyZXNzXCIpfSx1cmw6ZnVuY3Rpb24odCxlKXtyZXR1cm4vXmh0dHBzPzpcXC9cXC8od3d3XFwuKT9bLWEtekEtWjAtOUA6JS5fK34jPV17MSwyNTZ9XFwuW2Etel17Miw2M31cXGIoWy1hLXpBLVowLTlAOiVfKy5+Iz8mLz1dKikkLy50ZXN0KHQpP1Byb21pc2UucmVzb2x2ZSgpOlByb21pc2UucmVzb2x2ZShlfHxcIkludmFsaWQgVVJMXCIpfX07ZnVuY3Rpb24gd2UodCl7dmFyIGUsbjsoZT10KS5pbnB1dFZhbGlkYXRvcnx8T2JqZWN0LmtleXMoeWUpLmZvckVhY2goZnVuY3Rpb24odCl7ZS5pbnB1dD09PXQmJihlLmlucHV0VmFsaWRhdG9yPXllW3RdKX0pLHQuc2hvd0xvYWRlck9uQ29uZmlybSYmIXQucHJlQ29uZmlybSYmXyhcInNob3dMb2FkZXJPbkNvbmZpcm0gaXMgc2V0IHRvIHRydWUsIGJ1dCBwcmVDb25maXJtIGlzIG5vdCBkZWZpbmVkLlxcbnNob3dMb2FkZXJPbkNvbmZpcm0gc2hvdWxkIGJlIHVzZWQgdG9nZXRoZXIgd2l0aCBwcmVDb25maXJtLCBzZWUgdXNhZ2UgZXhhbXBsZTpcXG5odHRwczovL3N3ZWV0YWxlcnQyLmdpdGh1Yi5pby8jYWpheC1yZXF1ZXN0XCIpLHQuYW5pbWF0aW9uPVcodC5hbmltYXRpb24pLChuPXQpLnRhcmdldCYmKFwic3RyaW5nXCIhPXR5cGVvZiBuLnRhcmdldHx8ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuLnRhcmdldCkpJiYoXCJzdHJpbmdcIj09dHlwZW9mIG4udGFyZ2V0fHxuLnRhcmdldC5hcHBlbmRDaGlsZCl8fChfKCdUYXJnZXQgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCwgZGVmYXVsdGluZyB0byBcImJvZHlcIicpLG4udGFyZ2V0PVwiYm9keVwiKSxcInN0cmluZ1wiPT10eXBlb2YgdC50aXRsZSYmKHQudGl0bGU9dC50aXRsZS5zcGxpdChcIlxcblwiKS5qb2luKFwiPGJyIC8+XCIpKSx5dCh0KX1mdW5jdGlvbiBDZSh0KXt2YXIgZT1RKCksbj0kKCk7XCJmdW5jdGlvblwiPT10eXBlb2YgdC5vbkJlZm9yZU9wZW4mJnQub25CZWZvcmVPcGVuKG4pO3ZhciBvPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLm92ZXJmbG93WTtqZShlLG4sdCksVGUoZSxuKSxNKCkmJihMZShlLHQuc2Nyb2xsYmFyUGFkZGluZyxvKSxoKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24odCl7dD09PVEoKXx8ZnVuY3Rpb24odCxlKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmNvbnRhaW5zKXJldHVybiB0LmNvbnRhaW5zKGUpfSh0LFEoKSl8fCh0Lmhhc0F0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpJiZ0LnNldEF0dHJpYnV0ZShcImRhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW5cIix0LmdldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpKSx0LnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpKX0pKSxKKCl8fFh0LnByZXZpb3VzQWN0aXZlRWxlbWVudHx8KFh0LnByZXZpb3VzQWN0aXZlRWxlbWVudD1kb2N1bWVudC5hY3RpdmVFbGVtZW50KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0Lm9uT3BlbiYmc2V0VGltZW91dChmdW5jdGlvbigpe3JldHVybiB0Lm9uT3BlbihuKX0pLGh0KGUsWVtcIm5vLXRyYW5zaXRpb25cIl0pfWZ1bmN0aW9uIGtlKHQpe3ZhciBlLG49JCgpO3QudGFyZ2V0PT09biYmKGU9USgpLG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihrdCxrZSksZS5zdHlsZS5vdmVyZmxvd1k9XCJhdXRvXCIpfWZ1bmN0aW9uIHhlKHQsZSl7XCJzZWxlY3RcIj09PWUuaW5wdXR8fFwicmFkaW9cIj09PWUuaW5wdXQ/TWUodCxlKTotMSE9PVtcInRleHRcIixcImVtYWlsXCIsXCJudW1iZXJcIixcInRlbFwiLFwidGV4dGFyZWFcIl0uaW5kZXhPZihlLmlucHV0KSYmKHYoZS5pbnB1dFZhbHVlKXx8eShlLmlucHV0VmFsdWUpKSYmUmUodCxlKX1mdW5jdGlvbiBQZSh0LGUpe3QuZGlzYWJsZUJ1dHRvbnMoKSxlLmlucHV0P05lKHQsZSk6VWUodCxlLCEwKX1mdW5jdGlvbiBBZSh0LGUpe3QuZGlzYWJsZUJ1dHRvbnMoKSxlKEsuY2FuY2VsKX1mdW5jdGlvbiBCZSh0LGUpe3QuY2xvc2VQb3B1cCh7dmFsdWU6ZX0pfWZ1bmN0aW9uIFNlKGUsdCxuLG8pe3Qua2V5ZG93blRhcmdldCYmdC5rZXlkb3duSGFuZGxlckFkZGVkJiYodC5rZXlkb3duVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsdC5rZXlkb3duSGFuZGxlcix7Y2FwdHVyZTp0LmtleWRvd25MaXN0ZW5lckNhcHR1cmV9KSx0LmtleWRvd25IYW5kbGVyQWRkZWQ9ITEpLG4udG9hc3R8fCh0LmtleWRvd25IYW5kbGVyPWZ1bmN0aW9uKHQpe3JldHVybiB6ZShlLHQsbyl9LHQua2V5ZG93blRhcmdldD1uLmtleWRvd25MaXN0ZW5lckNhcHR1cmU/d2luZG93OiQoKSx0LmtleWRvd25MaXN0ZW5lckNhcHR1cmU9bi5rZXlkb3duTGlzdGVuZXJDYXB0dXJlLHQua2V5ZG93blRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLHQua2V5ZG93bkhhbmRsZXIse2NhcHR1cmU6dC5rZXlkb3duTGlzdGVuZXJDYXB0dXJlfSksdC5rZXlkb3duSGFuZGxlckFkZGVkPSEwKX1mdW5jdGlvbiBFZSh0LGUsbil7dmFyIG89VigpLGk9MDtpZihpPG8ubGVuZ3RoKXJldHVybihlKz1uKT09PW8ubGVuZ3RoP2U9MDotMT09PWUmJihlPW8ubGVuZ3RoLTEpLG9bZV0uZm9jdXMoKTskKCkuZm9jdXMoKX1mdW5jdGlvbiBPZSh0LGUsbil7QnQuaW5uZXJQYXJhbXMuZ2V0KHQpLnRvYXN0P1FlKHQsZSxuKTooSmUoZSksWGUoZSksR2UodCxlLG4pKX12YXIgVGU9ZnVuY3Rpb24odCxlKXtrdCYmY3QoZSk/KHQuc3R5bGUub3ZlcmZsb3dZPVwiaGlkZGVuXCIsZS5hZGRFdmVudExpc3RlbmVyKGt0LGtlKSk6dC5zdHlsZS5vdmVyZmxvd1k9XCJhdXRvXCJ9LExlPWZ1bmN0aW9uKHQsZSxuKXt2YXIgbzsoL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkmJiF3aW5kb3cuTVNTdHJlYW18fFwiTWFjSW50ZWxcIj09PW5hdmlnYXRvci5wbGF0Zm9ybSYmMTxuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMpJiYhRChkb2N1bWVudC5ib2R5LFkuaW9zZml4KSYmKG89ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsZG9jdW1lbnQuYm9keS5zdHlsZS50b3A9XCJcIi5jb25jYXQoLTEqbyxcInB4XCIpLG10KGRvY3VtZW50LmJvZHksWS5pb3NmaXgpLHVlKCksc2UoKSksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmYWUoKSYmKGNlKCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixjZSkpLGUmJlwiaGlkZGVuXCIhPT1uJiZyZSgpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt0LnNjcm9sbFRvcD0wfSl9LGplPWZ1bmN0aW9uKHQsZSxuKXttdCh0LG4uc2hvd0NsYXNzLmJhY2tkcm9wKSxvdChlKSxtdChlLG4uc2hvd0NsYXNzLnBvcHVwKSxtdChbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LGRvY3VtZW50LmJvZHldLFkuc2hvd24pLG4uaGVpZ2h0QXV0byYmbi5iYWNrZHJvcCYmIW4udG9hc3QmJm10KFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsZG9jdW1lbnQuYm9keV0sWVtcImhlaWdodC1hdXRvXCJdKX0scWU9ZnVuY3Rpb24odCl7cmV0dXJuIHQuY2hlY2tlZD8xOjB9LEllPWZ1bmN0aW9uKHQpe3JldHVybiB0LmNoZWNrZWQ/dC52YWx1ZTpudWxsfSxWZT1mdW5jdGlvbih0KXtyZXR1cm4gdC5maWxlcy5sZW5ndGg/bnVsbCE9PXQuZ2V0QXR0cmlidXRlKFwibXVsdGlwbGVcIik/dC5maWxlczp0LmZpbGVzWzBdOm51bGx9LE1lPWZ1bmN0aW9uKGUsbil7ZnVuY3Rpb24gbyh0KXtyZXR1cm4gSGVbbi5pbnB1dF0oaSxEZSh0KSxuKX12YXIgaT1QKCk7dihuLmlucHV0T3B0aW9ucyl8fHkobi5pbnB1dE9wdGlvbnMpPyhXdCgpLGIobi5pbnB1dE9wdGlvbnMpLnRoZW4oZnVuY3Rpb24odCl7ZS5oaWRlTG9hZGluZygpLG8odCl9KSk6XCJvYmplY3RcIj09PXIobi5pbnB1dE9wdGlvbnMpP28obi5pbnB1dE9wdGlvbnMpOkYoXCJVbmV4cGVjdGVkIHR5cGUgb2YgaW5wdXRPcHRpb25zISBFeHBlY3RlZCBvYmplY3QsIE1hcCBvciBQcm9taXNlLCBnb3QgXCIuY29uY2F0KHIobi5pbnB1dE9wdGlvbnMpKSl9LFJlPWZ1bmN0aW9uKGUsbil7dmFyIG89ZS5nZXRJbnB1dCgpO2l0KG8pLGIobi5pbnB1dFZhbHVlKS50aGVuKGZ1bmN0aW9uKHQpe28udmFsdWU9XCJudW1iZXJcIj09PW4uaW5wdXQ/cGFyc2VGbG9hdCh0KXx8MDpcIlwiLmNvbmNhdCh0KSxvdChvKSxvLmZvY3VzKCksZS5oaWRlTG9hZGluZygpfSkuY2F0Y2goZnVuY3Rpb24odCl7RihcIkVycm9yIGluIGlucHV0VmFsdWUgcHJvbWlzZTogXCIuY29uY2F0KHQpKSxvLnZhbHVlPVwiXCIsb3Qobyksby5mb2N1cygpLGUuaGlkZUxvYWRpbmcoKX0pfSxIZT17c2VsZWN0OmZ1bmN0aW9uKHQsZSxpKXtmdW5jdGlvbiByKHQsZSxuKXt2YXIgbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO28udmFsdWU9bixIKG8sZSksaS5pbnB1dFZhbHVlLnRvU3RyaW5nKCk9PT1uLnRvU3RyaW5nKCkmJihvLnNlbGVjdGVkPSEwKSx0LmFwcGVuZENoaWxkKG8pfXZhciBhPWd0KHQsWS5zZWxlY3QpO2UuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgZSxuPXRbMF0sbz10WzFdO0FycmF5LmlzQXJyYXkobyk/KChlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRncm91cFwiKSkubGFiZWw9bixlLmRpc2FibGVkPSExLGEuYXBwZW5kQ2hpbGQoZSksby5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiByKGUsdFsxXSx0WzBdKX0pKTpyKGEsbyxuKX0pLGEuZm9jdXMoKX0scmFkaW86ZnVuY3Rpb24odCxlLGEpe3ZhciBjPWd0KHQsWS5yYWRpbyk7ZS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBlPXRbMF0sbj10WzFdLG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO28udHlwZT1cInJhZGlvXCIsby5uYW1lPVkucmFkaW8sby52YWx1ZT1lLGEuaW5wdXRWYWx1ZS50b1N0cmluZygpPT09ZS50b1N0cmluZygpJiYoby5jaGVja2VkPSEwKTt2YXIgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtIKHIsbiksci5jbGFzc05hbWU9WS5sYWJlbCxpLmFwcGVuZENoaWxkKG8pLGkuYXBwZW5kQ2hpbGQociksYy5hcHBlbmRDaGlsZChpKX0pO3ZhciBuPWMucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpO24ubGVuZ3RoJiZuWzBdLmZvY3VzKCl9fSxEZT1mdW5jdGlvbiBvKG4pe3ZhciBpPVtdO3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBNYXAmJm4gaW5zdGFuY2VvZiBNYXA/bi5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7dmFyIG49dDtcIm9iamVjdFwiPT09cihuKSYmKG49byhuKSksaS5wdXNoKFtlLG5dKX0pOk9iamVjdC5rZXlzKG4pLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIGU9blt0XTtcIm9iamVjdFwiPT09cihlKSYmKGU9byhlKSksaS5wdXNoKFt0LGVdKX0pLGl9LE5lPWZ1bmN0aW9uKGUsbil7dmFyIG89ZnVuY3Rpb24odCxlKXt2YXIgbj10LmdldElucHV0KCk7aWYoIW4pcmV0dXJuIG51bGw7c3dpdGNoKGUuaW5wdXQpe2Nhc2VcImNoZWNrYm94XCI6cmV0dXJuIHFlKG4pO2Nhc2VcInJhZGlvXCI6cmV0dXJuIEllKG4pO2Nhc2VcImZpbGVcIjpyZXR1cm4gVmUobik7ZGVmYXVsdDpyZXR1cm4gZS5pbnB1dEF1dG9UcmltP24udmFsdWUudHJpbSgpOm4udmFsdWV9fShlLG4pO24uaW5wdXRWYWxpZGF0b3I/KGUuZGlzYWJsZUlucHV0KCksUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpe3JldHVybiBiKG4uaW5wdXRWYWxpZGF0b3IobyxuLnZhbGlkYXRpb25NZXNzYWdlKSl9KS50aGVuKGZ1bmN0aW9uKHQpe2UuZW5hYmxlQnV0dG9ucygpLGUuZW5hYmxlSW5wdXQoKSx0P2Uuc2hvd1ZhbGlkYXRpb25NZXNzYWdlKHQpOlVlKGUsbixvKX0pKTplLmdldElucHV0KCkuY2hlY2tWYWxpZGl0eSgpP1VlKGUsbixvKTooZS5lbmFibGVCdXR0b25zKCksZS5zaG93VmFsaWRhdGlvbk1lc3NhZ2Uobi52YWxpZGF0aW9uTWVzc2FnZSkpfSxVZT1mdW5jdGlvbihlLHQsbil7dC5zaG93TG9hZGVyT25Db25maXJtJiZXdCgpLHQucHJlQ29uZmlybT8oZS5yZXNldFZhbGlkYXRpb25NZXNzYWdlKCksUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpe3JldHVybiBiKHQucHJlQ29uZmlybShuLHQudmFsaWRhdGlvbk1lc3NhZ2UpKX0pLnRoZW4oZnVuY3Rpb24odCl7dnQoUygpKXx8ITE9PT10P2UuaGlkZUxvYWRpbmcoKTpCZShlLHZvaWQgMD09PXQ/bjp0KX0pKTpCZShlLG4pfSxfZT1bXCJBcnJvd0xlZnRcIixcIkFycm93UmlnaHRcIixcIkFycm93VXBcIixcIkFycm93RG93blwiLFwiTGVmdFwiLFwiUmlnaHRcIixcIlVwXCIsXCJEb3duXCJdLEZlPVtcIkVzY2FwZVwiLFwiRXNjXCJdLHplPWZ1bmN0aW9uKHQsZSxuKXt2YXIgbz1CdC5pbm5lclBhcmFtcy5nZXQodCk7by5zdG9wS2V5ZG93blByb3BhZ2F0aW9uJiZlLnN0b3BQcm9wYWdhdGlvbigpLFwiRW50ZXJcIj09PWUua2V5P1dlKHQsZSxvKTpcIlRhYlwiPT09ZS5rZXk/S2UoZSxvKTotMSE9PV9lLmluZGV4T2YoZS5rZXkpP1llKCk6LTEhPT1GZS5pbmRleE9mKGUua2V5KSYmWmUoZSxvLG4pfSxXZT1mdW5jdGlvbih0LGUsbil7aWYoIWUuaXNDb21wb3NpbmcmJmUudGFyZ2V0JiZ0LmdldElucHV0KCkmJmUudGFyZ2V0Lm91dGVySFRNTD09PXQuZ2V0SW5wdXQoKS5vdXRlckhUTUwpe2lmKC0xIT09W1widGV4dGFyZWFcIixcImZpbGVcIl0uaW5kZXhPZihuLmlucHV0KSlyZXR1cm47SHQoKSxlLnByZXZlbnREZWZhdWx0KCl9fSxLZT1mdW5jdGlvbih0KXtmb3IodmFyIGU9dC50YXJnZXQsbj1WKCksbz0tMSxpPTA7aTxuLmxlbmd0aDtpKyspaWYoZT09PW5baV0pe289aTticmVha310LnNoaWZ0S2V5P0VlKDAsbywtMSk6RWUoMCxvLDEpLHQuc3RvcFByb3BhZ2F0aW9uKCksdC5wcmV2ZW50RGVmYXVsdCgpfSxZZT1mdW5jdGlvbigpe3ZhciB0PUUoKSxlPU8oKTtkb2N1bWVudC5hY3RpdmVFbGVtZW50PT09dCYmdnQoZSk/ZS5mb2N1cygpOmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ9PT1lJiZ2dCh0KSYmdC5mb2N1cygpfSxaZT1mdW5jdGlvbih0LGUsbil7VyhlLmFsbG93RXNjYXBlS2V5KSYmKHQucHJldmVudERlZmF1bHQoKSxuKEsuZXNjKSl9LFFlPWZ1bmN0aW9uKGUsdCxuKXt0LnBvcHVwLm9uY2xpY2s9ZnVuY3Rpb24oKXt2YXIgdD1CdC5pbm5lclBhcmFtcy5nZXQoZSk7dC5zaG93Q29uZmlybUJ1dHRvbnx8dC5zaG93Q2FuY2VsQnV0dG9ufHx0LnNob3dDbG9zZUJ1dHRvbnx8dC5pbnB1dHx8bihLLmNsb3NlKX19LCRlPSExLEplPWZ1bmN0aW9uKGUpe2UucG9wdXAub25tb3VzZWRvd249ZnVuY3Rpb24oKXtlLmNvbnRhaW5lci5vbm1vdXNldXA9ZnVuY3Rpb24odCl7ZS5jb250YWluZXIub25tb3VzZXVwPXZvaWQgMCx0LnRhcmdldD09PWUuY29udGFpbmVyJiYoJGU9ITApfX19LFhlPWZ1bmN0aW9uKGUpe2UuY29udGFpbmVyLm9ubW91c2Vkb3duPWZ1bmN0aW9uKCl7ZS5wb3B1cC5vbm1vdXNldXA9ZnVuY3Rpb24odCl7ZS5wb3B1cC5vbm1vdXNldXA9dm9pZCAwLHQudGFyZ2V0IT09ZS5wb3B1cCYmIWUucG9wdXAuY29udGFpbnModC50YXJnZXQpfHwoJGU9ITApfX19LEdlPWZ1bmN0aW9uKG4sbyxpKXtvLmNvbnRhaW5lci5vbmNsaWNrPWZ1bmN0aW9uKHQpe3ZhciBlPUJ0LmlubmVyUGFyYW1zLmdldChuKTskZT8kZT0hMTp0LnRhcmdldD09PW8uY29udGFpbmVyJiZXKGUuYWxsb3dPdXRzaWRlQ2xpY2spJiZpKEsuYmFja2Ryb3ApfX07dmFyIHRuPWZ1bmN0aW9uKHQsZSxuKXt2YXIgbz1xKCk7aXQobyksZS50aW1lciYmKHQudGltZW91dD1uZXcgYmUoZnVuY3Rpb24oKXtuKFwidGltZXJcIiksZGVsZXRlIHQudGltZW91dH0sZS50aW1lciksZS50aW1lclByb2dyZXNzQmFyJiYob3Qobyksc2V0VGltZW91dChmdW5jdGlvbigpe3QudGltZW91dC5ydW5uaW5nJiZzdChlLnRpbWVyKX0pKSl9LGVuPWZ1bmN0aW9uKHQsZSl7aWYoIWUudG9hc3QpcmV0dXJuIFcoZS5hbGxvd0VudGVyS2V5KT9lLmZvY3VzQ2FuY2VsJiZ2dCh0LmNhbmNlbEJ1dHRvbik/dC5jYW5jZWxCdXR0b24uZm9jdXMoKTplLmZvY3VzQ29uZmlybSYmdnQodC5jb25maXJtQnV0dG9uKT90LmNvbmZpcm1CdXR0b24uZm9jdXMoKTp2b2lkIEVlKDAsLTEsMSk6bm4oKX0sbm49ZnVuY3Rpb24oKXtkb2N1bWVudC5hY3RpdmVFbGVtZW50JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXImJmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpfTt2YXIgb24scm49ZnVuY3Rpb24odCl7Zm9yKHZhciBlIGluIHQpdFtlXT1uZXcgV2Vha01hcH0sYW49T2JqZWN0LmZyZWV6ZSh7aGlkZUxvYWRpbmc6aWUsZGlzYWJsZUxvYWRpbmc6aWUsZ2V0SW5wdXQ6ZnVuY3Rpb24odCl7dmFyIGU9QnQuaW5uZXJQYXJhbXMuZ2V0KHR8fHRoaXMpLG49QnQuZG9tQ2FjaGUuZ2V0KHR8fHRoaXMpO3JldHVybiBuP0cobi5jb250ZW50LGUuaW5wdXQpOm51bGx9LGNsb3NlOmZlLGNsb3NlUG9wdXA6ZmUsY2xvc2VNb2RhbDpmZSxjbG9zZVRvYXN0OmZlLGVuYWJsZUJ1dHRvbnM6ZnVuY3Rpb24oKXtnZSh0aGlzLFtcImNvbmZpcm1CdXR0b25cIixcImNhbmNlbEJ1dHRvblwiXSwhMSl9LGRpc2FibGVCdXR0b25zOmZ1bmN0aW9uKCl7Z2UodGhpcyxbXCJjb25maXJtQnV0dG9uXCIsXCJjYW5jZWxCdXR0b25cIl0sITApfSxlbmFibGVJbnB1dDpmdW5jdGlvbigpe3JldHVybiB2ZSh0aGlzLmdldElucHV0KCksITEpfSxkaXNhYmxlSW5wdXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdmUodGhpcy5nZXRJbnB1dCgpLCEwKX0sc2hvd1ZhbGlkYXRpb25NZXNzYWdlOmZ1bmN0aW9uKHQpe3ZhciBlPUJ0LmRvbUNhY2hlLmdldCh0aGlzKTtIKGUudmFsaWRhdGlvbk1lc3NhZ2UsdCk7dmFyIG49d2luZG93LmdldENvbXB1dGVkU3R5bGUoZS5wb3B1cCk7ZS52YWxpZGF0aW9uTWVzc2FnZS5zdHlsZS5tYXJnaW5MZWZ0PVwiLVwiLmNvbmNhdChuLmdldFByb3BlcnR5VmFsdWUoXCJwYWRkaW5nLWxlZnRcIikpLGUudmFsaWRhdGlvbk1lc3NhZ2Uuc3R5bGUubWFyZ2luUmlnaHQ9XCItXCIuY29uY2F0KG4uZ2V0UHJvcGVydHlWYWx1ZShcInBhZGRpbmctcmlnaHRcIikpLG90KGUudmFsaWRhdGlvbk1lc3NhZ2UpO3ZhciBvPXRoaXMuZ2V0SW5wdXQoKTtvJiYoby5zZXRBdHRyaWJ1dGUoXCJhcmlhLWludmFsaWRcIiwhMCksby5zZXRBdHRyaWJ1dGUoXCJhcmlhLWRlc2NyaWJlZEJ5XCIsWVtcInZhbGlkYXRpb24tbWVzc2FnZVwiXSksdHQobyksbXQobyxZLmlucHV0ZXJyb3IpKX0scmVzZXRWYWxpZGF0aW9uTWVzc2FnZTpmdW5jdGlvbigpe3ZhciB0PUJ0LmRvbUNhY2hlLmdldCh0aGlzKTt0LnZhbGlkYXRpb25NZXNzYWdlJiZpdCh0LnZhbGlkYXRpb25NZXNzYWdlKTt2YXIgZT10aGlzLmdldElucHV0KCk7ZSYmKGUucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1pbnZhbGlkXCIpLGUucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1kZXNjcmliZWRCeVwiKSxodChlLFkuaW5wdXRlcnJvcikpfSxnZXRQcm9ncmVzc1N0ZXBzOmZ1bmN0aW9uKCl7cmV0dXJuIEJ0LmRvbUNhY2hlLmdldCh0aGlzKS5wcm9ncmVzc1N0ZXBzfSxfbWFpbjpmdW5jdGlvbih0KXtKdCh0KSxYdC5jdXJyZW50SW5zdGFuY2UmJlh0LmN1cnJlbnRJbnN0YW5jZS5fZGVzdHJveSgpLFh0LmN1cnJlbnRJbnN0YW5jZT10aGlzO3ZhciBlPWZ1bmN0aW9uKHQpe3ZhciBlPXMoe30sR3Quc2hvd0NsYXNzLHQuc2hvd0NsYXNzKSxuPXMoe30sR3QuaGlkZUNsYXNzLHQuaGlkZUNsYXNzKSxvPXMoe30sR3QsdCk7aWYoby5zaG93Q2xhc3M9ZSxvLmhpZGVDbGFzcz1uLHQuYW5pbWF0aW9uPT09ZmFsc2Upe28uc2hvd0NsYXNzPXtwb3B1cDpcInN3YWwyLW5vYW5pbWF0aW9uXCIsYmFja2Ryb3A6XCJzd2FsMi1ub2FuaW1hdGlvblwifTtvLmhpZGVDbGFzcz17fX1yZXR1cm4gb30odCk7d2UoZSksT2JqZWN0LmZyZWV6ZShlKSxYdC50aW1lb3V0JiYoWHQudGltZW91dC5zdG9wKCksZGVsZXRlIFh0LnRpbWVvdXQpLGNsZWFyVGltZW91dChYdC5yZXN0b3JlRm9jdXNUaW1lb3V0KTt2YXIgbj1mdW5jdGlvbih0KXt2YXIgZT17cG9wdXA6JCgpLGNvbnRhaW5lcjpRKCksY29udGVudDpQKCksYWN0aW9uczpUKCksY29uZmlybUJ1dHRvbjpFKCksY2FuY2VsQnV0dG9uOk8oKSxjbG9zZUJ1dHRvbjpJKCksdmFsaWRhdGlvbk1lc3NhZ2U6UygpLHByb2dyZXNzU3RlcHM6QigpfTtyZXR1cm4gQnQuZG9tQ2FjaGUuc2V0KHQsZSksZX0odGhpcyk7cmV0dXJuIFJ0KHRoaXMsZSksQnQuaW5uZXJQYXJhbXMuc2V0KHRoaXMsZSksZnVuY3Rpb24obixvLGkpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbih0KXt2YXIgZT1mdW5jdGlvbiB0KGUpe24uY2xvc2VQb3B1cCh7ZGlzbWlzczplfSl9O2RlLnN3YWxQcm9taXNlUmVzb2x2ZS5zZXQobix0KTtvLmNvbmZpcm1CdXR0b24ub25jbGljaz1mdW5jdGlvbigpe3JldHVybiBQZShuLGkpfTtvLmNhbmNlbEJ1dHRvbi5vbmNsaWNrPWZ1bmN0aW9uKCl7cmV0dXJuIEFlKG4sZSl9O28uY2xvc2VCdXR0b24ub25jbGljaz1mdW5jdGlvbigpe3JldHVybiBlKEsuY2xvc2UpfTtPZShuLG8sZSk7U2UobixYdCxpLGUpO2lmKGkudG9hc3QmJihpLmlucHV0fHxpLmZvb3Rlcnx8aS5zaG93Q2xvc2VCdXR0b24pKXttdChkb2N1bWVudC5ib2R5LFlbXCJ0b2FzdC1jb2x1bW5cIl0pfWVsc2V7aHQoZG9jdW1lbnQuYm9keSxZW1widG9hc3QtY29sdW1uXCJdKX14ZShuLGkpO0NlKGkpO3RuKFh0LGksZSk7ZW4obyxpKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7by5jb250YWluZXIuc2Nyb2xsVG9wPTB9KX0pfSh0aGlzLG4sZSl9LHVwZGF0ZTpmdW5jdGlvbihlKXt2YXIgdD0kKCksbj1CdC5pbm5lclBhcmFtcy5nZXQodGhpcyk7aWYoIXR8fEQodCxuLmhpZGVDbGFzcy5wb3B1cCkpcmV0dXJuIF8oXCJZb3UncmUgdHJ5aW5nIHRvIHVwZGF0ZSB0aGUgY2xvc2VkIG9yIGNsb3NpbmcgcG9wdXAsIHRoYXQgd29uJ3Qgd29yay4gVXNlIHRoZSB1cGRhdGUoKSBtZXRob2QgaW4gcHJlQ29uZmlybSBwYXJhbWV0ZXIgb3Igc2hvdyBhIG5ldyBwb3B1cC5cIik7dmFyIG89e307T2JqZWN0LmtleXMoZSkuZm9yRWFjaChmdW5jdGlvbih0KXtzbi5pc1VwZGF0YWJsZVBhcmFtZXRlcih0KT9vW3RdPWVbdF06XygnSW52YWxpZCBwYXJhbWV0ZXIgdG8gdXBkYXRlOiBcIicuY29uY2F0KHQsJ1wiLiBVcGRhdGFibGUgcGFyYW1zIGFyZSBsaXN0ZWQgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2Jsb2IvbWFzdGVyL3NyYy91dGlscy9wYXJhbXMuanMnKSl9KTt2YXIgaT1zKHt9LG4sbyk7UnQodGhpcyxpKSxCdC5pbm5lclBhcmFtcy5zZXQodGhpcyxpKSxPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLHtwYXJhbXM6e3ZhbHVlOnMoe30sdGhpcy5wYXJhbXMsZSksd3JpdGFibGU6ITEsZW51bWVyYWJsZTohMH19KX0sX2Rlc3Ryb3k6ZnVuY3Rpb24oKXt2YXIgdD1CdC5kb21DYWNoZS5nZXQodGhpcyksZT1CdC5pbm5lclBhcmFtcy5nZXQodGhpcyk7ZSYmKHQucG9wdXAmJlh0LnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjayYmKFh0LnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjaygpLGRlbGV0ZSBYdC5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2spLFh0LmRlZmVyRGlzcG9zYWxUaW1lciYmKGNsZWFyVGltZW91dChYdC5kZWZlckRpc3Bvc2FsVGltZXIpLGRlbGV0ZSBYdC5kZWZlckRpc3Bvc2FsVGltZXIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUub25EZXN0cm95JiZlLm9uRGVzdHJveSgpLGRlbGV0ZSB0aGlzLnBhcmFtcyxkZWxldGUgWHQua2V5ZG93bkhhbmRsZXIsZGVsZXRlIFh0LmtleWRvd25UYXJnZXQscm4oQnQpLHJuKGRlKSl9fSksY249ZnVuY3Rpb24oKXtmdW5jdGlvbiByKCl7aWYoYSh0aGlzLHIpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cpe1widW5kZWZpbmVkXCI9PXR5cGVvZiBQcm9taXNlJiZGKFwiVGhpcyBwYWNrYWdlIHJlcXVpcmVzIGEgUHJvbWlzZSBsaWJyYXJ5LCBwbGVhc2UgaW5jbHVkZSBhIHNoaW0gdG8gZW5hYmxlIGl0IGluIHRoaXMgYnJvd3NlciAoU2VlOiBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvd2lraS9NaWdyYXRpb24tZnJvbS1Td2VldEFsZXJ0LXRvLVN3ZWV0QWxlcnQyIzEtaWUtc3VwcG9ydClcIiksb249dGhpcztmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxlPW5ldyBBcnJheSh0KSxuPTA7bjx0O24rKyllW25dPWFyZ3VtZW50c1tuXTt2YXIgbz1PYmplY3QuZnJlZXplKHRoaXMuY29uc3RydWN0b3IuYXJnc1RvUGFyYW1zKGUpKTtPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLHtwYXJhbXM6e3ZhbHVlOm8sd3JpdGFibGU6ITEsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9fSk7dmFyIGk9dGhpcy5fbWFpbih0aGlzLnBhcmFtcyk7QnQucHJvbWlzZS5zZXQodGhpcyxpKX19cmV0dXJuIGMocixbe2tleTpcInRoZW5cIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gQnQucHJvbWlzZS5nZXQodGhpcykudGhlbih0KX19LHtrZXk6XCJmaW5hbGx5XCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIEJ0LnByb21pc2UuZ2V0KHRoaXMpLmZpbmFsbHkodCl9fV0pLHJ9KCk7cyhjbi5wcm90b3R5cGUsYW4pLHMoY24sb2UpLE9iamVjdC5rZXlzKGFuKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2NuW3RdPWZ1bmN0aW9uKCl7aWYob24pcmV0dXJuIG9uW3RdLmFwcGx5KG9uLGFyZ3VtZW50cyl9fSksY24uRGlzbWlzc1JlYXNvbj1LLGNuLnZlcnNpb249XCI5LjE3LjJcIjt2YXIgc249Y247cmV0dXJuIHNuLmRlZmF1bHQ9c259KSx2b2lkIDAhPT10aGlzJiZ0aGlzLlN3ZWV0YWxlcnQyJiYodGhpcy5zd2FsPXRoaXMuc3dlZXRBbGVydD10aGlzLlN3YWw9dGhpcy5Td2VldEFsZXJ0PXRoaXMuU3dlZXRhbGVydDIpOyIsIi8qIGdsb2JhbHMgX193ZWJwYWNrX2FtZF9vcHRpb25zX18gKi9cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX2FtZF9vcHRpb25zX187XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==