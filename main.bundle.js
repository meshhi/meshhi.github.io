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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ \"./src/js/app.js\");\n\n\n\n// Точка входа webpack\n// Не пишите код в данном файле\n\n//# sourceURL=webpack://js-advanced-diploma/./src/index.js?");

/***/ }),

/***/ "./src/js/Bot.js":
/*!***********************!*\
  !*** ./src/js/Bot.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = \"function\" == typeof Symbol ? Symbol : {}, a = i.iterator || \"@@iterator\", c = i.asyncIterator || \"@@asyncIterator\", u = i.toStringTag || \"@@toStringTag\"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, \"\"); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, \"_invoke\", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: \"normal\", arg: t.call(e, r) }; } catch (t) { return { type: \"throw\", arg: t }; } } e.wrap = wrap; var h = \"suspendedStart\", l = \"suspendedYield\", f = \"executing\", s = \"completed\", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { [\"next\", \"throw\", \"return\"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if (\"throw\" !== c.type) { var u = c.arg, h = u.value; return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) { invoke(\"next\", t, i, a); }, function (t) { invoke(\"throw\", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke(\"throw\", t, i, a); }); } a(c.arg); } var r; o(this, \"_invoke\", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error(\"Generator is already running\"); if (o === s) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = f; var p = tryCatch(e, r, n); if (\"normal\" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y; var i = tryCatch(o, e.iterator, r.arg); if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = \"normal\", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: \"root\" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || \"\" === e) { var r = e[a]; if (r) return r.call(e); if (\"function\" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) { var e = \"function\" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () { return this; }), define(g, \"toString\", function () { return \"[object Generator]\"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if (\"root\" === i.tryLoc) return handle(\"end\"); if (i.tryLoc <= this.prev) { var c = n.call(i, \"catchLoc\"), u = n.call(i, \"finallyLoc\"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error(\"try statement without catch or finally\"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) { var i = o; break; } } i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, \"catch\": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if (\"throw\" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, \"next\" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nvar Bot = /*#__PURE__*/_createClass(function Bot() {\n  var _ref;\n  _classCallCheck(this, Bot);\n  _defineProperty(this, \"makeMove\", function (_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8) {\n    return (_ref = _ref || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(cellClick, state, boardMatrix, cellEnter, boardSize, cellLeave, removeCurrentCellStyle, cells) {\n      var randomIndexCharacter, character, characterCoordinates, validMoveCoords, randomMoveCoordIndex, randomMoveCoord, randomMoveCoordPosition, characterCell, validAttackCoords, randomAttackCoordIndex, randomAttackCoord, randomAttackCoordPosition, characterCellAttack, enemyCharacterCell, counter, found;\n      return _regeneratorRuntime().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            console.log(\"bot start\");\n            randomIndexCharacter = Math.floor(Math.random() * state.teams[\"2\"].length);\n            character = state.teams[\"2\"][randomIndexCharacter];\n            while (character.position == -1 || character.character.health <= 0) {\n              randomIndexCharacter = Math.floor(Math.random() * state.teams[\"2\"].length);\n              character = state.teams[\"2\"][randomIndexCharacter];\n            }\n            characterCoordinates = character.position;\n            cellEnter(characterCoordinates);\n            _context.next = 8;\n            return cellClick(characterCoordinates);\n          case 8:\n            // выбрали персонажа\n            cellLeave(characterCoordinates);\n            validMoveCoords = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.determineValidMoves)(character, null, boardMatrix, true);\n            validMoveCoords = validMoveCoords.filter(function (item) {\n              return item[0] >= 0 && item[0] < boardSize && item[1] >= 0 && item[1] < boardSize;\n            });\n            randomMoveCoordIndex = Math.floor(Math.random() * validMoveCoords.length);\n            randomMoveCoord = validMoveCoords[randomMoveCoordIndex];\n            randomMoveCoordPosition = randomMoveCoord[0] * boardSize + randomMoveCoord[1];\n            characterCell = cells[randomMoveCoordPosition].children.length;\n            while (characterCoordinates === randomMoveCoordPosition || randomMoveCoordPosition < 0 || characterCell) {\n              randomMoveCoordIndex = Math.floor(Math.random() * validMoveCoords.length);\n              randomMoveCoord = validMoveCoords[randomMoveCoordIndex];\n              randomMoveCoordPosition = randomMoveCoord[0] * boardSize + randomMoveCoord[1];\n              characterCell = cells[randomMoveCoordPosition].children.length;\n            }\n            validAttackCoords = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.determineValidAttacks)(character, null, boardMatrix, true);\n            validAttackCoords = validAttackCoords.filter(function (item) {\n              return item[0] >= 0 && item[0] < boardSize && item[1] >= 0 && item[1] < boardSize;\n            });\n            randomAttackCoordIndex = Math.floor(Math.random() * validAttackCoords.length);\n            randomAttackCoord = validAttackCoords[randomAttackCoordIndex];\n            randomAttackCoordPosition = randomAttackCoord[0] * boardSize + randomAttackCoord[1];\n            characterCellAttack = cells[randomAttackCoordPosition].children.length;\n            enemyCharacterCell = cells[randomAttackCoordPosition].children[0] && (cells[randomAttackCoordPosition].children[0].classList.contains(\"swordsman\") || cells[randomAttackCoordPosition].children[0].classList.contains(\"bowman\") || cells[randomAttackCoordPosition].children[0].classList.contains(\"magician\"));\n            counter = 0;\n            found = false;\n          case 25:\n            if (!(characterCoordinates === randomAttackCoordPosition || randomAttackCoordPosition < 0 || !characterCellAttack || !enemyCharacterCell)) {\n              _context.next = 39;\n              break;\n            }\n            found = false;\n            randomAttackCoordIndex = Math.floor(Math.random() * validAttackCoords.length);\n            randomAttackCoord = validAttackCoords[randomAttackCoordIndex];\n            randomAttackCoordPosition = randomAttackCoord[0] * boardSize + randomAttackCoord[1];\n            characterCellAttack = cells[randomAttackCoordPosition].children.length;\n            enemyCharacterCell = cells[randomAttackCoordPosition].children[0] && (cells[randomAttackCoordPosition].children[0].classList.contains(\"swordsman\") || cells[randomAttackCoordPosition].children[0].classList.contains(\"bowman\") || cells[randomAttackCoordPosition].children[0].classList.contains(\"magician\"));\n            counter++;\n            found = true;\n            if (!(counter > validAttackCoords.length)) {\n              _context.next = 37;\n              break;\n            }\n            found = false;\n            return _context.abrupt(\"break\", 39);\n          case 37:\n            _context.next = 25;\n            break;\n          case 39:\n            if (!found) {\n              _context.next = 51;\n              break;\n            }\n            cellEnter(randomAttackCoordPosition);\n            _context.next = 43;\n            return cellClick(randomAttackCoordPosition);\n          case 43:\n            // выбрали персонажа\n            cellLeave(randomAttackCoordPosition);\n            console.log(\"attacked\");\n            console.log(randomAttackCoordPosition);\n            console.log(cells[randomAttackCoordPosition]);\n            removeCurrentCellStyle(randomAttackCoordPosition);\n            console.log(cells[randomAttackCoordPosition]);\n            _context.next = 56;\n            break;\n          case 51:\n            cellEnter(randomMoveCoordPosition);\n            _context.next = 54;\n            return cellClick(randomMoveCoordPosition);\n          case 54:\n            // выбрали персонажа\n            cellLeave(randomMoveCoordPosition);\n            removeCurrentCellStyle(randomMoveCoordPosition);\n          case 56:\n            console.log(\"bot end\");\n          case 57:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee);\n    }))).apply(this, arguments);\n  });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bot);\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/Bot.js?");

/***/ }),

/***/ "./src/js/Character.js":
/*!*****************************!*\
  !*** ./src/js/Character.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Character)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n/**\r\n * Базовый класс, от которого наследуются классы персонажей\r\n * @property level - уровень персонажа, от 1 до 4\r\n * @property attack - показатель атаки\r\n * @property defence - показатель защиты\r\n * @property health - здоровье персонажа\r\n * @property type - строка с одним из допустимых значений:\r\n * swordsman\r\n * bowman\r\n * magician\r\n * daemon\r\n * undead\r\n * vampire\r\n */\nvar Character = /*#__PURE__*/_createClass(function Character(level) {\n  var _this = this;\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"generic\";\n  var attack = arguments.length > 2 ? arguments[2] : undefined;\n  var defence = arguments.length > 3 ? arguments[3] : undefined;\n  var health = arguments.length > 4 ? arguments[4] : undefined;\n  _classCallCheck(this, Character);\n  _defineProperty(this, \"updateLevel\", function () {\n    _this.attack = Math.max(_this.attack, _this.attack * (80 + _this.health) / 100);\n    _this.defence = Math.max(_this.defence, _this.defence * (80 + _this.health) / 100);\n    _this.health = _this.health + 100 > 100 ? 100 : _this.health + 100;\n    _this.level += 1;\n  });\n  // TODO: выбросите исключение, если кто-то использует \"new Character()\"\n  if ((this instanceof Character ? this.constructor : void 0).name == \"Character\") {\n    throw new TypeError(\"Cannot construct Character instances directly\");\n  }\n  this.level = 1;\n  this.attack = attack;\n  this.defence = defence;\n  this.health = health;\n  this.type = type;\n  while (this.level < level) {\n    this.updateLevel();\n  }\n});\n\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/Character.js?");

/***/ }),

