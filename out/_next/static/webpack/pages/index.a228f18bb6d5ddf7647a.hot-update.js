webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Home/ProductosIphoneAlMayor.js":
/*!***************************************************!*\
  !*** ./components/Home/ProductosIphoneAlMayor.js ***!
  \***************************************************/
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
var _jsxFileName = "C:\\Users\\DavidOchoaBermudez\\Desktop\\nextouch-web\\components\\Home\\ProductosIphoneAlMayor.js",
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

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header_MenuBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header/MenuBar */ "./components/Header/MenuBar.js");
/* harmony import */ var _components_Home_ProductosIphone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Home/ProductosIphone */ "./components/Home/ProductosIphone.js");
/* harmony import */ var _components_Home_ProductosIphoneAlMayor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Home/ProductosIphoneAlMayor */ "./components/Home/ProductosIphoneAlMayor.js");
/* harmony import */ var _components_Home_ProductosSamsung__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Home/ProductosSamsung */ "./components/Home/ProductosSamsung.js");
/* harmony import */ var _components_Home_ProductosXiaomi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Home/ProductosXiaomi */ "./components/Home/ProductosXiaomi.js");
/* harmony import */ var _components_Home_ProductosAlcatel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Home/ProductosAlcatel */ "./components/Home/ProductosAlcatel.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\DavidOchoaBermudez\\Desktop\\nextouch-web\\pages\\index.js";













