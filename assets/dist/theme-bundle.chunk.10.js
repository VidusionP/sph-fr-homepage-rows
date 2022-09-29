(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

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

/***/ "./assets/js/theme/halothemes/parallax/jquery.parallax-scroll.min.js":
/*!***************************************************************************!*\
  !*** ./assets/js/theme/halothemes/parallax/jquery.parallax-scroll.min.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  ParallaxScroll.init();
});
var ParallaxScroll = {
  showLogs: !1,
  round: 1e3,
  init: function init() {
    return this._log("init"), this._inited ? (this._log("Already Inited"), void (this._inited = !0)) : (this._requestAnimationFrame = function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a, b) {
        window.setTimeout(a, 1e3 / 60);
      };
    }(), void this._onScroll(!0));
  },
  _inited: !1,
  _properties: ["x", "y", "z", "rotateX", "rotateY", "rotateZ", "scaleX", "scaleY", "scaleZ", "scale"],
  _requestAnimationFrame: null,
  _log: function _log(a) {
    this.showLogs && console.log("Parallax Scroll / " + a);
  },
  _onScroll: function _onScroll(a) {
    var b = $(document).scrollTop(),
        c = $(window).height();
    this._log("onScroll " + b), $("[data-parallax]").each($.proxy(function (d, e) {
      var f = $(e),
          g = [],
          h = !1,
          i = f.data("style");
      void 0 == i && (i = f.attr("style") || "", f.data("style", i));
      var k,
          j = [f.data("parallax")];

      for (k = 2; f.data("parallax" + k); k++) {
        j.push(f.data("parallax-" + k));
      }

      var l = j.length;

      for (k = 0; k < l; k++) {
        var m = j[k],
            n = m["from-scroll"];
        void 0 == n && (n = Math.max(0, $(e).offset().top - c)), n = 0 | n;
        var o = m.distance,
            p = m["to-scroll"];
        void 0 == o && void 0 == p && (o = c), o = Math.max(0 | o, 1);
        var q = m.easing,
            r = m["easing-return"];

        if (void 0 != q && $.easing && $.easing[q] || (q = null), void 0 != r && $.easing && $.easing[r] || (r = q), q) {
          var s = m.duration;
          void 0 == s && (s = o), s = Math.max(0 | s, 1);
          var t = m["duration-return"];
          void 0 == t && (t = s), o = 1;
          var u = f.data("current-time");
          void 0 == u && (u = 0);
        }

        void 0 == p && (p = n + o), p = 0 | p;
        var v = m.smoothness;
        void 0 == v && (v = 30), v = 0 | v, (a || 0 == v) && (v = 1), v = 0 | v;
        var w = b;
        w = Math.max(w, n), w = Math.min(w, p), q && (void 0 == f.data("sens") && f.data("sens", "back"), w > n && ("back" == f.data("sens") ? (u = 1, f.data("sens", "go")) : u++), w < p && ("go" == f.data("sens") ? (u = 1, f.data("sens", "back")) : u++), a && (u = s), f.data("current-time", u)), this._properties.map($.proxy(function (a) {
          var b = 0,
              c = m[a];

          if (void 0 != c) {
            "scale" == a || "scaleX" == a || "scaleY" == a || "scaleZ" == a ? b = 1 : c = 0 | c;
            var d = f.data("_" + a);
            void 0 == d && (d = b);
            var e = (c - b) * ((w - n) / (p - n)) + b,
                i = d + (e - d) / v;

            if (q && u > 0 && u <= s) {
              var j = b;
              "back" == f.data("sens") && (j = c, c = -c, q = r, s = t), i = $.easing[q](null, u, j, c, s);
            }

            i = Math.ceil(i * this.round) / this.round, i == d && e == c && (i = c), g[a] || (g[a] = 0), g[a] += i, d != g[a] && (f.data("_" + a, g[a]), h = !0);
          }
        }, this));
      }

      if (h) {
        if (void 0 != g.z) {
          var x = m.perspective;
          void 0 == x && (x = 800);
          var y = f.parent();
          y.data("style") || y.data("style", y.attr("style") || ""), y.attr("style", "perspective:" + x + "px; -webkit-perspective:" + x + "px; " + y.data("style"));
        }

        void 0 == g.scaleX && (g.scaleX = 1), void 0 == g.scaleY && (g.scaleY = 1), void 0 == g.scaleZ && (g.scaleZ = 1), void 0 != g.scale && (g.scaleX *= g.scale, g.scaleY *= g.scale, g.scaleZ *= g.scale);
        var z = "translate3d(" + (g.x ? g.x : 0) + "px, " + (g.y ? g.y : 0) + "px, " + (g.z ? g.z : 0) + "px)",
            A = "rotateX(" + (g.rotateX ? g.rotateX : 0) + "deg) rotateY(" + (g.rotateY ? g.rotateY : 0) + "deg) rotateZ(" + (g.rotateZ ? g.rotateZ : 0) + "deg)",
            B = "scaleX(" + g.scaleX + ") scaleY(" + g.scaleY + ") scaleZ(" + g.scaleZ + ")",
            C = z + " " + A + " " + B + ";";
        this._log(C), f.attr("style", "transform:" + C + " -webkit-transform:" + C + " " + i);
      }
    }, this)), window.requestAnimationFrame ? window.requestAnimationFrame($.proxy(this._onScroll, this, !1)) : this._requestAnimationFrame($.proxy(this._onScroll, this, !1));
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/home.js":
/*!*********************************!*\
  !*** ./assets/js/theme/home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.dropdown */ "./node_modules/foundation-sites/js/foundation/foundation.dropdown.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _halothemes_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./halothemes/jquery.fancybox.min */ "./assets/js/theme/halothemes/jquery.fancybox.min.js");
/* harmony import */ var _halothemes_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_halothemes_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./halothemes/haloAddOptionForProductCard */ "./assets/js/theme/halothemes/haloAddOptionForProductCard.js");
/* harmony import */ var _halothemes_parallax_jquery_parallax_scroll_min__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./halothemes/parallax/jquery.parallax-scroll.min */ "./assets/js/theme/halothemes/parallax/jquery.parallax-scroll.min.js");
/* harmony import */ var _halothemes_parallax_jquery_parallax_scroll_min__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_halothemes_parallax_jquery_parallax_scroll_min__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _halothemes_haloVideo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./halothemes/haloVideo */ "./assets/js/theme/halothemes/haloVideo.js");
/* harmony import */ var _halothemes_haloNotifyMe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./halothemes/haloNotifyMe */ "./assets/js/theme/halothemes/haloNotifyMe.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













