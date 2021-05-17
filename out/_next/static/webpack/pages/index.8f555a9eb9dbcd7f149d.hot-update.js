webpackHotUpdate_N_E("pages/index",{

/***/ "./components/suppliers/styles.js":
/*!****************************************!*\
  !*** ./components/suppliers/styles.js ***!
  \****************************************/
/*! exports provided: Supplier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Supplier", function() { return Supplier; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Supplier = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Supplier",
  componentId: "sc-1dh5t3o-0"
})([""]);


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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/suppliers/suppliers.js":
/*!*******************************************!*\
  !*** ./components/suppliers/suppliers.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Suppliers; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/suppliers/styles.js");
/* harmony import */ var _public_suppliers_mecan_medical_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/suppliers/mecan-medical-logo.png */ "./public/suppliers/mecan-medical-logo.png");
/* harmony import */ var _public_suppliers_mecan_medical_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_suppliers_mecan_medical_logo_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_suppliers_softwave_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/suppliers/softwave-logo.png */ "./public/suppliers/softwave-logo.png");
/* harmony import */ var _public_suppliers_softwave_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_suppliers_softwave_logo_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_suppliers_1drop_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/suppliers/1drop-logo.png */ "./public/suppliers/1drop-logo.png");
/* harmony import */ var _public_suppliers_1drop_logo_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_suppliers_1drop_logo_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_suppliers_biomaxima_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/suppliers/biomaxima-logo.png */ "./public/suppliers/biomaxima-logo.png");
/* harmony import */ var _public_suppliers_biomaxima_logo_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_suppliers_biomaxima_logo_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_suppliers_fotona_logo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/suppliers/fotona-logo.png */ "./public/suppliers/fotona-logo.png");
/* harmony import */ var _public_suppliers_fotona_logo_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_suppliers_fotona_logo_png__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\tsote\\Desktop\\bonema\\bonema-medical\\components\\suppliers\\suppliers.js";







