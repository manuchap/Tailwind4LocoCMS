/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/javascripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/javascripts/app.js":
/*!***************************************!*\
  !*** ./app/assets/javascripts/app.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stylesheets_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stylesheets/app.scss */ \"./app/assets/stylesheets/app.scss\");\n/* harmony import */ var _stylesheets_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_app_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sections_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/_manager */ \"./app/assets/javascripts/sections/_manager.js\");\n/* harmony import */ var _sections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections */ \"./app/assets/javascripts/sections/index.js\");\n// === Wagon main javascript file ===\n// Tell Webpack to load the style\n // Import the classes required to handle sections\n\n\n\ndocument.addEventListener('DOMContentLoaded', function (event) {\n  // Load all the sections\n  var sectionsManager = new _sections_manager__WEBPACK_IMPORTED_MODULE_1__[\"default\"](); // Register sections here. DO NOT REMOVE OR UPDATE THIS LINE\n\n  sectionsManager.registerSection('footer', _sections__WEBPACK_IMPORTED_MODULE_2__[\"Footer\"]);\n  sectionsManager.registerSection('newsletter', _sections__WEBPACK_IMPORTED_MODULE_2__[\"Newsletter\"]);\n  sectionsManager.registerSection('testemonials', _sections__WEBPACK_IMPORTED_MODULE_2__[\"Testemonial\"]);\n  sectionsManager.registerSection('team', _sections__WEBPACK_IMPORTED_MODULE_2__[\"Team\"]);\n  sectionsManager.registerSection('stats', _sections__WEBPACK_IMPORTED_MODULE_2__[\"Stat\"]);\n  sectionsManager.registerSection('logo_cloud', _sections__WEBPACK_IMPORTED_MODULE_2__[\"LogoCloud\"]);\n  sectionsManager.registerSection('features', _sections__WEBPACK_IMPORTED_MODULE_2__[\"Feature\"]);\n  sectionsManager.registerSection('hero', _sections__WEBPACK_IMPORTED_MODULE_2__[\"Hero\"]);\n  sectionsManager.start();\n});\n\n//# sourceURL=webpack:///./app/assets/javascripts/app.js?");

/***/ }),

