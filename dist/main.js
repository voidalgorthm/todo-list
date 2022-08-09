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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    font-size: 62.5%;\n\n    --todo-darkest: #14532d;\n    --todo-dark: #15803d;\n    --todo-light: #22c55e;\n    --todo-lighter: #4ade80;\n\n    --fades: #f5f5f5;\n    --fader: #e5e5e5;\n    /* --fade: #cbd5e1; */\n\n    --border: 1px solid black;\n    --border-radius: 2rem;\n}\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    text-align: center;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\np {\n    cursor: default;\n}\n\nh1 {\n    font-size: 3rem;\n}\n\nh2 {\n    font-size: 2.5rem;\n}\n\nh3 {\n    font-size: 2rem;\n}\n\nh4 {\n    font-size: 1.8rem;\n}\n\nh5 {\n    font-size: 1.6rem;\n}\n\n\n\np {\n    font-size: 1.8rem;\n}\n\nbody {\n    background-color: #333;\n    min-height: 100vh;\n    width: 100%;\n}\n\nheader {\n    background-color: var(--todo-darkest);\n    height: 10vh;\n    width: 100%;\n    padding: 0 2rem;\n}\n\nsection {\n    width: 100%;\n    display: grid;\n    flex: 1;\n    grid-template-columns: 1fr 3fr;\n}\n\nnav {\n    background-color: var(--todo-light);\n    width: 100%;\n}\n\nmain {\n    background-color: var(--fades);\n    width: 100%;\n    display: grid;\n    grid-template-rows: auto auto 1fr;\n    padding: 2rem 2rem 0 2rem;\n}\n\n.flex-center,\n.flex-column,\n.flex-row {\n    display: flex;\n    align-items: center;\n    width: 100%;\n}\n\n.flex-center {\n    justify-content: center;\n}\n\n.flex-column {\n    flex-direction: column;\n}\n\n.between {\n    justify-content: space-between;\n}\n\n.evenly {\n    justify-content: space-evenly;\n}\n\n.end {\n    justify-content: flex-end;\n}\n\n.gap {\n    gap: 1rem;\n}\n\n#content-attributes {\n    width: 100%;\n    height: 2rem;\n    display: grid;\n    align-items: center;\n    grid-template-columns: 3rem 3fr 1fr 3rem 3rem;\n}\n\n.taskPreview {\n    width: 100%;\n    /* height: 2rem; */\n}\n\n.taskDisplay {\n    width: 100%;\n    height: 2rem;\n    display: grid;\n    align-items: center;\n    grid-template-columns: 3rem 3fr 1fr 2rem 2rem;\n}\n\n.taskTitle {\n    height: inherit;\n    border: 0;\n}\n\n.editForm {\n    width: 100%;\n}\n\n.editTask {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: 3rem 1fr 3rem 3rem;\n    grid-template-areas: \n    \"priority title title title\"\n    \"description description description description\"\n    \"date date project project\"\n    \"accept accept cancel cancel\";\n    border: var(--border);\n    outline: var(--border);\n    border-radius: var(--border-radius);\n}\n.editTaskPriority,\n.editTaskTitle,\n.editTaskDescription,\n.editTaskDate,\n.editTaskProject,\n.accept,\n.cancel {\n    padding: .5rem;\n    border: none;\n    outline: none;\n    resize: none;\n}\n\n.editTaskPriority {\n    grid-area: priority;\n}\n\n.editTaskTitle {\n    grid-area: title;\n}\n\n.editTaskDescription {\n    grid-area: description;\n}\n\n.editTaskDate {\n    grid-area: date;\n}\n\n.editTaskProject {\n    grid-area: project;\n}\n\n.accept {\n    border-top: var(--border);\n    border-right: var(--border);\n    grid-area: accept;\n}\n\n.cancel {\n    border-top: var(--border);\n    grid-area: cancel;\n}", "",{"version":3,"sources":["webpack://./src/styles/todo-list.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;;IAEhB,uBAAuB;IACvB,oBAAoB;IACpB,qBAAqB;IACrB,uBAAuB;;IAEvB,gBAAgB;IAChB,gBAAgB;IAChB,qBAAqB;;IAErB,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;;;IAGI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;;;;;;IAMI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;;;AAIA;IACI,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;IACtB,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,qCAAqC;IACrC,YAAY;IACZ,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,OAAO;IACP,8BAA8B;AAClC;;AAEA;IACI,mCAAmC;IACnC,WAAW;AACf;;AAEA;IACI,8BAA8B;IAC9B,WAAW;IACX,aAAa;IACb,iCAAiC;IACjC,yBAAyB;AAC7B;;AAEA;;;IAGI,aAAa;IACb,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,6CAA6C;AACjD;;AAEA;IACI,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,6CAA6C;AACjD;;AAEA;IACI,eAAe;IACf,SAAS;AACb;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,sCAAsC;IACtC;;;;iCAI6B;IAC7B,qBAAqB;IACrB,sBAAsB;IACtB,mCAAmC;AACvC;AACA;;;;;;;IAOI,cAAc;IACd,YAAY;IACZ,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,2BAA2B;IAC3B,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;AACrB","sourcesContent":[":root {\n    font-size: 62.5%;\n\n    --todo-darkest: #14532d;\n    --todo-dark: #15803d;\n    --todo-light: #22c55e;\n    --todo-lighter: #4ade80;\n\n    --fades: #f5f5f5;\n    --fader: #e5e5e5;\n    /* --fade: #cbd5e1; */\n\n    --border: 1px solid black;\n    --border-radius: 2rem;\n}\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    text-align: center;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\np {\n    cursor: default;\n}\n\nh1 {\n    font-size: 3rem;\n}\n\nh2 {\n    font-size: 2.5rem;\n}\n\nh3 {\n    font-size: 2rem;\n}\n\nh4 {\n    font-size: 1.8rem;\n}\n\nh5 {\n    font-size: 1.6rem;\n}\n\n\n\np {\n    font-size: 1.8rem;\n}\n\nbody {\n    background-color: #333;\n    min-height: 100vh;\n    width: 100%;\n}\n\nheader {\n    background-color: var(--todo-darkest);\n    height: 10vh;\n    width: 100%;\n    padding: 0 2rem;\n}\n\nsection {\n    width: 100%;\n    display: grid;\n    flex: 1;\n    grid-template-columns: 1fr 3fr;\n}\n\nnav {\n    background-color: var(--todo-light);\n    width: 100%;\n}\n\nmain {\n    background-color: var(--fades);\n    width: 100%;\n    display: grid;\n    grid-template-rows: auto auto 1fr;\n    padding: 2rem 2rem 0 2rem;\n}\n\n.flex-center,\n.flex-column,\n.flex-row {\n    display: flex;\n    align-items: center;\n    width: 100%;\n}\n\n.flex-center {\n    justify-content: center;\n}\n\n.flex-column {\n    flex-direction: column;\n}\n\n.between {\n    justify-content: space-between;\n}\n\n.evenly {\n    justify-content: space-evenly;\n}\n\n.end {\n    justify-content: flex-end;\n}\n\n.gap {\n    gap: 1rem;\n}\n\n#content-attributes {\n    width: 100%;\n    height: 2rem;\n    display: grid;\n    align-items: center;\n    grid-template-columns: 3rem 3fr 1fr 3rem 3rem;\n}\n\n.taskPreview {\n    width: 100%;\n    /* height: 2rem; */\n}\n\n.taskDisplay {\n    width: 100%;\n    height: 2rem;\n    display: grid;\n    align-items: center;\n    grid-template-columns: 3rem 3fr 1fr 2rem 2rem;\n}\n\n.taskTitle {\n    height: inherit;\n    border: 0;\n}\n\n.editForm {\n    width: 100%;\n}\n\n.editTask {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: 3rem 1fr 3rem 3rem;\n    grid-template-areas: \n    \"priority title title title\"\n    \"description description description description\"\n    \"date date project project\"\n    \"accept accept cancel cancel\";\n    border: var(--border);\n    outline: var(--border);\n    border-radius: var(--border-radius);\n}\n.editTaskPriority,\n.editTaskTitle,\n.editTaskDescription,\n.editTaskDate,\n.editTaskProject,\n.accept,\n.cancel {\n    padding: .5rem;\n    border: none;\n    outline: none;\n    resize: none;\n}\n\n.editTaskPriority {\n    grid-area: priority;\n}\n\n.editTaskTitle {\n    grid-area: title;\n}\n\n.editTaskDescription {\n    grid-area: description;\n}\n\n.editTaskDate {\n    grid-area: date;\n}\n\n.editTaskProject {\n    grid-area: project;\n}\n\n.accept {\n    border-top: var(--border);\n    border-right: var(--border);\n    grid-area: accept;\n}\n\n.cancel {\n    border-top: var(--border);\n    grid-area: cancel;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");




