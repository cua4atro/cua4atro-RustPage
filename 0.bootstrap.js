(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/cosas_oxidadas.js":
/*!********************************!*\
  !*** ../pkg/cosas_oxidadas.js ***!
  \********************************/
/*! exports provided: greet, __wbg_alert_7b0d1214a9c24898 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cosas_oxidadas_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cosas_oxidadas_bg.wasm */ \"../pkg/cosas_oxidadas_bg.wasm\");\n/* harmony import */ var _cosas_oxidadas_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cosas_oxidadas_bg.js */ \"../pkg/cosas_oxidadas_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return _cosas_oxidadas_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"greet\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_7b0d1214a9c24898\", function() { return _cosas_oxidadas_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_alert_7b0d1214a9c24898\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/cosas_oxidadas.js?");

/***/ }),

/***/ "../pkg/cosas_oxidadas_bg.js":
/*!***********************************!*\
  !*** ../pkg/cosas_oxidadas_bg.js ***!
  \***********************************/
/*! exports provided: greet, __wbg_alert_7b0d1214a9c24898 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return greet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_7b0d1214a9c24898\", function() { return __wbg_alert_7b0d1214a9c24898; });\n/* harmony import */ var _cosas_oxidadas_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cosas_oxidadas_bg.wasm */ \"../pkg/cosas_oxidadas_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = new Uint8Array();\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(_cosas_oxidadas_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n*/\nfunction greet() {\n    _cosas_oxidadas_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"greet\"]();\n}\n\nfunction __wbg_alert_7b0d1214a9c24898(arg0, arg1) {\n    alert(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/cosas_oxidadas_bg.js?");

/***/ }),

/***/ "../pkg/cosas_oxidadas_bg.wasm":
/*!*************************************!*\
  !*** ../pkg/cosas_oxidadas_bg.wasm ***!
  \*************************************/
/*! exports provided: memory, greet */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./cosas_oxidadas_bg.js */ \"../pkg/cosas_oxidadas_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/cosas_oxidadas_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var cosas_oxidadas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cosas-oxidadas */ \"../pkg/cosas_oxidadas.js\");\n\n\ncosas_oxidadas__WEBPACK_IMPORTED_MODULE_0__[\"greet\"]();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);