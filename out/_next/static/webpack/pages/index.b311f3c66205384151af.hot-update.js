webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Header/MenuBar.js":
/*!**************************************!*\
  !*** ./components/Header/MenuBar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\DavidOchoaBermudez\\Desktop\\nextouch-web\\components\\Header\\MenuBar.js",
    _this = undefined,
    _s = $RefreshSig$();





var SubMenu = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].SubMenu;

var MenuBar = function MenuBar() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    current: "mail"
  }),
      state = _useState[0],
      setState = _useState[1];

  var current = state.current;

  var handleClick = function handleClick(e) {
    console.log("click ", e);
    setState({
      current: e.key
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    onClick: handleClick,
    selectedKeys: [current],
    mode: "horizontal",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      children: "Iphone"
    }, "iphone", false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      children: "Samsung"
    }, "samsung", false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      children: "Xiaomi"
    }, "xiaomi", false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this);
};

_s(MenuBar, "L/jAg+eRt3ChdkhHryGAz6KOgIk=");

_c = MenuBar;
/* harmony default export */ __webpack_exports__["default"] = (MenuBar);

var _c;

$RefreshReg$(_c, "MenuBar");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvTWVudUJhci5qcyJdLCJuYW1lcyI6WyJTdWJNZW51IiwiTWVudSIsIk1lbnVCYXIiLCJ1c2VTdGF0ZSIsImN1cnJlbnQiLCJzdGF0ZSIsInNldFN0YXRlIiwiaGFuZGxlQ2xpY2siLCJlIiwiY29uc29sZSIsImxvZyIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUtRQSxPLEdBQVlDLHlDLENBQVpELE87O0FBRVIsSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDO0FBQ2pDQyxXQUFPLEVBQUU7QUFEd0IsR0FBRCxDQURkO0FBQUEsTUFDYkMsS0FEYTtBQUFBLE1BQ05DLFFBRE07O0FBQUEsTUFLWkYsT0FMWSxHQUtBQyxLQUxBLENBS1pELE9BTFk7O0FBT3BCLE1BQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN6QkMsV0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkYsQ0FBdEI7QUFDQUYsWUFBUSxDQUFDO0FBQUVGLGFBQU8sRUFBRUksQ0FBQyxDQUFDRztBQUFiLEtBQUQsQ0FBUjtBQUNELEdBSEQ7O0FBS0Esc0JBQ0UscUVBQUMseUNBQUQ7QUFBTSxXQUFPLEVBQUVKLFdBQWY7QUFBNEIsZ0JBQVksRUFBRSxDQUFDSCxPQUFELENBQTFDO0FBQXFELFFBQUksRUFBQyxZQUExRDtBQUFBLDRCQUNFLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBO0FBQUEsT0FBZSxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBO0FBQUEsT0FBZSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBO0FBQUEsT0FBZSxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBbkJEOztHQUFNRixPOztLQUFBQSxPO0FBcUJTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMzExZjNjNjYyMDUzODQxNTFhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQge1xyXG4gIE1haWxPdXRsaW5lZCxcclxuICBBcHBzdG9yZU91dGxpbmVkLFxyXG4gIFNldHRpbmdPdXRsaW5lZCxcclxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuY29uc3QgeyBTdWJNZW51IH0gPSBNZW51O1xyXG5cclxuY29uc3QgTWVudUJhciA9ICgpID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGN1cnJlbnQ6IFwibWFpbFwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB7IGN1cnJlbnQgfSA9IHN0YXRlO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrIFwiLCBlKTtcclxuICAgIHNldFN0YXRlKHsgY3VycmVudDogZS5rZXkgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNZW51IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBzZWxlY3RlZEtleXM9e1tjdXJyZW50XX0gbW9kZT1cImhvcml6b250YWxcIj5cclxuICAgICAgPE1lbnUuSXRlbSBrZXk9XCJpcGhvbmVcIj5JcGhvbmU8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbSBrZXk9XCJzYW1zdW5nXCI+U2Ftc3VuZzwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5JdGVtIGtleT1cInhpYW9taVwiPlhpYW9taTwvTWVudS5JdGVtPlxyXG4gICAgPC9NZW51PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51QmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9