/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/todo-list.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/todo-list.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    font-size: 62.5%;\n\n    --todo-darkest: #14532d;\n    --todo-dark: #15803d;\n    --todo-light: #22c55e;\n    --todo-lighter: #4ade80;\n\n    --fades: #f5f5f5;\n    --fader: #e5e5e5;\n    /* --fade: #cbd5e1; */\n\n    --border: 1px solid black;\n    --border-radius: 2rem;\n}\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    min-height: 100%;\n}\n\nbody {\n    min-height: 100vh;\n    /* width: 100%; */\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    background-color: var(--todo-darkest);\n    min-height: 5vh;\n    width: 100%;\n    display: flex;\n    padding: 0 2rem;\n    align-items: center;\n    justify-content: space-between;\n}\n\nfooter {\n    background-color: var(--todo-darkest);\n    min-height: 5vh;\n    width: 100%;\n    display: flex;\n    padding: 0 2rem;\n    align-items: center;\n    justify-content: space-between;\n}\n\nsection {\n    /* width: 100%; */\n    display: flex;\n    flex: 1;\n    min-height: calc(100% - 5vh - 5vh);\n}\n\nnav {\n    background-color: var(--todo-light);\n    width: 25rem;\n    min-width: 20rem;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 2rem;\n    padding: 2rem;\n    transition: height 1s ease-in-out;\n}\n\nnav.media {\n    display: block;\n}\n\nmain {\n    background-color: var(--fades);\n    width: 80%;\n    /* display: grid; */\n    /* grid-template-rows: auto auto 1fr; */\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    padding: 2rem 2rem 0 2rem;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\np {\n    cursor: default;\n}\n\nh1 {\n    font-size: 3rem;\n}\n\nh2 {\n    font-size: 2.5rem;\n}\n\nh3 {\n    font-size: 2rem;\n}\n\nh4 {\n    font-size: 1.8rem;\n}\n\nh5 {\n    font-size: 1.6rem;\n}\n\np {\n    font-size: 1.8rem;\n}\n\n/* button,\ninput,\nimg {\n    width: 100%;\n} */\n\n.flex-center,\n.flex-column,\n.flex-row {\n    display: flex;\n    align-items: center;\n}\n\n.flex-center {\n    justify-content: center;\n}\n\n.flex-column {\n    flex-direction: column;\n}\n\n.between {\n    justify-content: space-between;\n}\n\n.evenly {\n    justify-content: space-evenly;\n}\n\n.end {\n    justify-content: flex-end;\n}\n\n.grid {\n    display: grid;\n    align-items: center;\n    width: 100%;\n}\n\n.gap {\n    gap: 1rem;\n}\n\n.width-100 {\n    width: 100%;\n}\n\n.sortHidden {\n    visibility: hidden;\n}\n\n#content-attributes {\n    height: 2rem;\n    grid-template-columns: 3rem 2fr 1fr;\n}\n\n#content-items {\n    width: 100%;\n}\n\n#task-add {\n    /* width: 100%; */\n}\n\n.taskPreview {\n    /* height: 2rem; */\n}\n\n.taskDisplay {\n    height: 2rem;\n    grid-template-columns: 3rem 2fr 1fr 3rem;\n}\n\n.taskTitle,\n.taskDate {\n    background-color: inherit;\n    border: 0;\n}\n\n.editTask {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: 3rem 1fr 3rem 3rem;\n    grid-template-areas:\n        \"priority title title title\"\n        \"description description description description\"\n        \"date date project project\"\n        \"taccept taccept tcancel tcancel\";\n    border: var(--border);\n    outline: var(--border);\n    border-radius: var(--border-radius);\n}\n\n.editTaskPriority,\n.editTaskTitle,\n.editTaskDescription,\n.editTaskDate,\n.editTaskProject,\n.accept,\n.cancel {\n    padding: .5rem;\n    border: none;\n    resize: none;\n}\n\n.editTaskPriority {\n    grid-area: priority;\n    border-top-left-radius: var(--border-radius);\n    border-right: var(--border);\n    border-bottom: var(--border);\n}\n\n.editTaskTitle {\n    grid-area: title;\n    border-top-right-radius: var(--border-radius);\n    border-bottom: var(--border);\n    font-size: 1.6rem;\n}\n\n.editTaskDescription {\n    grid-area: description;\n}\n\n.editTaskDate {\n    grid-area: date;\n    border-top: var(--border);\n    border-right: var(--border);\n}\n\n.editTaskProject {\n    grid-area: project;\n    border-top: var(--border);\n}\n\n.taskAccept {\n    grid-area: taccept;\n    border: 0;\n    border-top: var(--border);\n    border-right: var(--border);\n    border-bottom-left-radius: var(--border-radius);\n}\n\n.taskCancel {\n    grid-area: tcancel;\n    border: 0;\n    border-top: var(--border);\n    border-bottom-right-radius: var(--border-radius);\n}\n\n#projects-user {}\n\n.projectDisplay {\n    width: 100%;\n    height: 2rem;\n    grid-template-columns: 3rem 1fr;\n}\n\n.editProject {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: auto 1fr;\n    grid-template-areas:\n        \"name name\"\n        \"paccept pcancel\";\n    border: var(--border);\n    outline: var(--border);\n    border-radius: var(--border-radius);\n}\n\n.editProjectName,\n.projectAccept,\n.projectCancel {\n    padding: .5rem;\n    border: none;\n    outline: none;\n    resize: none;\n}\n\n.editProjectName {\n    grid-area: name;\n    border-top-left-radius: var(--border-radius);\n    border-top-right-radius: var(--border-radius);\n}\n\n.projectAccept {\n    grid-area: paccept;\n    border: 0;\n    border-top: var(--border);\n    border-right: var(--border);\n    border-bottom-left-radius: var(--border-radius);\n}\n\n.projectCancel {\n    grid-area: pcancel;\n    border: 0;\n    border-top: var(--border);\n    border-bottom-right-radius: var(--border-radius);\n}\n\n@media (max-width: 650px) {\n    .nav-control {\n        display: block;\n    }\n\n    section {\n        flex-direction: column;\n    }\n\n    nav {\n        width: 100%;\n        display: none;\n    }\n\n    main {\n        width: 100%;\n    }\n\n\n}", "",{"version":3,"sources":["webpack://./src/styles/todo-list.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;;IAEhB,uBAAuB;IACvB,oBAAoB;IACpB,qBAAqB;IACrB,uBAAuB;;IAEvB,gBAAgB;IAChB,gBAAgB;IAChB,qBAAqB;;IAErB,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;;;IAGI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,qCAAqC;IACrC,eAAe;IACf,WAAW;IACX,aAAa;IACb,eAAe;IACf,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,qCAAqC;IACrC,eAAe;IACf,WAAW;IACX,aAAa;IACb,eAAe;IACf,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,OAAO;IACP,kCAAkC;AACtC;;AAEA;IACI,mCAAmC;IACnC,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,SAAS;IACT,aAAa;IACb,iCAAiC;AACrC;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,8BAA8B;IAC9B,UAAU;IACV,mBAAmB;IACnB,uCAAuC;IACvC,aAAa;IACb,OAAO;IACP,sBAAsB;IACtB,yBAAyB;AAC7B;;AAEA;;;;;;IAMI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;;;GAIG;;AAEH;;;IAGI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,mCAAmC;AACvC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,wCAAwC;AAC5C;;AAEA;;IAEI,yBAAyB;IACzB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,sCAAsC;IACtC;;;;yCAIqC;IACrC,qBAAqB;IACrB,sBAAsB;IACtB,mCAAmC;AACvC;;AAEA;;;;;;;IAOI,cAAc;IACd,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,4CAA4C;IAC5C,2BAA2B;IAC3B,4BAA4B;AAChC;;AAEA;IACI,gBAAgB;IAChB,6CAA6C;IAC7C,4BAA4B;IAC5B,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,yBAAyB;IACzB,2BAA2B;IAC3B,+CAA+C;AACnD;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,yBAAyB;IACzB,gDAAgD;AACpD;;AAEA,gBAAgB;;AAEhB;IACI,WAAW;IACX,YAAY;IACZ,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,4BAA4B;IAC5B;;yBAEqB;IACrB,qBAAqB;IACrB,sBAAsB;IACtB,mCAAmC;AACvC;;AAEA;;;IAGI,cAAc;IACd,YAAY;IACZ,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,4CAA4C;IAC5C,6CAA6C;AACjD;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,yBAAyB;IACzB,2BAA2B;IAC3B,+CAA+C;AACnD;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,yBAAyB;IACzB,gDAAgD;AACpD;;AAEA;IACI;QACI,cAAc;IAClB;;IAEA;QACI,sBAAsB;IAC1B;;IAEA;QACI,WAAW;QACX,aAAa;IACjB;;IAEA;QACI,WAAW;IACf;;;AAGJ","sourcesContent":[":root {\n    font-size: 62.5%;\n\n    --todo-darkest: #14532d;\n    --todo-dark: #15803d;\n    --todo-light: #22c55e;\n    --todo-lighter: #4ade80;\n\n    --fades: #f5f5f5;\n    --fader: #e5e5e5;\n    /* --fade: #cbd5e1; */\n\n    --border: 1px solid black;\n    --border-radius: 2rem;\n}\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    min-height: 100%;\n}\n\nbody {\n    min-height: 100vh;\n    /* width: 100%; */\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    background-color: var(--todo-darkest);\n    min-height: 5vh;\n    width: 100%;\n    display: flex;\n    padding: 0 2rem;\n    align-items: center;\n    justify-content: space-between;\n}\n\nfooter {\n    background-color: var(--todo-darkest);\n    min-height: 5vh;\n    width: 100%;\n    display: flex;\n    padding: 0 2rem;\n    align-items: center;\n    justify-content: space-between;\n}\n\nsection {\n    /* width: 100%; */\n    display: flex;\n    flex: 1;\n    min-height: calc(100% - 5vh - 5vh);\n}\n\nnav {\n    background-color: var(--todo-light);\n    width: 25rem;\n    min-width: 20rem;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 2rem;\n    padding: 2rem;\n    transition: height 1s ease-in-out;\n}\n\nnav.media {\n    display: block;\n}\n\nmain {\n    background-color: var(--fades);\n    width: 80%;\n    /* display: grid; */\n    /* grid-template-rows: auto auto 1fr; */\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    padding: 2rem 2rem 0 2rem;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\np {\n    cursor: default;\n}\n\nh1 {\n    font-size: 3rem;\n}\n\nh2 {\n    font-size: 2.5rem;\n}\n\nh3 {\n    font-size: 2rem;\n}\n\nh4 {\n    font-size: 1.8rem;\n}\n\nh5 {\n    font-size: 1.6rem;\n}\n\np {\n    font-size: 1.8rem;\n}\n\n/* button,\ninput,\nimg {\n    width: 100%;\n} */\n\n.flex-center,\n.flex-column,\n.flex-row {\n    display: flex;\n    align-items: center;\n}\n\n.flex-center {\n    justify-content: center;\n}\n\n.flex-column {\n    flex-direction: column;\n}\n\n.between {\n    justify-content: space-between;\n}\n\n.evenly {\n    justify-content: space-evenly;\n}\n\n.end {\n    justify-content: flex-end;\n}\n\n.grid {\n    display: grid;\n    align-items: center;\n    width: 100%;\n}\n\n.gap {\n    gap: 1rem;\n}\n\n.width-100 {\n    width: 100%;\n}\n\n.sortHidden {\n    visibility: hidden;\n}\n\n#content-attributes {\n    height: 2rem;\n    grid-template-columns: 3rem 2fr 1fr;\n}\n\n#content-items {\n    width: 100%;\n}\n\n#task-add {\n    /* width: 100%; */\n}\n\n.taskPreview {\n    /* height: 2rem; */\n}\n\n.taskDisplay {\n    height: 2rem;\n    grid-template-columns: 3rem 2fr 1fr 3rem;\n}\n\n.taskTitle,\n.taskDate {\n    background-color: inherit;\n    border: 0;\n}\n\n.editTask {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: 3rem 1fr 3rem 3rem;\n    grid-template-areas:\n        \"priority title title title\"\n        \"description description description description\"\n        \"date date project project\"\n        \"taccept taccept tcancel tcancel\";\n    border: var(--border);\n    outline: var(--border);\n    border-radius: var(--border-radius);\n}\n\n.editTaskPriority,\n.editTaskTitle,\n.editTaskDescription,\n.editTaskDate,\n.editTaskProject,\n.accept,\n.cancel {\n    padding: .5rem;\n    border: none;\n    resize: none;\n}\n\n.editTaskPriority {\n    grid-area: priority;\n    border-top-left-radius: var(--border-radius);\n    border-right: var(--border);\n    border-bottom: var(--border);\n}\n\n.editTaskTitle {\n    grid-area: title;\n    border-top-right-radius: var(--border-radius);\n    border-bottom: var(--border);\n    font-size: 1.6rem;\n}\n\n.editTaskDescription {\n    grid-area: description;\n}\n\n.editTaskDate {\n    grid-area: date;\n    border-top: var(--border);\n    border-right: var(--border);\n}\n\n.editTaskProject {\n    grid-area: project;\n    border-top: var(--border);\n}\n\n.taskAccept {\n    grid-area: taccept;\n    border: 0;\n    border-top: var(--border);\n    border-right: var(--border);\n    border-bottom-left-radius: var(--border-radius);\n}\n\n.taskCancel {\n    grid-area: tcancel;\n    border: 0;\n    border-top: var(--border);\n    border-bottom-right-radius: var(--border-radius);\n}\n\n#projects-user {}\n\n.projectDisplay {\n    width: 100%;\n    height: 2rem;\n    grid-template-columns: 3rem 1fr;\n}\n\n.editProject {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: auto 1fr;\n    grid-template-areas:\n        \"name name\"\n        \"paccept pcancel\";\n    border: var(--border);\n    outline: var(--border);\n    border-radius: var(--border-radius);\n}\n\n.editProjectName,\n.projectAccept,\n.projectCancel {\n    padding: .5rem;\n    border: none;\n    outline: none;\n    resize: none;\n}\n\n.editProjectName {\n    grid-area: name;\n    border-top-left-radius: var(--border-radius);\n    border-top-right-radius: var(--border-radius);\n}\n\n.projectAccept {\n    grid-area: paccept;\n    border: 0;\n    border-top: var(--border);\n    border-right: var(--border);\n    border-bottom-left-radius: var(--border-radius);\n}\n\n.projectCancel {\n    grid-area: pcancel;\n    border: 0;\n    border-top: var(--border);\n    border-bottom-right-radius: var(--border-radius);\n}\n\n@media (max-width: 650px) {\n    .nav-control {\n        display: block;\n    }\n\n    section {\n        flex-direction: column;\n    }\n\n    nav {\n        width: 100%;\n        display: none;\n    }\n\n    main {\n        width: 100%;\n    }\n\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMonths/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/addMonths/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMonths)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */

