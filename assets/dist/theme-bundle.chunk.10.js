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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvcGFyYWxsYXgvanF1ZXJ5LnBhcmFsbGF4LXNjcm9sbC5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2hvbWUuanMiXSwibmFtZXMiOlsiZmV0Y2giLCJyZXF1aXJlIiwiY29udGV4dCIsIndyYXBwZXIiLCJ0aGVtZVNldHRpbmdzIiwiaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QiLCJjYWxsUHJvZHVjdE9wdGlvbiIsInByb2R1Y3RfY2xhc3MiLCJlYWNoIiwiaW5kZXgiLCJlbGVtZW50IiwicHJvZHVjdElkIiwiJCIsImRhdGEiLCJsaXN0IiwicHVzaCIsInRvU3RyaW5nIiwibGVuZ3RoIiwiZ2V0UHJvZHVjdE9wdGlvbiIsInRoZW4iLCJyZW5kZXJPcHRpb24iLCJpZHgiLCJpdGVtIiwiYXJyIiwicHJvZHVjdF93cmFwcGVyIiwiZmluZCIsInR4dCIsInJlbW92ZSIsImNvdW50TW9yZU9wdGlvbiIsInByb2R1Y3RMaW5rIiwiYXR0ciIsImFwcGVuZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0b2tlbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJyZXMiLCJqc29uIiwiYUZpbHRlciIsInNpdGUiLCJwcm9kdWN0cyIsImVkZ2VzIiwibm9kZSIsImVudGl0eUlkIiwicHJvZHVjdEZpZWxkQ29sb3IiLCJwcm9kdWN0RmllbGRTaXplIiwiYUZpbHRlcjIiLCJwcm9kdWN0T3B0aW9ucyIsImFGaWx0ZXIzIiwiZmlsdGVyIiwiZGlzcGxheVN0eWxlIiwiYUZpbHRlcjUiLCJkaXNwbGF5TmFtZSIsImhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0MiIsImFGaWx0ZXI0IiwidmFsdWVzIiwidGl0bGVWYXIiLCJsYWJlbCIsImlkVmFyIiwibGVuZ3RoQ29sb3JWYXIiLCJoZXhDb2xvcnMiLCJjb2xvcjEiLCJjb2xvcjIiLCJjb2xvcjMiLCJpbWciLCJpbWFnZVVybCIsIkJvb2xlYW4iLCJoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdFRleHQiLCJQYXJhbGxheFNjcm9sbCIsImluaXQiLCJzaG93TG9ncyIsInJvdW5kIiwiX2xvZyIsIl9pbml0ZWQiLCJfcmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYSIsImIiLCJzZXRUaW1lb3V0IiwiX29uU2Nyb2xsIiwiX3Byb3BlcnRpZXMiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJzY3JvbGxUb3AiLCJjIiwiaGVpZ2h0IiwicHJveHkiLCJkIiwiZSIsImYiLCJnIiwiaCIsImkiLCJrIiwiaiIsImwiLCJtIiwibiIsIk1hdGgiLCJtYXgiLCJvZmZzZXQiLCJ0b3AiLCJvIiwiZGlzdGFuY2UiLCJwIiwicSIsImVhc2luZyIsInIiLCJzIiwiZHVyYXRpb24iLCJ0IiwidSIsInYiLCJzbW9vdGhuZXNzIiwidyIsIm1pbiIsIm1hcCIsImNlaWwiLCJ6IiwieCIsInBlcnNwZWN0aXZlIiwieSIsInBhcmVudCIsInNjYWxlWCIsInNjYWxlWSIsInNjYWxlWiIsInNjYWxlIiwiQSIsInJvdGF0ZVgiLCJyb3RhdGVZIiwicm90YXRlWiIsIkIiLCJDIiwiSG9tZSIsIm9uUmVhZHkiLCJjb3VudERvd25IZXJvQ2Fyb3VzZWwiLCJjdXN0b21QYWdpbmciLCJsb2FkUHJvZHVjdEJ5Q2F0ZWdvcnkiLCJsb2FkUHJvZHVjdFRhYkJ5Q2F0ZWdvcnkiLCJsb2FkUHJvZHVjdEJ5Q2F0ZWdvcnlXaXRoQmFubmVyIiwiZmFuY3lib3hWaWRlb0Jhbm5lciIsImZhcXNUb2dnbGUiLCJyZWNlbnRCbG9nU2xpZGVyIiwiaG9tZVNwZWNpYWxQcm9kdWN0IiwiaG9tZVBhcmFsbGF4QmFubmVyIiwibG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkIiwiY3VzdG9tZXJSZXZpZXdDYXJvdXNlbCIsImhvbWVQcm9kdWN0UmVjb21tZW5kZWQiLCJwYXJlbnRzIiwiYWRkQ2xhc3MiLCJjb3VudERvd24iLCJjb3VudERvd25EYXRlIiwiRGF0ZSIsImdldFRpbWUiLCJzZWZ0IiwiY291bnRkb3duZnVuY3Rpb24iLCJzZXRJbnRlcnZhbCIsIm5vdyIsImNsZWFySW50ZXJ2YWwiLCJodG1sIiwiZGF5cyIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInN0ckNvdW50RG93biIsImhlcm9DdXN0b20iLCJoZXJvQ3VzdG9tU2xpZGUiLCJzbGljayIsImRvdHMiLCJhcnJvd3MiLCJtb2JpbGVGaXJzdCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwiaW5maW5pdGUiLCJhc05hdkZvciIsInNsaWRlIiwidGV4dCIsIm9uIiwiZXZlbnQiLCJzbGlkZXIiLCJwb3MiLCIkc2xpZGVzIiwicmVtb3ZlQ2xhc3MiLCJvcHRpb25zIiwidGVtcGxhdGUiLCJoZWFkZXJfaGVpZ2h0Iiwic2Nyb2xsIiwic2V0RmxhZyIsIndyYXAiLCJjYXRJZCIsImNhdFVybCIsImJsb2NrSWQiLCJsb2FkQ2F0ZWdvcnkiLCJpZCIsInVybCIsIm9wdGlvbiIsInV0aWxzIiwiYXBpIiwiZ2V0UGFnZSIsImVyciIsInJlc3BvbnNlIiwic2xpY2tDYXJvdXNlbCIsImhhbG9BZGRPcHRpb24iLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwicGFyc2VJbnQiLCJob21lX3Byb2R1Y3RfYmxvY2tfY29sIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsIiRpdGVtRWxlIiwiYmxvY2siLCJpbmNsdWRlcyIsImxvY2F0aW9uIiwiaG9zdCIsInJlcGxhY2UiLCJzaG93IiwicmV2aWV3U2hvdyIsImxpbWl0IiwicXVlcnlTZWxlY3RvckFsbCIsInJldmlldzIiLCJQcm9taXNlIiwiYWxsIiwiaXRlbTEiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJlbXB0eSIsInJldmlldzMiLCJ2aWR1IiwiaW5uZXJIVE1MIiwiZ29rdSIsInJldmlld0F2ZyIsInJlZHVjZSIsImNhdGNoIiwiaG9tZV9wcm9kdWN0X2Jsb2NrX3RhYl9jb2wiLCIkdGFiU29ydGluZyIsImhhc0NsYXNzIiwicHJldmVudERlZmF1bHQiLCIkdGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImRhdGFUYWIiLCIkdGhpc0Jsb2NrIiwiY2xvc2VzdCIsImhyZWYiLCJsYWJlbEZsYXNoRGVhbHMiLCJzbGlja0Nhcm91c2VsNCIsInNsaWNrQ2Fyb3VzZWwzIiwic2xpY2tDYXJvdXNlbDIiLCJob21lX3Byb2R1Y3RfYmxvY2tfd2l0aF9iYW5uZXJfY29sIiwiJGl0ZW1TaWRlIiwiJHRoaXNMYWJlbCIsImZhbmN5Ym94Iiwibm90Iiwic2xpZGVEb3duIiwic2xpZGVVcCIsIndpZHRoIiwicmVzaXplIiwiaG9tZV9wcm9kdWN0X2Jsb2NrX3NwZWNpYWwiLCJ2aWV3aW5nUHJvZHVjdCIsInZpZXdlclRleHQiLCJwcm9kdWN0X3ZpZXdpbmdQcm9kdWN0X3RleHQiLCJudW1iZXJzVmlld2VyX3RleHQiLCJwcm9kdWN0X3ZpZXdpbmdQcm9kdWN0X3ZpZXdlciIsIm51bWJlcnNWaWV3ZXJMaXN0IiwicGFyc2UiLCJudW1iZXJzVmlld2VySXRlbSIsInJhbmRvbSIsImNvdW50RG93blByb2R1Y3QiLCJzb2xkUHJvZHVjdCIsIm51bWJlcnNQcm9kdWN0X3RleHQiLCJwcm9kdWN0X3NvbGRQcm9kdWN0X3Byb2R1Y3RzIiwibnVtYmVyc0hvdXJzX3RleHQiLCJwcm9kdWN0X3NvbGRQcm9kdWN0X2hvdXJzIiwic29sZFByb2R1Y3RUZXh0IiwicHJvZHVjdF9zb2xkUHJvZHVjdF90ZXh0Iiwic29sZFByb2R1Y3RUZXh0MiIsInByb2R1Y3Rfc29sZFByb2R1Y3RfaG91cnNfdGV4dCIsIm51bWJlcnNQcm9kdWN0TGlzdCIsIm51bWJlcnNQcm9kdWN0SXRlbSIsIm51bWJlcnNIb3Vyc0xpc3QiLCJudW1iZXJzSG91cnNJdGVtIiwiaW5pdFRodW1ibmFpbHNIZWlnaHQiLCIkc2NvcGUiLCJlbCIsIiRjYXJvdXNlbF9uYXYiLCIkY2Fyb3VzZWxfZm9yIiwicHJvZHVjdCIsImdldEJ5SWQiLCJzY29wZSIsImdldCIsInNldFBvc2l0aW9uIiwiaGFsb05vdGlmeU1lIiwiaGFsb1lvdXR1YmVDYXJvdXNlbCIsInNpYmxpbmdzIiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwicHJvZHVjdERldGFpbHMiLCJQcm9kdWN0RGV0YWlscyIsInNldFByb2R1Y3RWYXJpYW50IiwiaW1hZ2UiLCJjc3MiLCIkcHJvZFdyYXBJZCIsImFkYXB0aXZlSGVpZ2h0IiwiJGhvbWVQR0YiLCIkaG9tZVBHRl9ncmlkIiwiaG9tZVBHRl9pdGVtTGVuZ3RoIiwiJGhvbWVQR0ZfYnRuQmxvY2siLCIkaG9tZVBHRl9idG4iLCJkYXRhQ29sdW1uIiwidHRfcHJvZHVjdFNob3ciLCJmV2lkdGgiLCJpbm5lcldpZHRoIiwid1dpZHRoIiwiUGFnZU1hbmFnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLHdEQUFELENBQXJCOztBQUVlLHlFQUFTQyxPQUFULEVBQWtCQyxPQUFsQixFQUEyQjtFQUN0QyxJQUFJRCxPQUFPLENBQUNFLGFBQVIsQ0FBc0JDLHVCQUF0QixJQUFpRCxJQUFyRCxFQUEyRDtJQUFBLElBTTlDQyxpQkFOOEMsR0FNdkQsU0FBU0EsaUJBQVQsR0FBNkI7TUFDekJDLGFBQWEsQ0FBQ0MsSUFBZCxDQUFtQixVQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBb0I7UUFDbkMsSUFBSUMsU0FBUyxHQUFHQyxDQUFD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RyxDQUFqQjtRQUNILENBRkksTUFHQTtVQUNEQSxjQUFjLEdBQUcsQ0FBakI7UUFDSDs7UUFFRCxJQUFJTCxhQUFhLENBQUNyUyxJQUFkLENBQW1CLGlCQUFuQixFQUFzQ1IsTUFBdEMsR0FBK0MsQ0FBbkQsRUFBc0Q7VUFDbEQ2UyxhQUFhLENBQUNyUyxJQUFkLENBQW1CLHdCQUFzQjBTLGNBQXRCLEdBQXFDLEdBQXhELEVBQTZEVCxHQUE3RCxDQUFpRSxTQUFqRSxFQUE0RSxjQUE1RTs7VUFFQSxJQUFJSSxhQUFhLENBQUNyUyxJQUFkLENBQW1CLGlCQUFuQixFQUFzQ1IsTUFBdEMsSUFBZ0QsQ0FBcEQsRUFBdUQ7WUFDbkRnVCxZQUFZLENBQUNySSxJQUFiLENBQWtCLGtCQUFsQixFQUFzQzlKLElBQXRDLENBQTJDLFVBQTNDLEVBQXVELEVBQXZELEVBQTJEZ0ksUUFBM0QsQ0FBb0UsU0FBcEU7VUFDSDtRQUNKO01BQ0osQ0F4QkQ7SUF5Qkg7RUFDSixDOzs7RUFsK0I2QnlLLHFEIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5jb25zdCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCwgd3JhcHBlcikge1xuICAgIGlmIChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QgPT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGNvbnRleHQudG9rZW4sXG4gICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIgPSAkKCcjJyt3cmFwcGVyKSxcbiAgICAgICAgICAgIHByb2R1Y3RfY2xhc3MgPSBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQnKTtcbiAgICAgICAgdmFyICBsaXN0ID0gW107XG5cbiAgICAgICAgZnVuY3Rpb24gY2FsbFByb2R1Y3RPcHRpb24oKSB7XG4gICAgICAgICAgICBwcm9kdWN0X2NsYXNzLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RJZCA9ICQoZWxlbWVudCkuZGF0YShcInByb2R1Y3QtaWRcIik7XG5cbiAgICAgICAgICAgICAgICBsaXN0LnB1c2gocHJvZHVjdElkLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmKGxpc3QubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgZ2V0UHJvZHVjdE9wdGlvbihsaXN0KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJPcHRpb24oZGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGxpc3QsIChpZHgsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQgPSBsaXN0W2lkeF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1vcHRpb24tc3dhdGNoJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHh0ID0gJChlbGVtZW50KS5kYXRhKCdwcm9kdWN0LXN3YXRjaC12YWx1ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyclt0eHRdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJbdHh0XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1vcHRpb24tc3dhdGNoJykubGVuZ3RoID4gNCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvdW50TW9yZU9wdGlvbiAgPSBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmxlbmd0aCAtIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RMaW5rID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJ1tkYXRhLXByb2R1Y3QtaWQ9XCInK3Byb2R1Y3RJZCsnXCJdJykuZmluZCgnLmNhcmQtbGluaycpLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1vcHRpb24tc3dhdGNoJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaW5kZXggPj0gNCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tZmllbGQgLnNob3dtb3JlJykubGVuZ3RoIDwgMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1maWVsZDpub3QoLmZvcm0tZmllbGQtLXNpemUpJykuYXBwZW5kKCc8YSBocmVmPVwiJytwcm9kdWN0TGluaysnXCIgY2xhc3M9XCJzaG93bW9yZVwiPisnK2NvdW50TW9yZU9wdGlvbisnPC9hPicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFByb2R1Y3RPcHRpb24obGlzdCl7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2goJy9ncmFwaHFsJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRva2VuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICBxdWVyeTogYFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSBTZXZlcmFsUHJvZHVjdHNCeUlEIHtcbiAgICAgICAgICAgICAgICAgICAgICBzaXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzKGVudGl0eUlkczogW2ArbGlzdCtgXSwgZmlyc3Q6IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdE9wdGlvbnMoZmlyc3Q6IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIE11bHRpcGxlQ2hvaWNlT3B0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gU3dhdGNoT3B0aW9uVmFsdWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhleENvbG9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsKHdpZHRoOiA1MClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYH0pLFxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihyZXMgPT4gcmVzLmRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyT3B0aW9uKGRhdGEpe1xuICAgICAgICAgICAgdmFyIGFGaWx0ZXIgPSBkYXRhLnNpdGUucHJvZHVjdHMuZWRnZXM7XG5cbiAgICAgICAgICAgICQuZWFjaChhRmlsdGVyLCAoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdElkID0gYUZpbHRlcltpbmRleF0ubm9kZS5lbnRpdHlJZCxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IgPSBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tZmllbGQ6bm90KC5mb3JtLWZpZWxkLS1zaXplKScpLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRTaXplID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLWZpZWxkLS1zaXplJyksXG4gICAgICAgICAgICAgICAgICAgIGFGaWx0ZXIyID0gYUZpbHRlcltpbmRleF0ubm9kZS5wcm9kdWN0T3B0aW9ucy5lZGdlcztcblxuICAgICAgICAgICAgICAgIHZhciBhRmlsdGVyMyA9IGFGaWx0ZXIyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5ub2RlLmRpc3BsYXlTdHlsZSA9PT0gJ1N3YXRjaCc7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgYUZpbHRlcjUgPSBhRmlsdGVyMi5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubm9kZS5kaXNwbGF5TmFtZSA9PT0gY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0MjtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmKGFGaWx0ZXIzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICB2YXIgYUZpbHRlcjQgPSBhRmlsdGVyM1swXS5ub2RlLnZhbHVlcy5lZGdlcztcblxuICAgICAgICAgICAgICAgICAgICAkLmVhY2goYUZpbHRlcjQsIChpZHgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aXRsZVZhciA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFZhciA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5lbnRpdHlJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGhDb2xvclZhciA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5oZXhDb2xvcnMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yMSA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5oZXhDb2xvcnNbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IyID0gYUZpbHRlcjRbaWR4XS5ub2RlLmhleENvbG9yc1sxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjMgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaGV4Q29sb3JzWzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5pbWFnZVVybDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobGVuZ3RoQ29sb3JWYXIgPT0gMil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IuYXBwZW5kKCc8bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvbiBmb3JtLW9wdGlvbi1zd2F0Y2hcIiBkYXRhLXByb2R1Y3Qtc3dhdGNoLXZhbHVlPVwiJytpZFZhcisnXCI+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi10b29sdGlwXCI+Jyt0aXRsZVZhcisnPC9zcGFuPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvciBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcjJcIiB0aXRsZT1cIicrdGl0bGVWYXIrJ1wiPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMSsnXCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMisnXCI+PC9zcGFuPjwvc3Bhbj48L2xhYmVsPicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGxlbmd0aENvbG9yVmFyID09PSAzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvci5hcHBlbmQoJzxsYWJlbCBjbGFzcz1cImZvcm0tb3B0aW9uIGZvcm0tb3B0aW9uLXN3YXRjaFwiIGRhdGEtcHJvZHVjdC1zd2F0Y2gtdmFsdWU9XCInK2lkVmFyKydcIj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXRvb2x0aXBcIj4nK3RpdGxlVmFyKyc8L3NwYW4+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yIGZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yMlwiIHRpdGxlPVwiJyt0aXRsZVZhcisnXCI+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicrY29sb3IxKydcIj48L3NwYW4+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicrY29sb3IyKydcIj48L3NwYW4+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicrY29sb3IzKydcIj48L3NwYW4+PC9zcGFuPjwvbGFiZWw+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoQm9vbGVhbihjb2xvcjEpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvci5hcHBlbmQoJzxsYWJlbCBjbGFzcz1cImZvcm0tb3B0aW9uIGZvcm0tb3B0aW9uLXN3YXRjaFwiIGRhdGEtcHJvZHVjdC1zd2F0Y2gtdmFsdWU9XCInK2lkVmFyKydcIj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXRvb2x0aXBcIj4nK3RpdGxlVmFyKyc8L3NwYW4+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yXCIgdGl0bGU9XCInK3RpdGxlVmFyKydcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICcrY29sb3IxKydcIj48L3NwYW4+PC9sYWJlbD4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihCb29sZWFuKGltZykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yLmFwcGVuZCgnPGxhYmVsIGNsYXNzPVwiZm9ybS1vcHRpb24gZm9ybS1vcHRpb24tc3dhdGNoXCIgZGF0YS1wcm9kdWN0LXN3YXRjaC12YWx1ZT1cIicraWRWYXIrJ1wiPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdG9vbHRpcFwiPicrdGl0bGVWYXIrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXZhcmlhbnQgZm9ybS1vcHRpb24tdmFyaWFudC0tcGF0dGVyblwiIHRpdGxlPVwiJyt0aXRsZVZhcisnXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJytpbWcrJylcIj48L3NwYW4+PC9sYWJlbD4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihhRmlsdGVyNS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgaWYocHJvZHVjdEZpZWxkU2l6ZS5sZW5ndGggPCAxKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJycpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImZvcm0tZmllbGQgZm9ybS1maWVsZC0tc2l6ZVwiPjxsYWJlbCBjbGFzcz1cImZvcm0tb3B0aW9uXCI+Jytjb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb0FkZE9wdGlvbkZvclByb2R1Y3RUZXh0LnRvU3RyaW5nKCkrJzwvbGFiZWw+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZigoYUZpbHRlcjUubGVuZ3RoID09IDApICYmIChhRmlsdGVyMy5sZW5ndGggPT0gMCkpe1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxQcm9kdWN0T3B0aW9uKCk7XG4gICAgfVxufVxuIiwiJChmdW5jdGlvbigpe1BhcmFsbGF4U2Nyb2xsLmluaXQoKX0pO3ZhciBQYXJhbGxheFNjcm9sbD17c2hvd0xvZ3M6ITEscm91bmQ6MWUzLGluaXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbG9nKFwiaW5pdFwiKSx0aGlzLl9pbml0ZWQ/KHRoaXMuX2xvZyhcIkFscmVhZHkgSW5pdGVkXCIpLHZvaWQodGhpcy5faW5pdGVkPSEwKSk6KHRoaXMuX3JlcXVlc3RBbmltYXRpb25GcmFtZT1mdW5jdGlvbigpe3JldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxmdW5jdGlvbihhLGIpe3dpbmRvdy5zZXRUaW1lb3V0KGEsMWUzLzYwKX19KCksdm9pZCB0aGlzLl9vblNjcm9sbCghMCkpfSxfaW5pdGVkOiExLF9wcm9wZXJ0aWVzOltcInhcIixcInlcIixcInpcIixcInJvdGF0ZVhcIixcInJvdGF0ZVlcIixcInJvdGF0ZVpcIixcInNjYWxlWFwiLFwic2NhbGVZXCIsXCJzY2FsZVpcIixcInNjYWxlXCJdLF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWU6bnVsbCxfbG9nOmZ1bmN0aW9uKGEpe3RoaXMuc2hvd0xvZ3MmJmNvbnNvbGUubG9nKFwiUGFyYWxsYXggU2Nyb2xsIC8gXCIrYSl9LF9vblNjcm9sbDpmdW5jdGlvbihhKXt2YXIgYj0kKGRvY3VtZW50KS5zY3JvbGxUb3AoKSxjPSQod2luZG93KS5oZWlnaHQoKTt0aGlzLl9sb2coXCJvblNjcm9sbCBcIitiKSwkKFwiW2RhdGEtcGFyYWxsYXhdXCIpLmVhY2goJC5wcm94eShmdW5jdGlvbihkLGUpe3ZhciBmPSQoZSksZz1bXSxoPSExLGk9Zi5kYXRhKFwic3R5bGVcIik7dm9pZCAwPT1pJiYoaT1mLmF0dHIoXCJzdHlsZVwiKXx8XCJcIixmLmRhdGEoXCJzdHlsZVwiLGkpKTt2YXIgayxqPVtmLmRhdGEoXCJwYXJhbGxheFwiKV07Zm9yKGs9MjtmLmRhdGEoXCJwYXJhbGxheFwiK2spO2srKylqLnB1c2goZi5kYXRhKFwicGFyYWxsYXgtXCIraykpO3ZhciBsPWoubGVuZ3RoO2ZvcihrPTA7azxsO2srKyl7dmFyIG09altrXSxuPW1bXCJmcm9tLXNjcm9sbFwiXTt2b2lkIDA9PW4mJihuPU1hdGgubWF4KDAsJChlKS5vZmZzZXQoKS50b3AtYykpLG49MHxuO3ZhciBvPW0uZGlzdGFuY2UscD1tW1widG8tc2Nyb2xsXCJdO3ZvaWQgMD09byYmdm9pZCAwPT1wJiYobz1jKSxvPU1hdGgubWF4KDB8bywxKTt2YXIgcT1tLmVhc2luZyxyPW1bXCJlYXNpbmctcmV0dXJuXCJdO2lmKHZvaWQgMCE9cSYmJC5lYXNpbmcmJiQuZWFzaW5nW3FdfHwocT1udWxsKSx2b2lkIDAhPXImJiQuZWFzaW5nJiYkLmVhc2luZ1tyXXx8KHI9cSkscSl7dmFyIHM9bS5kdXJhdGlvbjt2b2lkIDA9PXMmJihzPW8pLHM9TWF0aC5tYXgoMHxzLDEpO3ZhciB0PW1bXCJkdXJhdGlvbi1yZXR1cm5cIl07dm9pZCAwPT10JiYodD1zKSxvPTE7dmFyIHU9Zi5kYXRhKFwiY3VycmVudC10aW1lXCIpO3ZvaWQgMD09dSYmKHU9MCl9dm9pZCAwPT1wJiYocD1uK28pLHA9MHxwO3ZhciB2PW0uc21vb3RobmVzczt2b2lkIDA9PXYmJih2PTMwKSx2PTB8diwoYXx8MD09dikmJih2PTEpLHY9MHx2O3ZhciB3PWI7dz1NYXRoLm1heCh3LG4pLHc9TWF0aC5taW4odyxwKSxxJiYodm9pZCAwPT1mLmRhdGEoXCJzZW5zXCIpJiZmLmRhdGEoXCJzZW5zXCIsXCJiYWNrXCIpLHc+biYmKFwiYmFja1wiPT1mLmRhdGEoXCJzZW5zXCIpPyh1PTEsZi5kYXRhKFwic2Vuc1wiLFwiZ29cIikpOnUrKyksdzxwJiYoXCJnb1wiPT1mLmRhdGEoXCJzZW5zXCIpPyh1PTEsZi5kYXRhKFwic2Vuc1wiLFwiYmFja1wiKSk6dSsrKSxhJiYodT1zKSxmLmRhdGEoXCJjdXJyZW50LXRpbWVcIix1KSksdGhpcy5fcHJvcGVydGllcy5tYXAoJC5wcm94eShmdW5jdGlvbihhKXt2YXIgYj0wLGM9bVthXTtpZih2b2lkIDAhPWMpe1wic2NhbGVcIj09YXx8XCJzY2FsZVhcIj09YXx8XCJzY2FsZVlcIj09YXx8XCJzY2FsZVpcIj09YT9iPTE6Yz0wfGM7dmFyIGQ9Zi5kYXRhKFwiX1wiK2EpO3ZvaWQgMD09ZCYmKGQ9Yik7dmFyIGU9KGMtYikqKCh3LW4pLyhwLW4pKStiLGk9ZCsoZS1kKS92O2lmKHEmJnU+MCYmdTw9cyl7dmFyIGo9YjtcImJhY2tcIj09Zi5kYXRhKFwic2Vuc1wiKSYmKGo9YyxjPS1jLHE9cixzPXQpLGk9JC5lYXNpbmdbcV0obnVsbCx1LGosYyxzKX1pPU1hdGguY2VpbChpKnRoaXMucm91bmQpL3RoaXMucm91bmQsaT09ZCYmZT09YyYmKGk9YyksZ1thXXx8KGdbYV09MCksZ1thXSs9aSxkIT1nW2FdJiYoZi5kYXRhKFwiX1wiK2EsZ1thXSksaD0hMCl9fSx0aGlzKSl9aWYoaCl7aWYodm9pZCAwIT1nLnope3ZhciB4PW0ucGVyc3BlY3RpdmU7dm9pZCAwPT14JiYoeD04MDApO3ZhciB5PWYucGFyZW50KCk7eS5kYXRhKFwic3R5bGVcIil8fHkuZGF0YShcInN0eWxlXCIseS5hdHRyKFwic3R5bGVcIil8fFwiXCIpLHkuYXR0cihcInN0eWxlXCIsXCJwZXJzcGVjdGl2ZTpcIit4K1wicHg7IC13ZWJraXQtcGVyc3BlY3RpdmU6XCIreCtcInB4OyBcIit5LmRhdGEoXCJzdHlsZVwiKSl9dm9pZCAwPT1nLnNjYWxlWCYmKGcuc2NhbGVYPTEpLHZvaWQgMD09Zy5zY2FsZVkmJihnLnNjYWxlWT0xKSx2b2lkIDA9PWcuc2NhbGVaJiYoZy5zY2FsZVo9MSksdm9pZCAwIT1nLnNjYWxlJiYoZy5zY2FsZVgqPWcuc2NhbGUsZy5zY2FsZVkqPWcuc2NhbGUsZy5zY2FsZVoqPWcuc2NhbGUpO3ZhciB6PVwidHJhbnNsYXRlM2QoXCIrKGcueD9nLng6MCkrXCJweCwgXCIrKGcueT9nLnk6MCkrXCJweCwgXCIrKGcuej9nLno6MCkrXCJweClcIixBPVwicm90YXRlWChcIisoZy5yb3RhdGVYP2cucm90YXRlWDowKStcImRlZykgcm90YXRlWShcIisoZy5yb3RhdGVZP2cucm90YXRlWTowKStcImRlZykgcm90YXRlWihcIisoZy5yb3RhdGVaP2cucm90YXRlWjowKStcImRlZylcIixCPVwic2NhbGVYKFwiK2cuc2NhbGVYK1wiKSBzY2FsZVkoXCIrZy5zY2FsZVkrXCIpIHNjYWxlWihcIitnLnNjYWxlWitcIilcIixDPXorXCIgXCIrQStcIiBcIitCK1wiO1wiO3RoaXMuX2xvZyhDKSxmLmF0dHIoXCJzdHlsZVwiLFwidHJhbnNmb3JtOlwiK0MrXCIgLXdlYmtpdC10cmFuc2Zvcm06XCIrQytcIiBcIitpKX19LHRoaXMpKSx3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lP3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoJC5wcm94eSh0aGlzLl9vblNjcm9sbCx0aGlzLCExKSk6dGhpcy5fcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCQucHJveHkodGhpcy5fb25TY3JvbGwsdGhpcywhMSkpfX07XG4iLCJpbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uJztcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24uZHJvcGRvd24nO1xuaW1wb3J0IGZhbmN5Ym94IGZyb20gJy4vaGFsb3RoZW1lcy9qcXVlcnkuZmFuY3lib3gubWluJztcbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IGhhbG9BZGRPcHRpb24gZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9BZGRPcHRpb25Gb3JQcm9kdWN0Q2FyZCc7XG5pbXBvcnQgcGFyYWxsYXggZnJvbSAnLi9oYWxvdGhlbWVzL3BhcmFsbGF4L2pxdWVyeS5wYXJhbGxheC1zY3JvbGwubWluJztcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tICcuL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdE1vZGFsLCBtb2RhbFR5cGVzIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IGhhbG9Zb3V0dWJlQ2Fyb3VzZWwgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9WaWRlbyc7XG5pbXBvcnQgaGFsb05vdGlmeU1lIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvTm90aWZ5TWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgdGhpcy5jb3VudERvd25IZXJvQ2Fyb3VzZWwoKTtcbiAgICAgICAgdGhpcy5jdXN0b21QYWdpbmcoKTtcbiAgICAgICAgdGhpcy5sb2FkUHJvZHVjdEJ5Q2F0ZWdvcnkoKTtcbiAgICAgICAgdGhpcy5sb2FkUHJvZHVjdFRhYkJ5Q2F0ZWdvcnkoKTtcbiAgICAgICAgdGhpcy5sb2FkUHJvZHVjdEJ5Q2F0ZWdvcnlXaXRoQmFubmVyKCk7XG4gICAgICAgIHRoaXMuZmFuY3lib3hWaWRlb0Jhbm5lcigpO1xuICAgICAgICB0aGlzLmZhcXNUb2dnbGUoKTtcbiAgICAgICAgdGhpcy5yZWNlbnRCbG9nU2xpZGVyKCk7XG4gICAgICAgIHRoaXMuaG9tZVNwZWNpYWxQcm9kdWN0KCk7XG4gICAgICAgIHRoaXMuaG9tZVBhcmFsbGF4QmFubmVyKCk7XG4gICAgICAgIHRoaXMubG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkKCk7XG4gICAgICAgIHRoaXMuY3VzdG9tZXJSZXZpZXdDYXJvdXNlbCgpO1xuICAgICAgICB0aGlzLmhvbWVQcm9kdWN0UmVjb21tZW5kZWQoKTtcbiAgICB9XG5cbiAgICBjb3VudERvd25IZXJvQ2Fyb3VzZWwoKSB7XG4gICAgICAgICQoJy5oZXJvQ2Fyb3VzZWwtY291bnRkb3duJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICQoZWxlbWVudCkucGFyZW50cygnLnNsaWNrLXNsaWRlJykuYWRkQ2xhc3MoJ2hhcy1jb3VudC1kb3duJyk7XG5cbiAgICAgICAgICAgIHZhciBjb3VudERvd24gPSAkKGVsZW1lbnQpLmRhdGEoJ2Nhcm91c2VsLWNvdW50ZG93bicpLFxuICAgICAgICAgICAgICAgIGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZShjb3VudERvd24pLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICBzZWZ0ID0gJChlbGVtZW50KTtcblxuICAgICAgICAgICAgdmFyIGNvdW50ZG93bmZ1bmN0aW9uID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcblxuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChjb3VudGRvd25mdW5jdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHNlZnQuaHRtbCgnJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRheXMgPSBNYXRoLmZsb29yKGRpc3RhbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdXJzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZHMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHJDb3VudERvd24gPSBcIjxzcGFuIGNsYXNzPSdudW0nPlwiK2RheXMrXCI8c3Bhbj5EQVlTPC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz0nbnVtJz5cIitob3VycytcIjxzcGFuPkhPVVJTPC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz0nbnVtJz5cIittaW51dGVzK1wiPHNwYW4+TUlOUzwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9J251bSc+XCIrc2Vjb25kcytcIjxzcGFuPlNFQ1M8L3NwYW4+PC9zcGFuPlwiO1xuXG4gICAgICAgICAgICAgICAgICAgIHNlZnQuaHRtbChzdHJDb3VudERvd24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjdXN0b21QYWdpbmcoKXtcbiAgICAgICAgY29uc3QgaGVyb0N1c3RvbSA9ICQoJy5oZXJvQ2Fyb3VzZWwtY3VzdG9tJyk7XG4gICAgICAgIGNvbnN0IGhlcm9DdXN0b21TbGlkZSA9ICQoJy5oZXJvQ2Fyb3VzZWwtY3VzdG9tIC5zbGljay1kb3RzIGxpJyk7XG4gICAgICAgIGhlcm9DdXN0b20uc2xpY2soe1xuICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogaGVyb0N1c3RvbS5kYXRhKCdhdXRvcGxheScpLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBhc05hdkZvcjogXCIuaGVyb0Nhcm91c2VsXCJcbiAgICAgICAgfSk7XG4gICAgICAgIC8vQURBXG4gICAgICAgICQoJy5oZXJvQ2Fyb3VzZWwtY3VzdG9tIC5zbGljay1kb3RzIGxpJykuZWFjaChmdW5jdGlvbihpKXtcbiAgICAgICAgICAgIHZhciBzbGlkZSA9ICQodGhpcykuZmluZCgnYnV0dG9uJykudGV4dCgpO1xuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdidXR0b24nKS50ZXh0KCcwJyArIHNsaWRlKS5hZGRDbGFzcygnc2xpY2stZG90cy1pdGVtJyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgaGVyb0N1c3RvbS5vbignYWZ0ZXJDaGFuZ2UnLCAoZXZlbnQsIHNsaWRlciwgaSkgPT4ge1xuICAgICAgICAgICAgdmFyIHBvcyA9ICQoc2xpZGVyLiRzbGlkZXNbaV0pLmZpbmQoJ2RpdltkYXRhLXBvc2l0aW9uXScpLmRhdGEoJ3Bvc2l0aW9uJyk7XG5cbiAgICAgICAgICAgIGlmKHBvcyA9PT0gJ3JpZ2h0Jyl7XG4gICAgICAgICAgICAgICAgaGVyb0N1c3RvbS5yZW1vdmVDbGFzcygnaGVyb0Nhcm91c2VsLWN1c3RvbUxlZnQnKS5hZGRDbGFzcygnaGVyb0Nhcm91c2VsLWN1c3RvbVJpZ2h0Jyk7XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgaGVyb0N1c3RvbS5yZW1vdmVDbGFzcygnaGVyb0Nhcm91c2VsLWN1c3RvbVJpZ2h0JykuYWRkQ2xhc3MoJ2hlcm9DYXJvdXNlbC1jdXN0b21MZWZ0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgaWYgKCQoJy5oZXJvQ2Fyb3VzZWwtc2xpZGUtLWZpcnN0IC5oZXJvQ2Fyb3VzZWwtY29udGVudC13cmFwcGVyIC5oZXJvQ2Fyb3VzZWwtY29udGVudC0tcmlnaHQnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGhlcm9DdXN0b20ucmVtb3ZlQ2xhc3MoJ2hlcm9DYXJvdXNlbC1jdXN0b21MZWZ0JykuYWRkQ2xhc3MoJ2hlcm9DYXJvdXNlbC1jdXN0b21SaWdodCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZFByb2R1Y3RCeUNhdGVnb3J5KCl7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAncHJvZHVjdHMvY2Fyb3VzZWwtMidcbiAgICAgICAgfTtcblxuICAgICAgICBpZigkKCcuaGFsby1ibG9ja1tkYXRhLWNhdGVnb3J5LWlkXScpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgdmFyICBoZWFkZXJfaGVpZ2h0ID0gJCgnLmhlYWRlcicpLmhlaWdodCgpO1xuXG4gICAgICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCBsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKSxcbiAgICAgICAgICAgICAgICAgICAgc2V0RmxhZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbCA+IGhlYWRlcl9oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RmxhZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoc2V0RmxhZyl7XG4gICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLWJsb2NrW2RhdGEtY2F0ZWdvcnktaWRdJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3cmFwID0gJChlbGVtZW50KS5maW5kKCcucHJvZHVjdENhcm91c2VsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0SWQgPSAkKGVsZW1lbnQpLmRhdGEoJ2RhdGEtY2F0ZWdvcnknKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRVcmwgPSAkKGVsZW1lbnQpLmRhdGEoJ2NhdGVnb3J5LXVybCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrSWQgPSAkKGVsZW1lbnQpLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCEkKCcjcHJvZHVjdC1ieS1jYXRlLScrY2F0SWQrJyAucHJvZHVjdENhcm91c2VsIC5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRDYXRlZ29yeShjYXRJZCwgY2F0VXJsLCBvcHRpb25zLCB3cmFwLCBibG9ja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0RmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbG9hZENhdGVnb3J5KGlkLCB1cmwsIG9wdGlvbiwgd3JhcCwgYmxvY2tJZCl7XG4gICAgICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSh1cmwsIG9wdGlvbiwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZighd3JhcC5maW5kKCcucHJvZHVjdENhcm91c2VsLXNsaWRlJykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgd3JhcC5odG1sKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgc2xpY2tDYXJvdXNlbCh3cmFwKTtcbiAgICAgICAgICAgICAgICAgICAgd3JhcC5wYXJlbnRzKCcuaGFsby1ibG9ja1tkYXRhLWNhdGVnb3J5LWlkXScpLmZpbmQoJy5sb2FkaW5nT3ZlcmxheScpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGhhbG9BZGRPcHRpb24oY29udGV4dCwgYmxvY2tJZCk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTsgXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzbGlja0Nhcm91c2VsKHdyYXApe1xuICAgICAgICAgICAgd3JhcC5zbGljayh7XG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLW5leHQgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J05leHQgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctbmV4dD48L3VzZT48L3N2Zz5cIiwgXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLXByZXYgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J1ByZXZpb3VzIFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LXByZXY+PC91c2U+PC9zdmc+XCIsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogcGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLmhvbWVfcHJvZHVjdF9ibG9ja19jb2wpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiBwYXJzZUludChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaG9tZV9wcm9kdWN0X2Jsb2NrX2NvbCkgLSAxXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiBwYXJzZUludChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaG9tZV9wcm9kdWN0X2Jsb2NrX2NvbCkgLSAyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkUHJvZHVjdFRhYkJ5Q2F0ZWdvcnkoKXtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6ICdwcm9kdWN0cy9jYXJvdXNlbC0zJ1xuICAgICAgICB9O1xuICAgICAgICBpZigkKCcucHJvZHVjdENhcm91c2VsLXRhYnMnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGlmKCEkKCcucHJvZHVjdENhcm91c2VsLXRhYnMgLnRhYi1jb250ZW50LmlzLWFjdGl2ZSAucHJvZHVjdENhcm91c2VsIC5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIEFycmF5LmZyb20oJCgnLnRhYi1jb250ZW50LmlzLWFjdGl2ZScpKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCAkaXRlbUVsZSA9ICQoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJsb2NrID0gJGl0ZW1FbGUsXG4gICAgICAgICAgICAgICAgICAgIHdyYXAgPSBibG9jay5maW5kKCcucHJvZHVjdENhcm91c2VsJyksXG4gICAgICAgICAgICAgICAgICAgIGNhdElkID0gYmxvY2suZGF0YSgndGFiLWNhdGVnb3J5LWlkJyksXG4gICAgICAgICAgICAgICAgICAgIGNhdFVybCA9IGJsb2NrLmRhdGEoJ3RhYi1jYXRlZ29yeS11cmwnKSxcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tJZCA9IGJsb2NrLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2F0VXJsLmluY2x1ZGVzKFwiaHR0cFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24uaG9zdC5pbmNsdWRlcyhcImVuLnN1cGVyaGFpcnBpZWNlcy5mclwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2F0VXJsID0gY2F0VXJsLnJlcGxhY2UoXCIvL3N1cGVyaGFpcnBpZWNlcy5mclwiLFwiLy9lbi5zdXBlcmhhaXJwaWVjZXMuZnJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoISQoJy5wcm9kdWN0Q2Fyb3VzZWwtdGFicyAudGFiLWNvbnRlbnQuaXMtYWN0aXZlIC5wcm9kdWN0Q2Fyb3VzZWwgLnByb2R1Y3RDYXJvdXNlbC1zbGlkZScpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrLmZpbmQoJy5sb2FkaW5nT3ZlcmxheScpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgbG9hZENhdGVnb3J5KGNhdElkLCBjYXRVcmwsIG9wdGlvbnMsIHdyYXAsIGJsb2NrSWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmKCQoJy5wcm9kdWN0Q2Fyb3VzZWwtdGFicycpLmxlbmd0aCA+IDApe1xuICAgICAgICAvLyAgICAgaWYoISQoJy5wcm9kdWN0Q2Fyb3VzZWwtdGFicyAudGFiLWNvbnRlbnQuaXMtYWN0aXZlIC5wcm9kdWN0Q2Fyb3VzZWwgLnByb2R1Y3RDYXJvdXNlbC1zbGlkZScpLmxlbmd0aCl7XG4gICAgICAgIC8vICAgICAgICAgdmFyIGJsb2NrID0gJCgnLnByb2R1Y3RDYXJvdXNlbC10YWJzIC50YWItY29udGVudC5pcy1hY3RpdmUnKSxcbiAgICAgICAgLy8gICAgICAgICAgICAgd3JhcCA9IGJsb2NrLmZpbmQoJy5wcm9kdWN0Q2Fyb3VzZWwnKSxcbiAgICAgICAgLy8gICAgICAgICAgICAgY2F0SWQgPSBibG9jay5kYXRhKCd0YWItY2F0ZWdvcnktaWQnKSxcbiAgICAgICAgLy8gICAgICAgICAgICAgY2F0VXJsID0gYmxvY2suZGF0YSgndGFiLWNhdGVnb3J5LXVybCcpLFxuICAgICAgICAvLyAgICAgICAgICAgICBibG9ja0lkID0gYmxvY2suYXR0cignaWQnKTtcblxuICAgICAgICAvLyAgICAgICAgIGlmIChjYXRVcmwuaW5jbHVkZXMoXCJodHRwXCIpKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChsb2NhdGlvbi5ob3N0LmluY2x1ZGVzKFwiZW4uc3VwZXJoYWlycGllY2VzLmZyXCIpKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjYXRVcmwgPSBjYXRVcmwucmVwbGFjZShcIi8vc3VwZXJoYWlycGllY2VzLmZyXCIsXCIvL2VuLnN1cGVyaGFpcnBpZWNlcy5mclwiKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICBpZighJCgnLnByb2R1Y3RDYXJvdXNlbC10YWJzIC50YWItY29udGVudC5pcy1hY3RpdmUgLnByb2R1Y3RDYXJvdXNlbCAucHJvZHVjdENhcm91c2VsLXNsaWRlJykubGVuZ3RoKXtcbiAgICAgICAgLy8gICAgICAgICAgICAgYmxvY2suZmluZCgnLmxvYWRpbmdPdmVybGF5Jykuc2hvdygpO1xuICAgICAgICAvLyAgICAgICAgICAgICBsb2FkQ2F0ZWdvcnkoY2F0SWQsIGNhdFVybCwgb3B0aW9ucywgd3JhcCwgYmxvY2tJZCk7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuXG4gICAgICAgIC8vICAgICAkKCcucHJvZHVjdENhcm91c2VsLXRhYnMgW2RhdGEtdGFiXScpLm9uKCd0b2dnbGVkJywgKGV2ZW50LCB0YWIpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBpZighJCgnLnByb2R1Y3RDYXJvdXNlbC10YWJzIC50YWItY29udGVudC5pcy1hY3RpdmUgLnByb2R1Y3RDYXJvdXNlbCAucHJvZHVjdENhcm91c2VsLXNsaWRlJykubGVuZ3RoKXtcbiAgICAgICAgLy8gICAgICAgICAgICAgdmFyIGJsb2NrID0gJCgnLnByb2R1Y3RDYXJvdXNlbC10YWJzIC50YWItY29udGVudC5pcy1hY3RpdmUnKSxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHdyYXAgPSBibG9jay5maW5kKCcucHJvZHVjdENhcm91c2VsJyksXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjYXRJZCA9IGJsb2NrLmRhdGEoJ3RhYi1jYXRlZ29yeS1pZCcpLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY2F0VXJsID0gYmxvY2suZGF0YSgndGFiLWNhdGVnb3J5LXVybCcpLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgYmxvY2tJZCA9IGJsb2NrLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGNhdFVybC5pbmNsdWRlcyhcImh0dHBcIikpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbi5ob3N0LmluY2x1ZGVzKFwiZW4uc3VwZXJoYWlycGllY2VzLmZyXCIpKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgY2F0VXJsID0gY2F0VXJsLnJlcGxhY2UoXCIvL3N1cGVyaGFpcnBpZWNlcy5mclwiLFwiLy9lbi5zdXBlcmhhaXJwaWVjZXMuZnJcIik7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgICAgIH1cblxuICAgICAgICAvLyAgICAgICAgICAgICBpZighJChldmVudC5jdXJyZW50VGFyZ2V0KS5maW5kKCcucHJvZHVjdENhcm91c2VsJykuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpe1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgYmxvY2suZmluZCgnLmxvYWRpbmdPdmVybGF5Jykuc2hvdygpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgbG9hZENhdGVnb3J5KGNhdElkLCBjYXRVcmwsIG9wdGlvbnMsIHdyYXAsIGJsb2NrSWQpO1xuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgZnVuY3Rpb24gcmV2aWV3U2hvdyh4KSB7XG4gICAgICAgICAgICB2YXIgbGltaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmV2aWV3Q2FyZDEnKTtcbiAgICBcbiAgICAgICAgICAgIGxldCByZXZpZXcyID0gW11cbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvblwiKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocj0+e1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcbiAgICAgICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvbj9za2lwPTUwMFwiKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocj0+e1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcbiAgICAgICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvbj9za2lwPTEwMDBcIikudGhlbihyID0+IHIuanNvbigpKS50aGVuKHI9PntcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3Mi5wdXNoKC4uLnIpfSksXG4gICAgICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL3d3dy50ZWFtZGVzay5uZXQvc2VjdXJlL2FwaS92Mi81NjU1NC9CRUEyNTY2NTkwRUY0RDE0QUE4RDM1QUQwRTJDRUE3Ny9SZXZpZXcvc2VsZWN0Lmpzb24/c2tpcD0xNTAwXCIpLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihyPT57XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzIucHVzaCguLi5yKX0pLFxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAudGhlbigocikgPT4ge1xuICAgICAgICAgICAgICAgIGxpbWl0LmZvckVhY2goKGl0ZW0xKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICQoaXRlbTEubmV4dEVsZW1lbnRTaWJsaW5nKS5lbXB0eSgpXG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXZpZXczID0gW11cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpZHUgPSByZXZpZXcyLmZpbHRlcihpdGVtID0+IGl0ZW1bJ1Byb2R1Y3QgU0tVJ10gPT09IGl0ZW0xLmlubmVySFRNTClcbiAgICAgICAgICAgICAgICAgICAgdmlkdS5mb3JFYWNoKChnb2t1KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXZpZXczLnB1c2goZ29rdVsnUmV2aWV3IHJhdGUnXSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV2aWV3QXZnID0gTWF0aC5yb3VuZCgocmV2aWV3My5yZWR1Y2UoKGEsYiApID0+IGErIGIsIDApL3JldmlldzMubGVuZ3RoKSAqIDEwKS8xMFxuXG4gICAgICAgICAgICAgICAgICAgICQoaXRlbTEubmV4dEVsZW1lbnRTaWJsaW5nKS5hcHBlbmQoYFxuICAgICAgICAgICAgICAgICAgICA8c3R5bGU+ICAgIC5jaGVja2VkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyMTAsIDApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmEtc3Rhci1vIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDIxMCwgMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0UmV2aWV3MiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RSZXZpZXcyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHVuc2V0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RSZXZpZXcyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygwLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyYCsoMS41IDw9IHJldmlld0F2Zz8gJyBjaGVja2VkJzogJyBmYS1zdGFyLW8nKSArIGBcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhcmArKDIuNSA8PSByZXZpZXdBdmc/ICcgY2hlY2tlZCc6ICcgZmEtc3Rhci1vJykgKyBgXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygzLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyYCsoNC41IDw9IHJldmlld0F2Zz8gJyBjaGVja2VkJzogJyBmYS1zdGFyLW8nKSArIGBcIj48L3NwYW4+ICAgICAgXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9cGFkZGluZy1sZWZ0OjVweDs+XG4gICAgICAgICAgICAgICAgICAgICR7cmV2aWV3My5sZW5ndGh9IENvbW1lbnRhaXJlc1xuICAgICAgICAgICAgICAgIDwvZGl2PmApXG4gICAgICAgICAgICAgICAgICAgIC8vICQoaXRlbTEubmV4dEVsZW1lbnRTaWJsaW5nKS5hcHBlbmQoYDxkaXY+JHtyZXZpZXdBdmd9PC9kaXY+YClcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gbG9hZENhdGVnb3J5KGlkLCB1cmwsIG9wdGlvbiwgd3JhcCwgYmxvY2tJZCl7XG4gICAgICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSh1cmwsIG9wdGlvbiwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZighd3JhcC5maW5kKCcucHJvZHVjdENhcm91c2VsLXNsaWRlJykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgd3JhcC5odG1sKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgc2xpY2tDYXJvdXNlbCh3cmFwKTtcbiAgICAgICAgICAgICAgICAgICAgd3JhcC5wYXJlbnRzKCcudGFiLWNvbnRlbnQnKS5maW5kKCcubG9hZGluZ092ZXJsYXknKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uKGNvbnRleHQsIGJsb2NrSWQpO1xuICAgICAgICAgICAgICAgICAgICByZXZpZXdTaG93KClcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pOyBcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNsaWNrQ2Fyb3VzZWwod3JhcCl7XG4gICAgICAgICAgICB3cmFwLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nTmV4dCBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1uZXh0PjwvdXNlPjwvc3ZnPlwiLCBcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stcHJldiBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nUHJldmlvdXMgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctcHJldj48L3VzZT48L3N2Zz5cIixcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiBwYXJzZUludChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaG9tZV9wcm9kdWN0X2Jsb2NrX3RhYl9jb2wpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiBwYXJzZUludChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaG9tZV9wcm9kdWN0X2Jsb2NrX3RhYl9jb2wpIC0gMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogcGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLmhvbWVfcHJvZHVjdF9ibG9ja190YWJfY29sKSAtIDJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRQcm9kdWN0QnlDYXRlZ29yeVdpdGhCYW5uZXIoKXtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6ICdwcm9kdWN0cy9jYXJvdXNlbC00J1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmKCQoJy5oYWxvLWJsb2NrW2RhdGEtY2F0ZWdvcnktd2l0aC1iYW5uZXItaWRdJykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICB2YXIgIGhlYWRlcl9oZWlnaHQgPSAkKCcuaGVhZGVyJykuaGVpZ2h0KCk7XG4gICAgICAgICAgICBjb25zdCAkdGFiU29ydGluZyA9ICQoJy50YWItc29ydGluZyAudGFiLXRpdGxlJyk7XG5cbiAgICAgICAgICAgICQod2luZG93KS5vbignc2Nyb2xsIGxvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpLFxuICAgICAgICAgICAgICAgICAgICBzZXRGbGFnID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsID4gaGVhZGVyX2hlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRGbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihzZXRGbGFnKXtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tYmxvY2tbZGF0YS1jYXRlZ29yeS13aXRoLWJhbm5lci1pZF0nKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoJy5ob21lLWxheW91dC0yJykubGVuZ3RoICYmICEkKGVsZW1lbnQpLmhhc0NsYXNzKCdob21lMi1mbGFzaC1kZWFscycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdyYXAgPSAkKGVsZW1lbnQpLmZpbmQoJy50YWJDb250ZW50LW5ldyAucHJvZHVjdENhcm91c2VsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgd3JhcCA9ICQoZWxlbWVudCkuZmluZCgnLnByb2R1Y3RDYXJvdXNlbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2F0SWQgPSAkKGVsZW1lbnQpLmRhdGEoJ2NhdGVnb3J5LXdpdGgtYmFubmVyLWlkJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0VXJsID0gJChlbGVtZW50KS5kYXRhKCdjYXRlZ29yeS13aXRoLWJhbm5lci11cmwnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja0lkID0gJChlbGVtZW50KS5hdHRyKCdpZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighJCgnI3Byb2R1Y3Qtd2l0aC1iYW5uZXItJytjYXRJZCsnIC5wcm9kdWN0Q2Fyb3VzZWwgLnByb2R1Y3RDYXJvdXNlbC1zbGlkZScpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZENhdGVnb3J5KGNhdElkLCBjYXRVcmwsIG9wdGlvbnMsIHdyYXAsIGJsb2NrSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBzZXRGbGFnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICR0YWJTb3J0aW5nLm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YVRhYiA9ICR0YXJnZXQuZGF0YSgndGFiJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgJHRoaXNCbG9jayA9ICR0YXJnZXQuY2xvc2VzdCgnLmhhbG8tYmxvY2stcHJvZHVjdCcpO1xuICAgICAgICAgICAgICAgIHZhciB3cmFwID0gJHRoaXNCbG9jay5maW5kKCcudGFiQ29udGVudC0nK2RhdGFUYWIrJyAucHJvZHVjdENhcm91c2VsJyksXG4gICAgICAgICAgICAgICAgICAgIGNhdElkID0gJHRhcmdldC5kYXRhKCdjYXRlLWlkJyksXG4gICAgICAgICAgICAgICAgICAgIGNhdFVybCA9ICR0YXJnZXQuZGF0YSgnY2F0ZS11cmwnKSxcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tJZCA9ICR0aGlzQmxvY2suZmluZCgnLnRhYkNvbnRlbnQtJytkYXRhVGFiKS5hdHRyKCdpZCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFUYWIgPT0gJ3ZpZXdhbGwnKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJHRhcmdldC5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkdGhpc0Jsb2NrLmZpbmQoJy50YWItc29ydGluZycpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LnBhcmVudCgpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkdGhpc0Jsb2NrLmZpbmQoJy50YWItY29udGVudCcpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkdGhpc0Jsb2NrLmZpbmQoJy50YWJDb250ZW50LScrZGF0YVRhYikuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZmYnKVxuICAgICAgICAgICAgICAgIGlmKCEkdGFyZ2V0Lmhhc0NsYXNzKCdpcy1sb2FkZWQnKSl7XG4gICAgICAgICAgICAgICAgICAgICR0YXJnZXQuYWRkQ2xhc3MoJ2lzLWxvYWRlZCcpO1xuICAgICAgICAgICAgICAgICAgICBsb2FkQ2F0ZWdvcnkoY2F0SWQsIGNhdFVybCwgb3B0aW9ucywgd3JhcCwgYmxvY2tJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkdGhpc0Jsb2NrLmZpbmQoJy50YWJDb250ZW50LScrZGF0YVRhYisnIC5wcm9kdWN0Q2Fyb3VzZWwnKS5zbGljaygncmVmcmVzaCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoJCgnLmNvdW50RG93bnRpbWVyJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZSggJCgnLmNvdW50RG93bnRpbWVyJykuYXR0cignZGF0YS1jb3VudC1kb3duJykpLmdldFRpbWUoKTtcblxuICAgICAgICAgICAgICAgIHZhciBjb3VudGRvd25mdW5jdGlvbiA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRkb3duZnVuY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5jb3VudERvd250aW1lclwiKS5odG1sKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdHJDb3VudERvd24gPSBcIjxkaXYgY2xhc3M9J2Nsb2NrLWl0ZW0nPjxzcGFuIGNsYXNzPSdudW0nPlwiK2RheXMrXCI8L3NwYW4+PHNwYW4gY2xhc3M9J3RleHQnPmQ8L3NwYW4+PC9kaXY+PGRpdiBjbGFzcz0nY2xvY2staXRlbSc+PHNwYW4gY2xhc3M9J251bSc+XCIraG91cnMrXCI6PC9zcGFuPjwvZGl2PjxkaXYgY2xhc3M9J2Nsb2NrLWl0ZW0nPjxzcGFuIGNsYXNzPSdudW0nPlwiK21pbnV0ZXMrXCI6PC9zcGFuPjwvZGl2PjxkaXYgY2xhc3M9J2Nsb2NrLWl0ZW0nPjxzcGFuIGNsYXNzPSdudW0nPlwiK3NlY29uZHMrXCI8L3NwYW4+PC9kaXY+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmNvdW50RG93bnRpbWVyXCIpLmh0bWwoc3RyQ291bnREb3duKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbG9hZENhdGVnb3J5KGlkLCB1cmwsIG9wdGlvbiwgd3JhcCwgYmxvY2tJZCl7XG4gICAgICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSh1cmwsIG9wdGlvbiwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZighd3JhcC5maW5kKCcucHJvZHVjdENhcm91c2VsLXNsaWRlJykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgd3JhcC5odG1sKHJlc3BvbnNlKTtcblxuICAgICAgICAgICAgICAgICAgICBpZih3cmFwLnBhcmVudHMoJy5oYWxvLWJsb2NrW2RhdGEtY2F0ZWdvcnktd2l0aC1iYW5uZXItaWRdJykuaGFzQ2xhc3MoJ2hhbG8tYmxvY2stcHJvZHVjdC1iYW5uZXJzJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoJy5ob21lLWxheW91dC0yJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdyYXAucGFyZW50cygnLmhhbG8tYmxvY2tbZGF0YS1jYXRlZ29yeS13aXRoLWJhbm5lci1pZF0nKS5oYXNDbGFzcygnaG9tZTItZmxhc2gtZGVhbHMnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEZsYXNoRGVhbHMod3JhcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNrQ2Fyb3VzZWw0KHdyYXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2tDYXJvdXNlbDMod3JhcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2tDYXJvdXNlbCh3cmFwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKHdyYXAucGFyZW50cygnLmhhbG8tYmxvY2tbZGF0YS1jYXRlZ29yeS13aXRoLWJhbm5lci1pZF0nKS5oYXNDbGFzcygnaGFsby1ibG9jay1wcm9kdWN0LWJhbm5lcnMyJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2tDYXJvdXNlbDIod3JhcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB3cmFwLnBhcmVudHMoJy5oYWxvLWJsb2NrW2RhdGEtY2F0ZWdvcnktd2l0aC1iYW5uZXItaWRdJykuZmluZCgnLmxvYWRpbmdPdmVybGF5JykucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaGFsb0FkZE9wdGlvbihjb250ZXh0LCBibG9ja0lkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTsgXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzbGlja0Nhcm91c2VsKHdyYXApe1xuICAgICAgICAgICAgd3JhcC5zbGljayh7XG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLW5leHQgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J05leHQgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctbmV4dD48L3VzZT48L3N2Zz5cIiwgXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLXByZXYgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J1ByZXZpb3VzIFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LXByZXY+PC91c2U+PC9zdmc+XCIsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2xpY2tDYXJvdXNlbDIod3JhcCl7XG4gICAgICAgICAgICB3cmFwLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nTmV4dCBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1uZXh0PjwvdXNlPjwvc3ZnPlwiLCBcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stcHJldiBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nUHJldmlvdXMgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctcHJldj48L3VzZT48L3N2Zz5cIixcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiBwYXJzZUludChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaG9tZV9wcm9kdWN0X2Jsb2NrX3dpdGhfYmFubmVyX2NvbClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfd2l0aF9iYW5uZXJfY29sKSAtIDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfd2l0aF9iYW5uZXJfY29sKSAtIDJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNsaWNrQ2Fyb3VzZWwzKHdyYXApe1xuICAgICAgICAgICAgd3JhcC5zbGljayh7XG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLW5leHQgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J05leHQgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctbmV4dD48L3VzZT48L3N2Zz5cIiwgXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLXByZXYgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J1ByZXZpb3VzIFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LXByZXY+PC91c2U+PC9zdmc+XCIsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzbGlja0Nhcm91c2VsNCh3cmFwKXtcbiAgICAgICAgICAgIHdyYXAuc2xpY2soe1xuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1uZXh0IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdOZXh0IFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LW5leHQ+PC91c2U+PC9zdmc+XCIsIFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1wcmV2IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdQcmV2aW91cyBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1wcmV2PjwvdXNlPjwvc3ZnPlwiLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTksXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGxhYmVsRmxhc2hEZWFscyh3cmFwKSB7XG4gICAgICAgICAgICBjb25zdCAkaXRlbVNpZGUgPSB3cmFwLmZpbmQoJy5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKTtcblxuICAgICAgICAgICAgJGl0ZW1TaWRlLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgJHRoaXNMYWJlbCA9ICQoZWxlbWVudCkuZmluZCgnLnNhbGUtYmFkZ2UnKTtcblxuICAgICAgICAgICAgICAgIGlmICgkdGhpc0xhYmVsLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9ICR0aGlzTGFiZWwuZmluZCgnLnRleHQnKS5kYXRhKCdzYWxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5maW5kKCcuY2FyZC1wcmljZScpLmFkZENsYXNzKCdoYXMtbGFiZWxTYWxlJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiY2FyZC1sYWJlbC1zYWxlXCI+PHNwYW4+LScrbGFiZWwrJzwvc3Bhbj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXNMYWJlbC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZhbmN5Ym94VmlkZW9CYW5uZXIoKXtcbiAgICAgICAgaWYgKCQoXCIudmlkZW8tYmxvY2staW1hZ2VbZGF0YS1mYW5jeWJveF1cIikubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJChcIi52aWRlby1ibG9jay1pbWFnZVtkYXRhLWZhbmN5Ym94XVwiKS5mYW5jeWJveCh7XG4gICAgICAgICAgICAgICAgJ2F1dG9EaW1lbnNpb25zJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ3BhZGRpbmcnIDogMCxcbiAgICAgICAgICAgICAgICAnd2lkdGgnIDogOTcwLFxuICAgICAgICAgICAgICAgICdoZWlnaHQnIDogNjAwLFxuICAgICAgICAgICAgICAgICdhdXRvU2NhbGUnIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25JbicgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25PdXQnIDogJ25vbmUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkKFwiLmJ1dHRvbi1wb3B1cC12aWRlb1tkYXRhLWZhbmN5Ym94XVwiKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkKFwiLmJ1dHRvbi1wb3B1cC12aWRlb1tkYXRhLWZhbmN5Ym94XVwiKS5mYW5jeWJveCh7XG4gICAgICAgICAgICAgICAgJ2F1dG9EaW1lbnNpb25zJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ3BhZGRpbmcnIDogMCxcbiAgICAgICAgICAgICAgICAnd2lkdGgnIDogOTcwLFxuICAgICAgICAgICAgICAgICdoZWlnaHQnIDogNjAwLFxuICAgICAgICAgICAgICAgICdhdXRvU2NhbGUnIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25JbicgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25PdXQnIDogJ25vbmUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZhcXNUb2dnbGUoKXtcbiAgICAgICAgJCgnLmhhbG8tc2hvcnQtZmFxcyAuY2FyZCAudGl0bGUnKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHZhciAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICAgICAgJCgnLmhhbG8tc2hvcnQtZmFxcyAuY2FyZCAudGl0bGUnKS5ub3QoJHRhcmdldCkucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNlZCcpO1xuXG4gICAgICAgICAgICBpZigkdGFyZ2V0Lmhhc0NsYXNzKCdjb2xsYXBzZWQnKSl7XG4gICAgICAgICAgICAgICAgJHRhcmdldC5yZW1vdmVDbGFzcygnY29sbGFwc2VkJyk7XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgJHRhcmdldC5hZGRDbGFzcygnY29sbGFwc2VkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJy5oYWxvLXNob3J0LWZhcXMgLmNhcmQnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCQoZWxlbWVudCkuZmluZCgnLnRpdGxlJykuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpKXtcbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5maW5kKCcuY29sbGFwc2UnKS5zbGlkZURvd24oXCJzbG93XCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5maW5kKCcuY29sbGFwc2UnKS5zbGlkZVVwKFwic2xvd1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVjZW50QmxvZ1NsaWRlcigpe1xuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gMTAyNCkge1xuICAgICAgICAgICAgaWYgKCQoJy5oYWxvLXJlY2VudC1wb3N0JykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQoJy5oYWxvLXJlY2VudC1wb3N0JykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKXtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5zbGljaygndW5zbGljaycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgaWYgKCQoJy5oYWxvLXJlY2VudC1wb3N0JykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEkKCcuaGFsby1yZWNlbnQtcG9zdCcpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSl7XG4gICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLXJlY2VudC1wb3N0Jykuc2xpY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDEwMjQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJy5oYWxvLXJlY2VudC1wb3N0JykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLXJlY2VudC1wb3N0Jykuc2xpY2soJ3Vuc2xpY2snKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCQoJy5oYWxvLXJlY2VudC1wb3N0JykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5zbGljaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBob21lU3BlY2lhbFByb2R1Y3QoKXtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcblxuICAgICAgICBpZihjb250ZXh0LnRoZW1lU2V0dGluZ3MuaG9tZV9wcm9kdWN0X2Jsb2NrX3NwZWNpYWwgPT0gdHJ1ZSl7XG4gICAgICAgICAgICB2YXIgcHJvZHVjdElkID0gJCgnW2RhdGEtc3BlY2lhbC1wcm9kdWN0LWlkXScpLmRhdGEoJ3NwZWNpYWwtcHJvZHVjdC1pZCcpLFxuICAgICAgICAgICAgICAgIHNldEZsYWcgPSBmYWxzZTtcblxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9e1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnaGFsb3RoZW1lcy9wcm9kdWN0cy9oYWxvLXNwZWNpYWwtcHJvZHVjdC10bXAnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQod2luZG93KS5vbignc2Nyb2xsIGxvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJfaGVpZ2h0ID0gJCgnLmhlYWRlcicpLmhlaWdodCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbCA+IGhlYWRlcl9oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RmxhZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoc2V0RmxhZyl7XG4gICAgICAgICAgICAgICAgICAgIGlmKCEkKCcuaGFsby1zcGFjaWFsLXByb2R1Y3QgLnByb2R1Y3RWaWV3JykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0LmdldEJ5SWQocHJvZHVjdElkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzY29wZSA9ICcuaGFsby1zcGFjaWFsLXByb2R1Y3QnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoISQoc2NvcGUpLmZpbmQoJy5wcm9kdWN0VmlldycpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoc2NvcGUpLmh0bWwocmVzcG9uc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbGRQcm9kdWN0KCQoc2NvcGUpLmZpbmQoJy5wcm9kdWN0Vmlldy1zb2xkUHJvZHVjdCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld2luZ1Byb2R1Y3QoJChzY29wZSkuZmluZCgnLnByb2R1Y3RWaWV3LVZpZXdpbmdQcm9kdWN0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudERvd25Qcm9kdWN0KCQoc2NvcGUpLmZpbmQoJy5wcm9kdWN0Vmlldy1jb3VudERvd24nKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzY29wZSkuZmluZCgnW2RhdGEtc2xpY2tdJykuc2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzY29wZSkuZmluZCgnLnByb2R1Y3RWaWV3LWZvcicpLmdldCgwKS5zbGljay5zZXRQb3NpdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRUaHVtYm5haWxzSGVpZ2h0KHNjb3BlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFsb05vdGlmeU1lKCQoc2NvcGUpLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFsb1lvdXR1YmVDYXJvdXNlbCgkKHNjb3BlKS5maW5kKCdbZGF0YS1zbGlja10nKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzY29wZSkub24oJ2NsaWNrJywgJy5kcm9wZG93bi1tZW51LWJ1dHRvbicsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoJHRhcmdldC5oYXNDbGFzcygnaXMtb3BlbicpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtb3BlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2libGluZ3MoJy5kcm9wZG93bi1tZW51JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1vcGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLW9wZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2libGluZ3MoJy5kcm9wZG93bi1tZW51JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdpcy1vcGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoc2NvcGUpLmZpbmQoJy5kcm9wZG93bi1tZW51LWJ1dHRvbicpLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcuZHJvcGRvd24tbWVudS1idXR0b24nKS5sZW5ndGggPT09IDApICYmICgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLmRyb3Bkb3duLW1lbnUnKS5sZW5ndGggPT09IDApKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzY29wZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKCcuZHJvcGRvd24tbWVudS1idXR0b24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1vcGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoc2NvcGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZCgnLmRyb3Bkb3duLW1lbnUtYnV0dG9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWJsaW5ncygnLmRyb3Bkb3duLW1lbnUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1vcGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3REZXRhaWxzID0gbmV3IFByb2R1Y3REZXRhaWxzKCQoc2NvcGUpLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdERldGFpbHMuc2V0UHJvZHVjdFZhcmlhbnQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdERldGFpbHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHZpZXdpbmdQcm9kdWN0KHdyYXBwZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih3cmFwcGVyLmxlbmd0aCA+IDApeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZpZXdlclRleHQgPSBjb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF92aWV3aW5nUHJvZHVjdF90ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyc1ZpZXdlcl90ZXh0ID0gY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3Rfdmlld2luZ1Byb2R1Y3Rfdmlld2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyc1ZpZXdlckxpc3QgPSAgSlNPTi5wYXJzZShcIltcIiArIG51bWJlcnNWaWV3ZXJfdGV4dCArIFwiXVwiKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBudW1iZXJzVmlld2VySXRlbSA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbnVtYmVyc1ZpZXdlckxpc3QubGVuZ3RoKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuaHRtbCgnPHN2ZyBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1leWVcIi8+PC9zdmc+JyArIG51bWJlcnNWaWV3ZXJMaXN0W251bWJlcnNWaWV3ZXJJdGVtXSArIFwiIFwiICsgdmlld2VyVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDAwKTsgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gY291bnREb3duUHJvZHVjdCh3cmFwcGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYod3JhcHBlci5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvdW50RG93biA9IHdyYXBwZXIuZGF0YSgnY291bnRkb3duJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudERvd25EYXRlID0gbmV3IERhdGUoY291bnREb3duKS5nZXRUaW1lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWZ0ID0gd3JhcHBlcjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY291bnRkb3duZnVuY3Rpb24gPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGNvdW50ZG93bmZ1bmN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWZ0LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF5cyA9IE1hdGguZmxvb3IoZGlzdGFuY2UgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3VycyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCkpIC8gMTAwMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ckNvdW50RG93biA9ICc8c3ZnIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWJlbGxcIi8+PC9zdmc+PHNwYW4gY2xhc3M9XCJ0ZXh0XCI+PHNwYW4+TGltaXRlZCB0aW1lIG9mZmVyLCBlbmQgaW46PC9zcGFuPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJudW1cIj4nK2RheXMrJ2QgOjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJudW1cIj4nK2hvdXJzKydoIDo8L3NwYW4+IDxzcGFuIGNsYXNzPVwibnVtXCI+JyttaW51dGVzKydtIDo8L3NwYW4+IDxzcGFuIGNsYXNzPVwibnVtXCI+JytzZWNvbmRzKydzPC9zcGFuPic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWZ0Lmh0bWwoc3RyQ291bnREb3duKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBzb2xkUHJvZHVjdCh3cmFwcGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYod3JhcHBlci5sZW5ndGggPiAwKXsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBudW1iZXJzUHJvZHVjdF90ZXh0ID0gY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3Rfc29sZFByb2R1Y3RfcHJvZHVjdHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJzSG91cnNfdGV4dCA9IGNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0X3NvbGRQcm9kdWN0X2hvdXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29sZFByb2R1Y3RUZXh0ID0gY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3Rfc29sZFByb2R1Y3RfdGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbGRQcm9kdWN0VGV4dDIgPSBjb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF9zb2xkUHJvZHVjdF9ob3Vyc190ZXh0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBudW1iZXJzUHJvZHVjdExpc3QgPSAgSlNPTi5wYXJzZShcIltcIiArIG51bWJlcnNQcm9kdWN0X3RleHQgKyBcIl1cIiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyc1Byb2R1Y3RJdGVtID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpudW1iZXJzUHJvZHVjdExpc3QubGVuZ3RoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJzSG91cnNMaXN0ID0gIEpTT04ucGFyc2UoXCJbXCIgKyBudW1iZXJzSG91cnNfdGV4dCArIFwiXVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcnNIb3Vyc0l0ZW0gPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKm51bWJlcnNIb3Vyc0xpc3QubGVuZ3RoKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5odG1sKCc8c3ZnIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWZpcmVcIi8+PC9zdmc+PHNwYW4+JyArIG51bWJlcnNQcm9kdWN0TGlzdFtudW1iZXJzUHJvZHVjdEl0ZW1dICsgXCIgXCIgKyBzb2xkUHJvZHVjdFRleHQgKyBcIiBcIiArIG51bWJlcnNIb3Vyc0xpc3RbbnVtYmVyc0hvdXJzSXRlbV0gKyBcIiBcIiArIHNvbGRQcm9kdWN0VGV4dDIgKyAnPC9zcGFuPicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaW5pdFRodW1ibmFpbHNIZWlnaHQoJHNjb3BlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKCRzY29wZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGNhcm91c2VsX25hdiA9IGVsLmZpbmQoJy5wcm9kdWN0Vmlldy1uYXYnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhcm91c2VsX2ZvciA9IGVsLmZpbmQoJy5wcm9kdWN0Vmlldy1mb3InKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkY2Fyb3VzZWxfZm9yLmZpbmQoJy5zbGljay1hcnJvdycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhcm91c2VsX2Zvci5wYXJlbnQoKS5hZGRDbGFzcygnYXJyb3dzLXZpc2libGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2Fyb3VzZWxfZm9yLnBhcmVudCgpLmFkZENsYXNzKCdhcnJvd3MtZGlzYWJsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhvbWVQYXJhbGxheEJhbm5lcigpe1xuICAgICAgICBpZigkKCcjaGFsb19wYXJyYWxheF9iYW5uZXJzJykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICB2YXIgd3JhcCA9ICQoJyNoYWxvX3BhcnJhbGF4X2Jhbm5lcnMnKSxcbiAgICAgICAgICAgICAgICBpbWFnZSA9IHdyYXAuZmluZCgnW2RhdGEtaW1hZ2VdJykuZGF0YSgnaW1hZ2UnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd3JhcC5maW5kKCdbZGF0YS1pbWFnZV0nKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAndXJsKCcraW1hZ2UrJyknKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZCgpe1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgIGlmKCQoJy5wcm9kdWN0Q2Fyb3VzZWwnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICQoJy5wcm9kdWN0Q2Fyb3VzZWwnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciAkcHJvZFdyYXBJZCA9ICQoZWxlbWVudCkuYXR0cignaWQnKTtcblxuICAgICAgICAgICAgICAgIGhhbG9BZGRPcHRpb24oY29udGV4dCwgJHByb2RXcmFwSWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZigkKCcuaGFsby1ibG9jayAucHJvZHVjdEdyaWQnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICQoJy5oYWxvLWJsb2NrIC5wcm9kdWN0R3JpZCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyICRwcm9kV3JhcElkID0gJChlbGVtZW50KS5hdHRyKCdpZCcpO1xuXG4gICAgICAgICAgICAgICAgaGFsb0FkZE9wdGlvbihjb250ZXh0LCAkcHJvZFdyYXBJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEJhbm5lciBwYXJhbGxheCAyXG4gICAgY3VzdG9tZXJSZXZpZXdDYXJvdXNlbCgpIHtcbiAgICAgICAgaWYgKCQoJyNoYWxvX3BhcnJhbGF4X2Jhbm5lcnMgLmhhbG8tcm93JykubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoISQoJyNoYWxvX3BhcnJhbGF4X2Jhbm5lcnMgLmhhbG8tcm93JykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XG4gICAgICAgICAgICAgICAgJCgnI2hhbG9fcGFycmFsYXhfYmFubmVycyAuaGFsby1yb3cnKS5zbGljayh7XG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdycgYXJpYS1sYWJlbD0nTmV4dCBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1uZXh0PjwvdXNlPjwvc3ZnPlwiLCBcbiAgICAgICAgICAgICAgICAgICAgcHJldkFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLXByZXYgc2xpY2stYXJyb3cnIGFyaWEtbGFiZWw9J1ByZXZpb3VzIFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LXByZXY+PC91c2U+PC9zdmc+XCIsXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhvbWVQcm9kdWN0UmVjb21tZW5kZWQoKSB7XG4gICAgICAgIGNvbnN0ICRob21lUEdGID0gJCgnLmhvbWUyLWJsb2NrLXJlY29tbWVuZGVkJyk7XG4gICAgICAgIGNvbnN0ICRob21lUEdGX2dyaWQgPSAkaG9tZVBHRi5maW5kKCcucHJvZHVjdEdyaWQnKTtcbiAgICAgICAgY29uc3QgaG9tZVBHRl9pdGVtTGVuZ3RoID0gJGhvbWVQR0ZfZ3JpZC5maW5kKCcucHJvZHVjdCcpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgJGhvbWVQR0ZfYnRuQmxvY2sgPSAkKCcuaG9tZVBHRl9idG4nKTtcbiAgICAgICAgY29uc3QgJGhvbWVQR0ZfYnRuID0gJCgnLmhvbWVQR0ZfYnRuIGEnKTtcbiAgICAgICAgY29uc3QgZGF0YUNvbHVtbiA9ICRob21lUEdGX2dyaWQuZGF0YSgnY29sdW1ucycpO1xuICAgICAgICBsZXQgdHRfcHJvZHVjdFNob3c7XG5cbiAgICAgICAgaWYgKCRob21lUEdGLmxlbmd0aCAmJiBob21lUEdGX2l0ZW1MZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBmV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgICAgICAgICAgaWYgKGZXaWR0aCA+IDEyNzkgJiYgaG9tZVBHRl9pdGVtTGVuZ3RoID4gMTApIHtcbiAgICAgICAgICAgICAgICAkaG9tZVBHRl9idG5CbG9jay5hZGRDbGFzcygnaXMtc2hvdycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZldpZHRoIDw9IDEyNzkgJiYgZldpZHRoID4gOTkxICYmIGhvbWVQR0ZfaXRlbUxlbmd0aCA+IDgpIHtcbiAgICAgICAgICAgICAgICAkaG9tZVBHRl9idG5CbG9jay5hZGRDbGFzcygnaXMtc2hvdycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZldpZHRoIDw9IDk5MSAmJiBmV2lkdGggPiA3NjcgJiYgaG9tZVBHRl9pdGVtTGVuZ3RoID4gNikge1xuICAgICAgICAgICAgICAgICRob21lUEdGX2J0bkJsb2NrLmFkZENsYXNzKCdpcy1zaG93Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmV2lkdGggPD0gNzY3ICYmIGhvbWVQR0ZfaXRlbUxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgICAgICAkaG9tZVBHRl9idG5CbG9jay5hZGRDbGFzcygnaXMtc2hvdycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkaG9tZVBHRl9idG4ub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICAgICAgICAgICAgICBpZiAod1dpZHRoID4gMTI3OSkge1xuICAgICAgICAgICAgICAgICAgICB0dF9wcm9kdWN0U2hvdyA9IDEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh3V2lkdGggPD0gMTI3OSAmJiB3V2lkdGggPiA5OTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdHRfcHJvZHVjdFNob3cgPSA4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh3V2lkdGggPD0gOTkxICYmIHdXaWR0aCA+IDc2Nykge1xuICAgICAgICAgICAgICAgICAgICB0dF9wcm9kdWN0U2hvdyA9IDY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0dF9wcm9kdWN0U2hvdyA9IDQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCRob21lUEdGX2dyaWQuZmluZCgnLnByb2R1Y3Q6aGlkZGVuJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAkaG9tZVBHRl9ncmlkLmZpbmQoJy5wcm9kdWN0OmhpZGRlbjpsdCgnK3R0X3Byb2R1Y3RTaG93KycpJykuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkaG9tZVBHRl9ncmlkLmZpbmQoJy5wcm9kdWN0OmhpZGRlbicpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaG9tZVBHRl9idG4udGV4dCgnTm8gTW9yZSBQcm9kdWN0cycpLmF0dHIoJ2Rpc2FibGVkJywgJycpLmFkZENsYXNzKCdkaXNhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=