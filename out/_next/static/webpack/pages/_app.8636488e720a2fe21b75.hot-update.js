webpackHotUpdate_N_E("pages/_app",{

/***/ "./styles/globalStyles.js":
/*!********************************!*\
  !*** ./styles/globalStyles.js ***!
  \********************************/
/*! exports provided: GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony import */ var C_Users_tsote_Desktop_bonema_bonema_medical_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(C_Users_tsote_Desktop_bonema_bonema_medical_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n\t*{\n\t\tpadding:0;\n\t\tmargin:0;\n\t\tbox-sizing: border-box;\n\t}\n\n\thtml{\n\t\tfont-family: 'Nunito', sans-serif;\n\t}\n\n\tbody{\n\t\t\n\t}\n\n\tbody,html{\n\t\theight:100vh;\n\t}\n\n\t/* #__next{\n    height: 100%;\n\t\t} */\n\n\ta{\n\t\tcolor: magenta;\n\t}\n\n\t.showcase{\n\t\tposition:relative;\n\t\theight:931px;\n\t\tmax-height:931px;\n\n\t\t&::before{\n\t\t\tbackground-image: url('/doctor.jpg');\n\t\t\tbackground-repeat: no-repeat;\n\t\t\tbackground-size:cover;\n\t\t\tcontent: '';\n\t\t\ttop:0;\n\t\t\tleft:0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tmax-height:931px;\n\t\t\tposition:absolute;\n\t\t\tbackground-color: rgba(0,0,0,.8);\n\t\t\tbackground-blend-mode: darken;\n\t\t\tz-index:1;\n\t\t} */\n\n\t\timg{\n\t\t\twidth:100%;\n\t\t\tobject-fit: cover;\n\t\t\tmax-height:931px;\n\t\t\tposition: relative;\n\t\t\tdisplay:block;\n\t\t\t\n\t\t\t&::before{\n\t\t\t\tcontent: '';\n\t\t\ttop:0;\n\t\t\tleft:0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\t\tbackground-color: rgba(0,0,0,.8);\n\t\t\tbackground-blend-mode: darken;\n\t\t\tposition:absolute;\n\t\t\t/* z-index:1 */\n\t\t\t}\n\t\t}\n\t}\n\n\n.info h1{\n\tmargin-bottom:50px;\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\t.cards{\n\t\twidth:90%;\n\t\tmax-width:100%;\n\t\tmargin:0 auto;\n\t\tgrid-gap:30px;\n\t\tdisplay: grid;grid-template-columns:repeat(auto-fit,minmax(20rem, 1fr));\n\t\t\n\t\ta{\n\t\t\ttext-decoration: none;\n\t\t}\n\t\t.card{\n\t\t\tbackground-color: white;\n\n\t\t\t.image{\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\tpadding: 1.97rem;\n\t\t\t\timg{\n\t\t\t\twidth:100%;\n\t\t\t\tobject-fit:cover;\n\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t@media screen and (min-width:64rem){\n\t\t\twidth:90rem;\n\t\tmax-width:100%;\n\t\tmargin:0 auto;\n\t\tgrid-gap:30px;\n\t\tdisplay: grid;grid-template-columns:repeat(auto-fit,minmax(20rem, 1fr));\n\t\t}\n\n\t\t@media screen and (min-width:1024px){\n\t\t\tpadding: 0 1.97rem;\n\t\t}\n\t}\n\n\n\t//////////////////////////////////////////////////////////////////////////text-decoration\n\n\t.card{\n\t\tpadding-bottom:100px;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tposition: relative;\n\t\tbox-shadow: 0 3px 12px rgba(0,0,0,.6);\n\t\t.title{\n\t\t\tfont-size:24px;\n\t\t\twidth: 100%;\n\t\t\tdisplay:flex;\n\t\t\theight: 60px;\n\t\t\tbackground-color: #e9e9e9;\n\t\t\tcolor: black;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\n\t\t}\n\t\t.description{\n\tpadding:20px 30px;\n}\n\t\t.product-list{\n\t\t\tlist-style-type: none;\n\t\t\t/* li::marker{\n\t\t\twidth:20px;\n\t\t\theight:20px;\n\t\t\tborder-radius:50%;\n\t\t\tbackground-color: green;\n\t\t} */\n\t\t/* padding-left:50px; */\n\t\tli{\n\t\t\tpadding-left: 30px;\n\t\t\tpadding-bottom:5px;\n\t\t\tborder-bottom: 1px solid green;\n\t\t\tcursor: pointer;\n\t\t\tpadding-top:10px;\n\n\t\t\t&:hover{\n\t\t\t\tbackground-color: #f5f9f9;\n\t\t\t}\n\n\t\t\t & + li{\n/* padding-top:10px; */\n\t\t\t}\n\n\t\t\tspan{\n\t\t\t\tcolor: #005694;\n  font-weight: bold;\n  padding: 5px;\n  display:inline;\n  border-radius:50%;\n  /* background-color: green; */\n  font-size: 14px;\n  margin-right:5px;\n\t\t\t}\n\n\t\t\t/* &::marker{\n\t\t\t\tcontent:'\u21A3';\n\t\t\t\tdisplay: inline-block;\n\t\t\t\twidth:20px;\n\t\t\t\theight:20px;\n\t\t\t\tpadding: 5px 5px;\n\t\t\t\tplace-items: center;\n\t\t\t\tbackground-color: green;\n\t\t\t\tcolor: green;\n\n\t\t\t} */\n\t\t}\n\t\tpadding-bottom:3rem;\n\t\t}\n\t}\n\n\t.enquiry{\n\t\t\tposition:absolute;\n\t\t\tdisplay:inline-block;\n\t\t\tfont-size:14px;\n\t\t\tcolor:white;\n\t\t\tbottom:50px;\n\t\t\tleft:50%;\n\t\t\ttransform: translateX(-50%);\n\t\t\tbackground-color: #005694;\n\t\t\tpadding: 10px 20px;\n\t\t\tborder-radius: 20px;\n\t\t\ttext-transform: uppercase;//capitalize\n\t\t\tfont-weight: 500;\n\t\t\tletter-spacing:.05rem;\n\t\t\ttransition: all 250ms ease;\n\n\t\t\t&:hover{\n\t\t\t\tbackground-color: #167cc5;\n\t\t\t}\n\t\t}\n\n\n/* #about{\n\twidth:90%;\n\tpadding-top:50px;\n\tpadding-bottom:50px;\n\tline-height:2;\n\tfont-size: 18px;\n\n\t@media screen and (min-width:64rem){\n\t\t\twidth:90rem;\n\t}\n} */\n\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbFN0eWxlcy5qcyJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsV0FBVyxHQUFHQywyRUFBSCxtQkFBakIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44NjM2NDg4ZTcyMGEyZmUyMWI3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG5cclxuXHQqe1xyXG5cdFx0cGFkZGluZzowO1xyXG5cdFx0bWFyZ2luOjA7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdH1cclxuXHJcblx0aHRtbHtcclxuXHRcdGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuXHR9XHJcblxyXG5cdGJvZHl7XHJcblx0XHRcclxuXHR9XHJcblxyXG5cdGJvZHksaHRtbHtcclxuXHRcdGhlaWdodDoxMDB2aDtcclxuXHR9XHJcblxyXG5cdC8qICNfX25leHR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblx0XHR9ICovXHJcblxyXG5cdGF7XHJcblx0XHRjb2xvcjogbWFnZW50YTtcclxuXHR9XHJcblxyXG5cdC5zaG93Y2FzZXtcclxuXHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0aGVpZ2h0OjkzMXB4O1xyXG5cdFx0bWF4LWhlaWdodDo5MzFweDtcclxuXHJcblx0XHQmOjpiZWZvcmV7XHJcblx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2RvY3Rvci5qcGcnKTtcclxuXHRcdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRcdFx0YmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG5cdFx0XHRjb250ZW50OiAnJztcclxuXHRcdFx0dG9wOjA7XHJcblx0XHRcdGxlZnQ6MDtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0bWF4LWhlaWdodDo5MzFweDtcclxuXHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjgpO1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGRhcmtlbjtcclxuXHRcdFx0ei1pbmRleDoxO1xyXG5cdFx0fSAqL1xyXG5cclxuXHRcdGltZ3tcclxuXHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0XHRcdG1heC1oZWlnaHQ6OTMxcHg7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0ZGlzcGxheTpibG9jaztcclxuXHRcdFx0XHJcblx0XHRcdCY6OmJlZm9yZXtcclxuXHRcdFx0XHRjb250ZW50OiAnJztcclxuXHRcdFx0dG9wOjA7XHJcblx0XHRcdGxlZnQ6MDtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC44KTtcclxuXHRcdFx0YmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkYXJrZW47XHJcblx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHQvKiB6LWluZGV4OjEgKi9cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG4uaW5mbyBoMXtcclxuXHRtYXJnaW4tYm90dG9tOjUwcHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cdC5jYXJkc3tcclxuXHRcdHdpZHRoOjkwJTtcclxuXHRcdG1heC13aWR0aDoxMDAlO1xyXG5cdFx0bWFyZ2luOjAgYXV0bztcclxuXHRcdGdyaWQtZ2FwOjMwcHg7XHJcblx0XHRkaXNwbGF5OiBncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoYXV0by1maXQsbWlubWF4KDIwcmVtLCAxZnIpKTtcclxuXHRcdFxyXG5cdFx0YXtcclxuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0fVxyXG5cdFx0LmNhcmR7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuXHRcdFx0LmltYWdle1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0cGFkZGluZzogMS45N3JlbTtcclxuXHRcdFx0XHRpbWd7XHJcblx0XHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0XHRvYmplY3QtZml0OmNvdmVyO1xyXG5cdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjY0cmVtKXtcclxuXHRcdFx0d2lkdGg6OTByZW07XHJcblx0XHRtYXgtd2lkdGg6MTAwJTtcclxuXHRcdG1hcmdpbjowIGF1dG87XHJcblx0XHRncmlkLWdhcDozMHB4O1xyXG5cdFx0ZGlzcGxheTogZ3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KGF1dG8tZml0LG1pbm1heCgyMHJlbSwgMWZyKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpe1xyXG5cdFx0XHRwYWRkaW5nOiAwIDEuOTdyZW07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy90ZXh0LWRlY29yYXRpb25cclxuXHJcblx0LmNhcmR7XHJcblx0XHRwYWRkaW5nLWJvdHRvbToxMDBweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0Ym94LXNoYWRvdzogMCAzcHggMTJweCByZ2JhKDAsMCwwLC42KTtcclxuXHRcdC50aXRsZXtcclxuXHRcdFx0Zm9udC1zaXplOjI0cHg7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcdGhlaWdodDogNjBweDtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcclxuXHRcdFx0Y29sb3I6IGJsYWNrO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcblx0XHR9XHJcblx0XHQuZGVzY3JpcHRpb257XHJcblx0cGFkZGluZzoyMHB4IDMwcHg7XHJcbn1cclxuXHRcdC5wcm9kdWN0LWxpc3R7XHJcblx0XHRcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHRcdFx0LyogbGk6Om1hcmtlcntcclxuXHRcdFx0d2lkdGg6MjBweDtcclxuXHRcdFx0aGVpZ2h0OjIwcHg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6NTAlO1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuXHRcdH0gKi9cclxuXHRcdC8qIHBhZGRpbmctbGVmdDo1MHB4OyAqL1xyXG5cdFx0bGl7XHJcblx0XHRcdHBhZGRpbmctbGVmdDogMzBweDtcclxuXHRcdFx0cGFkZGluZy1ib3R0b206NXB4O1xyXG5cdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JlZW47XHJcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdFx0cGFkZGluZy10b3A6MTBweDtcclxuXHJcblx0XHRcdCY6aG92ZXJ7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2Y1ZjlmOTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ICYgKyBsaXtcclxuLyogcGFkZGluZy10b3A6MTBweDsgKi9cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3BhbntcclxuXHRcdFx0XHRjb2xvcjogIzAwNTY5NDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZGlzcGxheTppbmxpbmU7XHJcbiAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47ICovXHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1yaWdodDo1cHg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8qICY6Om1hcmtlcntcclxuXHRcdFx0XHRjb250ZW50OifihqMnO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHR3aWR0aDoyMHB4O1xyXG5cdFx0XHRcdGhlaWdodDoyMHB4O1xyXG5cdFx0XHRcdHBhZGRpbmc6IDVweCA1cHg7XHJcblx0XHRcdFx0cGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuXHRcdFx0XHRjb2xvcjogZ3JlZW47XHJcblxyXG5cdFx0XHR9ICovXHJcblx0XHR9XHJcblx0XHRwYWRkaW5nLWJvdHRvbTozcmVtO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LmVucXVpcnl7XHJcblx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHRcdFx0Zm9udC1zaXplOjE0cHg7XHJcblx0XHRcdGNvbG9yOndoaXRlO1xyXG5cdFx0XHRib3R0b206NTBweDtcclxuXHRcdFx0bGVmdDo1MCU7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwNTY5NDtcclxuXHRcdFx0cGFkZGluZzogMTBweCAyMHB4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOy8vY2FwaXRhbGl6ZVxyXG5cdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRsZXR0ZXItc3BhY2luZzouMDVyZW07XHJcblx0XHRcdHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlO1xyXG5cclxuXHRcdFx0Jjpob3ZlcntcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTY3Y2M1O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cclxuLyogI2Fib3V0e1xyXG5cdHdpZHRoOjkwJTtcclxuXHRwYWRkaW5nLXRvcDo1MHB4O1xyXG5cdHBhZGRpbmctYm90dG9tOjUwcHg7XHJcblx0bGluZS1oZWlnaHQ6MjtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblxyXG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NjRyZW0pe1xyXG5cdFx0XHR3aWR0aDo5MHJlbTtcclxuXHR9XHJcbn0gKi9cclxuXHRgO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9