function addMonths(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.

  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();

  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addWeeks/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/addWeeks/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addWeeks)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the weeks added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */

function addWeeks(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  var days = amount * 7;
  return (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, days);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isWithinInterval/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isWithinInterval/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isWithinInterval)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isWithinInterval
 * @category Interval Helpers
 * @summary Is the given date within the interval?
 *
 * @description
 * Is the given date within the interval? (Including start and end.)
 *
 * @param {Date|Number} date - the date to check
 * @param {Interval} interval - the interval to check
 * @returns {Boolean} the date is within the interval
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For the date within the interval:
 * isWithinInterval(new Date(2014, 0, 3), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> true
 *
 * @example
 * // For the date outside of the interval:
 * isWithinInterval(new Date(2014, 0, 10), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> false
 *
 * @example
 * // For date equal to interval start:
 * isWithinInterval(date, { start, end: date }) // => true
 *
 * @example
 * // For date equal to interval end:
 * isWithinInterval(date, { start: date, end }) // => true
 */
function isWithinInterval(dirtyDate, interval) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var time = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var startTime = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(interval.start).getTime();
  var endTime = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(interval.end).getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startTime <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  return time >= startTime && time <= endTime;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/styles/todo-list.css":
/*!**********************************!*\
  !*** ./src/styles/todo-list.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_todo_list_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./todo-list.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/todo-list.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_todo_list_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_todo_list_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_todo_list_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_todo_list_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/icons sync \\.(png%7Cjpe?g%7Csvg)$":
/*!********************************************************************!*\
  !*** ./src/assets/icons/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \********************************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./src/assets/icons sync \\.(png%7Cjpe?g%7Csvg)$";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./src/modules/forms.js":
/*!******************************!*\
  !*** ./src/modules/forms.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Forms)
/* harmony export */ });
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ "./src/modules/interface.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");






