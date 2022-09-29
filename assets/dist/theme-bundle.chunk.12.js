(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./assets/js/theme/brands.js":
/*!***********************************!*\
  !*** ./assets/js/theme/brands.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Brands; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _halothemes_haloAZBrands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./halothemes/haloAZBrands */ "./assets/js/theme/halothemes/haloAZBrands.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Brands = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Brands, _PageManager);

  function Brands(context) {
    return _PageManager.call(this, context) || this;
  }

  var _proto = Brands.prototype;

  _proto.onReady = function onReady() {
    Object(_halothemes_haloAZBrands__WEBPACK_IMPORTED_MODULE_1__["default"])(this.context);
  };

  return Brands;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./assets/js/theme/halothemes/haloAZBrands.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/halothemes/haloAZBrands.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");

/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  var azWrapper = $('#haloAZBrandsWrapper'),
      azNavigation = $('#haloAZBrandsTable');
  var requestOptions = {
    config: {
      blog: {
        posts: {
          limit: context.themeSettings.brandpage_brands_per_page
        }
      }
    },
    template: 'halothemes/halo-all-brands'
  };

  if (context.themeSettings.halo_brandlayout === 'aztable') {
    getAllBrand();
    brandNavigationEvent();
  }

  function getAllBrand() {
    azWrapper.addClass('is-loading');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.getPage('/brands.php', requestOptions, function (error, response) {
      if (error) {
        return '';
      }

      var list = $(response);
      parseListBrand(list);
      var nextUrl = list.data('brands-list-next');

      if (nextUrl) {
        loadMoreBrands(nextUrl);
      } else {
        azWrapper.removeClass('is-loading');
      }
    });
  }

  function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

  function brandNavigationEvent() {
    azNavigation.on('click', 'a', function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      azNavigation.children('li').removeClass('is-active');
      $target.parent().addClass('is-active');
      var letter = $target.data('href');

      if (letter !== undefined || letter) {
        azWrapper.removeClass('active-all');
        azWrapper.find('.azBrands-group').removeClass('is-active');
        azWrapper.find('[data-letter=' + letter + ']').addClass('is-active');
      } else {
        azWrapper.addClass('active-all');
      }
    });
  }

  function parseListBrand(list) {
    azWrapper.find('.azBrands-group').each(function (index, element) {
      var letter = $(element).data('letter');

      if (!isLetter(letter)) {
        for (var i = 0; i < 10; i++) {
          $('.azBrands-group-list', element).append(list.find('[data-brand-letter=' + i + ']'));
        }
      } else {
        $('.azBrands-group-list', element).append(list.find('[data-brand-letter=' + letter + ']'));
      }

      if ($('.azBrands-group-list', element).children().length > 0) {
        azNavigation.find('[data-letter=' + letter + ']').removeClass('disable').addClass('has-letter');
      }
    });
  }

  function loadMoreBrands(url) {
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.getPage(url, requestOptions, function (error, response) {
      if (error) {
        return '';
      }

      var list = $(response);
      parseListBrand(list);
      var nextUrl = list.data('brands-list-next');

      if (nextUrl) {
        loadMoreBrands(nextUrl);
      } else {
        azWrapper.removeClass('is-loading');
      }
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYnJhbmRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9oYWxvdGhlbWVzL2hhbG9BWkJyYW5kcy5qcyJdLCJuYW1lcyI6WyJCcmFuZHMiLCJjb250ZXh0Iiwib25SZWFkeSIsImhhbG9BWkJyYW5kcyIsIlBhZ2VNYW5hZ2VyIiwiYXpXcmFwcGVyIiwiJCIsImF6TmF2aWdhdGlvbiIsInJlcXVlc3RPcHRpb25zIiwiY29uZmlnIiwiYmxvZyIsInBvc3RzIiwibGltaXQiLCJ0aGVtZVNldHRpbmdzIiwiYnJhbmRwYWdlX2JyYW5kc19wZXJfcGFnZSIsInRlbXBsYXRlIiwiaGFsb19icmFuZGxheW91dCIsImdldEFsbEJyYW5kIiwiYnJhbmROYXZpZ2F0aW9uRXZlbnQiLCJhZGRDbGFzcyIsInV0aWxzIiwiYXBpIiwiZ2V0UGFnZSIsImVycm9yIiwicmVzcG9uc2UiLCJsaXN0IiwicGFyc2VMaXN0QnJhbmQiLCJuZXh0VXJsIiwiZGF0YSIsImxvYWRNb3JlQnJhbmRzIiwicmVtb3ZlQ2xhc3MiLCJpc0xldHRlciIsInN0ciIsImxlbmd0aCIsIm1hdGNoIiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJHRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJjaGlsZHJlbiIsInBhcmVudCIsImxldHRlciIsInVuZGVmaW5lZCIsImZpbmQiLCJlYWNoIiwiaW5kZXgiLCJlbGVtZW50IiwiaSIsImFwcGVuZCIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFcUJBLE07OztFQUNwQixnQkFBWUMsT0FBWixFQUFxQjtJQUFBLE9BQ2Qsd0JBQU1BLE9BQU4sQ0FEYztFQUVqQjs7OztTQUVKQyxPLEdBQUEsbUJBQVU7SUFDVEMsd0VBQVksQ0FBQyxLQUFLRixPQUFOLENBQVo7RUFDRyxDOzs7RUFQK0JHLHFEOzs7Ozs7Ozs7Ozs7OztBQ0hwQztBQUFBO0FB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T0FBRCxDQUFkO01BQ0gsQ0FGRCxNQUVNO1FBQ0Z0QixTQUFTLENBQUN5QixXQUFWLENBQXNCLFlBQXRCO01BQ0g7SUFDSixDQWhCRDtFQWlCSDtBQUNKLEMiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBoYWxvQVpCcmFuZHMgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9BWkJyYW5kcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyYW5kcyBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcblx0Y29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICB9XG4gICAgXG5cdG9uUmVhZHkoKSB7XG5cdFx0aGFsb0FaQnJhbmRzKHRoaXMuY29udGV4dCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICBjb25zdCBheldyYXBwZXIgPSAkKCcjaGFsb0FaQnJhbmRzV3JhcHBlcicpLFxuICAgICAgICBhek5hdmlnYXRpb24gPSAkKCcjaGFsb0FaQnJhbmRzVGFibGUnKTtcblxuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgIGJsb2c6IHtcbiAgICAgICAgICAgICAgICBwb3N0czoge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdDogY29udGV4dC50aGVtZVNldHRpbmdzLmJyYW5kcGFnZV9icmFuZHNfcGVyX3BhZ2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlOiAnaGFsb3RoZW1lcy9oYWxvLWFsbC1icmFuZHMnLFxuICAgIH07XG5cbiAgICBpZiAoY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9fYnJhbmRsYXlvdXQgPT09ICdhenRhYmxlJykge1xuICAgICAgICBnZXRBbGxCcmFuZCgpO1xuICAgICAgICBicmFuZE5hdmlnYXRpb25FdmVudCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEFsbEJyYW5kKCl7XG4gICAgICAgIGF6V3JhcHBlci5hZGRDbGFzcygnaXMtbG9hZGluZycpO1xuXG4gICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKCcvYnJhbmRzLnBocCcsIHJlcXVlc3RPcHRpb25zLCAoZXJyb3IsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBsaXN0ID0gJChyZXNwb25zZSk7XG5cbiAgICAgICAgICAgIHBhcnNlTGlzdEJyYW5kKGxpc3QpO1xuXG4gICAgICAgICAgICBjb25zdCBuZXh0VXJsID0gbGlzdC5kYXRhKCdicmFuZHMtbGlzdC1uZXh0Jyk7XG5cbiAgICAgICAgICAgIGlmIChuZXh0VXJsKSB7XG4gICAgICAgICAgICAgICAgbG9hZE1vcmVCcmFuZHMobmV4dFVybCk7XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgYXpXcmFwcGVyLnJlbW92ZUNsYXNzKCdpcy1sb2FkaW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzTGV0dGVyKHN0cikge1xuICAgICAgICByZXR1cm4gc3RyLmxlbmd0aCA9PT0gMSAmJiBzdHIubWF0Y2goL1thLXpdL2kpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJyYW5kTmF2aWdhdGlvbkV2ZW50KCl7XG4gICAgICAgIGF6TmF2aWdhdGlvbi5vbignY2xpY2snLCAnYScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgICAgIGF6TmF2aWdhdGlvbi5jaGlsZHJlbignbGknKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICR0YXJnZXQucGFyZW50KCkuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICBjb25zdCBsZXR0ZXIgPSAkdGFyZ2V0LmRhdGEoJ2hyZWYnKTtcblxuICAgICAgICAgICAgaWYgKGxldHRlciAhPT0gdW5kZWZpbmVkIHx8IGxldHRlcikge1xuICAgICAgICAgICAgICAgIGF6V3JhcHBlci5yZW1vdmVDbGFzcygnYWN0aXZlLWFsbCcpO1xuICAgICAgICAgICAgICAgIGF6V3JhcHBlci5maW5kKCcuYXpCcmFuZHMtZ3JvdXAnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgYXpXcmFwcGVyLmZpbmQoJ1tkYXRhLWxldHRlcj0nK2xldHRlcisnXScpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXpXcmFwcGVyLmFkZENsYXNzKCdhY3RpdmUtYWxsJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlTGlzdEJyYW5kKGxpc3Qpe1xuICAgICAgICBheldyYXBwZXIuZmluZCgnLmF6QnJhbmRzLWdyb3VwJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHZhciBsZXR0ZXIgPSAkKGVsZW1lbnQpLmRhdGEoJ2xldHRlcicpO1xuXG4gICAgICAgICAgICBpZighaXNMZXR0ZXIobGV0dGVyKSl7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5hekJyYW5kcy1ncm91cC1saXN0JywgZWxlbWVudCkuYXBwZW5kKGxpc3QuZmluZCgnW2RhdGEtYnJhbmQtbGV0dGVyPScraSsnXScpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJy5hekJyYW5kcy1ncm91cC1saXN0JywgZWxlbWVudCkuYXBwZW5kKGxpc3QuZmluZCgnW2RhdGEtYnJhbmQtbGV0dGVyPScrbGV0dGVyKyddJykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZigkKCcuYXpCcmFuZHMtZ3JvdXAtbGlzdCcsIGVsZW1lbnQpLmNoaWxkcmVuKCkubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgYXpOYXZpZ2F0aW9uLmZpbmQoJ1tkYXRhLWxldHRlcj0nK2xldHRlcisnXScpLnJlbW92ZUNsYXNzKCdkaXNhYmxlJykuYWRkQ2xhc3MoJ2hhcy1sZXR0ZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZE1vcmVCcmFuZHModXJsKSB7XG4gICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgcmVxdWVzdE9wdGlvbnMsIChlcnJvciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGxpc3QgPSAkKHJlc3BvbnNlKTtcblxuICAgICAgICAgICAgcGFyc2VMaXN0QnJhbmQobGlzdCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHRVcmwgPSBsaXN0LmRhdGEoJ2JyYW5kcy1saXN0LW5leHQnKTtcblxuICAgICAgICAgICAgaWYgKG5leHRVcmwpIHtcbiAgICAgICAgICAgICAgICBsb2FkTW9yZUJyYW5kcyhuZXh0VXJsKTtcbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICBheldyYXBwZXIucmVtb3ZlQ2xhc3MoJ2lzLWxvYWRpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==