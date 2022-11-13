/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst theming_1 = __importDefault(__webpack_require__(/*! ./modules/theming */ \"./src/modules/theming.ts\"));\r\nconst todoList_1 = __importDefault(__webpack_require__(/*! ./modules/todoList */ \"./src/modules/todoList.ts\"));\r\nnew theming_1.default();\r\nnew todoList_1.default();\r\n\n\n//# sourceURL=webpack://todo-list-ts/./src/index.ts?");

/***/ }),

/***/ "./src/modules/form.ts":
/*!*****************************!*\
  !*** ./src/modules/form.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst utils_1 = __webpack_require__(/*! ../utils */ \"./src/utils.ts\");\r\nclass Form {\r\n    constructor(inputs, submitButton, onSubmit) {\r\n        this.inputs = inputs;\r\n        this.submitButton = submitButton;\r\n        this.onSubmit = onSubmit;\r\n        this.getInputsValues = () => {\r\n            return this.inputs.map((value) => {\r\n                return {\r\n                    name: value.name,\r\n                    value: (0, utils_1.getElementBySelector)(value.selector)\r\n                        .value\r\n                };\r\n            });\r\n        };\r\n        this.submitButton.addEventListener('click', (e) => {\r\n            e.preventDefault();\r\n            this.onSubmit(this.getInputsValues());\r\n        });\r\n    }\r\n}\r\nexports[\"default\"] = Form;\r\n\n\n//# sourceURL=webpack://todo-list-ts/./src/modules/form.ts?");

/***/ }),

/***/ "./src/modules/theming.ts":
/*!********************************!*\
  !*** ./src/modules/theming.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst types_1 = __webpack_require__(/*! ../types */ \"./src/types.ts\");\r\nconst utils_1 = __webpack_require__(/*! ../utils */ \"./src/utils.ts\");\r\nclass Theming {\r\n    constructor() {\r\n        this.currentTheme = types_1.Themes.LIGHT;\r\n        this.setTheme = (theme) => {\r\n            darkmode.setDarkMode(theme === types_1.Themes.DARK);\r\n            this.currentTheme = theme;\r\n        };\r\n        const theme = (0, utils_1.getDataFromLocalStorage)(types_1.LocalStorageKeys.THEME);\r\n        this.currentTheme = theme === 'dark' ? types_1.Themes.DARK : types_1.Themes.LIGHT;\r\n        (0, utils_1.getElementBySelector)(types_1.Selectors.themeChanger).addEventListener('click', (e) => {\r\n            e.preventDefault();\r\n            this.setTheme(this.currentTheme === types_1.Themes.DARK ? types_1.Themes.LIGHT : types_1.Themes.DARK);\r\n        });\r\n    }\r\n}\r\nexports[\"default\"] = Theming;\r\n\n\n//# sourceURL=webpack://todo-list-ts/./src/modules/theming.ts?");

/***/ }),

/***/ "./src/modules/todoList.ts":
/*!*********************************!*\
  !*** ./src/modules/todoList.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst types_1 = __webpack_require__(/*! ../types */ \"./src/types.ts\");\r\nconst utils_1 = __webpack_require__(/*! ../utils */ \"./src/utils.ts\");\r\nconst form_1 = __importDefault(__webpack_require__(/*! ./form */ \"./src/modules/form.ts\"));\r\nconst uniqid_1 = __importDefault(__webpack_require__(/*! uniqid */ \"./node_modules/uniqid/index.js\"));\r\nclass TodoList {\r\n    constructor() {\r\n        this.todos = [];\r\n        this.controlForm = () => {\r\n            const inputs = [\r\n                { name: types_1.InputsNames.TITLE, selector: types_1.Selectors.titleInput },\r\n                { name: types_1.InputsNames.TEXT, selector: types_1.Selectors.textInput }\r\n            ];\r\n            const onSubmit = (inputsValues) => {\r\n                const todo = {\r\n                    id: (0, uniqid_1.default)(),\r\n                    isCompleted: false,\r\n                    title: inputsValues[0].value,\r\n                    text: inputsValues[1].value\r\n                };\r\n                this.addTodo(todo);\r\n            };\r\n            const submitButton = (0, utils_1.getElementBySelector)(types_1.Selectors.submitButton);\r\n            new form_1.default(inputs, submitButton, onSubmit);\r\n        };\r\n        this.addTodo = (todo) => {\r\n            this.todos.push(todo);\r\n            (0, utils_1.setDataToLocalStorage)(types_1.LocalStorageKeys.TODO_LIST, this.todos);\r\n            this.render();\r\n        };\r\n        this.setCompletedTodo = (id, isCompleted) => {\r\n            this.todos.map((value) => {\r\n                if (value.id === id) {\r\n                    value.isCompleted = isCompleted;\r\n                }\r\n            });\r\n            (0, utils_1.setDataToLocalStorage)(types_1.LocalStorageKeys.TODO_LIST, this.todos);\r\n            this.render();\r\n        };\r\n        this.deleteTodo = (id) => {\r\n            console.log(id);\r\n            console.log(this.todos);\r\n            this.todos = this.todos.filter((value) => {\r\n                return value.id !== id;\r\n            });\r\n            (0, utils_1.setDataToLocalStorage)(types_1.LocalStorageKeys.TODO_LIST, this.todos);\r\n            this.render();\r\n        };\r\n        this.render = () => {\r\n            const cardsContainer = (0, utils_1.getElementBySelector)(types_1.Selectors.cardsContainer);\r\n            cardsContainer.innerHTML = '';\r\n            this.todos.forEach((todo) => {\r\n                var _a, _b;\r\n                const card = document.createElement('div');\r\n                card.className = 'card mb-3';\r\n                card.innerHTML = `\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title ${todo.isCompleted ? 'line-through' : ''}\">${todo.title}</h5>\r\n                    <p class=\"card-text ${todo.isCompleted ? 'line-through' : ''}\">\r\n                        ${todo.text}\r\n                    </p>\r\n                    <div class=\"buttons\">\r\n                        <button class=\"btn ${todo.isCompleted ? 'btn-secondary' : 'btn-success'} btn-complete\">${todo.isCompleted ? 'UNCOMPLETE' : 'COMPLETE'}</button>\r\n                        <button class=\"btn btn-outline-danger btn-delete\">\r\n                            DELETE\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            `;\r\n                (_a = card.querySelector('.btn-complete')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => {\r\n                    e.preventDefault();\r\n                    this.setCompletedTodo(todo.id, !todo.isCompleted);\r\n                });\r\n                (_b = card.querySelector('.btn-delete')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', (e) => {\r\n                    e.preventDefault();\r\n                    console.log('delete');\r\n                    this.deleteTodo(todo.id);\r\n                });\r\n                cardsContainer.insertAdjacentElement('beforeend', card);\r\n            });\r\n        };\r\n        const todos = (0, utils_1.getDataFromLocalStorage)(types_1.LocalStorageKeys.TODO_LIST);\r\n        this.controlForm();\r\n        this.todos = todos || [];\r\n        this.render();\r\n    }\r\n}\r\nexports[\"default\"] = TodoList;\r\n\n\n//# sourceURL=webpack://todo-list-ts/./src/modules/todoList.ts?");