class Forms {
  static createTaskContainer(task) {
    const taskPreview = document.createElement('div');
    taskPreview.classList.add('taskPreview');
    taskPreview.classList.add('flex-center');
    taskPreview.classList.add('width-100');

    taskPreview.append(this.createTask(task));
    return taskPreview;
  }

  static createTask({ title, projectConnected, description, priority, dueDate } = {}) {
    const taskDisplay = document.createElement('div');
    taskDisplay.classList.add('taskDisplay');
    taskDisplay.classList.add('grid');
    taskDisplay.classList.add('width-100');
    taskDisplay.classList.add('gap');

    const taskCheck = document.createElement('input');
    setKeyValue(taskCheck, { type: 'checkbox' });
    taskCheck.classList.add('taskCheck');
    const taskTitle = document.createElement('input');
    setKeyValue(taskTitle, { type: 'text', name: 'title', readonly: "readonly" });
    taskTitle.classList.add('taskTitle');
    if (title) taskTitle.value = title;
    const taskDate = document.createElement('input');
    setKeyValue(taskDate, { type: 'date', name: 'date', readonly: "readonly" });
    taskDate.classList.add('taskDate');
    if (dueDate) taskDate.value = dueDate;

    taskTitle.addEventListener('click', taskEdit);
    taskDate.addEventListener('click', taskEdit);

    function taskEdit(event) {
      console.log(event);
      const container = event.target.parentNode.parentNode;
      container.replaceChildren();
      container.append(Forms.editTask({ title, projectConnected, description, priority, dueDate }, true));

      console.log(event.target);
      if (event.target === 'input.taskTitle') document.querySelector('.editTaskTitle').focus();
      else if (event.target === 'input.taskDate') document.querySelector('.editTaskDate').focus();
      else document.querySelector('.editTaskPriority').focus();
    }

    const taskDelete = document.createElement('img');
    setKeyValue(taskDelete, { src: 'delete.svg', name: 'delete', class: '' });
    taskDelete.classList.add('taskDelete');
    taskDelete.addEventListener('click', () => {
      const active = document.querySelector('.active');
      _storage__WEBPACK_IMPORTED_MODULE_2__["default"].deleteTaskSave(taskTitle.value);
      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].loadALlProjects();
      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].setActiveButton(active.id);
      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].addEventButtons();
      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].loadAllTasks();
    });

    taskDisplay.append(taskCheck, taskTitle, taskDate, taskDelete);
    return taskDisplay;
  }

  static editTask({ title, projectConnected = '', description = '', priority = 5, dueDate = 'No date' } = {}, editing = false) {
    const taskForm = document.createElement("form");
    setKeyValue(taskForm, { method: 'post', id: 'taskForm' });
    taskForm.classList.add('width-100');

    const editTask = document.createElement('div');
    editTask.setAttribute('id', 'editTask');
    editTask.classList.add('editTask');

    const editTaskTitle = document.createElement('textarea');
    setKeyValue(editTaskTitle, { name: 'title', placeholder: 'Title: Cook', maxlength: '35', required: 'true' });
    editTaskTitle.classList.add('editTaskTitle');
    if (title) editTaskTitle.value = title;
    const taskNameReplaced = title;

    const editTaskDescription = document.createElement('textarea');
    setKeyValue(editTaskDescription, { name: 'description', placeholder: 'Description: e.g. Cook for dinner' });
    editTaskDescription.classList.add('editTaskDescription');
    if (description) editTaskDescription.value = description;

    const editTaskDate = document.createElement('input');
    setKeyValue(editTaskDate, { name: 'dueDate', type: 'date' });
    editTaskDate.classList.add('editTaskDate');
    const today = new Date().toISOString().split('T')[0];
    editTaskDate.setAttribute('min', today);
    if (dueDate) editTaskDate.value = dueDate;

    const editTaskPriority = document.createElement('select');
    setKeyValue(editTaskPriority, { name: 'priority' });
    const priorityLevels = [...Array(5).keys()].map(i => i + 1);
    priorityLevels.forEach(prio => {
      const option = document.createElement('option');
      option.setAttribute('value', `${prio}`);
      if (prio === 3) option.setAttribute('selected', 'true');
      option.textContent = `${prio}`;
      editTaskPriority.append(option);
    })
    editTaskPriority.classList.add('editTaskPriority');
    if (priority) editTaskPriority.value = priority;

    const editTaskProject = document.createElement('select');
    setKeyValue(editTaskProject, { name: 'projectConnected' });
    _storage__WEBPACK_IMPORTED_MODULE_2__["default"].getList().getAllProjects().forEach(project => {
      const option = document.createElement('option');
      option.setAttribute('value', `${project.name}`);
      option.textContent = `${project.name}`;
      editTaskProject.append(option);
    });
    editTaskProject.classList.add('editTaskProject');
    if (editTaskProject) editTaskProject.value = projectConnected;

    const taskAccept = document.createElement('button');
    taskAccept.textContent = "Accept";
    setKeyValue(taskAccept, { type: 'submit', form: 'taskForm', formaction: 'post' });
    taskAccept.classList.add('taskAccept');
    const taskCancel = document.createElement('button');
    taskCancel.textContent = "Cancel";
    taskCancel.classList.add('taskCancel');
    taskCancel.addEventListener('click', (event) => {
      const container = event.target.parentNode.parentNode.parentNode;
      const active = document.querySelector('.active');
      container.replaceChildren();
      container.append(this.createTask({ title, projectConnected, description, priority, dueDate }));

      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].loadALlProjects();
      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].setActiveButton(active.id);
      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].addEventButtons();
      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].loadAllTasks();
    });

    editTask.append(editTaskPriority, editTaskTitle, editTaskDescription, editTaskDate, editTaskProject, taskAccept, taskCancel);
    taskForm.append(editTask);

    taskForm.addEventListener('submit', (event) => {
      const active = document.querySelector('.active');
      event.preventDefault();
      const data = new FormData(event.target);
      const newTask = new _task__WEBPACK_IMPORTED_MODULE_3__["default"](Object.fromEntries(data));
      // if(Storage.getList().containingTask(newTask.title)) { alert('Task exists, set another one'); return; }

      if (editing) _storage__WEBPACK_IMPORTED_MODULE_2__["default"].replaceTaskSave(newTask, taskNameReplaced);
      else _storage__WEBPACK_IMPORTED_MODULE_2__["default"].addTaskSave(newTask);

      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].loadALlProjects();
      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].setActiveButton(active.id);
      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].addEventButtons();
      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].loadAllTasks();
    });

    return taskForm;
  }

  static createProjectContainer(project) {
    const projectPreview = document.createElement('div');
    projectPreview.classList.add('projectPreview');
    projectPreview.classList.add('width-100');

    projectPreview.append(this.createProjects(project));
    return projectPreview;
  }

  static createProjects(project) {
    const projectDisplay = document.createElement('div');
    projectDisplay.classList.add('projectDisplay');
    projectDisplay.classList.add('grid');
    projectDisplay.classList.add('gap');

    const projectNumbers = document.createElement('label');
    projectNumbers.textContent = `${project.projectTasks.length}`;
    const projectSelect = document.createElement('button');
    projectSelect.setAttribute('id', `project-${project.name}`);
    projectSelect.classList.add('projects');

    projectSelect.textContent = `${project.name}`;

    projectDisplay.append(projectNumbers, projectSelect);
    projectDisplay.addEventListener('dblclick', (event) => {
      const container = event.target.parentNode.parentNode;
      container.replaceChildren();
      container.append(this.editProject(project, true));
    })
    return projectDisplay;
  }

  static editProject({ name = '', projectTasks = [] } = {}, editing = false) {
    const projectForm = document.createElement("form");
    setKeyValue(projectForm, { method: 'post', id: 'projectForm' });
    projectForm.classList.add('width-100');

    const editProject = document.createElement('div');
    editProject.setAttribute('id', 'editProject');
    editProject.classList.add('editProject');

    const editProjectName = document.createElement('input');
    setKeyValue(editProjectName, { name: 'name', type: 'text', placeholder: 'Project name: Chores', maxlength: '35', required: 'true' });
    editProjectName.classList.add('width-100');
    editProjectName.classList.add('editProjectName');
    if (name) editProjectName.value = name;
    const projectNameReplaced = name;

    const projectAccept = document.createElement('button');
    projectAccept.textContent = "Accept";
    setKeyValue(projectAccept, { type: 'submit', form: 'projectForm', formaction: 'post' });
    projectAccept.classList.add('projectAccept');
    const projectCancel = document.createElement('button');
    projectCancel.textContent = "Cancel";
    projectCancel.classList.add('projectCancel');
    projectCancel.addEventListener('click', (event) => {
      const container = event.target.parentNode.parentNode;
      container.replaceChildren();
      container.append(this.createProjects({ name, projectTasks }));

      const identification = `project-${editProjectName.value}`;
      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].loadALlProjects();
      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].setActiveButton(identification);
      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].addEventButtons();
      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].setActiveButton(editProjectName.value);
      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].loadAllTasks();
    });

    editProject.append(editProjectName, projectAccept, projectCancel);
    projectForm.append(editProject);

    projectForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (editProjectName === '') return;
      const data = new FormData(event.target);
      const newName = data.get('name');
      const newProject = new _project__WEBPACK_IMPORTED_MODULE_1__["default"](newName, projectTasks);

      if (editing) _storage__WEBPACK_IMPORTED_MODULE_2__["default"].replaceProjectSave(newProject, projectNameReplaced);
      else _storage__WEBPACK_IMPORTED_MODULE_2__["default"].addProjectSave(newProject);

      const identification = `project-${editProjectName.value}`;
      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].loadALlProjects();
      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].setActiveButton(identification);
      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].addEventButtons();
      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].loadTitle(editProjectName.value);
      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].loadAllTasks();
    });

    return projectForm;
  }

}

