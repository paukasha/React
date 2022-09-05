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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n    var list = []; // return the list of modules as css string\n    list.toString = function toString() {\n        return this.map(function (item) {\n            var content = cssWithMappingToString(item, useSourceMap);\n            if (item[2]) {\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n            }\n            return content;\n        }).join('');\n    }; // import a list of modules into the list\n    // eslint-disable-next-line func-names\n    list.i = function (modules, mediaQuery, dedupe) {\n        if (typeof modules === 'string') {\n            // eslint-disable-next-line no-param-reassign\n            modules = [[null, modules, '']];\n        }\n        var alreadyImportedModules = {};\n        if (dedupe) {\n            for (var i = 0; i < this.length; i++) {\n                // eslint-disable-next-line prefer-destructuring\n                var id = this[i][0];\n                if (id != null) {\n                    alreadyImportedModules[id] = true;\n                }\n            }\n        }\n        for (var _i = 0; _i < modules.length; _i++) {\n            var item = [].concat(modules[_i]);\n            if (dedupe && alreadyImportedModules[item[0]]) {\n                // eslint-disable-next-line no-continue\n                continue;\n            }\n            if (mediaQuery) {\n                if (!item[2]) {\n                    item[2] = mediaQuery;\n                }\n                else {\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n                }\n            }\n            list.push(item);\n        }\n    };\n    return list;\n};\nfunction cssWithMappingToString(item, useSourceMap) {\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n    var cssMapping = item[3];\n    if (!cssMapping) {\n        return content;\n    }\n    if (useSourceMap && typeof btoa === 'function') {\n        var sourceMapping = toComment(cssMapping);\n        var sourceURLs = cssMapping.sources.map(function (source) {\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n        });\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n    }\n    return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n    // eslint-disable-next-line no-undef\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    return \"/*# \".concat(data, \" */\");\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\n__webpack_require__(/*! ./shared/main.global.css */ \"./src/shared/main.global.css\");\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\nvar Layout_1 = __webpack_require__(/*! ./shared/base-components/Layout */ \"./src/shared/base-components/Layout/index.ts\");\nvar Header_1 = __webpack_require__(/*! ./shared/components/Header */ \"./src/shared/components/Header/index.ts\");\nvar Content_1 = __webpack_require__(/*! ./shared/base-components/Content */ \"./src/shared/base-components/Content/index.ts\");\nvar CardsList_1 = __webpack_require__(/*! ./shared/lists/CardsList */ \"./src/shared/lists/CardsList/index.ts\");\nvar generateRandomIndex_1 = __webpack_require__(/*! ./utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\nvar store_1 = __webpack_require__(/*! ./store */ \"./src/store.ts\");\nvar LIST = [\n    { As: 'li', text: 'some' },\n    { As: 'li', text: 'other some' },\n    { As: 'li', text: 'some' }\n].map(generateRandomIndex_1.generateId);\nvar store = (0, redux_1.createStore)(store_1.rootReducer, (0, redux_devtools_extension_1.composeWithDevTools)());\nfunction AppComponent() {\n    var _a = react_1.default.useState(LIST), list = _a[0], setList = _a[1];\n    var handleItemClick = function (id) {\n        setList(list.filter(function (item) { return item.id != id; }));\n    };\n    var handleAdd = function () {\n        setList(list.concat((0, generateRandomIndex_1.generateId)({ text: (0, generateRandomIndex_1.generateRandomString)(), As: 'li' })));\n    };\n    return (react_1.default.createElement(Layout_1.Layout, null,\n        react_1.default.createElement(Header_1.Header, null),\n        react_1.default.createElement(Content_1.Content, null,\n            react_1.default.createElement(CardsList_1.CardsList, null),\n            react_1.default.createElement(\"br\", null))));\n}\nexports.App = (0, root_1.hot)(function () { return react_1.default.createElement(AppComponent, null); });\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useUserData = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar tokenContext_1 = __webpack_require__(/*! ../shared/base-components/context/tokenContext */ \"./src/shared/base-components/context/tokenContext.ts\");\nfunction useUserData() {\n    var _a = (0, react_1.useState)({}), data = _a[0], setData = _a[1];\n    var token = (0, react_1.useContext)(tokenContext_1.tokenContext);\n    (0, react_1.useEffect)(function () {\n        axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\n            headers: { Authorization: \"bearer \".concat(token) }\n        })\n            .then(function (resp) {\n            var userData = resp.data;\n            setData({ name: userData.name, iconImg: userData.icon_img });\n        })\n            .catch(console.log);\n    }, [token]);\n    return [data];\n}\nexports.useUserData = useUserData;\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.indexTemplate = void 0;\nvar indexTemplate = function (content, token) { return \"\\n  <!DOCTYPE html>\\n  <html lang=\\\"ru\\\">\\n\\n  <head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>Reddit</title>\\n    <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n    <script>\\n      window.__token__ = '\".concat(token, \"'\\n    </script>\\n  </head>\\n\\n  <body>\\n    <div id=\\\"react_root\\\">\").concat(content, \"</div>\\n<!--    <div id=\\\"modal_root\\\"></div>-->\\n  </body>\\n\\n  </html>\\n\"); };\nexports.indexTemplate = indexTemplate;\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar app = (0, express_1.default)();\napp.use('/static', express_1.default.static('./dist/client'));\napp.get('/', function (req, res) {\n    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)())));\n});\napp.get('/auth', function (req, res) {\n    axios_1.default.post('https://www.reddit.com/api/v1/access_token', \"grant_type=authorization_code&code=\".concat(req.query.code, \"&redirect_uri=http://localhost:3000/auth\"), {\n        auth: { username: 'BNksSH8XZFA7iA', password: 'znd-6OHLzgvP3c4yHUjI5kaVuadZUg' },\n        headers: { 'Content-type': 'application/x-www-form-urlencoded' }\n    })\n        .then(function (_a) {\n        var data = _a.data;\n        res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)()), data['access_token']));\n    })\n        .catch(console.log);\n});\napp.listen(3000, function () {\n    console.log('Server started on http://localhost:3000');\n});\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/base-components/Break/Break.tsx":
/*!****************************************************!*\
  !*** ./src/shared/base-components/Break/Break.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Break = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar break_css_1 = __importDefault(__webpack_require__(/*! ./break.css */ \"./src/shared/base-components/Break/break.css\"));\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\nfunction Break(props) {\n    var _a, _b, _c, _d, _e;\n    var _f = props.inline, inline = _f === void 0 ? false : _f, _g = props.top, top = _g === void 0 ? false : _g, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;\n    return (react_1.default.createElement(\"div\", { className: (0, classnames_1.default)(break_css_1.default[\"s\".concat(size)], (_a = {}, _a[break_css_1.default[\"mobile_s\".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[break_css_1.default[\"tablet_s\".concat(mobileSize)]] = tabletSize, _b), (_c = {}, _c[break_css_1.default[\"desktop_s\".concat(mobileSize)]] = desktopSize, _c), (_d = {}, _d[break_css_1.default.inline] = inline, _d), (_e = {}, _e[break_css_1.default.top] = top, _e)) }));\n}\nexports.Break = Break;\n\n\n//# sourceURL=webpack:///./src/shared/base-components/Break/Break.tsx?");

/***/ }),

/***/ "./src/shared/base-components/Break/break.css":
/*!****************************************************!*\
  !*** ./src/shared/base-components/Break/break.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s\": \"break__s--1Mxc3\",\n\t\"inline\": \"break__inline--1hxlP\",\n\t\"top\": \"break__top--140Gn\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/base-components/Break/break.css?");

/***/ }),

/***/ "./src/shared/base-components/Break/index.ts":
/*!***************************************************!*\
  !*** ./src/shared/base-components/Break/index.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Break */ \"./src/shared/base-components/Break/Break.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/base-components/Break/index.ts?");

/***/ }),

/***/ "./src/shared/base-components/Content/Content.tsx":
/*!********************************************************!*\
  !*** ./src/shared/base-components/Content/Content.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Content = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/base-components/Content/content.css\"));\nfunction Content(props) {\n    return (react_1.default.createElement(\"main\", { className: content_css_1.default.content }, props.children));\n}\nexports.Content = Content;\n\n\n//# sourceURL=webpack:///./src/shared/base-components/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/base-components/Content/content.css":
/*!********************************************************!*\
  !*** ./src/shared/base-components/Content/content.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--1GtTW\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/base-components/Content/content.css?");

/***/ }),

/***/ "./src/shared/base-components/Content/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/base-components/Content/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/base-components/Content/Content.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/base-components/Content/index.ts?");

/***/ }),

/***/ "./src/shared/base-components/Layout/Layout.tsx":
/*!******************************************************!*\
  !*** ./src/shared/base-components/Layout/Layout.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Layout = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/base-components/Layout/layout.css\"));\nfunction Layout(_a) {\n    var children = _a.children;\n    return (react_1.default.createElement(\"div\", { className: layout_css_1.default.layout }, children));\n}\nexports.Layout = Layout;\n\n\n//# sourceURL=webpack:///./src/shared/base-components/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/base-components/Layout/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/base-components/Layout/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/base-components/Layout/Layout.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/base-components/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/base-components/Layout/layout.css":
/*!******************************************************!*\
  !*** ./src/shared/base-components/Layout/layout.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"layout__container--3Icad\",\n\t\"layout\": \"layout__layout--1uNXK\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/base-components/Layout/layout.css?");

/***/ }),

