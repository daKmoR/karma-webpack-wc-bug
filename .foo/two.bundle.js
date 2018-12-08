(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["two"],{

/***/ "./foo-two.js":
/*!********************!*\
  !*** ./foo-two.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _foo_one_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foo-one.js */ \"./foo-one.js\");\n/* harmony import */ var _foo_one_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_foo_one_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nwindow.customElements.define('karma-webpack-wc-bug', class extends HTMLElement {});\n\n\n//# sourceURL=webpack:///./foo-two.js?");

/***/ }),

/***/ "./test/foo-two.test.js":
/*!******************************!*\
  !*** ./test/foo-two.test.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _foo_two_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../foo-two.js */ \"./foo-two.js\");\n// import {\n//   expect,\n// } from '@open-wc/testing';\n\n\n\ndescribe('<karma-webpack-wc-bug>', () => {\n  it('has foo as two', async () => {\n    // const foo = document.createElement('foo-two');\n    // expect(foo.foo).to.equal('two');\n  });\n});\n\n\n//# sourceURL=webpack:///./test/foo-two.test.js?");

/***/ })

},[["./test/foo-two.test.js","runtime","commons"]]]);