/***/ "./app/assets/javascripts/sections/_manager.js":
/*!*****************************************************!*\
  !*** ./app/assets/javascripts/sections/_manager.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Manager =\n/*#__PURE__*/\nfunction () {\n  function Manager() {\n    _classCallCheck(this, Manager);\n\n    this.sections = {};\n  }\n\n  _createClass(Manager, [{\n    key: \"registerSection\",\n    value: function registerSection(type, actions) {\n      console.log(type, actions);\n      this.sections[type] = actions;\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      var _this = this;\n\n      this.eachType(function (type, actions) {\n        _this.queryAll(\"[data-locomotive-section-type=\\\"\".concat(type, \"\\\"]\")).forEach(function (section, index) {\n          _this.runAction(actions, 'load', section);\n        });\n      });\n      this.registerEvents();\n      window._sectionsManager = this;\n    }\n  }, {\n    key: \"registerEvents\",\n    value: function registerEvents() {\n      var _this2 = this;\n\n      var events = {\n        section: ['load', 'unload', 'select', 'deselect', 'reorder'],\n        block: ['select', 'deselect']\n      };\n\n      for (var namespace in events) {\n        events[namespace].forEach(function (eventType) {\n          var eventName = \"locomotive::\".concat(namespace, \"::\").concat(eventType);\n\n          var actionName = _this2.eventTypeToActionName(namespace, eventType);\n\n          document.addEventListener(eventName, function (event) {\n            _this2.applyRuleToEvent(actionName, event);\n          });\n        });\n      }\n    }\n  }, {\n    key: \"applyRuleToEvent\",\n    value: function applyRuleToEvent(actionName, event) {\n      var _event$detail = event.detail,\n          sectionId = _event$detail.sectionId,\n          blockId = _event$detail.blockId;\n      var section = document.getElementById(\"locomotive-section-\".concat(sectionId)) || this.queryOne(\"[data-locomotive-section-id=\\\"\".concat(sectionId, \"\\\"]\"));\n      var type = section.getAttribute('data-locomotive-section-type');\n      var block = this.queryOne(\"[data-locomotive-block=\\\"section-\".concat(sectionId, \"-block-\").concat(blockId, \"\\\"]\"), section);\n      this.runAction(this.sections[type], actionName, section, block);\n    }\n  }, {\n    key: \"eventTypeToActionName\",\n    value: function eventTypeToActionName(namespace, eventType) {\n      if (namespace === 'section') return eventType;else return namespace + eventType.charAt(0).toUpperCase() + eventType.slice(1);\n    }\n  }, {\n    key: \"runAction\",\n    value: function runAction(actions, actionName, section, block) {\n      var action = actions[actionName];\n      if (action !== undefined) action(section, block);\n    }\n  }, {\n    key: \"eachType\",\n    value: function eachType(callback) {\n      for (var type in this.sections) {\n        var actions = this.sections[type];\n        callback(type, actions);\n      }\n    }\n  }, {\n    key: \"queryAll\",\n    value: function queryAll(selector, scope) {\n      scope = scope ? scope : document;\n      return scope.querySelectorAll(selector);\n    }\n  }, {\n    key: \"queryOne\",\n    value: function queryOne(selector, scope) {\n      scope = scope ? scope : document;\n      return scope.querySelector(selector);\n    }\n  }, {\n    key: \"testAction\",\n    value: function testAction(eventType, section, block) {\n      var hasBlock = block !== undefined && block !== null;\n      var namespace = hasBlock ? 'block' : 'section';\n      var sectionId = section.getAttribute('id').replace('locomotive-section-', '');\n      var blockId = hasBlock ? block.getAttribute('data-locomotive-block').replace(\"section-\".concat(sectionId, \"-block-\"), '') : null;\n      var detail = {\n        detail: {\n          sectionId: sectionId,\n          blockId: blockId\n        }\n      };\n      var eventName = \"locomotive::\".concat(namespace, \"::\").concat(eventType);\n      document.dispatchEvent(new CustomEvent(eventName, detail));\n    }\n  }]);\n\n  return Manager;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Manager);\n\n//# sourceURL=webpack:///./app/assets/javascripts/sections/_manager.js?");

/***/ }),

/***/ "./app/assets/javascripts/sections/features.js":
/*!*****************************************************!*\
  !*** ./app/assets/javascripts/sections/features.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Section = {// load: (section) => {\n  // },\n  // unload: (section) => {\n  // },\n  // select: (section) => {\n  // },\n  // deselect: (section) => {\n  // },\n  // reorder: (section) => {\n  // },\n  // blockSelect: (section, block) => {\n  // },\n  // blockDeselect: (section, block) => {\n  // }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Section);\n\n//# sourceURL=webpack:///./app/assets/javascripts/sections/features.js?");

/***/ }),

/***/ "./app/assets/javascripts/sections/footer.js":
/*!***************************************************!*\
  !*** ./app/assets/javascripts/sections/footer.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Section = {// load: (section) => {\n  // },\n  // unload: (section) => {\n  // },\n  // select: (section) => {\n  // },\n  // deselect: (section) => {\n  // },\n  // reorder: (section) => {\n  // },\n  // blockSelect: (section, block) => {\n  // },\n  // blockDeselect: (section, block) => {\n  // }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Section);\n\n//# sourceURL=webpack:///./app/assets/javascripts/sections/footer.js?");

/***/ }),

/***/ "./app/assets/javascripts/sections/hero.js":
/*!*************************************************!*\
  !*** ./app/assets/javascripts/sections/hero.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Section = {// load: (section) => {\n  // },\n  // unload: (section) => {\n  // },\n  // select: (section) => {\n  // },\n  // deselect: (section) => {\n  // },\n  // reorder: (section) => {\n  // },\n  // blockSelect: (section, block) => {\n  // },\n  // blockDeselect: (section, block) => {\n  // }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Section);\n\n//# sourceURL=webpack:///./app/assets/javascripts/sections/hero.js?");

/***/ }),

/***/ "./app/assets/javascripts/sections/index.js":
/*!**************************************************!*\
  !*** ./app/assets/javascripts/sections/index.js ***!
  \**************************************************/
