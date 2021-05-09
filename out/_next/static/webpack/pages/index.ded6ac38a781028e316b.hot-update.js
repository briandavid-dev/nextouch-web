webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _components_Home_ProductosSamsung__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Home/ProductosSamsung */ "./components/Home/ProductosSamsung.js");
/* harmony import */ var _components_Home_ProductosXiaomi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Home/ProductosXiaomi */ "./components/Home/ProductosXiaomi.js");
/* harmony import */ var _components_Home_ProductosAlcatel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Home/ProductosAlcatel */ "./components/Home/ProductosAlcatel.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\DavidOchoaBermudez\\Desktop\\nextouch-web\\pages\\index.js";












var stylesCss = new String("\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGF2aWRPY2hvYUJlcm11ZGV6XFxEZXNrdG9wXFxuZXh0b3VjaC13ZWJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXNEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxEYXZpZE9jaG9hQmVybXVkZXpcXERlc2t0b3BcXG5leHRvdWNoLXdlYlxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm93LCBDb2wsIENhcm91c2VsLCBEaXZpZGVyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XG5pbXBvcnQgTWVudUJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXIvTWVudUJhclwiO1xuaW1wb3J0IFByb2R1Y3Rvc0lwaG9uZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL1Byb2R1Y3Rvc0lwaG9uZVwiO1xuaW1wb3J0IFByb2R1Y3Rvc1NhbXN1bmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9Qcm9kdWN0b3NTYW1zdW5nXCI7XG5pbXBvcnQgUHJvZHVjdG9zWGlhb21pIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvUHJvZHVjdG9zWGlhb21pXCI7XG5pbXBvcnQgUHJvZHVjdG9zQWxjYXRlbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL1Byb2R1Y3Rvc0FsY2F0ZWxcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5cbmNvbnN0IHN0eWxlc0NzcyA9IGNzcy5nbG9iYWxgYDtcblxuLyogXG5jb25zdCBjb250ZW50U3R5bGUgPSB7XG4gIGhlaWdodDogXCIxNjBweFwiLFxuICBjb2xvcjogXCIjZmZmXCIsXG4gIGxpbmVIZWlnaHQ6IFwiMTYwcHhcIixcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICBiYWNrZ3JvdW5kOiBcIiMzNjRkNzlcIixcbn07ICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7c3R5bGVzQ3NzfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxuICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U2hpcHBvcmkrTWluY2hvOndnaHRANDAwOzYwMDs4MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cblxuICAgICAgICA8dGl0bGU+UGhvbmVzLCBUYWJsZXRzLCBBY2Nlc29yaWVzIHwgbmV4dG91Y2hvbmxpbmUuY29tPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxcmVtXCIgfX0+XG4gICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgPENvbCB4cz17MjR9IGxnPXsyMH0+XG4gICAgICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezR9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvbG9nby5qcGdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJuZXh0b3VjaG9ubGluZS5jb21cIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NjB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodD17NjB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjB9PlxuICAgICAgICAgICAgICAgIDxNZW51QmFyIC8+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCIgZ3V0dGVyPXtbNDAsIDQwXX0+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBlZmZlY3Q9XCJmYWRlXCIgYXV0b3BsYXk9e3RydWV9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltZ3MvYmFubmVycy9iYW5uZXIxLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTkyMH1cbiAgICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1ncy9iYW5uZXJzL2Jhbm5lcjIuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxOTIwfVxuICAgICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCIgZ3V0dGVyPXtbMCwgMF19PlxuICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbGc9ezE2fT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0RBRUFEMFwiLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjFyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aDE+VmVuZGVtb3MgYWwgbWF5b3IgeSBhbCBkZXRhbC48L2gxPlxuICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgVGVsw6lmb25vOiA8YSBocmVmPVwidGVsOisxNzg2MzAxMTM4NVwiPisxNzg2MzAxMTM4NTwvYT4uXG4gICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgPGgyPkRpcmVjY2nDs246IDI5MzAgTlcgNzIgQVZFIE1JQU1JIEZMIDMzMTIyLjwvaDI+XG4gICAgICAgICAgICAgICAgICA8aDM+PC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBsZz17OH0+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgYWx0PVwic3RvcmVcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltZ3MvaG9tZS9tYXBhbmV4dG91Y2gyLnBuZ1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgICAgPFByb2R1Y3Rvc0lwaG9uZSAvPlxuICAgICAgICAgICAgPFByb2R1Y3Rvc1NhbXN1bmcgLz5cbiAgICAgICAgICAgIDxQcm9kdWN0b3NYaWFvbWkgLz5cbiAgICAgICAgICAgIDxQcm9kdWN0b3NBbGNhdGVsIC8+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\DavidOchoaBermudez\\\\Desktop\\\\nextouch-web\\\\pages\\\\index.js */");
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: stylesCss.__hash,
      children: stylesCss
    }, void 0, false, void 0, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("meta", {
        charSet: "UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("meta", {
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;800&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("title", {
        children: "Phones, Tablets, Accesories | nextouchonline.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      style: {
        padding: "1rem"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        type: "flex",
        justify: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          xs: 24,
          lg: 20,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
            type: "flex",
            justify: "center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
              span: 4,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                href: "/",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
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
                  lineNumber: 47,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
              span: 20,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_Header_MenuBar__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
            type: "flex",
            justify: "center",
            gutter: [40, 40],
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
              span: 24,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
                effect: "fade",
                autoplay: true,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                  style: {
                    textAlign: "center"
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
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
                    lineNumber: 66,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                  style: {
                    textAlign: "center"
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
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
                    lineNumber: 78,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
            type: "flex",
            justify: "center",
            gutter: [0, 0],
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
              xs: 24,
              lg: 16,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                style: {
                  backgroundColor: "#DAEAD0",
                  padding: "1rem",
                  borderRadius: "3px",
                  height: "100%"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h1", {
                  children: "Vendemos al mayor y al detal."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h2", {
                  children: ["Tel\xE9fono: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
                    href: "tel:+17863011385",
                    children: "+17863011385"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 31
                  }, this), "."]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h2", {
                  children: "Direcci\xF3n: 2930 NW 72 AVE MIAMI FL 33122."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h3", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
              xs: 24,
              lg: 8,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
                alt: "store",
                style: {
                  maxWidth: "100%"
                },
                src: "/assets/imgs/home/mapanextouch2.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_Home_ProductosIphone__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_Home_ProductosSamsung__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_Home_ProductosXiaomi__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_Home_ProductosAlcatel__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsic3R5bGVzQ3NzIiwiSG9tZSIsInBhZGRpbmciLCJtYXhXaWR0aCIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxTQUFTLHMxTUFBZjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVlLFNBQVNDLElBQVQsR0FBZ0I7QUFDN0Isc0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxrREFJRSxzRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQU0sZUFBTyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxzQkFBVyxpQkFBakI7QUFBbUMsZUFBTyxFQUFDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFO0FBQU0sV0FBRyxFQUFDLFlBQVY7QUFBdUIsWUFBSSxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFO0FBQ0UsWUFBSSxFQUFDLHdGQURQO0FBRUUsV0FBRyxFQUFDO0FBRk47QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQWdCRTtBQUFLLFdBQUssRUFBRTtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUFaO0FBQUEsNkJBQ0Usc0VBQUMsd0NBQUQ7QUFBSyxZQUFJLEVBQUMsTUFBVjtB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aW5kZXguZGVkNmFjMzhhNzgxMDI4ZTMxNmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdywgQ29sLCBDYXJvdXNlbCwgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xuaW1wb3J0IE1lbnVCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL01lbnVCYXJcIjtcbmltcG9ydCBQcm9kdWN0b3NJcGhvbmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9Qcm9kdWN0b3NJcGhvbmVcIjtcbmltcG9ydCBQcm9kdWN0b3NTYW1zdW5nIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvUHJvZHVjdG9zU2Ftc3VuZ1wiO1xuaW1wb3J0IFByb2R1Y3Rvc1hpYW9taSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL1Byb2R1Y3Rvc1hpYW9taVwiO1xuaW1wb3J0IFByb2R1Y3Rvc0FsY2F0ZWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9Qcm9kdWN0b3NBbGNhdGVsXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuXG5jb25zdCBzdHlsZXNDc3MgPSBjc3MuZ2xvYmFsYGA7XG5cbi8qIFxuY29uc3QgY29udGVudFN0eWxlID0ge1xuICBoZWlnaHQ6IFwiMTYwcHhcIixcbiAgY29sb3I6IFwiI2ZmZlwiLFxuICBsaW5lSGVpZ2h0OiBcIjE2MHB4XCIsXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgYmFja2dyb3VuZDogXCIjMzY0ZDc5XCIsXG59OyAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge3N0eWxlc0Nzc31cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cbiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNoaXBwb3JpK01pbmNobzp3Z2h0QDQwMDs2MDA7ODAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPHRpdGxlPlBob25lcywgVGFibGV0cywgQWNjZXNvcmllcyB8IG5leHRvdWNob25saW5lLmNvbTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMXJlbVwiIH19PlxuICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgIDxDb2wgeHM9ezI0fSBsZz17MjB9PlxuICAgICAgICAgICAgPFJvdyB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPENvbCBzcGFuPXs0fT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2xvZ28uanBnXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwibmV4dG91Y2hvbmxpbmUuY29tXCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezYwfVxuICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ9ezYwfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezIwfT5cbiAgICAgICAgICAgICAgICA8TWVudUJhciAvPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiIGd1dHRlcj17WzQwLCA0MF19PlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgZWZmZWN0PVwiZmFkZVwiIGF1dG9wbGF5PXt0cnVlfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWdzL2Jhbm5lcnMvYmFubmVyMS5qcGdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE5MjB9XG4gICAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltZ3MvYmFubmVycy9iYW5uZXIyLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTkyMH1cbiAgICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiIGd1dHRlcj17WzAsIDBdfT5cbiAgICAgICAgICAgICAgPENvbCB4cz17MjR9IGxnPXsxNn0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNEQUVBRDBcIixcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGgxPlZlbmRlbW9zIGFsIG1heW9yIHkgYWwgZGV0YWwuPC9oMT5cbiAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICAgIFRlbMOpZm9ubzogPGEgaHJlZj1cInRlbDorMTc4NjMwMTEzODVcIj4rMTc4NjMwMTEzODU8L2E+LlxuICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgIDxoMj5EaXJlY2Npw7NuOiAyOTMwIE5XIDcyIEFWRSBNSUFNSSBGTCAzMzEyMi48L2gyPlxuICAgICAgICAgICAgICAgICAgPGgzPjwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbGc9ezh9PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIGFsdD1cInN0b3JlXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWdzL2hvbWUvbWFwYW5leHRvdWNoMi5wbmdcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICAgIDxQcm9kdWN0b3NJcGhvbmUgLz5cbiAgICAgICAgICAgIDxQcm9kdWN0b3NTYW1zdW5nIC8+XG4gICAgICAgICAgICA8UHJvZHVjdG9zWGlhb21pIC8+XG4gICAgICAgICAgICA8UHJvZHVjdG9zQWxjYXRlbCAvPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9