/***/ "./src/shared/base-components/Text/Text.tsx":
/*!**************************************************!*\
  !*** ./src/shared/base-components/Text/Text.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Text = exports.EColor = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar text_css_1 = __importDefault(__webpack_require__(/*! ./text.css */ \"./src/shared/base-components/Text/text.css\"));\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\nvar EColor;\n(function (EColor) {\n    EColor[\"black\"] = \"black\";\n    EColor[\"orange\"] = \"orange\";\n    EColor[\"green\"] = \"green\";\n    EColor[\"white\"] = \"white\";\n    EColor[\"greyF3\"] = \"greyF3\";\n    EColor[\"greyF4\"] = \"greyF4\";\n    EColor[\"greyD9\"] = \"greyD9\";\n    EColor[\"greyC4\"] = \"greyC4\";\n    EColor[\"grey99\"] = \"grey99\";\n    EColor[\"grey66\"] = \"grey66\";\n})(EColor = exports.EColor || (exports.EColor = {}));\nfunction Text(props) {\n    var _a, _b, _c, _d;\n    var _e = props.As, As = _e === void 0 ? 'span' : _e, _f = props.color, color = _f === void 0 ? EColor.black : _f, _g = props.bold, bold = _g === void 0 ? false : _g, children = props.children, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;\n    var classes = (0, classnames_1.default)(text_css_1.default[\"s\".concat(size)], (_a = {}, _a[text_css_1.default.bold] = bold, _a), (_b = {}, _b[text_css_1.default[\"m\".concat(mobileSize)]] = mobileSize, _b), (_c = {}, _c[text_css_1.default[\"t\".concat(tabletSize)]] = tabletSize, _c), (_d = {}, _d[text_css_1.default[\"d\".concat(desktopSize)]] = desktopSize, _d), text_css_1.default[color]);\n    return (react_1.default.createElement(As, { className: classes }, children));\n}\nexports.Text = Text;\n\n\n//# sourceURL=webpack:///./src/shared/base-components/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/base-components/Text/index.ts":
/*!**************************************************!*\
  !*** ./src/shared/base-components/Text/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Text */ \"./src/shared/base-components/Text/Text.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/base-components/Text/index.ts?");

/***/ }),

/***/ "./src/shared/base-components/Text/text.css":
/*!**************************************************!*\
  !*** ./src/shared/base-components/Text/text.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s28\": \"text__s28--2SnBX\",\n\t\"s20\": \"text__s20--mnaTo\",\n\t\"s16\": \"text__s16--12D9d\",\n\t\"s14\": \"text__s14--105ZQ\",\n\t\"s12\": \"text__s12--3ksyT\",\n\t\"s10\": \"text__s10--3g28v\",\n\t\"bold\": \"text__bold--3FdUw\",\n\t\"black\": \"text__black--286cE\",\n\t\"orange\": \"text__orange--3kgKC\",\n\t\"white\": \"text__white--15ZVv\",\n\t\"greyF3\": \"text__greyF3--2Plwl\",\n\t\"greyF4\": \"text__greyF4--2Vq_b\",\n\t\"greyD9\": \"text__greyD9--2_8oL\",\n\t\"greyC4\": \"text__greyC4--2fZ6T\",\n\t\"grey99\": \"text__grey99--3ybQy\",\n\t\"grey66\": \"text__grey66--32GAa\",\n\t\"m28\": \"text__m28--3aCHB\",\n\t\"m20\": \"text__m20--2Oj_p\",\n\t\"m16\": \"text__m16--2A2SI\",\n\t\"m14\": \"text__m14--3Mhm6\",\n\t\"m12\": \"text__m12--1zdZg\",\n\t\"m10\": \"text__m10--1GO06\",\n\t\"t28\": \"text__t28--2uMIX\",\n\t\"t20\": \"text__t20--3fqpf\",\n\t\"t16\": \"text__t16--211L7\",\n\t\"t14\": \"text__t14--16TJF\",\n\t\"t12\": \"text__t12--At7iX\",\n\t\"t10\": \"text__t10--1rVFB\",\n\t\"d28\": \"text__d28--2bo1r\",\n\t\"d20\": \"text__d20--3QqXS\",\n\t\"d16\": \"text__d16--2TzHR\",\n\t\"d14\": \"text__d14--4V5oY\",\n\t\"d12\": \"text__d12--17v5i\",\n\t\"d10\": \"text__d10--3hqCc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/base-components/Text/text.css?");

/***/ }),

/***/ "./src/shared/base-components/context/tokenContext.ts":
/*!************************************************************!*\
  !*** ./src/shared/base-components/context/tokenContext.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.tokenContext = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nexports.tokenContext = react_1.default.createContext('');\n\n\n//# sourceURL=webpack:///./src/shared/base-components/context/tokenContext.ts?");

/***/ }),

/***/ "./src/shared/base-components/context/userContext.tsx":
/*!************************************************************!*\
  !*** ./src/shared/base-components/context/userContext.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.UserContextProvider = exports.userContext = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar useUserData_1 = __webpack_require__(/*! ../../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\nexports.userContext = react_1.default.createContext({});\nfunction UserContextProvider(_a) {\n    var children = _a.children;\n    var data = (0, useUserData_1.useUserData)()[0];\n    return (react_1.default.createElement(exports.userContext.Provider, { value: data }, children));\n}\nexports.UserContextProvider = UserContextProvider;\n\n\n//# sourceURL=webpack:///./src/shared/base-components/context/userContext.tsx?");

/***/ }),

/***/ "./src/shared/components/Controls/Actions/Actions.tsx":
/*!************************************************************!*\
  !*** ./src/shared/components/Controls/Actions/Actions.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Actions = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar actions_css_1 = __importDefault(__webpack_require__(/*! ./actions.css */ \"./src/shared/components/Controls/Actions/actions.css\"));\nvar ShareButton_1 = __webpack_require__(/*! ./ShareButton */ \"./src/shared/components/Controls/Actions/ShareButton/index.ts\");\nvar SaveButton_1 = __webpack_require__(/*! ./SaveButton */ \"./src/shared/components/Controls/Actions/SaveButton/index.ts\");\nfunction Actions() {\n    return (react_1.default.createElement(\"div\", { className: actions_css_1.default.actions },\n        react_1.default.createElement(ShareButton_1.ShareButton, null),\n        react_1.default.createElement(SaveButton_1.SaveButton, null)));\n}\nexports.Actions = Actions;\n\n\n//# sourceURL=webpack:///./src/shared/components/Controls/Actions/Actions.tsx?");

/***/ }),

/***/ "./src/shared/components/Controls/Actions/SaveButton/SaveButton.tsx":
/*!**************************************************************************!*\
  !*** ./src/shared/components/Controls/Actions/SaveButton/SaveButton.tsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SaveButton = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar savebutton_css_1 = __importDefault(__webpack_require__(/*! ./savebutton.css */ \"./src/shared/components/Controls/Actions/SaveButton/savebutton.css\"));\nfunction SaveButton() {\n    return (react_1.default.createElement(\"button\", { className: savebutton_css_1.default.saveButton },\n        react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n            react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\n            react_1.default.createElement(\"path\", { d: \"M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z\", fill: \"white\" }))));\n}\nexports.SaveButton = SaveButton;\n\n\n//# sourceURL=webpack:///./src/shared/components/Controls/Actions/SaveButton/SaveButton.tsx?");

/***/ }),

/***/ "./src/shared/components/Controls/Actions/SaveButton/index.ts":
/*!********************************************************************!*\
  !*** ./src/shared/components/Controls/Actions/SaveButton/index.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./SaveButton */ \"./src/shared/components/Controls/Actions/SaveButton/SaveButton.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/components/Controls/Actions/SaveButton/index.ts?");

/***/ }),

/***/ "./src/shared/components/Controls/Actions/SaveButton/savebutton.css":
/*!**************************************************************************!*\
  !*** ./src/shared/components/Controls/Actions/SaveButton/savebutton.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"saveButton\": \"savebutton__saveButton--1Biow\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Controls/Actions/SaveButton/savebutton.css?");

/***/ }),

/***/ "./src/shared/components/Controls/Actions/ShareButton/ShareButton.tsx":
/*!****************************************************************************!*\
  !*** ./src/shared/components/Controls/Actions/ShareButton/ShareButton.tsx ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ShareButton = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar sharebutton_css_1 = __importDefault(__webpack_require__(/*! ./sharebutton.css */ \"./src/shared/components/Controls/Actions/ShareButton/sharebutton.css\"));\nfunction ShareButton() {\n    return (react_1.default.createElement(\"button\", { className: sharebutton_css_1.default.sharedButton },\n        react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n            react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\n            react_1.default.createElement(\"path\", { d: \"M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z\", fill: \"white\" }))));\n}\nexports.ShareButton = ShareButton;\n\n\n//# sourceURL=webpack:///./src/shared/components/Controls/Actions/ShareButton/ShareButton.tsx?");

/***/ }),

/***/ "./src/shared/components/Controls/Actions/ShareButton/index.ts":
/*!*********************************************************************!*\
  !*** ./src/shared/components/Controls/Actions/ShareButton/index.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ShareButton */ \"./src/shared/components/Controls/Actions/ShareButton/ShareButton.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/components/Controls/Actions/ShareButton/index.ts?");

/***/ }),

/***/ "./src/shared/components/Controls/Actions/ShareButton/sharebutton.css":
/*!****************************************************************************!*\
  !*** ./src/shared/components/Controls/Actions/ShareButton/sharebutton.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sharedButton\": \"sharebutton__sharedButton--1eP15\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Controls/Actions/ShareButton/sharebutton.css?");

/***/ }),

/***/ "./src/shared/components/Controls/Actions/actions.css":
/*!************************************************************!*\
  !*** ./src/shared/components/Controls/Actions/actions.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"actions\": \"actions__actions--MVjIf\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Controls/Actions/actions.css?");

/***/ }),

/***/ "./src/shared/components/Controls/Actions/index.ts":
/*!*********************************************************!*\
  !*** ./src/shared/components/Controls/Actions/index.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Actions */ \"./src/shared/components/Controls/Actions/Actions.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/components/Controls/Actions/index.ts?");

/***/ }),