/***/ "./src/js/GameController.js":
/*!**********************************!*\
  !*** ./src/js/GameController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameController)\n/* harmony export */ });\n/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./themes */ \"./src/js/themes.js\");\n/* harmony import */ var _generators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generators */ \"./src/js/generators.js\");\n/* harmony import */ var _characters_Bowman_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./characters/Bowman.js */ \"./src/js/characters/Bowman.js\");\n/* harmony import */ var _characters_Magician_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characters/Magician.js */ \"./src/js/characters/Magician.js\");\n/* harmony import */ var _characters_Swordsman_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./characters/Swordsman.js */ \"./src/js/characters/Swordsman.js\");\n/* harmony import */ var _characters_Daemon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./characters/Daemon.js */ \"./src/js/characters/Daemon.js\");\n/* harmony import */ var _characters_Undead_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./characters/Undead.js */ \"./src/js/characters/Undead.js\");\n/* harmony import */ var _characters_Vampire_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./characters/Vampire.js */ \"./src/js/characters/Vampire.js\");\n/* harmony import */ var _PositionedCharacter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PositionedCharacter */ \"./src/js/PositionedCharacter.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n/* harmony import */ var _GamePlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./GamePlay */ \"./src/js/GamePlay.js\");\n/* harmony import */ var _GameState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./GameState */ \"./src/js/GameState.js\");\n/* harmony import */ var _cursors_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cursors.js */ \"./src/js/cursors.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = \"function\" == typeof Symbol ? Symbol : {}, a = i.iterator || \"@@iterator\", c = i.asyncIterator || \"@@asyncIterator\", u = i.toStringTag || \"@@toStringTag\"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, \"\"); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, \"_invoke\", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: \"normal\", arg: t.call(e, r) }; } catch (t) { return { type: \"throw\", arg: t }; } } e.wrap = wrap; var h = \"suspendedStart\", l = \"suspendedYield\", f = \"executing\", s = \"completed\", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { [\"next\", \"throw\", \"return\"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if (\"throw\" !== c.type) { var u = c.arg, h = u.value; return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) { invoke(\"next\", t, i, a); }, function (t) { invoke(\"throw\", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke(\"throw\", t, i, a); }); } a(c.arg); } var r; o(this, \"_invoke\", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error(\"Generator is already running\"); if (o === s) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = f; var p = tryCatch(e, r, n); if (\"normal\" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y; var i = tryCatch(o, e.iterator, r.arg); if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = \"normal\", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: \"root\" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || \"\" === e) { var r = e[a]; if (r) return r.call(e); if (\"function\" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) { var e = \"function\" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () { return this; }), define(g, \"toString\", function () { return \"[object Generator]\"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if (\"root\" === i.tryLoc) return handle(\"end\"); if (i.tryLoc <= this.prev) { var c = n.call(i, \"catchLoc\"), u = n.call(i, \"finallyLoc\"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error(\"try statement without catch or finally\"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) { var i = o; break; } } i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, \"catch\": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if (\"throw\" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, \"next\" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar GameController = /*#__PURE__*/function () {\n  function GameController(gamePlay, stateService, bot) {\n    var _this = this,\n      _ref;\n    _classCallCheck(this, GameController);\n    _defineProperty(this, \"initNewGame\", function () {\n      var getTeamIndixes = function getTeamIndixes() {\n        var matrix = _this.boardMatrix;\n        var leftColumns = [_this.gamePlay.boardSize - _this.gamePlay.boardSize, _this.gamePlay.boardSize - _this.gamePlay.boardSize + 1];\n        var rightColumns = [_this.gamePlay.boardSize - 2, _this.gamePlay.boardSize - 1];\n        var leftIndexes = [];\n        var rightIndexes = [];\n        for (var _i = 0, _Object$entries = Object.entries(matrix); _i < _Object$entries.length; _i++) {\n          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),\n            index = _Object$entries$_i[0],\n            item = _Object$entries$_i[1];\n          if (leftColumns.includes(item[1])) {\n            leftIndexes.push(Number(index));\n          }\n          if (rightColumns.includes(item[1])) {\n            rightIndexes.push(Number(index));\n          }\n        }\n        return [leftIndexes, rightIndexes];\n      };\n      var _getTeamIndixes = getTeamIndixes(),\n        _getTeamIndixes2 = _slicedToArray(_getTeamIndixes, 2),\n        indexTeamA = _getTeamIndixes2[0],\n        indexTeamB = _getTeamIndixes2[1];\n      var generatePositionedTeams = function generatePositionedTeams() {\n        var teamA = (0,_generators__WEBPACK_IMPORTED_MODULE_1__.generateTeam)([_characters_Swordsman_js__WEBPACK_IMPORTED_MODULE_4__.Swordsman, _characters_Magician_js__WEBPACK_IMPORTED_MODULE_3__.Magician, _characters_Bowman_js__WEBPACK_IMPORTED_MODULE_2__.Bowman], 4, 10).characters;\n        var teamB = (0,_generators__WEBPACK_IMPORTED_MODULE_1__.generateTeam)([_characters_Undead_js__WEBPACK_IMPORTED_MODULE_6__.Undead, _characters_Vampire_js__WEBPACK_IMPORTED_MODULE_7__.Vampire, _characters_Daemon_js__WEBPACK_IMPORTED_MODULE_5__.Daemon], 4, 10).characters;\n        // DEBUG\n        // for (let item of teamA) {\n        //   item.attack *= 1000;\n        // }\n        // for (let item of teamB) {\n        //   item.attack *= 1000;\n        // }\n\n        var busyIndexes = [];\n        var positionedTeamA = [];\n        var _iterator = _createForOfIteratorHelper(teamA),\n          _step;\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var item = _step.value;\n            var currentIndex = void 0;\n            currentIndex = indexTeamA[Math.floor(Math.random() * indexTeamA.length)];\n            if (busyIndexes.includes(currentIndex)) {\n              while (busyIndexes.includes(currentIndex)) {\n                currentIndex = indexTeamA[Math.floor(Math.random() * indexTeamA.length)];\n              }\n            }\n            busyIndexes.push(currentIndex);\n            positionedTeamA.push(new _PositionedCharacter__WEBPACK_IMPORTED_MODULE_8__[\"default\"](item, currentIndex));\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n        var positionedTeamB = [];\n        var _iterator2 = _createForOfIteratorHelper(teamB),\n          _step2;\n        try {\n          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n            var _item = _step2.value;\n            var _currentIndex = void 0;\n            _currentIndex = indexTeamB[Math.floor(Math.random() * indexTeamB.length)];\n            if (busyIndexes.includes(_currentIndex)) {\n              while (busyIndexes.includes(_currentIndex)) {\n                _currentIndex = indexTeamB[Math.floor(Math.random() * indexTeamB.length)];\n              }\n            }\n            busyIndexes.push(_currentIndex);\n            positionedTeamB.push(new _PositionedCharacter__WEBPACK_IMPORTED_MODULE_8__[\"default\"](_item, _currentIndex));\n          }\n        } catch (err) {\n          _iterator2.e(err);\n        } finally {\n          _iterator2.f();\n        }\n        return [positionedTeamA, positionedTeamB];\n      };\n      var _generatePositionedTe = generatePositionedTeams(),\n        _generatePositionedTe2 = _slicedToArray(_generatePositionedTe, 2),\n        teamA = _generatePositionedTe2[0],\n        teamB = _generatePositionedTe2[1];\n      _this.state.teams = {\n        \"1\": teamA,\n        \"2\": teamB\n      };\n      _this.state.currentTurn.player = 0;\n      _this.state.currentTurn.status = \"select\";\n      _this.gamePlay.removeCurrentCellStyle(_this.state.selectedIndex);\n      _this.state.selectedIndex = null;\n      _this.gamePlay.redrawPositions([].concat(_toConsumableArray(_this.state.teams[\"1\"].filter(function (item) {\n        return item.character.health > 0;\n      })), _toConsumableArray(_this.state.teams[\"2\"].filter(function (item) {\n        return item.character.health > 0;\n      }))));\n      // update UI theme\n      var _iterator3 = _createForOfIteratorHelper(_this.state.themes.list),\n        _step3;\n      try {\n        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n          var item = _step3.value;\n          try {\n            _this.gamePlay.boardEl.classList.remove(item);\n          } catch (err) {}\n        }\n      } catch (err) {\n        _iterator3.e(err);\n      } finally {\n        _iterator3.f();\n      }\n      _this.gamePlay.boardEl.classList.add(_this.state.themes.list[0]);\n      if (_this.gamePlay.boardEl.style.pointerEvents === \"none\") {\n        _this.gamePlay.boardEl.style.pointerEvents = \"auto\";\n      }\n    });\n    _defineProperty(this, \"upgradeGameLevel\", function () {\n      var getTeamIndixes = function getTeamIndixes() {\n        var matrix = _this.boardMatrix;\n        var leftColumns = [_this.gamePlay.boardSize - _this.gamePlay.boardSize, _this.gamePlay.boardSize - _this.gamePlay.boardSize + 1];\n        var rightColumns = [_this.gamePlay.boardSize - 2, _this.gamePlay.boardSize - 1];\n        var leftIndexes = [];\n        var rightIndexes = [];\n        for (var _i2 = 0, _Object$entries2 = Object.entries(matrix); _i2 < _Object$entries2.length; _i2++) {\n          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),\n            index = _Object$entries2$_i[0],\n            item = _Object$entries2$_i[1];\n          if (leftColumns.includes(item[1])) {\n            leftIndexes.push(Number(index));\n          }\n          if (rightColumns.includes(item[1])) {\n            rightIndexes.push(Number(index));\n          }\n        }\n        return [leftIndexes, rightIndexes];\n      };\n      var _getTeamIndixes3 = getTeamIndixes(),\n        _getTeamIndixes4 = _slicedToArray(_getTeamIndixes3, 2),\n        indexTeamA = _getTeamIndixes4[0],\n        indexTeamB = _getTeamIndixes4[1];\n      var updateStartPositions = function updateStartPositions() {\n        var generatePositionedTeams = function generatePositionedTeams() {\n          var teamA = (0,_generators__WEBPACK_IMPORTED_MODULE_1__.generateTeam)([_characters_Swordsman_js__WEBPACK_IMPORTED_MODULE_4__.Swordsman, _characters_Magician_js__WEBPACK_IMPORTED_MODULE_3__.Magician, _characters_Bowman_js__WEBPACK_IMPORTED_MODULE_2__.Bowman], 4, 10).characters;\n          var teamB = (0,_generators__WEBPACK_IMPORTED_MODULE_1__.generateTeam)([_characters_Undead_js__WEBPACK_IMPORTED_MODULE_6__.Undead, _characters_Vampire_js__WEBPACK_IMPORTED_MODULE_7__.Vampire, _characters_Daemon_js__WEBPACK_IMPORTED_MODULE_5__.Daemon], 4, 10).characters;\n          var busyIndexes = [];\n          var positionedTeamA = [];\n          var _iterator4 = _createForOfIteratorHelper(teamA),\n            _step4;\n          try {\n            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n              var item = _step4.value;\n              var currentIndex = void 0;\n              currentIndex = indexTeamA[Math.floor(Math.random() * indexTeamA.length)];\n              if (busyIndexes.includes(currentIndex)) {\n                while (busyIndexes.includes(currentIndex)) {\n                  currentIndex = indexTeamA[Math.floor(Math.random() * indexTeamA.length)];\n                }\n              }\n              busyIndexes.push(currentIndex);\n              positionedTeamA.push(new _PositionedCharacter__WEBPACK_IMPORTED_MODULE_8__[\"default\"](item, currentIndex));\n            }\n          } catch (err) {\n            _iterator4.e(err);\n          } finally {\n            _iterator4.f();\n          }\n          var positionedTeamB = [];\n          var _iterator5 = _createForOfIteratorHelper(teamB),\n            _step5;\n          try {\n            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {\n              var _item2 = _step5.value;\n              var _currentIndex2 = void 0;\n              _currentIndex2 = indexTeamB[Math.floor(Math.random() * indexTeamB.length)];\n              if (busyIndexes.includes(_currentIndex2)) {\n                while (busyIndexes.includes(_currentIndex2)) {\n                  _currentIndex2 = indexTeamB[Math.floor(Math.random() * indexTeamB.length)];\n                }\n              }\n              busyIndexes.push(_currentIndex2);\n              positionedTeamB.push(new _PositionedCharacter__WEBPACK_IMPORTED_MODULE_8__[\"default\"](_item2, _currentIndex2));\n            }\n          } catch (err) {\n            _iterator5.e(err);\n          } finally {\n            _iterator5.f();\n          }\n          return [positionedTeamA, positionedTeamB];\n        };\n        var teamA = _this.state.teams[\"1\"];\n        var teamB = generatePositionedTeams()[1];\n        var busyIndexes = [];\n        var _iterator6 = _createForOfIteratorHelper(teamA),\n          _step6;\n        try {\n          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {\n            var item = _step6.value;\n            var currentIndex = void 0;\n            currentIndex = indexTeamA[Math.floor(Math.random() * indexTeamA.length)];\n            if (busyIndexes.includes(currentIndex)) {\n              while (busyIndexes.includes(currentIndex)) {\n                currentIndex = indexTeamA[Math.floor(Math.random() * indexTeamA.length)];\n              }\n            }\n            busyIndexes.push(currentIndex);\n            item.position = currentIndex;\n            if (item.character.health > 0) {\n              item.character.updateLevel();\n            }\n            if (item.character.health <= 0) {\n              item.position = -1;\n            }\n          }\n        } catch (err) {\n          _iterator6.e(err);\n        } finally {\n          _iterator6.f();\n        }\n        var _iterator7 = _createForOfIteratorHelper(teamB),\n          _step7;\n        try {\n          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {\n            var _item3 = _step7.value;\n            var _currentIndex3 = void 0;\n            _currentIndex3 = indexTeamB[Math.floor(Math.random() * indexTeamB.length)];\n            if (busyIndexes.includes(_currentIndex3)) {\n              while (busyIndexes.includes(_currentIndex3)) {\n                _currentIndex3 = indexTeamB[Math.floor(Math.random() * indexTeamB.length)];\n              }\n            }\n            busyIndexes.push(_currentIndex3);\n            _item3.position = _currentIndex3;\n            if (_item3.character.health > 0) {\n              _item3.character.updateLevel();\n            }\n          }\n        } catch (err) {\n          _iterator7.e(err);\n        } finally {\n          _iterator7.f();\n        }\n        _this.state.teams[\"2\"] = teamB;\n      };\n      updateStartPositions();\n\n      // update UI theme\n      _this.gamePlay.boardEl.classList.remove(_this.state.themes.list[_this.state.themes.current]);\n      _this.state.themes.current += 1;\n      if (_this.state.themes.current === 4) {\n        _this.state.themes.current = 0;\n      }\n      _this.gamePlay.boardEl.classList.add(_this.state.themes.list[_this.state.themes.current]);\n      _this.state.currentTurn.player = 0;\n      _this.state.currentTurn.status = \"select\";\n      _this.gamePlay.redrawPositions([].concat(_toConsumableArray(_this.state.teams[\"1\"].filter(function (item) {\n        return item.character.health > 0;\n      })), _toConsumableArray(_this.state.teams[\"2\"].filter(function (item) {\n        return item.character.health > 0;\n      }))));\n      _GameState__WEBPACK_IMPORTED_MODULE_11__[\"default\"].gameStats.wins++;\n      document.querySelector(\".win\").textContent = \"Wins: \".concat(_GameState__WEBPACK_IMPORTED_MODULE_11__[\"default\"].gameStats.wins);\n    });\n    _defineProperty(this, \"gameOver\", function () {\n      _this.gamePlay.boardEl.style.pointerEvents = \"none\";\n    });\n    _defineProperty(this, \"onCellClick\", function (_x) {\n      return (_ref = _ref || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(index) {\n        var currentCellCharacter, cellCharacterTeam, teamNumber, i, attack, defence, damage, _teamNumber, _i3, _teamNumber2, _i4;\n        return _regeneratorRuntime().wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              // TODO: react to click\n              console.log(_this.state);\n              currentCellCharacter = [].concat(_toConsumableArray(_this.state.teams[\"1\"]), _toConsumableArray(_this.state.teams[\"2\"])).find(function (item) {\n                return item.position === index;\n              });\n              cellCharacterTeam = -1;\n              if (currentCellCharacter) {\n                cellCharacterTeam = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.determineCharacterTeam)(_this.state.teams[\"1\"], _this.state.teams[\"2\"], currentCellCharacter);\n              }\n              if (_this.state.currentTurn.status === \"select\") {\n                if (currentCellCharacter) {\n                  if (_this.state.selectedIndex) {\n                    _this.gamePlay.deselectCell(_this.state.selectedIndex);\n                    _this.state.selectedIndex = index;\n                  }\n                  if (_this.state.currentTurn.player == 0 && cellCharacterTeam == 0) {\n                    _this.gamePlay.selectCell(index);\n                    _this.state.selectedIndex = index;\n                    _this.state.currentTurn.status = \"action\";\n                  }\n                  if (_this.state.currentTurn.player == 1 && cellCharacterTeam == 1) {\n                    _this.gamePlay.selectCell(index);\n                    _this.state.selectedIndex = index;\n                    _this.state.currentTurn.status = \"action\";\n                  }\n                } else {\n                  _GamePlay__WEBPACK_IMPORTED_MODULE_10__[\"default\"].showError(\"No character selected\");\n                }\n              }\n              if (!(_this.state.currentTurn.status === \"action\")) {\n                _context.next = 42;\n                break;\n              }\n              // move\n              if (_this.gamePlay.cells[index].classList.contains(\"selected-green\")) {\n                for (teamNumber in _this.state.teams) {\n                  for (i = 0; i < _this.state.teams[teamNumber].length; i++) {\n                    if (_this.state.teams[teamNumber][i].position === _this.state.selectedIndex) {\n                      _this.state.teams[teamNumber][i].position = index;\n                    }\n                  }\n                }\n                _this.state.currentTurn.status = \"select\";\n                _this.state.currentTurn.player = _this.state.currentTurn.player == 1 ? 0 : 1;\n                _this.gamePlay.deselectCell(_this.state.selectedIndex);\n                _this.state.selectedIndex = null;\n                _this.gamePlay.redrawPositions([].concat(_toConsumableArray(_this.state.teams[\"1\"].filter(function (item) {\n                  return item.character.health > 0;\n                })), _toConsumableArray(_this.state.teams[\"2\"].filter(function (item) {\n                  return item.character.health > 0;\n                }))));\n                _this.gamePlay.removeCurrentCellStyle(index);\n                if (_this.state.currentTurn.player == 1) {\n                  if (_this.state.currentTurn.status === \"select\") {\n                    // BOT MOVE\n                    _this.bot.makeMove(_this.onCellClick, _this.state, _this.boardMatrix, _this.onCellEnter, _this.gamePlay.boardSize, _this.onCellLeave, _this.gamePlay.removeCurrentCellStyle, _this.gamePlay.cells);\n                  }\n                }\n              }\n              // attack\n              if (!_this.gamePlay.cells[index].classList.contains(\"selected-red\")) {\n                _context.next = 40;\n                break;\n              }\n              document.querySelector(\"body\").style.pointerEvents = \"none\";\n              attack = 0;\n              defence = 0;\n              damage = 0; // Math.max(attacker.attack - target.defence, attacker.attack * 0.1)\n              for (_teamNumber in _this.state.teams) {\n                for (_i3 = 0; _i3 < _this.state.teams[_teamNumber].length; _i3++) {\n                  // selected character\n                  if (_this.state.teams[_teamNumber][_i3].position === _this.state.selectedIndex) {\n                    attack = _this.state.teams[_teamNumber][_i3].character.attack;\n                  }\n                }\n              }\n              _context.t0 = _regeneratorRuntime().keys(_this.state.teams);\n            case 14:\n              if ((_context.t1 = _context.t0()).done) {\n                _context.next = 29;\n                break;\n              }\n              _teamNumber2 = _context.t1.value;\n              _i4 = 0;\n            case 17:\n              if (!(_i4 < _this.state.teams[_teamNumber2].length)) {\n                _context.next = 27;\n                break;\n              }\n              if (!(_this.state.teams[_teamNumber2][_i4].position === index)) {\n                _context.next = 24;\n                break;\n              }\n              defence = _this.state.teams[_teamNumber2][_i4].character.defence;\n              damage = Math.max(attack - defence, attack * 0.1);\n              _this.state.teams[_teamNumber2][_i4].character.health -= damage;\n              if (_this.state.teams[_teamNumber2][_i4].character.health <= 0) {\n                _this.state.teams[_teamNumber2][_i4].position = -1;\n              }\n              return _context.abrupt(\"break\", 27);\n            case 24:\n              _i4++;\n              _context.next = 17;\n              break;\n            case 27:\n              _context.next = 14;\n              break;\n            case 29:\n              _context.next = 31;\n              return _this.gamePlay.showDamage(index, damage);\n            case 31:\n              _this.state.currentTurn.status = \"select\";\n              _this.state.currentTurn.player = _this.state.currentTurn.player == 1 ? 0 : 1;\n              _this.gamePlay.deselectCell(_this.state.selectedIndex);\n              _this.state.selectedIndex = null;\n              _this.gamePlay.redrawPositions([].concat(_toConsumableArray(_this.state.teams[\"1\"].filter(function (item) {\n                return item.character.health > 0;\n              })), _toConsumableArray(_this.state.teams[\"2\"].filter(function (item) {\n                return item.character.health > 0;\n              }))));\n              if (_toConsumableArray(_this.state.teams[\"2\"].filter(function (item) {\n                return item.character.health > 0;\n              })).length === 0) {\n                _this.upgradeGameLevel();\n              }\n              if (_toConsumableArray(_this.state.teams[\"1\"].filter(function (item) {\n                return item.character.health > 0;\n              })).length === 0) {\n                _this.gameOver();\n              }\n              document.querySelector(\"body\").style.pointerEvents = \"auto\";\n              if (_this.state.currentTurn.player == 1) {\n                if (_this.state.currentTurn.status === \"select\") {\n                  // BOT ATTACK\n                  _this.bot.makeMove(_this.onCellClick, _this.state, _this.boardMatrix, _this.onCellEnter, _this.gamePlay.boardSize, _this.onCellLeave, _this.gamePlay.removeCurrentCellStyle, _this.gamePlay.cells);\n                }\n              }\n            case 40:\n              // another character in team\n              if (_this.gamePlay.cells[index].classList.contains(\"friendly\")) {\n                _this.gamePlay.deselectCell(_this.state.selectedIndex);\n                _this.state.selectedIndex = index;\n                _this.gamePlay.selectCell(_this.state.selectedIndex);\n              }\n              _this.gamePlay.setCursor(_cursors_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"].auto);\n            case 42:\n              _this.gamePlay.hideCellTooltip(index);\n              return _context.abrupt(\"return\", Promise.resolve());\n            case 44:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee);\n      }))).apply(this, arguments);\n    });\n    _defineProperty(this, \"onCellEnter\", function (index) {\n      // TODO: react to mouse enter\n      if (_this.state.currentTurn.status === \"action\") {\n        if (_this.state.selectedIndex !== index) {\n          _this.gamePlay.removeCurrentCellStyle(index);\n        }\n        _this.gamePlay.setCursor(_cursors_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"].notallowed);\n        var currentCellMove = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.determineValidMoves)([].concat(_toConsumableArray(_this.state.teams[\"1\"]), _toConsumableArray(_this.state.teams[\"2\"])).find(function (item) {\n          return item.position === _this.state.selectedIndex;\n        }), index, _this.boardMatrix);\n        var currentCellAttack = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.determineValidAttacks)([].concat(_toConsumableArray(_this.state.teams[\"1\"]), _toConsumableArray(_this.state.teams[\"2\"])).find(function (item) {\n          return item.position === _this.state.selectedIndex;\n        }), index, _this.boardMatrix);\n        var hoverCharacter = [].concat(_toConsumableArray(_this.state.teams[\"1\"]), _toConsumableArray(_this.state.teams[\"2\"])).find(function (item) {\n          return item.position === index;\n        });\n        if (_this.state.selectedIndex !== index && !hoverCharacter && currentCellMove) {\n          _this.gamePlay.setCurrentCellStyle(index, \"go\");\n          _this.gamePlay.setCursor(_cursors_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"].pointer);\n        }\n        if (hoverCharacter) {\n          var currentCharacterTeam = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.determineCharacterTeam)(_this.state.teams[\"1\"], _this.state.teams[\"2\"], hoverCharacter);\n          if (_this.state.currentTurn.player == currentCharacterTeam) {\n            _this.gamePlay.setCurrentCellStyle(index, \"friendly\");\n            _this.gamePlay.setCursor(_cursors_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"].pointer);\n          }\n          if (_this.state.currentTurn.player !== currentCharacterTeam && currentCellAttack) {\n            _this.gamePlay.setCurrentCellStyle(index, \"attack\");\n            _this.gamePlay.setCursor(_cursors_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"].crosshair);\n          }\n        }\n      }\n      var currentCellCharacter = [].concat(_toConsumableArray(_this.state.teams[\"1\"]), _toConsumableArray(_this.state.teams[\"2\"])).find(function (item) {\n        return item.position === index;\n      });\n      if (currentCellCharacter) {\n        _this.gamePlay.showCellTooltip((0,_utils__WEBPACK_IMPORTED_MODULE_9__.getCharacteristics)(currentCellCharacter), index);\n      }\n    });\n    _defineProperty(this, \"onCellLeave\", function (index) {\n      // TODO: react to mouse leave\n      if (_this.state.currentTurn.status === \"action\") {\n        _this.gamePlay.setCursor(_cursors_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"].auto);\n      }\n      _this.gamePlay.hideCellTooltip(index);\n    });\n    _defineProperty(this, \"saveGame\", function () {\n      // TODO: save game\n      _this.stateService.save(_this.state);\n    });\n    _defineProperty(this, \"loadGame\", function () {\n      // TODO: load game\n      _this.state = _this.stateService.load();\n      for (var index in _this.boardMatrix) {\n        _this.gamePlay.removeCurrentCellStyle(index);\n      }\n      if (_this.state.selectedIndex) {\n        _this.gamePlay.selectCell(_this.state.selectedIndex);\n      }\n\n      // update UI theme\n      var _iterator8 = _createForOfIteratorHelper(_this.state.themes.list),\n        _step8;\n      try {\n        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {\n          var item = _step8.value;\n          try {\n            _this.gamePlay.boardEl.classList.remove(item);\n          } catch (err) {}\n        }\n      } catch (err) {\n        _iterator8.e(err);\n      } finally {\n        _iterator8.f();\n      }\n      _this.gamePlay.boardEl.classList.add(_this.state.themes.list[_this.state.themes.current]);\n      _this.gamePlay.redrawPositions([].concat(_toConsumableArray(_this.state.teams[\"1\"].filter(function (item) {\n        return item.character.health > 0;\n      })), _toConsumableArray(_this.state.teams[\"2\"].filter(function (item) {\n        return item.character.health > 0;\n      }))));\n    });\n    this.gamePlay = gamePlay;\n    this.stateService = stateService;\n    this.state = this.stateService.state;\n    this.state.themes = {};\n    this.boardMatrix = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.generateMatrix)(this.gamePlay.boardSize);\n    this.bot = bot;\n  }\n  _createClass(GameController, [{\n    key: \"init\",\n    value: function init() {\n      // TODO: add event listeners to gamePlay events\n      // TODO: load saved stated from stateService\n      this.state.themes.list = [];\n      for (var key in _themes__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n        this.state.themes.list.push(key);\n      }\n      this.state.themes.current = 0;\n      this.gamePlay.drawUi(this.state.themes.list[this.state.themes.current]);\n      this.initNewGame();\n      this.gamePlay.addNewGameListener(this.initNewGame);\n      this.gamePlay.addCellEnterListener(this.onCellEnter);\n      this.gamePlay.addCellLeaveListener(this.onCellLeave);\n      this.gamePlay.addCellClickListener(this.onCellClick);\n      this.gamePlay.addSaveGameListener(this.saveGame);\n      this.gamePlay.addLoadGameListener(this.loadGame);\n      var winEl = document.createElement(\"div\");\n      winEl.style.color = \"white\";\n      winEl.classList.add(\"win\");\n      winEl.textContent = \"Wins: \".concat(_GameState__WEBPACK_IMPORTED_MODULE_11__[\"default\"].gameStats.wins);\n      document.querySelector(\".controls\").appendChild(winEl);\n    }\n  }]);\n  return GameController;\n}();\n\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/GameController.js?");

