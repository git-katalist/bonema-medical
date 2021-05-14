self["webpackHotUpdate_N_E"]("pages/index",{

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\tsote\\Desktop\\bonema\\bonema-medical\\pages\\index.js";








function Home() {
  var _this = this;

  console.log(_components_products_products_json__WEBPACK_IMPORTED_MODULE_4__); // const items = softwave.map((item, index) => <div>{item.title}</div>);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_carousel__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
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
        lineNumber: 27,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
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
            lineNumber: 89,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "image",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: item.image,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "description",
            children: !!item.description ? "".concat(item.description.substr(1, 100), " <span>&nbsp;...</span>") : ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "product-list",
            children: item.products.map(function (sub, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: sub.name
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 25
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_layout__WEBPACK_IMPORTED_MODULE_7__.Container, {
      style: {
        marginTop: "50px",
        marginBottom: "50px"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: "Bonema is an Award winning, accredited and registered medical device distributor to hospitals, Clinics and retail pharmacies. Our clientele includes to name a few, Netcare Group, Louis Pasteur Holdings Group, Phelang Bonolo Healthcare Group and Sedibeng Hospital, in this process we have accumulated a great deal of experience in servicing clients and delivering on time, servicing Southern Africa. Bonema is also the sole distributor for Sofwave, 1drop and Mecan in Southern Africa and a Fotona, Phillips and BioMaxima SA certified reseller. We have built relationships with trusted and certified manufacturers and logistics companies globally. We have offices in South Africa, Botswana and Swaziland with clientele in Africa, China, Australia and United States of America."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}
_c = Home;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.h3.withConfig({
  displayName: "pages__Title",
  componentId: "a7e56c-0"
})([""]);
var Images = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.div.withConfig({
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbnNvbGUiLCJsb2ciLCJzb2Z0d2F2ZSIsInBhZGRpbmdUb3AiLCJpdGVtIiwiaW5kZXgiLCJ0aXRsZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJzdWJzdHIiLCJwcm9kdWN0cyIsIm1hcCIsInN1YiIsIm5hbWUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJUaXRsZSIsInN0eWxlZCIsIkltYWdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDM0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQywrREFBWixFQUQyQixDQUczQjs7QUFFQSxzQkFDSTtBQUFBLDRCQUNJO0FBQUEsNkJBQ0ksOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQVFJO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBc0IsV0FBSyxFQUFFO0FBQUVDLGtCQUFVLEVBQUU7QUFBZCxPQUE3QjtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJKLGVBb0VJO0FBQUssZUFBUyxFQUFDLE9BQWY7QUFBQSxnQkFDS0QsbUVBQUEsQ0FBYSxVQUFDRSxJQUFELEVBQU9DLEtBQVA7QUFBQSw0QkFDVjtBQUFpQixtQkFBUyxFQUFDLE1BQTNCO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLE9BQWY7QUFBQSxzQkFBd0JELElBQUksQ0FBQ0U7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUsscUJBQVMsRUFBQyxPQUFmO0FBQUEsbUNBQ0k7QUFBSyxpQkFBRyxFQUFFRixJQUFJLENBQUNHLEtBQWY7QUFBc0IsaUJBQUcsRUFBQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQUtJO0FBQUsscUJBQVMsRUFBQyxhQUFmO0FBQUEsc0JBQ0ssQ0FBQyxDQUFDSCxJQUFJLENBQUNJLFdBQVAsYUFDUUosSUFBSSxDQUFDSSxXQUFMLENBQWlCQyxNQUFqQixDQUNDLENBREQsRUFFQyxHQUZELENBRFIsK0JBS0s7QUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLGVBYUk7QUFBSSxxQkFBUyxFQUFDLGNBQWQ7QUFBQSxzQkFDS0wsSUFBSSxDQUFDTSxRQUFMLENBQWNDLEdBQWQsQ0FBa0IsVUFBQ0MsR0FBRCxFQUFNUCxLQUFOO0FBQUEsa0NBQ2Y7QUFBQSwwQkFBaUJPLEdBQUcsQ0FBQ0M7QUFBckIsaUJBQVNSLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEZTtBQUFBLGFBQWxCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFiSjtBQUFBLFdBQVVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVTtBQUFBLE9BQWI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcEVKLGVBMkZJLDhEQUFDLHFEQUFEO0FBQVcsV0FBSyxFQUFFO0FBQUVTLGlCQUFTLEVBQUUsTUFBYjtBQUFxQkMsb0JBQVksRUFBRTtBQUFuQyxPQUFsQjtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNGSjtBQUFBLGtCQURKO0FBZ0hIO0tBckh1QmhCLEk7QUF1SHhCLElBQU1pQixLQUFLLEdBQUdDLG9FQUFIO0FBQUE7QUFBQTtBQUFBLFFBQVg7QUFDQSxJQUFNQyxNQUFNLEdBQUdELHFFQUFIO0FBQUE7QUFBQTtBQUFBLHdCQUFaIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBmYWY2ZDliZTdlZDM5OTgxMWE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCBzb2Z0d2F2ZSBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy5qc29uXCI7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2Fyb3VzZWxcIjtcblxuaW1wb3J0IFNob3djYXNlIGZyb20gXCIuLi9jb21wb25lbnRzL3Nob3dDYXNlXCI7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi4vc3R5bGVzL19sYXlvdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zb2xlLmxvZyhzb2Z0d2F2ZSk7XG5cbiAgICAvLyBjb25zdCBpdGVtcyA9IHNvZnR3YXZlLm1hcCgoaXRlbSwgaW5kZXgpID0+IDxkaXY+e2l0ZW0udGl0bGV9PC9kaXY+KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbCAvPlxuICAgICAgICAgICAgICAgIHsvKiA8U2hvd2Nhc2UgLz4gKi99XG4gICAgICAgICAgICAgICAgey8qIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5Hb29kIE1vcm5pbmcgQm9uZW1hIE1lZGljYWw8L2gxPlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCIgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCI1MHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgPGgxPlByb2R1Y3RzPC9oMT5cbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjYXJkc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZT5TS0lOICYgQk9EWTwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZXM+PC9JbWFnZXM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGU+d2VsbG5lc3M8L1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VzPjwvSW1hZ2VzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlPm1lZGljYWw8L1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VzPjwvSW1hZ2VzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlPnBoYXJtYWNldXRpY2FsPC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlcz48L0ltYWdlcz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZT5hbmltYWwgaGVhbHRoPC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlcyBjbGFzc05hbWU9XCJpbWFnZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1clxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRpcGlzaWNpbmcgZWxpdC4gT2JjYWVjYXRpIGZ1Z2lhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNwZXJpb3JlcyB0ZW1wb3JhLCBhdHF1ZSByYXRpb25lLCBuZXF1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbGEgdmVsIGxhYm9yaW9zYW0gaXN0ZSBjdXBpZGl0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBsaWNhYm8gcmVwdWRpYW5kYWUsIGRvbG9yIHF1aSBkZWJpdGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXNjaXVudCByZWljaWVuZGlzIGRvbG9yZW1xdWUgY3VtIHBvcnJvLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ltYWdlcz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZT5iaW9zY2llbmNlPC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlcz48L0ltYWdlcz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkc1wiPlxuICAgICAgICAgICAgICAgIHtzb2Z0d2F2ZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPntpdGVtLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyEhaXRlbS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGAke2l0ZW0uZGVzY3JpcHRpb24uc3Vic3RyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSA8c3Bhbj4mbmJzcDsuLi48L3NwYW4+YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwcm9kdWN0LWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wcm9kdWN0cy5tYXAoKHN1YiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PntzdWIubmFtZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb250YWluZXIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjUwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjUwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBCb25lbWEgaXMgYW4gQXdhcmQgd2lubmluZywgYWNjcmVkaXRlZCBhbmQgcmVnaXN0ZXJlZFxuICAgICAgICAgICAgICAgICAgICBtZWRpY2FsIGRldmljZSBkaXN0cmlidXRvciB0byBob3NwaXRhbHMsIENsaW5pY3MgYW5kIHJldGFpbFxuICAgICAgICAgICAgICAgICAgICBwaGFybWFjaWVzLiBPdXIgY2xpZW50ZWxlIGluY2x1ZGVzIHRvIG5hbWUgYSBmZXcsIE5ldGNhcmVcbiAgICAgICAgICAgICAgICAgICAgR3JvdXAsIExvdWlzIFBhc3RldXIgSG9sZGluZ3MgR3JvdXAsIFBoZWxhbmcgQm9ub2xvXG4gICAgICAgICAgICAgICAgICAgIEhlYWx0aGNhcmUgR3JvdXAgYW5kIFNlZGliZW5nIEhvc3BpdGFsLCBpbiB0aGlzIHByb2Nlc3Mgd2VcbiAgICAgICAgICAgICAgICAgICAgaGF2ZSBhY2N1bXVsYXRlZCBhIGdyZWF0IGRlYWwgb2YgZXhwZXJpZW5jZSBpbiBzZXJ2aWNpbmdcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50cyBhbmQgZGVsaXZlcmluZyBvbiB0aW1lLCBzZXJ2aWNpbmcgU291dGhlcm4gQWZyaWNhLlxuICAgICAgICAgICAgICAgICAgICBCb25lbWEgaXMgYWxzbyB0aGUgc29sZSBkaXN0cmlidXRvciBmb3IgU29md2F2ZSwgMWRyb3AgYW5kXG4gICAgICAgICAgICAgICAgICAgIE1lY2FuIGluIFNvdXRoZXJuIEFmcmljYSBhbmQgYSBGb3RvbmEsIFBoaWxsaXBzIGFuZFxuICAgICAgICAgICAgICAgICAgICBCaW9NYXhpbWEgU0EgY2VydGlmaWVkIHJlc2VsbGVyLiBXZSBoYXZlIGJ1aWx0IHJlbGF0aW9uc2hpcHNcbiAgICAgICAgICAgICAgICAgICAgd2l0aCB0cnVzdGVkIGFuZCBjZXJ0aWZpZWQgbWFudWZhY3R1cmVycyBhbmQgbG9naXN0aWNzXG4gICAgICAgICAgICAgICAgICAgIGNvbXBhbmllcyBnbG9iYWxseS4gV2UgaGF2ZSBvZmZpY2VzIGluIFNvdXRoIEFmcmljYSxcbiAgICAgICAgICAgICAgICAgICAgQm90c3dhbmEgYW5kIFN3YXppbGFuZCB3aXRoIGNsaWVudGVsZSBpbiBBZnJpY2EsIENoaW5hLFxuICAgICAgICAgICAgICAgICAgICBBdXN0cmFsaWEgYW5kIFVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYS5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oM2BgO1xuY29uc3QgSW1hZ2VzID0gc3R5bGVkLmRpdmBcbiAgICBwYWRkaW5nOiAwLjk3cmVtO1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=