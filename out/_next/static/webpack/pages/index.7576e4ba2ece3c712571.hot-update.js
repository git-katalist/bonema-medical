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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "home",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_carousel__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
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
        lineNumber: 21,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_suppliers__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
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
            lineNumber: 27,
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
              lineNumber: 29,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "description",
            children: !!item.description ? "".concat(item.description.substr(1, 100)) : ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
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
                  lineNumber: 44,
                  columnNumber: 37
                }, _this), " ", sub.name]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "#",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "enquiry",
              children: "send enquiry"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
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
        lineNumber: 61,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_accreditations__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInBhZGRpbmdUb3AiLCJzb2Z0d2F2ZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInRpdGxlIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsInN1YnN0ciIsInByb2R1Y3RzIiwic3ViIiwibmFtZSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIlRpdGxlIiwic3R5bGVkIiwiaDMiLCJJbWFnZXMiLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDM0Isc0JBQ0k7QUFBQSw0QkFDSTtBQUFLLFFBQUUsRUFBQyxNQUFSO0FBQUEsNkJBQ0kscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUlJO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBc0IsV0FBSyxFQUFFO0FBQUVDLGtCQUFVLEVBQUU7QUFBZCxPQUE3QjtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKLGVBT0kscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKLGVBUUk7QUFBSyxlQUFTLEVBQUMsT0FBZjtBQUFBLGdCQUNLQywrREFBUSxDQUFDQyxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsNEJBQ1Y7QUFBaUIsbUJBQVMsRUFBQyxNQUEzQjtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBQyxPQUFmO0FBQUEsc0JBQXdCRCxJQUFJLENBQUNFO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFLLHFCQUFTLEVBQUMsT0FBZjtBQUFBLG1DQUNJLHFFQUFDLGlEQUFEO0FBQ0ksbUJBQUssRUFBRSxHQURYO0FBRUksb0JBQU0sRUFBRSxHQUZaO0FBR0ksaUJBQUcsRUFBRUYsSUFBSSxDQUFDRyxLQUhkO0FBSUksaUJBQUcsRUFBQztBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBVUk7QUFBSyxxQkFBUyxFQUFDLGFBQWY7QUFBQSxzQkFDSyxDQUFDLENBQUNILElBQUksQ0FBQ0ksV0FBUCxhQUNRSixJQUFJLENBQUNJLFdBQUwsQ0FBaUJDLE1BQWpCLENBQXdCLENBQXhCLEVBQTJCLEdBQTNCLENBRFIsSUFFSztBQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkosZUFlSTtBQUFJLHFCQUFTLEVBQUMsY0FBZDtBQUFBLHNCQUNLTCxJQUFJLENBQUNNLFFBQUwsQ0FBY1AsR0FBZCxDQUFrQixVQUFDUSxHQUFELEVBQU1OLEtBQU47QUFBQSxrQ0FDZjtBQUFBLHdDQUNJO0FBQU0sMkJBQVMsRUFBQyxhQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixFQUdZLEdBSFosRUFJS00sR0FBRyxDQUFDQyxJQUpUO0FBQUEsaUJBQVNQLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEZTtBQUFBLGFBQWxCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFmSixlQXlCSSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUMsR0FBWDtBQUFBLG1DQUNJO0FBQUcsdUJBQVMsRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF6Qko7QUFBQSxXQUFVQSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFU7QUFBQSxPQUFiO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJKLGVBeUNJLHFFQUFDLHdEQUFEO0FBQ0ksUUFBRSxFQUFDLE9BRFA7QUFFSSxXQUFLLEVBQUU7QUFBRVEsaUJBQVMsRUFBRSxNQUFiO0FBQXFCQyxvQkFBWSxFQUFFO0FBQW5DLE9BRlg7QUFBQSw2QkFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6Q0osZUE4REkscUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlESjtBQUFBLGtCQURKO0FBa0VIO0tBbkV1QmQsSTtBQXFFeEIsSUFBTWUsS0FBSyxHQUFHQyx5REFBTSxDQUFDQyxFQUFWO0FBQUE7QUFBQTtBQUFBLFFBQVg7QUFDQSxJQUFNQyxNQUFNLEdBQUdGLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0JBQVoiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzU3NmU0YmEyZWNlM2M3MTI1NzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IHNvZnR3YXZlIGZyb20gXCIuLi9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3RzLmpzb25cIjtcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJvdXNlbFwiO1xuXG5pbXBvcnQgU2hvd2Nhc2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hvd0Nhc2VcIjtcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuLi9zdHlsZXMvX2xheW91dFwiO1xuaW1wb3J0IFN1cHBsaWVycyBmcm9tIFwiLi4vY29tcG9uZW50cy9zdXBwbGllcnNcIjtcbmltcG9ydCBBY2NyZWRzIGZyb20gXCIuLi9jb21wb25lbnRzL2FjY3JlZGl0YXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJob21lXCI+XG4gICAgICAgICAgICAgICAgPENhcm91c2VsIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiIHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiNTBweFwiIH19PlxuICAgICAgICAgICAgICAgIDxoMT5Qcm9kdWN0czwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxTdXBwbGllcnMgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNcIj5cbiAgICAgICAgICAgICAgICB7c29mdHdhdmUubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj57aXRlbS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezY0MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs2NDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyEhaXRlbS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGAke2l0ZW0uZGVzY3JpcHRpb24uc3Vic3RyKDEsIDEwMCl9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwcm9kdWN0LWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wcm9kdWN0cy5tYXAoKHN1YiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlzdC1tYXJrZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmIzEwMDAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImVucXVpcnlcIj5zZW5kIGVucXVpcnk8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgaWQ9XCJhYm91dFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjUwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjUwcHhcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIEJvbmVtYSBpcyBhbiBBd2FyZCB3aW5uaW5nLCBhY2NyZWRpdGVkIGFuZCByZWdpc3RlcmVkXG4gICAgICAgICAgICAgICAgICAgIG1lZGljYWwgZGV2aWNlIGRpc3RyaWJ1dG9yIHRvIGhvc3BpdGFscywgQ2xpbmljcyBhbmQgcmV0YWlsXG4gICAgICAgICAgICAgICAgICAgIHBoYXJtYWNpZXMuIE91ciBjbGllbnRlbGUgaW5jbHVkZXMgdG8gbmFtZSBhIGZldywgTmV0Y2FyZVxuICAgICAgICAgICAgICAgICAgICBHcm91cCwgTG91aXMgUGFzdGV1ciBIb2xkaW5ncyBHcm91cCwgUGhlbGFuZyBCb25vbG9cbiAgICAgICAgICAgICAgICAgICAgSGVhbHRoY2FyZSBHcm91cCBhbmQgU2VkaWJlbmcgSG9zcGl0YWwsIGluIHRoaXMgcHJvY2VzcyB3ZVxuICAgICAgICAgICAgICAgICAgICBoYXZlIGFjY3VtdWxhdGVkIGEgZ3JlYXQgZGVhbCBvZiBleHBlcmllbmNlIGluIHNlcnZpY2luZ1xuICAgICAgICAgICAgICAgICAgICBjbGllbnRzIGFuZCBkZWxpdmVyaW5nIG9uIHRpbWUsIHNlcnZpY2luZyBTb3V0aGVybiBBZnJpY2EuXG4gICAgICAgICAgICAgICAgICAgIEJvbmVtYSBpcyBhbHNvIHRoZSBzb2xlIGRpc3RyaWJ1dG9yIGZvciBTb2Z3YXZlLCAxZHJvcCBhbmRcbiAgICAgICAgICAgICAgICAgICAgTWVjYW4gaW4gU291dGhlcm4gQWZyaWNhIGFuZCBhIEZvdG9uYSwgUGhpbGxpcHMgYW5kXG4gICAgICAgICAgICAgICAgICAgIEJpb01heGltYSBTQSBjZXJ0aWZpZWQgcmVzZWxsZXIuIFdlIGhhdmUgYnVpbHQgcmVsYXRpb25zaGlwc1xuICAgICAgICAgICAgICAgICAgICB3aXRoIHRydXN0ZWQgYW5kIGNlcnRpZmllZCBtYW51ZmFjdHVyZXJzIGFuZCBsb2dpc3RpY3NcbiAgICAgICAgICAgICAgICAgICAgY29tcGFuaWVzIGdsb2JhbGx5LiBXZSBoYXZlIG9mZmljZXMgaW4gU291dGggQWZyaWNhLFxuICAgICAgICAgICAgICAgICAgICBCb3Rzd2FuYSBhbmQgU3dhemlsYW5kIHdpdGggY2xpZW50ZWxlIGluIEFmcmljYSwgQ2hpbmEsXG4gICAgICAgICAgICAgICAgICAgIEF1c3RyYWxpYSBhbmQgVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhLlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8QWNjcmVkcyAvPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oM2BgO1xuY29uc3QgSW1hZ2VzID0gc3R5bGVkLmRpdmBcbiAgICBwYWRkaW5nOiAwLjk3cmVtO1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=