webpackHotUpdate_N_E("pages/index",{

/***/ "./components/carousel.js":
/*!********************************!*\
  !*** ./components/carousel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_tsote_Desktop_bonema_bonema_medical_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_tsote_Desktop_bonema_bonema_medical_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var keen_slider_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! keen-slider/react */ "./node_modules/keen-slider/react.js");
/* harmony import */ var keen_slider_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(keen_slider_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! keen-slider/keen-slider.min.css */ "./node_modules/keen-slider/keen-slider.min.css");
/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _carouselStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carouselStyles */ "./components/carouselStyles.js");





var _jsxFileName = "C:\\Users\\tsote\\Desktop\\bonema\\bonema-medical\\components\\carousel.js",
    _this = undefined,
    _s = $RefreshSig$();


 // import "./styles.css"




var Carousel = function Carousel(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      pause = _useState[0],
      setPause = _useState[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),
      _React$useState2 = Object(C_Users_tsote_Desktop_bonema_bonema_medical_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      currentSlide = _React$useState2[0],
      setCurrentSlide = _React$useState2[1];

  var timer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  var _useKeenSlider = Object(keen_slider_react__WEBPACK_IMPORTED_MODULE_4__["useKeenSlider"])({
    loop: true,
    duration: 3000,
    dragStart: function dragStart() {
      setPause(true);
    },
    dragEnd: function dragEnd() {
      setPause(false);
    },
    initial: 0,
    slideChanged: function slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    }
  }),
      _useKeenSlider2 = Object(C_Users_tsote_Desktop_bonema_bonema_medical_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useKeenSlider, 2),
      sliderRef = _useKeenSlider2[0],
      slider = _useKeenSlider2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    sliderRef.current.addEventListener("mouseover", function () {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", function () {
      setPause(false);
    });
  }, [sliderRef]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    timer.current = setInterval(function () {
      if (!pause && slider) {
        slider.next();
      }
    }, 5000);
    return function () {
      clearInterval(timer.current);
    };
  }, [pause, slider]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_carouselStyles__WEBPACK_IMPORTED_MODULE_6__["CarouselContainer"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "navigation-wrapper",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        ref: sliderRef,
        className: "keen-slider",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "keen-slider__slide number-slide1",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
              children: "Bonema Medical"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              children: "We strive to improve access to better, safer and cost effective health care. Our client portfolio includes Netcare Group, Louis Pasteur, Private and Government hospitals."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "keen-slider__slide number-slide2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
              children: "Bonema Medical"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              children: "We strive to improve access to better, safer and cost effective health care. Our client portfolio includes Netcare Group, Louis Pasteur, Private and Government hospitals."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "keen-slider__slide number-slide3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
              children: "Bonema Medical"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              children: "We strive to improve access to better, safer and cost effective health care. Our client portfolio includes Netcare Group, Louis Pasteur, Private and Government hospitals."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "keen-slider__slide number-slide4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
              children: "Bonema Medical"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              children: "We strive to improve access to better, safer and cost effective health care. Our client portfolio includes Netcare Group, Louis Pasteur, Private and Government hospitals."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "keen-slider__slide number-slide5",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
              children: "Bonema Medical"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              children: "We strive to improve access to better, safer and cost effective health care. Our client portfolio includes Netcare Group, Louis Pasteur, Private and Government hospitals."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, _this), slider && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ArrowLeft, {
          onClick: function onClick(e) {
            return e.stopPropagation() || slider.prev();
          },
          disabled: currentSlide === 0
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ArrowRight, {
          onClick: function onClick(e) {
            return e.stopPropagation() || slider.next();
          },
          disabled: currentSlide === slider.details().size - 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 25
        }, _this)]
      }, void 0, true), slider && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "dots",
        children: Object(C_Users_tsote_Desktop_bonema_bonema_medical_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array(slider.details().size).keys()).map(function (idx) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
            onClick: function onClick() {
              slider.moveToSlideRelative(idx);
            },
            className: "dot" + (currentSlide === idx ? " active" : "")
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 33
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 9
  }, _this);
};

_s(Carousel, "wX82YgpLrpX8K3cwN8wdGw4JxnU=", false, function () {
  return [keen_slider_react__WEBPACK_IMPORTED_MODULE_4__["useKeenSlider"]];
});

_c = Carousel;
/* harmony default export */ __webpack_exports__["default"] = (Carousel);

function ArrowLeft(props) {
  var disabeld = props.disabled ? " arrow--disabled" : "";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("svg", {
    onClick: props.onClick,
    className: "arrow arrow--left" + disabeld,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 152,
    columnNumber: 9
  }, this);
}

_c2 = ArrowLeft;

