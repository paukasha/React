webpackHotUpdate("main",{

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar commentform_scss_1 = __importDefault(__webpack_require__(/*! ./commentform.scss */ \"./src/shared/CommentForm/commentform.scss\"));\r\nfunction CommentForm() {\r\n    useContext(commentContext);\r\n    function handleChange(event) {\r\n        setValue(event.target.value);\r\n    }\r\n    function handleSubmit(event) {\r\n        event.preventDefault();\r\n        console.log(value);\r\n    }\r\n    return (react_1.default.createElement(\"form\", { className: commentform_scss_1.default.form, onSubmit: handleSubmit },\r\n        react_1.default.createElement(\"textarea\", { className: commentform_scss_1.default.input, value: value, onChange: handleChange }),\r\n        react_1.default.createElement(\"button\", { type: \"submit\", className: commentform_scss_1.default.button }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")));\r\n}\r\nexports.CommentForm = CommentForm;\r\n// export function CommentForm() {\r\n//   const ref = useRef<HTMLTextAreaElement>(null);\r\n//\r\n//   function handleSubmit(event: FormEvent) {\r\n//     event.preventDefault();\r\n//     console.log(ref.current?.value);\r\n//   }\r\n//\r\n//   return (\r\n//     <form className={styles.form} onSubmit={handleSubmit}>\r\n//       <textarea className={styles.input} ref={ref}/>\r\n//       <button type=\"submit\" className={styles.button}>Комментировать</button>\r\n//     </form>\r\n//   );\r\n// }\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CommentForm/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/CommentForm/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentForm */ \"./src/shared/CommentForm/CommentForm.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/index.ts?");

/***/ })

})