/*! exports provided: Hero, Feature, LogoCloud, Stat, Team, Testemonial, Newsletter, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero */ \"./app/assets/javascripts/sections/hero.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Hero\", function() { return _hero__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features */ \"./app/assets/javascripts/sections/features.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Feature\", function() { return _features__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _logo_cloud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo_cloud */ \"./app/assets/javascripts/sections/logo_cloud.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"LogoCloud\", function() { return _logo_cloud__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stats */ \"./app/assets/javascripts/sections/stats.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Stat\", function() { return _stats__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team */ \"./app/assets/javascripts/sections/team.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Team\", function() { return _team__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _testemonials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./testemonials */ \"./app/assets/javascripts/sections/testemonials.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Testemonial\", function() { return _testemonials__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _newsletter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newsletter */ \"./app/assets/javascripts/sections/newsletter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Newsletter\", function() { return _newsletter__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer */ \"./app/assets/javascripts/sections/footer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return _footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n// Import all the sections here\n//\n// Example:\n// export { default as MyAwesomeSection } from './my_awesome_section';\n//\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./app/assets/javascripts/sections/index.js?");

/***/ }),

/***/ "./app/assets/javascripts/sections/logo_cloud.js":
/*!*******************************************************!*\
  !*** ./app/assets/javascripts/sections/logo_cloud.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Section = {// load: (section) => {\n  // },\n  // unload: (section) => {\n  // },\n  // select: (section) => {\n  // },\n  // deselect: (section) => {\n  // },\n  // reorder: (section) => {\n  // },\n  // blockSelect: (section, block) => {\n  // },\n  // blockDeselect: (section, block) => {\n  // }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Section);\n\n//# sourceURL=webpack:///./app/assets/javascripts/sections/logo_cloud.js?");

/***/ }),

/***/ "./app/assets/javascripts/sections/newsletter.js":
/*!*******************************************************!*\
  !*** ./app/assets/javascripts/sections/newsletter.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Section = {// load: (section) => {\n  // },\n  // unload: (section) => {\n  // },\n  // select: (section) => {\n  // },\n  // deselect: (section) => {\n  // },\n  // reorder: (section) => {\n  // },\n  // blockSelect: (section, block) => {\n  // },\n  // blockDeselect: (section, block) => {\n  // }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Section);\n\n//# sourceURL=webpack:///./app/assets/javascripts/sections/newsletter.js?");

/***/ }),

/***/ "./app/assets/javascripts/sections/stats.js":
/*!**************************************************!*\
  !*** ./app/assets/javascripts/sections/stats.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Section = {// load: (section) => {\n  // },\n  // unload: (section) => {\n  // },\n  // select: (section) => {\n  // },\n  // deselect: (section) => {\n  // },\n  // reorder: (section) => {\n  // },\n  // blockSelect: (section, block) => {\n  // },\n  // blockDeselect: (section, block) => {\n  // }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Section);\n\n//# sourceURL=webpack:///./app/assets/javascripts/sections/stats.js?");

/***/ }),

/***/ "./app/assets/javascripts/sections/team.js":
/*!*************************************************!*\
  !*** ./app/assets/javascripts/sections/team.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Section = {// load: (section) => {\n  // },\n  // unload: (section) => {\n  // },\n  // select: (section) => {\n  // },\n  // deselect: (section) => {\n  // },\n  // reorder: (section) => {\n  // },\n  // blockSelect: (section, block) => {\n  // },\n  // blockDeselect: (section, block) => {\n  // }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Section);\n\n//# sourceURL=webpack:///./app/assets/javascripts/sections/team.js?");

/***/ }),

/***/ "./app/assets/javascripts/sections/testemonials.js":
/*!*********************************************************!*\
  !*** ./app/assets/javascripts/sections/testemonials.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Section = {// load: (section) => {\n  // },\n  // unload: (section) => {\n  // },\n  // select: (section) => {\n  // },\n  // deselect: (section) => {\n  // },\n  // reorder: (section) => {\n  // },\n  // blockSelect: (section, block) => {\n  // },\n  // blockDeselect: (section, block) => {\n  // }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Section);\n\n//# sourceURL=webpack:///./app/assets/javascripts/sections/testemonials.js?");

/***/ }),

/***/ "./app/assets/stylesheets/app.scss":
/*!*****************************************!*\
  !*** ./app/assets/stylesheets/app.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader!../../../node_modules/postcss-loader/lib!../../../node_modules/sass-loader/dist/cjs.js!./app.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/dist/cjs.js!./app/assets/stylesheets/app.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./app/assets/stylesheets/app.scss?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/dist/cjs.js!./app/assets/stylesheets/app.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/sass-loader/dist/cjs.js!./app/assets/stylesheets/app.scss ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./app/assets/stylesheets/app.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target) {\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertInto + \" \" + options.insertAt.before);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ })

/******/ });