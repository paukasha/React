webpackHotUpdate("main",{

/***/ "./src/shared/App.tsx":
/*!****************************!*\
  !*** ./src/shared/App.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\n__webpack_require__(/*! ./main.global.scss */ \"./src/shared/main.global.scss\");\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\nvar Layout_1 = __webpack_require__(/*! ./Layout */ \"./src/shared/Layout/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./Header */ \"./src/shared/Header/index.ts\");\r\nvar Content_1 = __webpack_require__(/*! ./Content */ \"./src/shared/Content/index.ts\");\r\nvar CardsList_1 = __webpack_require__(/*! ./CardsList */ \"./src/shared/CardsList/index.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar Dropdown_1 = __webpack_require__(/*! ./Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ./Text */ \"./src/shared/Text/index.ts\");\r\nvar Break_1 = __webpack_require__(/*! ./Break */ \"./src/shared/Break/index.ts\");\r\nvar useToken_1 = __webpack_require__(/*! ../hooks/useToken */ \"./src/hooks/useToken.ts\");\r\nvar tokenContext_1 = __webpack_require__(/*! ./context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\r\nvar userContext_1 = __webpack_require__(/*! ./context/userContext */ \"./src/shared/context/userContext.tsx\");\r\nvar commentContext_1 = __webpack_require__(/*! ./context/commentContext */ \"./src/shared/context/commentContext.ts\");\r\nvar LIST = [\r\n    { As: 'li', text: 'some' },\r\n    { As: 'li', text: 'other some' },\r\n    { As: 'li', text: 'some' }\r\n].map(generateRandomIndex_1.generateId);\r\n// было в map (item) => ({ ...item, id: generateRandomString() })\r\n// import { MyHooks } from './HooksExample';\r\n// import { getValue } from './utils/react/pickFromSyntheticEvent';\r\n// function AppComponent() {\r\n//   return (\r\n//     <Layout>\r\n//       <Header />\r\n//       <Content>\r\n//         <CardsList/>\r\n//       </Content>\r\n//     </Layout>\r\n//   );\r\n// }\r\n//\r\nfunction AppComponent() {\r\n    // const [isVisible, setIsVisible] = React.useState(false);\r\n    // const [ title, setTitle ] = React.useState('');\r\n    // const [ list, setList ] = React.useState(LIST);\r\n    // const handleItemClick = (id: string) => {\r\n    //   // console.log(id);\r\n    //   setList(list.filter((item) => item.id !== id ));\r\n    // }\r\n    // const handleAdd = () => {\r\n    //   setList(list.concat(generateId({ text: generateRandomString(), As: 'li' as const})));\r\n    // }\r\n    var _a = react_1.useState(''), commentValue = _a[0], setCommentValue = _a[1];\r\n    var token = useToken_1.useToken()[0];\r\n    var CommentProvider = commentContext_1.commentContext.Provider;\r\n    return (react_1.default.createElement(CommentProvider, { value: {\r\n            value: commentValue,\r\n            onChange: setCommentValue,\r\n        } },\r\n        react_1.default.createElement(tokenContext_1.tokenContext.Provider, { value: token },\r\n            react_1.default.createElement(userContext_1.UserContextProvider, null,\r\n                react_1.default.createElement(Layout_1.Layout, null,\r\n                    react_1.default.createElement(Header_1.Header, null),\r\n                    react_1.default.createElement(Content_1.Content, null,\r\n                        react_1.default.createElement(CardsList_1.CardsList, null),\r\n                        react_1.default.createElement(\"br\", null),\r\n                        react_1.default.createElement(\"div\", { style: { padding: 20 } },\r\n                            react_1.default.createElement(Dropdown_1.Dropdown, { onClose: function () { return console.log('closed'); }, onOpen: function () { return console.log('opened'); }, \r\n                                // isOpen={false}\r\n                                button: react_1.default.createElement(\"button\", null, \"Test\") },\r\n                                react_1.default.createElement(CardsList_1.CardsList, null),\r\n                                react_1.default.createElement(\"br\", null),\r\n                                react_1.default.createElement(Text_1.Text, { size: 20, mobileSize: 28, bold: true }, \"label1\"),\r\n                                react_1.default.createElement(Break_1.Break, { size: 8, mobileSize: 16, top: true }),\r\n                                react_1.default.createElement(Text_1.Text, { size: 20 }, \"label2\"),\r\n                                react_1.default.createElement(Break_1.Break, { size: 8, mobileSize: 16, top: true }),\r\n                                react_1.default.createElement(Text_1.Text, { size: 20, mobileSize: 16 }, \"label3\")))))))));\r\n}\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\r\n//d реакте можно указать компонент для jsx необхяателно напрямую,а можно указать переменную\r\n//реакт для нативных элементов использует строковые названия 'a', 'li', 'div' итд эквивалентоно <li></li>\r\n// то есть мы берем переменную As укладываем в нее div и рендерим див\r\n// теперь можем сделать так <ul>  <GenericList list={list.map(merge( {onClick: handleItemClick }))} /> </ul> и каждому\r\n// элементу можно erpffnm свойство As как li в интерфейсе As: 'li',\r\n\n\n//# sourceURL=webpack:///./src/shared/App.tsx?");

/***/ }),

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar commentform_scss_1 = __importDefault(__webpack_require__(/*! ./commentform.scss */ \"./src/shared/CommentForm/commentform.scss\"));\r\nvar commentContext_1 = __webpack_require__(/*! ../context/commentContext */ \"./src/shared/context/commentContext.ts\");\r\nfunction CommentForm() {\r\n    var _a = react_1.useContext(commentContext_1.commentContext), value = _a.value, onChange = _a.onChange;\r\n    function handleChange(event) {\r\n        onChange(event.target.value);\r\n    }\r\n    function handleSubmit(event) {\r\n        event.preventDefault();\r\n        console.log(value);\r\n    }\r\n    return (react_1.default.createElement(\"form\", { className: commentform_scss_1.default.form, onSubmit: handleSubmit },\r\n        react_1.default.createElement(\"textarea\", { className: commentform_scss_1.default.input, value: value, onChange: handleChange }),\r\n        react_1.default.createElement(\"button\", { type: \"submit\", className: commentform_scss_1.default.button }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")));\r\n}\r\nexports.CommentForm = CommentForm;\r\n// export function CommentForm() {\r\n//   const ref = useRef<HTMLTextAreaElement>(null);\r\n//\r\n//   function handleSubmit(event: FormEvent) {\r\n//     event.preventDefault();\r\n//     console.log(ref.current?.value);\r\n//   }\r\n//\r\n//   return (\r\n//     <form className={styles.form} onSubmit={handleSubmit}>\r\n//       <textarea className={styles.input} ref={ref}/>\r\n//       <button type=\"submit\" className={styles.button}>Комментировать</button>\r\n//     </form>\r\n//   );\r\n// }\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CommentForm/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/CommentForm/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentForm */ \"./src/shared/CommentForm/CommentForm.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/index.ts?");

/***/ }),

/***/ "./src/shared/context/commentContext.ts":
/*!**********************************************!*\
  !*** ./src/shared/context/commentContext.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.commentContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nexports.commentContext = react_1.default.createContext({\r\n    value: '',\r\n    onChange: function (value) { },\r\n});\r\n\n\n//# sourceURL=webpack:///./src/shared/context/commentContext.ts?");

/***/ })

})