/***/ }),

/***/ "./src/js/GamePlay.js":
/*!****************************!*\
  !*** ./src/js/GamePlay.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GamePlay)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n/* harmony import */ var _generators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generators */ \"./src/js/generators.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\nvar GamePlay = /*#__PURE__*/function () {\n  function GamePlay() {\n    var _this = this;\n    _classCallCheck(this, GamePlay);\n    _defineProperty(this, \"mouseMover\", function (event) {\n      var localX = event.pageX;\n      var localY = event.pageY;\n      _this.tooltip.style.left = \"\".concat(localX + 10, \"px\");\n      _this.tooltip.style.top = \"\".concat(localY + 10, \"px\");\n    });\n    _defineProperty(this, \"setCurrentCellStyle\", function (index, styleType) {\n      if (styleType === \"go\") {\n        _this.cells[index].classList.add(\"selected\");\n        _this.cells[index].classList.add(\"selected-green\");\n        var styleClearGreen = function styleClearGreen(e) {\n          _this.cells[index].classList.remove(\"selected\");\n          _this.cells[index].classList.remove(\"selected-green\");\n          _this.cells[index].removeEventListener(\"mouseleave\", styleClearGreen);\n        };\n        _this.cells[index].addEventListener(\"mouseleave\", styleClearGreen);\n      }\n      if (styleType === \"attack\") {\n        _this.cells[index].classList.add(\"selected\");\n        _this.cells[index].classList.add(\"selected-red\");\n        var styleClearRed = function styleClearRed(e) {\n          _this.cells[index].classList.remove(\"selected\");\n          _this.cells[index].classList.remove(\"selected-red\");\n          _this.cells[index].removeEventListener(\"mouseleave\", styleClearRed);\n        };\n        _this.cells[index].addEventListener(\"mouseleave\", styleClearRed);\n      }\n      if (styleType === \"friendly\") {\n        _this.cells[index].classList.add(\"friendly\");\n        var styleClearFriendly = function styleClearFriendly(e) {\n          _this.cells[index].classList.remove(\"friendly\");\n          _this.cells[index].removeEventListener(\"mouseleave\", styleClearFriendly);\n        };\n        _this.cells[index].addEventListener(\"mouseleave\", styleClearFriendly);\n      }\n    });\n    _defineProperty(this, \"removeCurrentCellStyle\", function (index) {\n      try {\n        _this.cells[index].classList.remove(\"selected\");\n      } catch (e) {\n        console.log(\"no_selected\");\n      }\n      try {\n        _this.cells[index].classList.remove(\"selected-green\");\n      } catch (e) {\n        console.log(\"no_selected_green\");\n      }\n      try {\n        _this.cells[index].classList.remove(\"selected-yellow\");\n      } catch (e) {\n        console.log(\"no_selected_yellow\");\n      }\n      try {\n        _this.cells[index].classList.remove(\"selected-red\");\n      } catch (e) {\n        console.log(\"no_selected_red\");\n      }\n      try {\n        _this.cells[index].classList.remove(\"friendly\");\n      } catch (e) {}\n    });\n    this.boardSize = 8;\n    this.container = null;\n    this.boardEl = null;\n    this.cells = [];\n    this.cellClickListeners = [];\n    this.cellEnterListeners = [];\n    this.cellLeaveListeners = [];\n    this.newGameListeners = [];\n    this.saveGameListeners = [];\n    this.loadGameListeners = [];\n  }\n  _createClass(GamePlay, [{\n    key: \"bindToDOM\",\n    value: function bindToDOM(container) {\n      if (!(container instanceof HTMLElement)) {\n        throw new Error(\"container is not HTMLElement\");\n      }\n      this.container = container;\n    }\n\n    /**\r\n     * Draws boardEl with specific theme\r\n     *\r\n     * @param theme\r\n     */\n  }, {\n    key: \"drawUi\",\n    value: function drawUi(theme) {\n      var _this2 = this;\n      this.checkBinding();\n      this.container.innerHTML = \"\\n      <div class=\\\"controls\\\">\\n        <button data-id=\\\"action-restart\\\" class=\\\"btn\\\">New Game</button>\\n        <button data-id=\\\"action-save\\\" class=\\\"btn\\\">Save Game</button>\\n        <button data-id=\\\"action-load\\\" class=\\\"btn\\\">Load Game</button>\\n      </div>\\n      <div class=\\\"board-container\\\">\\n        <div data-id=\\\"board\\\" class=\\\"board\\\"></div>\\n      </div>\\n    \";\n      this.newGameEl = this.container.querySelector(\"[data-id=action-restart]\");\n      this.saveGameEl = this.container.querySelector(\"[data-id=action-save]\");\n      this.loadGameEl = this.container.querySelector(\"[data-id=action-load]\");\n      this.newGameEl.addEventListener(\"click\", function (event) {\n        return _this2.onNewGameClick(event);\n      });\n      this.saveGameEl.addEventListener(\"click\", function (event) {\n        return _this2.onSaveGameClick(event);\n      });\n      this.loadGameEl.addEventListener(\"click\", function (event) {\n        return _this2.onLoadGameClick(event);\n      });\n      this.boardEl = this.container.querySelector(\"[data-id=board]\");\n      this.boardEl.classList.add(theme);\n      for (var i = 0; i < Math.pow(this.boardSize, 2); i += 1) {\n        var cellEl = document.createElement(\"div\");\n        cellEl.classList.add(\"cell\", \"map-tile\", \"map-tile-\".concat((0,_utils__WEBPACK_IMPORTED_MODULE_0__.calcTileType)(i, this.boardSize)));\n        cellEl.addEventListener(\"mouseenter\", function (event) {\n          return _this2.onCellEnter(event);\n        });\n        cellEl.addEventListener(\"mouseleave\", function (event) {\n          return _this2.onCellLeave(event);\n        });\n        cellEl.addEventListener(\"click\", function (event) {\n          return _this2.onCellClick(event);\n        });\n        this.boardEl.appendChild(cellEl);\n      }\n      this.cells = Array.from(this.boardEl.children);\n      if (!this.tooltip) {\n        this.tooltip = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateTooltip)();\n        document.querySelector(\"body\").appendChild(this.tooltip);\n      }\n      try {\n        document.querySelector(\"body\").removeEventListener(\"mousemove\", this.mouseMover);\n      } catch (e) {\n        console.log(e);\n      }\n      document.querySelector(\"body\").addEventListener(\"mousemove\", this.mouseMover);\n    }\n\n    /**\r\n     * Draws positions (with chars) on boardEl\r\n     *\r\n     * @param positions array of PositionedCharacter objects\r\n     */\n  }, {\n    key: \"redrawPositions\",\n    value: function redrawPositions(positions) {\n      var _iterator = _createForOfIteratorHelper(this.cells),\n        _step;\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var cell = _step.value;\n          cell.innerHTML = \"\";\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n      var _iterator2 = _createForOfIteratorHelper(positions),\n        _step2;\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var position = _step2.value;\n          if (position === -1) {\n            continue;\n          }\n          var cellEl = this.boardEl.children[position.position];\n          var charEl = document.createElement(\"div\");\n          charEl.classList.add(\"character\", position.character.type);\n          var healthEl = document.createElement(\"div\");\n          healthEl.classList.add(\"health-level\");\n          var healthIndicatorEl = document.createElement(\"div\");\n          healthIndicatorEl.classList.add(\"health-level-indicator\", \"health-level-indicator-\".concat((0,_utils__WEBPACK_IMPORTED_MODULE_0__.calcHealthLevel)(position.character.health)));\n          healthIndicatorEl.style.width = \"\".concat(position.character.health, \"%\");\n          healthEl.appendChild(healthIndicatorEl);\n          charEl.appendChild(healthEl);\n          cellEl.appendChild(charEl);\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n    }\n\n    /**\r\n     * Add listener to mouse enter for cell\r\n     *\r\n     * @param callback\r\n     */\n  }, {\n    key: \"addCellEnterListener\",\n    value: function addCellEnterListener(callback) {\n      this.cellEnterListeners.push(callback);\n    }\n\n    /**\r\n     * Add listener to mouse leave for cell\r\n     *\r\n     * @param callback\r\n     */\n  }, {\n    key: \"addCellLeaveListener\",\n    value: function addCellLeaveListener(callback) {\n      this.cellLeaveListeners.push(callback);\n    }\n\n    /**\r\n     * Add listener to mouse click for cell\r\n     *\r\n     * @param callback\r\n     */\n  }, {\n    key: \"addCellClickListener\",\n    value: function addCellClickListener(callback) {\n      this.cellClickListeners.push(callback);\n    }\n\n    /**\r\n     * Add listener to \"New Game\" button click\r\n     *\r\n     * @param callback\r\n     */\n  }, {\n    key: \"addNewGameListener\",\n    value: function addNewGameListener(callback) {\n      this.newGameListeners.push(callback);\n    }\n\n    /**\r\n     * Add listener to \"Save Game\" button click\r\n     *\r\n     * @param callback\r\n     */\n  }, {\n    key: \"addSaveGameListener\",\n    value: function addSaveGameListener(callback) {\n      this.saveGameListeners.push(callback);\n    }\n\n    /**\r\n     * Add listener to \"Load Game\" button click\r\n     *\r\n     * @param callback\r\n     */\n  }, {\n    key: \"addLoadGameListener\",\n    value: function addLoadGameListener(callback) {\n      this.loadGameListeners.push(callback);\n    }\n  }, {\n    key: \"onCellEnter\",\n    value: function onCellEnter(event) {\n      event.preventDefault();\n      var index = this.cells.indexOf(event.currentTarget);\n      var indexFrom = this.cells.indexOf(event.relatedTarget);\n      this.cellEnterListeners.forEach(function (o) {\n        return o.call(null, index, indexFrom);\n      });\n    }\n  }, {\n    key: \"onCellLeave\",\n    value: function onCellLeave(event) {\n      event.preventDefault();\n      // CUSTOM\n      if (event.relatedTarget == this.tooltip) {\n        return;\n      }\n      var index = this.cells.indexOf(event.currentTarget);\n      this.cellLeaveListeners.forEach(function (o) {\n        return o.call(null, index);\n      });\n    }\n  }, {\n    key: \"onCellClick\",\n    value: function onCellClick(event) {\n      var index = this.cells.indexOf(event.currentTarget);\n      this.cellClickListeners.forEach(function (o) {\n        return o.call(null, index);\n      });\n    }\n  }, {\n    key: \"onNewGameClick\",\n    value: function onNewGameClick(event) {\n      event.preventDefault();\n      this.newGameListeners.forEach(function (o) {\n        return o.call(null);\n      });\n    }\n  }, {\n    key: \"onSaveGameClick\",\n    value: function onSaveGameClick(event) {\n      event.preventDefault();\n      this.saveGameListeners.forEach(function (o) {\n        return o.call(null);\n      });\n    }\n  }, {\n    key: \"onLoadGameClick\",\n    value: function onLoadGameClick(event) {\n      event.preventDefault();\n      this.loadGameListeners.forEach(function (o) {\n        return o.call(null);\n      });\n    }\n  }, {\n    key: \"selectCell\",\n    value: function selectCell(index) {\n      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"yellow\";\n      this.deselectCell(index);\n      this.cells[index].classList.add(\"selected\", \"selected-\".concat(color));\n    }\n  }, {\n    key: \"deselectCell\",\n    value: function deselectCell(index) {\n      var _cell$classList;\n      var cell = this.cells[index];\n      (_cell$classList = cell.classList).remove.apply(_cell$classList, _toConsumableArray(Array.from(cell.classList).filter(function (o) {\n        return o.startsWith(\"selected\");\n      })));\n    }\n  }, {\n    key: \"showCellTooltip\",\n    value: function showCellTooltip(message, index) {\n      if (this.cells[index].querySelector(\".character\")) {\n        this.tooltip.style.display = \"block\";\n        var localX = this.cells[index].offsetLeft;\n        var localY = this.cells[index].offsetTop;\n        this.tooltip.style.left = \"\".concat(localX, \"px\");\n        this.tooltip.style.top = \"\".concat(localY, \"px\");\n      }\n      this.cells[index].title = message;\n      this.tooltip.children[0].innerHTML = message;\n    }\n  }, {\n    key: \"hideCellTooltip\",\n    value: function hideCellTooltip(index) {\n      this.tooltip.style.display = \"none\";\n      this.cells[index].title = \"\";\n      this.tooltip.children[0].innerHTML = \"\";\n    }\n  }, {\n    key: \"showDamage\",\n    value: function showDamage(index, damage) {\n      var _this3 = this;\n      return new Promise(function (resolve) {\n        var cell = _this3.cells[index];\n        var damageEl = document.createElement(\"span\");\n        damageEl.textContent = damage;\n        damageEl.classList.add(\"damage\");\n        cell.appendChild(damageEl);\n        damageEl.addEventListener(\"animationend\", function () {\n          cell.removeChild(damageEl);\n          resolve();\n        });\n      });\n    }\n  }, {\n    key: \"setCursor\",\n    value: function setCursor(cursor) {\n      this.boardEl.style.cursor = cursor;\n    }\n  }, {\n    key: \"checkBinding\",\n    value: function checkBinding() {\n      if (this.container === null) {\n        throw new Error(\"GamePlay not bind to DOM\");\n      }\n    }\n  }], [{\n    key: \"showError\",\n    value: function showError(message) {\n      // alert(message);\n      console.error(message);\n    }\n  }, {\n    key: \"showMessage\",\n    value: function showMessage(message) {\n      console.warn(message);\n    }\n  }]);\n  return GamePlay;\n}();\n\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/GamePlay.js?");

