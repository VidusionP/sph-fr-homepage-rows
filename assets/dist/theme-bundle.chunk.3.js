(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./assets/js/theme/halothemes/haloAddOptionForProductCard.js":
/*!*******************************************************************!*\
  !*** ./assets/js/theme/halothemes/haloAddOptionForProductCard.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");


var fetch = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");

/* harmony default export */ __webpack_exports__["default"] = (function (context, wrapper) {
  if (context.themeSettings.haloAddOptionForProduct == true) {
    var callProductOption = function callProductOption() {
      product_class.each(function (index, element) {
        var productId = $(element).data("product-id");
        list.push(productId.toString());
      });

      if (list.length > 0) {
        getProductOption(list).then(function (data) {
          renderOption(data);
          $.each(list, function (idx, item) {
            var arr = {},
                productId = list[idx];
            product_wrapper.find('.card-option-' + productId + ' .form-option-swatch').each(function (index, element) {
              var txt = $(element).data('product-swatch-value');

              if (arr[txt]) {
                $(element).remove();
              } else {
                arr[txt] = true;
              }
            });

            if (product_wrapper.find('.card-option-' + productId + ' .form-option-swatch').length > 4) {
              var countMoreOption = product_wrapper.find('.card-option-' + productId + ' .form-option-swatch').length - 4,
                  productLink = product_wrapper.find('[data-product-id="' + productId + '"]').find('.card-link').attr('href');
              product_wrapper.find('.card-option-' + productId + ' .form-option-swatch').each(function (index, element) {
                if (index >= 4) {
                  $(element).remove();
                }
              });

              if (product_wrapper.find('.card-option-' + productId + ' .form-field .showmore').length < 1) {
                product_wrapper.find('.card-option-' + productId + ' .form-field:not(.form-field--size)').append('<a href="' + productLink + '" class="showmore">+' + countMoreOption + '</a>');
              }
            }
          });
        });
      }
    };

    var getProductOption = function getProductOption(list) {
      return fetch('/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
          query: "\n                    query SeveralProductsByID {\n                      site {\n                        products(entityIds: [" + list + "], first: 50) {\n                          edges {\n                            node {\n                              entityId\n                              name\n                               productOptions(first: 50) {\n                                edges {\n                                  node {\n                                    entityId\n                                    displayName\n                                    isRequired\n                                    ... on MultipleChoiceOption {\n                                      displayStyle\n                                      values {\n                                        edges {\n                                          node {\n                                            entityId\n                                            label\n                                            isDefault\n                                            ... on SwatchOptionValue {\n                                              hexColors\n                                              imageUrl(width: 50)\n                                            }\n                                          }\n                                        }\n                                      }\n                                    }\n                                  }\n                                }\n                              }\n                            }\n                          }\n                        }\n                      }\n                    }\n                  "
        })
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        return res.data;
      });
    };

    var renderOption = function renderOption(data) {
      var aFilter = data.site.products.edges;
      $.each(aFilter, function (index, element) {
        var productId = aFilter[index].node.entityId,
            productFieldColor = product_wrapper.find('.card-option-' + productId + ' .form-field:not(.form-field--size)'),
            productFieldSize = product_wrapper.find('.card-option-' + productId + ' .form-field--size'),
            aFilter2 = aFilter[index].node.productOptions.edges;
        var aFilter3 = aFilter2.filter(function (item) {
          return item.node.displayStyle === 'Swatch';
        });
        var aFilter5 = aFilter2.filter(function (item) {
          return item.node.displayName === context.themeSettings.haloAddOptionForProduct2;
        });

        if (aFilter3.length > 0) {
          var aFilter4 = aFilter3[0].node.values.edges;
          $.each(aFilter4, function (idx, element) {
            var titleVar = aFilter4[idx].node.label,
                idVar = aFilter4[idx].node.entityId,
                lengthColorVar = aFilter4[idx].node.hexColors.length,
                color1 = aFilter4[idx].node.hexColors[0],
                color2 = aFilter4[idx].node.hexColors[1],
                color3 = aFilter4[idx].node.hexColors[2],
                img = aFilter4[idx].node.imageUrl;

            if (lengthColorVar == 2) {
              productFieldColor.append('<label class="form-option form-option-swatch" data-product-swatch-value="' + idVar + '"><span class="form-option-tooltip">' + titleVar + '</span><span class="form-option-variant form-option-variant--color form-option-variant--color2" title="' + titleVar + '"><span style="background-color:' + color1 + '"></span><span style="background-color:' + color2 + '"></span></span></label>');
            } else if (lengthColorVar === 3) {
              productFieldColor.append('<label class="form-option form-option-swatch" data-product-swatch-value="' + idVar + '"><span class="form-option-tooltip">' + titleVar + '</span><span class="form-option-variant form-option-variant--color form-option-variant--color2" title="' + titleVar + '"><span style="background-color:' + color1 + '"></span><span style="background-color:' + color2 + '"></span><span style="background-color:' + color3 + '"></span></span></label>');
            } else if (Boolean(color1)) {
              productFieldColor.append('<label class="form-option form-option-swatch" data-product-swatch-value="' + idVar + '"><span class="form-option-tooltip">' + titleVar + '</span><span class="form-option-variant form-option-variant--color" title="' + titleVar + '" style="background-color: ' + color1 + '"></span></label>');
            } else if (Boolean(img)) {
              productFieldColor.append('<label class="form-option form-option-swatch" data-product-swatch-value="' + idVar + '"><span class="form-option-tooltip">' + titleVar + '</span><span class="form-option-variant form-option-variant--pattern" title="' + titleVar + '" style="background-image: url(' + img + ')"></span></label>');
            }
          });
        } else {
          productFieldColor.remove();
        }

        if (aFilter5.length > 0) {
          if (productFieldSize.length < 1) {
            product_wrapper.find('.card-option-' + productId + '').append('<div class="form-field form-field--size"><label class="form-option">' + context.themeSettings.haloAddOptionForProductText.toString() + '</label></div>');
          }
        }

        if (aFilter5.length == 0 && aFilter3.length == 0) {
          product_wrapper.find('.card-option-' + productId + '').remove();
        }
      });
    };

    var token = context.token,
        product_wrapper = $('#' + wrapper),
        product_class = product_wrapper.find('.card');
    var list = [];
    callProductOption();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/halothemes/haloBundleProducts.js":
/*!**********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloBundleProducts.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");




function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/* harmony default export */ __webpack_exports__["default"] = (function ($scope, context) {
  var thisProuctId = parseInt(context.productId),
      $relateTab = $('#halo-related-products'),
      $bundle = $('#halo-bundle-products'),
      $bundleList = $bundle.find('.halo-product-list');
  var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_4__["default"])('#modal')[0];
  var currency = context.money;
  showBundle();
  $(document).on('click', '.halo-toggle-options', function (event) {
    event.preventDefault();
    var $target = $(event.currentTarget);
    $('.halo-toggle-options').not($target).removeClass('is-focus');
    $('.halo-detail-options').not($target.next('.halo-detail-options')).removeClass('is-open');

    if (!$target.next('.halo-detail-options').hasClass('is-open')) {
      $target.addClass('is-focus');
      $target.next('.halo-detail-options').addClass('is-open');
    } else {
      $target.next('.halo-detail-options').removeClass('is-open');
      $target.removeClass('is-focus');
    }
  });
  $(document).on('click', '.halo-option-close', function (event) {
    event.preventDefault();
    $('.halo-detail-options').removeClass('is-open');
    $('.halo-toggle-options').removeClass('is-focus');
  });
  $(document).on('click', function (event) {
    if ($('.halo-detail-options').hasClass('is-open')) {
      if ($(event.target).closest('.halo-detail-options').length === 0 && $(event.target).closest('.halo-toggle-options').length === 0) {
        $('.halo-detail-options').removeClass('is-open');
        $('.halo-toggle-options').removeClass('is-focus');
      }
    }
  });
  $(document).on('change', '.halo-detail-checkbox', function (event) {
    var $target = $(event.currentTarget),
        id = $target.attr('id').replace('fbt_product', ''),
        product = $('.halo-product-item[data-product-id="' + id + '"]');

    if ($target.is(':checked') == false) {
      product.removeClass('isChecked');
      product.find('.halo-product-iconAdd').removeClass('halo-product-iconChecked');
    } else {
      product.addClass('isChecked');
      product.find('.halo-product-iconAdd').addClass('halo-product-iconChecked');
    }

    totalPrice();
  });
  $(document).on('click', '#halo-addAll', function (event) {
    event.preventDefault();
    var $form = $('form', $bundle);
    var arrPro = new Array();
    $('.halo-detail-checkbox').each(function (index, val) {
      if ($(val).is(':checked')) {
        arrPro.push(index);
      }
    });
    var check = false;

    if (arrPro.length > 0) {
      check = checkProduct($form, arrPro);
    }

    if (check) {
      if (arrPro.length > 0) {
        var k = arrPro.length;
        $bundle.find('.loadingOverlay').show();
        addToCart($form, 0, arrPro, k);
      }
    } else {
      var errorMessage = 'Please make sure all options have been filled in.';

      if (errorMessage) {
        var tmp = document.createElement('DIV');
        tmp.innerHTML = errorMessage;
        return Object(_global_modal__WEBPACK_IMPORTED_MODULE_4__["showAlertModal"])(tmp.textContent || tmp.innerText);
      }
    }

    event.preventDefault();
  });

  function showBundle() {
    var options = {
      template: {
        item: 'halothemes/products/halo-bundle-products-tmp',
        options: 'halothemes/products/halo-bundle-products-options'
      }
    };
    var prodBundleId = [],
        totalBlock = '';
    firstItem();

    if ($bundle.hasClass('halo-bundle-login')) {
      totalBlock = '<div class="halo-product-total">\
                            <div class="total-price">\
                                <span class="text">Log in for pricing</span>\
                            </div>\
                        </div>';
    } else {
      totalBlock = '<div class="halo-product-total">\
                            <div class="total-price">\
                                <span class="text">Total:</span>\
                                <span class="price"></span>\
                            </div>\
                            <a class="button button--primary halo-product-total-button" id="halo-addAll" href="#">Add All To Cart</a>\
                        </div>';
    }

    $bundle.find('.bundle-product-right').append(totalBlock);
    $.each(context.productCustomFields, function (index, obj) {
      if (obj.name == '__bundleid') {
        prodBundleId = JSON.parse('[' + obj.value + ']');
      }
    });
    prodBundleId = $.grep(prodBundleId, function (value) {
      return value != thisProuctId;
    });

    if ($bundle.length > 0 && prodBundleId.length == 0) {
      var num = 0,
          list = [];
      $relateTab.find('.card').each(function (index, val) {
        list.push({
          index: index,
          data: ""
        });
        var pId = $(val).data('product-id');

        if (pId != undefined) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.product.getById(pId, options, function (err, response) {
            if (err) {
              return false;
            }

            list.forEach(function (element) {
              if (element.index == index) {
                element.data = response;
              }
            });
            num++;

            if (num == $relateTab.find('.card').length) {
              showList(list);
            }
          });
        }
      });
    } else if ($bundle.length > 0 && prodBundleId.length > 0) {
      var num = 0,
          list = [],
          listFilter = $.unique(prodBundleId);
      $.each(listFilter, function (index, val) {
        list.push({
          index: index,
          data: ""
        });
        var pId = val;

        if (pId != undefined) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.product.getById(pId, options, function (err, response) {
            if (err) {
              return false;
            }

            list.forEach(function (element) {
              if (element.index == index) {
                element.data = response;
              }
            });
            num++;

            if (num == prodBundleId.length) {
              showList(list);
            }
          });
        }
      });
    }
  }

  function firstItem() {
    var firstItem = $bundleList.find('.halo-product-itemFirst'),
        pId = firstItem.data('product-id'),
        form = firstItem.find('form'),
        hasOptions = form.find('[data-fbt-option-change]').length,
        hasDefaultOptions = form.find('[data-default]').length;

    if (hasDefaultOptions && hasOptions) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(pId, form.serialize(), 'products/bulk-discount-rates', function (err, response) {
        var attributesData = response.data || {};
        var attributesContent = response.content || {};
        updateProductAttributes(form, attributesData);

        if (hasDefaultOptions) {
          updateView(form, attributesData, attributesContent);
        } else {
          updateDefaultAttributesForOOS(attributesData);
        }
      });
    }
  }

  function showList(list) {
    list.forEach(function (element) {
      var response = element.data;
      $bundleList.append(response.item);

      if (response.options.trim() != "") {
        var pId = $(response.item).data('product-id'),
            $form = $bundleList.find('.halo-product-item[data-product-id="' + pId + '"] form');
        $form.append(response.options);
        var $productOptionsElement = $('[data-fbt-option-change]', $form);
        var hasOptions = $productOptionsElement.html().trim().length;
        var hasDefaultOptions = $(response.options).find('[data-default]').length;

        if (hasDefaultOptions && hasOptions) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(pId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
            if (response != undefined) {
              var attributesData = response.data || {};
              var attributesContent = response.content || {};
              updateProductAttributes($form, attributesData);

              if (hasDefaultOptions) {
                updateView($form, attributesData, attributesContent);
              } else {
                updateDefaultAttributesForOOS(attributesData);
              }
            }
          });
        }

        setProductVariant();
      }
    });
    productOptions();
    showSlickSlider($bundleList);

    if (!$bundle.hasClass('halo-bundle-login')) {
      totalPrice();
    }

    $bundle.removeClass('halo-block-disable');
  }

  function showSlickSlider(wrap) {
    if (wrap.length > 0) {
      wrap.slick({
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        mobileFirst: true,
        infinite: false,
        nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href='#slick-arrow-next'></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href='#slick-arrow-prev'></use></svg>",
        responsive: [{
          breakpoint: 1600,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 5,
            dots: false,
            arrows: true
          }
        }, {
          breakpoint: 1025,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 551,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }]
      });
    }
  }

  function checkProduct(form, arrPro) {
    var check = true;

    for (var i = 0; i < arrPro.length; i++) {
      var k = arrPro[i],
          $form = $(form[k]);

      if ($form.find('[data-fbt-option-change]').length) {
        check = checkBeforeAdd($form);

        if (check == false) {
          return false;
        }
      }
    }

    return check;
  }

  function checkBeforeAdd($attributes) {
    var check = true,
        att = "";
    $attributes.find('input:text, input:password, input:file, textarea').each(function (index, element) {
      if (!$(element).prop('required')) {} else {
        if ($(element).val()) {} else {
          $(element).focus();
          check = false;
        }
      }
    });
    $attributes.find('select').each(function (index, element) {
      if (!$(element).prop('required')) {} else {
        if ($(element).val()) {} else {
          $(element).focus();
          check = false;
        }
      }
    });
    $attributes.find('input:radio, input:checkbox').each(function (index, element) {
      if (att != $(element).attr("name")) {
        att = $(element).attr("name");

        if (!$(element).prop('required')) {
          if ($(element).attr("type") == "checkbox") {
            if ($("[name='" + att + "']:checked").val()) {}
          }

          if ($(element).attr("type") == "radio") {
            if ($("[name='" + att + "']:checked").val()) {}
          }
        } else {
          if ($(element).attr("type") == "checkbox") {
            if ($("[name='" + att + "']:checked").val()) {} else {
              check = false;
            }
          }

          if ($(element).attr("type") == "radio") {
            if ($("[name='" + att + "']:checked").val()) {} else {
              check = false;
            }
          }
        }
      }
    });
    return check;
  }

  function addToCart(form, i, arrP, k) {
    if (window.FormData === undefined) {
      return;
    }

    var prod = arrP[i];
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.itemAdd(filterEmptyFilesFromForm(new FormData(form[prod])), function (err, response) {
      var errorMessage = err || response.data.error;

      if (errorMessage) {
        var tmp = document.createElement('DIV');
        tmp.innerHTML = errorMessage;
        alert(tmp.textContent || tmp.innerText);
        k = k - 1;
      }

      i++;

      if (i >= arrP.length) {
        $bundle.find('.loadingOverlay').hide();
        modal.$modal.removeClass().addClass('modal modal--preview modal--previewMini modal--previewMini2');
        modal.open({
          size: 'small'
        });

        if ($(".modal-background:visible").length > 0) {
          $('.modal-background:visible').hide();
        }

        var response;

        if (k > 0) {
          response = '<div class="modal-header">\
                        <h2 class="modal-header-title">\
                            Ok, ' + k + ' item was added to your cart. What\'s next?\
                        </h2>\
                    </div>\
                    <div class="modal-body">\
                        <div class="previewCart previewCart2">\
                            <section class="previewCartCheckout previewCartCheckout2">\
                                <a href="/checkout.php" class="button button--primary">\
                                    Proceed To Checkout\
                                </a>\
                                <p class="previewCartCheckout-autoClose" data-auto-close="10">Auto close after <span class="count"></span>s</p>\
                            </section>\
                        </div>\
                    </div>';
        } else {
          response = '<div class="modal-header">\
                        <h2 class="modal-header-title">\
                            Ok, ' + k + ' item was added to your cart. What\'s next?\
                        </h2>\
                    </div>\
                    <div class="modal-body">\
                        <div class="previewCart previewCart2">\
                            <section class="previewCartCheckout previewCartCheckout2">\
                                <p class="previewCartCheckout-text">Sorry! We don\'t have enough product for your selection!</p>\
                                <p class="previewCartCheckout-autoClose" data-auto-close="10">Auto close after <span class="count"></span>s</p>\
                            </section>\
                        </div>\
                    </div>';
        }

        var $body = $('body');
        var quantity = parseInt($body.find('.cartDesktop .cart-quantity').text()) + k;
        $body.trigger('cart-quantity-update', quantity);
        modal.updateContent(response);
        return;
      }

      addToCart(form, i, arrP, k);
    });
  }

  function totalPrice() {
    var total = 0,
        symbol,
        symbolChange,
        decimalPlaces,
        decimalSeparator,
        thousandsSeparator,
        symbolLocation,
        curr,
        token1,
        token2,
        length;
    decimalPlaces = currency.decimal_places;
    decimalSeparator = currency.decimal_token;
    thousandsSeparator = currency.thousands_token;
    symbolLocation = currency.currency_location;
    symbol = currency.currency_token;
    $bundleList.find('.halo-product-item.isChecked').each(function (index, val) {
      var price = parseFloat($(val).find('[data-price-value]').attr('data-price-value'));
      total = total + price;
    });

    if ($('.productView-price > .price-section > .price.price--withTax', $scope).length) {
      curr = $('.productView-price > .price-section > .price.price--withTax', $scope).text();
    } else {
      curr = $('.productView-price > .price-section > .price.price--withoutTax', $scope).text();
    }

    symbolChange = curr.replace(/[0-9]/g, "").replace(".", "").replace(",", "");

    if (symbol != symbolChange) {
      symbol = symbolChange;
      token1 = curr.indexOf('.');
      token2 = curr.indexOf(',');
      length = curr.length - 1;

      if (curr.indexOf(symbol) != -1) {
        symbolLocation = curr.indexOf(symbol);
      }

      if (token1 < token2) {
        thousandsSeparator = '.';
        decimalSeparator = ',';

        if (symbolLocation == 0 || symbolLocation == "left") {
          decimalPlaces = length - token2;
        } else {
          decimalPlaces = length - token2 - 1;
        }
      } else {
        thousandsSeparator = ',';
        decimalSeparator = '.';

        if (symbolLocation == 0 || symbolLocation == "left") {
          decimalPlaces = length - token1;
        } else {
          decimalPlaces = length - token1 - 1;
        }
      }
    }

    if (total == 0) {
      $bundle.find('#halo-addAll').attr('disabled', true);
    } else {
      $bundle.find('#halo-addAll').attr('disabled', false);
    }

    total = formatMoney(total, decimalPlaces, decimalSeparator, thousandsSeparator);

    if (symbolLocation == "left" || symbolLocation == 0) {
      total = symbol + total;
    } else {
      total = total + symbol;
    }

    $bundle.find('.halo-product-total .price').html(total);
  }

  function formatMoney(n, c, d, t) {
    var c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
  }

  ;

  function productOptions() {
    if (!$bundle.hasClass('halo-bundle-login')) {
      totalPrice();
    }

    var $form = $('form', $bundle),
        $productOptionsElement = $('[data-fbt-option-change]', $form);
    $(document).on('change', $productOptionsElement, function (event) {
      productOptionsChanged(event);
      setProductVariant(event);
    });
  }

  function setProductVariant() {
    var unsatisfiedRequiredFields = [];
    var options = [];
    $.each($('[data-fbt-option-change] [data-product-attribute]'), function (index, value) {
      var optionLabel = value.children[0].innerText;
      var optionTitle = optionLabel.split(':')[0].trim();
      var required = optionLabel.toLowerCase().includes('required');
      var type = value.getAttribute('data-product-attribute');

      if ((type === 'input-file' || type === 'input-text' || type === 'input-number') && value.querySelector('input').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }

      if (type === 'textarea' && value.querySelector('textarea').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }

      if (type === 'date') {
        var isSatisfied = Array.from(value.querySelectorAll('select')).every(function (select) {
          return select.selectedIndex !== 0;
        });

        if (isSatisfied) {
          var dateString = Array.from(value.querySelectorAll('select')).map(function (x) {
            return x.value;
          }).join('-');
          options.push(optionTitle + ":" + dateString);
          return;
        }

        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }

      if (type === 'set-select') {
        var select = value.querySelector('select');
        var selectedIndex = select.selectedIndex;

        if (selectedIndex !== 0) {
          options.push(optionTitle + ":" + select.options[selectedIndex].innerText);
          $(value.children[0]).find('[data-option-value]').text(select.options[selectedIndex].innerText);
          return;
        }

        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }

      if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch' || type === 'input-checkbox' || type === 'product-list') {
        var checked = value.querySelector(':checked');

        if (checked) {
          if (type === 'set-rectangle' || type === 'set-radio' || type === 'product-list') {
            var label = checked.labels[0].innerText;

            if (label) {
              options.push(optionTitle + ":" + label);
              $(value.children[0]).find('[data-option-value]').text(label);
            }
          }

          if (type === 'swatch') {
            var _label = checked.labels[0].children[0];

            if (_label) {
              options.push(optionTitle + ":" + _label.title);
              $(value.children[0]).find('[data-option-value]').text(_label.title);
            }
          }

          if (type === 'input-checkbox') {
            options.push(optionTitle + ":Yes");
          }

          return;
        }

        if (type === 'input-checkbox') {
          options.push(optionTitle + ":No");
        }

        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
    });
  }

  function productOptionsChanged(event) {
    var $changedOption = $(event.target);
    var $form = $changedOption.parents('form');
    var productId = $('[name="product_id"]', $form).val();

    if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
      return;
    }

    if ($changedOption.attr('id') === 'fbt_product' + productId) {
      return;
    }

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
      var productAttributesData = response.data || {};
      var productAttributesContent = response.content || {};
      showProductImage(productId, productAttributesData);
      updateProductAttributes($form, productAttributesData);
      updateView($form, productAttributesData, productAttributesContent);

      if (!$bundle.hasClass('halo-bundle-login')) {
        totalPrice();
      }
    });
    return false;
  }

  function updateProductAttributes($scope, data) {
    var behavior = data.out_of_stock_behavior;
    var inStockIds = data.in_stock_attributes;
    var outOfStockMessage = " (" + data.out_of_stock_message + ")";

    if (behavior !== 'hide_option' && behavior !== 'label_option') {
      return;
    }

    $('[data-product-attribute-value]', $scope).each(function (i, attribute) {
      var $attribute = $(attribute);
      var attrId = parseInt($attribute.data('productAttributeValue'), 10);

      if (inStockIds.indexOf(attrId) !== -1) {
        enableAttribute($attribute, behavior, outOfStockMessage);
      } else {
        disableAttribute($attribute, behavior, outOfStockMessage);
      }
    });
  }

  function disableAttribute($attribute, behavior, outOfStockMessage) {
    if (getAttributeType($attribute) === 'set-select') {
      return disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }

    if (behavior === 'hide_option') {
      $attribute.hide();
    } else {
      $attribute.addClass('unavailable');
    }
  }

  function disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    var $select = $attribute.parent();

    if (behavior === 'hide_option') {
      $attribute.toggleOption(false);

      if ($select.val() === $attribute.attr('value')) {
        $select[0].selectedIndex = 0;
      }
    } else {
      $attribute.attr('disabled', 'disabled');
      $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
    }
  }

  function enableAttribute($attribute, behavior, outOfStockMessage) {
    if (getAttributeType($attribute) === 'set-select') {
      return enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }

    if (behavior === 'hide_option') {
      $attribute.show();
    } else {
      $attribute.removeClass('unavailable');
    }
  }

  function enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    if (behavior === 'hide_option') {
      $attribute.toggleOption(true);
    } else {
      $attribute.prop('disabled', false);
      $attribute.html($attribute.html().replace(outOfStockMessage, ''));
    }
  }

  function getAttributeType($attribute) {
    var $parent = $attribute.closest('[data-product-attribute]');
    return $parent ? $parent.data('productAttribute') : null;
  }

  function showProductImage(productId, data) {
    if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2___default()(data.image)) {
      var mainImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].tools.imageSrcset.getSrcset(data.image.data, {
        '1x': context.themeSettings.productgallery_size
      });
      $('.halo-product-item[data-product-id="' + productId + '"]').find('img').attr({
        'srcset': mainImageUrl,
        'data-srcset': $(this).attr('srcset')
      });
    } else {
      var _mainImageUrl = $('.halo-product-item[data-product-id="' + productId + '"]').find('img').attr('data-srcset');

      $('.halo-product-item[data-product-id="' + productId + '"]').find('img').attr({
        'srcset': _mainImageUrl,
        'data-srcset': $(this).attr('srcset')
      });
    }
  }

  function updateView($scope, data, content) {
    if (content === void 0) {
      content = null;
    }

    var viewModel = getViewModel($scope);
    showMessageBox(data.stock_message || data.purchasing_message, $scope);

    if (lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(data.stock)) {
      if (data.stock <= parseInt(context.themeSettings.halo_stock_level_limit) && data.stock > 0) {
        viewModel.$stockLeftWrapper.removeClass('u-hiddenVisually');
        viewModel.$stockLeft.text(data.stock);
      } else {
        viewModel.$stockLeftWrapper.addClass('u-hiddenVisually');
      }
    }

    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default()(data.price)) {
      updatePriceView(viewModel, data.price);
    }

    var productId = $('[name="product_id"]', $scope).val(),
        product = $bundleList.find('.halo-product-item[data-product-id="' + productId + '"]'),
        productCheckbox = product.find('.halo-detail-checkbox');

    if (!data.purchasable || !data.instock) {
      product.removeClass('isChecked hasOptions--selected');
      productCheckbox.prop('checked', false).prop('disabled', true);
    } else {
      product.addClass('isChecked');
      productCheckbox.prop('checked', true).prop('disabled', false);

      if ($scope.find('[data-fbt-option-change]').length > 0) {
        var check = checkBeforeAdd($scope);

        if (check == true) {
          product.addClass('hasOptions--selected');
        }
      }
    }
  }

  function updateDefaultAttributesForOOS($scope, data) {
    var productId = $('[name="product_id"]', $scope).val(),
        product = $bundleList.find('.halo-product-item[data-product-id="' + productId + '"]'),
        productCheckbox = product.find('.halo-detail-checkbox');

    if (!data.purchasable || !data.instock) {
      product.removeClass('isChecked hasOptions--selected');
      productCheckbox.prop('checked', false).prop('disabled', true);
    } else {
      product.addClass('isChecked');
      productCheckbox.prop('checked', true).prop('disabled', false);

      if ($scope.find('[data-fbt-option-change]').length > 0) {
        var check = checkBeforeAdd($scope);

        if (check == true) {
          product.addClass('hasOptions--selected');
        }
      }
    }
  }

  function getViewModel($scope) {
    return {
      $priceWithTax: $('[data-product-price-with-tax]', $scope),
      $priceWithoutTax: $('[data-product-price-without-tax]', $scope),
      rrpWithTax: {
        $div: $('.rrp-price--withTax', $scope),
        $span: $('[data-product-rrp-with-tax]', $scope)
      },
      rrpWithoutTax: {
        $div: $('.rrp-price--withoutTax', $scope),
        $span: $('[data-product-rrp-price-without-tax]', $scope)
      },
      nonSaleWithTax: {
        $div: $('.non-sale-price--withTax', $scope),
        $span: $('[data-product-non-sale-price-with-tax]', $scope)
      },
      nonSaleWithoutTax: {
        $div: $('.non-sale-price--withoutTax', $scope),
        $span: $('[data-product-non-sale-price-without-tax]', $scope)
      },
      priceSaved: {
        $div: $('.price-section--saving', $scope),
        $span: $('[data-product-price-saved]', $scope)
      },
      priceNowLabel: {
        $span: $('.price-now-label', $scope)
      },
      priceLabel: {
        $span: $('.price-label', $scope)
      },
      priceData: {
        $div: $('[data-price-value]', $scope)
      },
      $weight: $('.productView-info [data-product-weight]', $scope),
      $increments: $('.form-field--increments :input', $scope),
      $addToCart: $('#form-action-addToCart', $scope),
      $wishlistVariation: $('[data-wishlist-add] [name="variation_id"]', $scope),
      $stockLeft: $('[data-stock-left]', $scope),
      $stockLeftWrapper: $('.productView-optionsStock', $scope),
      stock: {
        $container: $('.form-field--stock', $scope),
        $input: $('[data-product-stock]', $scope)
      },
      $sku: $('[data-product-sku]'),
      $upc: $('[data-product-upc]'),
      quantity: {
        $text: $('.incrementTotal', $scope),
        $input: $('[name=qty\\[\\]]', $scope)
      },
      $bulkPricing: $('.productView-info-bulkPricing', $scope)
    };
  }

  function showMessageBox(message, $scope) {
    var $messageBox = $('.productAttributes-message', $scope);

    if (message) {
      $('.alertBox-message', $messageBox).text(message);
      $messageBox.show();
    } else {
      $messageBox.hide();
    }
  }

  function clearPricingNotFound(viewModel) {
    viewModel.rrpWithTax.$div.hide();
    viewModel.rrpWithoutTax.$div.hide();
    viewModel.nonSaleWithTax.$div.hide();
    viewModel.nonSaleWithoutTax.$div.hide();
    viewModel.priceSaved.$div.hide();
    viewModel.priceNowLabel.$span.hide();
    viewModel.priceLabel.$span.hide();
  }

  function updatePriceView(viewModel, price) {
    clearPricingNotFound(viewModel);

    if (price.with_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithTax.html(price.with_tax.formatted);
      viewModel.priceData.$div.attr('data-price-value', price.with_tax.value);
    }

    if (price.without_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithoutTax.html(price.without_tax.formatted);
      viewModel.priceData.$div.attr('data-price-value', price.without_tax.value);
    }

    if (price.rrp_with_tax) {
      viewModel.rrpWithTax.$div.show();
      viewModel.rrpWithTax.$span.html(price.rrp_with_tax.formatted);
    }

    if (price.rrp_without_tax) {
      viewModel.rrpWithoutTax.$div.show();
      viewModel.rrpWithoutTax.$span.html(price.rrp_without_tax.formatted);
    }

    if (price.saved) {
      viewModel.priceSaved.$div.show();
      viewModel.priceSaved.$span.html(price.saved.formatted);
    }

    if (price.non_sale_price_with_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithTax.$span.html(price.non_sale_price_with_tax.formatted);
    }

    if (price.non_sale_price_without_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithoutTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithoutTax.$span.html(price.non_sale_price_without_tax.formatted);
    }
  }

  function filterEmptyFilesFromForm(formData) {
    try {
      for (var _iterator = _createForOfIteratorHelperLoose(formData), _step; !(_step = _iterator()).done;) {
        var _step$value = _step.value,
            key = _step$value[0],
            val = _step$value[1];

        if (val instanceof File && !val.name && !val.size) {
          formData.delete(key);
        }
      }
    } catch (e) {
      console.error(e);
    }

    return formData;
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/halothemes/haloNextProducts.js":
/*!********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloNextProducts.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");

/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  if ($('.productView-nextProducts').length) {
    var getProduct = function getProduct(arr) {
      return fetch('/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
          query: "\n                query MyQuery {\n                    site {\n                        products (entityIds: [" + arr + "]) {\n                          edges {\n                            product: node {\n                              ...ProductFields\n                              }\n                            }\n                        }\n                        currency (currencyCode: " + curCode + ") {\n                            display {\n                                symbol\n                                symbolPlacement\n                                decimalToken\n                                thousandsToken\n                                decimalPlaces\n                            }\n                        }\n                    }\n                }\n                fragment ProductFields on Product {\n                    id\n                    entityId\n                    name\n                    path\n                    defaultImage {\n                        img70px: url(width: 70)\n                        altText\n                    }\n                    prices {\n                        priceRange {\n                            min {\n                                ...MoneyFields\n                            }\n                            max {\n                                ...MoneyFields\n                            }\n                        }\n                        retailPrice {\n                            ...MoneyFields\n                        }\n                        basePrice {\n                            ...MoneyFields\n                        }\n                        price {\n                            ...MoneyFields\n                        }\n                    }\n                }\n                fragment MoneyFields on Money {\n                    value\n                    currencyCode\n                }\n            "
        })
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        return res.data;
      });
    };

    var formatMoney = function formatMoney(n, c, d, t) {
      var c = isNaN(c = Math.abs(c)) ? 2 : c,
          d = d == undefined ? "." : d,
          t = t == undefined ? "," : t,
          s = n < 0 ? "-" : "",
          i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
          j = (j = i.length) > 3 ? j % 3 : 0;
      return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    };

    var renderProduct = function renderProduct(product, curDisplay) {
      if (product != undefined) {
        $.each(product, function (index, element) {
          var item = element.product,
              symbol = curDisplay.symbol,
              symbolPlacement = curDisplay.symbolPlacement.toLowerCase(),
              decimalToken = curDisplay.decimalToken,
              decimalPlaces = curDisplay.decimalPlaces,
              thousandsToken = curDisplay.thousandsToken;
          var title, price;

          if (context.themeSettings.halo_card_title == 'ellipsis') {
            title = '<a href="' + item.path + '" class="card-ellipsis" style="-webkit-box-orient: vertical;">' + item.name + '</a>';
          } else {
            title = '<a href="' + item.path + '">' + item.name + '</a>';
          }

          if ($('.body').hasClass('is-login') || context.themeSettings.restrict_to_login !== true) {
            if (item.prices.priceRange.min.value < item.prices.priceRange.max.value && context.themeSettings.price_ranges) {
              var priceMin = (symbolPlacement == "left" ? symbol : "") + formatMoney(item.prices.priceRange.min.value, decimalPlaces, decimalToken, thousandsToken) + (symbolPlacement != "left" ? symbol : "");
              var priceMax = (symbolPlacement == "left" ? symbol : "") + formatMoney(item.prices.priceRange.max.value, decimalPlaces, decimalToken, thousandsToken) + (symbolPlacement != "left" ? symbol : "");
              price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax price-none" style="display: none;">\
                                        <span data-product-non-sale-price-without-tax="" class="price price--non-sale"></span>\
                                    </div>\
                                    <div class="price-section price-section--withoutTax">\
                                        <span data-product-price-without-tax="" class="price price--withoutTax">' + priceMin + ' - ' + priceMax + '</span>\
                                    </div>';
            } else {
              var priceDef = (symbolPlacement == "left" ? symbol : "") + formatMoney(item.prices.price.value, decimalPlaces, decimalToken, thousandsToken) + (symbolPlacement != "left" ? symbol : "");

              if (item.prices.retailPrice == null) {
                if (item.prices.basePrice.value > item.prices.price.value) {
                  var priceBas = (symbolPlacement == "left" ? symbol : "") + formatMoney(item.prices.basePrice.value, decimalPlaces, decimalToken, thousandsToken) + (symbolPlacement != "left" ? symbol : "");
                  price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax">\
                                                <span data-product-non-sale-price-without-tax="" class="price price--non-sale">' + priceBas + '</span>\
                                            </div>\
                                            <div class="price-section price-section--withoutTax">\
                                                <span data-product-price-without-tax="" class="price price--withoutTax">' + priceDef + '</span>\
                                            </div>';
                } else {
                  price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax price-none" style="display: none;">\
                                                <span data-product-non-sale-price-without-tax="" class="price price--non-sale"></span>\
                                            </div>\
                                            <div class="price-section price-section--withoutTax">\
                                                <span data-product-price-without-tax="" class="price price--withoutTax">' + priceDef + '</span>\
                                            </div>';
                }
              } else {
                if (item.prices.retailPrice.value > item.prices.price.value) {
                  var priceRet = (symbolPlacement == "left" ? symbol : "") + formatMoney(item.prices.retailPrice.value, decimalPlaces, decimalToken, thousandsToken) + (symbolPlacement != "left" ? symbol : "");
                  price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax">\
                                                <span data-product-non-sale-price-without-tax="" class="price price--non-sale">' + priceRet + '</span>\
                                            </div>\
                                            <div class="price-section price-section--withoutTax">\
                                                <span data-product-price-without-tax="" class="price price--withoutTax">' + priceDef + '</span>\
                                            </div>';
                } else {
                  price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax price-none" style="display: none;">\
                                                <span data-product-non-sale-price-without-tax="" class="price price--non-sale"></span>\
                                            </div>\
                                            <div class="price-section price-section--withoutTax">\
                                                <span data-product-price-without-tax="" class="price price--withoutTax">' + priceDef + '</span>\
                                            </div>';
                }
              }
            }
          } else {
            price = '<p translate>Log in for pricing</p>';
          }

          var html_card = '<div class="card card-custom" data-product-id="' + item.entityId + '">\
                                        <div class="card-image">\
                                            <a class="card-link" href="' + item.path + '">\
                                                <img src="' + item.defaultImage.img70px + '" alt="' + item.name + '" title="' + item.name + '" />\
                                            </a>\
                                        </div>\
                                        <div class="card-content">\
                                            <h4 class="card-title">' + title + '</h4>\
                                            <div class="card-price" data-test-info-type="price">' + price + '</div>\
                                        </div>\
                                    </div>';

          if (item.entityId == prevId) {
            if (item.path !== undefined) {
              $prodIcons.find('.prev-icon').attr('href', item.path);
              $prodIcons.find('.prev-icon').removeClass('disable');
              $prodWrap.find('#prev-product-modal').append(html_card);
            } else {
              $prodIcons.find('.prev-icon').remove();
              $prodWrap.find('#prev-product-modal').remove();
            }
          }

          if (item.entityId == nextId) {
            if (item.path !== undefined) {
              $prodIcons.find('.next-icon').attr('href', item.path);
              $prodIcons.find('.next-icon').removeClass('disable');
              $prodWrap.find('#next-product-modal').append(html_card);
            } else {
              $prodIcons.find('.next-icon').remove();
              $prodWrap.find('#next-product-modal').remove();
            }
          }
        });
      }
    };

    var token = context.token;
    var curCode = $('.body').data('currency-code');
    var productId = $('.productView-nextProducts').data('product-id'),
        nextId = productId + 1,
        prevId = productId - 1,
        nextLink,
        prevLink,
        list;
    var $prodWrap = $('.productView-nextProducts .next-prev-modal'),
        $prodIcons = $('.productView-nextProducts .next-prev-icons');

    if (prevId != undefined && nextId != undefined) {
      list = [prevId, nextId];
      getProduct(list).then(function (data) {
        renderProduct(data.site.products.edges, data.site.currency.display);
      });
    }

    $prodIcons.on('mouseover', function () {
      $prodWrap.addClass('is-active');
    }).on('mouseleave', function () {
      $prodWrap.removeClass('is-active');
    });
    $('.next-icon', $prodIcons).on('mouseover', function () {
      $('#prev-product-modal').removeClass('is-show');
      $('#next-product-modal').addClass('is-show');
    });
    $('.prev-icon', $prodIcons).on('mouseover', function () {
      $('#next-product-modal').removeClass('is-show');
      $('#prev-product-modal').addClass('is-show');
    });
    $prodWrap.on('mouseover', function () {
      $prodWrap.addClass('is-active');
    }).on('mouseleave', function () {
      $prodWrap.removeClass('is-active');
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/halothemes/haloProductLookbook.js":
/*!***********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloProductLookbook.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");

/* harmony default export */ __webpack_exports__["default"] = (function (context, el) {
  var $popup = $('.lookbook-popup');
  var $el = el;
  var $options = {
    template: 'halothemes/products/halo-lookbook-tmp'
  };
  $el.find('.item .item-point').on('click', function (event) {
    $popup.removeClass('is-open').empty();
    var $prodId = $(event.target).data('product-id'),
        position = $(event.target).offset(),
        container = $el.offset();

    if ($prodId != undefined) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.product.getById($prodId, $options, function (err, response) {
        if (err) {
          return false;
        }

        $popup.html(response);
      });

      if ($(window).width() >= 551) {
        $popup.css({
          'top': position.top - container.top - 100,
          'left': position.left - container.left + 30
        });
      } else {
        $popup.css({
          'top': position.top - container.top + 15,
          'left': 15
        });
      }

      $popup.addClass("is-open");
    }
  });
  $(document).on('click', '.close-product', function (event) {
    event.preventDefault();

    if ($popup.hasClass("is-open")) {
      $popup.removeClass("is-open");
    }
  });
  $(document).on('click', function (event) {
    if ($popup.hasClass("is-open")) {
      if ($(event.target).closest($popup).length === 0 && $(event.target).closest('.item .item-point').length === 0) {
        $popup.removeClass("is-open");
      }
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/halothemes/haloStickyAddToCart.js":
/*!***********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloStickyAddToCart.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.dropdown */ "./node_modules/foundation-sites/js/foundation/foundation.dropdown.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _bigcommerce_stencil_utils_src_lib_request_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils/src/lib/request.js */ "./node_modules/@bigcommerce/stencil-utils/src/lib/request.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");







/* harmony default export */ __webpack_exports__["default"] = (function ($scope, context) {
  var offsetScroll = $scope.find('[data-cart-item-add]'),
      scroll = offsetScroll.offset().top + offsetScroll.outerHeight(true);
  var showPrice = context.themeSettings.restrict_to_login;
  var previewModal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#previewModal')[0],
      $sticky = $('.sticky-add-to-cart'),
      $stickyClose = $sticky.find('.sticky-product-close'),
      $stickyExpand = $sticky.find('.sticky-product-expand'),
      $prodId = $sticky.find('[data-cart-item-add-2] [name="product_id"]').val(),
      $prodPrice = $sticky.find('.sticky-price'),
      $prodOptions = $sticky.find('.sticky-options'),
      $prodOptionLabel = $prodOptions.find('.sticky-options-label'),
      $prodOptionDropdown = $prodOptions.find('.sticky-options-dropdown'),
      $imageWrapper = $sticky.find('.sticky-image'),
      $prodBtn = $sticky.find('.sticky-actions .button'),
      $prodWLBtn = $sticky.find('.sticky-wishlist'),
      waitMessage = $prodBtn.data('waitMessage'),
      originalBtnVal = $prodBtn.text(),
      $body = $('body');

  function loadSticky() {
    if (context.themeSettings.halo_sticky_add_to_cart == true && $sticky.length > 0) {
      loadOptions();
      $(window).scroll(function () {
        if ($(window).scrollTop() > scroll + 100) {
          if (!$sticky.hasClass('show-sticky')) {
            $sticky.addClass('show-sticky');

            if ($body.hasClass('page-type-product')) {
              $body.addClass('openStickyAddToCart');
            }
          }
        } else {
          $sticky.removeClass('show-sticky hidden-sticky show-full-sticky');

          if ($body.hasClass('page-type-product')) {
            $body.removeClass('openStickyAddToCart');
          }
        }
      });
      $prodOptionLabel.on('click', function (event) {
        $prodOptionDropdown.toggleClass('is-open');
      });
      $prodOptionDropdown.on('click', '.option-item', function (event) {
        var $target = $(event.currentTarget);

        if (!$target.hasClass('is-select')) {
          var optionLabel = $target.find('.option-itemWrapper').html(),
              optionAttr = $target.data('variant-attr');
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.productAttributes.optionChange($prodId, optionAttr, function (err, response) {
            var productAttributesData = response.data || {};
            updateView(productAttributesData);
          });
          $prodOptionDropdown.find('.option-item').removeClass('is-select');
          $target.addClass('is-select');
          $prodOptionLabel.find('.text').html(optionLabel);
          $prodOptionDropdown.removeClass('is-open');
        }
      });
      $stickyClose.on('click', function (event) {
        event.preventDefault();

        if ($sticky.hasClass('show-full-sticky')) {
          $sticky.removeClass('show-full-sticky');
        } else {
          $sticky.addClass('hidden-sticky');

          if ($body.hasClass('page-type-product')) {
            $body.removeClass('openStickyAddToCart');
          }
        }
      });
      $stickyExpand.on('click', function (event) {
        event.preventDefault();
        $sticky.addClass('show-full-sticky');
      });
      $prodBtn.on('click', function (event) {
        event.preventDefault();
        var attr = $prodBtn.attr('disabled2');

        if (typeof attr !== typeof undefined && attr !== false) {
          var form = $('form[data-cart-item-add]', $scope),
              height = $(window).scrollTop(),
              formHeight = form.offset().top + form.height() / 2;

          if (height > formHeight) {
            $('body,html').animate({
              scrollTop: form.offset().top - 50
            }, 700);
          }
        } else {
          addToCart();
        }
      });
      $prodWLBtn.on('click', function (event) {
        event.preventDefault();
        var $this_wl = $(event.currentTarget),
            url_awl = $this_wl.attr('href');
        $.post(url_awl).done(function () {
          window.location.href = url_awl;
        });
      });
      $(document).on('click', function (event) {
        if ($prodOptionDropdown.hasClass('is-open')) {
          if ($(event.target).closest('.sticky-options-dropdown').length === 0 && $(event.target).closest('.sticky-options-label').length === 0) {
            $prodOptionDropdown.removeClass('is-open');
          }
        }
      });
    }
  }

  loadSticky();

  function loadOptions() {
    if ($prodOptions.length > 0) {
      (function () {
        var decrementRows = function decrementRows(dLength) {
          var currenIndex = dLength - 1;
          rows[currenIndex] += 1;

          if (rows[currenIndex] < rowLimits[currenIndex] === false) {
            if (currenIndex === 0) {
              isNewOptionsReady = true;
            } else {
              rows[currenIndex] = 0;
              decrementRows(currenIndex);
            }
          }
        };

        var rows = [],
            rowLimits = [],
            rowObjects = [],
            newOptions = [];
        $('[data-product-attribute]', $scope).each(function (index, element) {
          var id = $(element).data('product-option-id'),
              type = $(element).data('product-attribute');

          if (type === 'input-checkbox' || type === 'product-list' || type === 'date' || type === 'input-file' || type === 'input-text' || type === 'input-number' || type === 'textarea') {} else {
            rows.push(0);

            if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch') {
              rowLimits.push($(element).find('.form-radio').length);
            }

            if (type === 'set-select') {
              rowLimits.push($(element).find('.form-select option:not(:first-child)').length);
            }

            var rowObject = [];

            if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch') {
              $(element).find('.form-radio').each(function (index2, element2) {
                rowObject.push({
                  attribute: id,
                  attributeValue: $(element2).attr('value'),
                  attributeLabel: $(element2).attr('name'),
                  attributeName: $(element2).attr('data-title'),
                  attributeIndex: $(element2).attr('data-index'),
                  invisible: false,
                  instock: true
                });
              });
            }

            if (type === 'set-select') {
              var setLabel = $(element).find('.form-select').attr('name');
              $(element).find('.form-select option:not(:first-child)').each(function (index2, element2) {
                rowObject.push({
                  attribute: id,
                  attributeValue: $(element2).attr('value'),
                  attributeLabel: setLabel,
                  attributeName: $(element2).attr('data-title'),
                  attributeIndex: $(element2).attr('data-index'),
                  invisible: false,
                  instock: true
                });
              });
            }

            rowObjects.push(rowObject);
          }
        });
        var isNewOptionsReady = false;
        var currentOptionIndex = 0;

        while (isNewOptionsReady === false) {
          newOptions[currentOptionIndex] = {
            attributes: [],
            label: '',
            name: '',
            position: ''
          };
          rows.forEach(function (r, rIndex) {
            newOptions[currentOptionIndex].attributes.push(rowObjects[rIndex][r]);
            newOptions[currentOptionIndex].label += rowObjects[rIndex][r].attributeLabel + " ";
            newOptions[currentOptionIndex].name += "<span>" + rowObjects[rIndex][r].attributeName + "</span>";
            newOptions[currentOptionIndex].position += "" + rowObjects[rIndex][r].attributeIndex;
          });
          decrementRows(rows.length);
          currentOptionIndex += 1;
        }

        var currentNewOptionIndex = 0;
        newOptions.forEach(function (newOption, newOptionIndex, newEl) {
          var attributeString = '';
          newOption.attributes.forEach(function (attribute) {
            attributeString = attributeString + ("&attribute[" + attribute.attribute + "]=") + attribute.attributeValue;
          });
          $(document.createElement("div")).attr({
            class: 'option-item',
            'data-variant-index': newOption.position,
            'data-variant-attr': attributeString
          }).append('<div class="option-itemWrapper">' + newOption.name + '</div>').appendTo($prodOptionDropdown);
        });
      })();
    }
  }

  function addToCart() {
    var $form = $('[data-cart-item-add-2]');
    var sku = $form.find('.sticky-actions').attr('data-product-sku-add');
    var att = $form.find('.option-item.is-select').data('variant-attr');
    var options = {
      template: 'cart/preview'
    };
    var url;

    if (sku != undefined && sku != null && sku != '') {
      url = "/cart.php?action=add&sku=" + sku + "&qty=1";
    } else {
      url = "/cart.php?action=add&product_id=" + $prodId + att;
    }

    $prodBtn.text(waitMessage).prop('disabled', true);
    Object(_bigcommerce_stencil_utils_src_lib_request_js__WEBPACK_IMPORTED_MODULE_5__["default"])(encodeURI(url), {
      method: 'POST',
      requestOptions: options
    }, function (err, response) {
      if (err) {
        throw new Error(err);
      }

      var errorMessage = err;

      if (errorMessage) {
        var tmp = document.createElement('DIV');
        tmp.innerHTML = errorMessage;
        return Object(_global_modal__WEBPACK_IMPORTED_MODULE_6__["showAlertModal"])(tmp.textContent || tmp.innerText);
      }

      $prodBtn.text(originalBtnVal).prop('disabled', false);

      if (previewModal) {
        if (context.themeSettings.halo_add_to_cart_popup === 'normal') {
          previewModal.$modal.removeClass().addClass('modal modal--preview');
          previewModal.open({
            size: 'large'
          });
        } else if (context.themeSettings.halo_add_to_cart_popup === 'mini') {
          previewModal.$modal.removeClass().addClass('modal modal--preview modal--previewMini');
          previewModal.open({
            size: 'small'
          });

          if ($(".modal-background:visible").length > 0) {
            $('.modal-background:visible').hide();
          }
        }

        updateCartContent(previewModal, response);
      } else {
        redirectTo(response.data.cart_item.cart_url || context.urls.cart);
      }
    });
  }

  function redirectTo(url) {
    if (this.isRunningInIframe() && !window.iframeSdk) {
      window.top.location = url;
    } else {
      window.location = url;
    }
  }

  function updateCartContent(modal, response) {
    var quantity = parseInt($body.find('.cartDesktop .cart-quantity').text()) + 1;
    $body.trigger('cart-quantity-update', quantity);
    modal.updateContent(response);
  }

  function showVariantImage(image) {
    if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1___default()(image)) {
      var mainImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].tools.imageSrcset.getSrcset(image.data, {
        '1x': context.themeSettings.productgallery_size
      });
      return mainImageUrl;
    }
  }

  function updateView(data) {
    var inStock = data.instock,
        image = data.image,
        sku = data.sku,
        price = data.price;

    if (inStock) {
      $prodBtn.attr('disabled', false);
      $prodOptionLabel.removeClass('option-hidden').addClass('option-visible');
    } else {
      $prodBtn.attr('disabled', true);
      $prodOptionLabel.removeClass('option-visible').addClass('option-hidden');
    }

    if (image != undefined && image !== null && image !== '') {
      $imageWrapper.find('img').attr('srcset', showVariantImage(image));
    }

    if (sku) {
      $('[data-product-sku-add]').attr('data-product-sku-add', sku);
    }

    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default()(price)) {
      updatePriceView(price);
    }
  }

  function updatePriceView(price) {
    if (price.with_tax) {
      $('.price-label', $prodPrice).show();
      $('[data-product-price-with-tax]', $prodPrice).html(price.with_tax.formatted);
    }

    if (price.without_tax) {
      $('.price-label', $prodPrice).show();
      $('[data-product-price-without-tax]', $prodPrice).html(price.without_tax.formatted);
    }

    if (price.rrp_with_tax) {
      $('.rrp-price--withTax', $prodPrice).show();
      $('[data-product-rrp-with-tax]', $prodPrice).html(price.rrp_with_tax.formatted);
    }

    if (price.rrp_without_tax) {
      $('.rrp-price--withoutTax', $prodPrice).show();
      $('[data-product-rrp-price-without-tax]', $prodPrice).html(price.rrp_without_tax.formatted);
    }

    if (price.saved) {
      $('.price-section--saving', $prodPrice).show();
      $('[data-product-price-saved]', $prodPrice).html(price.saved.formatted);
    }

    if (price.non_sale_price_with_tax) {
      $('.price-label', $prodPrice).hide();
      $('.non-sale-price--withTax', $prodPrice).show();
      $('.price-now-label', $prodPrice).show();
      $('[data-product-non-sale-price-with-tax]', $prodPrice).html(price.non_sale_price_with_tax.formatted);
    }

    if (price.non_sale_price_without_tax) {
      $('.price-label', $prodPrice).hide();
      $('.non-sale-price--withoutTax', $prodPrice).show();
      $('.price-now-label', $prodPrice).show();
      $('[data-product-non-sale-price-without-tax]', $prodPrice).html(price.non_sale_price_without_tax.formatted);
    }
  }

  window.onload = function () {
    if ($('.sticky-add-to-cart').length > 0) {
      if ($(window).scrollTop() > scroll - 160) {
        if (!$('.sticky-add-to-cart').hasClass('show-sticky')) {
          $('.sticky-add-to-cart').addClass('show-sticky');

          if ($('body').hasClass('page-type-product')) {
            $('body').addClass('openStickyAddToCart');
          }
        }
      }
    }
  };
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./halothemes/haloAddOptionForProductCard */ "./assets/js/theme/halothemes/haloAddOptionForProductCard.js");
/* harmony import */ var _halothemes_haloProductLookbook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./halothemes/haloProductLookbook */ "./assets/js/theme/halothemes/haloProductLookbook.js");
/* harmony import */ var _halothemes_haloBundleProducts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./halothemes/haloBundleProducts */ "./assets/js/theme/halothemes/haloBundleProducts.js");
/* harmony import */ var _halothemes_haloNextProducts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./halothemes/haloNextProducts */ "./assets/js/theme/halothemes/haloNextProducts.js");
/* harmony import */ var _halothemes_haloStickyAddToCart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./halothemes/haloStickyAddToCart */ "./assets/js/theme/halothemes/haloStickyAddToCart.js");
/* harmony import */ var _halothemes_haloVideo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./halothemes/haloVideo */ "./assets/js/theme/halothemes/haloVideo.js");
/* harmony import */ var _halothemes_haloNotifyMe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./halothemes/haloNotifyMe */ "./assets/js/theme/halothemes/haloNotifyMe.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 Import all product specific js
 */