/***/ "./src/shared/components/Controls/CommentsButton/CommentsButton.tsx":
/*!**************************************************************************!*\
  !*** ./src/shared/components/Controls/CommentsButton/CommentsButton.tsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentsButton = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar commentsbutton_css_1 = __importDefault(__webpack_require__(/*! ./commentsbutton.css */ \"./src/shared/components/Controls/CommentsButton/commentsbutton.css\"));\nfunction CommentsButton() {\n    return (react_1.default.createElement(\"button\", { className: commentsbutton_css_1.default.commentsButton },\n        react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n            react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#C4C4C4\" })),\n        react_1.default.createElement(\"span\", { className: commentsbutton_css_1.default.commentsNumber }, \"13\")));\n}\nexports.CommentsButton = CommentsButton;\n\n\n//# sourceURL=webpack:///./src/shared/components/Controls/CommentsButton/CommentsButton.tsx?");

/***/ }),

/***/ "./src/shared/components/Controls/CommentsButton/commentsbutton.css":
/*!**************************************************************************!*\
  !*** ./src/shared/components/Controls/CommentsButton/commentsbutton.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"commentsButton\": \"commentsbutton__commentsButton--1zr0H\",\n\t\"commentsNumber\": \"commentsbutton__commentsNumber--alk4H\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Controls/CommentsButton/commentsbutton.css?");

/***/ }),

/***/ "./src/shared/components/Controls/CommentsButton/index.ts":
/*!****************************************************************!*\
  !*** ./src/shared/components/Controls/CommentsButton/index.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CommentsButton */ \"./src/shared/components/Controls/CommentsButton/CommentsButton.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/components/Controls/CommentsButton/index.ts?");

/***/ }),

/***/ "./src/shared/components/Controls/Controls.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/components/Controls/Controls.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Controls = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar controls_css_1 = __importDefault(__webpack_require__(/*! ./controls.css */ \"./src/shared/components/Controls/controls.css\"));\nvar KarmaValue_1 = __webpack_require__(/*! ./KarmaValue */ \"./src/shared/components/Controls/KarmaValue/index.ts\");\nvar CommentsButton_1 = __webpack_require__(/*! ./CommentsButton */ \"./src/shared/components/Controls/CommentsButton/index.ts\");\nvar Actions_1 = __webpack_require__(/*! ./Actions */ \"./src/shared/components/Controls/Actions/index.ts\");\nfunction Controls() {\n    return (react_1.default.createElement(\"div\", { className: controls_css_1.default.controls },\n        react_1.default.createElement(KarmaValue_1.KarmaValue, null),\n        react_1.default.createElement(CommentsButton_1.CommentsButton, null),\n        react_1.default.createElement(Actions_1.Actions, null)));\n}\nexports.Controls = Controls;\n\n\n//# sourceURL=webpack:///./src/shared/components/Controls/Controls.tsx?");

/***/ }),

/***/ "./src/shared/components/Controls/KarmaValue/KarmaValue.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/components/Controls/KarmaValue/KarmaValue.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.KarmaValue = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar karmavalue_css_1 = __importDefault(__webpack_require__(/*! ./karmavalue.css */ \"./src/shared/components/Controls/KarmaValue/karmavalue.css\"));\nfunction KarmaValue() {\n    return (react_1.default.createElement(\"div\", { className: karmavalue_css_1.default.karmaCounter },\n        react_1.default.createElement(\"button\", { className: karmavalue_css_1.default.up },\n            react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#C4C4C4\" }))),\n        react_1.default.createElement(\"span\", { className: karmavalue_css_1.default.karmaValue }, \"234\"),\n        react_1.default.createElement(\"button\", { className: karmavalue_css_1.default.down },\n            react_1.default.createElement(\"svg\", { className: karmavalue_css_1.default.down, width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                react_1.default.createElement(\"path\", { d: \"M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z\", fill: \"#C4C4C4\" })))));\n}\nexports.KarmaValue = KarmaValue;\n\n\n//# sourceURL=webpack:///./src/shared/components/Controls/KarmaValue/KarmaValue.tsx?");

/***/ }),

/***/ "./src/shared/components/Controls/KarmaValue/index.ts":
/*!************************************************************!*\
  !*** ./src/shared/components/Controls/KarmaValue/index.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./KarmaValue */ \"./src/shared/components/Controls/KarmaValue/KarmaValue.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/components/Controls/KarmaValue/index.ts?");

/***/ }),

/***/ "./src/shared/components/Controls/KarmaValue/karmavalue.css":
/*!******************************************************************!*\
  !*** ./src/shared/components/Controls/KarmaValue/karmavalue.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"karmaCounter\": \"karmavalue__karmaCounter--2PG20\",\n\t\"karmaValue\": \"karmavalue__karmaValue--_bhyl\",\n\t\"up\": \"karmavalue__up--3U1wZ\",\n\t\"down\": \"karmavalue__down--10uir\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Controls/KarmaValue/karmavalue.css?");

/***/ }),

/***/ "./src/shared/components/Controls/controls.css":
/*!*****************************************************!*\
  !*** ./src/shared/components/Controls/controls.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"controls\": \"controls__controls--2hPRC\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Controls/controls.css?");

/***/ }),

/***/ "./src/shared/components/Controls/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/components/Controls/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Controls */ \"./src/shared/components/Controls/Controls.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/components/Controls/index.ts?");

/***/ }),

/***/ "./src/shared/components/Dropdown/Dropdown.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/components/Dropdown/Dropdown.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Dropdown = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ \"./src/shared/components/Dropdown/dropdown.css\"));\nvar NOOP = function () {\n};\nfunction Dropdown(_a) {\n    var button = _a.button, children = _a.children, isOpen = _a.isOpen, _b = _a.onOpen, onOpen = _b === void 0 ? NOOP : _b, _c = _a.onClose, onClose = _c === void 0 ? NOOP : _c;\n    var _d = react_1.default.useState(isOpen), isDropdownOpen = _d[0], setIsDropdownOpen = _d[1];\n    react_1.default.useEffect(function () {\n        setIsDropdownOpen(isOpen);\n    }, [isOpen]);\n    react_1.default.useEffect(function () { return isDropdownOpen ? onOpen() : onClose(); }, [isDropdownOpen]);\n    var handleOpen = function () {\n        if (isOpen === undefined) {\n            setIsDropdownOpen(!isDropdownOpen);\n        }\n    };\n    return (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.container },\n        react_1.default.createElement(\"div\", { onClick: function () { return setIsDropdownOpen(!isDropdownOpen); } }, button),\n        isDropdownOpen && (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.listContainer },\n            react_1.default.createElement(\"div\", { className: dropdown_css_1.default.list, onClick: function () { return setIsDropdownOpen(false); } }, children)))));\n}\nexports.Dropdown = Dropdown;\n\n\n//# sourceURL=webpack:///./src/shared/components/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/components/Dropdown/dropdown.css":
/*!*****************************************************!*\
  !*** ./src/shared/components/Dropdown/dropdown.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"dropdown__container--1ABBz\",\n\t\"listContainer\": \"dropdown__listContainer--1a5yj\",\n\t\"list\": \"dropdown__list--ItBhy\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Dropdown/dropdown.css?");

/***/ }),

/***/ "./src/shared/components/Dropdown/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/components/Dropdown/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/components/Dropdown/Dropdown.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/components/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/components/Header/Header.tsx":
/*!*************************************************!*\
  !*** ./src/shared/components/Header/Header.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Header = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/components/Header/header.css\"));\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/components/Header/SearchBlock/index.ts\");\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/components/Header/ThreadTitle/index.ts\");\nvar SortBlock_1 = __webpack_require__(/*! ./SortBlock */ \"./src/shared/components/Header/SortBlock/index.ts\");\nfunction Header() {\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\n}\nexports.Header = Header;\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/components/Header/SearchBlock/SearchBlock.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/components/Header/SearchBlock/SearchBlock.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SearchBlock = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/components/Header/SearchBlock/searchblock.css\"));\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/components/Header/SearchBlock/UserBlock/index.ts\");\nvar userContext_1 = __webpack_require__(/*! ../../../base-components/context/userContext */ \"./src/shared/base-components/context/userContext.tsx\");\nfunction SearchBlock() {\n    var _a = (0, react_1.useContext)(userContext_1.userContext), iconImg = _a.iconImg, name = _a.name;\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchBlock },\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: iconImg, username: name })));\n}\nexports.SearchBlock = SearchBlock;\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/components/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!**************************************************************************!*\
  !*** ./src/shared/components/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.UserBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar userblock_css_1 = __importDefault(__webpack_require__(/*! ./userblock.css */ \"./src/shared/components/Header/SearchBlock/UserBlock/userblock.css\"));\nvar Icons_1 = __webpack_require__(/*! ../../../Icons */ \"./src/shared/components/Icons/index.ts\");\nvar Break_1 = __webpack_require__(/*! ../../../../base-components/Break */ \"./src/shared/base-components/Break/index.ts\");\nvar Text_1 = __webpack_require__(/*! ../../../../base-components/Text */ \"./src/shared/base-components/Text/index.ts\");\nfunction UserBlock(_a) {\n    var avatarSrc = _a.avatarSrc, username = _a.username;\n    return (react_1.default.createElement(\"a\", { href: \"https://www.reddit.com/api/v1/authorize?client_id=\".concat('BNksSH8XZFA7iA', \"&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity\"), className: userblock_css_1.default.userBox },\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.avatarBox }, avatarSrc\n            ? react_1.default.createElement(\"img\", { src: avatarSrc, alt: \"user avatar\", className: userblock_css_1.default.avatarImage })\n            : react_1.default.createElement(Icons_1.IconAnon, null)),\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.username },\n            react_1.default.createElement(Break_1.Break, { size: 12 }),\n            react_1.default.createElement(Text_1.Text, { size: 20, color: username ? Text_1.EColor.black : Text_1.EColor.grey99 }, username || 'Аноним'))));\n}\nexports.UserBlock = UserBlock;\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/components/Header/SearchBlock/UserBlock/index.ts":
/*!*********************************************************************!*\
  !*** ./src/shared/components/Header/SearchBlock/UserBlock/index.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/components/Header/SearchBlock/UserBlock/UserBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/SearchBlock/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/components/Header/SearchBlock/UserBlock/userblock.css":
/*!**************************************************************************!*\
  !*** ./src/shared/components/Header/SearchBlock/UserBlock/userblock.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userBox\": \"userblock__userBox--234xU\",\n\t\"avatarBox\": \"userblock__avatarBox--1Pl6R\",\n\t\"avatarImage\": \"userblock__avatarImage--2glWi\",\n\t\"username\": \"userblock__username--3Duxm\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/SearchBlock/UserBlock/userblock.css?");

/***/ }),

