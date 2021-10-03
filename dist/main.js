/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Expletus+Sans&family=Gruppo&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --peg-blue: #1ecbe1;\\n  --peg-green: #15ea48;\\n  --peg-yellow: #e1ec13;\\n  --peg-red: #f1200e;\\n  --peg-orange: #fa6805;\\n  --peg-purple: #ee11a4;\\n  --peg-brown: #6d2e09;\\n  --peg-black: #373338;\\n  --flag-white: #ddd7fc;\\n  --flag-red: #f2080b;\\n}\\n\\nhtml {\\n  font-family: 'Gruppo', monospace, sans-serif;\\n  font-size: 16px;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  height: 100vh;\\n  width: 100%;\\n  background: linear-gradient(-65deg, var(--peg-blue), var(--peg-green));\\n}\\n/*Main container - wrapper*/\\n.main-wrapper {\\n  height: 75%;\\n  padding: 2rem;\\n  display: grid;\\n  grid-template-columns: 2fr 2fr;\\n  grid-template-rows: 1fr 5fr 1fr;\\n}\\n/*Header*/\\n.header-section {\\n  /*Grid-area*/\\n  /*row-start/column-start/row-end/column-end:*/\\n  grid-area: 1 / 1 / 2 / 2;\\n}\\n.header-title {\\n  font-family: 'Expletus Sans', 'Gruppo', monospace;\\n  color: var(--peg-black);\\n  font-size: 3rem;\\n  text-align: center;\\n}\\n/* New game options*/\\n.new-game {\\n  grid-area: 1 / 2 / 2 / 3;\\n  display: flex;\\n  justify-content: center;\\n}\\n.difficulty,\\n.btn-new-game {\\n  border: none;\\n  font-size: 1rem;\\n  font-family: 'Expletus Sans', 'Gruppo', monospace;\\n  padding: 0.3rem 0.5rem;\\n  color: var(--flag-white);\\n  border-radius: 0.3rem;\\n  background-color: var(--peg-black);\\n  cursor: pointer;\\n}\\n.difficulty:hover,\\n.btn-new-game:hover {\\n  color: var(--peg-black);\\n  background-color: var(--flag-white);\\n}\\n/*Highscores*/\\n.high-score-display {\\n  grid-area: 2 / 2 / 3 / 3;\\n  margin: 0 auto;\\n  min-width: 25rem;\\n}\\n\\n.high-score-display h2 {\\n  font-size: 2rem;\\n  border-bottom: 0.2rem solid var(--peg-black);\\n}\\n.high-score-item {\\n  font-size: 1.5rem;\\n}\\n\\n/*COLOR PICKER*/\\n.color-picker-display {\\n  grid-area: 3 / 1 / 4 / 2;\\n  margin: 0 auto;\\n  display: flex;\\n\\n  justify-content: center;\\n  align-items: center;\\n}\\n.color-choice {\\n  height: 2.2rem;\\n  width: 2.2rem;\\n  border: 3px solid var(--peg-black);\\n  border-radius: 100%;\\n  cursor: pointer;\\n  margin: 0 0.15rem;\\n}\\n\\n/*contol btns*/\\n.control-btn {\\n  color: var(--flag-white);\\n  background-color: var(--peg-black);\\n  font-size: 1.6rem;\\n  font-weight: 800;\\n  display: inline-flex;\\n  flex-direction: column;\\n  justify-content: flex-end;\\n  align-items: center;\\n}\\n/*Game board-display*/\\n.game-board-display {\\n  grid-area: 2 / 1 / 3 / 2;\\n  margin: 0 auto;\\n}\\n\\n.game-turn {\\n  min-width: 15rem;\\n  min-height: 3rem;\\n  margin: 0.3rem 0;\\n  border-radius: 0.3rem;\\n  display: flex;\\n  justify-content: space-around;\\n  border: 0.1rem solid var(--peg-black);\\n}\\n.game-turn-pegs,\\n.game-turn-flags {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.game-turn-pegs {\\n  width: 75%;\\n}\\n.game-turn-flags {\\n  width: 20%;\\n  flex-wrap: wrap;\\n}\\n.game-turn-active {\\n  background: linear-gradient(90deg, #f4fc84, #fcc796);\\n}\\n.game-turn-miss {\\n  background: linear-gradient(90deg, #9de8f1, #88f1a0);\\n}\\n.game-turn-win {\\n}\\n.game-turn-miss {\\n}\\n\\n.color-peg {\\n  width: 2rem;\\n  height: 2rem;\\n}\\n.color-flag {\\n  width: 0.6rem;\\n  height: 0.6rem;\\n}\\n/* highscors */\\n.high-score-item {\\n  display: flex;\\n  justify-content: space-around;\\n}\\n/*overlay*/\\n.overlay {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  height: 100vh;\\n  width: 100%;\\n  background-color: #373338d7;\\n  filter: blur(10rem);\\n  z-index: 5;\\n}\\n.alert label {\\n  display: block;\\n}\\n.alert {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  z-index: 10;\\n  min-width: 25rem;\\n  height: 15rem;\\n  background-color: var(--peg-black);\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  border-radius: 1rem;\\n}\\n#user-name {\\n  font-family: inherit;\\n  font-weight: 800;\\n  border: none;\\n  font-size: 1.3rem;\\n}\\n.btn-submit-highscore {\\n  display: inline-block;\\n  font-family: 'Expletus Sans', 'Gruppo', monospace;\\n  font-size: 1.2rem;\\n  border: none;\\n  position: relative;\\n  bottom: 1px;\\n}\\n.btn-submit-highscore:hover,\\n.btn-submit-highscore:active {\\n  background-color: var(--peg-green);\\n}\\n.btn-close-alert {\\n  position: absolute;\\n  top: 1rem;\\n  right: 1rem;\\n  width: 2rem;\\n  height: 2rem;\\n  border-radius: 10rem;\\n  background: none;\\n  border: none;\\n  color: var(--flag-white);\\n  font-size: 1.5rem;\\n  font-family: 'Expletus Sans', 'Gruppo', monospace;\\n}\\n.btn-close-alert:hover,\\n.btn-close-alert:active {\\n  background-color: var(--flag-white);\\n  color: var(--flag-black);\\n}\\n.message,\\nlabel {\\n  font-family: 'Expletus Sans', 'Gruppo', monospace;\\n  color: var(--flag-white);\\n  font-size: 1.3rem;\\n}\\n.secret-container {\\n  display: flex;\\n}\\n\\n.hidden {\\n  visibility: hidden;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mastermind/./src/css/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/ \\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\n\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\nbody {\\n  line-height: 1;\\n}\\nol,\\nul {\\n  list-style: none;\\n}\\nblockquote,\\nq {\\n  quotes: none;\\n}\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mastermind/./src/css/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://mastermind/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://mastermind/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://mastermind/./src/css/main.css?");