var Product = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Product, _PageManager);

  function Product(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    _this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
    return _this;
  }

  var _proto = Product.prototype;

  _proto.onReady = function onReady() {
    var _this2 = this;

    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator; // Init collapsible

    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_3__["default"])();
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_4__["default"]($('.productView'), this.context, window.BCData.product_attributes);
    this.productDetails.setProductVariant();
    Object(_product_video_gallery__WEBPACK_IMPORTED_MODULE_5__["default"])();
    var $reviewForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_6__["classifyForm"])('.writeReview-form');
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_2__["default"]($reviewForm);
    $('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);
    });
    $reviewForm.on('submit', function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll('valid');
      }

      return false;
    });
    this.productReviewHandler();
    this.bulkPricingHandler();
    this.productCustomTab(); // this.productTabToggle();

    this.compareColors();
    this.productViewInfoTabs();
    this.soldProduct($('.productView-soldProduct'));
    this.viewingProduct($('.productView-ViewingProduct'));
    this.countDownProduct($('.productView-countDown'));
    this.loadOptionForProductCard();
    this.reviewShow();
    Object(_halothemes_haloNextProducts__WEBPACK_IMPORTED_MODULE_10__["default"])(this.context);
    Object(_halothemes_haloStickyAddToCart__WEBPACK_IMPORTED_MODULE_11__["default"])($('.productView'), this.context);
    Object(_halothemes_haloProductLookbook__WEBPACK_IMPORTED_MODULE_8__["default"])(this.context, $('.productView-lookbook'));
    Object(_halothemes_haloBundleProducts__WEBPACK_IMPORTED_MODULE_9__["default"])($('.productView-slick'), this.context);
    Object(_halothemes_haloNotifyMe__WEBPACK_IMPORTED_MODULE_13__["default"])($('.productView-slick'), this.context);
    Object(_halothemes_haloVideo__WEBPACK_IMPORTED_MODULE_12__["default"])($('.productView-slick [data-slick]'));
  };

  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };

  _proto.bulkPricingHandler = function bulkPricingHandler() {
    if (this.url.indexOf('#bulk_pricing') !== -1) {
      this.$bulkPricingLink.trigger('click');
    }
  };

  _proto.reviewShow = function reviewShow(x) {
    var limit = document.querySelectorAll('.reviewCard1');
    var review2 = [];
    Promise.all([fetch("https://www.teamdesk.net/secure/api/v2/56554/BEA2566590EF4D14AA8D35AD0E2CEA77/Review/select.json").then(function (r) {
      return r.json();
    }).then(function (r) {
      review2.push.apply(review2, r);
    }), fetch("https://www.teamdesk.net/secure/api/v2/56554/BEA2566590EF4D14AA8D35AD0E2CEA77/Review/select.json?skip=500").then(function (r) {
      return r.json();
    }).then(function (r) {
      review2.push.apply(review2, r);
    }), fetch("https://www.teamdesk.net/secure/api/v2/56554/BEA2566590EF4D14AA8D35AD0E2CEA77/Review/select.json?skip=1000").then(function (r) {
      return r.json();
    }).then(function (r) {
      review2.push.apply(review2, r);
    }), fetch("https://www.teamdesk.net/secure/api/v2/56554/BEA2566590EF4D14AA8D35AD0E2CEA77/Review/select.json?skip=1500").then(function (r) {
      return r.json();
    }).then(function (r) {
      review2.push.apply(review2, r);
    })]).then(function (r) {
      limit.forEach(function (item1) {
        $(item1.nextElementSibling).empty();
        var review3 = [];
        var vidu = review2.filter(function (item) {
          return item['Product SKU'] === item1.innerHTML;
        });
        vidu.forEach(function (goku) {
          review3.push(goku['Review rate']);
        });
        var reviewAvg = Math.round(review3.reduce(function (a, b) {
          return a + b;
        }, 0) / review3.length * 10) / 10;
        $(item1.nextElementSibling).append("\n                <style>    .checked {\n                    color: rgb(255, 210, 0);\n            \n            }\n            .fa-star-o {\n                color: rgb(255, 210, 0);\n        \n            }\n            @media (min-width: 768px) {\n                .productReview2 {\n                    display: flex;\n                }\n            }\n            @media (min-width: 1025px) {\n                .productReview2 {\n                    display: unset;\n                }\n            }\n            @media (min-width: 1400px) {\n                .productReview2 {\n                    display: flex;\n                }\n            }\n            </style>\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n                \n                <span>\n                <span class=\"fa fa-star" + (0.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                <span class=\"fa fa-star" + (1.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                <span class=\"fa fa-star" + (2.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                <span class=\"fa fa-star" + (3.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                <span class=\"fa fa-star" + (4.5 <= reviewAvg ? ' checked' : ' fa-star-o') + ("\"></span>      \n            </span>\n            <div style=padding-left:5px;>\n                " + review3.length + " Commentaires\n            </div>")); // $(item1.nextElementSibling).append(`<div>${reviewAvg}</div>`)
      });
    }).catch(function (err) {
      console.log(err);
    });
  };

  _proto.productCustomTab = function productCustomTab() {
    if ($('.productView-description [data-custom-tab]').length > 0) {
      $('.productView-description [data-custom-tab]').appendTo('#halo-custom-tab .card-body');
      $('#halo-custom-tab').removeClass('u-hiddenVisually');
      $('.productView-shortDesc [data-custom-tab]').remove();
      $('#halo-productView-description .productView-tabs .card-body').addClass('has-customTab');
    } else {
      $('#halo-productView-description .productView-tabs .card.warranty .title').addClass('no-customTab');
    }
  } // productTabToggle(){
  //     $('.productView-tabs .card .title').on('click', event => {
  //         event.preventDefault();
  //         var $target = $(event.currentTarget);
  //         $('.productView-tabs .card .title').not($target).removeClass('collapsed');
  //         if($target.hasClass('collapsed')){
  //             $target.removeClass('collapsed');
  //         } else{
  //             $target.addClass('collapsed');
  //         }
  //         $('.productView-tabs .card').each((index, element) =>{
  //             if($('.title', element).hasClass('collapsed')){
  //                 $(element).find('.collapse').slideDown("slow");
  //             } else{
  //                 $(element).find('.collapse').slideUp("slow");
  //             }
  //         });
  //     });
  //     $('.productView-tabs .card:nth-child(1) .title').trigger('click');
  // }
  ;

  _proto.soldProduct = function soldProduct($wrapper) {
    if ($wrapper.length > 0) {
      var numbersProduct_text = this.context.themeSettings.product_soldProduct_products,
          numbersHours_text = this.context.themeSettings.product_soldProduct_hours,
          soldProductText = this.context.themeSettings.product_soldProduct_text,
          soldProductText2 = this.context.themeSettings.product_soldProduct_hours_text;
      var numbersProductList = JSON.parse("[" + numbersProduct_text + "]"),
          numbersProductItem = Math.floor(Math.random() * numbersProductList.length),
          numbersHoursList = JSON.parse("[" + numbersHours_text + "]"),
          numbersHoursItem = Math.floor(Math.random() * numbersHoursList.length);
      $wrapper.html('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-fire"/></svg><span class="text">' + numbersProductList[numbersProductItem] + " " + soldProductText + " " + numbersHoursList[numbersHoursItem] + " " + soldProductText2 + '</span>');
      $wrapper.show();
    }
  };

  _proto.countDownProduct = function countDownProduct($wrapper) {
    if ($wrapper.length > 0) {
      var countDown = $wrapper.data('countdown'),
          countDownDate = new Date(countDown).getTime(),
          seft = $wrapper;
      var countdownfunction = setInterval(function () {
        var now = new Date().getTime(),
            distance = countDownDate - now;

        if (distance < 0) {
          clearInterval(countdownfunction);
          seft.remove();
        } else {
          var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
              hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
              minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)),
              seconds = Math.floor(distance % (1000 * 60) / 1000),
              strCountDown = '<svg class="icon" aria-hidden="true"><use xlink:href="#icon-bell"/></svg><span class="text"><span>Limited time offer, end in:</span></span> <span class="num">' + days + 'd :</span> <span class="num">' + hours + 'h :</span> <span class="num">' + minutes + 'm :</span> <span class="num">' + seconds + 's</span>';
          seft.html(strCountDown);
        }
      }, 1000);
    }
  };

  _proto.viewingProduct = function viewingProduct($wrapper) {
    if ($wrapper.length > 0) {
      var viewerText = this.context.themeSettings.product_viewingProduct_text,
          numbersViewer_text = this.context.themeSettings.product_viewingProduct_viewer,
          numbersViewerList = JSON.parse("[" + numbersViewer_text + "]");
      setInterval(function () {
        var numbersViewerItem = Math.floor(Math.random() * numbersViewerList.length);
        $wrapper.html('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-eye"/></svg>' + numbersViewerList[numbersViewerItem] + " " + viewerText);
        $wrapper.removeClass('u-hiddenVisually').show();
      }, 10000);
    }
  };

  _proto.compareColors = function compareColors() {
    var $swatchWrapper = $('.halo-compareColors-swatch'),
        $imageWrapper = $('.halo-compareColors-image'),
        $textWrapper = $('.halo-compareColors-text');
    $('.form-option', $swatchWrapper).on('click', function (event) {
      var $this = $(event.currentTarget);
      $this.toggleClass('show-color');
      var title = $this.find('.form-option-variant').attr('title'),
          id = $this.data('product-swatch-value'),
          $color,
          $color2,
          $color3,
          $img,
          $pattern;

      if ($this.hasClass('show-color')) {
        if ($this.find('.form-option-variant--color').length) {
          $color = $this.find('.form-option-variant--color').attr('style');
          $imageWrapper.append('<div class="item item-color item-' + id + '"><span class="color" style="' + $color + ';"></span><span class="title">' + title + '</span></div>');
        } else if ($this.find('.form-option-variant--color2').length) {
          $color = $this.find('.form-option-variant--color2 span:nth-child(1)').attr('style');
          $color2 = $this.find('.form-option-variant--color2 span:nth-child(2)').attr('style');
          $('.halo-compareColors-image').append('<div class="item item-color item-' + id + '"><span class="color color2"><span style="' + $color + ';"></span><span style="' + $color2 + ';"></span></span><span class="title">' + title + '</span></div>');
        } else if ($this.find('.form-option-variant--color3').length) {
          $color = $this.find('.form-option-variant--color3 span:nth-child(1)').attr('style');
          $color2 = $this.find('.form-option-variant--color3 span:nth-child(2)').attr('style');
          $color3 = $this.find('.form-option-variant--color3 span:nth-child(3)').attr('style');
          $imageWrapper.append('<div class="item item-color item-' + id + '"><span class="color color3"><span style="' + $color + ';"></span><span style="' + $color2 + ';"></span><span style="' + $color3 + ';"></span></span><span class="title">' + title + '</span></div>');
        } else if ($this.find('.form-option-variant--pattern').length) {
          $img = $this.find('.form-option-variant--pattern').attr('style');
          $pattern = $this.find('.form-option-variant--pattern').attr('data-pattern');
          $imageWrapper.append('<div class="item item-partern item-' + id + '"><span class="image"><img src=' + $pattern + ' alt=' + title + ' title=' + title + '></span><span class="title">' + title + '</span></div>');
        }
      } else {
        $('.item-' + id + '', $imageWrapper).remove();
      }

      if ($imageWrapper.children().length > 0) {
        $textWrapper.hide();
      } else {
        $textWrapper.show();
      }

      if ($(window).width() >= 1025) {
        var el = document.getElementById('color-swatch-image');
        new sortablejs__WEBPACK_IMPORTED_MODULE_0__["default"](el, {
          animation: 150
        });
      }
    });
  };

  _proto.productViewInfoTabs = function productViewInfoTabs() {
    $('.productView-infoTabs .productView-infoTab a').on('click', function (event) {
      event.preventDefault();
      var $block = $(event.currentTarget).attr('href');
      $('html, body').animate({
        scrollTop: $($block).offset().top - $('.header').height()
      }, 700);

      if ($block == '#halo-productView-description') {
        if (!$('.productView-tabs .card:nth-child(1) .title').hasClass('collapsed')) {
          $('.productView-tabs .card:nth-child(1) .title').trigger('click');
        }
      }
    });
    $('.productView-moreDesc a').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $('#halo-productView-description').offset().top - $('.header').height()
      }, 700);

      if (!$('.productView-tabs .card:nth-child(1) .title').hasClass('collapsed')) {
        $('.productView-tabs .card:nth-child(1) .title').trigger('click');
      }
    });
  };

  _proto.loadOptionForProductCard = function loadOptionForProductCard() {
    var _this3 = this;

    if ($('.productCarousel').length > 0) {
      $('.productCarousel').each(function (index, element) {
        var $prodWrapId = $(element).attr('id');
        Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_7__["default"])(_this3.context, $prodWrapId);
      });
    }
  };

  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/reviews.js":
