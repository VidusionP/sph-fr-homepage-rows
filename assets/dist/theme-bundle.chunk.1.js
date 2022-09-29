(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./assets/js/theme/catalog.js":
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogPage; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_url_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var CatalogPage = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(CatalogPage, _PageManager);

  function CatalogPage() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = CatalogPage.prototype;

  _proto.onSortBySubmit = function onSortBySubmit(event) {
    var url = url__WEBPACK_IMPORTED_MODULE_2___default.a.parse(window.location.href, true);
    var queryParams = $(event.currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    window.location = url__WEBPACK_IMPORTED_MODULE_2___default.a.format({
      pathname: url.pathname,
      search: _common_url_utils__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString(url.query)
    });
  };

  return CatalogPage;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/faceted-search.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/faceted-search.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/without */ "./node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _url_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _form_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");











/**
 * Faceted search view component
 */

var FacetedSearch = /*#__PURE__*/function () {
  /**
   * @param {object} requestOptions - Object with options for the ajax requests
   * @param {function} callback - Function to execute after fetching templates
   * @param {object} options - Configurable options
   * @example
   *
   * let requestOptions = {
   *      templates: {
   *          productListing: 'category/product-listing',
   *          sidebar: 'category/sidebar'
   *     }
   * };
   *
   * let templatesDidLoad = function(content) {
   *     $productListingContainer.html(content.productListing);
   *     $facetedSearchContainer.html(content.sidebar);
   * };
   *
   * let facetedSearch = new FacetedSearch(requestOptions, templatesDidLoad);
   */
  function FacetedSearch(requestOptions, callback, options) {
    var _this = this;

    var defaultOptions = {
      accordionToggleSelector: '#facetedSearch .accordion-navigation, #facetedSearch .facetedSearch-toggle',
      blockerSelector: '#facetedSearch .blocker',
      clearFacetSelector: '#facetedSearch .facetedSearch-clearLink',
      componentSelector: '#facetedSearch-navList',
      facetNavListSelector: '#facetedSearch .navList',
      priceRangeErrorSelector: '#facet-range-form .form-inlineMessage',
      priceRangeFieldsetSelector: '#facet-range-form .form-fieldset',
      priceRangeFormSelector: '#facet-range-form',
      priceRangeMaxPriceSelector: '#facet-range-form [name=max_price]',
      priceRangeMinPriceSelector: '#facet-range-form [name=min_price]',
      showMoreToggleSelector: '#facetedSearch .accordion-content .toggleLink',
      facetedSearchFilterItems: '#facetedSearch-filterItems .form-input',
      modal: Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["default"])('#modal')[0],
      modalOpen: false
    }; // Private properties

    this.requestOptions = requestOptions;
    this.callback = callback;
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_3___default()({}, defaultOptions, options);
    this.collapsedFacets = [];
    this.collapsedFacetItems = []; // Init collapsibles

    Object(_collapsible__WEBPACK_IMPORTED_MODULE_8__["default"])(); // Init price validator

    this.initPriceValidator(); // Show limited items by default

    $(this.options.facetNavListSelector).each(function (index, navList) {
      _this.collapseFacetItems($(navList));
    }); // Mark initially collapsed accordions

    $(this.options.accordionToggleSelector).each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');

      if (collapsible.isCollapsed) {
        _this.collapsedFacets.push(collapsible.targetId);
      }
    }); // Collapse all facets if initially hidden
    // NOTE: Need to execute after Collapsible gets bootstrapped

    setTimeout(function () {
      if ($(_this.options.componentSelector).is(':hidden')) {
        _this.collapseAllFacets();
      }
    }); // Observe user events

    this.onStateChange = this.onStateChange.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onAccordionToggle = this.onAccordionToggle.bind(this);
    this.onClearFacet = this.onClearFacet.bind(this);
    this.onFacetClick = this.onFacetClick.bind(this);
    this.onRangeSubmit = this.onRangeSubmit.bind(this);
    this.onSortBySubmit = this.onSortBySubmit.bind(this);
    this.filterFacetItems = this.filterFacetItems.bind(this);
    this.bindEvents();
  } // Public methods


  var _proto = FacetedSearch.prototype;

  _proto.refreshView = function refreshView(content) {
    if (content) {
      this.callback(content);
    } // Init collapsibles


    Object(_collapsible__WEBPACK_IMPORTED_MODULE_8__["default"])(); // Init price validator

    this.initPriceValidator(); // Restore view state
    // this.restoreCollapsedFacets();

    this.restoreCollapsedFacetItems(); // Bind events

    this.bindEvents();
  };

  _proto.updateView = function updateView() {
    var _this2 = this;

    $(this.options.blockerSelector).show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["api"].getPage(_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl(), this.requestOptions, function (err, content) {
      $(_this2.options.blockerSelector).hide();

      if (err) {
        throw new Error(err);
      } // Refresh view with new content


      _this2.refreshView(content);
    });
  };

  _proto.expandFacetItems = function expandFacetItems($navList) {
    var id = $navList.attr('id'); // Remove

    this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
  };

  _proto.collapseFacetItems = function collapseFacetItems($navList) {
    var id = $navList.attr('id');
    var hasMoreResults = $navList.data('hasMoreResults');

    if (hasMoreResults) {
      this.collapsedFacetItems = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, [id]);
    } else {
      this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
    }
  };

  _proto.toggleFacetItems = function toggleFacetItems($navList) {
    var id = $navList.attr('id'); // Toggle depending on `collapsed` flag

    if (lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacetItems, id)) {
      this.getMoreFacetResults($navList);
      return true;
    }

    this.collapseFacetItems($navList);
    return false;
  };

  _proto.getMoreFacetResults = function getMoreFacetResults($navList) {
    var _this3 = this;

    var facet = $navList.data('facet');
    var facetUrl = _url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl();

    if (this.requestOptions.showMore) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["api"].getPage(facetUrl, {
        template: this.requestOptions.showMore,
        params: {
          list_all: facet
        }
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }

        _this3.options.modal.open();

        $('#modal').addClass('modal--filter');
        _this3.options.modalOpen = true;

        _this3.options.modal.updateContent(response);
      });
    }

    this.collapseFacetItems($navList);
    return false;
  };

  _proto.filterFacetItems = function filterFacetItems(event) {
    var $items = $('.navList-item');
    var query = $(event.currentTarget).val().toLowerCase();
    $items.each(function (index, element) {
      var text = $(element).text().toLowerCase();

      if (text.indexOf(query) !== -1) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });
  };

  _proto.expandFacet = function expandFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.open();
  };

  _proto.collapseFacet = function collapseFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.close();
  };

  _proto.collapseAllFacets = function collapseAllFacets() {
    var _this4 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);

      _this4.collapseFacet($accordionToggle);
    });
  };

  _proto.expandAllFacets = function expandAllFacets() {
    var _this5 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);

      _this5.expandFacet($accordionToggle);
    });
  } // Private methods
  ;

  _proto.initPriceValidator = function initPriceValidator() {
    if ($(this.options.priceRangeFormSelector).length === 0) {
      return;
    }

    var validator = Object(_nod__WEBPACK_IMPORTED_MODULE_10__["default"])();
    var selectors = {
      errorSelector: this.options.priceRangeErrorSelector,
      fieldsetSelector: this.options.priceRangeFieldsetSelector,
      formSelector: this.options.priceRangeFormSelector,
      maxPriceSelector: this.options.priceRangeMaxPriceSelector,
      minPriceSelector: this.options.priceRangeMinPriceSelector
    };
    _form_utils__WEBPACK_IMPORTED_MODULE_9__["Validators"].setMinMaxPriceValidation(validator, selectors);
    this.priceRangeValidator = validator;
  };

  _proto.restoreCollapsedFacetItems = function restoreCollapsedFacetItems() {
    var _this6 = this;

    var $navLists = $(this.options.facetNavListSelector); // Restore collapsed state for each facet

    $navLists.each(function (index, navList) {
      var $navList = $(navList);
      var id = $navList.attr('id');

      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this6.collapsedFacetItems, id);

      if (shouldCollapse) {
        _this6.collapseFacetItems($navList);
      } else {
        _this6.expandFacetItems($navList);
      }
    });
  };

  _proto.restoreCollapsedFacets = function restoreCollapsedFacets() {
    var _this7 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      var id = collapsible.targetId;

      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this7.collapsedFacets, id);

      if (shouldCollapse) {
        _this7.collapseFacet($accordionToggle);
      } else {
        _this7.expandFacet($accordionToggle);
      }
    });
  };

  _proto.bindEvents = function bindEvents() {
    // Clean-up
    this.unbindEvents(); // DOM events

    $(window).on('statechange', this.onStateChange);
    $(window).on('popstate', this.onPopState);
    $(document).on('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).on('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).on('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).on('click', this.onClearFacet); // Hooks

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
  };

  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off('statechange', this.onStateChange);
    $(window).off('popstate', this.onPopState);
    $(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).off('click', this.onClearFacet); // Hooks

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('sortBy-submitted', this.onSortBySubmit);
  };

  _proto.onClearFacet = function onClearFacet(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    event.stopPropagation(); // Update URL

    _url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url);
  };

  _proto.onToggleClick = function onToggleClick(event) {
    var $toggle = $(event.currentTarget);
    var $navList = $($toggle.attr('href')); // Prevent default

    event.preventDefault(); // Toggle visible items

    this.toggleFacetItems($navList);
  };

  _proto.onFacetClick = function onFacetClick(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    $link.toggleClass('is-selected'); // Update URL

    _url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url);

    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };

  _proto.onSortBySubmit = function onSortBySubmit(event) {
    var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);
    var queryParams = $(event.currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page; // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead

    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    event.preventDefault();
    _url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5___default.a.format({
      pathname: url.pathname,
      search: _url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(urlQueryParams)
    }));
  };

  _proto.onRangeSubmit = function onRangeSubmit(event) {
    event.preventDefault();

    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_10__["default"].constants.VALID)) {
      return;
    }

    var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);
    var queryParams = decodeURI($(event.currentTarget).serialize()).split('&');
    queryParams = _url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].parseQueryParams(queryParams);

    for (var key in queryParams) {
      if (queryParams.hasOwnProperty(key)) {
        url.query[key] = queryParams[key];
      }
    } // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead


    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    _url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5___default.a.format({
      pathname: url.pathname,
      search: _url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(urlQueryParams)
    }));
  };

  _proto.onStateChange = function onStateChange() {
    this.updateView();
  };

  _proto.onAccordionToggle = function onAccordionToggle(event) {
    var $accordionToggle = $(event.currentTarget);
    var collapsible = $accordionToggle.data('collapsibleInstance');
    var id = collapsible.targetId;

    if (collapsible.isCollapsed) {
      this.collapsedFacets = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacets, [id]);
    } else {
      this.collapsedFacets = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacets, id);
    }
  };

  _proto.onPopState = function onPopState() {
    var currentUrl = window.location.href;
    var searchParams = new URLSearchParams(currentUrl); // If searchParams does not contain a page value then modify url query string to have page=1

    if (!searchParams.has('page')) {
      var linkUrl = $('.pagination-link').attr('href');
      var re = /page=[0-9]+/i;
      var updatedLinkUrl = linkUrl.replace(re, 'page=1');
      window.history.replaceState({}, document.title, updatedLinkUrl);
    }

    $(window).trigger('statechange');
  };

  return FacetedSearch;
}();

