/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/components/header */ \"./src/components/header.js\");\n/* harmony import */ var _src_components_averageCalculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/components/averageCalculator */ \"./src/components/averageCalculator.js\");\n/* harmony import */ var _src_components_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/components/table */ \"./src/components/table.js\");\n/* harmony import */ var _src_css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/css/style.css */ \"./src/css/style.css\");\n;\n\n\n\n(0,_src_components_header__WEBPACK_IMPORTED_MODULE_0__.createHeader)(\"#252525\");\n(0,_src_components_table__WEBPACK_IMPORTED_MODULE_2__.createTable)(_src_components_averageCalculator__WEBPACK_IMPORTED_MODULE_1__.gradeAndStatusOfEstudants);\n\n//# sourceURL=webpack://js-modules/./index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {

eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://js-modules/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/components/averageCalculator.js":
/*!*********************************************!*\
  !*** ./src/components/averageCalculator.js ***!
  \*********************************************/
/*! namespace exports */
/*! export gradeAndStatusOfEstudants [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gradeAndStatusOfEstudants\": () => /* binding */ gradeAndStatusOfEstudants\n/* harmony export */ });\nvar classOne = [{\n  nome: \"Jonas\",\n  notas: [6, 4, 10, 8]\n}, {\n  nome: \"Adam\",\n  notas: [10, 5, 6, 9]\n}, {\n  nome: \"Marta\",\n  notas: [7, 0, 8, 10]\n}, {\n  nome: \"pedro\",\n  notas: [7, 7, 6.9]\n}, {\n  nome: \"joão\",\n  notas: [7, 9.5, 8, 10]\n}];\n\nfunction createEstudantsWithAverageAndStatus(estudantsList) {\n  function sum() {\n    var arrayOfNumbers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0];\n    return arrayOfNumbers.reduce(function (total, currentNumber) {\n      return total + currentNumber;\n    });\n  }\n\n  function average() {\n    var estudantsList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    return estudantsList.map(function (item) {\n      var grade = item.notas;\n      var divisor = grade.length;\n      var averageDone = (sum(grade) / divisor).toFixed(2);\n      return averageDone;\n    });\n  }\n\n  var averageResult = average(estudantsList);\n\n  function verifyStatus(averageResult) {\n    return averageResult.map(function (item) {\n      if (item < 7) {\n        return \"reprovado\";\n      } else {\n        return \"aprovado\";\n      }\n    });\n  }\n\n  var Status = verifyStatus(averageResult);\n\n  function createStudantsWithAverageAndStatus(estudants, average, status) {\n    var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n    return estudants.map(function (item) {\n      var estudant = new Object();\n      estudant.name = estudants.map(function (item) {\n        return item.nome;\n      })[index];\n      estudant.average = average[index];\n      estudant.status = status[index];\n      index += 1;\n      return estudant;\n    });\n  }\n\n  var estudantsResults = createStudantsWithAverageAndStatus(estudantsList, averageResult, Status);\n  return estudantsResults;\n}\n\nvar gradeAndStatusOfEstudants = createEstudantsWithAverageAndStatus(classOne);\n\n\n//# sourceURL=webpack://js-modules/./src/components/averageCalculator.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! namespace exports */
/*! export createHeader [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHeader\": () => /* binding */ createHeader\n/* harmony export */ });\n/* harmony import */ var _assets_estartandodevs_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/estartandodevs.png */ \"./src/assets/estartandodevs.png\");\nvar body = document.querySelector('body');\n\nfunction createHeader(props) {\n  var header = document.createElement(\"header\");\n  var logo = document.createElement(\"img\");\n  logo.setAttribute(\"src\", _assets_estartandodevs_png__WEBPACK_IMPORTED_MODULE_0__.default);\n  logo.setAttribute(\"class\", \".logo\");\n  header.appendChild(logo);\n  header.style.backgroundColor = props;\n  body.appendChild(header);\n}\n\n//# sourceURL=webpack://js-modules/./src/components/header.js?");

/***/ }),

/***/ "./src/components/table.js":
/*!*********************************!*\
  !*** ./src/components/table.js ***!
  \*********************************/