class Forms {
  static createContainer({ title, projectConnected = '', description = '', priority = 5, dueDate = 'No date'} = {}) {
    const taskPreview = document.createElement('div');
    taskPreview.classList.add('taskPreview');

    taskPreview.append(this.createTask({ title, projectConnected, description, priority, dueDate}));
    // { title, projectConnected, description, priority, dueDate}
    return taskPreview;
  }

  static createTask({ title, projectConnected = '', description = '', priority = 5, dueDate = 'No date'} = {}) {
    const taskDisplay = document.createElement('div');
    taskDisplay.classList.add('taskDisplay');
    taskDisplay.classList.add('gap');
    
    const taskCheck = document.createElement('input');
    setKeyValue(taskCheck, { type: 'checkbox' });
    taskCheck.classList.add('taskCheck');
    const taskTitle = document.createElement('input');
    setKeyValue(taskTitle, { type: 'text', name: 'title' });
    taskTitle.classList.add('taskTitle');
    if (title) taskTitle.value = title;
    const taskDate = document.createElement('input');
    setKeyValue(taskDate, { type: 'date', name: 'date' });
    taskDate.classList.add('taskDate');
    if (dueDate) taskDate.value = dueDate;
    const taskEdit = document.createElement('img');
    taskEdit.classList.add('taskEdit');
    setKeyValue(taskEdit, { src: 'edit.svg', name: 'edit', class: '' });
    taskEdit.addEventListener('click', (event) => {
      const container = event.target.parentNode.parentNode;
      container.replaceChildren();
      container.append(this.editTask(title, projectConnected, description, priority, dueDate));
    })
    const taskDelete = document.createElement('img');
    setKeyValue(taskDelete, { src: 'delete.svg', name: 'delete', class: '' });
    taskDelete.classList.add('taskDelete');
    taskDelete.addEventListener('click', () => {
      _storage__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTask(taskTitle.value);
      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].loadAllTasks();
    })