/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\n// Theme\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.InputsNames = exports.Selectors = exports.LocalStorageKeys = exports.Themes = void 0;\r\nvar Themes;\r\n(function (Themes) {\r\n    Themes[\"DARK\"] = \"dark\";\r\n    Themes[\"LIGHT\"] = \"light\";\r\n})(Themes = exports.Themes || (exports.Themes = {}));\r\nvar LocalStorageKeys;\r\n(function (LocalStorageKeys) {\r\n    LocalStorageKeys[\"THEME\"] = \"bs.prefers-color-scheme\";\r\n    LocalStorageKeys[\"TODO_LIST\"] = \"todo-list\";\r\n})(LocalStorageKeys = exports.LocalStorageKeys || (exports.LocalStorageKeys = {}));\r\nvar Selectors;\r\n(function (Selectors) {\r\n    Selectors[\"themeChanger\"] = \"#theme-changer\";\r\n    Selectors[\"cardsContainer\"] = \"#cards-container\";\r\n    Selectors[\"titleInput\"] = \"#title-input\";\r\n    Selectors[\"textInput\"] = \"#text-input\";\r\n    Selectors[\"submitButton\"] = \"#submit-button\";\r\n})(Selectors = exports.Selectors || (exports.Selectors = {}));\r\n// Form\r\nvar InputsNames;\r\n(function (InputsNames) {\r\n    InputsNames[\"TITLE\"] = \"title\";\r\n    InputsNames[\"TEXT\"] = \"text\";\r\n})(InputsNames = exports.InputsNames || (exports.InputsNames = {}));\r\n\n\n//# sourceURL=webpack://todo-list-ts/./src/types.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getElementBySelector = exports.setDataToLocalStorage = exports.getDataFromLocalStorage = void 0;\r\nconst getDataFromLocalStorage = (key) => {\r\n    const recievedItem = localStorage.getItem(key);\r\n    try {\r\n        return JSON.parse(recievedItem);\r\n    }\r\n    catch (error) {\r\n        return recievedItem;\r\n    }\r\n};\r\nexports.getDataFromLocalStorage = getDataFromLocalStorage;\r\nconst setDataToLocalStorage = (key, value) => {\r\n    localStorage.setItem(key, JSON.stringify(value));\r\n};\r\nexports.setDataToLocalStorage = setDataToLocalStorage;\r\nconst getElementBySelector = (selector) => {\r\n    return document.querySelector(selector);\r\n};\r\nexports.getElementBySelector = getElementBySelector;\r\n\n\n//# sourceURL=webpack://todo-list-ts/./src/utils.ts?");

/***/ }),

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/***/ ((module) => {

eval("/* \n(The MIT License)\nCopyright (c) 2014-2021 Halász Ádám <adam@aimform.com>\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\n\n//  Unique Hexatridecimal ID Generator\n// ================================================\n\n//  Dependencies\n// ================================================\nvar pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '' ;\nvar address = '';\nif(false){ var i, networkInterfaces, mac, os; } \n\n//  Exports\n// ================================================\nmodule.exports = module.exports[\"default\"] = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }\nmodule.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }\nmodule.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }\n\n//  Helpers\n// ================================================\nfunction now(){\n    var time = Date.now();\n    var last = now.last || time;\n    return now.last = time > last ? time : last + 1;\n}\n\n\n//# sourceURL=webpack://todo-list-ts/./node_modules/uniqid/index.js?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;