/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/reset.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://mastermind/./src/css/reset.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://mastermind/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://mastermind/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://mastermind/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://mastermind/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://mastermind/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://mastermind/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/codeMaker.js":
/*!*****************************!*\
  !*** ./src/js/codeMaker.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/js/config.js\");\n\nclass CodeMaker {\n  #colors = [..._config_js__WEBPACK_IMPORTED_MODULE_0__.COLORS];\n\n  #randomNumOf(endNum) {\n    return Math.floor(Math.random() * endNum);\n  }\n\n  #getColor(highNum) {\n    return this.#colors[this.#randomNumOf(highNum)];\n  }\n\n  #makeCode(codeLength, colorChoice) {\n    return Array.from({ length: codeLength }, () =>\n      this.#getColor(colorChoice)\n    );\n  }\n\n  createCode(difficulty = 'normal') {\n    const { codeLength, colorChoice } = _config_js__WEBPACK_IMPORTED_MODULE_0__.GAME_MODE[difficulty];\n    return this.#makeCode(codeLength, colorChoice);\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new CodeMaker());\n\n\n//# sourceURL=webpack://mastermind/./src/js/codeMaker.js?");

/***/ }),

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"COLORS\": () => (/* binding */ COLORS),\n/* harmony export */   \"GAME_MODE\": () => (/* binding */ GAME_MODE),\n/* harmony export */   \"TURNS\": () => (/* binding */ TURNS)\n/* harmony export */ });\n//prettier-ignore\nconst COLORS = [\n  'blue', 'green', 'yellow', 'red', 'orange', 'purple', 'brown', 'black',\n];\n//Game mode, length of code to break, out of how much possible colors there is\nconst GAME_MODE = {\n  easy: { codeLength: 3, colorChoice: 4 },\n  normal: { codeLength: 4, colorChoice: 6 },\n  hard: { codeLength: 5, colorChoice: 8 },\n};\n\nconst TURNS = 10;\n\n\n//# sourceURL=webpack://mastermind/./src/js/config.js?");

