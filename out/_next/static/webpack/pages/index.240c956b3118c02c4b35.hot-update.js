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
            children: !!item.description ? "".concat(item.description.substr(1, 100)) : ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "product-list",
            children: item.products.map(function (sub, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: ["&check; ", sub.name]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "#",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "enquiry",
              children: "send enquiry"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbnNvbGUiLCJsb2ciLCJzb2Z0d2F2ZSIsInBhZGRpbmdUb3AiLCJpdGVtIiwiaW5kZXgiLCJ0aXRsZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJzdWJzdHIiLCJwcm9kdWN0cyIsIm1hcCIsInN1YiIsIm5hbWUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJUaXRsZSIsInN0eWxlZCIsIkltYWdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDM0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQywrREFBWixFQUQyQixDQUczQjs7QUFFQSxzQkFDSTtBQUFBLDRCQUNJO0FBQUEsNkJBQ0ksOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQVFJO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBc0IsV0FBSyxFQUFFO0FBQUVDLGtCQUFVLEVBQUU7QUFBZCxPQUE3QjtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJKLGVBb0VJO0FBQUssZUFBUyxFQUFDLE9BQWY7QUFBQSxnQkFDS0QsbUVBQUEsQ0FBYSxVQUFDRSxJQUFELEVBQU9DLEtBQVA7QUFBQSw0QkFDVjtBQUFpQixtQkFBUyxFQUFDLE1BQTNCO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLE9BQWY7QUFBQSxzQkFBd0JELElBQUksQ0FBQ0U7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUsscUJBQVMsRUFBQyxPQUFmO0FBQUEsbUNBQ0k7QUFBSyxpQkFBRyxFQUFFRixJQUFJLENBQUNHLEtBQWY7QUFBc0IsaUJBQUcsRUFBQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQUtJO0FBQUsscUJBQVMsRUFBQyxhQUFmO0FBQUEsc0JBQ0ssQ0FBQyxDQUFDSCxJQUFJLENBQUNJLFdBQVAsYUFDUUosSUFBSSxDQUFDSSxXQUFMLENBQWlCQyxNQUFqQixDQUF3QixDQUF4QixFQUEyQixHQUEzQixDQURSLElBRUs7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLGVBVUk7QUFBSSxxQkFBUyxFQUFDLGNBQWQ7QUFBQSxzQkFDS0wsSUFBSSxDQUFDTSxRQUFMLENBQWNDLEdBQWQsQ0FBa0IsVUFBQ0MsR0FBRCxFQUFNUCxLQUFOO0FBQUEsa0NBQ2Y7QUFBQSx1Q0FBeUJPLEdBQUcsQ0FBQ0MsSUFBN0I7QUFBQSxpQkFBU1IsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURlO0FBQUEsYUFBbEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZKLGVBZUksOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFDLEdBQVg7QUFBQSxtQ0FDSTtBQUFHLHVCQUFTLEVBQUMsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZko7QUFBQSxXQUFVQSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFU7QUFBQSxPQUFiO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBFSixlQTJGSSw4REFBQyxxREFBRDtBQUFXLFdBQUssRUFBRTtBQUFFUyxpQkFBUyxFQUFFLE1BQWI7QUFBcUJDLG9CQUFZLEVBQUU7QUFBbkMsT0FBbEI7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEzRko7QUFBQSxrQkFESjtBQWdISDtLQXJIdUJoQixJO0FBdUh4QixJQUFNaUIsS0FBSyxHQUFHQyxvRUFBSDtBQUFBO0FBQUE7QUFBQSxRQUFYO0FBQ0EsSUFBTUMsTUFBTSxHQUFHRCxxRUFBSDtBQUFBO0FBQUE7QUFBQSx3QkFBWiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yNDBjOTU2YjMxMThjMDJjNGIzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgc29mdHdhdmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMuanNvblwiO1xuaW1wb3J0IENhcm91c2VsIGZyb20gXCIuLi9jb21wb25lbnRzL2Nhcm91c2VsXCI7XG5cbmltcG9ydCBTaG93Y2FzZSBmcm9tIFwiLi4vY29tcG9uZW50cy9zaG93Q2FzZVwiO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4uL3N0eWxlcy9fbGF5b3V0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc29sZS5sb2coc29mdHdhdmUpO1xuXG4gICAgLy8gY29uc3QgaXRlbXMgPSBzb2Z0d2F2ZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiA8ZGl2PntpdGVtLnRpdGxlfTwvZGl2Pik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgLz5cbiAgICAgICAgICAgICAgICB7LyogPFNob3djYXNlIC8+ICovfVxuICAgICAgICAgICAgICAgIHsvKiA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8aDE+R29vZCBNb3JuaW5nIEJvbmVtYSBNZWRpY2FsPC9oMT5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiIHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiNTBweFwiIH19PlxuICAgICAgICAgICAgICAgIDxoMT5Qcm9kdWN0czwvaDE+XG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGU+U0tJTiAmIEJPRFk8L1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VzPjwvSW1hZ2VzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlPndlbGxuZXNzPC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlcz48L0ltYWdlcz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZT5tZWRpY2FsPC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlcz48L0ltYWdlcz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZT5waGFybWFjZXV0aWNhbDwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZXM+PC9JbWFnZXM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGU+YW5pbWFsIGhlYWx0aDwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZXMgY2xhc3NOYW1lPVwiaW1hZ2VzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkaXBpc2ljaW5nIGVsaXQuIE9iY2FlY2F0aSBmdWdpYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzcGVyaW9yZXMgdGVtcG9yYSwgYXRxdWUgcmF0aW9uZSwgbmVxdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxhIHZlbCBsYWJvcmlvc2FtIGlzdGUgY3VwaWRpdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwbGljYWJvIHJlcHVkaWFuZGFlLCBkb2xvciBxdWkgZGViaXRpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVzY2l1bnQgcmVpY2llbmRpcyBkb2xvcmVtcXVlIGN1bSBwb3Jyby5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbWFnZXM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGU+Ymlvc2NpZW5jZTwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZXM+PC9JbWFnZXM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNcIj5cbiAgICAgICAgICAgICAgICB7c29mdHdhdmUubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj57aXRlbS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshIWl0ZW0uZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgJHtpdGVtLmRlc2NyaXB0aW9uLnN1YnN0cigxLCAxMDApfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJvZHVjdC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucHJvZHVjdHMubWFwKChzdWIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT4mY2hlY2s7IHtzdWIubmFtZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZW5xdWlyeVwiPnNlbmQgZW5xdWlyeTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb250YWluZXIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjUwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjUwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBCb25lbWEgaXMgYW4gQXdhcmQgd2lubmluZywgYWNjcmVkaXRlZCBhbmQgcmVnaXN0ZXJlZFxuICAgICAgICAgICAgICAgICAgICBtZWRpY2FsIGRldmljZSBkaXN0cmlidXRvciB0byBob3NwaXRhbHMsIENsaW5pY3MgYW5kIHJldGFpbFxuICAgICAgICAgICAgICAgICAgICBwaGFybWFjaWVzLiBPdXIgY2xpZW50ZWxlIGluY2x1ZGVzIHRvIG5hbWUgYSBmZXcsIE5ldGNhcmVcbiAgICAgICAgICAgICAgICAgICAgR3JvdXAsIExvdWlzIFBhc3RldXIgSG9sZGluZ3MgR3JvdXAsIFBoZWxhbmcgQm9ub2xvXG4gICAgICAgICAgICAgICAgICAgIEhlYWx0aGNhcmUgR3JvdXAgYW5kIFNlZGliZW5nIEhvc3BpdGFsLCBpbiB0aGlzIHByb2Nlc3Mgd2VcbiAgICAgICAgICAgICAgICAgICAgaGF2ZSBhY2N1bXVsYXRlZCBhIGdyZWF0IGRlYWwgb2YgZXhwZXJpZW5jZSBpbiBzZXJ2aWNpbmdcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50cyBhbmQgZGVsaXZlcmluZyBvbiB0aW1lLCBzZXJ2aWNpbmcgU291dGhlcm4gQWZyaWNhLlxuICAgICAgICAgICAgICAgICAgICBCb25lbWEgaXMgYWxzbyB0aGUgc29sZSBkaXN0cmlidXRvciBmb3IgU29md2F2ZSwgMWRyb3AgYW5kXG4gICAgICAgICAgICAgICAgICAgIE1lY2FuIGluIFNvdXRoZXJuIEFmcmljYSBhbmQgYSBGb3RvbmEsIFBoaWxsaXBzIGFuZFxuICAgICAgICAgICAgICAgICAgICBCaW9NYXhpbWEgU0EgY2VydGlmaWVkIHJlc2VsbGVyLiBXZSBoYXZlIGJ1aWx0IHJlbGF0aW9uc2hpcHNcbiAgICAgICAgICAgICAgICAgICAgd2l0aCB0cnVzdGVkIGFuZCBjZXJ0aWZpZWQgbWFudWZhY3R1cmVycyBhbmQgbG9naXN0aWNzXG4gICAgICAgICAgICAgICAgICAgIGNvbXBhbmllcyBnbG9iYWxseS4gV2UgaGF2ZSBvZmZpY2VzIGluIFNvdXRoIEFmcmljYSxcbiAgICAgICAgICAgICAgICAgICAgQm90c3dhbmEgYW5kIFN3YXppbGFuZCB3aXRoIGNsaWVudGVsZSBpbiBBZnJpY2EsIENoaW5hLFxuICAgICAgICAgICAgICAgICAgICBBdXN0cmFsaWEgYW5kIFVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYS5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oM2BgO1xuY29uc3QgSW1hZ2VzID0gc3R5bGVkLmRpdmBcbiAgICBwYWRkaW5nOiAwLjk3cmVtO1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=