/***/ "./src/shared/components/Header/SearchBlock/index.ts":
/*!***********************************************************!*\
  !*** ./src/shared/components/Header/SearchBlock/index.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./SearchBlock */ \"./src/shared/components/Header/SearchBlock/SearchBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/SearchBlock/index.ts?");

/***/ }),

/***/ "./src/shared/components/Header/SearchBlock/searchblock.css":
/*!******************************************************************!*\
  !*** ./src/shared/components/Header/SearchBlock/searchblock.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"searchBlock\": \"searchblock__searchBlock--2oQlD\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/SearchBlock/searchblock.css?");

/***/ }),

/***/ "./src/shared/components/Header/SortBlock/SortBlock.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/components/Header/SortBlock/SortBlock.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SortBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar sortblock_css_1 = __importDefault(__webpack_require__(/*! ./sortblock.css */ \"./src/shared/components/Header/SortBlock/sortblock.css\"));\nfunction SortBlock() {\n    return (react_1.default.createElement(\"div\", { className: sortblock_css_1.default.sortBlock }, \"sorting dropdown\"));\n}\nexports.SortBlock = SortBlock;\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/components/Header/SortBlock/index.ts":
/*!*********************************************************!*\
  !*** ./src/shared/components/Header/SortBlock/index.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./SortBlock */ \"./src/shared/components/Header/SortBlock/SortBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/SortBlock/index.ts?");

/***/ }),

/***/ "./src/shared/components/Header/SortBlock/sortblock.css":
/*!**************************************************************!*\
  !*** ./src/shared/components/Header/SortBlock/sortblock.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sortBlock\": \"sortblock__sortBlock--EpWRl\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/SortBlock/sortblock.css?");

/***/ }),

/***/ "./src/shared/components/Header/ThreadTitle/ThreadTitle.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/components/Header/ThreadTitle/ThreadTitle.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ThreadTitle = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar threadtitle_css_1 = __importDefault(__webpack_require__(/*! ./threadtitle.css */ \"./src/shared/components/Header/ThreadTitle/threadtitle.css\"));\nfunction ThreadTitle() {\n    return (react_1.default.createElement(\"h1\", { className: threadtitle_css_1.default.threadTitle }, \"Header\"));\n}\nexports.ThreadTitle = ThreadTitle;\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/components/Header/ThreadTitle/index.ts":
/*!***********************************************************!*\
  !*** ./src/shared/components/Header/ThreadTitle/index.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ThreadTitle */ \"./src/shared/components/Header/ThreadTitle/ThreadTitle.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/ThreadTitle/index.ts?");

/***/ }),

/***/ "./src/shared/components/Header/ThreadTitle/threadtitle.css":
/*!******************************************************************!*\
  !*** ./src/shared/components/Header/ThreadTitle/threadtitle.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"threadTitle\": \"threadtitle__threadTitle--ifvvx\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/ThreadTitle/threadtitle.css?");

/***/ }),

/***/ "./src/shared/components/Header/header.css":
/*!*************************************************!*\
  !*** ./src/shared/components/Header/header.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--26G2v\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/header.css?");

/***/ }),

/***/ "./src/shared/components/Header/index.ts":
/*!***********************************************!*\
  !*** ./src/shared/components/Header/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/components/Header/Header.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/index.ts?");

/***/ }),

/***/ "./src/shared/components/Icons/BlockIcon.tsx":
/*!***************************************************!*\
  !*** ./src/shared/components/Icons/BlockIcon.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.BlockIcon = void 0;\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\nfunction BlockIcon() {\n    return (React.createElement(\"svg\", { width: \"12\", height: \"12\", viewBox: \"0 0 12 12\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        React.createElement(\"path\", { d: \"M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z\", fill: \"#999999\" })));\n}\nexports.BlockIcon = BlockIcon;\n\n\n//# sourceURL=webpack:///./src/shared/components/Icons/BlockIcon.tsx?");

/***/ }),

/***/ "./src/shared/components/Icons/IconAnon.tsx":
/*!**************************************************!*\
  !*** ./src/shared/components/Icons/IconAnon.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconAnon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction IconAnon() {\n    return (react_1.default.createElement(\"svg\", { width: \"50\", height: \"50\", viewBox: \"0 0 50 50\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\" })));\n}\nexports.IconAnon = IconAnon;\n\n\n//# sourceURL=webpack:///./src/shared/components/Icons/IconAnon.tsx?");

/***/ }),

/***/ "./src/shared/components/Icons/MenuIcon.tsx":
/*!**************************************************!*\
  !*** ./src/shared/components/Icons/MenuIcon.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.MenuIcon = void 0;\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\nfunction MenuIcon() {\n    return (React.createElement(\"svg\", { width: \"5\", height: \"20\", viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        React.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#F3F3F3\" }),\n        React.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#F3F3F3\" }),\n        React.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#F3F3F3\" })));\n}\nexports.MenuIcon = MenuIcon;\n\n\n//# sourceURL=webpack:///./src/shared/components/Icons/MenuIcon.tsx?");

/***/ }),

/***/ "./src/shared/components/Icons/WarningIcon.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/components/Icons/WarningIcon.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.WarningIcon = void 0;\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\nfunction WarningIcon() {\n    return (React.createElement(\"svg\", { width: \"14\", height: \"12\", viewBox: \"0 0 14 12\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        React.createElement(\"path\", { d: \"M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z\", fill: \"#999999\" })));\n}\nexports.WarningIcon = WarningIcon;\n\n\n//# sourceURL=webpack:///./src/shared/components/Icons/WarningIcon.tsx?");

/***/ }),

/***/ "./src/shared/components/Icons/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/components/Icons/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./MenuIcon */ \"./src/shared/components/Icons/MenuIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./BlockIcon */ \"./src/shared/components/Icons/BlockIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./WarningIcon */ \"./src/shared/components/Icons/WarningIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./IconAnon */ \"./src/shared/components/Icons/IconAnon.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/components/Icons/index.ts?");

/***/ }),

