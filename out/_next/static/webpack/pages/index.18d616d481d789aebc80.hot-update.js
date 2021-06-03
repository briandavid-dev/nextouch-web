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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\DavidOchoaBermudez\\Desktop\\nextouch-web\\components\\Header\\MenuBar.js",
    _this = undefined,
    _s = $RefreshSig$();







var MenuBar = function MenuBar() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    current: "mail"
  }),
      state = _useState[0],
      setState = _useState[1];

  var current = state.current;

  var handleClick = function handleClick(e) {
    // console.log("click ", e);
    setState({
      current: e.key
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    onClick: handleClick,
    selectedKeys: [current],
    mode: "horizontal",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/iphone",
        children: "Iphone"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this)
    }, "iphone", false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/samsung",
        children: "Samsung"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this)
    }, "samsung", false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/xiaomi",
        children: "Xiaomi"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this)
    }, "xiaomi", false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/alcatel",
        children: "Alcatel"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this)
    }, "alcatel", false, {
      fileName: _jsxFileName,
      lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvTWVudUJhci5qcyJdLCJuYW1lcyI6WyJNZW51QmFyIiwidXNlU3RhdGUiLCJjdXJyZW50Iiwic3RhdGUiLCJzZXRTdGF0ZSIsImhhbmRsZUNsaWNrIiwiZSIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDO0FBQ2pDQyxXQUFPLEVBQUU7QUFEd0IsR0FBRCxDQURkO0FBQUEsTUFDYkMsS0FEYTtBQUFBLE1BQ05DLFFBRE07O0FBQUEsTUFLWkYsT0FMWSxHQUtBQyxLQUxBLENBS1pELE9BTFk7O0FBT3BCLE1BQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN6QjtBQUNBRixZQUFRLENBQUM7QUFBRUYsYUFBTyxFQUFFSSxDQUFDLENBQUNDO0FBQWIsS0FBRCxDQUFSO0FBQ0QsR0FIRDs7QUFLQSxzQkFDRSxxRUFBQyx5Q0FBRDtBQUFNLFdBQU8sRUFBRUYsV0FBZjtBQUE0QixnQkFBWSxFQUFFLENBQUNILE9BQUQsQ0FBMUM7QUFBcUQsUUFBSSxFQUFDLFlBQTFEO0FBQUEsNEJBQ0UscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUEsNkJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLE9BQWUsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBQSw2QkFDRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsT0FBZSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQU9FLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBLDZCQUNFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixPQUFlLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLGVBVUUscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUEsNkJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLE9BQWUsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnQkQsQ0E1QkQ7O0dBQU1GLE87O0tBQUFBLE87QUE4QlNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE4ZDYxNmQ0ODFkNzg5YWViYzgwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHtcclxuICBNYWlsT3V0bGluZWQsXHJcbiAgQXBwc3RvcmVPdXRsaW5lZCxcclxuICBTZXR0aW5nT3V0bGluZWQsXHJcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcblxyXG5jb25zdCBNZW51QmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgY3VycmVudDogXCJtYWlsXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHsgY3VycmVudCB9ID0gc3RhdGU7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiY2xpY2sgXCIsIGUpO1xyXG4gICAgc2V0U3RhdGUoeyBjdXJyZW50OiBlLmtleSB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1lbnUgb25DbGljaz17aGFuZGxlQ2xpY2t9IHNlbGVjdGVkS2V5cz17W2N1cnJlbnRdfSBtb2RlPVwiaG9yaXpvbnRhbFwiPlxyXG4gICAgICA8TWVudS5JdGVtIGtleT1cImlwaG9uZVwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvaXBob25lXCI+SXBob25lPC9MaW5rPlxyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbSBrZXk9XCJzYW1zdW5nXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9zYW1zdW5nXCI+U2Ftc3VuZzwvTGluaz5cclxuICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDxNZW51Lkl0ZW0ga2V5PVwieGlhb21pXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi94aWFvbWlcIj5YaWFvbWk8L0xpbms+XHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5JdGVtIGtleT1cImFsY2F0ZWxcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL2FsY2F0ZWxcIj5BbGNhdGVsPC9MaW5rPlxyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgIDwvTWVudT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudUJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==