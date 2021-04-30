webpackHotUpdate("main",{

/***/ "./src/shared/App.tsx":
/*!****************************!*\
  !*** ./src/shared/App.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\n__webpack_require__(/*! ./main.global.scss */ \"./src/shared/main.global.scss\");\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\nvar Layout_1 = __webpack_require__(/*! ./Layout */ \"./src/shared/Layout/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./Header */ \"./src/shared/Header/index.ts\");\r\nvar Content_1 = __webpack_require__(/*! ./Content */ \"./src/shared/Content/index.ts\");\r\nvar CardsList_1 = __webpack_require__(/*! ./CardsList */ \"./src/shared/CardsList/index.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ./GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar LIST = [\r\n    { value: 'some' },\r\n    { value: 'other some' },\r\n    { value: 'some' }\r\n].map(generateRandomIndex_1.generateId);\r\n// было в map (item) => ({ ...item, id: generateRandomString() })\r\n// import { MyHooks } from './HooksExample';\r\n// import { getValue } from './utils/react/pickFromSyntheticEvent';\r\n// function AppComponent() {\r\n//   return (\r\n//     <Layout>\r\n//       <Header />\r\n//       <Content>\r\n//         <CardsList/>\r\n//       </Content>\r\n//     </Layout>\r\n//   );\r\n// }\r\n//\r\nfunction AppComponent() {\r\n    // const [isVisible, setIsVisible] = React.useState(false);\r\n    // const [ title, setTitle ] = React.useState('');\r\n    var handleItemClick = function (id) {\r\n        console.log(id);\r\n    };\r\n    return (react_1.default.createElement(Layout_1.Layout, null,\r\n        react_1.default.createElement(Header_1.Header, null),\r\n        react_1.default.createElement(Content_1.Content, null,\r\n            react_1.default.createElement(CardsList_1.CardsList, null),\r\n            react_1.default.createElement(GenericList_1.MyList, { list: LIST }))));\r\n}\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/shared/App.tsx?");

/***/ }),

/***/ "./src/utils/react/generateRandomIndex.ts":
/*!************************************************!*\
  !*** ./src/utils/react/generateRandomIndex.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.generateId = exports.assignId = exports.generateRandomString = void 0;\r\nvar assoc_1 = __webpack_require__(/*! ../js/assoc */ \"./src/utils/js/assoc.ts\");\r\nvar generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };\r\nexports.generateRandomString = generateRandomString;\r\nexports.assignId = assoc_1.assoc('id', exports.generateRandomString()); // здесь generaterandomstring вызывается один раз\r\n//export const generateId = <O extends object>(obj: O) => assoc('id', generateRandomString()); //generaterandomstrimg dspsdftncz каждый раз когда мы вызываем ф-ю\r\nvar generateId = function (obj) { return exports.assignId(obj); };\r\nexports.generateId = generateId;\r\n// теперь каждый рахз мы .eltv dspsdfnm a-. assugnid в которую будем передавать  наш объект и который будет  сливать их вместе\r\n\n\n//# sourceURL=webpack:///./src/utils/react/generateRandomIndex.ts?");

/***/ })

})