function setKeyValue(elem, attrs) { Object.entries(attrs).forEach(([key, value]) => elem.setAttribute(key, value)); }

/***/ }),

/***/ "./src/modules/interface.js":
/*!**********************************!*\
  !*** ./src/modules/interface.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Interface)
/* harmony export */ });
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./src/modules/page.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms */ "./src/modules/forms.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");






class Interface {

  static loadAll() {
    _page__WEBPACK_IMPORTED_MODULE_0__["default"];
    Interface.test();
    Interface.loadALlProjects();
    Interface.setActiveButton('home');
    Interface.loadAllTasks();
    Interface.addEventButtons();
    Interface.addEventOtherButtons();
  }

  static loadAllTasks() {
    const contentItems = document.querySelector('#content-items');
    contentItems.replaceChildren();

    const active = document.querySelector('.active');
    const tasksContainer = (active.id === 'home') ? _storage__WEBPACK_IMPORTED_MODULE_4__["default"].getList().getAllTasks() :
      (active.id === 'today') ? _storage__WEBPACK_IMPORTED_MODULE_4__["default"].getList().getTasksToday() :
        (active.id === 'week') ? _storage__WEBPACK_IMPORTED_MODULE_4__["default"].getList().getTasksWeek() :
          (active.id === 'upcoming') ? _storage__WEBPACK_IMPORTED_MODULE_4__["default"].getList().getTasksMonth() :
            _storage__WEBPACK_IMPORTED_MODULE_4__["default"].getList().getProject(`${active.id.split('-')[1]}`).getProjectTasks();

    tasksContainer.forEach(task => {
      contentItems.append(_forms__WEBPACK_IMPORTED_MODULE_3__["default"].createTaskContainer(task));
    })
    console.log(_storage__WEBPACK_IMPORTED_MODULE_4__["default"].getList());
  }