/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"capitalize\": () => (/* binding */ capitalize),\n/* harmony export */   \"formatTime\": () => (/* binding */ formatTime)\n/* harmony export */ });\nconst capitalize = function (string) {\n  return string[0].toUpperCase() + string.slice(1);\n};\n\nconst formatTime = function (mills) {\n  const seconds = `${Math.floor((mills / 1000) % 60)}`.padStart(2, 0);\n  const minutes = `${Math.floor((mills / 1000 / 60) % 60)}`.padStart(2, 0);\n  const hours = `${Math.floor((mills / 1000 / 3600) % 24)}`.padStart(2, 0);\n  return `${hours == '00' ? '' : `${hours}:`}${minutes}:${seconds}`;\n};\n\n\n//# sourceURL=webpack://mastermind/./src/js/helpers.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/reset.css */ \"./src/css/reset.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.js */ \"./src/js/config.js\");\n/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model.js */ \"./src/js/model.js\");\n/* harmony import */ var _codeMaker_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./codeMaker.js */ \"./src/js/codeMaker.js\");\n/* harmony import */ var _views_boardView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/boardView.js */ \"./src/js/views/boardView.js\");\n/* harmony import */ var _views_controlsView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/controlsView.js */ \"./src/js/views/controlsView.js\");\n/* harmony import */ var _views_pegsView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/pegsView.js */ \"./src/js/views/pegsView.js\");\n/* harmony import */ var _views_newGameView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/newGameView.js */ \"./src/js/views/newGameView.js\");\n/* harmony import */ var _views_turnView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/turnView.js */ \"./src/js/views/turnView.js\");\n/* harmony import */ var _views_highScoreView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/highScoreView.js */ \"./src/js/views/highScoreView.js\");\n/* harmony import */ var _views_alertView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/alertView.js */ \"./src/js/views/alertView.js\");\n\n\n\n//\n\n\n\n\n\n\n\n\n\n\n\n//INITIALIZE NEW GAME\nconst controlDifficulty = function (difficulty) {\n  _model_js__WEBPACK_IMPORTED_MODULE_3__.setDifficulty(difficulty);\n  startNewGame();\n};\n//Set up new game\nconst startNewGame = function () {\n  _model_js__WEBPACK_IMPORTED_MODULE_3__.state.userCode = [];\n  _model_js__WEBPACK_IMPORTED_MODULE_3__.state.turn = 0;\n  _model_js__WEBPACK_IMPORTED_MODULE_3__.state.timeStart = new Date();\n  //Create secret code\n  const secretCode = _codeMaker_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].createCode(_model_js__WEBPACK_IMPORTED_MODULE_3__.state.difficulty);\n  _model_js__WEBPACK_IMPORTED_MODULE_3__.setSecretCode(secretCode);\n  console.log('🤫', _model_js__WEBPACK_IMPORTED_MODULE_3__.state.secretCode); //TODO remove this line\n  _views_boardView_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].createBoard(_model_js__WEBPACK_IMPORTED_MODULE_3__.state.difficulty);\n  _views_turnView_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"].updateTurnStyle(_model_js__WEBPACK_IMPORTED_MODULE_3__.state.turn);\n  _views_controlsView_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].createControls(_model_js__WEBPACK_IMPORTED_MODULE_3__.state.difficulty);\n  _views_controlsView_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].addHandlerControlClick(controlsController);\n  _views_highScoreView_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"].updateHighScores(\n    _model_js__WEBPACK_IMPORTED_MODULE_3__.state.difficulty,\n    _model_js__WEBPACK_IMPORTED_MODULE_3__.state.highScores[_model_js__WEBPACK_IMPORTED_MODULE_3__.state.difficulty]\n  );\n\n  // document\n  //   .querySelector('.color-picker-display')\n  //   .removeEventListener('click', controlsController, false);\n  //\n  //display high scores TODO\n  //clean game state TODO\n};\n\n_views_newGameView_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"].newGameDifficulty(controlDifficulty);\n\n//////////////////////\nconst controlsController = function (btn) {\n  if (btn.dataset?.control === 'submit') {\n    const flags = _model_js__WEBPACK_IMPORTED_MODULE_3__.compareCodes(\n      _model_js__WEBPACK_IMPORTED_MODULE_3__.state.userCode,\n      _model_js__WEBPACK_IMPORTED_MODULE_3__.state.secretCode\n    );\n    gameEngine(flags);\n    return;\n  }\n  if (btn.dataset?.control === 'undo') {\n    if (_model_js__WEBPACK_IMPORTED_MODULE_3__.state.userCode.length < 1) return;\n    _model_js__WEBPACK_IMPORTED_MODULE_3__.state.userCode.pop();\n    _views_pegsView_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].renderPegs(_model_js__WEBPACK_IMPORTED_MODULE_3__.state.turn, _model_js__WEBPACK_IMPORTED_MODULE_3__.state.userCode);\n    return;\n  }\n  const color = btn.dataset.colorPick;\n  if (\n    _model_js__WEBPACK_IMPORTED_MODULE_3__.state.userCode.length < _config_js__WEBPACK_IMPORTED_MODULE_2__.GAME_MODE[_model_js__WEBPACK_IMPORTED_MODULE_3__.state.difficulty].codeLength\n  ) {\n    _model_js__WEBPACK_IMPORTED_MODULE_3__.state.userCode.push(color);\n  } else {\n    return;\n  }\n  _views_pegsView_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].renderPegs(_model_js__WEBPACK_IMPORTED_MODULE_3__.state.turn, _model_js__WEBPACK_IMPORTED_MODULE_3__.state.userCode);\n};\n\nconst getFlags = function (redFlags, whiteFlags) {\n  const red = 'red '.repeat(redFlags);\n  const white = 'white '.repeat(whiteFlags);\n  return (red + white).trim().split(' ');\n};\n\nconst gameEngine = function (flagsArray) {\n  //display flags\n  _views_pegsView_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].renderFlags(\n    _model_js__WEBPACK_IMPORTED_MODULE_3__.state.turn,\n    getFlags(flagsArray[0], flagsArray[1])\n  );\n  //Correct guess 4 red flags\n  if (flagsArray[0] === _config_js__WEBPACK_IMPORTED_MODULE_2__.GAME_MODE[_model_js__WEBPACK_IMPORTED_MODULE_3__.state.difficulty].codeLength) {\n    _model_js__WEBPACK_IMPORTED_MODULE_3__.state.time = new Date() - _model_js__WEBPACK_IMPORTED_MODULE_3__.state.timeStart;\n    _views_alertView_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"].winAlert();\n    _views_alertView_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"].addHandlerSubmit(controlUserName);\n    return;\n  }\n  //Incorrect guess\n  _views_turnView_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"].updateTurnStyle(_model_js__WEBPACK_IMPORTED_MODULE_3__.state.turn, false);\n  _model_js__WEBPACK_IMPORTED_MODULE_3__.incrementTurn();\n  _model_js__WEBPACK_IMPORTED_MODULE_3__.resetUserCode();\n  //Game over, all turns used\n  if (_model_js__WEBPACK_IMPORTED_MODULE_3__.state.turn === _config_js__WEBPACK_IMPORTED_MODULE_2__.TURNS) {\n    _views_alertView_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"].loseAlert(_model_js__WEBPACK_IMPORTED_MODULE_3__.state.secretCode, _model_js__WEBPACK_IMPORTED_MODULE_3__.state.difficulty);\n    _views_alertView_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"].closeAlert();\n    return;\n  }\n  _views_turnView_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"].updateTurnStyle(_model_js__WEBPACK_IMPORTED_MODULE_3__.state.turn);\n};\n\nconst controlUserName = function (userName) {\n  _model_js__WEBPACK_IMPORTED_MODULE_3__.addHighScore(userName, _model_js__WEBPACK_IMPORTED_MODULE_3__.state.turn + 1, _model_js__WEBPACK_IMPORTED_MODULE_3__.state.time);\n  _views_highScoreView_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"].updateHighScores(\n    _model_js__WEBPACK_IMPORTED_MODULE_3__.state.difficulty,\n    _model_js__WEBPACK_IMPORTED_MODULE_3__.state.highScores[_model_js__WEBPACK_IMPORTED_MODULE_3__.state.difficulty]\n  );\n  _views_alertView_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"].toggleAlert();\n};\n\n\n//# sourceURL=webpack://mastermind/./src/js/index.js?");