/***/ }),

/***/ "./src/js/GameState.js":
/*!*****************************!*\
  !*** ./src/js/GameState.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameState)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar GameState = /*#__PURE__*/function () {\n  function GameState() {\n    _classCallCheck(this, GameState);\n    this.state = {\n      \"currentTurn\": {\n        \"player\": 0,\n        \"status\": \"select\"\n      },\n      \"themes\": {\n        \"list\": [\"prairie\", \"desert\", \"arctic\", \"mountain\"],\n        \"current\": 0\n      },\n      \"teams\": {\n        \"1\": [],\n        \"2\": []\n      },\n      \"selectedIndex\": null\n    };\n  }\n  _createClass(GameState, null, [{\n    key: \"from\",\n    value: function from(object) {\n      // TODO: create object\n      return null;\n    }\n  }]);\n  return GameState;\n}();\n_defineProperty(GameState, \"gameStats\", {\n  wins: 0\n});\n\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/GameState.js?");

/***/ }),

/***/ "./src/js/GameStateService.js":
/*!************************************!*\
  !*** ./src/js/GameStateService.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameStateService)\n/* harmony export */ });\n/* harmony import */ var _GameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameState */ \"./src/js/GameState.js\");\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Character */ \"./src/js/Character.js\");\n/* harmony import */ var _PositionedCharacter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PositionedCharacter */ \"./src/js/PositionedCharacter.js\");\n/* harmony import */ var _characters_Bowman_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characters/Bowman.js */ \"./src/js/characters/Bowman.js\");\n/* harmony import */ var _characters_Swordsman_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./characters/Swordsman.js */ \"./src/js/characters/Swordsman.js\");\n/* harmony import */ var _characters_Magician_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./characters/Magician.js */ \"./src/js/characters/Magician.js\");\n/* harmony import */ var _characters_Undead_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./characters/Undead.js */ \"./src/js/characters/Undead.js\");\n/* harmony import */ var _characters_Vampire_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./characters/Vampire.js */ \"./src/js/characters/Vampire.js\");\n/* harmony import */ var _characters_Daemon_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./characters/Daemon.js */ \"./src/js/characters/Daemon.js\");\n/* harmony import */ var _GamePlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GamePlay */ \"./src/js/GamePlay.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\n\n\n\n\n\n\n\nvar GameStateService = /*#__PURE__*/function () {\n  function GameStateService(storage) {\n    _classCallCheck(this, GameStateService);\n    this.storage = storage;\n    this.state = new _GameState__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().state;\n  }\n  _createClass(GameStateService, [{\n    key: \"save\",\n    value: function save(state) {\n      this.storage.setItem(\"state\", JSON.stringify(state));\n    }\n  }, {\n    key: \"load\",\n    value: function load() {\n      try {\n        var loadedState = JSON.parse(this.storage.getItem(\"state\"));\n        for (var team in loadedState.teams) {\n          var _iterator = _createForOfIteratorHelper(loadedState.teams[team]),\n            _step;\n          try {\n            for (_iterator.s(); !(_step = _iterator.n()).done;) {\n              var positionedCharacter = _step.value;\n              if (!(positionedCharacter.character instanceof _Character__WEBPACK_IMPORTED_MODULE_1__[\"default\"])) {\n                var character = positionedCharacter.character;\n                if (character.type === \"vampire\") {\n                  character = new _characters_Vampire_js__WEBPACK_IMPORTED_MODULE_7__.Vampire(character.level, character.attack, character.defence, character.health, character.type, true);\n                }\n                if (character.type === \"daemon\") {\n                  character = new _characters_Daemon_js__WEBPACK_IMPORTED_MODULE_8__.Daemon(character.level, character.attack, character.defence, character.health, character.type, true);\n                }\n                if (character.type === \"undead\") {\n                  character = new _characters_Undead_js__WEBPACK_IMPORTED_MODULE_6__.Undead(character.level, character.attack, character.defence, character.health, character.type, true);\n                }\n                if (character.type === \"bowman\") {\n                  character = new _characters_Bowman_js__WEBPACK_IMPORTED_MODULE_3__.Bowman(character.level, character.attack, character.defence, character.health, character.type, true);\n                }\n                if (character.type === \"swordsman\") {\n                  character = new _characters_Swordsman_js__WEBPACK_IMPORTED_MODULE_4__.Swordsman(character.level, character.attack, character.defence, character.health, character.type, true);\n                }\n                if (character.type === \"magician\") {\n                  character = new _characters_Magician_js__WEBPACK_IMPORTED_MODULE_5__.Magician(character.level, character.attack, character.defence, character.health, character.type, true);\n                }\n                positionedCharacter.character = character;\n              }\n              if (!(positionedCharacter instanceof _PositionedCharacter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])) {\n                positionedCharacter = new _PositionedCharacter__WEBPACK_IMPORTED_MODULE_2__[\"default\"](positionedCharacter.character, positionedCharacter.position);\n              }\n            }\n          } catch (err) {\n            _iterator.e(err);\n          } finally {\n            _iterator.f();\n          }\n        }\n        return loadedState;\n      } catch (e) {\n        _GamePlay__WEBPACK_IMPORTED_MODULE_9__[\"default\"].showMessage('State could not be loaded');\n        throw new Error(\"Invalid state\");\n      }\n    }\n  }]);\n  return GameStateService;\n}();\n\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/GameStateService.js?");

