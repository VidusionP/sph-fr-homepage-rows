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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvcGFyYWxsYXgvanF1ZXJ5LnBhcmFsbGF4LXNjcm9sbC5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2hvbWUuanMiXSwibmFtZXMiOlsiZmV0Y2giLCJyZXF1aXJlIiwiY29udGV4dCIsIndyYXBwZXIiLCJ0aGVtZVNldHRpbmdzIiwiaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QiLCJjYWxsUHJvZHVjdE9wdGlvbiIsInByb2R1Y3RfY2xhc3MiLCJlYWNoIiwiaW5kZXgiLCJlbGVtZW50IiwicHJvZHVjdElkIiwiJCIsImRhdGEiLCJsaXN0IiwicHVzaCIsInRvU3RyaW5nIiwibGVuZ3RoIiwiZ2V0UHJvZHVjdE9wdGlvbiIsInRoZW4iLCJyZW5kZXJPcHRpb24iLCJpZHgiLCJpdGVtIiwiYXJyIiwicHJvZHVjdF93cmFwcGVyIiwiZmluZCIsInR4dCIsInJlbW92ZSIsImNvdW50TW9yZU9wdGlvbiIsInByb2R1Y3RMaW5rIiwiYXR0ciIsImFwcGVuZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0b2tlbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJyZXMiLCJqc29uIiwiYUZpbHRlciIsInNpdGUiLCJwcm9kdWN0cyIsImVkZ2VzIiwibm9kZSIsImVudGl0eUlkIiwicHJvZHVjdEZpZWxkQ29sb3IiLCJwcm9kdWN0RmllbGRTaXplIiwiYUZpbHRlcjIiLCJwcm9kdWN0T3B0aW9ucyIsImFGaWx0ZXIzIiwiZmlsdGVyIiwiZGlzcGxheVN0eWxlIiwiYUZpbHRlcjUiLCJkaXNwbGF5TmFtZSIsImhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0MiIsImFGaWx0ZXI0IiwidmFsdWVzIiwidGl0bGVWYXIiLCJsYWJlbCIsImlkVmFyIiwibGVuZ3RoQ29sb3JWYXIiLCJoZXhDb2xvcnMiLCJjb2xvcjEiLCJjb2xvcjIiLCJjb2xvcjMiLCJpbWciLCJpbWFnZVVybCIsIkJvb2xlYW4iLCJoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdFRleHQiLCJQYXJhbGxheFNjcm9sbCIsImluaXQiLCJzaG93TG9ncyIsInJvdW5kIiwiX2xvZyIsIl9pbml0ZWQiLCJfcmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYSIsImIiLCJzZXRUaW1lb3V0IiwiX29uU2Nyb2xsIiwiX3Byb3BlcnRpZXMiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJzY3JvbGxUb3AiLCJjIiwiaGVpZ2h0IiwicHJveHkiLCJkIiwiZSIsImYiLCJnIiwiaCIsImkiLCJrIiwiaiIsImwiLCJtIiwibiIsIk1hdGgiLCJtYXgiLCJvZmZzZXQiLCJ0b3AiLCJvIiwiZGlzdGFuY2UiLCJwIiwicSIsImVhc2luZyIsInIiLCJzIiwiZHVyYXRpb24iLCJ0IiwidSIsInYiLCJzbW9vdGhuZXNzIiwidyIsIm1pbiIsIm1hcCIsImNlaWwiLCJ6IiwieCIsInBlcnNwZWN0aXZlIiwieSIsInBhcmVudCIsInNjYWxlWCIsInNjYWxlWSIsInNjYWxlWiIsInNjYWxlIiwiQSIsInJvdGF0ZVgiLCJyb3RhdGVZIiwicm90YXRlWiIsIkIiLCJDIiwiSG9tZSIsIm9uUmVhZHkiLCJjb3VudERvd25IZXJvQ2Fyb3VzZWwiLCJjdXN0b21QYWdpbmciLCJsb2FkUHJvZHVjdEJ5Q2F0ZWdvcnkiLCJsb2FkUHJvZHVjdFRhYkJ5Q2F0ZWdvcnkiLCJsb2FkUHJvZHVjdEJ5Q2F0ZWdvcnlXaXRoQmFubmVyIiwiZmFuY3lib3hWaWRlb0Jhbm5lciIsImZhcXNUb2dnbGUiLCJyZWNlbnRCbG9nU2xpZGVyIiwiaG9tZVNwZWNpYWxQcm9kdWN0IiwiaG9tZVBhcmFsbGF4QmFubmVyIiwibG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkIiwiY3VzdG9tZXJSZXZpZXdDYXJvdXNlbCIsImhvbWVQcm9kdWN0UmVjb21tZW5kZWQiLCJwYXJlbnRzIiwiYWRkQ2xhc3MiLCJjb3VudERvd24iLCJjb3VudERvd25EYXRlIiwiRGF0ZSIsImdldFRpbWUiLCJzZWZ0IiwiY291bnRkb3duZnVuY3Rpb24iLCJzZXRJbnRlcnZhbCIsIm5vdyIsImNsZWFySW50ZXJ2YWwiLCJodG1sIiwiZGF5cyIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInN0ckNvdW50RG93biIsImhlcm9DdXN0b20iLCJoZXJvQ3VzdG9tU2xpZGUiLCJzbGljayIsImRvdHMiLCJhcnJvd3MiLCJtb2JpbGVGaXJzdCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwiaW5maW5pdGUiLCJhc05hdkZvciIsInNsaWRlIiwidGV4dCIsIm9uIiwiZXZlbnQiLCJzbGlkZXIiLCJwb3MiLCIkc2xpZGVzIiwicmVtb3ZlQ2xhc3MiLCJvcHRpb25zIiwidGVtcGxhdGUiLCJoZWFkZXJfaGVpZ2h0Iiwic2Nyb2xsIiwic2V0RmxhZyIsIndyYXAiLCJjYXRJZCIsImNhdFVybCIsImJsb2NrSWQiLCJsb2FkQ2F0ZWdvcnkiLCJpZCIsInVybCIsIm9wdGlvbiIsInV0aWxzIiwiYXBpIiwiZ2V0UGFnZSIsImVyciIsInJlc3BvbnNlIiwic2xpY2tDYXJvdXNlbCIsImhhbG9BZGRPcHRpb24iLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwicGFyc2VJbnQiLCJob21lX3Byb2R1Y3RfYmxvY2tfY29sIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsIiRpdGVtRWxlIiwiYmxvY2siLCJpbmNsdWRlcyIsImxvY2F0aW9uIiwiaG9zdCIsInJlcGxhY2UiLCJzaG93IiwicmV2aWV3U2hvdyIsImxpbWl0IiwicXVlcnlTZWxlY3RvckFsbCIsInJldmlldzIiLCJQcm9taXNlIiwiYWxsIiwiaXRlbTEiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJlbXB0eSIsInJldmlldzMiLCJ2aWR1IiwiaW5uZXJIVE1MIiwiZ29rdSIsInJldmlld0F2ZyIsInJlZHVjZSIsImNhdGNoIiwiaG9tZV9wcm9kdWN0X2Jsb2NrX3RhYl9jb2wiLCIkdGFiU29ydGluZyIsImhhc0NsYXNzIiwicHJldmVudERlZmF1bHQiLCIkdGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImRhdGFUYWIiLCIkdGhpc0Jsb2NrIiwiY2xvc2VzdCIsImhyZWYiLCJsYWJlbEZsYXNoRGVhbHMiLCJzbGlja0Nhcm91c2VsNCIsInNsaWNrQ2Fyb3VzZWwzIiwic2xpY2tDYXJvdXNlbDIiLCJob21lX3Byb2R1Y3RfYmxvY2tfd2l0aF9iYW5uZXJfY29sIiwiJGl0ZW1TaWRlIiwiJHRoaXNMYWJlbCIsImZhbmN5Ym94Iiwibm90Iiwic2xpZGVEb3duIiwic2xpZGVVcCIsIndpZHRoIiwicmVzaXplIiwiaG9tZV9wcm9kdWN0X2Jsb2NrX3NwZWNpYWwiLCJ2aWV3aW5nUHJvZHVjdCIsInZpZXdlclRleHQiLCJwcm9kdWN0X3ZpZXdpbmdQcm9kdWN0X3RleHQiLCJudW1iZXJzVmlld2VyX3RleHQiLCJwcm9kdWN0X3ZpZXdpbmdQcm9kdWN0X3ZpZXdlciIsIm51bWJlcnNWaWV3ZXJMaXN0IiwicGFyc2UiLCJudW1iZXJzVmlld2VySXRlbSIsInJhbmRvbSIsImNvdW50RG93blByb2R1Y3QiLCJzb2xkUHJvZHVjdCIsIm51bWJlcnNQcm9kdWN0X3RleHQiLCJwcm9kdWN0X3NvbGRQcm9kdWN0X3Byb2R1Y3RzIiwibnVtYmVyc0hvdXJzX3RleHQiLCJwcm9kdWN0X3NvbGRQcm9kdWN0X2hvdXJzIiwic29sZFByb2R1Y3RUZXh0IiwicHJvZHVjdF9zb2xkUHJvZHVjdF90ZXh0Iiwic29sZFByb2R1Y3RUZXh0MiIsInByb2R1Y3Rfc29sZFByb2R1Y3RfaG91cnNfdGV4dCIsIm51bWJlcnNQcm9kdWN0TGlzdCIsIm51bWJlcnNQcm9kdWN0SXRlbSIsIm51bWJlcnNIb3Vyc0xpc3QiLCJudW1iZXJzSG91cnNJdGVtIiwiaW5pdFRodW1ibmFpbHNIZWlnaHQiLCIkc2NvcGUiLCJlbCIsIiRjYXJvdXNlbF9uYXYiLCIkY2Fyb3VzZWxfZm9yIiwicHJvZHVjdCIsImdldEJ5SWQiLCJzY29wZSIsImdldCIsInNldFBvc2l0aW9uIiwiaGFsb05vdGlmeU1lIiwiaGFsb1lvdXR1YmVDYXJvdXNlbCIsInNpYmxpbmdzIiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwicHJvZHVjdERldGFpbHMiLCJQcm9kdWN0RGV0YWlscyIsInNldFByb2R1Y3RWYXJpYW50IiwiaW1hZ2UiLCJjc3MiLCIkcHJvZFdyYXBJZCIsImFkYXB0aXZlSGVpZ2h0IiwiJGhvbWVQR0YiLCIkaG9tZVBHRl9ncmlkIiwiaG9tZVBHRl9pdGVtTGVuZ3RoIiwiJGhvbWVQR0ZfYnRuQmxvY2siLCIkaG9tZVBHRl9idG4iLCJkYXRhQ29sdW1uIiwidHRfcHJvZHVjdFNob3ciLCJmV2lkdGgiLCJpbm5lcldpZHRoIiwid1dpZHRoIiwiUGFnZU1hbmFnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLHdEQUFELENBQXJCOztBQUVlLHlFQUFTQyxPQUFULEVBQWtCQyxPQUFsQixFQUEyQjtFQUN0QyxJQUFJRCxPQUFPLENBQUNFLGFBQVIsQ0FBc0JDLHVCQUF0QixJQUFpRCxJQUFyRCxFQUEyRDtJQUFBLElBTTlDQyxpQkFOOEMsR0FNdkQsU0FBU0EsaUJBQVQsR0FBNkI7TUFDekJDLGFBQWEsQ0FBQ0MsSUFBZCxDQUFtQixVQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBb0I7UUFDbkMsSUFBSUMsU0FBUyxHQUFHQyxDQUFD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LGNBQWMsR0FBRyxDQUFqQjtRQUNILENBRkksTUFHQSxJQUFJRyxNQUFNLElBQUksR0FBVixJQUFpQkEsTUFBTSxHQUFHLEdBQTlCLEVBQW1DO1VBQ3BDSCxjQUFjLEdBQUcsQ0FBakI7UUFDSCxDQUZJLE1BR0E7VUFDREEsY0FBYyxHQUFHLENBQWpCO1FBQ0g7O1FBRUQsSUFBSUwsYUFBYSxDQUFDclMsSUFBZCxDQUFtQixpQkFBbkIsRUFBc0NSLE1BQXRDLEdBQStDLENBQW5ELEVBQXNEO1VBQ2xENlMsYUFBYSxDQUFDclMsSUFBZCxDQUFtQix3QkFBc0IwUyxjQUF0QixHQUFxQyxHQUF4RCxFQUE2RFQsR0FBN0QsQ0FBaUUsU0FBakUsRUFBNEUsY0FBNUU7O1VBRUEsSUFBSUksYUFBYSxDQUFDclMsSUFBZCxDQUFtQixpQkFBbkIsRUFBc0NSLE1BQXRDLElBQWdELENBQXBELEVBQXVEO1lBQ25EZ1QsWUFBWSxDQUFDckksSUFBYixDQUFrQixrQkFBbEIsRUFBc0M5SixJQUF0QyxDQUEyQyxVQUEzQyxFQUF1RCxFQUF2RCxFQUEyRGdJLFFBQTNELENBQW9FLFNBQXBFO1VBQ0g7UUFDSjtNQUNKLENBeEJEO0lBeUJIO0VBQ0osQzs7O0VBcCtCNkJ5SyxxRCIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQsIHdyYXBwZXIpIHtcbiAgICBpZiAoY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0ID09IHRydWUpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBjb250ZXh0LnRva2VuLFxuICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyID0gJCgnIycrd3JhcHBlciksXG4gICAgICAgICAgICBwcm9kdWN0X2NsYXNzID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkJyk7XG4gICAgICAgIHZhciAgbGlzdCA9IFtdO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNhbGxQcm9kdWN0T3B0aW9uKCkge1xuICAgICAgICAgICAgcHJvZHVjdF9jbGFzcy5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0SWQgPSAkKGVsZW1lbnQpLmRhdGEoXCJwcm9kdWN0LWlkXCIpO1xuXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKHByb2R1Y3RJZC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZihsaXN0Lmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIGdldFByb2R1Y3RPcHRpb24obGlzdCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uKGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaChsaXN0LCAoaWR4LCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0ge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkID0gbGlzdFtpZHhdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR4dCA9ICQoZWxlbWVudCkuZGF0YSgncHJvZHVjdC1zd2F0Y2gtdmFsdWUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJbdHh0XSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyW3R4dF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmxlbmd0aCA+IDQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb3VudE1vcmVPcHRpb24gID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLW9wdGlvbi1zd2F0Y2gnKS5sZW5ndGggLSA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TGluayA9IHByb2R1Y3Rfd3JhcHBlci5maW5kKCdbZGF0YS1wcm9kdWN0LWlkPVwiJytwcm9kdWN0SWQrJ1wiXScpLmZpbmQoJy5jYXJkLWxpbmsnKS5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGluZGV4ID49IDQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLWZpZWxkIC5zaG93bW9yZScpLmxlbmd0aCA8IDEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tZmllbGQ6bm90KC5mb3JtLWZpZWxkLS1zaXplKScpLmFwcGVuZCgnPGEgaHJlZj1cIicrcHJvZHVjdExpbmsrJ1wiIGNsYXNzPVwic2hvd21vcmVcIj4rJytjb3VudE1vcmVPcHRpb24rJzwvYT4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRQcm9kdWN0T3B0aW9uKGxpc3Qpe1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoKCcvZ3JhcGhxbCcsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0b2tlblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgcXVlcnk6IGBcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkgU2V2ZXJhbFByb2R1Y3RzQnlJRCB7XG4gICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cyhlbnRpdHlJZHM6IFtgK2xpc3QrYF0sIGZpcnN0OiA1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RPcHRpb25zKGZpcnN0OiA1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBNdWx0aXBsZUNob2ljZU9wdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlTdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIFN3YXRjaE9wdGlvblZhbHVlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZXhDb2xvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybCh3aWR0aDogNTApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGB9KSxcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlck9wdGlvbihkYXRhKXtcbiAgICAgICAgICAgIHZhciBhRmlsdGVyID0gZGF0YS5zaXRlLnByb2R1Y3RzLmVkZ2VzO1xuXG4gICAgICAgICAgICAkLmVhY2goYUZpbHRlciwgKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RJZCA9IGFGaWx0ZXJbaW5kZXhdLm5vZGUuZW50aXR5SWQsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLWZpZWxkOm5vdCguZm9ybS1maWVsZC0tc2l6ZSknKSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkU2l6ZSA9IHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1maWVsZC0tc2l6ZScpLFxuICAgICAgICAgICAgICAgICAgICBhRmlsdGVyMiA9IGFGaWx0ZXJbaW5kZXhdLm5vZGUucHJvZHVjdE9wdGlvbnMuZWRnZXM7XG5cbiAgICAgICAgICAgICAgICB2YXIgYUZpbHRlcjMgPSBhRmlsdGVyMi5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubm9kZS5kaXNwbGF5U3R5bGUgPT09ICdTd2F0Y2gnO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdmFyIGFGaWx0ZXI1ID0gYUZpbHRlcjIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLm5vZGUuZGlzcGxheU5hbWUgPT09IGNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdDI7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZihhRmlsdGVyMy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFGaWx0ZXI0ID0gYUZpbHRlcjNbMF0ubm9kZS52YWx1ZXMuZWRnZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGFGaWx0ZXI0LCAoaWR4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGl0bGVWYXIgPSBhRmlsdGVyNFtpZHhdLm5vZGUubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRWYXIgPSBhRmlsdGVyNFtpZHhdLm5vZGUuZW50aXR5SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoQ29sb3JWYXIgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaGV4Q29sb3JzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjEgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaGV4Q29sb3JzWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yMiA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5oZXhDb2xvcnNbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IzID0gYUZpbHRlcjRbaWR4XS5ub2RlLmhleENvbG9yc1syXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaW1hZ2VVcmw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGxlbmd0aENvbG9yVmFyID09IDIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yLmFwcGVuZCgnPGxhYmVsIGNsYXNzPVwiZm9ybS1vcHRpb24gZm9ybS1vcHRpb24tc3dhdGNoXCIgZGF0YS1wcm9kdWN0LXN3YXRjaC12YWx1ZT1cIicraWRWYXIrJ1wiPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdG9vbHRpcFwiPicrdGl0bGVWYXIrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXZhcmlhbnQgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IyXCIgdGl0bGU9XCInK3RpdGxlVmFyKydcIj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jytjb2xvcjErJ1wiPjwvc3Bhbj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jytjb2xvcjIrJ1wiPjwvc3Bhbj48L3NwYW4+PC9sYWJlbD4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihsZW5ndGhDb2xvclZhciA9PT0gMyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IuYXBwZW5kKCc8bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvbiBmb3JtLW9wdGlvbi1zd2F0Y2hcIiBkYXRhLXByb2R1Y3Qtc3dhdGNoLXZhbHVlPVwiJytpZFZhcisnXCI+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi10b29sdGlwXCI+Jyt0aXRsZVZhcisnPC9zcGFuPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvciBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcjJcIiB0aXRsZT1cIicrdGl0bGVWYXIrJ1wiPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMSsnXCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMisnXCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMysnXCI+PC9zcGFuPjwvc3Bhbj48L2xhYmVsPicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKEJvb2xlYW4oY29sb3IxKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IuYXBwZW5kKCc8bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvbiBmb3JtLW9wdGlvbi1zd2F0Y2hcIiBkYXRhLXByb2R1Y3Qtc3dhdGNoLXZhbHVlPVwiJytpZFZhcisnXCI+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi10b29sdGlwXCI+Jyt0aXRsZVZhcisnPC9zcGFuPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvclwiIHRpdGxlPVwiJyt0aXRsZVZhcisnXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAnK2NvbG9yMSsnXCI+PC9zcGFuPjwvbGFiZWw+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoQm9vbGVhbihpbWcpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvci5hcHBlbmQoJzxsYWJlbCBjbGFzcz1cImZvcm0tb3B0aW9uIGZvcm0tb3B0aW9uLXN3YXRjaFwiIGRhdGEtcHJvZHVjdC1zd2F0Y2gtdmFsdWU9XCInK2lkVmFyKydcIj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXRvb2x0aXBcIj4nK3RpdGxlVmFyKyc8L3NwYW4+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLXBhdHRlcm5cIiB0aXRsZT1cIicrdGl0bGVWYXIrJ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCcraW1nKycpXCI+PC9zcGFuPjwvbGFiZWw+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoYUZpbHRlcjUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKHByb2R1Y3RGaWVsZFNpemUubGVuZ3RoIDwgMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLXNpemVcIj48bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvblwiPicrY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0VGV4dC50b1N0cmluZygpKyc8L2xhYmVsPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoKGFGaWx0ZXI1Lmxlbmd0aCA9PSAwKSAmJiAoYUZpbHRlcjMubGVuZ3RoID09IDApKXtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsUHJvZHVjdE9wdGlvbigpO1xuICAgIH1cbn1cbiIsIiQoZnVuY3Rpb24oKXtQYXJhbGxheFNjcm9sbC5pbml0KCl9KTt2YXIgUGFyYWxsYXhTY3JvbGw9e3Nob3dMb2dzOiExLHJvdW5kOjFlMyxpbml0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2xvZyhcImluaXRcIiksdGhpcy5faW5pdGVkPyh0aGlzLl9sb2coXCJBbHJlYWR5IEluaXRlZFwiKSx2b2lkKHRoaXMuX2luaXRlZD0hMCkpOih0aGlzLl9yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9ZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24oYSxiKXt3aW5kb3cuc2V0VGltZW91dChhLDFlMy82MCl9fSgpLHZvaWQgdGhpcy5fb25TY3JvbGwoITApKX0sX2luaXRlZDohMSxfcHJvcGVydGllczpbXCJ4XCIsXCJ5XCIsXCJ6XCIsXCJyb3RhdGVYXCIsXCJyb3RhdGVZXCIsXCJyb3RhdGVaXCIsXCJzY2FsZVhcIixcInNjYWxlWVwiLFwic2NhbGVaXCIsXCJzY2FsZVwiXSxfcmVxdWVzdEFuaW1hdGlvbkZyYW1lOm51bGwsX2xvZzpmdW5jdGlvbihhKXt0aGlzLnNob3dMb2dzJiZjb25zb2xlLmxvZyhcIlBhcmFsbGF4IFNjcm9sbCAvIFwiK2EpfSxfb25TY3JvbGw6ZnVuY3Rpb24oYSl7dmFyIGI9JChkb2N1bWVudCkuc2Nyb2xsVG9wKCksYz0kKHdpbmRvdykuaGVpZ2h0KCk7dGhpcy5fbG9nKFwib25TY3JvbGwgXCIrYiksJChcIltkYXRhLXBhcmFsbGF4XVwiKS5lYWNoKCQucHJveHkoZnVuY3Rpb24oZCxlKXt2YXIgZj0kKGUpLGc9W10saD0hMSxpPWYuZGF0YShcInN0eWxlXCIpO3ZvaWQgMD09aSYmKGk9Zi5hdHRyKFwic3R5bGVcIil8fFwiXCIsZi5kYXRhKFwic3R5bGVcIixpKSk7dmFyIGssaj1bZi5kYXRhKFwicGFyYWxsYXhcIildO2ZvcihrPTI7Zi5kYXRhKFwicGFyYWxsYXhcIitrKTtrKyspai5wdXNoKGYuZGF0YShcInBhcmFsbGF4LVwiK2spKTt2YXIgbD1qLmxlbmd0aDtmb3Ioaz0wO2s8bDtrKyspe3ZhciBtPWpba10sbj1tW1wiZnJvbS1zY3JvbGxcIl07dm9pZCAwPT1uJiYobj1NYXRoLm1heCgwLCQoZSkub2Zmc2V0KCkudG9wLWMpKSxuPTB8bjt2YXIgbz1tLmRpc3RhbmNlLHA9bVtcInRvLXNjcm9sbFwiXTt2b2lkIDA9PW8mJnZvaWQgMD09cCYmKG89Yyksbz1NYXRoLm1heCgwfG8sMSk7dmFyIHE9bS5lYXNpbmcscj1tW1wiZWFzaW5nLXJldHVyblwiXTtpZih2b2lkIDAhPXEmJiQuZWFzaW5nJiYkLmVhc2luZ1txXXx8KHE9bnVsbCksdm9pZCAwIT1yJiYkLmVhc2luZyYmJC5lYXNpbmdbcl18fChyPXEpLHEpe3ZhciBzPW0uZHVyYXRpb247dm9pZCAwPT1zJiYocz1vKSxzPU1hdGgubWF4KDB8cywxKTt2YXIgdD1tW1wiZHVyYXRpb24tcmV0dXJuXCJdO3ZvaWQgMD09dCYmKHQ9cyksbz0xO3ZhciB1PWYuZGF0YShcImN1cnJlbnQtdGltZVwiKTt2b2lkIDA9PXUmJih1PTApfXZvaWQgMD09cCYmKHA9bitvKSxwPTB8cDt2YXIgdj1tLnNtb290aG5lc3M7dm9pZCAwPT12JiYodj0zMCksdj0wfHYsKGF8fDA9PXYpJiYodj0xKSx2PTB8djt2YXIgdz1iO3c9TWF0aC5tYXgodyxuKSx3PU1hdGgubWluKHcscCkscSYmKHZvaWQgMD09Zi5kYXRhKFwic2Vuc1wiKSYmZi5kYXRhKFwic2Vuc1wiLFwiYmFja1wiKSx3Pm4mJihcImJhY2tcIj09Zi5kYXRhKFwic2Vuc1wiKT8odT0xLGYuZGF0YShcInNlbnNcIixcImdvXCIpKTp1KyspLHc8cCYmKFwiZ29cIj09Zi5kYXRhKFwic2Vuc1wiKT8odT0xLGYuZGF0YShcInNlbnNcIixcImJhY2tcIikpOnUrKyksYSYmKHU9cyksZi5kYXRhKFwiY3VycmVudC10aW1lXCIsdSkpLHRoaXMuX3Byb3BlcnRpZXMubWFwKCQucHJveHkoZnVuY3Rpb24oYSl7dmFyIGI9MCxjPW1bYV07aWYodm9pZCAwIT1jKXtcInNjYWxlXCI9PWF8fFwic2NhbGVYXCI9PWF8fFwic2NhbGVZXCI9PWF8fFwic2NhbGVaXCI9PWE/Yj0xOmM9MHxjO3ZhciBkPWYuZGF0YShcIl9cIithKTt2b2lkIDA9PWQmJihkPWIpO3ZhciBlPShjLWIpKigody1uKS8ocC1uKSkrYixpPWQrKGUtZCkvdjtpZihxJiZ1PjAmJnU8PXMpe3ZhciBqPWI7XCJiYWNrXCI9PWYuZGF0YShcInNlbnNcIikmJihqPWMsYz0tYyxxPXIscz10KSxpPSQuZWFzaW5nW3FdKG51bGwsdSxqLGMscyl9aT1NYXRoLmNlaWwoaSp0aGlzLnJvdW5kKS90aGlzLnJvdW5kLGk9PWQmJmU9PWMmJihpPWMpLGdbYV18fChnW2FdPTApLGdbYV0rPWksZCE9Z1thXSYmKGYuZGF0YShcIl9cIithLGdbYV0pLGg9ITApfX0sdGhpcykpfWlmKGgpe2lmKHZvaWQgMCE9Zy56KXt2YXIgeD1tLnBlcnNwZWN0aXZlO3ZvaWQgMD09eCYmKHg9ODAwKTt2YXIgeT1mLnBhcmVudCgpO3kuZGF0YShcInN0eWxlXCIpfHx5LmRhdGEoXCJzdHlsZVwiLHkuYXR0cihcInN0eWxlXCIpfHxcIlwiKSx5LmF0dHIoXCJzdHlsZVwiLFwicGVyc3BlY3RpdmU6XCIreCtcInB4OyAtd2Via2l0LXBlcnNwZWN0aXZlOlwiK3grXCJweDsgXCIreS5kYXRhKFwic3R5bGVcIikpfXZvaWQgMD09Zy5zY2FsZVgmJihnLnNjYWxlWD0xKSx2b2lkIDA9PWcuc2NhbGVZJiYoZy5zY2FsZVk9MSksdm9pZCAwPT1nLnNjYWxlWiYmKGcuc2NhbGVaPTEpLHZvaWQgMCE9Zy5zY2FsZSYmKGcuc2NhbGVYKj1nLnNjYWxlLGcuc2NhbGVZKj1nLnNjYWxlLGcuc2NhbGVaKj1nLnNjYWxlKTt2YXIgej1cInRyYW5zbGF0ZTNkKFwiKyhnLng/Zy54OjApK1wicHgsIFwiKyhnLnk/Zy55OjApK1wicHgsIFwiKyhnLno/Zy56OjApK1wicHgpXCIsQT1cInJvdGF0ZVgoXCIrKGcucm90YXRlWD9nLnJvdGF0ZVg6MCkrXCJkZWcpIHJvdGF0ZVkoXCIrKGcucm90YXRlWT9nLnJvdGF0ZVk6MCkrXCJkZWcpIHJvdGF0ZVooXCIrKGcucm90YXRlWj9nLnJvdGF0ZVo6MCkrXCJkZWcpXCIsQj1cInNjYWxlWChcIitnLnNjYWxlWCtcIikgc2NhbGVZKFwiK2cuc2NhbGVZK1wiKSBzY2FsZVooXCIrZy5zY2FsZVorXCIpXCIsQz16K1wiIFwiK0ErXCIgXCIrQitcIjtcIjt0aGlzLl9sb2coQyksZi5hdHRyKFwic3R5bGVcIixcInRyYW5zZm9ybTpcIitDK1wiIC13ZWJraXQtdHJhbnNmb3JtOlwiK0MrXCIgXCIraSl9fSx0aGlzKSksd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT93aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCQucHJveHkodGhpcy5fb25TY3JvbGwsdGhpcywhMSkpOnRoaXMuX3JlcXVlc3RBbmltYXRpb25GcmFtZSgkLnByb3h5KHRoaXMuX29uU2Nyb2xsLHRoaXMsITEpKX19O1xuIiwiaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbic7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLmRyb3Bkb3duJztcbmltcG9ydCBmYW5jeWJveCBmcm9tICcuL2hhbG90aGVtZXMvanF1ZXJ5LmZhbmN5Ym94Lm1pbic7XG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBoYWxvQWRkT3B0aW9uIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdENhcmQnO1xuaW1wb3J0IHBhcmFsbGF4IGZyb20gJy4vaGFsb3RoZW1lcy9wYXJhbGxheC9qcXVlcnkucGFyYWxsYXgtc2Nyb2xsLm1pbic7XG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSAnLi9jb21tb24vcHJvZHVjdC1kZXRhaWxzJztcbmltcG9ydCB7IGRlZmF1bHRNb2RhbCwgbW9kYWxUeXBlcyB9IGZyb20gJy4vZ2xvYmFsL21vZGFsJztcbmltcG9ydCBoYWxvWW91dHViZUNhcm91c2VsIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvVmlkZW8nO1xuaW1wb3J0IGhhbG9Ob3RpZnlNZSBmcm9tICcuL2hhbG90aGVtZXMvaGFsb05vdGlmeU1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIHRoaXMuY291bnREb3duSGVyb0Nhcm91c2VsKCk7XG4gICAgICAgIHRoaXMuY3VzdG9tUGFnaW5nKCk7XG4gICAgICAgIHRoaXMubG9hZFByb2R1Y3RCeUNhdGVnb3J5KCk7XG4gICAgICAgIHRoaXMubG9hZFByb2R1Y3RUYWJCeUNhdGVnb3J5KCk7XG4gICAgICAgIHRoaXMubG9hZFByb2R1Y3RCeUNhdGVnb3J5V2l0aEJhbm5lcigpO1xuICAgICAgICB0aGlzLmZhbmN5Ym94VmlkZW9CYW5uZXIoKTtcbiAgICAgICAgdGhpcy5mYXFzVG9nZ2xlKCk7XG4gICAgICAgIHRoaXMucmVjZW50QmxvZ1NsaWRlcigpO1xuICAgICAgICB0aGlzLmhvbWVTcGVjaWFsUHJvZHVjdCgpO1xuICAgICAgICB0aGlzLmhvbWVQYXJhbGxheEJhbm5lcigpO1xuICAgICAgICB0aGlzLmxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZCgpO1xuICAgICAgICB0aGlzLmN1c3RvbWVyUmV2aWV3Q2Fyb3VzZWwoKTtcbiAgICAgICAgdGhpcy5ob21lUHJvZHVjdFJlY29tbWVuZGVkKCk7XG4gICAgfVxuXG4gICAgY291bnREb3duSGVyb0Nhcm91c2VsKCkge1xuICAgICAgICAkKCcuaGVyb0Nhcm91c2VsLWNvdW50ZG93bicpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLnBhcmVudHMoJy5zbGljay1zbGlkZScpLmFkZENsYXNzKCdoYXMtY291bnQtZG93bicpO1xuXG4gICAgICAgICAgICB2YXIgY291bnREb3duID0gJChlbGVtZW50KS5kYXRhKCdjYXJvdXNlbC1jb3VudGRvd24nKSxcbiAgICAgICAgICAgICAgICBjb3VudERvd25EYXRlID0gbmV3IERhdGUoY291bnREb3duKS5nZXRUaW1lKCksXG4gICAgICAgICAgICAgICAgc2VmdCA9ICQoZWxlbWVudCk7XG5cbiAgICAgICAgICAgIHZhciBjb3VudGRvd25mdW5jdGlvbiA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRkb3duZnVuY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICBzZWZ0Lmh0bWwoJycpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBob3VycyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RyQ291bnREb3duID0gXCI8c3BhbiBjbGFzcz0nbnVtJz5cIitkYXlzK1wiPHNwYW4+REFZUzwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9J251bSc+XCIraG91cnMrXCI8c3Bhbj5IT1VSUzwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9J251bSc+XCIrbWludXRlcytcIjxzcGFuPk1JTlM8L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPSdudW0nPlwiK3NlY29uZHMrXCI8c3Bhbj5TRUNTPC9zcGFuPjwvc3Bhbj5cIjtcblxuICAgICAgICAgICAgICAgICAgICBzZWZ0Lmh0bWwoc3RyQ291bnREb3duKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3VzdG9tUGFnaW5nKCl7XG4gICAgICAgIGNvbnN0IGhlcm9DdXN0b20gPSAkKCcuaGVyb0Nhcm91c2VsLWN1c3RvbScpO1xuICAgICAgICBjb25zdCBoZXJvQ3VzdG9tU2xpZGUgPSAkKCcuaGVyb0Nhcm91c2VsLWN1c3RvbSAuc2xpY2stZG90cyBsaScpO1xuICAgICAgICBoZXJvQ3VzdG9tLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IGhlcm9DdXN0b20uZGF0YSgnYXV0b3BsYXknKSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgYXNOYXZGb3I6IFwiLmhlcm9DYXJvdXNlbFwiXG4gICAgICAgIH0pO1xuICAgICAgICAvL0FEQVxuICAgICAgICAkKCcuaGVyb0Nhcm91c2VsLWN1c3RvbSAuc2xpY2stZG90cyBsaScpLmVhY2goZnVuY3Rpb24oaSl7XG4gICAgICAgICAgICB2YXIgc2xpZGUgPSAkKHRoaXMpLmZpbmQoJ2J1dHRvbicpLnRleHQoKTtcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnYnV0dG9uJykudGV4dCgnMCcgKyBzbGlkZSkuYWRkQ2xhc3MoJ3NsaWNrLWRvdHMtaXRlbScpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGhlcm9DdXN0b20ub24oJ2FmdGVyQ2hhbmdlJywgKGV2ZW50LCBzbGlkZXIsIGkpID0+IHtcbiAgICAgICAgICAgIHZhciBwb3MgPSAkKHNsaWRlci4kc2xpZGVzW2ldKS5maW5kKCdkaXZbZGF0YS1wb3NpdGlvbl0nKS5kYXRhKCdwb3NpdGlvbicpO1xuXG4gICAgICAgICAgICBpZihwb3MgPT09ICdyaWdodCcpe1xuICAgICAgICAgICAgICAgIGhlcm9DdXN0b20ucmVtb3ZlQ2xhc3MoJ2hlcm9DYXJvdXNlbC1jdXN0b21MZWZ0JykuYWRkQ2xhc3MoJ2hlcm9DYXJvdXNlbC1jdXN0b21SaWdodCcpO1xuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgIGhlcm9DdXN0b20ucmVtb3ZlQ2xhc3MoJ2hlcm9DYXJvdXNlbC1jdXN0b21SaWdodCcpLmFkZENsYXNzKCdoZXJvQ2Fyb3VzZWwtY3VzdG9tTGVmdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGlmICgkKCcuaGVyb0Nhcm91c2VsLXNsaWRlLS1maXJzdCAuaGVyb0Nhcm91c2VsLWNvbnRlbnQtd3JhcHBlciAuaGVyb0Nhcm91c2VsLWNvbnRlbnQtLXJpZ2h0JykubGVuZ3RoKSB7XG4gICAgICAgICAgICBoZXJvQ3VzdG9tLnJlbW92ZUNsYXNzKCdoZXJvQ2Fyb3VzZWwtY3VzdG9tTGVmdCcpLmFkZENsYXNzKCdoZXJvQ2Fyb3VzZWwtY3VzdG9tUmlnaHQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRQcm9kdWN0QnlDYXRlZ29yeSgpe1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3Byb2R1Y3RzL2Nhcm91c2VsLTInXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYoJCgnLmhhbG8tYmxvY2tbZGF0YS1jYXRlZ29yeS1pZF0nKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIHZhciAgaGVhZGVyX2hlaWdodCA9ICQoJy5oZWFkZXInKS5oZWlnaHQoKTtcblxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwgbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmIChzY3JvbGwgPiBoZWFkZXJfaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHNldEZsYWcpe1xuICAgICAgICAgICAgICAgICAgICAkKCcuaGFsby1ibG9ja1tkYXRhLWNhdGVnb3J5LWlkXScpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgd3JhcCA9ICQoZWxlbWVudCkuZmluZCgnLnByb2R1Y3RDYXJvdXNlbCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdElkID0gJChlbGVtZW50KS5kYXRhKCdkYXRhLWNhdGVnb3J5JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0VXJsID0gJChlbGVtZW50KS5kYXRhKCdjYXRlZ29yeS11cmwnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja0lkID0gJChlbGVtZW50KS5hdHRyKCdpZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighJCgnI3Byb2R1Y3QtYnktY2F0ZS0nK2NhdElkKycgLnByb2R1Y3RDYXJvdXNlbCAucHJvZHVjdENhcm91c2VsLXNsaWRlJykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkQ2F0ZWdvcnkoY2F0SWQsIGNhdFVybCwgb3B0aW9ucywgd3JhcCwgYmxvY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRDYXRlZ29yeShpZCwgdXJsLCBvcHRpb24sIHdyYXAsIGJsb2NrSWQpe1xuICAgICAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UodXJsLCBvcHRpb24sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoIXdyYXAuZmluZCgnLnByb2R1Y3RDYXJvdXNlbC1zbGlkZScpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgIHdyYXAuaHRtbChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHNsaWNrQ2Fyb3VzZWwod3JhcCk7XG4gICAgICAgICAgICAgICAgICAgIHdyYXAucGFyZW50cygnLmhhbG8tYmxvY2tbZGF0YS1jYXRlZ29yeS1pZF0nKS5maW5kKCcubG9hZGluZ092ZXJsYXknKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uKGNvbnRleHQsIGJsb2NrSWQpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7IFxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2xpY2tDYXJvdXNlbCh3cmFwKXtcbiAgICAgICAgICAgIHdyYXAuc2xpY2soe1xuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1uZXh0IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdOZXh0IFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LW5leHQ+PC91c2U+PC9zdmc+XCIsIFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1wcmV2IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdQcmV2aW91cyBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1wcmV2PjwvdXNlPjwvc3ZnPlwiLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfY29sKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogcGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLmhvbWVfcHJvZHVjdF9ibG9ja19jb2wpIC0gMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogcGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLmhvbWVfcHJvZHVjdF9ibG9ja19jb2wpIC0gMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZFByb2R1Y3RUYWJCeUNhdGVnb3J5KCl7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAncHJvZHVjdHMvY2Fyb3VzZWwtMydcbiAgICAgICAgfTtcbiAgICAgICAgaWYoJCgnLnByb2R1Y3RDYXJvdXNlbC10YWJzJykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBpZighJCgnLnByb2R1Y3RDYXJvdXNlbC10YWJzIC50YWItY29udGVudC5pcy1hY3RpdmUgLnByb2R1Y3RDYXJvdXNlbCAucHJvZHVjdENhcm91c2VsLXNsaWRlJykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKCQoJy50YWItY29udGVudC5pcy1hY3RpdmUnKSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgJGl0ZW1FbGUgPSAkKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIHZhciBibG9jayA9ICRpdGVtRWxlLFxuICAgICAgICAgICAgICAgICAgICB3cmFwID0gYmxvY2suZmluZCgnLnByb2R1Y3RDYXJvdXNlbCcpLFxuICAgICAgICAgICAgICAgICAgICBjYXRJZCA9IGJsb2NrLmRhdGEoJ3RhYi1jYXRlZ29yeS1pZCcpLFxuICAgICAgICAgICAgICAgICAgICBjYXRVcmwgPSBibG9jay5kYXRhKCd0YWItY2F0ZWdvcnktdXJsJyksXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrSWQgPSBibG9jay5hdHRyKCdpZCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNhdFVybC5pbmNsdWRlcyhcImh0dHBcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uLmhvc3QuaW5jbHVkZXMoXCJlbi5zdXBlcmhhaXJwaWVjZXMuZnJcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdFVybCA9IGNhdFVybC5yZXBsYWNlKFwiLy9zdXBlcmhhaXJwaWVjZXMuZnJcIixcIi8vZW4uc3VwZXJoYWlycGllY2VzLmZyXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCEkKCcucHJvZHVjdENhcm91c2VsLXRhYnMgLnRhYi1jb250ZW50LmlzLWFjdGl2ZSAucHJvZHVjdENhcm91c2VsIC5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhibG9jay5maW5kKCcubG9hZGluZ092ZXJsYXknKSlcbiAgICAgICAgICAgICAgICAgICAgYmxvY2suZmluZCgnLmxvYWRpbmdPdmVybGF5Jykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICBsb2FkQ2F0ZWdvcnkoY2F0SWQsIGNhdFVybCwgb3B0aW9ucywgd3JhcCwgYmxvY2tJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYoJCgnLnByb2R1Y3RDYXJvdXNlbC10YWJzJykubGVuZ3RoID4gMCl7XG4gICAgICAgIC8vICAgICBpZighJCgnLnByb2R1Y3RDYXJvdXNlbC10YWJzIC50YWItY29udGVudC5pcy1hY3RpdmUgLnByb2R1Y3RDYXJvdXNlbCAucHJvZHVjdENhcm91c2VsLXNsaWRlJykubGVuZ3RoKXtcbiAgICAgICAgLy8gICAgICAgICB2YXIgYmxvY2sgPSAkKCcucHJvZHVjdENhcm91c2VsLXRhYnMgLnRhYi1jb250ZW50LmlzLWFjdGl2ZScpLFxuICAgICAgICAvLyAgICAgICAgICAgICB3cmFwID0gYmxvY2suZmluZCgnLnByb2R1Y3RDYXJvdXNlbCcpLFxuICAgICAgICAvLyAgICAgICAgICAgICBjYXRJZCA9IGJsb2NrLmRhdGEoJ3RhYi1jYXRlZ29yeS1pZCcpLFxuICAgICAgICAvLyAgICAgICAgICAgICBjYXRVcmwgPSBibG9jay5kYXRhKCd0YWItY2F0ZWdvcnktdXJsJyksXG4gICAgICAgIC8vICAgICAgICAgICAgIGJsb2NrSWQgPSBibG9jay5hdHRyKCdpZCcpO1xuXG4gICAgICAgIC8vICAgICAgICAgaWYgKGNhdFVybC5pbmNsdWRlcyhcImh0dHBcIikpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGxvY2F0aW9uLmhvc3QuaW5jbHVkZXMoXCJlbi5zdXBlcmhhaXJwaWVjZXMuZnJcIikpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNhdFVybCA9IGNhdFVybC5yZXBsYWNlKFwiLy9zdXBlcmhhaXJwaWVjZXMuZnJcIixcIi8vZW4uc3VwZXJoYWlycGllY2VzLmZyXCIpO1xuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIGlmKCEkKCcucHJvZHVjdENhcm91c2VsLXRhYnMgLnRhYi1jb250ZW50LmlzLWFjdGl2ZSAucHJvZHVjdENhcm91c2VsIC5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKS5sZW5ndGgpe1xuICAgICAgICAvLyAgICAgICAgICAgICBibG9jay5maW5kKCcubG9hZGluZ092ZXJsYXknKS5zaG93KCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGxvYWRDYXRlZ29yeShjYXRJZCwgY2F0VXJsLCBvcHRpb25zLCB3cmFwLCBibG9ja0lkKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgLy8gICAgICQoJy5wcm9kdWN0Q2Fyb3VzZWwtdGFicyBbZGF0YS10YWJdJykub24oJ3RvZ2dsZWQnLCAoZXZlbnQsIHRhYikgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGlmKCEkKCcucHJvZHVjdENhcm91c2VsLXRhYnMgLnRhYi1jb250ZW50LmlzLWFjdGl2ZSAucHJvZHVjdENhcm91c2VsIC5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKS5sZW5ndGgpe1xuICAgICAgICAvLyAgICAgICAgICAgICB2YXIgYmxvY2sgPSAkKCcucHJvZHVjdENhcm91c2VsLXRhYnMgLnRhYi1jb250ZW50LmlzLWFjdGl2ZScpLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgd3JhcCA9IGJsb2NrLmZpbmQoJy5wcm9kdWN0Q2Fyb3VzZWwnKSxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNhdElkID0gYmxvY2suZGF0YSgndGFiLWNhdGVnb3J5LWlkJyksXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjYXRVcmwgPSBibG9jay5kYXRhKCd0YWItY2F0ZWdvcnktdXJsJyksXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBibG9ja0lkID0gYmxvY2suYXR0cignaWQnKTtcblxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAoY2F0VXJsLmluY2x1ZGVzKFwiaHR0cFwiKSkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uLmhvc3QuaW5jbHVkZXMoXCJlbi5zdXBlcmhhaXJwaWVjZXMuZnJcIikpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBjYXRVcmwgPSBjYXRVcmwucmVwbGFjZShcIi8vc3VwZXJoYWlycGllY2VzLmZyXCIsXCIvL2VuLnN1cGVyaGFpcnBpZWNlcy5mclwiKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICAgICAgfVxuXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmKCEkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmZpbmQoJy5wcm9kdWN0Q2Fyb3VzZWwnKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSl7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBibG9jay5maW5kKCcubG9hZGluZ092ZXJsYXknKS5zaG93KCk7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBsb2FkQ2F0ZWdvcnkoY2F0SWQsIGNhdFVybCwgb3B0aW9ucywgd3JhcCwgYmxvY2tJZCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gfVxuICAgICAgICBmdW5jdGlvbiByZXZpZXdTaG93KHgpIHtcbiAgICAgICAgICAgIHZhciBsaW1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXZpZXdDYXJkMScpO1xuICAgIFxuICAgICAgICAgICAgbGV0IHJldmlldzIgPSBbXVxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly93d3cudGVhbWRlc2submV0L3NlY3VyZS9hcGkvdjIvNTY1NTQvQkVBMjU2NjU5MEVGNEQxNEFBOEQzNUFEMEUyQ0VBNzcvUmV2aWV3L3NlbGVjdC5qc29uXCIpLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihyPT57XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzIucHVzaCguLi5yKX0pLFxuICAgICAgICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly93d3cudGVhbWRlc2submV0L3NlY3VyZS9hcGkvdjIvNTY1NTQvQkVBMjU2NjU5MEVGNEQxNEFBOEQzNUFEMEUyQ0VBNzcvUmV2aWV3L3NlbGVjdC5qc29uP3NraXA9NTAwXCIpLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihyPT57XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzIucHVzaCguLi5yKX0pLFxuICAgICAgICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly93d3cudGVhbWRlc2submV0L3NlY3VyZS9hcGkvdjIvNTY1NTQvQkVBMjU2NjU5MEVGNEQxNEFBOEQzNUFEMEUyQ0VBNzcvUmV2aWV3L3NlbGVjdC5qc29uP3NraXA9MTAwMFwiKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocj0+e1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcbiAgICAgICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvbj9za2lwPTE1MDBcIikudGhlbihyID0+IHIuanNvbigpKS50aGVuKHI9PntcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3Mi5wdXNoKC4uLnIpfSksXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIC50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAgICAgbGltaXQuZm9yRWFjaCgoaXRlbTEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgJChpdGVtMS5uZXh0RWxlbWVudFNpYmxpbmcpLmVtcHR5KClcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJldmlldzMgPSBbXVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmlkdSA9IHJldmlldzIuZmlsdGVyKGl0ZW0gPT4gaXRlbVsnUHJvZHVjdCBTS1UnXSA9PT0gaXRlbTEuaW5uZXJIVE1MKVxuICAgICAgICAgICAgICAgICAgICB2aWR1LmZvckVhY2goKGdva3UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzMucHVzaChnb2t1WydSZXZpZXcgcmF0ZSddKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXZpZXdBdmcgPSBNYXRoLnJvdW5kKChyZXZpZXczLnJlZHVjZSgoYSxiICkgPT4gYSsgYiwgMCkvcmV2aWV3My5sZW5ndGgpICogMTApLzEwXG5cbiAgICAgICAgICAgICAgICAgICAgJChpdGVtMS5uZXh0RWxlbWVudFNpYmxpbmcpLmFwcGVuZChgXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZT4gICAgLmNoZWNrZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDIxMCwgMCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5mYS1zdGFyLW8ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjEwLCAwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RSZXZpZXcyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAgICAgICAgICAgICAgICAgICAucHJvZHVjdFJldmlldzIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdW5zZXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xuICAgICAgICAgICAgICAgICAgICAucHJvZHVjdFJldmlldzIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhcmArKDAuNSA8PSByZXZpZXdBdmc/ICcgY2hlY2tlZCc6ICcgZmEtc3Rhci1vJykgKyBgXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygxLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyYCsoMi41IDw9IHJldmlld0F2Zz8gJyBjaGVja2VkJzogJyBmYS1zdGFyLW8nKSArIGBcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhcmArKDMuNSA8PSByZXZpZXdBdmc/ICcgY2hlY2tlZCc6ICcgZmEtc3Rhci1vJykgKyBgXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKyg0LjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj4gICAgICBcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1wYWRkaW5nLWxlZnQ6NXB4Oz5cbiAgICAgICAgICAgICAgICAgICAgJHtyZXZpZXczLmxlbmd0aH0gQ29tbWVudGFpcmVzXG4gICAgICAgICAgICAgICAgPC9kaXY+YClcbiAgICAgICAgICAgICAgICAgICAgLy8gJChpdGVtMS5uZXh0RWxlbWVudFNpYmxpbmcpLmFwcGVuZChgPGRpdj4ke3Jldmlld0F2Z308L2Rpdj5gKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBsb2FkQ2F0ZWdvcnkoaWQsIHVybCwgb3B0aW9uLCB3cmFwLCBibG9ja0lkKXtcbiAgICAgICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgb3B0aW9uLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCF3cmFwLmZpbmQoJy5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHdyYXAuaHRtbChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHNsaWNrQ2Fyb3VzZWwod3JhcCk7XG4gICAgICAgICAgICAgICAgICAgIHdyYXAucGFyZW50cygnLnRhYi1jb250ZW50JykuZmluZCgnLmxvYWRpbmdPdmVybGF5JykucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaGFsb0FkZE9wdGlvbihjb250ZXh0LCBibG9ja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgcmV2aWV3U2hvdygpXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTsgXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzbGlja0Nhcm91c2VsKHdyYXApe1xuICAgICAgICAgICAgd3JhcC5zbGljayh7XG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1uZXh0IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdOZXh0IFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LW5leHQ+PC91c2U+PC9zdmc+XCIsIFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1wcmV2IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdQcmV2aW91cyBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1wcmV2PjwvdXNlPjwvc3ZnPlwiLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfdGFiX2NvbClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfdGFiX2NvbCkgLSAxXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiBwYXJzZUludChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaG9tZV9wcm9kdWN0X2Jsb2NrX3RhYl9jb2wpIC0gMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZFByb2R1Y3RCeUNhdGVnb3J5V2l0aEJhbm5lcigpe1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3Byb2R1Y3RzL2Nhcm91c2VsLTQnXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYoJCgnLmhhbG8tYmxvY2tbZGF0YS1jYXRlZ29yeS13aXRoLWJhbm5lci1pZF0nKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIHZhciAgaGVhZGVyX2hlaWdodCA9ICQoJy5oZWFkZXInKS5oZWlnaHQoKTtcbiAgICAgICAgICAgIGNvbnN0ICR0YWJTb3J0aW5nID0gJCgnLnRhYi1zb3J0aW5nIC50YWItdGl0bGUnKTtcblxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwgbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmIChzY3JvbGwgPiBoZWFkZXJfaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHNldEZsYWcpe1xuICAgICAgICAgICAgICAgICAgICAkKCcuaGFsby1ibG9ja1tkYXRhLWNhdGVnb3J5LXdpdGgtYmFubmVyLWlkXScpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCgnLmhvbWUtbGF5b3V0LTInKS5sZW5ndGggJiYgISQoZWxlbWVudCkuaGFzQ2xhc3MoJ2hvbWUyLWZsYXNoLWRlYWxzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgd3JhcCA9ICQoZWxlbWVudCkuZmluZCgnLnRhYkNvbnRlbnQtbmV3IC5wcm9kdWN0Q2Fyb3VzZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3cmFwID0gJChlbGVtZW50KS5maW5kKCcucHJvZHVjdENhcm91c2VsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYXRJZCA9ICQoZWxlbWVudCkuZGF0YSgnY2F0ZWdvcnktd2l0aC1iYW5uZXItaWQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRVcmwgPSAkKGVsZW1lbnQpLmRhdGEoJ2NhdGVnb3J5LXdpdGgtYmFubmVyLXVybCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrSWQgPSAkKGVsZW1lbnQpLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCEkKCcjcHJvZHVjdC13aXRoLWJhbm5lci0nK2NhdElkKycgLnByb2R1Y3RDYXJvdXNlbCAucHJvZHVjdENhcm91c2VsLXNsaWRlJykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkQ2F0ZWdvcnkoY2F0SWQsIGNhdFVybCwgb3B0aW9ucywgd3JhcCwgYmxvY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJHRhYlNvcnRpbmcub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhVGFiID0gJHRhcmdldC5kYXRhKCd0YWInKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkdGhpc0Jsb2NrID0gJHRhcmdldC5jbG9zZXN0KCcuaGFsby1ibG9jay1wcm9kdWN0Jyk7XG4gICAgICAgICAgICAgICAgdmFyIHdyYXAgPSAkdGhpc0Jsb2NrLmZpbmQoJy50YWJDb250ZW50LScrZGF0YVRhYisnIC5wcm9kdWN0Q2Fyb3VzZWwnKSxcbiAgICAgICAgICAgICAgICAgICAgY2F0SWQgPSAkdGFyZ2V0LmRhdGEoJ2NhdGUtaWQnKSxcbiAgICAgICAgICAgICAgICAgICAgY2F0VXJsID0gJHRhcmdldC5kYXRhKCdjYXRlLXVybCcpLFxuICAgICAgICAgICAgICAgICAgICBibG9ja0lkID0gJHRoaXNCbG9jay5maW5kKCcudGFiQ29udGVudC0nK2RhdGFUYWIpLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YVRhYiA9PSAndmlld2FsbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAkdGFyZ2V0LmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICR0aGlzQmxvY2suZmluZCgnLnRhYi1zb3J0aW5nJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICR0YXJnZXQucGFyZW50KCkuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICR0aGlzQmxvY2suZmluZCgnLnRhYi1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICR0aGlzQmxvY2suZmluZCgnLnRhYkNvbnRlbnQtJytkYXRhVGFiKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FmZicpXG4gICAgICAgICAgICAgICAgaWYoISR0YXJnZXQuaGFzQ2xhc3MoJ2lzLWxvYWRlZCcpKXtcbiAgICAgICAgICAgICAgICAgICAgJHRhcmdldC5hZGRDbGFzcygnaXMtbG9hZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRDYXRlZ29yeShjYXRJZCwgY2F0VXJsLCBvcHRpb25zLCB3cmFwLCBibG9ja0lkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzQmxvY2suZmluZCgnLnRhYkNvbnRlbnQtJytkYXRhVGFiKycgLnByb2R1Y3RDYXJvdXNlbCcpLnNsaWNrKCdyZWZyZXNoJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICgkKCcuY291bnREb3dudGltZXInKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKCAkKCcuY291bnREb3dudGltZXInKS5hdHRyKCdkYXRhLWNvdW50LWRvd24nKSkuZ2V0VGltZSgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGNvdW50ZG93bmZ1bmN0aW9uID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChjb3VudGRvd25mdW5jdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmNvdW50RG93bnRpbWVyXCIpLmh0bWwoJycpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRheXMgPSBNYXRoLmZsb29yKGRpc3RhbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBob3VycyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0ckNvdW50RG93biA9IFwiPGRpdiBjbGFzcz0nY2xvY2staXRlbSc+PHNwYW4gY2xhc3M9J251bSc+XCIrZGF5cytcIjwvc3Bhbj48c3BhbiBjbGFzcz0ndGV4dCc+ZDwvc3Bhbj48L2Rpdj48ZGl2IGNsYXNzPSdjbG9jay1pdGVtJz48c3BhbiBjbGFzcz0nbnVtJz5cIitob3VycytcIjo8L3NwYW4+PC9kaXY+PGRpdiBjbGFzcz0nY2xvY2staXRlbSc+PHNwYW4gY2xhc3M9J251bSc+XCIrbWludXRlcytcIjo8L3NwYW4+PC9kaXY+PGRpdiBjbGFzcz0nY2xvY2staXRlbSc+PHNwYW4gY2xhc3M9J251bSc+XCIrc2Vjb25kcytcIjwvc3Bhbj48L2Rpdj5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuY291bnREb3dudGltZXJcIikuaHRtbChzdHJDb3VudERvd24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBsb2FkQ2F0ZWdvcnkoaWQsIHVybCwgb3B0aW9uLCB3cmFwLCBibG9ja0lkKXtcbiAgICAgICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgb3B0aW9uLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCF3cmFwLmZpbmQoJy5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICB3cmFwLmh0bWwocmVzcG9uc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKHdyYXAucGFyZW50cygnLmhhbG8tYmxvY2tbZGF0YS1jYXRlZ29yeS13aXRoLWJhbm5lci1pZF0nKS5oYXNDbGFzcygnaGFsby1ibG9jay1wcm9kdWN0LWJhbm5lcnMnKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCgnLmhvbWUtbGF5b3V0LTInKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod3JhcC5wYXJlbnRzKCcuaGFsby1ibG9ja1tkYXRhLWNhdGVnb3J5LXdpdGgtYmFubmVyLWlkXScpLmhhc0NsYXNzKCdob21lMi1mbGFzaC1kZWFscycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsRmxhc2hEZWFscyh3cmFwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2tDYXJvdXNlbDQod3JhcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlja0Nhcm91c2VsMyh3cmFwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlja0Nhcm91c2VsKHdyYXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYod3JhcC5wYXJlbnRzKCcuaGFsby1ibG9ja1tkYXRhLWNhdGVnb3J5LXdpdGgtYmFubmVyLWlkXScpLmhhc0NsYXNzKCdoYWxvLWJsb2NrLXByb2R1Y3QtYmFubmVyczInKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlja0Nhcm91c2VsMih3cmFwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHdyYXAucGFyZW50cygnLmhhbG8tYmxvY2tbZGF0YS1jYXRlZ29yeS13aXRoLWJhbm5lci1pZF0nKS5maW5kKCcubG9hZGluZ092ZXJsYXknKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uKGNvbnRleHQsIGJsb2NrSWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pOyBcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNsaWNrQ2Fyb3VzZWwod3JhcCl7XG4gICAgICAgICAgICB3cmFwLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nTmV4dCBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1uZXh0PjwvdXNlPjwvc3ZnPlwiLCBcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stcHJldiBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nUHJldmlvdXMgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctcHJldj48L3VzZT48L3N2Zz5cIixcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzbGlja0Nhcm91c2VsMih3cmFwKXtcbiAgICAgICAgICAgIHdyYXAuc2xpY2soe1xuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1uZXh0IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdOZXh0IFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LW5leHQ+PC91c2U+PC9zdmc+XCIsIFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1wcmV2IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdQcmV2aW91cyBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1wcmV2PjwvdXNlPjwvc3ZnPlwiLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfd2l0aF9iYW5uZXJfY29sKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogcGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLmhvbWVfcHJvZHVjdF9ibG9ja193aXRoX2Jhbm5lcl9jb2wpIC0gMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogcGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLmhvbWVfcHJvZHVjdF9ibG9ja193aXRoX2Jhbm5lcl9jb2wpIC0gMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2xpY2tDYXJvdXNlbDMod3JhcCl7XG4gICAgICAgICAgICB3cmFwLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nTmV4dCBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1uZXh0PjwvdXNlPjwvc3ZnPlwiLCBcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stcHJldiBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nUHJldmlvdXMgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctcHJldj48L3VzZT48L3N2Zz5cIixcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNsaWNrQ2Fyb3VzZWw0KHdyYXApe1xuICAgICAgICAgICAgd3JhcC5zbGljayh7XG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLW5leHQgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J05leHQgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctbmV4dD48L3VzZT48L3N2Zz5cIiwgXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLXByZXYgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J1ByZXZpb3VzIFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LXByZXY+PC91c2U+PC9zdmc+XCIsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbGFiZWxGbGFzaERlYWxzKHdyYXApIHtcbiAgICAgICAgICAgIGNvbnN0ICRpdGVtU2lkZSA9IHdyYXAuZmluZCgnLnByb2R1Y3RDYXJvdXNlbC1zbGlkZScpO1xuXG4gICAgICAgICAgICAkaXRlbVNpZGUuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkdGhpc0xhYmVsID0gJChlbGVtZW50KS5maW5kKCcuc2FsZS1iYWRnZScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCR0aGlzTGFiZWwubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gJHRoaXNMYWJlbC5maW5kKCcudGV4dCcpLmRhdGEoJ3NhbGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmZpbmQoJy5jYXJkLXByaWNlJykuYWRkQ2xhc3MoJ2hhcy1sYWJlbFNhbGUnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjYXJkLWxhYmVsLXNhbGVcIj48c3Bhbj4tJytsYWJlbCsnPC9zcGFuPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgICAkdGhpc0xhYmVsLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmFuY3lib3hWaWRlb0Jhbm5lcigpe1xuICAgICAgICBpZiAoJChcIi52aWRlby1ibG9jay1pbWFnZVtkYXRhLWZhbmN5Ym94XVwiKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkKFwiLnZpZGVvLWJsb2NrLWltYWdlW2RhdGEtZmFuY3lib3hdXCIpLmZhbmN5Ym94KHtcbiAgICAgICAgICAgICAgICAnYXV0b0RpbWVuc2lvbnMnOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAncGFkZGluZycgOiAwLFxuICAgICAgICAgICAgICAgICd3aWR0aCcgOiA5NzAsXG4gICAgICAgICAgICAgICAgJ2hlaWdodCcgOiA2MDAsXG4gICAgICAgICAgICAgICAgJ2F1dG9TY2FsZScgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbkluJyA6ICdub25lJyxcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbk91dCcgOiAnbm9uZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCQoXCIuYnV0dG9uLXBvcHVwLXZpZGVvW2RhdGEtZmFuY3lib3hdXCIpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICQoXCIuYnV0dG9uLXBvcHVwLXZpZGVvW2RhdGEtZmFuY3lib3hdXCIpLmZhbmN5Ym94KHtcbiAgICAgICAgICAgICAgICAnYXV0b0RpbWVuc2lvbnMnOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAncGFkZGluZycgOiAwLFxuICAgICAgICAgICAgICAgICd3aWR0aCcgOiA5NzAsXG4gICAgICAgICAgICAgICAgJ2hlaWdodCcgOiA2MDAsXG4gICAgICAgICAgICAgICAgJ2F1dG9TY2FsZScgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbkluJyA6ICdub25lJyxcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbk91dCcgOiAnbm9uZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmFxc1RvZ2dsZSgpe1xuICAgICAgICAkKCcuaGFsby1zaG9ydC1mYXFzIC5jYXJkIC50aXRsZScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdmFyICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgICAgICAkKCcuaGFsby1zaG9ydC1mYXFzIC5jYXJkIC50aXRsZScpLm5vdCgkdGFyZ2V0KS5yZW1vdmVDbGFzcygnY29sbGFwc2VkJyk7XG5cbiAgICAgICAgICAgIGlmKCR0YXJnZXQuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpKXtcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LnJlbW92ZUNsYXNzKCdjb2xsYXBzZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LmFkZENsYXNzKCdjb2xsYXBzZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnLmhhbG8tc2hvcnQtZmFxcyAuY2FyZCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoJChlbGVtZW50KS5maW5kKCcudGl0bGUnKS5oYXNDbGFzcygnY29sbGFwc2VkJykpe1xuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmZpbmQoJy5jb2xsYXBzZScpLnNsaWRlRG93bihcInNsb3dcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmZpbmQoJy5jb2xsYXBzZScpLnNsaWRlVXAoXCJzbG93XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWNlbnRCbG9nU2xpZGVyKCl7XG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSAxMDI0KSB7XG4gICAgICAgICAgICBpZiAoJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpe1xuICAgICAgICAgICAgICAgICAgICAkKCcuaGFsby1yZWNlbnQtcG9zdCcpLnNsaWNrKCd1bnNsaWNrJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBpZiAoJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoISQoJy5oYWxvLXJlY2VudC1wb3N0JykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKXtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5zbGljaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gMTAyNCkge1xuICAgICAgICAgICAgICAgIGlmICgkKCcuaGFsby1yZWNlbnQtcG9zdCcpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5zbGljaygndW5zbGljaycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkKCcuaGFsby1yZWNlbnQtcG9zdCcpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuaGFsby1yZWNlbnQtcG9zdCcpLnNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhvbWVTcGVjaWFsUHJvZHVjdCgpe1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgIGlmKGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfc3BlY2lhbCA9PSB0cnVlKXtcbiAgICAgICAgICAgIHZhciBwcm9kdWN0SWQgPSAkKCdbZGF0YS1zcGVjaWFsLXByb2R1Y3QtaWRdJykuZGF0YSgnc3BlY2lhbC1wcm9kdWN0LWlkJyksXG4gICAgICAgICAgICAgICAgc2V0RmxhZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID17XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdoYWxvdGhlbWVzL3Byb2R1Y3RzL2hhbG8tc3BlY2lhbC1wcm9kdWN0LXRtcCdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwgbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcl9oZWlnaHQgPSAkKCcuaGVhZGVyJykuaGVpZ2h0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsID4gaGVhZGVyX2hlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRGbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihzZXRGbGFnKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoISQoJy5oYWxvLXNwYWNpYWwtcHJvZHVjdCAucHJvZHVjdFZpZXcnKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZChwcm9kdWN0SWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RmxhZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNjb3BlID0gJy5oYWxvLXNwYWNpYWwtcHJvZHVjdCc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighJChzY29wZSkuZmluZCgnLnByb2R1Y3RWaWV3JykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzY29wZSkuaHRtbChyZXNwb25zZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29sZFByb2R1Y3QoJChzY29wZSkuZmluZCgnLnByb2R1Y3RWaWV3LXNvbGRQcm9kdWN0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3aW5nUHJvZHVjdCgkKHNjb3BlKS5maW5kKCcucHJvZHVjdFZpZXctVmlld2luZ1Byb2R1Y3QnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50RG93blByb2R1Y3QoJChzY29wZSkuZmluZCgnLnByb2R1Y3RWaWV3LWNvdW50RG93bicpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNjb3BlKS5maW5kKCdbZGF0YS1zbGlja10nKS5zbGljaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNjb3BlKS5maW5kKCcucHJvZHVjdFZpZXctZm9yJykuZ2V0KDApLnNsaWNrLnNldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdFRodW1ibmFpbHNIZWlnaHQoc2NvcGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYWxvTm90aWZ5TWUoJChzY29wZSksIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYWxvWW91dHViZUNhcm91c2VsKCQoc2NvcGUpLmZpbmQoJ1tkYXRhLXNsaWNrXScpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNjb3BlKS5vbignY2xpY2snLCAnLmRyb3Bkb3duLW1lbnUtYnV0dG9uJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZigkdGFyZ2V0Lmhhc0NsYXNzKCdpcy1vcGVuJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1vcGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWJsaW5ncygnLmRyb3Bkb3duLW1lbnUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtb3BlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWJsaW5ncygnLmRyb3Bkb3duLW1lbnUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLW9wZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChzY29wZSkuZmluZCgnLmRyb3Bkb3duLW1lbnUtYnV0dG9uJykuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJy5kcm9wZG93bi1tZW51LWJ1dHRvbicpLmxlbmd0aCA9PT0gMCkgJiYgKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcuZHJvcGRvd24tbWVudScpLmxlbmd0aCA9PT0gMCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNjb3BlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoJy5kcm9wZG93bi1tZW51LWJ1dHRvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzY29wZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKCcuZHJvcGRvd24tbWVudS1idXR0b24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKCcuZHJvcGRvd24tbWVudScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdERldGFpbHMgPSBuZXcgUHJvZHVjdERldGFpbHMoJChzY29wZSksIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RGV0YWlscy5zZXRQcm9kdWN0VmFyaWFudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0RGV0YWlscztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdmlld2luZ1Byb2R1Y3Qod3JhcHBlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdyYXBwZXIubGVuZ3RoID4gMCl7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmlld2VyVGV4dCA9IGNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0X3ZpZXdpbmdQcm9kdWN0X3RleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJzVmlld2VyX3RleHQgPSBjb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF92aWV3aW5nUHJvZHVjdF92aWV3ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJzVmlld2VyTGlzdCA9ICBKU09OLnBhcnNlKFwiW1wiICsgbnVtYmVyc1ZpZXdlcl90ZXh0ICsgXCJdXCIpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG51bWJlcnNWaWV3ZXJJdGVtID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpudW1iZXJzVmlld2VyTGlzdC5sZW5ndGgpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5odG1sKCc8c3ZnIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWV5ZVwiLz48L3N2Zz4nICsgbnVtYmVyc1ZpZXdlckxpc3RbbnVtYmVyc1ZpZXdlckl0ZW1dICsgXCIgXCIgKyB2aWV3ZXJUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMDApOyAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjb3VudERvd25Qcm9kdWN0KHdyYXBwZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih3cmFwcGVyLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY291bnREb3duID0gd3JhcHBlci5kYXRhKCdjb3VudGRvd24nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZShjb3VudERvd24pLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZnQgPSB3cmFwcGVyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb3VudGRvd25mdW5jdGlvbiA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRkb3duZnVuY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZnQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXJzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyQ291bnREb3duID0gJzxzdmcgY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHVzZSB4bGluazpocmVmPVwiI2ljb24tYmVsbFwiLz48L3N2Zz48c3BhbiBjbGFzcz1cInRleHRcIj48c3Bhbj5MaW1pdGVkIHRpbWUgb2ZmZXIsIGVuZCBpbjo8L3NwYW4+PC9zcGFuPiA8c3BhbiBjbGFzcz1cIm51bVwiPicrZGF5cysnZCA6PC9zcGFuPiA8c3BhbiBjbGFzcz1cIm51bVwiPicraG91cnMrJ2ggOjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJudW1cIj4nK21pbnV0ZXMrJ20gOjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJudW1cIj4nK3NlY29uZHMrJ3M8L3NwYW4+JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZnQuaHRtbChzdHJDb3VudERvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNvbGRQcm9kdWN0KHdyYXBwZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih3cmFwcGVyLmxlbmd0aCA+IDApeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG51bWJlcnNQcm9kdWN0X3RleHQgPSBjb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF9zb2xkUHJvZHVjdF9wcm9kdWN0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcnNIb3Vyc190ZXh0ID0gY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3Rfc29sZFByb2R1Y3RfaG91cnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2xkUHJvZHVjdFRleHQgPSBjb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF9zb2xkUHJvZHVjdF90ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29sZFByb2R1Y3RUZXh0MiA9IGNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0X3NvbGRQcm9kdWN0X2hvdXJzX3RleHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG51bWJlcnNQcm9kdWN0TGlzdCA9ICBKU09OLnBhcnNlKFwiW1wiICsgbnVtYmVyc1Byb2R1Y3RfdGV4dCArIFwiXVwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJzUHJvZHVjdEl0ZW0gPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKm51bWJlcnNQcm9kdWN0TGlzdC5sZW5ndGgpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcnNIb3Vyc0xpc3QgPSAgSlNPTi5wYXJzZShcIltcIiArIG51bWJlcnNIb3Vyc190ZXh0ICsgXCJdXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyc0hvdXJzSXRlbSA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbnVtYmVyc0hvdXJzTGlzdC5sZW5ndGgpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmh0bWwoJzxzdmcgY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHVzZSB4bGluazpocmVmPVwiI2ljb24tZmlyZVwiLz48L3N2Zz48c3Bhbj4nICsgbnVtYmVyc1Byb2R1Y3RMaXN0W251bWJlcnNQcm9kdWN0SXRlbV0gKyBcIiBcIiArIHNvbGRQcm9kdWN0VGV4dCArIFwiIFwiICsgbnVtYmVyc0hvdXJzTGlzdFtudW1iZXJzSG91cnNJdGVtXSArIFwiIFwiICsgc29sZFByb2R1Y3RUZXh0MiArICc8L3NwYW4+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBpbml0VGh1bWJuYWlsc0hlaWdodCgkc2NvcGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9ICQoJHNjb3BlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkY2Fyb3VzZWxfbmF2ID0gZWwuZmluZCgnLnByb2R1Y3RWaWV3LW5hdicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2Fyb3VzZWxfZm9yID0gZWwuZmluZCgnLnByb2R1Y3RWaWV3LWZvcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRjYXJvdXNlbF9mb3IuZmluZCgnLnNsaWNrLWFycm93JykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2Fyb3VzZWxfZm9yLnBhcmVudCgpLmFkZENsYXNzKCdhcnJvd3MtdmlzaWJsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjYXJvdXNlbF9mb3IucGFyZW50KCkuYWRkQ2xhc3MoJ2Fycm93cy1kaXNhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0RmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaG9tZVBhcmFsbGF4QmFubmVyKCl7XG4gICAgICAgIGlmKCQoJyNoYWxvX3BhcnJhbGF4X2Jhbm5lcnMnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIHZhciB3cmFwID0gJCgnI2hhbG9fcGFycmFsYXhfYmFubmVycycpLFxuICAgICAgICAgICAgICAgIGltYWdlID0gd3JhcC5maW5kKCdbZGF0YS1pbWFnZV0nKS5kYXRhKCdpbWFnZScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB3cmFwLmZpbmQoJ1tkYXRhLWltYWdlXScpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoJytpbWFnZSsnKScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkKCl7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgICAgaWYoJCgnLnByb2R1Y3RDYXJvdXNlbCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgJCgnLnByb2R1Y3RDYXJvdXNlbCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyICRwcm9kV3JhcElkID0gJChlbGVtZW50KS5hdHRyKCdpZCcpO1xuXG4gICAgICAgICAgICAgICAgaGFsb0FkZE9wdGlvbihjb250ZXh0LCAkcHJvZFdyYXBJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCQoJy5oYWxvLWJsb2NrIC5wcm9kdWN0R3JpZCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgJCgnLmhhbG8tYmxvY2sgLnByb2R1Y3RHcmlkJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgJHByb2RXcmFwSWQgPSAkKGVsZW1lbnQpLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uKGNvbnRleHQsICRwcm9kV3JhcElkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQmFubmVyIHBhcmFsbGF4IDJcbiAgICBjdXN0b21lclJldmlld0Nhcm91c2VsKCkge1xuICAgICAgICBpZiAoJCgnI2hhbG9fcGFycmFsYXhfYmFubmVycyAuaGFsby1yb3cnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghJCgnI2hhbG9fcGFycmFsYXhfYmFubmVycyAuaGFsby1yb3cnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcbiAgICAgICAgICAgICAgICAkKCcjaGFsb19wYXJyYWxheF9iYW5uZXJzIC5oYWxvLXJvdycpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1uZXh0IHNsaWNrLWFycm93JyBhcmlhLWxhYmVsPSdOZXh0IFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LW5leHQ+PC91c2U+PC9zdmc+XCIsIFxuICAgICAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stcHJldiBzbGljay1hcnJvdycgYXJpYS1sYWJlbD0nUHJldmlvdXMgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctcHJldj48L3VzZT48L3N2Zz5cIixcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaG9tZVByb2R1Y3RSZWNvbW1lbmRlZCgpIHtcbiAgICAgICAgY29uc3QgJGhvbWVQR0YgPSAkKCcuaG9tZTItYmxvY2stcmVjb21tZW5kZWQnKTtcbiAgICAgICAgY29uc3QgJGhvbWVQR0ZfZ3JpZCA9ICRob21lUEdGLmZpbmQoJy5wcm9kdWN0R3JpZCcpO1xuICAgICAgICBjb25zdCBob21lUEdGX2l0ZW1MZW5ndGggPSAkaG9tZVBHRl9ncmlkLmZpbmQoJy5wcm9kdWN0JykubGVuZ3RoO1xuICAgICAgICBjb25zdCAkaG9tZVBHRl9idG5CbG9jayA9ICQoJy5ob21lUEdGX2J0bicpO1xuICAgICAgICBjb25zdCAkaG9tZVBHRl9idG4gPSAkKCcuaG9tZVBHRl9idG4gYScpO1xuICAgICAgICBjb25zdCBkYXRhQ29sdW1uID0gJGhvbWVQR0ZfZ3JpZC5kYXRhKCdjb2x1bW5zJyk7XG4gICAgICAgIGxldCB0dF9wcm9kdWN0U2hvdztcblxuICAgICAgICBpZiAoJGhvbWVQR0YubGVuZ3RoICYmIGhvbWVQR0ZfaXRlbUxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGZXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgICAgICAgICBpZiAoZldpZHRoID4gMTI3OSAmJiBob21lUEdGX2l0ZW1MZW5ndGggPiAxMCkge1xuICAgICAgICAgICAgICAgICRob21lUEdGX2J0bkJsb2NrLmFkZENsYXNzKCdpcy1zaG93Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmV2lkdGggPD0gMTI3OSAmJiBmV2lkdGggPiA5OTEgJiYgaG9tZVBHRl9pdGVtTGVuZ3RoID4gOCkge1xuICAgICAgICAgICAgICAgICRob21lUEdGX2J0bkJsb2NrLmFkZENsYXNzKCdpcy1zaG93Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmV2lkdGggPD0gOTkxICYmIGZXaWR0aCA+IDc2NyAmJiBob21lUEdGX2l0ZW1MZW5ndGggPiA2KSB7XG4gICAgICAgICAgICAgICAgJGhvbWVQR0ZfYnRuQmxvY2suYWRkQ2xhc3MoJ2lzLXNob3cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZXaWR0aCA8PSA3NjcgJiYgaG9tZVBHRl9pdGVtTGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgICAgICRob21lUEdGX2J0bkJsb2NrLmFkZENsYXNzKCdpcy1zaG93Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRob21lUEdGX2J0bi5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB3V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgICAgICAgICAgICAgIGlmICh3V2lkdGggPiAxMjc5KSB7XG4gICAgICAgICAgICAgICAgICAgIHR0X3Byb2R1Y3RTaG93ID0gMTA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdXaWR0aCA8PSAxMjc5ICYmIHdXaWR0aCA+IDk5MSkge1xuICAgICAgICAgICAgICAgICAgICB0dF9wcm9kdWN0U2hvdyA9IDg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdXaWR0aCA8PSA5OTEgJiYgd1dpZHRoID4gNzY3KSB7XG4gICAgICAgICAgICAgICAgICAgIHR0X3Byb2R1Y3RTaG93ID0gNjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHR0X3Byb2R1Y3RTaG93ID0gNDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJGhvbWVQR0ZfZ3JpZC5maW5kKCcucHJvZHVjdDpoaWRkZW4nKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICRob21lUEdGX2dyaWQuZmluZCgnLnByb2R1Y3Q6aGlkZGVuOmx0KCcrdHRfcHJvZHVjdFNob3crJyknKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCRob21lUEdGX2dyaWQuZmluZCgnLnByb2R1Y3Q6aGlkZGVuJykubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRob21lUEdGX2J0bi50ZXh0KCdObyBNb3JlIFByb2R1Y3RzJykuYXR0cignZGlzYWJsZWQnLCAnJykuYWRkQ2xhc3MoJ2Rpc2FibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==