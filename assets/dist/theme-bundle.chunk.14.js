(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
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











var Category = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Category, _CatalogPage);

  function Category() {
    return _CatalogPage.apply(this, arguments) || this;
  }

  var _proto = Category.prototype;

  _proto.onReady = function onReady() {
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context.urls);

    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    }

    this.showProductsPerPage();
    this.showMoreProducts();
    this.fancyboxVideoBanner();
    this.loadOptionForProductCard(this.context);
    Object(_halothemes_haloSideAllCategory__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(_halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_4__["default"])();
    Object(_halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_7__["default"])(this.context);
    this.reviewShow();
  };

  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this = this;

    var $productListingContainer = $('#product-listing-container .productListing');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $paginatorContainer = $('.pagination');
    var $showMoreContainer = $('.halo-product-show-more');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'halothemes/gallery/halo-product-listing',
        sidebar: 'category/sidebar',
        paginator: 'halothemes/gallery/halo-product-paginator'
      },
      showMore: 'category/show-more'
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

      _this.showMoreProducts();

      $('html, body').animate({
        scrollTop: 0
      }, 100);
    });
  };

  _proto.showProductsPerPage = function showProductsPerPage() {
    this.reviewShow();

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

  _proto.showMoreProducts = function showMoreProducts() {
    var context = this.context;
    $('#listing-showmoreBtn > a').on('click', function (event) {
      event.preventDefault();
      var nextPage = $(".pagination-item--current").next(),
          link = nextPage.find("a").attr("href");
      $('#listing-showmoreBtn > a').addClass('loading');
      $.ajax({
        type: 'get',
        url: link.replace("http://", "//"),
        success: function success(data) {
          function reviewShow(x) {
            var limit = document.querySelectorAll('.productSku1');
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
                // console.log(item.innerHTML)
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
                }, 0) / review3.length * 10) / 10; // console.log(reviewAvg)
                // console.log()

                $(item1.nextElementSibling).append("\n                                <style>    .checked {\n                                    color: rgb(255, 210, 0);\n                            \n                            }\n                            .fa-star-o {\n                                color: rgb(255, 210, 0);\n                        \n                            }\n                            @media (min-width: 768px) {\n                                .checking {\n                                    display: flex;\n                                    gap:5px;\n                                }\n                            }\n                            </style>\n                <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n                                \n                                <span>\n                                <span class=\"fa fa-star" + (0.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                                <span class=\"fa fa-star" + (1.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                                <span class=\"fa fa-star" + (2.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                                <span class=\"fa fa-star" + (3.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                                <span class=\"fa fa-star" + (4.5 <= reviewAvg ? ' checked' : ' fa-star-o') + ("\"></span>      \n                            </span>\n                            <div>\n                                " + review3.length + " Commentaires\n                            </div>")); // $(item1.nextElementSibling).append(`<div>${reviewAvg}</div>`)
              }); //   console.log(review2)
            }).catch(function (err) {
              console.log(err);
            });
          }

          if ($(data).find('#product-listing-container .productListing').length > 0) {
            $('#product-listing-container .productListing').append($(data).find('#product-listing-container .productListing').children());
            reviewShow();
            $('.pagination-list').html($(data).find(".pagination-list").html());
            $('#listing-showmoreBtn > a').removeClass('loading').blur();

            if (Number($(data).find('.pagination-info .end').text()) <= Number($(data).find('.pagination-info .total').text())) {
              $('.pagination .pagination-info .end').text($(data).find('.pagination-info .end').text());
            } else {
              $('.pagination .pagination-info .end').text($(data).find('.pagination-info .total').text());
            }

            nextPage = $(".pagination-item--current").next();

            if (nextPage.length === 0) {
              $('#listing-showmoreBtn > a').addClass('disable').text('No more products');
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
    if ($(".video-block-image[data-fancybox]").length > 0) {
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

    if ($(".button-popup-video[data-fancybox]").length > 0) {
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

  _proto.loadOptionForProductCard = function loadOptionForProductCard(context) {
    if ($('#featured-products .card').length > 0) {
      Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_6__["default"])(context, 'featured-products');
    }

    if ($('#product-listing-container .product').length > 0) {
      Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_6__["default"])(context, 'product-listing-container');
    }
  };

  _proto.reviewShow = function reviewShow() {
    var limit = document.querySelectorAll('.productSku1');
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
        // console.log(item.innerHTML)
        $(item1.nextElementSibling).empty();
        var review3 = [];
        var filterArr = review2.filter(function (item) {
          return item['Product SKU'] === item1.innerHTML;
        });
        filterArr.forEach(function (goku) {
          review3.push(goku['Review rate']);
        });
        var reviewAvg = Math.round(review3.reduce(function (a, b) {
          return a + b;
        }, 0) / review3.length * 10) / 10; // console.log(reviewAvg)
        // console.log()

        $(item1.nextElementSibling).append("\n                <style>    .checked {\n                    color: rgb(255, 210, 0);\n            \n            }\n            .fa-star-o {\n                color: rgb(255, 210, 0);\n        \n            }\n            @media (min-width: 768px) {\n                .checking {\n                    display: flex;\n                    gap:5px;\n                }\n            }\n            @media (min-width: 1025px) {\n                .checking {\n                    display: unset;\n                }\n            }\n            @media (min-width: 1425px) {\n                .checking {\n                    display: flex;\n                }\n            }\n            </style>\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n                \n                <span>\n                <span class=\"fa fa-star" + (0.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                <span class=\"fa fa-star" + (1.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                <span class=\"fa fa-star" + (2.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                <span class=\"fa fa-star" + (3.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                <span class=\"fa fa-star" + (4.5 <= reviewAvg ? ' checked' : ' fa-star-o') + ("\"></span>      \n            </span>\n            <div>\n                " + review3.length + " Commentaires\n            </div>")); // $(item1.nextElementSibling).append(`<div>${reviewAvg}</div>`)
      }); //   console.log(review2)
    }).catch(function (err) {
      console.log(err);
    });
  };

  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJvblJlYWR5IiwiY29tcGFyZVByb2R1Y3RzIiwiY29udGV4dCIsInVybHMiLCIkIiwibGVuZ3RoIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJob29rcyIsIm9uIiwic2hvd1Byb2R1Y3RzUGVyUGFnZSIsInNob3dNb3JlUHJvZHVjdHMiLCJmYW5jeWJveFZpZGVvQmFubmVyIiwibG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkIiwiaGFsb1NpZGVBbGxDYXRlZ29yeSIsInByb2R1Y3REaXNwbGF5TW9kZSIsImhhbG9TdGlja3lUb29sYmFyIiwicmV2aWV3U2hvdyIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsIiRmYWNldGVkU2VhcmNoQ29udGFpbmVyIiwiJHBhZ2luYXRvckNvbnRhaW5lciIsIiRzaG93TW9yZUNvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsImNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJjb25maWciLCJjYXRlZ29yeSIsInNob3BfYnlfcHJpY2UiLCJwcm9kdWN0cyIsImxpbWl0IiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsInNpZGViYXIiLCJwYWdpbmF0b3IiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJGYWNldGVkU2VhcmNoIiwiY29udGVudCIsImh0bWwiLCJmaW5kIiwiY2hpbGRyZW4iLCJ0cmlnZ2VySGFuZGxlciIsImhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInVybCIsIlVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImMiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsInByb3RvdHlwZSIsImZvckVhY2giLCJjYWxsIiwiZWxlbWVudCIsInZhbHVlIiwic2VsZWN0ZWQiLCJlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm5leHRQYWdlIiwibmV4dCIsImxpbmsiLCJhdHRyIiwiYWRkQ2xhc3MiLCJhamF4IiwidHlwZSIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZGF0YSIsIngiLCJyZXZpZXcyIiwiUHJvbWlzZSIsImFsbCIsImZldGNoIiwidGhlbiIsInIiLCJqc29uIiwicHVzaCIsIml0ZW0xIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiZW1wdHkiLCJyZXZpZXczIiwidmlkdSIsImZpbHRlciIsIml0ZW0iLCJpbm5lckhUTUwiLCJnb2t1IiwicmV2aWV3QXZnIiwiTWF0aCIsInJvdW5kIiwicmVkdWNlIiwiYSIsImIiLCJhcHBlbmQiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVDbGFzcyIsImJsdXIiLCJOdW1iZXIiLCJ0ZXh0IiwiZmFuY3lib3giLCJmaWx0ZXJBcnIiLCJDYXRhbG9nUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxROzs7Ozs7Ozs7U0FDakJDLE8sR0FBQSxtQkFBVTtJQUNOQyx3RUFBZSxDQUFDLEtBQUtDLE9BQUwsQ0FBYUMsSUFBZCxDQUFmOztJQUVBLElBQUlDLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CQyxNQUFwQixHQUE2QixDQUFqQyxFQUFvQztNQUNoQyxLQUFLQyxpQkFBTDtJQUNILENBRkQsTUFFTztNQUNILEtBQUtDLGNBQUwsR0FBc0IsS0FBS0EsY0FBTCxDQUFvQkMsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBdEI7TUFDQUMsZ0VBQUssQ0FBQ0MsRUFBTixDQUFTLGtCQUFULEVBQTZCLEtBQUtILGNBQWxDO0lBQ0g7O0lBRUQsS0FBS0ksbUJBQUw7SUFDQSxLQUFLQyxnQkFBTDtJQUNBLEtBQUtDLG1CQUFMO0lBQ0EsS0FB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QUFsQixHQUE4QixZQS9CckIsOERBZ0NULE9BQU9BLFNBQVAsR0FBa0IsVUFBbEIsR0FBOEIsWUFoQ3JCLDhEQWlDVCxPQUFPQSxTQUFQLEdBQWtCLFVBQWxCLEdBQThCLFlBakNyQixvRkFvQ2pDTixPQUFPLENBQUNuRixNQXBDeUIsdUNBQW5DLEVBZHFCLENBb0RyQjtNQUNILENBckRELEVBRFcsQ0F1RFg7SUFDRCxDQXRFSCxFQXlFR2dHLEtBekVILENBeUVTLFVBQUNDLEdBQUQsRUFBUztNQUNaQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtJQUNILENBM0VIO0VBNEVILEM7OztFQXhUaUNTLGdEIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xuaW1wb3J0IEZhY2V0ZWRTZWFyY2ggZnJvbSAnLi9jb21tb24vZmFjZXRlZC1zZWFyY2gnO1xuaW1wb3J0IHByb2R1Y3REaXNwbGF5TW9kZSBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1Byb2R1Y3REaXNwbGF5TW9kZSc7XG5pbXBvcnQgaGFsb1NpZGVBbGxDYXRlZ29yeSBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1NpZGVBbGxDYXRlZ29yeSc7XG5pbXBvcnQgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9BZGRPcHRpb25Gb3JQcm9kdWN0Q2FyZCc7XG5pbXBvcnQgaGFsb1N0aWNreVRvb2xiYXIgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9TdGlja3lUb29sYmFyJztcbmltcG9ydCBmYW5jeWJveCBmcm9tICcuL2hhbG90aGVtZXMvanF1ZXJ5LmZhbmN5Ym94Lm1pbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5IGV4dGVuZHMgQ2F0YWxvZ1BhZ2Uge1xuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XG5cbiAgICAgICAgaWYgKCQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNob3dQcm9kdWN0c1BlclBhZ2UoKTtcbiAgICAgICAgdGhpcy5zaG93TW9yZVByb2R1Y3RzKCk7XG4gICAgICAgIHRoaXMuZmFuY3lib3hWaWRlb0Jhbm5lcigpO1xuICAgICAgICB0aGlzLmxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZCh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIGhhbG9TaWRlQWxsQ2F0ZWdvcnkoKTtcbiAgICAgICAgcHJvZHVjdERpc3BsYXlNb2RlKCk7XG4gICAgICAgIGhhbG9TdGlja3lUb29sYmFyKHRoaXMuY29udGV4dCk7XG4gICAgICAgIHRoaXMucmV2aWV3U2hvdygpXG5cbiAgICB9XG5cbiAgICBpbml0RmFjZXRlZFNlYXJjaCgpIHtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkcGFnaW5hdG9yQ29udGFpbmVyID0gJCgnLnBhZ2luYXRpb24nKTtcbiAgICAgICAgY29uc3QgJHNob3dNb3JlQ29udGFpbmVyID0gJCgnLmhhbG8tcHJvZHVjdC1zaG93LW1vcmUnKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LmNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3BfYnlfcHJpY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ2hhbG90aGVtZXMvZ2FsbGVyeS9oYWxvLXByb2R1Y3QtbGlzdGluZycsXG4gICAgICAgICAgICAgICAgc2lkZWJhcjogJ2NhdGVnb3J5L3NpZGViYXInLFxuICAgICAgICAgICAgICAgIHBhZ2luYXRvcjogJ2hhbG90aGVtZXMvZ2FsbGVyeS9oYWxvLXByb2R1Y3QtcGFnaW5hdG9yJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93TW9yZTogJ2NhdGVnb3J5L3Nob3ctbW9yZScsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5mYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2gocmVxdWVzdE9wdGlvbnMsIChjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgICAgICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcbiAgICAgICAgICAgICRwYWdpbmF0b3JDb250YWluZXIuaHRtbCgkKGNvbnRlbnQucGFnaW5hdG9yKS5maW5kKCcucGFnaW5hdGlvbicpLmNoaWxkcmVuKCkpO1xuICAgICAgICAgICAgJHNob3dNb3JlQ29udGFpbmVyLmh0bWwoJChjb250ZW50LnBhZ2luYXRvcikuZmluZCgnLmhhbG8tcHJvZHVjdC1zaG93LW1vcmUnKS5jaGlsZHJlbigpKTtcblxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcblxuICAgICAgICAgICAgaWYoJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3QnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdCh0aGlzLmNvbnRleHQsICdwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzUGVyUGFnZSgpO1xuICAgICAgICAgICAgdGhpcy5zaG93TW9yZVByb2R1Y3RzKCk7XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93UHJvZHVjdHNQZXJQYWdlKCl7XG4gICAgICAgIHRoaXMucmV2aWV3U2hvdygpXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgIHZhciBjID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJsaW1pdFwiKTtcbiAgICAgICAgICAgIGlmKGMgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgdmFyIGxpbWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0I2xpbWl0IG9wdGlvbicpO1xuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGltaXQsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC52YWx1ZSA9PSBjKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZSkge31cbiAgICB9XG5cbiAgICBzaG93TW9yZVByb2R1Y3RzKCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgICQoJyNsaXN0aW5nLXNob3dtb3JlQnRuID4gYScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdmFyIG5leHRQYWdlID0gJChcIi5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnRcIikubmV4dCgpLFxuICAgICAgICAgICAgICAgIGxpbmsgPSBuZXh0UGFnZS5maW5kKFwiYVwiKS5hdHRyKFwiaHJlZlwiKTtcblxuICAgICAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgICAgICAgICAgICB1cmw6IGxpbmsucmVwbGFjZShcImh0dHA6Ly9cIiwgXCIvL1wiKSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICByZXZpZXdTaG93KHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsaW1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0U2t1MScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJldmlldzIgPSBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly93d3cudGVhbWRlc2submV0L3NlY3VyZS9hcGkvdjIvNTY1NTQvQkVBMjU2NjU5MEVGNEQxNEFBOEQzNUFEMEUyQ0VBNzcvUmV2aWV3L3NlbGVjdC5qc29uXCIpLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihyPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzIucHVzaCguLi5yKX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly93d3cudGVhbWRlc2submV0L3NlY3VyZS9hcGkvdjIvNTY1NTQvQkVBMjU2NjU5MEVGNEQxNEFBOEQzNUFEMEUyQ0VBNzcvUmV2aWV3L3NlbGVjdC5qc29uP3NraXA9NTAwXCIpLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihyPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzIucHVzaCguLi5yKX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly93d3cudGVhbWRlc2submV0L3NlY3VyZS9hcGkvdjIvNTY1NTQvQkVBMjU2NjU5MEVGNEQxNEFBOEQzNUFEMEUyQ0VBNzcvUmV2aWV3L3NlbGVjdC5qc29uP3NraXA9MTAwMFwiKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocj0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvbj9za2lwPTE1MDBcIikudGhlbihyID0+IHIuanNvbigpKS50aGVuKHI9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3Mi5wdXNoKC4uLnIpfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQuZm9yRWFjaCgoaXRlbTEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbS5pbm5lckhUTUwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoaXRlbTEubmV4dEVsZW1lbnRTaWJsaW5nKS5lbXB0eSgpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXZpZXczID0gW11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpZHUgPSByZXZpZXcyLmZpbHRlcihpdGVtID0+IGl0ZW1bJ1Byb2R1Y3QgU0tVJ10gPT09IGl0ZW0xLmlubmVySFRNTClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkdS5mb3JFYWNoKChnb2t1KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXczLnB1c2goZ29rdVsnUmV2aWV3IHJhdGUnXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV2aWV3QXZnID0gTWF0aC5yb3VuZCgocmV2aWV3My5yZWR1Y2UoKGEsYiApID0+IGErIGIsIDApL3JldmlldzMubGVuZ3RoKSAqIDEwKS8xMFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXZpZXdBdmcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChpdGVtMS5uZXh0RWxlbWVudFNpYmxpbmcpLmFwcGVuZChgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZT4gICAgLmNoZWNrZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDIxMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mYS1zdGFyLW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjEwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNoZWNraW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyYCsoMC41IDw9IHJldmlld0F2Zz8gJyBjaGVja2VkJzogJyBmYS1zdGFyLW8nKSArIGBcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhcmArKDEuNSA8PSByZXZpZXdBdmc/ICcgY2hlY2tlZCc6ICcgZmEtc3Rhci1vJykgKyBgXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygyLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyYCsoMy41IDw9IHJldmlld0F2Zz8gJyBjaGVja2VkJzogJyBmYS1zdGFyLW8nKSArIGBcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhcmArKDQuNSA8PSByZXZpZXdBdmc/ICcgY2hlY2tlZCc6ICcgZmEtc3Rhci1vJykgKyBgXCI+PC9zcGFuPiAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3JldmlldzMubGVuZ3RofSBDb21tZW50YWlyZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAkKGl0ZW0xLm5leHRFbGVtZW50U2libGluZykuYXBwZW5kKGA8ZGl2PiR7cmV2aWV3QXZnfTwvZGl2PmApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHJldmlldzIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoZGF0YSkuZmluZCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJykuYXBwZW5kKCQoZGF0YSkuZmluZCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJykuY2hpbGRyZW4oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXZpZXdTaG93KClcblxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24tbGlzdCcpLmh0bWwoJChkYXRhKS5maW5kKFwiLnBhZ2luYXRpb24tbGlzdFwiKS5odG1sKCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjbGlzdGluZy1zaG93bW9yZUJ0biA+IGEnKS5yZW1vdmVDbGFzcygnbG9hZGluZycpLmJsdXIoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE51bWJlcigkKGRhdGEpLmZpbmQoJy5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoKSkgPD0gTnVtYmVyKCQoZGF0YSkuZmluZCgnLnBhZ2luYXRpb24taW5mbyAudG90YWwnKS50ZXh0KCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24gLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dCgkKGRhdGEpLmZpbmQoJy5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoJChkYXRhKS5maW5kKCcucGFnaW5hdGlvbi1pbmZvIC50b3RhbCcpLnRleHQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQYWdlID0gJChcIi5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnRcIikubmV4dCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFBhZ2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykuYWRkQ2xhc3MoJ2Rpc2FibGUnKS50ZXh0KCdObyBtb3JlIHByb2R1Y3RzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCQoZGF0YSkuZmluZCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3QnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdChjb250ZXh0LCAncHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZhbmN5Ym94VmlkZW9CYW5uZXIoKXtcbiAgICAgICAgaWYgKCQoXCIudmlkZW8tYmxvY2staW1hZ2VbZGF0YS1mYW5jeWJveF1cIikubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJChcIi52aWRlby1ibG9jay1pbWFnZVtkYXRhLWZhbmN5Ym94XVwiKS5mYW5jeWJveCh7XG4gICAgICAgICAgICAgICAgJ2F1dG9EaW1lbnNpb25zJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ3BhZGRpbmcnIDogMCxcbiAgICAgICAgICAgICAgICAnd2lkdGgnIDogOTcwLFxuICAgICAgICAgICAgICAgICdoZWlnaHQnIDogNjAwLFxuICAgICAgICAgICAgICAgICdhdXRvU2NhbGUnIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25JbicgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25PdXQnIDogJ25vbmUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkKFwiLmJ1dHRvbi1wb3B1cC12aWRlb1tkYXRhLWZhbmN5Ym94XVwiKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkKFwiLmJ1dHRvbi1wb3B1cC12aWRlb1tkYXRhLWZhbmN5Ym94XVwiKS5mYW5jeWJveCh7XG4gICAgICAgICAgICAgICAgJ2F1dG9EaW1lbnNpb25zJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ3BhZGRpbmcnIDogMCxcbiAgICAgICAgICAgICAgICAnd2lkdGgnIDogOTcwLFxuICAgICAgICAgICAgICAgICdoZWlnaHQnIDogNjAwLFxuICAgICAgICAgICAgICAgICdhdXRvU2NhbGUnIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25JbicgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25PdXQnIDogJ25vbmUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZChjb250ZXh0KXtcbiAgICAgICAgaWYoJCgnI2ZlYXR1cmVkLXByb2R1Y3RzIC5jYXJkJykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdChjb250ZXh0LCAnZmVhdHVyZWQtcHJvZHVjdHMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0JykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdChjb250ZXh0LCAncHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldmlld1Nob3coKSB7XG4gICAgICAgIHZhciBsaW1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0U2t1MScpO1xuICAgICAgICBsZXQgcmV2aWV3MiA9IFtdXG4gICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly93d3cudGVhbWRlc2submV0L3NlY3VyZS9hcGkvdjIvNTY1NTQvQkVBMjU2NjU5MEVGNEQxNEFBOEQzNUFEMEUyQ0VBNzcvUmV2aWV3L3NlbGVjdC5qc29uXCIpLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihyPT57XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcbiAgICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly93d3cudGVhbWRlc2submV0L3NlY3VyZS9hcGkvdjIvNTY1NTQvQkVBMjU2NjU5MEVGNEQxNEFBOEQzNUFEMEUyQ0VBNzcvUmV2aWV3L3NlbGVjdC5qc29uP3NraXA9NTAwXCIpLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihyPT57XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcbiAgICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly93d3cudGVhbWRlc2submV0L3NlY3VyZS9hcGkvdjIvNTY1NTQvQkVBMjU2NjU5MEVGNEQxNEFBOEQzNUFEMEUyQ0VBNzcvUmV2aWV3L3NlbGVjdC5qc29uP3NraXA9MTAwMFwiKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocj0+e1xuICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3Mi5wdXNoKC4uLnIpfSksXG4gICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvbj9za2lwPTE1MDBcIikudGhlbihyID0+IHIuanNvbigpKS50aGVuKHI9PntcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzIucHVzaCguLi5yKX0pLFxuICAgICAgICAgIF0pXG4gICAgICAgICAgLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgIGxpbWl0LmZvckVhY2goKGl0ZW0xKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbS5pbm5lckhUTUwpXG4gICAgICAgICAgICAgICAgJChpdGVtMS5uZXh0RWxlbWVudFNpYmxpbmcpLmVtcHR5KClcblxuICAgICAgICAgICAgICAgIGxldCByZXZpZXczID0gW11cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJBcnIgPSByZXZpZXcyLmZpbHRlcihpdGVtID0+IGl0ZW1bJ1Byb2R1Y3QgU0tVJ10gPT09IGl0ZW0xLmlubmVySFRNTClcbiAgICAgICAgICAgICAgICBmaWx0ZXJBcnIuZm9yRWFjaCgoZ29rdSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXZpZXczLnB1c2goZ29rdVsnUmV2aWV3IHJhdGUnXSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGNvbnN0IHJldmlld0F2ZyA9IE1hdGgucm91bmQoKHJldmlldzMucmVkdWNlKChhLGIgKSA9PiBhKyBiLCAwKS9yZXZpZXczLmxlbmd0aCkgKiAxMCkvMTBcblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJldmlld0F2ZylcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygpXG4gICAgICAgICAgICAgICAgJChpdGVtMS5uZXh0RWxlbWVudFNpYmxpbmcpLmFwcGVuZChgXG4gICAgICAgICAgICAgICAgPHN0eWxlPiAgICAuY2hlY2tlZCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyMTAsIDApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmEtc3Rhci1vIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjEwLCAwKTtcbiAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgICAuY2hlY2tpbmcge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBnYXA6NXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgICAgICAgICAgICAgICAuY2hlY2tpbmcge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB1bnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTQyNXB4KSB7XG4gICAgICAgICAgICAgICAgLmNoZWNraW5nIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyYCsoMC41IDw9IHJldmlld0F2Zz8gJyBjaGVja2VkJzogJyBmYS1zdGFyLW8nKSArIGBcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyYCsoMS41IDw9IHJldmlld0F2Zz8gJyBjaGVja2VkJzogJyBmYS1zdGFyLW8nKSArIGBcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyYCsoMi41IDw9IHJldmlld0F2Zz8gJyBjaGVja2VkJzogJyBmYS1zdGFyLW8nKSArIGBcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyYCsoMy41IDw9IHJldmlld0F2Zz8gJyBjaGVja2VkJzogJyBmYS1zdGFyLW8nKSArIGBcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyYCsoNC41IDw9IHJldmlld0F2Zz8gJyBjaGVja2VkJzogJyBmYS1zdGFyLW8nKSArIGBcIj48L3NwYW4+ICAgICAgXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICR7cmV2aWV3My5sZW5ndGh9IENvbW1lbnRhaXJlc1xuICAgICAgICAgICAgPC9kaXY+YClcbiAgICAgICAgICAgICAgICAvLyAkKGl0ZW0xLm5leHRFbGVtZW50U2libGluZykuYXBwZW5kKGA8ZGl2PiR7cmV2aWV3QXZnfTwvZGl2PmApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhyZXZpZXcyKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=