/***/ }),

/***/ "./src/js/PositionedCharacter.js":
/*!***************************************!*\
  !*** ./src/js/PositionedCharacter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PositionedCharacter)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character */ \"./src/js/Character.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar PositionedCharacter = /*#__PURE__*/_createClass(function PositionedCharacter(character, position) {\n  _classCallCheck(this, PositionedCharacter);\n  if (!(character instanceof _Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"])) {\n    throw new Error(\"character must be instance of Character or its children\");\n  }\n  if (typeof position !== \"number\") {\n    throw new Error(\"position must be a number\");\n  }\n  this.character = character;\n  this.position = position;\n});\n\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/PositionedCharacter.js?");

/***/ }),

/***/ "./src/js/Team.js":
/*!************************!*\
  !*** ./src/js/Team.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Team)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n/**\r\n * Класс, представляющий персонажей команды\r\n *\r\n * @todo Самостоятельно продумайте хранение персонажей в классе\r\n * Например\r\n * @example\r\n * ```js\r\n * const characters = [new Swordsman(2), new Bowman(1)]\r\n * const team = new Team(characters);\r\n *\r\n * team.characters // [swordsman, bowman]\r\n * ```\r\n * */\nvar Team = /*#__PURE__*/_createClass(\n// TODO: write your logic here\nfunction Team(characters) {\n  _classCallCheck(this, Team);\n  this.characters = characters;\n});\n\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/Team.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GamePlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GamePlay */ \"./src/js/GamePlay.js\");\n/* harmony import */ var _GameController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameController */ \"./src/js/GameController.js\");\n/* harmony import */ var _GameStateService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameStateService */ \"./src/js/GameStateService.js\");\n/* harmony import */ var _Bot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Bot */ \"./src/js/Bot.js\");\n/**\r\n * Entry point of app: don't change this\r\n */\n\n\n\n\nvar gamePlay = new _GamePlay__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ngamePlay.bindToDOM(document.querySelector(\"#game-container\"));\nvar stateService = new _GameStateService__WEBPACK_IMPORTED_MODULE_2__[\"default\"](localStorage);\nvar bot = new _Bot__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nvar gameCtrl = new _GameController__WEBPACK_IMPORTED_MODULE_1__[\"default\"](gamePlay, stateService, bot);\ngameCtrl.init();\n\n// don't write your code here\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/app.js?");

/***/ }),

/***/ "./src/js/characters/Bowman.js":
/*!*************************************!*\
  !*** ./src/js/characters/Bowman.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Bowman: () => (/* binding */ Bowman)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ \"./src/js/Character.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar Bowman = /*#__PURE__*/function (_Character) {\n  _inherits(Bowman, _Character);\n  var _super = _createSuper(Bowman);\n  function Bowman(level) {\n    var _this;\n    var attack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 25;\n    var defence = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 25;\n    var health = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;\n    var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : \"bowman\";\n    var isCopy = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;\n    _classCallCheck(this, Bowman);\n    _this = _super.call(this, level, type, attack, defence, health);\n    _this.speed = 2;\n    _this.attackRange = 2;\n    if (isCopy) {\n      _this.attack = attack;\n      _this.defence = defence;\n      _this.health = health;\n      _this.level = level;\n    }\n    return _this;\n  }\n  return _createClass(Bowman);\n}(_Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/characters/Bowman.js?");

/***/ }),

/***/ "./src/js/characters/Daemon.js":
/*!*************************************!*\
  !*** ./src/js/characters/Daemon.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Daemon: () => (/* binding */ Daemon)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ \"./src/js/Character.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar Daemon = /*#__PURE__*/function (_Character) {\n  _inherits(Daemon, _Character);\n  var _super = _createSuper(Daemon);\n  function Daemon(level) {\n    var _this;\n    var attack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 40;\n    var defence = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;\n    var health = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;\n    var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : \"daemon\";\n    var isCopy = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;\n    _classCallCheck(this, Daemon);\n    _this = _super.call(this, level, type, attack, defence, health);\n    _this.speed = 1;\n    _this.attackRange = 4;\n    if (isCopy) {\n      _this.attack = attack;\n      _this.defence = defence;\n      _this.health = health;\n      _this.level = level;\n    }\n    return _this;\n  }\n  return _createClass(Daemon);\n}(_Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/characters/Daemon.js?");

/***/ }),

/***/ "./src/js/characters/Magician.js":
/*!***************************************!*\
  !*** ./src/js/characters/Magician.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Magician: () => (/* binding */ Magician)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ \"./src/js/Character.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar Magician = /*#__PURE__*/function (_Character) {\n  _inherits(Magician, _Character);\n  var _super = _createSuper(Magician);\n  function Magician(level) {\n    var _this;\n    var attack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;\n    var defence = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 40;\n    var health = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;\n    var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : \"magician\";\n    var isCopy = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;\n    _classCallCheck(this, Magician);\n    _this = _super.call(this, level, type, attack, defence, health);\n    _this.speed = 1;\n    _this.attackRange = 4;\n    if (isCopy) {\n      _this.attack = attack;\n      _this.defence = defence;\n      _this.health = health;\n      _this.level = level;\n    }\n    return _this;\n  }\n  return _createClass(Magician);\n}(_Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/characters/Magician.js?");

/***/ }),

/***/ "./src/js/characters/Swordsman.js":
/*!****************************************!*\
  !*** ./src/js/characters/Swordsman.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Swordsman: () => (/* binding */ Swordsman)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ \"./src/js/Character.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar Swordsman = /*#__PURE__*/function (_Character) {\n  _inherits(Swordsman, _Character);\n  var _super = _createSuper(Swordsman);\n  function Swordsman(level) {\n    var _this;\n    var attack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 40;\n    var defence = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;\n    var health = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;\n    var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : \"swordsman\";\n    var isCopy = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;\n    _classCallCheck(this, Swordsman);\n    _this = _super.call(this, level, type, attack, defence, health);\n    _this.speed = 4;\n    _this.attackRange = 1;\n    if (isCopy) {\n      _this.attack = attack;\n      _this.defence = defence;\n      _this.health = health;\n      _this.level = level;\n    }\n    return _this;\n  }\n  return _createClass(Swordsman);\n}(_Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/characters/Swordsman.js?");

/***/ }),

