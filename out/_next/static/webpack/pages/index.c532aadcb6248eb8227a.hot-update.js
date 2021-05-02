webpackHotUpdate_N_E("pages/index",{

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
      return celu.marca === "iphone";
    }));
    setDataXiaomi(jsonXiaomi);
    setDataSamsung(jsonSamsung);
    setDataAlcatel(jsonAlcatel);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      type: "flex",
      justify: "center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        span: 24,
        style: {
          textAlign: "center"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Divider, {
          orientation: "left",
          children: ["Iphone (", dataApple.length, ")"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: 0,
        lg: 24,
        children: dataApple.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Carousel, {
          effect: "fade",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [82, 80, 67, 71, 74]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [61, 62, 63, 64, 65]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [56, 57, 58, 59, 60]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [51, 52, 53, 54, 55]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [46, 47, 48, 49, 50]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [41, 42, 43, 44, 45]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [36, 37, 38, 39, 40]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [31, 32, 33, 34, 35]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [26, 27, 28, 29, 30]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [21, 22, 23, 24, 25]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [16, 16, 18, 19, 20]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [11, 12, 13, 14, 15]
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
            items: [1, 2, 3, 4, 5]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [6, 7, 8, 9, 10]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [11, 12, 13, 14, 15]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [16, 17, 18, 19, 20]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: 24,
        lg: 0,
        children: dataApple.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Carousel, {
          effect: "fade",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [82, 80]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [67, 71]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [74, 61]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [62, 63]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [64, 65]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [13, 14]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [11, 12]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [9, 10]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [7, 8]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [5, 6]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [3, 4]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataApple,
            items: [1, 2]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_xiaomi_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/xiaomi.json */ "./config/xiaomi.json");
var _config_xiaomi_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/xiaomi.json */ "./config/xiaomi.json", 1);
/* harmony import */ var _config_samsung_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/samsung.json */ "./config/samsung.json");
var _config_samsung_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/samsung.json */ "./config/samsung.json", 1);
/* harmony import */ var _config_alcatel_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/alcatel.json */ "./config/alcatel.json");
var _config_alcatel_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/alcatel.json */ "./config/alcatel.json", 1);
/* harmony import */ var _components_Header_MenuBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header/MenuBar */ "./components/Header/MenuBar.js");
/* harmony import */ var _components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/common/BarraProductos */ "./components/common/BarraProductos/index.js");
/* harmony import */ var _components_Home_ProductosIphone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Home/ProductosIphone */ "./components/Home/ProductosIphone.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\DavidOchoaBermudez\\Desktop\\nextouch-web\\pages\\index.js",
    _s = $RefreshSig$();