/***/ "./src/shared/components/Post/Post.tsx":
/*!*********************************************!*\
  !*** ./src/shared/components/Post/Post.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Post = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\nvar post_css_1 = __importDefault(__webpack_require__(/*! ./post.css */ \"./src/shared/components/Post/post.css\"));\nvar CommentFormContainer_1 = __webpack_require__(/*! ../../forms/CommentFormContainer/CommentFormContainer */ \"./src/shared/forms/CommentFormContainer/CommentFormContainer.tsx\");\nfunction Post(props) {\n    var ref = (0, react_1.useRef)(null);\n    (0, react_1.useEffect)(function () {\n        function handleClick(event) {\n            var _a, _b;\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\n                (_b = props.onClose) === null || _b === void 0 ? void 0 : _b.call(props);\n            }\n        }\n        document.addEventListener('click', handleClick);\n        return function () {\n            document.removeEventListener('click', handleClick);\n        };\n    }, []);\n    var node = document.querySelector('#modal_root');\n    if (!node)\n        return null;\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: post_css_1.default.modal, ref: ref },\n        react_1.default.createElement(\"h2\", null, \"\\u0420\\u0435\\u0430\\u043B\\u0438\\u0437\\u0430\\u0446\\u0438\\u044F \\u043D\\u0430\\u043C\\u0435\\u0447\\u0435\\u043D\\u043D\\u044B\\u0445 \\u043F\\u043B\\u0430\\u043D\\u043E\\u0432\\u044B\\u0445 \\u0437\\u0430\\u0434\\u0430\\u043D\\u0438\\u0439 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet..\"),\n        react_1.default.createElement(\"div\", { className: post_css_1.default.content },\n            react_1.default.createElement(\"p\", null, \"\\u0415\\u0441\\u0442\\u044C \\u043D\\u0430\\u0434 \\u0447\\u0435\\u043C \\u0437\\u0430\\u0434\\u0443\\u043C\\u0430\\u0442\\u044C\\u0441\\u044F: \\u0442\\u0449\\u0430\\u0442\\u0435\\u043B\\u044C\\u043D\\u044B\\u0435 \\u0438\\u0441\\u0441\\u043B\\u0435\\u0434\\u043E\\u0432\\u0430\\u043D\\u0438\\u044F \\u043A\\u043E\\u043D\\u043A\\u0443\\u0440\\u0435\\u043D\\u0442\\u043E\\u0432 \\u043F\\u0440\\u0435\\u0434\\u0441\\u0442\\u0430\\u0432\\u043B\\u044F\\u044E\\u0442 \\u0441\\u043E\\u0431\\u043E\\u0439 \\u043D\\u0435 \\u0447\\u0442\\u043E \\u0438\\u043D\\u043E\\u0435, \\u043A\\u0430\\u043A \\u043A\\u0432\\u0438\\u043D\\u0442\\u044D\\u0441\\u0441\\u0435\\u043D\\u0446\\u0438\\u044E \\u043F\\u043E\\u0431\\u0435\\u0434\\u044B \\u043C\\u0430\\u0440\\u043A\\u0435\\u0442\\u0438\\u043D\\u0433\\u0430 \\u043D\\u0430\\u0434 \\u0440\\u0430\\u0437\\u0443\\u043C\\u043E\\u043C \\u0438 \\u0434\\u043E\\u043B\\u0436\\u043D\\u044B \\u0431\\u044B\\u0442\\u044C \\u0430\\u0441\\u0441\\u043E\\u0446\\u0438\\u0430\\u0442\\u0438\\u0432\\u043D\\u043E \\u0440\\u0430\\u0441\\u043F\\u0440\\u0435\\u0434\\u0435\\u043B\\u0435\\u043D\\u044B \\u043F\\u043E \\u043E\\u0442\\u0440\\u0430\\u0441\\u043B\\u044F\\u043C. \\u041F\\u0440\\u0435\\u0436\\u0434\\u0435 \\u0432\\u0441\\u0435\\u0433\\u043E, \\u043D\\u0430\\u0447\\u0430\\u043B\\u043E \\u043F\\u043E\\u0432\\u0441\\u0435\\u0434\\u043D\\u0435\\u0432\\u043D\\u043E\\u0439 \\u0440\\u0430\\u0431\\u043E\\u0442\\u044B \\u043F\\u043E \\u0444\\u043E\\u0440\\u043C\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u0438\\u044E \\u043F\\u043E\\u0437\\u0438\\u0446\\u0438\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0437\\u043D\\u0430\\u0447\\u043D\\u043E \\u0444\\u0438\\u043A\\u0441\\u0438\\u0440\\u0443\\u0435\\u0442 \\u043D\\u0435\\u043E\\u0431\\u0445\\u043E\\u0434\\u0438\\u043C\\u043E\\u0441\\u0442\\u044C \\u043A\\u043B\\u0430\\u0441\\u0442\\u0435\\u0440\\u0438\\u0437\\u0430\\u0446\\u0438\\u0438 \\u0443\\u0441\\u0438\\u043B\\u0438\\u0439. \\u041D\\u043E \\u0441\\u0442\\u043E\\u0440\\u043E\\u043D\\u043D\\u0438\\u043A\\u0438 \\u0442\\u043E\\u0442\\u0430\\u043B\\u0438\\u0442\\u0430\\u0440\\u0438\\u0437\\u043C\\u0430 \\u0432 \\u043D\\u0430\\u0443\\u043A\\u0435 \\u0438 \\u043F\\u043E \\u0441\\u0435\\u0439 \\u0434\\u0435\\u043D\\u044C \\u043E\\u0441\\u0442\\u0430\\u044E\\u0442\\u0441\\u044F \\u0443\\u0434\\u0435\\u043B\\u043E\\u043C \\u043B\\u0438\\u0431\\u0435\\u0440\\u0430\\u043B\\u043E\\u0432, \\u043A\\u043E\\u0442\\u043E\\u0440\\u044B\\u0435 \\u0436\\u0430\\u0436\\u0434\\u0443\\u0442 \\u0431\\u044B\\u0442\\u044C \\u043F\\u0440\\u0435\\u0432\\u0440\\u0430\\u0449\\u0435\\u043D\\u044B \\u0432 \\u043F\\u043E\\u0441\\u043C\\u0435\\u0448\\u0438\\u0449\\u0435, \\u0445\\u043E\\u0442\\u044F \\u0441\\u0430\\u043C\\u043E \\u0438\\u0445 \\u0441\\u0443\\u0449\\u0435\\u0441\\u0442\\u0432\\u043E\\u0432\\u0430\\u043D\\u0438\\u0435 \\u043F\\u0440\\u0438\\u043D\\u043E\\u0441\\u0438\\u0442 \\u043D\\u0435\\u0441\\u043E\\u043C\\u043D\\u0435\\u043D\\u043D\\u0443\\u044E \\u043F\\u043E\\u043B\\u044C\\u0437\\u0443 \\u043E\\u0431\\u0449\\u0435\\u0441\\u0442\\u0432\\u0443.\"),\n            react_1.default.createElement(\"p\", null, \"\\u0415\\u0441\\u0442\\u044C \\u043D\\u0430\\u0434 \\u0447\\u0435\\u043C \\u0437\\u0430\\u0434\\u0443\\u043C\\u0430\\u0442\\u044C\\u0441\\u044F: \\u0442\\u0449\\u0430\\u0442\\u0435\\u043B\\u044C\\u043D\\u044B\\u0435 \\u0438\\u0441\\u0441\\u043B\\u0435\\u0434\\u043E\\u0432\\u0430\\u043D\\u0438\\u044F \\u043A\\u043E\\u043D\\u043A\\u0443\\u0440\\u0435\\u043D\\u0442\\u043E\\u0432 \\u043F\\u0440\\u0435\\u0434\\u0441\\u0442\\u0430\\u0432\\u043B\\u044F\\u044E\\u0442 \\u0441\\u043E\\u0431\\u043E\\u0439 \\u043D\\u0435 \\u0447\\u0442\\u043E \\u0438\\u043D\\u043E\\u0435, \\u043A\\u0430\\u043A \\u043A\\u0432\\u0438\\u043D\\u0442\\u044D\\u0441\\u0441\\u0435\\u043D\\u0446\\u0438\\u044E \\u043F\\u043E\\u0431\\u0435\\u0434\\u044B \\u043C\\u0430\\u0440\\u043A\\u0435\\u0442\\u0438\\u043D\\u0433\\u0430 \\u043D\\u0430\\u0434 \\u0440\\u0430\\u0437\\u0443\\u043C\\u043E\\u043C \\u0438 \\u0434\\u043E\\u043B\\u0436\\u043D\\u044B \\u0431\\u044B\\u0442\\u044C \\u0430\\u0441\\u0441\\u043E\\u0446\\u0438\\u0430\\u0442\\u0438\\u0432\\u043D\\u043E \\u0440\\u0430\\u0441\\u043F\\u0440\\u0435\\u0434\\u0435\\u043B\\u0435\\u043D\\u044B \\u043F\\u043E \\u043E\\u0442\\u0440\\u0430\\u0441\\u043B\\u044F\\u043C. \\u041F\\u0440\\u0435\\u0436\\u0434\\u0435 \\u0432\\u0441\\u0435\\u0433\\u043E, \\u043D\\u0430\\u0447\\u0430\\u043B\\u043E \\u043F\\u043E\\u0432\\u0441\\u0435\\u0434\\u043D\\u0435\\u0432\\u043D\\u043E\\u0439 \\u0440\\u0430\\u0431\\u043E\\u0442\\u044B \\u043F\\u043E \\u0444\\u043E\\u0440\\u043C\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u0438\\u044E \\u043F\\u043E\\u0437\\u0438\\u0446\\u0438\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0437\\u043D\\u0430\\u0447\\u043D\\u043E \\u0444\\u0438\\u043A\\u0441\\u0438\\u0440\\u0443\\u0435\\u0442 \\u043D\\u0435\\u043E\\u0431\\u0445\\u043E\\u0434\\u0438\\u043C\\u043E\\u0441\\u0442\\u044C \\u043A\\u043B\\u0430\\u0441\\u0442\\u0435\\u0440\\u0438\\u0437\\u0430\\u0446\\u0438\\u0438 \\u0443\\u0441\\u0438\\u043B\\u0438\\u0439. \\u041D\\u043E \\u0441\\u0442\\u043E\\u0440\\u043E\\u043D\\u043D\\u0438\\u043A\\u0438 \\u0442\\u043E\\u0442\\u0430\\u043B\\u0438\\u0442\\u0430\\u0440\\u0438\\u0437\\u043C\\u0430 \\u0432 \\u043D\\u0430\\u0443\\u043A\\u0435 \\u0438 \\u043F\\u043E \\u0441\\u0435\\u0439 \\u0434\\u0435\\u043D\\u044C \\u043E\\u0441\\u0442\\u0430\\u044E\\u0442\\u0441\\u044F \\u0443\\u0434\\u0435\\u043B\\u043E\\u043C \\u043B\\u0438\\u0431\\u0435\\u0440\\u0430\\u043B\\u043E\\u0432, \\u043A\\u043E\\u0442\\u043E\\u0440\\u044B\\u0435 \\u0436\\u0430\\u0436\\u0434\\u0443\\u0442 \\u0431\\u044B\\u0442\\u044C \\u043F\\u0440\\u0435\\u0432\\u0440\\u0430\\u0449\\u0435\\u043D\\u044B \\u0432 \\u043F\\u043E\\u0441\\u043C\\u0435\\u0448\\u0438\\u0449\\u0435, \\u0445\\u043E\\u0442\\u044F \\u0441\\u0430\\u043C\\u043E \\u0438\\u0445 \\u0441\\u0443\\u0449\\u0435\\u0441\\u0442\\u0432\\u043E\\u0432\\u0430\\u043D\\u0438\\u0435 \\u043F\\u0440\\u0438\\u043D\\u043E\\u0441\\u0438\\u0442 \\u043D\\u0435\\u0441\\u043E\\u043C\\u043D\\u0435\\u043D\\u043D\\u0443\\u044E \\u043F\\u043E\\u043B\\u044C\\u0437\\u0443 \\u043E\\u0431\\u0449\\u0435\\u0441\\u0442\\u0432\\u0443.\"),\n            react_1.default.createElement(\"p\", null, \"\\u0415\\u0441\\u0442\\u044C \\u043D\\u0430\\u0434 \\u0447\\u0435\\u043C \\u0437\\u0430\\u0434\\u0443\\u043C\\u0430\\u0442\\u044C\\u0441\\u044F: \\u0442\\u0449\\u0430\\u0442\\u0435\\u043B\\u044C\\u043D\\u044B\\u0435 \\u0438\\u0441\\u0441\\u043B\\u0435\\u0434\\u043E\\u0432\\u0430\\u043D\\u0438\\u044F \\u043A\\u043E\\u043D\\u043A\\u0443\\u0440\\u0435\\u043D\\u0442\\u043E\\u0432 \\u043F\\u0440\\u0435\\u0434\\u0441\\u0442\\u0430\\u0432\\u043B\\u044F\\u044E\\u0442 \\u0441\\u043E\\u0431\\u043E\\u0439 \\u043D\\u0435 \\u0447\\u0442\\u043E \\u0438\\u043D\\u043E\\u0435, \\u043A\\u0430\\u043A \\u043A\\u0432\\u0438\\u043D\\u0442\\u044D\\u0441\\u0441\\u0435\\u043D\\u0446\\u0438\\u044E \\u043F\\u043E\\u0431\\u0435\\u0434\\u044B \\u043C\\u0430\\u0440\\u043A\\u0435\\u0442\\u0438\\u043D\\u0433\\u0430 \\u043D\\u0430\\u0434 \\u0440\\u0430\\u0437\\u0443\\u043C\\u043E\\u043C \\u0438 \\u0434\\u043E\\u043B\\u0436\\u043D\\u044B \\u0431\\u044B\\u0442\\u044C \\u0430\\u0441\\u0441\\u043E\\u0446\\u0438\\u0430\\u0442\\u0438\\u0432\\u043D\\u043E \\u0440\\u0430\\u0441\\u043F\\u0440\\u0435\\u0434\\u0435\\u043B\\u0435\\u043D\\u044B \\u043F\\u043E \\u043E\\u0442\\u0440\\u0430\\u0441\\u043B\\u044F\\u043C. \\u041F\\u0440\\u0435\\u0436\\u0434\\u0435 \\u0432\\u0441\\u0435\\u0433\\u043E, \\u043D\\u0430\\u0447\\u0430\\u043B\\u043E \\u043F\\u043E\\u0432\\u0441\\u0435\\u0434\\u043D\\u0435\\u0432\\u043D\\u043E\\u0439 \\u0440\\u0430\\u0431\\u043E\\u0442\\u044B \\u043F\\u043E \\u0444\\u043E\\u0440\\u043C\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u0438\\u044E \\u043F\\u043E\\u0437\\u0438\\u0446\\u0438\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0437\\u043D\\u0430\\u0447\\u043D\\u043E \\u0444\\u0438\\u043A\\u0441\\u0438\\u0440\\u0443\\u0435\\u0442 \\u043D\\u0435\\u043E\\u0431\\u0445\\u043E\\u0434\\u0438\\u043C\\u043E\\u0441\\u0442\\u044C \\u043A\\u043B\\u0430\\u0441\\u0442\\u0435\\u0440\\u0438\\u0437\\u0430\\u0446\\u0438\\u0438 \\u0443\\u0441\\u0438\\u043B\\u0438\\u0439. \\u041D\\u043E \\u0441\\u0442\\u043E\\u0440\\u043E\\u043D\\u043D\\u0438\\u043A\\u0438 \\u0442\\u043E\\u0442\\u0430\\u043B\\u0438\\u0442\\u0430\\u0440\\u0438\\u0437\\u043C\\u0430 \\u0432 \\u043D\\u0430\\u0443\\u043A\\u0435 \\u0438 \\u043F\\u043E \\u0441\\u0435\\u0439 \\u0434\\u0435\\u043D\\u044C \\u043E\\u0441\\u0442\\u0430\\u044E\\u0442\\u0441\\u044F \\u0443\\u0434\\u0435\\u043B\\u043E\\u043C \\u043B\\u0438\\u0431\\u0435\\u0440\\u0430\\u043B\\u043E\\u0432, \\u043A\\u043E\\u0442\\u043E\\u0440\\u044B\\u0435 \\u0436\\u0430\\u0436\\u0434\\u0443\\u0442 \\u0431\\u044B\\u0442\\u044C \\u043F\\u0440\\u0435\\u0432\\u0440\\u0430\\u0449\\u0435\\u043D\\u044B \\u0432 \\u043F\\u043E\\u0441\\u043C\\u0435\\u0448\\u0438\\u0449\\u0435, \\u0445\\u043E\\u0442\\u044F \\u0441\\u0430\\u043C\\u043E \\u0438\\u0445 \\u0441\\u0443\\u0449\\u0435\\u0441\\u0442\\u0432\\u043E\\u0432\\u0430\\u043D\\u0438\\u0435 \\u043F\\u0440\\u0438\\u043D\\u043E\\u0441\\u0438\\u0442 \\u043D\\u0435\\u0441\\u043E\\u043C\\u043D\\u0435\\u043D\\u043D\\u0443\\u044E \\u043F\\u043E\\u043B\\u044C\\u0437\\u0443 \\u043E\\u0431\\u0449\\u0435\\u0441\\u0442\\u0432\\u0443.\")),\n        react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, null))), node);\n}\nexports.Post = Post;\n\n\n//# sourceURL=webpack:///./src/shared/components/Post/Post.tsx?");