/***/ "./src/js/characters/Undead.js":
/*!*************************************!*\
  !*** ./src/js/characters/Undead.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Undead: () => (/* binding */ Undead)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ \"./src/js/Character.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar Undead = /*#__PURE__*/function (_Character) {\n  _inherits(Undead, _Character);\n  var _super = _createSuper(Undead);\n  function Undead(level) {\n    var _this;\n    var attack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 40;\n    var defence = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;\n    var health = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;\n    var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : \"undead\";\n    var isCopy = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;\n    _classCallCheck(this, Undead);\n    _this = _super.call(this, level, type, attack, defence, health);\n    _this.speed = 4;\n    _this.attackRange = 1;\n    if (isCopy) {\n      _this.attack = attack;\n      _this.defence = defence;\n      _this.health = health;\n      _this.level = level;\n    }\n    return _this;\n  }\n  return _createClass(Undead);\n}(_Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/characters/Undead.js?");

/***/ }),

/***/ "./src/js/characters/Vampire.js":
/*!**************************************!*\
  !*** ./src/js/characters/Vampire.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Vampire: () => (/* binding */ Vampire)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ \"./src/js/Character.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar Vampire = /*#__PURE__*/function (_Character) {\n  _inherits(Vampire, _Character);\n  var _super = _createSuper(Vampire);\n  function Vampire(level) {\n    var _this;\n    var attack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 25;\n    var defence = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 25;\n    var health = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;\n    var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : \"vampire\";\n    var isCopy = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;\n    _classCallCheck(this, Vampire);\n    _this = _super.call(this, level, type, attack, defence, health);\n    _this.speed = 2;\n    _this.attackRange = 2;\n    if (isCopy) {\n      _this.attack = attack;\n      _this.defence = defence;\n      _this.health = health;\n      _this.level = level;\n    }\n    return _this;\n  }\n  return _createClass(Vampire);\n}(_Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/characters/Vampire.js?");

/***/ }),

/***/ "./src/js/cursors.js":
/*!***************************!*\
  !*** ./src/js/cursors.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar cursors = {\n  auto: \"auto\",\n  pointer: \"pointer\",\n  crosshair: \"crosshair\",\n  notallowed: \"not-allowed\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cursors);\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/cursors.js?");

/***/ }),

/***/ "./src/js/generators.js":
/*!******************************!*\
  !*** ./src/js/generators.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   characterGenerator: () => (/* binding */ characterGenerator),\n/* harmony export */   generateTeam: () => (/* binding */ generateTeam)\n/* harmony export */ });\n/* harmony import */ var _Team__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Team */ \"./src/js/Team.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = \"function\" == typeof Symbol ? Symbol : {}, a = i.iterator || \"@@iterator\", c = i.asyncIterator || \"@@asyncIterator\", u = i.toStringTag || \"@@toStringTag\"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, \"\"); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, \"_invoke\", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: \"normal\", arg: t.call(e, r) }; } catch (t) { return { type: \"throw\", arg: t }; } } e.wrap = wrap; var h = \"suspendedStart\", l = \"suspendedYield\", f = \"executing\", s = \"completed\", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { [\"next\", \"throw\", \"return\"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if (\"throw\" !== c.type) { var u = c.arg, h = u.value; return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) { invoke(\"next\", t, i, a); }, function (t) { invoke(\"throw\", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke(\"throw\", t, i, a); }); } a(c.arg); } var r; o(this, \"_invoke\", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error(\"Generator is already running\"); if (o === s) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = f; var p = tryCatch(e, r, n); if (\"normal\" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y; var i = tryCatch(o, e.iterator, r.arg); if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = \"normal\", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: \"root\" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || \"\" === e) { var r = e[a]; if (r) return r.call(e); if (\"function\" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) { var e = \"function\" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () { return this; }), define(g, \"toString\", function () { return \"[object Generator]\"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if (\"root\" === i.tryLoc) return handle(\"end\"); if (i.tryLoc <= this.prev) { var c = n.call(i, \"catchLoc\"), u = n.call(i, \"finallyLoc\"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error(\"try statement without catch or finally\"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) { var i = o; break; } } i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, \"catch\": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if (\"throw\" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, \"next\" === this.method && (this.arg = t), y; } }, e; }\nvar _marked = /*#__PURE__*/_regeneratorRuntime().mark(characterGenerator);\n\n\n/**\r\n * Формирует экземпляр персонажа из массива allowedTypes со\r\n * случайным уровнем от 1 до maxLevel\r\n *\r\n * @param allowedTypes массив классов\r\n * @param maxLevel максимальный возможный уровень персонажа\r\n * @returns генератор, который при каждом вызове\r\n * возвращает новый экземпляр класса персонажа\r\n *\r\n */\nfunction characterGenerator(allowedTypes, maxLevel) {\n  var index, currentType, currentInstance;\n  return _regeneratorRuntime().wrap(function characterGenerator$(_context) {\n    while (1) switch (_context.prev = _context.next) {\n      case 0:\n        if (false) {}\n        index = Math.floor(Math.random() * allowedTypes.length);\n        currentType = allowedTypes[index];\n        currentInstance = new currentType(Math.floor(Math.random() * (maxLevel - 1) + 1));\n        _context.next = 6;\n        return currentInstance;\n      case 6:\n        _context.next = 0;\n        break;\n      case 8:\n      case \"end\":\n        return _context.stop();\n    }\n  }, _marked);\n}\n\n/**\r\n * Формирует массив персонажей на основе characterGenerator\r\n * @param allowedTypes массив классов\r\n * @param maxLevel максимальный возможный уровень персонажа\r\n * @param characterCount количество персонажей, которое нужно сформировать\r\n * @returns экземпляр Team, хранящий экземпляры персонажей. Количество персонажей в команде - characterCount\r\n * */\nfunction generateTeam(allowedTypes, maxLevel, characterCount) {\n  // TODO: write logic here\n  var characters = [];\n  var playerGenerator = new characterGenerator(allowedTypes, maxLevel);\n  for (var i = 0; i < characterCount; i++) {\n    characters.push(playerGenerator.next().value);\n  }\n  return new _Team__WEBPACK_IMPORTED_MODULE_0__[\"default\"](characters);\n}\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/generators.js?");

/***/ }),