/***/ }),

/***/ "./src/js/model.js":
/*!*************************!*\
  !*** ./src/js/model.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"state\": () => (/* binding */ state),\n/* harmony export */   \"setDifficulty\": () => (/* binding */ setDifficulty),\n/* harmony export */   \"setSecretCode\": () => (/* binding */ setSecretCode),\n/* harmony export */   \"incrementTurn\": () => (/* binding */ incrementTurn),\n/* harmony export */   \"resetUserCode\": () => (/* binding */ resetUserCode),\n/* harmony export */   \"compareCodes\": () => (/* binding */ compareCodes),\n/* harmony export */   \"addHighScore\": () => (/* binding */ addHighScore)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/js/config.js\");\n\n\nconst state = {\n  difficulty: 'normal', //TODO empty string, user sets this with new game\n  turn: 0,\n  timeStart: null,\n  time: null,\n  secretCode: [],\n  userCode: [],\n  highScores: {\n    easy: [],\n    normal: [],\n    hard: [],\n  },\n};\n\nconst setDifficulty = function (difficulty) {\n  state.difficulty = difficulty;\n};\n\nconst setSecretCode = function (codeArray) {\n  state.secretCode = codeArray;\n};\n\nconst incrementTurn = function () {\n  state.turn++;\n};\n\nconst resetUserCode = function () {\n  state.userCode = [];\n};\n\nconst compareCodes = function (playerCode, secretCode) {\n  let redFlags = 0;\n  let whiteFlags = 0;\n  //Temp array to mark colors selected with red or white flag\n  const result = Array.from(\n    { length: _config_js__WEBPACK_IMPORTED_MODULE_0__.GAME_MODE[state.difficulty].codeLength },\n    () => null\n  );\n  //Find red flags\n  for (const [i, color] of playerCode.entries()) {\n    if (color === secretCode[i]) {\n      result[i] = color;\n      redFlags++;\n    }\n  }\n  //Find white flags\n  for (const [i, color] of playerCode.entries()) {\n    if (\n      result.filter(ele => ele === color).length ===\n      secretCode.filter(ele => ele === color).length\n    )\n      continue;\n    if (result[i]) continue;\n    if (secretCode.includes(color)) {\n      result[i] = color;\n      whiteFlags++;\n    }\n  }\n  return [redFlags, whiteFlags];\n};\n\nconst storageHighScores = function () {\n  localStorage.setItem('highscores', JSON.stringify(state.highScores));\n};\n\nconst addHighScore = function (userName, moves, time) {\n  state.highScores[state.difficulty].push({ userName, moves, time });\n  //using arrays mutate feature to sort in place\n  sortHighScores(state.highScores[state.difficulty]);\n  storageHighScores();\n};\n\nconst init = function () {\n  const storage = localStorage.getItem('highscores');\n  if (storage) state.highScores = JSON.parse(storage);\n};\ninit();\n\nconst clearStorage = function () {\n  localStorage.clear('highscores');\n};\n\nconst sortHighScores = function (array) {\n  return array.sort((a, b) => {\n    if (a.moves > b.moves) return 1;\n    if (a.moves < b.moves) return -1;\n    if (a.time > b.time) return 1;\n    if (a.time < b.time) return -1;\n  });\n};\n\n// clearStorage();\n\n\n//# sourceURL=webpack://mastermind/./src/js/model.js?");

