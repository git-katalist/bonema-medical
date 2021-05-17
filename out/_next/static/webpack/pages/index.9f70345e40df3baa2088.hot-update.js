webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_products_products_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/products/products.json */ "./components/products/products.json");
var _components_products_products_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../components/products/products.json */ "./components/products/products.json", 1);
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/carousel */ "./components/carousel.js");
/* harmony import */ var _components_showCase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/showCase */ "./components/showCase.js");
/* harmony import */ var _styles_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/_layout */ "./styles/_layout.js");
/* harmony import */ var _components_suppliers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/suppliers */ "./components/suppliers.js");
/* harmony import */ var _components_accreditations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/accreditations */ "./components/accreditations/index.js");


var _jsxFileName = "C:\\Users\\tsote\\Desktop\\bonema\\bonema-medical\\pages\\index.js";










function Home() {
  var _this = this;

  console.log(_components_products_products_json__WEBPACK_IMPORTED_MODULE_5__); // const items = softwave.map((item, index) => <div>{item.title}</div>);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "home",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_carousel__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "info",
      style: {
        paddingTop: "50px"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Products"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_suppliers__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "cards",
      children: _components_products_products_json__WEBPACK_IMPORTED_MODULE_5__.map(function (item, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "title",
            children: item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "image",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
              width: 640,
              height: 640,
              src: item.image,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "description",
            children: !!item.description ? "".concat(item.description.substr(1, 100)) : ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "product-list",
            children: item.products.map(function (sub, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "list-marker",
                  children: "\u2713"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 37
                }, _this), " ", sub.name]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "#",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "enquiry",
              children: "send enquiry"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_layout__WEBPACK_IMPORTED_MODULE_8__["Container"], {
      id: "about",
      style: {
        marginTop: "50px",
        marginBottom: "50px"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: "Bonema is an Award winning, accredited and registered medical device distributor to hospitals, Clinics and retail pharmacies. Our clientele includes to name a few, Netcare Group, Louis Pasteur Holdings Group, Phelang Bonolo Healthcare Group and Sedibeng Hospital, in this process we have accumulated a great deal of experience in servicing clients and delivering on time, servicing Southern Africa. Bonema is also the sole distributor for Sofwave, 1drop and Mecan in Southern Africa and a Fotona, Phillips and BioMaxima SA certified reseller. We have built relationships with trusted and certified manufacturers and logistics companies globally. We have offices in South Africa, Botswana and Swaziland with clientele in Africa, China, Australia and United States of America."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_accreditations__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}
_c = Home;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3.withConfig({
  displayName: "pages__Title",
  componentId: "a7e56c-0"
})([""]);
var Images = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbnNvbGUiLCJsb2ciLCJzb2Z0d2F2ZSIsInBhZGRpbmdUb3AiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ0aXRsZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJzdWJzdHIiLCJwcm9kdWN0cyIsInN1YiIsIm5hbWUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJUaXRsZSIsInN0eWxlZCIsImgzIiwiSW1hZ2VzIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQzNCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUMsK0RBQVosRUFEMkIsQ0FHM0I7O0FBRUEsc0JBQ0k7QUFBQSw0QkFDSTtBQUFLLFFBQUUsRUFBQyxNQUFSO0FBQUEsNkJBQ0kscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQVFJO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBc0IsV0FBSyxFQUFFO0FBQUVDLGtCQUFVLEVBQUU7QUFBZCxPQUE3QjtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJKLGVBV0kscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhKLGVBWUk7QUFBSyxlQUFTLEVBQUMsT0FBZjtBQUFBLGdCQUNLRCwrREFBUSxDQUFDRSxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsNEJBQ1Y7QUFBaUIsbUJBQVMsRUFBQyxNQUEzQjtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBQyxPQUFmO0FBQUEsc0JBQXdCRCxJQUFJLENBQUNFO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFLLHFCQUFTLEVBQUMsT0FBZjtBQUFBLG1DQUNJLHFFQUFDLGlEQUFEO0FBQ0ksbUJBQUssRUFBRSxHQURYO0FBRUksb0JBQU0sRUFBRSxHQUZaO0FBR0ksaUJBQUcsRUFBRUYsSUFBSSxDQUFDRyxLQUhkO0FBSUksaUJBQUcsRUFBQztBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBVUk7QUFBSyxxQkFBUyxFQUFDLGFBQWY7QUFBQSxzQkFDSyxDQUFDLENBQUNILElBQUksQ0FBQ0ksV0FBUCxhQUNRSixJQUFJLENBQUNJLFdBQUwsQ0FBaUJDLE1BQWpCLENBQXdCLENBQXhCLEVBQTJCLEdBQTNCLENBRFIsSUFFSztBQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkosZUFlSTtBQUFJLHFCQUFTLEVBQUMsY0FBZDtBQUFBLHNCQUNLTCxJQUFJLENBQUNNLFFBQUwsQ0FBY1AsR0FBZCxDQUFrQixVQUFDUSxHQUFELEVBQU1OLEtBQU47QUFBQSxrQ0FDZjtBQUFBLHdDQUNJO0FBQU0sMkJBQVMsRUFBQyxhQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixFQUdZLEdBSFosRUFJS00sR0FBRyxDQUFDQyxJQUpUO0FBQUEsaUJBQVNQLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEZTtBQUFBLGFBQWxCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFmSixlQXlCSSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUMsR0FBWDtBQUFBLG1DQUNJO0FBQUcsdUJBQVMsRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF6Qko7QUFBQSxXQUFVQSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFU7QUFBQSxPQUFiO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpKLGVBNkNJLHFFQUFDLHdEQUFEO0FBQ0ksUUFBRSxFQUFDLE9BRFA7QUFFSSxXQUFLLEVBQUU7QUFBRVEsaUJBQVMsRUFBRSxNQUFiO0FBQXFCQyxvQkFBWSxFQUFFO0FBQW5DLE9BRlg7QUFBQSw2QkFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3Q0osZUFrRUkscUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxFSjtBQUFBLGtCQURKO0FBc0VIO0tBM0V1QmhCLEk7QUE2RXhCLElBQU1pQixLQUFLLEdBQUdDLHlEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEsUUFBWDtBQUNBLElBQU1DLE1BQU0sR0FBR0YseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSx3QkFBWiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ZjcwMzQ1ZTQwZGYzYmFhMjA4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgc29mdHdhdmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMuanNvblwiO1xuaW1wb3J0IENhcm91c2VsIGZyb20gXCIuLi9jb21wb25lbnRzL2Nhcm91c2VsXCI7XG5cbmltcG9ydCBTaG93Y2FzZSBmcm9tIFwiLi4vY29tcG9uZW50cy9zaG93Q2FzZVwiO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4uL3N0eWxlcy9fbGF5b3V0XCI7XG5pbXBvcnQgU3VwcGxpZXJzIGZyb20gXCIuLi9jb21wb25lbnRzL3N1cHBsaWVyc1wiO1xuaW1wb3J0IEFjY3JlZHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWNjcmVkaXRhdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zb2xlLmxvZyhzb2Z0d2F2ZSk7XG5cbiAgICAvLyBjb25zdCBpdGVtcyA9IHNvZnR3YXZlLm1hcCgoaXRlbSwgaW5kZXgpID0+IDxkaXY+e2l0ZW0udGl0bGV9PC9kaXY+KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiaG9tZVwiPlxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbCAvPlxuICAgICAgICAgICAgICAgIHsvKiA8U2hvd2Nhc2UgLz4gKi99XG4gICAgICAgICAgICAgICAgey8qIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5Hb29kIE1vcm5pbmcgQm9uZW1hIE1lZGljYWw8L2gxPlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCIgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCI1MHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgPGgxPlByb2R1Y3RzPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFN1cHBsaWVycyAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkc1wiPlxuICAgICAgICAgICAgICAgIHtzb2Z0d2F2ZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPntpdGVtLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NjQwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezY0MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ISFpdGVtLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7aXRlbS5kZXNjcmlwdGlvbi5zdWJzdHIoMSwgMTAwKX1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByb2R1Y3QtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnByb2R1Y3RzLm1hcCgoc3ViLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaXN0LW1hcmtlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjMTAwMDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZW5xdWlyeVwiPnNlbmQgZW5xdWlyeTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgICBpZD1cImFib3V0XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNTBweFwiLCBtYXJnaW5Cb3R0b206IFwiNTBweFwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgQm9uZW1hIGlzIGFuIEF3YXJkIHdpbm5pbmcsIGFjY3JlZGl0ZWQgYW5kIHJlZ2lzdGVyZWRcbiAgICAgICAgICAgICAgICAgICAgbWVkaWNhbCBkZXZpY2UgZGlzdHJpYnV0b3IgdG8gaG9zcGl0YWxzLCBDbGluaWNzIGFuZCByZXRhaWxcbiAgICAgICAgICAgICAgICAgICAgcGhhcm1hY2llcy4gT3VyIGNsaWVudGVsZSBpbmNsdWRlcyB0byBuYW1lIGEgZmV3LCBOZXRjYXJlXG4gICAgICAgICAgICAgICAgICAgIEdyb3VwLCBMb3VpcyBQYXN0ZXVyIEhvbGRpbmdzIEdyb3VwLCBQaGVsYW5nIEJvbm9sb1xuICAgICAgICAgICAgICAgICAgICBIZWFsdGhjYXJlIEdyb3VwIGFuZCBTZWRpYmVuZyBIb3NwaXRhbCwgaW4gdGhpcyBwcm9jZXNzIHdlXG4gICAgICAgICAgICAgICAgICAgIGhhdmUgYWNjdW11bGF0ZWQgYSBncmVhdCBkZWFsIG9mIGV4cGVyaWVuY2UgaW4gc2VydmljaW5nXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudHMgYW5kIGRlbGl2ZXJpbmcgb24gdGltZSwgc2VydmljaW5nIFNvdXRoZXJuIEFmcmljYS5cbiAgICAgICAgICAgICAgICAgICAgQm9uZW1hIGlzIGFsc28gdGhlIHNvbGUgZGlzdHJpYnV0b3IgZm9yIFNvZndhdmUsIDFkcm9wIGFuZFxuICAgICAgICAgICAgICAgICAgICBNZWNhbiBpbiBTb3V0aGVybiBBZnJpY2EgYW5kIGEgRm90b25hLCBQaGlsbGlwcyBhbmRcbiAgICAgICAgICAgICAgICAgICAgQmlvTWF4aW1hIFNBIGNlcnRpZmllZCByZXNlbGxlci4gV2UgaGF2ZSBidWlsdCByZWxhdGlvbnNoaXBzXG4gICAgICAgICAgICAgICAgICAgIHdpdGggdHJ1c3RlZCBhbmQgY2VydGlmaWVkIG1hbnVmYWN0dXJlcnMgYW5kIGxvZ2lzdGljc1xuICAgICAgICAgICAgICAgICAgICBjb21wYW5pZXMgZ2xvYmFsbHkuIFdlIGhhdmUgb2ZmaWNlcyBpbiBTb3V0aCBBZnJpY2EsXG4gICAgICAgICAgICAgICAgICAgIEJvdHN3YW5hIGFuZCBTd2F6aWxhbmQgd2l0aCBjbGllbnRlbGUgaW4gQWZyaWNhLCBDaGluYSxcbiAgICAgICAgICAgICAgICAgICAgQXVzdHJhbGlhIGFuZCBVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2EuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDxBY2NyZWRzIC8+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgzYGA7XG5jb25zdCBJbWFnZXMgPSBzdHlsZWQuZGl2YFxuICAgIHBhZGRpbmc6IDAuOTdyZW07XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==