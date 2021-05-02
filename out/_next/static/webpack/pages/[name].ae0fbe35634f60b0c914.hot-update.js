webpackHotUpdate_N_E("pages/[name]",{

/***/ "./components/Home/ProductosIphone.js":
/*!********************************************!*\
  !*** ./components/Home/ProductosIphone.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/BarraProductos */ "./components/common/BarraProductos/index.js");
/* harmony import */ var _config_celulares_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/celulares.json */ "./config/celulares.json");
var _config_celulares_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../config/celulares.json */ "./config/celulares.json", 1);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\DavidOchoaBermudez\\Desktop\\nextouch-web\\components\\Home\\ProductosIphone.js",
    _this = undefined,
    _s = $RefreshSig$();








var ProductosIphone = function ProductosIphone() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      dataApple = _useState[0],
      setDataApple = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setDataApple(_config_celulares_json__WEBPACK_IMPORTED_MODULE_3__["celulares"].filter(function (celu) {
      return celu.marca === "Iphone";
    }));
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      type: "flex",
      justify: "center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        span: 24,
        style: {
          textAlign: "center"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
          orientation: "left",
          children: ["Iphone (", dataApple.length, ")"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: 0,
        lg: 24,
        children: dataApple.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
          effect: "fade",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [82, 80, 67, 71, 74]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [61, 62, 63, 64, 65]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [56, 57, 58, 59, 60]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [51, 52, 53, 54, 55]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [46, 47, 48, 49, 50]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [41, 42, 43, 44, 45]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [36, 37, 38, 39, 40]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [31, 32, 33, 34, 35]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [26, 27, 28, 29, 30]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [21, 22, 23, 24, 25]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [16, 16, 18, 19, 20]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [11, 12, 13, 14, 15]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [6, 7, 8, 9, 10]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [1, 2, 3, 4, 5]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [6, 7, 8, 9, 10]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [11, 12, 13, 14, 15]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [16, 17, 18, 19, 20]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: 24,
        lg: 0,
        children: dataApple.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
          effect: "fade",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [82, 80]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [67, 71]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [74, 61]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [62, 63]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [64, 65]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [13, 14]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [11, 12]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [9, 10]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [7, 8]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [5, 6]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [3, 4]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [1, 2]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(ProductosIphone, "/ANaGMNzKqpPGcHe57/LgMRch3g=");

_c = ProductosIphone;
/* harmony default export */ __webpack_exports__["default"] = (ProductosIphone);

var _c;

$RefreshReg$(_c, "ProductosIphone");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL1Byb2R1Y3Rvc0lwaG9uZS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0b3NJcGhvbmUiLCJ1c2VTdGF0ZSIsImRhdGFBcHBsZSIsInNldERhdGFBcHBsZSIsInVzZUVmZmVjdCIsImNlbHVsYXJlcyIsImZpbHRlciIsImNlbHUiLCJtYXJjYSIsInRleHRBbGlnbiIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLEVBQUQsQ0FEZDtBQUFBLE1BQ3JCQyxTQURxQjtBQUFBLE1BQ1ZDLFlBRFU7O0FBRzVCQyx5REFBUyxDQUFDLFlBQU07QUFDZEQsZ0JBQVksQ0FBQ0UsZ0VBQVMsQ0FBQ0MsTUFBVixDQUFpQixVQUFDQyxJQUFEO0FBQUEsYUFBVUEsSUFBSSxDQUFDQyxLQUFMLEtBQWUsUUFBekI7QUFBQSxLQUFqQixDQUFELENBQVo7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyx3Q0FBRDtBQUFLLFVBQUksRUFBQyxNQUFWO0FBQWlCLGFBQU8sRUFBQyxRQUF6QjtBQUFBLDhCQUNFLHFFQUFDLHdDQUFEO0FBQUssWUFBSSxFQUFFLEVBQVg7QUFBZSxhQUFLLEVBQUU7QUFBRUMsbUJBQVMsRUFBRTtBQUFiLFNBQXRCO0FBQUEsK0JBQ0UscUVBQUMsNENBQUQ7QUFBUyxxQkFBVyxFQUFDLE1BQXJCO0FBQUEsaUNBQXFDUCxTQUFTLENBQUNRLE1BQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFLHFFQUFDLHdDQUFEO0FBQUssVUFBRSxFQUFFLENB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bUJBVEYsZUFVRSxxRUFBQyw4REFBRDtBQUFnQixnQkFBSSxFQUFFQSxTQUF0QjtBQUFpQyxpQkFBSyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUo7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRixlQVdFLHFFQUFDLDhEQUFEO0FBQWdCLGdCQUFJLEVBQUVBLFNBQXRCO0FBQWlDLGlCQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSjtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhGLGVBWUUscUVBQUMsOERBQUQ7QUFBZ0IsZ0JBQUksRUFBRUEsU0FBdEI7QUFBaUMsaUJBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWkYsZUFhRSxxRUFBQyw4REFBRDtBQUFnQixnQkFBSSxFQUFFQSxTQUF0QjtBQUFpQyxpQkFBSyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUo7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUEsa0JBREY7QUF1REQsQ0E5REQ7O0dBQU1GLGU7O0tBQUFBLGU7QUFnRVNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tuYW1lXS5hZTBmYmUzNTYzNGY2MGIwYzkxNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgRGl2aWRlciwgQ2Fyb3VzZWwgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgQmFycmFQcm9kdWN0b3MgZnJvbSBcIi4uL2NvbW1vbi9CYXJyYVByb2R1Y3Rvc1wiO1xyXG5pbXBvcnQgeyBjZWx1bGFyZXMgfSBmcm9tIFwiLi4vLi4vY29uZmlnL2NlbHVsYXJlcy5qc29uXCI7XHJcblxyXG5jb25zdCBQcm9kdWN0b3NJcGhvbmUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2RhdGFBcHBsZSwgc2V0RGF0YUFwcGxlXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldERhdGFBcHBsZShjZWx1bGFyZXMuZmlsdGVyKChjZWx1KSA9PiBjZWx1Lm1hcmNhID09PSBcIklwaG9uZVwiKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgPENvbCBzcGFuPXsyNH0gc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJsZWZ0XCI+SXBob25lICh7ZGF0YUFwcGxlLmxlbmd0aH0pPC9EaXZpZGVyPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgeHM9ezB9IGxnPXsyNH0+XHJcbiAgICAgICAgICB7ZGF0YUFwcGxlLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWwgZWZmZWN0PVwiZmFkZVwiPlxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbODIsIDgwLCA2NywgNzEsIDc0XX0gLz5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzYxLCA2MiwgNjMsIDY0LCA2NV19IC8+XHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1s1NiwgNTcsIDU4LCA1OSwgNjBdfSAvPlxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbNTEsIDUyLCA1MywgNTQsIDU1XX0gLz5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzQ2LCA0NywgNDgsIDQ5LCA1MF19IC8+XHJcblxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbNDEsIDQyLCA0MywgNDQsIDQ1XX0gLz5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzM2LCAzNywgMzgsIDM5LCA0MF19IC8+XHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1szMSwgMzIsIDMzLCAzNCwgMzVdfSAvPlxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbMjYsIDI3LCAyOCwgMjksIDMwXX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1syMSwgMjIsIDIzLCAyNCwgMjVdfSAvPlxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbMTYsIDE2LCAxOCwgMTksIDIwXX0gLz5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzExLCAxMiwgMTMsIDE0LCAxNV19IC8+XHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1s2LCA3LCA4LCA5LCAxMF19IC8+XHJcblxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbMSwgMiwgMywgNCwgNV19IC8+XHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1s2LCA3LCA4LCA5LCAxMF19IC8+XHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1sxMSwgMTIsIDEzLCAxNCwgMTVdfSAvPlxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbMTYsIDE3LCAxOCwgMTksIDIwXX0gLz5cclxuICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCB4cz17MjR9IGxnPXswfT5cclxuICAgICAgICAgIHtkYXRhQXBwbGUubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgIDxDYXJvdXNlbCBlZmZlY3Q9XCJmYWRlXCI+XHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1s4MiwgODBdfSAvPlxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbNjcsIDcxXX0gLz5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17Wzc0LCA2MV19IC8+XHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1s2MiwgNjNdfSAvPlxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbNjQsIDY1XX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1sxMywgMTRdfSAvPlxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbMTEsIDEyXX0gLz5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzksIDEwXX0gLz5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzcsIDhdfSAvPlxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbNSwgNl19IC8+XHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1szLCA0XX0gLz5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzEsIDJdfSAvPlxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdG9zSXBob25lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9