/*!********************************************!*\
  !*** ./assets/js/theme/product/reviews.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");




var _default = /*#__PURE__*/function () {
  function _default($reviewForm) {
    this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_0__["default"])({
      submit: $reviewForm.find('input[type="submit"]')
    });
    this.$reviewsContent = $('#tab-reviews');
    this.$collapsible = $('[data-collapsible]', this.$reviewsContent);
    this.initLinkBind();
    this.injectPaginationLink();
    this.collapseReviews();
  }
  /**
   * On initial page load, the user clicks on "(12 Reviews)" link
   * The browser jumps to the review page and should expand the reviews section
   */


  var _proto = _default.prototype;

  _proto.initLinkBind = function initLinkBind() {
    var _this = this;

    var $content = $('#productReviews-content', this.$reviewsContent);
    $('.productView-reviewLink').on('click', function () {
      $('.productView-reviewTabLink').trigger('click');

      if (!$content.hasClass('is-open')) {
        _this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__["CollapsibleEvents"].click);
      }
    });
  };

  _proto.collapseReviews = function collapseReviews() {
    // We're in paginating state, do not collapse
    if (window.location.hash && window.location.hash.indexOf('#tab-reviews') === 0) {
      return;
    } // force collapse on page load


    this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__["CollapsibleEvents"].click);
  }
  /**
   * Inject ID into the pagination link
   */
  ;

  _proto.injectPaginationLink = function injectPaginationLink() {
    var $nextLink = $('.pagination-item--next .pagination-link', this.$reviewsContent);
    var $prevLink = $('.pagination-item--previous .pagination-link', this.$reviewsContent);

    if ($nextLink.length) {
      $nextLink.attr('href', $nextLink.attr('href') + " #tab-reviews");
    }

    if ($prevLink.length) {
      $prevLink.attr('href', $prevLink.attr('href') + " #tab-reviews");
    }
  };

  _proto.registerValidation = function registerValidation(context) {
    this.context = context;
    this.validator.add([{
      selector: '[name="revrating"]',
      validate: 'presence',
      errorMessage: this.context.reviewRating
    }, {
      selector: '[name="revtitle"]',
      validate: 'presence',
      errorMessage: this.context.reviewSubject
    }, {
      selector: '[name="revtext"]',
      validate: 'presence',
      errorMessage: this.context.reviewComment
    }, {
      selector: '.writeReview-form [name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_2__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.reviewEmail
    }]);
    return this.validator;
  };

  _proto.validate = function validate() {
    return this.validator.performCheck();
  };

  return _default;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/*! exports provided: VideoGallery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoGallery", function() { return VideoGallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return videoGallery; });
var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }

  var _proto = VideoGallery.prototype;

  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };

  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };

  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };

  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };

  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;

    if (isInitialized) {
      return;
    }

    $el.data(pluginKey, new VideoGallery($el));
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvaGFsb0J1bmRsZVByb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9oYWxvdGhlbWVzL2hhbG9OZXh0UHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvaGFsb1Byb2R1Y3RMb29rYm9vay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvU3RpY2t5QWRkVG9DYXJ0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L3Jldmlld3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeS5qcyJdLCJuYW1lcyI6WyJmZXRjaCIsInJlcXVpcmUiLCJjb250ZXh0Iiwid3JhcHBlciIsInRoZW1lU2V0dGluZ3MiLCJoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdCIsImNhbGxQcm9kdWN0T3B0aW9uIiwicHJvZHVjdF9jbGFzcyIsImVhY2giLCJpbmRleCIsImVsZW1lbnQiLCJwcm9kdWN0SWQiLCIkIiwiZGF0YSIsImxpc3QiLCJwdXNoIiwidG9TdHJpbmciLCJsZW5ndGgiLCJnZXRQcm9kdWN0T3B0aW9uIiwidGhlbiIsInJlbmRlck9wdGlvbiIsImlkeCIsIml0ZW0iLCJhcnIiLCJwcm9kdWN0X3dyYXBwZXIiLCJmaW5kIiwidHh0IiwicmVtb3ZlIiwiY291bnRNb3JlT3B0aW9uIiwicHJvZHVjdExpbmsiLCJhdHRyIiwiYXBwZW5kIiwibWV0aG9kIiwiaGVhZGVycyIsInRva2VuIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsInJlcyIsImpzb24iLCJhRmlsdGVyIiwic2l0ZSIsInByb2R1Y3RzIiwiZWRnZXMiLCJub2RlIiwiZW50aXR5SWQiLCJwcm9kdWN0RmllbGRDb2xvciIsInByb2R1Y3RGaWVsZFNpemUiLCJhRmlsdGVyMiIsInByb2R1Y3RPcHRpb25zIiwiYUZpbHRlcjMiLCJmaWx0ZXIiLCJkaXNwbGF5U3R5bGUiLCJhRmlsdGVyNSIsImRpc3BsYXlOYW1lIiwiaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QyIiwiYUZpbHRlcjQiLCJ2YWx1ZXMiLCJ0aXRsZVZhciIsImxhYmVsIiwiaWRWYXIiLCJsZW5ndGhDb2xvclZhciIsImhleENvbG9ycyIsImNvbG9yMSIsImNvbG9yMiIsImNvbG9yMyIsImltZyIsImltYWdlVXJsIiwiQm9vbGVhbiIsImhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0VGV4dCIsIiRzY29wZSIsInRoaXNQcm91Y3RJZCIsInBhcnNlSW50IiwiJHJlbGF0ZVRhYiIsIiRidW5kbGUiLCIkYnVuZGxlTGlzdCIsIm1vZGFsIiwibW9kYWxGYWN0b3J5IiwiY3VycmVuY3kiLCJtb25leSIsInNob3dCdW5kbGUiLCJkb2N1bWVudCIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiR0YXJnZXQiLCJjdXJyZW50VGFyZ2V0Iiwibm90IiwicmVtb3ZlQ2xhc3MiLCJuZXh0IiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInRhcmdldCIsImNsb3Nlc3QiLCJpZCIsInJlcGxhY2UiLCJwcm9kdWN0IiwiaXMiLCJ0b3RhbFByaWNlIiwiJGZvcm0iLCJhcnJQcm8iLCJBcnJheSIsInZhbCIsImNoZWNrIiwiY2hlY2tQcm9kdWN0IiwiayIsInNob3ciLCJhZGRUb0NhcnQiLCJlcnJvck1lc3NhZ2UiLCJ0bXAiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwic2hvd0FsZXJ0TW9kYWwiLCJ0ZXh0Q29udGVudCIsImlubmVyVGV4dCIsIm9wdGlvbnMiLCJ0ZW1wbGF0ZSIsInByb2RCdW5kbGVJZCIsInRvdGFsQmxvY2siLCJmaXJzdEl0ZW0iLCJwcm9kdWN0Q3VzdG9tRmllbGRzIiwib2JqIiwibmFtZSIsInBhcnNlIiwidmFsdWUiLCJncmVwIiwibnVtIiwicElkIiwidW5kZWZpbmVkIiwidXRpbHMiLCJhcGkiLCJnZXRCeUlkIiwiZXJyIiwicmVzcG9uc2UiLCJmb3JFYWNoIiwic2hvd0xpc3QiLCJsaXN0RmlsdGVyIiwidW5pcXVlIiwiZm9ybSIsImhhc09wdGlvbnMiLCJoYXNEZWZhdWx0T3B0aW9ucyIsInByb2R1Y3RBdHRyaWJ1dGVzIiwib3B0aW9uQ2hhbmdlIiwic2VyaWFsaXplIiwiYXR0cmlidXRlc0RhdGEiLCJhdHRyaWJ1dGVzQ29udGVudCIsImNvbnRlbnQiLCJ1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyIsInVwZGF0ZVZpZXciLCJ1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyIsInRyaW0iLCIkcHJvZHVjdE9wdGlvbnNFbGVtZW50IiwiaHRtbCIsInNldFByb2R1Y3RWYXJpYW50Iiwic2hvd1NsaWNrU2xpZGVyIiwid3JhcCIsInNsaWNrIiwiZG90cyIsImFycm93cyIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwibW9iaWxlRmlyc3QiLCJpbmZpbml0ZSIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJpIiwiY2hlY2tCZWZvcmVBZGQiLCIkYXR0cmlidXRlcyIsImF0dCIsInByb3AiLCJmb2N1cyIsImFyclAiLCJ3aW5kb3ciLCJGb3JtRGF0YSIsInByb2QiLCJjYXJ0IiwiaXRlbUFkZCIsImZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybSIsImVycm9yIiwiYWxlcnQiLCJoaWRlIiwiJG1vZGFsIiwib3BlbiIsInNpemUiLCIkYm9keSIsInF1YW50aXR5IiwidGV4dCIsInRyaWdnZXIiLCJ1cGRhdGVDb250ZW50IiwidG90YWwiLCJzeW1ib2wiLCJzeW1ib2xDaGFuZ2UiLCJkZWNpbWFsUGxhY2VzIiwiZGVjaW1hbFNlcGFyYXRvciIsInRob3VzYW5kc1NlcGFyYXRvciIsInN5bWJvbExvY2F0aW9uIiwiY3VyciIsInRva2VuMSIsInRva2VuMiIsImRlY2ltYWxfcGxhY2VzIiwiZGVjaW1hbF90b2tlbiIsInRob3VzYW5kc190b2tlbiIsImN1cnJlbmN5X2xvY2F0aW9uIiwiY3VycmVuY3lfdG9rZW4iLCJwcmljZSIsInBhcnNlRmxvYXQiLCJpbmRleE9mIiwiZm9ybWF0TW9uZXkiLCJuIiwiYyIsImQiLCJ0IiwiaXNOYU4iLCJNYXRoIiwiYWJzIiwicyIsIlN0cmluZyIsIk51bWJlciIsInRvRml4ZWQiLCJqIiwic3Vic3RyIiwic2xpY2UiLCJwcm9kdWN0T3B0aW9uc0NoYW5nZWQiLCJ1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzIiwib3B0aW9uTGFiZWwiLCJjaGlsZHJlbiIsIm9wdGlvblRpdGxlIiwic3BsaXQiLCJyZXF1aXJlZCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ0eXBlIiwiZ2V0QXR0cmlidXRlIiwicXVlcnlTZWxlY3RvciIsImlzU2F0aXNmaWVkIiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJldmVyeSIsInNlbGVjdCIsInNlbGVjdGVkSW5kZXgiLCJkYXRlU3RyaW5nIiwibWFwIiwieCIsImpvaW4iLCJjaGVja2VkIiwibGFiZWxzIiwidGl0bGUiLCIkY2hhbmdlZE9wdGlvbiIsInBhcmVudHMiLCJwcm9kdWN0QXR0cmlidXRlc0RhdGEiLCJwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQiLCJzaG93UHJvZHVjdEltYWdlIiwiYmVoYXZpb3IiLCJvdXRfb2Zfc3RvY2tfYmVoYXZpb3IiLCJpblN0b2NrSWRzIiwiaW5fc3RvY2tfYXR0cmlidXRlcyIsIm91dE9mU3RvY2tNZXNzYWdlIiwib3V0X29mX3N0b2NrX21lc3NhZ2UiLCJhdHRyaWJ1dGUiLCIkYXR0cmlidXRlIiwiYXR0cklkIiwiZW5hYmxlQXR0cmlidXRlIiwiZGlzYWJsZUF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZVR5cGUiLCJkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwiJHNlbGVjdCIsInBhcmVudCIsInRvZ2dsZU9wdGlvbiIsImVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSIsIiRwYXJlbnQiLCJpbWFnZSIsIm1haW5JbWFnZVVybCIsInRvb2xzIiwiaW1hZ2VTcmNzZXQiLCJnZXRTcmNzZXQiLCJwcm9kdWN0Z2FsbGVyeV9zaXplIiwidmlld01vZGVsIiwiZ2V0Vmlld01vZGVsIiwic2hvd01lc3NhZ2VCb3giLCJzdG9ja19tZXNzYWdlIiwicHVyY2hhc2luZ19tZXNzYWdlIiwic3RvY2siLCJoYWxvX3N0b2NrX2xldmVsX2xpbWl0IiwiJHN0b2NrTGVmdFdyYXBwZXIiLCIkc3RvY2tMZWZ0IiwidXBkYXRlUHJpY2VWaWV3IiwicHJvZHVjdENoZWNrYm94IiwicHVyY2hhc2FibGUiLCJpbnN0b2NrIiwiJHByaWNlV2l0aFRheCIsIiRwcmljZVdpdGhvdXRUYXgiLCJycnBXaXRoVGF4IiwiJGRpdiIsIiRzcGFuIiwicnJwV2l0aG91dFRheCIsIm5vblNhbGVXaXRoVGF4Iiwibm9uU2FsZVdpdGhvdXRUYXgiLCJwcmljZVNhdmVkIiwicHJpY2VOb3dMYWJlbCIsInByaWNlTGFiZWwiLCJwcmljZURhdGEiLCIkd2VpZ2h0IiwiJGluY3JlbWVudHMiLCIkYWRkVG9DYXJ0IiwiJHdpc2hsaXN0VmFyaWF0aW9uIiwiJGNvbnRhaW5lciIsIiRpbnB1dCIsIiRza3UiLCIkdXBjIiwiJHRleHQiLCIkYnVsa1ByaWNpbmciLCJtZXNzYWdlIiwiJG1lc3NhZ2VCb3giLCJjbGVhclByaWNpbmdOb3RGb3VuZCIsIndpdGhfdGF4IiwiZm9ybWF0dGVkIiwid2l0aG91dF90YXgiLCJycnBfd2l0aF90YXgiLCJycnBfd2l0aG91dF90YXgiLCJzYXZlZCIsIm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4Iiwibm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgiLCJmb3JtRGF0YSIsImtleSIsIkZpbGUiLCJkZWxldGUiLCJlIiwiY29uc29sZSIsImdldFByb2R1Y3QiLCJjdXJDb2RlIiwicmVuZGVyUHJvZHVjdCIsImN1ckRpc3BsYXkiLCJzeW1ib2xQbGFjZW1lbnQiLCJkZWNpbWFsVG9rZW4iLCJ0aG91c2FuZHNUb2tlbiIsImhhbG9fY2FyZF90aXRsZSIsInBhdGgiLCJyZXN0cmljdF90b19sb2dpbiIsInByaWNlcyIsInByaWNlUmFuZ2UiLCJtaW4iLCJtYXgiLCJwcmljZV9yYW5nZXMiLCJwcmljZU1pbiIsInByaWNlTWF4IiwicHJpY2VEZWYiLCJyZXRhaWxQcmljZSIsImJhc2VQcmljZSIsInByaWNlQmFzIiwicHJpY2VSZXQiLCJodG1sX2NhcmQiLCJkZWZhdWx0SW1hZ2UiLCJpbWc3MHB4IiwicHJldklkIiwiJHByb2RJY29ucyIsIiRwcm9kV3JhcCIsIm5leHRJZCIsIm5leHRMaW5rIiwicHJldkxpbmsiLCJkaXNwbGF5IiwiZWwiLCIkcG9wdXAiLCIkZWwiLCIkb3B0aW9ucyIsImVtcHR5IiwiJHByb2RJZCIsInBvc2l0aW9uIiwib2Zmc2V0IiwiY29udGFpbmVyIiwid2lkdGgiLCJjc3MiLCJ0b3AiLCJsZWZ0Iiwib2Zmc2V0U2Nyb2xsIiwic2Nyb2xsIiwib3V0ZXJIZWlnaHQiLCJzaG93UHJpY2UiLCJwcmV2aWV3TW9kYWwiLCIkc3RpY2t5IiwiJHN0aWNreUNsb3NlIiwiJHN0aWNreUV4cGFuZCIsIiRwcm9kUHJpY2UiLCIkcHJvZE9wdGlvbnMiLCIkcHJvZE9wdGlvbkxhYmVsIiwiJHByb2RPcHRpb25Ecm9wZG93biIsIiRpbWFnZVdyYXBwZXIiLCIkcHJvZEJ0biIsIiRwcm9kV0xCdG4iLCJ3YWl0TWVzc2FnZSIsIm9yaWdpbmFsQnRuVmFsIiwibG9hZFN0aWNreSIsImhhbG9fc3RpY2t5X2FkZF90b19jYXJ0IiwibG9hZE9wdGlvbnMiLCJzY3JvbGxUb3AiLCJ0b2dnbGVDbGFzcyIsIm9wdGlvbkF0dHIiLCJoZWlnaHQiLCJmb3JtSGVpZ2h0IiwiYW5pbWF0ZSIsIiR0aGlzX3dsIiwidXJsX2F3bCIsInBvc3QiLCJkb25lIiwibG9jYXRpb24iLCJocmVmIiwiZGVjcmVtZW50Um93cyIsImRMZW5ndGgiLCJjdXJyZW5JbmRleCIsInJvd3MiLCJyb3dMaW1pdHMiLCJpc05ld09wdGlvbnNSZWFkeSIsInJvd09iamVjdHMiLCJuZXdPcHRpb25zIiwicm93T2JqZWN0IiwiaW5kZXgyIiwiZWxlbWVudDIiLCJhdHRyaWJ1dGVWYWx1ZSIsImF0dHJpYnV0ZUxhYmVsIiwiYXR0cmlidXRlTmFtZSIsImF0dHJpYnV0ZUluZGV4IiwiaW52aXNpYmxlIiwic2V0TGFiZWwiLCJjdXJyZW50T3B0aW9uSW5kZXgiLCJhdHRyaWJ1dGVzIiwiciIsInJJbmRleCIsImN1cnJlbnROZXdPcHRpb25JbmRleCIsIm5ld09wdGlvbiIsIm5ld09wdGlvbkluZGV4IiwibmV3RWwiLCJhdHRyaWJ1dGVTdHJpbmciLCJjbGFzcyIsImFwcGVuZFRvIiwic2t1IiwidXJsIiwicmVxdWVzdCIsImVuY29kZVVSSSIsInJlcXVlc3RPcHRpb25zIiwiRXJyb3IiLCJoYWxvX2FkZF90b19jYXJ0X3BvcHVwIiwidXBkYXRlQ2FydENvbnRlbnQiLCJyZWRpcmVjdFRvIiwiY2FydF9pdGVtIiwiY2FydF91cmwiLCJ1cmxzIiwiaXNSdW5uaW5nSW5JZnJhbWUiLCJpZnJhbWVTZGsiLCJzaG93VmFyaWFudEltYWdlIiwiaW5TdG9jayIsIm9ubG9hZCIsIlByb2R1Y3QiLCIkcmV2aWV3TGluayIsIiRidWxrUHJpY2luZ0xpbmsiLCJvblJlYWR5IiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsInBhdGhuYW1lIiwidmFsaWRhdG9yIiwiY29sbGFwc2libGVGYWN0b3J5IiwicHJvZHVjdERldGFpbHMiLCJQcm9kdWN0RGV0YWlscyIsIkJDRGF0YSIsInByb2R1Y3RfYXR0cmlidXRlcyIsInZpZGVvR2FsbGVyeSIsIiRyZXZpZXdGb3JtIiwiY2xhc3NpZnlGb3JtIiwicmV2aWV3IiwiUmV2aWV3IiwicmVnaXN0ZXJWYWxpZGF0aW9uIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwicHJvZHVjdFJldmlld0hhbmRsZXIiLCJidWxrUHJpY2luZ0hhbmRsZXIiLCJwcm9kdWN0Q3VzdG9tVGFiIiwiY29tcGFyZUNvbG9ycyIsInByb2R1Y3RWaWV3SW5mb1RhYnMiLCJzb2xkUHJvZHVjdCIsInZpZXdpbmdQcm9kdWN0IiwiY291bnREb3duUHJvZHVjdCIsImxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZCIsInJldmlld1Nob3ciLCJoYWxvTmV4dFByb2R1Y3RzIiwiaGFsb1N0aWNreUFkZFRvQ2FydCIsImhhbG9Qcm9kdWN0TG9va2Jvb2siLCJoYWxvQnVuZGxlUHJvZHVjdHMiLCJoYWxvTm90aWZ5TWUiLCJoYWxvWW91dHViZUNhcm91c2VsIiwibGltaXQiLCJyZXZpZXcyIiwiUHJvbWlzZSIsImFsbCIsIml0ZW0xIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwicmV2aWV3MyIsInZpZHUiLCJnb2t1IiwicmV2aWV3QXZnIiwicm91bmQiLCJyZWR1Y2UiLCJhIiwiYiIsImNhdGNoIiwibG9nIiwiJHdyYXBwZXIiLCJudW1iZXJzUHJvZHVjdF90ZXh0IiwicHJvZHVjdF9zb2xkUHJvZHVjdF9wcm9kdWN0cyIsIm51bWJlcnNIb3Vyc190ZXh0IiwicHJvZHVjdF9zb2xkUHJvZHVjdF9ob3VycyIsInNvbGRQcm9kdWN0VGV4dCIsInByb2R1Y3Rfc29sZFByb2R1Y3RfdGV4dCIsInNvbGRQcm9kdWN0VGV4dDIiLCJwcm9kdWN0X3NvbGRQcm9kdWN0X2hvdXJzX3RleHQiLCJudW1iZXJzUHJvZHVjdExpc3QiLCJudW1iZXJzUHJvZHVjdEl0ZW0iLCJmbG9vciIsInJhbmRvbSIsIm51bWJlcnNIb3Vyc0xpc3QiLCJudW1iZXJzSG91cnNJdGVtIiwiY291bnREb3duIiwiY291bnREb3duRGF0ZSIsIkRhdGUiLCJnZXRUaW1lIiwic2VmdCIsImNvdW50ZG93bmZ1bmN0aW9uIiwic2V0SW50ZXJ2YWwiLCJub3ciLCJkaXN0YW5jZSIsImNsZWFySW50ZXJ2YWwiLCJkYXlzIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInN0ckNvdW50RG93biIsInZpZXdlclRleHQiLCJwcm9kdWN0X3ZpZXdpbmdQcm9kdWN0X3RleHQiLCJudW1iZXJzVmlld2VyX3RleHQiLCJwcm9kdWN0X3ZpZXdpbmdQcm9kdWN0X3ZpZXdlciIsIm51bWJlcnNWaWV3ZXJMaXN0IiwibnVtYmVyc1ZpZXdlckl0ZW0iLCIkc3dhdGNoV3JhcHBlciIsIiR0ZXh0V3JhcHBlciIsIiR0aGlzIiwiJGNvbG9yIiwiJGNvbG9yMiIsIiRjb2xvcjMiLCIkaW1nIiwiJHBhdHRlcm4iLCJnZXRFbGVtZW50QnlJZCIsIlNvcnRhYmxlIiwiYW5pbWF0aW9uIiwiJGJsb2NrIiwiJHByb2RXcmFwSWQiLCJoYWxvQWRkT3B0aW9uIiwiUGFnZU1hbmFnZXIiLCJub2QiLCJzdWJtaXQiLCIkcmV2aWV3c0NvbnRlbnQiLCIkY29sbGFwc2libGUiLCJpbml0TGlua0JpbmQiLCJpbmplY3RQYWdpbmF0aW9uTGluayIsImNvbGxhcHNlUmV2aWV3cyIsIiRjb250ZW50IiwiQ29sbGFwc2libGVFdmVudHMiLCJjbGljayIsImhhc2giLCIkbmV4dExpbmsiLCIkcHJldkxpbmsiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwicmV2aWV3UmF0aW5nIiwicmV2aWV3U3ViamVjdCIsInJldmlld0NvbW1lbnQiLCJjYiIsInJlc3VsdCIsImZvcm1zIiwiZW1haWwiLCJyZXZpZXdFbWFpbCIsIlZpZGVvR2FsbGVyeSIsIiRlbGVtZW50IiwiJHBsYXllciIsIiR2aWRlb3MiLCJjdXJyZW50VmlkZW8iLCJiaW5kRXZlbnRzIiwic2VsZWN0TmV3VmlkZW8iLCIkc2VsZWN0ZWRUaHVtYiIsInNldE1haW5WaWRlbyIsInNldEFjdGl2ZVRodW1iIiwiYmluZCIsInBsdWdpbktleSIsIiR2aWRlb0dhbGxlcnkiLCJpc0luaXRpYWxpemVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBOztBQUNBLElBQU1B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Y0ExQkosR0EwQkksMEJBQWlCO0lBQ2IsS0FBS04sT0FBTCxDQUFhaGYsV0FBYixDQUF5QixXQUF6QjtJQUNBLEtBQUtpZixZQUFMLENBQWtCRyxjQUFsQixDQUFpQ2pmLFFBQWpDLENBQTBDLFdBQTFDO0VBQ0gsQ0E3Qkw7O0VBQUEsT0ErQkkrZSxVQS9CSixHQStCSSxzQkFBYTtJQUNULEtBQUtGLE9BQUwsQ0FBYXRmLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsS0FBS3lmLGNBQUwsQ0FBb0JJLElBQXBCLENBQXlCLElBQXpCLENBQXpCO0VBQ0gsQ0FqQ0w7O0VBQUE7QUFBQTtBQW9DZSxTQUFTN0gsWUFBVCxHQUF3QjtFQUNuQyxJQUFNOEgsU0FBUyxHQUFHLGVBQWxCO0VBQ0EsSUFBTUMsYUFBYSxHQUFHdGtCLENBQUMsWUFBVXFrQixTQUFWLE9BQXZCO0VBRUFDLGFBQWEsQ0FBQzFrQixJQUFkLENBQW1CLFVBQUNDLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtJQUNuQyxJQUFNb1csR0FBRyxHQUFHbFcsQ0FBQyxDQUFDRixPQUFELENBQWI7SUFDQSxJQUFNeWtCLGFBQWEsR0FBR3JPLEdBQUcsQ0FBQ2pXLElBQUosQ0FBU29rQixTQUFULGFBQStCWCxZQUFyRDs7SUFFQSxJQUFJYSxhQUFKLEVBQW1CO01BQ2Y7SUFDSDs7SUFFRHJPLEdBQUcsQ0FBQ2pXLElBQUosQ0FBU29rQixTQUFULEVBQW9CLElBQUlYLFlBQUosQ0FBaUJ4TixHQUFqQixDQUFwQjtFQUNILENBVEQ7QUFVSCxDIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmNvbnN0IGZldGNoID0gcmVxdWlyZSgnbm9kZS1mZXRjaCcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0LCB3cmFwcGVyKSB7XG4gICAgaWYgKGNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdCA9PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gY29udGV4dC50b2tlbixcbiAgICAgICAgICAgIHByb2R1Y3Rfd3JhcHBlciA9ICQoJyMnK3dyYXBwZXIpLFxuICAgICAgICAgICAgcHJvZHVjdF9jbGFzcyA9IHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZCcpO1xuICAgICAgICB2YXIgIGxpc3QgPSBbXTtcblxuICAgICAgICBmdW5jdGlvbiBjYWxsUHJvZHVjdE9wdGlvbigpIHtcbiAgICAgICAgICAgIHByb2R1Y3RfY2xhc3MuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdElkID0gJChlbGVtZW50KS5kYXRhKFwicHJvZHVjdC1pZFwiKTtcblxuICAgICAgICAgICAgICAgIGxpc3QucHVzaChwcm9kdWN0SWQudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYobGlzdC5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBnZXRQcm9kdWN0T3B0aW9uKGxpc3QpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbihkYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICAkLmVhY2gobGlzdCwgKGlkeCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZCA9IGxpc3RbaWR4XTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLW9wdGlvbi1zd2F0Y2gnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0eHQgPSAkKGVsZW1lbnQpLmRhdGEoJ3Byb2R1Y3Qtc3dhdGNoLXZhbHVlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyW3R4dF0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyclt0eHRdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLW9wdGlvbi1zd2F0Y2gnKS5sZW5ndGggPiA0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY291bnRNb3JlT3B0aW9uICA9IHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1vcHRpb24tc3dhdGNoJykubGVuZ3RoIC0gNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdExpbmsgPSBwcm9kdWN0X3dyYXBwZXIuZmluZCgnW2RhdGEtcHJvZHVjdC1pZD1cIicrcHJvZHVjdElkKydcIl0nKS5maW5kKCcuY2FyZC1saW5rJykuYXR0cignaHJlZicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLW9wdGlvbi1zd2F0Y2gnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpbmRleCA+PSA0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1maWVsZCAuc2hvd21vcmUnKS5sZW5ndGggPCAxKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLWZpZWxkOm5vdCguZm9ybS1maWVsZC0tc2l6ZSknKS5hcHBlbmQoJzxhIGhyZWY9XCInK3Byb2R1Y3RMaW5rKydcIiBjbGFzcz1cInNob3dtb3JlXCI+KycrY291bnRNb3JlT3B0aW9uKyc8L2E+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0UHJvZHVjdE9wdGlvbihsaXN0KXtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaCgnL2dyYXBocWwnLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdG9rZW5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5IFNldmVyYWxQcm9kdWN0c0J5SUQge1xuICAgICAgICAgICAgICAgICAgICAgIHNpdGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMoZW50aXR5SWRzOiBbYCtsaXN0K2BdLCBmaXJzdDogNTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0T3B0aW9ucyhmaXJzdDogNTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gTXVsdGlwbGVDaG9pY2VPcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5U3R5bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBTd2F0Y2hPcHRpb25WYWx1ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGV4Q29sb3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmwod2lkdGg6IDUwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBgfSksXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKHJlcyA9PiByZXMuZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW5kZXJPcHRpb24oZGF0YSl7XG4gICAgICAgICAgICB2YXIgYUZpbHRlciA9IGRhdGEuc2l0ZS5wcm9kdWN0cy5lZGdlcztcblxuICAgICAgICAgICAgJC5lYWNoKGFGaWx0ZXIsIChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0SWQgPSBhRmlsdGVyW2luZGV4XS5ub2RlLmVudGl0eUlkLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvciA9IHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1maWVsZDpub3QoLmZvcm0tZmllbGQtLXNpemUpJyksXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZFNpemUgPSBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tZmllbGQtLXNpemUnKSxcbiAgICAgICAgICAgICAgICAgICAgYUZpbHRlcjIgPSBhRmlsdGVyW2luZGV4XS5ub2RlLnByb2R1Y3RPcHRpb25zLmVkZ2VzO1xuXG4gICAgICAgICAgICAgICAgdmFyIGFGaWx0ZXIzID0gYUZpbHRlcjIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLm5vZGUuZGlzcGxheVN0eWxlID09PSAnU3dhdGNoJztcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHZhciBhRmlsdGVyNSA9IGFGaWx0ZXIyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5ub2RlLmRpc3BsYXlOYW1lID09PSBjb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QyO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYoYUZpbHRlcjMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhRmlsdGVyNCA9IGFGaWx0ZXIzWzBdLm5vZGUudmFsdWVzLmVkZ2VzO1xuXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaChhRmlsdGVyNCwgKGlkeCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpdGxlVmFyID0gYUZpbHRlcjRbaWR4XS5ub2RlLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkVmFyID0gYUZpbHRlcjRbaWR4XS5ub2RlLmVudGl0eUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aENvbG9yVmFyID0gYUZpbHRlcjRbaWR4XS5ub2RlLmhleENvbG9ycy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IxID0gYUZpbHRlcjRbaWR4XS5ub2RlLmhleENvbG9yc1swXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjIgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaGV4Q29sb3JzWzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yMyA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5oZXhDb2xvcnNbMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nID0gYUZpbHRlcjRbaWR4XS5ub2RlLmltYWdlVXJsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihsZW5ndGhDb2xvclZhciA9PSAyKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvci5hcHBlbmQoJzxsYWJlbCBjbGFzcz1cImZvcm0tb3B0aW9uIGZvcm0tb3B0aW9uLXN3YXRjaFwiIGRhdGEtcHJvZHVjdC1zd2F0Y2gtdmFsdWU9XCInK2lkVmFyKydcIj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXRvb2x0aXBcIj4nK3RpdGxlVmFyKyc8L3NwYW4+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yIGZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yMlwiIHRpdGxlPVwiJyt0aXRsZVZhcisnXCI+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicrY29sb3IxKydcIj48L3NwYW4+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicrY29sb3IyKydcIj48L3NwYW4+PC9zcGFuPjwvbGFiZWw+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYobGVuZ3RoQ29sb3JWYXIgPT09IDMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yLmFwcGVuZCgnPGxhYmVsIGNsYXNzPVwiZm9ybS1vcHRpb24gZm9ybS1vcHRpb24tc3dhdGNoXCIgZGF0YS1wcm9kdWN0LXN3YXRjaC12YWx1ZT1cIicraWRWYXIrJ1wiPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdG9vbHRpcFwiPicrdGl0bGVWYXIrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXZhcmlhbnQgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IyXCIgdGl0bGU9XCInK3RpdGxlVmFyKydcIj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jytjb2xvcjErJ1wiPjwvc3Bhbj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jytjb2xvcjIrJ1wiPjwvc3Bhbj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jytjb2xvcjMrJ1wiPjwvc3Bhbj48L3NwYW4+PC9sYWJlbD4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihCb29sZWFuKGNvbG9yMSkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yLmFwcGVuZCgnPGxhYmVsIGNsYXNzPVwiZm9ybS1vcHRpb24gZm9ybS1vcHRpb24tc3dhdGNoXCIgZGF0YS1wcm9kdWN0LXN3YXRjaC12YWx1ZT1cIicraWRWYXIrJ1wiPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdG9vbHRpcFwiPicrdGl0bGVWYXIrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXZhcmlhbnQgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3JcIiB0aXRsZT1cIicrdGl0bGVWYXIrJ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJytjb2xvcjErJ1wiPjwvc3Bhbj48L2xhYmVsPicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKEJvb2xlYW4oaW1nKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IuYXBwZW5kKCc8bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvbiBmb3JtLW9wdGlvbi1zd2F0Y2hcIiBkYXRhLXByb2R1Y3Qtc3dhdGNoLXZhbHVlPVwiJytpZFZhcisnXCI+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi10b29sdGlwXCI+Jyt0aXRsZVZhcisnPC9zcGFuPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1wYXR0ZXJuXCIgdGl0bGU9XCInK3RpdGxlVmFyKydcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnK2ltZysnKVwiPjwvc3Bhbj48L2xhYmVsPicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKGFGaWx0ZXI1Lmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICBpZihwcm9kdWN0RmllbGRTaXplLmxlbmd0aCA8IDEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZCBmb3JtLWZpZWxkLS1zaXplXCI+PGxhYmVsIGNsYXNzPVwiZm9ybS1vcHRpb25cIj4nK2NvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdFRleHQudG9TdHJpbmcoKSsnPC9sYWJlbD48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKChhRmlsdGVyNS5sZW5ndGggPT0gMCkgJiYgKGFGaWx0ZXIzLmxlbmd0aCA9PSAwKSl7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJycpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbFByb2R1Y3RPcHRpb24oKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBtb2RhbEZhY3RvcnksIHsgc2hvd0FsZXJ0TW9kYWwsIE1vZGFsRXZlbnRzIH0gZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oJHNjb3BlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGhpc1Byb3VjdElkID0gcGFyc2VJbnQoY29udGV4dC5wcm9kdWN0SWQpLFxuICAgICAgICAkcmVsYXRlVGFiID0gJCgnI2hhbG8tcmVsYXRlZC1wcm9kdWN0cycpLFxuICAgICAgICAkYnVuZGxlID0gJCgnI2hhbG8tYnVuZGxlLXByb2R1Y3RzJyksXG4gICAgICAgICRidW5kbGVMaXN0ID0gJGJ1bmRsZS5maW5kKCcuaGFsby1wcm9kdWN0LWxpc3QnKTtcblxuICAgIGNvbnN0IG1vZGFsID0gbW9kYWxGYWN0b3J5KCcjbW9kYWwnKVswXTtcblxuICAgIHZhciBjdXJyZW5jeSA9IGNvbnRleHQubW9uZXk7XG5cbiAgICBzaG93QnVuZGxlKCk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmhhbG8tdG9nZ2xlLW9wdGlvbnMnLCBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdmFyICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgICQoJy5oYWxvLXRvZ2dsZS1vcHRpb25zJykubm90KCR0YXJnZXQpLnJlbW92ZUNsYXNzKCdpcy1mb2N1cycpO1xuICAgICAgICAkKCcuaGFsby1kZXRhaWwtb3B0aW9ucycpLm5vdCgkdGFyZ2V0Lm5leHQoJy5oYWxvLWRldGFpbC1vcHRpb25zJykpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG5cbiAgICAgICAgaWYgKCEkdGFyZ2V0Lm5leHQoJy5oYWxvLWRldGFpbC1vcHRpb25zJykuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgJHRhcmdldC5hZGRDbGFzcygnaXMtZm9jdXMnKTtcbiAgICAgICAgICAgICR0YXJnZXQubmV4dCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5hZGRDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHRhcmdldC5uZXh0KCcuaGFsby1kZXRhaWwtb3B0aW9ucycpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICAkdGFyZ2V0LnJlbW92ZUNsYXNzKCdpcy1mb2N1cycpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmhhbG8tb3B0aW9uLWNsb3NlJywgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICQoJy5oYWxvLWRldGFpbC1vcHRpb25zJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgJCgnLmhhbG8tdG9nZ2xlLW9wdGlvbnMnKS5yZW1vdmVDbGFzcygnaXMtZm9jdXMnKTtcbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKCQoJy5oYWxvLWRldGFpbC1vcHRpb25zJykuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgaWYgKCgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5sZW5ndGggPT09IDApICYmICgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLmhhbG8tdG9nZ2xlLW9wdGlvbnMnKS5sZW5ndGggPT09IDApKXtcbiAgICAgICAgICAgICAgICAkKCcuaGFsby1kZXRhaWwtb3B0aW9ucycpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICAgICAgJCgnLmhhbG8tdG9nZ2xlLW9wdGlvbnMnKS5yZW1vdmVDbGFzcygnaXMtZm9jdXMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuaGFsby1kZXRhaWwtY2hlY2tib3gnLCBldmVudCA9PiB7XG4gICAgICAgIHZhciAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KSxcbiAgICAgICAgICAgIGlkID0gJHRhcmdldC5hdHRyKCdpZCcpLnJlcGxhY2UoJ2ZidF9wcm9kdWN0JywnJyksXG4gICAgICAgICAgICBwcm9kdWN0ID0gJCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBpZCArICdcIl0nKTtcblxuICAgICAgICBpZigkdGFyZ2V0LmlzKCc6Y2hlY2tlZCcpID09IGZhbHNlKSB7XG4gICAgICAgICAgICBwcm9kdWN0LnJlbW92ZUNsYXNzKCdpc0NoZWNrZWQnKTtcbiAgICAgICAgICAgIHByb2R1Y3QuZmluZCgnLmhhbG8tcHJvZHVjdC1pY29uQWRkJykucmVtb3ZlQ2xhc3MoJ2hhbG8tcHJvZHVjdC1pY29uQ2hlY2tlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvZHVjdC5hZGRDbGFzcygnaXNDaGVja2VkJyk7XG4gICAgICAgICAgICBwcm9kdWN0LmZpbmQoJy5oYWxvLXByb2R1Y3QtaWNvbkFkZCcpLmFkZENsYXNzKCdoYWxvLXByb2R1Y3QtaWNvbkNoZWNrZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvdGFsUHJpY2UoKTtcbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjaGFsby1hZGRBbGwnLCBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCdmb3JtJywgJGJ1bmRsZSk7XG4gICAgICAgIHZhciBhcnJQcm8gPSBuZXcgQXJyYXkoKTtcblxuICAgICAgICAkKCcuaGFsby1kZXRhaWwtY2hlY2tib3gnKS5lYWNoKChpbmRleCwgdmFsKSA9PiB7XG4gICAgICAgICAgICBpZiAoJCh2YWwpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAgICAgYXJyUHJvLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgY2hlY2sgPSBmYWxzZTtcblxuICAgICAgICBpZiAoYXJyUHJvLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNoZWNrID0gY2hlY2tQcm9kdWN0KCRmb3JtLCBhcnJQcm8pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoZWNrKSB7XG4gICAgICAgICAgICBpZiAoYXJyUHJvLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgayA9IGFyclByby5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAkYnVuZGxlLmZpbmQoJy5sb2FkaW5nT3ZlcmxheScpLnNob3coKTtcblxuICAgICAgICAgICAgICAgIGFkZFRvQ2FydCgkZm9ybSwgMCwgYXJyUHJvLCBrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9ICdQbGVhc2UgbWFrZSBzdXJlIGFsbCBvcHRpb25zIGhhdmUgYmVlbiBmaWxsZWQgaW4uJztcblxuICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgICAgIHRtcC5pbm5lckhUTUwgPSBlcnJvck1lc3NhZ2U7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwodG1wLnRleHRDb250ZW50IHx8IHRtcC5pbm5lclRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHNob3dCdW5kbGUoKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTogJ2hhbG90aGVtZXMvcHJvZHVjdHMvaGFsby1idW5kbGUtcHJvZHVjdHMtdG1wJyxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogJ2hhbG90aGVtZXMvcHJvZHVjdHMvaGFsby1idW5kbGUtcHJvZHVjdHMtb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgdmFyIHByb2RCdW5kbGVJZCA9IFtdLFxuICAgICAgICAgICAgdG90YWxCbG9jayA9ICcnO1xuXG4gICAgICAgIGZpcnN0SXRlbSgpO1xuXG4gICAgICAgICBpZigkYnVuZGxlLmhhc0NsYXNzKCdoYWxvLWJ1bmRsZS1sb2dpbicpKXtcbiAgICAgICAgICAgIHRvdGFsQmxvY2sgPSAnPGRpdiBjbGFzcz1cImhhbG8tcHJvZHVjdC10b3RhbFwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvdGFsLXByaWNlXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+TG9nIGluIGZvciBwcmljaW5nPC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHRvdGFsQmxvY2sgPSAnPGRpdiBjbGFzcz1cImhhbG8tcHJvZHVjdC10b3RhbFwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvdGFsLXByaWNlXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+VG90YWw6PC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj48L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeSBoYWxvLXByb2R1Y3QtdG90YWwtYnV0dG9uXCIgaWQ9XCJoYWxvLWFkZEFsbFwiIGhyZWY9XCIjXCI+QWRkIEFsbCBUbyBDYXJ0PC9hPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuICAgICAgICB9XG5cbiAgICAgICAgJGJ1bmRsZS5maW5kKCcuYnVuZGxlLXByb2R1Y3QtcmlnaHQnKS5hcHBlbmQodG90YWxCbG9jayk7XG5cbiAgICAgICAgJC5lYWNoKGNvbnRleHQucHJvZHVjdEN1c3RvbUZpZWxkcywgZnVuY3Rpb24oaW5kZXgsIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5uYW1lID09ICdfX2J1bmRsZWlkJykge1xuICAgICAgICAgICAgICAgIHByb2RCdW5kbGVJZCA9IEpTT04ucGFyc2UoJ1snK29iai52YWx1ZSsnXScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBwcm9kQnVuZGxlSWQgPSAkLmdyZXAocHJvZEJ1bmRsZUlkLCAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSAhPSB0aGlzUHJvdWN0SWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICgkYnVuZGxlLmxlbmd0aCA+IDAgJiYgcHJvZEJ1bmRsZUlkLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB2YXIgbnVtID0gMCxcbiAgICAgICAgICAgICAgICBsaXN0ID0gW107XG5cbiAgICAgICAgICAgICRyZWxhdGVUYWIuZmluZCgnLmNhcmQnKS5lYWNoKChpbmRleCwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBcIlwiXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgcElkID0gJCh2YWwpLmRhdGEoJ3Byb2R1Y3QtaWQnKTtcblxuICAgICAgICAgICAgICAgIGlmIChwSWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0LmdldEJ5SWQocElkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC5pbmRleCA9PSBpbmRleCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBudW0rKztcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobnVtID09ICRyZWxhdGVUYWIuZmluZCgnLmNhcmQnKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dMaXN0KGxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgkYnVuZGxlLmxlbmd0aCA+IDAgJiYgcHJvZEJ1bmRsZUlkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBudW0gPSAwLFxuICAgICAgICAgICAgICAgIGxpc3QgPSBbXSxcbiAgICAgICAgICAgICAgICBsaXN0RmlsdGVyID0gJC51bmlxdWUocHJvZEJ1bmRsZUlkKTtcblxuICAgICAgICAgICAgJC5lYWNoKGxpc3RGaWx0ZXIsIChpbmRleCwgdmFsKSA9PntcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFwiXCJcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHZhciBwSWQgPSB2YWw7XG5cbiAgICAgICAgICAgICAgICBpZiAocElkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKHBJZCwgb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuaW5kZXggPT0gaW5kZXgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGEgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtKys7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG51bSA9PSBwcm9kQnVuZGxlSWQubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TGlzdChsaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaXJzdEl0ZW0oKXtcbiAgICAgICAgY29uc3QgZmlyc3RJdGVtID0gJGJ1bmRsZUxpc3QuZmluZCgnLmhhbG8tcHJvZHVjdC1pdGVtRmlyc3QnKSxcbiAgICAgICAgICAgIHBJZCA9IGZpcnN0SXRlbS5kYXRhKCdwcm9kdWN0LWlkJyksXG4gICAgICAgICAgICBmb3JtID0gZmlyc3RJdGVtLmZpbmQoJ2Zvcm0nKSxcbiAgICAgICAgICAgIGhhc09wdGlvbnMgPSBmb3JtLmZpbmQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXScpLmxlbmd0aCxcbiAgICAgICAgICAgIGhhc0RlZmF1bHRPcHRpb25zID0gZm9ybS5maW5kKCdbZGF0YS1kZWZhdWx0XScpLmxlbmd0aDtcblxuICAgICAgICBpZiAoaGFzRGVmYXVsdE9wdGlvbnMgJiYgaGFzT3B0aW9ucykge1xuICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShwSWQsIGZvcm0uc2VyaWFsaXplKCksICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlc0NvbnRlbnQgPSByZXNwb25zZS5jb250ZW50IHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoZm9ybSwgYXR0cmlidXRlc0RhdGEpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhhc0RlZmF1bHRPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVZpZXcoZm9ybSwgYXR0cmlidXRlc0RhdGEsIGF0dHJpYnV0ZXNDb250ZW50KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhhdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93TGlzdChsaXN0KXtcbiAgICAgICAgbGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBlbGVtZW50LmRhdGE7XG5cbiAgICAgICAgICAgICRidW5kbGVMaXN0LmFwcGVuZChyZXNwb25zZS5pdGVtKTtcblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9wdGlvbnMudHJpbSgpICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgcElkID0gJChyZXNwb25zZS5pdGVtKS5kYXRhKCdwcm9kdWN0LWlkJyksXG4gICAgICAgICAgICAgICAgJGZvcm0gPSAkYnVuZGxlTGlzdC5maW5kKCcuaGFsby1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHBJZCArICdcIl0gZm9ybScpO1xuXG4gICAgICAgICAgICAgICAgJGZvcm0uYXBwZW5kKHJlc3BvbnNlLm9wdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWxlbWVudCA9ICQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXScsICRmb3JtKTtcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWxlbWVudC5odG1sKCkudHJpbSgpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNEZWZhdWx0T3B0aW9ucyA9ICQocmVzcG9uc2Uub3B0aW9ucykuZmluZCgnW2RhdGEtZGVmYXVsdF0nKS5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICBpZiAoaGFzRGVmYXVsdE9wdGlvbnMgJiYgaGFzT3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKHBJZCwgJGZvcm0uc2VyaWFsaXplKCksICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlc0RhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNDb250ZW50ID0gcmVzcG9uc2UuY29udGVudCB8fCB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKCRmb3JtLCBhdHRyaWJ1dGVzRGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzRGVmYXVsdE9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVmlldygkZm9ybSwgYXR0cmlidXRlc0RhdGEsIGF0dHJpYnV0ZXNDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhhdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZXRQcm9kdWN0VmFyaWFudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBwcm9kdWN0T3B0aW9ucygpO1xuICAgICAgICBzaG93U2xpY2tTbGlkZXIoJGJ1bmRsZUxpc3QpO1xuXG4gICAgICAgIGlmKCEkYnVuZGxlLmhhc0NsYXNzKCdoYWxvLWJ1bmRsZS1sb2dpbicpKXtcbiAgICAgICAgICAgIHRvdGFsUHJpY2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgICRidW5kbGUucmVtb3ZlQ2xhc3MoJ2hhbG8tYmxvY2stZGlzYWJsZScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dTbGlja1NsaWRlcih3cmFwKXtcbiAgICAgICAgaWYod3JhcC5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIHdyYXAuc2xpY2soe1xuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1uZXh0IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdOZXh0IFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9JyNzbGljay1hcnJvdy1uZXh0Jz48L3VzZT48L3N2Zz5cIixcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stcHJldiBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nUHJldmlvdXMgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0nI3NsaWNrLWFycm93LXByZXYnPjwvdXNlPjwvc3ZnPlwiLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTYwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTUxLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tQcm9kdWN0KGZvcm0sIGFyclBybykge1xuICAgICAgICB2YXIgY2hlY2sgPSB0cnVlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyUHJvLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgayA9IGFyclByb1tpXSxcbiAgICAgICAgICAgICAgICAkZm9ybSA9ICQoZm9ybVtrXSk7XG5cbiAgICAgICAgICAgIGlmICgkZm9ybS5maW5kKCdbZGF0YS1mYnQtb3B0aW9uLWNoYW5nZV0nKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjaGVjayA9IGNoZWNrQmVmb3JlQWRkKCRmb3JtKTtcblxuICAgICAgICAgICAgICAgIGlmIChjaGVjayA9PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tCZWZvcmVBZGQoJGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrID0gdHJ1ZSxcbiAgICAgICAgICAgIGF0dCA9IFwiXCI7XG5cbiAgICAgICAgJGF0dHJpYnV0ZXMuZmluZCgnaW5wdXQ6dGV4dCwgaW5wdXQ6cGFzc3dvcmQsIGlucHV0OmZpbGUsIHRleHRhcmVhJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghJChlbGVtZW50KS5wcm9wKCdyZXF1aXJlZCcpKSB7fSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoJChlbGVtZW50KS52YWwoKSkge30gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRhdHRyaWJ1dGVzLmZpbmQoJ3NlbGVjdCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoISQoZWxlbWVudCkucHJvcCgncmVxdWlyZWQnKSkge30gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCQoZWxlbWVudCkudmFsKCkpIHt9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkYXR0cmlidXRlcy5maW5kKCdpbnB1dDpyYWRpbywgaW5wdXQ6Y2hlY2tib3gnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGF0dCAhPSAkKGVsZW1lbnQpLmF0dHIoXCJuYW1lXCIpKSB7XG4gICAgICAgICAgICAgICAgYXR0ID0gJChlbGVtZW50KS5hdHRyKFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoISQoZWxlbWVudCkucHJvcCgncmVxdWlyZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJChlbGVtZW50KS5hdHRyKFwidHlwZVwiKSA9PSBcImNoZWNrYm94XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKFwiW25hbWU9J1wiICsgYXR0ICsgXCInXTpjaGVja2VkXCIpLnZhbCgpKSB7fVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgkKGVsZW1lbnQpLmF0dHIoXCJ0eXBlXCIpID09IFwicmFkaW9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikudmFsKCkpIHt9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJChlbGVtZW50KS5hdHRyKFwidHlwZVwiKSA9PSBcImNoZWNrYm94XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKFwiW25hbWU9J1wiICsgYXR0ICsgXCInXTpjaGVja2VkXCIpLnZhbCgpKSB7fSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgkKGVsZW1lbnQpLmF0dHIoXCJ0eXBlXCIpID09IFwicmFkaW9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikudmFsKCkpIHt9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjaGVjaztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRUb0NhcnQoZm9ybSwgaSwgYXJyUCwgaykge1xuICAgICAgICBpZiAod2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwcm9kID0gYXJyUFtpXTtcblxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtQWRkKGZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybShuZXcgRm9ybURhdGEoZm9ybVtwcm9kXSkpLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyIHx8IHJlc3BvbnNlLmRhdGEuZXJyb3I7XG5cbiAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICB0bXAuaW5uZXJIVE1MID0gZXJyb3JNZXNzYWdlO1xuICAgICAgICAgICAgICAgIGFsZXJ0KHRtcC50ZXh0Q29udGVudCB8fCB0bXAuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgICAgICBrID0gayAtIDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGkrKztcblxuICAgICAgICAgICAgaWYgKGkgPj0gYXJyUC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkYnVuZGxlLmZpbmQoJy5sb2FkaW5nT3ZlcmxheScpLmhpZGUoKTtcblxuICAgICAgICAgICAgICAgIG1vZGFsLiRtb2RhbC5yZW1vdmVDbGFzcygpLmFkZENsYXNzKCdtb2RhbCBtb2RhbC0tcHJldmlldyBtb2RhbC0tcHJldmlld01pbmkgbW9kYWwtLXByZXZpZXdNaW5pMicpO1xuICAgICAgICAgICAgICAgIG1vZGFsLm9wZW4oeyBzaXplOiAnc21hbGwnIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYoJChcIi5tb2RhbC1iYWNrZ3JvdW5kOnZpc2libGVcIikubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1iYWNrZ3JvdW5kOnZpc2libGUnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlO1xuXG4gICAgICAgICAgICAgICAgaWYoayA+IDApe1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9ICc8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1vZGFsLWhlYWRlci10aXRsZVwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2ssICcraysnIGl0ZW0gd2FzIGFkZGVkIHRvIHlvdXIgY2FydC4gV2hhdFxcJ3MgbmV4dD9cXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlld0NhcnQgcHJldmlld0NhcnQyXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInByZXZpZXdDYXJ0Q2hlY2tvdXQgcHJldmlld0NhcnRDaGVja291dDJcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NoZWNrb3V0LnBocFwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9jZWVkIFRvIENoZWNrb3V0XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJldmlld0NhcnRDaGVja291dC1hdXRvQ2xvc2VcIiBkYXRhLWF1dG8tY2xvc2U9XCIxMFwiPkF1dG8gY2xvc2UgYWZ0ZXIgPHNwYW4gY2xhc3M9XCJjb3VudFwiPjwvc3Bhbj5zPC9wPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gJzxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibW9kYWwtaGVhZGVyLXRpdGxlXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPaywgJytrKycgaXRlbSB3YXMgYWRkZWQgdG8geW91ciBjYXJ0LiBXaGF0XFwncyBuZXh0P1xcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3Q2FydCBwcmV2aWV3Q2FydDJcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicHJldmlld0NhcnRDaGVja291dCBwcmV2aWV3Q2FydENoZWNrb3V0MlwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJldmlld0NhcnRDaGVja291dC10ZXh0XCI+U29ycnkhIFdlIGRvblxcJ3QgaGF2ZSBlbm91Z2ggcHJvZHVjdCBmb3IgeW91ciBzZWxlY3Rpb24hPC9wPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJldmlld0NhcnRDaGVja291dC1hdXRvQ2xvc2VcIiBkYXRhLWF1dG8tY2xvc2U9XCIxMFwiPkF1dG8gY2xvc2UgYWZ0ZXIgPHNwYW4gY2xhc3M9XCJjb3VudFwiPjwvc3Bhbj5zPC9wPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gcGFyc2VJbnQoJGJvZHkuZmluZCgnLmNhcnREZXNrdG9wIC5jYXJ0LXF1YW50aXR5JykudGV4dCgpKSArIGs7XG5cbiAgICAgICAgICAgICAgICAkYm9keS50cmlnZ2VyKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHF1YW50aXR5KTtcblxuICAgICAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhZGRUb0NhcnQoZm9ybSwgaSwgYXJyUCwgayk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvdGFsUHJpY2UoKSB7XG4gICAgICAgIHZhciB0b3RhbCA9IDAsXG4gICAgICAgICAgICBzeW1ib2wsXG4gICAgICAgICAgICBzeW1ib2xDaGFuZ2UsXG4gICAgICAgICAgICBkZWNpbWFsUGxhY2VzLFxuICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcixcbiAgICAgICAgICAgIHRob3VzYW5kc1NlcGFyYXRvcixcbiAgICAgICAgICAgIHN5bWJvbExvY2F0aW9uLFxuICAgICAgICAgICAgY3VycixcbiAgICAgICAgICAgIHRva2VuMSxcbiAgICAgICAgICAgIHRva2VuMixcbiAgICAgICAgICAgIGxlbmd0aDtcblxuICAgICAgICBkZWNpbWFsUGxhY2VzID0gY3VycmVuY3kuZGVjaW1hbF9wbGFjZXM7XG4gICAgICAgIGRlY2ltYWxTZXBhcmF0b3IgPSBjdXJyZW5jeS5kZWNpbWFsX3Rva2VuO1xuICAgICAgICB0aG91c2FuZHNTZXBhcmF0b3IgPSBjdXJyZW5jeS50aG91c2FuZHNfdG9rZW47XG4gICAgICAgIHN5bWJvbExvY2F0aW9uID0gY3VycmVuY3kuY3VycmVuY3lfbG9jYXRpb247XG4gICAgICAgIHN5bWJvbCA9IGN1cnJlbmN5LmN1cnJlbmN5X3Rva2VuO1xuXG4gICAgICAgICRidW5kbGVMaXN0LmZpbmQoJy5oYWxvLXByb2R1Y3QtaXRlbS5pc0NoZWNrZWQnKS5lYWNoKChpbmRleCwgdmFsKSA9PiB7XG4gICAgICAgICAgICB2YXIgcHJpY2UgPSBwYXJzZUZsb2F0KCQodmFsKS5maW5kKCdbZGF0YS1wcmljZS12YWx1ZV0nKS5hdHRyKCdkYXRhLXByaWNlLXZhbHVlJykpO1xuICAgICAgICAgICAgdG90YWwgPSB0b3RhbCArIHByaWNlO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoJCgnLnByb2R1Y3RWaWV3LXByaWNlID4gLnByaWNlLXNlY3Rpb24gPiAucHJpY2UucHJpY2UtLXdpdGhUYXgnLCAkc2NvcGUpLmxlbmd0aCkge1xuICAgICAgICAgICAgY3VyciA9ICQoJy5wcm9kdWN0Vmlldy1wcmljZSA+IC5wcmljZS1zZWN0aW9uID4gLnByaWNlLnByaWNlLS13aXRoVGF4JywgJHNjb3BlKS50ZXh0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdXJyID0gJCgnLnByb2R1Y3RWaWV3LXByaWNlID4gLnByaWNlLXNlY3Rpb24gPiAucHJpY2UucHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLnRleHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN5bWJvbENoYW5nZSA9IGN1cnIucmVwbGFjZSgvWzAtOV0vZywgXCJcIikucmVwbGFjZShcIi5cIiwgXCJcIikucmVwbGFjZShcIixcIiwgXCJcIik7XG5cbiAgICAgICAgaWYoc3ltYm9sICE9IHN5bWJvbENoYW5nZSl7XG4gICAgICAgICAgICBzeW1ib2wgPSBzeW1ib2xDaGFuZ2U7XG4gICAgICAgICAgICB0b2tlbjEgPSAoY3Vyci5pbmRleE9mKCcuJykpO1xuICAgICAgICAgICAgdG9rZW4yID0gKGN1cnIuaW5kZXhPZignLCcpKTtcbiAgICAgICAgICAgIGxlbmd0aCA9IGN1cnIubGVuZ3RoIC0gMTtcblxuICAgICAgICAgICAgaWYgKGN1cnIuaW5kZXhPZihzeW1ib2wpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgc3ltYm9sTG9jYXRpb24gPSBjdXJyLmluZGV4T2Yoc3ltYm9sKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRva2VuMSA8IHRva2VuMikge1xuICAgICAgICAgICAgICAgIHRob3VzYW5kc1NlcGFyYXRvciA9ICcuJztcbiAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yID0gJywnO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN5bWJvbExvY2F0aW9uID09IDAgfHwgc3ltYm9sTG9jYXRpb24gPT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFBsYWNlcyA9IGxlbmd0aCAtIHRva2VuMjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsUGxhY2VzID0gbGVuZ3RoIC0gdG9rZW4yIC0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRob3VzYW5kc1NlcGFyYXRvciA9ICcsJztcbiAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yID0gJy4nO1xuICAgICAgICAgICAgICAgIGlmIChzeW1ib2xMb2NhdGlvbiA9PSAwIHx8IHN5bWJvbExvY2F0aW9uID09IFwibGVmdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWxQbGFjZXMgPSBsZW5ndGggLSB0b2tlbjE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFBsYWNlcyA9IGxlbmd0aCAtIHRva2VuMSAtIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYodG90YWwgPT0gMCl7XG4gICAgICAgICAgICAkYnVuZGxlLmZpbmQoJyNoYWxvLWFkZEFsbCcpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICRidW5kbGUuZmluZCgnI2hhbG8tYWRkQWxsJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0b3RhbCA9IGZvcm1hdE1vbmV5KHRvdGFsLCBkZWNpbWFsUGxhY2VzLCBkZWNpbWFsU2VwYXJhdG9yLCB0aG91c2FuZHNTZXBhcmF0b3IpO1xuXG4gICAgICAgIGlmIChzeW1ib2xMb2NhdGlvbiA9PSBcImxlZnRcIiB8fCBzeW1ib2xMb2NhdGlvbiA9PSAwKXtcbiAgICAgICAgICAgIHRvdGFsID0gc3ltYm9sICsgdG90YWw7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHRvdGFsID0gdG90YWwgKyBzeW1ib2w7XG4gICAgICAgIH1cblxuICAgICAgICAkYnVuZGxlLmZpbmQoJy5oYWxvLXByb2R1Y3QtdG90YWwgLnByaWNlJykuaHRtbCh0b3RhbCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9ybWF0TW9uZXkobiwgYywgZCwgdCkge1xuICAgICAgICB2YXIgYyA9IGlzTmFOKGMgPSBNYXRoLmFicyhjKSkgPyAyIDogYyxcbiAgICAgICAgICAgIGQgPSBkID09IHVuZGVmaW5lZCA/IFwiLlwiIDogZCxcbiAgICAgICAgICAgIHQgPSB0ID09IHVuZGVmaW5lZCA/IFwiLFwiIDogdCxcbiAgICAgICAgICAgIHMgPSBuIDwgMCA/IFwiLVwiIDogXCJcIixcbiAgICAgICAgICAgIGkgPSBTdHJpbmcocGFyc2VJbnQobiA9IE1hdGguYWJzKE51bWJlcihuKSB8fCAwKS50b0ZpeGVkKGMpKSksXG4gICAgICAgICAgICBqID0gKGogPSBpLmxlbmd0aCkgPiAzID8gaiAlIDMgOiAwO1xuXG4gICAgICAgIHJldHVybiBzICsgKGogPyBpLnN1YnN0cigwLCBqKSArIHQgOiBcIlwiKSArIGkuc3Vic3RyKGopLnJlcGxhY2UoLyhcXGR7M30pKD89XFxkKS9nLCBcIiQxXCIgKyB0KSArIChjID8gZCArIE1hdGguYWJzKG4gLSBpKS50b0ZpeGVkKGMpLnNsaWNlKDIpIDogXCJcIik7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHByb2R1Y3RPcHRpb25zKCkge1xuICAgICAgICBpZighJGJ1bmRsZS5oYXNDbGFzcygnaGFsby1idW5kbGUtbG9naW4nKSl7XG4gICAgICAgICAgICB0b3RhbFByaWNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCAkZm9ybSA9ICQoJ2Zvcm0nLCAkYnVuZGxlKSxcbiAgICAgICAgICAgICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQgPSAkKCdbZGF0YS1mYnQtb3B0aW9uLWNoYW5nZV0nLCAkZm9ybSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHByb2R1Y3RPcHRpb25zQ2hhbmdlZChldmVudCk7XG4gICAgICAgICAgICBzZXRQcm9kdWN0VmFyaWFudChldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFByb2R1Y3RWYXJpYW50KCkge1xuICAgICAgICBjb25zdCB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzID0gW107XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcblxuICAgICAgICAkLmVhY2goJCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdIFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25MYWJlbCA9IHZhbHVlLmNoaWxkcmVuWzBdLmlubmVyVGV4dDtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvblRpdGxlID0gb3B0aW9uTGFiZWwuc3BsaXQoJzonKVswXS50cmltKCk7XG4gICAgICAgICAgICBjb25zdCByZXF1aXJlZCA9IG9wdGlvbkxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdmFsdWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlJyk7XG5cbiAgICAgICAgICAgIGlmICgodHlwZSA9PT0gJ2lucHV0LWZpbGUnIHx8IHR5cGUgPT09ICdpbnB1dC10ZXh0JyB8fCB0eXBlID09PSAnaW5wdXQtbnVtYmVyJykgJiYgdmFsdWUucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3RleHRhcmVhJyAmJiB2YWx1ZS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLnZhbHVlID09PSAnJyAmJiByZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NhdGlzZmllZCA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLmV2ZXJ5KChzZWxlY3QpID0+IHNlbGVjdC5zZWxlY3RlZEluZGV4ICE9PSAwKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc1NhdGlzZmllZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gQXJyYXkuZnJvbSh2YWx1ZS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKSkubWFwKCh4KSA9PiB4LnZhbHVlKS5qb2luKCctJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtkYXRlU3RyaW5nfWApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3QgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gc2VsZWN0LnNlbGVjdGVkSW5kZXg7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7c2VsZWN0Lm9wdGlvbnNbc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0fWApO1xuICAgICAgICAgICAgICAgICAgICAkKHZhbHVlLmNoaWxkcmVuWzBdKS5maW5kKCdbZGF0YS1vcHRpb24tdmFsdWVdJykudGV4dChzZWxlY3Qub3B0aW9uc1tzZWxlY3RlZEluZGV4XS5pbm5lclRleHQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8IHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8IHR5cGUgPT09ICdzd2F0Y2gnIHx8IHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcgfHwgdHlwZSA9PT0gJ3Byb2R1Y3QtbGlzdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2VkID0gdmFsdWUucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8IHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8IHR5cGUgPT09ICdwcm9kdWN0LWxpc3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGNoZWNrZWQubGFiZWxzWzBdLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtsYWJlbH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHZhbHVlLmNoaWxkcmVuWzBdKS5maW5kKCdbZGF0YS1vcHRpb24tdmFsdWVdJykudGV4dChsYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N3YXRjaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gY2hlY2tlZC5sYWJlbHNbMF0uY2hpbGRyZW5bMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWwudGl0bGV9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh2YWx1ZS5jaGlsZHJlblswXSkuZmluZCgnW2RhdGEtb3B0aW9uLXZhbHVlXScpLnRleHQobGFiZWwudGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06WWVzYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfTpOb2ApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvZHVjdE9wdGlvbnNDaGFuZ2VkKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRjaGFuZ2VkT3B0aW9uID0gJChldmVudC50YXJnZXQpO1xuICAgICAgICBjb25zdCAkZm9ybSA9ICRjaGFuZ2VkT3B0aW9uLnBhcmVudHMoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJywgJGZvcm0pLnZhbCgpO1xuXG4gICAgICAgIGlmICgkY2hhbmdlZE9wdGlvbi5hdHRyKCd0eXBlJykgPT09ICdmaWxlJyB8fCB3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRjaGFuZ2VkT3B0aW9uLmF0dHIoJ2lkJykgPT09ICdmYnRfcHJvZHVjdCcgKyBwcm9kdWN0SWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShwcm9kdWN0SWQsICRmb3JtLnNlcmlhbGl6ZSgpLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0QXR0cmlidXRlc0RhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50ID0gcmVzcG9uc2UuY29udGVudCB8fCB7fTtcbiAgICAgICAgICAgIHNob3dQcm9kdWN0SW1hZ2UocHJvZHVjdElkLCBwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICAgICAgdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoJGZvcm0sIHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgICAgICB1cGRhdGVWaWV3KCRmb3JtLCBwcm9kdWN0QXR0cmlidXRlc0RhdGEsIHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKCEkYnVuZGxlLmhhc0NsYXNzKCdoYWxvLWJ1bmRsZS1sb2dpbicpKXtcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoJHNjb3BlLCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IGJlaGF2aW9yID0gZGF0YS5vdXRfb2Zfc3RvY2tfYmVoYXZpb3I7XG4gICAgICAgIGNvbnN0IGluU3RvY2tJZHMgPSBkYXRhLmluX3N0b2NrX2F0dHJpYnV0ZXM7XG4gICAgICAgIGNvbnN0IG91dE9mU3RvY2tNZXNzYWdlID0gYCAoJHtkYXRhLm91dF9vZl9zdG9ja19tZXNzYWdlfSlgO1xuXG4gICAgICAgIGlmIChiZWhhdmlvciAhPT0gJ2hpZGVfb3B0aW9uJyAmJiBiZWhhdmlvciAhPT0gJ2xhYmVsX29wdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlXScsICRzY29wZSkuZWFjaCgoaSwgYXR0cmlidXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYXR0cmlidXRlID0gJChhdHRyaWJ1dGUpO1xuICAgICAgICAgICAgY29uc3QgYXR0cklkID0gcGFyc2VJbnQoJGF0dHJpYnV0ZS5kYXRhKCdwcm9kdWN0QXR0cmlidXRlVmFsdWUnKSwgMTApO1xuXG4gICAgICAgICAgICBpZiAoaW5TdG9ja0lkcy5pbmRleE9mKGF0dHJJZCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgZW5hYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpc2FibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgaWYgKGdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIGRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5oaWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmFkZENsYXNzKCd1bmF2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgJHNlbGVjdCA9ICRhdHRyaWJ1dGUucGFyZW50KCk7XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnRvZ2dsZU9wdGlvbihmYWxzZSk7XG5cbiAgICAgICAgICAgIGlmICgkc2VsZWN0LnZhbCgpID09PSAkYXR0cmlidXRlLmF0dHIoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICAkc2VsZWN0WzBdLnNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5odG1sKCRhdHRyaWJ1dGUuaHRtbCgpLnJlcGxhY2Uob3V0T2ZTdG9ja01lc3NhZ2UsICcnKSArIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgaWYgKGdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIGVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUucmVtb3ZlQ2xhc3MoJ3VuYXZhaWxhYmxlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24odHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5odG1sKCRhdHRyaWJ1dGUuaHRtbCgpLnJlcGxhY2Uob3V0T2ZTdG9ja01lc3NhZ2UsICcnKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpIHtcbiAgICAgICAgY29uc3QgJHBhcmVudCA9ICRhdHRyaWJ1dGUuY2xvc2VzdCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJyk7XG5cbiAgICAgICAgcmV0dXJuICRwYXJlbnQgPyAkcGFyZW50LmRhdGEoJ3Byb2R1Y3RBdHRyaWJ1dGUnKSA6IG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1Byb2R1Y3RJbWFnZShwcm9kdWN0SWQsIGRhdGEpIHtcbiAgICAgICAgaWYgKF8uaXNQbGFpbk9iamVjdChkYXRhLmltYWdlKSkge1xuICAgICAgICAgICAgY29uc3QgbWFpbkltYWdlVXJsID0gdXRpbHMudG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KFxuICAgICAgICAgICAgICAgIGRhdGEuaW1hZ2UuZGF0YSwgeyAnMXgnOiBjb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdGdhbGxlcnlfc2l6ZSB9LFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgJCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykuZmluZCgnaW1nJykuYXR0cih7XG4gICAgICAgICAgICAgICAgJ3NyY3NldCc6IG1haW5JbWFnZVVybCxcbiAgICAgICAgICAgICAgICAnZGF0YS1zcmNzZXQnOiAkKHRoaXMpLmF0dHIoJ3NyY3NldCcpLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG1haW5JbWFnZVVybCA9ICQoJy5oYWxvLXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLmZpbmQoJ2ltZycpLmF0dHIoJ2RhdGEtc3Jjc2V0Jyk7XG4gICAgICAgICAgICAkKCcuaGFsby1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5maW5kKCdpbWcnKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAnc3Jjc2V0JzogbWFpbkltYWdlVXJsLFxuICAgICAgICAgICAgICAgICdkYXRhLXNyY3NldCc6ICQodGhpcykuYXR0cignc3Jjc2V0JyksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVZpZXcoJHNjb3BlLCBkYXRhLCBjb250ZW50ID0gbnVsbCkge1xuICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSBnZXRWaWV3TW9kZWwoJHNjb3BlKTtcblxuICAgICAgICBzaG93TWVzc2FnZUJveChkYXRhLnN0b2NrX21lc3NhZ2UgfHwgZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UsICRzY29wZSk7XG5cbiAgICAgICAgaWYgKF8uaXNOdW1iZXIoZGF0YS5zdG9jaykpIHtcbiAgICAgICAgICAgIGlmKChkYXRhLnN0b2NrIDw9IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvX3N0b2NrX2xldmVsX2xpbWl0KSkgJiYgKGRhdGEuc3RvY2sgPiAwKSkge1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC4kc3RvY2tMZWZ0V3JhcHBlci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC4kc3RvY2tMZWZ0LnRleHQoZGF0YS5zdG9jayk7XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgdmlld01vZGVsLiRzdG9ja0xlZnRXcmFwcGVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5pc09iamVjdChkYXRhLnByaWNlKSkge1xuICAgICAgICAgICAgdXBkYXRlUHJpY2VWaWV3KHZpZXdNb2RlbCwgZGF0YS5wcmljZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHJvZHVjdElkID0gJCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJywgJHNjb3BlKS52YWwoKSxcbiAgICAgICAgICAgIHByb2R1Y3QgPSAkYnVuZGxlTGlzdC5maW5kKCcuaGFsby1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKSxcbiAgICAgICAgICAgIHByb2R1Y3RDaGVja2JveCA9IHByb2R1Y3QuZmluZCgnLmhhbG8tZGV0YWlsLWNoZWNrYm94Jyk7XG5cbiAgICAgICAgaWYgKCFkYXRhLnB1cmNoYXNhYmxlIHx8ICFkYXRhLmluc3RvY2spIHtcbiAgICAgICAgICAgIHByb2R1Y3QucmVtb3ZlQ2xhc3MoJ2lzQ2hlY2tlZCBoYXNPcHRpb25zLS1zZWxlY3RlZCcpO1xuICAgICAgICAgICAgcHJvZHVjdENoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2R1Y3QuYWRkQ2xhc3MoJ2lzQ2hlY2tlZCcpO1xuICAgICAgICAgICAgcHJvZHVjdENoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCB0cnVlKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcblxuICAgICAgICAgICAgaWYgKCRzY29wZS5maW5kKCdbZGF0YS1mYnQtb3B0aW9uLWNoYW5nZV0nKS5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgY2hlY2sgPSBjaGVja0JlZm9yZUFkZCgkc2NvcGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5hZGRDbGFzcygnaGFzT3B0aW9ucy0tc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUygkc2NvcGUsIGRhdGEpIHtcbiAgICAgICAgdmFyIHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsICRzY29wZSkudmFsKCksXG4gICAgICAgICAgICBwcm9kdWN0ID0gJGJ1bmRsZUxpc3QuZmluZCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJyksXG4gICAgICAgICAgICBwcm9kdWN0Q2hlY2tib3ggPSBwcm9kdWN0LmZpbmQoJy5oYWxvLWRldGFpbC1jaGVja2JveCcpO1xuXG4gICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XG4gICAgICAgICAgICBwcm9kdWN0LnJlbW92ZUNsYXNzKCdpc0NoZWNrZWQgaGFzT3B0aW9ucy0tc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIHByb2R1Y3RDaGVja2JveC5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9kdWN0LmFkZENsYXNzKCdpc0NoZWNrZWQnKTtcbiAgICAgICAgICAgIHByb2R1Y3RDaGVja2JveC5wcm9wKCdjaGVja2VkJywgdHJ1ZSkucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGlmICgkc2NvcGUuZmluZCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBjaGVjayA9IGNoZWNrQmVmb3JlQWRkKCRzY29wZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2hlY2sgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmFkZENsYXNzKCdoYXNPcHRpb25zLS1zZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFZpZXdNb2RlbCgkc2NvcGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICRwcmljZVdpdGhUYXg6ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgICRwcmljZVdpdGhvdXRUYXg6ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIHJycFdpdGhUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucnJwLXByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtd2l0aC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBycnBXaXRob3V0VGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcnJwLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9uU2FsZVdpdGhUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcubm9uLXNhbGUtcHJpY2UtLXdpdGhUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9uU2FsZVdpdGhvdXRUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcubm9uLXNhbGUtcHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VTYXZlZDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5wcmljZS1zZWN0aW9uLS1zYXZpbmcnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXNhdmVkXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VOb3dMYWJlbDoge1xuICAgICAgICAgICAgICAgICRzcGFuOiAkKCcucHJpY2Utbm93LWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZUxhYmVsOiB7XG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJy5wcmljZS1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VEYXRhOiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnW2RhdGEtcHJpY2UtdmFsdWVdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAkd2VpZ2h0OiAkKCcucHJvZHVjdFZpZXctaW5mbyBbZGF0YS1wcm9kdWN0LXdlaWdodF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgJGluY3JlbWVudHM6ICQoJy5mb3JtLWZpZWxkLS1pbmNyZW1lbnRzIDppbnB1dCcsICRzY29wZSksXG4gICAgICAgICAgICAkYWRkVG9DYXJ0OiAkKCcjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0JywgJHNjb3BlKSxcbiAgICAgICAgICAgICR3aXNobGlzdFZhcmlhdGlvbjogJCgnW2RhdGEtd2lzaGxpc3QtYWRkXSBbbmFtZT1cInZhcmlhdGlvbl9pZFwiXScsICRzY29wZSksXG4gICAgICAgICAgICAkc3RvY2tMZWZ0OiAkKCdbZGF0YS1zdG9jay1sZWZ0XScsICRzY29wZSksXG4gICAgICAgICAgICAkc3RvY2tMZWZ0V3JhcHBlcjogJCgnLnByb2R1Y3RWaWV3LW9wdGlvbnNTdG9jaycsICRzY29wZSksXG4gICAgICAgICAgICBzdG9jazoge1xuICAgICAgICAgICAgICAgICRjb250YWluZXI6ICQoJy5mb3JtLWZpZWxkLS1zdG9jaycsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJGlucHV0OiAkKCdbZGF0YS1wcm9kdWN0LXN0b2NrXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJHNrdTogJCgnW2RhdGEtcHJvZHVjdC1za3VdJyksXG4gICAgICAgICAgICAkdXBjOiAkKCdbZGF0YS1wcm9kdWN0LXVwY10nKSxcbiAgICAgICAgICAgIHF1YW50aXR5OiB7XG4gICAgICAgICAgICAgICAgJHRleHQ6ICQoJy5pbmNyZW1lbnRUb3RhbCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJGlucHV0OiAkKCdbbmFtZT1xdHlcXFxcW1xcXFxdXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJGJ1bGtQcmljaW5nOiAkKCcucHJvZHVjdFZpZXctaW5mby1idWxrUHJpY2luZycsICRzY29wZSksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd01lc3NhZ2VCb3gobWVzc2FnZSwgJHNjb3BlKSB7XG4gICAgICAgIGNvbnN0ICRtZXNzYWdlQm94ID0gJCgnLnByb2R1Y3RBdHRyaWJ1dGVzLW1lc3NhZ2UnLCAkc2NvcGUpO1xuXG4gICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAkKCcuYWxlcnRCb3gtbWVzc2FnZScsICRtZXNzYWdlQm94KS50ZXh0KG1lc3NhZ2UpO1xuICAgICAgICAgICAgJG1lc3NhZ2VCb3guc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJG1lc3NhZ2VCb3guaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKSB7XG4gICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gdXBkYXRlUHJpY2VWaWV3KHZpZXdNb2RlbCwgcHJpY2UpIHtcbiAgICAgICAgY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKTtcblxuICAgICAgICBpZiAocHJpY2Uud2l0aF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kcHJpY2VXaXRoVGF4Lmh0bWwocHJpY2Uud2l0aF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZURhdGEuJGRpdi5hdHRyKCdkYXRhLXByaWNlLXZhbHVlJywgcHJpY2Uud2l0aF90YXgudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLndpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHByaWNlV2l0aG91dFRheC5odG1sKHByaWNlLndpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VEYXRhLiRkaXYuYXR0cignZGF0YS1wcmljZS12YWx1ZScsIHByaWNlLndpdGhvdXRfdGF4LnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ycnBfd2l0aF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJHNwYW4uaHRtbChwcmljZS5ycnBfd2l0aG91dF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5zYXZlZCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kc3Bhbi5odG1sKHByaWNlLnNhdmVkLmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kc3Bhbi5odG1sKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kc3Bhbi5odG1sKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0oZm9ybURhdGEpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBmb3JtRGF0YSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBGaWxlICYmICF2YWwubmFtZSAmJiAhdmFsLnNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xuICAgIH1cbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICBpZiAoJCgnLnByb2R1Y3RWaWV3LW5leHRQcm9kdWN0cycpLmxlbmd0aCkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGNvbnRleHQudG9rZW47XG4gICAgICAgIGNvbnN0IGN1ckNvZGUgPSAkKCcuYm9keScpLmRhdGEoJ2N1cnJlbmN5LWNvZGUnKTtcbiAgICAgICAgdmFyIHByb2R1Y3RJZCA9ICQoJy5wcm9kdWN0Vmlldy1uZXh0UHJvZHVjdHMnKS5kYXRhKCdwcm9kdWN0LWlkJyksXG4gICAgICAgICAgICBuZXh0SWQgPSBwcm9kdWN0SWQgKyAxLFxuICAgICAgICAgICAgcHJldklkID0gcHJvZHVjdElkIC0gMSxcbiAgICAgICAgICAgIG5leHRMaW5rLCBwcmV2TGluaywgbGlzdDtcblxuICAgICAgICBjb25zdCAkcHJvZFdyYXAgPSAkKCcucHJvZHVjdFZpZXctbmV4dFByb2R1Y3RzIC5uZXh0LXByZXYtbW9kYWwnKSxcbiAgICAgICAgXHQkcHJvZEljb25zID0gJCgnLnByb2R1Y3RWaWV3LW5leHRQcm9kdWN0cyAubmV4dC1wcmV2LWljb25zJyk7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0UHJvZHVjdChhcnIpIHtcbiAgICAgICAgICByZXR1cm4gZmV0Y2goJy9ncmFwaHFsJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdG9rZW5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIHF1ZXJ5OiBgXG4gICAgICAgICAgICAgICAgcXVlcnkgTXlRdWVyeSB7XG4gICAgICAgICAgICAgICAgICAgIHNpdGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMgKGVudGl0eUlkczogW2ArYXJyK2BdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0OiBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeSAoY3VycmVuY3lDb2RlOiBgK2N1ckNvZGUrYCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sUGxhY2VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxUb2tlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZHNUb2tlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsUGxhY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZyYWdtZW50IFByb2R1Y3RGaWVsZHMgb24gUHJvZHVjdCB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgcGF0aFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nNzBweDogdXJsKHdpZHRoOiA3MClcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdFRleHRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwcmljZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VSYW5nZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXRhaWxQcmljZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VQcmljZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZyYWdtZW50IE1vbmV5RmllbGRzIG9uIE1vbmV5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lDb2RlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH0pLFxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYocHJldklkICE9IHVuZGVmaW5lZCAmJiBuZXh0SWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsaXN0ID0gW3ByZXZJZCwgbmV4dElkXTtcblxuICAgICAgICAgICAgZ2V0UHJvZHVjdChsaXN0KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHJlbmRlclByb2R1Y3QoZGF0YS5zaXRlLnByb2R1Y3RzLmVkZ2VzLCBkYXRhLnNpdGUuY3VycmVuY3kuZGlzcGxheSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGZvcm1hdE1vbmV5KG4sIGMsIGQsIHQpIHtcbiAgICAgICAgICAgIHZhciBjID0gaXNOYU4oYyA9IE1hdGguYWJzKGMpKSA/IDIgOiBjLFxuICAgICAgICAgICAgICAgIGQgPSBkID09IHVuZGVmaW5lZCA/IFwiLlwiIDogZCxcbiAgICAgICAgICAgICAgICB0ID0gdCA9PSB1bmRlZmluZWQgPyBcIixcIiA6IHQsXG4gICAgICAgICAgICAgICAgcyA9IG4gPCAwID8gXCItXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIGkgPSBTdHJpbmcocGFyc2VJbnQobiA9IE1hdGguYWJzKE51bWJlcihuKSB8fCAwKS50b0ZpeGVkKGMpKSksXG4gICAgICAgICAgICAgICAgaiA9IChqID0gaS5sZW5ndGgpID4gMyA/IGogJSAzIDogMDtcblxuICAgICAgICAgICAgcmV0dXJuIHMgKyAoaiA/IGkuc3Vic3RyKDAsIGopICsgdCA6IFwiXCIpICsgaS5zdWJzdHIoaikucmVwbGFjZSgvKFxcZHszfSkoPz1cXGQpL2csIFwiJDFcIiArIHQpICsgKGMgPyBkICsgTWF0aC5hYnMobiAtIGkpLnRvRml4ZWQoYykuc2xpY2UoMikgOiBcIlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlclByb2R1Y3QocHJvZHVjdCwgY3VyRGlzcGxheSkge1xuICAgICAgICAgICAgaWYgKHByb2R1Y3QgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgJC5lYWNoKHByb2R1Y3QsIChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZWxlbWVudC5wcm9kdWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sID0gY3VyRGlzcGxheS5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xQbGFjZW1lbnQgPSBjdXJEaXNwbGF5LnN5bWJvbFBsYWNlbWVudC50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFRva2VuID0gY3VyRGlzcGxheS5kZWNpbWFsVG9rZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsUGxhY2VzID0gY3VyRGlzcGxheS5kZWNpbWFsUGxhY2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRzVG9rZW4gPSBjdXJEaXNwbGF5LnRob3VzYW5kc1Rva2VuO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGl0bGUsIHByaWNlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb19jYXJkX3RpdGxlID09ICdlbGxpcHNpcycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlID0gJzxhIGhyZWY9XCInK2l0ZW0ucGF0aCsnXCIgY2xhc3M9XCJjYXJkLWVsbGlwc2lzXCIgc3R5bGU9XCItd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1wiPicraXRlbS5uYW1lKyc8L2E+JzsgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA9ICc8YSBocmVmPVwiJytpdGVtLnBhdGgrJ1wiPicraXRlbS5uYW1lKyc8L2E+JztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKCcuYm9keScpLmhhc0NsYXNzKCdpcy1sb2dpbicpIHx8IGNvbnRleHQudGhlbWVTZXR0aW5ncy5yZXN0cmljdF90b19sb2dpbiAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ucHJpY2VzLnByaWNlUmFuZ2UubWluLnZhbHVlIDwgaXRlbS5wcmljZXMucHJpY2VSYW5nZS5tYXgudmFsdWUgJiYgY29udGV4dC50aGVtZVNldHRpbmdzLnByaWNlX3Jhbmdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlTWluID0gKHN5bWJvbFBsYWNlbWVudCA9PSBcImxlZnRcIiA/IHN5bWJvbCA6IFwiXCIpICsgKGZvcm1hdE1vbmV5KGl0ZW0ucHJpY2VzLnByaWNlUmFuZ2UubWluLnZhbHVlLCBkZWNpbWFsUGxhY2VzLCBkZWNpbWFsVG9rZW4sIHRob3VzYW5kc1Rva2VuKSkgKyAoc3ltYm9sUGxhY2VtZW50ICE9IFwibGVmdFwiID8gc3ltYm9sIDogXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VNYXggPSAoc3ltYm9sUGxhY2VtZW50ID09IFwibGVmdFwiID8gc3ltYm9sIDogXCJcIikgKyAoZm9ybWF0TW9uZXkoaXRlbS5wcmljZXMucHJpY2VSYW5nZS5tYXgudmFsdWUsIGRlY2ltYWxQbGFjZXMsIGRlY2ltYWxUb2tlbiwgdGhvdXNhbmRzVG9rZW4pKSArIChzeW1ib2xQbGFjZW1lbnQgIT0gXCJsZWZ0XCIgPyBzeW1ib2wgOiBcIlwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlID0gJzxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXdpdGhvdXRUYXggbm9uLXNhbGUtcHJpY2UtLXdpdGhvdXRUYXggcHJpY2Utbm9uZVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLW5vbi1zYWxlXCI+PC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheFwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4PVwiXCIgY2xhc3M9XCJwcmljZSBwcmljZS0td2l0aG91dFRheFwiPicrcHJpY2VNaW4rJyAtICcrcHJpY2VNYXgrJzwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+JztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlRGVmID0gKHN5bWJvbFBsYWNlbWVudCA9PSBcImxlZnRcIiA/IHN5bWJvbCA6IFwiXCIpICsgKGZvcm1hdE1vbmV5KGl0ZW0ucHJpY2VzLnByaWNlLnZhbHVlLCBkZWNpbWFsUGxhY2VzLCBkZWNpbWFsVG9rZW4sIHRob3VzYW5kc1Rva2VuKSkgKyAoc3ltYm9sUGxhY2VtZW50ICE9IFwibGVmdFwiID8gc3ltYm9sIDogXCJcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5wcmljZXMucmV0YWlsUHJpY2UgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5wcmljZXMuYmFzZVByaWNlLnZhbHVlID4gaXRlbS5wcmljZXMucHJpY2UudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlQmFzID0gKHN5bWJvbFBsYWNlbWVudCA9PSBcImxlZnRcIiA/IHN5bWJvbCA6IFwiXCIpICsgKGZvcm1hdE1vbmV5KGl0ZW0ucHJpY2VzLmJhc2VQcmljZS52YWx1ZSwgZGVjaW1hbFBsYWNlcywgZGVjaW1hbFRva2VuLCB0aG91c2FuZHNUb2tlbikpICsgKHN5bWJvbFBsYWNlbWVudCAhPSBcImxlZnRcIiA/IHN5bWJvbCA6IFwiXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZSA9ICc8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4IG5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLW5vbi1zYWxlXCI+JytwcmljZUJhcysnPC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXdpdGhvdXRUYXhcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4PVwiXCIgY2xhc3M9XCJwcmljZSBwcmljZS0td2l0aG91dFRheFwiPicrcHJpY2VEZWYrJzwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSAnPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheCBub24tc2FsZS1wcmljZS0td2l0aG91dFRheCBwcmljZS1ub25lXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS1ub24tc2FsZVwiPjwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLXdpdGhvdXRUYXhcIj4nK3ByaWNlRGVmKyc8L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ucHJpY2VzLnJldGFpbFByaWNlLnZhbHVlID4gaXRlbS5wcmljZXMucHJpY2UudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlUmV0ID0gKHN5bWJvbFBsYWNlbWVudCA9PSBcImxlZnRcIiA/IHN5bWJvbCA6IFwiXCIpICsgKGZvcm1hdE1vbmV5KGl0ZW0ucHJpY2VzLnJldGFpbFByaWNlLnZhbHVlLCBkZWNpbWFsUGxhY2VzLCBkZWNpbWFsVG9rZW4sIHRob3VzYW5kc1Rva2VuKSkgKyAoc3ltYm9sUGxhY2VtZW50ICE9IFwibGVmdFwiID8gc3ltYm9sIDogXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSAnPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheCBub24tc2FsZS1wcmljZS0td2l0aG91dFRheFwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS1ub24tc2FsZVwiPicrcHJpY2VSZXQrJzwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLXdpdGhvdXRUYXhcIj4nK3ByaWNlRGVmKyc8L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlID0gJzxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXdpdGhvdXRUYXggbm9uLXNhbGUtcHJpY2UtLXdpdGhvdXRUYXggcHJpY2Utbm9uZVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4PVwiXCIgY2xhc3M9XCJwcmljZSBwcmljZS0tbm9uLXNhbGVcIj48L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheFwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS13aXRob3V0VGF4XCI+JytwcmljZURlZisnPC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZSA9ICc8cCB0cmFuc2xhdGU+TG9nIGluIGZvciBwcmljaW5nPC9wPic7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBodG1sX2NhcmQgPSAnPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1jdXN0b21cIiBkYXRhLXByb2R1Y3QtaWQ9XCInK2l0ZW0uZW50aXR5SWQrJ1wiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaW1hZ2VcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImNhcmQtbGlua1wiIGhyZWY9XCInK2l0ZW0ucGF0aCsnXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJytpdGVtLmRlZmF1bHRJbWFnZS5pbWc3MHB4KydcIiBhbHQ9XCInK2l0ZW0ubmFtZSsnXCIgdGl0bGU9XCInK2l0ZW0ubmFtZSsnXCIgLz5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+Jyt0aXRsZSsnPC9oND5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1wcmljZVwiIGRhdGEtdGVzdC1pbmZvLXR5cGU9XCJwcmljZVwiPicrcHJpY2UrJzwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZW50aXR5SWQgPT0gcHJldklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5wYXRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZEljb25zLmZpbmQoJy5wcmV2LWljb24nKS5hdHRyKCdocmVmJywgaXRlbS5wYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZEljb25zLmZpbmQoJy5wcmV2LWljb24nKS5yZW1vdmVDbGFzcygnZGlzYWJsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kV3JhcC5maW5kKCcjcHJldi1wcm9kdWN0LW1vZGFsJykuYXBwZW5kKGh0bWxfY2FyZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kSWNvbnMuZmluZCgnLnByZXYtaWNvbicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kV3JhcC5maW5kKCcjcHJldi1wcm9kdWN0LW1vZGFsJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZW50aXR5SWQgPT0gbmV4dElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpdGVtLnBhdGggIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RJY29ucy5maW5kKCcubmV4dC1pY29uJykuYXR0cignaHJlZicsIGl0ZW0ucGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RJY29ucy5maW5kKCcubmV4dC1pY29uJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZFdyYXAuZmluZCgnI25leHQtcHJvZHVjdC1tb2RhbCcpLmFwcGVuZChodG1sX2NhcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kSWNvbnMuZmluZCgnLm5leHQtaWNvbicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kV3JhcC5maW5kKCcjbmV4dC1wcm9kdWN0LW1vZGFsJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICRwcm9kSWNvbnMub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCl7XG4gICAgICAgIFx0JHByb2RXcmFwLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICRwcm9kV3JhcC5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5uZXh0LWljb24nLCAkcHJvZEljb25zKS5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oKXtcbiAgICAgICAgXHQkKCcjcHJldi1wcm9kdWN0LW1vZGFsJykucmVtb3ZlQ2xhc3MoJ2lzLXNob3cnKTtcbiAgICAgICAgXHQkKCcjbmV4dC1wcm9kdWN0LW1vZGFsJykuYWRkQ2xhc3MoJ2lzLXNob3cnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnByZXYtaWNvbicsICRwcm9kSWNvbnMpLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpe1xuICAgICAgICBcdCQoJyNuZXh0LXByb2R1Y3QtbW9kYWwnKS5yZW1vdmVDbGFzcygnaXMtc2hvdycpO1xuICAgICAgICBcdCQoJyNwcmV2LXByb2R1Y3QtbW9kYWwnKS5hZGRDbGFzcygnaXMtc2hvdycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkcHJvZFdyYXAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCl7XG4gICAgICAgIFx0JHByb2RXcmFwLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcbiAgICAgICAgXHQkcHJvZFdyYXAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0LCBlbCkge1xuICAgIHZhciAkcG9wdXAgPSAkKCcubG9va2Jvb2stcG9wdXAnKTtcbiAgICB2YXIgJGVsID0gZWw7XG5cbiAgICBjb25zdCAkb3B0aW9ucyA9IHtcbiAgICAgICAgdGVtcGxhdGU6ICdoYWxvdGhlbWVzL3Byb2R1Y3RzL2hhbG8tbG9va2Jvb2stdG1wJ1xuICAgIH07XG5cbiAgICAkZWwuZmluZCgnLml0ZW0gLml0ZW0tcG9pbnQnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICRwb3B1cC5yZW1vdmVDbGFzcygnaXMtb3BlbicpLmVtcHR5KCk7XG5cbiAgICAgICAgdmFyICRwcm9kSWQgPSAkKGV2ZW50LnRhcmdldCkuZGF0YSgncHJvZHVjdC1pZCcpLFxuICAgICAgICAgICAgcG9zaXRpb24gPSAkKGV2ZW50LnRhcmdldCkub2Zmc2V0KCksXG4gICAgICAgICAgICBjb250YWluZXIgPSAkZWwub2Zmc2V0KCk7XG5cbiAgICAgICAgaWYoJHByb2RJZCAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZCgkcHJvZElkLCAkb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJHBvcHVwLmh0bWwocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSA1NTEpIHtcbiAgICAgICAgICAgICAgICAkcG9wdXAuY3NzKHsndG9wJzogcG9zaXRpb24udG9wIC0gY29udGFpbmVyLnRvcCAtIDEwMCwgJ2xlZnQnOiBwb3NpdGlvbi5sZWZ0IC0gY29udGFpbmVyLmxlZnQgKyAzMH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkcG9wdXAuY3NzKHsndG9wJzogcG9zaXRpb24udG9wIC0gY29udGFpbmVyLnRvcCArIDE1LCAnbGVmdCc6IDE1fSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRwb3B1cC5hZGRDbGFzcyhcImlzLW9wZW5cIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2xvc2UtcHJvZHVjdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoJHBvcHVwLmhhc0NsYXNzKFwiaXMtb3BlblwiKSkge1xuICAgICAgICAgICAgJHBvcHVwLnJlbW92ZUNsYXNzKFwiaXMtb3BlblwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBpZigkcG9wdXAuaGFzQ2xhc3MoXCJpcy1vcGVuXCIpKSB7XG4gICAgICAgICAgICBpZigoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJHBvcHVwKS5sZW5ndGggPT09IDApICYmICgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLml0ZW0gLml0ZW0tcG9pbnQnKS5sZW5ndGggPT09IDApKSB7XG4gICAgICAgICAgICAgICAgJHBvcHVwLnJlbW92ZUNsYXNzKFwiaXMtb3BlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbi5kcm9wZG93bic7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMvc3JjL2xpYi9yZXF1ZXN0LmpzJztcbmltcG9ydCBtb2RhbEZhY3RvcnksIHsgc2hvd0FsZXJ0TW9kYWwsIE1vZGFsRXZlbnRzIH0gZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oJHNjb3BlLCBjb250ZXh0KSB7XG4gICAgdmFyIG9mZnNldFNjcm9sbCA9ICRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpLFxuICAgICAgICBzY3JvbGwgPSBvZmZzZXRTY3JvbGwub2Zmc2V0KCkudG9wICsgb2Zmc2V0U2Nyb2xsLm91dGVySGVpZ2h0KHRydWUpO1xuXG4gICAgY29uc3Qgc2hvd1ByaWNlID0gY29udGV4dC50aGVtZVNldHRpbmdzLnJlc3RyaWN0X3RvX2xvZ2luO1xuXG4gICAgY29uc3QgcHJldmlld01vZGFsID0gbW9kYWxGYWN0b3J5KCcjcHJldmlld01vZGFsJylbMF0sXG4gICAgICAgICRzdGlja3kgPSAkKCcuc3RpY2t5LWFkZC10by1jYXJ0JyksXG4gICAgICAgICRzdGlja3lDbG9zZSA9ICRzdGlja3kuZmluZCgnLnN0aWNreS1wcm9kdWN0LWNsb3NlJyksXG4gICAgICAgICRzdGlja3lFeHBhbmQgPSAkc3RpY2t5LmZpbmQoJy5zdGlja3ktcHJvZHVjdC1leHBhbmQnKSxcbiAgICAgICAgJHByb2RJZCA9ICRzdGlja3kuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZC0yXSBbbmFtZT1cInByb2R1Y3RfaWRcIl0nKS52YWwoKSxcbiAgICAgICAgJHByb2RQcmljZSA9ICRzdGlja3kuZmluZCgnLnN0aWNreS1wcmljZScpLFxuICAgICAgICAkcHJvZE9wdGlvbnMgPSAkc3RpY2t5LmZpbmQoJy5zdGlja3ktb3B0aW9ucycpLFxuICAgICAgICAkcHJvZE9wdGlvbkxhYmVsID0gJHByb2RPcHRpb25zLmZpbmQoJy5zdGlja3ktb3B0aW9ucy1sYWJlbCcpLFxuICAgICAgICAkcHJvZE9wdGlvbkRyb3Bkb3duID0gJHByb2RPcHRpb25zLmZpbmQoJy5zdGlja3ktb3B0aW9ucy1kcm9wZG93bicpLFxuICAgICAgICAkaW1hZ2VXcmFwcGVyID0gJHN0aWNreS5maW5kKCcuc3RpY2t5LWltYWdlJyksXG4gICAgICAgICRwcm9kQnRuID0gJHN0aWNreS5maW5kKCcuc3RpY2t5LWFjdGlvbnMgLmJ1dHRvbicpLFxuICAgICAgICAkcHJvZFdMQnRuID0gJHN0aWNreS5maW5kKCcuc3RpY2t5LXdpc2hsaXN0JyksXG4gICAgICAgIHdhaXRNZXNzYWdlID0gJHByb2RCdG4uZGF0YSgnd2FpdE1lc3NhZ2UnKSxcbiAgICAgICAgb3JpZ2luYWxCdG5WYWwgPSAkcHJvZEJ0bi50ZXh0KCksXG4gICAgICAgICRib2R5ID0gJCgnYm9keScpO1xuXG4gICAgZnVuY3Rpb24gbG9hZFN0aWNreSgpIHtcbiAgICAgICAgaWYoKGNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvX3N0aWNreV9hZGRfdG9fY2FydCA9PSB0cnVlKSAmJiAoJHN0aWNreS5sZW5ndGggPiAwKSl7XG4gICAgICAgICAgICBsb2FkT3B0aW9ucygpO1xuXG4gICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiBzY3JvbGwgKyAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkc3RpY2t5Lmhhc0NsYXNzKCdzaG93LXN0aWNreScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc3RpY2t5LmFkZENsYXNzKCdzaG93LXN0aWNreScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGJvZHkuaGFzQ2xhc3MoJ3BhZ2UtdHlwZS1wcm9kdWN0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYm9keS5hZGRDbGFzcygnb3BlblN0aWNreUFkZFRvQ2FydCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJHN0aWNreS5yZW1vdmVDbGFzcygnc2hvdy1zdGlja3kgaGlkZGVuLXN0aWNreSBzaG93LWZ1bGwtc3RpY2t5Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCRib2R5Lmhhc0NsYXNzKCdwYWdlLXR5cGUtcHJvZHVjdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkYm9keS5yZW1vdmVDbGFzcygnb3BlblN0aWNreUFkZFRvQ2FydCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICRwcm9kT3B0aW9uTGFiZWwub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICRwcm9kT3B0aW9uRHJvcGRvd24udG9nZ2xlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkcHJvZE9wdGlvbkRyb3Bkb3duLm9uKCdjbGljaycsICcub3B0aW9uLWl0ZW0nLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgdmFyICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEkdGFyZ2V0Lmhhc0NsYXNzKCdpcy1zZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3B0aW9uTGFiZWwgPSAkdGFyZ2V0LmZpbmQoJy5vcHRpb24taXRlbVdyYXBwZXInKS5odG1sKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25BdHRyID0gJHRhcmdldC5kYXRhKCd2YXJpYW50LWF0dHInKTtcblxuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKCRwcm9kSWQsIG9wdGlvbkF0dHIsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0QXR0cmlidXRlc0RhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVmlldyhwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAkcHJvZE9wdGlvbkRyb3Bkb3duLmZpbmQoJy5vcHRpb24taXRlbScpLnJlbW92ZUNsYXNzKCdpcy1zZWxlY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgJHRhcmdldC5hZGRDbGFzcygnaXMtc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICRwcm9kT3B0aW9uTGFiZWwuZmluZCgnLnRleHQnKS5odG1sKG9wdGlvbkxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgJHByb2RPcHRpb25Ecm9wZG93bi5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkc3RpY2t5Q2xvc2Uub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBpZigkc3RpY2t5Lmhhc0NsYXNzKCdzaG93LWZ1bGwtc3RpY2t5Jykpe1xuICAgICAgICAgICAgICAgICAgICAkc3RpY2t5LnJlbW92ZUNsYXNzKCdzaG93LWZ1bGwtc3RpY2t5Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICAkc3RpY2t5LmFkZENsYXNzKCdoaWRkZW4tc3RpY2t5Jyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoJGJvZHkuaGFzQ2xhc3MoJ3BhZ2UtdHlwZS1wcm9kdWN0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRib2R5LnJlbW92ZUNsYXNzKCdvcGVuU3RpY2t5QWRkVG9DYXJ0Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJHN0aWNreUV4cGFuZC5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICRzdGlja3kuYWRkQ2xhc3MoJ3Nob3ctZnVsbC1zdGlja3knKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkcHJvZEJ0bi5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIHZhciBhdHRyID0gJHByb2RCdG4uYXR0cignZGlzYWJsZWQyJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGF0dHIgIT09IHR5cGVvZiB1bmRlZmluZWQgJiYgYXR0ciAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvcm0gPSAkKCdmb3JtW2RhdGEtY2FydC1pdGVtLWFkZF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUhlaWdodCA9IGZvcm0ub2Zmc2V0KCkudG9wICsgZm9ybS5oZWlnaHQoKS8yO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKGhlaWdodCA+IGZvcm1IZWlnaHQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiBmb3JtLm9mZnNldCgpLnRvcCAtIDUwXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA3MDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICBhZGRUb0NhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJHByb2RXTEJ0bi5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIHZhciAkdGhpc193bCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCksXG4gICAgICAgICAgICAgICAgICAgIHVybF9hd2wgPSAkdGhpc193bC5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgICAgICAgICAkLnBvc3QodXJsX2F3bCkuZG9uZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsX2F3bDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCRwcm9kT3B0aW9uRHJvcGRvd24uaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcuc3RpY2t5LW9wdGlvbnMtZHJvcGRvd24nKS5sZW5ndGggPT09IDApICYmICgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLnN0aWNreS1vcHRpb25zLWxhYmVsJykubGVuZ3RoID09PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RPcHRpb25Ecm9wZG93bi5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9hZFN0aWNreSgpO1xuXG4gICAgZnVuY3Rpb24gbG9hZE9wdGlvbnMoKSB7XG4gICAgICAgIGlmICgkcHJvZE9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3Qgcm93cyA9IFtdLFxuICAgICAgICAgICAgICAgIHJvd0xpbWl0cyA9IFtdLFxuICAgICAgICAgICAgICAgIHJvd09iamVjdHMgPSBbXSxcbiAgICAgICAgICAgICAgICBuZXdPcHRpb25zID0gW107XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScsICRzY29wZSkuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSAkKGVsZW1lbnQpLmRhdGEoJ3Byb2R1Y3Qtb3B0aW9uLWlkJyksXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSAkKGVsZW1lbnQpLmRhdGEoJ3Byb2R1Y3QtYXR0cmlidXRlJyk7XG5cbiAgICAgICAgICAgICAgICBpZih0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnIHx8IHR5cGUgPT09ICdwcm9kdWN0LWxpc3QnIHx8IHR5cGUgPT09ICdkYXRlJyB8fCB0eXBlID09PSAnaW5wdXQtZmlsZScgfHwgdHlwZSA9PT0gJ2lucHV0LXRleHQnIHx8IHR5cGUgPT09ICdpbnB1dC1udW1iZXInIHx8IHR5cGUgPT09ICd0ZXh0YXJlYScpe31cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICByb3dzLnB1c2goMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fCB0eXBlID09PSAnc2V0LXJhZGlvJyB8fCB0eXBlID09PSAnc3dhdGNoJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93TGltaXRzLnB1c2goJChlbGVtZW50KS5maW5kKCcuZm9ybS1yYWRpbycpLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1zZWxlY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dMaW1pdHMucHVzaCgkKGVsZW1lbnQpLmZpbmQoJy5mb3JtLXNlbGVjdCBvcHRpb246bm90KDpmaXJzdC1jaGlsZCknKS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93T2JqZWN0ID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fCB0eXBlID09PSAnc2V0LXJhZGlvJyB8fCB0eXBlID09PSAnc3dhdGNoJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5maW5kKCcuZm9ybS1yYWRpbycpLmVhY2goKGluZGV4MiwgZWxlbWVudDIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dPYmplY3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlOiAkKGVsZW1lbnQyKS5hdHRyKCd2YWx1ZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVMYWJlbDogJChlbGVtZW50MikuYXR0cignbmFtZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiAkKGVsZW1lbnQyKS5hdHRyKCdkYXRhLXRpdGxlJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZUluZGV4OiAkKGVsZW1lbnQyKS5hdHRyKCdkYXRhLWluZGV4JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RvY2s6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZXRMYWJlbCA9ICQoZWxlbWVudCkuZmluZCgnLmZvcm0tc2VsZWN0JykuYXR0cignbmFtZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmZpbmQoJy5mb3JtLXNlbGVjdCBvcHRpb246bm90KDpmaXJzdC1jaGlsZCknKS5lYWNoKChpbmRleDIsIGVsZW1lbnQyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93T2JqZWN0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZTogJChlbGVtZW50MikuYXR0cigndmFsdWUnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTGFiZWw6IHNldExhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiAkKGVsZW1lbnQyKS5hdHRyKCdkYXRhLXRpdGxlJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZUluZGV4OiAkKGVsZW1lbnQyKS5hdHRyKCdkYXRhLWluZGV4JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RvY2s6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJvd09iamVjdHMucHVzaChyb3dPYmplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZXQgaXNOZXdPcHRpb25zUmVhZHkgPSBmYWxzZTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gZGVjcmVtZW50Um93cyhkTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVuSW5kZXggPSBkTGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICByb3dzW2N1cnJlbkluZGV4XSArPSAxO1xuXG4gICAgICAgICAgICAgICAgaWYgKChyb3dzW2N1cnJlbkluZGV4XSA8IHJvd0xpbWl0c1tjdXJyZW5JbmRleF0pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVuSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTmV3T3B0aW9uc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3NbY3VycmVuSW5kZXhdID0gMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjcmVtZW50Um93cyhjdXJyZW5JbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBjdXJyZW50T3B0aW9uSW5kZXggPSAwO1xuXG4gICAgICAgICAgICB3aGlsZSAoaXNOZXdPcHRpb25zUmVhZHkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbmV3T3B0aW9uc1tjdXJyZW50T3B0aW9uSW5kZXhdID0ge1xuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICcnLFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICByb3dzLmZvckVhY2goKHIsIHJJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBuZXdPcHRpb25zW2N1cnJlbnRPcHRpb25JbmRleF0uYXR0cmlidXRlcy5wdXNoKHJvd09iamVjdHNbckluZGV4XVtyXSk7XG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbnNbY3VycmVudE9wdGlvbkluZGV4XS5sYWJlbCArPSBgJHtyb3dPYmplY3RzW3JJbmRleF1bcl0uYXR0cmlidXRlTGFiZWx9IGA7XG4gICAgICAgICAgICAgICAgICAgIG5ld09wdGlvbnNbY3VycmVudE9wdGlvbkluZGV4XS5uYW1lICs9IGA8c3Bhbj4ke3Jvd09iamVjdHNbckluZGV4XVtyXS5hdHRyaWJ1dGVOYW1lfTwvc3Bhbj5gO1xuICAgICAgICAgICAgICAgICAgICBuZXdPcHRpb25zW2N1cnJlbnRPcHRpb25JbmRleF0ucG9zaXRpb24gKz0gYCR7cm93T2JqZWN0c1tySW5kZXhdW3JdLmF0dHJpYnV0ZUluZGV4fWA7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBkZWNyZW1lbnRSb3dzKHJvd3MubGVuZ3RoKTtcblxuICAgICAgICAgICAgICAgIGN1cnJlbnRPcHRpb25JbmRleCArPSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY3VycmVudE5ld09wdGlvbkluZGV4ID0gMDtcblxuICAgICAgICAgICAgbmV3T3B0aW9ucy5mb3JFYWNoKChuZXdPcHRpb24sIG5ld09wdGlvbkluZGV4LCBuZXdFbCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBhdHRyaWJ1dGVTdHJpbmcgPSAnJztcblxuICAgICAgICAgICAgICAgIG5ld09wdGlvbi5hdHRyaWJ1dGVzLmZvckVhY2goYXR0cmlidXRlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlU3RyaW5nID0gYXR0cmlidXRlU3RyaW5nICsgYCZhdHRyaWJ1dGVbJHthdHRyaWJ1dGUuYXR0cmlidXRlfV09YCArIGF0dHJpYnV0ZS5hdHRyaWJ1dGVWYWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnb3B0aW9uLWl0ZW0nLFxuICAgICAgICAgICAgICAgICAgICAnZGF0YS12YXJpYW50LWluZGV4JzogbmV3T3B0aW9uLnBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICAnZGF0YS12YXJpYW50LWF0dHInOiBhdHRyaWJ1dGVTdHJpbmdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJzxkaXYgY2xhc3M9XCJvcHRpb24taXRlbVdyYXBwZXJcIj4nK25ld09wdGlvbi5uYW1lKyc8L2Rpdj4nKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRUbygkcHJvZE9wdGlvbkRyb3Bkb3duKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVG9DYXJ0KCkge1xuICAgICAgICBjb25zdCAkZm9ybSA9ICQoJ1tkYXRhLWNhcnQtaXRlbS1hZGQtMl0nKTtcbiAgICAgICAgdmFyIHNrdSA9ICRmb3JtLmZpbmQoJy5zdGlja3ktYWN0aW9ucycpLmF0dHIoJ2RhdGEtcHJvZHVjdC1za3UtYWRkJyk7XG4gICAgICAgIHZhciBhdHQgPSAkZm9ybS5maW5kKCcub3B0aW9uLWl0ZW0uaXMtc2VsZWN0JykuZGF0YSgndmFyaWFudC1hdHRyJyk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2NhcnQvcHJldmlldydcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgdXJsO1xuXG4gICAgICAgIGlmIChza3UgIT0gdW5kZWZpbmVkICYmIHNrdSAhPSBudWxsICYmIHNrdSAhPSAnJykge1xuICAgICAgICAgICAgdXJsID0gYC9jYXJ0LnBocD9hY3Rpb249YWRkJnNrdT1gICsgc2t1ICsgYCZxdHk9MWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cmwgPSBgL2NhcnQucGhwP2FjdGlvbj1hZGQmcHJvZHVjdF9pZD1gICsgJHByb2RJZCArIGF0dDtcbiAgICAgICAgfVxuXG4gICAgICAgICRwcm9kQnRuXG4gICAgICAgICAgICAudGV4dCh3YWl0TWVzc2FnZSlcbiAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAgIHJlcXVlc3QoZW5jb2RlVVJJKHVybCksIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgcmVxdWVzdE9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycjtcblxuICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgICAgIHRtcC5pbm5lckhUTUwgPSBlcnJvck1lc3NhZ2U7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwodG1wLnRleHRDb250ZW50IHx8IHRtcC5pbm5lclRleHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkcHJvZEJ0blxuICAgICAgICAgICAgICAgIC50ZXh0KG9yaWdpbmFsQnRuVmFsKVxuICAgICAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcblxuICAgICAgICAgICAgaWYgKHByZXZpZXdNb2RhbCkge1xuICAgICAgICAgICAgICAgIGlmIChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb19hZGRfdG9fY2FydF9wb3B1cCA9PT0gJ25vcm1hbCcpe1xuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3TW9kYWwuJG1vZGFsLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoJ21vZGFsIG1vZGFsLS1wcmV2aWV3Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXdNb2RhbC5vcGVuKHsgc2l6ZTogJ2xhcmdlJyB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvX2FkZF90b19jYXJ0X3BvcHVwID09PSAnbWluaScpe1xuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3TW9kYWwuJG1vZGFsLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoJ21vZGFsIG1vZGFsLS1wcmV2aWV3IG1vZGFsLS1wcmV2aWV3TWluaScpO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3TW9kYWwub3Blbih7IHNpemU6ICdzbWFsbCcgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoJChcIi5tb2RhbC1iYWNrZ3JvdW5kOnZpc2libGVcIikubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcubW9kYWwtYmFja2dyb3VuZDp2aXNpYmxlJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdXBkYXRlQ2FydENvbnRlbnQocHJldmlld01vZGFsLCByZXNwb25zZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlZGlyZWN0VG8ocmVzcG9uc2UuZGF0YS5jYXJ0X2l0ZW0uY2FydF91cmwgfHwgY29udGV4dC51cmxzLmNhcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWRpcmVjdFRvKHVybCkge1xuICAgICAgICBpZiAodGhpcy5pc1J1bm5pbmdJbklmcmFtZSgpICYmICF3aW5kb3cuaWZyYW1lU2RrKSB7XG4gICAgICAgICAgICB3aW5kb3cudG9wLmxvY2F0aW9uID0gdXJsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdXJsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ2FydENvbnRlbnQobW9kYWwsIHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IHF1YW50aXR5ID0gcGFyc2VJbnQoJGJvZHkuZmluZCgnLmNhcnREZXNrdG9wIC5jYXJ0LXF1YW50aXR5JykudGV4dCgpKSArIDE7XG5cbiAgICAgICAgJGJvZHkudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XG5cbiAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1ZhcmlhbnRJbWFnZShpbWFnZSkge1xuICAgICAgICBpZiAoXy5pc1BsYWluT2JqZWN0KGltYWdlKSkge1xuICAgICAgICAgICAgY29uc3QgbWFpbkltYWdlVXJsID0gdXRpbHMudG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KFxuICAgICAgICAgICAgICAgIGltYWdlLmRhdGEsIHsgJzF4JzogY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3RnYWxsZXJ5X3NpemUgfSxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHJldHVybiBtYWluSW1hZ2VVcmw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVWaWV3KGRhdGEpe1xuICAgICAgICB2YXIgaW5TdG9jayA9IGRhdGEuaW5zdG9jayxcbiAgICAgICAgICAgIGltYWdlID0gZGF0YS5pbWFnZSxcbiAgICAgICAgICAgIHNrdSA9IGRhdGEuc2t1LFxuICAgICAgICAgICAgcHJpY2UgPSBkYXRhLnByaWNlO1xuXG4gICAgICAgIGlmKGluU3RvY2spe1xuICAgICAgICAgICAgJHByb2RCdG4uYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkcHJvZE9wdGlvbkxhYmVsLnJlbW92ZUNsYXNzKCdvcHRpb24taGlkZGVuJykuYWRkQ2xhc3MoJ29wdGlvbi12aXNpYmxlJyk7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICRwcm9kQnRuLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAkcHJvZE9wdGlvbkxhYmVsLnJlbW92ZUNsYXNzKCdvcHRpb24tdmlzaWJsZScpLmFkZENsYXNzKCdvcHRpb24taGlkZGVuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW1hZ2UgIT0gdW5kZWZpbmVkICYmIGltYWdlICE9PSBudWxsICYmIGltYWdlICE9PSAnJykge1xuICAgICAgICAgICAgJGltYWdlV3JhcHBlci5maW5kKCdpbWcnKS5hdHRyKCdzcmNzZXQnLCBzaG93VmFyaWFudEltYWdlKGltYWdlKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2t1KSB7XG4gICAgICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXNrdS1hZGRdJykuYXR0cignZGF0YS1wcm9kdWN0LXNrdS1hZGQnLCBza3UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uaXNPYmplY3QocHJpY2UpKSB7XG4gICAgICAgICAgICB1cGRhdGVQcmljZVZpZXcocHJpY2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlUHJpY2VWaWV3KHByaWNlKXtcbiAgICAgICAgaWYgKHByaWNlLndpdGhfdGF4KSB7XG4gICAgICAgICAgICAkKCcucHJpY2UtbGFiZWwnLCAkcHJvZFByaWNlKS5zaG93KCk7XG4gICAgICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGgtdGF4XScsICRwcm9kUHJpY2UpLmh0bWwocHJpY2Uud2l0aF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS53aXRob3V0X3RheCkge1xuICAgICAgICAgICAgJCgnLnByaWNlLWxhYmVsJywgJHByb2RQcmljZSkuc2hvdygpO1xuICAgICAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheF0nLCAkcHJvZFByaWNlKS5odG1sKHByaWNlLndpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICAkKCcucnJwLXByaWNlLS13aXRoVGF4JywgJHByb2RQcmljZSkuc2hvdygpO1xuICAgICAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1ycnAtd2l0aC10YXhdJywgJHByb2RQcmljZSkuaHRtbChwcmljZS5ycnBfd2l0aF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgICQoJy5ycnAtcHJpY2UtLXdpdGhvdXRUYXgnLCAkcHJvZFByaWNlKS5zaG93KCk7XG4gICAgICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJycC1wcmljZS13aXRob3V0LXRheF0nLCAkcHJvZFByaWNlKS5odG1sKHByaWNlLnJycF93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLnNhdmVkKSB7XG4gICAgICAgICAgICAkKCcucHJpY2Utc2VjdGlvbi0tc2F2aW5nJywgJHByb2RQcmljZSkuc2hvdygpO1xuICAgICAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1wcmljZS1zYXZlZF0nLCAkcHJvZFByaWNlKS5odG1sKHByaWNlLnNhdmVkLmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgpIHtcbiAgICAgICAgICAgICQoJy5wcmljZS1sYWJlbCcsICRwcm9kUHJpY2UpLmhpZGUoKTtcbiAgICAgICAgICAgICQoJy5ub24tc2FsZS1wcmljZS0td2l0aFRheCcsICRwcm9kUHJpY2UpLnNob3coKTtcbiAgICAgICAgICAgICQoJy5wcmljZS1ub3ctbGFiZWwnLCAkcHJvZFByaWNlKS5zaG93KCk7XG4gICAgICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGgtdGF4XScsICRwcm9kUHJpY2UpLmh0bWwocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheCkge1xuICAgICAgICAgICAgJCgnLnByaWNlLWxhYmVsJywgJHByb2RQcmljZSkuaGlkZSgpO1xuICAgICAgICAgICAgJCgnLm5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4JywgJHByb2RQcmljZSkuc2hvdygpO1xuICAgICAgICAgICAgJCgnLnByaWNlLW5vdy1sYWJlbCcsICRwcm9kUHJpY2UpLnNob3coKTtcbiAgICAgICAgICAgICQoJ1tkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aG91dC10YXhdJywgJHByb2RQcmljZSkuaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCgnLnN0aWNreS1hZGQtdG8tY2FydCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiBzY3JvbGwgLSAxNjApIHtcbiAgICAgICAgICAgICAgICBpZiAoISQoJy5zdGlja3ktYWRkLXRvLWNhcnQnKS5oYXNDbGFzcygnc2hvdy1zdGlja3knKSkge1xuICAgICAgICAgICAgICAgICAgICAkKCcuc3RpY2t5LWFkZC10by1jYXJ0JykuYWRkQ2xhc3MoJ3Nob3ctc3RpY2t5Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcygncGFnZS10eXBlLXByb2R1Y3QnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdvcGVuU3RpY2t5QWRkVG9DYXJ0Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKlxuIEltcG9ydCBhbGwgcHJvZHVjdCBzcGVjaWZpYyBqc1xuICovXG5pbXBvcnQgU29ydGFibGUgZnJvbSAnc29ydGFibGVqcyc7XG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IFJldmlldyBmcm9tICcuL3Byb2R1Y3QvcmV2aWV3cyc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tICcuL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMnO1xuaW1wb3J0IHZpZGVvR2FsbGVyeSBmcm9tICcuL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeSc7XG5pbXBvcnQgeyBjbGFzc2lmeUZvcm0gfSBmcm9tICcuL2NvbW1vbi9mb3JtLXV0aWxzJztcbmltcG9ydCBoYWxvQWRkT3B0aW9uIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdENhcmQnO1xuaW1wb3J0IGhhbG9Qcm9kdWN0TG9va2Jvb2sgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9Qcm9kdWN0TG9va2Jvb2snO1xuaW1wb3J0IGhhbG9CdW5kbGVQcm9kdWN0cyBmcm9tICcuL2hhbG90aGVtZXMvaGFsb0J1bmRsZVByb2R1Y3RzJztcbmltcG9ydCBoYWxvTmV4dFByb2R1Y3RzIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvTmV4dFByb2R1Y3RzJztcbmltcG9ydCBoYWxvU3RpY2t5QWRkVG9DYXJ0IGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvU3RpY2t5QWRkVG9DYXJ0JztcbmltcG9ydCBoYWxvWW91dHViZUNhcm91c2VsIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvVmlkZW8nO1xuaW1wb3J0IGhhbG9Ob3RpZnlNZSBmcm9tICcuL2hhbG90aGVtZXMvaGFsb05vdGlmeU1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB0aGlzLiRyZXZpZXdMaW5rID0gJCgnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtcmV2aWV3LWZvcm1cIl0nKTtcbiAgICAgICAgdGhpcy4kYnVsa1ByaWNpbmdMaW5rID0gJCgnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtYnVsay1wcmljaW5nXCJdJyk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgLy8gTGlzdGVuIGZvciBmb3VuZGF0aW9uIG1vZGFsIGNsb3NlIGV2ZW50cyB0byBzYW5pdGl6ZSBVUkwgYWZ0ZXIgcmV2aWV3LlxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xvc2UuZm5kdG4ucmV2ZWFsJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyN3cml0ZV9yZXZpZXcnKSAhPT0gLTEgJiYgdHlwZW9mIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBkb2N1bWVudC50aXRsZSwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHZhbGlkYXRvcjtcblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMgPSBuZXcgUHJvZHVjdERldGFpbHMoJCgnLnByb2R1Y3RWaWV3JyksIHRoaXMuY29udGV4dCwgd2luZG93LkJDRGF0YS5wcm9kdWN0X2F0dHJpYnV0ZXMpO1xuICAgICAgICB0aGlzLnByb2R1Y3REZXRhaWxzLnNldFByb2R1Y3RWYXJpYW50KCk7XG5cbiAgICAgICAgdmlkZW9HYWxsZXJ5KCk7XG5cbiAgICAgICAgY29uc3QgJHJldmlld0Zvcm0gPSBjbGFzc2lmeUZvcm0oJy53cml0ZVJldmlldy1mb3JtJyk7XG4gICAgICAgIGNvbnN0IHJldmlldyA9IG5ldyBSZXZpZXcoJHJldmlld0Zvcm0pO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtcmV2aWV3LWZvcm1cIl0nLCAoKSA9PiB7XG4gICAgICAgICAgICB2YWxpZGF0b3IgPSByZXZpZXcucmVnaXN0ZXJWYWxpZGF0aW9uKHRoaXMuY29udGV4dCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRyZXZpZXdGb3JtLm9uKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICBcblxuICAgICAgICB0aGlzLnByb2R1Y3RSZXZpZXdIYW5kbGVyKCk7XG4gICAgICAgIHRoaXMuYnVsa1ByaWNpbmdIYW5kbGVyKCk7XG4gICAgICAgIHRoaXMucHJvZHVjdEN1c3RvbVRhYigpO1xuICAgICAgICAvLyB0aGlzLnByb2R1Y3RUYWJUb2dnbGUoKTtcbiAgICAgICAgdGhpcy5jb21wYXJlQ29sb3JzKCk7XG4gICAgICAgIHRoaXMucHJvZHVjdFZpZXdJbmZvVGFicygpO1xuICAgICAgICB0aGlzLnNvbGRQcm9kdWN0KCQoJy5wcm9kdWN0Vmlldy1zb2xkUHJvZHVjdCcpKTtcbiAgICAgICAgdGhpcy52aWV3aW5nUHJvZHVjdCgkKCcucHJvZHVjdFZpZXctVmlld2luZ1Byb2R1Y3QnKSk7XG4gICAgICAgIHRoaXMuY291bnREb3duUHJvZHVjdCgkKCcucHJvZHVjdFZpZXctY291bnREb3duJykpO1xuICAgICAgICB0aGlzLmxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZCgpO1xuICAgICAgICB0aGlzLnJldmlld1Nob3coKVxuICAgICAgICBcbiAgICAgICAgaGFsb05leHRQcm9kdWN0cyh0aGlzLmNvbnRleHQpO1xuICAgICAgICBoYWxvU3RpY2t5QWRkVG9DYXJ0KCQoJy5wcm9kdWN0VmlldycpLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICBoYWxvUHJvZHVjdExvb2tib29rKHRoaXMuY29udGV4dCwgJCgnLnByb2R1Y3RWaWV3LWxvb2tib29rJykpO1xuICAgICAgICBoYWxvQnVuZGxlUHJvZHVjdHMoJCgnLnByb2R1Y3RWaWV3LXNsaWNrJyksIHRoaXMuY29udGV4dCk7XG4gICAgICAgIGhhbG9Ob3RpZnlNZSgkKCcucHJvZHVjdFZpZXctc2xpY2snKSwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgaGFsb1lvdXR1YmVDYXJvdXNlbCgkKCcucHJvZHVjdFZpZXctc2xpY2sgW2RhdGEtc2xpY2tdJykpO1xuICAgIH1cblxuICAgIHByb2R1Y3RSZXZpZXdIYW5kbGVyKCkge1xuICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI3dyaXRlX3JldmlldycpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy4kcmV2aWV3TGluay50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnVsa1ByaWNpbmdIYW5kbGVyKCkge1xuICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI2J1bGtfcHJpY2luZycpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy4kYnVsa1ByaWNpbmdMaW5rLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV2aWV3U2hvdyh4KSB7XG4gICAgICAgIHZhciBsaW1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXZpZXdDYXJkMScpO1xuXG4gICAgICAgIGxldCByZXZpZXcyID0gW11cbiAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL3d3dy50ZWFtZGVzay5uZXQvc2VjdXJlL2FwaS92Mi81NjU1NC9CRUEyNTY2NTkwRUY0RDE0QUE4RDM1QUQwRTJDRUE3Ny9SZXZpZXcvc2VsZWN0Lmpzb25cIikudGhlbihyID0+IHIuanNvbigpKS50aGVuKHI9PntcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzIucHVzaCguLi5yKX0pLFxuICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL3d3dy50ZWFtZGVzay5uZXQvc2VjdXJlL2FwaS92Mi81NjU1NC9CRUEyNTY2NTkwRUY0RDE0QUE4RDM1QUQwRTJDRUE3Ny9SZXZpZXcvc2VsZWN0Lmpzb24/c2tpcD01MDBcIikudGhlbihyID0+IHIuanNvbigpKS50aGVuKHI9PntcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzIucHVzaCguLi5yKX0pLFxuICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL3d3dy50ZWFtZGVzay5uZXQvc2VjdXJlL2FwaS92Mi81NjU1NC9CRUEyNTY2NTkwRUY0RDE0QUE4RDM1QUQwRTJDRUE3Ny9SZXZpZXcvc2VsZWN0Lmpzb24/c2tpcD0xMDAwXCIpLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihyPT57XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcbiAgICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly93d3cudGVhbWRlc2submV0L3NlY3VyZS9hcGkvdjIvNTY1NTQvQkVBMjU2NjU5MEVGNEQxNEFBOEQzNUFEMEUyQ0VBNzcvUmV2aWV3L3NlbGVjdC5qc29uP3NraXA9MTUwMFwiKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocj0+e1xuICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3Mi5wdXNoKC4uLnIpfSksXG4gICAgICAgICAgXSlcbiAgICAgICAgICAudGhlbigocikgPT4ge1xuICAgICAgICAgICAgbGltaXQuZm9yRWFjaCgoaXRlbTEpID0+IHtcbiAgICAgICAgICAgICAgICAkKGl0ZW0xLm5leHRFbGVtZW50U2libGluZykuZW1wdHkoKVxuXG4gICAgICAgICAgICAgICAgbGV0IHJldmlldzMgPSBbXVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHZpZHUgPSByZXZpZXcyLmZpbHRlcihpdGVtID0+IGl0ZW1bJ1Byb2R1Y3QgU0tVJ10gPT09IGl0ZW0xLmlubmVySFRNTClcbiAgICAgICAgICAgICAgICB2aWR1LmZvckVhY2goKGdva3UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV2aWV3My5wdXNoKGdva3VbJ1JldmlldyByYXRlJ10pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBjb25zdCByZXZpZXdBdmcgPSBNYXRoLnJvdW5kKChyZXZpZXczLnJlZHVjZSgoYSxiICkgPT4gYSsgYiwgMCkvcmV2aWV3My5sZW5ndGgpICogMTApLzEwXG5cbiAgICAgICAgICAgICAgICAkKGl0ZW0xLm5leHRFbGVtZW50U2libGluZykuYXBwZW5kKGBcbiAgICAgICAgICAgICAgICA8c3R5bGU+ICAgIC5jaGVja2VkIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDIxMCwgMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mYS1zdGFyLW8ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyMTAsIDApO1xuICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgIC5wcm9kdWN0UmV2aWV3MiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAgICAgICAgICAgICAgIC5wcm9kdWN0UmV2aWV3MiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHVuc2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcbiAgICAgICAgICAgICAgICAucHJvZHVjdFJldmlldzIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG48bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygwLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygxLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygyLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygzLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKyg0LjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj4gICAgICBcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9cGFkZGluZy1sZWZ0OjVweDs+XG4gICAgICAgICAgICAgICAgJHtyZXZpZXczLmxlbmd0aH0gQ29tbWVudGFpcmVzXG4gICAgICAgICAgICA8L2Rpdj5gKVxuICAgICAgICAgICAgICAgIC8vICQoaXRlbTEubmV4dEVsZW1lbnRTaWJsaW5nKS5hcHBlbmQoYDxkaXY+JHtyZXZpZXdBdmd9PC9kaXY+YClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICB9XG4gICAgcHJvZHVjdEN1c3RvbVRhYigpe1xuICAgICAgICBpZigkKCcucHJvZHVjdFZpZXctZGVzY3JpcHRpb24gW2RhdGEtY3VzdG9tLXRhYl0nKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICQoJy5wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbiBbZGF0YS1jdXN0b20tdGFiXScpLmFwcGVuZFRvKCcjaGFsby1jdXN0b20tdGFiIC5jYXJkLWJvZHknKTtcbiAgICAgICAgICAgICQoJyNoYWxvLWN1c3RvbS10YWInKS5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgJCgnLnByb2R1Y3RWaWV3LXNob3J0RGVzYyBbZGF0YS1jdXN0b20tdGFiXScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgJCgnI2hhbG8tcHJvZHVjdFZpZXctZGVzY3JpcHRpb24gLnByb2R1Y3RWaWV3LXRhYnMgLmNhcmQtYm9keScpLmFkZENsYXNzKCdoYXMtY3VzdG9tVGFiJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcjaGFsby1wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbiAucHJvZHVjdFZpZXctdGFicyAuY2FyZC53YXJyYW50eSAudGl0bGUnKS5hZGRDbGFzcygnbm8tY3VzdG9tVGFiJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBwcm9kdWN0VGFiVG9nZ2xlKCl7XG4gICAgLy8gICAgICQoJy5wcm9kdWN0Vmlldy10YWJzIC5jYXJkIC50aXRsZScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAvLyAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyAgICAgICAgIHZhciAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgIC8vICAgICAgICAgJCgnLnByb2R1Y3RWaWV3LXRhYnMgLmNhcmQgLnRpdGxlJykubm90KCR0YXJnZXQpLnJlbW92ZUNsYXNzKCdjb2xsYXBzZWQnKTtcblxuICAgIC8vICAgICAgICAgaWYoJHRhcmdldC5oYXNDbGFzcygnY29sbGFwc2VkJykpe1xuICAgIC8vICAgICAgICAgICAgICR0YXJnZXQucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNlZCcpO1xuICAgIC8vICAgICAgICAgfSBlbHNle1xuICAgIC8vICAgICAgICAgICAgICR0YXJnZXQuYWRkQ2xhc3MoJ2NvbGxhcHNlZCcpO1xuICAgIC8vICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICAkKCcucHJvZHVjdFZpZXctdGFicyAuY2FyZCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PntcbiAgICAvLyAgICAgICAgICAgICBpZigkKCcudGl0bGUnLCBlbGVtZW50KS5oYXNDbGFzcygnY29sbGFwc2VkJykpe1xuICAgIC8vICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmZpbmQoJy5jb2xsYXBzZScpLnNsaWRlRG93bihcInNsb3dcIik7XG4gICAgLy8gICAgICAgICAgICAgfSBlbHNle1xuICAgIC8vICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmZpbmQoJy5jb2xsYXBzZScpLnNsaWRlVXAoXCJzbG93XCIpO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICB9KTtcblxuICAgIC8vICAgICAkKCcucHJvZHVjdFZpZXctdGFicyAuY2FyZDpudGgtY2hpbGQoMSkgLnRpdGxlJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAvLyB9XG5cbiAgICBzb2xkUHJvZHVjdCgkd3JhcHBlcikge1xuICAgICAgICBpZigkd3JhcHBlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgbnVtYmVyc1Byb2R1Y3RfdGV4dCA9IHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3Rfc29sZFByb2R1Y3RfcHJvZHVjdHMsXG4gICAgICAgICAgICAgICAgbnVtYmVyc0hvdXJzX3RleHQgPSB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0X3NvbGRQcm9kdWN0X2hvdXJzLFxuICAgICAgICAgICAgICAgIHNvbGRQcm9kdWN0VGV4dCA9IHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3Rfc29sZFByb2R1Y3RfdGV4dCxcbiAgICAgICAgICAgICAgICBzb2xkUHJvZHVjdFRleHQyID0gdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF9zb2xkUHJvZHVjdF9ob3Vyc190ZXh0O1xuXG4gICAgICAgICAgICB2YXIgbnVtYmVyc1Byb2R1Y3RMaXN0ID0gIEpTT04ucGFyc2UoXCJbXCIgKyBudW1iZXJzUHJvZHVjdF90ZXh0ICsgXCJdXCIpLCBcbiAgICAgICAgICAgICAgICBudW1iZXJzUHJvZHVjdEl0ZW0gPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKm51bWJlcnNQcm9kdWN0TGlzdC5sZW5ndGgpKSxcbiAgICAgICAgICAgICAgICBudW1iZXJzSG91cnNMaXN0ID0gIEpTT04ucGFyc2UoXCJbXCIgKyBudW1iZXJzSG91cnNfdGV4dCArIFwiXVwiKSxcbiAgICAgICAgICAgICAgICBudW1iZXJzSG91cnNJdGVtID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpudW1iZXJzSG91cnNMaXN0Lmxlbmd0aCkpO1xuICAgICAgICAgXG4gICAgICAgICAgICAkd3JhcHBlci5odG1sKCc8c3ZnIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWZpcmVcIi8+PC9zdmc+PHNwYW4gY2xhc3M9XCJ0ZXh0XCI+JyArIG51bWJlcnNQcm9kdWN0TGlzdFtudW1iZXJzUHJvZHVjdEl0ZW1dICsgXCIgXCIgKyBzb2xkUHJvZHVjdFRleHQgKyBcIiBcIiArIG51bWJlcnNIb3Vyc0xpc3RbbnVtYmVyc0hvdXJzSXRlbV0gKyBcIiBcIiArIHNvbGRQcm9kdWN0VGV4dDIgKyAnPC9zcGFuPicpO1xuICAgICAgICAgICAgJHdyYXBwZXIuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY291bnREb3duUHJvZHVjdCgkd3JhcHBlcikge1xuICAgICAgICBpZigkd3JhcHBlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgY291bnREb3duID0gJHdyYXBwZXIuZGF0YSgnY291bnRkb3duJyksXG4gICAgICAgICAgICAgICAgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKGNvdW50RG93bikuZ2V0VGltZSgpLFxuICAgICAgICAgICAgICAgIHNlZnQgPSAkd3JhcHBlcjtcblxuICAgICAgICAgICAgdmFyIGNvdW50ZG93bmZ1bmN0aW9uID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRkb3duZnVuY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICBzZWZ0LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBob3VycyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ckNvdW50RG93biA9ICc8c3ZnIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWJlbGxcIi8+PC9zdmc+PHNwYW4gY2xhc3M9XCJ0ZXh0XCI+PHNwYW4+TGltaXRlZCB0aW1lIG9mZmVyLCBlbmQgaW46PC9zcGFuPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJudW1cIj4nK2RheXMrJ2QgOjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJudW1cIj4nK2hvdXJzKydoIDo8L3NwYW4+IDxzcGFuIGNsYXNzPVwibnVtXCI+JyttaW51dGVzKydtIDo8L3NwYW4+IDxzcGFuIGNsYXNzPVwibnVtXCI+JytzZWNvbmRzKydzPC9zcGFuPic7XG5cbiAgICAgICAgICAgICAgICAgICAgc2VmdC5odG1sKHN0ckNvdW50RG93bik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2aWV3aW5nUHJvZHVjdCgkd3JhcHBlcikge1xuICAgICAgICBpZigkd3JhcHBlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgdmlld2VyVGV4dCA9IHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3Rfdmlld2luZ1Byb2R1Y3RfdGV4dCxcbiAgICAgICAgICAgICAgICBudW1iZXJzVmlld2VyX3RleHQgPSB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0X3ZpZXdpbmdQcm9kdWN0X3ZpZXdlcixcbiAgICAgICAgICAgICAgICBudW1iZXJzVmlld2VyTGlzdCA9ICBKU09OLnBhcnNlKFwiW1wiICsgbnVtYmVyc1ZpZXdlcl90ZXh0ICsgXCJdXCIpOyBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIG51bWJlcnNWaWV3ZXJJdGVtID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpudW1iZXJzVmlld2VyTGlzdC5sZW5ndGgpKTtcblxuICAgICAgICAgICAgICAgICR3cmFwcGVyLmh0bWwoJzxzdmcgY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHVzZSB4bGluazpocmVmPVwiI2ljb24tZXllXCIvPjwvc3ZnPicgKyBudW1iZXJzVmlld2VyTGlzdFtudW1iZXJzVmlld2VySXRlbV0gKyBcIiBcIiArIHZpZXdlclRleHQpO1xuICAgICAgICAgICAgICAgICR3cmFwcGVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jykuc2hvdygpO1xuICAgICAgICAgICAgfSwgMTAwMDApOyAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wYXJlQ29sb3JzKCl7XG4gICAgICAgIGNvbnN0ICRzd2F0Y2hXcmFwcGVyID0gJCgnLmhhbG8tY29tcGFyZUNvbG9ycy1zd2F0Y2gnKSxcbiAgICAgICAgICAgICRpbWFnZVdyYXBwZXIgPSAkKCcuaGFsby1jb21wYXJlQ29sb3JzLWltYWdlJyksXG4gICAgICAgICAgICAkdGV4dFdyYXBwZXIgPSAkKCcuaGFsby1jb21wYXJlQ29sb3JzLXRleHQnKTtcblxuICAgICAgICAkKCcuZm9ybS1vcHRpb24nLCAkc3dhdGNoV3JhcHBlcikub24oJ2NsaWNrJywgIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgICAgICR0aGlzLnRvZ2dsZUNsYXNzKCdzaG93LWNvbG9yJyk7XG5cbiAgICAgICAgICAgIHZhciB0aXRsZSA9ICR0aGlzLmZpbmQoJy5mb3JtLW9wdGlvbi12YXJpYW50JykuYXR0cigndGl0bGUnKSxcbiAgICAgICAgICAgICAgICBpZCA9ICR0aGlzLmRhdGEoJ3Byb2R1Y3Qtc3dhdGNoLXZhbHVlJyksXG4gICAgICAgICAgICAgICAgJGNvbG9yLCAkY29sb3IyLCAkY29sb3IzLCAkaW1nLCAkcGF0dGVybjtcblxuICAgICAgICAgICAgaWYgKCR0aGlzLmhhc0NsYXNzKCdzaG93LWNvbG9yJykpe1xuICAgICAgICAgICAgICAgIGlmKCR0aGlzLmZpbmQoJy5mb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcicpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICRjb2xvciA9ICR0aGlzLmZpbmQoJy5mb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcicpLmF0dHIoJ3N0eWxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgJGltYWdlV3JhcHBlci5hcHBlbmQoJzxkaXYgY2xhc3M9XCJpdGVtIGl0ZW0tY29sb3IgaXRlbS0nK2lkKydcIj48c3BhbiBjbGFzcz1cImNvbG9yXCIgc3R5bGU9XCInKyRjb2xvcisnO1wiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInRpdGxlXCI+Jyt0aXRsZSsnPC9zcGFuPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZigkdGhpcy5maW5kKCcuZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IyJykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgJGNvbG9yID0gJHRoaXMuZmluZCgnLmZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yMiBzcGFuOm50aC1jaGlsZCgxKScpLmF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgICRjb2xvcjIgPSAkdGhpcy5maW5kKCcuZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IyIHNwYW46bnRoLWNoaWxkKDIpJykuYXR0cignc3R5bGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAkKCcuaGFsby1jb21wYXJlQ29sb3JzLWltYWdlJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiaXRlbSBpdGVtLWNvbG9yIGl0ZW0tJytpZCsnXCI+PHNwYW4gY2xhc3M9XCJjb2xvciBjb2xvcjJcIj48c3BhbiBzdHlsZT1cIicrJGNvbG9yKyc7XCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiJyskY29sb3IyKyc7XCI+PC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cInRpdGxlXCI+Jyt0aXRsZSsnPC9zcGFuPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZigkdGhpcy5maW5kKCcuZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IzJykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgJGNvbG9yID0gICR0aGlzLmZpbmQoJy5mb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcjMgc3BhbjpudGgtY2hpbGQoMSknKS5hdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICAkY29sb3IyID0gICR0aGlzLmZpbmQoJy5mb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcjMgc3BhbjpudGgtY2hpbGQoMiknKS5hdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICAkY29sb3IzID0gICR0aGlzLmZpbmQoJy5mb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcjMgc3BhbjpudGgtY2hpbGQoMyknKS5hdHRyKCdzdHlsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICRpbWFnZVdyYXBwZXIuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiaXRlbSBpdGVtLWNvbG9yIGl0ZW0tJytpZCsnXCI+PHNwYW4gY2xhc3M9XCJjb2xvciBjb2xvcjNcIj48c3BhbiBzdHlsZT1cIicrJGNvbG9yKyc7XCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiJyskY29sb3IyKyc7XCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiJyskY29sb3IzKyc7XCI+PC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cInRpdGxlXCI+Jyt0aXRsZSsnPC9zcGFuPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZigkdGhpcy5maW5kKCcuZm9ybS1vcHRpb24tdmFyaWFudC0tcGF0dGVybicpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICRpbWcgPSAkdGhpcy5maW5kKCcuZm9ybS1vcHRpb24tdmFyaWFudC0tcGF0dGVybicpLmF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgICRwYXR0ZXJuID0gJHRoaXMuZmluZCgnLmZvcm0tb3B0aW9uLXZhcmlhbnQtLXBhdHRlcm4nKS5hdHRyKCdkYXRhLXBhdHRlcm4nKTtcblxuICAgICAgICAgICAgICAgICAgICAkaW1hZ2VXcmFwcGVyLmFwcGVuZCgnPGRpdiBjbGFzcz1cIml0ZW0gaXRlbS1wYXJ0ZXJuIGl0ZW0tJytpZCsnXCI+PHNwYW4gY2xhc3M9XCJpbWFnZVwiPjxpbWcgc3JjPScrJHBhdHRlcm4rJyBhbHQ9Jyt0aXRsZSsnIHRpdGxlPScrdGl0bGUrJz48L3NwYW4+PHNwYW4gY2xhc3M9XCJ0aXRsZVwiPicrdGl0bGUrJzwvc3Bhbj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgJCgnLml0ZW0tJytpZCsnJywgJGltYWdlV3JhcHBlcikucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCRpbWFnZVdyYXBwZXIuY2hpbGRyZW4oKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAkdGV4dFdyYXBwZXIuaGlkZSgpO1xuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICR0ZXh0V3JhcHBlci5zaG93KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSAxMDI1KSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLXN3YXRjaC1pbWFnZScpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIG5ldyBTb3J0YWJsZShlbCwge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IDE1MFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm9kdWN0Vmlld0luZm9UYWJzKCl7XG4gICAgICAgICQoJy5wcm9kdWN0Vmlldy1pbmZvVGFicyAucHJvZHVjdFZpZXctaW5mb1RhYiBhJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdmFyICRibG9jayA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuYXR0cignaHJlZicpO1xuXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKCRibG9jaykub2Zmc2V0KCkudG9wIC0gJCgnLmhlYWRlcicpLmhlaWdodCgpLFxuICAgICAgICAgICAgfSwgNzAwKTtcblxuICAgICAgICAgICAgaWYoJGJsb2NrID09ICcjaGFsby1wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbicpe1xuICAgICAgICAgICAgICAgIGlmKCEkKCcucHJvZHVjdFZpZXctdGFicyAuY2FyZDpudGgtY2hpbGQoMSkgLnRpdGxlJykuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpKXtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnByb2R1Y3RWaWV3LXRhYnMgLmNhcmQ6bnRoLWNoaWxkKDEpIC50aXRsZScpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcucHJvZHVjdFZpZXctbW9yZURlc2MgYScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICQoJyNoYWxvLXByb2R1Y3RWaWV3LWRlc2NyaXB0aW9uJykub2Zmc2V0KCkudG9wIC0gJCgnLmhlYWRlcicpLmhlaWdodCgpLFxuICAgICAgICAgICAgfSwgNzAwKTtcblxuICAgICAgICAgICAgaWYoISQoJy5wcm9kdWN0Vmlldy10YWJzIC5jYXJkOm50aC1jaGlsZCgxKSAudGl0bGUnKS5oYXNDbGFzcygnY29sbGFwc2VkJykpe1xuICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0Vmlldy10YWJzIC5jYXJkOm50aC1jaGlsZCgxKSAudGl0bGUnKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkT3B0aW9uRm9yUHJvZHVjdENhcmQoKXtcbiAgICAgICAgaWYoJCgnLnByb2R1Y3RDYXJvdXNlbCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgJCgnLnByb2R1Y3RDYXJvdXNlbCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyICRwcm9kV3JhcElkID0gJChlbGVtZW50KS5hdHRyKCdpZCcpO1xuXG4gICAgICAgICAgICAgICAgaGFsb0FkZE9wdGlvbih0aGlzLmNvbnRleHQsICRwcm9kV3JhcElkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IG5vZCBmcm9tICcuLi9jb21tb24vbm9kJztcbmltcG9ydCB7IENvbGxhcHNpYmxlRXZlbnRzIH0gZnJvbSAnLi4vY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCBmb3JtcyBmcm9tICcuLi9jb21tb24vbW9kZWxzL2Zvcm1zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKCRyZXZpZXdGb3JtKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJHJldmlld0Zvcm0uZmluZCgnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRyZXZpZXdzQ29udGVudCA9ICQoJyN0YWItcmV2aWV3cycpO1xuICAgICAgICB0aGlzLiRjb2xsYXBzaWJsZSA9ICQoJ1tkYXRhLWNvbGxhcHNpYmxlXScsIHRoaXMuJHJldmlld3NDb250ZW50KTtcblxuICAgICAgICB0aGlzLmluaXRMaW5rQmluZCgpO1xuICAgICAgICB0aGlzLmluamVjdFBhZ2luYXRpb25MaW5rKCk7XG4gICAgICAgIHRoaXMuY29sbGFwc2VSZXZpZXdzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gaW5pdGlhbCBwYWdlIGxvYWQsIHRoZSB1c2VyIGNsaWNrcyBvbiBcIigxMiBSZXZpZXdzKVwiIGxpbmtcbiAgICAgKiBUaGUgYnJvd3NlciBqdW1wcyB0byB0aGUgcmV2aWV3IHBhZ2UgYW5kIHNob3VsZCBleHBhbmQgdGhlIHJldmlld3Mgc2VjdGlvblxuICAgICAqL1xuICAgIGluaXRMaW5rQmluZCgpIHtcbiAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkKCcjcHJvZHVjdFJldmlld3MtY29udGVudCcsIHRoaXMuJHJldmlld3NDb250ZW50KTtcblxuICAgICAgICAkKCcucHJvZHVjdFZpZXctcmV2aWV3TGluaycpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICQoJy5wcm9kdWN0Vmlldy1yZXZpZXdUYWJMaW5rJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCEkY29udGVudC5oYXNDbGFzcygnaXMtb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kY29sbGFwc2libGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbGxhcHNlUmV2aWV3cygpIHtcbiAgICAgICAgLy8gV2UncmUgaW4gcGFnaW5hdGluZyBzdGF0ZSwgZG8gbm90IGNvbGxhcHNlXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAmJiB3aW5kb3cubG9jYXRpb24uaGFzaC5pbmRleE9mKCcjdGFiLXJldmlld3MnKSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yY2UgY29sbGFwc2Ugb24gcGFnZSBsb2FkXG4gICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMuY2xpY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluamVjdCBJRCBpbnRvIHRoZSBwYWdpbmF0aW9uIGxpbmtcbiAgICAgKi9cbiAgICBpbmplY3RQYWdpbmF0aW9uTGluaygpIHtcbiAgICAgICAgY29uc3QgJG5leHRMaW5rID0gJCgnLnBhZ2luYXRpb24taXRlbS0tbmV4dCAucGFnaW5hdGlvbi1saW5rJywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuICAgICAgICBjb25zdCAkcHJldkxpbmsgPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1wcmV2aW91cyAucGFnaW5hdGlvbi1saW5rJywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuXG4gICAgICAgIGlmICgkbmV4dExpbmsubGVuZ3RoKSB7XG4gICAgICAgICAgICAkbmV4dExpbmsuYXR0cignaHJlZicsIGAkeyRuZXh0TGluay5hdHRyKCdocmVmJyl9ICN0YWItcmV2aWV3c2ApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRwcmV2TGluay5sZW5ndGgpIHtcbiAgICAgICAgICAgICRwcmV2TGluay5hdHRyKCdocmVmJywgYCR7JHByZXZMaW5rLmF0dHIoJ2hyZWYnKX0gI3RhYi1yZXZpZXdzYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3RlclZhbGlkYXRpb24oY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLnZhbGlkYXRvci5hZGQoW3tcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZyYXRpbmdcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5yZXZpZXdSYXRpbmcsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZ0aXRsZVwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnJldmlld1N1YmplY3QsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZ0ZXh0XCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3Q29tbWVudCxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcud3JpdGVSZXZpZXctZm9ybSBbbmFtZT1cImVtYWlsXCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1zLmVtYWlsKHZhbCk7XG4gICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5yZXZpZXdFbWFpbCxcbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcjtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBWaWRlb0dhbGxlcnkge1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuJHBsYXllciA9ICRlbGVtZW50LmZpbmQoJ1tkYXRhLXZpZGVvLXBsYXllcl0nKTtcbiAgICAgICAgdGhpcy4kdmlkZW9zID0gJGVsZW1lbnQuZmluZCgnW2RhdGEtdmlkZW8taXRlbV0nKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8gPSB7fTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgc2VsZWN0TmV3VmlkZW8oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlbyA9IHtcbiAgICAgICAgICAgIGlkOiAkdGFyZ2V0LmRhdGEoJ3ZpZGVvSWQnKSxcbiAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiAkdGFyZ2V0LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0TWFpblZpZGVvKCk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIoKTtcbiAgICB9XG5cbiAgICBzZXRNYWluVmlkZW8oKSB7XG4gICAgICAgIHRoaXMuJHBsYXllci5hdHRyKCdzcmMnLCBgLy93d3cueW91dHViZS5jb20vZW1iZWQvJHt0aGlzLmN1cnJlbnRWaWRlby5pZH1gKTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVUaHVtYigpIHtcbiAgICAgICAgdGhpcy4kdmlkZW9zLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8uJHNlbGVjdGVkVGh1bWIuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHZpZGVvcy5vbignY2xpY2snLCB0aGlzLnNlbGVjdE5ld1ZpZGVvLmJpbmQodGhpcykpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlkZW9HYWxsZXJ5KCkge1xuICAgIGNvbnN0IHBsdWdpbktleSA9ICd2aWRlby1nYWxsZXJ5JztcbiAgICBjb25zdCAkdmlkZW9HYWxsZXJ5ID0gJChgW2RhdGEtJHtwbHVnaW5LZXl9XWApO1xuXG4gICAgJHZpZGVvR2FsbGVyeS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCAkZWwgPSAkKGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBpc0luaXRpYWxpemVkID0gJGVsLmRhdGEocGx1Z2luS2V5KSBpbnN0YW5jZW9mIFZpZGVvR2FsbGVyeTtcblxuICAgICAgICBpZiAoaXNJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJGVsLmRhdGEocGx1Z2luS2V5LCBuZXcgVmlkZW9HYWxsZXJ5KCRlbCkpO1xuICAgIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==