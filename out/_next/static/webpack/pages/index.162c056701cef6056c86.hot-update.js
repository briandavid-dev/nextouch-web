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
/* harmony import */ var _components_Home_ProductosIphoneAlMayor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Home/ProductosIphoneAlMayor */ "./components/Home/ProductosIphoneAlMayor.js");
/* harmony import */ var _components_Home_ProductosSamsung__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Home/ProductosSamsung */ "./components/Home/ProductosSamsung.js");
/* harmony import */ var _components_Home_ProductosXiaomi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Home/ProductosXiaomi */ "./components/Home/ProductosXiaomi.js");
/* harmony import */ var _components_Home_ProductosAlcatel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Home/ProductosAlcatel */ "./components/Home/ProductosAlcatel.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\DavidOchoaBermudez\\Desktop\\nextouch-web\\pages\\index.js";













var stylesCss = new String("\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGF2aWRPY2hvYUJlcm11ZGV6XFxEZXNrdG9wXFxuZXh0b3VjaC13ZWJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZNEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxEYXZpZE9jaG9hQmVybXVkZXpcXERlc2t0b3BcXG5leHRvdWNoLXdlYlxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm93LCBDb2wsIENhcm91c2VsLCBEaXZpZGVyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XG5pbXBvcnQgTWVudUJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXIvTWVudUJhclwiO1xuaW1wb3J0IFByb2R1Y3Rvc0lwaG9uZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL1Byb2R1Y3Rvc0lwaG9uZVwiO1xuaW1wb3J0IFByb2R1Y3Rvc0lwaG9uZUFsTWF5b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9Qcm9kdWN0b3NJcGhvbmVBbE1heW9yXCI7XG5pbXBvcnQgUHJvZHVjdG9zU2Ftc3VuZyBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL1Byb2R1Y3Rvc1NhbXN1bmdcIjtcbmltcG9ydCBQcm9kdWN0b3NYaWFvbWkgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9Qcm9kdWN0b3NYaWFvbWlcIjtcbmltcG9ydCBQcm9kdWN0b3NBbGNhdGVsIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvUHJvZHVjdG9zQWxjYXRlbFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcblxuY29uc3Qgc3R5bGVzQ3NzID0gY3NzLmdsb2JhbGBgO1xuXG4vKiBcbmNvbnN0IGNvbnRlbnRTdHlsZSA9IHtcbiAgaGVpZ2h0OiBcIjE2MHB4XCIsXG4gIGNvbG9yOiBcIiNmZmZcIixcbiAgbGluZUhlaWdodDogXCIxNjBweFwiLFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gIGJhY2tncm91bmQ6IFwiIzM2NGQ3OVwiLFxufTsgKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtzdHlsZXNDc3N9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XG4gICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TaGlwcG9yaStNaW5jaG86d2dodEA0MDA7NjAwOzgwMCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDx0aXRsZT5QaG9uZXMsIFRhYmxldHMsIEFjY2Vzb3JpZXMgfCBuZXh0b3VjaG9ubGluZS5jb208L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjFyZW1cIiB9fT5cbiAgICAgICAgPFJvdyB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8Q29sIHhzPXsyNH0gbGc9ezIwfT5cbiAgICAgICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17NH0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9sb2dvLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIm5leHRvdWNob25saW5lLmNvbVwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs2MH1cbiAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0PXs2MH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCBzcGFuPXsyMH0+XG4gICAgICAgICAgICAgICAgPE1lbnVCYXIgLz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPFJvdyB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIiBndXR0ZXI9e1s0MCwgNDBdfT5cbiAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0+XG4gICAgICAgICAgICAgICAgPENhcm91c2VsIGVmZmVjdD1cImZhZGVcIiBhdXRvcGxheT17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1ncy9iYW5uZXJzL2Jhbm5lcjEuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxOTIwfVxuICAgICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWdzL2Jhbm5lcnMvYmFubmVyMi5qcGdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE5MjB9XG4gICAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPFJvdyB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIiBndXR0ZXI9e1swLCAwXX0+XG4gICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBsZz17MTJ9IG1kPXsxMn0gc209ezEyfSB4bD17MTJ9PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjREFFQUQwXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxoMT5WZW5kZW1vcyBhbCBtYXlvciB5IGFsIGRldGFsLjwvaDE+XG4gICAgICAgICAgICAgICAgICA8aDI+U21hcnRwaG9uZXMsIHBhcnRlcyB5IHBpZXphcy48L2gyPlxuICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgVGVsw6lmb25vOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwidGVsOisxNzg2MzAxMTM4NVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICArMTc4NjMwMTEzODVcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAuXG4gICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgPGgyPkRpcmVjY2nDs246IDI5MzAgTlcgNzIgQVZFIE1JQU1JIEZMIDMzMTIyLjwvaDI+XG4gICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgIFB1bHNhe1wiIFwifVxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dvby5nbC9tYXBzLzRrMVdCMkVNWlNzR3JpVjk4XCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBhcXXDrVxuICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICBwYXJhIHZlciBjb21vIGxsZWdhciBlbiBlbCBtYXBhXG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCB4cz17MjR9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9IHhsPXsxMn0+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgYWx0PVwic3RvcmVcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltZ3MvaG9tZS9tYXBhbmV4dG91Y2gyLnBuZ1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiIGd1dHRlcj17WzQwLCA0MF19PlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cbiAgICAgICAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQzNTkyLjA3Nzg4NDMyOTM4MjQhMmQtODAuMzE1NzEyMTg0OTc4MjchM2QyNS44MDEwMDQ0ODM2MTg4MzYhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDg4ZDliOTg0ZDkzMWYxNWIlM0EweDY3MWFkOWIyZDI2NTNjOTYhMnMyOTMwJTIwTlclMjA3Mm5kJTIwQXZlJTJDJTIwTWlhbWklMkMlMjBGTCUyMDMzMTIyJTJDJTIwRUUuJTIwVVUuITVlMCEzbTIhMXNlcy00MTkhMnNjbCE0djE2MjA1Mjg2NTI1MjEhNW0yITFzZXMtNDE5ITJzY2xcIlxuICAgICAgICAgICAgICAgICAgLy8gd2lkdGg9XCI2MDBcIlxuICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0PVwiNDUwXCJcbiAgICAgICAgICAgICAgICAgIC8vIGFsbG93ZnVsbHNjcmVlbj1cIlwiXG4gICAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzAwcHhcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPjwvaWZyYW1lPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgICA8UHJvZHVjdG9zSXBob25lIC8+XG4gICAgICAgICAgICA8UHJvZHVjdG9zU2Ftc3VuZyAvPlxuICAgICAgICAgICAgPFByb2R1Y3Rvc1hpYW9taSAvPlxuICAgICAgICAgICAgPFByb2R1Y3Rvc0FsY2F0ZWwgLz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufVxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\DavidOchoaBermudez\\\\Desktop\\\\nextouch-web\\\\pages\\\\index.js */");
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
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_Home_ProductosSamsung__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_Home_ProductosXiaomi__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_Home_ProductosAlcatel__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
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
      lineNumber: 168,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsic3R5bGVzQ3NzIiwiSG9tZSIsInBhZGRpbmciLCJtYXhXaWR0aCIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJ0ZXh0RGVjb3JhdGlvbiIsIndpZHRoIiwiYm9yZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsU0FBUyw4alJBQWY7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFZSxTQUFTQyxJQUFULEdBQWdCO0FBQzdCLHNCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBSUUsc0VBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFNLGVBQU8sRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sc0JBQVcsaUJBQWpCO0FBQW1DLGVBQU8sRUFBQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQXNCLGVBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFLRTtBQUNFLFlBQUksRUFBQyx3RkFEUDtBQUVFLFdBQUcsRUFBQztBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFnQkU7QUFBSyxXQUFLLEVBQUU7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBWjtBQUFB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MDU2Yzg2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3csIENvbCwgQ2Fyb3VzZWwsIERpdmlkZXIgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcbmltcG9ydCBNZW51QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlci9NZW51QmFyXCI7XG5pbXBvcnQgUHJvZHVjdG9zSXBob25lIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvUHJvZHVjdG9zSXBob25lXCI7XG5pbXBvcnQgUHJvZHVjdG9zSXBob25lQWxNYXlvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL1Byb2R1Y3Rvc0lwaG9uZUFsTWF5b3JcIjtcbmltcG9ydCBQcm9kdWN0b3NTYW1zdW5nIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvUHJvZHVjdG9zU2Ftc3VuZ1wiO1xuaW1wb3J0IFByb2R1Y3Rvc1hpYW9taSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL1Byb2R1Y3Rvc1hpYW9taVwiO1xuaW1wb3J0IFByb2R1Y3Rvc0FsY2F0ZWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9Qcm9kdWN0b3NBbGNhdGVsXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuXG5jb25zdCBzdHlsZXNDc3MgPSBjc3MuZ2xvYmFsYGA7XG5cbi8qIFxuY29uc3QgY29udGVudFN0eWxlID0ge1xuICBoZWlnaHQ6IFwiMTYwcHhcIixcbiAgY29sb3I6IFwiI2ZmZlwiLFxuICBsaW5lSGVpZ2h0OiBcIjE2MHB4XCIsXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgYmFja2dyb3VuZDogXCIjMzY0ZDc5XCIsXG59OyAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge3N0eWxlc0Nzc31cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cbiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNoaXBwb3JpK01pbmNobzp3Z2h0QDQwMDs2MDA7ODAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPHRpdGxlPlBob25lcywgVGFibGV0cywgQWNjZXNvcmllcyB8IG5leHRvdWNob25saW5lLmNvbTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMXJlbVwiIH19PlxuICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgIDxDb2wgeHM9ezI0fSBsZz17MjB9PlxuICAgICAgICAgICAgPFJvdyB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPENvbCBzcGFuPXs0fT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2xvZ28uanBnXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwibmV4dG91Y2hvbmxpbmUuY29tXCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezYwfVxuICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ9ezYwfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezIwfT5cbiAgICAgICAgICAgICAgICA8TWVudUJhciAvPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiIGd1dHRlcj17WzQwLCA0MF19PlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgZWZmZWN0PVwiZmFkZVwiIGF1dG9wbGF5PXt0cnVlfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWdzL2Jhbm5lcnMvYmFubmVyMS5qcGdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE5MjB9XG4gICAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltZ3MvYmFubmVycy9iYW5uZXIyLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTkyMH1cbiAgICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiIGd1dHRlcj17WzAsIDBdfT5cbiAgICAgICAgICAgICAgPENvbCB4cz17MjR9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9IHhsPXsxMn0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNEQUVBRDBcIixcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGgxPlZlbmRlbW9zIGFsIG1heW9yIHkgYWwgZGV0YWwuPC9oMT5cbiAgICAgICAgICAgICAgICAgIDxoMj5TbWFydHBob25lcywgcGFydGVzIHkgcGllemFzLjwvaDI+XG4gICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICBUZWzDqWZvbm86e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJ0ZWw6KzE3ODYzMDExMzg1XCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICsxNzg2MzAxMTM4NVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIC5cbiAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICA8aDI+RGlyZWNjacOzbjogMjkzMCBOVyA3MiBBVkUgTUlBTUkgRkwgMzMxMjIuPC9oMj5cbiAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgUHVsc2F7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ29vLmdsL21hcHMvNGsxV0IyRU1aU3NHcmlWOThcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIGFxdcOtXG4gICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIHBhcmEgdmVyIGNvbW8gbGxlZ2FyIGVuIGVsIG1hcGFcbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbGc9ezEyfSBtZD17MTJ9IHNtPXsxMn0geGw9ezEyfT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJzdG9yZVwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1ncy9ob21lL21hcGFuZXh0b3VjaDIucG5nXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCIgZ3V0dGVyPXtbNDAsIDQwXX0+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxuICAgICAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDM1OTIuMDc3ODg0MzI5MzgyNCEyZC04MC4zMTU3MTIxODQ5NzgyNyEzZDI1LjgwMTAwNDQ4MzYxODgzNiEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4ODhkOWI5ODRkOTMxZjE1YiUzQTB4NjcxYWQ5YjJkMjY1M2M5NiEyczI5MzAlMjBOVyUyMDcybmQlMjBBdmUlMkMlMjBNaWFtaSUyQyUyMEZMJTIwMzMxMjIlMkMlMjBFRS4lMjBVVS4hNWUwITNtMiExc2VzLTQxOSEyc2NsITR2MTYyMDUyODY1MjUyMSE1bTIhMXNlcy00MTkhMnNjbFwiXG4gICAgICAgICAgICAgICAgICAvLyB3aWR0aD1cIjYwMFwiXG4gICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ9XCI0NTBcIlxuICAgICAgICAgICAgICAgICAgLy8gYWxsb3dmdWxsc2NyZWVuPVwiXCJcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzMDBweFwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+PC9pZnJhbWU+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICAgIDxQcm9kdWN0b3NJcGhvbmUgLz5cbiAgICAgICAgICAgIDxQcm9kdWN0b3NTYW1zdW5nIC8+XG4gICAgICAgICAgICA8UHJvZHVjdG9zWGlhb21pIC8+XG4gICAgICAgICAgICA8UHJvZHVjdG9zQWxjYXRlbCAvPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9