/***/ }),

/***/ "./src/js/views/alertView.js":
/*!***********************************!*\
  !*** ./src/js/views/alertView.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./src/js/config.js\");\n/* harmony import */ var _boardView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boardView.js */ \"./src/js/views/boardView.js\");\n/* harmony import */ var _pegsView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pegsView.js */ \"./src/js/views/pegsView.js\");\n\n\n\nclass AlertView {\n  #parentElement = document.querySelector('.alert');\n  #overlay = document.querySelector('.overlay');\n\n  winAlert() {\n    this.#parentElement.innerHTML = '';\n    const html = `\n      <p class=\"message\">You broke the code! 🥳</p>\n      <form>\n        <label for=\"user-name\">Enter Name</label>\n        <input type=\"text\" id=\"user-name\" />\n        <button class=\"btn-submit-highscore\">Submit</button>\n      </form>\n    `;\n    this.#parentElement.insertAdjacentHTML('afterbegin', html); //TODO\n    this.toggleAlert();\n  }\n\n  addHandlerSubmit(handler) {\n    document\n      .querySelector('.btn-submit-highscore')\n      .addEventListener('click', function (e) {\n        e.preventDefault();\n        const userName =\n          document.querySelector('#user-name').value || 'Unknown';\n        handler(userName);\n      });\n  }\n\n  loseAlert(secretCode, difficulty) {\n    this.#parentElement.innerHTML = '';\n    const html = `\n      <button class=\"btn-close-alert\">X</button>\n      <p class=\"message\">Sorry! You didn't break the code!</p>\n      <p class=\"message\">Secret code was:</p>\n      <div class=\"secret-container\">\n      ${_boardView_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createPegs('secret', difficulty)}\n      </div>\n      \n    `;\n    this.#parentElement.insertAdjacentHTML('afterbegin', html); //TODO\n    this.toggleAlert();\n    _pegsView_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderSecretCode(secretCode);\n  }\n\n  closeAlert() {\n    this.#parentElement.querySelector('.btn-close-alert').addEventListener(\n      'click',\n      function () {\n        this.toggleAlert();\n      }.bind(this)\n    );\n  }\n\n  toggleAlert() {\n    this.#parentElement.classList.toggle('hidden');\n    this.#overlay.classList.toggle('hidden');\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AlertView());\n\n\n//# sourceURL=webpack://mastermind/./src/js/views/alertView.js?");

