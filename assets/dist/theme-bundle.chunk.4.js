(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./assets/js/theme/blog.js":
/*!*********************************!*\
  !*** ./assets/js/theme/blog.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./halothemes/haloAddOptionForProductCard */ "./assets/js/theme/halothemes/haloAddOptionForProductCard.js");
/* harmony import */ var _halothemes_haloProductLookbook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./halothemes/haloProductLookbook */ "./assets/js/theme/halothemes/haloProductLookbook.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Blog = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Blog, _PageManager);

  function Blog(context) {
    return _PageManager.call(this, context) || this;
  }

  var _proto = Blog.prototype;

  _proto.onReady = function onReady() {
    this.getAllTags(this.context);
    Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);
    Object(_halothemes_haloProductLookbook__WEBPACK_IMPORTED_MODULE_3__["default"])(this.context, $('.halo-blog-lookbook .lookbook-slider'));
    this.lookbookCarousel();
  };

  _proto.getAllTags = function getAllTags(context) {
    if (context.themeSettings.halo_sidebar_popular_tags == true) {
      var requestOptions = {
        config: {
          blog: {
            posts: {
              limit: 100
            }
          }
        },
        template: 'halothemes/halo-all-tags'
      };
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.getPage('/blog', requestOptions, function (error, response) {
        if (error) {
          return '';
        }

        $('.tags-list').html(response);
        var arr = {};
        $('.tags-list [data-tag]').each(function () {
          var txt = $(this).data('tag');
          if (arr[txt]) $(this).remove();else arr[txt] = true;
        });
      });
    }
  };

  _proto.lookbookCarousel = function lookbookCarousel() {
    if ($('.blog-lookbook-gallery .lookbook-slider').length) {
      if (!$('.blog-lookbook-gallery .lookbook-slider').hasClass('slick-slider')) {
        $('.blog-lookbook-gallery .lookbook-slider').slick({
          rows: 0,
          rtl: false,
          dots: true,
          arrows: false,
          mobileFirst: true,
          infinite: false,
          adaptiveHeight: true,
          slidesToShow: 1,
          slidesToScroll: 1
        });
      }
    }
  };

  return Blog;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYmxvZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvaGFsb1Byb2R1Y3RMb29rYm9vay5qcyJdLCJuYW1lcyI6WyJCbG9nIiwiY29udGV4dCIsIm9uUmVhZHkiLCJnZXRBbGxUYWdzIiwiaGFsb0FkZE9wdGlvbiIsImhhbG9Qcm9kdWN0TG9va2Jvb2siLCIkIiwibG9va2Jvb2tDYXJvdXNlbCIsInRoZW1lU2V0dGluZ3MiLCJoYWxvX3NpZGViYXJfcG9wdWxhcl90YWdzIiwicmVxdWVzdE9wdGlvbnMiLCJjb25maWciLCJibG9nIiwicG9zdHMiLCJsaW1pdCIsInRlbXBsYXRlIiwidXRpbHMiLCJhcGkiLCJnZXRQYWdlIiwiZXJyb3IiLCJyZXNwb25zZSIsImh0bWwiLCJhcnIiLCJlYWNoIiwidHh0IiwiZGF0YSIsInJlbW92ZSIsImxlbmd0aCIsImhhc0NsYXNzIiwic2xpY2siLCJyb3dzIiwicnRsIiwiZG90cyIsImFycm93cyIsIm1vYmlsZUZpcnN0IiwiaW5maW5pdGUiLCJhZGFwdGl2ZUhlaWdodCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiUGFnZU1hbmFnZXIiLCJmZXRjaCIsInJlcXVpcmUiLCJ3cmFwcGVyIiwiaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QiLCJjYWxsUHJvZHVjdE9wdGlvbiIsInByb2R1Y3RfY2xhc3MiLCJpbmRleCIsImVsZW1lbnQiLCJwcm9kdWN0SWQiLCJsaXN0IiwicHVzaCIsInRvU3RyaW5nIiwiZ2V0UHJvZHVjdE9wdGlvbiIsInRoZW4iLCJyZW5kZXJPcHRpb24iLCJpZHgiLCJpdGVtIiwicHJvZHVjdF93cmFwcGVyIiwiZmluZCIsImNvdW50TW9yZU9wdGlvbiIsInByb2R1Y3RMaW5rIiwiYXR0ciIsImFwcGVuZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0b2tlbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJyZXMiLCJqc29uIiwiYUZpbHRlciIsInNpdGUiLCJwcm9kdWN0cyIsImVkZ2VzIiwibm9kZSIsImVudGl0eUlkIiwicHJvZHVjdEZpZWxkQ29sb3IiLCJwcm9kdWN0RmllbGRTaXplIiwiYUZpbHRlcjIiLCJwcm9kdWN0T3B0aW9ucyIsImFGaWx0ZXIzIiwiZmlsdGVyIiwiZGlzcGxheVN0eWxlIiwiYUZpbHRlcjUiLCJkaXNwbGF5TmFtZSIsImhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0MiIsImFGaWx0ZXI0IiwidmFsdWVzIiwidGl0bGVWYXIiLCJsYWJlbCIsImlkVmFyIiwibGVuZ3RoQ29sb3JWYXIiLCJoZXhDb2xvcnMiLCJjb2xvcjEiLCJjb2xvcjIiLCJjb2xvcjMiLCJpbWciLCJpbWFnZVVybCIsIkJvb2xlYW4iLCJoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdFRleHQiLCJlbCIsIiRwb3B1cCIsIiRlbCIsIiRvcHRpb25zIiwib24iLCJldmVudCIsInJlbW92ZUNsYXNzIiwiZW1wdHkiLCIkcHJvZElkIiwidGFyZ2V0IiwicG9zaXRpb24iLCJvZmZzZXQiLCJjb250YWluZXIiLCJ1bmRlZmluZWQiLCJwcm9kdWN0IiwiZ2V0QnlJZCIsImVyciIsIndpbmRvdyIsIndpZHRoIiwiY3NzIiwidG9wIiwibGVmdCIsImFkZENsYXNzIiwiZG9jdW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNsb3Nlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxJOzs7RUFDakIsY0FBWUMsT0FBWixFQUFxQjtJQUFBLE9BQ2pCLHdCQUFNQSxPQUFOLENBRGlCO0VBRXBCOzs7O1NBRUpDLE8sR0FBQSxtQkFBVTtJQUNILEtBQUtDLFVBQUwsQ0FBZ0IsS0FBS0YsT0FBckI7SUFDQUcsdUZBQWEsQ0FBQyxLQUFL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QjtNQUMzQixJQUFJdEIsQ0FBQyxDQUFDcUcsS0FBSyxDQUFDSSxNQUFQLENBQUQsQ0FBZ0JnQixPQUFoQixDQUF3QnhCLE1BQXhCLEVBQWdDNUUsTUFBaEMsS0FBMkMsQ0FBNUMsSUFBbURyQixDQUFDLENBQUNxRyxLQUFLLENBQUNJLE1BQVAsQ0FBRCxDQUFnQmdCLE9BQWhCLENBQXdCLG1CQUF4QixFQUE2Q3BHLE1BQTdDLEtBQXdELENBQTlHLEVBQWtIO1FBQzlHNEUsTUFBTSxDQUFDSyxXQUFQLENBQW1CLFNBQW5CO01BQ0g7SUFDSjtFQUNKLENBTkQ7QUFPSCxDIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay40LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IGhhbG9BZGRPcHRpb24gZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9BZGRPcHRpb25Gb3JQcm9kdWN0Q2FyZCc7XG5pbXBvcnQgaGFsb1Byb2R1Y3RMb29rYm9vayBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1Byb2R1Y3RMb29rYm9vayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2cgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICB9XG5cblx0b25SZWFkeSgpIHtcbiAgICAgICAgdGhpcy5nZXRBbGxUYWdzKHRoaXMuY29udGV4dCk7XG4gICAgICAgIGhhbG9BZGRPcHRpb24odGhpcy5jb250ZXh0KTtcbiAgICAgICAgaGFsb1Byb2R1Y3RMb29rYm9vayh0aGlzLmNvbnRleHQsICQoJy5oYWxvLWJsb2ctbG9va2Jvb2sgLmxvb2tib29rLXNsaWRlcicpKTtcbiAgICAgICAgdGhpcy5sb29rYm9va0Nhcm91c2VsKCk7XG4gICAgfVxuXG4gICAgZ2V0QWxsVGFncyhjb250ZXh0KXtcbiAgICAgICAgaWYgKGNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvX3NpZGViYXJfcG9wdWxhcl90YWdzID09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICBibG9nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdoYWxvdGhlbWVzL2hhbG8tYWxsLXRhZ3MnLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UoJy9ibG9nJywgcmVxdWVzdE9wdGlvbnMsIChlcnJvciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJCgnLnRhZ3MtbGlzdCcpLmh0bWwocmVzcG9uc2UpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGFyciA9IHt9O1xuXG4gICAgICAgICAgICAgICAgJCgnLnRhZ3MtbGlzdCBbZGF0YS10YWddJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHR4dCA9ICQodGhpcykuZGF0YSgndGFnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyclt0eHRdKVxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyW3R4dF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9va2Jvb2tDYXJvdXNlbCgpIHtcbiAgICAgICAgaWYgKCQoJy5ibG9nLWxvb2tib29rLWdhbGxlcnkgLmxvb2tib29rLXNsaWRlcicpLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKCEkKCcuYmxvZy1sb29rYm9vay1nYWxsZXJ5IC5sb29rYm9vay1zbGlkZXInKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcbiAgICAgICAgICAgICAgICAkKCcuYmxvZy1sb29rYm9vay1nYWxsZXJ5IC5sb29rYm9vay1zbGlkZXInKS5zbGljayh7XG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IDAsXG4gICAgICAgICAgICAgICAgICAgIHJ0bDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQsIHdyYXBwZXIpIHtcbiAgICBpZiAoY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0ID09IHRydWUpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBjb250ZXh0LnRva2VuLFxuICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyID0gJCgnIycrd3JhcHBlciksXG4gICAgICAgICAgICBwcm9kdWN0X2NsYXNzID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkJyk7XG4gICAgICAgIHZhciAgbGlzdCA9IFtdO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNhbGxQcm9kdWN0T3B0aW9uKCkge1xuICAgICAgICAgICAgcHJvZHVjdF9jbGFzcy5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0SWQgPSAkKGVsZW1lbnQpLmRhdGEoXCJwcm9kdWN0LWlkXCIpO1xuXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKHByb2R1Y3RJZC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZihsaXN0Lmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIGdldFByb2R1Y3RPcHRpb24obGlzdCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uKGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaChsaXN0LCAoaWR4LCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0ge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkID0gbGlzdFtpZHhdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR4dCA9ICQoZWxlbWVudCkuZGF0YSgncHJvZHVjdC1zd2F0Y2gtdmFsdWUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJbdHh0XSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyW3R4dF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmxlbmd0aCA+IDQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb3VudE1vcmVPcHRpb24gID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLW9wdGlvbi1zd2F0Y2gnKS5sZW5ndGggLSA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TGluayA9IHByb2R1Y3Rfd3JhcHBlci5maW5kKCdbZGF0YS1wcm9kdWN0LWlkPVwiJytwcm9kdWN0SWQrJ1wiXScpLmZpbmQoJy5jYXJkLWxpbmsnKS5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGluZGV4ID49IDQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLWZpZWxkIC5zaG93bW9yZScpLmxlbmd0aCA8IDEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tZmllbGQ6bm90KC5mb3JtLWZpZWxkLS1zaXplKScpLmFwcGVuZCgnPGEgaHJlZj1cIicrcHJvZHVjdExpbmsrJ1wiIGNsYXNzPVwic2hvd21vcmVcIj4rJytjb3VudE1vcmVPcHRpb24rJzwvYT4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRQcm9kdWN0T3B0aW9uKGxpc3Qpe1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoKCcvZ3JhcGhxbCcsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0b2tlblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgcXVlcnk6IGBcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkgU2V2ZXJhbFByb2R1Y3RzQnlJRCB7XG4gICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cyhlbnRpdHlJZHM6IFtgK2xpc3QrYF0sIGZpcnN0OiA1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RPcHRpb25zKGZpcnN0OiA1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBNdWx0aXBsZUNob2ljZU9wdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlTdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIFN3YXRjaE9wdGlvblZhbHVlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZXhDb2xvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybCh3aWR0aDogNTApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGB9KSxcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlck9wdGlvbihkYXRhKXtcbiAgICAgICAgICAgIHZhciBhRmlsdGVyID0gZGF0YS5zaXRlLnByb2R1Y3RzLmVkZ2VzO1xuXG4gICAgICAgICAgICAkLmVhY2goYUZpbHRlciwgKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RJZCA9IGFGaWx0ZXJbaW5kZXhdLm5vZGUuZW50aXR5SWQsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLWZpZWxkOm5vdCguZm9ybS1maWVsZC0tc2l6ZSknKSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkU2l6ZSA9IHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1maWVsZC0tc2l6ZScpLFxuICAgICAgICAgICAgICAgICAgICBhRmlsdGVyMiA9IGFGaWx0ZXJbaW5kZXhdLm5vZGUucHJvZHVjdE9wdGlvbnMuZWRnZXM7XG5cbiAgICAgICAgICAgICAgICB2YXIgYUZpbHRlcjMgPSBhRmlsdGVyMi5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubm9kZS5kaXNwbGF5U3R5bGUgPT09ICdTd2F0Y2gnO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdmFyIGFGaWx0ZXI1ID0gYUZpbHRlcjIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLm5vZGUuZGlzcGxheU5hbWUgPT09IGNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdDI7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZihhRmlsdGVyMy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFGaWx0ZXI0ID0gYUZpbHRlcjNbMF0ubm9kZS52YWx1ZXMuZWRnZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGFGaWx0ZXI0LCAoaWR4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGl0bGVWYXIgPSBhRmlsdGVyNFtpZHhdLm5vZGUubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRWYXIgPSBhRmlsdGVyNFtpZHhdLm5vZGUuZW50aXR5SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoQ29sb3JWYXIgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaGV4Q29sb3JzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjEgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaGV4Q29sb3JzWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yMiA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5oZXhDb2xvcnNbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IzID0gYUZpbHRlcjRbaWR4XS5ub2RlLmhleENvbG9yc1syXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaW1hZ2VVcmw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGxlbmd0aENvbG9yVmFyID09IDIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yLmFwcGVuZCgnPGxhYmVsIGNsYXNzPVwiZm9ybS1vcHRpb24gZm9ybS1vcHRpb24tc3dhdGNoXCIgZGF0YS1wcm9kdWN0LXN3YXRjaC12YWx1ZT1cIicraWRWYXIrJ1wiPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdG9vbHRpcFwiPicrdGl0bGVWYXIrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXZhcmlhbnQgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IyXCIgdGl0bGU9XCInK3RpdGxlVmFyKydcIj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jytjb2xvcjErJ1wiPjwvc3Bhbj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jytjb2xvcjIrJ1wiPjwvc3Bhbj48L3NwYW4+PC9sYWJlbD4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihsZW5ndGhDb2xvclZhciA9PT0gMyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IuYXBwZW5kKCc8bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvbiBmb3JtLW9wdGlvbi1zd2F0Y2hcIiBkYXRhLXByb2R1Y3Qtc3dhdGNoLXZhbHVlPVwiJytpZFZhcisnXCI+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi10b29sdGlwXCI+Jyt0aXRsZVZhcisnPC9zcGFuPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvciBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcjJcIiB0aXRsZT1cIicrdGl0bGVWYXIrJ1wiPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMSsnXCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMisnXCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMysnXCI+PC9zcGFuPjwvc3Bhbj48L2xhYmVsPicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKEJvb2xlYW4oY29sb3IxKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IuYXBwZW5kKCc8bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvbiBmb3JtLW9wdGlvbi1zd2F0Y2hcIiBkYXRhLXByb2R1Y3Qtc3dhdGNoLXZhbHVlPVwiJytpZFZhcisnXCI+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi10b29sdGlwXCI+Jyt0aXRsZVZhcisnPC9zcGFuPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvclwiIHRpdGxlPVwiJyt0aXRsZVZhcisnXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAnK2NvbG9yMSsnXCI+PC9zcGFuPjwvbGFiZWw+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoQm9vbGVhbihpbWcpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvci5hcHBlbmQoJzxsYWJlbCBjbGFzcz1cImZvcm0tb3B0aW9uIGZvcm0tb3B0aW9uLXN3YXRjaFwiIGRhdGEtcHJvZHVjdC1zd2F0Y2gtdmFsdWU9XCInK2lkVmFyKydcIj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXRvb2x0aXBcIj4nK3RpdGxlVmFyKyc8L3NwYW4+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLXBhdHRlcm5cIiB0aXRsZT1cIicrdGl0bGVWYXIrJ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCcraW1nKycpXCI+PC9zcGFuPjwvbGFiZWw+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoYUZpbHRlcjUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKHByb2R1Y3RGaWVsZFNpemUubGVuZ3RoIDwgMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLXNpemVcIj48bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvblwiPicrY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0VGV4dC50b1N0cmluZygpKyc8L2xhYmVsPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoKGFGaWx0ZXI1Lmxlbmd0aCA9PSAwKSAmJiAoYUZpbHRlcjMubGVuZ3RoID09IDApKXtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsUHJvZHVjdE9wdGlvbigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQsIGVsKSB7XG4gICAgdmFyICRwb3B1cCA9ICQoJy5sb29rYm9vay1wb3B1cCcpO1xuICAgIHZhciAkZWwgPSBlbDtcblxuICAgIGNvbnN0ICRvcHRpb25zID0ge1xuICAgICAgICB0ZW1wbGF0ZTogJ2hhbG90aGVtZXMvcHJvZHVjdHMvaGFsby1sb29rYm9vay10bXAnXG4gICAgfTtcblxuICAgICRlbC5maW5kKCcuaXRlbSAuaXRlbS1wb2ludCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgJHBvcHVwLnJlbW92ZUNsYXNzKCdpcy1vcGVuJykuZW1wdHkoKTtcblxuICAgICAgICB2YXIgJHByb2RJZCA9ICQoZXZlbnQudGFyZ2V0KS5kYXRhKCdwcm9kdWN0LWlkJyksXG4gICAgICAgICAgICBwb3NpdGlvbiA9ICQoZXZlbnQudGFyZ2V0KS5vZmZzZXQoKSxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9ICRlbC5vZmZzZXQoKTtcblxuICAgICAgICBpZigkcHJvZElkICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKCRwcm9kSWQsICRvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGVycil7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkcG9wdXAuaHRtbChyZXNwb25zZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID49IDU1MSkge1xuICAgICAgICAgICAgICAgICRwb3B1cC5jc3Moeyd0b3AnOiBwb3NpdGlvbi50b3AgLSBjb250YWluZXIudG9wIC0gMTAwLCAnbGVmdCc6IHBvc2l0aW9uLmxlZnQgLSBjb250YWluZXIubGVmdCArIDMwfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRwb3B1cC5jc3Moeyd0b3AnOiBwb3NpdGlvbi50b3AgLSBjb250YWluZXIudG9wICsgMTUsICdsZWZ0JzogMTV9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHBvcHVwLmFkZENsYXNzKFwiaXMtb3BlblwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jbG9zZS1wcm9kdWN0JywgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICgkcG9wdXAuaGFzQ2xhc3MoXCJpcy1vcGVuXCIpKSB7XG4gICAgICAgICAgICAkcG9wdXAucmVtb3ZlQ2xhc3MoXCJpcy1vcGVuXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGlmKCRwb3B1cC5oYXNDbGFzcyhcImlzLW9wZW5cIikpIHtcbiAgICAgICAgICAgIGlmKCgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgkcG9wdXApLmxlbmd0aCA9PT0gMCkgJiYgKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcuaXRlbSAuaXRlbS1wb2ludCcpLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICAkcG9wdXAucmVtb3ZlQ2xhc3MoXCJpcy1vcGVuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9