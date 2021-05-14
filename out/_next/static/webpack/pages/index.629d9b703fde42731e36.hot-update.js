self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/carousel.js":
/*!********************************!*\
  !*** ./components/carousel.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_tsote_Desktop_bonema_bonema_medical_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
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
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\tsote\\Desktop\\bonema\\bonema-medical\\components\\carousel.js",
    _this = undefined,
    _s = $RefreshSig$();


 // import "./styles.css"




var Carousel = function Carousel(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      pause = _useState[0],
      setPause = _useState[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default().useState(0),
      _React$useState2 = (0,C_Users_tsote_Desktop_bonema_bonema_medical_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState, 2),
      currentSlide = _React$useState2[0],
      setCurrentSlide = _React$useState2[1];

  var timer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();

  var _useKeenSlider = (0,keen_slider_react__WEBPACK_IMPORTED_MODULE_4__.useKeenSlider)({
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
      _useKeenSlider2 = (0,C_Users_tsote_Desktop_bonema_bonema_medical_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useKeenSlider, 2),
      sliderRef = _useKeenSlider2[0],
      slider = _useKeenSlider2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    sliderRef.current.addEventListener("mouseover", function () {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", function () {
      setPause(false);
    });
  }, [sliderRef]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    timer.current = setInterval(function () {
      if (!pause && slider) {
        slider.next();
      }
    }, 5000);
    return function () {
      clearInterval(timer.current);
    };
  }, [pause, slider]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_carouselStyles__WEBPACK_IMPORTED_MODULE_6__.CarouselContainer, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "navigation-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        ref: sliderRef,
        className: "keen-slider",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "keen-slider__slide number-slide1",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "content",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
              children: "Bonema Medical"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
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
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "keen-slider__slide number-slide2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "content",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
              children: "Bonema Medical"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
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
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "keen-slider__slide number-slide3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "content",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
              children: "Bonema Medical"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
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
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "keen-slider__slide number-slide4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "content",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
              children: "Bonema Medical"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
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
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "keen-slider__slide number-slide5",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "content",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
              children: "Bonema Medical"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
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
      }, _this), slider && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ArrowLeft, {
          onClick: function onClick(e) {
            return e.stopPropagation() || slider.prev();
          },
          disabled: currentSlide === 0
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ArrowRight, {
          onClick: function onClick(e) {
            return e.stopPropagation() || slider.next();
          },
          disabled: currentSlide === slider.details().size - 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 25
        }, _this)]
      }, void 0, true), slider && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "dots",
        children: (0,C_Users_tsote_Desktop_bonema_bonema_medical_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(Array(slider.details().size).keys()).map(function (idx) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            onClick: function onClick() {
              slider.moveToSlideRelative(idx);
            },
            className: "dot" + (currentSlide === idx ? " active" : "")
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 33
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
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
  return [keen_slider_react__WEBPACK_IMPORTED_MODULE_4__.useKeenSlider];
});

_c = Carousel;
/* harmony default export */ __webpack_exports__["default"] = (Carousel);

function ArrowLeft(props) {
  var disabeld = props.disabled ? " arrow--disabled" : "";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
    onClick: props.onClick,
    className: "arrow arrow--left" + disabeld,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 163,
    columnNumber: 9
  }, this);
}

_c2 = ArrowLeft;

