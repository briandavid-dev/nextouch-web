webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Home/ProductosSamsung.js":
/*!*********************************************!*\
  !*** ./components/Home/ProductosSamsung.js ***!
  \*********************************************/
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
var _jsxFileName = "C:\\Users\\DavidOchoaBermudez\\Desktop\\nextouch-web\\components\\Home\\ProductosSamsung.js",
    _this = undefined,
    _s = $RefreshSig$();








var ProductosSamsung = function ProductosSamsung() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      dataApple = _useState[0],
      setDataApple = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setDataApple(_config_celulares_json__WEBPACK_IMPORTED_MODULE_3__["celulares"].filter(function (celu) {
      return celu.marca === "iphone";
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
          children: ["Samsung (", dataSamsung.length, ")"]
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
        children: dataSamsung.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
          effect: "fade",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataSamsung,
            items: [18, 17, 16, 15, 14]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataSamsung,
            items: [13, 12, 11, 10, 9]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataSamsung,
            items: [8, 7, 6, 5, 4]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataSamsung,
            items: [3, 2, 1]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
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
        children: dataSamsung.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
          effect: "fade",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataSamsung,
            items: [17, 18]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataSamsung,
            items: [15, 16]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataSamsung,
            items: [13, 14]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataSamsung,
            items: [11, 12]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataSamsung,
            items: [9, 10]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataSamsung,
            items: [7, 8]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataSamsung,
            items: [5, 6]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataSamsung,
            items: [3, 4]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_BarraProductos__WEBPACK_IMPORTED_MODULE_2__["default"], {
            data: dataSamsung,
            items: [1, 2]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(ProductosSamsung, "/ANaGMNzKqpPGcHe57/LgMRch3g=");

_c = ProductosSamsung;
/* harmony default export */ __webpack_exports__["default"] = (ProductosSamsung);

var _c;

$RefreshReg$(_c, "ProductosSamsung");

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
/* harmony import */ var _components_Home_ProductosSamsung__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Home/ProductosSamsung */ "./components/Home/ProductosSamsung.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\Users\\DavidOchoaBermudez\\Desktop\\nextouch-web\\pages\\index.js",
    _s = $RefreshSig$();















var stylesCss = new String(".ant-carousel .slick-dots li button{background:#23a34e;}.ant-carousel .slick-dots li.slick-active button{background:#23a34e;opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGF2aWRPY2hvYUJlcm11ZGV6XFxEZXNrdG9wXFxuZXh0b3VjaC13ZWJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhNEIsQUFHd0IsQUFHQSxtQkFGckIsQUFHWSxVQUNaIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRGF2aWRPY2hvYUJlcm11ZGV6XFxEZXNrdG9wXFxuZXh0b3VjaC13ZWJcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdywgQ29sLCBDYXJvdXNlbCwgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xuaW1wb3J0IGpzb25YaWFvbWkgZnJvbSBcIi4uL2NvbmZpZy94aWFvbWkuanNvblwiO1xuaW1wb3J0IGpzb25TYW1zdW5nIGZyb20gXCIuLi9jb25maWcvc2Ftc3VuZy5qc29uXCI7XG5pbXBvcnQganNvbkFsY2F0ZWwgZnJvbSBcIi4uL2NvbmZpZy9hbGNhdGVsLmpzb25cIjtcbmltcG9ydCBNZW51QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlci9NZW51QmFyXCI7XG5pbXBvcnQgQmFycmFQcm9kdWN0b3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL0JhcnJhUHJvZHVjdG9zXCI7XG5pbXBvcnQgUHJvZHVjdG9zSXBob25lIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvUHJvZHVjdG9zSXBob25lXCI7XG5pbXBvcnQgUHJvZHVjdG9zU2Ftc3VuZyBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL1Byb2R1Y3Rvc1NhbXN1bmdcIjtcblxuY29uc3Qgc3R5bGVzQ3NzID0gY3NzLmdsb2JhbGBcbiAgLmFudC1jYXJvdXNlbCAuc2xpY2stZG90cyBsaSBidXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICMyM2EzNGU7XG4gIH1cbiAgLmFudC1jYXJvdXNlbCAuc2xpY2stZG90cyBsaS5zbGljay1hY3RpdmUgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjNhMzRlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbmA7XG5cbmNvbnN0IGNvbnRlbnRTdHlsZSA9IHtcbiAgaGVpZ2h0OiBcIjE2MHB4XCIsXG4gIGNvbG9yOiBcIiNmZmZcIixcbiAgbGluZUhlaWdodDogXCIxNjBweFwiLFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gIGJhY2tncm91bmQ6IFwiIzM2NGQ3OVwiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2RhdGFYaWFvbWksIHNldERhdGFYaWFvbWldID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZGF0YVNhbXN1bmcsIHNldERhdGFTYW1zdW5nXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2RhdGFBbGNhdGVsLCBzZXREYXRhQWxjYXRlbF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXREYXRhWGlhb21pKGpzb25YaWFvbWkpO1xuICAgIHNldERhdGFTYW1zdW5nKGpzb25TYW1zdW5nKTtcbiAgICBzZXREYXRhQWxjYXRlbChqc29uQWxjYXRlbCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge3N0eWxlc0Nzc31cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cbiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuXG4gICAgICAgIHsvKiA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMC1iZXRhMi9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUJtYnh1UHdRYTJsYy9GVnpCY05KN1VBeUp4TTZ3dXFJajYxdExyYzR3U1gwc3pIL0V2K25ZUlJ1V2xvbGZsZmxcIlxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz4gXG4gICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4wLjAtYmV0YTIvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LWI1a0h5WGdjcGJaSk8vdFk5VWw3a0drZjFTMENXdUtjQ0QzOGw4WWtlSDh6OFFqRTBHbVcxZ1lVNVM5Rk9uSjBcIlxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgPjwvc2NyaXB0PlxuICAgICAgICAqL31cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TaGlwcG9yaStNaW5jaG86d2dodEA0MDA7NjAwOzgwMCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDx0aXRsZT5QaG9uZXMsIFRhYmxldHMsIEFjY2Vzb3JpZXMgfCBuZXh0b3VjaG9ubGluZS5jb20vPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxcmVtXCIgfX0+XG4gICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgPENvbCB4cz17MjR9IGxnPXsyMH0+XG4gICAgICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezR9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvbG9nby5qcGdcIiBhbHQ9XCJcIiB3aWR0aD17NjB9IGhlaWdodD17NjB9IC8+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCBzcGFuPXsyMH0+XG4gICAgICAgICAgICAgICAgPE1lbnVCYXIgLz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPFJvdyB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIiBndXR0ZXI9e1s0MCwgNDBdfT5cbiAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0+XG4gICAgICAgICAgICAgICAgPENhcm91c2VsIGVmZmVjdD1cImZhZGVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1ncy9iYW5uZXJzL2Jhbm5lci5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxOTIwfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIHsvKiBCYXJyYSBJcGhvbmUgKi99XG4gICAgICAgICAgICA8UHJvZHVjdG9zSXBob25lIC8+XG4gICAgICAgICAgICA8UHJvZHVjdG9zU2Ftc3VuZyAvPlxuXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICAgIFhpYW9taSAoe2RhdGFYaWFvbWkubGVuZ3RofSlcbiAgICAgICAgICAgICAgICA8L0RpdmlkZXI+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHhzPXswfSBsZz17MjR9PlxuICAgICAgICAgICAgICAgIHtkYXRhWGlhb21pLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPENhcm91c2VsIGVmZmVjdD1cImZhZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFYaWFvbWl9IGl0ZW1zPXtbMSwgMiwgMywgNCwgNV19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhWGlhb21pfSBpdGVtcz17WzEsIDYsIDcsIDgsIDldfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3NcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhWGlhb21pfVxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbMTAsIDExLCAxMiwgMTMsIDE0XX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YVhpYW9taX1cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17WzE1LCAxNiwgMTcsIDE4XX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBsZz17MH0+XG4gICAgICAgICAgICAgICAge2RhdGFYaWFvbWkubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgZWZmZWN0PVwiZmFkZVwiPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVhpYW9taX0gaXRlbXM9e1sxLCAyXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFYaWFvbWl9IGl0ZW1zPXtbMywgNF19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhWGlhb21pfSBpdGVtcz17WzUsIDZdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVhpYW9taX0gaXRlbXM9e1s3LCA4XX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFYaWFvbWl9IGl0ZW1zPXtbOSwgMTBdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVhpYW9taX0gaXRlbXM9e1sxMSwgMTJdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVhpYW9taX0gaXRlbXM9e1sxMywgMTRdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVhpYW9taX0gaXRlbXM9e1sxNSwgMTZdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVhpYW9taX0gaXRlbXM9e1sxNywgMThdfSAvPlxuICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICBBbGNhdGVsICh7ZGF0YUFsY2F0ZWwubGVuZ3RofSlcbiAgICAgICAgICAgICAgICA8L0RpdmlkZXI+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHhzPXswfSBsZz17MjR9PlxuICAgICAgICAgICAgICAgIHtkYXRhQWxjYXRlbC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBlZmZlY3Q9XCJmYWRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQWxjYXRlbH0gaXRlbXM9e1sxLCAyXX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBsZz17MH0+XG4gICAgICAgICAgICAgICAge2RhdGFBbGNhdGVsLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPENhcm91c2VsIGVmZmVjdD1cImZhZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBbGNhdGVsfSBpdGVtcz17WzEsIDJdfSAvPlxuICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8YnIgLz5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8Zm9vdGVyIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgPHA+MjkzMCBOVyA3MiBBVkUgTUlBTUkgRkwgMzMxMjI8L3A+XG4gICAgICAgIDxwPldIQVRBUFAgKzE3ODYzMDExMzg1LiBSQUlNVU5ETyBTT0w8L3A+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\DavidOchoaBermudez\\\\Desktop\\\\nextouch-web\\\\pages\\\\index.js */");
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: stylesCss.__hash,
      children: stylesCss
    }, void 0, false, void 0, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("meta", {
        charSet: "UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("meta", {
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;800&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("title", {
        children: "Phones, Tablets, Accesories | nextouchonline.com/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
      style: {
        padding: "1rem"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        type: "flex",
        justify: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: 24,
          lg: 20,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
            type: "flex",
            justify: "center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              span: 4,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                href: "/",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
                  src: "/assets/logo.jpg",
                  alt: "",
                  width: 60,
                  height: 60
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              span: 20,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_Header_MenuBar__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
            type: "flex",
            justify: "center",
            gutter: [40, 40],
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              span: 24,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
                effect: "fade",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
                    style: {
                      textAlign: "center"
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
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
                      lineNumber: 92,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_Home_ProductosIphone__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_Home_ProductosSamsung__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
            type: "flex",
            justify: "center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              span: 24,
              style: {
                textAlign: "center"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
                orientation: "left",
                children: ["Xiaomi (", dataXiaomi.length, ")"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              xs: 0,
              lg: 24,
              children: dataXiaomi.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
                effect: "fade",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataXiaomi,
                  items: [1, 2, 3, 4, 5]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataXiaomi,
                  items: [1, 6, 7, 8, 9]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataXiaomi,
                  items: [10, 11, 12, 13, 14]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataXiaomi,
                  items: [15, 16, 17, 18]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              xs: 24,
              lg: 0,
              children: dataXiaomi.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
                effect: "fade",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataXiaomi,
                  items: [1, 2]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataXiaomi,
                  items: [3, 4]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataXiaomi,
                  items: [5, 6]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataXiaomi,
                  items: [7, 8]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataXiaomi,
                  items: [9, 10]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataXiaomi,
                  items: [11, 12]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataXiaomi,
                  items: [13, 14]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataXiaomi,
                  items: [15, 16]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataXiaomi,
                  items: [17, 18]
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
            lineNumber: 112,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
            type: "flex",
            justify: "center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              span: 24,
              style: {
                textAlign: "center"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
                orientation: "left",
                children: ["Alcatel (", dataAlcatel.length, ")"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              xs: 0,
              lg: 24,
              children: dataAlcatel.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
                effect: "fade",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataAlcatel,
                  items: [1, 2]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              xs: 24,
              lg: 0,
              children: dataAlcatel.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
                effect: "fade",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  data: dataAlcatel,
                  items: [1, 2]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("footer", {
      style: {
        textAlign: "center"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("p", {
        children: "2930 NW 72 AVE MIAMI FL 33122"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("p", {
        children: "WHATAPP +17863011385. RAIMUNDO SOL"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 184,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL1Byb2R1Y3Rvc1NhbXN1bmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rvc1NhbXN1bmciLCJ1c2VTdGF0ZSIsImRhdGFBcHBsZSIsInNldERhdGFBcHBsZSIsInVzZUVmZmVjdCIsImNlbHVsYXJlcyIsImZpbHRlciIsImNlbHUiLCJtYXJjYSIsInRleHRBbGlnbiIsImRhdGFTYW1zdW5nIiwibGVuZ3RoIiwic3R5bGVzQ3NzIiwiY29udGVudFN0eWxlIiwiaGVpZ2h0IiwiY29sb3IiLCJsaW5lSGVpZ2h0IiwiYmFja2dyb3VuZCIsIkhvbWUiLCJkYXRhWGlhb21pIiwic2V0RGF0YVhpYW9taSIsInNldERhdGFTYW1zdW5nIiwiZGF0YUFsY2F0ZWwiLCJzZXREYXRhQWxjYXRlbCIsImpzb25YaWFvbWkiLCJqc29uU2Ftc3VuZyIsImpzb25BbGNhdGVsIiwicGFkZGluZyIsIm1heFdpZHRoIiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLEVBQUQsQ0FEYjtBQUFBLE1BQ3RCQyxTQURzQjtBQUFBLE1BQ1hDLFlBRFc7O0FBRzdCQyx5REFBUyxDQUFDLFlBQU07QUFDZEQsZ0JBQVksQ0FBQ0UsZ0VBQVMsQ0FBQ0MsTUFBVixDQUFpQixVQUFDQyxJQUFEO0FBQUEsYUFBVUEsSUFBSSxDQUFDQyxLQUFMLEtBQWUsUUFBekI7QUFBQSxLQUFqQixDQUFELENBQVo7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyx3Q0FBRDtBQUFLLFVBQUksRUFB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QUE7QUFBQSxZQXBJRixlQXFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcklGLGVBc0lFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0SUYsZUF1SUU7QUFBUSxXQUFLLEVBQUU7QUFBRWIsaUJBQVMsRUFBRTtBQUFiLE9BQWY7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2SUYsZUEySUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNJRixlQTRJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNUlGO0FBQUEsa0JBREY7QUFnSkQ7O0dBM0p1QlMsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45YmU2MDIxNWYzZWRkNjRmYmEzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgRGl2aWRlciwgQ2Fyb3VzZWwgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgQmFycmFQcm9kdWN0b3MgZnJvbSBcIi4uL2NvbW1vbi9CYXJyYVByb2R1Y3Rvc1wiO1xyXG5pbXBvcnQgeyBjZWx1bGFyZXMgfSBmcm9tIFwiLi4vLi4vY29uZmlnL2NlbHVsYXJlcy5qc29uXCI7XHJcblxyXG5jb25zdCBQcm9kdWN0b3NTYW1zdW5nID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtkYXRhQXBwbGUsIHNldERhdGFBcHBsZV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXREYXRhQXBwbGUoY2VsdWxhcmVzLmZpbHRlcigoY2VsdSkgPT4gY2VsdS5tYXJjYSA9PT0gXCJpcGhvbmVcIikpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgIDxDb2wgc3Bhbj17MjR9IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwibGVmdFwiPlNhbXN1bmcgKHtkYXRhU2Ftc3VuZy5sZW5ndGh9KTwvRGl2aWRlcj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHhzPXswfSBsZz17MjR9PlxyXG4gICAgICAgICAge2RhdGFTYW1zdW5nLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWwgZWZmZWN0PVwiZmFkZVwiPlxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhU2Ftc3VuZ30gaXRlbXM9e1sxOCwgMTcsIDE2LCAxNSwgMTRdfSAvPlxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhU2Ftc3VuZ30gaXRlbXM9e1sxMywgMTIsIDExLCAxMCwgOV19IC8+XHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFTYW1zdW5nfSBpdGVtcz17WzgsIDcsIDYsIDUsIDRdfSAvPlxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhU2Ftc3VuZ30gaXRlbXM9e1szLCAyLCAxXX0gLz5cclxuICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCB4cz17MjR9IGxnPXswfT5cclxuICAgICAgICAgIHtkYXRhU2Ftc3VuZy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgPENhcm91c2VsIGVmZmVjdD1cImZhZGVcIj5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVNhbXN1bmd9IGl0ZW1zPXtbMTcsIDE4XX0gLz5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVNhbXN1bmd9IGl0ZW1zPXtbMTUsIDE2XX0gLz5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVNhbXN1bmd9IGl0ZW1zPXtbMTMsIDE0XX0gLz5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVNhbXN1bmd9IGl0ZW1zPXtbMTEsIDEyXX0gLz5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVNhbXN1bmd9IGl0ZW1zPXtbOSwgMTBdfSAvPlxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhU2Ftc3VuZ30gaXRlbXM9e1s3LCA4XX0gLz5cclxuICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVNhbXN1bmd9IGl0ZW1zPXtbNSwgNl19IC8+XHJcbiAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFTYW1zdW5nfSBpdGVtcz17WzMsIDRdfSAvPlxyXG4gICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhU2Ftc3VuZ30gaXRlbXM9e1sxLCAyXX0gLz5cclxuICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Rvc1NhbXN1bmc7XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdywgQ29sLCBDYXJvdXNlbCwgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xuaW1wb3J0IGpzb25YaWFvbWkgZnJvbSBcIi4uL2NvbmZpZy94aWFvbWkuanNvblwiO1xuaW1wb3J0IGpzb25TYW1zdW5nIGZyb20gXCIuLi9jb25maWcvc2Ftc3VuZy5qc29uXCI7XG5pbXBvcnQganNvbkFsY2F0ZWwgZnJvbSBcIi4uL2NvbmZpZy9hbGNhdGVsLmpzb25cIjtcbmltcG9ydCBNZW51QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlci9NZW51QmFyXCI7XG5pbXBvcnQgQmFycmFQcm9kdWN0b3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL0JhcnJhUHJvZHVjdG9zXCI7XG5pbXBvcnQgUHJvZHVjdG9zSXBob25lIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvUHJvZHVjdG9zSXBob25lXCI7XG5pbXBvcnQgUHJvZHVjdG9zU2Ftc3VuZyBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL1Byb2R1Y3Rvc1NhbXN1bmdcIjtcblxuY29uc3Qgc3R5bGVzQ3NzID0gY3NzLmdsb2JhbGBcbiAgLmFudC1jYXJvdXNlbCAuc2xpY2stZG90cyBsaSBidXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICMyM2EzNGU7XG4gIH1cbiAgLmFudC1jYXJvdXNlbCAuc2xpY2stZG90cyBsaS5zbGljay1hY3RpdmUgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjNhMzRlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbmA7XG5cbmNvbnN0IGNvbnRlbnRTdHlsZSA9IHtcbiAgaGVpZ2h0OiBcIjE2MHB4XCIsXG4gIGNvbG9yOiBcIiNmZmZcIixcbiAgbGluZUhlaWdodDogXCIxNjBweFwiLFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gIGJhY2tncm91bmQ6IFwiIzM2NGQ3OVwiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2RhdGFYaWFvbWksIHNldERhdGFYaWFvbWldID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZGF0YVNhbXN1bmcsIHNldERhdGFTYW1zdW5nXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2RhdGFBbGNhdGVsLCBzZXREYXRhQWxjYXRlbF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXREYXRhWGlhb21pKGpzb25YaWFvbWkpO1xuICAgIHNldERhdGFTYW1zdW5nKGpzb25TYW1zdW5nKTtcbiAgICBzZXREYXRhQWxjYXRlbChqc29uQWxjYXRlbCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge3N0eWxlc0Nzc31cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cbiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuXG4gICAgICAgIHsvKiA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMC1iZXRhMi9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUJtYnh1UHdRYTJsYy9GVnpCY05KN1VBeUp4TTZ3dXFJajYxdExyYzR3U1gwc3pIL0V2K25ZUlJ1V2xvbGZsZmxcIlxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz4gXG4gICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4wLjAtYmV0YTIvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LWI1a0h5WGdjcGJaSk8vdFk5VWw3a0drZjFTMENXdUtjQ0QzOGw4WWtlSDh6OFFqRTBHbVcxZ1lVNVM5Rk9uSjBcIlxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgPjwvc2NyaXB0PlxuICAgICAgICAqL31cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TaGlwcG9yaStNaW5jaG86d2dodEA0MDA7NjAwOzgwMCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDx0aXRsZT5QaG9uZXMsIFRhYmxldHMsIEFjY2Vzb3JpZXMgfCBuZXh0b3VjaG9ubGluZS5jb20vPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxcmVtXCIgfX0+XG4gICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgPENvbCB4cz17MjR9IGxnPXsyMH0+XG4gICAgICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezR9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvbG9nby5qcGdcIiBhbHQ9XCJcIiB3aWR0aD17NjB9IGhlaWdodD17NjB9IC8+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCBzcGFuPXsyMH0+XG4gICAgICAgICAgICAgICAgPE1lbnVCYXIgLz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPFJvdyB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIiBndXR0ZXI9e1s0MCwgNDBdfT5cbiAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0+XG4gICAgICAgICAgICAgICAgPENhcm91c2VsIGVmZmVjdD1cImZhZGVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1ncy9iYW5uZXJzL2Jhbm5lci5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxOTIwfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIHsvKiBCYXJyYSBJcGhvbmUgKi99XG4gICAgICAgICAgICA8UHJvZHVjdG9zSXBob25lIC8+XG4gICAgICAgICAgICA8UHJvZHVjdG9zU2Ftc3VuZyAvPlxuXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICAgIFhpYW9taSAoe2RhdGFYaWFvbWkubGVuZ3RofSlcbiAgICAgICAgICAgICAgICA8L0RpdmlkZXI+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHhzPXswfSBsZz17MjR9PlxuICAgICAgICAgICAgICAgIHtkYXRhWGlhb21pLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPENhcm91c2VsIGVmZmVjdD1cImZhZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFYaWFvbWl9IGl0ZW1zPXtbMSwgMiwgMywgNCwgNV19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhWGlhb21pfSBpdGVtcz17WzEsIDYsIDcsIDgsIDldfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3NcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhWGlhb21pfVxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbMTAsIDExLCAxMiwgMTMsIDE0XX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YVhpYW9taX1cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17WzE1LCAxNiwgMTcsIDE4XX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBsZz17MH0+XG4gICAgICAgICAgICAgICAge2RhdGFYaWFvbWkubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgZWZmZWN0PVwiZmFkZVwiPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVhpYW9taX0gaXRlbXM9e1sxLCAyXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFYaWFvbWl9IGl0ZW1zPXtbMywgNF19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhWGlhb21pfSBpdGVtcz17WzUsIDZdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVhpYW9taX0gaXRlbXM9e1s3LCA4XX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFYaWFvbWl9IGl0ZW1zPXtbOSwgMTBdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVhpYW9taX0gaXRlbXM9e1sxMSwgMTJdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVhpYW9taX0gaXRlbXM9e1sxMywgMTRdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVhpYW9taX0gaXRlbXM9e1sxNSwgMTZdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVhpYW9taX0gaXRlbXM9e1sxNywgMThdfSAvPlxuICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICBBbGNhdGVsICh7ZGF0YUFsY2F0ZWwubGVuZ3RofSlcbiAgICAgICAgICAgICAgICA8L0RpdmlkZXI+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHhzPXswfSBsZz17MjR9PlxuICAgICAgICAgICAgICAgIHtkYXRhQWxjYXRlbC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBlZmZlY3Q9XCJmYWRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQWxjYXRlbH0gaXRlbXM9e1sxLCAyXX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBsZz17MH0+XG4gICAgICAgICAgICAgICAge2RhdGFBbGNhdGVsLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPENhcm91c2VsIGVmZmVjdD1cImZhZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBbGNhdGVsfSBpdGVtcz17WzEsIDJdfSAvPlxuICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8YnIgLz5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8Zm9vdGVyIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgPHA+MjkzMCBOVyA3MiBBVkUgTUlBTUkgRkwgMzMxMjI8L3A+XG4gICAgICAgIDxwPldIQVRBUFAgKzE3ODYzMDExMzg1LiBSQUlNVU5ETyBTT0w8L3A+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9