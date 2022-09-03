webpackHotUpdate("main",{

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar ReactDOM = __importStar(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\nvar App_1 = __webpack_require__(/*! ../shared/App */ \"./src/shared/App.tsx\");\nwindow.addEventListener('load', function () {\n    ReactDOM.hydrate(React.createElement(App_1.App, null), document.getElementById('react_root'));\n});\n\n\n//# sourceURL=webpack:///./src/client/index.jsx?");

/***/ }),

/***/ "./src/shared/App.tsx":
/*!****************************!*\
  !*** ./src/shared/App.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n__webpack_require__(/*! ./main.global.scss */ \"./src/shared/main.global.scss\");\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\nvar Layout_1 = __webpack_require__(/*! ./Layout */ \"./src/shared/Layout/index.ts\");\nvar Header_1 = __webpack_require__(/*! ./Header */ \"./src/shared/Header/index.ts\");\nvar Content_1 = __webpack_require__(/*! ./Content */ \"./src/shared/Content/index.ts\");\nvar CardsList_1 = __webpack_require__(/*! ./CardsList */ \"./src/shared/CardsList/index.ts\");\nvar generateRandomIndex_1 = __webpack_require__(/*! ../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\nvar store_1 = __webpack_require__(/*! ../store */ \"./src/store.ts\");\nvar LIST = [\n    { As: 'li', text: 'some' },\n    { As: 'li', text: 'other some' },\n    { As: 'li', text: 'some' }\n].map(generateRandomIndex_1.generateId);\nvar store = redux_1.createStore(store_1.rootReducer, redux_devtools_extension_1.composeWithDevTools());\nfunction AppComponent() {\n    var _a = react_1.default.useState(LIST), list = _a[0], setList = _a[1];\n    var handleItemClick = function (id) {\n        setList(list.filter(function (item) { return item.id != id; }));\n    };\n    var handleAdd = function () {\n        setList(list.concat(generateRandomIndex_1.generateId({ text: generateRandomIndex_1.generateRandomString(), As: 'li' })));\n    };\n    return (react_1.default.createElement(Layout_1.Layout, null,\n        react_1.default.createElement(Header_1.Header, null),\n        react_1.default.createElement(Content_1.Content, null,\n            react_1.default.createElement(CardsList_1.CardsList, null),\n            react_1.default.createElement(\"br\", null))));\n}\n// function AppComponent() {\n// const [isVisible, setIsVisible] = React.useState(false);\n// const [ title, setTitle ] = React.useState('');\n// const [ list, setList ] = React.useState(LIST);\n// const handleItemClick = (id: string) => {\n//   // console.log(id);\n//   setList(list.filter((item) => item.id !== id ));\n// }\n// const handleAdd = () => {\n//   setList(list.concat(generateId({ text: generateRandomString(), As: 'li' as const})));\n// }\n// const [token] = useToken();\n// return (\n//   <Provider store={store} >\n//     <tokenContext.Provider value={token} >\n//       <UserContextProvider >\n//         <Layout >\n//           <Header />\n//           <Content >\n//             <CardsList />\n//             {/*<button onClick={handleAdd}>Add element</button>*/}\n//             {/*<button onClick={() => setIsVisible(!isVisible)}>Change me!</button>*/}\n//             {/*<input type=\"text\" onChange={getValue(setTitle)} />*/}\n//             {/*{isVisible && <MyHooks title={title} id=\"11\" /> }*/}\n//\n//             {/*<MyList list={LIST} onClick={console.log} />*/}\n//             {/*<MyList list={LIST.map((item) =>( {...item, onClick: () =>{console.log(item.id)} }))} />*/}\n//             {/*<MyList list={LIST.map(merge( {onClick: () => {console.log('click')} }))} />*/}\n//             {/*<MyList list={list.map(merge( {onClick: handleItemClick }))} />*/}\n//             {/*<ul>*/}\n//             {/*  <GenericList list={list.map(merge( {onClick: handleItemClick }))} />*/}\n//             {/*</ul>*/}\n//             <br />\n//             {/*<div style={{padding: 20}} >*/}\n//             {/*  <Dropdown*/}\n//             {/*    onClose={() => console.log('closed')}*/}\n//             {/*    onOpen={() => console.log('opened')}*/}\n//             {/*    // isOpen={false}*/}\n//             {/*    button={<button >Test</button >}*/}\n//             {/*  >*/}\n//             {/*    <CardsList />*/}\n//             {/*    <br />*/}\n//             {/*    <Text size={20}*/}\n//             {/*          mobileSize={28}*/}\n//             {/*          bold >label1</Text >*/}\n//             {/*    <Break size={8}*/}\n//             {/*           mobileSize={16}*/}\n//             {/*           top />*/}\n//             {/*    <Text size={20} >label2</Text >*/}\n//             {/*    <Break size={8}*/}\n//             {/*           mobileSize={16}*/}\n//             {/*           top />*/}\n//             {/*    <Text size={20}*/}\n//             {/*          mobileSize={16} >label3</Text >*/}\n//\n//             {/*  </Dropdown >*/}\n//             {/*</div >*/}\n//           </Content >\n//\n//         </Layout >\n//       </UserContextProvider >\n//\n//     </tokenContext.Provider >\n//\n//   </Provider >\n// );\n// }\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\n//d реакте можно указать компонент для jsx необхяателно напрямую,а можно указать переменную\n//реакт для нативных элементов использует строковые названия 'a', 'li', 'div' итд эквивалентоно <li></li>\n// то есть мы берем переменную As укладываем в нее div и рендерим див\n// теперь можем сделать так <ul>  <GenericList list={list.map(merge( {onClick: handleItemClick }))} /> </ul> и каждому\n// элементу можно erpffnm свойство As как li в интерфейсе As: 'li',\n\n\n//# sourceURL=webpack:///./src/shared/App.tsx?");

/***/ })

})