/***/ }),

/***/ "./src/shared/components/Post/index.ts":
/*!*********************************************!*\
  !*** ./src/shared/components/Post/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Post */ \"./src/shared/components/Post/Post.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/components/Post/index.ts?");

/***/ }),

/***/ "./src/shared/components/Post/post.css":
/*!*********************************************!*\
  !*** ./src/shared/components/Post/post.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"modal\": \"post__modal--he4vL\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Post/post.css?");

/***/ }),

/***/ "./src/shared/forms/CommentForm/CommentForm.tsx":
/*!******************************************************!*\
  !*** ./src/shared/forms/CommentForm/CommentForm.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentForm = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar commentform_css_1 = __importDefault(__webpack_require__(/*! ./commentform.css */ \"./src/shared/forms/CommentForm/commentform.css\"));\nfunction CommentForm(_a) {\n    var value = _a.value, onChange = _a.onChange, onSubmit = _a.onSubmit;\n    return (react_1.default.createElement(\"form\", { className: commentform_css_1.default.form, onSubmit: onSubmit },\n        react_1.default.createElement(\"textarea\", { className: commentform_css_1.default.input, value: value, onChange: onChange }),\n        react_1.default.createElement(\"button\", { type: \"submit\", className: commentform_css_1.default.button }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")));\n}\nexports.CommentForm = CommentForm;\n\n\n//# sourceURL=webpack:///./src/shared/forms/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/forms/CommentForm/commentform.css":
/*!******************************************************!*\
  !*** ./src/shared/forms/CommentForm/commentform.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"button\": \"commentform__button--DwZd2\",\n\t\"input\": \"commentform__input--3WjNM\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/forms/CommentForm/commentform.css?");

/***/ }),

/***/ "./src/shared/forms/CommentForm/index.ts":
/*!***********************************************!*\
  !*** ./src/shared/forms/CommentForm/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CommentForm */ \"./src/shared/forms/CommentForm/CommentForm.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/forms/CommentForm/index.ts?");

/***/ }),

/***/ "./src/shared/forms/CommentFormContainer/CommentFormContainer.tsx":
/*!************************************************************************!*\
  !*** ./src/shared/forms/CommentFormContainer/CommentFormContainer.tsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentFormContainer = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar store_1 = __webpack_require__(/*! ../../../store */ \"./src/store.ts\");\nvar CommentForm_1 = __webpack_require__(/*! ../CommentForm */ \"./src/shared/forms/CommentForm/index.ts\");\nfunction CommentFormContainer() {\n    var value = (0, react_redux_1.useSelector)(function (state) { return state.commentText; });\n    var dispatch = (0, react_redux_1.useDispatch)();\n    function handleChange(event) {\n        dispatch((0, store_1.updateComment)(event.target.value));\n    }\n    function handleSubmit(event) {\n        event.preventDefault();\n        console.log(value);\n    }\n    return (react_1.default.createElement(CommentForm_1.CommentForm, { value: value, onChange: handleChange, onSubmit: handleSubmit }));\n}\nexports.CommentFormContainer = CommentFormContainer;\n\n\n//# sourceURL=webpack:///./src/shared/forms/CommentFormContainer/CommentFormContainer.tsx?");

/***/ }),

/***/ "./src/shared/lists/CardsList/Card/Card.tsx":
/*!**************************************************!*\
  !*** ./src/shared/lists/CardsList/Card/Card.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Card = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/lists/CardsList/Card/card.css\"));\nvar TextContent_1 = __webpack_require__(/*! ./TextContent */ \"./src/shared/lists/CardsList/Card/TextContent/index.ts\");\nvar Preview_1 = __webpack_require__(/*! ./Preview */ \"./src/shared/lists/CardsList/Card/Preview/index.ts\");\nvar Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/shared/lists/CardsList/Card/Menu/index.ts\");\nvar Controls_1 = __webpack_require__(/*! ../../../components/Controls */ \"./src/shared/components/Controls/index.ts\");\nfunction Card() {\n    return (react_1.default.createElement(\"li\", { className: card_css_1.default.card },\n        react_1.default.createElement(TextContent_1.TextContent, null),\n        react_1.default.createElement(Preview_1.Preview, null),\n        react_1.default.createElement(Menu_1.Menu, null),\n        react_1.default.createElement(Controls_1.Controls, null)));\n}\nexports.Card = Card;\n\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/lists/CardsList/Card/Menu/Menu.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/lists/CardsList/Card/Menu/Menu.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Menu = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/lists/CardsList/Card/Menu/menu.css\"));\nvar Icons_1 = __webpack_require__(/*! ../../../../components/Icons */ \"./src/shared/components/Icons/index.ts\");\nvar Dropdown_1 = __webpack_require__(/*! ../../../../components/Dropdown */ \"./src/shared/components/Dropdown/index.ts\");\nvar MenuItemsList_1 = __webpack_require__(/*! ../MenuItemsList */ \"./src/shared/lists/CardsList/Card/MenuItemsList/index.ts\");\nfunction Menu() {\n    return (react_1.default.createElement(\"div\", { className: menu_css_1.default.menu },\n        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(\"button\", { className: menu_css_1.default.menuButton },\n                react_1.default.createElement(Icons_1.MenuIcon, null)) },\n            react_1.default.createElement(\"div\", { className: menu_css_1.default.dropdown },\n                react_1.default.createElement(MenuItemsList_1.MenuItemsList, { postId: \"1234\" }),\n                react_1.default.createElement(\"button\", { className: menu_css_1.default.closeButton })))));\n}\nexports.Menu = Menu;\n\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/lists/CardsList/Card/Menu/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/lists/CardsList/Card/Menu/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Menu */ \"./src/shared/lists/CardsList/Card/Menu/Menu.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/Card/Menu/index.ts?");

/***/ }),

/***/ "./src/shared/lists/CardsList/Card/Menu/menu.css":
/*!*******************************************************!*\
  !*** ./src/shared/lists/CardsList/Card/Menu/menu.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menu\": \"menu__menu--2tXMe\",\n\t\"menuButton\": \"menu__menuButton--3eiHW\",\n\t\"dropdown\": \"menu__dropdown--3FZP8\",\n\t\"closeButton\": \"menu__closeButton--3YdDp\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/Card/Menu/menu.css?");

/***/ }),