var stylesCss = new String("\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGF2aWRPY2hvYUJlcm11ZGV6XFxEZXNrdG9wXFxuZXh0b3VjaC13ZWJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZNEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxEYXZpZE9jaG9hQmVybXVkZXpcXERlc2t0b3BcXG5leHRvdWNoLXdlYlxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm93LCBDb2wsIENhcm91c2VsLCBEaXZpZGVyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XG5pbXBvcnQgTWVudUJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXIvTWVudUJhclwiO1xuaW1wb3J0IFByb2R1Y3Rvc0lwaG9uZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL1Byb2R1Y3Rvc0lwaG9uZVwiO1xuaW1wb3J0IFByb2R1Y3Rvc0lwaG9uZUFsTWF5b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9Qcm9kdWN0b3NJcGhvbmVBbE1heW9yXCI7XG5pbXBvcnQgUHJvZHVjdG9zU2Ftc3VuZyBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL1Byb2R1Y3Rvc1NhbXN1bmdcIjtcbmltcG9ydCBQcm9kdWN0b3NYaWFvbWkgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9Qcm9kdWN0b3NYaWFvbWlcIjtcbmltcG9ydCBQcm9kdWN0b3NBbGNhdGVsIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvUHJvZHVjdG9zQWxjYXRlbFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcblxuY29uc3Qgc3R5bGVzQ3NzID0gY3NzLmdsb2JhbGBgO1xuXG4vKiBcbmNvbnN0IGNvbnRlbnRTdHlsZSA9IHtcbiAgaGVpZ2h0OiBcIjE2MHB4XCIsXG4gIGNvbG9yOiBcIiNmZmZcIixcbiAgbGluZUhlaWdodDogXCIxNjBweFwiLFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gIGJhY2tncm91bmQ6IFwiIzM2NGQ3OVwiLFxufTsgKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtzdHlsZXNDc3N9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XG4gICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TaGlwcG9yaStNaW5jaG86d2dodEA0MDA7NjAwOzgwMCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDx0aXRsZT5QaG9uZXMsIFRhYmxldHMsIEFjY2Vzb3JpZXMgfCBuZXh0b3VjaG9ubGluZS5jb208L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjFyZW1cIiB9fT5cbiAgICAgICAgPFJvdyB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8Q29sIHhzPXsyNH0gbGc9ezIwfT5cbiAgICAgICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17NH0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9sb2dvLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIm5leHRvdWNob25saW5lLmNvbVwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs2MH1cbiAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0PXs2MH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCBzcGFuPXsyMH0+XG4gICAgICAgICAgICAgICAgPE1lbnVCYXIgLz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPFJvdyB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIiBndXR0ZXI9e1s0MCwgNDBdfT5cbiAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0+XG4gICAgICAgICAgICAgICAgPENhcm91c2VsIGVmZmVjdD1cImZhZGVcIiBhdXRvcGxheT17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1ncy9iYW5uZXJzL2Jhbm5lcjEuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxOTIwfVxuICAgICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWdzL2Jhbm5lcnMvYmFubmVyMi5qcGdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE5MjB9XG4gICAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPFJvdyB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIiBndXR0ZXI9e1swLCAwXX0+XG4gICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBsZz17MTJ9IG1kPXsxMn0gc209ezEyfSB4bD17MTJ9PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjREFFQUQwXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxoMT5WZW5kZW1vcyBhbCBtYXlvciB5IGFsIGRldGFsLjwvaDE+XG4gICAgICAgICAgICAgICAgICA8aDI+U21hcnRwaG9uZXMsIHBhcnRlcyB5IHBpZXphcy48L2gyPlxuICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgVGVsw6lmb25vOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwidGVsOisxNzg2MzAxMTM4NVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICArMTc4NjMwMTEzODVcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAuXG4gICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgPGgyPkRpcmVjY2nDs246IDI5MzAgTlcgNzIgQVZFIE1JQU1JIEZMIDMzMTIyLjwvaDI+XG4gICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgIFB1bHNhe1wiIFwifVxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dvby5nbC9tYXBzLzRrMVdCMkVNWlNzR3JpVjk4XCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBhcXXDrVxuICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICBwYXJhIHZlciBjb21vIGxsZWdhciBlbiBlbCBtYXBhXG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCB4cz17MjR9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9IHhsPXsxMn0+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgYWx0PVwic3RvcmVcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltZ3MvaG9tZS9tYXBhbmV4dG91Y2gyLnBuZ1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiIGd1dHRlcj17WzQwLCA0MF19PlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cbiAgICAgICAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQzNTkyLjA3Nzg4NDMyOTM4MjQhMmQtODAuMzE1NzEyMTg0OTc4MjchM2QyNS44MDEwMDQ0ODM2MTg4MzYhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDg4ZDliOTg0ZDkzMWYxNWIlM0EweDY3MWFkOWIyZDI2NTNjOTYhMnMyOTMwJTIwTlclMjA3Mm5kJTIwQXZlJTJDJTIwTWlhbWklMkMlMjBGTCUyMDMzMTIyJTJDJTIwRUUuJTIwVVUuITVlMCEzbTIhMXNlcy00MTkhMnNjbCE0djE2MjA1Mjg2NTI1MjEhNW0yITFzZXMtNDE5ITJzY2xcIlxuICAgICAgICAgICAgICAgICAgLy8gd2lkdGg9XCI2MDBcIlxuICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0PVwiNDUwXCJcbiAgICAgICAgICAgICAgICAgIC8vIGFsbG93ZnVsbHNjcmVlbj1cIlwiXG4gICAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzAwcHhcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPjwvaWZyYW1lPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgICA8UHJvZHVjdG9zSXBob25lIC8+XG4gICAgICAgICAgICA8UHJvZHVjdG9zSXBob25lQWxNYXlvciAvPlxuICAgICAgICAgICAgPFByb2R1Y3Rvc1NhbXN1bmcgLz5cbiAgICAgICAgICAgIDxQcm9kdWN0b3NYaWFvbWkgLz5cbiAgICAgICAgICAgIDxQcm9kdWN0b3NBbGNhdGVsIC8+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\DavidOchoaBermudez\\\\Desktop\\\\nextouch-web\\\\pages\\\\index.js */");
/* 
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
}; */

