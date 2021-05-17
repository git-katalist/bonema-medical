webpackHotUpdate_N_E("pages/index",{

/***/ "./components/suppliers.js":
/*!*********************************!*\
  !*** ./components/suppliers.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Suppliers; });
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

var _jsxFileName = "C:\\Users\\tsote\\Desktop\\bonema\\bonema-medical\\components\\suppliers.js";





var suppliers = [{
  name: "mecan medical",
  logo: _public_suppliers_mecan_medical_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  alt: "mecan medical logo",
  URL: ""
}, {
  logo: _public_suppliers_softwave_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
  alt: "softwave medical logo",
  URL: ""
}, {
  logo: _public_suppliers_1drop_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
  alt: "1drop kit logo",
  URL: ""
}, {
  name: "biomaxima",
  logo: _public_suppliers_biomaxima_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  alt: "biomaxima logo",
  URL: ""
}, {
  name: "fotona",
  logo: _public_suppliers_fotona_logo_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  alt: "fotona logo",
  URL: ""
}];
function Suppliers() {
  var _this = this;

  console.log(suppliers);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    style: {
      backgroundColor: "#e9e9e9",
      marginBottom: "5rem",
      display: "grid",
      placeItems: "center"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "suppliers",
      children: suppliers.map(function (supplier, index) {
        return (
          /*#__PURE__*/
          // <>{supplier.name}</>
          Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "supplier",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Image, {
              src: supplier.logo,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 21
          }, _this)
        );
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdXBwbGllcnMuanMiXSwibmFtZXMiOlsic3VwcGxpZXJzIiwibmFtZSIsImxvZ28iLCJtZWNhbiIsImFsdCIsIlVSTCIsInNvZnR3YXZlIiwiZHJvcCIsImJpb21heGltYSIsImZvdG9uYSIsIlN1cHBsaWVycyIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwicGxhY2VJdGVtcyIsIm1hcCIsInN1cHBsaWVyIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRyxDQUNkO0FBQ0lDLE1BQUksRUFBRSxlQURWO0FBRUlDLE1BQUksRUFBRUMsK0VBRlY7QUFHSUMsS0FBRyxFQUFFLG9CQUhUO0FBSUlDLEtBQUcsRUFBRTtBQUpULENBRGMsRUFPZDtBQUNJSCxNQUFJLEVBQUVJLDBFQURWO0FBRUlGLEtBQUcsRUFBRSx1QkFGVDtBQUdJQyxLQUFHLEVBQUU7QUFIVCxDQVBjLEVBWWQ7QUFDSUgsTUFBSSxFQUFFSyx1RUFEVjtBQUVJSCxLQUFHLEVBQUUsZ0JBRlQ7QUFHSUMsS0FBRyxFQUFFO0FBSFQsQ0FaYyxFQWlCZDtBQUNJSixNQUFJLEVBQUUsV0FEVjtBQUVJQyxNQUFJLEVBQUVNLDJFQUZWO0FBR0lKLEtBQUcsRUFBRSxnQkFIVDtBQUlJQyxLQUFHLEVBQUU7QUFKVCxDQWpCYyxFQXVCZDtBQUNJSixNQUFJLEVBQUUsUUFEVjtBQUVJQyxNQUFJLEVBQUVPLHdFQUZWO0FBR0lMLEtBQUcsRUFBRSxhQUhUO0FBSUlDLEtBQUcsRUFBRTtBQUpULENBdkJjLENBQWxCO0FBK0JlLFNBQVNLLFNBQVQsR0FBcUI7QUFBQTs7QUFDaENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZWixTQUFaO0FBQ0Esc0JBQ0k7QUFDSSxTQUFLLEVBQUU7QUFDSGEscUJBQWUsRUFBRSxTQURkO0FBRUhDLGtCQUFZLEVBQUUsTUFGWDtBQUdIQyxhQUFPLEVBQUUsTUFITjtBQUlIQyxnQkFBVSxFQUFFO0FBSlQsS0FEWDtBQUFBLDJCQVFJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSxnQkFPS2hCLFNBQVMsQ0FBQ2lCLEdBQVYsQ0FBYyxVQUFDQyxRQUFELEVBQVdDLEtBQVg7QUFBQTtBQUFBO0FBQ1g7QUFDQTtBQUFLLHFCQUFTLEVBQUMsVUFBZjtBQUFBLG1DQUNJLHFFQUFDLEtBQUQ7QUFBTyxpQkFBRyxFQUFFRCxRQUFRLENBQUNoQixJQUFyQjtBQUEyQixpQkFBRyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlc7QUFBQSxPQUFkO0FBUEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXlCSDtLQTNCdUJRLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTUyYWJiMjU5YTVhYWRlNzQ0MmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZWNhbiBmcm9tIFwiLi4vcHVibGljL3N1cHBsaWVycy9tZWNhbi1tZWRpY2FsLWxvZ28ucG5nXCI7XHJcbmltcG9ydCBzb2Z0d2F2ZSBmcm9tIFwiLi4vcHVibGljL3N1cHBsaWVycy9zb2Z0d2F2ZS1sb2dvLnBuZ1wiO1xyXG5pbXBvcnQgZHJvcCBmcm9tIFwiLi4vcHVibGljL3N1cHBsaWVycy8xZHJvcC1sb2dvLnBuZ1wiO1xyXG5pbXBvcnQgYmlvbWF4aW1hIGZyb20gXCIuLi9wdWJsaWMvc3VwcGxpZXJzL2Jpb21heGltYS1sb2dvLnBuZ1wiO1xyXG5pbXBvcnQgZm90b25hIGZyb20gXCIuLi9wdWJsaWMvc3VwcGxpZXJzL2ZvdG9uYS1sb2dvLnBuZ1wiO1xyXG5cclxuY29uc3Qgc3VwcGxpZXJzID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwibWVjYW4gbWVkaWNhbFwiLFxyXG4gICAgICAgIGxvZ286IG1lY2FuLFxyXG4gICAgICAgIGFsdDogXCJtZWNhbiBtZWRpY2FsIGxvZ29cIixcclxuICAgICAgICBVUkw6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxvZ286IHNvZnR3YXZlLFxyXG4gICAgICAgIGFsdDogXCJzb2Z0d2F2ZSBtZWRpY2FsIGxvZ29cIixcclxuICAgICAgICBVUkw6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxvZ286IGRyb3AsXHJcbiAgICAgICAgYWx0OiBcIjFkcm9wIGtpdCBsb2dvXCIsXHJcbiAgICAgICAgVVJMOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcImJpb21heGltYVwiLFxyXG4gICAgICAgIGxvZ286IGJpb21heGltYSxcclxuICAgICAgICBhbHQ6IFwiYmlvbWF4aW1hIGxvZ29cIixcclxuICAgICAgICBVUkw6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiZm90b25hXCIsXHJcbiAgICAgICAgbG9nbzogZm90b25hLFxyXG4gICAgICAgIGFsdDogXCJmb3RvbmEgbG9nb1wiLFxyXG4gICAgICAgIFVSTDogXCJcIixcclxuICAgIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdXBwbGllcnMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhzdXBwbGllcnMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNlOWU5ZTlcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cmVtXCIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgICAgICAgICAgICAgIHBsYWNlSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1cHBsaWVyc1wiPlxyXG4gICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXttZWNhbn0gYWx0PVwibWVjYW4gbWVkaWNhbCBsb2dvXCIgLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3NvZnR3YXZlfSBhbHQ9XCJzb2Z0d2F2ZSBtZWRpY2FsIGxvZ29cIiAvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17ZHJvcH0gYWx0PVwiMWRyb3AgbWVkaWNhbCBsb2dvXCIgLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2Jpb21heGltYX0gYWx0PVwiYmlvbWF4aW1hIG1lZGljYWwgbG9nb1wiIC8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtmb3RvbmF9IGFsdD1cImZvdG9uYSBtZWRpY2FsIGxvZ29cIiAvPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICB7c3VwcGxpZXJzLm1hcCgoc3VwcGxpZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gPD57c3VwcGxpZXIubmFtZX08Lz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1cHBsaWVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3N1cHBsaWVyLmxvZ299IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9