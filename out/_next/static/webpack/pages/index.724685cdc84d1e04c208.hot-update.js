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












var stylesCss = new String("\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGF2aWRPY2hvYUJlcm11ZGV6XFxEZXNrdG9wXFxuZXh0b3VjaC13ZWJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXNEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxEYXZpZE9jaG9hQmVybXVkZXpcXERlc2t0b3BcXG5leHRvdWNoLXdlYlxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm93LCBDb2wsIENhcm91c2VsLCBEaXZpZGVyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XG5pbXBvcnQgTWVudUJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXIvTWVudUJhclwiO1xuaW1wb3J0IFByb2R1Y3Rvc0lwaG9uZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL1Byb2R1Y3Rvc0lwaG9uZVwiO1xuaW1wb3J0IFByb2R1Y3Rvc1NhbXN1bmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9Qcm9kdWN0b3NTYW1zdW5nXCI7XG5pbXBvcnQgUHJvZHVjdG9zWGlhb21pIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvUHJvZHVjdG9zWGlhb21pXCI7XG5pbXBvcnQgUHJvZHVjdG9zQWxjYXRlbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL1Byb2R1Y3Rvc0FsY2F0ZWxcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5cbmNvbnN0IHN0eWxlc0NzcyA9IGNzcy5nbG9iYWxgYDtcblxuLyogXG5jb25zdCBjb250ZW50U3R5bGUgPSB7XG4gIGhlaWdodDogXCIxNjBweFwiLFxuICBjb2xvcjogXCIjZmZmXCIsXG4gIGxpbmVIZWlnaHQ6IFwiMTYwcHhcIixcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICBiYWNrZ3JvdW5kOiBcIiMzNjRkNzlcIixcbn07ICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7c3R5bGVzQ3NzfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxuICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U2hpcHBvcmkrTWluY2hvOndnaHRANDAwOzYwMDs4MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cblxuICAgICAgICA8dGl0bGU+UGhvbmVzLCBUYWJsZXRzLCBBY2Nlc29yaWVzIHwgbmV4dG91Y2hvbmxpbmUuY29tPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxcmVtXCIgfX0+XG4gICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgPENvbCB4cz17MjR9IGxnPXsyMH0+XG4gICAgICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezR9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvbG9nby5qcGdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJuZXh0b3VjaG9ubGluZS5jb21cIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NjB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodD17NjB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjB9PlxuICAgICAgICAgICAgICAgIDxNZW51QmFyIC8+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCIgZ3V0dGVyPXtbNDAsIDQwXX0+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBlZmZlY3Q9XCJmYWRlXCIgYXV0b3BsYXk9e3RydWV9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltZ3MvYmFubmVycy9iYW5uZXIxLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTkyMH1cbiAgICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1ncy9iYW5uZXJzL2Jhbm5lcjIuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxOTIwfVxuICAgICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCIgZ3V0dGVyPXtbMCwgMF19PlxuICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbGc9ezEyfSBtZD17MTJ9IHNtPXsxMn0geGw9ezEyfT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0RBRUFEMFwiLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjFyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aDE+VmVuZGVtb3MgYWwgbWF5b3IgeSBhbCBkZXRhbC48L2gxPlxuICAgICAgICAgICAgICAgICAgPGgyPlNtYXJ0cGhvbmVzLCBwYXJ0ZXMgeSBwaWV6YXMuPC9oMj5cbiAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICAgIFRlbMOpZm9ubzp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cInRlbDorMTc4NjMwMTEzODVcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgKzE3ODYzMDExMzg1XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgLlxuICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgIDxoMj5EaXJlY2Npw7NuOiAyOTMwIE5XIDcyIEFWRSBNSUFNSSBGTCAzMzEyMi48L2gyPlxuICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICBQdWxzYXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9nb28uZ2wvbWFwcy80azFXQjJFTVpTc0dyaVY5OFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgYXF1w61cbiAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgcGFyYSB2ZXIgY29tbyBsbGVnYXIgZW4gZWwgbWFwYVxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBsZz17MTJ9IG1kPXsxMn0gc209ezEyfSB4bD17MTJ9PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIGFsdD1cInN0b3JlXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWdzL2hvbWUvbWFwYW5leHRvdWNoMi5wbmdcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCIgZ3V0dGVyPXtbNDAsIDQwXX0+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxuICAgICAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDM1OTIuMDc3ODg0MzI5MzgyNCEyZC04MC4zMTU3MTIxODQ5NzgyNyEzZDI1LjgwMTAwNDQ4MzYxODgzNiEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4ODhkOWI5ODRkOTMxZjE1YiUzQTB4NjcxYWQ5YjJkMjY1M2M5NiEyczI5MzAlMjBOVyUyMDcybmQlMjBBdmUlMkMlMjBNaWFtaSUyQyUyMEZMJTIwMzMxMjIlMkMlMjBFRS4lMjBVVS4hNWUwITNtMiExc2VzLTQxOSEyc2NsITR2MTYyMDUyODY1MjUyMSE1bTIhMXNlcy00MTkhMnNjbFwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjYwMFwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0NTBcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiAwIH19XG4gICAgICAgICAgICAgICAgICAvLyBhbGxvd2Z1bGxzY3JlZW49XCJcIlxuICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgID48L2lmcmFtZT5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgICAgPFByb2R1Y3Rvc0lwaG9uZSAvPlxuICAgICAgICAgICAgPFByb2R1Y3Rvc1NhbXN1bmcgLz5cbiAgICAgICAgICAgIDxQcm9kdWN0b3NYaWFvbWkgLz5cbiAgICAgICAgICAgIDxQcm9kdWN0b3NBbGNhdGVsIC8+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\DavidOchoaBermudez\\\\Desktop\\\\nextouch-web\\\\pages\\\\index.js */");
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
              lg: 12,
              md: 12,
              sm: 12,
              xl: 12,
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
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h2", {
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
                    href: "https://goo.gl/maps/4k1WB2EMZSsGriV98",
                    style: {
                      textDecoration: "underline"
                    },
                    target: "_blank",
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
              lg: 12,
              md: 12,
              sm: 12,
              xl: 12,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
                alt: "store",
                style: {
                  maxWidth: "100%"
                },
                src: "/assets/imgs/home/mapanextouch2.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
            type: "flex",
            justify: "center",
            gutter: [40, 40],
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
              span: 24,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("iframe", {
                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.0778843293824!2d-80.31571218497827!3d25.801004483618836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b984d931f15b%3A0x671ad9b2d2653c96!2s2930%20NW%2072nd%20Ave%2C%20Miami%2C%20FL%2033122%2C%20EE.%20UU.!5e0!3m2!1ses-419!2scl!4v1620528652521!5m2!1ses-419!2scl",
                width: "600",
                height: "450",
                style: {
                  border: 0
                } // allowfullscreen=""
                ,
                loading: "lazy"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_Home_ProductosIphone__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_Home_ProductosSamsung__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_Home_ProductosXiaomi__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_Home_ProductosAlcatel__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
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
      lineNumber: 161,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsic3R5bGVzQ3NzIiwiSG9tZSIsInBhZGRpbmciLCJtYXhXaWR0aCIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJ0ZXh0RGVjb3JhdGlvbiIsImJvcmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLFNBQVMsc3RRQUFmO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRWUsU0FBU0MsSUFBVCxHQUFnQjtBQUM3QixzQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtEQUlFLHNFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBTSxlQUFPLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLHNCQUFXLGlCQUFqQjtBQUFtQyxlQUFPLEVBQUM7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUU7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBS0U7QUFDRSxZQUFJLEVBQUMsd0ZBRFA7QUFFRSxXQUFHLEVBQUM7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBZ0JFO0FBQUssV0FBSyxFQUFFO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQVo7QUFBQSw2QkFDRSxzRUFBQyx3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REY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFyQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQW5ERixlQWlHRSxzRUFBQyx3Q0FBRDtBQUFLLGdCQUFJLEVBQUMsTUFBVjtBQUFpQixtQkFBTyxFQUFDLFFBQXpCO0FBQWtDLGtCQUFNLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUExQztBQUFBLG1DQUNFLHNFQUFDLHdDQUFEO0FBQUssa0JBQUksRUFBRSxFQUFYO0FBQUEscUNBQ0U7QUFDRSxtQkFBRyxFQUFDLHlVQUROO0FBRUUscUJBQUssRUFBQyxLQUZSO0FBR0Usc0JBQU0sRUFBQyxLQUhUO0FBSUUscUJBQUssRUFBRTtBQUFFTyx3QkFBTSxFQUFFO0FBQVYsaUJBSlQsQ0FLRTtBQUxGO0FBTUUsdUJBQU8sRUFBQztBQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFqR0YsZUE4R0Usc0VBQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE5R0YsZUErR0Usc0VBQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkEvR0YsZUFnSEUsc0VBQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFoSEYsZUFpSEUsc0VBQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFqSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkYsZUF3SUUsc0VBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhJRjtBQUFBLGtCQURGO0FBNElEO0tBN0l1QlQsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43MjQ2ODVjZGM4NGQxZTA0YzIwOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm93LCBDb2wsIENhcm91c2VsLCBEaXZpZGVyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XG5pbXBvcnQgTWVudUJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXIvTWVudUJhclwiO1xuaW1wb3J0IFByb2R1Y3Rvc0lwaG9uZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL1Byb2R1Y3Rvc0lwaG9uZVwiO1xuaW1wb3J0IFByb2R1Y3Rvc1NhbXN1bmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9Qcm9kdWN0b3NTYW1zdW5nXCI7XG5pbXBvcnQgUHJvZHVjdG9zWGlhb21pIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvUHJvZHVjdG9zWGlhb21pXCI7XG5pbXBvcnQgUHJvZHVjdG9zQWxjYXRlbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL1Byb2R1Y3Rvc0FsY2F0ZWxcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5cbmNvbnN0IHN0eWxlc0NzcyA9IGNzcy5nbG9iYWxgYDtcblxuLyogXG5jb25zdCBjb250ZW50U3R5bGUgPSB7XG4gIGhlaWdodDogXCIxNjBweFwiLFxuICBjb2xvcjogXCIjZmZmXCIsXG4gIGxpbmVIZWlnaHQ6IFwiMTYwcHhcIixcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICBiYWNrZ3JvdW5kOiBcIiMzNjRkNzlcIixcbn07ICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7c3R5bGVzQ3NzfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxuICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U2hpcHBvcmkrTWluY2hvOndnaHRANDAwOzYwMDs4MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cblxuICAgICAgICA8dGl0bGU+UGhvbmVzLCBUYWJsZXRzLCBBY2Nlc29yaWVzIHwgbmV4dG91Y2hvbmxpbmUuY29tPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxcmVtXCIgfX0+XG4gICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgPENvbCB4cz17MjR9IGxnPXsyMH0+XG4gICAgICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezR9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvbG9nby5qcGdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJuZXh0b3VjaG9ubGluZS5jb21cIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NjB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodD17NjB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjB9PlxuICAgICAgICAgICAgICAgIDxNZW51QmFyIC8+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCIgZ3V0dGVyPXtbNDAsIDQwXX0+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBlZmZlY3Q9XCJmYWRlXCIgYXV0b3BsYXk9e3RydWV9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltZ3MvYmFubmVycy9iYW5uZXIxLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTkyMH1cbiAgICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1ncy9iYW5uZXJzL2Jhbm5lcjIuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxOTIwfVxuICAgICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCIgZ3V0dGVyPXtbMCwgMF19PlxuICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbGc9ezEyfSBtZD17MTJ9IHNtPXsxMn0geGw9ezEyfT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0RBRUFEMFwiLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjFyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aDE+VmVuZGVtb3MgYWwgbWF5b3IgeSBhbCBkZXRhbC48L2gxPlxuICAgICAgICAgICAgICAgICAgPGgyPlNtYXJ0cGhvbmVzLCBwYXJ0ZXMgeSBwaWV6YXMuPC9oMj5cbiAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICAgIFRlbMOpZm9ubzp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cInRlbDorMTc4NjMwMTEzODVcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgKzE3ODYzMDExMzg1XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgLlxuICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgIDxoMj5EaXJlY2Npw7NuOiAyOTMwIE5XIDcyIEFWRSBNSUFNSSBGTCAzMzEyMi48L2gyPlxuICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICBQdWxzYXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9nb28uZ2wvbWFwcy80azFXQjJFTVpTc0dyaVY5OFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgYXF1w61cbiAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgcGFyYSB2ZXIgY29tbyBsbGVnYXIgZW4gZWwgbWFwYVxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBsZz17MTJ9IG1kPXsxMn0gc209ezEyfSB4bD17MTJ9PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIGFsdD1cInN0b3JlXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWdzL2hvbWUvbWFwYW5leHRvdWNoMi5wbmdcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCIgZ3V0dGVyPXtbNDAsIDQwXX0+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxuICAgICAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDM1OTIuMDc3ODg0MzI5MzgyNCEyZC04MC4zMTU3MTIxODQ5NzgyNyEzZDI1LjgwMTAwNDQ4MzYxODgzNiEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4ODhkOWI5ODRkOTMxZjE1YiUzQTB4NjcxYWQ5YjJkMjY1M2M5NiEyczI5MzAlMjBOVyUyMDcybmQlMjBBdmUlMkMlMjBNaWFtaSUyQyUyMEZMJTIwMzMxMjIlMkMlMjBFRS4lMjBVVS4hNWUwITNtMiExc2VzLTQxOSEyc2NsITR2MTYyMDUyODY1MjUyMSE1bTIhMXNlcy00MTkhMnNjbFwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjYwMFwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0NTBcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiAwIH19XG4gICAgICAgICAgICAgICAgICAvLyBhbGxvd2Z1bGxzY3JlZW49XCJcIlxuICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgID48L2lmcmFtZT5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgICAgPFByb2R1Y3Rvc0lwaG9uZSAvPlxuICAgICAgICAgICAgPFByb2R1Y3Rvc1NhbXN1bmcgLz5cbiAgICAgICAgICAgIDxQcm9kdWN0b3NYaWFvbWkgLz5cbiAgICAgICAgICAgIDxQcm9kdWN0b3NBbGNhdGVsIC8+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=