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
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\tsote\\Desktop\\bonema\\bonema-medical\\components\\suppliers.js";

function Suppliers() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: (_public_suppliers_mecan_medical_logo_png__WEBPACK_IMPORTED_MODULE_1___default()),
      alt: "mecan medical logo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }, this)
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


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_products_products_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/products/products.json */ "./components/products/products.json");
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/carousel */ "./components/carousel.js");
/* harmony import */ var _components_showCase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/showCase */ "./components/showCase.js");
/* harmony import */ var _styles_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/_layout */ "./styles/_layout.js");
/* harmony import */ var _components_suppliers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/suppliers */ "./components/suppliers.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\tsote\\Desktop\\bonema\\bonema-medical\\pages\\index.js";









function Home() {
  var _this = this;

  console.log(_components_products_products_json__WEBPACK_IMPORTED_MODULE_4__); // const items = softwave.map((item, index) => <div>{item.title}</div>);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "home",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_carousel__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "info",
      style: {
        paddingTop: "50px"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Products"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_suppliers__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "cards",
      children: _components_products_products_json__WEBPACK_IMPORTED_MODULE_4__.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "title",
            children: item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "image",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: item.image,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "description",
            children: !!item.description ? "".concat(item.description.substr(1, 100)) : ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "product-list",
            children: item.products.map(function (sub, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "list-marker",
                  children: "\u2713"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 37
                }, _this), " ", sub.name]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "#",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "enquiry",
              children: "send enquiry"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 25
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_layout__WEBPACK_IMPORTED_MODULE_7__.Container, {
      id: "about",
      style: {
        marginTop: "50px",
        marginBottom: "50px"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: "Bonema is an Award winning, accredited and registered medical device distributor to hospitals, Clinics and retail pharmacies. Our clientele includes to name a few, Netcare Group, Louis Pasteur Holdings Group, Phelang Bonolo Healthcare Group and Sedibeng Hospital, in this process we have accumulated a great deal of experience in servicing clients and delivering on time, servicing Southern Africa. Bonema is also the sole distributor for Sofwave, 1drop and Mecan in Southern Africa and a Fotona, Phillips and BioMaxima SA certified reseller. We have built relationships with trusted and certified manufacturers and logistics companies globally. We have offices in South Africa, Botswana and Swaziland with clientele in Africa, China, Australia and United States of America."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}
_c = Home;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.h3.withConfig({
  displayName: "pages__Title",
  componentId: "a7e56c-0"
})([""]);
var Images = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div.withConfig({
  displayName: "pages__Images",
  componentId: "a7e56c-1"
})(["padding:0.97rem;"]);

var _c;

$RefreshReg$(_c, "Home");

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


/***/ }),

/***/ "./public/suppliers/mecan-medical-logo.png":
/*!*************************************************!*\
  !*** ./public/suppliers/mecan-medical-logo.png ***!
  \*************************************************/