    taskDisplay.append(taskCheck, taskTitle, taskDate, taskEdit, taskDelete);
    return taskDisplay;
  }

  static editTask({ title, projectConnected = '', description = '', priority = 5, dueDate = 'No date'} = {}) {
    const editForm = document.createElement("form");
    editForm.setAttribute('id', 'editForm');
    editForm.classList.add('editForm');

    const editTask = document.createElement('div');
    editTask.setAttribute('id', 'editTask');
    editTask.classList.add('editTask');
    // const topTaskContainer = document.createElement('div');
    // topTaskContainer.setAttribute('id', 'topTaskContainer');

    const editTaskTitle = document.createElement('textarea');
    setKeyValue(editTaskTitle, { id: 'editTaskTitle', name: 'title', placeholder: 'Title: Cook', maxlength: '35', required: 'true' });
    editTaskTitle.classList.add('editTaskTitle');
    if (title) editTaskTitle.value = title;

    const editTaskDescription = document.createElement('textarea');
    setKeyValue(editTaskDescription, { id: 'editTaskDescription', name: 'description', placeholder: 'Description: e.g. Cook for dinner' });
    editTaskDescription.classList.add('editTaskDescription');
    if (description) editTaskDescription.value = description;

    const editTaskDate = document.createElement('input');
    setKeyValue(editTaskDate, { id: 'editTaskDate', name: 'date', type: 'date' });
    editTaskDate.classList.add('editTaskDate');
    if (dueDate) editTaskDate.value = dueDate;

    const editTaskPriority = document.createElement('select');
    setKeyValue(editTaskPriority, { id: 'editTaskPriority', name: 'priority' });
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
    setKeyValue(editTaskProject, { id: 'editTaskProject', name: 'editTaskProject' });
    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].getList().getProjects().forEach(project => {
      const option = document.createElement('option');
      option.setAttribute('value', `${project.name}`);
      option.textContent = `${project.name}`;
      editTaskProject.append(option);
    });
    editTaskProject.classList.add('editTaskProject');
    if (editTaskProject) editTaskProject.value = projectConnected;

  /*   const topArea = document.createElement('div');
    topArea.append(editTaskPriority, editTaskTitle);
    topArea.classList.add('flex-row');
    topArea.classList.add('evenly');
    const midArea = document.createElement('div');
    midArea.append(editTaskDescription);
    const botArea = document.createElement('div');
    botArea.append(editTaskDate, editTaskProject);
    botArea.classList.add('flex-row');
    botArea.classList.add('evenly');

    topTaskContainer.append(topArea, midArea, botArea);
    topTaskContainer.classList.add('flex-column');
    topTaskContainer.classList.add('evenly');

    const botTaskContainer = document.createElement('div');
    botTaskContainer.setAttribute('id', 'botTaskContainer'); */

    const accept = document.createElement('button');
    accept.textContent = "Accept";
    accept.classList.add('accept');
    const cancel = document.createElement('button');
    cancel.textContent = "Cancel";
    cancel.classList.add('cancel');

    editTask.append(editTaskPriority, editTaskTitle, editTaskDescription, editTaskDate, editTaskProject, accept, cancel);

    /* botTaskContainer.append(accept, cancel);

    editForm.append(topTaskContainer, botTaskContainer); */
    editForm.append(editTask);

    return editForm;
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
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list */ "./src/modules/list.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms */ "./src/modules/forms.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");