  static addEventButtons() {
    const sideButtons = document.querySelectorAll('.menu, .projects');
    sideButtons.forEach(button => {
      button.addEventListener('click', () => {
        const label = (button.id.includes('project-')) ? button.id.split('-')[1] : button.id;
        Interface.loadTitle(label);
        Interface.setActiveButton(button.id);
        Interface.loadAllTasks();
      })
    });
  }

  static setActiveButton(id) {
    const sideButtons = document.querySelectorAll('.menu, .projects');
    sideButtons.forEach(button => {
      if (button.id === id) button.classList.add('active');
      else button.classList.remove('active');
    });
  }

  static loadTitle(label) {
    const title = document.querySelector('#content-title');

    const capitalized = capitalize(label);
    title.textContent = capitalized;
  }

  static test() {
  
  }

  static loadALlProjects() {
    const userProjects = document.querySelector('#projects-user');
    userProjects.replaceChildren();
    _storage__WEBPACK_IMPORTED_MODULE_4__["default"].getList().getAllProjects().forEach(project => {
      if (project.name === '') return;
      userProjects.append(_forms__WEBPACK_IMPORTED_MODULE_3__["default"].createProjectContainer(project));
    });
    // console.log(Storage.getList().getAllProjects());
  }

  static addEventOtherButtons() {
    const contentItems = document.querySelector('#content-items');
    const userProjectsContents = document.querySelector('#projects-user');

    const addTask = document.querySelector('#task-add');
    addTask.addEventListener('click', () => {
      const blankTask = new _task__WEBPACK_IMPORTED_MODULE_1__["default"]();
      contentItems.append(_forms__WEBPACK_IMPORTED_MODULE_3__["default"].editTask(blankTask));
    });

    const addProject = document.querySelector('#project-add');
    addProject.addEventListener('click', () => {
      const blankProject = new _project__WEBPACK_IMPORTED_MODULE_2__["default"]();
      userProjectsContents.append(_forms__WEBPACK_IMPORTED_MODULE_3__["default"].editProject(blankProject));
    });
  }
}