var stylesCss = new String(".ant-carousel .slick-dots li button{background:#23a34e;}.ant-carousel .slick-dots li.slick-active button{background:#23a34e;opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGF2aWRPY2hvYUJlcm11ZGV6XFxEZXNrdG9wXFxuZXh0b3VjaC13ZWJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZNEIsQUFHd0IsQUFHQSxtQkFGckIsQUFHWSxVQUNaIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRGF2aWRPY2hvYUJlcm11ZGV6XFxEZXNrdG9wXFxuZXh0b3VjaC13ZWJcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdywgQ29sLCBDYXJvdXNlbCwgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xuaW1wb3J0IGpzb25YaWFvbWkgZnJvbSBcIi4uL2NvbmZpZy94aWFvbWkuanNvblwiO1xuaW1wb3J0IGpzb25TYW1zdW5nIGZyb20gXCIuLi9jb25maWcvc2Ftc3VuZy5qc29uXCI7XG5pbXBvcnQganNvbkFsY2F0ZWwgZnJvbSBcIi4uL2NvbmZpZy9hbGNhdGVsLmpzb25cIjtcbmltcG9ydCBNZW51QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlci9NZW51QmFyXCI7XG5pbXBvcnQgQmFycmFQcm9kdWN0b3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL0JhcnJhUHJvZHVjdG9zXCI7XG5pbXBvcnQgUHJvZHVjdG9zSXBob25lIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvUHJvZHVjdG9zSXBob25lXCI7XG5cbmNvbnN0IHN0eWxlc0NzcyA9IGNzcy5nbG9iYWxgXG4gIC5hbnQtY2Fyb3VzZWwgLnNsaWNrLWRvdHMgbGkgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjNhMzRlO1xuICB9XG4gIC5hbnQtY2Fyb3VzZWwgLnNsaWNrLWRvdHMgbGkuc2xpY2stYWN0aXZlIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogIzIzYTM0ZTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuXG5jb25zdCBjb250ZW50U3R5bGUgPSB7XG4gIGhlaWdodDogXCIxNjBweFwiLFxuICBjb2xvcjogXCIjZmZmXCIsXG4gIGxpbmVIZWlnaHQ6IFwiMTYwcHhcIixcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICBiYWNrZ3JvdW5kOiBcIiMzNjRkNzlcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtkYXRhWGlhb21pLCBzZXREYXRhWGlhb21pXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2RhdGFTYW1zdW5nLCBzZXREYXRhU2Ftc3VuZ10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtkYXRhQWxjYXRlbCwgc2V0RGF0YUFsY2F0ZWxdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RGF0YVhpYW9taShqc29uWGlhb21pKTtcbiAgICBzZXREYXRhU2Ftc3VuZyhqc29uU2Ftc3VuZyk7XG4gICAgc2V0RGF0YUFsY2F0ZWwoanNvbkFsY2F0ZWwpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtzdHlsZXNDc3N9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XG4gICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cblxuICAgICAgICB7LyogPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4wLjAtYmV0YTIvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1CbWJ4dVB3UWEybGMvRlZ6QmNOSjdVQXlKeE02d3VxSWo2MXRMcmM0d1NYMHN6SC9FdituWVJSdVdsb2xmbGZsXCJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgIC8+IFxuICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4uanNcIlxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1iNWtIeVhnY3BiWkpPL3RZOVVsN2tHa2YxUzBDV3VLY0NEMzhsOFlrZUg4ejhRakUwR21XMWdZVTVTOUZPbkowXCJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgID48L3NjcmlwdD5cbiAgICAgICAgKi99XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U2hpcHBvcmkrTWluY2hvOndnaHRANDAwOzYwMDs4MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cblxuICAgICAgICA8dGl0bGU+UGhvbmVzLCBUYWJsZXRzLCBBY2Nlc29yaWVzIHwgbmV4dG91Y2hvbmxpbmUuY29tLzwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMXJlbVwiIH19PlxuICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgIDxDb2wgeHM9ezI0fSBsZz17MjB9PlxuICAgICAgICAgICAgPFJvdyB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPENvbCBzcGFuPXs0fT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2xvZ28uanBnXCIgYWx0PVwiXCIgd2lkdGg9ezYwfSBoZWlnaHQ9ezYwfSAvPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjB9PlxuICAgICAgICAgICAgICAgIDxNZW51QmFyIC8+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCIgZ3V0dGVyPXtbNDAsIDQwXX0+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBlZmZlY3Q9XCJmYWRlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltZ3MvYmFubmVycy9iYW5uZXIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTkyMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICB7LyogQmFycmEgSXBob25lICovfVxuICAgICAgICAgICAgPFByb2R1Y3Rvc0lwaG9uZSAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICBTYW1zdW5nICh7ZGF0YVNhbXN1bmcubGVuZ3RofSlcbiAgICAgICAgICAgICAgICA8L0RpdmlkZXI+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHhzPXswfSBsZz17MjR9PlxuICAgICAgICAgICAgICAgIHtkYXRhU2Ftc3VuZy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBlZmZlY3Q9XCJmYWRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3Rvc1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFTYW1zdW5nfVxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbMTgsIDE3LCAxNiwgMTUsIDE0XX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YVNhbXN1bmd9XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1sxMywgMTIsIDExLCAxMCwgOV19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3Rvc1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFTYW1zdW5nfVxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbOCwgNywgNiwgNSwgNF19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhU2Ftc3VuZ30gaXRlbXM9e1szLCAyLCAxXX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBsZz17MH0+XG4gICAgICAgICAgICAgICAge2RhdGFTYW1zdW5nLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPENhcm91c2VsIGVmZmVjdD1cImZhZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFTYW1zdW5nfSBpdGVtcz17WzE3LCAxOF19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhU2Ftc3VuZ30gaXRlbXM9e1sxNSwgMTZdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVNhbXN1bmd9IGl0ZW1zPXtbMTMsIDE0XX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFTYW1zdW5nfSBpdGVtcz17WzExLCAxMl19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhU2Ftc3VuZ30gaXRlbXM9e1s5LCAxMF19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhU2Ftc3VuZ30gaXRlbXM9e1s3LCA4XX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFTYW1zdW5nfSBpdGVtcz17WzUsIDZdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVNhbXN1bmd9IGl0ZW1zPXtbMywgNF19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhU2Ftc3VuZ30gaXRlbXM9e1sxLCAyXX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPFJvdyB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0gc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwibGVmdFwiPlxuICAgICAgICAgICAgICAgICAgWGlhb21pICh7ZGF0YVhpYW9taS5sZW5ndGh9KVxuICAgICAgICAgICAgICAgIDwvRGl2aWRlcj5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgeHM9ezB9IGxnPXsyNH0+XG4gICAgICAgICAgICAgICAge2RhdGFYaWFvbWkubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgZWZmZWN0PVwiZmFkZVwiPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVhpYW9taX0gaXRlbXM9e1sxLCAyLCAzLCA0LCA1XX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFYaWFvbWl9IGl0ZW1zPXtbMSwgNiwgNywgOCwgOV19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3Rvc1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFYaWFvbWl9XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1sxMCwgMTEsIDEyLCAxMywgMTRdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3NcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhWGlhb21pfVxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbMTUsIDE2LCAxNywgMThdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCB4cz17MjR9IGxnPXswfT5cbiAgICAgICAgICAgICAgICB7ZGF0YVhpYW9taS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBlZmZlY3Q9XCJmYWRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhWGlhb21pfSBpdGVtcz17WzEsIDJdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVhpYW9taX0gaXRlbXM9e1szLCA0XX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFYaWFvbWl9IGl0ZW1zPXtbNSwgNl19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhWGlhb21pfSBpdGVtcz17WzcsIDhdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVhpYW9taX0gaXRlbXM9e1s5LCAxMF19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhWGlhb21pfSBpdGVtcz17WzExLCAxMl19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhWGlhb21pfSBpdGVtcz17WzEzLCAxNF19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhWGlhb21pfSBpdGVtcz17WzE1LCAxNl19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhWGlhb21pfSBpdGVtcz17WzE3LCAxOF19IC8+XG4gICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICAgIEFsY2F0ZWwgKHtkYXRhQWxjYXRlbC5sZW5ndGh9KVxuICAgICAgICAgICAgICAgIDwvRGl2aWRlcj5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgeHM9ezB9IGxnPXsyNH0+XG4gICAgICAgICAgICAgICAge2RhdGFBbGNhdGVsLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPENhcm91c2VsIGVmZmVjdD1cImZhZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBbGNhdGVsfSBpdGVtcz17WzEsIDJdfSAvPlxuICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCB4cz17MjR9IGxnPXswfT5cbiAgICAgICAgICAgICAgICB7ZGF0YUFsY2F0ZWwubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgZWZmZWN0PVwiZmFkZVwiPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFsY2F0ZWx9IGl0ZW1zPXtbMSwgMl19IC8+XG4gICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxmb290ZXIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICA8cD4yOTMwIE5XIDcyIEFWRSBNSUFNSSBGTCAzMzEyMjwvcD5cbiAgICAgICAgPHA+V0hBVEFQUCArMTc4NjMwMTEzODUuIFJBSU1VTkRPIFNPTDwvcD5cbiAgICAgIDwvZm9vdGVyPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\DavidOchoaBermudez\\\\Desktop\\\\nextouch-web\\\\pages\\\\index.js */");
stylesCss.__hash = "4204844869";
var contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79"
};
function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      dataXiaomi = _useState[0],
      setDataXiaomi = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      dataSamsung = _useState2[0],
      setDataSamsung = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      dataAlcatel = _useState3[0],
      setDataAlcatel = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setDataXiaomi(_config_xiaomi_json__WEBPACK_IMPORTED_MODULE_5__);
    setDataSamsung(_config_samsung_json__WEBPACK_IMPORTED_MODULE_6__);
    setDataAlcatel(_config_alcatel_json__WEBPACK_IMPORTED_MODULE_7__);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: stylesCss.__hash,
      children: stylesCss
    }, void 0, false, void 0, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("meta", {
        charSet: "UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("meta", {
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;800&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("title", {
        children: "Phones, Tablets, Accesories | nextouchonline.com/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
      style: {
        padding: "1rem"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        type: "flex",
        justify: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: 24,
          lg: 20,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
            type: "flex",
            justify: "center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              span: 4,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                href: "/",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("img", {
                  src: "/assets/logo.jpg",
                  alt: "",
                  width: 60,
                  height: 60
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              span: 20,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_Header_MenuBar__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
            type: "flex",
            justify: "center",
            gutter: [40, 40],
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              span: 24,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
                effect: "fade",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                    style: {
                      textAlign: "center"
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("img", {
                      src: "/assets/imgs/banners/banner.png",
                      alt: "",
                      width: 1920 // height="100%"
                      ,
                      style: {
                        maxWidth: "100%",
                        display: "inline"
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 91,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_Home_ProductosIphone__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
            type: "flex",
            justify: "center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              span: 24,
              style: {
                textAlign: "center"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
                orientation: "left",
                children: ["Samsung (", dataSamsung.length, ")"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              xs: 0,
              lg: 24,
              children: dataSamsung.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
                effect: "fade",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataSamsung,
                  items: [18, 17, 16, 15, 14]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataSamsung,
                  items: [13, 12, 11, 10, 9]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataSamsung,
                  items: [8, 7, 6, 5, 4]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataSamsung,
                  items: [3, 2, 1]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              xs: 24,
              lg: 0,
              children: dataSamsung.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
                effect: "fade",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataSamsung,
                  items: [17, 18]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataSamsung,
                  items: [15, 16]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataSamsung,
                  items: [13, 14]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataSamsung,
                  items: [11, 12]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataSamsung,
                  items: [9, 10]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataSamsung,
                  items: [7, 8]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataSamsung,
                  items: [5, 6]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataSamsung,
                  items: [3, 4]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataSamsung,
                  items: [1, 2]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
            type: "flex",
            justify: "center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              span: 24,
              style: {
                textAlign: "center"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
                orientation: "left",
                children: ["Xiaomi (", dataXiaomi.length, ")"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              xs: 0,
              lg: 24,
              children: dataXiaomi.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
                effect: "fade",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataXiaomi,
                  items: [1, 2, 3, 4, 5]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataXiaomi,
                  items: [1, 6, 7, 8, 9]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataXiaomi,
                  items: [10, 11, 12, 13, 14]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataXiaomi,
                  items: [15, 16, 17, 18]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              xs: 24,
              lg: 0,
              children: dataXiaomi.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
                effect: "fade",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataXiaomi,
                  items: [1, 2]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataXiaomi,
                  items: [3, 4]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataXiaomi,
                  items: [5, 6]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 178,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataXiaomi,
                  items: [7, 8]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataXiaomi,
                  items: [9, 10]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataXiaomi,
                  items: [11, 12]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 181,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataXiaomi,
                  items: [13, 14]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataXiaomi,
                  items: [15, 16]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 183,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataXiaomi,
                  items: [17, 18]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
            type: "flex",
            justify: "center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              span: 24,
              style: {
                textAlign: "center"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
                orientation: "left",
                children: ["Alcatel (", dataAlcatel.length, ")"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              xs: 0,
              lg: 24,
              children: dataAlcatel.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
                effect: "fade",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataAlcatel,
                  items: [1, 2]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 199,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              xs: 24,
              lg: 0,
              children: dataAlcatel.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
                effect: "fade",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataAlcatel,
                  items: [1, 2]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 206,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("footer", {
      style: {
        textAlign: "center"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("p", {
        children: "2930 NW 72 AVE MIAMI FL 33122"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("p", {
        children: "WHATAPP +17863011385. RAIMUNDO SOL"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Home, "BR177X0YDZb2P1jwBLMJkR1Ri+c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL1Byb2R1Y3Rvc0lwaG9uZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZHVjdG9zSXBob25lIiwidXNlU3RhdGUiLCJkYXRhQXBwbGUiLCJzZXREYXRhQXBwbGUiLCJ1c2VFZmZlY3QiLCJjZWx1bGFyZXMiLCJmaWx0ZXIiLCJjZWx1IiwibWFyY2EiLCJzZXREYXRhWGlhb21pIiwianNvblhpYW9taSIsInNldERhdGFTYW1zdW5nIiwianNvblNhbXN1bmciLCJzZXREYXRhQWxjYXRlbCIsImpzb25BbGNhdGVsIiwidGV4dEFsaWduIiwibGVuZ3RoIiwic3R5bGVzQ3NzIiwiY29udGVudFN0eWxlIiwiaGVpZ2h0IiwiY29sb3IiLCJsaW5lSGVpZ2h0IiwiYmFja2dyb3VuZCIsIkhvbWUiLCJkYXRhWGlhb21pIiwiZGF0YVNhbXN1bmciLCJkYXRhQWxjYXRlbCIsInBhZGRpbmciLCJtYXhXaWR0aCIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFBQSxrQkFDTUMsc0RBQVEsQ0FBQyxFQUFELENBRGQ7QUFBQSxNQUNyQkMsU0FEcUI7QUFBQSxNQUNWQyxZQURVOztBQUc1QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RELGdCQUFZLENBQUNFLGdFQUFTLENBQUNDLE1BQVYsQ0FBaUIsVUFBQ0MsSUFBRDtBQUFBLGFBQVVBLElBQUksQ0FBQ0MsS0FBTCxLQUFlLFFBQXpCO0FBQUEsS0FBakIsQ0FBRCxDQUFaO0FBQ0FDLGlCQUFhLENBQUNDLFVBQUQsQ0FBYjtBQUNBQyxrQkFBYyxDQUFDQyxXQUFELENBQWQ7QUFDQUMsa0JBQWMsQ0FBQ0MsV0FBRCxDQUFkO0FBQ0QsR0FMUSxFQUtOLEVBTE0sQ0FB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QUEsWUE1S0YsZUE2S0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTdLRixlQThLRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOUtGLGVBK0tFO0FBQVEsV0FBSyxFQUFFO0FBQUVYLGlCQUFTLEVBQUU7QUFBYixPQUFmO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0tGLGVBbUxFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuTEYsZUFvTEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBMRjtBQUFBLGtCQURGO0FBd0xEOztHQW5NdUJRLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzUzMmFhZGNiNjI0OGViODIyN2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgQmFycmFQcm9kdWN0b3MgZnJvbSBcIi4uL2NvbW1vbi9CYXJyYVByb2R1Y3Rvc1wiO1xyXG5pbXBvcnQgeyBjZWx1bGFyZXMgfSBmcm9tIFwiLi4vLi4vY29uZmlnL2NlbHVsYXJlcy5qc29uXCI7XHJcblxyXG5jb25zdCBQcm9kdWN0b3NJcGhvbmUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2RhdGFBcHBsZSwgc2V0RGF0YUFwcGxlXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldERhdGFBcHBsZShjZWx1bGFyZXMuZmlsdGVyKChjZWx1KSA9PiBjZWx1Lm1hcmNhID09PSBcImlwaG9uZVwiKSk7XHJcbiAgICBzZXREYXRhWGlhb21pKGpzb25YaWFvbWkpO1xyXG4gICAgc2V0RGF0YVNhbXN1bmcoanNvblNhbXN1bmcpO1xyXG4gICAgc2V0RGF0YUFsY2F0ZWwoanNvbkFsY2F0ZWwpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgIDxDb2wgc3Bhbj17MjR9IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwibGVmdFwiPklwaG9uZSAoe2RhdGFBcHBsZS5sZW5ndGh9KTwvRGl2aWRlcj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHhzPXswfSBsZz17MjR9PlxyXG4gICAgICAgICAge2RhdGFBcHBsZS5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgPENhcm91c2VsIGVmZmVjdD1cImZhZGVcIj5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzgyLCA4MCwgNjcsIDcxLCA3NF19IC8+XHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1s2MSwgNjIsIDYzLCA2NCwgNjVdfSAvPlxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbNTYsIDU3LCA1OCwgNTksIDYwXX0gLz5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzUxLCA1MiwgNTMsIDU0LCA1NV19IC8+XHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1s0NiwgNDcsIDQ4LCA0OSwgNTBdfSAvPlxyXG5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzQxLCA0MiwgNDMsIDQ0LCA0NV19IC8+XHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1szNiwgMzcsIDM4LCAzOSwgNDBdfSAvPlxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbMzEsIDMyLCAzMywgMzQsIDM1XX0gLz5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzI2LCAyNywgMjgsIDI5LCAzMF19IC8+XHJcblxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbMjEsIDIyLCAyMywgMjQsIDI1XX0gLz5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzE2LCAxNiwgMTgsIDE5LCAyMF19IC8+XHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1sxMSwgMTIsIDEzLCAxNCwgMTVdfSAvPlxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbNiwgNywgOCwgOSwgMTBdfSAvPlxyXG5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzEsIDIsIDMsIDQsIDVdfSAvPlxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbNiwgNywgOCwgOSwgMTBdfSAvPlxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbMTEsIDEyLCAxMywgMTQsIDE1XX0gLz5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzE2LCAxNywgMTgsIDE5LCAyMF19IC8+XHJcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgeHM9ezI0fSBsZz17MH0+XHJcbiAgICAgICAgICB7ZGF0YUFwcGxlLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWwgZWZmZWN0PVwiZmFkZVwiPlxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbODIsIDgwXX0gLz5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzY3LCA3MV19IC8+XHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1s3NCwgNjFdfSAvPlxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbNjIsIDYzXX0gLz5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzY0LCA2NV19IC8+XHJcblxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbMTMsIDE0XX0gLz5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzExLCAxMl19IC8+XHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1s5LCAxMF19IC8+XHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1s3LCA4XX0gLz5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzUsIDZdfSAvPlxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbMywgNF19IC8+XHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1sxLCAyXX0gLz5cclxuICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Rvc0lwaG9uZTtcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm93LCBDb2wsIENhcm91c2VsLCBEaXZpZGVyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XG5pbXBvcnQganNvblhpYW9taSBmcm9tIFwiLi4vY29uZmlnL3hpYW9taS5qc29uXCI7XG5pbXBvcnQganNvblNhbXN1bmcgZnJvbSBcIi4uL2NvbmZpZy9zYW1zdW5nLmpzb25cIjtcbmltcG9ydCBqc29uQWxjYXRlbCBmcm9tIFwiLi4vY29uZmlnL2FsY2F0ZWwuanNvblwiO1xuaW1wb3J0IE1lbnVCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL01lbnVCYXJcIjtcbmltcG9ydCBCYXJyYVByb2R1Y3RvcyBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vQmFycmFQcm9kdWN0b3NcIjtcbmltcG9ydCBQcm9kdWN0b3NJcGhvbmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9Qcm9kdWN0b3NJcGhvbmVcIjtcblxuY29uc3Qgc3R5bGVzQ3NzID0gY3NzLmdsb2JhbGBcbiAgLmFudC1jYXJvdXNlbCAuc2xpY2stZG90cyBsaSBidXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICMyM2EzNGU7XG4gIH1cbiAgLmFudC1jYXJvdXNlbCAuc2xpY2stZG90cyBsaS5zbGljay1hY3RpdmUgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjNhMzRlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbmA7XG5cbmNvbnN0IGNvbnRlbnRTdHlsZSA9IHtcbiAgaGVpZ2h0OiBcIjE2MHB4XCIsXG4gIGNvbG9yOiBcIiNmZmZcIixcbiAgbGluZUhlaWdodDogXCIxNjBweFwiLFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gIGJhY2tncm91bmQ6IFwiIzM2NGQ3OVwiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2RhdGFYaWFvbWksIHNldERhdGFYaWFvbWldID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZGF0YVNhbXN1bmcsIHNldERhdGFTYW1zdW5nXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2RhdGFBbGNhdGVsLCBzZXREYXRhQWxjYXRlbF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXREYXRhWGlhb21pKGpzb25YaWFvbWkpO1xuICAgIHNldERhdGFTYW1zdW5nKGpzb25TYW1zdW5nKTtcbiAgICBzZXREYXRhQWxjYXRlbChqc29uQWxjYXRlbCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge3N0eWxlc0Nzc31cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cbiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuXG4gICAgICAgIHsvKiA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMC1iZXRhMi9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUJtYnh1UHdRYTJsYy9GVnpCY05KN1VBeUp4TTZ3dXFJajYxdExyYzR3U1gwc3pIL0V2K25ZUlJ1V2xvbGZsZmxcIlxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz4gXG4gICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4wLjAtYmV0YTIvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LWI1a0h5WGdjcGJaSk8vdFk5VWw3a0drZjFTMENXdUtjQ0QzOGw4WWtlSDh6OFFqRTBHbVcxZ1lVNVM5Rk9uSjBcIlxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgPjwvc2NyaXB0PlxuICAgICAgICAqL31cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TaGlwcG9yaStNaW5jaG86d2dodEA0MDA7NjAwOzgwMCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDx0aXRsZT5QaG9uZXMsIFRhYmxldHMsIEFjY2Vzb3JpZXMgfCBuZXh0b3VjaG9ubGluZS5jb20vPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxcmVtXCIgfX0+XG4gICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgPENvbCB4cz17MjR9IGxnPXsyMH0+XG4gICAgICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezR9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvbG9nby5qcGdcIiBhbHQ9XCJcIiB3aWR0aD17NjB9IGhlaWdodD17NjB9IC8+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCBzcGFuPXsyMH0+XG4gICAgICAgICAgICAgICAgPE1lbnVCYXIgLz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPFJvdyB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIiBndXR0ZXI9e1s0MCwgNDBdfT5cbiAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0+XG4gICAgICAgICAgICAgICAgPENhcm91c2VsIGVmZmVjdD1cImZhZGVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1ncy9iYW5uZXJzL2Jhbm5lci5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxOTIwfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIHsvKiBCYXJyYSBJcGhvbmUgKi99XG4gICAgICAgICAgICA8UHJvZHVjdG9zSXBob25lIC8+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICAgIFNhbXN1bmcgKHtkYXRhU2Ftc3VuZy5sZW5ndGh9KVxuICAgICAgICAgICAgICAgIDwvRGl2aWRlcj5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgeHM9ezB9IGxnPXsyNH0+XG4gICAgICAgICAgICAgICAge2RhdGFTYW1zdW5nLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPENhcm91c2VsIGVmZmVjdD1cImZhZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YVNhbXN1bmd9XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1sxOCwgMTcsIDE2LCAxNSwgMTRdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3NcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhU2Ftc3VuZ31cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17WzEzLCAxMiwgMTEsIDEwLCA5XX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YVNhbXN1bmd9XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1s4LCA3LCA2LCA1LCA0XX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFTYW1zdW5nfSBpdGVtcz17WzMsIDIsIDFdfSAvPlxuICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCB4cz17MjR9IGxnPXswfT5cbiAgICAgICAgICAgICAgICB7ZGF0YVNhbXN1bmcubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgZWZmZWN0PVwiZmFkZVwiPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVNhbXN1bmd9IGl0ZW1zPXtbMTcsIDE4XX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFTYW1zdW5nfSBpdGVtcz17WzE1LCAxNl19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhU2Ftc3VuZ30gaXRlbXM9e1sxMywgMTRdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVNhbXN1bmd9IGl0ZW1zPXtbMTEsIDEyXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFTYW1zdW5nfSBpdGVtcz17WzksIDEwXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFTYW1zdW5nfSBpdGVtcz17WzcsIDhdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVNhbXN1bmd9IGl0ZW1zPXtbNSwgNl19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhU2Ftc3VuZ30gaXRlbXM9e1szLCA0XX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFTYW1zdW5nfSBpdGVtcz17WzEsIDJdfSAvPlxuICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICBYaWFvbWkgKHtkYXRhWGlhb21pLmxlbmd0aH0pXG4gICAgICAgICAgICAgICAgPC9EaXZpZGVyPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCB4cz17MH0gbGc9ezI0fT5cbiAgICAgICAgICAgICAgICB7ZGF0YVhpYW9taS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBlZmZlY3Q9XCJmYWRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhWGlhb21pfSBpdGVtcz17WzEsIDIsIDMsIDQsIDVdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVhpYW9taX0gaXRlbXM9e1sxLCA2LCA3LCA4LCA5XX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YVhpYW9taX1cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17WzEwLCAxMSwgMTIsIDEzLCAxNF19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3Rvc1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFYaWFvbWl9XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1sxNSwgMTYsIDE3LCAxOF19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbGc9ezB9PlxuICAgICAgICAgICAgICAgIHtkYXRhWGlhb21pLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPENhcm91c2VsIGVmZmVjdD1cImZhZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFYaWFvbWl9IGl0ZW1zPXtbMSwgMl19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhWGlhb21pfSBpdGVtcz17WzMsIDRdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVhpYW9taX0gaXRlbXM9e1s1LCA2XX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFYaWFvbWl9IGl0ZW1zPXtbNywgOF19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhWGlhb21pfSBpdGVtcz17WzksIDEwXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFYaWFvbWl9IGl0ZW1zPXtbMTEsIDEyXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFYaWFvbWl9IGl0ZW1zPXtbMTMsIDE0XX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFYaWFvbWl9IGl0ZW1zPXtbMTUsIDE2XX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFYaWFvbWl9IGl0ZW1zPXtbMTcsIDE4XX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPFJvdyB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0gc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwibGVmdFwiPlxuICAgICAgICAgICAgICAgICAgQWxjYXRlbCAoe2RhdGFBbGNhdGVsLmxlbmd0aH0pXG4gICAgICAgICAgICAgICAgPC9EaXZpZGVyPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCB4cz17MH0gbGc9ezI0fT5cbiAgICAgICAgICAgICAgICB7ZGF0YUFsY2F0ZWwubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgZWZmZWN0PVwiZmFkZVwiPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFsY2F0ZWx9IGl0ZW1zPXtbMSwgMl19IC8+XG4gICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbGc9ezB9PlxuICAgICAgICAgICAgICAgIHtkYXRhQWxjYXRlbC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBlZmZlY3Q9XCJmYWRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQWxjYXRlbH0gaXRlbXM9e1sxLCAyXX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxiciAvPlxuICAgICAgPGZvb3RlciBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgIDxwPjI5MzAgTlcgNzIgQVZFIE1JQU1JIEZMIDMzMTIyPC9wPlxuICAgICAgICA8cD5XSEFUQVBQICsxNzg2MzAxMTM4NS4gUkFJTVVORE8gU09MPC9wPlxuICAgICAgPC9mb290ZXI+XG4gICAgICA8YnIgLz5cbiAgICAgIDxiciAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==