class Interface {

  static loadAll() {
    _page__WEBPACK_IMPORTED_MODULE_0__["default"];
    Interface.test();
    Interface.loadAllTasks();
  }

  static loadAllTasks() {
    const contentItems = document.querySelector('#content-items');
    contentItems.replaceChildren();
    _storage__WEBPACK_IMPORTED_MODULE_5__["default"].getList().getAllTasks().forEach(task => {
      contentItems.append(_forms__WEBPACK_IMPORTED_MODULE_4__["default"].createContainer(task));
    })
    console.log(_storage__WEBPACK_IMPORTED_MODULE_5__["default"].getList());
  }

  static test() {
    const contentItems = document.querySelector('#content-items');
    const one = new _task__WEBPACK_IMPORTED_MODULE_1__["default"]({ title: 'One', description: 'one', dueDate: '2022-06-23', projectConnected: 'Today' });
    const two = new _task__WEBPACK_IMPORTED_MODULE_1__["default"]({ title: 'Two', description: 'two', priority: '1' });
    const three = new _task__WEBPACK_IMPORTED_MODULE_1__["default"]({ title: 'Three', projectConnected: 'Week' });
    // console.log(one);
    // console.log(two);
    // console.log(three);

    // Storage.addTask(one);
    // Storage.addTask(two);
    _storage__WEBPACK_IMPORTED_MODULE_5__["default"].addTask(three);
    _storage__WEBPACK_IMPORTED_MODULE_5__["default"].addTask(new _task__WEBPACK_IMPORTED_MODULE_1__["default"]({title: 'Four', projectConnected: 'Upcoming'}));
    // Storage.deleteTask('Three');
    // Storage.clearStorage();

    // Storage.addProject(new Project('GIT'));
    // Storage.deleteProject('ZeroOne');

    // contentItems.append(Forms.createTask());
    // contentItems.append(Forms.createContainer(Storage.getList().getTask('One')));
    // contentItems.append(Forms.createContainer(Storage.getList().getTask('Two')));
    // contentItems.append(Forms.createContainer(Storage.getList().getTask('Three')));
    // contentItems.append(Forms.createContainer(Storage.getList().getTask('Four')));
    // contentItems.append(Forms.editTask(Storage.getList().getTask('One')));
    // contentItems.append(Forms.editTask(Storage.getList().getTask('Two')));
    // contentItems.append(Forms.editTask(Storage.getList().getTask('Three')));
    // contentItems.append(Forms.editTask(Storage.getList().getTask('Four')));

    console.log(_storage__WEBPACK_IMPORTED_MODULE_5__["default"].getList());


  }

}

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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");