function ArrowRight(props) {
  var disabeld = props.disabled ? " arrow--disabled" : "";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
    onClick: props.onClick,
    className: "arrow arrow--right" + disabeld,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 177,
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbC5qcyJdLCJuYW1lcyI6WyJDYXJvdXNlbCIsInByb3BzIiwidXNlU3RhdGUiLCJwYXVzZSIsInNldFBhdXNlIiwiUmVhY3QiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJ0aW1lciIsInVzZVJlZiIsInVzZUtlZW5TbGlkZXIiLCJsb29wIiwiZHVyYXRpb24iLCJkcmFnU3RhcnQiLCJkcmFnRW5kIiwiaW5pdGlhbCIsInNsaWRlQ2hhbmdlZCIsInMiLCJkZXRhaWxzIiwicmVsYXRpdmVTbGlkZSIsInNsaWRlclJlZiIsInNsaWRlciIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0SW50ZXJ2YWwiLCJuZXh0IiwiY2xlYXJJbnRlcnZhbCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2Iiwic2l6ZSIsIkFycmF5Iiwia2V5cyIsIm1hcCIsImlkeCIsIm1vdmVUb1NsaWRlUmVsYXRpdmUiLCJBcnJvd0xlZnQiLCJkaXNhYmVsZCIsImRpc2FibGVkIiwib25DbGljayIsIkFycm93UmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0VDLCtDQUFRLENBQUMsS0FBRCxDQURWO0FBQUEsTUFDakJDLEtBRGlCO0FBQUEsTUFDVkMsUUFEVTs7QUFBQSx3QkFFZ0JDLHFEQUFBLENBQWUsQ0FBZixDQUZoQjtBQUFBO0FBQUEsTUFFakJDLFlBRmlCO0FBQUEsTUFFSEMsZUFGRzs7QUFHeEIsTUFBTUMsS0FBSyxHQUFHQyw2Q0FBTSxFQUFwQjs7QUFId0IsdUJBSUlDLGdFQUFhLENBQUM7QUFDdENDLFFBQUksRUFBRSxJQURnQztBQUV0Q0MsWUFBUSxFQUFFLElB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LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlS2VlblNsaWRlciB9IGZyb20gXCJrZWVuLXNsaWRlci9yZWFjdFwiO1xyXG4vLyBpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIlxyXG5pbXBvcnQgXCJrZWVuLXNsaWRlci9rZWVuLXNsaWRlci5taW4uY3NzXCI7XHJcbmltcG9ydCB7IENhcm91c2VsQ29udGFpbmVyIH0gZnJvbSBcIi4vY2Fyb3VzZWxTdHlsZXNcIjtcclxuXHJcbmNvbnN0IENhcm91c2VsID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbcGF1c2UsIHNldFBhdXNlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IHRpbWVyID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBbc2xpZGVyUmVmLCBzbGlkZXJdID0gdXNlS2VlblNsaWRlcih7XHJcbiAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICBkdXJhdGlvbjogMzAwMCxcclxuICAgICAgICBkcmFnU3RhcnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgc2V0UGF1c2UodHJ1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkcmFnRW5kOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFBhdXNlKGZhbHNlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluaXRpYWw6IDAsXHJcbiAgICAgICAgc2xpZGVDaGFuZ2VkKHMpIHtcclxuICAgICAgICAgICAgc2V0Q3VycmVudFNsaWRlKHMuZGV0YWlscygpLnJlbGF0aXZlU2xpZGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNsaWRlclJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRQYXVzZSh0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzbGlkZXJSZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRQYXVzZShmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbc2xpZGVyUmVmXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB0aW1lci5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXBhdXNlICYmIHNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVyLm5leHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDUwMDApO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIuY3VycmVudCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtwYXVzZSwgc2xpZGVyXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2Fyb3VzZWxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj17c2xpZGVyUmVmfSBjbGFzc05hbWU9XCJrZWVuLXNsaWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2Vlbi1zbGlkZXJfX3NsaWRlIG51bWJlci1zbGlkZTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+Qm9uZW1hIE1lZGljYWw8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2Ugc3RyaXZlIHRvIGltcHJvdmUgYWNjZXNzIHRvIGJldHRlciwgc2FmZXIgYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29zdCBlZmZlY3RpdmUgaGVhbHRoIGNhcmUuIE91ciBjbGllbnQgcG9ydGZvbGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZXMgTmV0Y2FyZSBHcm91cCwgTG91aXMgUGFzdGV1ciwgUHJpdmF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBHb3Zlcm5tZW50IGhvc3BpdGFscy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZWVuLXNsaWRlcl9fc2xpZGUgbnVtYmVyLXNsaWRlMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Cb25lbWEgTWVkaWNhbDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZSBzdHJpdmUgdG8gaW1wcm92ZSBhY2Nlc3MgdG8gYmV0dGVyLCBzYWZlciBhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3N0IGVmZmVjdGl2ZSBoZWFsdGggY2FyZS4gT3VyIGNsaWVudCBwb3J0Zm9saW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlcyBOZXRjYXJlIEdyb3VwLCBMb3VpcyBQYXN0ZXVyLCBQcml2YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIEdvdmVybm1lbnQgaG9zcGl0YWxzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtlZW4tc2xpZGVyX19zbGlkZSBudW1iZXItc2xpZGUzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkJvbmVtYSBNZWRpY2FsPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIHN0cml2ZSB0byBpbXByb3ZlIGFjY2VzcyB0byBiZXR0ZXIsIHNhZmVyIGFuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvc3QgZWZmZWN0aXZlIGhlYWx0aCBjYXJlLiBPdXIgY2xpZW50IHBvcnRmb2xpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGVzIE5ldGNhcmUgR3JvdXAsIExvdWlzIFBhc3RldXIsIFByaXZhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgR292ZXJubWVudCBob3NwaXRhbHMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2Vlbi1zbGlkZXJfX3NsaWRlIG51bWJlci1zbGlkZTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+Qm9uZW1hIE1lZGljYWw8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2Ugc3RyaXZlIHRvIGltcHJvdmUgYWNjZXNzIHRvIGJldHRlciwgc2FmZXIgYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29zdCBlZmZlY3RpdmUgaGVhbHRoIGNhcmUuIE91ciBjbGllbnQgcG9ydGZvbGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZXMgTmV0Y2FyZSBHcm91cCwgTG91aXMgUGFzdGV1ciwgUHJpdmF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBHb3Zlcm5tZW50IGhvc3BpdGFscy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZWVuLXNsaWRlcl9fc2xpZGUgbnVtYmVyLXNsaWRlNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Cb25lbWEgTWVkaWNhbDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZSBzdHJpdmUgdG8gaW1wcm92ZSBhY2Nlc3MgdG8gYmV0dGVyLCBzYWZlciBhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3N0IGVmZmVjdGl2ZSBoZWFsdGggY2FyZS4gT3VyIGNsaWVudCBwb3J0Zm9saW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlcyBOZXRjYXJlIEdyb3VwLCBMb3VpcyBQYXN0ZXVyLCBQcml2YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIEdvdmVybm1lbnQgaG9zcGl0YWxzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJrZWVuLXNsaWRlcl9fc2xpZGUgbnVtYmVyLXNsaWRlNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Cb25lbWEgTWVkaWNhbDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZSBzdHJpdmUgdG8gaW1wcm92ZSBhY2Nlc3MgdG8gYmV0dGVyLCBzYWZlciBhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3N0IGVmZmVjdGl2ZSBoZWFsdGggY2FyZS4gT3VyIGNsaWVudCBwb3J0Zm9saW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlcyBOZXRjYXJlIEdyb3VwLCBMb3VpcyBQYXN0ZXVyLCBQcml2YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIEdvdmVybm1lbnQgaG9zcGl0YWxzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtzbGlkZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd0xlZnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCkgfHwgc2xpZGVyLnByZXYoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRTbGlkZSA9PT0gMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93UmlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCkgfHwgc2xpZGVyLm5leHQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9PT0gc2xpZGVyLmRldGFpbHMoKS5zaXplIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHtzbGlkZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG90c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Wy4uLkFycmF5KHNsaWRlci5kZXRhaWxzKCkuc2l6ZSkua2V5cygpXS5tYXAoKGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXIubW92ZVRvU2xpZGVSZWxhdGl2ZShpZHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkb3RcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY3VycmVudFNsaWRlID09PSBpZHggPyBcIiBhY3RpdmVcIiA6IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Nhcm91c2VsQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xyXG5cclxuZnVuY3Rpb24gQXJyb3dMZWZ0KHByb3BzKSB7XHJcbiAgICBjb25zdCBkaXNhYmVsZCA9IHByb3BzLmRpc2FibGVkID8gXCIgYXJyb3ctLWRpc2FibGVkXCIgOiBcIlwiO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJhcnJvdyBhcnJvdy0tbGVmdFwiICsgZGlzYWJlbGR9XHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTYuNjcgMGwyLjgzIDIuODI5LTkuMzM5IDkuMTc1IDkuMzM5IDkuMTY3LTIuODMgMi44MjktMTIuMTctMTEuOTk2elwiIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBBcnJvd1JpZ2h0KHByb3BzKSB7XHJcbiAgICBjb25zdCBkaXNhYmVsZCA9IHByb3BzLmRpc2FibGVkID8gXCIgYXJyb3ctLWRpc2FibGVkXCIgOiBcIlwiO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJhcnJvdyBhcnJvdy0tcmlnaHRcIiArIGRpc2FiZWxkfVxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTUgM2wzLjA1Ny0zIDExLjk0MyAxMi0xMS45NDMgMTItMy4wNTctMyA5LTl6XCIgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==