/* harmony default export */ __webpack_exports__["default"] = (FacetedSearch);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/url-utils.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/common/url-utils.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);

var urlUtils = {
  getUrl: function getUrl() {
    return "" + window.location.pathname + window.location.search;
  },
  goToUrl: function goToUrl(url) {
    window.history.pushState({}, document.title, url);
    $(window).trigger('statechange');
  },
  replaceParams: function replaceParams(url, params) {
    var parsed = url__WEBPACK_IMPORTED_MODULE_0___default.a.parse(url, true);
    var param; // Let the formatter use the query object to build the new url

    parsed.search = null;

    for (param in params) {
      if (params.hasOwnProperty(param)) {
        parsed.query[param] = params[param];
      }
    }

    return url__WEBPACK_IMPORTED_MODULE_0___default.a.format(parsed);
  },
  buildQueryString: function buildQueryString(queryData) {
    var out = '';
    var key;

    for (key in queryData) {
      if (queryData.hasOwnProperty(key)) {
        if (Array.isArray(queryData[key])) {
          var ndx = void 0;

          for (ndx in queryData[key]) {
            if (queryData[key].hasOwnProperty(ndx)) {
              out += "&" + key + "=" + queryData[key][ndx];
            }
          }
        } else {
          out += "&" + key + "=" + queryData[key];
        }
      }
    }

    return out.substring(1);
  },
  parseQueryParams: function parseQueryParams(queryData) {
    var params = {};

    for (var i = 0; i < queryData.length; i++) {
      var temp = queryData[i].split('=');

      if (temp[0] in params) {
        if (Array.isArray(params[temp[0]])) {
          params[temp[0]].push(temp[1]);
        } else {
          params[temp[0]] = [params[temp[0]], temp[1]];
        }
      } else {
        params[temp[0]] = temp[1];
      }
    }

    return params;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (urlUtils);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");



function decrementCounter(counter, item) {
  var index = counter.indexOf(item);

  if (index > -1) {
    counter.splice(index, 1);
  }
}

function incrementCounter(counter, item) {
  counter.push(item);
}

function updateCounterNav(counter, $link, urlContext) {
  if (counter.length > 1) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }

    $link.attr('href', urlContext.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function (urlContext) {
  var compareCounter = [];
  var $compareLink = $('a[data-compare-nav]');
  $('body').on('compareReset', function () {
    var $checked = $('body').find('input[name="products\[\]"]:checked');
    compareCounter = $checked.length ? lodash_map__WEBPACK_IMPORTED_MODULE_0___default()($checked, function (element) {
      return element.value;
    }) : [];
    updateCounterNav(compareCounter, $compareLink, urlContext);
  });
  $('body').triggerHandler('compareReset');
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');

    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }

    updateCounterNav(compareCounter, $clickedCompareLink, urlContext);
  });
  $('body').on('submit', '[data-product-compare]', function (event) {
    var $this = $(event.currentTarget);
    var productsToCompare = $this.find('input[name="products\[\]"]:checked');

    if (productsToCompare.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_1__["showAlertModal"])('You must select at least two products to compare');
      event.preventDefault();
    }
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');

    if ($clickedCheckedInput.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_1__["showAlertModal"])('You must select at least two products to compare');
      return false;
    }
  });
});
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