var suppliers = [{
  name: "mecan medical",
  logo: _public_suppliers_mecan_medical_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
  alt: "mecan medical logo",
  URL: ""
}, {
  logo: _public_suppliers_softwave_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  alt: "softwave medical logo",
  URL: ""
}, {
  logo: _public_suppliers_1drop_logo_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  alt: "1drop kit logo",
  URL: ""
}, {
  name: "biomaxima",
  logo: _public_suppliers_biomaxima_logo_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  alt: "biomaxima logo",
  URL: ""
}, {
  name: "fotona",
  logo: _public_suppliers_fotona_logo_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  alt: "fotona logo",
  URL: ""
}];
function Suppliers() {
  var _this = this;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    style: {
      backgroundColor: "#e9e9e9",
      marginBottom: "5rem",
      display: "grid",
      placeItems: "center"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "title",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Products"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "suppliers",
      children: suppliers.map(function (supplier, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "supplier",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
            src: supplier.logo,
            width: 305,
            height: 93,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, this);
}
_c = Suppliers;

var _c;

$RefreshReg$(_c, "Suppliers");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdXBwbGllcnMvc3R5bGVzLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3N1cHBsaWVycy9zdXBwbGllcnMuanMiXSwibmFtZXMiOlsiU3VwcGxpZXIiLCJzdHlsZWQiLCJkaXYiLCJzdXBwbGllcnMiLCJuYW1lIiwibG9nbyIsIm1lY2FuIiwiYWx0IiwiVVJMIiwic29mdHdhdmUiLCJkcm9wIiwiYmlvbWF4aW1hIiwiZm90b25hIiwiU3VwcGxpZXJzIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luQm90dG9tIiwiZGlzcGxheSIsInBsYWNlSXRlbXMiLCJtYXAiLCJzdXBwbGllciIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxJQUFNQSxRQUFRLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsUUFBZDtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQyxTQUFTLEdBQUcsQ0FDZDtBQUNJQyxNQUFJLEVBQUUsZUFEVjtBQUVJQyxNQUFJLEVBQUVDLCtFQUZWO0FBR0lDLEtBQUcsRUFBRSxvQkFIVDtBQUlJQyxLQUFHLEVBQUU7QUFKVCxDQURjLEVBT2Q7QUFDSUgsTUFBSSxFQUFFSSwwRUFEVjtBQUVJRixLQUFHLEVBQUUsdUJBRlQ7QUFHSUMsS0FBRyxFQUFFO0FBSFQsQ0FQYyxFQVlkO0FBQ0lILE1BQUksRUFBRUssdUVBRFY7QUFFSUgsS0FBRyxFQUFFLGdCQUZUO0FBR0lDLEtBQUcsRUFBRTtBQUhULENBWmMsRUFpQmQ7QUFDSUosTUFBSSxFQUFFLFdBRFY7QUFFSUMsTUFBSSxFQUFFTSwyRUFGVjtBQUdJSixLQUFHLEVBQUUsZ0JBSFQ7QUFJSUMsS0FBRyxFQUFFO0FBSlQsQ0FqQmMsRUF1QmQ7QUFDSUosTUFBSSxFQUFFLFFBRFY7QUFFSUMsTUFBSSxFQUFFTyx3RUFGVjtBQUdJTCxLQUFHLEVBQUUsYUFIVDtBQUlJQyxLQUFHLEVBQUU7QUFKVCxDQXZCYyxDQUFsQjtBQStCZSxTQUFTSyxTQUFULEdBQXFCO0FBQUE7O0FBQ2hDLHNCQUNJO0FBQ0ksU0FBSyxFQUFFO0FBQ0hDLHFCQUFlLEVBQUUsU0FEZDtBQUVIQyxrQkFBWSxFQUFFLE1BRlg7QUFHSEMsYUFBTyxFQUFFLE1BSE47QUFJSEMsZ0JBQVUsRUFBRTtBQUpULEtBRFg7QUFBQSw0QkFRSTtBQUFLLGVBQVMsRUFBQyxPQUFmO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkosZUFXSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsZ0JBQ0tkLFNBQVMsQ0FBQ2UsR0FBVixDQUFjLFVBQUNDLFFBQUQsRUFBV0MsS0FBWDtBQUFBLDRCQUNYO0FBQWlCLG1CQUFTLEVBQUMsVUFBM0I7QUFBQSxpQ0FDSSxxRUFBQyxpREFBRDtBQUNJLGVBQUcsRUFBRUQsUUFBUSxDQUFDZCxJQURsQjtBQUVJLGlCQUFLLEVBQUUsR0FGWDtBQUdJLGtCQUFNLEVBQUUsRUFIWjtBQUlJLGVBQUcsRUFBQztBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixXQUFVZSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFc7QUFBQSxPQUFkO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMEJIO0tBM0J1QlAsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44ZjU1NWE5ZWI5ZGJjZDdmMTQ5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuY29uc3QgU3VwcGxpZXIgPSBzdHlsZWQuZGl2YGA7XHJcblxyXG5leHBvcnQgeyBTdXBwbGllciB9O1xyXG4iLCJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFN1cHBsaWVyIGZyb20gXCIuL3N0eWxlc1wiO1xyXG5cclxuaW1wb3J0IG1lY2FuIGZyb20gXCIuLi8uLi9wdWJsaWMvc3VwcGxpZXJzL21lY2FuLW1lZGljYWwtbG9nby5wbmdcIjtcclxuaW1wb3J0IHNvZnR3YXZlIGZyb20gXCIuLi8uLi9wdWJsaWMvc3VwcGxpZXJzL3NvZnR3YXZlLWxvZ28ucG5nXCI7XHJcbmltcG9ydCBkcm9wIGZyb20gXCIuLi8uLi9wdWJsaWMvc3VwcGxpZXJzLzFkcm9wLWxvZ28ucG5nXCI7XHJcbmltcG9ydCBiaW9tYXhpbWEgZnJvbSBcIi4uLy4uL3B1YmxpYy9zdXBwbGllcnMvYmlvbWF4aW1hLWxvZ28ucG5nXCI7XHJcbmltcG9ydCBmb3RvbmEgZnJvbSBcIi4uLy4uL3B1YmxpYy9zdXBwbGllcnMvZm90b25hLWxvZ28ucG5nXCI7XHJcblxyXG5jb25zdCBzdXBwbGllcnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJtZWNhbiBtZWRpY2FsXCIsXHJcbiAgICAgICAgbG9nbzogbWVjYW4sXHJcbiAgICAgICAgYWx0OiBcIm1lY2FuIG1lZGljYWwgbG9nb1wiLFxyXG4gICAgICAgIFVSTDogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbG9nbzogc29mdHdhdmUsXHJcbiAgICAgICAgYWx0OiBcInNvZnR3YXZlIG1lZGljYWwgbG9nb1wiLFxyXG4gICAgICAgIFVSTDogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbG9nbzogZHJvcCxcclxuICAgICAgICBhbHQ6IFwiMWRyb3Aga2l0IGxvZ29cIixcclxuICAgICAgICBVUkw6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiYmlvbWF4aW1hXCIsXHJcbiAgICAgICAgbG9nbzogYmlvbWF4aW1hLFxyXG4gICAgICAgIGFsdDogXCJiaW9tYXhpbWEgbG9nb1wiLFxyXG4gICAgICAgIFVSTDogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJmb3RvbmFcIixcclxuICAgICAgICBsb2dvOiBmb3RvbmEsXHJcbiAgICAgICAgYWx0OiBcImZvdG9uYSBsb2dvXCIsXHJcbiAgICAgICAgVVJMOiBcIlwiLFxyXG4gICAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1cHBsaWVycygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZTllOWU5XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgICAgICAgICAgICBwbGFjZUl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPlByb2R1Y3RzPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VwcGxpZXJzXCI+XHJcbiAgICAgICAgICAgICAgICB7c3VwcGxpZXJzLm1hcCgoc3VwcGxpZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJzdXBwbGllclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c3VwcGxpZXIubG9nb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszMDV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezkzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=