function capitalize(string) { return string.charAt(0).toUpperCase() + string.slice(1); }
function setKeyValue(elem, attrs) { Object.entries(attrs).forEach(([key, value]) => elem.setAttribute(key, value)); }

/***/ }),

/***/ "./src/modules/list.js":
/*!*****************************!*\
  !*** ./src/modules/list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoList)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addWeeks/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isWithinInterval/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addMonths/index.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");



class TodoList {
  constructor() {
    this.tasks = [];
    this.projects = [];
    this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__["default"](''));
  }

  addTask(taskAdded) {
    if (this.tasks.find((task) => task.title === taskAdded.title)) return;
    this.tasks.push(taskAdded);
    this.addTaskProject(taskAdded);
  }

  addTaskProject(taskAddedProject) {
    if (this.containingProject(taskAddedProject.getProjectConnected()) === false) this.addProject(new _project__WEBPACK_IMPORTED_MODULE_0__["default"](`${task.getProjectConnected()}`));
    this.getProject(taskAddedProject.getProjectConnected()).addProjectTask(taskAddedProject);
  }

  deleteTask(taskDeletedTitle) {
    if ((this.containingTask(taskDeletedTitle)) === false) return;
    const deletedTask = this.getTask(taskDeletedTitle);
    this.deleteTaskProject(deletedTask);
    const taskIndex = this.getTaskIndex(taskDeletedTitle);
    this.tasks.splice(taskIndex, 1);
  }

  deleteTaskProject(taskDeletedProject) {
    if (this.containingProject(taskDeletedProject.projectConnected) === false) return;
    this.getProject(taskDeletedProject.projectConnected).deleteProjectTask(taskDeletedProject);
  }

  replaceTask(taskReplacement, taskNameReplaced) {
    if ((this.containingTask(taskReplacement.title) &&
      (this.getProject(taskNameReplaced) === taskReplacement.projectConnected))) return;
    const taskReplaced = this.tasks.find((task) => task.title === taskNameReplaced);
    const taskReplacedIndex = this.getTaskIndex(taskNameReplaced);

    this.replaceTaskProject(taskReplaced, taskReplacement);
    this.tasks.splice(taskReplacedIndex, 1, taskReplacement);
  }

  replaceTaskProject(taskReplaced, taskReplacement) {
    const projectReplaced = this.getProject(taskReplaced.projectConnected);
    const projectReplacement = this.getProject(taskReplacement.projectConnected);
    if (projectReplaced === projectReplacement) {
      const taskProjectIndex = projectReplaced.getProjectTaskIndex(taskReplaced.title);
      projectReplaced.getProjectTasks().splice(taskProjectIndex, 1, taskReplacement);
    } else {
      projectReplaced.deleteProjectTask(taskReplaced);
      projectReplacement.addProjectTask(taskReplacement);
    }
  }

  getTask(taskTitle) {
    return this.tasks.find((task) => task.title === taskTitle);
  }

  containingTask(taskTitle) {
    return this.tasks.some((task) => task.title === taskTitle);
  }

  getTaskIndex(taskTitle) {
    return this.tasks.findIndex((task) => task.title === taskTitle);
  }

  getAllTasks() {
    return this.tasks;
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }

  addProject(addedProject) {
    if (this.projects.find((project) => project.getProjectName() === addedProject.name)) return;
    this.projects.push(addedProject);
  }

  deleteProject(deletedProject) {
    const projectIndex = this.projects.findIndex((project) => project.getProjectName() === deletedProject);
    this.projects.splice(projectIndex, 1);
  }

  replaceProject(projectReplacement, projectNameReplaced) {
    if (this.containingProject(projectReplacement.title)) return;
    const projectReplaced = this.projects.find((project) => project.name === projectNameReplaced);
    const projectReplacedIndex = this.getProjectIndex(projectNameReplaced);

    this.projects.splice(projectReplacedIndex, 1, projectReplacement);
    this.updateProjectTasks(projectReplacement, projectReplaced);

  }

  updateProjectTasks(projectReplacement, projectReplaced) {
    console.log(projectReplaced);
    projectReplaced.getProjectTasks().forEach(task => {
      const index = this.getTaskIndex(task.title);
      console.log(index);
      task.setProjectConnected(projectReplacement.name);
      this.tasks.splice(index, 1, task);
    });
    this.getProject(projectReplacement.name).setProjectTasks(projectReplaced.getProjectTasks());
  }

  getProject(projectName) {
    return this.projects.find((project) => project.getProjectName() === projectName);
  }

  containingProject(projectName) {
    return this.projects.some((project) => project.getProjectName() === projectName);
  }

  getProjectIndex(projectName) {
    return this.projects.findIndex((project) => project.name === projectName);
  }

  getAllProjects() {
    return this.projects;
  }

  setProjects(projects) {
    this.projects = projects;
  }

  getTasksToday() {
    return this.tasks.filter((task) => {
      const taskDate = new Date(task.dueDate);
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(taskDate);
    })
  }

  getTasksWeek() {
    return this.tasks.filter((task) => {
      const today = new Date();
      const week = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(today), 1);
      const taskDate = new Date(task.dueDate);
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(taskDate, {start: today, end: week});
    })
  }

  getTasksMonth() {
    return this.tasks.filter((task) => {
      const today = new Date();
      const month = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(today), 1);
      const taskDate = new Date(task.dueDate);
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(taskDate, {start: today, end: month});
    })
  }

}

/***/ }),