/***/ }),

/***/ "./src/js/views/boardView.js":
/*!***********************************!*\
  !*** ./src/js/views/boardView.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/js/config.js\");\n\n\nclass BoardView {\n  #parentElement = document.querySelector('.game-board-display');\n\n  createBoard(difficulty) {\n    this.#parentElement.innerHTML = '';\n    for (let i = 0; i < _config__WEBPACK_IMPORTED_MODULE_0__.TURNS; i++) {\n      const html = `\n        <div class=\"game-turn\" data-turn=\"${i}\">\n          <div class=\"game-turn-pegs\">\n            ${this.createPegs('peg', difficulty)}\n          </div>\n          <div class=\"game-turn-flags\">\n            ${this.createPegs('flag', difficulty)}\n          </div>\n        </div>\n      `;\n      this.#parentElement.insertAdjacentHTML('afterbegin', html);\n    }\n  }\n\n  createPegs(dataSetValue, difficulty) {\n    let html = '';\n    for (let i = 0; i < _config__WEBPACK_IMPORTED_MODULE_0__.GAME_MODE[difficulty].codeLength; i++) {\n      html += `\n        <div \n          class=\"color-choice color-${dataSetValue}\" \n          data-${dataSetValue}=\"${i}\">\n        </div>`;\n    }\n    return html;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new BoardView());\n\n\n//# sourceURL=webpack://mastermind/./src/js/views/boardView.js?");

/***/ }),

/***/ "./src/js/views/controlsView.js":
/*!**************************************!*\
  !*** ./src/js/views/controlsView.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./src/js/config.js\");\n\n\nclass ControlsView {\n  #parentElement = document.querySelector('.color-picker-display');\n\n  addHandlerControlClick(handler) {\n    this.#parentElement.addEventListener('click', function (e) {\n      const btn = e.target.closest('.color-choice');\n      if (!btn) return;\n      handler(btn);\n    });\n  }\n\n  createControls(difficulty) {\n    this.#parentElement.innerHTML = '';\n\n    let html = '';\n    for (let i = 0; i < _config_js__WEBPACK_IMPORTED_MODULE_0__.GAME_MODE[difficulty].colorChoice; i++) {\n      html += `\n      <button \n        class=\"color-choice\" \n        data-color-pick=\"${_config_js__WEBPACK_IMPORTED_MODULE_0__.COLORS[i]}\" \n        style=\"background-color:var(--peg-${_config_js__WEBPACK_IMPORTED_MODULE_0__.COLORS[i]});\">\n      </button>\n    `;\n    }\n\n    html += `\n    <button \n      class=\"color-choice control-btn\" \n      data-control=\"undo\">&#9100; \n    </button>\n    <button \n      class=\"color-choice control-btn\" \n      data-control=\"submit\">&#9094;\n    </button>\n  `;\n    this.#parentElement.insertAdjacentHTML('beforeend', html);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ControlsView());\n\n\n//# sourceURL=webpack://mastermind/./src/js/views/controlsView.js?");

/***/ }),

