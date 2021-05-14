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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    style: {
      backgroundColor: "#e9e9e9",
      marginBottom: "5rem"
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "suppliers",
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
              lineNumber: 52,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 21
          }, _this)
        );
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdXBwbGllcnMuanMiXSwibmFtZXMiOlsic3VwcGxpZXJzIiwibmFtZSIsImxvZ28iLCJtZWNhbiIsImFsdCIsIlVSTCIsInNvZnR3YXZlIiwiZHJvcCIsImJpb21heGltYSIsImZvdG9uYSIsIlN1cHBsaWVycyIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5Cb3R0b20iLCJtYXAiLCJzdXBwbGllciIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRyxDQUNkO0FBQ0lDLE1BQUksRUFBRSxlQURWO0FBRUlDLE1BQUksRUFBRUMsaUZBRlY7QUFHSUMsS0FBRyxFQUFFLG9CQUhUO0FBSUlDLEtBQUcsRUFBRTtBQUpULENBRGMsRUFPZDtBQUNJSCxNQUFJLEVBQUVJLDRFQURWO0FBRUlGLEtBQUcsRUFBRSx1QkFGVDtBQUdJQyxLQUFHLEVBQUU7QUFIVCxDQVBjLEVBWWQ7QUFDSUgsTUFBSSxFQUFFSyx5RUFEVjtBQUVJSCxLQUFHLEVBQUUsZ0JBRlQ7QUFHSUMsS0FBRyxFQUFFO0FBSFQsQ0FaYyxFQWlCZDtBQUNJSixNQUFJLEVBQUUsV0FEVjtBQUVJQyxNQUFJLEVBQUVNLDZFQUZWO0FBR0lKLEtBQUcsRUFBRSxnQkFIVDtBQUlJQyxLQUFHLEVBQUU7QUFKVCxDQWpCYyxFQXVCZDtBQUNJSixNQUFJLEVBQUUsUUFEVjtBQUVJQyxNQUFJLEVBQUVPLDBFQUZWO0FBR0lMLEtBQUcsRUFBRSxhQUhUO0FBSUlDLEtBQUcsRUFBRTtBQUpULENBdkJjLENBQWxCO0FBK0JlLFNBQVNLLFNBQVQsR0FBcUI7QUFBQTs7QUFDaENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZWixTQUFaO0FBQ0Esc0JBQ0k7QUFBUyxTQUFLLEVBQUU7QUFBRWEscUJBQWUsRUFBRSxTQUFuQjtBQUE4QkMsa0JBQVksRUFBRTtBQUE1QyxLQUFoQjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSxnQkFPS2QsU0FBUyxDQUFDZSxHQUFWLENBQWMsVUFBQ0MsUUFBRCxFQUFXQyxLQUFYO0FBQUE7QUFBQTtBQUNYO0FBQ0E7QUFBSyxxQkFBUyxFQUFDLFVBQWY7QUFBQSxtQ0FDSTtBQUFLLGlCQUFHLEVBQUVELFFBQVEsQ0FBQ2QsSUFBbkI7QUFBeUIsaUJBQUcsRUFBQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZXO0FBQUEsT0FBZDtBQVBMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFrQkg7S0FwQnVCUSxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVmYzJlYzAwOWRiZTc5ZDNjMGQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWVjYW4gZnJvbSBcIi4uL3B1YmxpYy9zdXBwbGllcnMvbWVjYW4tbWVkaWNhbC1sb2dvLnBuZ1wiO1xyXG5pbXBvcnQgc29mdHdhdmUgZnJvbSBcIi4uL3B1YmxpYy9zdXBwbGllcnMvc29mdHdhdmUtbG9nby5wbmdcIjtcclxuaW1wb3J0IGRyb3AgZnJvbSBcIi4uL3B1YmxpYy9zdXBwbGllcnMvMWRyb3AtbG9nby5wbmdcIjtcclxuaW1wb3J0IGJpb21heGltYSBmcm9tIFwiLi4vcHVibGljL3N1cHBsaWVycy9iaW9tYXhpbWEtbG9nby5wbmdcIjtcclxuaW1wb3J0IGZvdG9uYSBmcm9tIFwiLi4vcHVibGljL3N1cHBsaWVycy9mb3RvbmEtbG9nby5wbmdcIjtcclxuXHJcbmNvbnN0IHN1cHBsaWVycyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIm1lY2FuIG1lZGljYWxcIixcclxuICAgICAgICBsb2dvOiBtZWNhbixcclxuICAgICAgICBhbHQ6IFwibWVjYW4gbWVkaWNhbCBsb2dvXCIsXHJcbiAgICAgICAgVVJMOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsb2dvOiBzb2Z0d2F2ZSxcclxuICAgICAgICBhbHQ6IFwic29mdHdhdmUgbWVkaWNhbCBsb2dvXCIsXHJcbiAgICAgICAgVVJMOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsb2dvOiBkcm9wLFxyXG4gICAgICAgIGFsdDogXCIxZHJvcCBraXQgbG9nb1wiLFxyXG4gICAgICAgIFVSTDogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJiaW9tYXhpbWFcIixcclxuICAgICAgICBsb2dvOiBiaW9tYXhpbWEsXHJcbiAgICAgICAgYWx0OiBcImJpb21heGltYSBsb2dvXCIsXHJcbiAgICAgICAgVVJMOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcImZvdG9uYVwiLFxyXG4gICAgICAgIGxvZ286IGZvdG9uYSxcclxuICAgICAgICBhbHQ6IFwiZm90b25hIGxvZ29cIixcclxuICAgICAgICBVUkw6IFwiXCIsXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3VwcGxpZXJzKCkge1xyXG4gICAgY29uc29sZS5sb2coc3VwcGxpZXJzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNlOWU5ZTlcIiwgbWFyZ2luQm90dG9tOiBcIjVyZW1cIiB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdXBwbGllcnNcIj5cclxuICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17bWVjYW59IGFsdD1cIm1lY2FuIG1lZGljYWwgbG9nb1wiIC8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtzb2Z0d2F2ZX0gYWx0PVwic29mdHdhdmUgbWVkaWNhbCBsb2dvXCIgLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2Ryb3B9IGFsdD1cIjFkcm9wIG1lZGljYWwgbG9nb1wiIC8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtiaW9tYXhpbWF9IGFsdD1cImJpb21heGltYSBtZWRpY2FsIGxvZ29cIiAvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17Zm90b25hfSBhbHQ9XCJmb3RvbmEgbWVkaWNhbCBsb2dvXCIgLz4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAge3N1cHBsaWVycy5tYXAoKHN1cHBsaWVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDw+e3N1cHBsaWVyLm5hbWV9PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdXBwbGllclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c3VwcGxpZXIubG9nb30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=