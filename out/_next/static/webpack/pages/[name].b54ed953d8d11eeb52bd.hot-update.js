webpackHotUpdate_N_E("pages/[name]",{

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
  console.log("items", items);
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
            lineNumber: 49,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vQmFycmFQcm9kdWN0b3MvaW5kZXguanMiXSwibmFtZXMiOlsiQmFycmFQcm9kdWN0b3NJdGVtIiwicHJvcHMiLCJkYXRhIiwiaXRlbSIsImlzSG9tZSIsIml0ZW1fIiwibW9kZWxvIiwicmVwbGFjZUFsbCIsInRleHRBbGlnbiIsIndpZHRoIiwiaW1hZ2VuZXMiLCJkaXNwbGF5IiwibWF4V2lkdGgiLCJtYXJjYSIsInByZWNpbyIsIkJhcnJhUHJvZHVjdG9zIiwiaXRlbXMiLCJjb25zb2xlIiwibG9nIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJtYXAiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVPLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDbkNDLElBRG1DLEdBQ1pELEtBRFksQ0FDbkNDLElBRG1DO0FBQUEsTUFDN0JDLElBRDZCLEdBQ1pGLEtBRFksQ0FDN0JFLElBRDZCO0FBQUEsTUFDdkJDLE1BRHVCLEdBQ1pILEtBRFksQ0FDdkJHLE1BRHVCO0FBRTNDLE1BQU1DLEtBQUssR0FBR0YsSUFBSSxHQUFHLENBQXJCO0FBRUEsc0JBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVELElBQUksQ0FBQ0csS0FBRCxDQUFKLENBQVlDLE1BQVosQ0FBbUJDLFVBQW5CLENBQThCLEdBQTlCLEVBQW1DLEdBQW5DLENBQVo7QUFBQSwyQkFDRTtBQUNFLFdBQUssRUFBRTtBQUFFQyxpQkFBUyxFQUFFLFFBQWI7QUFBdUJDLGFBQUssRUFBRUwsTUFBTSxHQUFHLE9BQUgsR0FBYTtBQUFqRCxPQURUO0FBRUUsZUFBUyxFQUFDLDhCQUZaO0FBQUEsOEJBSUU7QUFDRSxXQUFHLEVBQUVGLElBQUksQ0FBQ0csS0FBRCxDQUFKLENBQVlLLFFBQVosQ0FBcUIsQ0FBckIsQ0FEUDtBQUVFLFdBQUcsRUFBQyxFQUZOO0FBR0UsYUFBSyxFQUFFTixNQUFNLEdBQUcsR0FBSCxHQUFTLEdBSHhCO0FBSUUsY0FBTSxFQUFFQSxNQUFNLEdBQUcsR0FBSCxHQUFTLEVBSnpCO0FBS0UsYUFBSyxFQUFFO0FBQUVPLGlCQUFPLEVBQUUsUUFBWDtBQUFxQkMsa0JBQVEsRUFBRTtBQUEvQjtBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQVdFO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBUVYsSUFBSSxDQUFDRyxLQUFELENBQUosQ0FBWVE7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFBLG9CQUFTWCxJQUFJLENBQUNHLEtBQUQsQ0FBSixDQUFZQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixFQU1HSixJQUFJLENBQUNHLEtBQUQsQ0FBSixDQUFZUyxNQUFaLEtBQXVCLEVBQXZCLGlCQUE2QjtBQUFBLDBCQUFJWixJQUFJLENBQUNHLEtBQUQsQ0FBSixDQUFZUyxNQUFoQjtBQUFBLHdCQU5oQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3QkQsQ0E1Qk07S0FBTWQsa0I7O0FBOEJiLElBQU1lLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ2QsS0FBRCxFQUFXO0FBQUEsTUFDeEJDLElBRHdCLEdBQ1JELEtBRFEsQ0FDeEJDLElBRHdCO0FBQUEsTUFDbEJjLEtBRGtCLEdBQ1JmLEtBRFEsQ0FDbEJlLEtBRGtCO0FBRWhDQyxTQUFPLENBQUNDLEdBQVIsVUFBcUJGLEtBQXJCO0FBRUEsc0JBQ0U7QUFBQSwyQkFDRTtBQUFBLDZCQUNFO0FBQ0UsYUFBSyxFQUFFO0FBQ0xMLGlCQUFPLEVBQUUsTUFESjtBQUVMUSx3QkFBYyxFQUFFLGNBRlg7QUFHTEMsZ0JBQU0sRUFBRTtBQUhILFNBRFQ7QUFBQSxrQkFPR0osS0FBSyxDQUFDSyxHQUFOLENBQVUsVUFBQ2xCLElBQUQsRUFBT21CLEdBQVA7QUFBQSw4QkFDVCxxRUFBQyxrQkFBRDtBQUFvQixrQkFBTSxNQUExQjtBQUEyQixnQkFBSSxFQUFFcEIsSUFBakM7QUFBdUMsZ0JBQUksRUFBRUM7QUFBN0MsYUFBd0RtQixHQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURTO0FBQUEsU0FBVjtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFpQkQsQ0FyQkQ7O01BQU1QLGM7QUF1QlNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tuYW1lXS5iNTRlZDk1M2Q4ZDExZWViNTJiZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQmFycmFQcm9kdWN0b3NJdGVtID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBpdGVtLCBpc0hvbWUgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGl0ZW1fID0gaXRlbSAtIDE7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtkYXRhW2l0ZW1fXS5tb2RlbG8ucmVwbGFjZUFsbChcIiBcIiwgXCItXCIpfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgd2lkdGg6IGlzSG9tZSA/IFwiMTYwcHhcIiA6IFwiXCIgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3Zlci1wcm9kdWN0XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17ZGF0YVtpdGVtX10uaW1hZ2VuZXNbMF19XHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgd2lkdGg9e2lzSG9tZSA/IDEyMCA6IDIyMH1cclxuICAgICAgICAgIGhlaWdodD17aXNIb21lID8gMTIwIDogXCJcIn1cclxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lXCIsIG1heFdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8c21hbGw+e2RhdGFbaXRlbV9dLm1hcmNhfTwvc21hbGw+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxzdHJvbmc+e2RhdGFbaXRlbV9dLm1vZGVsb308L3N0cm9uZz5cclxuICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgIHtkYXRhW2l0ZW1fXS5wcmVjaW8gIT09IFwiXCIgJiYgPD4ke2RhdGFbaXRlbV9dLnByZWNpb308Lz59XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQmFycmFQcm9kdWN0b3MgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGRhdGEsIGl0ZW1zIH0gPSBwcm9wcztcclxuICBjb25zb2xlLmxvZyhgaXRlbXNgLCBpdGVtcyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1hcm91bmRcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGtleSkgPT4gKFxyXG4gICAgICAgICAgICA8QmFycmFQcm9kdWN0b3NJdGVtIGlzSG9tZSBkYXRhPXtkYXRhfSBpdGVtPXtpdGVtfSBrZXk9e2tleX0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXJyYVByb2R1Y3RvcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==