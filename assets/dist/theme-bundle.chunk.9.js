(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

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

/***/ "./assets/js/theme/page.js":
/*!*********************************!*\
  !*** ./assets/js/theme/page.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var _halothemes_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./halothemes/jquery.fancybox.min */ "./assets/js/theme/halothemes/jquery.fancybox.min.js");
/* harmony import */ var _halothemes_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_halothemes_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _halothemes_haloProductLookbook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./halothemes/haloProductLookbook */ "./assets/js/theme/halothemes/haloProductLookbook.js");
/* harmony import */ var _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./halothemes/haloAddOptionForProductCard */ "./assets/js/theme/halothemes/haloAddOptionForProductCard.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Page = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Page, _PageManager);

  function Page(context) {
    return _PageManager.call(this, context) || this;
  }

  var _proto = Page.prototype;

  _proto.onReady = function onReady() {
    this.faqsPage();
    this.faqsToggle();
    this.portfolioPage();
    Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_4__["default"])(this.context);
    Object(_halothemes_haloProductLookbook__WEBPACK_IMPORTED_MODULE_3__["default"])(this.context, $('.halo-lookbook-slider'));
    this.lookbookCarousel();
    this.portfolioCustomCarousel();
  };

  _proto.faqsPage = function faqsPage() {
    $('.faq-desc').appendTo('.page-normal .page-description');
  };

  _proto.portfolioPage = function portfolioPage() {
    $('.halo-image-portfolio .item:hidden').slice(0, 6).css('display', 'inline-block');

    if ($('.halo-image-portfolio .item').length > 6) {
      $('.halo-image-portfolio').append('<div class="halo-infinite-portfolio"><div class="button button--transparent">Load More</div></div>');
    }

    $('.halo-infinite-portfolio .button').on('click', function (event) {
      event.preventDefault();
      $('.halo-image-portfolio .item:hidden').slice(0, 6).css('display', 'inline-block');

      if ($(".halo-image-portfolio .item:hidden").length == 0) {
        $('.halo-infinite-portfolio .button').addClass('disable').text('No more items');
      }
    });

    if ($('.page-portfolio .page-sidebar-mobile').length > 0) {
      $('.page-portfolio .page-sidebar-mobile').append('<svg class="icon"><use xlink:href="#icon-sidebar"></use></svg>');
    }

    $('.halo-image-portfolio .item').each(function (index, element) {
      if ($('.external-link', element).length > 0) {
        $('.external-link', element).append('<svg class="icon"><use xlink:href="#icon-external-link"></use></svg>');
      }
    });
  };

  _proto.faqsToggle = function faqsToggle() {
    $('.page-normal .card .title').on('click', function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      $('.page-normal .card .title').not($target).removeClass('collapsed');

      if ($target.hasClass('collapsed')) {
        $target.removeClass('collapsed');
      } else {
        $target.addClass('collapsed');
      }

      $('.page-normal .card').each(function (index, element) {
        if ($('.title', element).hasClass('collapsed')) {
          $(element).find('.collapse').slideDown("slow");
        } else {
          $(element).find('.collapse').slideUp("slow");
        }
      });
    });
  } //Lookbook page
  ;

  _proto.lookbookCarousel = function lookbookCarousel() {
    if ($('.halo-lookbook-slider').length) {
      if (!$('.halo-lookbook-slider').hasClass('slick-slider')) {
        $('.halo-lookbook-slider').slick({
          dots: true,
          arrows: false,
          mobileFirst: true,
          adaptiveHeight: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          lazyLoad: 'anticipated',
          nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
          prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
          responsive: [{
            breakpoint: 1024,
            settings: {
              dots: false,
              arrows: true
            }
          }]
        });
      }
    }
  } // Portfolio page
  ;

  _proto.portfolioCustomCarousel = function portfolioCustomCarousel() {
    if ($('.halo-portfolio-custom .halo-row').length) {
      if (!$('.halo-portfolio-custom .halo-row').hasClass('slick-slider')) {
        $('.halo-portfolio-custom .halo-row').slick({
          dots: true,
          arrows: false,
          mobileFirst: true,
          infinite: false,
          adaptiveHeight: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          lazyLoad: 'anticipated',
          nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
          prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
          responsive: [{
            breakpoint: 1024,
            settings: {
              dots: false,
              arrows: true
            }
          }]
        });
      }
    }
  };

  return Page;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvaGFsb1Byb2R1Y3RMb29rYm9vay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvcGFnZS5qcyJdLCJuYW1lcyI6WyJmZXRjaCIsInJlcXVpcmUiLCJjb250ZXh0Iiwid3JhcHBlciIsInRoZW1lU2V0dGluZ3MiLCJoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdCIsImNhbGxQcm9kdWN0T3B0aW9uIiwicHJvZHVjdF9jbGFzcyIsImVhY2giLCJpbmRleCIsImVsZW1lbnQiLCJwcm9kdWN0SWQiLCIkIiwiZGF0YSIsImxpc3QiLCJwdXNoIiwidG9TdHJpbmciLCJsZW5ndGgiLCJnZXRQcm9kdWN0T3B0aW9uIiwidGhlbiIsInJlbmRlck9wdGlvbiIsImlkeCIsIml0ZW0iLCJhcnIiLCJwcm9kdWN0X3dyYXBwZXIiLCJmaW5kIiwidHh0IiwicmVtb3ZlIiwiY291bnRNb3JlT3B0aW9uIiwicHJvZHVjdExpbmsiLCJhdHRyIiwiYXBwZW5kIiwibWV0aG9kIiwiaGVhZGVycyIsInRva2VuIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsInJlcyIsImpzb24iLCJhRmlsdGVyIiwic2l0ZSIsInByb2R1Y3RzIiwiZWRnZXMiLCJub2RlIiwiZW50aXR5SWQiLCJwcm9kdWN0RmllbGRDb2xvciIsInByb2R1Y3RGaWVsZFNpemUiLCJhRmlsdGVyMiIsInByb2R1Y3RPcHRpb25zIiwiYUZpbHRlcjMiLCJmaWx0ZXIiLCJkaXNwbGF5U3R5bGUiLCJhRmlsdGVyNSIsImRpc3BsYXlOYW1lIiwiaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QyIiwiYUZpbHRlcjQiLCJ2YWx1ZXMiLCJ0aXRsZVZhciIsImxhYmVsIiwiaWRWYXIiLCJsZW5ndGhDb2xvclZhciIsImhleENvbG9ycyIsImNvbG9yMSIsImNvbG9yMiIsImNvbG9yMyIsImltZyIsImltYWdlVXJsIiwiQm9vbGVhbiIsImhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0VGV4dCIsImVsIiwiJHBvcHVwIiwiJGVsIiwiJG9wdGlvbnMiLCJ0ZW1wbGF0ZSIsIm9uIiwiZXZlbnQiLCJyZW1vdmVDbGFzcyIsImVtcHR5IiwiJHByb2RJZCIsInRhcmdldCIsInBvc2l0aW9uIiwib2Zmc2V0IiwiY29udGFpbmVyIiwidW5kZWZpbmVkIiwidXRpbHMiLCJhcGkiLCJwcm9kdWN0IiwiZ2V0QnlJZCIsImVyciIsInJlc3BvbnNlIiwiaHRtbCIsIndpbmRvdyIsIndpZHRoIiwiY3NzIiwidG9wIiwibGVmdCIsImFkZENsYXNzIiwiZG9jdW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhhc0NsYXNzIiwiY2xvc2VzdCIsIlBhZ2UiLCJvblJlYWR5IiwiZmFxc1BhZ2UiLCJmYXFzVG9nZ2xlIiwicG9ydGZvbGlvUGFnZSIsImhhbG9BZGRPcHRpb24iLCJoYWxvUHJvZHVjdExvb2tib29rIiwibG9va2Jvb2tDYXJvdXNlbCIsInBvcnRmb2xpb0N1c3RvbUNhcm91c2VsIiwiYXBwZW5kVG8iLCJzbGljZSIsInRleHQiLCIkdGFyZ2V0IiwiY3VycmVudFRhcmdldCIsIm5vdCIsInNsaWRlRG93biIsInNsaWRlVXAiLCJzbGljayIsImRvdHMiLCJhcnJvd3MiLCJtb2JpbGVGaXJzdCIsImFkYXB0aXZlSGVpZ2h0Iiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJsYXp5TG9hZCIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJpbmZpbml0ZSIsIlBhZ2VNYW5hZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBOztBQUNBLElBQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyx3REFBRCxDQUFyQjs7QUFFZSx5RUFBU0MsT0FBVCxF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QURrQztVQUV4Q0MsTUFBTSxFQUFFLEtBRmdDO1VBR3hDQyxXQUFXLEVBQUUsSUFIMkI7VUFJeENVLFFBQVEsRUFBRSxLQUo4QjtVQUt4Q1QsY0FBYyxFQUFFLElBTHdCO1VBTXhDQyxZQUFZLEVBQUUsQ0FOMEI7VUFPeENDLGNBQWMsRUFBRSxDQVB3QjtVQVF4Q0MsUUFBUSxFQUFFLGFBUjhCO1VBU3hDQyxTQUFTLEVBQUUsOEhBVDZCO1VBVXhDQyxTQUFTLEVBQUUsa0lBVjZCO1VBV3hDQyxVQUFVLEVBQUUsQ0FDWjtZQUNJQyxVQUFVLEVBQUUsSUFEaEI7WUFFSUMsUUFBUSxFQUFFO2NBQ05YLElBQUksRUFBRSxLQURBO2NBRU5DLE1BQU0sRUFBRTtZQUZGO1VBRmQsQ0FEWTtRQVg0QixDQUE1QztNQW9CSDtJQUNKO0VBQ0osQzs7O0VBN0g2QlkscUQiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQsIHdyYXBwZXIpIHtcbiAgICBpZiAoY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0ID09IHRydWUpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBjb250ZXh0LnRva2VuLFxuICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyID0gJCgnIycrd3JhcHBlciksXG4gICAgICAgICAgICBwcm9kdWN0X2NsYXNzID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkJyk7XG4gICAgICAgIHZhciAgbGlzdCA9IFtdO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNhbGxQcm9kdWN0T3B0aW9uKCkge1xuICAgICAgICAgICAgcHJvZHVjdF9jbGFzcy5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0SWQgPSAkKGVsZW1lbnQpLmRhdGEoXCJwcm9kdWN0LWlkXCIpO1xuXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKHByb2R1Y3RJZC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZihsaXN0Lmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIGdldFByb2R1Y3RPcHRpb24obGlzdCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uKGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaChsaXN0LCAoaWR4LCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0ge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkID0gbGlzdFtpZHhdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR4dCA9ICQoZWxlbWVudCkuZGF0YSgncHJvZHVjdC1zd2F0Y2gtdmFsdWUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJbdHh0XSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyW3R4dF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmxlbmd0aCA+IDQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb3VudE1vcmVPcHRpb24gID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLW9wdGlvbi1zd2F0Y2gnKS5sZW5ndGggLSA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TGluayA9IHByb2R1Y3Rfd3JhcHBlci5maW5kKCdbZGF0YS1wcm9kdWN0LWlkPVwiJytwcm9kdWN0SWQrJ1wiXScpLmZpbmQoJy5jYXJkLWxpbmsnKS5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGluZGV4ID49IDQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLWZpZWxkIC5zaG93bW9yZScpLmxlbmd0aCA8IDEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tZmllbGQ6bm90KC5mb3JtLWZpZWxkLS1zaXplKScpLmFwcGVuZCgnPGEgaHJlZj1cIicrcHJvZHVjdExpbmsrJ1wiIGNsYXNzPVwic2hvd21vcmVcIj4rJytjb3VudE1vcmVPcHRpb24rJzwvYT4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRQcm9kdWN0T3B0aW9uKGxpc3Qpe1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoKCcvZ3JhcGhxbCcsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0b2tlblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgcXVlcnk6IGBcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkgU2V2ZXJhbFByb2R1Y3RzQnlJRCB7XG4gICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cyhlbnRpdHlJZHM6IFtgK2xpc3QrYF0sIGZpcnN0OiA1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RPcHRpb25zKGZpcnN0OiA1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBNdWx0aXBsZUNob2ljZU9wdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlTdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIFN3YXRjaE9wdGlvblZhbHVlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZXhDb2xvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybCh3aWR0aDogNTApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGB9KSxcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlck9wdGlvbihkYXRhKXtcbiAgICAgICAgICAgIHZhciBhRmlsdGVyID0gZGF0YS5zaXRlLnByb2R1Y3RzLmVkZ2VzO1xuXG4gICAgICAgICAgICAkLmVhY2goYUZpbHRlciwgKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RJZCA9IGFGaWx0ZXJbaW5kZXhdLm5vZGUuZW50aXR5SWQsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLWZpZWxkOm5vdCguZm9ybS1maWVsZC0tc2l6ZSknKSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkU2l6ZSA9IHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1maWVsZC0tc2l6ZScpLFxuICAgICAgICAgICAgICAgICAgICBhRmlsdGVyMiA9IGFGaWx0ZXJbaW5kZXhdLm5vZGUucHJvZHVjdE9wdGlvbnMuZWRnZXM7XG5cbiAgICAgICAgICAgICAgICB2YXIgYUZpbHRlcjMgPSBhRmlsdGVyMi5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubm9kZS5kaXNwbGF5U3R5bGUgPT09ICdTd2F0Y2gnO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdmFyIGFGaWx0ZXI1ID0gYUZpbHRlcjIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLm5vZGUuZGlzcGxheU5hbWUgPT09IGNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdDI7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZihhRmlsdGVyMy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFGaWx0ZXI0ID0gYUZpbHRlcjNbMF0ubm9kZS52YWx1ZXMuZWRnZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGFGaWx0ZXI0LCAoaWR4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGl0bGVWYXIgPSBhRmlsdGVyNFtpZHhdLm5vZGUubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRWYXIgPSBhRmlsdGVyNFtpZHhdLm5vZGUuZW50aXR5SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoQ29sb3JWYXIgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaGV4Q29sb3JzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjEgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaGV4Q29sb3JzWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yMiA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5oZXhDb2xvcnNbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IzID0gYUZpbHRlcjRbaWR4XS5ub2RlLmhleENvbG9yc1syXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaW1hZ2VVcmw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGxlbmd0aENvbG9yVmFyID09IDIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yLmFwcGVuZCgnPGxhYmVsIGNsYXNzPVwiZm9ybS1vcHRpb24gZm9ybS1vcHRpb24tc3dhdGNoXCIgZGF0YS1wcm9kdWN0LXN3YXRjaC12YWx1ZT1cIicraWRWYXIrJ1wiPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdG9vbHRpcFwiPicrdGl0bGVWYXIrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXZhcmlhbnQgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IyXCIgdGl0bGU9XCInK3RpdGxlVmFyKydcIj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jytjb2xvcjErJ1wiPjwvc3Bhbj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jytjb2xvcjIrJ1wiPjwvc3Bhbj48L3NwYW4+PC9sYWJlbD4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihsZW5ndGhDb2xvclZhciA9PT0gMyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IuYXBwZW5kKCc8bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvbiBmb3JtLW9wdGlvbi1zd2F0Y2hcIiBkYXRhLXByb2R1Y3Qtc3dhdGNoLXZhbHVlPVwiJytpZFZhcisnXCI+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi10b29sdGlwXCI+Jyt0aXRsZVZhcisnPC9zcGFuPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvciBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcjJcIiB0aXRsZT1cIicrdGl0bGVWYXIrJ1wiPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMSsnXCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMisnXCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMysnXCI+PC9zcGFuPjwvc3Bhbj48L2xhYmVsPicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKEJvb2xlYW4oY29sb3IxKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IuYXBwZW5kKCc8bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvbiBmb3JtLW9wdGlvbi1zd2F0Y2hcIiBkYXRhLXByb2R1Y3Qtc3dhdGNoLXZhbHVlPVwiJytpZFZhcisnXCI+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi10b29sdGlwXCI+Jyt0aXRsZVZhcisnPC9zcGFuPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvclwiIHRpdGxlPVwiJyt0aXRsZVZhcisnXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAnK2NvbG9yMSsnXCI+PC9zcGFuPjwvbGFiZWw+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoQm9vbGVhbihpbWcpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvci5hcHBlbmQoJzxsYWJlbCBjbGFzcz1cImZvcm0tb3B0aW9uIGZvcm0tb3B0aW9uLXN3YXRjaFwiIGRhdGEtcHJvZHVjdC1zd2F0Y2gtdmFsdWU9XCInK2lkVmFyKydcIj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXRvb2x0aXBcIj4nK3RpdGxlVmFyKyc8L3NwYW4+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLXBhdHRlcm5cIiB0aXRsZT1cIicrdGl0bGVWYXIrJ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCcraW1nKycpXCI+PC9zcGFuPjwvbGFiZWw+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoYUZpbHRlcjUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKHByb2R1Y3RGaWVsZFNpemUubGVuZ3RoIDwgMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLXNpemVcIj48bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvblwiPicrY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0VGV4dC50b1N0cmluZygpKyc8L2xhYmVsPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoKGFGaWx0ZXI1Lmxlbmd0aCA9PSAwKSAmJiAoYUZpbHRlcjMubGVuZ3RoID09IDApKXtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsUHJvZHVjdE9wdGlvbigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQsIGVsKSB7XG4gICAgdmFyICRwb3B1cCA9ICQoJy5sb29rYm9vay1wb3B1cCcpO1xuICAgIHZhciAkZWwgPSBlbDtcblxuICAgIGNvbnN0ICRvcHRpb25zID0ge1xuICAgICAgICB0ZW1wbGF0ZTogJ2hhbG90aGVtZXMvcHJvZHVjdHMvaGFsby1sb29rYm9vay10bXAnXG4gICAgfTtcblxuICAgICRlbC5maW5kKCcuaXRlbSAuaXRlbS1wb2ludCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgJHBvcHVwLnJlbW92ZUNsYXNzKCdpcy1vcGVuJykuZW1wdHkoKTtcblxuICAgICAgICB2YXIgJHByb2RJZCA9ICQoZXZlbnQudGFyZ2V0KS5kYXRhKCdwcm9kdWN0LWlkJyksXG4gICAgICAgICAgICBwb3NpdGlvbiA9ICQoZXZlbnQudGFyZ2V0KS5vZmZzZXQoKSxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9ICRlbC5vZmZzZXQoKTtcblxuICAgICAgICBpZigkcHJvZElkICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKCRwcm9kSWQsICRvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGVycil7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkcG9wdXAuaHRtbChyZXNwb25zZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID49IDU1MSkge1xuICAgICAgICAgICAgICAgICRwb3B1cC5jc3Moeyd0b3AnOiBwb3NpdGlvbi50b3AgLSBjb250YWluZXIudG9wIC0gMTAwLCAnbGVmdCc6IHBvc2l0aW9uLmxlZnQgLSBjb250YWluZXIubGVmdCArIDMwfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRwb3B1cC5jc3Moeyd0b3AnOiBwb3NpdGlvbi50b3AgLSBjb250YWluZXIudG9wICsgMTUsICdsZWZ0JzogMTV9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHBvcHVwLmFkZENsYXNzKFwiaXMtb3BlblwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jbG9zZS1wcm9kdWN0JywgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICgkcG9wdXAuaGFzQ2xhc3MoXCJpcy1vcGVuXCIpKSB7XG4gICAgICAgICAgICAkcG9wdXAucmVtb3ZlQ2xhc3MoXCJpcy1vcGVuXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGlmKCRwb3B1cC5oYXNDbGFzcyhcImlzLW9wZW5cIikpIHtcbiAgICAgICAgICAgIGlmKCgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgkcG9wdXApLmxlbmd0aCA9PT0gMCkgJiYgKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcuaXRlbSAuaXRlbS1wb2ludCcpLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICAkcG9wdXAucmVtb3ZlQ2xhc3MoXCJpcy1vcGVuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgZmFuY3lib3ggZnJvbSAnLi9oYWxvdGhlbWVzL2pxdWVyeS5mYW5jeWJveC5taW4nO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgaGFsb1Byb2R1Y3RMb29rYm9vayBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1Byb2R1Y3RMb29rYm9vayc7XG5pbXBvcnQgaGFsb0FkZE9wdGlvbiBmcm9tICcuL2hhbG90aGVtZXMvaGFsb0FkZE9wdGlvbkZvclByb2R1Y3RDYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIHRoaXMuZmFxc1BhZ2UoKTtcbiAgICAgICAgdGhpcy5mYXFzVG9nZ2xlKCk7XG4gICAgICAgIHRoaXMucG9ydGZvbGlvUGFnZSgpO1xuICAgICAgICBcbiAgICAgICAgaGFsb0FkZE9wdGlvbih0aGlzLmNvbnRleHQpO1xuICAgICAgICBoYWxvUHJvZHVjdExvb2tib29rKHRoaXMuY29udGV4dCwgJCgnLmhhbG8tbG9va2Jvb2stc2xpZGVyJykpO1xuICAgICAgICB0aGlzLmxvb2tib29rQ2Fyb3VzZWwoKTtcbiAgICAgICAgdGhpcy5wb3J0Zm9saW9DdXN0b21DYXJvdXNlbCgpO1xuICAgIH1cblxuICAgIGZhcXNQYWdlKCl7XG4gICAgICAgICQoJy5mYXEtZGVzYycpLmFwcGVuZFRvKCcucGFnZS1ub3JtYWwgLnBhZ2UtZGVzY3JpcHRpb24nKTtcbiAgICB9XG5cbiAgICBwb3J0Zm9saW9QYWdlKCl7XG4gICAgICAgICQoJy5oYWxvLWltYWdlLXBvcnRmb2xpbyAuaXRlbTpoaWRkZW4nKS5zbGljZSgwLDYpLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcblxuICAgICAgICBpZigkKCcuaGFsby1pbWFnZS1wb3J0Zm9saW8gLml0ZW0nKS5sZW5ndGggPiA2KXtcbiAgICAgICAgICAgICQoJy5oYWxvLWltYWdlLXBvcnRmb2xpbycpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImhhbG8taW5maW5pdGUtcG9ydGZvbGlvXCI+PGRpdiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXRyYW5zcGFyZW50XCI+TG9hZCBNb3JlPC9kaXY+PC9kaXY+Jyk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCcuaGFsby1pbmZpbml0ZS1wb3J0Zm9saW8gLmJ1dHRvbicpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJCgnLmhhbG8taW1hZ2UtcG9ydGZvbGlvIC5pdGVtOmhpZGRlbicpLnNsaWNlKDAsNikuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xuICAgIFxuICAgICAgICAgICAgaWYoJChcIi5oYWxvLWltYWdlLXBvcnRmb2xpbyAuaXRlbTpoaWRkZW5cIikubGVuZ3RoID09IDApe1xuICAgICAgICAgICAgICAgICQoJy5oYWxvLWluZmluaXRlLXBvcnRmb2xpbyAuYnV0dG9uJykuYWRkQ2xhc3MoJ2Rpc2FibGUnKS50ZXh0KCdObyBtb3JlIGl0ZW1zJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKCQoJy5wYWdlLXBvcnRmb2xpbyAucGFnZS1zaWRlYmFyLW1vYmlsZScpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgJCgnLnBhZ2UtcG9ydGZvbGlvIC5wYWdlLXNpZGViYXItbW9iaWxlJykuYXBwZW5kKCc8c3ZnIGNsYXNzPVwiaWNvblwiPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLXNpZGViYXJcIj48L3VzZT48L3N2Zz4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJy5oYWxvLWltYWdlLXBvcnRmb2xpbyAuaXRlbScpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZigkKCcuZXh0ZXJuYWwtbGluaycsIGVsZW1lbnQpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICQoJy5leHRlcm5hbC1saW5rJywgZWxlbWVudCkuYXBwZW5kKCc8c3ZnIGNsYXNzPVwiaWNvblwiPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWV4dGVybmFsLWxpbmtcIj48L3VzZT48L3N2Zz4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZmFxc1RvZ2dsZSgpe1xuICAgICAgICAkKCcucGFnZS1ub3JtYWwgLmNhcmQgLnRpdGxlJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB2YXIgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgICAgICQoJy5wYWdlLW5vcm1hbCAuY2FyZCAudGl0bGUnKS5ub3QoJHRhcmdldCkucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNlZCcpO1xuXG4gICAgICAgICAgICBpZigkdGFyZ2V0Lmhhc0NsYXNzKCdjb2xsYXBzZWQnKSl7XG4gICAgICAgICAgICAgICAgJHRhcmdldC5yZW1vdmVDbGFzcygnY29sbGFwc2VkJyk7XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgJHRhcmdldC5hZGRDbGFzcygnY29sbGFwc2VkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJy5wYWdlLW5vcm1hbCAuY2FyZCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoJCgnLnRpdGxlJywgZWxlbWVudCkuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpKXtcbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5maW5kKCcuY29sbGFwc2UnKS5zbGlkZURvd24oXCJzbG93XCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5maW5kKCcuY29sbGFwc2UnKS5zbGlkZVVwKFwic2xvd1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy9Mb29rYm9vayBwYWdlXG4gICAgbG9va2Jvb2tDYXJvdXNlbCgpIHtcbiAgICAgICAgaWYgKCQoJy5oYWxvLWxvb2tib29rLXNsaWRlcicpLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKCEkKCcuaGFsby1sb29rYm9vay1zbGlkZXInKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcbiAgICAgICAgICAgICAgICAkKCcuaGFsby1sb29rYm9vay1zbGlkZXInKS5zbGljayh7XG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgbGF6eUxvYWQ6ICdhbnRpY2lwYXRlZCcsXG4gICAgICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1uZXh0IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdOZXh0IFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LW5leHQ+PC91c2U+PC9zdmc+XCIsIFxuICAgICAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stcHJldiBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nUHJldmlvdXMgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctcHJldj48L3VzZT48L3N2Zz5cIixcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFBvcnRmb2xpbyBwYWdlXG4gICAgcG9ydGZvbGlvQ3VzdG9tQ2Fyb3VzZWwoKSB7XG4gICAgICAgIGlmICgkKCcuaGFsby1wb3J0Zm9saW8tY3VzdG9tIC5oYWxvLXJvdycpLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKCEkKCcuaGFsby1wb3J0Zm9saW8tY3VzdG9tIC5oYWxvLXJvdycpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSkge1xuICAgICAgICAgICAgICAgICQoJy5oYWxvLXBvcnRmb2xpby1jdXN0b20gLmhhbG8tcm93Jykuc2xpY2soe1xuICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgbGF6eUxvYWQ6ICdhbnRpY2lwYXRlZCcsXG4gICAgICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1uZXh0IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdOZXh0IFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LW5leHQ+PC91c2U+PC9zdmc+XCIsIFxuICAgICAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stcHJldiBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nUHJldmlvdXMgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctcHJldj48L3VzZT48L3N2Zz5cIixcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=