/***/ "./src/js/themes.js":
/*!**************************!*\
  !*** ./src/js/themes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar themes = {\n  prairie: \"prairie\",\n  desert: \"desert\",\n  arctic: \"arctic\",\n  mountain: \"mountain\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themes);\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/themes.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calcHealthLevel: () => (/* binding */ calcHealthLevel),\n/* harmony export */   calcTileType: () => (/* binding */ calcTileType),\n/* harmony export */   determineCharacterTeam: () => (/* binding */ determineCharacterTeam),\n/* harmony export */   determineValidAttacks: () => (/* binding */ determineValidAttacks),\n/* harmony export */   determineValidMoves: () => (/* binding */ determineValidMoves),\n/* harmony export */   generateMatrix: () => (/* binding */ generateMatrix),\n/* harmony export */   generateTooltip: () => (/* binding */ generateTooltip),\n/* harmony export */   getCharacteristics: () => (/* binding */ getCharacteristics)\n/* harmony export */ });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n/**\r\n * @todo\r\n * @param index - индекс поля\r\n * @param boardSize - размер квадратного поля (в длину или ширину)\r\n * @returns строка - тип ячейки на поле:\r\n *\r\n * top-left\r\n * top-right\r\n * top\r\n * bottom-left\r\n * bottom-right\r\n * bottom\r\n * right\r\n * left\r\n * center\r\n *\r\n * @example\r\n * ```js\r\n * calcTileType(0, 8); // 'top-left'\r\n * calcTileType(1, 8); // 'top'\r\n * calcTileType(63, 8); // 'bottom-right'\r\n * calcTileType(7, 7); // 'left'\r\n * ```\r\n * */\nfunction calcTileType(index, boardSize) {\n  // TODO: ваш код будет тут\n  var matrix = generateMatrix(boardSize);\n  var _matrix$index = _slicedToArray(matrix[index], 2),\n    x = _matrix$index[0],\n    y = _matrix$index[1];\n  if (x == 0 && y == 0) {\n    return \"top-left\";\n  }\n  if (x == 0 && y == boardSize - 1) {\n    return \"top-right\";\n  }\n  if (x == boardSize - 1 && y == 0) {\n    return \"bottom-left\";\n  }\n  if (x == boardSize - 1 && y == boardSize - 1) {\n    return \"bottom-right\";\n  }\n  if (x == boardSize - 1) {\n    return \"bottom\";\n  }\n  if (x == 0) {\n    return \"top\";\n  }\n  if (y == boardSize - 1) {\n    return \"right\";\n  }\n  if (y == 0) {\n    return \"left\";\n  }\n  return \"center\";\n}\nfunction calcHealthLevel(health) {\n  if (health < 15) {\n    return \"critical\";\n  }\n  if (health < 50) {\n    return \"normal\";\n  }\n  return \"high\";\n}\nvar generateMatrix = function generateMatrix(boardSize) {\n  var matrix = [];\n  for (var i = 0; i < boardSize; i++) {\n    for (var j = 0; j < boardSize; j++) {\n      matrix.push([i, j]);\n    }\n  }\n  return matrix;\n};\nvar generateTooltip = function generateTooltip() {\n  var tooltip = document.createElement(\"div\");\n  tooltip.classList.add(\"tooltip\");\n  var tooltipContent = document.createElement(\"div\");\n  tooltipContent.classList.add(\"tooltip_content\");\n  tooltip.appendChild(tooltipContent);\n  return tooltip;\n};\nvar getCharacteristics = function getCharacteristics(currentCellCharacter) {\n  return \"\\uD83C\\uDFC5 \".concat(currentCellCharacter.character.level, \" \\u2694\\uFE0F \").concat(currentCellCharacter.character.attack, \" \\uD83D\\uDEE1 \").concat(currentCellCharacter.character.defence, \" \\u2764\\uFE0F \").concat(currentCellCharacter.character.health);\n};\nvar determineValidMoves = function determineValidMoves(selectedCharacter, hoverCell, boardMatrix) {\n  var getCoords = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n  var selectedCoords = boardMatrix[selectedCharacter.position];\n  var step = selectedCharacter.character.speed;\n  var validCoords = [];\n  for (var i = selectedCoords[0]; i <= selectedCoords[0] + step; i += 1) {\n    validCoords.push([i, selectedCoords[1]]);\n  }\n  for (var _i = selectedCoords[0]; _i >= selectedCoords[0] - step; _i -= 1) {\n    validCoords.push([_i, selectedCoords[1]]);\n  }\n  for (var _i2 = selectedCoords[1]; _i2 <= selectedCoords[1] + step; _i2 += 1) {\n    validCoords.push([selectedCoords[0], _i2]);\n  }\n  for (var _i3 = selectedCoords[1]; _i3 >= selectedCoords[1] - step; _i3 -= 1) {\n    validCoords.push([selectedCoords[0], _i3]);\n  }\n  for (var _i4 = 0; _i4 <= step; _i4 += 1) {\n    validCoords.push([selectedCoords[0] + _i4, selectedCoords[1] + _i4]);\n    validCoords.push([selectedCoords[0] + _i4, selectedCoords[1] - _i4]);\n    validCoords.push([selectedCoords[0] - step + _i4, selectedCoords[1] - step + _i4]);\n    validCoords.push([selectedCoords[0] - step + _i4, selectedCoords[1] + step - _i4]);\n  }\n  for (var _i5 = selectedCoords[1]; _i5 >= selectedCoords[1] - step; _i5 -= 1) {\n    validCoords.push([selectedCoords[0], _i5]);\n  }\n  if (getCoords) {\n    return validCoords;\n  }\n  var hoveredCoords = boardMatrix[hoverCell];\n  try {\n    if (validCoords.find(function (item) {\n      return item.toString() == hoveredCoords.toString();\n    })) {\n      return true;\n    } else {\n      return false;\n    }\n  } catch (error) {\n    debugger;\n  }\n};\nvar determineValidAttacks = function determineValidAttacks(selectedCharacter, hoverCell, boardMatrix) {\n  var getCoords = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n  var selectedCoords = boardMatrix[selectedCharacter.position];\n  var step = selectedCharacter.character.attackRange;\n  var validCoords = [];\n  for (var i = selectedCoords[0]; i <= selectedCoords[0] + step; i += 1) {\n    validCoords.push([i, selectedCoords[1]]);\n  }\n  for (var _i6 = selectedCoords[0]; _i6 >= selectedCoords[0] - step; _i6 -= 1) {\n    validCoords.push([_i6, selectedCoords[1]]);\n  }\n  for (var _i7 = selectedCoords[1]; _i7 <= selectedCoords[1] + step; _i7 += 1) {\n    validCoords.push([selectedCoords[0], _i7]);\n  }\n  for (var _i8 = selectedCoords[1]; _i8 >= selectedCoords[1] - step; _i8 -= 1) {\n    validCoords.push([selectedCoords[0], _i8]);\n  }\n  for (var _i9 = 0; _i9 <= step; _i9 += 1) {\n    validCoords.push([selectedCoords[0] + _i9, selectedCoords[1] + _i9]);\n    validCoords.push([selectedCoords[0] + _i9, selectedCoords[1] - _i9]);\n    validCoords.push([selectedCoords[0] - step + _i9, selectedCoords[1] - step + _i9]);\n    validCoords.push([selectedCoords[0] - step + _i9, selectedCoords[1] + step - _i9]);\n  }\n  for (var _i10 = selectedCoords[1]; _i10 >= selectedCoords[1] - step; _i10 -= 1) {\n    validCoords.push([selectedCoords[0], _i10]);\n  }\n  if (getCoords) {\n    return validCoords;\n  }\n  var hoveredCoords = boardMatrix[hoverCell];\n  if (validCoords.find(function (item) {\n    return item.toString() == hoveredCoords.toString();\n  })) {\n    return true;\n  } else {\n    return false;\n  }\n};\nvar determineCharacterTeam = function determineCharacterTeam(team1, team2, hoverCharacter) {\n  var currentCharacterTeam = -1;\n  if (team1.includes(hoverCharacter)) {\n    currentCharacterTeam = 0;\n  }\n  if (team2.includes(hoverCharacter)) {\n    currentCharacterTeam = 1;\n  }\n  return currentCharacterTeam;\n};\n\n//# sourceURL=webpack://js-advanced-diploma/./src/js/utils.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.css ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/prairie/map-tile-top-left.png */ \"./src/img/prairie/map-tile-top-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/prairie/map-tile-top.png */ \"./src/img/prairie/map-tile-top.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/prairie/map-tile-top-right.png */ \"./src/img/prairie/map-tile-top-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../img/prairie/map-tile-bottom-left.png */ \"./src/img/prairie/map-tile-bottom-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../img/prairie/map-tile-bottom.png */ \"./src/img/prairie/map-tile-bottom.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../img/prairie/map-tile-bottom-right.png */ \"./src/img/prairie/map-tile-bottom-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../img/prairie/map-tile-left.png */ \"./src/img/prairie/map-tile-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../img/prairie/map-tile-right.png */ \"./src/img/prairie/map-tile-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../img/prairie/map-tile-center.png */ \"./src/img/prairie/map-tile-center.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../img/desert/map-tile-top-left.png */ \"./src/img/desert/map-tile-top-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../img/desert/map-tile-top.png */ \"./src/img/desert/map-tile-top.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../img/desert/map-tile-top-right.png */ \"./src/img/desert/map-tile-top-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../img/desert/map-tile-bottom-left.png */ \"./src/img/desert/map-tile-bottom-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../img/desert/map-tile-bottom.png */ \"./src/img/desert/map-tile-bottom.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../img/desert/map-tile-bottom-right.png */ \"./src/img/desert/map-tile-bottom-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../img/desert/map-tile-left.png */ \"./src/img/desert/map-tile-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../img/desert/map-tile-right.png */ \"./src/img/desert/map-tile-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ../img/desert/map-tile-center.png */ \"./src/img/desert/map-tile-center.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arctic/map-tile-top-left.png */ \"./src/img/arctic/map-tile-top-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arctic/map-tile-top.png */ \"./src/img/arctic/map-tile-top.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arctic/map-tile-top-right.png */ \"./src/img/arctic/map-tile-top-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arctic/map-tile-bottom-left.png */ \"./src/img/arctic/map-tile-bottom-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arctic/map-tile-bottom.png */ \"./src/img/arctic/map-tile-bottom.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arctic/map-tile-bottom-right.png */ \"./src/img/arctic/map-tile-bottom-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arctic/map-tile-left.png */ \"./src/img/arctic/map-tile-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arctic/map-tile-right.png */ \"./src/img/arctic/map-tile-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arctic/map-tile-center.png */ \"./src/img/arctic/map-tile-center.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mountain/map-tile-top-left.png */ \"./src/img/mountain/map-tile-top-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mountain/map-tile-top.png */ \"./src/img/mountain/map-tile-top.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mountain/map-tile-top-right.png */ \"./src/img/mountain/map-tile-top-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mountain/map-tile-bottom-left.png */ \"./src/img/mountain/map-tile-bottom-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mountain/map-tile-bottom.png */ \"./src/img/mountain/map-tile-bottom.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mountain/map-tile-bottom-right.png */ \"./src/img/mountain/map-tile-bottom-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_33___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mountain/map-tile-left.png */ \"./src/img/mountain/map-tile-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_34___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mountain/map-tile-right.png */ \"./src/img/mountain/map-tile-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_35___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mountain/map-tile-center.png */ \"./src/img/mountain/map-tile-center.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_36___ = new URL(/* asset import */ __webpack_require__(/*! ../img/characters/generic.png */ \"./src/img/characters/generic.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_37___ = new URL(/* asset import */ __webpack_require__(/*! ../img/characters/bowman.png */ \"./src/img/characters/bowman.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_38___ = new URL(/* asset import */ __webpack_require__(/*! ../img/characters/daemon.png */ \"./src/img/characters/daemon.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_39___ = new URL(/* asset import */ __webpack_require__(/*! ../img/characters/magician.png */ \"./src/img/characters/magician.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_40___ = new URL(/* asset import */ __webpack_require__(/*! ../img/characters/swordsman.png */ \"./src/img/characters/swordsman.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_41___ = new URL(/* asset import */ __webpack_require__(/*! ../img/characters/undead.png */ \"./src/img/characters/undead.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_42___ = new URL(/* asset import */ __webpack_require__(/*! ../img/characters/vampire.png */ \"./src/img/characters/vampire.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_43___ = new URL(/* asset import */ __webpack_require__(/*! ../img/characters/zombie.png */ \"./src/img/characters/zombie.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);\nvar ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);\nvar ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);\nvar ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);\nvar ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);\nvar ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);\nvar ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);\nvar ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);\nvar ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);\nvar ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_19___);\nvar ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_20___);\nvar ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_21___);\nvar ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_22___);\nvar ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_23___);\nvar ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_24___);\nvar ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_25___);\nvar ___CSS_LOADER_URL_REPLACEMENT_26___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_26___);\nvar ___CSS_LOADER_URL_REPLACEMENT_27___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_27___);\nvar ___CSS_LOADER_URL_REPLACEMENT_28___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_28___);\nvar ___CSS_LOADER_URL_REPLACEMENT_29___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_29___);\nvar ___CSS_LOADER_URL_REPLACEMENT_30___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_30___);\nvar ___CSS_LOADER_URL_REPLACEMENT_31___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_31___);\nvar ___CSS_LOADER_URL_REPLACEMENT_32___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_32___);\nvar ___CSS_LOADER_URL_REPLACEMENT_33___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_33___);\nvar ___CSS_LOADER_URL_REPLACEMENT_34___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_34___);\nvar ___CSS_LOADER_URL_REPLACEMENT_35___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_35___);\nvar ___CSS_LOADER_URL_REPLACEMENT_36___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_36___);\nvar ___CSS_LOADER_URL_REPLACEMENT_37___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_37___);\nvar ___CSS_LOADER_URL_REPLACEMENT_38___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_38___);\nvar ___CSS_LOADER_URL_REPLACEMENT_39___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_39___);\nvar ___CSS_LOADER_URL_REPLACEMENT_40___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_40___);\nvar ___CSS_LOADER_URL_REPLACEMENT_41___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_41___);\nvar ___CSS_LOADER_URL_REPLACEMENT_42___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_42___);\nvar ___CSS_LOADER_URL_REPLACEMENT_43___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_43___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --cell-size: 64px; }\n\nhtml, body {\n  height: 100%;\n  margin: 0; }\n\nbody {\n  background: #000;\n  font-size: 16px;\n  position: relative; }\n\n#game-container {\n  padding-top: 50px; }\n\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  color: #212529;\n  background-color: #f8f9fa;\n  text-align: center;\n  vertical-align: middle;\n  padding: .375rem .75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: .25rem;\n  -webkit-transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;\n  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;\n  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;\n  border: none; }\n\n.controls {\n  text-align: center;\n  margin: 0 0 50px; }\n\n.board-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  grid-column-gap: 2px;\n  grid-row-gap: 2px; }\n\n.cell {\n  position: relative; }\n\n.cell.selected::before {\n  content: '';\n  display: block;\n  border: 4px;\n  border-radius: 32px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 64px;\n  width: var(--cell-size);\n  height: 64px;\n  height: var(--cell-size);\n  opacity: 0.9;\n  position: absolute; }\n\n.cell.selected-yellow::before {\n  border-color: #ff0;\n  border-style: solid; }\n\n.cell.selected-green::before {\n  border-color: #0f0;\n  border-style: dashed; }\n\n.cell.selected-red::before {\n  border-color: #f00;\n  border-style: dashed; }\n\n.board.prairie {\n  --map-tile-top-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  --map-tile-top-url: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  --map-tile-top-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n  --map-tile-bottom-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n  --map-tile-bottom-url: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\n  --map-tile-bottom-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_5___});\n  --map-tile-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_6___});\n  --map-tile-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_7___});\n  --map-tile-center-url: url(${___CSS_LOADER_URL_REPLACEMENT_8___}); }\n\n.board.desert {\n  --map-tile-top-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_9___});\n  --map-tile-top-url: url(${___CSS_LOADER_URL_REPLACEMENT_10___});\n  --map-tile-top-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_11___});\n  --map-tile-bottom-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_12___});\n  --map-tile-bottom-url: url(${___CSS_LOADER_URL_REPLACEMENT_13___});\n  --map-tile-bottom-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_14___});\n  --map-tile-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_15___});\n  --map-tile-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_16___});\n  --map-tile-center-url: url(${___CSS_LOADER_URL_REPLACEMENT_17___}); }\n\n.board.arctic {\n  --map-tile-top-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_18___});\n  --map-tile-top-url: url(${___CSS_LOADER_URL_REPLACEMENT_19___});\n  --map-tile-top-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_20___});\n  --map-tile-bottom-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_21___});\n  --map-tile-bottom-url: url(${___CSS_LOADER_URL_REPLACEMENT_22___});\n  --map-tile-bottom-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_23___});\n  --map-tile-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_24___});\n  --map-tile-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_25___});\n  --map-tile-center-url: url(${___CSS_LOADER_URL_REPLACEMENT_26___}); }\n\n.board.mountain {\n  --map-tile-top-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_27___});\n  --map-tile-top-url: url(${___CSS_LOADER_URL_REPLACEMENT_28___});\n  --map-tile-top-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_29___});\n  --map-tile-bottom-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_30___});\n  --map-tile-bottom-url: url(${___CSS_LOADER_URL_REPLACEMENT_31___});\n  --map-tile-bottom-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_32___});\n  --map-tile-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_33___});\n  --map-tile-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_34___});\n  --map-tile-center-url: url(${___CSS_LOADER_URL_REPLACEMENT_35___}); }\n\n.map-tile {\n  width: 64px;\n  width: var(--cell-size);\n  height: 64px;\n  height: var(--cell-size); }\n\n.map-tile-top-left {\n  background: var(--map-tile-top-left-url); }\n\n.map-tile-top {\n  background: var(--map-tile-top-url); }\n\n.map-tile-top-right {\n  background: var(--map-tile-top-right-url); }\n\n.map-tile-bottom-left {\n  background: var(--map-tile-bottom-left-url); }\n\n.map-tile-bottom {\n  background: var(--map-tile-bottom-url); }\n\n.map-tile-bottom-right {\n  background: var(--map-tile-bottom-right-url); }\n\n.map-tile-left {\n  background: var(--map-tile-left-url); }\n\n.map-tile-right {\n  background: var(--map-tile-right-url); }\n\n.map-tile-center {\n  background: var(--map-tile-center-url); }\n\n.character {\n  width: 64px;\n  width: var(--cell-size);\n  height: 64px;\n  height: var(--cell-size);\n  position: absolute;\n  z-index: 99; }\n\n.character.generic {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_36___}); }\n\n.character.bowman {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_37___}); }\n\n.character.daemon {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_38___}); }\n\n.character.magician {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_39___}); }\n\n.character.swordsman {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_40___}); }\n\n.character.undead {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_41___}); }\n\n.character.vampire {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_42___}); }\n\n.character.zombie {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_43___}); }\n\n.health-level {\n  top: 2px;\n  left: 7px;\n  position: absolute;\n  width: 50px;\n  height: 4px;\n  background: #000; }\n\n.health-level-indicator {\n  height: 4px; }\n\n.health-level-indicator-high {\n  background: #0f0; }\n\n.health-level-indicator-normal {\n  background: #ff0; }\n\n.health-level-indicator-critical {\n  background: #f00; }\n\n.damage {\n  position: absolute;\n  width: 64px;\n  width: var(--cell-size);\n  text-align: center;\n  z-index: 99999;\n  color: #f00;\n  font-weight: bold;\n  -webkit-animation: 500ms fade ease-out;\n          animation: 500ms fade ease-out; }\n\n@-webkit-keyframes fade {\n  from {\n    opacity: 0;\n    top: calc(64px * 0.5);\n    top: calc(var(--cell-size) * 0.5);\n    font-size: 1rem; }\n  to {\n    opacity: 1;\n    top: -20px;\n    font-size: 1.5rem; } }\n\n@keyframes fade {\n  from {\n    opacity: 0;\n    top: calc(64px * 0.5);\n    top: calc(var(--cell-size) * 0.5);\n    font-size: 1rem; }\n  to {\n    opacity: 1;\n    top: -20px;\n    font-size: 1.5rem; } }\n\n.tooltip {\n  display: none;\n  position: absolute;\n  width: 8%;\n  height: 2rem;\n  z-index: 9999; }\n\n.tooltip_content {\n  padding: 0 .2rem;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  white-space: nowrap;\n  height: 100%;\n  background-color: black;\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  /* background-color: green; */ }\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-advanced-diploma/./src/css/style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://js-advanced-diploma/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://js-advanced-diploma/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://js-advanced-diploma/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n  var p;\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n    if (!a[p]) {\n      return false;\n    }\n  }\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.css\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.css\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://js-advanced-diploma/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://js-advanced-diploma/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://js-advanced-diploma/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://js-advanced-diploma/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://js-advanced-diploma/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://js-advanced-diploma/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://js-advanced-diploma/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/img/arctic/map-tile-bottom-left.png":
/*!*************************************************!*\
  !*** ./src/img/arctic/map-tile-bottom-left.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b27323cf850ed820855c.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/arctic/map-tile-bottom-left.png?");

/***/ }),

