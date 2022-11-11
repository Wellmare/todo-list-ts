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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst theming_1 = __importDefault(__webpack_require__(/*! ./modules/theming */ \"./src/modules/theming.ts\"));\r\nconst todoList_1 = __importDefault(__webpack_require__(/*! ./modules/todoList */ \"./src/modules/todoList.ts\"));\r\nnew theming_1.default();\r\nnew todoList_1.default();\r\n\n\n//# sourceURL=webpack://todo-list-ts/./src/index.ts?");

/***/ }),

/***/ "./src/modules/theming.ts":
/*!********************************!*\
  !*** ./src/modules/theming.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst types_1 = __webpack_require__(/*! ../types */ \"./src/types.ts\");\r\nconst utils_1 = __webpack_require__(/*! ../utils */ \"./src/utils.ts\");\r\nclass Theming {\r\n    constructor() {\r\n        this.currentTheme = types_1.Themes.LIGHT;\r\n        this.setTheme = (theme) => {\r\n            darkmode.setDarkMode(theme === types_1.Themes.DARK);\r\n            this.currentTheme = theme;\r\n        };\r\n        const theme = (0, utils_1.getDataFromLocalStorage)(types_1.LocalStorageKeys.THEME);\r\n        this.currentTheme = theme === 'dark' ? types_1.Themes.DARK : types_1.Themes.LIGHT;\r\n        (0, utils_1.getElementBySelector)(types_1.Selectors.themeChanger).addEventListener('click', (e) => {\r\n            e.preventDefault();\r\n            this.setTheme(this.currentTheme === types_1.Themes.DARK ? types_1.Themes.LIGHT : types_1.Themes.DARK);\r\n        });\r\n    }\r\n}\r\nexports[\"default\"] = Theming;\r\n\n\n//# sourceURL=webpack://todo-list-ts/./src/modules/theming.ts?");

/***/ }),

/***/ "./src/modules/todoList.ts":
/*!*********************************!*\
  !*** ./src/modules/todoList.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst types_1 = __webpack_require__(/*! ../types */ \"./src/types.ts\");\r\nconst utils_1 = __webpack_require__(/*! ../utils */ \"./src/utils.ts\");\r\nclass TodoList {\r\n    constructor() {\r\n        this.addTodo = (todo) => {\r\n            this.todos.push(todo);\r\n            (0, utils_1.setDataToLocalStorage)(types_1.LocalStorageKeys.TODO_LIST, this.todos);\r\n            this.render();\r\n        };\r\n        this.setCompletedTodo = (id, isCompleted) => {\r\n            this.todos.map((value) => {\r\n                if (value.id === id) {\r\n                    value.isCompleted = isCompleted;\r\n                }\r\n            });\r\n            (0, utils_1.setDataToLocalStorage)(types_1.LocalStorageKeys.TODO_LIST, this.todos);\r\n            this.render();\r\n        };\r\n        this.deleteTodo = (id) => {\r\n            console.log(id);\r\n            console.log(this.todos);\r\n            this.todos = this.todos.filter((value) => {\r\n                return value.id !== id;\r\n            });\r\n            (0, utils_1.setDataToLocalStorage)(types_1.LocalStorageKeys.TODO_LIST, this.todos);\r\n            this.render();\r\n        };\r\n        this.render = () => {\r\n            const cardsContainer = (0, utils_1.getElementBySelector)(types_1.Selectors.cardsContainer);\r\n            cardsContainer.innerHTML = '';\r\n            this.todos.forEach((todo) => {\r\n                var _a, _b;\r\n                const card = document.createElement('div');\r\n                card.className = 'card mb-3';\r\n                card.innerHTML = `\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title ${todo.isCompleted ? 'line-through' : ''}\">${todo.title}</h5>\r\n                    <p class=\"card-text ${todo.isCompleted ? 'line-through' : ''}\">\r\n                        ${todo.text}\r\n                    </p>\r\n                    <div class=\"buttons\">\r\n                        <button class=\"btn ${todo.isCompleted ? 'btn-secondary' : 'btn-success'} btn-complete\">${todo.isCompleted ? 'UNCOMPLETE' : 'COMPLETE'}</button>\r\n                        <button class=\"btn btn-outline-danger btn-delete\">\r\n                            DELETE\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            `;\r\n                (_a = card.querySelector('.btn-complete')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => {\r\n                    e.preventDefault();\r\n                    this.setCompletedTodo(todo.id, !todo.isCompleted);\r\n                });\r\n                (_b = card.querySelector('.btn-delete')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', (e) => {\r\n                    e.preventDefault();\r\n                    console.log('delete');\r\n                    this.deleteTodo(todo.id);\r\n                });\r\n                cardsContainer.insertAdjacentElement('beforeend', card);\r\n            });\r\n        };\r\n        this.todos = (0, utils_1.getDataFromLocalStorage)(types_1.LocalStorageKeys.TODO_LIST) || [];\r\n        this.render();\r\n    }\r\n}\r\nexports[\"default\"] = TodoList;\r\n\n\n//# sourceURL=webpack://todo-list-ts/./src/modules/todoList.ts?");

/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\n// Theme\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Selectors = exports.LocalStorageKeys = exports.Themes = void 0;\r\nvar Themes;\r\n(function (Themes) {\r\n    Themes[\"DARK\"] = \"dark\";\r\n    Themes[\"LIGHT\"] = \"light\";\r\n})(Themes = exports.Themes || (exports.Themes = {}));\r\nvar LocalStorageKeys;\r\n(function (LocalStorageKeys) {\r\n    LocalStorageKeys[\"THEME\"] = \"bs.prefers-color-scheme\";\r\n    LocalStorageKeys[\"TODO_LIST\"] = \"todo-list\";\r\n})(LocalStorageKeys = exports.LocalStorageKeys || (exports.LocalStorageKeys = {}));\r\nvar Selectors;\r\n(function (Selectors) {\r\n    Selectors[\"themeChanger\"] = \"#theme-changer\";\r\n    Selectors[\"cardsContainer\"] = \"#cards-container\";\r\n})(Selectors = exports.Selectors || (exports.Selectors = {}));\r\n\n\n//# sourceURL=webpack://todo-list-ts/./src/types.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getElementBySelector = exports.setDataToLocalStorage = exports.getDataFromLocalStorage = void 0;\r\nconst getDataFromLocalStorage = (key) => {\r\n    const recievedItem = localStorage.getItem(key);\r\n    try {\r\n        return JSON.parse(recievedItem);\r\n    }\r\n    catch (error) {\r\n        return recievedItem;\r\n    }\r\n};\r\nexports.getDataFromLocalStorage = getDataFromLocalStorage;\r\nconst setDataToLocalStorage = (key, value) => {\r\n    localStorage.setItem(key, JSON.stringify(value));\r\n};\r\nexports.setDataToLocalStorage = setDataToLocalStorage;\r\nconst getElementBySelector = (selector) => {\r\n    return document.querySelector(selector);\r\n};\r\nexports.getElementBySelector = getElementBySelector;\r\n\n\n//# sourceURL=webpack://todo-list-ts/./src/utils.ts?");

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