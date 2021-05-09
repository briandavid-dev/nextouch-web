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












var stylesCss = new String("\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGF2aWRPY2hvYUJlcm11ZGV6XFxEZXNrdG9wXFxuZXh0b3VjaC13ZWJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXNEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxEYXZpZE9jaG9hQmVybXVkZXpcXERlc2t0b3BcXG5leHRvdWNoLXdlYlxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm93LCBDb2wsIENhcm91c2VsLCBEaXZpZGVyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XG5pbXBvcnQgTWVudUJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXIvTWVudUJhclwiO1xuaW1wb3J0IFByb2R1Y3Rvc0lwaG9uZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL1Byb2R1Y3Rvc0lwaG9uZVwiO1xuaW1wb3J0IFByb2R1Y3Rvc1NhbXN1bmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9Qcm9kdWN0b3NTYW1zdW5nXCI7XG5pbXBvcnQgUHJvZHVjdG9zWGlhb21pIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvUHJvZHVjdG9zWGlhb21pXCI7XG5pbXBvcnQgUHJvZHVjdG9zQWxjYXRlbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL1Byb2R1Y3Rvc0FsY2F0ZWxcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5cbmNvbnN0IHN0eWxlc0NzcyA9IGNzcy5nbG9iYWxgYDtcblxuLyogXG5jb25zdCBjb250ZW50U3R5bGUgPSB7XG4gIGhlaWdodDogXCIxNjBweFwiLFxuICBjb2xvcjogXCIjZmZmXCIsXG4gIGxpbmVIZWlnaHQ6IFwiMTYwcHhcIixcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICBiYWNrZ3JvdW5kOiBcIiMzNjRkNzlcIixcbn07ICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7c3R5bGVzQ3NzfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxuICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U2hpcHBvcmkrTWluY2hvOndnaHRANDAwOzYwMDs4MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cblxuICAgICAgICA8dGl0bGU+UGhvbmVzLCBUYWJsZXRzLCBBY2Nlc29yaWVzIHwgbmV4dG91Y2hvbmxpbmUuY29tPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxcmVtXCIgfX0+XG4gICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgPENvbCB4cz17MjR9IGxnPXsyMH0+XG4gICAgICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezR9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvbG9nby5qcGdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJuZXh0b3VjaG9ubGluZS5jb21cIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NjB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodD17NjB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjB9PlxuICAgICAgICAgICAgICAgIDxNZW51QmFyIC8+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCIgZ3V0dGVyPXtbNDAsIDQwXX0+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBlZmZlY3Q9XCJmYWRlXCIgYXV0b3BsYXk9e3RydWV9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltZ3MvYmFubmVycy9iYW5uZXIxLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTkyMH1cbiAgICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1ncy9iYW5uZXJzL2Jhbm5lcjIuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxOTIwfVxuICAgICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCIgZ3V0dGVyPXtbMCwgMF19PlxuICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbGc9ezE2fSBtZD17MTJ9IHNtPXsxMn0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNEQUVBRDBcIixcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGgxPlZlbmRlbW9zIGFsIG1heW9yIHkgYWwgZGV0YWwuPC9oMT5cbiAgICAgICAgICAgICAgICAgIDxoMT5TbWFydHBob25lcywgcGFydGVzIHkgcGllemFzLjwvaDE+XG4gICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICBUZWzDqWZvbm86e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJ0ZWw6KzE3ODYzMDExMzg1XCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICsxNzg2MzAxMTM4NVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIC5cbiAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICA8aDI+RGlyZWNjacOzbjogMjkzMCBOVyA3MiBBVkUgTUlBTUkgRkwgMzMxMjIuPC9oMj5cbiAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgUHVsc2F7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cInRlbDorMTc4NjMwMTEzODVcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwiIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBhcXXDrVxuICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICBwYXJhIHZlciBjb21vIGxsZWdhciBlbiBlbCBtYXBhXG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCB4cz17MjR9IGxnPXs4fSBtZD17MTJ9IHNtPXsxMn0+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgYWx0PVwic3RvcmVcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltZ3MvaG9tZS9tYXBhbmV4dG91Y2gyLnBuZ1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgICAgPFByb2R1Y3Rvc0lwaG9uZSAvPlxuICAgICAgICAgICAgPFByb2R1Y3Rvc1NhbXN1bmcgLz5cbiAgICAgICAgICAgIDxQcm9kdWN0b3NYaWFvbWkgLz5cbiAgICAgICAgICAgIDxQcm9kdWN0b3NBbGNhdGVsIC8+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\DavidOchoaBermudez\\\\Desktop\\\\nextouch-web\\\\pages\\\\index.js */");
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
              md: 12,
              sm: 12,
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
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h1", {
                  children: "Smartphones, partes y piezas."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h2", {
                  children: ["Tel\xE9fono:", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
                    href: "tel:+17863011385",
                    style: {
                      textDecoration: "none"
                    },
                    children: "+17863011385"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 21
                  }, this), "."]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h2", {
                  children: "Direcci\xF3n: 2930 NW 72 AVE MIAMI FL 33122."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h3", {
                  children: ["Pulsa", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
                    href: "tel:+17863011385",
                    style: {
                      textDecoration: "underline"
                    },
                    children: "aqu\xED"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 21
                  }, this), " ", "para ver como llegar en el mapa"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
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
              md: 12,
              sm: 12,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
                alt: "store",
                style: {
                  maxWidth: "100%"
                },
                src: "/assets/imgs/home/mapanextouch2.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_Home_ProductosIphone__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_Home_ProductosSamsung__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_Home_ProductosXiaomi__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_Home_ProductosAlcatel__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
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
      lineNumber: 147,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsic3R5bGVzQ3NzIiwiSG9tZSIsInBhZGRpbmciLCJtYXhXaWR0aCIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJ0ZXh0RGVjb3JhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLFNBQVMsa3BPQUFmO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRWUsU0FBU0MsSUFBVCxHQUFnQjtBQUM3QixzQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtEQUlFLHNFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBTSxlQUFPLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLHNCQUFXLGlCQUFqQjtBQUFtQyxlQUFPLEVBQUM7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUU7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBS0U7QUFDRSxZQUFJLEVBQUMsd0ZBRFA7QUFFRSxXQUFHLEVBQUM7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBZ0JFO0FBQUssV0FBSyxFQUFFO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQVo7QUFBQSw2QkFDRSxzRUFBQyx3Q0FBRDtBQUFL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QUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBaEdGLGVBaUdFLHNFQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBakdGLGVBa0dFLHNFQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbEdGLGVBbUdFLHNFQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbkdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJGLGVBMEhFLHNFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExSEY7QUFBQSxrQkFERjtBQThIRDtLQS9IdUJGLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmEwZWI2MmM0ZjM0YTI1YzY5NDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdywgQ29sLCBDYXJvdXNlbCwgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xuaW1wb3J0IE1lbnVCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL01lbnVCYXJcIjtcbmltcG9ydCBQcm9kdWN0b3NJcGhvbmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9Qcm9kdWN0b3NJcGhvbmVcIjtcbmltcG9ydCBQcm9kdWN0b3NTYW1zdW5nIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvUHJvZHVjdG9zU2Ftc3VuZ1wiO1xuaW1wb3J0IFByb2R1Y3Rvc1hpYW9taSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL1Byb2R1Y3Rvc1hpYW9taVwiO1xuaW1wb3J0IFByb2R1Y3Rvc0FsY2F0ZWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9Qcm9kdWN0b3NBbGNhdGVsXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuXG5jb25zdCBzdHlsZXNDc3MgPSBjc3MuZ2xvYmFsYGA7XG5cbi8qIFxuY29uc3QgY29udGVudFN0eWxlID0ge1xuICBoZWlnaHQ6IFwiMTYwcHhcIixcbiAgY29sb3I6IFwiI2ZmZlwiLFxuICBsaW5lSGVpZ2h0OiBcIjE2MHB4XCIsXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgYmFja2dyb3VuZDogXCIjMzY0ZDc5XCIsXG59OyAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge3N0eWxlc0Nzc31cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cbiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNoaXBwb3JpK01pbmNobzp3Z2h0QDQwMDs2MDA7ODAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPHRpdGxlPlBob25lcywgVGFibGV0cywgQWNjZXNvcmllcyB8IG5leHRvdWNob25saW5lLmNvbTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMXJlbVwiIH19PlxuICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgIDxDb2wgeHM9ezI0fSBsZz17MjB9PlxuICAgICAgICAgICAgPFJvdyB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPENvbCBzcGFuPXs0fT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2xvZ28uanBnXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwibmV4dG91Y2hvbmxpbmUuY29tXCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezYwfVxuICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ9ezYwfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezIwfT5cbiAgICAgICAgICAgICAgICA8TWVudUJhciAvPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiIGd1dHRlcj17WzQwLCA0MF19PlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgZWZmZWN0PVwiZmFkZVwiIGF1dG9wbGF5PXt0cnVlfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWdzL2Jhbm5lcnMvYmFubmVyMS5qcGdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE5MjB9XG4gICAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltZ3MvYmFubmVycy9iYW5uZXIyLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTkyMH1cbiAgICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiIGd1dHRlcj17WzAsIDBdfT5cbiAgICAgICAgICAgICAgPENvbCB4cz17MjR9IGxnPXsxNn0gbWQ9ezEyfSBzbT17MTJ9PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjREFFQUQwXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxoMT5WZW5kZW1vcyBhbCBtYXlvciB5IGFsIGRldGFsLjwvaDE+XG4gICAgICAgICAgICAgICAgICA8aDE+U21hcnRwaG9uZXMsIHBhcnRlcyB5IHBpZXphcy48L2gxPlxuICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgVGVsw6lmb25vOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwidGVsOisxNzg2MzAxMTM4NVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICArMTc4NjMwMTEzODVcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAuXG4gICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgPGgyPkRpcmVjY2nDs246IDI5MzAgTlcgNzIgQVZFIE1JQU1JIEZMIDMzMTIyLjwvaDI+XG4gICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgIFB1bHNhe1wiIFwifVxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJ0ZWw6KzE3ODYzMDExMzg1XCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIiB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgYXF1w61cbiAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgcGFyYSB2ZXIgY29tbyBsbGVnYXIgZW4gZWwgbWFwYVxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBsZz17OH0gbWQ9ezEyfSBzbT17MTJ9PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIGFsdD1cInN0b3JlXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWdzL2hvbWUvbWFwYW5leHRvdWNoMi5wbmdcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICAgIDxQcm9kdWN0b3NJcGhvbmUgLz5cbiAgICAgICAgICAgIDxQcm9kdWN0b3NTYW1zdW5nIC8+XG4gICAgICAgICAgICA8UHJvZHVjdG9zWGlhb21pIC8+XG4gICAgICAgICAgICA8UHJvZHVjdG9zQWxjYXRlbCAvPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9