class TodoList {
  constructor() {
    this.tasks = [];
    this.projects = [];
    this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__["default"](''));
    this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__["default"]('Today'));
    this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__["default"]('Week'));
    this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__["default"]('Upcoming'));
  }

  addTask(addedTaskOrig) {
    if (this.tasks.find((task) => task.title === addedTaskOrig.title)) return;
    this.tasks.push(addedTaskOrig);
  }

  getTask(taskTitle) {
    return this.tasks.find((task) => task.title === taskTitle);
  }

  containingTask(taskTitle) {
    return this.tasks.some((task) => task.title === taskTitle);
  }

  deleteTask(deletedTaskOrig) {
      const taskIndex = this.tasks.findIndex((task) => task.title === deletedTaskOrig.title);
      this.tasks.splice(taskIndex, 1);
  }

  getAllTasks() {
    return this.tasks;
  }

  setProjects(projects) {
    this.projects = projects;
  }

  getProjects() {
    return this.projects;
  }

  getProject(projectName) {
    return this.projects.find((project) => project.getProjectName() === projectName);
  }

  containingProject(projectName) {
    return this.projects.some((project) => project.getProjectName() === projectName);
  }

  addProject(addedProject) {
    if (this.projects.find((project) => project.getProjectName() === addedProject.name)) return;
    this.projects.push(addedProject);
  }

  deleteProject(deletedProject) {
    const projectIndex = this.projects.findIndex((project) => project.getProjectName() === deletedProject);
    this.projects.splice(projectIndex, 1);
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

  const _createBtn = (label, type = 'btn') => {
    const btn = document.createElement('button');
    btn.setAttribute('id', label);
    const content = capitalize(label);
    btn.textContent = content;
    btn.classList.add(`${type}`);
    return btn;
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

    const searchIcon = _createIcon('2.png');
    const input = document.createElement('input');
    setKeyValue(input, { type: 'search', id: 'search' , name: 'search' });
    const searchContainer = _createContainer(searchIcon, input);

    const account = _createBtn('account', 'btn');
    const signout = _createBtn('signout', 'special');
    const acctContainer = _createContainer(account, signout);

    logoContainer.classList.add('gap');
    searchContainer.classList.add('gap');
    acctContainer.classList.add('gap');
    header.append(logoContainer, searchContainer, acctContainer);
    header.classList.add('flex-row');
    return header;
  }

  const _initializeNav = () => {
    const nav = document.querySelector('section').querySelector('nav');
    nav.setAttribute('id', 'nav');

    const control = document.createElement('div');
    control.setAttribute('id', 'nav-control');
    const collapseControl = _createIcon('3.png');
    control.append(collapseControl);

    const defaultProjects = document.createElement('div');
    defaultProjects.setAttribute('id', 'projects-default');
    const today = _createBtn('today', 'menu');
    today.classList.add('active');
    const tomorrow = _createBtn('tomorrow', 'menu');
    const upcoming = _createBtn('upcoming', 'menu');

    defaultProjects.append(today, tomorrow, upcoming);
    defaultProjects.classList.add('flex-column');

    const userProjectsTitle = _createHeading('Projects', '2');
    
    const userProjects = document.createElement('div');
    userProjects.setAttribute('id', 'projects-user');
    userProjects.textContent = 'GIT GUD';
    const addProject = _createBtn('project-add', 'btn');

    nav.append(control, defaultProjects, userProjectsTitle, userProjects, addProject);

    // nav.classList.add('flex-column');
    // nav.classList.add('evenly');
    return nav;
  }

  const _initializeMain = () => {
    const main = document.querySelector('section').querySelector('main');
    main.setAttribute('id', 'main');
    const contentTitle = _createHeading('TITLE', 3);
    setKeyValue(contentTitle, {id: 'content-title'});
    const contentHeader = _createContainer(contentTitle);
    const sortEmpty1 = _createHeading('', 4);
    const sortTitle = _createHeading('title', 4);
    const sortDate = _createHeading('date', 4);
    const sortEmpty2 = _createHeading('', 4);
    const sortEmpty3 = _createHeading('', 4);
    const contentAttributes = _createContainer(sortEmpty1, sortTitle, sortDate, sortEmpty2, sortEmpty3);
    setKeyValue(contentAttributes, {id: 'content-attributes'});
    const contentItems = document.createElement('div');
    setKeyValue(contentItems, {id: 'content-items'});
    contentItems.classList.add('flex-column');
    contentItems.classList.add('gap');
    main.append(contentHeader, contentAttributes, contentItems);
    main.classList.add('gap');
    return main;
  }

  document.body.classList.add('flex-column');
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
  constructor(name) {
    this.name = name;
    this.projectTasks = [];
  }

  setProjectName(name) {
    this.name = name;
  }

  getProjectName() {
    return this.name;
  }

  setProjectTasks(tasks) {
    this.projectTasks = tasks;
  }

  getProjectTasks() {
    return this.projectTasks;
  }

  getProjectTask(taskName) {
    return this.projectTasks.find((task) => task.getTitle() === taskName);
  }

  extractProjectTask(taskName) {
    const index = this.projectTasks.findIndex((task) => task.getName() === taskName);
    return this.projectTasks.splice(index, 1);
  }

  containingProjectTask(taskName) {
    return this.projectTasks.some((task) => task.getTitle() === taskName);
  }

  addProjectTask(addedTaskCopy) {
    if (this.projectTasks.find((task) => task.getTitle() === addedTaskCopy.title)) return;
    this.projectTasks.push(addedTaskCopy);
  }

  deleteProjectTask(deletedTaskCopy) {
    this.projectTasks = this.projectTasks.filter((task) => task.getTitle() !== deletedTaskCopy.title);
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

    todoList.setProjects(
      todoList.getProjects().map((project) => Object.assign(new _project__WEBPACK_IMPORTED_MODULE_0__["default"](), project))
    )

    todoList.getProjects().forEach((project) =>
      project.setProjectTasks(
        project.getProjectTasks().map((task) => Object.assign(new _task__WEBPACK_IMPORTED_MODULE_2__["default"](), task))
      )
    )

    return todoList;
  }

  static clearStorage() {
    localStorage.clear();
  }

  static addTask(task) {
    const todoList = Storage.getList();
    todoList.addTask(task);
    // if(todoList.containingProject(task.getProjectConnected()) === false) Storage.addProject(new Project(`${task.getProjectConnected()}`))
    todoList.getProject(task.getProjectConnected()).addProjectTask(task);
    Storage.saveList(todoList);
  }

  static deleteTask(taskTitle) {
    const todoList = Storage.getList();
    if (todoList.containingTask(taskTitle)) {
      const task = todoList.getTask(taskTitle);
      todoList.deleteTask(task);
      todoList.getProject(task.projectConnected).deleteProjectTask(task);
    }
    Storage.saveList(todoList);
  }

  static addProject(project) {
    const todoList = Storage.getList();
    todoList.addProject(project);
    Storage.saveList(todoList);
  }

  static deleteProject(projectName) {
    const todoList = Storage.getList();
    if (todoList.containingProject(projectName)) {
    todoList.deleteProject(projectName);
    }
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

  getDateFormatted() {
    const year = this.dueDate.split('/')[0];
    const month = this.dueDate.split('/')[1];
    const day = this.dueDate.split('/')[2];
    return `${month}/${day}/${year}`
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