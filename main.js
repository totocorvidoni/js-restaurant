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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/page-load */ \"./src/modules/page-load.js\");\n/* harmony import */ var _modules_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/about */ \"./src/modules/about.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n/* harmony import */ var _modules_navigator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/navigator.js */ \"./src/modules/navigator.js\");\n\n\n\n\n\n\nObject(_modules_page_load__WEBPACK_IMPORTED_MODULE_0__[\"pageLoad\"])();\nObject(_modules_about__WEBPACK_IMPORTED_MODULE_1__[\"renderAbout\"])();\n\nconst about = document.getElementById('about');\nconst menu = document.getElementById('menu');\nconst contact = document.getElementById('contact');\n\nabout.addEventListener('click', function() {\n  Object(_modules_navigator_js__WEBPACK_IMPORTED_MODULE_4__[\"setActive\"])(this);\n  Object(_modules_navigator_js__WEBPACK_IMPORTED_MODULE_4__[\"goToTab\"])(_modules_about__WEBPACK_IMPORTED_MODULE_1__[\"renderAbout\"]);\n});\nmenu.addEventListener('click', function() {\n  Object(_modules_navigator_js__WEBPACK_IMPORTED_MODULE_4__[\"setActive\"])(this);\n  Object(_modules_navigator_js__WEBPACK_IMPORTED_MODULE_4__[\"goToTab\"])(_modules_menu__WEBPACK_IMPORTED_MODULE_2__[\"renderMenu\"]);\n});\ncontact.addEventListener('click', function() {\n  Object(_modules_navigator_js__WEBPACK_IMPORTED_MODULE_4__[\"setActive\"])(this);\n  Object(_modules_navigator_js__WEBPACK_IMPORTED_MODULE_4__[\"goToTab\"])(_modules_contact__WEBPACK_IMPORTED_MODULE_3__[\"renderContact\"]);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/*! exports provided: renderAbout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderAbout\", function() { return renderAbout; });\nconst renderAbout = () => {\n  const content = document.querySelector('#content');\n  let main = document.createElement('main');\n  let heading = document.createElement('h2');\n  heading.appendChild(document.createTextNode('About Us'));\n  let p = document.createElement('p');\n  let text = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac turpis. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Non tellus orci ac auctor augue. Sit amet dictum sit amet justo donec enim diam. Morbi tincidunt augue interdum velit.');\n  p.appendChild(text);\n  main.appendChild(heading);\n  main.appendChild(p);\n  content.appendChild(main);\n}\n\n\n\n//# sourceURL=webpack:///./src/modules/about.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/*! exports provided: renderContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderContact\", function() { return renderContact; });\nconst renderContact = () => {\n  const content = document.querySelector('#content');\n  let main = document.createElement('main');\n  let heading = document.createElement('h2');\n  heading.appendChild(document.createTextNode('Contact Info'));\n  let p = document.createElement('p');\n  let text = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac turpis. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Non tellus orci ac auctor augue. Sit amet dictum sit amet justo donec enim diam. Morbi tincidunt augue interdum velit.');\n  p.appendChild(text);\n  main.appendChild(heading);\n  main.appendChild(p);\n  content.appendChild(main);\n}\n\n\n\n//# sourceURL=webpack:///./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/*! exports provided: renderMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderMenu\", function() { return renderMenu; });\nconst renderMenu = () => {\n  const content = document.querySelector('#content');\n  let main = document.createElement('main');\n  let heading = document.createElement('h2');\n  heading.appendChild(document.createTextNode('Our Menu'));\n  let p = document.createElement('p');\n  let text = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac turpis. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Non tellus orci ac auctor augue. Sit amet dictum sit amet justo donec enim diam. Morbi tincidunt augue interdum velit.');\n  p.appendChild(text);\n  main.appendChild(heading);\n  main.appendChild(p);\n  content.appendChild(main);\n}\n\n\n\n//# sourceURL=webpack:///./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/navigator.js":
/*!**********************************!*\
  !*** ./src/modules/navigator.js ***!
  \**********************************/
/*! exports provided: goToTab, setActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"goToTab\", function() { return goToTab; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setActive\", function() { return setActive; });\nconst goToTab = (renderTab) => {\n  document.querySelector('main').remove();\n  renderTab();\n}\n\nconst setActive = (element) => {\n  let navs = document.querySelectorAll('nav a');\n  navs.forEach(nav => nav.className = '');\n  element.className = 'active';\n}\n\n\n\n//# sourceURL=webpack:///./src/modules/navigator.js?");

/***/ }),

/***/ "./src/modules/page-load.js":
/*!**********************************!*\
  !*** ./src/modules/page-load.js ***!
  \**********************************/
/*! exports provided: pageLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageLoad\", function() { return pageLoad; });\nconst pageLoad = () => {\n  const content = document.querySelector('#content');\n  // render header\n  let header = document.createElement('header');\n  let logoContainer = document.createElement('div');\n  logoContainer.id = 'logo';\n  let logo = document.createElement('img');\n  logo.setAttribute('src', 'images/w-logo.svg')\n  logoContainer.appendChild(logo);\n  let name = document.createElement('h1');\n  name.appendChild(document.createTextNode('Valhalla'));\n  logoContainer.appendChild(name);\n  let subText = document.createElement('p');\n  subText.appendChild(document.createTextNode('If you are going to eat, you might as well eat with the gods.'));\n  header.appendChild(logoContainer);\n  header.appendChild(subText);\n  content.appendChild(header);\n\n  // render nav\n  let nav = document.createElement('nav');\n  let about = document.createElement('a');\n  about.setAttribute('href', '#');\n  about.id = 'about';\n  about.appendChild(document.createTextNode('ABOUT US'));\n  let menu = document.createElement('a');\n  menu.setAttribute('href', '#');\n  menu.id = 'menu';\n  menu.appendChild(document.createTextNode('MENU'));\n  let contact = document.createElement('a');\n  contact.setAttribute('href', '#');\n  contact.id = 'contact';\n  contact.appendChild(document.createTextNode('CONTACT'));\n  nav.appendChild(about);\n  nav.appendChild(menu);\n  nav.appendChild(contact);\n  content.appendChild(nav);\n  // about();\n}\n\n\n\n//# sourceURL=webpack:///./src/modules/page-load.js?");

/***/ })

/******/ });