function ArrowRight(props) {
  var disabeld = props.disabled ? " arrow--disabled" : "";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("svg", {
    onClick: props.onClick,
    className: "arrow arrow--right" + disabeld,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 166,
    columnNumber: 9
  }, this);
}

_c3 = ArrowRight;

var _c, _c2, _c3;

$RefreshReg$(_c, "Carousel");
$RefreshReg$(_c2, "ArrowLeft");
$RefreshReg$(_c3, "ArrowRight");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbC5qcyJdLCJuYW1lcyI6WyJDYXJvdXNlbCIsInByb3BzIiwidXNlU3RhdGUiLCJwYXVzZSIsInNldFBhdXNlIiwiUmVhY3QiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJ0aW1lciIsInVzZVJlZiIsInVzZUtlZW5TbGlkZXIiLCJsb29wIiwiZHVyYXRpb24iLCJkcmFnU3RhcnQiLCJkcmFnRW5kIiwiaW5pdGlhbCIsInNsaWRlQ2hhbmdlZCIsInMiLCJkZXRhaWxzIiwicmVsYXRpdmVTbGlkZSIsInNsaWRlclJlZiIsInNsaWRlciIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0SW50ZXJ2YWwiLCJuZXh0IiwiY2xlYXJJbnRlcnZhbCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2Iiwic2l6ZSIsIkFycmF5Iiwia2V5cyIsIm1hcCIsImlkeCIsIm1vdmVUb1NsaWRlUmVsYXRpdmUiLCJBcnJvd0xlZnQiLCJkaXNhYmVsZCIsImRpc2FibGVkIiwib25DbGljayIsIkFycm93UmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0VDLHNEQUFRLENBQUMsS0FBRCxDQURWO0FBQUEsTUFDakJDLEtBRGlCO0FBQUEsTUFDVkMsUUFEVTs7QUFBQSx3QkFFZ0JDLDRDQUFLLENBQUNILFFBQU4sQ0FBZSxDQUFmLENBRmhCO0FBQUE7QUFBQSxNQUVqQkksWUFGaUI7QUFBQSxNQUVIQyxlQUZHOztBQUd4QixNQUFNQyxLQUFLLEdBQUdDLG9EQUFNLEVBQXBCOztBQUh3Qix1QkFJSUMsdUVBQWEsQ0FBQztBQUN0Q0MsUUFBSSxFQUFFLElBRGdDO0FBRXRDQyxZ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ZDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlS2VlblNsaWRlciB9IGZyb20gXCJrZWVuLXNsaWRlci9yZWFjdFwiO1xyXG4vLyBpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIlxyXG5pbXBvcnQgXCJrZWVuLXNsaWRlci9rZWVuLXNsaWRlci5taW4uY3NzXCI7XHJcbmltcG9ydCB7IENhcm91c2VsQ29udGFpbmVyIH0gZnJvbSBcIi4vY2Fyb3VzZWxTdHlsZXNcIjtcclxuXHJcbmNvbnN0IENhcm91c2VsID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbcGF1c2UsIHNldFBhdXNlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IHRpbWVyID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBbc2xpZGVyUmVmLCBzbGlkZXJdID0gdXNlS2VlblNsaWRlcih7XHJcbiAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICBkdXJhdGlvbjogMzAwMCxcclxuICAgICAgICBkcmFnU3RhcnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgc2V0UGF1c2UodHJ1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkcmFnRW5kOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFBhdXNlKGZhbHNlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluaXRpYWw6IDAsXHJcbiAgICAgICAgc2xpZGVDaGFuZ2VkKHMpIHtcclxuICAgICAgICAgICAgc2V0Q3VycmVudFNsaWRlKHMuZGV0YWlscygpLnJlbGF0aXZlU2xpZGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNsaWRlclJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRQYXVzZSh0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzbGlkZXJSZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRQYXVzZShmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbc2xpZGVyUmVmXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB0aW1lci5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXBhdXNlICYmIHNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVyLm5leHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDUwMDApO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIuY3VycmVudCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtwYXVzZSwgc2xpZGVyXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2Fyb3VzZWxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj17c2xpZGVyUmVmfSBjbGFzc05hbWU9XCJrZWVuLXNsaWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2Vlbi1zbGlkZXJfX3NsaWRlIG51bWJlci1zbGlkZTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+Qm9uZW1hIE1lZGljYWw8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2Ugc3RyaXZlIHRvIGltcHJvdmUgYWNjZXNzIHRvIGJldHRlciwgc2FmZXIgYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29zdCBlZmZlY3RpdmUgaGVhbHRoIGNhcmUuIE91ciBjbGllbnQgcG9ydGZvbGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZXMgTmV0Y2FyZSBHcm91cCwgTG91aXMgUGFzdGV1ciwgUHJpdmF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBHb3Zlcm5tZW50IGhvc3BpdGFscy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZWVuLXNsaWRlcl9fc2xpZGUgbnVtYmVyLXNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Cb25lbWEgTWVkaWNhbDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZSBzdHJpdmUgdG8gaW1wcm92ZSBhY2Nlc3MgdG8gYmV0dGVyLCBzYWZlciBhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3N0IGVmZmVjdGl2ZSBoZWFsdGggY2FyZS4gT3VyIGNsaWVudCBwb3J0Zm9saW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlcyBOZXRjYXJlIEdyb3VwLCBMb3VpcyBQYXN0ZXVyLCBQcml2YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIEdvdmVybm1lbnQgaG9zcGl0YWxzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtlZW4tc2xpZGVyX19zbGlkZSBudW1iZXItc2xpZGUzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkJvbmVtYSBNZWRpY2FsPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIHN0cml2ZSB0byBpbXByb3ZlIGFjY2VzcyB0byBiZXR0ZXIsIHNhZmVyIGFuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvc3QgZWZmZWN0aXZlIGhlYWx0aCBjYXJlLiBPdXIgY2xpZW50IHBvcnRmb2xpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGVzIE5ldGNhcmUgR3JvdXAsIExvdWlzIFBhc3RldXIsIFByaXZhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgR292ZXJubWVudCBob3NwaXRhbHMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2Vlbi1zbGlkZXJfX3NsaWRlIG51bWJlci1zbGlkZTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+Qm9uZW1hIE1lZGljYWw8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2Ugc3RyaXZlIHRvIGltcHJvdmUgYWNjZXNzIHRvIGJldHRlciwgc2FmZXIgYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29zdCBlZmZlY3RpdmUgaGVhbHRoIGNhcmUuIE91ciBjbGllbnQgcG9ydGZvbGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZXMgTmV0Y2FyZSBHcm91cCwgTG91aXMgUGFzdGV1ciwgUHJpdmF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBHb3Zlcm5tZW50IGhvc3BpdGFscy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZWVuLXNsaWRlcl9fc2xpZGUgbnVtYmVyLXNsaWRlNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Cb25lbWEgTWVkaWNhbDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZSBzdHJpdmUgdG8gaW1wcm92ZSBhY2Nlc3MgdG8gYmV0dGVyLCBzYWZlciBhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3N0IGVmZmVjdGl2ZSBoZWFsdGggY2FyZS4gT3VyIGNsaWVudCBwb3J0Zm9saW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlcyBOZXRjYXJlIEdyb3VwLCBMb3VpcyBQYXN0ZXVyLCBQcml2YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIEdvdmVybm1lbnQgaG9zcGl0YWxzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge3NsaWRlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93TGVmdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKSB8fCBzbGlkZXIucHJldigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y3VycmVudFNsaWRlID09PSAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dSaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKSB8fCBzbGlkZXIubmV4dCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNsaWRlID09PSBzbGlkZXIuZGV0YWlscygpLnNpemUgLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge3NsaWRlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtbLi4uQXJyYXkoc2xpZGVyLmRldGFpbHMoKS5zaXplKS5rZXlzKCldLm1hcCgoaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlci5tb3ZlVG9TbGlkZVJlbGF0aXZlKGlkeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRvdFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjdXJyZW50U2xpZGUgPT09IGlkeCA/IFwiIGFjdGl2ZVwiIDogXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2Fyb3VzZWxDb250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWw7XHJcblxyXG5mdW5jdGlvbiBBcnJvd0xlZnQocHJvcHMpIHtcclxuICAgIGNvbnN0IGRpc2FiZWxkID0gcHJvcHMuZGlzYWJsZWQgPyBcIiBhcnJvdy0tZGlzYWJsZWRcIiA6IFwiXCI7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImFycm93IGFycm93LS1sZWZ0XCIgKyBkaXNhYmVsZH1cclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xNi42NyAwbDIuODMgMi44MjktOS4zMzkgOS4xNzUgOS4zMzkgOS4xNjctMi44MyAyLjgyOS0xMi4xNy0xMS45OTZ6XCIgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFycm93UmlnaHQocHJvcHMpIHtcclxuICAgIGNvbnN0IGRpc2FiZWxkID0gcHJvcHMuZGlzYWJsZWQgPyBcIiBhcnJvdy0tZGlzYWJsZWRcIiA6IFwiXCI7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImFycm93IGFycm93LS1yaWdodFwiICsgZGlzYWJlbGR9XHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNSAzbDMuMDU3LTMgMTEuOTQzIDEyLTExLjk0MyAxMi0zLjA1Ny0zIDktOXpcIiAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9