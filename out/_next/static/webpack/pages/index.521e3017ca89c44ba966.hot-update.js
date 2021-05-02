webpackHotUpdate_N_E("pages/index",{

/***/ "./config/alcatel.json":
/*!*****************************!*\
  !*** ./config/alcatel.json ***!
  \*****************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"modelo\":\"A1\",\"precio\":\"44\",\"marca\":\"alcatel\",\"imagenes\":[\"/assets/productos/ALCATEL/A1/1.png\",\"/assets/productos/ALCATEL/A1/2.png\"]},{\"modelo\":\"A1S\",\"precio\":\"75\",\"marca\":\"alcatel\",\"imagenes\":[\"/assets/productos/ALCATEL/A1/1.png\",\"/assets/productos/ALCATEL/A1/2.png\"]}]");

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
/* harmony import */ var _config_celulares_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/celulares.json */ "./config/celulares.json");
var _config_celulares_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/celulares.json */ "./config/celulares.json", 1);
/* harmony import */ var _config_xiaomi_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/xiaomi.json */ "./config/xiaomi.json");
var _config_xiaomi_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/xiaomi.json */ "./config/xiaomi.json", 1);
/* harmony import */ var _config_samsung_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/samsung.json */ "./config/samsung.json");
var _config_samsung_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/samsung.json */ "./config/samsung.json", 1);
/* harmony import */ var _config_alcatel_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config/alcatel.json */ "./config/alcatel.json");
var _config_alcatel_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/alcatel.json */ "./config/alcatel.json", 1);
/* harmony import */ var _components_Header_MenuBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Header/MenuBar */ "./components/Header/MenuBar.js");
/* harmony import */ var _components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/common/BarraProductos */ "./components/common/BarraProductos/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\DavidOchoaBermudez\\Desktop\\nextouch-web\\pages\\index.js",
    _s = $RefreshSig$();














