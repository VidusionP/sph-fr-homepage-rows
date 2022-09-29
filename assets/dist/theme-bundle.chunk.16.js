(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./assets/js/theme/search.js":
/*!***********************************!*\
  !*** ./assets/js/theme/search.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_url_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jstree */ "./node_modules/jstree/dist/jstree.min.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jstree__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./halothemes/haloProductDisplayMode */ "./assets/js/theme/halothemes/haloProductDisplayMode.js");
/* harmony import */ var _halothemes_haloSideAllCategory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./halothemes/haloSideAllCategory */ "./assets/js/theme/halothemes/haloSideAllCategory.js");
/* harmony import */ var _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./halothemes/haloAddOptionForProductCard */ "./assets/js/theme/halothemes/haloAddOptionForProductCard.js");
/* harmony import */ var _halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./halothemes/haloStickyToolbar */ "./assets/js/theme/halothemes/haloStickyToolbar.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }















var Search = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Search, _CatalogPage);

  function Search() {
    return _CatalogPage.apply(this, arguments) || this;
  }

  var _proto = Search.prototype;

  _proto.formatCategoryTreeForJSTree = function formatCategoryTreeForJSTree(node) {
    var _this = this;

    var nodeData = {
      text: node.data,
      id: node.metadata.id,
      state: {
        selected: node.selected
      }
    };

    if (node.state) {
      nodeData.state.opened = node.state === 'open';
      nodeData.children = true;
    }

    if (node.children) {
      nodeData.children = [];
      node.children.forEach(function (childNode) {
        nodeData.children.push(_this.formatCategoryTreeForJSTree(childNode));
      });
    }

    return nodeData;
  };

  _proto.showProducts = function showProducts(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }

    this.$productListingContainer.removeClass('u-hiddenVisually');
    this.$facetedSearchContainer.removeClass('u-hiddenVisually');
    this.$contentResultsContainer.addClass('u-hiddenVisually');
    $('[data-content-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-content-results-toggle]').addClass('navBar-action');
    $('[data-product-results-toggle]').removeClass('navBar-action');
    $('[data-product-results-toggle]').addClass('navBar-action-color--active');

    if (!navigate) {
      return;
    }

    var searchData = $('#search-results-product-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].goToUrl(url);
  };

  _proto.showContent = function showContent(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }

    this.$contentResultsContainer.removeClass('u-hiddenVisually');
    this.$productListingContainer.addClass('u-hiddenVisually');
    this.$facetedSearchContainer.addClass('u-hiddenVisually');
    $('[data-product-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-product-results-toggle]').addClass('navBar-action');
    $('[data-content-results-toggle]').removeClass('navBar-action');
    $('[data-content-results-toggle]').addClass('navBar-action-color--active');

    if (!navigate) {
      return;
    }

    var searchData = $('#search-results-content-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].goToUrl(url);
  };

  _proto.onReady = function onReady() {
    var _this2 = this;

    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_3__["default"])(this.context.urls);
    var $searchForm = $('[data-advanced-search-form]');
    var $categoryTreeContainer = $searchForm.find('[data-search-category-tree]');
    var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);
    var treeData = [];
    this.$productListingContainer = $('#product-listing-container');
    this.$facetedSearchContainer = $('#faceted-search-container');
    this.$contentResultsContainer = $('#search-results-content'); // Init faceted search

    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    } // Init collapsibles


    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_6__["default"])();
    $('[data-product-results-toggle]').on('click', function (event) {
      event.preventDefault();

      _this2.showProducts();
    });
    $('[data-content-results-toggle]').on('click', function (event) {
      event.preventDefault();

      _this2.showContent();
    });

    if (this.$productListingContainer.find('li.product').length === 0 || url.query.section === 'content') {
      this.showContent(false);
    } else {
      this.showProducts(false);
    }

    var validator = this.initValidation($searchForm).bindValidation($searchForm.find('#search_query_adv'));
    this.context.categoryTree.forEach(function (node) {
      treeData.push(_this2.formatCategoryTreeForJSTree(node));
    });
    this.categoryTreeData = treeData;
    this.createCategoryTree($categoryTreeContainer);
    $searchForm.on('submit', function (event) {
      var selectedCategoryIds = $categoryTreeContainer.jstree().get_selected();

      if (!validator.check()) {
        return event.preventDefault();
      }

      $searchForm.find('input[name="category\[\]"]').remove();

      for (var _iterator = _createForOfIteratorHelperLoose(selectedCategoryIds), _step; !(_step = _iterator()).done;) {
        var categoryId = _step.value;
        var input = $('<input>', {
          type: 'hidden',
          name: 'category[]',
          value: categoryId
        });
        $searchForm.append(input);
      }
    });
    this.showProductsPerPage();
    this.showMoreProducts();
    this.showItem();
    this.loadOptionForProductCard(this.context);
    this.fancyboxVideoBanner();
    Object(_halothemes_haloSideAllCategory__WEBPACK_IMPORTED_MODULE_10__["default"])();
    Object(_halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_9__["default"])();
    Object(_halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_12__["default"])(this.context);
    this.reviewShow();
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

        $(item1.nextElementSibling).append("\n                <style>    .checked {\n                    color: rgb(255, 210, 0);\n            \n            }\n            .fa-star-o {\n                color: rgb(255, 210, 0);\n        \n            }\n            @media (min-width: 768px) {\n                .checking {\n                    display: flex;\n                    gap:5px;\n                }\n            }\n            @media (min-width: 1025px) {\n                .checking {\n                    display: unset;\n                }\n            }\n            @media (min-width: 1425px) {\n                .checking {\n                    display: flex;\n                }\n            }\n            </style>\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n                \n                <span>\n                <span class=\"fa fa-star" + (0.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                <span class=\"fa fa-star" + (1.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                <span class=\"fa fa-star" + (2.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                <span class=\"fa fa-star" + (3.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                <span class=\"fa fa-star" + (4.5 <= reviewAvg ? ' checked' : ' fa-star-o') + ("\"></span>      \n            </span>\n            <div>\n                " + review3.length + " Commentaires\n            </div>")); // $(item1.nextElementSibling).append(`<div>${reviewAvg}</div>`)
      }); //   console.log(review2)
    }).catch(function (err) {
      console.log(err);
    });
  };

  _proto.loadTreeNodes = function loadTreeNodes(node, cb) {
    var _this3 = this;

    $.ajax({
      url: '/remote/v1/category-tree',
      data: {
        selectedCategoryId: node.id,
        prefix: 'category'
      },
      headers: {
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      }
    }).done(function (data) {
      var formattedResults = [];
      data.forEach(function (dataNode) {
        formattedResults.push(_this3.formatCategoryTreeForJSTree(dataNode));
      });
      cb(formattedResults);
    });
  };

  _proto.createCategoryTree = function createCategoryTree($container) {
    var _this4 = this;

    var treeOptions = {
      core: {
        data: function data(node, cb) {
          // Root node
          if (node.id === '#') {
            cb(_this4.categoryTreeData);
          } else {
            // Lazy loaded children
            _this4.loadTreeNodes(node, cb);
          }
        },
        themes: {
          icons: true
        }
      },
      checkbox: {
        three_state: false
      },
      plugins: ['checkbox']
    };
    $container.jstree(treeOptions);
  };

  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this5 = this;

    var $productListingContainer = $('#product-listing-container .productListing');
    var $contentListingContainer = $('#search-results-content');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $searchHeading = $('#search-results-heading');
    var $searchCount = $('#search-results-product-count');
    var $contentCount = $('#search-results-content-count');
    var $paginatorContainer = $('.pagination');
    var $showMoreContainer = $('.halo-product-show-more');
    var productsPerPage = this.context.searchProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'halothemes/gallery/halo-product-listing',
        contentListing: 'search/content-listing',
        sidebar: 'search/sidebar',
        heading: 'search/heading',
        productCount: 'search/product-count',
        contentCount: 'search/content-count',
        paginator: 'halothemes/gallery/halo-product-paginator'
      },
      config: {
        product_results: {
          limit: productsPerPage
        }
      },
      showMore: 'search/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__["default"](requestOptions, function (content) {
      $searchHeading.html(content.heading);
      var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);

      if (url.query.section === 'content') {
        $contentListingContainer.html(content.contentListing);
        $contentCount.html(content.contentCount);

        _this5.showContent(false);
      } else {
        $productListingContainer.html(content.productListing);
        $facetedSearchContainer.html(content.sidebar);
        $searchCount.html(content.productCount);
        $paginatorContainer.html($(content.paginator).find('.pagination').children());
        $showMoreContainer.html($(content.paginator).find('.halo-product-show-more').children());

        _this5.showProducts(false);

        _this5.showProductsPerPage();

        _this5.showItem();

        _this5.showMoreProducts();

        if ($('#product-listing-container .product').length > 0) {
          Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_11__["default"])(_this5.context, 'product-listing-container');
        }
      }

      $('body').triggerHandler('compareReset');
      $('html, body').animate({
        scrollTop: 0
      }, 100);
    });
  };

  _proto.initValidation = function initValidation($form) {
    this.$form = $form;
    this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_8__["default"])({
      submit: $form
    });
    return this;
  };

  _proto.bindValidation = function bindValidation($element) {
    if (this.validator) {
      this.validator.add({
        selector: $element,
        validate: 'presence',
        errorMessage: $element.data('errorMessage')
      });
    }

    return this;
  };

  _proto.check = function check() {
    if (this.validator) {
      this.validator.performCheck();
      return this.validator.areAll('valid');
    }

    return false;
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
          function reviewShow() {
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

                $(item1.nextElementSibling).append("\n                                <style>    .checked {\n                                    color: rgb(255, 210, 0);\n                            \n                            }\n                            .fa-star-o {\n                                color: rgb(255, 210, 0);\n                        \n                            }\n                            @media (min-width: 768px) {\n                                .checking {\n                                    display: flex;\n                                    gap:5px;\n                                }\n                            }\n                            @media (min-width: 1025px) {\n                                .checking {\n                                    display: unset;\n                                }\n                            }\n                            @media (min-width: 1425px) {\n                                .checking {\n                                    display: flex;\n                                }\n                            }\n                            </style>\n                <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n                                \n                                <span>\n                                <span class=\"fa fa-star" + (0.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                                <span class=\"fa fa-star" + (1.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                                <span class=\"fa fa-star" + (2.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                                <span class=\"fa fa-star" + (3.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                                <span class=\"fa fa-star" + (4.5 <= reviewAvg ? ' checked' : ' fa-star-o') + ("\"></span>      \n                            </span>\n                            <div>\n                                " + review3.length + " Commentaires\n                            </div>")); // $(item1.nextElementSibling).append(`<div>${reviewAvg}</div>`)
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
                productPerPage = context.searchProductsPerPage;
              }

              $('.pagination .pagination-info .end').text(parseInt(productPerPage) * pageCurrent);
            }

            if ($(data).find('#product-listing-container .product').length > 0) {
              Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_11__["default"])(context, 'product-listing-container');
            }
          }
        }
      });
    });
  };

  _proto.showItem = function showItem() {
    var total = parseInt($('.pagination-info .total').text()),
        limit = this.getUrlParameter('limit'),
        productPerPage;

    if (limit !== undefined) {
      productPerPage = limit;
    } else {
      productPerPage = this.context.searchProductsPerPage;
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
          end = currentPage * productPerPage;
        }
      }

      $('.pagination-info .start').text(start);
      $('.pagination-info .end').text(end);
    }
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
      Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_11__["default"])(context, 'featured-products');
    }

    if ($('#product-listing-container .product').length > 0) {
      Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_11__["default"])(context, 'product-listing-container');
    }
  };

  return Search;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvc2VhcmNoLmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsImZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZSIsIm5vZGUiLCJub2RlRGF0YSIsInRleHQiLCJkYXRhIiwiaWQiLCJtZXRhZGF0YSIsInN0YXRlIiwic2VsZWN0ZWQiLCJvcGVuZWQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJwdXNoIiwic2hvd1Byb2R1Y3RzIiwibmF2aWdhdGUiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCJyZW1vdmVDbGFzcyIsIiRmYWNldGVkU2VhcmNoQ29udGFpbmVyIiwiJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyIiwiYWRkQ2xhc3MiLCIkIiwic2VhcmNoRGF0YSIsInVybCIsImNvdW50IiwidXJsVXRpbHMiLCJyZXBsYWNlUGFyYW1zIiwicGFnZSIsImdvVG9VcmwiLCJzaG93Q29udGVudCIsIm9uUmVhZHkiLCJjb21wYXJlUHJvZHVjdHMiLCJjb250ZXh0IiwidXJscyIsIiRzZWFyY2hGb3JtIiwiJGNhdGVnb3J5VHJlZUNvbnRhaW5lciIsImZpbmQiLCJVcmwiLCJwYXJzZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInRyZWVEYXRhIiwibGVuZ3RoIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJob29rcyIsIm9uIiwiY29sbGFwc2libGVGYWN0b3J5IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInF1ZXJ5Iiwic2VjdGlvbiIsInZhbGlkYXRvciIsImluaXRWYWxpZGF0aW9uIiwiYmluZFZhbGlkYXRpb24iLCJjYXRlZ29yeVRyZWUiLCJjYXRlZ29yeVRyZWVEYXRhIiwiY3JlYXRlQ2F0ZWdvcnlUcmVlIiwic2VsZWN0ZWRDYXRlZ29yeUlkcyIsImpzdHJlZSIsImdldF9zZWxlY3RlZCIsImNoZWNrIiwicmVtb3ZlIiwiY2F0ZWdvcnlJZCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImFwcGVuZCIsInNob3dQcm9kdWN0c1BlclBhZ2UiLCJzaG93TW9yZVByb2R1Y3RzIiwic2hvd0l0ZW0iLCJsb2FkT3B0aW9uRm9yUHJvZHVjdENhcmQiLCJmYW5jeWJveFZpZGVvQmFubmVyIiwiaGFsb1NpZGVBbGxDYXRlZ29yeSIsInByb2R1Y3REaXNwbGF5TW9kZSIsImhhbG9TdGlja3lUb29sYmFyIiwicmV2aWV3U2hvdyIsImxpbWl0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmV2aWV3MiIsIlByb21pc2UiLCJhbGwiLCJmZXRjaCIsInRoZW4iLCJyIiwianNvbiIsIml0ZW0xIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiZW1wdHkiLCJyZXZpZXczIiwidmlkdSIsImZpbHRlciIsIml0ZW0iLCJpbm5lckhUTUwiLCJnb2t1IiwicmV2aWV3QXZnIiwiTWF0aCIsInJvdW5kIiwicmVkdWNlIiwiYSIsImIiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJsb2FkVHJlZU5vZGVzIiwiY2IiLCJhamF4Iiwic2VsZWN0ZWRDYXRlZ29yeUlkIiwicHJlZml4IiwiaGVhZGVycyIsIkJDRGF0YSIsImNzcmZfdG9rZW4iLCJkb25lIiwiZm9ybWF0dGVkUmVzdWx0cyIsImRhdGFOb2RlIiwiJGNvbnRhaW5lciIsInRyZWVPcHRpb25zIiwiY29yZSIsInRoZW1lcyIsImljb25zIiwiY2hlY2tib3giLCJ0aHJlZV9zdGF0ZSIsInBsdWdpbnMiLCIkY29udGVudExpc3RpbmdDb250YWluZXIiLCIkc2VhcmNoSGVhZGluZyIsIiRzZWFyY2hDb3VudCIsIiRjb250ZW50Q291bnQiLCIkcGFnaW5hdG9yQ29udGFpbmVyIiwiJHNob3dNb3JlQ29udGFpbmVyIiwicHJvZHVjdHNQZXJQYWdlIiwic2VhcmNoUHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwiY29udGVudExpc3RpbmciLCJzaWRlYmFyIiwiaGVhZGluZyIsInByb2R1Y3RDb3VudCIsImNvbnRlbnRDb3VudCIsInBhZ2luYXRvciIsImNvbmZpZyIsInByb2R1Y3RfcmVzdWx0cyIsInNob3dNb3JlIiwiZmFjZXRlZFNlYXJjaCIsIkZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiaHRtbCIsImhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0IiwidHJpZ2dlckhhbmRsZXIiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiJGZvcm0iLCJub2QiLCJzdWJtaXQiLCIkZWxlbWVudCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJlcnJvck1lc3NhZ2UiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJVUkwiLCJjIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJjYWxsIiwiZWxlbWVudCIsImUiLCJnZXRVcmxQYXJhbWV0ZXIiLCJuZXh0UGFnZSIsIm5leHQiLCJsaW5rIiwiYXR0ciIsInJlcGxhY2UiLCJzdWNjZXNzIiwiYmx1ciIsInByb2R1Y3RQZXJQYWdlIiwicGFnZUN1cnJlbnQiLCJwYXJzZUludCIsInVuZGVmaW5lZCIsInRvdGFsIiwic3RhcnQiLCJlbmQiLCJjaGVja0xhc3RQYWdlIiwibGFzdFBhZ2UiLCJjaGVja0xpbmsiLCJwYWdlTm90TGFzdCIsInRvdGFsTm90TGFzdCIsInByb2R1Y3RzTGFzdFBhZ2UiLCJjdXJyZW50UGFnZSIsInByZXZQYWdlIiwiZmFuY3lib3giLCJzUGFyYW0iLCJzUGFnZVVSTCIsImRlY29kZVVSSUNvbXBvbmVudCIsInNlYXJjaCIsInN1YnN0cmluZyIsInNVUkxWYXJpYWJsZXMiLCJzcGxpdCIsInNQYXJhbWV0ZXJOYW1lIiwiaSIsIkNhdGFsb2dQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNwQixJQUFJQyxRQUFRLEdBQUdDLGtCQUFrQixDQUFDbEssTUFBTSxDQUFDQyxRQUFQLENBQWdCa0ssTUFBaEIsQ0FBdUJDLFNBQXZCLENBQWlDLENBQWpDLENBQUQsQ0FBakM7SUFBQSxJQUNJQyxhQUFhLEdBQUdKLFFBQVEsQ0FBQ0ssS0FBVCxDQUFlLEdBQWYsQ0FEcEI7SUFBQSxJQUVJQyxjQUZKO0lBQUEsSUFHSUMsQ0FISjs7SUFLQSxLQUFLQSxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdILGFBQWEsQ0FBQ2pLLE1BQTlCLEVBQXNDb0ssQ0FBQyxFQUF2QyxFQUEyQztNQUN2Q0QsY0FBYyxHQUFHRixhQUFhLENBQUNHLENBQUQsQ0FBYixDQUFpQkYsS0FBakIsQ0FBdUIsR0FBdkIsQ0FBakI7O01BRUEsSUFBSUMsY0FBYyxDQUFDLENBQUQsQ0FBZCxLQUFzQlAsTUFBMUIsRUFBa0M7UUFDOUIsT0FBT08sY0FBYyxDQUFDLENBQUQsQ0FBZCxLQUFzQnBCLFNBQXRCLEdBQWtDLElBQWxDLEdBQXlDb0IsY0FBYyxDQUFDLENBQUQsQ0FBOUQ7TUFDSDtJQUNKO0VBQ0osQzs7U0FFRHBJLHdCLEdBQUEsa0NBQXlCMUMsT0FBekIsRUFBaUM7SUFDN0IsSUFBR1gsQ0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJzQixNQUE5QixHQUF1QyxDQUExQyxFQUE0QztNQUN4QzZHLHdGQUF1QixDQUFDeEgsT0FBRCxFQUFVLG1CQUFWLENBQXZCO0lBQ0g7O0lBRUQsSUFBR1gsQ0FBQyxDQUFDLHFDQUFELENBQUQsQ0FBeUNzQixNQUF6QyxHQUFrRCxDQUFyRCxFQUF1RDtNQUNuRDZHLHdGQUF1QixDQUFDeEgsT0FBRCxFQUFVLDJCQUFWLENBQXZCO0lBQ0g7RUFDSixDOzs7RUFsbkIrQmdMLGdEIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vY29tbW9uL3VybC11dGlscyc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCAnanN0cmVlJztcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcbmltcG9ydCBwcm9kdWN0RGlzcGxheU1vZGUgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9Qcm9kdWN0RGlzcGxheU1vZGUnO1xuaW1wb3J0IGhhbG9TaWRlQWxsQ2F0ZWdvcnkgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9TaWRlQWxsQ2F0ZWdvcnknO1xuaW1wb3J0IGhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0IGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdENhcmQnO1xuaW1wb3J0IGhhbG9TdGlja3lUb29sYmFyIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvU3RpY2t5VG9vbGJhcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIENhdGFsb2dQYWdlIHtcbiAgICBmb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUobm9kZSkge1xuICAgICAgICBjb25zdCBub2RlRGF0YSA9IHtcbiAgICAgICAgICAgIHRleHQ6IG5vZGUuZGF0YSxcbiAgICAgICAgICAgIGlkOiBub2RlLm1ldGFkYXRhLmlkLFxuICAgICAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogbm9kZS5zZWxlY3RlZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG5vZGUuc3RhdGUpIHtcbiAgICAgICAgICAgIG5vZGVEYXRhLnN0YXRlLm9wZW5lZCA9IG5vZGUuc3RhdGUgPT09ICdvcGVuJztcbiAgICAgICAgICAgIG5vZGVEYXRhLmNoaWxkcmVuID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbiA9IFtdO1xuICAgICAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbi5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKGNoaWxkTm9kZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZURhdGE7XG4gICAgfVxuXG4gICAgc2hvd1Byb2R1Y3RzKG5hdmlnYXRlID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICB0aGlzLiRmYWNldGVkU2VhcmNoQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIHRoaXMuJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG5cbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uJyk7XG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xuXG4gICAgICAgIGlmICghbmF2aWdhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlYXJjaERhdGEgPSAkKCcjc2VhcmNoLXJlc3VsdHMtcHJvZHVjdC1jb3VudCBzcGFuJykuZGF0YSgpO1xuICAgICAgICBjb25zdCB1cmwgPSAoc2VhcmNoRGF0YS5jb3VudCA+IDApID8gc2VhcmNoRGF0YS51cmwgOiB1cmxVdGlscy5yZXBsYWNlUGFyYW1zKHNlYXJjaERhdGEudXJsLCB7XG4gICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICB9KTtcblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG4gICAgfVxuXG4gICAgc2hvd0NvbnRlbnQobmF2aWdhdGUgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMuJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIHRoaXMuJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xuXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XG5cbiAgICAgICAgaWYgKCFuYXZpZ2F0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoRGF0YSA9ICQoJyNzZWFyY2gtcmVzdWx0cy1jb250ZW50LWNvdW50IHNwYW4nKS5kYXRhKCk7XG4gICAgICAgIGNvbnN0IHVybCA9IChzZWFyY2hEYXRhLmNvdW50ID4gMCkgPyBzZWFyY2hEYXRhLnVybCA6IHVybFV0aWxzLnJlcGxhY2VQYXJhbXMoc2VhcmNoRGF0YS51cmwsIHtcbiAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0LnVybHMpO1xuXG4gICAgICAgIGNvbnN0ICRzZWFyY2hGb3JtID0gJCgnW2RhdGEtYWR2YW5jZWQtc2VhcmNoLWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRjYXRlZ29yeVRyZWVDb250YWluZXIgPSAkc2VhcmNoRm9ybS5maW5kKCdbZGF0YS1zZWFyY2gtY2F0ZWdvcnktdHJlZV0nKTtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgdHJlZURhdGEgPSBbXTtcbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLiRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLiRjb250ZW50UmVzdWx0c0NvbnRhaW5lciA9ICQoJyNzZWFyY2gtcmVzdWx0cy1jb250ZW50Jyk7XG5cbiAgICAgICAgLy8gSW5pdCBmYWNldGVkIHNlYXJjaFxuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmZpbmQoJ2xpLnByb2R1Y3QnKS5sZW5ndGggPT09IDAgfHwgdXJsLnF1ZXJ5LnNlY3Rpb24gPT09ICdjb250ZW50Jykge1xuICAgICAgICAgICAgdGhpcy5zaG93Q29udGVudChmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0cyhmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSB0aGlzLmluaXRWYWxpZGF0aW9uKCRzZWFyY2hGb3JtKVxuICAgICAgICAgICAgLmJpbmRWYWxpZGF0aW9uKCRzZWFyY2hGb3JtLmZpbmQoJyNzZWFyY2hfcXVlcnlfYWR2JykpO1xuXG4gICAgICAgIHRoaXMuY29udGV4dC5jYXRlZ29yeVRyZWUuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgdHJlZURhdGEucHVzaCh0aGlzLmZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShub2RlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlUcmVlRGF0YSA9IHRyZWVEYXRhO1xuICAgICAgICB0aGlzLmNyZWF0ZUNhdGVnb3J5VHJlZSgkY2F0ZWdvcnlUcmVlQ29udGFpbmVyKTtcblxuICAgICAgICAkc2VhcmNoRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDYXRlZ29yeUlkcyA9ICRjYXRlZ29yeVRyZWVDb250YWluZXIuanN0cmVlKCkuZ2V0X3NlbGVjdGVkKCk7XG5cbiAgICAgICAgICAgIGlmICghdmFsaWRhdG9yLmNoZWNrKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHNlYXJjaEZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImNhdGVnb3J5XFxbXFxdXCJdJykucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgY2F0ZWdvcnlJZCBvZiBzZWxlY3RlZENhdGVnb3J5SWRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSAkKCc8aW5wdXQ+Jywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NhdGVnb3J5W10nLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2F0ZWdvcnlJZCxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICRzZWFyY2hGb3JtLmFwcGVuZChpbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzUGVyUGFnZSgpO1xuICAgICAgICB0aGlzLnNob3dNb3JlUHJvZHVjdHMoKTtcbiAgICAgICAgdGhpcy5zaG93SXRlbSgpO1xuICAgICAgICB0aGlzLmxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZCh0aGlzLmNvbnRleHQpO1xuICAgICAgICB0aGlzLmZhbmN5Ym94VmlkZW9CYW5uZXIoKTtcblxuICAgICAgICBoYWxvU2lkZUFsbENhdGVnb3J5KCk7XG4gICAgICAgIHByb2R1Y3REaXNwbGF5TW9kZSgpO1xuICAgICAgICBoYWxvU3RpY2t5VG9vbGJhcih0aGlzLmNvbnRleHQpO1xuICAgICAgICB0aGlzLnJldmlld1Nob3coKVxuXG4gICAgfVxuICAgIHJldmlld1Nob3coKSB7XG4gICAgICAgIHZhciBsaW1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0U2t1MScpO1xuICAgICAgICBsZXQgcmV2aWV3MiA9IFtdXG4gICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly93d3cudGVhbWRlc2submV0L3NlY3VyZS9hcGkvdjIvNTY1NTQvQkVBMjU2NjU5MEVGNEQxNEFBOEQzNUFEMEUyQ0VBNzcvUmV2aWV3L3NlbGVjdC5qc29uXCIpLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihyPT57XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcbiAgICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly93d3cudGVhbWRlc2submV0L3NlY3VyZS9hcGkvdjIvNTY1NTQvQkVBMjU2NjU5MEVGNEQxNEFBOEQzNUFEMEUyQ0VBNzcvUmV2aWV3L3NlbGVjdC5qc29uP3NraXA9NTAwXCIpLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihyPT57XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcbiAgICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly93d3cudGVhbWRlc2submV0L3NlY3VyZS9hcGkvdjIvNTY1NTQvQkVBMjU2NjU5MEVGNEQxNEFBOEQzNUFEMEUyQ0VBNzcvUmV2aWV3L3NlbGVjdC5qc29uP3NraXA9MTAwMFwiKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocj0+e1xuICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3Mi5wdXNoKC4uLnIpfSksXG4gICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvbj9za2lwPTE1MDBcIikudGhlbihyID0+IHIuanNvbigpKS50aGVuKHI9PntcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzIucHVzaCguLi5yKX0pLFxuICAgICAgICAgIF0pXG4gICAgICAgICAgLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgIGxpbWl0LmZvckVhY2goKGl0ZW0xKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbS5pbm5lckhUTUwpXG4gICAgICAgICAgICAgICAgJChpdGVtMS5uZXh0RWxlbWVudFNpYmxpbmcpLmVtcHR5KClcblxuICAgICAgICAgICAgICAgIGxldCByZXZpZXczID0gW11cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCB2aWR1ID0gcmV2aWV3Mi5maWx0ZXIoaXRlbSA9PiBpdGVtWydQcm9kdWN0IFNLVSddID09PSBpdGVtMS5pbm5lckhUTUwpXG4gICAgICAgICAgICAgICAgdmlkdS5mb3JFYWNoKChnb2t1KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldmlldzMucHVzaChnb2t1WydSZXZpZXcgcmF0ZSddKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgY29uc3QgcmV2aWV3QXZnID0gTWF0aC5yb3VuZCgocmV2aWV3My5yZWR1Y2UoKGEsYiApID0+IGErIGIsIDApL3JldmlldzMubGVuZ3RoKSAqIDEwKS8xMFxuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmV2aWV3QXZnKVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKClcbiAgICAgICAgICAgICAgICAkKGl0ZW0xLm5leHRFbGVtZW50U2libGluZykuYXBwZW5kKGBcbiAgICAgICAgICAgICAgICA8c3R5bGU+ICAgIC5jaGVja2VkIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDIxMCwgMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mYS1zdGFyLW8ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyMTAsIDApO1xuICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgIC5jaGVja2luZyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGdhcDo1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAgICAgICAgICAgICAgIC5jaGVja2luZyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHVuc2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNDI1cHgpIHtcbiAgICAgICAgICAgICAgICAuY2hlY2tpbmcge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG48bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygwLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygxLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygyLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygzLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKyg0LjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj4gICAgICBcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgJHtyZXZpZXczLmxlbmd0aH0gQ29tbWVudGFpcmVzXG4gICAgICAgICAgICA8L2Rpdj5gKVxuICAgICAgICAgICAgICAgIC8vICQoaXRlbTEubmV4dEVsZW1lbnRTaWJsaW5nKS5hcHBlbmQoYDxkaXY+JHtyZXZpZXdBdmd9PC9kaXY+YClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHJldmlldzIpXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIFxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgfSk7XG4gICAgfVxuICAgIGxvYWRUcmVlTm9kZXMobm9kZSwgY2IpIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJy9yZW1vdGUvdjEvY2F0ZWdvcnktdHJlZScsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeUlkOiBub2RlLmlkLFxuICAgICAgICAgICAgICAgIHByZWZpeDogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ3gteHNyZi10b2tlbic6IHdpbmRvdy5CQ0RhdGEgJiYgd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuID8gd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuIDogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KS5kb25lKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkUmVzdWx0cyA9IFtdO1xuXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGRhdGFOb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkUmVzdWx0cy5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKGRhdGFOb2RlKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2IoZm9ybWF0dGVkUmVzdWx0cyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZUNhdGVnb3J5VHJlZSgkY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHRyZWVPcHRpb25zID0ge1xuICAgICAgICAgICAgY29yZToge1xuICAgICAgICAgICAgICAgIGRhdGE6IChub2RlLCBjYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBSb290IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuaWQgPT09ICcjJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2IodGhpcy5jYXRlZ29yeVRyZWVEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExhenkgbG9hZGVkIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRUcmVlTm9kZXMobm9kZSwgY2IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVtZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbnM6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGVja2JveDoge1xuICAgICAgICAgICAgICAgIHRocmVlX3N0YXRlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICAgJ2NoZWNrYm94JyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH07XG5cbiAgICAgICAgJGNvbnRhaW5lci5qc3RyZWUodHJlZU9wdGlvbnMpO1xuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdExpc3RpbmcnKTtcbiAgICAgICAgY29uc3QgJGNvbnRlbnRMaXN0aW5nQ29udGFpbmVyID0gJCgnI3NlYXJjaC1yZXN1bHRzLWNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRzZWFyY2hIZWFkaW5nID0gJCgnI3NlYXJjaC1yZXN1bHRzLWhlYWRpbmcnKTtcbiAgICAgICAgY29uc3QgJHNlYXJjaENvdW50ID0gJCgnI3NlYXJjaC1yZXN1bHRzLXByb2R1Y3QtY291bnQnKTtcbiAgICAgICAgY29uc3QgJGNvbnRlbnRDb3VudCA9ICQoJyNzZWFyY2gtcmVzdWx0cy1jb250ZW50LWNvdW50Jyk7XG4gICAgICAgIGNvbnN0ICRwYWdpbmF0b3JDb250YWluZXIgPSAkKCcucGFnaW5hdGlvbicpO1xuICAgICAgICBjb25zdCAkc2hvd01vcmVDb250YWluZXIgPSAkKCcuaGFsby1wcm9kdWN0LXNob3ctbW9yZScpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuc2VhcmNoUHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdoYWxvdGhlbWVzL2dhbGxlcnkvaGFsby1wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRMaXN0aW5nOiAnc2VhcmNoL2NvbnRlbnQtbGlzdGluZycsXG4gICAgICAgICAgICAgICAgc2lkZWJhcjogJ3NlYXJjaC9zaWRlYmFyJyxcbiAgICAgICAgICAgICAgICBoZWFkaW5nOiAnc2VhcmNoL2hlYWRpbmcnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RDb3VudDogJ3NlYXJjaC9wcm9kdWN0LWNvdW50JyxcbiAgICAgICAgICAgICAgICBjb250ZW50Q291bnQ6ICdzZWFyY2gvY29udGVudC1jb3VudCcsXG4gICAgICAgICAgICAgICAgcGFnaW5hdG9yOiAnaGFsb3RoZW1lcy9nYWxsZXJ5L2hhbG8tcHJvZHVjdC1wYWdpbmF0b3InLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RfcmVzdWx0czoge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdzZWFyY2gvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICRzZWFyY2hIZWFkaW5nLmh0bWwoY29udGVudC5oZWFkaW5nKTtcblxuICAgICAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICh1cmwucXVlcnkuc2VjdGlvbiA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgICAgICAgJGNvbnRlbnRMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5jb250ZW50TGlzdGluZyk7XG4gICAgICAgICAgICAgICAgJGNvbnRlbnRDb3VudC5odG1sKGNvbnRlbnQuY29udGVudENvdW50KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG4gICAgICAgICAgICAgICAgJHNlYXJjaENvdW50Lmh0bWwoY29udGVudC5wcm9kdWN0Q291bnQpO1xuICAgICAgICAgICAgICAgICRwYWdpbmF0b3JDb250YWluZXIuaHRtbCgkKGNvbnRlbnQucGFnaW5hdG9yKS5maW5kKCcucGFnaW5hdGlvbicpLmNoaWxkcmVuKCkpO1xuICAgICAgICAgICAgICAgICRzaG93TW9yZUNvbnRhaW5lci5odG1sKCQoY29udGVudC5wYWdpbmF0b3IpLmZpbmQoJy5oYWxvLXByb2R1Y3Qtc2hvdy1tb3JlJykuY2hpbGRyZW4oKSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0cyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UHJvZHVjdHNQZXJQYWdlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93SXRlbSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vcmVQcm9kdWN0cygpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKCQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0JykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIGhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0KHRoaXMuY29udGV4dCwgJ3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0VmFsaWRhdGlvbigkZm9ybSkge1xuICAgICAgICB0aGlzLiRmb3JtID0gJGZvcm07XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJGZvcm0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGJpbmRWYWxpZGF0aW9uKCRlbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRvcikge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAkZWxlbWVudC5kYXRhKCdlcnJvck1lc3NhZ2UnKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY2hlY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRvcikge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHNob3dQcm9kdWN0c1BlclBhZ2UoKXtcbiAgICAgICAgdGhpcy5yZXZpZXdTaG93KClcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgICAgdmFyIGMgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImxpbWl0XCIpO1xuICAgICAgICAgICAgaWYoYyAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICB2YXIgbGltaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QjbGltaXQgb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsaW1pdCwgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LnZhbHVlID09IGMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7fVxuICAgIH1cblxuICAgIHNob3dNb3JlUHJvZHVjdHMoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgICAgY29uc3QgZ2V0VXJsUGFyYW1ldGVyID0gdGhpcy5nZXRVcmxQYXJhbWV0ZXIoJ2xpbWl0Jyk7XG5cbiAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB2YXIgbmV4dFBhZ2UgPSAkKFwiLnBhZ2luYXRpb24taXRlbS0tY3VycmVudFwiKS5uZXh0KCksXG4gICAgICAgICAgICAgICAgbGluayA9IG5leHRQYWdlLmZpbmQoXCJhXCIpLmF0dHIoXCJocmVmXCIpO1xuXG4gICAgICAgICAgICAkKCcjbGlzdGluZy1zaG93bW9yZUJ0biA+IGEnKS5hZGRDbGFzcygnbG9hZGluZycpO1xuXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgICAgICAgICAgIHVybDogbGluay5yZXBsYWNlKFwiaHR0cDovL1wiLCBcIi8vXCIpLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gICAgIHJldmlld1Nob3coKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGltaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdFNrdTEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXZpZXcyID0gW11cbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvblwiKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocj0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvbj9za2lwPTUwMFwiKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocj0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvbj9za2lwPTEwMDBcIikudGhlbihyID0+IHIuanNvbigpKS50aGVuKHI9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3Mi5wdXNoKC4uLnIpfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL3d3dy50ZWFtZGVzay5uZXQvc2VjdXJlL2FwaS92Mi81NjU1NC9CRUEyNTY2NTkwRUY0RDE0QUE4RDM1QUQwRTJDRUE3Ny9SZXZpZXcvc2VsZWN0Lmpzb24/c2tpcD0xNTAwXCIpLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihyPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzIucHVzaCguLi5yKX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0LmZvckVhY2goKGl0ZW0xKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0uaW5uZXJIVE1MKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGl0ZW0xLm5leHRFbGVtZW50U2libGluZykuZW1wdHkoKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmV2aWV3MyA9IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2aWR1ID0gcmV2aWV3Mi5maWx0ZXIoaXRlbSA9PiBpdGVtWydQcm9kdWN0IFNLVSddID09PSBpdGVtMS5pbm5lckhUTUwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZHUuZm9yRWFjaCgoZ29rdSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3My5wdXNoKGdva3VbJ1JldmlldyByYXRlJ10pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJldmlld0F2ZyA9IE1hdGgucm91bmQoKHJldmlldzMucmVkdWNlKChhLGIgKSA9PiBhKyBiLCAwKS9yZXZpZXczLmxlbmd0aCkgKiAxMCkvMTBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmV2aWV3QXZnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoaXRlbTEubmV4dEVsZW1lbnRTaWJsaW5nKS5hcHBlbmQoYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGU+ICAgIC5jaGVja2VkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyMTAsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmEtc3Rhci1vIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDIxMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jaGVja2luZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jaGVja2luZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB1bnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTQyNXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jaGVja2luZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyYCsoMC41IDw9IHJldmlld0F2Zz8gJyBjaGVja2VkJzogJyBmYS1zdGFyLW8nKSArIGBcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhcmArKDEuNSA8PSByZXZpZXdBdmc/ICcgY2hlY2tlZCc6ICcgZmEtc3Rhci1vJykgKyBgXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygyLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyYCsoMy41IDw9IHJldmlld0F2Zz8gJyBjaGVja2VkJzogJyBmYS1zdGFyLW8nKSArIGBcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhcmArKDQuNSA8PSByZXZpZXdBdmc/ICcgY2hlY2tlZCc6ICcgZmEtc3Rhci1vJykgKyBgXCI+PC9zcGFuPiAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3JldmlldzMubGVuZ3RofSBDb21tZW50YWlyZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAkKGl0ZW0xLm5leHRFbGVtZW50U2libGluZykuYXBwZW5kKGA8ZGl2PiR7cmV2aWV3QXZnfTwvZGl2PmApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHJldmlldzIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoZGF0YSkuZmluZCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJykuYXBwZW5kKCQoZGF0YSkuZmluZCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJykuY2hpbGRyZW4oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXZpZXdTaG93KClcblxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24tbGlzdCcpLmh0bWwoJChkYXRhKS5maW5kKFwiLnBhZ2luYXRpb24tbGlzdFwiKS5odG1sKCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjbGlzdGluZy1zaG93bW9yZUJ0biA+IGEnKS5yZW1vdmVDbGFzcygnbG9hZGluZycpLmJsdXIoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBhZ2UgPSAkKFwiLnBhZ2luYXRpb24taXRlbS0tY3VycmVudFwiKS5uZXh0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0UGFnZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjbGlzdGluZy1zaG93bW9yZUJ0biA+IGEnKS5hZGRDbGFzcygnZGlzYWJsZScpLnRleHQoJ05vIG1vcmUgcHJvZHVjdHMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcucGFnaW5hdGlvbiAucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KCQoJy5wYWdpbmF0aW9uLWluZm8gLnRvdGFsJykudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGltaXQgPSBnZXRVcmxQYXJhbWV0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RQZXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlQ3VycmVudCA9IHBhcnNlSW50KCQoXCIucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50ID4gYVwiKS50ZXh0KCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpbWl0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFBlclBhZ2UgPSBsaW1pdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RQZXJQYWdlID0gY29udGV4dC5zZWFyY2hQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24gLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dChwYXJzZUludChwcm9kdWN0UGVyUGFnZSkqcGFnZUN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZigkKGRhdGEpLmZpbmQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0JykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QoY29udGV4dCwgJ3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93SXRlbSgpIHtcbiAgICAgICAgdmFyIHRvdGFsID0gcGFyc2VJbnQoJCgnLnBhZ2luYXRpb24taW5mbyAudG90YWwnKS50ZXh0KCkpLFxuICAgICAgICAgICAgbGltaXQgPSB0aGlzLmdldFVybFBhcmFtZXRlcignbGltaXQnKSxcbiAgICAgICAgICAgIHByb2R1Y3RQZXJQYWdlO1xuXG4gICAgICAgIGlmIChsaW1pdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwcm9kdWN0UGVyUGFnZSA9IGxpbWl0O1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBwcm9kdWN0UGVyUGFnZSA9IHRoaXMuY29udGV4dC5zZWFyY2hQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3RhcnQgPSAxLFxuICAgICAgICAgICAgZW5kID0gdG90YWwsXG4gICAgICAgICAgICBjaGVja0xhc3RQYWdlID0gZmFsc2UsXG4gICAgICAgICAgICBsYXN0UGFnZSA9IDE7XG4gICAgICAgICAgICBcbiAgICAgICAgdmFyIGNoZWNrTGluayA9ICQoXCIucGFnaW5hdGlvbi1saXN0IC5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnRcIikubmV4dCgpO1xuICAgICAgICB2YXIgcGFnZU5vdExhc3QgPSBsYXN0UGFnZSAtIDE7XG4gICAgICAgIHZhciB0b3RhbE5vdExhc3QgPSBwYWdlTm90TGFzdCAqIHByb2R1Y3RQZXJQYWdlO1xuICAgICAgICB2YXIgcHJvZHVjdHNMYXN0UGFnZSA9IHRvdGFsIC0gdG90YWxOb3RMYXN0O1xuICAgICAgICB2YXIgY3VycmVudFBhZ2UgPSBwYXJzZUludCgkKCcucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50ID4gYScpLnRleHQoKSk7XG4gICAgICAgIHZhciBwcmV2UGFnZSA9IGN1cnJlbnRQYWdlIC0gMTtcblxuICAgICAgICBpZiAoY2hlY2tMaW5rLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgbGFzdFBhZ2UgPSBwYXJzZUludCgkKFwiLnBhZ2luYXRpb24taXRlbS0tY3VycmVudFwiKS5maW5kKFwiYVwiKS50ZXh0KCkpO1xuICAgICAgICAgICAgY2hlY2tMYXN0UGFnZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYXN0UGFnZSA9IHBhcnNlSW50KGNoZWNrTGluay5maW5kKFwiYVwiKS50ZXh0KCkpO1xuICAgICAgICAgICAgY2hlY2tMYXN0UGFnZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodG90YWwgPD0gcHJvZHVjdFBlclBhZ2UpIHtcbiAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uLWluZm8gLnN0YXJ0JykudGV4dChzdGFydCk7XG4gICAgICAgICAgICAkKCcucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KGVuZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPD0gMSkge1xuICAgICAgICAgICAgICAgIGVuZCA9IHByb2R1Y3RQZXJQYWdlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGFydCA9IChwcmV2UGFnZSAqIHByb2R1Y3RQZXJQYWdlKSArIDE7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrTGFzdFBhZ2UgPSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCQoJy5wYWdpbmF0aW9uLWxpc3QgLnBhZ2luYXRpb24taXRlbS0tbmV4dCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gdG90YWxOb3RMYXN0ICsgcHJvZHVjdHNMYXN0UGFnZSAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA9IHRvdGFsTm90TGFzdCArIHByb2R1Y3RzTGFzdFBhZ2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbmQgPSBjdXJyZW50UGFnZSAqIHByb2R1Y3RQZXJQYWdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24taW5mbyAuc3RhcnQnKS50ZXh0KHN0YXJ0KTtcbiAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoZW5kKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZhbmN5Ym94VmlkZW9CYW5uZXIoKXtcbiAgICAgICAgaWYgKCQoXCIudmlkZW8tYmxvY2staW1hZ2VbZGF0YS1mYW5jeWJveF1cIikubGVuZ3RoKSB7XG4gICAgICAgICAgICAkKFwiLnZpZGVvLWJsb2NrLWltYWdlW2RhdGEtZmFuY3lib3hdXCIpLmZhbmN5Ym94KHtcbiAgICAgICAgICAgICAgICAnYXV0b0RpbWVuc2lvbnMnOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAncGFkZGluZycgOiAwLFxuICAgICAgICAgICAgICAgICd3aWR0aCcgOiA5NzAsXG4gICAgICAgICAgICAgICAgJ2hlaWdodCcgOiA2MDAsXG4gICAgICAgICAgICAgICAgJ2F1dG9TY2FsZScgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbkluJyA6ICdub25lJyxcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbk91dCcgOiAnbm9uZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCQoXCIuYnV0dG9uLXBvcHVwLXZpZGVvW2RhdGEtZmFuY3lib3hdXCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgJChcIi5idXR0b24tcG9wdXAtdmlkZW9bZGF0YS1mYW5jeWJveF1cIikuZmFuY3lib3goe1xuICAgICAgICAgICAgICAgICdhdXRvRGltZW5zaW9ucyc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICdwYWRkaW5nJyA6IDAsXG4gICAgICAgICAgICAgICAgJ3dpZHRoJyA6IDk3MCxcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JyA6IDYwMCxcbiAgICAgICAgICAgICAgICAnYXV0b1NjYWxlJyA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uSW4nIDogJ25vbmUnLFxuICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uT3V0JyA6ICdub25lJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRVcmxQYXJhbWV0ZXIoc1BhcmFtKSB7XG4gICAgICAgIHZhciBzUGFnZVVSTCA9IGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSksXG4gICAgICAgICAgICBzVVJMVmFyaWFibGVzID0gc1BhZ2VVUkwuc3BsaXQoJyYnKSxcbiAgICAgICAgICAgIHNQYXJhbWV0ZXJOYW1lLFxuICAgICAgICAgICAgaTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc1VSTFZhcmlhYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc1BhcmFtZXRlck5hbWUgPSBzVVJMVmFyaWFibGVzW2ldLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgICAgIGlmIChzUGFyYW1ldGVyTmFtZVswXSA9PT0gc1BhcmFtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNQYXJhbWV0ZXJOYW1lWzFdID09PSB1bmRlZmluZWQgPyB0cnVlIDogc1BhcmFtZXRlck5hbWVbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkT3B0aW9uRm9yUHJvZHVjdENhcmQoY29udGV4dCl7XG4gICAgICAgIGlmKCQoJyNmZWF0dXJlZC1wcm9kdWN0cyAuY2FyZCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QoY29udGV4dCwgJ2ZlYXR1cmVkLXByb2R1Y3RzJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZigkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QoY29udGV4dCwgJ3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=