/***/ "./src/modules/page.js":
/*!*****************************!*\
  !*** ./src/modules/page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface */ "./src/modules/interface.js");



function importIcons(r) {
  let icons = {};
  r.keys().map((item, index) => { icons[item.replace('../assets/icons/', '')] = r(item); });
  return icons;
}

const icons = importIcons(__webpack_require__("./src/assets/icons sync \\.(png%7Cjpe?g%7Csvg)$"));

const initializePage = (() => {

  const _createHeading = (text, num = 4) => {
    const heading = document.createElement(`h${num}`);
    heading.textContent = text;
    return heading;
  }

  const _createIcon = (source) => {
    const icon = document.createElement('img');
    icon.alt = `an icon of ${source}`;
    icon.src = icons[`./${source}`];
    return icon;
  }

  const _createBtn = (label, type = 'control') => {
    const button = document.createElement('button');
    button.setAttribute('id', label);
    const content = capitalize(label);
    button.textContent = content;
    button.classList.add(`${type}`);
    return button;
  }

  const _createContainer = (...elements) => {
    const container = document.createElement('div');
    container.classList.add('flex-center');
    container.append(...elements);
    return container;
  }

  const _initializeHeader = () => {
    const header = document.querySelector('header');
    header.setAttribute('id', 'header');

    const appTitle = _createHeading('Todo-List', '1');
    const primaryIcon = _createIcon('1.png');
    const logoContainer = _createContainer(primaryIcon, appTitle);

    /* const searchIcon = _createIcon('2.png');
    const input = document.createElement('input');
    setKeyValue(input, { type: 'search', id: 'search', name: 'search' });
    const searchContainer = _createContainer(searchIcon, input); */

    const local = _createBtn('local', 'control');
    local.addEventListener('click', () => {
      console.log(_storage__WEBPACK_IMPORTED_MODULE_0__["default"].showStorage());
    });
    const toggle = _createBtn('toggle', 'special');
    toggle.classList.add('navToggle');
    toggle.addEventListener('click', () => {
      document.querySelector('nav').classList.toggle('media');
    });
    const acctContainer = _createContainer(local, toggle);

    logoContainer.classList.add('gap');
    // searchContainer.classList.add('gap');
    acctContainer.classList.add('gap');
    header.append(logoContainer, acctContainer);
    return header;
  }

  const _initializeNav = () => {
    const nav = document.querySelector('section').querySelector('nav');
    nav.setAttribute('id', 'nav');

    const control = document.createElement('div');
    control.setAttribute('id', 'nav-control');
    const collapseControl = _createIcon('3.png');
    control.append(collapseControl);

    const filterProjects = document.createElement('div');
    filterProjects.setAttribute('id', 'projects-filter');
    const home = _createBtn('home', 'menu');
    const today = _createBtn('today', 'menu');
    const week = _createBtn('week', 'menu');
    const upcoming = _createBtn('upcoming', 'menu');

    filterProjects.append(home, today, week, upcoming);
    filterProjects.classList.add('flex-column');
    filterProjects.classList.add('gap');

    const userProjects = document.createElement('div');
    userProjects.setAttribute('id', 'projects');
    userProjects.classList.add('grid');
    userProjects.classList.add('gap');

    const userProjectsLabel = _createHeading('Projects', '2');
    const userProjectsContents = document.createElement('div');
    userProjectsContents.setAttribute('id', 'projects-user');
    userProjectsContents.classList.add('grid');
    userProjectsContents.classList.add('gap');
    const addProject = _createBtn('project-add', 'button');
    userProjects.append(userProjectsLabel, userProjectsContents, addProject);

    nav.append(control, filterProjects, userProjects);

    return nav;
  }

  const _initializeMain = () => {
    const main = document.querySelector('section').querySelector('main');
    main.setAttribute('id', 'main');
    const contentTitle = _createHeading('Home', 3);
    setKeyValue(contentTitle, { id: 'content-title' });
    const contentHeader = _createContainer(contentTitle);

    const sortEmpty = _createHeading('', 4);
    const sortOne = _createContainer(sortEmpty);
    sortOne.classList.add('sortHidden')
    const sortTitle = _createHeading('title', 4);
    const sortTwo = _createContainer(sortTitle);
    const sortDate = _createHeading('date', 4);
    const sortThree = _createContainer(sortDate);
    const contentAttributes = document.createElement('div');
    contentAttributes.append(sortOne, sortTwo, sortThree);
    setKeyValue(contentAttributes, { id: 'content-attributes' });
    contentAttributes.classList.add('grid');
    contentAttributes.classList.add('gap');

    const content = document.createElement('div');
    setKeyValue(content, { id: 'content' });
    content.classList.add('flex-column');
    content.classList.add('gap');
    const contentItems = document.createElement('div');
    setKeyValue(contentItems, { id: 'content-items' });
    contentItems.classList.add('flex-column');
    contentItems.classList.add('gap');
    const addTask = _createBtn('task-add', 'control');
    content.append(contentItems, addTask);

    main.append(contentHeader, contentAttributes, content);
    main.classList.add('gap');
    return main;
  }

  _initializeHeader();
  _initializeNav();
  _initializeMain();
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializePage);

function capitalize(string) { return string.charAt(0).toUpperCase() + string.slice(1); }
function setKeyValue(elem, attrs) { Object.entries(attrs).forEach(([key, value]) => elem.setAttribute(key, value)); }

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
  constructor(name, projectTasks = []) {
    this.name = name;
    this.projectTasks = projectTasks;
  }

  addProjectTask(addedTaskCopy) {
    if (this.projectTasks.find((task) => task.getTitle() === addedTaskCopy.title)) return;
    this.projectTasks.push(addedTaskCopy);
  }
  
  deleteProjectTask(deletedTaskCopy) {
    if ((this.projectTasks.some((task) => task.getTitle() === deletedTaskCopy.title) === false)) return;
    this.projectTasks = this.projectTasks.filter((task) => task.getTitle() !== deletedTaskCopy.title);
  }

  getProjectTask(taskName) {
    return this.projectTasks.find((task) => task.getTitle() === taskName);
  }

  containingProjectTask(taskName) {
    return this.projectTasks.some((task) => task.getTitle() === taskName);
  }

  getProjectTasksLength() {
    return this.projectTasks.length;
  }

  getProjectTaskIndex(taskTitle) {
    return this.projectTasks.findIndex((task) => task.title === taskTitle);
  }

  extractProjectTask(taskName) {
    const index = this.projectTasks.findIndex((task) => task.getName() === taskName);
    return this.projectTasks.splice(index, 1);
  }

  getProjectName() {
    return this.name;
  }

  setProjectName(name) {
    this.name = name;
  }

  getProjectTasks() {
    return this.projectTasks;
  }

  setProjectTasks(tasks) {
    this.projectTasks = tasks;
  }
}

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ "./src/modules/list.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");