/***/ "./src/shared/lists/CardsList/Card/MenuItemsList/MenuItemsList.tsx":
/*!*************************************************************************!*\
  !*** ./src/shared/lists/CardsList/Card/MenuItemsList/MenuItemsList.tsx ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.MenuItemsList = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar menuitemslist_css_1 = __importDefault(__webpack_require__(/*! ./menuitemslist.css */ \"./src/shared/lists/CardsList/Card/MenuItemsList/menuitemslist.css\"));\nvar Icons_1 = __webpack_require__(/*! ../../../../components/Icons */ \"./src/shared/components/Icons/index.ts\");\nfunction MenuItemsList(_a) {\n    var postId = _a.postId;\n    return (react_1.default.createElement(\"ul\", { className: menuitemslist_css_1.default.menuItemsList },\n        react_1.default.createElement(\"li\", { className: menuitemslist_css_1.default.menuItem, onClick: function () { return console.log(postId); } },\n            react_1.default.createElement(Icons_1.BlockIcon, null)),\n        react_1.default.createElement(\"div\", { className: menuitemslist_css_1.default.divider }),\n        react_1.default.createElement(\"li\", { className: menuitemslist_css_1.default.menuItem },\n            react_1.default.createElement(Icons_1.WarningIcon, null))));\n}\nexports.MenuItemsList = MenuItemsList;\n\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/Card/MenuItemsList/MenuItemsList.tsx?");

/***/ }),

/***/ "./src/shared/lists/CardsList/Card/MenuItemsList/index.ts":
/*!****************************************************************!*\
  !*** ./src/shared/lists/CardsList/Card/MenuItemsList/index.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./MenuItemsList */ \"./src/shared/lists/CardsList/Card/MenuItemsList/MenuItemsList.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/Card/MenuItemsList/index.ts?");

/***/ }),

/***/ "./src/shared/lists/CardsList/Card/MenuItemsList/menuitemslist.css":
/*!*************************************************************************!*\
  !*** ./src/shared/lists/CardsList/Card/MenuItemsList/menuitemslist.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menuItemsList\": \"menuitemslist__menuItemsList--Sy2UR\",\n\t\"menuItem\": \"menuitemslist__menuItem--2ygun\",\n\t\"divider\": \"menuitemslist__divider--3s5tR\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/Card/MenuItemsList/menuitemslist.css?");

/***/ }),

/***/ "./src/shared/lists/CardsList/Card/Preview/Preview.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/lists/CardsList/Card/Preview/Preview.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Preview = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar preview_css_1 = __importDefault(__webpack_require__(/*! ./preview.css */ \"./src/shared/lists/CardsList/Card/Preview/preview.css\"));\nvar preview1_png_1 = __importDefault(__webpack_require__(/*! ./preview1.png */ \"./src/shared/lists/CardsList/Card/Preview/preview1.png\"));\nfunction Preview() {\n    return (react_1.default.createElement(\"div\", { className: preview_css_1.default.preview },\n        react_1.default.createElement(\"img\", { src: preview1_png_1.default, alt: \"preview\", className: preview_css_1.default.previewImg })));\n}\nexports.Preview = Preview;\n\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/Card/Preview/Preview.tsx?");

/***/ }),

/***/ "./src/shared/lists/CardsList/Card/Preview/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/lists/CardsList/Card/Preview/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Preview */ \"./src/shared/lists/CardsList/Card/Preview/Preview.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/Card/Preview/index.ts?");

/***/ }),

/***/ "./src/shared/lists/CardsList/Card/Preview/preview.css":
/*!*************************************************************!*\
  !*** ./src/shared/lists/CardsList/Card/Preview/preview.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"preview\": \"preview__preview--AQdp-\",\n\t\"previewImg\": \"preview__previewImg--jLK3K\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/Card/Preview/preview.css?");

/***/ }),

/***/ "./src/shared/lists/CardsList/Card/Preview/preview1.png":
/*!**************************************************************!*\
  !*** ./src/shared/lists/CardsList/Card/Preview/preview1.png ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/static/preview1.png\");\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/Card/Preview/preview1.png?");

/***/ }),

/***/ "./src/shared/lists/CardsList/Card/TextContent/MetaData/CreatedAt/CreatedAt.tsx":
/*!**************************************************************************************!*\
  !*** ./src/shared/lists/CardsList/Card/TextContent/MetaData/CreatedAt/CreatedAt.tsx ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CreatedAt = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar createdat_css_1 = __importDefault(__webpack_require__(/*! ./createdat.css */ \"./src/shared/lists/CardsList/Card/TextContent/MetaData/CreatedAt/createdat.css\"));\nfunction CreatedAt() {\n    return (react_1.default.createElement(\"span\", { className: createdat_css_1.default.createdAt },\n        react_1.default.createElement(\"span\", { className: createdat_css_1.default.publishedLabel }, \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \"),\n        \"4 \\u0447\\u0430\\u0441\\u0430 \\u043D\\u0430\\u0437\\u0430\\u0434\"));\n}\nexports.CreatedAt = CreatedAt;\n\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/Card/TextContent/MetaData/CreatedAt/CreatedAt.tsx?");

/***/ }),

/***/ "./src/shared/lists/CardsList/Card/TextContent/MetaData/CreatedAt/createdat.css":
/*!**************************************************************************************!*\
  !*** ./src/shared/lists/CardsList/Card/TextContent/MetaData/CreatedAt/createdat.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"createdAt\": \"createdat__createdAt--2c1tT\",\n\t\"publishedLabel\": \"createdat__publishedLabel--2GVQ6\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/Card/TextContent/MetaData/CreatedAt/createdat.css?");

/***/ }),

/***/ "./src/shared/lists/CardsList/Card/TextContent/MetaData/CreatedAt/index.ts":
/*!*********************************************************************************!*\
  !*** ./src/shared/lists/CardsList/Card/TextContent/MetaData/CreatedAt/index.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CreatedAt */ \"./src/shared/lists/CardsList/Card/TextContent/MetaData/CreatedAt/CreatedAt.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/Card/TextContent/MetaData/CreatedAt/index.ts?");

/***/ }),

/***/ "./src/shared/lists/CardsList/Card/TextContent/MetaData/MetaData.tsx":
/*!***************************************************************************!*\
  !*** ./src/shared/lists/CardsList/Card/TextContent/MetaData/MetaData.tsx ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.MetaData = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar metadata_css_1 = __importDefault(__webpack_require__(/*! ./metadata.css */ \"./src/shared/lists/CardsList/Card/TextContent/MetaData/metadata.css\"));\nvar UserLink_1 = __webpack_require__(/*! ./UserLink */ \"./src/shared/lists/CardsList/Card/TextContent/MetaData/UserLink/index.ts\");\nvar CreatedAt_1 = __webpack_require__(/*! ./CreatedAt */ \"./src/shared/lists/CardsList/Card/TextContent/MetaData/CreatedAt/index.ts\");\nfunction MetaData() {\n    return (react_1.default.createElement(\"div\", { className: metadata_css_1.default.metadata },\n        react_1.default.createElement(UserLink_1.UserLink, null),\n        react_1.default.createElement(CreatedAt_1.CreatedAt, null)));\n}\nexports.MetaData = MetaData;\n\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/Card/TextContent/MetaData/MetaData.tsx?");

/***/ }),

/***/ "./src/shared/lists/CardsList/Card/TextContent/MetaData/UserLink/UserLink.tsx":
/*!************************************************************************************!*\
  !*** ./src/shared/lists/CardsList/Card/TextContent/MetaData/UserLink/UserLink.tsx ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.UserLink = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar userlink_css_1 = __importDefault(__webpack_require__(/*! ./userlink.css */ \"./src/shared/lists/CardsList/Card/TextContent/MetaData/UserLink/userlink.css\"));\nvar userimg1_png_1 = __importDefault(__webpack_require__(/*! ./userimg1.png */ \"./src/shared/lists/CardsList/Card/TextContent/MetaData/UserLink/userimg1.png\"));\nfunction UserLink() {\n    return (react_1.default.createElement(\"div\", { className: userlink_css_1.default.userlink },\n        react_1.default.createElement(\"img\", { src: userimg1_png_1.default, alt: \"Avatar\", className: userlink_css_1.default.userlink__img }),\n        react_1.default.createElement(\"a\", { href: \"#\", className: userlink_css_1.default.userlink__name }, \"\\u0414\\u043C\\u0438\\u0442\\u0440\\u0438\\u0439 \\u0413\\u0440\\u0438\\u0448\\u0438\\u043D\")));\n}\nexports.UserLink = UserLink;\n\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/Card/TextContent/MetaData/UserLink/UserLink.tsx?");

/***/ }),

/***/ "./src/shared/lists/CardsList/Card/TextContent/MetaData/UserLink/index.ts":
/*!********************************************************************************!*\
  !*** ./src/shared/lists/CardsList/Card/TextContent/MetaData/UserLink/index.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./UserLink */ \"./src/shared/lists/CardsList/Card/TextContent/MetaData/UserLink/UserLink.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/Card/TextContent/MetaData/UserLink/index.ts?");

/***/ }),

/***/ "./src/shared/lists/CardsList/Card/TextContent/MetaData/UserLink/userimg1.png":
/*!************************************************************************************!*\
  !*** ./src/shared/lists/CardsList/Card/TextContent/MetaData/UserLink/userimg1.png ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/static/userimg1.png\");\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/Card/TextContent/MetaData/UserLink/userimg1.png?");

/***/ }),

/***/ "./src/shared/lists/CardsList/Card/TextContent/MetaData/UserLink/userlink.css":
/*!************************************************************************************!*\
  !*** ./src/shared/lists/CardsList/Card/TextContent/MetaData/UserLink/userlink.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userlink\": \"userlink__userlink--2Binz\",\n\t\"userlink__img\": \"userlink__userlink__img--ekMOz\",\n\t\"userlink__name\": \"userlink__userlink__name--2KeXs\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/Card/TextContent/MetaData/UserLink/userlink.css?");

/***/ }),