stylesCss.__hash = "2085888330";
function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: stylesCss.__hash,
      children: stylesCss
    }, void 0, false, void 0, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("meta", {
        charSet: "UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("meta", {
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;800&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("title", {
        children: "Phones, Tablets, Accesories | nextouchonline.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
      style: {
        padding: "1rem"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        type: "flex",
        justify: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          xs: 24,
          lg: 20,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
            type: "flex",
            justify: "center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
              span: 4,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                href: "/",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("img", {
                  src: "/assets/logo.jpg",
                  alt: "nextouchonline.com",
                  width: 60 // height={60}
                  ,
                  className: "cursor-pointer",
                  style: {
                    maxWidth: "100%"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
              span: 20,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_Header_MenuBar__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
            type: "flex",
            justify: "center",
            gutter: [40, 40],
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
              span: 24,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
                effect: "fade",
                autoplay: true,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                  style: {
                    textAlign: "center"
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("img", {
                    src: "/assets/imgs/banners/banner1.jpg",
                    alt: "",
                    width: 1920 // height="100%"
                    ,
                    style: {
                      maxWidth: "100%",
                      display: "inline"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                  style: {
                    textAlign: "center"
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("img", {
                    src: "/assets/imgs/banners/banner2.jpg",
                    alt: "",
                    width: 1920 // height="100%"
                    ,
                    style: {
                      maxWidth: "100%",
                      display: "inline"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
            type: "flex",
            justify: "center",
            gutter: [0, 0],
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
              xs: 24,
              lg: 12,
              md: 12,
              sm: 12,
              xl: 12,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                style: {
                  backgroundColor: "#DAEAD0",
                  padding: "1rem",
                  borderRadius: "3px",
                  height: "100%"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h1", {
                  children: "Vendemos al mayor y al detal."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h2", {
                  children: "Smartphones, partes y piezas."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h2", {
                  children: ["Tel\xE9fono:", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("a", {
                    href: "tel:+17863011385",
                    style: {
                      textDecoration: "none"
                    },
                    children: "+17863011385"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 110,
                    columnNumber: 21
                  }, this), "."]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h2", {
                  children: "Direcci\xF3n: 2930 NW 72 AVE MIAMI FL 33122."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h3", {
                  children: ["Pulsa", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("a", {
                    href: "https://goo.gl/maps/4k1WB2EMZSsGriV98",
                    style: {
                      textDecoration: "underline"
                    },
                    target: "_blank",
                    children: "aqu\xED"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 21
                  }, this), " ", "para ver como llegar en el mapa"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
              xs: 24,
              lg: 12,
              md: 12,
              sm: 12,
              xl: 12,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("img", {
                alt: "store",
                style: {
                  maxWidth: "100%"
                },
                src: "/assets/imgs/home/mapanextouch2.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
            type: "flex",
            justify: "center",
            gutter: [40, 40],
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
              span: 24,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("iframe", {
                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.0778843293824!2d-80.31571218497827!3d25.801004483618836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b984d931f15b%3A0x671ad9b2d2653c96!2s2930%20NW%2072nd%20Ave%2C%20Miami%2C%20FL%2033122%2C%20EE.%20UU.!5e0!3m2!1ses-419!2scl!4v1620528652521!5m2!1ses-419!2scl" // width="600"
                // height="450"
                // allowfullscreen=""
                ,
                loading: "lazy",
                style: {
                  width: "100%",
                  border: 0,
                  borderRadius: "5px",
                  height: "300px"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_Home_ProductosIphone__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_Home_ProductosIphoneAlMayor__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_Home_ProductosSamsung__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_Home_ProductosXiaomi__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_Home_ProductosAlcatel__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
_c = Home;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL1Byb2R1Y3Rvc0lwaG9uZUFsTWF5b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rvc0lwaG9uZSIsInVzZVN0YXRlIiwiZGF0YUFwcGxlIiwic2V0RGF0YUFwcGxlIiwidXNlRWZmZWN0IiwiY2VsdWxhcmVzIiwiZmlsdGVyIiwiY2VsdSIsIm1hcmNhIiwidGV4dEFsaWduIiwibGVuZ3RoIiwic3R5bGVzQ3NzIiwiSG9tZSIsInBhZGRpbmciLCJtYXhXaWR0aCIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJ0ZXh0RGVjb3JhdGlvbiIsIndpZHRoIiwiYm9yZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUE7O0FBQUEsa0JBQ01DLHNEQUFRLENBQUMsRUFBRCxDQURkO0FBQUEsTUFDckJDLFNBRHFCO0FBQUEsTUFDVkMsWUFEVTs7QUFHNUJDLHlEQUFTLENBQUMsWUFBTTtBQUNkRCxnQkFBWSxDQUFDRSxnRUFBUyxDQUFDQyxNQUFWLENBQWlCLFVBQUNDLElBQUQ7QUFBQSxhQUFVQSxJQUFJLENBQUNDLEtBQUwsS0FBZSxRQUF6QjtBQUFBLEtBQWpCLENBQUQsQ0FBWjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLHdDQUFEO0FBQUssVUFBSSxFQUFDLE1BQVY7QUFBaUIsYUFBTyxFQUFDLFFBQXpCO0FBQUEsOEJBQ0UscUVBQUMsd0NBQUQ7QUFBSyxZQUFJLEVBQUUsRUFBWDtBQUFlLGFBQUssRUFBRTtBQUFFQyxtQkFBUyxFQUFFO0FBQWIsU0FB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Q0E7QUFKRjtBQUtFLHVCQUFPLEVBQUMsTUFMVjtBQU1FLHFCQUFLLEVBQUU7QUFDTE0sdUJBQUssRUFBRSxNQURGO0FBRUxDLHdCQUFNLEVBQUUsQ0FGSDtBQUdMSiw4QkFBWSxFQUFFLEtBSFQ7QUFJTEMsd0JBQU0sRUFBRTtBQUpIO0FBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWxHRixlQW9IRSxzRUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXBIRixlQXFIRSxzRUFBQywrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXJIRixlQXNIRSxzRUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXRIRixlQXVIRSxzRUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXZIRixlQXdIRSxzRUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXhIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCRixlQStJRSxzRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0lGO0FBQUEsa0JBREY7QUFtSkQ7S0FwSnVCTixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmEyMjhmMThiYjZkNWRkZjc2NDdhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJvdywgQ29sLCBEaXZpZGVyLCBDYXJvdXNlbCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBCYXJyYVByb2R1Y3RvcyBmcm9tIFwiLi4vY29tbW9uL0JhcnJhUHJvZHVjdG9zXCI7XHJcbmltcG9ydCB7IGNlbHVsYXJlcyB9IGZyb20gXCIuLi8uLi9jb25maWcvY2VsdWxhcmVzLmpzb25cIjtcclxuXHJcbmNvbnN0IFByb2R1Y3Rvc0lwaG9uZSA9ICgpID0+IHtcclxuICBjb25zdCBbZGF0YUFwcGxlLCBzZXREYXRhQXBwbGVdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RGF0YUFwcGxlKGNlbHVsYXJlcy5maWx0ZXIoKGNlbHUpID0+IGNlbHUubWFyY2EgPT09IFwiSXBob25lXCIpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPFJvdyB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICA8Q29sIHNwYW49ezI0fSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cImxlZnRcIj5JcGhvbmUgKHtkYXRhQXBwbGUubGVuZ3RofSk8L0RpdmlkZXI+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCB4cz17MH0gbGc9ezI0fT5cclxuICAgICAgICAgIHtkYXRhQXBwbGUubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgIDxDYXJvdXNlbCBlZmZlY3Q9XCJmYWRlXCI+XHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1s4MiwgODAsIDY3LCA3MSwgNzRdfSAvPlxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbNjEsIDYyLCA2MywgNjQsIDY1XX0gLz5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzU2LCA1NywgNTgsIDU5LCA2MF19IC8+XHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1s1MSwgNTIsIDUzLCA1NCwgNTVdfSAvPlxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbNDYsIDQ3LCA0OCwgNDksIDUwXX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1s0MSwgNDIsIDQzLCA0NCwgNDVdfSAvPlxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbMzYsIDM3LCAzOCwgMzksIDQwXX0gLz5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzMxLCAzMiwgMzMsIDM0LCAzNV19IC8+XHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1syNiwgMjcsIDI4LCAyOSwgMzBdfSAvPlxyXG5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzIxLCAyMiwgMjMsIDI0LCAyNV19IC8+XHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1sxNiwgMTYsIDE4LCAxOSwgMjBdfSAvPlxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbMTEsIDEyLCAxMywgMTQsIDE1XX0gLz5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzYsIDcsIDgsIDksIDEwXX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1sxLCAyLCAzLCA0LCA1XX0gLz5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzYsIDcsIDgsIDksIDEwXX0gLz5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzExLCAxMiwgMTMsIDE0LCAxNV19IC8+XHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1sxNiwgMTcsIDE4LCAxOSwgMjBdfSAvPlxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHhzPXsyNH0gbGc9ezB9PlxyXG4gICAgICAgICAge2RhdGFBcHBsZS5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgPENhcm91c2VsIGVmZmVjdD1cImZhZGVcIj5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzgyLCA4MF19IC8+XHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1s2NywgNzFdfSAvPlxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbNzQsIDYxXX0gLz5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzYyLCA2M119IC8+XHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1s2NCwgNjVdfSAvPlxyXG5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzEzLCAxNF19IC8+XHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1sxMSwgMTJdfSAvPlxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbOSwgMTBdfSAvPlxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbNywgOF19IC8+XHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1s1LCA2XX0gLz5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzMsIDRdfSAvPlxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbMSwgMl19IC8+XHJcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0b3NJcGhvbmU7XHJcbiIsImltcG9ydCB7IFJvdywgQ29sLCBDYXJvdXNlbCwgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xuaW1wb3J0IE1lbnVCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL01lbnVCYXJcIjtcbmltcG9ydCBQcm9kdWN0b3NJcGhvbmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9Qcm9kdWN0b3NJcGhvbmVcIjtcbmltcG9ydCBQcm9kdWN0b3NJcGhvbmVBbE1heW9yIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvUHJvZHVjdG9zSXBob25lQWxNYXlvclwiO1xuaW1wb3J0IFByb2R1Y3Rvc1NhbXN1bmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9Qcm9kdWN0b3NTYW1zdW5nXCI7XG5pbXBvcnQgUHJvZHVjdG9zWGlhb21pIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvUHJvZHVjdG9zWGlhb21pXCI7XG5pbXBvcnQgUHJvZHVjdG9zQWxjYXRlbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL1Byb2R1Y3Rvc0FsY2F0ZWxcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5cbmNvbnN0IHN0eWxlc0NzcyA9IGNzcy5nbG9iYWxgYDtcblxuLyogXG5jb25zdCBjb250ZW50U3R5bGUgPSB7XG4gIGhlaWdodDogXCIxNjBweFwiLFxuICBjb2xvcjogXCIjZmZmXCIsXG4gIGxpbmVIZWlnaHQ6IFwiMTYwcHhcIixcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICBiYWNrZ3JvdW5kOiBcIiMzNjRkNzlcIixcbn07ICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7c3R5bGVzQ3NzfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxuICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U2hpcHBvcmkrTWluY2hvOndnaHRANDAwOzYwMDs4MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cblxuICAgICAgICA8dGl0bGU+UGhvbmVzLCBUYWJsZXRzLCBBY2Nlc29yaWVzIHwgbmV4dG91Y2hvbmxpbmUuY29tPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxcmVtXCIgfX0+XG4gICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgPENvbCB4cz17MjR9IGxnPXsyMH0+XG4gICAgICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezR9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvbG9nby5qcGdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJuZXh0b3VjaG9ubGluZS5jb21cIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NjB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodD17NjB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjB9PlxuICAgICAgICAgICAgICAgIDxNZW51QmFyIC8+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCIgZ3V0dGVyPXtbNDAsIDQwXX0+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBlZmZlY3Q9XCJmYWRlXCIgYXV0b3BsYXk9e3RydWV9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltZ3MvYmFubmVycy9iYW5uZXIxLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTkyMH1cbiAgICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1ncy9iYW5uZXJzL2Jhbm5lcjIuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxOTIwfVxuICAgICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCIgZ3V0dGVyPXtbMCwgMF19PlxuICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbGc9ezEyfSBtZD17MTJ9IHNtPXsxMn0geGw9ezEyfT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0RBRUFEMFwiLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjFyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aDE+VmVuZGVtb3MgYWwgbWF5b3IgeSBhbCBkZXRhbC48L2gxPlxuICAgICAgICAgICAgICAgICAgPGgyPlNtYXJ0cGhvbmVzLCBwYXJ0ZXMgeSBwaWV6YXMuPC9oMj5cbiAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICAgIFRlbMOpZm9ubzp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cInRlbDorMTc4NjMwMTEzODVcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgKzE3ODYzMDExMzg1XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgLlxuICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgIDxoMj5EaXJlY2Npw7NuOiAyOTMwIE5XIDcyIEFWRSBNSUFNSSBGTCAzMzEyMi48L2gyPlxuICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICBQdWxzYXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9nb28uZ2wvbWFwcy80azFXQjJFTVpTc0dyaVY5OFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgYXF1w61cbiAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgcGFyYSB2ZXIgY29tbyBsbGVnYXIgZW4gZWwgbWFwYVxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBsZz17MTJ9IG1kPXsxMn0gc209ezEyfSB4bD17MTJ9PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIGFsdD1cInN0b3JlXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWdzL2hvbWUvbWFwYW5leHRvdWNoMi5wbmdcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPFJvdyB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIiBndXR0ZXI9e1s0MCwgNDBdfT5cbiAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0+XG4gICAgICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMzU5Mi4wNzc4ODQzMjkzODI0ITJkLTgwLjMxNTcxMjE4NDk3ODI3ITNkMjUuODAxMDA0NDgzNjE4ODM2ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg4OGQ5Yjk4NGQ5MzFmMTViJTNBMHg2NzFhZDliMmQyNjUzYzk2ITJzMjkzMCUyME5XJTIwNzJuZCUyMEF2ZSUyQyUyME1pYW1pJTJDJTIwRkwlMjAzMzEyMiUyQyUyMEVFLiUyMFVVLiE1ZTAhM20yITFzZXMtNDE5ITJzY2whNHYxNjIwNTI4NjUyNTIxITVtMiExc2VzLTQxOSEyc2NsXCJcbiAgICAgICAgICAgICAgICAgIC8vIHdpZHRoPVwiNjAwXCJcbiAgICAgICAgICAgICAgICAgIC8vIGhlaWdodD1cIjQ1MFwiXG4gICAgICAgICAgICAgICAgICAvLyBhbGxvd2Z1bGxzY3JlZW49XCJcIlxuICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMwMHB4XCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID48L2lmcmFtZT5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgICAgPFByb2R1Y3Rvc0lwaG9uZSAvPlxuICAgICAgICAgICAgPFByb2R1Y3Rvc0lwaG9uZUFsTWF5b3IgLz5cbiAgICAgICAgICAgIDxQcm9kdWN0b3NTYW1zdW5nIC8+XG4gICAgICAgICAgICA8UHJvZHVjdG9zWGlhb21pIC8+XG4gICAgICAgICAgICA8UHJvZHVjdG9zQWxjYXRlbCAvPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9