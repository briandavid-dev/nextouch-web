webpackHotUpdate_N_E("pages/[name]",{

/***/ "./components/common/BarraProductos/index.js":
/*!***************************************************!*\
  !*** ./components/common/BarraProductos/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\DavidOchoaBermudez\\Desktop\\nextouch-web\\components\\common\\BarraProductos\\index.js",
    _this = undefined;






var BarraProductosItem = function BarraProductosItem(props) {
  var data = props.data,
      item = props.item;
  var item_ = item - 1;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: data[item_].modelo.replaceAll(" ", "-"),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      style: {
        textAlign: "center",
        width: "160px"
      },
      className: "cursor-pointer hover-product",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        src: data[item_].imagenes[0],
        alt: "",
        width: 120,
        height: 120,
        style: {
          display: "inline"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("strong", {
          children: data[item_].modelo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this), data[item_].precio !== "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
          children: ["$", data[item_].precio]
        }, void 0, true)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, _this);
};

_c = BarraProductosItem;

var BarraProductos = function BarraProductos(props) {
  var data = props.data,
      items = props.items;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        style: {
          display: "flex",
          justifyContent: "space-around",
          height: "200px"
        },
        children: items.map(function (item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(BarraProductosItem, {
            data: data,
            item: item
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_c2 = BarraProductos;
/* harmony default export */ __webpack_exports__["default"] = (BarraProductos);

var _c, _c2;

$RefreshReg$(_c, "BarraProductosItem");
$RefreshReg$(_c2, "BarraProductos");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vQmFycmFQcm9kdWN0b3MvaW5kZXguanMiXSwibmFtZXMiOlsiQmFycmFQcm9kdWN0b3NJdGVtIiwicHJvcHMiLCJkYXRhIiwiaXRlbSIsIml0ZW1fIiwibW9kZWxvIiwicmVwbGFjZUFsbCIsInRleHRBbGlnbiIsIndpZHRoIiwiaW1hZ2VuZXMiLCJkaXNwbGF5IiwicHJlY2lvIiwiQmFycmFQcm9kdWN0b3MiLCJpdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQzVCQyxJQUQ0QixHQUNiRCxLQURhLENBQzVCQyxJQUQ0QjtBQUFBLE1BQ3RCQyxJQURzQixHQUNiRixLQURhLENBQ3RCRSxJQURzQjtBQUVwQyxNQUFNQyxLQUFLLEdBQUdELElBQUksR0FBRyxDQUFyQjtBQUVBLHNCQUNFLHFFQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFRCxJQUFJLENBQUNFLEtBQUQsQ0FBSixDQUFZQyxNQUFaLENBQW1CQyxVQUFuQixDQUE4QixHQUE5QixFQUFtQyxHQUFuQyxDQUFaO0FBQUEsMkJBQ0U7QUFDRSxXQUFLLEVBQUU7QUFBRUMsaUJBQVMsRUFBRSxRQUFiO0FBQXVCQyxhQUFLLEVBQUU7QUFBOUIsT0FEVDtBQUVFLGVBQVMsRUFBQyw4QkFGWjtBQUFBLDhCQUlFO0FBQ0UsV0FBRyxFQUFFTixJQUFJLENBQUNFLEtBQUQsQ0FBSixDQUFZSyxRQUFaLENBQXFCLENBQXJCLENBRFA7QUFFRSxXQUFHLEVBQUMsRUFGTjtBQUdFLGFBQUssRUFBRSxHQUhUO0FBSUUsY0FBTSxFQUFFLEdBSlY7QUFLRSxhQUFLLEVBQUU7QUFBRUMsaUJBQU8sRUFBRTtBQUFYO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBV0U7QUFBQSxnQ0FDRTtBQUFBLG9CQUFTUixJQUFJLENBQUNFLEtBQUQsQ0FBSixDQUFZQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixFQUdHSCxJQUFJLENBQUNFLEtBQUQsQ0FBSixDQUFZTyxNQUFaLEtBQXVCLEVBQXZCLGlCQUE2QjtBQUFBLDBCQUFJVCxJQUFJLENBQUNFLEtBQUQsQ0FBSixDQUFZTyxNQUFoQjtBQUFBLHdCQUhoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQkQsQ0F6QkQ7O0tBQU1YLGtCOztBQTJCTixJQUFNWSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNYLEtBQUQsRUFBVztBQUFBLE1BQ3hCQyxJQUR3QixHQUNSRCxLQURRLENBQ3hCQyxJQUR3QjtBQUFBLE1BQ2xCVyxLQURrQixHQUNSWixLQURRLENBQ2xCWSxLQURrQjtBQUdoQyxzQkFDRTtBQUFBLDJCQUNFO0FBQUEsNkJBQ0U7QUFDRSxhQUFLLEVBQUU7QUFDTEgsaUJBQU8sRUFBRSxNQURKO0FBRUxJLHdCQUFjLEVBQUUsY0FGWDtBQUdMQyxnQkFBTSxFQUFFO0FBSEgsU0FEVDtBQUFBLGtCQU9HRixLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFDYixJQUFEO0FBQUEsOEJBQ1QscUVBQUMsa0JBQUQ7QUFBb0IsZ0JBQUksRUFBRUQsSUFBMUI7QUFBZ0MsZ0JBQUksRUFBRUM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUztBQUFBLFNBQVY7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBaUJELENBcEJEOztNQUFNUyxjO0FBc0JTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bbmFtZV0uZDVkODkxYjliMTIyNGI3MDZkMjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgQmFycmFQcm9kdWN0b3NJdGVtID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBpdGVtIH0gPSBwcm9wcztcclxuICBjb25zdCBpdGVtXyA9IGl0ZW0gLSAxO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17ZGF0YVtpdGVtX10ubW9kZWxvLnJlcGxhY2VBbGwoXCIgXCIsIFwiLVwiKX0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIHdpZHRoOiBcIjE2MHB4XCIgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3Zlci1wcm9kdWN0XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17ZGF0YVtpdGVtX10uaW1hZ2VuZXNbMF19XHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgd2lkdGg9ezEyMH1cclxuICAgICAgICAgIGhlaWdodD17MTIwfVxyXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmVcIiB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8c3Ryb25nPntkYXRhW2l0ZW1fXS5tb2RlbG99PC9zdHJvbmc+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIHtkYXRhW2l0ZW1fXS5wcmVjaW8gIT09IFwiXCIgJiYgPD4ke2RhdGFbaXRlbV9dLnByZWNpb308Lz59XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQmFycmFQcm9kdWN0b3MgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGRhdGEsIGl0ZW1zIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMjAwcHhcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8QmFycmFQcm9kdWN0b3NJdGVtIGRhdGE9e2RhdGF9IGl0ZW09e2l0ZW19IC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFycmFQcm9kdWN0b3M7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=