/***/ (function(module) {

module.exports = "/_next/static/images/mecan-medical-logo-a99806ca45b6f316e4166cb1090f024d.png";

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdXBwbGllcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvc3VwcGxpZXJzL21lY2FuLW1lZGljYWwtbG9nby5wbmciXSwibmFtZXMiOlsiU3VwcGxpZXJzIiwibWVjYW4iLCJIb21lIiwiY29uc29sZSIsImxvZyIsInNvZnR3YXZlIiwicGFkZGluZ1RvcCIsIml0ZW0iLCJpbmRleCIsInRpdGxlIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsInN1YnN0ciIsInByb2R1Y3RzIiwibWFwIiwic3ViIiwibmFtZSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIlRpdGxlIiwic3R5bGVkIiwiSW1hZ2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNlLFNBQVNBLFNBQVQsR0FBcUI7QUFDaEMsc0JBQ0k7QUFBQSwyQkFDSTtBQUFLLFNBQUcsRUFBRUMsaUZBQVY7QUFBaUIsU0FBRyxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQUtIO0tBTnVCRCxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEeEI7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRWUsU0FBU0UsSUFBVCxHQUFnQjtBQUFBOztBQUMzQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlDLCtEQUFaLEVBRDJCLENBRzNCOztBQUVBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBSyxRQUFFLEVBQUMsTUFBUjtBQUFBLDZCQUNJLDhEQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFRSTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQXNCLFdBQUssRUFBRTtBQUFFQyxrQkFBVSxFQUFFO0FBQWQsT0FBN0I7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSSixlQW9FSSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcEVKLGVBcUVJO0FBQUssZUFBUyxFQUFDLE9BQWY7QUFBQSxnQkFDS0QsbUVBQUEsQ0FBYSxVQUFDRSxJQUFELEVBQU9DLEtBQVA7QUFBQSw0QkFDVjtBQUFpQixtQkFBUyxFQUFDLE1BQTNCO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLE9BQWY7QUFBQSxzQkFBd0JELElBQUksQ0FBQ0U7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUsscUJBQVMsRUFBQyxPQUFmO0FBQUEsbUNBQ0k7QUFBSyxpQkFBRyxFQUFFRixJQUFJLENBQUNHLEtBQWY7QUFBc0IsaUJBQUcsRUFBQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQUtJO0FBQUsscUJBQVMsRUFBQyxhQUFmO0FBQUEsc0JBQ0ssQ0FBQyxDQUFDSCxJQUFJLENBQUNJLFdBQVAsYUFDUUosSUFBSSxDQUFDSSxXQUFMLENBQWlCQyxNQUFqQixDQUF3QixDQUF4QixFQUEyQixHQUEzQixDQURSLElBRUs7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLGVBVUk7QUFBSSxxQkFBUyxFQUFDLGNBQWQ7QUFBQSxzQkFDS0wsSUFBSSxDQUFDTSxRQUFMLENBQWNDLEdBQWQsQ0FBa0IsVUFBQ0MsR0FBRCxFQUFNUCxLQUFOO0FBQUEsa0NBQ2Y7QUFBQSx3Q0FDSTtBQUFNLDJCQUFTLEVBQUMsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosRUFHWSxHQUhaLEVBSUtPLEdBQUcsQ0FBQ0MsSUFKVDtBQUFBLGlCQUFTUixLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRGU7QUFBQSxhQUFsQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkosZUFvQkksOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFDLEdBQVg7QUFBQSxtQ0FDSTtBQUFHLHVCQUFTLEVBQUMsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcEJKO0FBQUEsV0FBVUEsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURVO0FBQUEsT0FBYjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyRUosZUFpR0ksOERBQUMscURBQUQ7QUFDSSxRQUFFLEVBQUMsT0FEUDtBQUVJLFdBQUssRUFBRTtBQUFFUyxpQkFBUyxFQUFFLE1BQWI7QUFBcUJDLG9CQUFZLEVBQUU7QUFBbkMsT0FGWDtBQUFBLDZCQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpHSjtBQUFBLGtCQURKO0FBeUhIO0tBOUh1QmhCLEk7QUFnSXhCLElBQU1pQixLQUFLLEdBQUdDLG9FQUFIO0FBQUE7QUFBQTtBQUFBLFFBQVg7QUFDQSxJQUFNQyxNQUFNLEdBQUdELHFFQUFIO0FBQUE7QUFBQTtBQUFBLHdCQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0lBLGdHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjlmYzUwMzM0MjVmNzc3Y2EwNmYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWVjYW4gZnJvbSBcIi4uL3B1YmxpYy9zdXBwbGllcnMvbWVjYW4tbWVkaWNhbC1sb2dvLnBuZ1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdXBwbGllcnMoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXttZWNhbn0gYWx0PVwibWVjYW4gbWVkaWNhbCBsb2dvXCIgLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgc29mdHdhdmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMuanNvblwiO1xuaW1wb3J0IENhcm91c2VsIGZyb20gXCIuLi9jb21wb25lbnRzL2Nhcm91c2VsXCI7XG5cbmltcG9ydCBTaG93Y2FzZSBmcm9tIFwiLi4vY29tcG9uZW50cy9zaG93Q2FzZVwiO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4uL3N0eWxlcy9fbGF5b3V0XCI7XG5pbXBvcnQgU3VwcGxpZXJzIGZyb20gXCIuLi9jb21wb25lbnRzL3N1cHBsaWVyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnNvbGUubG9nKHNvZnR3YXZlKTtcblxuICAgIC8vIGNvbnN0IGl0ZW1zID0gc29mdHdhdmUubWFwKChpdGVtLCBpbmRleCkgPT4gPGRpdj57aXRlbS50aXRsZX08L2Rpdj4pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJob21lXCI+XG4gICAgICAgICAgICAgICAgPENhcm91c2VsIC8+XG4gICAgICAgICAgICAgICAgey8qIDxTaG93Y2FzZSAvPiAqL31cbiAgICAgICAgICAgICAgICB7LyogPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkdvb2QgTW9ybmluZyBCb25lbWEgTWVkaWNhbDwvaDE+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIiBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjUwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICA8aDE+UHJvZHVjdHM8L2gxPlxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlPlNLSU4gJiBCT0RZPC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlcz48L0ltYWdlcz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZT53ZWxsbmVzczwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZXM+PC9JbWFnZXM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGU+bWVkaWNhbDwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZXM+PC9JbWFnZXM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGU+cGhhcm1hY2V1dGljYWw8L1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VzPjwvSW1hZ2VzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlPmFuaW1hbCBoZWFsdGg8L1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VzIGNsYXNzTmFtZT1cImltYWdlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGlwaXNpY2luZyBlbGl0LiBPYmNhZWNhdGkgZnVnaWF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3BlcmlvcmVzIHRlbXBvcmEsIGF0cXVlIHJhdGlvbmUsIG5lcXVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsYSB2ZWwgbGFib3Jpb3NhbSBpc3RlIGN1cGlkaXRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGxpY2FibyByZXB1ZGlhbmRhZSwgZG9sb3IgcXVpIGRlYml0aXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lc2NpdW50IHJlaWNpZW5kaXMgZG9sb3JlbXF1ZSBjdW0gcG9ycm8uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW1hZ2VzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlPmJpb3NjaWVuY2U8L1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VzPjwvSW1hZ2VzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8U3VwcGxpZXJzIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzXCI+XG4gICAgICAgICAgICAgICAge3NvZnR3YXZlLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e2l0ZW0udGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2V9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ISFpdGVtLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7aXRlbS5kZXNjcmlwdGlvbi5zdWJzdHIoMSwgMTAwKX1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByb2R1Y3QtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnByb2R1Y3RzLm1hcCgoc3ViLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaXN0LW1hcmtlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjMTAwMDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZW5xdWlyeVwiPnNlbmQgZW5xdWlyeTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgICBpZD1cImFib3V0XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNTBweFwiLCBtYXJnaW5Cb3R0b206IFwiNTBweFwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgQm9uZW1hIGlzIGFuIEF3YXJkIHdpbm5pbmcsIGFjY3JlZGl0ZWQgYW5kIHJlZ2lzdGVyZWRcbiAgICAgICAgICAgICAgICAgICAgbWVkaWNhbCBkZXZpY2UgZGlzdHJpYnV0b3IgdG8gaG9zcGl0YWxzLCBDbGluaWNzIGFuZCByZXRhaWxcbiAgICAgICAgICAgICAgICAgICAgcGhhcm1hY2llcy4gT3VyIGNsaWVudGVsZSBpbmNsdWRlcyB0byBuYW1lIGEgZmV3LCBOZXRjYXJlXG4gICAgICAgICAgICAgICAgICAgIEdyb3VwLCBMb3VpcyBQYXN0ZXVyIEhvbGRpbmdzIEdyb3VwLCBQaGVsYW5nIEJvbm9sb1xuICAgICAgICAgICAgICAgICAgICBIZWFsdGhjYXJlIEdyb3VwIGFuZCBTZWRpYmVuZyBIb3NwaXRhbCwgaW4gdGhpcyBwcm9jZXNzIHdlXG4gICAgICAgICAgICAgICAgICAgIGhhdmUgYWNjdW11bGF0ZWQgYSBncmVhdCBkZWFsIG9mIGV4cGVyaWVuY2UgaW4gc2VydmljaW5nXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudHMgYW5kIGRlbGl2ZXJpbmcgb24gdGltZSwgc2VydmljaW5nIFNvdXRoZXJuIEFmcmljYS5cbiAgICAgICAgICAgICAgICAgICAgQm9uZW1hIGlzIGFsc28gdGhlIHNvbGUgZGlzdHJpYnV0b3IgZm9yIFNvZndhdmUsIDFkcm9wIGFuZFxuICAgICAgICAgICAgICAgICAgICBNZWNhbiBpbiBTb3V0aGVybiBBZnJpY2EgYW5kIGEgRm90b25hLCBQaGlsbGlwcyBhbmRcbiAgICAgICAgICAgICAgICAgICAgQmlvTWF4aW1hIFNBIGNlcnRpZmllZCByZXNlbGxlci4gV2UgaGF2ZSBidWlsdCByZWxhdGlvbnNoaXBzXG4gICAgICAgICAgICAgICAgICAgIHdpdGggdHJ1c3RlZCBhbmQgY2VydGlmaWVkIG1hbnVmYWN0dXJlcnMgYW5kIGxvZ2lzdGljc1xuICAgICAgICAgICAgICAgICAgICBjb21wYW5pZXMgZ2xvYmFsbHkuIFdlIGhhdmUgb2ZmaWNlcyBpbiBTb3V0aCBBZnJpY2EsXG4gICAgICAgICAgICAgICAgICAgIEJvdHN3YW5hIGFuZCBTd2F6aWxhbmQgd2l0aCBjbGllbnRlbGUgaW4gQWZyaWNhLCBDaGluYSxcbiAgICAgICAgICAgICAgICAgICAgQXVzdHJhbGlhIGFuZCBVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2EuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDNgYDtcbmNvbnN0IEltYWdlcyA9IHN0eWxlZC5kaXZgXG4gICAgcGFkZGluZzogMC45N3JlbTtcbmA7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbWVjYW4tbWVkaWNhbC1sb2dvLWE5OTgwNmNhNDViNmYzMTZlNDE2NmNiMTA5MGYwMjRkLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=