var Home = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Home, _PageManager);

  function Home(context) {
    return _PageManager.call(this, context) || this;
  }

  var _proto = Home.prototype;

  _proto.onReady = function onReady() {
    this.countDownHeroCarousel();
    this.customPaging();
    this.loadProductByCategory();
    this.loadProductTabByCategory();
    this.loadProductByCategoryWithBanner();
    this.fancyboxVideoBanner();
    this.faqsToggle();
    this.recentBlogSlider();
    this.homeSpecialProduct();
    this.homeParallaxBanner();
    this.loadOptionForProductCard();
    this.customerReviewCarousel();
    this.homeProductRecommended();
  };

  _proto.countDownHeroCarousel = function countDownHeroCarousel() {
    $('.heroCarousel-countdown').each(function (index, element) {
      $(element).parents('.slick-slide').addClass('has-count-down');
      var countDown = $(element).data('carousel-countdown'),
          countDownDate = new Date(countDown).getTime(),
          seft = $(element);
      var countdownfunction = setInterval(function () {
        var now = new Date().getTime(),
            distance = countDownDate - now;

        if (distance < 0) {
          clearInterval(countdownfunction);
          seft.html('');
        } else {
          var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
              hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
              minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)),
              seconds = Math.floor(distance % (1000 * 60) / 1000);
          var strCountDown = "<span class='num'>" + days + "<span>DAYS</span></span><span class='num'>" + hours + "<span>HOURS</span></span><span class='num'>" + minutes + "<span>MINS</span></span><span class='num'>" + seconds + "<span>SECS</span></span>";
          seft.html(strCountDown);
        }
      }, 1000);
    });
  };

  _proto.customPaging = function customPaging() {
    var heroCustom = $('.heroCarousel-custom');
    var heroCustomSlide = $('.heroCarousel-custom .slick-dots li');
    heroCustom.slick({
      dots: true,
      arrows: false,
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: heroCustom.data('autoplay'),
      infinite: true,
      asNavFor: ".heroCarousel"
    }); //ADA

    $('.heroCarousel-custom .slick-dots li').each(function (i) {
      var slide = $(this).find('button').text();
      $(this).find('button').text('0' + slide).addClass('slick-dots-item');
    });
    heroCustom.on('afterChange', function (event, slider, i) {
      var pos = $(slider.$slides[i]).find('div[data-position]').data('position');

      if (pos === 'right') {
        heroCustom.removeClass('heroCarousel-customLeft').addClass('heroCarousel-customRight');
      } else {
        heroCustom.removeClass('heroCarousel-customRight').addClass('heroCarousel-customLeft');
      }
    });

    if ($('.heroCarousel-slide--first .heroCarousel-content-wrapper .heroCarousel-content--right').length) {
      heroCustom.removeClass('heroCarousel-customLeft').addClass('heroCarousel-customRight');
    }
  };

  _proto.loadProductByCategory = function loadProductByCategory() {
    var context = this.context;
    var options = {
      template: 'products/carousel-2'
    };

    if ($('.halo-block[data-category-id]').length > 0) {
      var header_height = $('.header').height();
      $(window).on('scroll load', function () {
        var scroll = $(window).scrollTop(),
            setFlag = false;

        if (scroll > header_height) {
          setFlag = true;
        }

        if (setFlag) {
          $('.halo-block[data-category-id]').each(function (index, element) {
            var wrap = $(element).find('.productCarousel'),
                catId = $(element).data('data-category'),
                catUrl = $(element).data('category-url'),
                blockId = $(element).attr('id');

            if (!$('#product-by-cate-' + catId + ' .productCarousel .productCarousel-slide').length) {
              loadCategory(catId, catUrl, options, wrap, blockId);
            }
          });
          setFlag = false;
        }
      });
    }

    function loadCategory(id, url, option, wrap, blockId) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.getPage(url, option, function (err, response) {
        if (!wrap.find('.productCarousel-slide').length) {
          wrap.html(response);
          slickCarousel(wrap);
          wrap.parents('.halo-block[data-category-id]').find('.loadingOverlay').remove();
          Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5__["default"])(context, blockId);
        }
      });
    }

    function slickCarousel(wrap) {
      wrap.slick({
        dots: true,
        arrows: false,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
        responsive: [{
          breakpoint: 1024,
          settings: {
            arrows: true,
            slidesToShow: parseInt(context.themeSettings.home_product_block_col)
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: parseInt(context.themeSettings.home_product_block_col) - 1
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: parseInt(context.themeSettings.home_product_block_col) - 2
          }
        }]
      });
    }
  };

  _proto.loadProductTabByCategory = function loadProductTabByCategory() {
    var context = this.context;
    var options = {
      template: 'products/carousel-3'
    };

    if ($('.productCarousel-tabs').length > 0) {
      if (!$('.productCarousel-tabs .tab-content.is-active .productCarousel .productCarousel-slide').length) {
        Array.from($('.tab-content.is-active')).forEach(function (item) {
          var $itemEle = $(item);
          var block = $itemEle,
              wrap = block.find('.productCarousel'),
              catId = block.data('tab-category-id'),
              catUrl = block.data('tab-category-url'),
              blockId = block.attr('id');

          if (catUrl.includes("http")) {
            if (location.host.includes("en.superhairpieces.fr")) {
              catUrl = catUrl.replace("//superhairpieces.fr", "//en.superhairpieces.fr");
            }
          }

          if (!$('.productCarousel-tabs .tab-content.is-active .productCarousel .productCarousel-slide').length) {
            console.log(block.find('.loadingOverlay'));
            block.find('.loadingOverlay').show();
            loadCategory(catId, catUrl, options, wrap, blockId);
          }
        });
      }
    } // if($('.productCarousel-tabs').length > 0){
    //     if(!$('.productCarousel-tabs .tab-content.is-active .productCarousel .productCarousel-slide').length){
    //         var block = $('.productCarousel-tabs .tab-content.is-active'),
    //             wrap = block.find('.productCarousel'),
    //             catId = block.data('tab-category-id'),
    //             catUrl = block.data('tab-category-url'),
    //             blockId = block.attr('id');
    //         if (catUrl.includes("http")) {
    //             if (location.host.includes("en.superhairpieces.fr")) {
    //                 catUrl = catUrl.replace("//superhairpieces.fr","//en.superhairpieces.fr");
    //             }
    //         }
    //         if(!$('.productCarousel-tabs .tab-content.is-active .productCarousel .productCarousel-slide').length){
    //             block.find('.loadingOverlay').show();
    //             loadCategory(catId, catUrl, options, wrap, blockId);
    //         }
    //     }
    //     $('.productCarousel-tabs [data-tab]').on('toggled', (event, tab) => {
    //         if(!$('.productCarousel-tabs .tab-content.is-active .productCarousel .productCarousel-slide').length){
    //             var block = $('.productCarousel-tabs .tab-content.is-active'),
    //                 wrap = block.find('.productCarousel'),
    //                 catId = block.data('tab-category-id'),
    //                 catUrl = block.data('tab-category-url'),
    //                 blockId = block.attr('id');
    //             if (catUrl.includes("http")) {
    //                 if (location.host.includes("en.superhairpieces.fr")) {
    //                     catUrl = catUrl.replace("//superhairpieces.fr","//en.superhairpieces.fr");
    //                 }
    //             }
    //             if(!$(event.currentTarget).find('.productCarousel').hasClass('slick-initialized')){
    //                 block.find('.loadingOverlay').show();
    //                 loadCategory(catId, catUrl, options, wrap, blockId);
    //             }
    //         }
    //     });
    // }


    function reviewShow(x) {
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
          $(item1.nextElementSibling).append("\n                    <style>    .checked {\n                        color: rgb(255, 210, 0);\n                \n                }\n                .fa-star-o {\n                    color: rgb(255, 210, 0);\n            \n                }\n                @media (min-width: 768px) {\n                    .productReview2 {\n                        display: flex;\n                    }\n                }\n                @media (min-width: 1025px) {\n                    .productReview2 {\n                        display: unset;\n                    }\n                }\n                @media (min-width: 1400px) {\n                    .productReview2 {\n                        display: flex;\n                    }\n                }\n                </style>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n                    \n                    <span>\n                    <span class=\"fa fa-star" + (0.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                    <span class=\"fa fa-star" + (1.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                    <span class=\"fa fa-star" + (2.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                    <span class=\"fa fa-star" + (3.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                    <span class=\"fa fa-star" + (4.5 <= reviewAvg ? ' checked' : ' fa-star-o') + ("\"></span>      \n                </span>\n                <div style=padding-left:5px;>\n                    " + review3.length + " Commentaires\n                </div>")); // $(item1.nextElementSibling).append(`<div>${reviewAvg}</div>`)
        });
      }).catch(function (err) {
        console.log(err);
      });
    }

    function loadCategory(id, url, option, wrap, blockId) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.getPage(url, option, function (err, response) {
        if (!wrap.find('.productCarousel-slide').length) {
          console.log(response);
          wrap.html(response);
          slickCarousel(wrap);
          wrap.parents('.tab-content').find('.loadingOverlay').remove();
          Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5__["default"])(context, blockId);
          reviewShow();
        }
      });
    }

    function slickCarousel(wrap) {
      wrap.slick({
        dots: false,
        arrows: false,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
        responsive: [{
          breakpoint: 1024,
          settings: {
            arrows: true,
            slidesToShow: parseInt(context.themeSettings.home_product_block_tab_col)
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: parseInt(context.themeSettings.home_product_block_tab_col) - 1
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: parseInt(context.themeSettings.home_product_block_tab_col) - 2
          }
        }]
      });
    }
  };

  _proto.loadProductByCategoryWithBanner = function loadProductByCategoryWithBanner() {
    var context = this.context;
    var options = {
      template: 'products/carousel-4'
    };

    if ($('.halo-block[data-category-with-banner-id]').length > 0) {
      var header_height = $('.header').height();
      var $tabSorting = $('.tab-sorting .tab-title');
      $(window).on('scroll load', function () {
        var scroll = $(window).scrollTop(),
            setFlag = false;

        if (scroll > header_height) {
          setFlag = true;
        }

        if (setFlag) {
          $('.halo-block[data-category-with-banner-id]').each(function (index, element) {
            if ($('.home-layout-2').length && !$(element).hasClass('home2-flash-deals')) {
              var wrap = $(element).find('.tabContent-new .productCarousel');
            } else {
              var wrap = $(element).find('.productCarousel');
            }

            var catId = $(element).data('category-with-banner-id'),
                catUrl = $(element).data('category-with-banner-url'),
                blockId = $(element).attr('id');

            if (!$('#product-with-banner-' + catId + ' .productCarousel .productCarousel-slide').length) {
              loadCategory(catId, catUrl, options, wrap, blockId);
            }
          });
          setFlag = false;
        }
      });
      $tabSorting.on('click', function (e) {
        e.preventDefault();
        var $target = $(e.currentTarget);
        var dataTab = $target.data('tab');
        var $thisBlock = $target.closest('.halo-block-product');
        var wrap = $thisBlock.find('.tabContent-' + dataTab + ' .productCarousel'),
            catId = $target.data('cate-id'),
            catUrl = $target.data('cate-url'),
            blockId = $thisBlock.find('.tabContent-' + dataTab).attr('id');

        if (dataTab == 'viewall') {
          window.location.href = $target.attr('href');
          return;
        }

        $thisBlock.find('.tab-sorting').removeClass('is-active');
        $target.parent().addClass('is-active');
        $thisBlock.find('.tab-content').removeClass('is-active');
        $thisBlock.find('.tabContent-' + dataTab).addClass('is-active');
        console.log('aff');

        if (!$target.hasClass('is-loaded')) {
          $target.addClass('is-loaded');
          loadCategory(catId, catUrl, options, wrap, blockId);
        } else {
          $thisBlock.find('.tabContent-' + dataTab + ' .productCarousel').slick('refresh');
        }
      });

      if ($('.countDowntimer').length) {
        var countDownDate = new Date($('.countDowntimer').attr('data-count-down')).getTime();
        var countdownfunction = setInterval(function () {
          var now = new Date().getTime();
          var distance = countDownDate - now;

          if (distance < 0) {
            clearInterval(countdownfunction);
            $(".countDowntimer").html('');
          } else {
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            var seconds = Math.floor(distance % (1000 * 60) / 1000);
            var strCountDown = "<div class='clock-item'><span class='num'>" + days + "</span><span class='text'>d</span></div><div class='clock-item'><span class='num'>" + hours + ":</span></div><div class='clock-item'><span class='num'>" + minutes + ":</span></div><div class='clock-item'><span class='num'>" + seconds + "</span></div>";
            $(".countDowntimer").html(strCountDown);
          }
        }, 1000);
      }
    }

    function loadCategory(id, url, option, wrap, blockId) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.getPage(url, option, function (err, response) {
        if (!wrap.find('.productCarousel-slide').length) {
          wrap.html(response);

          if (wrap.parents('.halo-block[data-category-with-banner-id]').hasClass('halo-block-product-banners')) {
            if ($('.home-layout-2').length) {
              if (wrap.parents('.halo-block[data-category-with-banner-id]').hasClass('home2-flash-deals')) {
                labelFlashDeals(wrap);
                slickCarousel4(wrap);
              } else {
                slickCarousel3(wrap);
              }
            } else {
              slickCarousel(wrap);
            }
          } else if (wrap.parents('.halo-block[data-category-with-banner-id]').hasClass('halo-block-product-banners2')) {
            slickCarousel2(wrap);
          }

          wrap.parents('.halo-block[data-category-with-banner-id]').find('.loadingOverlay').remove();
          Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5__["default"])(context, blockId);
        }
      });
    }

    function slickCarousel(wrap) {
      wrap.slick({
        dots: true,
        arrows: false,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }]
      });
    }

    function slickCarousel2(wrap) {
      wrap.slick({
        dots: true,
        arrows: false,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
        responsive: [{
          breakpoint: 1024,
          settings: {
            arrows: true,
            slidesToShow: parseInt(context.themeSettings.home_product_block_with_banner_col)
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: parseInt(context.themeSettings.home_product_block_with_banner_col) - 1
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: parseInt(context.themeSettings.home_product_block_with_banner_col) - 2
          }
        }]
      });
    }

    function slickCarousel3(wrap) {
      wrap.slick({
        dots: true,
        arrows: false,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
        responsive: [{
          breakpoint: 1199,
          settings: {
            dots: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 767,
          settings: {
            dots: false,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }]
      });
    }

    function slickCarousel4(wrap) {
      wrap.slick({
        dots: true,
        arrows: false,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
        responsive: [{
          breakpoint: 1199,
          settings: {
            dots: false,
            arrows: true,
            slidesToShow: 5,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 992,
          settings: {
            dots: false,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 767,
          settings: {
            dots: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }]
      });
    }

    function labelFlashDeals(wrap) {
      var $itemSide = wrap.find('.productCarousel-slide');
      $itemSide.each(function (index, element) {
        var $thisLabel = $(element).find('.sale-badge');

        if ($thisLabel.length) {
          var label = $thisLabel.find('.text').data('sale');
          $(element).find('.card-price').addClass('has-labelSale').append('<div class="card-label-sale"><span>-' + label + '</span></div>');
          $thisLabel.remove();
        }
      });
    }
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

  _proto.faqsToggle = function faqsToggle() {
    $('.halo-short-faqs .card .title').on('click', function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      $('.halo-short-faqs .card .title').not($target).removeClass('collapsed');

      if ($target.hasClass('collapsed')) {
        $target.removeClass('collapsed');
      } else {
        $target.addClass('collapsed');
      }

      $('.halo-short-faqs .card').each(function (index, element) {
        if ($(element).find('.title').hasClass('collapsed')) {
          $(element).find('.collapse').slideDown("slow");
        } else {
          $(element).find('.collapse').slideUp("slow");
        }
      });
    });
  };

  _proto.recentBlogSlider = function recentBlogSlider() {
    if ($(window).width() <= 1024) {
      if ($('.halo-recent-post').length) {
        if ($('.halo-recent-post').hasClass('slick-slider')) {
          $('.halo-recent-post').slick('unslick');
        }
      }
    } else {
      if ($('.halo-recent-post').length) {
        if (!$('.halo-recent-post').hasClass('slick-slider')) {
          $('.halo-recent-post').slick();
        }
      }
    }

    $(window).resize(function () {
      if ($(window).width() <= 1024) {
        if ($('.halo-recent-post').length) {
          if ($('.halo-recent-post').hasClass('slick-slider')) {
            $('.halo-recent-post').slick('unslick');
          }
        }
      } else {
        if ($('.halo-recent-post').length) {
          if (!$('.halo-recent-post').hasClass('slick-slider')) {
            $('.halo-recent-post').slick();
          }
        }
      }
    });
  };

  _proto.homeSpecialProduct = function homeSpecialProduct() {
    var context = this.context;

    if (context.themeSettings.home_product_block_special == true) {
      var productId = $('[data-special-product-id]').data('special-product-id'),
          setFlag = false;
      var options = {
        template: 'halothemes/products/halo-special-product-tmp'
      };
      $(window).on('scroll load', function () {
        var scroll = $(window).scrollTop(),
            header_height = $('.header').height();

        if (scroll > header_height) {
          setFlag = true;
        }

        if (setFlag) {
          if (!$('.halo-spacial-product .productView').length) {
            var viewingProduct = function viewingProduct(wrapper) {
              if (wrapper.length > 0) {
                var viewerText = context.themeSettings.product_viewingProduct_text,
                    numbersViewer_text = context.themeSettings.product_viewingProduct_viewer,
                    numbersViewerList = JSON.parse("[" + numbersViewer_text + "]");
                setInterval(function () {
                  var numbersViewerItem = Math.floor(Math.random() * numbersViewerList.length);
                  wrapper.html('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-eye"/></svg>' + numbersViewerList[numbersViewerItem] + " " + viewerText);
                  wrapper.removeClass('u-hiddenVisually');
                }, 10000);
              }
            };

            var countDownProduct = function countDownProduct(wrapper) {
              if (wrapper.length > 0) {
                var countDown = wrapper.data('countdown'),
                    countDownDate = new Date(countDown).getTime(),
                    seft = wrapper;
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

            var soldProduct = function soldProduct(wrapper) {
              if (wrapper.length > 0) {
                var numbersProduct_text = context.themeSettings.product_soldProduct_products,
                    numbersHours_text = context.themeSettings.product_soldProduct_hours,
                    soldProductText = context.themeSettings.product_soldProduct_text,
                    soldProductText2 = context.themeSettings.product_soldProduct_hours_text;
                var numbersProductList = JSON.parse("[" + numbersProduct_text + "]"),
                    numbersProductItem = Math.floor(Math.random() * numbersProductList.length),
                    numbersHoursList = JSON.parse("[" + numbersHours_text + "]"),
                    numbersHoursItem = Math.floor(Math.random() * numbersHoursList.length);
                wrapper.html('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-fire"/></svg><span>' + numbersProductList[numbersProductItem] + " " + soldProductText + " " + numbersHoursList[numbersHoursItem] + " " + soldProductText2 + '</span>');
                wrapper.removeClass('u-hiddenVisually').show();
              }
            };

            var initThumbnailsHeight = function initThumbnailsHeight($scope) {
              var el = $($scope);
              var $carousel_nav = el.find('.productView-nav'),
                  $carousel_for = el.find('.productView-for');

              if ($carousel_for.find('.slick-arrow').length > 0) {
                $carousel_for.parent().addClass('arrows-visible');
              } else {
                $carousel_for.parent().addClass('arrows-disable');
              }
            };

            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.product.getById(productId, options, function (err, response) {
              setFlag = false;
              var scope = '.halo-spacial-product';

              if (!$(scope).find('.productView').length) {
                $(scope).html(response);
                soldProduct($(scope).find('.productView-soldProduct'));
                viewingProduct($(scope).find('.productView-ViewingProduct'));
                countDownProduct($(scope).find('.productView-countDown'));
                $(scope).find('[data-slick]').slick();
                $(scope).find('.productView-for').get(0).slick.setPosition();
                initThumbnailsHeight(scope);
                Object(_halothemes_haloNotifyMe__WEBPACK_IMPORTED_MODULE_10__["default"])($(scope), context);
                Object(_halothemes_haloVideo__WEBPACK_IMPORTED_MODULE_9__["default"])($(scope).find('[data-slick]'));
                $(scope).on('click', '.dropdown-menu-button', function (event) {
                  var $target = $(event.currentTarget);

                  if ($target.hasClass('is-open')) {
                    $target.removeClass('is-open').attr('aria-expanded', false);
                    $target.siblings('.dropdown-menu').removeClass('is-open').attr('aria-hidden', true);
                  } else {
                    $target.addClass('is-open').attr('aria-expanded', true);
                    $target.siblings('.dropdown-menu').addClass('is-open').attr('aria-hidden', false);
                  }

                  event.stopPropagation();
                });
                $(document).on('click', function (event) {
                  if ($(scope).find('.dropdown-menu-button').hasClass('is-open')) {
                    if ($(event.target).closest('.dropdown-menu-button').length === 0 && $(event.target).closest('.dropdown-menu').length === 0) {
                      $(scope).find('.dropdown-menu-button').removeClass('is-open').attr('aria-expanded', false);
                      $(scope).find('.dropdown-menu-button').siblings('.dropdown-menu').removeClass('is-open').attr('aria-hidden', true);
                    }
                  }
                });
                var productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_7__["default"]($(scope), context);
                productDetails.setProductVariant();
                return productDetails;
              }
            });
          }

          setFlag = false;
        }
      });
    }
  };

  _proto.homeParallaxBanner = function homeParallaxBanner() {
    if ($('#halo_parralax_banners').length > 0) {
      var wrap = $('#halo_parralax_banners'),
          image = wrap.find('[data-image]').data('image');
      wrap.find('[data-image]').css('background-image', 'url(' + image + ')');
    }
  };

  _proto.loadOptionForProductCard = function loadOptionForProductCard() {
    var context = this.context;

    if ($('.productCarousel').length > 0) {
      $('.productCarousel').each(function (index, element) {
        var $prodWrapId = $(element).attr('id');
        Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5__["default"])(context, $prodWrapId);
      });
    }

    if ($('.halo-block .productGrid').length > 0) {
      $('.halo-block .productGrid').each(function (index, element) {
        var $prodWrapId = $(element).attr('id');
        Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5__["default"])(context, $prodWrapId);
      });
    }
  } // Banner parallax 2
  ;

  _proto.customerReviewCarousel = function customerReviewCarousel() {
    if ($('#halo_parralax_banners .halo-row').length) {
      if (!$('#halo_parralax_banners .halo-row').hasClass('slick-slider')) {
        $('#halo_parralax_banners .halo-row').slick({
          dots: true,
          arrows: false,
          infinite: false,
          mobileFirst: true,
          adaptiveHeight: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: "<svg class='slick-next slick-arrow' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
          prevArrow: "<svg class='slick-prev slick-arrow' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
          responsive: [{
            breakpoint: 1024,
            settings: {
              arrows: true
            }
          }]
        });
      }
    }
  };

  _proto.homeProductRecommended = function homeProductRecommended() {
    var $homePGF = $('.home2-block-recommended');
    var $homePGF_grid = $homePGF.find('.productGrid');
    var homePGF_itemLength = $homePGF_grid.find('.product').length;
    var $homePGF_btnBlock = $('.homePGF_btn');
    var $homePGF_btn = $('.homePGF_btn a');
    var dataColumn = $homePGF_grid.data('columns');
    var tt_productShow;

    if ($homePGF.length && homePGF_itemLength > 0) {
      var fWidth = window.innerWidth;

      if (fWidth > 1279 && homePGF_itemLength > 10) {
        $homePGF_btnBlock.addClass('is-show');
      } else if (fWidth <= 1279 && fWidth > 991 && homePGF_itemLength > 8) {
        $homePGF_btnBlock.addClass('is-show');
      } else if (fWidth <= 991 && fWidth > 767 && homePGF_itemLength > 6) {
        $homePGF_btnBlock.addClass('is-show');
      } else if (fWidth <= 767 && homePGF_itemLength > 4) {
        $homePGF_btnBlock.addClass('is-show');
      }

      $homePGF_btn.on('click', function (e) {
        e.preventDefault();
        var wWidth = window.innerWidth;

        if (wWidth > 1279) {
          tt_productShow = 10;
        } else if (wWidth <= 1279 && wWidth > 991) {
          tt_productShow = 8;
        } else if (wWidth <= 991 && wWidth > 767) {
          tt_productShow = 6;
        } else {
          tt_productShow = 4;
        }

        if ($homePGF_grid.find('.product:hidden').length > 0) {
          $homePGF_grid.find('.product:hidden:lt(' + tt_productShow + ')').css('display', 'inline-block');

          if ($homePGF_grid.find('.product:hidden').length == 0) {
            $homePGF_btn.text('No More Products').attr('disabled', '').addClass('disable');
          }
        }
      });
    }
  };

  return Home;
}(_page_manager__WEBPACK_IMPORTED_MODULE_3__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvcGFyYWxsYXgvanF1ZXJ5LnBhcmFsbGF4LXNjcm9sbC5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2hvbWUuanMiXSwibmFtZXMiOlsiZmV0Y2giLCJyZXF1aXJlIiwiY29udGV4dCIsIndyYXBwZXIiLCJ0aGVtZVNldHRpbmdzIiwiaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QiLCJjYWxsUHJvZHVjdE9wdGlvbiIsInByb2R1Y3RfY2xhc3MiLCJlYWNoIiwiaW5kZXgiLCJlbGVtZW50IiwicHJvZHVjdElkIiwiJCIsImRhdGEiLCJsaXN0IiwicHVzaCIsInRvU3RyaW5nIiwibGVuZ3RoIiwiZ2V0UHJvZHVjdE9wdGlvbiIsInRoZW4iLCJyZW5kZXJPcHRpb24iLCJpZHgiLCJpdGVtIiwiYXJyIiwicHJvZHVjdF93cmFwcGVyIiwiZmluZCIsInR4dCIsInJlbW92ZSIsImNvdW50TW9yZU9wdGlvbiIsInByb2R1Y3RMaW5rIiwiYXR0ciIsImFwcGVuZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0b2tlbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJyZXMiLCJqc29uIiwiYUZpbHRlciIsInNpdGUiLCJwcm9kdWN0cyIsImVkZ2VzIiwibm9kZSIsImVudGl0eUlkIiwicHJvZHVjdEZpZWxkQ29sb3IiLCJwcm9kdWN0RmllbGRTaXplIiwiYUZpbHRlcjIiLCJwcm9kdWN0T3B0aW9ucyIsImFGaWx0ZXIzIiwiZmlsdGVyIiwiZGlzcGxheVN0eWxlIiwiYUZpbHRlcjUiLCJkaXNwbGF5TmFtZSIsImhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0MiIsImFGaWx0ZXI0IiwidmFsdWVzIiwidGl0bGVWYXIiLCJsYWJlbCIsImlkVmFyIiwibGVuZ3RoQ29sb3JWYXIiLCJoZXhDb2xvcnMiLCJjb2xvcjEiLCJjb2xvcjIiLCJjb2xvcjMiLCJpbWciLCJpbWFnZVVybCIsIkJvb2xlYW4iLCJoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdFRleHQiLCJQYXJhbGxheFNjcm9sbCIsImluaXQiLCJzaG93TG9ncyIsInJvdW5kIiwiX2xvZyIsIl9pbml0ZWQiLCJfcmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYSIsImIiLCJzZXRUaW1lb3V0IiwiX29uU2Nyb2xsIiwiX3Byb3BlcnRpZXMiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJzY3JvbGxUb3AiLCJjIiwiaGVpZ2h0IiwicHJveHkiLCJkIiwiZSIsImYiLCJnIiwiaCIsImkiLCJrIiwiaiIsImwiLCJtIiwibiIsIk1hdGgiLCJtYXgiLCJvZmZzZXQiLCJ0b3AiLCJvIiwiZGlzdGFuY2UiLCJwIiwicSIsImVhc2luZyIsInIiLCJzIiwiZHVyYXRpb24iLCJ0IiwidSIsInYiLCJzbW9vdGhuZXNzIiwidyIsIm1pbiIsIm1hcCIsImNlaWwiLCJ6IiwieCIsInBlcnNwZWN0aXZlIiwieSIsInBhcmVudCIsInNjYWxlWCIsInNjYWxlWSIsInNjYWxlWiIsInNjYWxlIiwiQSIsInJvdGF0ZVgiLCJyb3RhdGVZIiwicm90YXRlWiIsIkIiLCJDIiwiSG9tZSIsIm9uUmVhZHkiLCJjb3VudERvd25IZXJvQ2Fyb3VzZWwiLCJjdXN0b21QYWdpbmciLCJsb2FkUHJvZHVjdEJ5Q2F0ZWdvcnkiLCJsb2FkUHJvZHVjdFRhYkJ5Q2F0ZWdvcnkiLCJsb2FkUHJvZHVjdEJ5Q2F0ZWdvcnlXaXRoQmFubmVyIiwiZmFuY3lib3hWaWRlb0Jhbm5lciIsImZhcXNUb2dnbGUiLCJyZWNlbnRCbG9nU2xpZGVyIiwiaG9tZVNwZWNpYWxQcm9kdWN0IiwiaG9tZVBhcmFsbGF4QmFubmVyIiwibG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkIiwiY3VzdG9tZXJSZXZpZXdDYXJvdXNlbCIsImhvbWVQcm9kdWN0UmVjb21tZW5kZWQiLCJwYXJlbnRzIiwiYWRkQ2xhc3MiLCJjb3VudERvd24iLCJjb3VudERvd25EYXRlIiwiRGF0ZSIsImdldFRpbWUiLCJzZWZ0IiwiY291bnRkb3duZnVuY3Rpb24iLCJzZXRJbnRlcnZhbCIsIm5vdyIsImNsZWFySW50ZXJ2YWwiLCJodG1sIiwiZGF5cyIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInN0ckNvdW50RG93biIsImhlcm9DdXN0b20iLCJoZXJvQ3VzdG9tU2xpZGUiLCJzbGljayIsImRvdHMiLCJhcnJvd3MiLCJtb2JpbGVGaXJzdCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwiaW5maW5pdGUiLCJhc05hdkZvciIsInNsaWRlIiwidGV4dCIsIm9uIiwiZXZlbnQiLCJzbGlkZXIiLCJwb3MiLCIkc2xpZGVzIiwicmVtb3ZlQ2xhc3MiLCJvcHRpb25zIiwidGVtcGxhdGUiLCJoZWFkZXJfaGVpZ2h0Iiwic2Nyb2xsIiwic2V0RmxhZyIsIndyYXAiLCJjYXRJZCIsImNhdFVybCIsImJsb2NrSWQiLCJsb2FkQ2F0ZWdvcnkiLCJpZCIsInVybCIsIm9wdGlvbiIsInV0aWxzIiwiYXBpIiwiZ2V0UGFnZSIsImVyciIsInJlc3BvbnNlIiwic2xpY2tDYXJvdXNlbCIsImhhbG9BZGRPcHRpb24iLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwicGFyc2VJbnQiLCJob21lX3Byb2R1Y3RfYmxvY2tfY29sIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsIiRpdGVtRWxlIiwiYmxvY2siLCJpbmNsdWRlcyIsImxvY2F0aW9uIiwiaG9zdCIsInJlcGxhY2UiLCJzaG93IiwicmV2aWV3U2hvdyIsImxpbWl0IiwicXVlcnlTZWxlY3RvckFsbCIsInJldmlldzIiLCJQcm9taXNlIiwiYWxsIiwiaXRlbTEiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJlbXB0eSIsInJldmlldzMiLCJ2aWR1IiwiaW5uZXJIVE1MIiwiZ29rdSIsInJldmlld0F2ZyIsInJlZHVjZSIsImNhdGNoIiwiaG9tZV9wcm9kdWN0X2Jsb2NrX3RhYl9jb2wiLCIkdGFiU29ydGluZyIsImhhc0NsYXNzIiwicHJldmVudERlZmF1bHQiLCIkdGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImRhdGFUYWIiLCIkdGhpc0Jsb2NrIiwiY2xvc2VzdCIsImhyZWYiLCJsYWJlbEZsYXNoRGVhbHMiLCJzbGlja0Nhcm91c2VsNCIsInNsaWNrQ2Fyb3VzZWwzIiwic2xpY2tDYXJvdXNlbDIiLCJob21lX3Byb2R1Y3RfYmxvY2tfd2l0aF9iYW5uZXJfY29sIiwiJGl0ZW1TaWRlIiwiJHRoaXNMYWJlbCIsImZhbmN5Ym94Iiwibm90Iiwic2xpZGVEb3duIiwic2xpZGVVcCIsIndpZHRoIiwicmVzaXplIiwiaG9tZV9wcm9kdWN0X2Jsb2NrX3NwZWNpYWwiLCJ2aWV3aW5nUHJvZHVjdCIsInZpZXdlclRleHQiLCJwcm9kdWN0X3ZpZXdpbmdQcm9kdWN0X3RleHQiLCJudW1iZXJzVmlld2VyX3RleHQiLCJwcm9kdWN0X3ZpZXdpbmdQcm9kdWN0X3ZpZXdlciIsIm51bWJlcnNWaWV3ZXJMaXN0IiwicGFyc2UiLCJudW1iZXJzVmlld2VySXRlbSIsInJhbmRvbSIsImNvdW50RG93blByb2R1Y3QiLCJzb2xkUHJvZHVjdCIsIm51bWJlcnNQcm9kdWN0X3RleHQiLCJwcm9kdWN0X3NvbGRQcm9kdWN0X3Byb2R1Y3RzIiwibnVtYmVyc0hvdXJzX3RleHQiLCJwcm9kdWN0X3NvbGRQcm9kdWN0X2hvdXJzIiwic29sZFByb2R1Y3RUZXh0IiwicHJvZHVjdF9zb2xkUHJvZHVjdF90ZXh0Iiwic29sZFByb2R1Y3RUZXh0MiIsInByb2R1Y3Rfc29sZFByb2R1Y3RfaG91cnNfdGV4dCIsIm51bWJlcnNQcm9kdWN0TGlzdCIsIm51bWJlcnNQcm9kdWN0SXRlbSIsIm51bWJlcnNIb3Vyc0xpc3QiLCJudW1iZXJzSG91cnNJdGVtIiwiaW5pdFRodW1ibmFpbHNIZWlnaHQiLCIkc2NvcGUiLCJlbCIsIiRjYXJvdXNlbF9uYXYiLCIkY2Fyb3VzZWxfZm9yIiwicHJvZHVjdCIsImdldEJ5SWQiLCJzY29wZSIsImdldCIsInNldFBvc2l0aW9uIiwiaGFsb05vdGlmeU1lIiwiaGFsb1lvdXR1YmVDYXJvdXNlbCIsInNpYmxpbmdzIiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwicHJvZHVjdERldGFpbHMiLCJQcm9kdWN0RGV0YWlscyIsInNldFByb2R1Y3RWYXJpYW50IiwiaW1hZ2UiLCJjc3MiLCIkcHJvZFdyYXBJZCIsImFkYXB0aXZlSGVpZ2h0IiwiJGhvbWVQR0YiLCIkaG9tZVBHRl9ncmlkIiwiaG9tZVBHRl9pdGVtTGVuZ3RoIiwiJGhvbWVQR0ZfYnRuQmxvY2siLCIkaG9tZVBHRl9idG4iLCJkYXRhQ29sdW1uIiwidHRfcHJvZHVjdFNob3ciLCJmV2lkdGgiLCJpbm5lcldpZHRoIiwid1dpZHRoIiwiUGFnZU1hbmFnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLHdEQUFELENBQXJCOztBQUVlLHlFQUFTQyxPQUFULEVBQWtCQyxPQUFsQixFQUEyQjtFQUN0QyxJQUFJRCxPQUFPLENBQUNFLGFBQVIsQ0FBc0JDLHVCQUF0QixJQUFpRCxJQUFyRCxFQUEyRDtJQUFBLElBTTlDQyxpQkFOOEMsR0FNdkQsU0FBU0EsaUJBQVQsR0FBNkI7TUFDekJDLGFBQWEsQ0FBQ0MsSUFBZCxDQUFtQixVQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBb0I7UUFDbkMsSUFBSUMsU0FBUyxHQUFHQyxDQUFD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LGNBQWMsR0FBRyxDQUFqQjtRQUNILENBRkksTUFHQSxJQUFJRyxNQUFNLElBQUksR0FBVixJQUFpQkEsTUFBTSxHQUFHLEdBQTlCLEVBQW1DO1VBQ3BDSCxjQUFjLEdBQUcsQ0FBakI7UUFDSCxDQUZJLE1BR0E7VUFDREEsY0FBYyxHQUFHLENBQWpCO1FBQ0g7O1FBRUQsSUFBSUwsYUFBYSxDQUFDclMsSUFBZCxDQUFtQixpQkFBbkIsRUFBc0NSLE1BQXRDLEdBQStDLENBQW5ELEVBQXNEO1VBQ2xENlMsYUFBYSxDQUFDclMsSUFBZCxDQUFtQix3QkFBc0IwUyxjQUF0QixHQUFxQyxHQUF4RCxFQUE2RFQsR0FBN0QsQ0FBaUUsU0FBakUsRUFBNEUsY0FBNUU7O1VBRUEsSUFBSUksYUFBYSxDQUFDclMsSUFBZCxDQUFtQixpQkFBbkIsRUFBc0NSLE1BQXRDLElBQWdELENBQXBELEVBQXVEO1lBQ25EZ1QsWUFBWSxDQUFDckksSUFBYixDQUFrQixrQkFBbEIsRUFBc0M5SixJQUF0QyxDQUEyQyxVQUEzQyxFQUF1RCxFQUF2RCxFQUEyRGdJLFFBQTNELENBQW9FLFNBQXBFO1VBQ0g7UUFDSjtNQUNKLENBeEJEO0lBeUJIO0VBQ0osQzs7O0VBcCtCNkJ5SyxxRCIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQsIHdyYXBwZXIpIHtcbiAgICBpZiAoY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0ID09IHRydWUpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBjb250ZXh0LnRva2VuLFxuICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyID0gJCgnIycrd3JhcHBlciksXG4gICAgICAgICAgICBwcm9kdWN0X2NsYXNzID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkJyk7XG4gICAgICAgIHZhciAgbGlzdCA9IFtdO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNhbGxQcm9kdWN0T3B0aW9uKCkge1xuICAgICAgICAgICAgcHJvZHVjdF9jbGFzcy5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0SWQgPSAkKGVsZW1lbnQpLmRhdGEoXCJwcm9kdWN0LWlkXCIpO1xuXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKHByb2R1Y3RJZC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZihsaXN0Lmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIGdldFByb2R1Y3RPcHRpb24obGlzdCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uKGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaChsaXN0LCAoaWR4LCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0ge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkID0gbGlzdFtpZHhdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR4dCA9ICQoZWxlbWVudCkuZGF0YSgncHJvZHVjdC1zd2F0Y2gtdmFsdWUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJbdHh0XSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyW3R4dF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmxlbmd0aCA+IDQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb3VudE1vcmVPcHRpb24gID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLW9wdGlvbi1zd2F0Y2gnKS5sZW5ndGggLSA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TGluayA9IHByb2R1Y3Rfd3JhcHBlci5maW5kKCdbZGF0YS1wcm9kdWN0LWlkPVwiJytwcm9kdWN0SWQrJ1wiXScpLmZpbmQoJy5jYXJkLWxpbmsnKS5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGluZGV4ID49IDQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLWZpZWxkIC5zaG93bW9yZScpLmxlbmd0aCA8IDEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tZmllbGQ6bm90KC5mb3JtLWZpZWxkLS1zaXplKScpLmFwcGVuZCgnPGEgaHJlZj1cIicrcHJvZHVjdExpbmsrJ1wiIGNsYXNzPVwic2hvd21vcmVcIj4rJytjb3VudE1vcmVPcHRpb24rJzwvYT4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRQcm9kdWN0T3B0aW9uKGxpc3Qpe1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoKCcvZ3JhcGhxbCcsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0b2tlblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgcXVlcnk6IGBcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkgU2V2ZXJhbFByb2R1Y3RzQnlJRCB7XG4gICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cyhlbnRpdHlJZHM6IFtgK2xpc3QrYF0sIGZpcnN0OiA1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RPcHRpb25zKGZpcnN0OiA1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBNdWx0aXBsZUNob2ljZU9wdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlTdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIFN3YXRjaE9wdGlvblZhbHVlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZXhDb2xvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybCh3aWR0aDogNTApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGB9KSxcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlck9wdGlvbihkYXRhKXtcbiAgICAgICAgICAgIHZhciBhRmlsdGVyID0gZGF0YS5zaXRlLnByb2R1Y3RzLmVkZ2VzO1xuXG4gICAgICAgICAgICAkLmVhY2goYUZpbHRlciwgKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RJZCA9IGFGaWx0ZXJbaW5kZXhdLm5vZGUuZW50aXR5SWQsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLWZpZWxkOm5vdCguZm9ybS1maWVsZC0tc2l6ZSknKSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkU2l6ZSA9IHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1maWVsZC0tc2l6ZScpLFxuICAgICAgICAgICAgICAgICAgICBhRmlsdGVyMiA9IGFGaWx0ZXJbaW5kZXhdLm5vZGUucHJvZHVjdE9wdGlvbnMuZWRnZXM7XG5cbiAgICAgICAgICAgICAgICB2YXIgYUZpbHRlcjMgPSBhRmlsdGVyMi5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubm9kZS5kaXNwbGF5U3R5bGUgPT09ICdTd2F0Y2gnO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdmFyIGFGaWx0ZXI1ID0gYUZpbHRlcjIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLm5vZGUuZGlzcGxheU5hbWUgPT09IGNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdDI7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZihhRmlsdGVyMy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFGaWx0ZXI0ID0gYUZpbHRlcjNbMF0ubm9kZS52YWx1ZXMuZWRnZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGFGaWx0ZXI0LCAoaWR4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGl0bGVWYXIgPSBhRmlsdGVyNFtpZHhdLm5vZGUubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRWYXIgPSBhRmlsdGVyNFtpZHhdLm5vZGUuZW50aXR5SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoQ29sb3JWYXIgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaGV4Q29sb3JzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjEgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaGV4Q29sb3JzWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yMiA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5oZXhDb2xvcnNbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IzID0gYUZpbHRlcjRbaWR4XS5ub2RlLmhleENvbG9yc1syXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaW1hZ2VVcmw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGxlbmd0aENvbG9yVmFyID09IDIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yLmFwcGVuZCgnPGxhYmVsIGNsYXNzPVwiZm9ybS1vcHRpb24gZm9ybS1vcHRpb24tc3dhdGNoXCIgZGF0YS1wcm9kdWN0LXN3YXRjaC12YWx1ZT1cIicraWRWYXIrJ1wiPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdG9vbHRpcFwiPicrdGl0bGVWYXIrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXZhcmlhbnQgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IyXCIgdGl0bGU9XCInK3RpdGxlVmFyKydcIj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jytjb2xvcjErJ1wiPjwvc3Bhbj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jytjb2xvcjIrJ1wiPjwvc3Bhbj48L3NwYW4+PC9sYWJlbD4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihsZW5ndGhDb2xvclZhciA9PT0gMyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IuYXBwZW5kKCc8bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvbiBmb3JtLW9wdGlvbi1zd2F0Y2hcIiBkYXRhLXByb2R1Y3Qtc3dhdGNoLXZhbHVlPVwiJytpZFZhcisnXCI+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi10b29sdGlwXCI+Jyt0aXRsZVZhcisnPC9zcGFuPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvciBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcjJcIiB0aXRsZT1cIicrdGl0bGVWYXIrJ1wiPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMSsnXCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMisnXCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMysnXCI+PC9zcGFuPjwvc3Bhbj48L2xhYmVsPicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKEJvb2xlYW4oY29sb3IxKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IuYXBwZW5kKCc8bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvbiBmb3JtLW9wdGlvbi1zd2F0Y2hcIiBkYXRhLXByb2R1Y3Qtc3dhdGNoLXZhbHVlPVwiJytpZFZhcisnXCI+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi10b29sdGlwXCI+Jyt0aXRsZVZhcisnPC9zcGFuPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvclwiIHRpdGxlPVwiJyt0aXRsZVZhcisnXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAnK2NvbG9yMSsnXCI+PC9zcGFuPjwvbGFiZWw+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoQm9vbGVhbihpbWcpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvci5hcHBlbmQoJzxsYWJlbCBjbGFzcz1cImZvcm0tb3B0aW9uIGZvcm0tb3B0aW9uLXN3YXRjaFwiIGRhdGEtcHJvZHVjdC1zd2F0Y2gtdmFsdWU9XCInK2lkVmFyKydcIj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXRvb2x0aXBcIj4nK3RpdGxlVmFyKyc8L3NwYW4+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLXBhdHRlcm5cIiB0aXRsZT1cIicrdGl0bGVWYXIrJ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCcraW1nKycpXCI+PC9zcGFuPjwvbGFiZWw+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoYUZpbHRlcjUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKHByb2R1Y3RGaWVsZFNpemUubGVuZ3RoIDwgMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLXNpemVcIj48bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvblwiPicrY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0VGV4dC50b1N0cmluZygpKyc8L2xhYmVsPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoKGFGaWx0ZXI1Lmxlbmd0aCA9PSAwKSAmJiAoYUZpbHRlcjMubGVuZ3RoID09IDApKXtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsUHJvZHVjdE9wdGlvbigpO1xuICAgIH1cbn1cbiIsIiQoZnVuY3Rpb24oKXtQYXJhbGxheFNjcm9sbC5pbml0KCl9KTt2YXIgUGFyYWxsYXhTY3JvbGw9e3Nob3dMb2dzOiExLHJvdW5kOjFlMyxpbml0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2xvZyhcImluaXRcIiksdGhpcy5faW5pdGVkPyh0aGlzLl9sb2coXCJBbHJlYWR5IEluaXRlZFwiKSx2b2lkKHRoaXMuX2luaXRlZD0hMCkpOih0aGlzLl9yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9ZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24oYSxiKXt3aW5kb3cuc2V0VGltZW91dChhLDFlMy82MCl9fSgpLHZvaWQgdGhpcy5fb25TY3JvbGwoITApKX0sX2luaXRlZDohMSxfcHJvcGVydGllczpbXCJ4XCIsXCJ5XCIsXCJ6XCIsXCJyb3RhdGVYXCIsXCJyb3RhdGVZXCIsXCJyb3RhdGVaXCIsXCJzY2FsZVhcIixcInNjYWxlWVwiLFwic2NhbGVaXCIsXCJzY2FsZVwiXSxfcmVxdWVzdEFuaW1hdGlvbkZyYW1lOm51bGwsX2xvZzpmdW5jdGlvbihhKXt0aGlzLnNob3dMb2dzJiZjb25zb2xlLmxvZyhcIlBhcmFsbGF4IFNjcm9sbCAvIFwiK2EpfSxfb25TY3JvbGw6ZnVuY3Rpb24oYSl7dmFyIGI9JChkb2N1bWVudCkuc2Nyb2xsVG9wKCksYz0kKHdpbmRvdykuaGVpZ2h0KCk7dGhpcy5fbG9nKFwib25TY3JvbGwgXCIrYiksJChcIltkYXRhLXBhcmFsbGF4XVwiKS5lYWNoKCQucHJveHkoZnVuY3Rpb24oZCxlKXt2YXIgZj0kKGUpLGc9W10saD0hMSxpPWYuZGF0YShcInN0eWxlXCIpO3ZvaWQgMD09aSYmKGk9Zi5hdHRyKFwic3R5bGVcIil8fFwiXCIsZi5kYXRhKFwic3R5bGVcIixpKSk7dmFyIGssaj1bZi5kYXRhKFwicGFyYWxsYXhcIildO2ZvcihrPTI7Zi5kYXRhKFwicGFyYWxsYXhcIitrKTtrKyspai5wdXNoKGYuZGF0YShcInBhcmFsbGF4LVwiK2spKTt2YXIgbD1qLmxlbmd0aDtmb3Ioaz0wO2s8bDtrKyspe3ZhciBtPWpba10sbj1tW1wiZnJvbS1zY3JvbGxcIl07dm9pZCAwPT1uJiYobj1NYXRoLm1heCgwLCQoZSkub2Zmc2V0KCkudG9wLWMpKSxuPTB8bjt2YXIgbz1tLmRpc3RhbmNlLHA9bVtcInRvLXNjcm9sbFwiXTt2b2lkIDA9PW8mJnZvaWQgMD09cCYmKG89Yyksbz1NYXRoLm1heCgwfG8sMSk7dmFyIHE9bS5lYXNpbmcscj1tW1wiZWFzaW5nLXJldHVyblwiXTtpZih2b2lkIDAhPXEmJiQuZWFzaW5nJiYkLmVhc2luZ1txXXx8KHE9bnVsbCksdm9pZCAwIT1yJiYkLmVhc2luZyYmJC5lYXNpbmdbcl18fChyPXEpLHEpe3ZhciBzPW0uZHVyYXRpb247dm9pZCAwPT1zJiYocz1vKSxzPU1hdGgubWF4KDB8cywxKTt2YXIgdD1tW1wiZHVyYXRpb24tcmV0dXJuXCJdO3ZvaWQgMD09dCYmKHQ9cyksbz0xO3ZhciB1PWYuZGF0YShcImN1cnJlbnQtdGltZVwiKTt2b2lkIDA9PXUmJih1PTApfXZvaWQgMD09cCYmKHA9bitvKSxwPTB8cDt2YXIgdj1tLnNtb290aG5lc3M7dm9pZCAwPT12JiYodj0zMCksdj0wfHYsKGF8fDA9PXYpJiYodj0xKSx2PTB8djt2YXIgdz1iO3c9TWF0aC5tYXgodyxuKSx3PU1hdGgubWluKHcscCkscSYmKHZvaWQgMD09Zi5kYXRhKFwic2Vuc1wiKSYmZi5kYXRhKFwic2Vuc1wiLFwiYmFja1wiKSx3Pm4mJihcImJhY2tcIj09Zi5kYXRhKFwic2Vuc1wiKT8odT0xLGYuZGF0YShcInNlbnNcIixcImdvXCIpKTp1KyspLHc8cCYmKFwiZ29cIj09Zi5kYXRhKFwic2Vuc1wiKT8odT0xLGYuZGF0YShcInNlbnNcIixcImJhY2tcIikpOnUrKyksYSYmKHU9cyksZi5kYXRhKFwiY3VycmVudC10aW1lXCIsdSkpLHRoaXMuX3Byb3BlcnRpZXMubWFwKCQucHJveHkoZnVuY3Rpb24oYSl7dmFyIGI9MCxjPW1bYV07aWYodm9pZCAwIT1jKXtcInNjYWxlXCI9PWF8fFwic2NhbGVYXCI9PWF8fFwic2NhbGVZXCI9PWF8fFwic2NhbGVaXCI9PWE/Yj0xOmM9MHxjO3ZhciBkPWYuZGF0YShcIl9cIithKTt2b2lkIDA9PWQmJihkPWIpO3ZhciBlPShjLWIpKigody1uKS8ocC1uKSkrYixpPWQrKGUtZCkvdjtpZihxJiZ1PjAmJnU8PXMpe3ZhciBqPWI7XCJiYWNrXCI9PWYuZGF0YShcInNlbnNcIikmJihqPWMsYz0tYyxxPXIscz10KSxpPSQuZWFzaW5nW3FdKG51bGwsdSxqLGMscyl9aT1NYXRoLmNlaWwoaSp0aGlzLnJvdW5kKS90aGlzLnJvdW5kLGk9PWQmJmU9PWMmJihpPWMpLGdbYV18fChnW2FdPTApLGdbYV0rPWksZCE9Z1thXSYmKGYuZGF0YShcIl9cIithLGdbYV0pLGg9ITApfX0sdGhpcykpfWlmKGgpe2lmKHZvaWQgMCE9Zy56KXt2YXIgeD1tLnBlcnNwZWN0aXZlO3ZvaWQgMD09eCYmKHg9ODAwKTt2YXIgeT1mLnBhcmVudCgpO3kuZGF0YShcInN0eWxlXCIpfHx5LmRhdGEoXCJzdHlsZVwiLHkuYXR0cihcInN0eWxlXCIpfHxcIlwiKSx5LmF0dHIoXCJzdHlsZVwiLFwicGVyc3BlY3RpdmU6XCIreCtcInB4OyAtd2Via2l0LXBlcnNwZWN0aXZlOlwiK3grXCJweDsgXCIreS5kYXRhKFwic3R5bGVcIikpfXZvaWQgMD09Zy5zY2FsZVgmJihnLnNjYWxlWD0xKSx2b2lkIDA9PWcuc2NhbGVZJiYoZy5zY2FsZVk9MSksdm9pZCAwPT1nLnNjYWxlWiYmKGcuc2NhbGVaPTEpLHZvaWQgMCE9Zy5zY2FsZSYmKGcuc2NhbGVYKj1nLnNjYWxlLGcuc2NhbGVZKj1nLnNjYWxlLGcuc2NhbGVaKj1nLnNjYWxlKTt2YXIgej1cInRyYW5zbGF0ZTNkKFwiKyhnLng/Zy54OjApK1wicHgsIFwiKyhnLnk/Zy55OjApK1wicHgsIFwiKyhnLno/Zy56OjApK1wicHgpXCIsQT1cInJvdGF0ZVgoXCIrKGcucm90YXRlWD9nLnJvdGF0ZVg6MCkrXCJkZWcpIHJvdGF0ZVkoXCIrKGcucm90YXRlWT9nLnJvdGF0ZVk6MCkrXCJkZWcpIHJvdGF0ZVooXCIrKGcucm90YXRlWj9nLnJvdGF0ZVo6MCkrXCJkZWcpXCIsQj1cInNjYWxlWChcIitnLnNjYWxlWCtcIikgc2NhbGVZKFwiK2cuc2NhbGVZK1wiKSBzY2FsZVooXCIrZy5zY2FsZVorXCIpXCIsQz16K1wiIFwiK0ErXCIgXCIrQitcIjtcIjt0aGlzLl9sb2coQyksZi5hdHRyKFwic3R5bGVcIixcInRyYW5zZm9ybTpcIitDK1wiIC13ZWJraXQtdHJhbnNmb3JtOlwiK0MrXCIgXCIraSl9fSx0aGlzKSksd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT93aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCQucHJveHkodGhpcy5fb25TY3JvbGwsdGhpcywhMSkpOnRoaXMuX3JlcXVlc3RBbmltYXRpb25GcmFtZSgkLnByb3h5KHRoaXMuX29uU2Nyb2xsLHRoaXMsITEpKX19O1xuIiwiaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbic7XHJcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24uZHJvcGRvd24nO1xyXG5pbXBvcnQgZmFuY3lib3ggZnJvbSAnLi9oYWxvdGhlbWVzL2pxdWVyeS5mYW5jeWJveC5taW4nO1xyXG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgaGFsb0FkZE9wdGlvbiBmcm9tICcuL2hhbG90aGVtZXMvaGFsb0FkZE9wdGlvbkZvclByb2R1Y3RDYXJkJztcclxuaW1wb3J0IHBhcmFsbGF4IGZyb20gJy4vaGFsb3RoZW1lcy9wYXJhbGxheC9qcXVlcnkucGFyYWxsYXgtc2Nyb2xsLm1pbic7XHJcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tICcuL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMnO1xyXG5pbXBvcnQgeyBkZWZhdWx0TW9kYWwsIG1vZGFsVHlwZXMgfSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XHJcbmltcG9ydCBoYWxvWW91dHViZUNhcm91c2VsIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvVmlkZW8nO1xyXG5pbXBvcnQgaGFsb05vdGlmeU1lIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvTm90aWZ5TWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBvblJlYWR5KCkge1xyXG4gICAgICAgIHRoaXMuY291bnREb3duSGVyb0Nhcm91c2VsKCk7XHJcbiAgICAgICAgdGhpcy5jdXN0b21QYWdpbmcoKTtcclxuICAgICAgICB0aGlzLmxvYWRQcm9kdWN0QnlDYXRlZ29yeSgpO1xyXG4gICAgICAgIHRoaXMubG9hZFByb2R1Y3RUYWJCeUNhdGVnb3J5KCk7XHJcbiAgICAgICAgdGhpcy5sb2FkUHJvZHVjdEJ5Q2F0ZWdvcnlXaXRoQmFubmVyKCk7XHJcbiAgICAgICAgdGhpcy5mYW5jeWJveFZpZGVvQmFubmVyKCk7XHJcbiAgICAgICAgdGhpcy5mYXFzVG9nZ2xlKCk7XHJcbiAgICAgICAgdGhpcy5yZWNlbnRCbG9nU2xpZGVyKCk7XHJcbiAgICAgICAgdGhpcy5ob21lU3BlY2lhbFByb2R1Y3QoKTtcclxuICAgICAgICB0aGlzLmhvbWVQYXJhbGxheEJhbm5lcigpO1xyXG4gICAgICAgIHRoaXMubG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkKCk7XHJcbiAgICAgICAgdGhpcy5jdXN0b21lclJldmlld0Nhcm91c2VsKCk7XHJcbiAgICAgICAgdGhpcy5ob21lUHJvZHVjdFJlY29tbWVuZGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY291bnREb3duSGVyb0Nhcm91c2VsKCkge1xyXG4gICAgICAgICQoJy5oZXJvQ2Fyb3VzZWwtY291bnRkb3duJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgJChlbGVtZW50KS5wYXJlbnRzKCcuc2xpY2stc2xpZGUnKS5hZGRDbGFzcygnaGFzLWNvdW50LWRvd24nKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBjb3VudERvd24gPSAkKGVsZW1lbnQpLmRhdGEoJ2Nhcm91c2VsLWNvdW50ZG93bicpLFxyXG4gICAgICAgICAgICAgICAgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKGNvdW50RG93bikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICAgICAgc2VmdCA9ICQoZWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgY291bnRkb3duZnVuY3Rpb24gPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChjb3VudGRvd25mdW5jdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VmdC5odG1sKCcnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRheXMgPSBNYXRoLmZsb29yKGRpc3RhbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG91cnMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZHMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RyQ291bnREb3duID0gXCI8c3BhbiBjbGFzcz0nbnVtJz5cIitkYXlzK1wiPHNwYW4+REFZUzwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9J251bSc+XCIraG91cnMrXCI8c3Bhbj5IT1VSUzwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9J251bSc+XCIrbWludXRlcytcIjxzcGFuPk1JTlM8L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPSdudW0nPlwiK3NlY29uZHMrXCI8c3Bhbj5TRUNTPC9zcGFuPjwvc3Bhbj5cIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VmdC5odG1sKHN0ckNvdW50RG93bik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGN1c3RvbVBhZ2luZygpe1xyXG4gICAgICAgIGNvbnN0IGhlcm9DdXN0b20gPSAkKCcuaGVyb0Nhcm91c2VsLWN1c3RvbScpO1xyXG4gICAgICAgIGNvbnN0IGhlcm9DdXN0b21TbGlkZSA9ICQoJy5oZXJvQ2Fyb3VzZWwtY3VzdG9tIC5zbGljay1kb3RzIGxpJyk7XHJcbiAgICAgICAgaGVyb0N1c3RvbS5zbGljayh7XHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IGhlcm9DdXN0b20uZGF0YSgnYXV0b3BsYXknKSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yOiBcIi5oZXJvQ2Fyb3VzZWxcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vQURBXHJcbiAgICAgICAgJCgnLmhlcm9DYXJvdXNlbC1jdXN0b20gLnNsaWNrLWRvdHMgbGknKS5lYWNoKGZ1bmN0aW9uKGkpe1xyXG4gICAgICAgICAgICB2YXIgc2xpZGUgPSAkKHRoaXMpLmZpbmQoJ2J1dHRvbicpLnRleHQoKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdidXR0b24nKS50ZXh0KCcwJyArIHNsaWRlKS5hZGRDbGFzcygnc2xpY2stZG90cy1pdGVtJyk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaGVyb0N1c3RvbS5vbignYWZ0ZXJDaGFuZ2UnLCAoZXZlbnQsIHNsaWRlciwgaSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcG9zID0gJChzbGlkZXIuJHNsaWRlc1tpXSkuZmluZCgnZGl2W2RhdGEtcG9zaXRpb25dJykuZGF0YSgncG9zaXRpb24nKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHBvcyA9PT0gJ3JpZ2h0Jyl7XHJcbiAgICAgICAgICAgICAgICBoZXJvQ3VzdG9tLnJlbW92ZUNsYXNzKCdoZXJvQ2Fyb3VzZWwtY3VzdG9tTGVmdCcpLmFkZENsYXNzKCdoZXJvQ2Fyb3VzZWwtY3VzdG9tUmlnaHQnKTtcclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgaGVyb0N1c3RvbS5yZW1vdmVDbGFzcygnaGVyb0Nhcm91c2VsLWN1c3RvbVJpZ2h0JykuYWRkQ2xhc3MoJ2hlcm9DYXJvdXNlbC1jdXN0b21MZWZ0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoJCgnLmhlcm9DYXJvdXNlbC1zbGlkZS0tZmlyc3QgLmhlcm9DYXJvdXNlbC1jb250ZW50LXdyYXBwZXIgLmhlcm9DYXJvdXNlbC1jb250ZW50LS1yaWdodCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBoZXJvQ3VzdG9tLnJlbW92ZUNsYXNzKCdoZXJvQ2Fyb3VzZWwtY3VzdG9tTGVmdCcpLmFkZENsYXNzKCdoZXJvQ2Fyb3VzZWwtY3VzdG9tUmlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFByb2R1Y3RCeUNhdGVnb3J5KCl7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6ICdwcm9kdWN0cy9jYXJvdXNlbC0yJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmKCQoJy5oYWxvLWJsb2NrW2RhdGEtY2F0ZWdvcnktaWRdJykubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHZhciAgaGVhZGVyX2hlaWdodCA9ICQoJy5oZWFkZXInKS5oZWlnaHQoKTtcclxuXHJcbiAgICAgICAgICAgICQod2luZG93KS5vbignc2Nyb2xsIGxvYWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RmxhZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzY3JvbGwgPiBoZWFkZXJfaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoc2V0RmxhZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tYmxvY2tbZGF0YS1jYXRlZ29yeS1pZF0nKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgd3JhcCA9ICQoZWxlbWVudCkuZmluZCgnLnByb2R1Y3RDYXJvdXNlbCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0SWQgPSAkKGVsZW1lbnQpLmRhdGEoJ2RhdGEtY2F0ZWdvcnknKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdFVybCA9ICQoZWxlbWVudCkuZGF0YSgnY2F0ZWdvcnktdXJsJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja0lkID0gJChlbGVtZW50KS5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoISQoJyNwcm9kdWN0LWJ5LWNhdGUtJytjYXRJZCsnIC5wcm9kdWN0Q2Fyb3VzZWwgLnByb2R1Y3RDYXJvdXNlbC1zbGlkZScpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkQ2F0ZWdvcnkoY2F0SWQsIGNhdFVybCwgb3B0aW9ucywgd3JhcCwgYmxvY2tJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRDYXRlZ29yeShpZCwgdXJsLCBvcHRpb24sIHdyYXAsIGJsb2NrSWQpe1xyXG4gICAgICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSh1cmwsIG9wdGlvbiwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKCF3cmFwLmZpbmQoJy5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHdyYXAuaHRtbChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpY2tDYXJvdXNlbCh3cmFwKTtcclxuICAgICAgICAgICAgICAgICAgICB3cmFwLnBhcmVudHMoJy5oYWxvLWJsb2NrW2RhdGEtY2F0ZWdvcnktaWRdJykuZmluZCgnLmxvYWRpbmdPdmVybGF5JykucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGhhbG9BZGRPcHRpb24oY29udGV4dCwgYmxvY2tJZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzbGlja0Nhcm91c2VsKHdyYXApe1xyXG4gICAgICAgICAgICB3cmFwLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1uZXh0IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdOZXh0IFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LW5leHQ+PC91c2U+PC9zdmc+XCIsIFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLXByZXYgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J1ByZXZpb3VzIFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LXByZXY+PC91c2U+PC9zdmc+XCIsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogcGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLmhvbWVfcHJvZHVjdF9ibG9ja19jb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiBwYXJzZUludChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaG9tZV9wcm9kdWN0X2Jsb2NrX2NvbCkgLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiBwYXJzZUludChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaG9tZV9wcm9kdWN0X2Jsb2NrX2NvbCkgLSAyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRQcm9kdWN0VGFiQnlDYXRlZ29yeSgpe1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiAncHJvZHVjdHMvY2Fyb3VzZWwtMydcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmKCQoJy5wcm9kdWN0Q2Fyb3VzZWwtdGFicycpLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBpZighJCgnLnByb2R1Y3RDYXJvdXNlbC10YWJzIC50YWItY29udGVudC5pcy1hY3RpdmUgLnByb2R1Y3RDYXJvdXNlbCAucHJvZHVjdENhcm91c2VsLXNsaWRlJykubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20oJCgnLnRhYi1jb250ZW50LmlzLWFjdGl2ZScpKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0ICRpdGVtRWxlID0gJChpdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBibG9jayA9ICRpdGVtRWxlLFxyXG4gICAgICAgICAgICAgICAgICAgIHdyYXAgPSBibG9jay5maW5kKCcucHJvZHVjdENhcm91c2VsJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SWQgPSBibG9jay5kYXRhKCd0YWItY2F0ZWdvcnktaWQnKSxcclxuICAgICAgICAgICAgICAgICAgICBjYXRVcmwgPSBibG9jay5kYXRhKCd0YWItY2F0ZWdvcnktdXJsJyksXHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tJZCA9IGJsb2NrLmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNhdFVybC5pbmNsdWRlcyhcImh0dHBcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24uaG9zdC5pbmNsdWRlcyhcImVuLnN1cGVyaGFpcnBpZWNlcy5mclwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRVcmwgPSBjYXRVcmwucmVwbGFjZShcIi8vc3VwZXJoYWlycGllY2VzLmZyXCIsXCIvL2VuLnN1cGVyaGFpcnBpZWNlcy5mclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZighJCgnLnByb2R1Y3RDYXJvdXNlbC10YWJzIC50YWItY29udGVudC5pcy1hY3RpdmUgLnByb2R1Y3RDYXJvdXNlbCAucHJvZHVjdENhcm91c2VsLXNsaWRlJykubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhibG9jay5maW5kKCcubG9hZGluZ092ZXJsYXknKSlcclxuICAgICAgICAgICAgICAgICAgICBibG9jay5maW5kKCcubG9hZGluZ092ZXJsYXknKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZENhdGVnb3J5KGNhdElkLCBjYXRVcmwsIG9wdGlvbnMsIHdyYXAsIGJsb2NrSWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZigkKCcucHJvZHVjdENhcm91c2VsLXRhYnMnKS5sZW5ndGggPiAwKXtcclxuICAgICAgICAvLyAgICAgaWYoISQoJy5wcm9kdWN0Q2Fyb3VzZWwtdGFicyAudGFiLWNvbnRlbnQuaXMtYWN0aXZlIC5wcm9kdWN0Q2Fyb3VzZWwgLnByb2R1Y3RDYXJvdXNlbC1zbGlkZScpLmxlbmd0aCl7XHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgYmxvY2sgPSAkKCcucHJvZHVjdENhcm91c2VsLXRhYnMgLnRhYi1jb250ZW50LmlzLWFjdGl2ZScpLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHdyYXAgPSBibG9jay5maW5kKCcucHJvZHVjdENhcm91c2VsJyksXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY2F0SWQgPSBibG9jay5kYXRhKCd0YWItY2F0ZWdvcnktaWQnKSxcclxuICAgICAgICAvLyAgICAgICAgICAgICBjYXRVcmwgPSBibG9jay5kYXRhKCd0YWItY2F0ZWdvcnktdXJsJyksXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYmxvY2tJZCA9IGJsb2NrLmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgaWYgKGNhdFVybC5pbmNsdWRlcyhcImh0dHBcIikpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAobG9jYXRpb24uaG9zdC5pbmNsdWRlcyhcImVuLnN1cGVyaGFpcnBpZWNlcy5mclwiKSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjYXRVcmwgPSBjYXRVcmwucmVwbGFjZShcIi8vc3VwZXJoYWlycGllY2VzLmZyXCIsXCIvL2VuLnN1cGVyaGFpcnBpZWNlcy5mclwiKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICBpZighJCgnLnByb2R1Y3RDYXJvdXNlbC10YWJzIC50YWItY29udGVudC5pcy1hY3RpdmUgLnByb2R1Y3RDYXJvdXNlbCAucHJvZHVjdENhcm91c2VsLXNsaWRlJykubGVuZ3RoKXtcclxuICAgICAgICAvLyAgICAgICAgICAgICBibG9jay5maW5kKCcubG9hZGluZ092ZXJsYXknKS5zaG93KCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbG9hZENhdGVnb3J5KGNhdElkLCBjYXRVcmwsIG9wdGlvbnMsIHdyYXAsIGJsb2NrSWQpO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgICAkKCcucHJvZHVjdENhcm91c2VsLXRhYnMgW2RhdGEtdGFiXScpLm9uKCd0b2dnbGVkJywgKGV2ZW50LCB0YWIpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGlmKCEkKCcucHJvZHVjdENhcm91c2VsLXRhYnMgLnRhYi1jb250ZW50LmlzLWFjdGl2ZSAucHJvZHVjdENhcm91c2VsIC5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKS5sZW5ndGgpe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHZhciBibG9jayA9ICQoJy5wcm9kdWN0Q2Fyb3VzZWwtdGFicyAudGFiLWNvbnRlbnQuaXMtYWN0aXZlJyksXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHdyYXAgPSBibG9jay5maW5kKCcucHJvZHVjdENhcm91c2VsJyksXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNhdElkID0gYmxvY2suZGF0YSgndGFiLWNhdGVnb3J5LWlkJyksXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNhdFVybCA9IGJsb2NrLmRhdGEoJ3RhYi1jYXRlZ29yeS11cmwnKSxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgYmxvY2tJZCA9IGJsb2NrLmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChjYXRVcmwuaW5jbHVkZXMoXCJodHRwXCIpKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbi5ob3N0LmluY2x1ZGVzKFwiZW4uc3VwZXJoYWlycGllY2VzLmZyXCIpKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBjYXRVcmwgPSBjYXRVcmwucmVwbGFjZShcIi8vc3VwZXJoYWlycGllY2VzLmZyXCIsXCIvL2VuLnN1cGVyaGFpcnBpZWNlcy5mclwiKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYoISQoZXZlbnQuY3VycmVudFRhcmdldCkuZmluZCgnLnByb2R1Y3RDYXJvdXNlbCcpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKXtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgYmxvY2suZmluZCgnLmxvYWRpbmdPdmVybGF5Jykuc2hvdygpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBsb2FkQ2F0ZWdvcnkoY2F0SWQsIGNhdFVybCwgb3B0aW9ucywgd3JhcCwgYmxvY2tJZCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmV2aWV3U2hvdyh4KSB7XHJcbiAgICAgICAgICAgIHZhciBsaW1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXZpZXdDYXJkMScpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGxldCByZXZpZXcyID0gW11cclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL3d3dy50ZWFtZGVzay5uZXQvc2VjdXJlL2FwaS92Mi81NjU1NC9CRUEyNTY2NTkwRUY0RDE0QUE4RDM1QUQwRTJDRUE3Ny9SZXZpZXcvc2VsZWN0Lmpzb25cIikudGhlbihyID0+IHIuanNvbigpKS50aGVuKHI9PntcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzIucHVzaCguLi5yKX0pLFxyXG4gICAgICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL3d3dy50ZWFtZGVzay5uZXQvc2VjdXJlL2FwaS92Mi81NjU1NC9CRUEyNTY2NTkwRUY0RDE0QUE4RDM1QUQwRTJDRUE3Ny9SZXZpZXcvc2VsZWN0Lmpzb24/c2tpcD01MDBcIikudGhlbihyID0+IHIuanNvbigpKS50aGVuKHI9PntcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzIucHVzaCguLi5yKX0pLFxyXG4gICAgICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL3d3dy50ZWFtZGVzay5uZXQvc2VjdXJlL2FwaS92Mi81NjU1NC9CRUEyNTY2NTkwRUY0RDE0QUE4RDM1QUQwRTJDRUE3Ny9SZXZpZXcvc2VsZWN0Lmpzb24/c2tpcD0xMDAwXCIpLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihyPT57XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcclxuICAgICAgICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly93d3cudGVhbWRlc2submV0L3NlY3VyZS9hcGkvdjIvNTY1NTQvQkVBMjU2NjU5MEVGNEQxNEFBOEQzNUFEMEUyQ0VBNzcvUmV2aWV3L3NlbGVjdC5qc29uP3NraXA9MTUwMFwiKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocj0+e1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3Mi5wdXNoKC4uLnIpfSksXHJcbiAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgICAudGhlbigocikgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGltaXQuZm9yRWFjaCgoaXRlbTEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAkKGl0ZW0xLm5leHRFbGVtZW50U2libGluZykuZW1wdHkoKVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJldmlldzMgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpZHUgPSByZXZpZXcyLmZpbHRlcihpdGVtID0+IGl0ZW1bJ1Byb2R1Y3QgU0tVJ10gPT09IGl0ZW0xLmlubmVySFRNTClcclxuICAgICAgICAgICAgICAgICAgICB2aWR1LmZvckVhY2goKGdva3UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3My5wdXNoKGdva3VbJ1JldmlldyByYXRlJ10pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXZpZXdBdmcgPSBNYXRoLnJvdW5kKChyZXZpZXczLnJlZHVjZSgoYSxiICkgPT4gYSsgYiwgMCkvcmV2aWV3My5sZW5ndGgpICogMTApLzEwXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoaXRlbTEubmV4dEVsZW1lbnRTaWJsaW5nKS5hcHBlbmQoYFxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZT4gICAgLmNoZWNrZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjEwLCAwKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZhLXN0YXItbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDIxMCwgMCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RSZXZpZXcyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RSZXZpZXcyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdW5zZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0UmV2aWV3MiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhcmArKDAuNSA8PSByZXZpZXdBdmc/ICcgY2hlY2tlZCc6ICcgZmEtc3Rhci1vJykgKyBgXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhcmArKDEuNSA8PSByZXZpZXdBdmc/ICcgY2hlY2tlZCc6ICcgZmEtc3Rhci1vJykgKyBgXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhcmArKDIuNSA8PSByZXZpZXdBdmc/ICcgY2hlY2tlZCc6ICcgZmEtc3Rhci1vJykgKyBgXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhcmArKDMuNSA8PSByZXZpZXdBdmc/ICcgY2hlY2tlZCc6ICcgZmEtc3Rhci1vJykgKyBgXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhcmArKDQuNSA8PSByZXZpZXdBdmc/ICcgY2hlY2tlZCc6ICcgZmEtc3Rhci1vJykgKyBgXCI+PC9zcGFuPiAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1wYWRkaW5nLWxlZnQ6NXB4Oz5cclxuICAgICAgICAgICAgICAgICAgICAke3JldmlldzMubGVuZ3RofSBDb21tZW50YWlyZXNcclxuICAgICAgICAgICAgICAgIDwvZGl2PmApXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gJChpdGVtMS5uZXh0RWxlbWVudFNpYmxpbmcpLmFwcGVuZChgPGRpdj4ke3Jldmlld0F2Z308L2Rpdj5gKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRDYXRlZ29yeShpZCwgdXJsLCBvcHRpb24sIHdyYXAsIGJsb2NrSWQpe1xyXG4gICAgICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSh1cmwsIG9wdGlvbiwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKCF3cmFwLmZpbmQoJy5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB3cmFwLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWNrQ2Fyb3VzZWwod3JhcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcC5wYXJlbnRzKCcudGFiLWNvbnRlbnQnKS5maW5kKCcubG9hZGluZ092ZXJsYXknKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaGFsb0FkZE9wdGlvbihjb250ZXh0LCBibG9ja0lkKTtcclxuICAgICAgICAgICAgICAgICAgICByZXZpZXdTaG93KClcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNsaWNrQ2Fyb3VzZWwod3JhcCl7XHJcbiAgICAgICAgICAgIHdyYXAuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1uZXh0IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdOZXh0IFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LW5leHQ+PC91c2U+PC9zdmc+XCIsIFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLXByZXYgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J1ByZXZpb3VzIFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LXByZXY+PC91c2U+PC9zdmc+XCIsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogcGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLmhvbWVfcHJvZHVjdF9ibG9ja190YWJfY29sKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogcGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLmhvbWVfcHJvZHVjdF9ibG9ja190YWJfY29sKSAtIDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfdGFiX2NvbCkgLSAyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRQcm9kdWN0QnlDYXRlZ29yeVdpdGhCYW5uZXIoKXtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xyXG5cclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3Byb2R1Y3RzL2Nhcm91c2VsLTQnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYoJCgnLmhhbG8tYmxvY2tbZGF0YS1jYXRlZ29yeS13aXRoLWJhbm5lci1pZF0nKS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgdmFyICBoZWFkZXJfaGVpZ2h0ID0gJCgnLmhlYWRlcicpLmhlaWdodCgpO1xyXG4gICAgICAgICAgICBjb25zdCAkdGFiU29ydGluZyA9ICQoJy50YWItc29ydGluZyAudGFiLXRpdGxlJyk7XHJcblxyXG4gICAgICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCBsb2FkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsID4gaGVhZGVyX2hlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHNldEZsYWcpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLWJsb2NrW2RhdGEtY2F0ZWdvcnktd2l0aC1iYW5uZXItaWRdJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoJy5ob21lLWxheW91dC0yJykubGVuZ3RoICYmICEkKGVsZW1lbnQpLmhhc0NsYXNzKCdob21lMi1mbGFzaC1kZWFscycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgd3JhcCA9ICQoZWxlbWVudCkuZmluZCgnLnRhYkNvbnRlbnQtbmV3IC5wcm9kdWN0Q2Fyb3VzZWwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3cmFwID0gJChlbGVtZW50KS5maW5kKCcucHJvZHVjdENhcm91c2VsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYXRJZCA9ICQoZWxlbWVudCkuZGF0YSgnY2F0ZWdvcnktd2l0aC1iYW5uZXItaWQnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdFVybCA9ICQoZWxlbWVudCkuZGF0YSgnY2F0ZWdvcnktd2l0aC1iYW5uZXItdXJsJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja0lkID0gJChlbGVtZW50KS5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoISQoJyNwcm9kdWN0LXdpdGgtYmFubmVyLScrY2F0SWQrJyAucHJvZHVjdENhcm91c2VsIC5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZENhdGVnb3J5KGNhdElkLCBjYXRVcmwsIG9wdGlvbnMsIHdyYXAsIGJsb2NrSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkdGFiU29ydGluZy5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFUYWIgPSAkdGFyZ2V0LmRhdGEoJ3RhYicpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRoaXNCbG9jayA9ICR0YXJnZXQuY2xvc2VzdCgnLmhhbG8tYmxvY2stcHJvZHVjdCcpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHdyYXAgPSAkdGhpc0Jsb2NrLmZpbmQoJy50YWJDb250ZW50LScrZGF0YVRhYisnIC5wcm9kdWN0Q2Fyb3VzZWwnKSxcclxuICAgICAgICAgICAgICAgICAgICBjYXRJZCA9ICR0YXJnZXQuZGF0YSgnY2F0ZS1pZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdFVybCA9ICR0YXJnZXQuZGF0YSgnY2F0ZS11cmwnKSxcclxuICAgICAgICAgICAgICAgICAgICBibG9ja0lkID0gJHRoaXNCbG9jay5maW5kKCcudGFiQ29udGVudC0nK2RhdGFUYWIpLmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFUYWIgPT0gJ3ZpZXdhbGwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAkdGFyZ2V0LmF0dHIoJ2hyZWYnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJHRoaXNCbG9jay5maW5kKCcudGFiLXNvcnRpbmcnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LnBhcmVudCgpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICR0aGlzQmxvY2suZmluZCgnLnRhYi1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJHRoaXNCbG9jay5maW5kKCcudGFiQ29udGVudC0nK2RhdGFUYWIpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZmYnKVxyXG4gICAgICAgICAgICAgICAgaWYoISR0YXJnZXQuaGFzQ2xhc3MoJ2lzLWxvYWRlZCcpKXtcclxuICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0LmFkZENsYXNzKCdpcy1sb2FkZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2FkQ2F0ZWdvcnkoY2F0SWQsIGNhdFVybCwgb3B0aW9ucywgd3JhcCwgYmxvY2tJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkdGhpc0Jsb2NrLmZpbmQoJy50YWJDb250ZW50LScrZGF0YVRhYisnIC5wcm9kdWN0Q2Fyb3VzZWwnKS5zbGljaygncmVmcmVzaCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkKCcuY291bnREb3dudGltZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb3VudERvd25EYXRlID0gbmV3IERhdGUoICQoJy5jb3VudERvd250aW1lcicpLmF0dHIoJ2RhdGEtY291bnQtZG93bicpKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNvdW50ZG93bmZ1bmN0aW9uID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGNvdW50ZG93bmZ1bmN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5jb3VudERvd250aW1lclwiKS5odG1sKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF5cyA9IE1hdGguZmxvb3IoZGlzdGFuY2UgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdHJDb3VudERvd24gPSBcIjxkaXYgY2xhc3M9J2Nsb2NrLWl0ZW0nPjxzcGFuIGNsYXNzPSdudW0nPlwiK2RheXMrXCI8L3NwYW4+PHNwYW4gY2xhc3M9J3RleHQnPmQ8L3NwYW4+PC9kaXY+PGRpdiBjbGFzcz0nY2xvY2staXRlbSc+PHNwYW4gY2xhc3M9J251bSc+XCIraG91cnMrXCI6PC9zcGFuPjwvZGl2PjxkaXYgY2xhc3M9J2Nsb2NrLWl0ZW0nPjxzcGFuIGNsYXNzPSdudW0nPlwiK21pbnV0ZXMrXCI6PC9zcGFuPjwvZGl2PjxkaXYgY2xhc3M9J2Nsb2NrLWl0ZW0nPjxzcGFuIGNsYXNzPSdudW0nPlwiK3NlY29uZHMrXCI8L3NwYW4+PC9kaXY+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuY291bnREb3dudGltZXJcIikuaHRtbChzdHJDb3VudERvd24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBsb2FkQ2F0ZWdvcnkoaWQsIHVybCwgb3B0aW9uLCB3cmFwLCBibG9ja0lkKXtcclxuICAgICAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UodXJsLCBvcHRpb24sIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZighd3JhcC5maW5kKCcucHJvZHVjdENhcm91c2VsLXNsaWRlJykubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICB3cmFwLmh0bWwocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZih3cmFwLnBhcmVudHMoJy5oYWxvLWJsb2NrW2RhdGEtY2F0ZWdvcnktd2l0aC1iYW5uZXItaWRdJykuaGFzQ2xhc3MoJ2hhbG8tYmxvY2stcHJvZHVjdC1iYW5uZXJzJykpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCgnLmhvbWUtbGF5b3V0LTInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3cmFwLnBhcmVudHMoJy5oYWxvLWJsb2NrW2RhdGEtY2F0ZWdvcnktd2l0aC1iYW5uZXItaWRdJykuaGFzQ2xhc3MoJ2hvbWUyLWZsYXNoLWRlYWxzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEZsYXNoRGVhbHMod3JhcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2tDYXJvdXNlbDQod3JhcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlja0Nhcm91c2VsMyh3cmFwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNrQ2Fyb3VzZWwod3JhcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYod3JhcC5wYXJlbnRzKCcuaGFsby1ibG9ja1tkYXRhLWNhdGVnb3J5LXdpdGgtYmFubmVyLWlkXScpLmhhc0NsYXNzKCdoYWxvLWJsb2NrLXByb2R1Y3QtYmFubmVyczInKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNrQ2Fyb3VzZWwyKHdyYXApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcC5wYXJlbnRzKCcuaGFsby1ibG9ja1tkYXRhLWNhdGVnb3J5LXdpdGgtYmFubmVyLWlkXScpLmZpbmQoJy5sb2FkaW5nT3ZlcmxheScpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uKGNvbnRleHQsIGJsb2NrSWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzbGlja0Nhcm91c2VsKHdyYXApe1xyXG4gICAgICAgICAgICB3cmFwLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1uZXh0IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdOZXh0IFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LW5leHQ+PC91c2U+PC9zdmc+XCIsIFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLXByZXYgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J1ByZXZpb3VzIFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LXByZXY+PC91c2U+PC9zdmc+XCIsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNsaWNrQ2Fyb3VzZWwyKHdyYXApe1xyXG4gICAgICAgICAgICB3cmFwLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1uZXh0IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdOZXh0IFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LW5leHQ+PC91c2U+PC9zdmc+XCIsIFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLXByZXYgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J1ByZXZpb3VzIFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LXByZXY+PC91c2U+PC9zdmc+XCIsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogcGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLmhvbWVfcHJvZHVjdF9ibG9ja193aXRoX2Jhbm5lcl9jb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiBwYXJzZUludChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaG9tZV9wcm9kdWN0X2Jsb2NrX3dpdGhfYmFubmVyX2NvbCkgLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiBwYXJzZUludChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaG9tZV9wcm9kdWN0X2Jsb2NrX3dpdGhfYmFubmVyX2NvbCkgLSAyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzbGlja0Nhcm91c2VsMyh3cmFwKXtcclxuICAgICAgICAgICAgd3JhcC5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nTmV4dCBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1uZXh0PjwvdXNlPjwvc3ZnPlwiLCBcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1wcmV2IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdQcmV2aW91cyBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1wcmV2PjwvdXNlPjwvc3ZnPlwiLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTksXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNsaWNrQ2Fyb3VzZWw0KHdyYXApe1xyXG4gICAgICAgICAgICB3cmFwLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1uZXh0IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdOZXh0IFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LW5leHQ+PC91c2U+PC9zdmc+XCIsIFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLXByZXYgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J1ByZXZpb3VzIFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LXByZXY+PC91c2U+PC9zdmc+XCIsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OSxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGxhYmVsRmxhc2hEZWFscyh3cmFwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRpdGVtU2lkZSA9IHdyYXAuZmluZCgnLnByb2R1Y3RDYXJvdXNlbC1zbGlkZScpO1xyXG5cclxuICAgICAgICAgICAgJGl0ZW1TaWRlLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdGhpc0xhYmVsID0gJChlbGVtZW50KS5maW5kKCcuc2FsZS1iYWRnZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkdGhpc0xhYmVsLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gJHRoaXNMYWJlbC5maW5kKCcudGV4dCcpLmRhdGEoJ3NhbGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5maW5kKCcuY2FyZC1wcmljZScpLmFkZENsYXNzKCdoYXMtbGFiZWxTYWxlJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiY2FyZC1sYWJlbC1zYWxlXCI+PHNwYW4+LScrbGFiZWwrJzwvc3Bhbj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgICAgICAgICAkdGhpc0xhYmVsLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmFuY3lib3hWaWRlb0Jhbm5lcigpe1xyXG4gICAgICAgIGlmICgkKFwiLnZpZGVvLWJsb2NrLWltYWdlW2RhdGEtZmFuY3lib3hdXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgJChcIi52aWRlby1ibG9jay1pbWFnZVtkYXRhLWZhbmN5Ym94XVwiKS5mYW5jeWJveCh7XHJcbiAgICAgICAgICAgICAgICAnYXV0b0RpbWVuc2lvbnMnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICdwYWRkaW5nJyA6IDAsXHJcbiAgICAgICAgICAgICAgICAnd2lkdGgnIDogOTcwLFxyXG4gICAgICAgICAgICAgICAgJ2hlaWdodCcgOiA2MDAsXHJcbiAgICAgICAgICAgICAgICAnYXV0b1NjYWxlJyA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25JbicgOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbk91dCcgOiAnbm9uZSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJChcIi5idXR0b24tcG9wdXAtdmlkZW9bZGF0YS1mYW5jeWJveF1cIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAkKFwiLmJ1dHRvbi1wb3B1cC12aWRlb1tkYXRhLWZhbmN5Ym94XVwiKS5mYW5jeWJveCh7XHJcbiAgICAgICAgICAgICAgICAnYXV0b0RpbWVuc2lvbnMnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICdwYWRkaW5nJyA6IDAsXHJcbiAgICAgICAgICAgICAgICAnd2lkdGgnIDogOTcwLFxyXG4gICAgICAgICAgICAgICAgJ2hlaWdodCcgOiA2MDAsXHJcbiAgICAgICAgICAgICAgICAnYXV0b1NjYWxlJyA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25JbicgOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbk91dCcgOiAnbm9uZSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZhcXNUb2dnbGUoKXtcclxuICAgICAgICAkKCcuaGFsby1zaG9ydC1mYXFzIC5jYXJkIC50aXRsZScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgdmFyICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgJCgnLmhhbG8tc2hvcnQtZmFxcyAuY2FyZCAudGl0bGUnKS5ub3QoJHRhcmdldCkucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNlZCcpO1xyXG5cclxuICAgICAgICAgICAgaWYoJHRhcmdldC5oYXNDbGFzcygnY29sbGFwc2VkJykpe1xyXG4gICAgICAgICAgICAgICAgJHRhcmdldC5yZW1vdmVDbGFzcygnY29sbGFwc2VkJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICR0YXJnZXQuYWRkQ2xhc3MoJ2NvbGxhcHNlZCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKCcuaGFsby1zaG9ydC1mYXFzIC5jYXJkJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKCQoZWxlbWVudCkuZmluZCgnLnRpdGxlJykuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpKXtcclxuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmZpbmQoJy5jb2xsYXBzZScpLnNsaWRlRG93bihcInNsb3dcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5maW5kKCcuY29sbGFwc2UnKS5zbGlkZVVwKFwic2xvd1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjZW50QmxvZ1NsaWRlcigpe1xyXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSAxMDI0KSB7XHJcbiAgICAgICAgICAgIGlmICgkKCcuaGFsby1yZWNlbnQtcG9zdCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy5oYWxvLXJlY2VudC1wb3N0JykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKXtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuaGFsby1yZWNlbnQtcG9zdCcpLnNsaWNrKCd1bnNsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIGlmICgkKCcuaGFsby1yZWNlbnQtcG9zdCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEkKCcuaGFsby1yZWNlbnQtcG9zdCcpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5zbGljaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gMTAyNCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy5oYWxvLXJlY2VudC1wb3N0JykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJy5oYWxvLXJlY2VudC1wb3N0JykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5zbGljaygndW5zbGljaycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcuaGFsby1yZWNlbnQtcG9zdCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuaGFsby1yZWNlbnQtcG9zdCcpLnNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaG9tZVNwZWNpYWxQcm9kdWN0KCl7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcclxuXHJcbiAgICAgICAgaWYoY29udGV4dC50aGVtZVNldHRpbmdzLmhvbWVfcHJvZHVjdF9ibG9ja19zcGVjaWFsID09IHRydWUpe1xyXG4gICAgICAgICAgICB2YXIgcHJvZHVjdElkID0gJCgnW2RhdGEtc3BlY2lhbC1wcm9kdWN0LWlkXScpLmRhdGEoJ3NwZWNpYWwtcHJvZHVjdC1pZCcpLFxyXG4gICAgICAgICAgICAgICAgc2V0RmxhZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9e1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdoYWxvdGhlbWVzL3Byb2R1Y3RzL2hhbG8tc3BlY2lhbC1wcm9kdWN0LXRtcCdcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwgbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKSxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJfaGVpZ2h0ID0gJCgnLmhlYWRlcicpLmhlaWdodCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzY3JvbGwgPiBoZWFkZXJfaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoc2V0RmxhZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoISQoJy5oYWxvLXNwYWNpYWwtcHJvZHVjdCAucHJvZHVjdFZpZXcnKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKHByb2R1Y3RJZCwgb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2NvcGUgPSAnLmhhbG8tc3BhY2lhbC1wcm9kdWN0JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighJChzY29wZSkuZmluZCgnLnByb2R1Y3RWaWV3JykubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNjb3BlKS5odG1sKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29sZFByb2R1Y3QoJChzY29wZSkuZmluZCgnLnByb2R1Y3RWaWV3LXNvbGRQcm9kdWN0JykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdpbmdQcm9kdWN0KCQoc2NvcGUpLmZpbmQoJy5wcm9kdWN0Vmlldy1WaWV3aW5nUHJvZHVjdCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudERvd25Qcm9kdWN0KCQoc2NvcGUpLmZpbmQoJy5wcm9kdWN0Vmlldy1jb3VudERvd24nKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoc2NvcGUpLmZpbmQoJ1tkYXRhLXNsaWNrXScpLnNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzY29wZSkuZmluZCgnLnByb2R1Y3RWaWV3LWZvcicpLmdldCgwKS5zbGljay5zZXRQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0VGh1bWJuYWlsc0hlaWdodChzY29wZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFsb05vdGlmeU1lKCQoc2NvcGUpLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYWxvWW91dHViZUNhcm91c2VsKCQoc2NvcGUpLmZpbmQoJ1tkYXRhLXNsaWNrXScpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzY29wZSkub24oJ2NsaWNrJywgJy5kcm9wZG93bi1tZW51LWJ1dHRvbicsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoJHRhcmdldC5oYXNDbGFzcygnaXMtb3BlbicpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0YXJnZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0YXJnZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2libGluZ3MoJy5kcm9wZG93bi1tZW51JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdpcy1vcGVuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0YXJnZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2libGluZ3MoJy5kcm9wZG93bi1tZW51JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLW9wZW4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoc2NvcGUpLmZpbmQoJy5kcm9wZG93bi1tZW51LWJ1dHRvbicpLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJy5kcm9wZG93bi1tZW51LWJ1dHRvbicpLmxlbmd0aCA9PT0gMCkgJiYgKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcuZHJvcGRvd24tbWVudScpLmxlbmd0aCA9PT0gMCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoc2NvcGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKCcuZHJvcGRvd24tbWVudS1idXR0b24nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzY29wZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoJy5kcm9wZG93bi1tZW51LWJ1dHRvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWJsaW5ncygnLmRyb3Bkb3duLW1lbnUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdERldGFpbHMgPSBuZXcgUHJvZHVjdERldGFpbHMoJChzY29wZSksIGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3REZXRhaWxzLnNldFByb2R1Y3RWYXJpYW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0RGV0YWlscztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB2aWV3aW5nUHJvZHVjdCh3cmFwcGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih3cmFwcGVyLmxlbmd0aCA+IDApeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmlld2VyVGV4dCA9IGNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0X3ZpZXdpbmdQcm9kdWN0X3RleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcnNWaWV3ZXJfdGV4dCA9IGNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0X3ZpZXdpbmdQcm9kdWN0X3ZpZXdlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyc1ZpZXdlckxpc3QgPSAgSlNPTi5wYXJzZShcIltcIiArIG51bWJlcnNWaWV3ZXJfdGV4dCArIFwiXVwiKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBudW1iZXJzVmlld2VySXRlbSA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbnVtYmVyc1ZpZXdlckxpc3QubGVuZ3RoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmh0bWwoJzxzdmcgY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHVzZSB4bGluazpocmVmPVwiI2ljb24tZXllXCIvPjwvc3ZnPicgKyBudW1iZXJzVmlld2VyTGlzdFtudW1iZXJzVmlld2VySXRlbV0gKyBcIiBcIiArIHZpZXdlclRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMDApOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNvdW50RG93blByb2R1Y3Qod3JhcHBlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYod3JhcHBlci5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY291bnREb3duID0gd3JhcHBlci5kYXRhKCdjb3VudGRvd24nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKGNvdW50RG93bikuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWZ0ID0gd3JhcHBlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvdW50ZG93bmZ1bmN0aW9uID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRkb3duZnVuY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VmdC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG91cnMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJDb3VudERvd24gPSAnPHN2ZyBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1iZWxsXCIvPjwvc3ZnPjxzcGFuIGNsYXNzPVwidGV4dFwiPjxzcGFuPkxpbWl0ZWQgdGltZSBvZmZlciwgZW5kIGluOjwvc3Bhbj48L3NwYW4+IDxzcGFuIGNsYXNzPVwibnVtXCI+JytkYXlzKydkIDo8L3NwYW4+IDxzcGFuIGNsYXNzPVwibnVtXCI+Jytob3VycysnaCA6PC9zcGFuPiA8c3BhbiBjbGFzcz1cIm51bVwiPicrbWludXRlcysnbSA6PC9zcGFuPiA8c3BhbiBjbGFzcz1cIm51bVwiPicrc2Vjb25kcysnczwvc3Bhbj4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZnQuaHRtbChzdHJDb3VudERvd24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNvbGRQcm9kdWN0KHdyYXBwZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdyYXBwZXIubGVuZ3RoID4gMCl7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBudW1iZXJzUHJvZHVjdF90ZXh0ID0gY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3Rfc29sZFByb2R1Y3RfcHJvZHVjdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcnNIb3Vyc190ZXh0ID0gY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3Rfc29sZFByb2R1Y3RfaG91cnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbGRQcm9kdWN0VGV4dCA9IGNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0X3NvbGRQcm9kdWN0X3RleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbGRQcm9kdWN0VGV4dDIgPSBjb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF9zb2xkUHJvZHVjdF9ob3Vyc190ZXh0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbnVtYmVyc1Byb2R1Y3RMaXN0ID0gIEpTT04ucGFyc2UoXCJbXCIgKyBudW1iZXJzUHJvZHVjdF90ZXh0ICsgXCJdXCIpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyc1Byb2R1Y3RJdGVtID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpudW1iZXJzUHJvZHVjdExpc3QubGVuZ3RoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcnNIb3Vyc0xpc3QgPSAgSlNPTi5wYXJzZShcIltcIiArIG51bWJlcnNIb3Vyc190ZXh0ICsgXCJdXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJzSG91cnNJdGVtID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpudW1iZXJzSG91cnNMaXN0Lmxlbmd0aCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmh0bWwoJzxzdmcgY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHVzZSB4bGluazpocmVmPVwiI2ljb24tZmlyZVwiLz48L3N2Zz48c3Bhbj4nICsgbnVtYmVyc1Byb2R1Y3RMaXN0W251bWJlcnNQcm9kdWN0SXRlbV0gKyBcIiBcIiArIHNvbGRQcm9kdWN0VGV4dCArIFwiIFwiICsgbnVtYmVyc0hvdXJzTGlzdFtudW1iZXJzSG91cnNJdGVtXSArIFwiIFwiICsgc29sZFByb2R1Y3RUZXh0MiArICc8L3NwYW4+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaW5pdFRodW1ibmFpbHNIZWlnaHQoJHNjb3BlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9ICQoJHNjb3BlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGNhcm91c2VsX25hdiA9IGVsLmZpbmQoJy5wcm9kdWN0Vmlldy1uYXYnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2Fyb3VzZWxfZm9yID0gZWwuZmluZCgnLnByb2R1Y3RWaWV3LWZvcicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkY2Fyb3VzZWxfZm9yLmZpbmQoJy5zbGljay1hcnJvdycpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2Fyb3VzZWxfZm9yLnBhcmVudCgpLmFkZENsYXNzKCdhcnJvd3MtdmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2Fyb3VzZWxfZm9yLnBhcmVudCgpLmFkZENsYXNzKCdhcnJvd3MtZGlzYWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRGbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBob21lUGFyYWxsYXhCYW5uZXIoKXtcclxuICAgICAgICBpZigkKCcjaGFsb19wYXJyYWxheF9iYW5uZXJzJykubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHZhciB3cmFwID0gJCgnI2hhbG9fcGFycmFsYXhfYmFubmVycycpLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2UgPSB3cmFwLmZpbmQoJ1tkYXRhLWltYWdlXScpLmRhdGEoJ2ltYWdlJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB3cmFwLmZpbmQoJ1tkYXRhLWltYWdlXScpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoJytpbWFnZSsnKScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2FkT3B0aW9uRm9yUHJvZHVjdENhcmQoKXtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xyXG5cclxuICAgICAgICBpZigkKCcucHJvZHVjdENhcm91c2VsJykubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICQoJy5wcm9kdWN0Q2Fyb3VzZWwnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyICRwcm9kV3JhcElkID0gJChlbGVtZW50KS5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGhhbG9BZGRPcHRpb24oY29udGV4dCwgJHByb2RXcmFwSWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCQoJy5oYWxvLWJsb2NrIC5wcm9kdWN0R3JpZCcpLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAkKCcuaGFsby1ibG9jayAucHJvZHVjdEdyaWQnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyICRwcm9kV3JhcElkID0gJChlbGVtZW50KS5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGhhbG9BZGRPcHRpb24oY29udGV4dCwgJHByb2RXcmFwSWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQmFubmVyIHBhcmFsbGF4IDJcclxuICAgIGN1c3RvbWVyUmV2aWV3Q2Fyb3VzZWwoKSB7XHJcbiAgICAgICAgaWYgKCQoJyNoYWxvX3BhcnJhbGF4X2Jhbm5lcnMgLmhhbG8tcm93JykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmICghJCgnI2hhbG9fcGFycmFsYXhfYmFubmVycyAuaGFsby1yb3cnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICQoJyNoYWxvX3BhcnJhbGF4X2Jhbm5lcnMgLmhhbG8tcm93Jykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1uZXh0IHNsaWNrLWFycm93JyBhcmlhLWxhYmVsPSdOZXh0IFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LW5leHQ+PC91c2U+PC9zdmc+XCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1wcmV2IHNsaWNrLWFycm93JyBhcmlhLWxhYmVsPSdQcmV2aW91cyBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1wcmV2PjwvdXNlPjwvc3ZnPlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaG9tZVByb2R1Y3RSZWNvbW1lbmRlZCgpIHtcclxuICAgICAgICBjb25zdCAkaG9tZVBHRiA9ICQoJy5ob21lMi1ibG9jay1yZWNvbW1lbmRlZCcpO1xyXG4gICAgICAgIGNvbnN0ICRob21lUEdGX2dyaWQgPSAkaG9tZVBHRi5maW5kKCcucHJvZHVjdEdyaWQnKTtcclxuICAgICAgICBjb25zdCBob21lUEdGX2l0ZW1MZW5ndGggPSAkaG9tZVBHRl9ncmlkLmZpbmQoJy5wcm9kdWN0JykubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0ICRob21lUEdGX2J0bkJsb2NrID0gJCgnLmhvbWVQR0ZfYnRuJyk7XHJcbiAgICAgICAgY29uc3QgJGhvbWVQR0ZfYnRuID0gJCgnLmhvbWVQR0ZfYnRuIGEnKTtcclxuICAgICAgICBjb25zdCBkYXRhQ29sdW1uID0gJGhvbWVQR0ZfZ3JpZC5kYXRhKCdjb2x1bW5zJyk7XHJcbiAgICAgICAgbGV0IHR0X3Byb2R1Y3RTaG93O1xyXG5cclxuICAgICAgICBpZiAoJGhvbWVQR0YubGVuZ3RoICYmIGhvbWVQR0ZfaXRlbUxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgZldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG4gICAgICAgICAgICBpZiAoZldpZHRoID4gMTI3OSAmJiBob21lUEdGX2l0ZW1MZW5ndGggPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgJGhvbWVQR0ZfYnRuQmxvY2suYWRkQ2xhc3MoJ2lzLXNob3cnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChmV2lkdGggPD0gMTI3OSAmJiBmV2lkdGggPiA5OTEgJiYgaG9tZVBHRl9pdGVtTGVuZ3RoID4gOCkge1xyXG4gICAgICAgICAgICAgICAgJGhvbWVQR0ZfYnRuQmxvY2suYWRkQ2xhc3MoJ2lzLXNob3cnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChmV2lkdGggPD0gOTkxICYmIGZXaWR0aCA+IDc2NyAmJiBob21lUEdGX2l0ZW1MZW5ndGggPiA2KSB7XHJcbiAgICAgICAgICAgICAgICAkaG9tZVBHRl9idG5CbG9jay5hZGRDbGFzcygnaXMtc2hvdycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGZXaWR0aCA8PSA3NjcgJiYgaG9tZVBHRl9pdGVtTGVuZ3RoID4gNCkge1xyXG4gICAgICAgICAgICAgICAgJGhvbWVQR0ZfYnRuQmxvY2suYWRkQ2xhc3MoJ2lzLXNob3cnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJGhvbWVQR0ZfYnRuLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAod1dpZHRoID4gMTI3OSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHR0X3Byb2R1Y3RTaG93ID0gMTA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh3V2lkdGggPD0gMTI3OSAmJiB3V2lkdGggPiA5OTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0dF9wcm9kdWN0U2hvdyA9IDg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh3V2lkdGggPD0gOTkxICYmIHdXaWR0aCA+IDc2Nykge1xyXG4gICAgICAgICAgICAgICAgICAgIHR0X3Byb2R1Y3RTaG93ID0gNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHR0X3Byb2R1Y3RTaG93ID0gNDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGhvbWVQR0ZfZ3JpZC5maW5kKCcucHJvZHVjdDpoaWRkZW4nKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGhvbWVQR0ZfZ3JpZC5maW5kKCcucHJvZHVjdDpoaWRkZW46bHQoJyt0dF9wcm9kdWN0U2hvdysnKScpLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRob21lUEdGX2dyaWQuZmluZCgnLnByb2R1Y3Q6aGlkZGVuJykubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGhvbWVQR0ZfYnRuLnRleHQoJ05vIE1vcmUgUHJvZHVjdHMnKS5hdHRyKCdkaXNhYmxlZCcsICcnKS5hZGRDbGFzcygnZGlzYWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=