/***/ "./src/img/arctic/map-tile-bottom-right.png":
/*!**************************************************!*\
  !*** ./src/img/arctic/map-tile-bottom-right.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ac9d74f57639792774bc.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/arctic/map-tile-bottom-right.png?");

/***/ }),

/***/ "./src/img/arctic/map-tile-bottom.png":
/*!********************************************!*\
  !*** ./src/img/arctic/map-tile-bottom.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"63aae58e4690953a3857.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/arctic/map-tile-bottom.png?");

/***/ }),

/***/ "./src/img/arctic/map-tile-center.png":
/*!********************************************!*\
  !*** ./src/img/arctic/map-tile-center.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"246277b8ca590816b3e8.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/arctic/map-tile-center.png?");

/***/ }),

/***/ "./src/img/arctic/map-tile-left.png":
/*!******************************************!*\
  !*** ./src/img/arctic/map-tile-left.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3d9503e0a850fda86f82.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/arctic/map-tile-left.png?");

/***/ }),

/***/ "./src/img/arctic/map-tile-right.png":
/*!*******************************************!*\
  !*** ./src/img/arctic/map-tile-right.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"22e7c5ede3f747cbe27a.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/arctic/map-tile-right.png?");

/***/ }),

/***/ "./src/img/arctic/map-tile-top-left.png":
/*!**********************************************!*\
  !*** ./src/img/arctic/map-tile-top-left.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eab6a2cc5e89a4dd8e3f.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/arctic/map-tile-top-left.png?");

/***/ }),

/***/ "./src/img/arctic/map-tile-top-right.png":
/*!***********************************************!*\
  !*** ./src/img/arctic/map-tile-top-right.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d31d84c693f649766aee.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/arctic/map-tile-top-right.png?");

/***/ }),

/***/ "./src/img/arctic/map-tile-top.png":
/*!*****************************************!*\
  !*** ./src/img/arctic/map-tile-top.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e0aa3daf6d08c62c96d9.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/arctic/map-tile-top.png?");

/***/ }),

/***/ "./src/img/characters/bowman.png":
/*!***************************************!*\
  !*** ./src/img/characters/bowman.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cec542854b228e61547a.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/characters/bowman.png?");

/***/ }),

/***/ "./src/img/characters/daemon.png":
/*!***************************************!*\
  !*** ./src/img/characters/daemon.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cf170a9fea1051b7424a.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/characters/daemon.png?");

/***/ }),

/***/ "./src/img/characters/generic.png":
/*!****************************************!*\
  !*** ./src/img/characters/generic.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0a77fc47d727eab6fd39.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/characters/generic.png?");

/***/ }),

/***/ "./src/img/characters/magician.png":
/*!*****************************************!*\
  !*** ./src/img/characters/magician.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c0fa2b75539f94144dc4.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/characters/magician.png?");

/***/ }),

/***/ "./src/img/characters/swordsman.png":
/*!******************************************!*\
  !*** ./src/img/characters/swordsman.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2007ec00c1d9f997e704.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/characters/swordsman.png?");

/***/ }),

/***/ "./src/img/characters/undead.png":
/*!***************************************!*\
  !*** ./src/img/characters/undead.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f5c75398bcb5931f9f3c.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/characters/undead.png?");

/***/ }),

/***/ "./src/img/characters/vampire.png":
/*!****************************************!*\
  !*** ./src/img/characters/vampire.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bf0ed0dca1d1e6091d42.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/characters/vampire.png?");

/***/ }),

/***/ "./src/img/characters/zombie.png":
/*!***************************************!*\
  !*** ./src/img/characters/zombie.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"296dfeac15e2377fc1dc.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/characters/zombie.png?");

/***/ }),

/***/ "./src/img/desert/map-tile-bottom-left.png":
/*!*************************************************!*\
  !*** ./src/img/desert/map-tile-bottom-left.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"13edb269e39172ddd74f.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/desert/map-tile-bottom-left.png?");

/***/ }),

/***/ "./src/img/desert/map-tile-bottom-right.png":
/*!**************************************************!*\
  !*** ./src/img/desert/map-tile-bottom-right.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5cf9c17d6a1ea7106a6c.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/desert/map-tile-bottom-right.png?");

/***/ }),

/***/ "./src/img/desert/map-tile-bottom.png":
/*!********************************************!*\
  !*** ./src/img/desert/map-tile-bottom.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f1703771380a9959d979.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/desert/map-tile-bottom.png?");

/***/ }),

/***/ "./src/img/desert/map-tile-center.png":
/*!********************************************!*\
  !*** ./src/img/desert/map-tile-center.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"51e2a5de56bd631452fe.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/desert/map-tile-center.png?");

/***/ }),

/***/ "./src/img/desert/map-tile-left.png":
/*!******************************************!*\
  !*** ./src/img/desert/map-tile-left.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eb1f6e4f87b977012684.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/desert/map-tile-left.png?");

/***/ }),

/***/ "./src/img/desert/map-tile-right.png":
/*!*******************************************!*\
  !*** ./src/img/desert/map-tile-right.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2c19971f327b288278bb.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/desert/map-tile-right.png?");

/***/ }),

/***/ "./src/img/desert/map-tile-top-left.png":
/*!**********************************************!*\
  !*** ./src/img/desert/map-tile-top-left.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"258d884122fabfc2f312.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/desert/map-tile-top-left.png?");

/***/ }),

/***/ "./src/img/desert/map-tile-top-right.png":
/*!***********************************************!*\
  !*** ./src/img/desert/map-tile-top-right.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2f1e1970c2c20cf3a8d5.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/desert/map-tile-top-right.png?");

/***/ }),

/***/ "./src/img/desert/map-tile-top.png":
/*!*****************************************!*\
  !*** ./src/img/desert/map-tile-top.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dc3f97e7bbcd5ea1ded9.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/desert/map-tile-top.png?");

/***/ }),

/***/ "./src/img/mountain/map-tile-bottom-left.png":
/*!***************************************************!*\
  !*** ./src/img/mountain/map-tile-bottom-left.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1d70f1dab2dd418c3612.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/mountain/map-tile-bottom-left.png?");

/***/ }),

/***/ "./src/img/mountain/map-tile-bottom-right.png":
/*!****************************************************!*\
  !*** ./src/img/mountain/map-tile-bottom-right.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6bacb8e25ed9ecf726bf.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/mountain/map-tile-bottom-right.png?");

/***/ }),

/***/ "./src/img/mountain/map-tile-bottom.png":
/*!**********************************************!*\
  !*** ./src/img/mountain/map-tile-bottom.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f462d2ed6eedca1e4fd9.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/mountain/map-tile-bottom.png?");

/***/ }),

/***/ "./src/img/mountain/map-tile-center.png":
/*!**********************************************!*\
  !*** ./src/img/mountain/map-tile-center.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6f6f7c09bde970b2e41b.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/mountain/map-tile-center.png?");

/***/ }),

/***/ "./src/img/mountain/map-tile-left.png":
/*!********************************************!*\
  !*** ./src/img/mountain/map-tile-left.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c75f062dddba6e98fdc6.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/mountain/map-tile-left.png?");

/***/ }),

/***/ "./src/img/mountain/map-tile-right.png":
/*!*********************************************!*\
  !*** ./src/img/mountain/map-tile-right.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"26fdc25019c24e87f11a.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/mountain/map-tile-right.png?");

/***/ }),

/***/ "./src/img/mountain/map-tile-top-left.png":
/*!************************************************!*\
  !*** ./src/img/mountain/map-tile-top-left.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ef1b0ea8c4e545d9aadc.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/mountain/map-tile-top-left.png?");

/***/ }),

/***/ "./src/img/mountain/map-tile-top-right.png":
/*!*************************************************!*\
  !*** ./src/img/mountain/map-tile-top-right.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a1d2321024649b9d8f5f.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/mountain/map-tile-top-right.png?");

/***/ }),

/***/ "./src/img/mountain/map-tile-top.png":
/*!*******************************************!*\
  !*** ./src/img/mountain/map-tile-top.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8b928c3eb136543e573a.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/mountain/map-tile-top.png?");

/***/ }),

/***/ "./src/img/prairie/map-tile-bottom-left.png":
/*!**************************************************!*\
  !*** ./src/img/prairie/map-tile-bottom-left.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"26b5f224d8750119922d.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/prairie/map-tile-bottom-left.png?");

/***/ }),

/***/ "./src/img/prairie/map-tile-bottom-right.png":
/*!***************************************************!*\
  !*** ./src/img/prairie/map-tile-bottom-right.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2429af6d3a5796e3c34b.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/prairie/map-tile-bottom-right.png?");

/***/ }),

/***/ "./src/img/prairie/map-tile-bottom.png":
/*!*********************************************!*\
  !*** ./src/img/prairie/map-tile-bottom.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"07d5e8127645225478b6.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/prairie/map-tile-bottom.png?");

/***/ }),

/***/ "./src/img/prairie/map-tile-center.png":
/*!*********************************************!*\
  !*** ./src/img/prairie/map-tile-center.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0089a610e6611f679b50.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/prairie/map-tile-center.png?");

/***/ }),

/***/ "./src/img/prairie/map-tile-left.png":
/*!*******************************************!*\
  !*** ./src/img/prairie/map-tile-left.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"546abb060a0837550fd1.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/prairie/map-tile-left.png?");

/***/ }),

/***/ "./src/img/prairie/map-tile-right.png":
/*!********************************************!*\
  !*** ./src/img/prairie/map-tile-right.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6a84ae91f5d985ddc9ee.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/prairie/map-tile-right.png?");

/***/ }),

/***/ "./src/img/prairie/map-tile-top-left.png":
/*!***********************************************!*\
  !*** ./src/img/prairie/map-tile-top-left.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"46d63299c3420c030b4e.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/prairie/map-tile-top-left.png?");

/***/ }),

/***/ "./src/img/prairie/map-tile-top-right.png":
/*!************************************************!*\
  !*** ./src/img/prairie/map-tile-top-right.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0ac7f8258ec7166dc957.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/prairie/map-tile-top-right.png?");

/***/ }),

/***/ "./src/img/prairie/map-tile-top.png":
/*!******************************************!*\
  !*** ./src/img/prairie/map-tile-top.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"946aeb948db6313f1d85.png\";\n\n//# sourceURL=webpack://js-advanced-diploma/./src/img/prairie/map-tile-top.png?");

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
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
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("8ed737bf1b4fdad81ccf")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "js-advanced-diploma:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatejs_advanced_diploma"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;