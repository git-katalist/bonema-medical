self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/suppliers.js":
/*!*********************************!*\
  !*** ./components/suppliers.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Suppliers; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_suppliers_mecan_medical_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/suppliers/mecan-medical-logo.png */ "./public/suppliers/mecan-medical-logo.png");
/* harmony import */ var _public_suppliers_mecan_medical_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_suppliers_mecan_medical_logo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_suppliers_softwave_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/suppliers/softwave-logo.png */ "./public/suppliers/softwave-logo.png");
/* harmony import */ var _public_suppliers_softwave_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_suppliers_softwave_logo_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_suppliers_1drop_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/suppliers/1drop-logo.png */ "./public/suppliers/1drop-logo.png");
/* harmony import */ var _public_suppliers_1drop_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_suppliers_1drop_logo_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_suppliers_biomaxima_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/suppliers/biomaxima-logo.png */ "./public/suppliers/biomaxima-logo.png");
/* harmony import */ var _public_suppliers_biomaxima_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_suppliers_biomaxima_logo_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_suppliers_fotona_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/suppliers/fotona-logo.png */ "./public/suppliers/fotona-logo.png");
/* harmony import */ var _public_suppliers_fotona_logo_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_suppliers_fotona_logo_png__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);







var suppliers = {
  mecan: {
    logo: (_public_suppliers_mecan_medical_logo_png__WEBPACK_IMPORTED_MODULE_1___default()),
    alt: "mecan medical logo",
    URL: ""
  },
  softwave: {
    logo: (_public_suppliers_softwave_logo_png__WEBPACK_IMPORTED_MODULE_2___default()),
    alt: "softwave medical logo",
    URL: ""
  },
  drop: {
    logo: (_public_suppliers_1drop_logo_png__WEBPACK_IMPORTED_MODULE_3___default()),
    alt: "1drop kit logo",
    URL: ""
  },
  biomaxima: {
    logo: (_public_suppliers_biomaxima_logo_png__WEBPACK_IMPORTED_MODULE_4___default()),
    alt: "biomaxima logo",
    URL: ""
  },
  fotona: {
    logo: (_public_suppliers_fotona_logo_png__WEBPACK_IMPORTED_MODULE_5___default()),
    alt: "fotona logo",
    URL: ""
  }
};
function Suppliers() {
  console.log(suppliers);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: suppliers.map(function (supplier, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: supplier
      }, void 0, false);
    })
  }, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdXBwbGllcnMuanMiXSwibmFtZXMiOlsic3VwcGxpZXJzIiwibWVjYW4iLCJsb2dvIiwiYWx0IiwiVVJMIiwic29mdHdhdmUiLCJkcm9wIiwiYmlvbWF4aW1hIiwiZm90b25hIiwiU3VwcGxpZXJzIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInN1cHBsaWVyIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2RDLE9BQUssRUFBRTtBQUNIQyxRQUFJLEVBQUVELGlGQURIO0FBRUhFLE9BQUcsRUFBRSxvQkFGRjtBQUdIQyxPQUFHLEVBQUU7QUFIRixHQURPO0FBTWRDLFVBQVEsRUFBRTtBQUNOSCxRQUFJLEVBQUVHLDRFQURBO0FBRU5GLE9BQUcsRUFBRSx1QkFGQztBQUdOQyxPQUFHLEVBQUU7QUFIQyxHQU5JO0FBV2RFLE1BQUksRUFBRTtBQUNGSixRQUFJLEVBQUVJLHlFQURKO0FBRUZILE9BQUcsRUFBRSxnQkFGSDtBQUdGQyxPQUFHLEVBQUU7QUFISCxHQVhRO0FBZ0JkRyxXQUFTLEVBQUU7QUFDUEwsUUFBSSxFQUFFSyw2RUFEQztBQUVQSixPQUFHLEVBQUUsZ0JBRkU7QUFHUEMsT0FBRyxFQUFFO0FBSEUsR0FoQkc7QUFxQmRJLFFBQU0sRUFBRTtBQUNKTixRQUFJLEVBQUVNLDBFQURGO0FBRUpMLE9BQUcsRUFBRSxhQUZEO0FBR0pDLE9BQUcsRUFBRTtBQUhEO0FBckJNLENBQWxCO0FBNEJlLFNBQVNLLFNBQVQsR0FBcUI7QUFDaENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZWCxTQUFaO0FBQ0Esc0JBQ0k7QUFBQSxjQU9LQSxTQUFTLENBQUNZLEdBQVYsQ0FBYyxVQUFDQyxRQUFELEVBQVdDLEtBQVg7QUFBQSwwQkFDWDtBQUFBLGtCQUFHRDtBQUFILHVCQURXO0FBQUEsS0FBZDtBQVBMLG1CQURKO0FBYUg7S0FmdUJKLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmU0NzEwOGNmZGViZGQ0YWEzMjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZWNhbiBmcm9tIFwiLi4vcHVibGljL3N1cHBsaWVycy9tZWNhbi1tZWRpY2FsLWxvZ28ucG5nXCI7XHJcbmltcG9ydCBzb2Z0d2F2ZSBmcm9tIFwiLi4vcHVibGljL3N1cHBsaWVycy9zb2Z0d2F2ZS1sb2dvLnBuZ1wiO1xyXG5pbXBvcnQgZHJvcCBmcm9tIFwiLi4vcHVibGljL3N1cHBsaWVycy8xZHJvcC1sb2dvLnBuZ1wiO1xyXG5pbXBvcnQgYmlvbWF4aW1hIGZyb20gXCIuLi9wdWJsaWMvc3VwcGxpZXJzL2Jpb21heGltYS1sb2dvLnBuZ1wiO1xyXG5pbXBvcnQgZm90b25hIGZyb20gXCIuLi9wdWJsaWMvc3VwcGxpZXJzL2ZvdG9uYS1sb2dvLnBuZ1wiO1xyXG5cclxuY29uc3Qgc3VwcGxpZXJzID0ge1xyXG4gICAgbWVjYW46IHtcclxuICAgICAgICBsb2dvOiBtZWNhbixcclxuICAgICAgICBhbHQ6IFwibWVjYW4gbWVkaWNhbCBsb2dvXCIsXHJcbiAgICAgICAgVVJMOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHNvZnR3YXZlOiB7XHJcbiAgICAgICAgbG9nbzogc29mdHdhdmUsXHJcbiAgICAgICAgYWx0OiBcInNvZnR3YXZlIG1lZGljYWwgbG9nb1wiLFxyXG4gICAgICAgIFVSTDogXCJcIixcclxuICAgIH0sXHJcbiAgICBkcm9wOiB7XHJcbiAgICAgICAgbG9nbzogZHJvcCxcclxuICAgICAgICBhbHQ6IFwiMWRyb3Aga2l0IGxvZ29cIixcclxuICAgICAgICBVUkw6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgYmlvbWF4aW1hOiB7XHJcbiAgICAgICAgbG9nbzogYmlvbWF4aW1hLFxyXG4gICAgICAgIGFsdDogXCJiaW9tYXhpbWEgbG9nb1wiLFxyXG4gICAgICAgIFVSTDogXCJcIixcclxuICAgIH0sXHJcbiAgICBmb3RvbmE6IHtcclxuICAgICAgICBsb2dvOiBmb3RvbmEsXHJcbiAgICAgICAgYWx0OiBcImZvdG9uYSBsb2dvXCIsXHJcbiAgICAgICAgVVJMOiBcIlwiLFxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1cHBsaWVycygpIHtcclxuICAgIGNvbnNvbGUubG9nKHN1cHBsaWVycyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17bWVjYW59IGFsdD1cIm1lY2FuIG1lZGljYWwgbG9nb1wiIC8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtzb2Z0d2F2ZX0gYWx0PVwic29mdHdhdmUgbWVkaWNhbCBsb2dvXCIgLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2Ryb3B9IGFsdD1cIjFkcm9wIG1lZGljYWwgbG9nb1wiIC8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtiaW9tYXhpbWF9IGFsdD1cImJpb21heGltYSBtZWRpY2FsIGxvZ29cIiAvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17Zm90b25hfSBhbHQ9XCJmb3RvbmEgbWVkaWNhbCBsb2dvXCIgLz4gKi99XHJcblxyXG4gICAgICAgICAgICB7c3VwcGxpZXJzLm1hcCgoc3VwcGxpZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8PntzdXBwbGllcn08Lz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=