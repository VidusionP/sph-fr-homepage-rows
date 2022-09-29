(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./assets/js/theme/brand.js":
/*!**********************************!*\
  !*** ./assets/js/theme/brand.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Brand; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./halothemes/haloProductDisplayMode */ "./assets/js/theme/halothemes/haloProductDisplayMode.js");
/* harmony import */ var _halothemes_haloSideAllCategory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./halothemes/haloSideAllCategory */ "./assets/js/theme/halothemes/haloSideAllCategory.js");
/* harmony import */ var _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./halothemes/haloAddOptionForProductCard */ "./assets/js/theme/halothemes/haloAddOptionForProductCard.js");
/* harmony import */ var _halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./halothemes/haloStickyToolbar */ "./assets/js/theme/halothemes/haloStickyToolbar.js");
/* harmony import */ var _halothemes_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./halothemes/jquery.fancybox.min */ "./assets/js/theme/halothemes/jquery.fancybox.min.js");
/* harmony import */ var _halothemes_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_halothemes_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_8__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var Brand = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Brand, _CatalogPage);

  function Brand() {
    return _CatalogPage.apply(this, arguments) || this;
  }

  var _proto = Brand.prototype;

  _proto.onReady = function onReady() {
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context.urls);

    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    }

    this.showProductsPerPage();
    this.showItem();
    this.loadOptionForProductCard(this.context);
    this.showMoreProducts();
    this.fancyboxVideoBanner();
    Object(_halothemes_haloSideAllCategory__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(_halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_4__["default"])();
    Object(_halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_7__["default"])(this.context);
  };

  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this = this;

    var $productListingContainer = $('#product-listing-container .productListing');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $paginatorContainer = $('.pagination');
    var $showMoreContainer = $('.halo-product-show-more');
    var productsPerPage = this.context.brandProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'halothemes/gallery/halo-product-listing',
        sidebar: 'brand/sidebar',
        paginator: 'halothemes/gallery/halo-product-paginator'
      },
      config: {
        shop_by_brand: true,
        brand: {
          products: {
            limit: productsPerPage
          }
        }
      },
      showMore: 'brand/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $paginatorContainer.html($(content.paginator).find('.pagination').children());
      $showMoreContainer.html($(content.paginator).find('.halo-product-show-more').children());
      $('body').triggerHandler('compareReset');

      if ($('#product-listing-container .product').length > 0) {
        Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_6__["default"])(_this.context, 'product-listing-container');
      }

      _this.showProductsPerPage();

      _this.showItem();

      _this.showMoreProducts();

      $('html, body').animate({
        scrollTop: 0
      }, 100);
    });
  };

  _proto.showProductsPerPage = function showProductsPerPage() {
    try {
      var url = new URL(window.location.href);
      var c = url.searchParams.get("limit");

      if (c != null) {
        var limit = document.querySelectorAll('select#limit option');
        Array.prototype.forEach.call(limit, function (element) {
          if (element.value == c) {
            element.selected = true;
          }
        });
      }
    } catch (e) {}
  };

  _proto.showItem = function showItem() {
    var total = parseInt($('.pagination-info .total').text()),
        limit = this.getUrlParameter('limit'),
        productPerPage;

    if (limit !== undefined) {
      productPerPage = limit;
    } else {
      productPerPage = this.context.brandProductsPerPage;
    }

    var start = 1,
        end = total,
        checkLastPage = false,
        lastPage = 1;
    var checkLink = $(".pagination-list .pagination-item--current").next();
    var pageNotLast = lastPage - 1;
    var totalNotLast = pageNotLast * productPerPage;
    var productsLastPage = total - totalNotLast;
    var currentPage = parseInt($('.pagination-item--current > a').text());
    var prevPage = currentPage - 1;

    if (checkLink.length === 0) {
      lastPage = parseInt($(".pagination-item--current").find("a").text());
      checkLastPage = true;
    } else {
      lastPage = parseInt(checkLink.find("a").text());
      checkLastPage = false;
    }

    if (total <= productPerPage) {
      $('.pagination-info .start').text(start);
      $('.pagination-info .end').text(end);
    } else {
      if (currentPage <= 1) {
        end = productPerPage;
      } else {
        start = prevPage * productPerPage + 1;

        if (checkLastPage = true) {
          if ($('.pagination-list .pagination-item--next').length > 0) {
            end = totalNotLast + productsLastPage - 1;
          } else {
            end = totalNotLast + productsLastPage;
          }
        } else {
          end = currentPage * productPerPage - 1;
        }
      }

      $('.pagination-info .start').text(start);
      $('.pagination-info .end').text(end);
    }
  };

  _proto.showMoreProducts = function showMoreProducts() {
    var context = this.context;
    var getUrlParameter = this.getUrlParameter('limit');
    $('#listing-showmoreBtn > a').on('click', function (event) {
      event.preventDefault();
      var nextPage = $(".pagination-item--current").next(),
          link = nextPage.find("a").attr("href");
      $('#listing-showmoreBtn > a').addClass('loading');
      $.ajax({
        type: 'get',
        url: link.replace("http://", "//"),
        success: function success(data) {
          if ($(data).find('#product-listing-container .productListing').length > 0) {
            $('#product-listing-container .productListing').append($(data).find('#product-listing-container .productListing').children());
            $('.pagination-list').html($(data).find(".pagination-list").html());
            $('#listing-showmoreBtn > a').removeClass('loading').blur();
            nextPage = $(".pagination-item--current").next();

            if (nextPage.length === 0) {
              $('#listing-showmoreBtn > a').addClass('disable').text('No more products');
              $('.pagination .pagination-info .end').text($('.pagination-info .total').text());
            } else {
              var limit = getUrlParameter,
                  productPerPage,
                  pageCurrent = parseInt($(".pagination-item--current > a").text());

              if (limit !== undefined) {
                productPerPage = limit;
              } else {
                productPerPage = context.brandProductsPerPage;
              }

              $('.pagination .pagination-info .end').text(parseInt(productPerPage) * pageCurrent);
            }

            if ($(data).find('#product-listing-container .product').length > 0) {
              Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_6__["default"])(context, 'product-listing-container');
            }
          }
        }
      });
    });
  };

  _proto.fancyboxVideoBanner = function fancyboxVideoBanner() {
    if ($(".video-block-image[data-fancybox]").length) {
      $(".video-block-image[data-fancybox]").fancybox({
        'autoDimensions': false,
        'padding': 0,
        'width': 970,
        'height': 600,
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none'
      });
    }

    if ($(".button-popup-video[data-fancybox]").length) {
      $(".button-popup-video[data-fancybox]").fancybox({
        'autoDimensions': false,
        'padding': 0,
        'width': 970,
        'height': 600,
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none'
      });
    }
  };

  _proto.getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
      }
    }
  };

  _proto.loadOptionForProductCard = function loadOptionForProductCard(context) {
    if ($('#featured-products .card').length > 0) {
      Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_6__["default"])(context, 'featured-products');
    }

    if ($('#product-listing-container .product').length > 0) {
      Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_6__["default"])(context, 'product-listing-container');
    }
  };

  return Brand;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYnJhbmQuanMiXSwibmFtZXMiOlsiQnJhbmQiLCJvblJlYWR5IiwiY29tcGFyZVByb2R1Y3RzIiwiY29udGV4dCIsInVybHMiLCIkIiwibGVuZ3RoIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJob29rcyIsIm9uIiwic2hvd1Byb2R1Y3RzUGVyUGFnZSIsInNob3dJdGVtIiwibG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkIiwic2hvd01vcmVQcm9kdWN0cyIsImZhbmN5Ym94VmlkZW9CYW5uZXIiLCJoYWxvU2lkZUFsbENhdGVnb3J5IiwicHJvZHVjdERpc3BsYXlNb2RlIiwiaGFsb1N0aWNreVRvb2xiYXIiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsIiRwYWdpbmF0b3JDb250YWluZXIiLCIkc2hvd01vcmVDb250YWluZXIiLCJwcm9kdWN0c1BlclBhZ2UiLCJicmFuZFByb2R1Y3RzUGVyUGFnZSIsInJlcXVlc3RPcHRpb25zIiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsInNpZGViYXIiLCJwYWdpbmF0b3IiLCJjb25maWciLCJzaG9wX2J5X2JyYW5kIiwiYnJhbmQiLCJwcm9kdWN0cyIsImxpbWl0Iiwic2hvd01vcmUiLCJmYWNldGVkU2VhcmNoIiwiRmFjZXRlZFNlYXJjaCIsImNvbnRlbnQiLCJodG1sIiwiZmluZCIsImNoaWxkcmVuIiwidHJpZ2dlckhhbmRsZXIiLCJoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ1cmwiLCJVUkwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJjIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmb3JFYWNoIiwiY2FsbCIsImVsZW1lbnQiLCJ2YWx1ZSIsInNlbGVjdGVkIiwiZSIsInRvdGFsIiwicGFyc2VJbnQiLCJ0ZXh0IiwiZ2V0VXJsUGFyYW1ldGVyIiwicHJvZHVjdFBlclBhZ2UiLCJ1bmRlZmluZWQiLCJzdGFydCIsImVuZCIsImNoZWNrTGFzdFBhZ2UiLCJsYXN0UGFnZSIsImNoZWNrTGluayIsIm5leHQiLCJwYWdlTm90TGFzdCIsInRvdGFsTm90TGFzdCIsInByb2R1Y3RzTGFzdFBhZ2UiLCJjdXJyZW50UGFnZSIsInByZXZQYWdlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm5leHRQYWdlIiwibGluayIsImF0dHIiLCJhZGRDbGFzcyIsImFqYXgiLCJ0eXBlIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkYXRhIiwiYXBwZW5kIiwicmVtb3ZlQ2xhc3MiLCJibHVyIiwicGFnZUN1cnJlbnQiLCJmYW5jeWJveCIsInNQYXJhbSIsInNQYWdlVVJMIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2VhcmNoIiwic3Vic3RyaW5nIiwic1VSTFZhcmlhYmxlcyIsInNwbGl0Iiwic1BhcmFtZXRlck5hbWUiLCJpIiwiQ2F0YWxvZ1BhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsSzs7Ozs7Ozs7O1NBQ2pCQyxPLEdBQUEsbUJBQVU7SUFDTkMsd0VBQWUsQ0FBQyxLQUFLQyxPQUFMLENBQWFDLElBQWQsQ0FBZjs7SUFFQSxJQUFJQyxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkMsTUFBcEIsR0FBNkIsQ0FBakMsRUFBb0M7TUFDaEMsS0FBS0MsaUJBQUw7SUFDSCxDQUZELE1BRU87TUFDSCxLQUFLQyxjQUFMLEdBQXNCLEtBQUtBLGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCLElBQXpCLENBQXRCO01BQ0FDLGdFQUFLLENBQUNDLEVBQU4sQ0FBUyxrQkFBVCxFQUE2QixLQUFLSCxjQUFsQztJQUNIOztJQUVELEtB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QXNCbkMsU0FBdEIsR0FBa0MsSUFBbEMsR0FBeUNtQyxjQUFjLENBQUMsQ0FBRCxDQUE5RDtNQUNIO0lBQ0o7RUFDSixDOztTQUVEM0Ysd0IsR0FBQSxrQ0FBeUJYLE9BQXpCLEVBQWlDO0lBQzdCLElBQUdFLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCQyxNQUE5QixHQUF1QyxDQUExQyxFQUE0QztNQUN4Q3NDLHVGQUF1QixDQUFDekMsT0FBRCxFQUFVLG1CQUFWLENBQXZCO0lBQ0g7O0lBRUQsSUFBR0UsQ0FBQyxDQUFDLHFDQUFELENBQUQsQ0FBeUNDLE1BQXpDLEdBQWtELENBQXJELEVBQXVEO01BQ25Ec0MsdUZBQXVCLENBQUN6QyxPQUFELEVBQVUsMkJBQVYsQ0FBdkI7SUFDSDtFQUNKLEM7OztFQS9POEJ3RyxnRCIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBob29rcyB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBDYXRhbG9nUGFnZSBmcm9tICcuL2NhdGFsb2cnO1xuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcbmltcG9ydCBGYWNldGVkU2VhcmNoIGZyb20gJy4vY29tbW9uL2ZhY2V0ZWQtc2VhcmNoJztcbmltcG9ydCBwcm9kdWN0RGlzcGxheU1vZGUgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9Qcm9kdWN0RGlzcGxheU1vZGUnO1xuaW1wb3J0IGhhbG9TaWRlQWxsQ2F0ZWdvcnkgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9TaWRlQWxsQ2F0ZWdvcnknO1xuaW1wb3J0IGhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0IGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdENhcmQnO1xuaW1wb3J0IGhhbG9TdGlja3lUb29sYmFyIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvU3RpY2t5VG9vbGJhcic7XG5pbXBvcnQgZmFuY3lib3ggZnJvbSAnLi9oYWxvdGhlbWVzL2pxdWVyeS5mYW5jeWJveC5taW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFuZCBleHRlbmRzIENhdGFsb2dQYWdlIHtcbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0LnVybHMpO1xuXG4gICAgICAgIGlmICgkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEZhY2V0ZWRTZWFyY2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaG93UHJvZHVjdHNQZXJQYWdlKCk7XG4gICAgICAgIHRoaXMuc2hvd0l0ZW0oKTtcbiAgICAgICAgdGhpcy5sb2FkT3B0aW9uRm9yUHJvZHVjdENhcmQodGhpcy5jb250ZXh0KTtcbiAgICAgICAgdGhpcy5zaG93TW9yZVByb2R1Y3RzKCk7XG4gICAgICAgIHRoaXMuZmFuY3lib3hWaWRlb0Jhbm5lcigpO1xuXG4gICAgICAgIGhhbG9TaWRlQWxsQ2F0ZWdvcnkoKTtcbiAgICAgICAgcHJvZHVjdERpc3BsYXlNb2RlKCk7XG4gICAgICAgIGhhbG9TdGlja3lUb29sYmFyKHRoaXMuY29udGV4dCk7XG4gICAgfVxuXG4gICAgaW5pdEZhY2V0ZWRTZWFyY2goKSB7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0TGlzdGluZycpO1xuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgJHBhZ2luYXRvckNvbnRhaW5lciA9ICQoJy5wYWdpbmF0aW9uJyk7XG4gICAgICAgIGNvbnN0ICRzaG93TW9yZUNvbnRhaW5lciA9ICQoJy5oYWxvLXByb2R1Y3Qtc2hvdy1tb3JlJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5icmFuZFByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnaGFsb3RoZW1lcy9nYWxsZXJ5L2hhbG8tcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnYnJhbmQvc2lkZWJhcicsXG4gICAgICAgICAgICAgICAgcGFnaW5hdG9yOiAnaGFsb3RoZW1lcy9nYWxsZXJ5L2hhbG8tcHJvZHVjdC1wYWdpbmF0b3InLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHNob3BfYnlfYnJhbmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgYnJhbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93TW9yZTogJ2JyYW5kL3Nob3ctbW9yZScsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5mYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2gocmVxdWVzdE9wdGlvbnMsIChjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgICAgICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcbiAgICAgICAgICAgICRwYWdpbmF0b3JDb250YWluZXIuaHRtbCgkKGNvbnRlbnQucGFnaW5hdG9yKS5maW5kKCcucGFnaW5hdGlvbicpLmNoaWxkcmVuKCkpO1xuICAgICAgICAgICAgJHNob3dNb3JlQ29udGFpbmVyLmh0bWwoJChjb250ZW50LnBhZ2luYXRvcikuZmluZCgnLmhhbG8tcHJvZHVjdC1zaG93LW1vcmUnKS5jaGlsZHJlbigpKTtcblxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcblxuICAgICAgICAgICAgaWYoJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3QnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdCh0aGlzLmNvbnRleHQsICdwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzUGVyUGFnZSgpO1xuICAgICAgICAgICAgdGhpcy5zaG93SXRlbSgpO1xuICAgICAgICAgICAgdGhpcy5zaG93TW9yZVByb2R1Y3RzKCk7XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93UHJvZHVjdHNQZXJQYWdlKCl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgICB2YXIgYyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibGltaXRcIik7XG4gICAgICAgICAgICBpZihjICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIHZhciBsaW1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCNsaW1pdCBvcHRpb24nKTtcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGxpbWl0LCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQudmFsdWUgPT0gYyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoKGUpIHt9XG4gICAgfVxuXG4gICAgc2hvd0l0ZW0oKSB7XG4gICAgICAgIHZhciB0b3RhbCA9IHBhcnNlSW50KCQoJy5wYWdpbmF0aW9uLWluZm8gLnRvdGFsJykudGV4dCgpKSxcbiAgICAgICAgICAgIGxpbWl0ID0gdGhpcy5nZXRVcmxQYXJhbWV0ZXIoJ2xpbWl0JyksXG4gICAgICAgICAgICBwcm9kdWN0UGVyUGFnZTtcblxuICAgICAgICBpZiAobGltaXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcHJvZHVjdFBlclBhZ2UgPSBsaW1pdDtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgcHJvZHVjdFBlclBhZ2UgPSB0aGlzLmNvbnRleHQuYnJhbmRQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3RhcnQgPSAxLFxuICAgICAgICAgICAgZW5kID0gdG90YWwsXG4gICAgICAgICAgICBjaGVja0xhc3RQYWdlID0gZmFsc2UsXG4gICAgICAgICAgICBsYXN0UGFnZSA9IDE7XG4gICAgICAgICAgICBcbiAgICAgICAgdmFyIGNoZWNrTGluayA9ICQoXCIucGFnaW5hdGlvbi1saXN0IC5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnRcIikubmV4dCgpO1xuICAgICAgICB2YXIgcGFnZU5vdExhc3QgPSBsYXN0UGFnZSAtIDE7XG4gICAgICAgIHZhciB0b3RhbE5vdExhc3QgPSBwYWdlTm90TGFzdCAqIHByb2R1Y3RQZXJQYWdlO1xuICAgICAgICB2YXIgcHJvZHVjdHNMYXN0UGFnZSA9IHRvdGFsIC0gdG90YWxOb3RMYXN0O1xuICAgICAgICB2YXIgY3VycmVudFBhZ2UgPSBwYXJzZUludCgkKCcucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50ID4gYScpLnRleHQoKSk7XG4gICAgICAgIHZhciBwcmV2UGFnZSA9IGN1cnJlbnRQYWdlIC0gMTtcblxuICAgICAgICBpZiAoY2hlY2tMaW5rLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgbGFzdFBhZ2UgPSBwYXJzZUludCgkKFwiLnBhZ2luYXRpb24taXRlbS0tY3VycmVudFwiKS5maW5kKFwiYVwiKS50ZXh0KCkpO1xuICAgICAgICAgICAgY2hlY2tMYXN0UGFnZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYXN0UGFnZSA9IHBhcnNlSW50KGNoZWNrTGluay5maW5kKFwiYVwiKS50ZXh0KCkpO1xuICAgICAgICAgICAgY2hlY2tMYXN0UGFnZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodG90YWwgPD0gcHJvZHVjdFBlclBhZ2UpIHtcbiAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uLWluZm8gLnN0YXJ0JykudGV4dChzdGFydCk7XG4gICAgICAgICAgICAkKCcucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KGVuZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPD0gMSkge1xuICAgICAgICAgICAgICAgIGVuZCA9IHByb2R1Y3RQZXJQYWdlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGFydCA9IChwcmV2UGFnZSAqIHByb2R1Y3RQZXJQYWdlKSArIDE7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrTGFzdFBhZ2UgPSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCQoJy5wYWdpbmF0aW9uLWxpc3QgLnBhZ2luYXRpb24taXRlbS0tbmV4dCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gdG90YWxOb3RMYXN0ICsgcHJvZHVjdHNMYXN0UGFnZSAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA9IHRvdGFsTm90TGFzdCArIHByb2R1Y3RzTGFzdFBhZ2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbmQgPSBjdXJyZW50UGFnZSAqIHByb2R1Y3RQZXJQYWdlIC0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uLWluZm8gLnN0YXJ0JykudGV4dChzdGFydCk7XG4gICAgICAgICAgICAkKCcucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KGVuZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93TW9yZVByb2R1Y3RzKCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgIGNvbnN0IGdldFVybFBhcmFtZXRlciA9IHRoaXMuZ2V0VXJsUGFyYW1ldGVyKCdsaW1pdCcpO1xuICAgICAgICBcbiAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB2YXIgbmV4dFBhZ2UgPSAkKFwiLnBhZ2luYXRpb24taXRlbS0tY3VycmVudFwiKS5uZXh0KCksXG4gICAgICAgICAgICAgICAgbGluayA9IG5leHRQYWdlLmZpbmQoXCJhXCIpLmF0dHIoXCJocmVmXCIpO1xuXG4gICAgICAgICAgICAkKCcjbGlzdGluZy1zaG93bW9yZUJ0biA+IGEnKS5hZGRDbGFzcygnbG9hZGluZycpO1xuXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgICAgICAgICAgIHVybDogbGluay5yZXBsYWNlKFwiaHR0cDovL1wiLCBcIi8vXCIpLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoZGF0YSkuZmluZCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJykuYXBwZW5kKCQoZGF0YSkuZmluZCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJykuY2hpbGRyZW4oKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uLWxpc3QnKS5odG1sKCQoZGF0YSkuZmluZChcIi5wYWdpbmF0aW9uLWxpc3RcIikuaHRtbCgpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKS5ibHVyKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQYWdlID0gJChcIi5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnRcIikubmV4dCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFBhZ2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykuYWRkQ2xhc3MoJ2Rpc2FibGUnKS50ZXh0KCdObyBtb3JlIHByb2R1Y3RzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24gLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dCgkKCcucGFnaW5hdGlvbi1pbmZvIC50b3RhbCcpLnRleHQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpbWl0ID0gZ2V0VXJsUGFyYW1ldGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UGVyUGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUN1cnJlbnQgPSBwYXJzZUludCgkKFwiLnBhZ2luYXRpb24taXRlbS0tY3VycmVudCA+IGFcIikudGV4dCgpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaW1pdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RQZXJQYWdlID0gbGltaXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UGVyUGFnZSA9IGNvbnRleHQuYnJhbmRQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24gLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dChwYXJzZUludChwcm9kdWN0UGVyUGFnZSkqcGFnZUN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZigkKGRhdGEpLmZpbmQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0JykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QoY29udGV4dCwgJ3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmYW5jeWJveFZpZGVvQmFubmVyKCl7XG4gICAgICAgIGlmICgkKFwiLnZpZGVvLWJsb2NrLWltYWdlW2RhdGEtZmFuY3lib3hdXCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgJChcIi52aWRlby1ibG9jay1pbWFnZVtkYXRhLWZhbmN5Ym94XVwiKS5mYW5jeWJveCh7XG4gICAgICAgICAgICAgICAgJ2F1dG9EaW1lbnNpb25zJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ3BhZGRpbmcnIDogMCxcbiAgICAgICAgICAgICAgICAnd2lkdGgnIDogOTcwLFxuICAgICAgICAgICAgICAgICdoZWlnaHQnIDogNjAwLFxuICAgICAgICAgICAgICAgICdhdXRvU2NhbGUnIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25JbicgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25PdXQnIDogJ25vbmUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkKFwiLmJ1dHRvbi1wb3B1cC12aWRlb1tkYXRhLWZhbmN5Ym94XVwiKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQoXCIuYnV0dG9uLXBvcHVwLXZpZGVvW2RhdGEtZmFuY3lib3hdXCIpLmZhbmN5Ym94KHtcbiAgICAgICAgICAgICAgICAnYXV0b0RpbWVuc2lvbnMnOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAncGFkZGluZycgOiAwLFxuICAgICAgICAgICAgICAgICd3aWR0aCcgOiA5NzAsXG4gICAgICAgICAgICAgICAgJ2hlaWdodCcgOiA2MDAsXG4gICAgICAgICAgICAgICAgJ2F1dG9TY2FsZScgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbkluJyA6ICdub25lJyxcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbk91dCcgOiAnbm9uZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VXJsUGFyYW1ldGVyKHNQYXJhbSkge1xuICAgICAgICB2YXIgc1BhZ2VVUkwgPSBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpLFxuICAgICAgICAgICAgc1VSTFZhcmlhYmxlcyA9IHNQYWdlVVJMLnNwbGl0KCcmJyksXG4gICAgICAgICAgICBzUGFyYW1ldGVyTmFtZSxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNVUkxWYXJpYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNQYXJhbWV0ZXJOYW1lID0gc1VSTFZhcmlhYmxlc1tpXS5zcGxpdCgnPScpO1xuXG4gICAgICAgICAgICBpZiAoc1BhcmFtZXRlck5hbWVbMF0gPT09IHNQYXJhbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzUGFyYW1ldGVyTmFtZVsxXSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHNQYXJhbWV0ZXJOYW1lWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkKGNvbnRleHQpe1xuICAgICAgICBpZigkKCcjZmVhdHVyZWQtcHJvZHVjdHMgLmNhcmQnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0KGNvbnRleHQsICdmZWF0dXJlZC1wcm9kdWN0cycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3QnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0KGNvbnRleHQsICdwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9