/*! namespace exports */
/*! export createTable [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTable\": () => /* binding */ createTable\n/* harmony export */ });\nvar body = document.querySelector('body');\nfunction createTable(EstudantsData) {\n  function giveTagAndClassForData(Data) {\n    return Data.map(function (element) {\n      var name = document.createElement(\"p\");\n      var average = document.createElement(\"p\");\n      var status = document.createElement(\"p\");\n      name.setAttribute(\"class\", \"name\");\n      average.setAttribute(\"class\", \"average\");\n\n      if (element.average < 7) {\n        status.setAttribute(\"class\", \"status-bad\");\n      } else {\n        status.setAttribute(\"class\", \"status-good\");\n      }\n\n      name.textContent = element.name;\n      average.textContent = element.average;\n      status.textContent = element.status;\n      return {\n        name: name,\n        average: average,\n        status: status\n      };\n    });\n  }\n\n  var dataReadyToGoToDocument = giveTagAndClassForData(EstudantsData);\n\n  function putDataInDocument(data) {\n    var descriptionContainer = document.createElement(\"div\");\n    descriptionContainer.setAttribute(\"class\", \"description-container\");\n    var tableName = document.createElement(\"p\");\n    var tableAverage = document.createElement(\"p\");\n    var tableStatus = document.createElement(\"p\");\n    tableName.setAttribute(\"class\", \"name\");\n    tableAverage.setAttribute(\"class\", \"average\");\n    tableStatus.setAttribute(\"class\", \"status\");\n    tableName.textContent = \"NOME\";\n    tableAverage.textContent = \"MÉDIA\";\n    tableStatus.textContent = \"STATUS\";\n    descriptionContainer.appendChild(tableName);\n    descriptionContainer.appendChild(tableAverage);\n    descriptionContainer.appendChild(tableStatus);\n    body.appendChild(descriptionContainer);\n    data.forEach(function (element) {\n      var dataContainer = document.createElement(\"div\");\n      dataContainer.setAttribute(\"class\", \"data-container\");\n      dataContainer.appendChild(element.name);\n      dataContainer.appendChild(element.average);\n      dataContainer.appendChild(element.status);\n      body.appendChild(dataContainer);\n    });\n  }\n\n  putDataInDocument(dataReadyToGoToDocument);\n}\n\n//# sourceURL=webpack://js-modules/./src/components/table.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n;\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    border: 0;\\r\\n    box-sizing: border-box;\\r\\n    -webkit-font-smoothing: antialiased;\\r\\n    font-family: 'Roboto', sans-serif;\\r\\n  }\\r\\n\\r\\nbody {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.description-container,\\r\\n.data-container {\\r\\n    display: flex;\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    box-sizing: border-box;\\r\\n    \\r\\n}\\r\\n\\r\\n.data-container:nth-child(odd) {\\r\\n    background-color: #d4d3d3;;\\r\\n}\\r\\n\\r\\n.name,\\r\\n.average,\\r\\n.status,\\r\\n.status-bad,\\r\\n.status-good\\r\\n {\\r\\n    width: 100px;\\r\\n    height: 30px;\\r\\n    padding-top: 7px;\\r\\n    margin: 0;\\r\\n    box-sizing: border-box;\\r\\n    text-align: center;\\r\\n    border: 1px solid black;\\r\\n}\\r\\n\\r\\n.status-good {\\r\\n    background-color: rgb(65, 211, 65);\\r\\n}\\r\\n\\r\\n.status-bad {\\r\\n    background-color: rgb(236, 30, 30);\\r\\n}\\r\\n\\r\\nheader {\\r\\n    width: 100%;\\r\\n    height: 100px;\\r\\n    margin-bottom: 10px;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n    width: 141px;\\r\\n    height: auto;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-modules/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n;\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://js-modules/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://js-modules/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/estartandodevs.png":
/*!***************************************!*\
  !*** ./src/assets/estartandodevs.png ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"data:image/png;base64,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\");\n\n//# sourceURL=webpack://js-modules/./src/assets/estartandodevs.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;