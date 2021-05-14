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


var _jsxFileName = "C:\\Users\\tsote\\Desktop\\bonema\\bonema-medical\\components\\suppliers.js";





var suppliers = [{
  name: "mecan medical",
  logo: (_public_suppliers_mecan_medical_logo_png__WEBPACK_IMPORTED_MODULE_1___default()),
  alt: "mecan medical logo",
  URL: ""
}, {
  logo: (_public_suppliers_softwave_logo_png__WEBPACK_IMPORTED_MODULE_2___default()),
  alt: "softwave medical logo",
  URL: ""
}, {
  logo: (_public_suppliers_1drop_logo_png__WEBPACK_IMPORTED_MODULE_3___default()),
  alt: "1drop kit logo",
  URL: ""
}, {
  name: "biomaxima",
  logo: (_public_suppliers_biomaxima_logo_png__WEBPACK_IMPORTED_MODULE_4___default()),
  alt: "biomaxima logo",
  URL: ""
}, {
  name: "fotona",
  logo: (_public_suppliers_fotona_logo_png__WEBPACK_IMPORTED_MODULE_5___default()),
  alt: "fotona logo",
  URL: ""
}];
function Suppliers() {
  var _this = this;

  console.log(suppliers);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: suppliers.map(function (supplier, index) {
      return (
        /*#__PURE__*/
        // <>{supplier.name}</>
        (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "supplier",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: supplier.logo,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }, _this)
      );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdXBwbGllcnMuanMiXSwibmFtZXMiOlsic3VwcGxpZXJzIiwibmFtZSIsImxvZ28iLCJtZWNhbiIsImFsdCIsIlVSTCIsInNvZnR3YXZlIiwiZHJvcCIsImJpb21heGltYSIsImZvdG9uYSIsIlN1cHBsaWVycyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJzdXBwbGllciIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUcsQ0FDZDtBQUNJQyxNQUFJLEVBQUUsZUFEVjtBQUVJQyxNQUFJLEVBQUVDLGlGQUZWO0FBR0lDLEtBQUcsRUFBRSxvQkFIVDtBQUlJQyxLQUFHLEVBQUU7QUFKVCxDQURjLEVBT2Q7QUFDSUgsTUFBSSxFQUFFSSw0RUFEVjtBQUVJRixLQUFHLEVBQUUsdUJBRlQ7QUFHSUMsS0FBRyxFQUFFO0FBSFQsQ0FQYyxFQVlkO0FBQ0lILE1BQUksRUFBRUsseUVBRFY7QUFFSUgsS0FBRyxFQUFFLGdCQUZUO0FBR0lDLEtBQUcsRUFBRTtBQUhULENBWmMsRUFpQmQ7QUFDSUosTUFBSSxFQUFFLFdBRFY7QUFFSUMsTUFBSSxFQUFFTSw2RUFGVjtBQUdJSixLQUFHLEVBQUUsZ0JBSFQ7QUFJSUMsS0FBRyxFQUFFO0FBSlQsQ0FqQmMsRUF1QmQ7QUFDSUosTUFBSSxFQUFFLFFBRFY7QUFFSUMsTUFBSSxFQUFFTywwRUFGVjtBQUdJTCxLQUFHLEVBQUUsYUFIVDtBQUlJQyxLQUFHLEVBQUU7QUFKVCxDQXZCYyxDQUFsQjtBQStCZSxTQUFTSyxTQUFULEdBQXFCO0FBQUE7O0FBQ2hDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVosU0FBWjtBQUNBLHNCQUNJO0FBQUEsY0FPS0EsU0FBUyxDQUFDYSxHQUFWLENBQWMsVUFBQ0MsUUFBRCxFQUFXQyxLQUFYO0FBQUE7QUFBQTtBQUNYO0FBQ0E7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxpQ0FDSTtBQUFLLGVBQUcsRUFBRUQsUUFBUSxDQUFDWixJQUFuQjtBQUF5QixlQUFHLEVBQUM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGVztBQUFBLEtBQWQ7QUFQTCxtQkFESjtBQWdCSDtLQWxCdUJRLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGIxMDdlZDBlYmZlODQwOWU0ZTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZWNhbiBmcm9tIFwiLi4vcHVibGljL3N1cHBsaWVycy9tZWNhbi1tZWRpY2FsLWxvZ28ucG5nXCI7XHJcbmltcG9ydCBzb2Z0d2F2ZSBmcm9tIFwiLi4vcHVibGljL3N1cHBsaWVycy9zb2Z0d2F2ZS1sb2dvLnBuZ1wiO1xyXG5pbXBvcnQgZHJvcCBmcm9tIFwiLi4vcHVibGljL3N1cHBsaWVycy8xZHJvcC1sb2dvLnBuZ1wiO1xyXG5pbXBvcnQgYmlvbWF4aW1hIGZyb20gXCIuLi9wdWJsaWMvc3VwcGxpZXJzL2Jpb21heGltYS1sb2dvLnBuZ1wiO1xyXG5pbXBvcnQgZm90b25hIGZyb20gXCIuLi9wdWJsaWMvc3VwcGxpZXJzL2ZvdG9uYS1sb2dvLnBuZ1wiO1xyXG5cclxuY29uc3Qgc3VwcGxpZXJzID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwibWVjYW4gbWVkaWNhbFwiLFxyXG4gICAgICAgIGxvZ286IG1lY2FuLFxyXG4gICAgICAgIGFsdDogXCJtZWNhbiBtZWRpY2FsIGxvZ29cIixcclxuICAgICAgICBVUkw6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxvZ286IHNvZnR3YXZlLFxyXG4gICAgICAgIGFsdDogXCJzb2Z0d2F2ZSBtZWRpY2FsIGxvZ29cIixcclxuICAgICAgICBVUkw6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxvZ286IGRyb3AsXHJcbiAgICAgICAgYWx0OiBcIjFkcm9wIGtpdCBsb2dvXCIsXHJcbiAgICAgICAgVVJMOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcImJpb21heGltYVwiLFxyXG4gICAgICAgIGxvZ286IGJpb21heGltYSxcclxuICAgICAgICBhbHQ6IFwiYmlvbWF4aW1hIGxvZ29cIixcclxuICAgICAgICBVUkw6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiZm90b25hXCIsXHJcbiAgICAgICAgbG9nbzogZm90b25hLFxyXG4gICAgICAgIGFsdDogXCJmb3RvbmEgbG9nb1wiLFxyXG4gICAgICAgIFVSTDogXCJcIixcclxuICAgIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdXBwbGllcnMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhzdXBwbGllcnMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7LyogPGltZyBzcmM9e21lY2FufSBhbHQ9XCJtZWNhbiBtZWRpY2FsIGxvZ29cIiAvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17c29mdHdhdmV9IGFsdD1cInNvZnR3YXZlIG1lZGljYWwgbG9nb1wiIC8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtkcm9wfSBhbHQ9XCIxZHJvcCBtZWRpY2FsIGxvZ29cIiAvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YmlvbWF4aW1hfSBhbHQ9XCJiaW9tYXhpbWEgbWVkaWNhbCBsb2dvXCIgLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2ZvdG9uYX0gYWx0PVwiZm90b25hIG1lZGljYWwgbG9nb1wiIC8+ICovfVxyXG5cclxuICAgICAgICAgICAge3N1cHBsaWVycy5tYXAoKHN1cHBsaWVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgLy8gPD57c3VwcGxpZXIubmFtZX08Lz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VwcGxpZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c3VwcGxpZXIubG9nb30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==