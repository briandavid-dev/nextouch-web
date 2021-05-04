webpackHotUpdate_N_E("pages/index",{

/***/ "./components/common/BarraProductos/index.js":
/*!***************************************************!*\
  !*** ./components/common/BarraProductos/index.js ***!
  \***************************************************/
/*! exports provided: BarraProductosItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarraProductosItem", function() { return BarraProductosItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\DavidOchoaBermudez\\Desktop\\nextouch-web\\components\\common\\BarraProductos\\index.js",
    _this = undefined;





var BarraProductosItem = function BarraProductosItem(props) {
  var data = props.data,
      item = props.item,
      isHome = props.isHome;
  var item_ = item - 1;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: data[item_].modelo.replaceAll(" ", "-"),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      style: {
        textAlign: "center",
        width: isHome ? "160px" : ""
      },
      className: "cursor-pointer hover-product",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        src: data[item_].imagenes[0],
        alt: "",
        width: isHome ? 120 : 220,
        height: isHome ? 120 : "",
        style: {
          display: "inline",
          maxWidth: "100%"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("small", {
          children: data[item_].marca
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("strong", {
          children: data[item_].modelo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
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
        children: items.map(function (item, key) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(BarraProductosItem, {
            isHome: true,
            data: data,
            item: item
          }, key, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vQmFycmFQcm9kdWN0b3MvaW5kZXguanMiXSwibmFtZXMiOlsiQmFycmFQcm9kdWN0b3NJdGVtIiwicHJvcHMiLCJkYXRhIiwiaXRlbSIsImlzSG9tZSIsIml0ZW1fIiwibW9kZWxvIiwicmVwbGFjZUFsbCIsInRleHRBbGlnbiIsIndpZHRoIiwiaW1hZ2VuZXMiLCJkaXNwbGF5IiwibWF4V2lkdGgiLCJtYXJjYSIsInByZWNpbyIsIkJhcnJhUHJvZHVjdG9zIiwiaXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsIm1hcCIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRU8sSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNuQ0MsSUFEbUMsR0FDWkQsS0FEWSxDQUNuQ0MsSUFEbUM7QUFBQSxNQUM3QkMsSUFENkIsR0FDWkYsS0FEWSxDQUM3QkUsSUFENkI7QUFBQSxNQUN2QkMsTUFEdUIsR0FDWkgsS0FEWSxDQUN2QkcsTUFEdUI7QUFFM0MsTUFBTUMsS0FBSyxHQUFHRixJQUFJLEdBQUcsQ0FBckI7QUFFQSxzQkFDRSxxRUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRUQsSUFBSSxDQUFDRyxLQUFELENBQUosQ0FBWUMsTUFBWixDQUFtQkMsVUFBbkIsQ0FBOEIsR0FBOUIsRUFBbUMsR0FBbkMsQ0FBWjtBQUFBLDJCQUNFO0FBQ0UsV0FBSyxFQUFFO0FBQUVDLGlCQUFTLEVBQUUsUUFBYjtBQUF1QkMsYUFBSyxFQUFFTCxNQUFNLEdBQUcsT0FBSCxHQUFhO0FBQWpELE9BRFQ7QUFFRSxlQUFTLEVBQUMsOEJBRlo7QUFBQSw4QkFJRTtBQUNFLFdBQUcsRUFBRUYsSUFBSSxDQUFDRyxLQUFELENBQUosQ0FBWUssUUFBWixDQUFxQixDQUFyQixDQURQO0FBRUUsV0FBRyxFQUFDLEVBRk47QUFHRSxhQUFLLEVBQUVOLE1BQU0sR0FBRyxHQUFILEdBQVMsR0FIeEI7QUFJRSxjQUFNLEVBQUVBLE1BQU0sR0FBRyxHQUFILEdBQVMsRUFKekI7QUFLRSxhQUFLLEVBQUU7QUFBRU8saUJBQU8sRUFBRSxRQUFYO0FBQXFCQyxrQkFBUSxFQUFFO0FBQS9CO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBV0U7QUFBQSxnQ0FDRTtBQUFBLG9CQUFRVixJQUFJLENBQUNHLEtBQUQsQ0FBSixDQUFZUTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUEsb0JBQVNYLElBQUksQ0FBQ0csS0FBRCxDQUFKLENBQVlDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLEVBTUdKLElBQUksQ0FBQ0csS0FBRCxDQUFKLENBQVlTLE1BQVosS0FBdUIsRUFBdkIsaUJBQTZCO0FBQUEsMEJBQUlaLElBQUksQ0FBQ0csS0FBRCxDQUFKLENBQVlTLE1BQWhCO0FBQUEsd0JBTmhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdCRCxDQTVCTTtLQUFNZCxrQjs7QUE4QmIsSUFBTWUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDZCxLQUFELEVBQVc7QUFBQSxNQUN4QkMsSUFEd0IsR0FDUkQsS0FEUSxDQUN4QkMsSUFEd0I7QUFBQSxNQUNsQmMsS0FEa0IsR0FDUmYsS0FEUSxDQUNsQmUsS0FEa0I7QUFHaEMsc0JBQ0U7QUFBQSwyQkFDRTtBQUFBLDZCQUNFO0FBQ0UsYUFBSyxFQUFFO0FBQ0xMLGlCQUFPLEVBQUUsTUFESjtBQUVMTSx3QkFBYyxFQUFFLGNBRlg7QUFHTEMsZ0JBQU0sRUFBRTtBQUhILFNBRFQ7QUFBQSxrQkFPR0YsS0FBSyxDQUFDRyxHQUFOLENBQVUsVUFBQ2hCLElBQUQsRUFBT2lCLEdBQVA7QUFBQSw4QkFDVCxxRUFBQyxrQkFBRDtBQUFvQixrQkFBTSxNQUExQjtBQUEyQixnQkFBSSxFQUFFbEIsSUFBakM7QUFBdUMsZ0JBQUksRUFBRUM7QUFBN0MsYUFBd0RpQixHQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURTO0FBQUEsU0FBVjtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFpQkQsQ0FwQkQ7O01BQU1MLGM7QUFzQlNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUxZWVlMTc0NDc5OTg2OWZmYzM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBCYXJyYVByb2R1Y3Rvc0l0ZW0gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGRhdGEsIGl0ZW0sIGlzSG9tZSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgaXRlbV8gPSBpdGVtIC0gMTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e2RhdGFbaXRlbV9dLm1vZGVsby5yZXBsYWNlQWxsKFwiIFwiLCBcIi1cIil9PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCB3aWR0aDogaXNIb21lID8gXCIxNjBweFwiIDogXCJcIiB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGhvdmVyLXByb2R1Y3RcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXtkYXRhW2l0ZW1fXS5pbWFnZW5lc1swXX1cclxuICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICB3aWR0aD17aXNIb21lID8gMTIwIDogMjIwfVxyXG4gICAgICAgICAgaGVpZ2h0PXtpc0hvbWUgPyAxMjAgOiBcIlwifVxyXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmVcIiwgbWF4V2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxzbWFsbD57ZGF0YVtpdGVtX10ubWFyY2F9PC9zbWFsbD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPHN0cm9uZz57ZGF0YVtpdGVtX10ubW9kZWxvfTwvc3Ryb25nPlxyXG4gICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAge2RhdGFbaXRlbV9dLnByZWNpbyAhPT0gXCJcIiAmJiA8PiR7ZGF0YVtpdGVtX10ucHJlY2lvfTwvPn1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBCYXJyYVByb2R1Y3RvcyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSwgaXRlbXMgfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBrZXkpID0+IChcclxuICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zSXRlbSBpc0hvbWUgZGF0YT17ZGF0YX0gaXRlbT17aXRlbX0ga2V5PXtrZXl9IC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFycmFQcm9kdWN0b3M7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=