/***/ "./assets/js/theme/halothemes/haloProductDisplayMode.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/halothemes/haloProductDisplayMode.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony default export */ __webpack_exports__["default"] = (function () {
  var $productListing = $('#product-listing-container .productListing'),
      $grid = $('#grid-view'),
      $list = $('#list-view'),
      $gridMobile = $('#grid-view-mobile'),
      $listMobile = $('#list-view-mobile');
  $list.on('click', function (event) {
    if (!$list.hasClass('current-view')) {
      setTimeout(function () {
        $list.addClass('current-view');
        $listMobile.addClass('current-view');
        $grid.removeClass('current-view');
        $gridMobile.removeClass('current-view');
        $productListing.removeClass('productGrid').addClass('productList');
      }, 300);
    }
  });
  $grid.on('click', function (event) {
    if (!$grid.hasClass('current-view')) {
      setTimeout(function () {
        $grid.addClass('current-view');
        $gridMobile.addClass('current-view');
        $list.removeClass('current-view');
        $listMobile.removeClass('current-view');
        $productListing.removeClass('productList').addClass('productGrid');
      }, 300);
    }
  });
  $listMobile.on('click', function (event) {
    if (!$listMobile.hasClass('current-view')) {
      setTimeout(function () {
        $list.addClass('current-view');
        $listMobile.addClass('current-view');
        $grid.removeClass('current-view');
        $gridMobile.removeClass('current-view');
        $productListing.removeClass('productGrid').addClass('productList');
      }, 300);
    }
  });
  $gridMobile.on('click', function (event) {
    if (!$gridMobile.hasClass('current-view')) {
      setTimeout(function () {
        $grid.addClass('current-view');
        $gridMobile.addClass('current-view');
        $list.removeClass('current-view');
        $listMobile.removeClass('current-view');
        $productListing.removeClass('productList').addClass('productGrid');
      }, 300);
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/halothemes/haloSideAllCategory.js":
/*!***********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloSideAllCategory.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony default export */ __webpack_exports__["default"] = (function () {
  if ($('.all-categories-list').length > 0) {
    $(document).on('click', '.all-categories-list .icon-dropdown', function () {
      var $this = $(this).parent();
      $this.siblings().removeClass('is-clicked current-cate');
      $this.toggleClass('is-clicked');
      $this.siblings().find("> .dropdown-category-list").slideUp("slow");
      $this.find("> .dropdown-category-list").slideToggle("slow");
    });
    $('.all-categories-list li').each(function () {
      if ($(this).hasClass('current-cate')) {
        $(this).find("> .dropdown-category-list").slideToggle("slow");
      }
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/halothemes/haloStickyToolbar.js":
/*!*********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloStickyToolbar.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  var $body = $('body');

  function toolbar_sticky() {
    var toolbar_position,
        toolbar_height,
        toolbar = $('.page-listing .halo-toolbar');
    toolbar_height = toolbar.height();
    toolbar_position = toolbar.offset().top + toolbar.outerHeight(true);

    if (toolbar.length) {
      toolbar_scroll(toolbar_position, toolbar_height, toolbar);
    }
  }

  function toolbar_scroll(toolbar_position, toolbar_height, toolbar) {
    var didScroll,
        lastScrollTop = 0,
        delta = 5;
    $(window).on('scroll load', function () {
      var scroll = $(window).scrollTop();

      if (Math.abs(lastScrollTop - scroll) <= delta) {
        return;
      }

      if (scroll > lastScrollTop && scroll > toolbar_position) {
        toolbar.removeClass('sticky-down').addClass('sticky-up');

        if (scroll > toolbar_position) {
          $body.addClass('has-stickyToolbar');
        } else {
          $body.removeClass('has-stickyToolbar');
        }
      } else {
        if (scroll + $(window).height() < $(document).height()) {
          toolbar.removeClass('sticky-up').addClass('sticky-down');

          if (scroll > toolbar_position) {
            $body.addClass('has-stickyToolbar');
          } else {
            $body.removeClass('has-stickyToolbar');
          }
        }
      }

      lastScrollTop = scroll;
    });
  }

  if ($(window).width() < 1025) {
    toolbar_sticky();
  } else {
    $body.removeClass('has-stickyToolbar');
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0YWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2ZhY2V0ZWQtc2VhcmNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXJsLXV0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvaGFsb1Byb2R1Y3REaXNwbGF5TW9kZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvU2lkZUFsbENhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9oYWxvdGhlbWVzL2hhbG9TdGlja3lUb29sYmFyLmpzIl0sIm5hbWVzIjpbIkNhdGFsb2dQYWdlIiwib25Tb3J0QnlTdWJtaXQiLCJldmVudCIsInVybCIsIlVybCIsInBhcnNlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicXVlcnlQYXJhbXMiLCIkIiwiY3VycmVudFRhcmdldCIsInNlcmlhbGl6ZSIsInNwbGl0IiwicXVlcnkiLCJwYWdlIiwicHJldmVudERlZmF1bHQiLCJmb3JtYXQiLCJwYXRobmFtZSIsInNlYXJjaCIsInVybFV0aWxzIiwiYnVpbGRRdWVyeVN0cmluZyIsIlBhZ2VNYW5hZ2VyIiwiRmFjZXRlZFNlYXJjaCIsInJlcXVlc3RPcHRpb25zIiwiY2FsbGJhY2siLCJvcHRpb25zIiwiZGVmYXVsdE9wdGlvbnMiLCJhY2NvcmRpb25Ub2dnbGVTZWxlY3RvciIsImJsb2NrZXJTZWxlY3RvciIsImNsZWFyRmFjZXRTZWxlY3RvciIsImNvbXBvbmVudFNlbGVjdG9yIiwiZmFjZXROYXZMaXN0U2VsZWN0b3IiLCJwcmljZVJhbmdlRXJyb3JTZWxlY3RvciIsInByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yIiwicHJpY2VSYW5nZUZvcm1TZWxlY3RvciIsInByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yIiwicHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3IiLCJzaG93TW9yZVRvZ2dsZVNlbGVjdG9yIiwiZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zIiwibW9kYWwiLCJtb2RhbEZhY3RvcnkiLCJtb2RhbE9wZW4iLCJjb2xsYXBzZWRGYWNldHMiLCJjb2xsYXBzZWRGYWNldEl0ZW1zIiwiY29sbGFwc2libGVGYWN0b3J5IiwiaW5pdFByaWNlVmFsaWRhdG9yIiwiZWFjaCIsImluZGV4IiwibmF2TGlzdCIsImNvbGxhcHNlRmFjZXRJdGVtcyIsImFjY29yZGlvblRvZ2dsZSIsIiRhY2NvcmRpb25Ub2dnbGUiLCJjb2xsYXBzaWJsZSIsImRhdGEiLCJpc0NvbGxhcHNlZCIsInB1c2giLCJ0YXJnZXRJZCIsInNldFRpbWVvdXQiLCJpcyIsImNvbGxhcHNlQWxsRmFjZXRzIiwib25TdGF0ZUNoYW5nZSIsImJpbmQiLCJvblRvZ2dsZUNsaWNrIiwib25BY2NvcmRpb25Ub2dnbGUiLCJvbkNsZWFyRmFjZXQiLCJvbkZhY2V0Q2xpY2siLCJvblJhbmdlU3VibWl0IiwiZmlsdGVyRmFjZXRJdGVtcyIsImJpbmRFdmVudHMiLCJyZWZyZXNoVmlldyIsImNvbnRlbnQiLCJyZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcyIsInVwZGF0ZVZpZXciLCJzaG93IiwiYXBpIiwiZ2V0UGFnZSIsImdldFVybCIsImVyciIsImhpZGUiLCJFcnJvciIsImV4cGFuZEZhY2V0SXRlbXMiLCIkbmF2TGlzdCIsImlkIiwiYXR0ciIsImhhc01vcmVSZXN1bHRzIiwidG9nZ2xlRmFjZXRJdGVtcyIsImdldE1vcmVGYWNldFJlc3VsdHMiLCJmYWNldCIsImZhY2V0VXJsIiwic2hvd01vcmUiLCJ0ZW1wbGF0ZSIsInBhcmFtcyIsImxpc3RfYWxsIiwicmVzcG9uc2UiLCJvcGVuIiwiYWRkQ2xhc3MiLCJ1cGRhdGVDb250ZW50IiwiJGl0ZW1zIiwidmFsIiwidG9Mb3dlckNhc2UiLCJlbGVtZW50IiwidGV4dCIsImluZGV4T2YiLCJleHBhbmRGYWNldCIsImNvbGxhcHNlRmFjZXQiLCJjbG9zZSIsIiRhY2NvcmRpb25Ub2dnbGVzIiwiZXhwYW5kQWxsRmFjZXRzIiwibGVuZ3RoIiwidmFsaWRhdG9yIiwibm9kIiwic2VsZWN0b3JzIiwiZXJyb3JTZWxlY3RvciIsImZpZWxkc2V0U2VsZWN0b3IiLCJmb3JtU2VsZWN0b3IiLCJtYXhQcmljZVNlbGVjdG9yIiwibWluUHJpY2VTZWxlY3RvciIsIlZhbGlkYXRvcnMiLCJzZXRNaW5NYXhQcmljZVZhbGlkYXRpb24iLCJwcmljZVJhbmdlVmFsaWRhdG9yIiwiJG5hdkxpc3RzIiwic2hvdWxkQ29sbGFwc2UiLCJyZXN0b3JlQ29sbGFwc2VkRmFjZXRzIiwidW5iaW5kRXZlbnRzIiwib24iLCJvblBvcFN0YXRlIiwiZG9jdW1lbnQiLCJob29rcyIsIm9mZiIsIiRsaW5rIiwic3RvcFByb3BhZ2F0aW9uIiwiZ29Ub1VybCIsIiR0b2dnbGUiLCJ0b2dnbGVDbGFzcyIsInVybFF1ZXJ5UGFyYW1zIiwiT2JqZWN0IiwiYXNzaWduIiwiYXJlQWxsIiwiY29uc3RhbnRzIiwiVkFMSUQiLCJkZWNvZGVVUkkiLCJwYXJzZVF1ZXJ5UGFyYW1zIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJjdXJyZW50VXJsIiwic2VhcmNoUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiaGFzIiwibGlua1VybCIsInJlIiwidXBkYXRlZExpbmtVcmwiLCJyZXBsYWNlIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsInRpdGxlIiwidHJpZ2dlciIsInB1c2hTdGF0ZSIsInJlcGxhY2VQYXJhbXMiLCJwYXJzZWQiLCJwYXJhbSIsInF1ZXJ5RGF0YSIsIm91dCIsIkFycmF5IiwiaXNBcnJheSIsIm5keCIsInN1YnN0cmluZyIsImkiLCJ0ZW1wIiwiZGVjcmVtZW50Q291bnRlciIsImNvdW50ZXIiLCJpdGVtIiwic3BsaWNlIiwiaW5jcmVtZW50Q291bnRlciIsInVwZGF0ZUNvdW50ZXJOYXYiLCJ1cmxDb250ZXh0IiwiY29tcGFyZSIsImpvaW4iLCJmaW5kIiwiaHRtbCIsInJlbW92ZUNsYXNzIiwiY29tcGFyZUNvdW50ZXIiLCIkY29tcGFyZUxpbmsiLCIkY2hlY2tlZCIsInZhbHVlIiwidHJpZ2dlckhhbmRsZXIiLCJwcm9kdWN0IiwiJGNsaWNrZWRDb21wYXJlTGluayIsImNoZWNrZWQiLCIkdGhpcyIsInByb2R1Y3RzVG9Db21wYXJlIiwic2hvd0FsZXJ0TW9kYWwiLCIkY2xpY2tlZENoZWNrZWRJbnB1dCIsImZldGNoIiwicmVxdWlyZSIsImNvbnRleHQiLCJ3cmFwcGVyIiwidGhlbWVTZXR0aW5ncyIsImhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0IiwiY2FsbFByb2R1Y3RPcHRpb24iLCJwcm9kdWN0X2NsYXNzIiwicHJvZHVjdElkIiwibGlzdCIsInRvU3RyaW5nIiwiZ2V0UHJvZHVjdE9wdGlvbiIsInRoZW4iLCJyZW5kZXJPcHRpb24iLCJpZHgiLCJhcnIiLCJwcm9kdWN0X3dyYXBwZXIiLCJ0eHQiLCJyZW1vdmUiLCJjb3VudE1vcmVPcHRpb24iLCJwcm9kdWN0TGluayIsImFwcGVuZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0b2tlbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwianNvbiIsImFGaWx0ZXIiLCJzaXRlIiwicHJvZHVjdHMiLCJlZGdlcyIsIm5vZGUiLCJlbnRpdHlJZCIsInByb2R1Y3RGaWVsZENvbG9yIiwicHJvZHVjdEZpZWxkU2l6ZSIsImFGaWx0ZXIyIiwicHJvZHVjdE9wdGlvbnMiLCJhRmlsdGVyMyIsImZpbHRlciIsImRpc3BsYXlTdHlsZSIsImFGaWx0ZXI1IiwiZGlzcGxheU5hbWUiLCJoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdDIiLCJhRmlsdGVyNCIsInZhbHVlcyIsInRpdGxlVmFyIiwibGFiZWwiLCJpZFZhciIsImxlbmd0aENvbG9yVmFyIiwiaGV4Q29sb3JzIiwiY29sb3IxIiwiY29sb3IyIiwiY29sb3IzIiwiaW1nIiwiaW1hZ2VVcmwiLCJCb29sZWFuIiwiaGFsb0FkZE9wdGlvbkZvclByb2R1Y3RUZXh0IiwiJHByb2R1Y3RMaXN0aW5nIiwiJGdyaWQiLCIkbGlzdCIsIiRncmlkTW9iaWxlIiwiJGxpc3RNb2JpbGUiLCJoYXNDbGFzcyIsInBhcmVudCIsInNpYmxpbmdzIiwic2xpZGVVcCIsInNsaWRlVG9nZ2xlIiwiJGJvZHkiLCJ0b29sYmFyX3N0aWNreSIsInRvb2xiYXJfcG9zaXRpb24iLCJ0b29sYmFyX2hlaWdodCIsInRvb2xiYXIiLCJoZWlnaHQiLCJvZmZzZXQiLCJ0b3AiLCJvdXRlckhlaWdodCIsInRvb2xiYXJfc2Nyb2xsIiwiZGlkU2Nyb2xsIiwibGFzdFNjcm9sbFRvcCIsImRlbHRhIiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiTWF0aCIsImFicyIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFcUJBLFc7Ozs7Ozs7OztTQUNqQkMsYyxHQUFBLHdCQUFlQyxLQUFmLEVBQXNCO0lBQ2xCLElBQU1DLEdBQUcsR0FBR0MsMENBQUcsQ0FBQ0MsS0FBSixDQUFVQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQTFCLEVBQWdDLElBQWhDLENBQVo7SUFDQSxJQUFNQyxXQUFXLEdBQUdDLENBQUMsQ0FBQ1IsS0FBSyxDQUFDUyxhQUFQLENBQUQsQ0FBdUJDLFNBQXZCLEdBQW1DQyxLQUFuQyxDQUF5QyxHQUF6QyxDQUFwQjtJQUVBVixHQUFHLENBQUNXLEtBQUosQ0FBVUwsV0FBVyxDQUFDLENBQUQsQ0FBckIsSUFBNEJBLFdBQVcsQ0FBQyxDQUFELENBQXZDO0lBQ0EsT0FBT04sR0FBRyxDQUFDVyxLQUFKLENBQVVDLElBQWpCO0lBRUFiLEtBQUssQ0FB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QUQsQ0FBVXNRLE1BQVYsRUFBVCxHQUE4QmxRLENBQUMsQ0FBQ3FILFFBQUQsQ0FBRCxDQUFZNkksTUFBWixFQUFqQyxFQUF1RDtVQUNuREQsT0FBTyxDQUFDdkYsV0FBUixDQUFvQixXQUFwQixFQUFpQ3BGLFFBQWpDLENBQTBDLGFBQTFDOztVQUVBLElBQUlvTCxNQUFNLEdBQUdYLGdCQUFiLEVBQStCO1lBQzNCRixLQUFLLENBQUN2SyxRQUFOLENBQWUsbUJBQWY7VUFDSCxDQUZELE1BRU87WUFDSHVLLEtBQUssQ0FBQ25GLFdBQU4sQ0FBa0IsbUJBQWxCO1VBQ0g7UUFDSjtNQUNKOztNQUVEOEYsYUFBYSxHQUFHRSxNQUFoQjtJQUNILENBNUJEO0VBNkJIOztFQUVELElBQUkxUSxDQUFDLENBQUNKLE1BQUQsQ0FBRCxDQUFVa1IsS0FBVixLQUFvQixJQUF4QixFQUE4QjtJQUMxQmhCLGNBQWM7RUFDakIsQ0FGRCxNQUVNO0lBQ0ZELEtBQUssQ0FBQ25GLFdBQU4sQ0FBa0IsbUJBQWxCO0VBQ0g7QUFDSixDIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL2NvbW1vbi91cmwtdXRpbHMnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRhbG9nUGFnZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBvblNvcnRCeVN1Ym1pdChldmVudCkge1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkuc3BsaXQoJz0nKTtcblxuICAgICAgICB1cmwucXVlcnlbcXVlcnlQYXJhbXNbMF1dID0gcXVlcnlQYXJhbXNbMV07XG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnkucGFnZTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSkgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaG9va3MsIGFwaSB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi91cmwtdXRpbHMnO1xuaW1wb3J0IG1vZGFsRmFjdG9yeSBmcm9tICcuLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbGxhcHNpYmxlJztcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICcuL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IG5vZCBmcm9tICcuL25vZCc7XG5cbi8qKlxuICogRmFjZXRlZCBzZWFyY2ggdmlldyBjb21wb25lbnRcbiAqL1xuY2xhc3MgRmFjZXRlZFNlYXJjaCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlcXVlc3RPcHRpb25zIC0gT2JqZWN0IHdpdGggb3B0aW9ucyBmb3IgdGhlIGFqYXggcmVxdWVzdHNcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgYWZ0ZXIgZmV0Y2hpbmcgdGVtcGxhdGVzXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBDb25maWd1cmFibGUgb3B0aW9uc1xuICAgICAqIEBleGFtcGxlXG4gICAgICpcbiAgICAgKiBsZXQgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICogICAgICB0ZW1wbGF0ZXM6IHtcbiAgICAgKiAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ2NhdGVnb3J5L3Byb2R1Y3QtbGlzdGluZycsXG4gICAgICogICAgICAgICAgc2lkZWJhcjogJ2NhdGVnb3J5L3NpZGViYXInXG4gICAgICogICAgIH1cbiAgICAgKiB9O1xuICAgICAqXG4gICAgICogbGV0IHRlbXBsYXRlc0RpZExvYWQgPSBmdW5jdGlvbihjb250ZW50KSB7XG4gICAgICogICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAqICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG4gICAgICogfTtcbiAgICAgKlxuICAgICAqIGxldCBmYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2gocmVxdWVzdE9wdGlvbnMsIHRlbXBsYXRlc0RpZExvYWQpO1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJlcXVlc3RPcHRpb25zLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGFjY29yZGlvblRvZ2dsZVNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmFjY29yZGlvbi1uYXZpZ2F0aW9uLCAjZmFjZXRlZFNlYXJjaCAuZmFjZXRlZFNlYXJjaC10b2dnbGUnLFxuICAgICAgICAgICAgYmxvY2tlclNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmJsb2NrZXInLFxuICAgICAgICAgICAgY2xlYXJGYWNldFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmZhY2V0ZWRTZWFyY2gtY2xlYXJMaW5rJyxcbiAgICAgICAgICAgIGNvbXBvbmVudFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2gtbmF2TGlzdCcsXG4gICAgICAgICAgICBmYWNldE5hdkxpc3RTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5uYXZMaXN0JyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VFcnJvclNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gLmZvcm0taW5saW5lTWVzc2FnZScsXG4gICAgICAgICAgICBwcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIC5mb3JtLWZpZWxkc2V0JyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VGb3JtU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybScsXG4gICAgICAgICAgICBwcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPW1heF9wcmljZV0nLFxuICAgICAgICAgICAgcHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1taW5fcHJpY2VdJyxcbiAgICAgICAgICAgIHNob3dNb3JlVG9nZ2xlU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYWNjb3JkaW9uLWNvbnRlbnQgLnRvZ2dsZUxpbmsnLFxuICAgICAgICAgICAgZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zOiAnI2ZhY2V0ZWRTZWFyY2gtZmlsdGVySXRlbXMgLmZvcm0taW5wdXQnLFxuICAgICAgICAgICAgbW9kYWw6IG1vZGFsRmFjdG9yeSgnI21vZGFsJylbMF0sXG4gICAgICAgICAgICBtb2RhbE9wZW46IGZhbHNlLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFByaXZhdGUgcHJvcGVydGllc1xuICAgICAgICB0aGlzLnJlcXVlc3RPcHRpb25zID0gcmVxdWVzdE9wdGlvbnM7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy5vcHRpb25zID0gXy5leHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gW107XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgLy8gSW5pdCBwcmljZSB2YWxpZGF0b3JcbiAgICAgICAgdGhpcy5pbml0UHJpY2VWYWxpZGF0b3IoKTtcblxuICAgICAgICAvLyBTaG93IGxpbWl0ZWQgaXRlbXMgYnkgZGVmYXVsdFxuICAgICAgICAkKHRoaXMub3B0aW9ucy5mYWNldE5hdkxpc3RTZWxlY3RvcikuZWFjaCgoaW5kZXgsIG5hdkxpc3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCQobmF2TGlzdCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBNYXJrIGluaXRpYWxseSBjb2xsYXBzZWQgYWNjb3JkaW9uc1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvcikuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG5cbiAgICAgICAgICAgIGlmIChjb2xsYXBzaWJsZS5pc0NvbGxhcHNlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzLnB1c2goY29sbGFwc2libGUudGFyZ2V0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDb2xsYXBzZSBhbGwgZmFjZXRzIGlmIGluaXRpYWxseSBoaWRkZW5cbiAgICAgICAgLy8gTk9URTogTmVlZCB0byBleGVjdXRlIGFmdGVyIENvbGxhcHNpYmxlIGdldHMgYm9vdHN0cmFwcGVkXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCQodGhpcy5vcHRpb25zLmNvbXBvbmVudFNlbGVjdG9yKS5pcygnOmhpZGRlbicpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUFsbEZhY2V0cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBPYnNlcnZlIHVzZXIgZXZlbnRzXG4gICAgICAgIHRoaXMub25TdGF0ZUNoYW5nZSA9IHRoaXMub25TdGF0ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uVG9nZ2xlQ2xpY2sgPSB0aGlzLm9uVG9nZ2xlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSA9IHRoaXMub25BY2NvcmRpb25Ub2dnbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNsZWFyRmFjZXQgPSB0aGlzLm9uQ2xlYXJGYWNldC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uRmFjZXRDbGljayA9IHRoaXMub25GYWNldENsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25SYW5nZVN1Ym1pdCA9IHRoaXMub25SYW5nZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZpbHRlckZhY2V0SXRlbXMgPSB0aGlzLmZpbHRlckZhY2V0SXRlbXMuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xuICAgIHJlZnJlc2hWaWV3KGNvbnRlbnQpIHtcbiAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soY29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICAvLyBJbml0IHByaWNlIHZhbGlkYXRvclxuICAgICAgICB0aGlzLmluaXRQcmljZVZhbGlkYXRvcigpO1xuXG4gICAgICAgIC8vIFJlc3RvcmUgdmlldyBzdGF0ZVxuICAgICAgICAvLyB0aGlzLnJlc3RvcmVDb2xsYXBzZWRGYWNldHMoKTtcbiAgICAgICAgdGhpcy5yZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcygpO1xuXG4gICAgICAgIC8vIEJpbmQgZXZlbnRzXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIHVwZGF0ZVZpZXcoKSB7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmJsb2NrZXJTZWxlY3Rvcikuc2hvdygpO1xuXG4gICAgICAgIGFwaS5nZXRQYWdlKHVybFV0aWxzLmdldFVybCgpLCB0aGlzLnJlcXVlc3RPcHRpb25zLCAoZXJyLCBjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAkKHRoaXMub3B0aW9ucy5ibG9ja2VyU2VsZWN0b3IpLmhpZGUoKTtcblxuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZWZyZXNoIHZpZXcgd2l0aCBuZXcgY29udGVudFxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVmlldyhjb250ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgLy8gUmVtb3ZlXG4gICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuICAgICAgICBjb25zdCBoYXNNb3JlUmVzdWx0cyA9ICRuYXZMaXN0LmRhdGEoJ2hhc01vcmVSZXN1bHRzJyk7XG5cbiAgICAgICAgaWYgKGhhc01vcmVSZXN1bHRzKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLnVuaW9uKHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgW2lkXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcblxuICAgICAgICAvLyBUb2dnbGUgZGVwZW5kaW5nIG9uIGBjb2xsYXBzZWRgIGZsYWdcbiAgICAgICAgaWYgKF8uaW5jbHVkZXModGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0TW9yZUZhY2V0UmVzdWx0cygkbmF2TGlzdCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRNb3JlRmFjZXRSZXN1bHRzKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGZhY2V0ID0gJG5hdkxpc3QuZGF0YSgnZmFjZXQnKTtcbiAgICAgICAgY29uc3QgZmFjZXRVcmwgPSB1cmxVdGlscy5nZXRVcmwoKTtcblxuICAgICAgICBpZiAodGhpcy5yZXF1ZXN0T3B0aW9ucy5zaG93TW9yZSkge1xuICAgICAgICAgICAgYXBpLmdldFBhZ2UoZmFjZXRVcmwsIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogdGhpcy5yZXF1ZXN0T3B0aW9ucy5zaG93TW9yZSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdF9hbGw6IGZhY2V0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLm9wZW4oKTtcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWwnKS5hZGRDbGFzcygnbW9kYWwtLWZpbHRlcicpO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbE9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmaWx0ZXJGYWNldEl0ZW1zKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRpdGVtcyA9ICQoJy5uYXZMaXN0LWl0ZW0nKTtcbiAgICAgICAgY29uc3QgcXVlcnkgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgJGl0ZW1zLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gJChlbGVtZW50KS50ZXh0KCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmICh0ZXh0LmluZGV4T2YocXVlcnkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSkge1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuXG4gICAgICAgIGNvbGxhcHNpYmxlLm9wZW4oKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICBjb2xsYXBzaWJsZS5jbG9zZSgpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlQWxsRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEFsbEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcblxuICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZSBtZXRob2RzXG4gICAgaW5pdFByaWNlVmFsaWRhdG9yKCkge1xuICAgICAgICBpZiAoJCh0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSBub2QoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JzID0ge1xuICAgICAgICAgICAgZXJyb3JTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VFcnJvclNlbGVjdG9yLFxuICAgICAgICAgICAgZmllbGRzZXRTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZm9ybVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIG1heFByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIG1pblByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgfTtcblxuICAgICAgICBWYWxpZGF0b3JzLnNldE1pbk1heFByaWNlVmFsaWRhdGlvbih2YWxpZGF0b3IsIHNlbGVjdG9ycyk7XG5cbiAgICAgICAgdGhpcy5wcmljZVJhbmdlVmFsaWRhdG9yID0gdmFsaWRhdG9yO1xuICAgIH1cblxuICAgIHJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zKCkge1xuICAgICAgICBjb25zdCAkbmF2TGlzdHMgPSAkKHRoaXMub3B0aW9ucy5mYWNldE5hdkxpc3RTZWxlY3Rvcik7XG5cbiAgICAgICAgLy8gUmVzdG9yZSBjb2xsYXBzZWQgc3RhdGUgZm9yIGVhY2ggZmFjZXRcbiAgICAgICAgJG5hdkxpc3RzLmVhY2goKGluZGV4LCBuYXZMaXN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkbmF2TGlzdCA9ICQobmF2TGlzdCk7XG4gICAgICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRDb2xsYXBzZSA9IF8uaW5jbHVkZXModGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XG5cbiAgICAgICAgICAgIGlmIChzaG91bGRDb2xsYXBzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldEl0ZW1zKCRuYXZMaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzdG9yZUNvbGxhcHNlZEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGNvbGxhcHNpYmxlLnRhcmdldElkO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkQ29sbGFwc2UgPSBfLmluY2x1ZGVzKHRoaXMuY29sbGFwc2VkRmFjZXRzLCBpZCk7XG5cbiAgICAgICAgICAgIGlmIChzaG91bGRDb2xsYXBzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgLy8gQ2xlYW4tdXBcbiAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcblxuICAgICAgICAvLyBET00gZXZlbnRzXG4gICAgICAgICQod2luZG93KS5vbignc3RhdGVjaGFuZ2UnLCB0aGlzLm9uU3RhdGVDaGFuZ2UpO1xuICAgICAgICAkKHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgdGhpcy5vcHRpb25zLnNob3dNb3JlVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25Ub2dnbGVDbGljayk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCd0b2dnbGUuY29sbGFwc2libGUnLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25BY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vbigna2V5dXAnLCB0aGlzLm9wdGlvbnMuZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zLCB0aGlzLmZpbHRlckZhY2V0SXRlbXMpO1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5jbGVhckZhY2V0U2VsZWN0b3IpLm9uKCdjbGljaycsIHRoaXMub25DbGVhckZhY2V0KTtcblxuICAgICAgICAvLyBIb29rc1xuICAgICAgICBob29rcy5vbignZmFjZXRlZFNlYXJjaC1mYWNldC1jbGlja2VkJywgdGhpcy5vbkZhY2V0Q2xpY2spO1xuICAgICAgICBob29rcy5vbignZmFjZXRlZFNlYXJjaC1yYW5nZS1zdWJtaXR0ZWQnLCB0aGlzLm9uUmFuZ2VTdWJtaXQpO1xuICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgIH1cblxuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgLy8gRE9NIGV2ZW50c1xuICAgICAgICAkKHdpbmRvdykub2ZmKCdzdGF0ZWNoYW5nZScsIHRoaXMub25TdGF0ZUNoYW5nZSk7XG4gICAgICAgICQod2luZG93KS5vZmYoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljaycsIHRoaXMub3B0aW9ucy5zaG93TW9yZVRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uVG9nZ2xlQ2xpY2spO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ3RvZ2dsZS5jb2xsYXBzaWJsZScsIHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvciwgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZigna2V5dXAnLCB0aGlzLm9wdGlvbnMuZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zLCB0aGlzLmZpbHRlckZhY2V0SXRlbXMpO1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5jbGVhckZhY2V0U2VsZWN0b3IpLm9mZignY2xpY2snLCB0aGlzLm9uQ2xlYXJGYWNldCk7XG5cbiAgICAgICAgLy8gSG9va3NcbiAgICAgICAgaG9va3Mub2ZmKCdmYWNldGVkU2VhcmNoLWZhY2V0LWNsaWNrZWQnLCB0aGlzLm9uRmFjZXRDbGljayk7XG4gICAgICAgIGhvb2tzLm9mZignZmFjZXRlZFNlYXJjaC1yYW5nZS1zdWJtaXR0ZWQnLCB0aGlzLm9uUmFuZ2VTdWJtaXQpO1xuICAgICAgICBob29rcy5vZmYoJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICB9XG5cbiAgICBvbkNsZWFyRmFjZXQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGxpbmsgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCB1cmwgPSAkbGluay5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIFVSTFxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG4gICAgfVxuXG4gICAgb25Ub2dnbGVDbGljayhldmVudCkge1xuICAgICAgICBjb25zdCAkdG9nZ2xlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgJG5hdkxpc3QgPSAkKCR0b2dnbGUuYXR0cignaHJlZicpKTtcblxuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHRcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBUb2dnbGUgdmlzaWJsZSBpdGVtc1xuICAgICAgICB0aGlzLnRvZ2dsZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgIH1cblxuICAgIG9uRmFjZXRDbGljayhldmVudCkge1xuICAgICAgICBjb25zdCAkbGluayA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHVybCA9ICRsaW5rLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICRsaW5rLnRvZ2dsZUNsYXNzKCdpcy1zZWxlY3RlZCcpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBVUkxcbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubW9kYWxPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU29ydEJ5U3VibWl0KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKS5zcGxpdCgnPScpO1xuXG4gICAgICAgIHVybC5xdWVyeVtxdWVyeVBhcmFtc1swXV0gPSBxdWVyeVBhcmFtc1sxXTtcbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5wYWdlO1xuXG4gICAgICAgIC8vIFVybCBvYmplY3QgYHF1ZXJ5YCBpcyBub3QgYSB0cmFkaXRpb25hbCBKYXZhU2NyaXB0IE9iamVjdCBvbiBhbGwgc3lzdGVtcywgY2xvbmUgaXQgaW5zdGVhZFxuICAgICAgICBjb25zdCB1cmxRdWVyeVBhcmFtcyA9IHt9O1xuICAgICAgICBPYmplY3QuYXNzaWduKHVybFF1ZXJ5UGFyYW1zLCB1cmwucXVlcnkpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybFF1ZXJ5UGFyYW1zKSB9KSk7XG4gICAgfVxuXG4gICAgb25SYW5nZVN1Ym1pdChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICghdGhpcy5wcmljZVJhbmdlVmFsaWRhdG9yLmFyZUFsbChub2QuY29uc3RhbnRzLlZBTElEKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0gZGVjb2RlVVJJKCQoZXZlbnQuY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkpLnNwbGl0KCcmJyk7XG4gICAgICAgIHF1ZXJ5UGFyYW1zID0gdXJsVXRpbHMucGFyc2VRdWVyeVBhcmFtcyhxdWVyeVBhcmFtcyk7XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcXVlcnlQYXJhbXMpIHtcbiAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdXJsLnF1ZXJ5W2tleV0gPSBxdWVyeVBhcmFtc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXJsIG9iamVjdCBgcXVlcnlgIGlzIG5vdCBhIHRyYWRpdGlvbmFsIEphdmFTY3JpcHQgT2JqZWN0IG9uIGFsbCBzeXN0ZW1zLCBjbG9uZSBpdCBpbnN0ZWFkXG4gICAgICAgIGNvbnN0IHVybFF1ZXJ5UGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5hc3NpZ24odXJsUXVlcnlQYXJhbXMsIHVybC5xdWVyeSk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybFF1ZXJ5UGFyYW1zKSB9KSk7XG4gICAgfVxuXG4gICAgb25TdGF0ZUNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgfVxuXG4gICAgb25BY2NvcmRpb25Ub2dnbGUoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG4gICAgICAgIGNvbnN0IGlkID0gY29sbGFwc2libGUudGFyZ2V0SWQ7XG5cbiAgICAgICAgaWYgKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IF8udW5pb24odGhpcy5jb2xsYXBzZWRGYWNldHMsIFtpZF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldHMsIGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUG9wU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhjdXJyZW50VXJsKTtcbiAgICAgICAgLy8gSWYgc2VhcmNoUGFyYW1zIGRvZXMgbm90IGNvbnRhaW4gYSBwYWdlIHZhbHVlIHRoZW4gbW9kaWZ5IHVybCBxdWVyeSBzdHJpbmcgdG8gaGF2ZSBwYWdlPTFcbiAgICAgICAgaWYgKCFzZWFyY2hQYXJhbXMuaGFzKCdwYWdlJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmtVcmwgPSAkKCcucGFnaW5hdGlvbi1saW5rJykuYXR0cignaHJlZicpO1xuICAgICAgICAgICAgY29uc3QgcmUgPSAvcGFnZT1bMC05XSsvaTtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRMaW5rVXJsID0gbGlua1VybC5yZXBsYWNlKHJlLCAncGFnZT0xJyk7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCB1cGRhdGVkTGlua1VybCk7XG4gICAgICAgIH1cbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGYWNldGVkU2VhcmNoO1xuIiwiaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuXG5jb25zdCB1cmxVdGlscyA9IHtcbiAgICBnZXRVcmw6ICgpID0+IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0ke3dpbmRvdy5sb2NhdGlvbi5zZWFyY2h9YCxcblxuICAgIGdvVG9Vcmw6ICh1cmwpID0+IHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgdXJsKTtcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XG4gICAgfSxcblxuICAgIHJlcGxhY2VQYXJhbXM6ICh1cmwsIHBhcmFtcykgPT4ge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBVcmwucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgbGV0IHBhcmFtO1xuXG4gICAgICAgIC8vIExldCB0aGUgZm9ybWF0dGVyIHVzZSB0aGUgcXVlcnkgb2JqZWN0IHRvIGJ1aWxkIHRoZSBuZXcgdXJsXG4gICAgICAgIHBhcnNlZC5zZWFyY2ggPSBudWxsO1xuXG4gICAgICAgIGZvciAocGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KHBhcmFtKSkge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5xdWVyeVtwYXJhbV0gPSBwYXJhbXNbcGFyYW1dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFVybC5mb3JtYXQocGFyc2VkKTtcbiAgICB9LFxuXG4gICAgYnVpbGRRdWVyeVN0cmluZzogKHF1ZXJ5RGF0YSkgPT4ge1xuICAgICAgICBsZXQgb3V0ID0gJyc7XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIGZvciAoa2V5IGluIHF1ZXJ5RGF0YSkge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5RGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlEYXRhW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZHg7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChuZHggaW4gcXVlcnlEYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxdWVyeURhdGFba2V5XS5oYXNPd25Qcm9wZXJ0eShuZHgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0ICs9IGAmJHtrZXl9PSR7cXVlcnlEYXRhW2tleV1bbmR4XX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0ICs9IGAmJHtrZXl9PSR7cXVlcnlEYXRhW2tleV19YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0LnN1YnN0cmluZygxKTtcbiAgICB9LFxuXG4gICAgcGFyc2VRdWVyeVBhcmFtczogKHF1ZXJ5RGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXJ5RGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IHF1ZXJ5RGF0YVtpXS5zcGxpdCgnPScpO1xuXG4gICAgICAgICAgICBpZiAodGVtcFswXSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJhbXNbdGVtcFswXV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc1t0ZW1wWzBdXS5wdXNoKHRlbXBbMV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc1t0ZW1wWzBdXSA9IFtwYXJhbXNbdGVtcFswXV0sIHRlbXBbMV1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3RlbXBbMF1dID0gdGVtcFsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVybFV0aWxzO1xuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XG5cbmZ1bmN0aW9uIGRlY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xuICAgIGNvbnN0IGluZGV4ID0gY291bnRlci5pbmRleE9mKGl0ZW0pO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgY291bnRlci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XG4gICAgY291bnRlci5wdXNoKGl0ZW0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb3VudGVyTmF2KGNvdW50ZXIsICRsaW5rLCB1cmxDb250ZXh0KSB7XG4gICAgaWYgKGNvdW50ZXIubGVuZ3RoID4gMSkge1xuICAgICAgICBpZiAoISRsaW5rLmlzKCd2aXNpYmxlJykpIHtcbiAgICAgICAgICAgICRsaW5rLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICAgICAgJGxpbmsuYXR0cignaHJlZicsIGAke3VybENvbnRleHQuY29tcGFyZX0vJHtjb3VudGVyLmpvaW4oJy8nKX1gKTtcbiAgICAgICAgJGxpbmsuZmluZCgnc3Bhbi5jb3VudFBpbGwnKS5odG1sKGNvdW50ZXIubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkbGluay5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHVybENvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZUNvdW50ZXIgPSBbXTtcblxuICAgIGNvbnN0ICRjb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcblxuICAgICQoJ2JvZHknKS5vbignY29tcGFyZVJlc2V0JywgKCkgPT4ge1xuICAgICAgICBjb25zdCAkY2hlY2tlZCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGNvbXBhcmVDb3VudGVyID0gJGNoZWNrZWQubGVuZ3RoID8gXy5tYXAoJGNoZWNrZWQsIGVsZW1lbnQgPT4gZWxlbWVudC52YWx1ZSkgOiBbXTtcbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNvbXBhcmVMaW5rLCB1cmxDb250ZXh0KTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLWNvbXBhcmUtaWRdJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBwcm9kdWN0ID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcblxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICBpbmNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNsaWNrZWRDb21wYXJlTGluaywgdXJsQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ3N1Ym1pdCcsICdbZGF0YS1wcm9kdWN0LWNvbXBhcmVdJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCAkdGhpcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzVG9Db21wYXJlID0gJHRoaXMuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBpZiAocHJvZHVjdHNUb0NvbXBhcmUubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKCdZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3QgdHdvIHByb2R1Y3RzIHRvIGNvbXBhcmUnKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnYVtkYXRhLWNvbXBhcmUtbmF2XScsICgpID0+IHtcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDaGVja2VkSW5wdXQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBpZiAoJGNsaWNrZWRDaGVja2VkSW5wdXQubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKCdZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3QgdHdvIHByb2R1Y3RzIHRvIGNvbXBhcmUnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmNvbnN0IGZldGNoID0gcmVxdWlyZSgnbm9kZS1mZXRjaCcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0LCB3cmFwcGVyKSB7XG4gICAgaWYgKGNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdCA9PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gY29udGV4dC50b2tlbixcbiAgICAgICAgICAgIHByb2R1Y3Rfd3JhcHBlciA9ICQoJyMnK3dyYXBwZXIpLFxuICAgICAgICAgICAgcHJvZHVjdF9jbGFzcyA9IHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZCcpO1xuICAgICAgICB2YXIgIGxpc3QgPSBbXTtcblxuICAgICAgICBmdW5jdGlvbiBjYWxsUHJvZHVjdE9wdGlvbigpIHtcbiAgICAgICAgICAgIHByb2R1Y3RfY2xhc3MuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdElkID0gJChlbGVtZW50KS5kYXRhKFwicHJvZHVjdC1pZFwiKTtcblxuICAgICAgICAgICAgICAgIGxpc3QucHVzaChwcm9kdWN0SWQudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYobGlzdC5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBnZXRQcm9kdWN0T3B0aW9uKGxpc3QpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbihkYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICAkLmVhY2gobGlzdCwgKGlkeCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZCA9IGxpc3RbaWR4XTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLW9wdGlvbi1zd2F0Y2gnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0eHQgPSAkKGVsZW1lbnQpLmRhdGEoJ3Byb2R1Y3Qtc3dhdGNoLXZhbHVlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyW3R4dF0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyclt0eHRdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLW9wdGlvbi1zd2F0Y2gnKS5sZW5ndGggPiA0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY291bnRNb3JlT3B0aW9uICA9IHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1vcHRpb24tc3dhdGNoJykubGVuZ3RoIC0gNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdExpbmsgPSBwcm9kdWN0X3dyYXBwZXIuZmluZCgnW2RhdGEtcHJvZHVjdC1pZD1cIicrcHJvZHVjdElkKydcIl0nKS5maW5kKCcuY2FyZC1saW5rJykuYXR0cignaHJlZicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLW9wdGlvbi1zd2F0Y2gnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpbmRleCA+PSA0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1maWVsZCAuc2hvd21vcmUnKS5sZW5ndGggPCAxKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLWZpZWxkOm5vdCguZm9ybS1maWVsZC0tc2l6ZSknKS5hcHBlbmQoJzxhIGhyZWY9XCInK3Byb2R1Y3RMaW5rKydcIiBjbGFzcz1cInNob3dtb3JlXCI+KycrY291bnRNb3JlT3B0aW9uKyc8L2E+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0UHJvZHVjdE9wdGlvbihsaXN0KXtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaCgnL2dyYXBocWwnLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdG9rZW5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5IFNldmVyYWxQcm9kdWN0c0J5SUQge1xuICAgICAgICAgICAgICAgICAgICAgIHNpdGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMoZW50aXR5SWRzOiBbYCtsaXN0K2BdLCBmaXJzdDogNTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0T3B0aW9ucyhmaXJzdDogNTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gTXVsdGlwbGVDaG9pY2VPcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5U3R5bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBTd2F0Y2hPcHRpb25WYWx1ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGV4Q29sb3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmwod2lkdGg6IDUwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBgfSksXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKHJlcyA9PiByZXMuZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW5kZXJPcHRpb24oZGF0YSl7XG4gICAgICAgICAgICB2YXIgYUZpbHRlciA9IGRhdGEuc2l0ZS5wcm9kdWN0cy5lZGdlcztcblxuICAgICAgICAgICAgJC5lYWNoKGFGaWx0ZXIsIChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0SWQgPSBhRmlsdGVyW2luZGV4XS5ub2RlLmVudGl0eUlkLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvciA9IHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1maWVsZDpub3QoLmZvcm0tZmllbGQtLXNpemUpJyksXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZFNpemUgPSBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tZmllbGQtLXNpemUnKSxcbiAgICAgICAgICAgICAgICAgICAgYUZpbHRlcjIgPSBhRmlsdGVyW2luZGV4XS5ub2RlLnByb2R1Y3RPcHRpb25zLmVkZ2VzO1xuXG4gICAgICAgICAgICAgICAgdmFyIGFGaWx0ZXIzID0gYUZpbHRlcjIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLm5vZGUuZGlzcGxheVN0eWxlID09PSAnU3dhdGNoJztcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHZhciBhRmlsdGVyNSA9IGFGaWx0ZXIyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5ub2RlLmRpc3BsYXlOYW1lID09PSBjb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QyO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYoYUZpbHRlcjMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhRmlsdGVyNCA9IGFGaWx0ZXIzWzBdLm5vZGUudmFsdWVzLmVkZ2VzO1xuXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaChhRmlsdGVyNCwgKGlkeCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpdGxlVmFyID0gYUZpbHRlcjRbaWR4XS5ub2RlLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkVmFyID0gYUZpbHRlcjRbaWR4XS5ub2RlLmVudGl0eUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aENvbG9yVmFyID0gYUZpbHRlcjRbaWR4XS5ub2RlLmhleENvbG9ycy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IxID0gYUZpbHRlcjRbaWR4XS5ub2RlLmhleENvbG9yc1swXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjIgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaGV4Q29sb3JzWzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yMyA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5oZXhDb2xvcnNbMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nID0gYUZpbHRlcjRbaWR4XS5ub2RlLmltYWdlVXJsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihsZW5ndGhDb2xvclZhciA9PSAyKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvci5hcHBlbmQoJzxsYWJlbCBjbGFzcz1cImZvcm0tb3B0aW9uIGZvcm0tb3B0aW9uLXN3YXRjaFwiIGRhdGEtcHJvZHVjdC1zd2F0Y2gtdmFsdWU9XCInK2lkVmFyKydcIj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXRvb2x0aXBcIj4nK3RpdGxlVmFyKyc8L3NwYW4+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yIGZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yMlwiIHRpdGxlPVwiJyt0aXRsZVZhcisnXCI+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicrY29sb3IxKydcIj48L3NwYW4+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicrY29sb3IyKydcIj48L3NwYW4+PC9zcGFuPjwvbGFiZWw+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYobGVuZ3RoQ29sb3JWYXIgPT09IDMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yLmFwcGVuZCgnPGxhYmVsIGNsYXNzPVwiZm9ybS1vcHRpb24gZm9ybS1vcHRpb24tc3dhdGNoXCIgZGF0YS1wcm9kdWN0LXN3YXRjaC12YWx1ZT1cIicraWRWYXIrJ1wiPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdG9vbHRpcFwiPicrdGl0bGVWYXIrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXZhcmlhbnQgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IyXCIgdGl0bGU9XCInK3RpdGxlVmFyKydcIj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jytjb2xvcjErJ1wiPjwvc3Bhbj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jytjb2xvcjIrJ1wiPjwvc3Bhbj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jytjb2xvcjMrJ1wiPjwvc3Bhbj48L3NwYW4+PC9sYWJlbD4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihCb29sZWFuKGNvbG9yMSkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yLmFwcGVuZCgnPGxhYmVsIGNsYXNzPVwiZm9ybS1vcHRpb24gZm9ybS1vcHRpb24tc3dhdGNoXCIgZGF0YS1wcm9kdWN0LXN3YXRjaC12YWx1ZT1cIicraWRWYXIrJ1wiPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdG9vbHRpcFwiPicrdGl0bGVWYXIrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXZhcmlhbnQgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3JcIiB0aXRsZT1cIicrdGl0bGVWYXIrJ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJytjb2xvcjErJ1wiPjwvc3Bhbj48L2xhYmVsPicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKEJvb2xlYW4oaW1nKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IuYXBwZW5kKCc8bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvbiBmb3JtLW9wdGlvbi1zd2F0Y2hcIiBkYXRhLXByb2R1Y3Qtc3dhdGNoLXZhbHVlPVwiJytpZFZhcisnXCI+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi10b29sdGlwXCI+Jyt0aXRsZVZhcisnPC9zcGFuPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1wYXR0ZXJuXCIgdGl0bGU9XCInK3RpdGxlVmFyKydcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnK2ltZysnKVwiPjwvc3Bhbj48L2xhYmVsPicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKGFGaWx0ZXI1Lmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICBpZihwcm9kdWN0RmllbGRTaXplLmxlbmd0aCA8IDEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZCBmb3JtLWZpZWxkLS1zaXplXCI+PGxhYmVsIGNsYXNzPVwiZm9ybS1vcHRpb25cIj4nK2NvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdFRleHQudG9TdHJpbmcoKSsnPC9sYWJlbD48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKChhRmlsdGVyNS5sZW5ndGggPT0gMCkgJiYgKGFGaWx0ZXIzLmxlbmd0aCA9PSAwKSl7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJycpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbFByb2R1Y3RPcHRpb24oKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCAkcHJvZHVjdExpc3RpbmcgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdExpc3RpbmcnKSxcbiAgICAgICAgJGdyaWQgPSAkKCcjZ3JpZC12aWV3JyksXG4gICAgICAgICRsaXN0ID0gJCgnI2xpc3QtdmlldycpLFxuICAgICAgICAkZ3JpZE1vYmlsZSA9ICQoJyNncmlkLXZpZXctbW9iaWxlJyksXG4gICAgICAgICRsaXN0TW9iaWxlID0gJCgnI2xpc3Qtdmlldy1tb2JpbGUnKTtcblxuICAgICRsaXN0Lm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKCEkbGlzdC5oYXNDbGFzcygnY3VycmVudC12aWV3JykpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgXG4gICAgICAgICAgICAgICAgJGxpc3QuYWRkQ2xhc3MoJ2N1cnJlbnQtdmlldycpO1xuICAgICAgICAgICAgICAgICRsaXN0TW9iaWxlLmFkZENsYXNzKCdjdXJyZW50LXZpZXcnKTtcbiAgICAgICAgICAgICAgICAkZ3JpZC5yZW1vdmVDbGFzcygnY3VycmVudC12aWV3Jyk7XG4gICAgICAgICAgICAgICAgJGdyaWRNb2JpbGUucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdmlldycpO1xuICAgICAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZy5yZW1vdmVDbGFzcygncHJvZHVjdEdyaWQnKS5hZGRDbGFzcygncHJvZHVjdExpc3QnKTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgIH1cbiAgIH0pO1xuXG4gICAgJGdyaWQub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoISRncmlkLmhhc0NsYXNzKCdjdXJyZW50LXZpZXcnKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpeyBcbiAgICAgICAgICAgICAgICAkZ3JpZC5hZGRDbGFzcygnY3VycmVudC12aWV3Jyk7XG4gICAgICAgICAgICAgICAgJGdyaWRNb2JpbGUuYWRkQ2xhc3MoJ2N1cnJlbnQtdmlldycpO1xuICAgICAgICAgICAgICAgICRsaXN0LnJlbW92ZUNsYXNzKCdjdXJyZW50LXZpZXcnKTtcbiAgICAgICAgICAgICAgICAkbGlzdE1vYmlsZS5yZW1vdmVDbGFzcygnY3VycmVudC12aWV3Jyk7XG4gICAgICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nLnJlbW92ZUNsYXNzKCdwcm9kdWN0TGlzdCcpLmFkZENsYXNzKCdwcm9kdWN0R3JpZCcpO1xuICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJGxpc3RNb2JpbGUub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoISRsaXN0TW9iaWxlLmhhc0NsYXNzKCdjdXJyZW50LXZpZXcnKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpeyBcbiAgICAgICAgICAgICAgICAkbGlzdC5hZGRDbGFzcygnY3VycmVudC12aWV3Jyk7XG4gICAgICAgICAgICAgICAgJGxpc3RNb2JpbGUuYWRkQ2xhc3MoJ2N1cnJlbnQtdmlldycpO1xuICAgICAgICAgICAgICAgICRncmlkLnJlbW92ZUNsYXNzKCdjdXJyZW50LXZpZXcnKTtcbiAgICAgICAgICAgICAgICAkZ3JpZE1vYmlsZS5yZW1vdmVDbGFzcygnY3VycmVudC12aWV3Jyk7XG4gICAgICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nLnJlbW92ZUNsYXNzKCdwcm9kdWN0R3JpZCcpLmFkZENsYXNzKCdwcm9kdWN0TGlzdCcpO1xuICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJGdyaWRNb2JpbGUub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoISRncmlkTW9iaWxlLmhhc0NsYXNzKCdjdXJyZW50LXZpZXcnKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpeyBcbiAgICAgICAgICAgICAgICAkZ3JpZC5hZGRDbGFzcygnY3VycmVudC12aWV3Jyk7XG4gICAgICAgICAgICAgICAgJGdyaWRNb2JpbGUuYWRkQ2xhc3MoJ2N1cnJlbnQtdmlldycpO1xuICAgICAgICAgICAgICAgICRsaXN0LnJlbW92ZUNsYXNzKCdjdXJyZW50LXZpZXcnKTtcbiAgICAgICAgICAgICAgICAkbGlzdE1vYmlsZS5yZW1vdmVDbGFzcygnY3VycmVudC12aWV3Jyk7XG4gICAgICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nLnJlbW92ZUNsYXNzKCdwcm9kdWN0TGlzdCcpLmFkZENsYXNzKCdwcm9kdWN0R3JpZCcpO1xuICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQoJy5hbGwtY2F0ZWdvcmllcy1saXN0JykubGVuZ3RoID4gMCkge1xuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmFsbC1jYXRlZ29yaWVzLWxpc3QgLmljb24tZHJvcGRvd24nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcykucGFyZW50KCk7XG5cbiAgICAgICAgICAgICR0aGlzLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2lzLWNsaWNrZWQgY3VycmVudC1jYXRlJyk7XG4gICAgICAgICAgICAkdGhpcy50b2dnbGVDbGFzcygnaXMtY2xpY2tlZCcpO1xuICAgICAgICAgICAgJHRoaXMuc2libGluZ3MoKS5maW5kKFwiPiAuZHJvcGRvd24tY2F0ZWdvcnktbGlzdFwiKS5zbGlkZVVwKFwic2xvd1wiKTtcbiAgICAgICAgICAgICR0aGlzLmZpbmQoXCI+IC5kcm9wZG93bi1jYXRlZ29yeS1saXN0XCIpLnNsaWRlVG9nZ2xlKFwic2xvd1wiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmFsbC1jYXRlZ29yaWVzLWxpc3QgbGknKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2N1cnJlbnQtY2F0ZScpKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKFwiPiAuZHJvcGRvd24tY2F0ZWdvcnktbGlzdFwiKS5zbGlkZVRvZ2dsZShcInNsb3dcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblxuICAgIGZ1bmN0aW9uIHRvb2xiYXJfc3RpY2t5KCkge1xuICAgICAgICB2YXIgdG9vbGJhcl9wb3NpdGlvbiwgdG9vbGJhcl9oZWlnaHQsXG4gICAgICAgICAgICB0b29sYmFyID0gJCgnLnBhZ2UtbGlzdGluZyAuaGFsby10b29sYmFyJyk7XG5cbiAgICAgICAgdG9vbGJhcl9oZWlnaHQgPSB0b29sYmFyLmhlaWdodCgpO1xuICAgICAgICB0b29sYmFyX3Bvc2l0aW9uID0gdG9vbGJhci5vZmZzZXQoKS50b3AgKyB0b29sYmFyLm91dGVySGVpZ2h0KHRydWUpO1xuXG4gICAgICAgIGlmICh0b29sYmFyLmxlbmd0aCkge1xuICAgICAgICAgICAgdG9vbGJhcl9zY3JvbGwodG9vbGJhcl9wb3NpdGlvbiwgdG9vbGJhcl9oZWlnaHQsIHRvb2xiYXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9vbGJhcl9zY3JvbGwodG9vbGJhcl9wb3NpdGlvbiwgdG9vbGJhcl9oZWlnaHQsIHRvb2xiYXIpIHtcbiAgICAgICAgdmFyIGRpZFNjcm9sbCxcbiAgICAgICAgICAgIGxhc3RTY3JvbGxUb3AgPSAwLFxuICAgICAgICAgICAgZGVsdGEgPSA1O1xuXG4gICAgICAgICQod2luZG93KS5vbignc2Nyb2xsIGxvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgICAgICAgIGlmKE1hdGguYWJzKGxhc3RTY3JvbGxUb3AgLSBzY3JvbGwpIDw9IGRlbHRhKXtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzY3JvbGwgPiBsYXN0U2Nyb2xsVG9wICYmIHNjcm9sbCA+IHRvb2xiYXJfcG9zaXRpb24pe1xuICAgICAgICAgICAgICAgIHRvb2xiYXIucmVtb3ZlQ2xhc3MoJ3N0aWNreS1kb3duJykuYWRkQ2xhc3MoJ3N0aWNreS11cCcpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChzY3JvbGwgPiB0b29sYmFyX3Bvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICRib2R5LmFkZENsYXNzKCdoYXMtc3RpY2t5VG9vbGJhcicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRib2R5LnJlbW92ZUNsYXNzKCdoYXMtc3RpY2t5VG9vbGJhcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYoc2Nyb2xsICsgJCh3aW5kb3cpLmhlaWdodCgpIDwgJChkb2N1bWVudCkuaGVpZ2h0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhci5yZW1vdmVDbGFzcygnc3RpY2t5LXVwJykuYWRkQ2xhc3MoJ3N0aWNreS1kb3duJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbCA+IHRvb2xiYXJfcG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRib2R5LmFkZENsYXNzKCdoYXMtc3RpY2t5VG9vbGJhcicpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoJ2hhcy1zdGlja3lUb29sYmFyJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxhc3RTY3JvbGxUb3AgPSBzY3JvbGw7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDEwMjUpIHtcbiAgICAgICAgdG9vbGJhcl9zdGlja3koKTtcbiAgICB9IGVsc2V7XG4gICAgICAgICRib2R5LnJlbW92ZUNsYXNzKCdoYXMtc3RpY2t5VG9vbGJhcicpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=