/***/ "./src/shared/lists/CardsList/Card/TextContent/MetaData/index.ts":
/*!***********************************************************************!*\
  !*** ./src/shared/lists/CardsList/Card/TextContent/MetaData/index.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./MetaData */ \"./src/shared/lists/CardsList/Card/TextContent/MetaData/MetaData.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/Card/TextContent/MetaData/index.ts?");

/***/ }),

/***/ "./src/shared/lists/CardsList/Card/TextContent/MetaData/metadata.css":
/*!***************************************************************************!*\
  !*** ./src/shared/lists/CardsList/Card/TextContent/MetaData/metadata.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"metadata\": \"metadata__metadata--29x0-\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/Card/TextContent/MetaData/metadata.css?");

/***/ }),

/***/ "./src/shared/lists/CardsList/Card/TextContent/TextContent.tsx":
/*!*********************************************************************!*\
  !*** ./src/shared/lists/CardsList/Card/TextContent/TextContent.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.TextContent = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar textcontent_css_1 = __importDefault(__webpack_require__(/*! ./textcontent.css */ \"./src/shared/lists/CardsList/Card/TextContent/textcontent.css\"));\nvar Title_1 = __webpack_require__(/*! ./Title */ \"./src/shared/lists/CardsList/Card/TextContent/Title/index.ts\");\nvar MetaData_1 = __webpack_require__(/*! ./MetaData */ \"./src/shared/lists/CardsList/Card/TextContent/MetaData/index.ts\");\nfunction TextContent() {\n    return (react_1.default.createElement(\"div\", { className: textcontent_css_1.default.textContent },\n        react_1.default.createElement(MetaData_1.MetaData, null),\n        react_1.default.createElement(Title_1.Title, null)));\n}\nexports.TextContent = TextContent;\n\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/lists/CardsList/Card/TextContent/Title/Title.tsx":
/*!*********************************************************************!*\
  !*** ./src/shared/lists/CardsList/Card/TextContent/Title/Title.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Title = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar title_css_1 = __importDefault(__webpack_require__(/*! ./title.css */ \"./src/shared/lists/CardsList/Card/TextContent/Title/title.css\"));\nvar Post_1 = __webpack_require__(/*! ../../../../../components/Post */ \"./src/shared/components/Post/index.ts\");\nfunction Title() {\n    var _a = (0, react_1.useState)(false), isModalOpened = _a[0], setIsModalOpened = _a[1];\n    return (react_1.default.createElement(\"h2\", { className: title_css_1.default.title },\n        react_1.default.createElement(\"a\", { href: \"#user-post\", onClick: function () {\n                setIsModalOpened(true);\n            } }, \"\\u0420\\u0435\\u0430\\u043B\\u0438\\u0437\\u0430\\u0446\\u0438\\u044F \\u043D\\u0430\\u043C\\u0435\\u0447\\u0435\\u043D\\u043D\\u044B\\u0445 \\u043F\\u043B\\u0430\\u043D\\u043E\\u0432\\u044B\\u0445 \\u0437\\u0430\\u0434\\u0430\\u043D\\u0438\\u0439 Lorem ipsum dolor sit amet.\"),\n        isModalOpened && (react_1.default.createElement(Post_1.Post, { onClose: function () {\n                setIsModalOpened(false);\n            } }))));\n}\nexports.Title = Title;\n// @bem-react/core\n\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/Card/TextContent/Title/Title.tsx?");

/***/ }),

/***/ "./src/shared/lists/CardsList/Card/TextContent/Title/index.ts":
/*!********************************************************************!*\
  !*** ./src/shared/lists/CardsList/Card/TextContent/Title/index.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Title */ \"./src/shared/lists/CardsList/Card/TextContent/Title/Title.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/Card/TextContent/Title/index.ts?");

/***/ }),

/***/ "./src/shared/lists/CardsList/Card/TextContent/Title/title.css":
/*!*********************************************************************!*\
  !*** ./src/shared/lists/CardsList/Card/TextContent/Title/title.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"title\": \"title__title--1iG8F\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/Card/TextContent/Title/title.css?");

/***/ }),

/***/ "./src/shared/lists/CardsList/Card/TextContent/index.ts":
/*!**************************************************************!*\
  !*** ./src/shared/lists/CardsList/Card/TextContent/index.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./TextContent */ \"./src/shared/lists/CardsList/Card/TextContent/TextContent.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/Card/TextContent/index.ts?");

/***/ }),

/***/ "./src/shared/lists/CardsList/Card/TextContent/textcontent.css":
/*!*********************************************************************!*\
  !*** ./src/shared/lists/CardsList/Card/TextContent/textcontent.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"textContent\": \"textcontent__textContent--MsI3D\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/Card/TextContent/textcontent.css?");

/***/ }),

/***/ "./src/shared/lists/CardsList/Card/card.css":
/*!**************************************************!*\
  !*** ./src/shared/lists/CardsList/Card/card.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"card__card--23ak2\",\n\t\"textContent\": \"card__textContent--2Gh9k\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/Card/card.css?");

/***/ }),

/***/ "./src/shared/lists/CardsList/Card/index.ts":
/*!**************************************************!*\
  !*** ./src/shared/lists/CardsList/Card/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Card */ \"./src/shared/lists/CardsList/Card/Card.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/Card/index.ts?");

/***/ }),

/***/ "./src/shared/lists/CardsList/CardsList.tsx":
/*!**************************************************!*\
  !*** ./src/shared/lists/CardsList/CardsList.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CardsList = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/lists/CardsList/cardslist.css\"));\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/lists/CardsList/Card/index.ts\");\nfunction CardsList() {\n    return (react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardslist },\n        react_1.default.createElement(Card_1.Card, null)));\n}\nexports.CardsList = CardsList;\n\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/lists/CardsList/cardslist.css":
/*!**************************************************!*\
  !*** ./src/shared/lists/CardsList/cardslist.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardslist\": \"cardslist__cardslist--1-3qQ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/cardslist.css?");

/***/ }),

/***/ "./src/shared/lists/CardsList/index.ts":
/*!*********************************************!*\
  !*** ./src/shared/lists/CardsList/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CardsList */ \"./src/shared/lists/CardsList/CardsList.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/lists/CardsList/index.ts?");

/***/ }),

/***/ "./src/shared/main.global.css":
/*!************************************!*\
  !*** ./src/shared/main.global.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n:root {\\n  --whiteLightness: 100%;\\n  --black: #333333;\\n  --white: hsl(0, 0%, var(--whiteLightness));\\n  --orange: #cc6633;\\n  --green: #A4cc33;\\n  --greyF3: hsl(0, 0%, calc(var(--whiteLightness) - 4%));\\n  --greyEC: hsl(0, 0%, calc(var(--whiteLightness) - 7%));\\n  --greyF4: hsl(0, 0%, calc(var(--whiteLightness) - 15%));\\n  --greyD9: hsl(0, 0%, calc(var(--whiteLightness) - 23%));\\n  --greyC4: hsl(0, 0%, calc(var(--whiteLightness) - 40%));\\n  --grey99: hsl(0, 0%, calc(var(--whiteLightness) - 60%));\\n}\\n\\nhtml {\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background-color: var(--greyF4);\\n  font-size: 16px;\\n  line-height: 16px;\\n  font-family: 'Roboto', serif;\\n  font-style: normal;\\n  font-weight: normal;\\n}\\n\\n* {\\n  color: var(--black);\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  margin: 0;\\n  padding: 0;\\n}\\nimg {\\n  max-width: 100%;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: inherit;\\n}\\n\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\n\\nbutton {\\n  background: transparent;\\n  outline: none;\\n  border: 0;\\n  cursor: pointer;\\n}\\n\\n\\n.container {\\n  margin: 0 auto;\\n  padding: 0 20px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/main.global.css?");

/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.rootReducer = exports.updateComment = void 0;\nvar initialState = {\n    commentText: 'Hello, Skillbox',\n};\nvar UPDATE_COMMENT = 'UPDATE_COMMENT';\nvar updateComment = function (text) { return ({\n    type: UPDATE_COMMENT,\n    text: text,\n}); };\nexports.updateComment = updateComment;\nvar rootReducer = function (state, action) {\n    if (state === void 0) { state = initialState; }\n    switch (action.type) {\n        case UPDATE_COMMENT:\n            return __assign(__assign({}, state), { commentText: action.text });\n        default:\n            return state;\n    }\n};\nexports.rootReducer = rootReducer;\n\n\n//# sourceURL=webpack:///./src/store.ts?");

/***/ }),

/***/ "./src/utils/js/assoc.ts":
/*!*******************************!*\
  !*** ./src/utils/js/assoc.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.assoc = void 0;\n// добавляет в объект какие-то значения\n//  принимает два аргумента ключ и значение\nfunction assoc(key, value) {\n    return function (obj) {\n        var _a;\n        return (__assign(__assign({}, obj), (_a = {}, _a[key] = value, _a)));\n    };\n}\nexports.assoc = assoc;\n\n\n//# sourceURL=webpack:///./src/utils/js/assoc.ts?");

/***/ }),

/***/ "./src/utils/react/generateRandomIndex.ts":
/*!************************************************!*\
  !*** ./src/utils/react/generateRandomIndex.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.generateId = exports.assignId = exports.generateRandomString = void 0;\nvar assoc_1 = __webpack_require__(/*! ../js/assoc */ \"./src/utils/js/assoc.ts\");\nvar generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };\nexports.generateRandomString = generateRandomString;\nexports.assignId = (0, assoc_1.assoc)('id', (0, exports.generateRandomString)());\nvar generateId = function (obj) { return (0, assoc_1.assoc)('id', (0, exports.generateRandomString)())(obj); };\nexports.generateId = generateId;\n\n\n//# sourceURL=webpack:///./src/utils/react/generateRandomIndex.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ })

/******/ });