class Storage {

  static saveList(data) {
    localStorage.setItem('todoList', JSON.stringify(data));
  }

  static getList() {
    const todoList = Object.assign(new _list__WEBPACK_IMPORTED_MODULE_1__["default"](), JSON.parse(localStorage.getItem('todoList')));

    todoList.setTasks(todoList.getAllTasks().map((task) => Object.assign(new _task__WEBPACK_IMPORTED_MODULE_2__["default"](), task)));

    todoList.setProjects(todoList.getAllProjects().map((project) => Object.assign(new _project__WEBPACK_IMPORTED_MODULE_0__["default"](), project)));

    todoList.getAllProjects().forEach((project) => project.setProjectTasks(
      project.getProjectTasks().map((task) => Object.assign(new _task__WEBPACK_IMPORTED_MODULE_2__["default"](), task))
    ));

    return todoList;
  }

  static showStorage() {
    return localStorage;
  }

  static clearStorage() {
    if(localStorage.length === 0) return;
    localStorage.clear();
  }

  static addTaskSave(task) {
    const todoList = Storage.getList();
    todoList.addTask(task);
    Storage.saveList(todoList);
  }

  static deleteTaskSave(taskTitle) {
    const todoList = Storage.getList();
    todoList.deleteTask(taskTitle);
    Storage.saveList(todoList);
  }

  static replaceTaskSave(newTask, oldTaskName) {
    const todoList = Storage.getList();
    todoList.replaceTask(newTask, oldTaskName);
    Storage.saveList(todoList);
  }

  static addProjectSave(project) {
    const todoList = Storage.getList();
    todoList.addProject(project);
    Storage.saveList(todoList);
  }

  static deleteProjectSave(projectName) {
    const todoList = Storage.getList();
      todoList.deleteProject(projectName);
    Storage.saveList(todoList);
  }

  static replaceProjectSave(newProject, oldProjectName) {
    const todoList = Storage.getList();
    todoList.replaceProject(newProject, oldProjectName);
    Storage.saveList(todoList);
  }

}

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor({ title, projectConnected = '', description = '', priority = 5, dueDate = 'No date'} = {}) {
    this.title = title;
    this.projectConnected = projectConnected;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  setProjectConnected(projectConnected) {
    this.projectConnected = projectConnected;
  }

  getProjectConnected() {
    return this.projectConnected;
  }

  setDescription(description) {
    this.description = description;
  }

  getDescription() {
    return this.description;
  }

  setPriority(priority) {
    this.priority = priority;
  }

  getPriority() {
    return this.priority;
  }

  setDate(dueDate) {
    this.dueDate = dueDate;
  }

  getDate() {
    return this.dueDate;
  }
}

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_todo_list_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/todo-list.css */ "./src/styles/todo-list.css");
/* harmony import */ var _modules_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/interface */ "./src/modules/interface.js");



document.addEventListener('DOMContentLoaded', _modules_interface__WEBPACK_IMPORTED_MODULE_1__["default"].loadAll);
})();

/******/ })()
;
//# sourceMappingURL=main.js.map