var stylesCss = new String(".ant-carousel .slick-dots li button{background:#23a34e;}.ant-carousel .slick-dots li.slick-active button{background:#23a34e;opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGF2aWRPY2hvYUJlcm11ZGV6XFxEZXNrdG9wXFxuZXh0b3VjaC13ZWJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZNEIsQUFHd0IsQUFHQSxtQkFGckIsQUFHWSxVQUNaIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRGF2aWRPY2hvYUJlcm11ZGV6XFxEZXNrdG9wXFxuZXh0b3VjaC13ZWJcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdywgQ29sLCBDYXJvdXNlbCwgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xuaW1wb3J0IHsgY2VsdWxhcmVzIH0gZnJvbSBcIi4uL2NvbmZpZy9jZWx1bGFyZXMuanNvblwiO1xuaW1wb3J0IGpzb25YaWFvbWkgZnJvbSBcIi4uL2NvbmZpZy94aWFvbWkuanNvblwiO1xuaW1wb3J0IGpzb25TYW1zdW5nIGZyb20gXCIuLi9jb25maWcvc2Ftc3VuZy5qc29uXCI7XG5pbXBvcnQganNvbkFsY2F0ZWwgZnJvbSBcIi4uL2NvbmZpZy9hbGNhdGVsLmpzb25cIjtcbmltcG9ydCBNZW51QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlci9NZW51QmFyXCI7XG5pbXBvcnQgQmFycmFQcm9kdWN0b3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL0JhcnJhUHJvZHVjdG9zXCI7XG5cbmNvbnN0IHN0eWxlc0NzcyA9IGNzcy5nbG9iYWxgXG4gIC5hbnQtY2Fyb3VzZWwgLnNsaWNrLWRvdHMgbGkgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjNhMzRlO1xuICB9XG4gIC5hbnQtY2Fyb3VzZWwgLnNsaWNrLWRvdHMgbGkuc2xpY2stYWN0aXZlIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogIzIzYTM0ZTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuXG5jb25zdCBjb250ZW50U3R5bGUgPSB7XG4gIGhlaWdodDogXCIxNjBweFwiLFxuICBjb2xvcjogXCIjZmZmXCIsXG4gIGxpbmVIZWlnaHQ6IFwiMTYwcHhcIixcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICBiYWNrZ3JvdW5kOiBcIiMzNjRkNzlcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtkYXRhQXBwbGUsIHNldERhdGFBcHBsZV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtkYXRhWGlhb21pLCBzZXREYXRhWGlhb21pXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2RhdGFTYW1zdW5nLCBzZXREYXRhU2Ftc3VuZ10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtkYXRhQWxjYXRlbCwgc2V0RGF0YUFsY2F0ZWxdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RGF0YUFwcGxlKGNlbHVsYXJlcy5maWx0ZXIoKGNlbHUpID0+IGNlbHUubWFyY2EgPT09IFwiaXBob25lXCIpKTtcbiAgICBzZXREYXRhWGlhb21pKGpzb25YaWFvbWkpO1xuICAgIHNldERhdGFTYW1zdW5nKGpzb25TYW1zdW5nKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7c3R5bGVzQ3NzfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxuICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG5cbiAgICAgICAgey8qIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtQm1ieHVQd1FhMmxjL0ZWekJjTko3VUF5SnhNNnd1cUlqNjF0THJjNHdTWDBzekgvRXYrbllSUnVXbG9sZmxmbFwiXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPiBcbiAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMC1iZXRhMi9kaXN0L2pzL2Jvb3RzdHJhcC5idW5kbGUubWluLmpzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtYjVrSHlYZ2NwYlpKTy90WTlVbDdrR2tmMVMwQ1d1S2NDRDM4bDhZa2VIOHo4UWpFMEdtVzFnWVU1UzlGT25KMFwiXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICA+PC9zY3JpcHQ+XG4gICAgICAgICovfVxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNoaXBwb3JpK01pbmNobzp3Z2h0QDQwMDs2MDA7ODAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPHRpdGxlPlBob25lcywgVGFibGV0cywgQWNjZXNvcmllcyB8IG5leHRvdWNob25saW5lLmNvbS88L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjFyZW1cIiB9fT5cbiAgICAgICAgPFJvdyB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8Q29sIHhzPXsyNH0gbGc9ezIwfT5cbiAgICAgICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17NH0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9sb2dvLmpwZ1wiIGFsdD1cIlwiIHdpZHRoPXs2MH0gaGVpZ2h0PXs2MH0gLz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezIwfT5cbiAgICAgICAgICAgICAgICA8TWVudUJhciAvPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiIGd1dHRlcj17WzQwLCA0MF19PlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgZWZmZWN0PVwiZmFkZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWdzL2Jhbm5lcnMvYmFubmVyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE5MjB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICBJcGhvbmUgKHtkYXRhQXBwbGUubGVuZ3RofSlcbiAgICAgICAgICAgICAgICA8L0RpdmlkZXI+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHhzPXswfSBsZz17MjR9PlxuICAgICAgICAgICAgICAgIHtkYXRhQXBwbGUubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgZWZmZWN0PVwiZmFkZVwiPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3NcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhQXBwbGV9XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1s4MiwgODAsIDY3LCA3MSwgNzRdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3NcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhQXBwbGV9XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1s2MSwgNjIsIDYzLCA2NCwgNjVdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3NcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhQXBwbGV9XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1s1NiwgNTcsIDU4LCA1OSwgNjBdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3NcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhQXBwbGV9XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1s1MSwgNTIsIDUzLCA1NCwgNTVdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3NcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhQXBwbGV9XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1s0NiwgNDcsIDQ4LCA0OSwgNTBdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3Rvc1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFBcHBsZX1cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17WzQxLCA0MiwgNDMsIDQ0LCA0NV19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3Rvc1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFBcHBsZX1cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17WzM2LCAzNywgMzgsIDM5LCA0MF19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3Rvc1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFBcHBsZX1cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17WzMxLCAzMiwgMzMsIDM0LCAzNV19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3Rvc1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFBcHBsZX1cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17WzI2LCAyNywgMjgsIDI5LCAzMF19XG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YUFwcGxlfVxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbMjEsIDIyLCAyMywgMjQsIDI1XX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YUFwcGxlfVxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbMTYsIDE2LCAxOCwgMTksIDIwXX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YUFwcGxlfVxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbMTEsIDEyLCAxMywgMTQsIDE1XX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1s2LCA3LCA4LCA5LCAxMF19IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1sxLCAyLCAzLCA0LCA1XX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1s2LCA3LCA4LCA5LCAxMF19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3Rvc1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFBcHBsZX1cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17WzExLCAxMiwgMTMsIDE0LCAxNV19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3Rvc1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFBcHBsZX1cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17WzE2LCAxNywgMTgsIDE5LCAyMF19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbGc9ezB9PlxuICAgICAgICAgICAgICAgIHtkYXRhQXBwbGUubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgZWZmZWN0PVwiZmFkZVwiPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzgyLCA4MF19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbNjcsIDcxXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1s3NCwgNjFdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzYyLCA2M119IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbNjQsIDY1XX0gLz5cblxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzEzLCAxNF19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbMTEsIDEyXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1s5LCAxMF19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbNywgOF19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbNSwgNl19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbMywgNF19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbMSwgMl19IC8+XG4gICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICAgIFNhbXN1bmcgKHtkYXRhU2Ftc3VuZy5sZW5ndGh9KVxuICAgICAgICAgICAgICAgIDwvRGl2aWRlcj5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgeHM9ezB9IGxnPXsyNH0+XG4gICAgICAgICAgICAgICAge2RhdGFBcHBsZS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBlZmZlY3Q9XCJmYWRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3Rvc1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFTYW1zdW5nfVxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbMTgsIDE3LCAxNiwgMTUsIDE0XX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YVNhbXN1bmd9XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1sxMywgMTIsIDExLCAxMCwgOV19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3Rvc1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFTYW1zdW5nfVxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbOCwgNywgNiwgNSwgNF19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhU2Ftc3VuZ30gaXRlbXM9e1szLCAyLCAxXX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBsZz17MH0+XG4gICAgICAgICAgICAgICAge2RhdGFBcHBsZS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBlZmZlY3Q9XCJmYWRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhU2Ftc3VuZ30gaXRlbXM9e1sxNywgMThdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVNhbXN1bmd9IGl0ZW1zPXtbMTUsIDE2XX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFTYW1zdW5nfSBpdGVtcz17WzEzLCAxNF19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhU2Ftc3VuZ30gaXRlbXM9e1sxMSwgMTJdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVNhbXN1bmd9IGl0ZW1zPXtbOSwgMTBdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVNhbXN1bmd9IGl0ZW1zPXtbNywgOF19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhU2Ftc3VuZ30gaXRlbXM9e1s1LCA2XX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFTYW1zdW5nfSBpdGVtcz17WzMsIDRdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVNhbXN1bmd9IGl0ZW1zPXtbMSwgMl19IC8+XG4gICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICAgIFhpYW9taSAoe2RhdGFYaWFvbWkubGVuZ3RofSlcbiAgICAgICAgICAgICAgICA8L0RpdmlkZXI+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHhzPXswfSBsZz17MjR9PlxuICAgICAgICAgICAgICAgIHtkYXRhQXBwbGUubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgZWZmZWN0PVwiZmFkZVwiPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVhpYW9taX0gaXRlbXM9e1sxLCAyLCAzLCA0LCA1XX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFYaWFvbWl9IGl0ZW1zPXtbMSwgNiwgNywgOCwgOV19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3Rvc1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFYaWFvbWl9XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1sxMCwgMTEsIDEyLCAxMywgMTRdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3NcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhWGlhb21pfVxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbMTUsIDE2LCAxNywgMThdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCB4cz17MjR9IGxnPXswfT5cbiAgICAgICAgICAgICAgICB7ZGF0YUFwcGxlLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPENhcm91c2VsIGVmZmVjdD1cImZhZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFYaWFvbWl9IGl0ZW1zPXtbMSwgMl19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhWGlhb21pfSBpdGVtcz17WzMsIDRdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVhpYW9taX0gaXRlbXM9e1s1LCA2XX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFYaWFvbWl9IGl0ZW1zPXtbNywgOF19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhWGlhb21pfSBpdGVtcz17WzksIDEwXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFYaWFvbWl9IGl0ZW1zPXtbMTEsIDEyXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFYaWFvbWl9IGl0ZW1zPXtbMTMsIDE0XX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFYaWFvbWl9IGl0ZW1zPXtbMTUsIDE2XX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFYaWFvbWl9IGl0ZW1zPXtbMTcsIDE4XX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICBBbGNhdGVsICh7ZGF0YUFsY2F0ZWwubGVuZ3RofSlcbiAgICAgICAgICAgICAgICA8L0RpdmlkZXI+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHhzPXswfSBsZz17MjR9PlxuICAgICAgICAgICAgICAgIHtkYXRhQXBwbGUubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgZWZmZWN0PVwiZmFkZVwiPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFsY2F0ZWx9IGl0ZW1zPXtbMSwgMl19IC8+XG4gICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbGc9ezB9PlxuICAgICAgICAgICAgICAgIHtkYXRhQXBwbGUubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgZWZmZWN0PVwiZmFkZVwiPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFsY2F0ZWx9IGl0ZW1zPXtbMSwgMl19IC8+XG4gICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8Zm9vdGVyIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgPHA+MjkzMCBOVyA3MiBBVkUgTUlBTUkgRkwgMzMxMjI8L3A+XG4gICAgICAgIDxwPldIQVRBUFAgKzE3ODYzMDExMzg1LiBSQUlNVU5ETyBTT0w8L3A+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\DavidOchoaBermudez\\\\Desktop\\\\nextouch-web\\\\pages\\\\index.js */");
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
      dataApple = _useState[0],
      setDataApple = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      dataXiaomi = _useState2[0],
      setDataXiaomi = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      dataSamsung = _useState3[0],
      setDataSamsung = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      dataAlcatel = _useState4[0],
      setDataAlcatel = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setDataApple(_config_celulares_json__WEBPACK_IMPORTED_MODULE_5__["celulares"].filter(function (celu) {
      return celu.marca === "iphone";
    }));
    setDataXiaomi(_config_xiaomi_json__WEBPACK_IMPORTED_MODULE_6__);
    setDataSamsung(_config_samsung_json__WEBPACK_IMPORTED_MODULE_7__);
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
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("meta", {
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;800&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("title", {
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
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              span: 20,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_Header_MenuBar__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
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
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
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
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
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
                children: ["Iphone (", dataApple.length, ")"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              xs: 0,
              lg: 24,
              children: dataApple.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
                effect: "fade",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataApple,
                  items: [82, 80, 67, 71, 74]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataApple,
                  items: [61, 62, 63, 64, 65]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataApple,
                  items: [56, 57, 58, 59, 60]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataApple,
                  items: [51, 52, 53, 54, 55]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataApple,
                  items: [46, 47, 48, 49, 50]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataApple,
                  items: [41, 42, 43, 44, 45]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataApple,
                  items: [36, 37, 38, 39, 40]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataApple,
                  items: [31, 32, 33, 34, 35]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataApple,
                  items: [26, 27, 28, 29, 30]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataApple,
                  items: [21, 22, 23, 24, 25]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 155,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataApple,
                  items: [16, 16, 18, 19, 20]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 159,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataApple,
                  items: [11, 12, 13, 14, 15]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 163,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataApple,
                  items: [6, 7, 8, 9, 10]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataApple,
                  items: [1, 2, 3, 4, 5]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataApple,
                  items: [6, 7, 8, 9, 10]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataApple,
                  items: [11, 12, 13, 14, 15]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataApple,
                  items: [16, 17, 18, 19, 20]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 175,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              xs: 24,
              lg: 0,
              children: dataApple.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
                effect: "fade",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataApple,
                  items: [82, 80]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 185,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataApple,
                  items: [67, 71]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataApple,
                  items: [74, 61]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataApple,
                  items: [62, 63]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 188,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataApple,
                  items: [64, 65]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataApple,
                  items: [13, 14]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 191,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataApple,
                  items: [11, 12]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataApple,
                  items: [9, 10]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 193,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataApple,
                  items: [7, 8]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 194,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataApple,
                  items: [5, 6]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataApple,
                  items: [3, 4]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 196,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataApple,
                  items: [1, 2]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 197,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
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
                lineNumber: 205,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              xs: 0,
              lg: 24,
              children: dataApple.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
                effect: "fade",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataSamsung,
                  items: [18, 17, 16, 15, 14]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 212,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataSamsung,
                  items: [13, 12, 11, 10, 9]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 216,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataSamsung,
                  items: [8, 7, 6, 5, 4]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 220,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataSamsung,
                  items: [3, 2, 1]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 224,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              xs: 24,
              lg: 0,
              children: dataApple.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
                effect: "fade",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataSamsung,
                  items: [17, 18]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 231,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataSamsung,
                  items: [15, 16]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 232,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataSamsung,
                  items: [13, 14]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 233,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataSamsung,
                  items: [11, 12]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 234,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataSamsung,
                  items: [9, 10]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 235,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataSamsung,
                  items: [7, 8]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 236,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataSamsung,
                  items: [5, 6]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 237,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataSamsung,
                  items: [3, 4]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 238,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataSamsung,
                  items: [1, 2]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 239,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 230,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 244,
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
                lineNumber: 247,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              xs: 0,
              lg: 24,
              children: dataApple.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
                effect: "fade",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataXiaomi,
                  items: [1, 2, 3, 4, 5]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 254,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataXiaomi,
                  items: [1, 6, 7, 8, 9]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 255,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataXiaomi,
                  items: [10, 11, 12, 13, 14]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 256,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataXiaomi,
                  items: [15, 16, 17, 18]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 260,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 253,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 251,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              xs: 24,
              lg: 0,
              children: dataApple.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
                effect: "fade",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataXiaomi,
                  items: [1, 2]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 270,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataXiaomi,
                  items: [3, 4]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 271,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataXiaomi,
                  items: [5, 6]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 272,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataXiaomi,
                  items: [7, 8]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 273,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataXiaomi,
                  items: [9, 10]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 274,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataXiaomi,
                  items: [11, 12]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 275,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataXiaomi,
                  items: [13, 14]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 276,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataXiaomi,
                  items: [15, 16]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 277,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataXiaomi,
                  items: [17, 18]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 278,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 269,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 267,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 284,
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
                lineNumber: 287,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 286,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              xs: 0,
              lg: 24,
              children: dataApple.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
                effect: "fade",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataAlcatel,
                  items: [1, 2]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 294,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 293,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 291,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              xs: 24,
              lg: 0,
              children: dataApple.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
                effect: "fade",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_common_BarraProductos__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: dataAlcatel,
                  items: [1, 2]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 301,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 300,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 298,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 285,
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("footer", {
      style: {
        textAlign: "center"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("p", {
        children: "2930 NW 72 AVE MIAMI FL 33122"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("p", {
        children: "WHATAPP +17863011385. RAIMUNDO SOL"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Home, "FPLwzeCY82EmtNXPslQBiGSdJnE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsic3R5bGVzQ3NzIiwiY29udGVudFN0eWxlIiwiaGVpZ2h0IiwiY29sb3IiLCJsaW5lSGVpZ2h0IiwidGV4dEFsaWduIiwiYmFja2dyb3VuZCIsIkhvbWUiLCJ1c2VTdGF0ZSIsImRhdGFBcHBsZSIsInNldERhdGFBcHBsZSIsImRhdGFYaWFvbWkiLCJzZXREYXRhWGlhb21pIiwiZGF0YVNhbXN1bmciLCJzZXREYXRhU2Ftc3VuZyIsImRhdGFBbGNhdGVsIiwic2V0RGF0YUFsY2F0ZWwiLCJ1c2VFZmZlY3QiLCJjZWx1bGFyZXMiLCJmaWx0ZXIiLCJjZWx1IiwibWFyY2EiLCJqc29uWGlhb21pIiwianNvblNhbXN1bmciLCJwYWRkaW5nIiwibWF4V2lkdGgiLCJkaXNwbGF5IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsU0FBUyxxa2lCQUFmOztBQVVBLElBQU1DLFlBQVksR0FBRztBQUNuQkMsUUFBTSxFQUFFLE9BRFc7QUFFbkJDLE9BQUssRUFBRSxNQUZZO0FBR25CQyxZQUFVLEVBQUUsT0FITztBQUluQkMsV0FBUyxFQUFFLFFBSlE7QUFLbkJDLFlBQVUsRUFBRTtBQUxPLENBQXJCO0FBUWUsU0FBU0MsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLEVBQUQsQ0FEYjtBQUFBLE1BQ3RCQyxTQURzQjtBQUFBLE1BQ1hDLFlBRFc7O0FBQUEsbUJBRU9GLHNEQUFRLENBQUMsRUFBRCxDQUZmO0FBQUEsTUFFdEJHLFVBRnNCO0FBQUEsTUFFVkMsYUFGVTs7QUFBQSxtQkFHU0osc0RBQVEsQ0FBQyxFQUFELENBSGpCO0FBQUEsTUFHdEJLLFdBSHNCO0FBQUEsTUFH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QUFFLENBQWpCO0FBQUEsd0JBQ0dOLFNBQVMsQ0FBQ2tCLE1BQVYsR0FBbUIsQ0FBbkIsaUJBQ0Msc0VBQUMsNkNBQUQ7QUFBVSxzQkFBTSxFQUFDLE1BQWpCO0FBQUEsdUNBQ0Usc0VBQUMsMEVBQUQ7QUFBZ0Isc0JBQUksRUFBRVosV0FBdEI7QUFBbUMsdUJBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbE5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBN0JGLGVBMFFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExUUYsZUEyUUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNRRixlQTRRRTtBQUFRLFdBQUssRUFBRTtBQUFFVixpQkFBUyxFQUFFO0FBQWIsT0FBZjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVRRjtBQUFBLGtCQURGO0FBbVJEOztHQS9SdUJFLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTIxZTMwMTdjYTg5YzQ0YmE5NjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdywgQ29sLCBDYXJvdXNlbCwgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xuaW1wb3J0IHsgY2VsdWxhcmVzIH0gZnJvbSBcIi4uL2NvbmZpZy9jZWx1bGFyZXMuanNvblwiO1xuaW1wb3J0IGpzb25YaWFvbWkgZnJvbSBcIi4uL2NvbmZpZy94aWFvbWkuanNvblwiO1xuaW1wb3J0IGpzb25TYW1zdW5nIGZyb20gXCIuLi9jb25maWcvc2Ftc3VuZy5qc29uXCI7XG5pbXBvcnQganNvbkFsY2F0ZWwgZnJvbSBcIi4uL2NvbmZpZy9hbGNhdGVsLmpzb25cIjtcbmltcG9ydCBNZW51QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlci9NZW51QmFyXCI7XG5pbXBvcnQgQmFycmFQcm9kdWN0b3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL0JhcnJhUHJvZHVjdG9zXCI7XG5cbmNvbnN0IHN0eWxlc0NzcyA9IGNzcy5nbG9iYWxgXG4gIC5hbnQtY2Fyb3VzZWwgLnNsaWNrLWRvdHMgbGkgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjNhMzRlO1xuICB9XG4gIC5hbnQtY2Fyb3VzZWwgLnNsaWNrLWRvdHMgbGkuc2xpY2stYWN0aXZlIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogIzIzYTM0ZTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuXG5jb25zdCBjb250ZW50U3R5bGUgPSB7XG4gIGhlaWdodDogXCIxNjBweFwiLFxuICBjb2xvcjogXCIjZmZmXCIsXG4gIGxpbmVIZWlnaHQ6IFwiMTYwcHhcIixcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICBiYWNrZ3JvdW5kOiBcIiMzNjRkNzlcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtkYXRhQXBwbGUsIHNldERhdGFBcHBsZV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtkYXRhWGlhb21pLCBzZXREYXRhWGlhb21pXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2RhdGFTYW1zdW5nLCBzZXREYXRhU2Ftc3VuZ10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtkYXRhQWxjYXRlbCwgc2V0RGF0YUFsY2F0ZWxdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RGF0YUFwcGxlKGNlbHVsYXJlcy5maWx0ZXIoKGNlbHUpID0+IGNlbHUubWFyY2EgPT09IFwiaXBob25lXCIpKTtcbiAgICBzZXREYXRhWGlhb21pKGpzb25YaWFvbWkpO1xuICAgIHNldERhdGFTYW1zdW5nKGpzb25TYW1zdW5nKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7c3R5bGVzQ3NzfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxuICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG5cbiAgICAgICAgey8qIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtQm1ieHVQd1FhMmxjL0ZWekJjTko3VUF5SnhNNnd1cUlqNjF0THJjNHdTWDBzekgvRXYrbllSUnVXbG9sZmxmbFwiXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPiBcbiAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMC1iZXRhMi9kaXN0L2pzL2Jvb3RzdHJhcC5idW5kbGUubWluLmpzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtYjVrSHlYZ2NwYlpKTy90WTlVbDdrR2tmMVMwQ1d1S2NDRDM4bDhZa2VIOHo4UWpFMEdtVzFnWVU1UzlGT25KMFwiXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICA+PC9zY3JpcHQ+XG4gICAgICAgICovfVxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNoaXBwb3JpK01pbmNobzp3Z2h0QDQwMDs2MDA7ODAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPHRpdGxlPlBob25lcywgVGFibGV0cywgQWNjZXNvcmllcyB8IG5leHRvdWNob25saW5lLmNvbS88L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjFyZW1cIiB9fT5cbiAgICAgICAgPFJvdyB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8Q29sIHhzPXsyNH0gbGc9ezIwfT5cbiAgICAgICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17NH0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9sb2dvLmpwZ1wiIGFsdD1cIlwiIHdpZHRoPXs2MH0gaGVpZ2h0PXs2MH0gLz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezIwfT5cbiAgICAgICAgICAgICAgICA8TWVudUJhciAvPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiIGd1dHRlcj17WzQwLCA0MF19PlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgZWZmZWN0PVwiZmFkZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWdzL2Jhbm5lcnMvYmFubmVyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE5MjB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICBJcGhvbmUgKHtkYXRhQXBwbGUubGVuZ3RofSlcbiAgICAgICAgICAgICAgICA8L0RpdmlkZXI+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHhzPXswfSBsZz17MjR9PlxuICAgICAgICAgICAgICAgIHtkYXRhQXBwbGUubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgZWZmZWN0PVwiZmFkZVwiPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3NcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhQXBwbGV9XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1s4MiwgODAsIDY3LCA3MSwgNzRdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3NcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhQXBwbGV9XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1s2MSwgNjIsIDYzLCA2NCwgNjVdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3NcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhQXBwbGV9XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1s1NiwgNTcsIDU4LCA1OSwgNjBdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3NcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhQXBwbGV9XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1s1MSwgNTIsIDUzLCA1NCwgNTVdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3NcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhQXBwbGV9XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1s0NiwgNDcsIDQ4LCA0OSwgNTBdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3Rvc1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFBcHBsZX1cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17WzQxLCA0MiwgNDMsIDQ0LCA0NV19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3Rvc1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFBcHBsZX1cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17WzM2LCAzNywgMzgsIDM5LCA0MF19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3Rvc1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFBcHBsZX1cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17WzMxLCAzMiwgMzMsIDM0LCAzNV19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3Rvc1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFBcHBsZX1cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17WzI2LCAyNywgMjgsIDI5LCAzMF19XG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YUFwcGxlfVxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbMjEsIDIyLCAyMywgMjQsIDI1XX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YUFwcGxlfVxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbMTYsIDE2LCAxOCwgMTksIDIwXX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YUFwcGxlfVxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbMTEsIDEyLCAxMywgMTQsIDE1XX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1s2LCA3LCA4LCA5LCAxMF19IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1sxLCAyLCAzLCA0LCA1XX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1s2LCA3LCA4LCA5LCAxMF19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3Rvc1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFBcHBsZX1cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17WzExLCAxMiwgMTMsIDE0LCAxNV19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3Rvc1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFBcHBsZX1cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17WzE2LCAxNywgMTgsIDE5LCAyMF19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbGc9ezB9PlxuICAgICAgICAgICAgICAgIHtkYXRhQXBwbGUubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgZWZmZWN0PVwiZmFkZVwiPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzgyLCA4MF19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbNjcsIDcxXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1s3NCwgNjFdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzYyLCA2M119IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbNjQsIDY1XX0gLz5cblxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFwcGxlfSBpdGVtcz17WzEzLCAxNF19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbMTEsIDEyXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFBcHBsZX0gaXRlbXM9e1s5LCAxMF19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbNywgOF19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbNSwgNl19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbMywgNF19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhQXBwbGV9IGl0ZW1zPXtbMSwgMl19IC8+XG4gICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICAgIFNhbXN1bmcgKHtkYXRhU2Ftc3VuZy5sZW5ndGh9KVxuICAgICAgICAgICAgICAgIDwvRGl2aWRlcj5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgeHM9ezB9IGxnPXsyNH0+XG4gICAgICAgICAgICAgICAge2RhdGFBcHBsZS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBlZmZlY3Q9XCJmYWRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3Rvc1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFTYW1zdW5nfVxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbMTgsIDE3LCAxNiwgMTUsIDE0XX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YVNhbXN1bmd9XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1sxMywgMTIsIDExLCAxMCwgOV19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3Rvc1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFTYW1zdW5nfVxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbOCwgNywgNiwgNSwgNF19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhU2Ftc3VuZ30gaXRlbXM9e1szLCAyLCAxXX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBsZz17MH0+XG4gICAgICAgICAgICAgICAge2RhdGFBcHBsZS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBlZmZlY3Q9XCJmYWRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhU2Ftc3VuZ30gaXRlbXM9e1sxNywgMThdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVNhbXN1bmd9IGl0ZW1zPXtbMTUsIDE2XX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFTYW1zdW5nfSBpdGVtcz17WzEzLCAxNF19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhU2Ftc3VuZ30gaXRlbXM9e1sxMSwgMTJdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVNhbXN1bmd9IGl0ZW1zPXtbOSwgMTBdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVNhbXN1bmd9IGl0ZW1zPXtbNywgOF19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhU2Ftc3VuZ30gaXRlbXM9e1s1LCA2XX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFTYW1zdW5nfSBpdGVtcz17WzMsIDRdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVNhbXN1bmd9IGl0ZW1zPXtbMSwgMl19IC8+XG4gICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICAgIFhpYW9taSAoe2RhdGFYaWFvbWkubGVuZ3RofSlcbiAgICAgICAgICAgICAgICA8L0RpdmlkZXI+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHhzPXswfSBsZz17MjR9PlxuICAgICAgICAgICAgICAgIHtkYXRhQXBwbGUubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgZWZmZWN0PVwiZmFkZVwiPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVhpYW9taX0gaXRlbXM9e1sxLCAyLCAzLCA0LCA1XX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFYaWFvbWl9IGl0ZW1zPXtbMSwgNiwgNywgOCwgOV19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3Rvc1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFYaWFvbWl9XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1sxMCwgMTEsIDEyLCAxMywgMTRdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3NcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhWGlhb21pfVxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbMTUsIDE2LCAxNywgMThdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCB4cz17MjR9IGxnPXswfT5cbiAgICAgICAgICAgICAgICB7ZGF0YUFwcGxlLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPENhcm91c2VsIGVmZmVjdD1cImZhZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFYaWFvbWl9IGl0ZW1zPXtbMSwgMl19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhWGlhb21pfSBpdGVtcz17WzMsIDRdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YVhpYW9taX0gaXRlbXM9e1s1LCA2XX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFYaWFvbWl9IGl0ZW1zPXtbNywgOF19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXJyYVByb2R1Y3RvcyBkYXRhPXtkYXRhWGlhb21pfSBpdGVtcz17WzksIDEwXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFYaWFvbWl9IGl0ZW1zPXtbMTEsIDEyXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFYaWFvbWl9IGl0ZW1zPXtbMTMsIDE0XX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFYaWFvbWl9IGl0ZW1zPXtbMTUsIDE2XX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhcnJhUHJvZHVjdG9zIGRhdGE9e2RhdGFYaWFvbWl9IGl0ZW1zPXtbMTcsIDE4XX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICBBbGNhdGVsICh7ZGF0YUFsY2F0ZWwubGVuZ3RofSlcbiAgICAgICAgICAgICAgICA8L0RpdmlkZXI+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHhzPXswfSBsZz17MjR9PlxuICAgICAgICAgICAgICAgIHtkYXRhQXBwbGUubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgZWZmZWN0PVwiZmFkZVwiPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFsY2F0ZWx9IGl0ZW1zPXtbMSwgMl19IC8+XG4gICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbGc9ezB9PlxuICAgICAgICAgICAgICAgIHtkYXRhQXBwbGUubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgZWZmZWN0PVwiZmFkZVwiPlxuICAgICAgICAgICAgICAgICAgICA8QmFycmFQcm9kdWN0b3MgZGF0YT17ZGF0YUFsY2F0ZWx9IGl0ZW1zPXtbMSwgMl19IC8+XG4gICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8Zm9vdGVyIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgPHA+MjkzMCBOVyA3MiBBVkUgTUlBTUkgRkwgMzMxMjI8L3A+XG4gICAgICAgIDxwPldIQVRBUFAgKzE3ODYzMDExMzg1LiBSQUlNVU5ETyBTT0w8L3A+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=