/***/ "./src/js/views/highScoreView.js":
/*!***************************************!*\
  !*** ./src/js/views/highScoreView.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers.js */ \"./src/js/helpers.js\");\n\nclass HighScoresView {\n  #title = document.querySelector('.game-mode');\n  #parentElement = document.querySelector('.high-score-container');\n\n  updateHighScores(difficulty, data) {\n    this.#title.textContent = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.capitalize)(difficulty);\n    this.#parentElement.innerHTML = '';\n    data.forEach(ele => {\n      const html = `\n        <li class=\"high-score-item\">\n          <span class=\"high-score-username\">${ele.userName}</span>\n          <span class=\"high-score-moves\">${ele.moves} moves</span> \n          <span class=\"high-score-time\">${(0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.formatTime)(+ele.time)}</span>\n        </li>\n      `;\n      this.#parentElement.insertAdjacentHTML('beforeend', html);\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new HighScoresView());\n\n\n//# sourceURL=webpack://mastermind/./src/js/views/highScoreView.js?");

/***/ }),

/***/ "./src/js/views/newGameView.js":
/*!*************************************!*\
  !*** ./src/js/views/newGameView.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass NewGameView {\n  #btnNewGame = document.querySelector('.btn-new-game');\n\n  newGameDifficulty(handler) {\n    this.#btnNewGame.addEventListener('click', function (e) {\n      e.preventDefault();\n      const difficulty = document.querySelector('select').value;\n      handler(difficulty);\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new NewGameView());\n\n\n//# sourceURL=webpack://mastermind/./src/js/views/newGameView.js?");

/***/ }),

/***/ "./src/js/views/pegsView.js":
/*!**********************************!*\
  !*** ./src/js/views/pegsView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass PegsView {\n  renderPegs(currentTurn, pegs) {\n    const box = document.querySelector(`[data-turn=\"${currentTurn}\"]`);\n    //This is for undo button logic\n    box.querySelectorAll('[data-peg]').forEach(peg => {\n      peg.style.backgroundColor = 'inherit';\n    });\n    pegs.forEach((color, i) => {\n      const pin = box.querySelector(`[data-peg=\"${i}\"]`);\n      pin.style.backgroundColor = `var(--peg-${color})`;\n    });\n  }\n\n  renderFlags(currentTurn, flags) {\n    const box = document.querySelector(`[data-turn=\"${currentTurn}\"]`);\n    flags.forEach((color, i) => {\n      const pin = box.querySelector(`[data-flag=\"${i}\"]`);\n      pin.style.backgroundColor = `var(--flag-${color})`;\n    });\n  }\n\n  renderSecretCode(codeArr) {\n    const box = document.querySelector('.alert');\n    codeArr.forEach((color, i) => {\n      const pin = box.querySelector(`[data-secret=\"${i}\"]`);\n      pin.style.backgroundColor = `var(--peg-${color})`;\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new PegsView());\n\n\n//# sourceURL=webpack://mastermind/./src/js/views/pegsView.js?");

/***/ }),

/***/ "./src/js/views/turnView.js":
/*!**********************************!*\
  !*** ./src/js/views/turnView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass TurnView {\n  #active = 'game-turn-active';\n  #miss = 'game-turn-miss';\n  updateTurnStyle(currentTurn, active = true) {\n    const box = document.querySelector(`[data-turn=\"${currentTurn}\"]`);\n    box.classList.add(`${active ? this.#active : this.#miss}`);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new TurnView());\n\n\n//# sourceURL=webpack://mastermind/./src/js/views/turnView.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;