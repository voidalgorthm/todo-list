/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/todo-list.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/todo-list.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    font-size: 62.5%;\n\n    --todo-darkest: #14532d;\n    --todo-dark: #15803d;\n    --todo-light: #22c55e;\n    --todo-lighter: #4ade80;\n\n    --fades: #f5f5f5;\n    --fader: #e5e5e5;\n    --color: #fff;\n    --invalid: #dc2626;\n\n    --font: 'Open Sans', sans-serif;\n    --border: 1px solid black;\n    --border-radius: 2rem;\n    --gap1x: 1rem;\n    --gap2x: 2rem;\n}\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    min-height: 100%;\n}\n\nbody {\n    min-height: 100vh;\n    /* width: 100%; */\n    font-family: var(--font);\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    background-color: var(--todo-darkest);\n    min-height: 10vh;\n    width: 100%;\n    display: flex;\n    padding: 0 2rem;\n    align-items: center;\n    justify-content: space-between;\n}\n\nfooter {\n    background-color: var(--todo-darkest);\n    min-height: 5vh;\n    width: 100%;\n    display: flex;\n    padding: 0 2rem;\n    align-items: center;\n    justify-content: space-between;\n}\n\nsection {\n    /* width: 100%; */\n    display: flex;\n    flex: 1;\n    min-height: calc(100% - 10vh - 5vh);\n}\n\nnav {\n    background-color: var(--todo-light);\n    width: 35%;\n    min-width: 25rem;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: var(--gap2x);\n    padding: 2rem;\n    transition: height 1s ease-in-out;\n}\n\nnav.media {\n    display: flex;\n}\n\n#nav-control {\n    display: none;\n}\n\nmain {\n    background-color: var(--fades);\n    width: 65%;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    padding: 1rem;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n    cursor: default;\n}\n\nh2 {\n    font-size: 2.5rem;\n}\n\nh3 {\n    font-size: 2rem;\n}\n\nh4 {\n    font-size: 1.8rem;\n}\n\nh5 {\n    font-size: 1.4 rem;\n}\n\n#icon,\n#title {\n    /* height: 4rem; */\n    font-size: 4rem;\n}\n\n#left-header,\n#right-header {\n    display: grid;\n    grid-template-columns: 5rem 1fr;\n}\n\nbutton,\ninput {\n    background-color: inherit;\n    color: inherit;\n    border: none;\n    font-family: inherit;\n    font-size: 1.4rem;\n    cursor: pointer;\n}\n\ninput,\ntextarea {\n    background-color: var(--color);\n}\n\ntextarea:required {\n    border: 2px solid var(--invalid);\n}\n\nbutton.menu,\nbutton.projects,\nbutton.control {\n    width: 100%;\n    height: 3rem;\n    display: grid;\n    align-items: center;\n    font-size: 2rem;\n    gap: var(--gap1x);\n    border-radius: var(--border-radius);\n    padding: .5rem 2rem;\n    text-align: left;\n    overflow: hidden;\n}\n\nbutton.menu {\n    grid-template-columns: 2rem 1fr;\n    justify-items: left;\n}\n\nbutton.projects {\n    grid-template-columns: 2rem 1fr 3rem 2rem;\n}\n\n\nbutton.control {\n    height: 4rem;\n    grid-template-columns: auto auto;\n    place-items: center;\n}\n\nbutton.special {\n    font-size: 3.5rem;\n}\n\ni {\n    width: 100%;\n}\n\n#add-project {\n    padding: .5rem 8rem;\n}\n\n#projects-filter {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: var(--gap1x);\n}\n\n#projects-user {\n    width: 100%;\n    display: grid;\n    align-items: center;\n    gap: var(--gap1x);\n}\n\nbutton.menu:hover,\nbutton.projects:hover,\nbutton.control:hover,\n.taskDisplay:hover {\n    background-color: var(--todo-dark);\n    color: var(--color);\n}\n\n.active {\n    background-color: var(--todo-darkest);\n    color: var(--color);\n}\n\n.rotate {\n    transform: rotate(180deg);\n    /* transition-delay: 0.2s; */\n}\n\n.projectNumbers {\n    background-color: var(--todo-lighter);\n    color: #000;\n    clip-path: circle(50% at 50% 50%);\n    text-align: center;\n}\n\n.delete {\n    opacity: 0;\n    transition: 0.2s linear;\n}\n\n.delete:hover {\n    opacity: 0.9;\n}\n\n.editProject {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: auto 1fr;\n    grid-template-areas:\n        \"name name\"\n        \"paccept pcancel\";\n    font-family: var(--font);\n    border: var(--border);\n    border-radius: var(--border-radius);\n}\n\n.editProjectName,\n.projectAccept,\n.projectCancel {\n    padding: 1rem;\n    border: none;\n    resize: none;\n}\n\n.editProjectName {\n    grid-area: name;\n    border-top-left-radius: var(--border-radius);\n    border-top-right-radius: var(--border-radius);\n}\n\n.projectAccept {\n    grid-area: paccept;\n    border: 0;\n    border-top: var(--border);\n    border-right: var(--border);\n    border-bottom-left-radius: var(--border-radius);\n}\n\n.projectCancel {\n    grid-area: pcancel;\n    border: 0;\n    border-top: var(--border);\n    border-bottom-right-radius: var(--border-radius);\n}\n\n.sort-attrib {\n    display: flex;\n    align-items: center;\n    justify-content: start;\n}\n\n.center {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#content-title-container {\n    height: 5rem;\n}\n\n.hidden {\n    visibility: hidden;\n}\n\n#content-attributes {\n    height: 3rem;\n    width: 100%;\n    display: grid;\n    align-items: center;\n    grid-template-columns: 2rem 2fr 1fr 2rem;\n    gap: var(--gap1x);\n    padding: 0 1rem;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: var(--gap1x);\n}\n\n#content-items {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#add-task {\n    padding: .5rem 25rem;\n}\n\ninput[type=\"checkbox\"] {\n    appearance: none;\n    background-color: var(--fades);\n    margin: 0;\n    font: inherit;\n    color: inherit;\n    width: 1.15em;\n    height: 1.15em;\n    border: 0.15em solid black;\n    border-radius: 0.15em;\n    display: grid;\n    place-content: center;\n}\n\ninput[type=\"checkbox\"]::before {\n    content: \"\";\n    width: 0.65em;\n    height: 0.65em;\n    transform: scale(0);\n    transition: 120ms transform ease-in-out;\n    box-shadow: inset 1em 1em var(--todo-lighter);\n}\n\ninput[type=\"checkbox\"]:checked::before {\n    transform: scale(1);\n    transform-origin: bottom left;\n    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\ninput[type=\"checkbox\"]:focus {\n    outline: max(2px, 0.15em) solid currentColor;\n    outline-offset: max(2px, 0.15em);\n}\n\n.strike {\n    text-decoration: line-through black;\n    opacity: 0.3;\n}\n\n.taskDisplay {\n    height: 3rem;\n    grid-template-columns: 2rem 2fr 1fr 2rem;\n    font-size: 1.6rem;\n    padding: 0 2rem 0 1rem;\n    border-radius: var(--border-radius);\n}\n\n.taskTitle,\n.taskDate {\n    background-color: inherit;\n    border: 0;\n}\n\n.taskDate {\n    width: 10rem;\n}\n\n.editTask {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: 3rem 1fr 3rem 3rem;\n    grid-template-areas:\n        \"priority title title title\"\n        \"description description description description\"\n        \"date date project project\"\n        \"taccept taccept tcancel tcancel\";\n    border: var(--border);\n    border-radius: var(--border-radius);\n}\n\n.editTaskPriority,\n.editTaskTitle,\n.editTaskDescription,\n.editTaskDate,\n.editTaskProject,\n.taskAccept,\n.taskCancel {\n    padding: .5rem 1rem;\n    border: none;\n    resize: none;\n}\n\n.editTaskPriority {\n    grid-area: priority;\n    border-top-left-radius: var(--border-radius);\n    border-right: var(--border);\n    border-bottom: var(--border);\n}\n\n.editTaskTitle {\n    grid-area: title;\n    border-top-right-radius: var(--border-radius);\n    border-bottom: var(--border);\n    font-size: 1.5rem;\n    overflow: hidden;\n}\n\n.editTaskDescription {\n    grid-area: description;\n}\n\n.editTaskDate {\n    grid-area: date;\n    border-top: var(--border);\n    border-right: var(--border);\n}\n\n.editTaskProject {\n    grid-area: project;\n    border-top: var(--border);\n}\n\n.taskAccept {\n    grid-area: taccept;\n    border: 0;\n    border-top: var(--border);\n    border-right: var(--border);\n    border-bottom-left-radius: var(--border-radius);\n}\n\n.taskCancel {\n    grid-area: tcancel;\n    border: 0;\n    border-top: var(--border);\n    border-bottom-right-radius: var(--border-radius);\n}\n\n.projectAccept,\n.taskAccept {\n    background-color: var(--todo-light);\n}\n\n.projectCancel,\n.taskCancel {\n    background-color: var(--invalid);\n}\n\n\n@media (max-width: 650px) {\n    section {\n        flex-direction: column;\n    }\n\n    nav {\n        width: 100%;\n        display: none;\n    }\n\n    main {\n        width: 100%;\n    }\n\n    #nav-control {\n        display: flex;\n    }\n\n    #add-task {\n        padding: .5rem 10rem;\n    }\n\n    .delete {\n        opacity: 1;\n    }\n\n}\n\n.flex-center,\n.flex-column,\n.flex-row {\n    display: flex;\n    align-items: center;\n}\n\n.flex-center {\n    justify-content: center;\n}\n\n.flex-column {\n    flex-direction: column;\n}\n\n.between {\n    justify-content: space-between;\n}\n\n.evenly {\n    justify-content: space-evenly;\n}\n\n.end {\n    justify-content: flex-end;\n}\n\n.grid {\n    display: grid;\n    align-items: center;\n    width: 100%;\n}\n\n.gap {\n    gap: var(--gap1x);\n}\n\n.gap2 {\n    gap: var(--gap2x);\n}\n\n.w-100 {\n    width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/styles/todo-list.css"],"names":[],"mappings":"AAEA;IACI,gBAAgB;;IAEhB,uBAAuB;IACvB,oBAAoB;IACpB,qBAAqB;IACrB,uBAAuB;;IAEvB,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;IACb,kBAAkB;;IAElB,+BAA+B;IAC/B,yBAAyB;IACzB,qBAAqB;IACrB,aAAa;IACb,aAAa;AACjB;;AAEA;;;IAGI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,wBAAwB;IACxB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,qCAAqC;IACrC,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,eAAe;IACf,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,qCAAqC;IACrC,eAAe;IACf,WAAW;IACX,aAAa;IACb,eAAe;IACf,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,OAAO;IACP,mCAAmC;AACvC;;AAEA;IACI,mCAAmC;IACnC,UAAU;IACV,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,iBAAiB;IACjB,aAAa;IACb,iCAAiC;AACrC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,8BAA8B;IAC9B,UAAU;IACV,aAAa;IACb,OAAO;IACP,sBAAsB;IACtB,aAAa;AACjB;;AAEA;;;;;IAKI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;IAEI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;;IAEI,aAAa;IACb,+BAA+B;AACnC;;AAEA;;IAEI,yBAAyB;IACzB,cAAc;IACd,YAAY;IACZ,oBAAoB;IACpB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;;IAEI,8BAA8B;AAClC;;AAEA;IACI,gCAAgC;AACpC;;AAEA;;;IAGI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,mCAAmC;IACnC,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,+BAA+B;IAC/B,mBAAmB;AACvB;;AAEA;IACI,yCAAyC;AAC7C;;;AAGA;IACI,YAAY;IACZ,gCAAgC;IAChC,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;;;;IAII,kCAAkC;IAClC,mBAAmB;AACvB;;AAEA;IACI,qCAAqC;IACrC,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,4BAA4B;AAChC;;AAEA;IACI,qCAAqC;IACrC,WAAW;IACX,iCAAiC;IACjC,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,4BAA4B;IAC5B;;yBAEqB;IACrB,wBAAwB;IACxB,qBAAqB;IACrB,mCAAmC;AACvC;;AAEA;;;IAGI,aAAa;IACb,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,4CAA4C;IAC5C,6CAA6C;AACjD;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,yBAAyB;IACzB,2BAA2B;IAC3B,+CAA+C;AACnD;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,yBAAyB;IACzB,gDAAgD;AACpD;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,wCAAwC;IACxC,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,8BAA8B;IAC9B,SAAS;IACT,aAAa;IACb,cAAc;IACd,aAAa;IACb,cAAc;IACd,0BAA0B;IAC1B,qBAAqB;IACrB,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,cAAc;IACd,mBAAmB;IACnB,uCAAuC;IACvC,6CAA6C;AACjD;;AAEA;IACI,mBAAmB;IACnB,6BAA6B;IAC7B,uEAAuE;AAC3E;;AAEA;IACI,4CAA4C;IAC5C,gCAAgC;AACpC;;AAEA;IACI,mCAAmC;IACnC,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,wCAAwC;IACxC,iBAAiB;IACjB,sBAAsB;IACtB,mCAAmC;AACvC;;AAEA;;IAEI,yBAAyB;IACzB,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,sCAAsC;IACtC;;;;yCAIqC;IACrC,qBAAqB;IACrB,mCAAmC;AACvC;;AAEA;;;;;;;IAOI,mBAAmB;IACnB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,4CAA4C;IAC5C,2BAA2B;IAC3B,4BAA4B;AAChC;;AAEA;IACI,gBAAgB;IAChB,6CAA6C;IAC7C,4BAA4B;IAC5B,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,yBAAyB;IACzB,2BAA2B;IAC3B,+CAA+C;AACnD;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,yBAAyB;IACzB,gDAAgD;AACpD;;AAEA;;IAEI,mCAAmC;AACvC;;AAEA;;IAEI,gCAAgC;AACpC;;;AAGA;IACI;QACI,sBAAsB;IAC1B;;IAEA;QACI,WAAW;QACX,aAAa;IACjB;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,oBAAoB;IACxB;;IAEA;QACI,UAAU;IACd;;AAEJ;;AAEA;;;IAGI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;AACf","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');\n\n:root {\n    font-size: 62.5%;\n\n    --todo-darkest: #14532d;\n    --todo-dark: #15803d;\n    --todo-light: #22c55e;\n    --todo-lighter: #4ade80;\n\n    --fades: #f5f5f5;\n    --fader: #e5e5e5;\n    --color: #fff;\n    --invalid: #dc2626;\n\n    --font: 'Open Sans', sans-serif;\n    --border: 1px solid black;\n    --border-radius: 2rem;\n    --gap1x: 1rem;\n    --gap2x: 2rem;\n}\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    min-height: 100%;\n}\n\nbody {\n    min-height: 100vh;\n    /* width: 100%; */\n    font-family: var(--font);\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    background-color: var(--todo-darkest);\n    min-height: 10vh;\n    width: 100%;\n    display: flex;\n    padding: 0 2rem;\n    align-items: center;\n    justify-content: space-between;\n}\n\nfooter {\n    background-color: var(--todo-darkest);\n    min-height: 5vh;\n    width: 100%;\n    display: flex;\n    padding: 0 2rem;\n    align-items: center;\n    justify-content: space-between;\n}\n\nsection {\n    /* width: 100%; */\n    display: flex;\n    flex: 1;\n    min-height: calc(100% - 10vh - 5vh);\n}\n\nnav {\n    background-color: var(--todo-light);\n    width: 35%;\n    min-width: 25rem;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: var(--gap2x);\n    padding: 2rem;\n    transition: height 1s ease-in-out;\n}\n\nnav.media {\n    display: flex;\n}\n\n#nav-control {\n    display: none;\n}\n\nmain {\n    background-color: var(--fades);\n    width: 65%;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    padding: 1rem;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n    cursor: default;\n}\n\nh2 {\n    font-size: 2.5rem;\n}\n\nh3 {\n    font-size: 2rem;\n}\n\nh4 {\n    font-size: 1.8rem;\n}\n\nh5 {\n    font-size: 1.4 rem;\n}\n\n#icon,\n#title {\n    /* height: 4rem; */\n    font-size: 4rem;\n}\n\n#left-header,\n#right-header {\n    display: grid;\n    grid-template-columns: 5rem 1fr;\n}\n\nbutton,\ninput {\n    background-color: inherit;\n    color: inherit;\n    border: none;\n    font-family: inherit;\n    font-size: 1.4rem;\n    cursor: pointer;\n}\n\ninput,\ntextarea {\n    background-color: var(--color);\n}\n\ntextarea:required {\n    border: 2px solid var(--invalid);\n}\n\nbutton.menu,\nbutton.projects,\nbutton.control {\n    width: 100%;\n    height: 3rem;\n    display: grid;\n    align-items: center;\n    font-size: 2rem;\n    gap: var(--gap1x);\n    border-radius: var(--border-radius);\n    padding: .5rem 2rem;\n    text-align: left;\n    overflow: hidden;\n}\n\nbutton.menu {\n    grid-template-columns: 2rem 1fr;\n    justify-items: left;\n}\n\nbutton.projects {\n    grid-template-columns: 2rem 1fr 3rem 2rem;\n}\n\n\nbutton.control {\n    height: 4rem;\n    grid-template-columns: auto auto;\n    place-items: center;\n}\n\nbutton.special {\n    font-size: 3.5rem;\n}\n\ni {\n    width: 100%;\n}\n\n#add-project {\n    padding: .5rem 8rem;\n}\n\n#projects-filter {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: var(--gap1x);\n}\n\n#projects-user {\n    width: 100%;\n    display: grid;\n    align-items: center;\n    gap: var(--gap1x);\n}\n\nbutton.menu:hover,\nbutton.projects:hover,\nbutton.control:hover,\n.taskDisplay:hover {\n    background-color: var(--todo-dark);\n    color: var(--color);\n}\n\n.active {\n    background-color: var(--todo-darkest);\n    color: var(--color);\n}\n\n.rotate {\n    transform: rotate(180deg);\n    /* transition-delay: 0.2s; */\n}\n\n.projectNumbers {\n    background-color: var(--todo-lighter);\n    color: #000;\n    clip-path: circle(50% at 50% 50%);\n    text-align: center;\n}\n\n.delete {\n    opacity: 0;\n    transition: 0.2s linear;\n}\n\n.delete:hover {\n    opacity: 0.9;\n}\n\n.editProject {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: auto 1fr;\n    grid-template-areas:\n        \"name name\"\n        \"paccept pcancel\";\n    font-family: var(--font);\n    border: var(--border);\n    border-radius: var(--border-radius);\n}\n\n.editProjectName,\n.projectAccept,\n.projectCancel {\n    padding: 1rem;\n    border: none;\n    resize: none;\n}\n\n.editProjectName {\n    grid-area: name;\n    border-top-left-radius: var(--border-radius);\n    border-top-right-radius: var(--border-radius);\n}\n\n.projectAccept {\n    grid-area: paccept;\n    border: 0;\n    border-top: var(--border);\n    border-right: var(--border);\n    border-bottom-left-radius: var(--border-radius);\n}\n\n.projectCancel {\n    grid-area: pcancel;\n    border: 0;\n    border-top: var(--border);\n    border-bottom-right-radius: var(--border-radius);\n}\n\n.sort-attrib {\n    display: flex;\n    align-items: center;\n    justify-content: start;\n}\n\n.center {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#content-title-container {\n    height: 5rem;\n}\n\n.hidden {\n    visibility: hidden;\n}\n\n#content-attributes {\n    height: 3rem;\n    width: 100%;\n    display: grid;\n    align-items: center;\n    grid-template-columns: 2rem 2fr 1fr 2rem;\n    gap: var(--gap1x);\n    padding: 0 1rem;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: var(--gap1x);\n}\n\n#content-items {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#add-task {\n    padding: .5rem 25rem;\n}\n\ninput[type=\"checkbox\"] {\n    appearance: none;\n    background-color: var(--fades);\n    margin: 0;\n    font: inherit;\n    color: inherit;\n    width: 1.15em;\n    height: 1.15em;\n    border: 0.15em solid black;\n    border-radius: 0.15em;\n    display: grid;\n    place-content: center;\n}\n\ninput[type=\"checkbox\"]::before {\n    content: \"\";\n    width: 0.65em;\n    height: 0.65em;\n    transform: scale(0);\n    transition: 120ms transform ease-in-out;\n    box-shadow: inset 1em 1em var(--todo-lighter);\n}\n\ninput[type=\"checkbox\"]:checked::before {\n    transform: scale(1);\n    transform-origin: bottom left;\n    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\ninput[type=\"checkbox\"]:focus {\n    outline: max(2px, 0.15em) solid currentColor;\n    outline-offset: max(2px, 0.15em);\n}\n\n.strike {\n    text-decoration: line-through black;\n    opacity: 0.3;\n}\n\n.taskDisplay {\n    height: 3rem;\n    grid-template-columns: 2rem 2fr 1fr 2rem;\n    font-size: 1.6rem;\n    padding: 0 2rem 0 1rem;\n    border-radius: var(--border-radius);\n}\n\n.taskTitle,\n.taskDate {\n    background-color: inherit;\n    border: 0;\n}\n\n.taskDate {\n    width: 10rem;\n}\n\n.editTask {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: 3rem 1fr 3rem 3rem;\n    grid-template-areas:\n        \"priority title title title\"\n        \"description description description description\"\n        \"date date project project\"\n        \"taccept taccept tcancel tcancel\";\n    border: var(--border);\n    border-radius: var(--border-radius);\n}\n\n.editTaskPriority,\n.editTaskTitle,\n.editTaskDescription,\n.editTaskDate,\n.editTaskProject,\n.taskAccept,\n.taskCancel {\n    padding: .5rem 1rem;\n    border: none;\n    resize: none;\n}\n\n.editTaskPriority {\n    grid-area: priority;\n    border-top-left-radius: var(--border-radius);\n    border-right: var(--border);\n    border-bottom: var(--border);\n}\n\n.editTaskTitle {\n    grid-area: title;\n    border-top-right-radius: var(--border-radius);\n    border-bottom: var(--border);\n    font-size: 1.5rem;\n    overflow: hidden;\n}\n\n.editTaskDescription {\n    grid-area: description;\n}\n\n.editTaskDate {\n    grid-area: date;\n    border-top: var(--border);\n    border-right: var(--border);\n}\n\n.editTaskProject {\n    grid-area: project;\n    border-top: var(--border);\n}\n\n.taskAccept {\n    grid-area: taccept;\n    border: 0;\n    border-top: var(--border);\n    border-right: var(--border);\n    border-bottom-left-radius: var(--border-radius);\n}\n\n.taskCancel {\n    grid-area: tcancel;\n    border: 0;\n    border-top: var(--border);\n    border-bottom-right-radius: var(--border-radius);\n}\n\n.projectAccept,\n.taskAccept {\n    background-color: var(--todo-light);\n}\n\n.projectCancel,\n.taskCancel {\n    background-color: var(--invalid);\n}\n\n\n@media (max-width: 650px) {\n    section {\n        flex-direction: column;\n    }\n\n    nav {\n        width: 100%;\n        display: none;\n    }\n\n    main {\n        width: 100%;\n    }\n\n    #nav-control {\n        display: flex;\n    }\n\n    #add-task {\n        padding: .5rem 10rem;\n    }\n\n    .delete {\n        opacity: 1;\n    }\n\n}\n\n.flex-center,\n.flex-column,\n.flex-row {\n    display: flex;\n    align-items: center;\n}\n\n.flex-center {\n    justify-content: center;\n}\n\n.flex-column {\n    flex-direction: column;\n}\n\n.between {\n    justify-content: space-between;\n}\n\n.evenly {\n    justify-content: space-evenly;\n}\n\n.end {\n    justify-content: flex-end;\n}\n\n.grid {\n    display: grid;\n    align-items: center;\n    width: 100%;\n}\n\n.gap {\n    gap: var(--gap1x);\n}\n\n.gap2 {\n    gap: var(--gap2x);\n}\n\n.w-100 {\n    width: 100%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./src/modules/forms.js":
/*!******************************!*\
  !*** ./src/modules/forms.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Forms)
/* harmony export */ });
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ "./src/modules/interface.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation */ "./src/modules/validation.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");






class Forms {
  static createTaskContainer(task) {
    const taskPreview = document.createElement('div');
    taskPreview.classList.add('taskPreview');
    taskPreview.classList.add('w-100');

    taskPreview.append(this.createTask(task));
    return taskPreview;
  }

  static createTask({ title, projectConnected, description, priority, dueDate } = {}) {
    const taskDisplay = document.createElement('div');
    taskDisplay.classList.add('taskDisplay');
    taskDisplay.classList.add('grid');
    taskDisplay.classList.add('w-100');
    taskDisplay.classList.add('gap');

    const taskCheck = document.createElement('input');
    setKeyValue(taskCheck, { type: 'checkbox' });
    taskCheck.classList.add('taskCheck');
    taskCheck.addEventListener('change', (event) => {
      event.stopPropagation();
      event.preventDefault();
      const container = event.target.parentNode;
      const striker = container.querySelectorAll('input.taskTitle, input.taskDate');
      striker.forEach(strike => {
        event.target.checked ? strike.classList.add('strike') : strike.classList.remove('strike');
      });
    });
    const taskTitle = document.createElement('input');
    setKeyValue(taskTitle, { type: 'text', name: 'title', readonly: "readonly" });
    taskTitle.classList.add('taskTitle');
    if (title) taskTitle.value = title;
    const taskDate = document.createElement('input');
    setKeyValue(taskDate, { type: 'date', name: 'date', readonly: "readonly" });
    taskDate.classList.add('taskDate');
    if (dueDate) taskDate.value = dueDate;

    function taskEdit(event) {
      if (event.target.classList.contains('taskCheck')) return;
      const container = event.target.parentNode.parentNode;
      const content = event.target.parentNode.parentNode.parentNode;
      if (container.querySelector('input.taskCheck').checked) return;
      if (content.querySelector('form')) return;
      container.replaceChildren();
      container.append(Forms.editTask({ title, projectConnected, description, priority, dueDate }, true));

      const cont = document.querySelector('form');
      (event.target.classList.contains('taskTitle')) ? cont.querySelector('.editTaskTitle').focus() :
        (event.target.classList.contains('taskDate')) ? cont.querySelector('.editTaskDate').focus() :
          cont.querySelector('.editTaskPriority').focus();
    }

    const taskDelete = document.createElement('i');
    taskDelete.setAttribute('name', 'taskDelete');
    taskDelete.classList.add('taskDelete');
    taskDelete.classList.add('delete', 'fas', 'fa-calendar-xmark');
    taskDelete.addEventListener('click', (event) => {
      event.stopPropagation();
      const confirmation = _validation__WEBPACK_IMPORTED_MODULE_1__["default"].confirmDeleteTask();
      if (confirmation) {
        const active = document.querySelector('.active');
        _storage__WEBPACK_IMPORTED_MODULE_3__["default"].deleteTaskSave(taskTitle.value);
        _interface__WEBPACK_IMPORTED_MODULE_0__["default"].loadAllProjects();
        _interface__WEBPACK_IMPORTED_MODULE_0__["default"].setActiveButton(active.id);
        _interface__WEBPACK_IMPORTED_MODULE_0__["default"].addEventButtons();
        _interface__WEBPACK_IMPORTED_MODULE_0__["default"].loadAllTasks();
      }
    });

    taskDisplay.append(taskCheck, taskTitle, taskDate, taskDelete);

    taskDisplay.addEventListener('click', taskEdit);

    return taskDisplay;
  }

  static editTask({ title, projectConnected = '', description = '', priority = 5, dueDate = 'No date' } = {}, editing = false) {
    const taskForm = document.createElement("form");
    setKeyValue(taskForm, { method: 'post', id: 'taskForm' });
    taskForm.classList.add('w-100');

    const editTask = document.createElement('div');
    editTask.setAttribute('id', 'editTask');
    editTask.classList.add('editTask');

    const editTaskTitle = document.createElement('textarea');
    setKeyValue(editTaskTitle, { name: 'title', placeholder: 'Title: Cook'});
    editTaskTitle.classList.add('editTaskTitle');
    if (title) editTaskTitle.value = title;
    const taskReplaced = title;

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
    _storage__WEBPACK_IMPORTED_MODULE_3__["default"].getList().getAllProjects().forEach(project => {
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

      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].loadAllProjects();
      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].setActiveButton(active.id);
      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].addEventButtons();
      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].loadAllTasks();
    });

    editTask.append(editTaskPriority, editTaskTitle, editTaskDescription, editTaskDate, editTaskProject, taskAccept, taskCancel);
    taskForm.append(editTask);

    taskForm.addEventListener('submit', (event) => {
      event.preventDefault();

      let validTitle = _validation__WEBPACK_IMPORTED_MODULE_1__["default"].checkEditTitle(), validDate = _validation__WEBPACK_IMPORTED_MODULE_1__["default"].checkEditDate();
      let validForm = validTitle && validDate;

      if (validForm) {
        const active = document.querySelector('.active');
        const data = new FormData(event.target);
        const newTask = new _task__WEBPACK_IMPORTED_MODULE_4__["default"](Object.fromEntries(data));

        (editing) ? _storage__WEBPACK_IMPORTED_MODULE_3__["default"].replaceTaskSave(newTask, taskReplaced) : _storage__WEBPACK_IMPORTED_MODULE_3__["default"].addTaskSave(newTask);

        _interface__WEBPACK_IMPORTED_MODULE_0__["default"].loadAllProjects();
        _interface__WEBPACK_IMPORTED_MODULE_0__["default"].setActiveButton(active.id);
        _interface__WEBPACK_IMPORTED_MODULE_0__["default"].addEventButtons();
        _interface__WEBPACK_IMPORTED_MODULE_0__["default"].loadAllTasks();
      }
    });

    _validation__WEBPACK_IMPORTED_MODULE_1__["default"].validateFromInputs(taskForm);
    return taskForm;
  }

  static createProjectContainer(project) {
    const projectPreview = document.createElement('div');
    projectPreview.classList.add('projectPreview');

    projectPreview.append(this.createProjects(project));
    return projectPreview;
  }

  static createProjects(project) {
    const projectDisplay = Forms.createProjectsButton(project, project.projectTasks.length, 'projects', ['fas', 'fa-folder-closed']);

    projectDisplay.addEventListener('dblclick', (event) => {
      const projects = event.target.parentNode.parentNode.parentNode;
      if (projects.querySelector('form')) return;
      const container = event.target.parentNode.parentNode;
      container.replaceChildren();
      container.append(this.editProject(project, true));
    })
    return projectDisplay;
  }

  static createProjectsButton(id, number, type = 'projects', ...classes) {
    const button = document.createElement('button');
    setKeyValue(button, { id: `project-${id.name}`, name: `project-${id.name}` })
    button.classList.add(`${type}`);
    const icon = document.createElement('i');
    classes.forEach(cls => {
      Object.values(cls).forEach(value => icon.classList.add(value));
    });
    const content = capitalize(id.name);
    const title = document.createElement('h3');
    title.textContent = content;
    const lbl = document.createElement('label');
    setKeyValue(lbl, { id: `label-${id.name}`, for: `project-${id.name}` });
    lbl.textContent = number;
    lbl.classList.add('projectNumbers');
    const del = document.createElement('i');
    del.classList.add('delete', 'fas', 'fa-folder-minus');
    del.addEventListener('click', (event) => {
      event.stopPropagation();
      const confirmation = _validation__WEBPACK_IMPORTED_MODULE_1__["default"].confirmDeleteProject();
      if (confirmation) {
        const active = document.querySelector('.preactive');
        const target = event.target.parentNode;
        _storage__WEBPACK_IMPORTED_MODULE_3__["default"].deleteProjectSave(target.id);
        _interface__WEBPACK_IMPORTED_MODULE_0__["default"].loadAllProjects();
        _interface__WEBPACK_IMPORTED_MODULE_0__["default"].setActiveButton(active.id);
        _interface__WEBPACK_IMPORTED_MODULE_0__["default"].loadTitle(active.id);
        _interface__WEBPACK_IMPORTED_MODULE_0__["default"].loadAllTasks();
        _interface__WEBPACK_IMPORTED_MODULE_0__["default"].loadAllProjects();
        _interface__WEBPACK_IMPORTED_MODULE_0__["default"].addEventButtons();
      }
    });
    button.append(icon, title, lbl, del);
    return button;
  }

  static editProject({ name = '', projectTasks = [] } = {}, editing = false) {
    const projectForm = document.createElement("form");
    setKeyValue(projectForm, { method: 'post', id: 'projectForm' });
    projectForm.classList.add('w-100');

    const editProject = document.createElement('div');
    editProject.setAttribute('id', 'editProject');
    editProject.classList.add('editProject');

    const editProjectName = document.createElement('input');
    setKeyValue(editProjectName, { name: 'name', type: 'text', placeholder: 'Project name: Chores', maxlength: '15', required: 'true' });
    editProjectName.classList.add('w-100');
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
      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].loadAllProjects();
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
      const newProject = new _project__WEBPACK_IMPORTED_MODULE_2__["default"](newName, projectTasks);

      (editing) ? _storage__WEBPACK_IMPORTED_MODULE_3__["default"].replaceProjectSave(newProject, projectNameReplaced) : _storage__WEBPACK_IMPORTED_MODULE_3__["default"].addProjectSave(newProject);

      const identification = `project-${editProjectName.value}`;
      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].loadAllProjects();
      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].setActiveButton(identification);
      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].addEventButtons();
      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].loadTitle(editProjectName.value);
      _interface__WEBPACK_IMPORTED_MODULE_0__["default"].loadAllTasks();
    });

    return projectForm;
  }

}


function capitalize(string) { return string.charAt(0).toUpperCase() + string.slice(1); }
function setKeyValue(elem, attrs) { Object.entries(attrs).forEach(([key, value]) => elem.setAttribute(key, value)); }

/***/ }),

/***/ "./src/modules/interface.js":
/*!**********************************!*\
  !*** ./src/modules/interface.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    // Interface.test();
    Interface.loadAllProjects();
    Interface.setActiveButton('home');
    Interface.loadAllTasks();
    Interface.addEventButtons();
    Interface.addEventOtherButtons();
  }

  static setActiveButton(id) {
    const sideButtons = document.querySelectorAll('.menu, .projects');
    sideButtons.forEach(button => {
      button.classList.contains('active')
        ? button.classList.add('preactive')
        : button.classList.remove('preactive');

      button.id === id
        ? button.classList.add('active')
        : button.classList.remove('active');
    });
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

  static loadTitle(label) {
    const title = document.querySelector('#content-title');
    const capitalized = capitalize(label);
    title.textContent = capitalized;
  }

  static test() {
    const task = new _task__WEBPACK_IMPORTED_MODULE_1__["default"]({title: `tasker`});
    console.log(task);
    const taskete = {...task, title: `taskete`};
    console.log(taskete);
    console.log(task);
  }

  static loadAllProjects() {
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
    const userProjects = document.querySelector('#projects-user');

    const addTask = document.querySelector('#add-task');
    addTask.addEventListener('click', () => {
      const blankTask = new _task__WEBPACK_IMPORTED_MODULE_1__["default"]();
      contentItems.append(_forms__WEBPACK_IMPORTED_MODULE_3__["default"].editTask(blankTask));
      const form = document.querySelector('form');
      form.querySelector('.editTaskPriority').focus();
    });

    const addProject = document.querySelector('#add-project');
    addProject.addEventListener('click', () => {
      const blankProject = new _project__WEBPACK_IMPORTED_MODULE_2__["default"]();
      userProjects.append(_forms__WEBPACK_IMPORTED_MODULE_3__["default"].editProject(blankProject));
    });
  }
}

function capitalize(string) { return string.charAt(0).toUpperCase() + string.slice(1); }
// function setKeyValue(elem, attrs) { Object.entries(attrs).forEach(([key, value]) => elem.setAttribute(key, value)); }

/***/ }),

/***/ "./src/modules/list.js":
/*!*****************************!*\
  !*** ./src/modules/list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

  deleteProject(deletedProjectName) {
    const projectIndex = this.projects.findIndex((project) => project.name === deletedProjectName);
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
    projectReplaced.getProjectTasks().forEach(task => {
      const index = this.getTaskIndex(task.title);
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
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(taskDate, { start: today, end: week });
    })
  }

  getTasksMonth() {
    return this.tasks.filter((task) => {
      const today = new Date();
      const month = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(today), 1);
      const taskDate = new Date(task.dueDate);
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(taskDate, { start: today, end: month });
    })
  }

}

/***/ }),

/***/ "./src/modules/page.js":
/*!*****************************!*\
  !*** ./src/modules/page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");


const initializePage = (() => {

  const _createHeading = (id, text, num = 4) => {
    const heading = document.createElement(`h${num}`);
    heading.setAttribute('id', id);
    heading.textContent = text;
    return heading;
  }

  const _createBtn = (label, type = 'control', ...classes) => {
    const button = document.createElement('button');
    button.setAttribute('id', label);
    button.classList.add(`${type}`);
    const icon = document.createElement('i');
    classes.forEach(cls => {
      Object.values(cls).forEach(value => icon.classList.add(value));
    });
    const content = capitalize(label);
    const title = document.createElement('h3');
    title.textContent = content;
    (type === 'special') ? button.append(icon) : button.append(icon, title);
    return button;
  }

  const _createContainer = (...elements) => {
    const container = document.createElement('div');
    container.classList.add('sort-attrib');
    container.append(...elements);
    return container;
  }

  const _initializeHeader = () => {
    const header = document.querySelector('header');
    header.setAttribute('id', 'header');

    const title = _createHeading('title', 'Todo-List', '1');
    const icon = document.createElement('i');
    icon.setAttribute('id', 'icon');
    icon.classList.add('fas', 'fa-table-list');
    const leftHeader = document.createElement('div');
    leftHeader.setAttribute('id', 'left-header');
    leftHeader.append(icon, title);

    const toggle = _createBtn('nav-control', 'special', ['fas', 'fa-square-caret-down']);
    toggle.addEventListener('click', () => {
      document.querySelector('nav').classList.toggle('media');
      document.querySelector('#nav-control').classList.toggle('rotate');
    });
    const rightHeader = document.createElement('div');
    rightHeader.append(toggle);
    rightHeader.setAttribute('id', 'right-header');

    header.append(leftHeader, rightHeader);
    return header;
  }

  const _initializeNav = () => {
    const nav = document.querySelector('section').querySelector('nav');
    nav.setAttribute('id', 'nav');

    const filterProjects = document.createElement('div');
    filterProjects.setAttribute('id', 'projects-filter');

    const home = _createBtn('home', 'menu', ['fas', 'fa-house']);
    const today = _createBtn('today', 'menu', ['fas', 'fa-calendar-day']);
    const week = _createBtn('week', 'menu', ['fas', 'fa-calendar-week']);
    const upcoming = _createBtn('upcoming', 'menu', ['fas', 'fa-calendar-days']);

    filterProjects.append(home, today, week, upcoming);

    const userProjectsLabel = _createHeading('projects-title', 'Projects', '2');
    const userProjectsContents = document.createElement('div');
    userProjectsContents.setAttribute('id', 'projects-user');
    const addProject = _createBtn('add-project', 'control', ['fa-solid', 'fa-folder-plus']);

    nav.append(filterProjects, userProjectsLabel, userProjectsContents, addProject);

    return nav;
  }

  const _initializeMain = () => {
    const main = document.querySelector('section').querySelector('main');
    main.setAttribute('id', 'main');
    const contentTitle = _createHeading('content-title', 'Home', 3);
    const titleContainer = document.createElement('div');
    titleContainer.setAttribute('id', 'content-title-container');
    titleContainer.classList.add('center');
    titleContainer.append(contentTitle);

    const sortEmpty = _createHeading('sort-check', '', 4);
    const sortOne = _createContainer(sortEmpty);
    sortOne.classList.add('hidden')
    const sortTitle = _createHeading('sort-title', 'Title', 4);
    const sortTwo = _createContainer(sortTitle);
    const sortDate = _createHeading('sort-date', 'Date', 4);
    const sortThree = _createContainer(sortDate);
    const contentAttributes = document.createElement('div');
    contentAttributes.append(sortOne, sortTwo, sortThree);
    setKeyValue(contentAttributes, { id: 'content-attributes' });

    const content = document.createElement('div');
    setKeyValue(content, { id: 'content' });
    const contentItems = document.createElement('div');
    setKeyValue(contentItems, { id: 'content-items' });
    const addTask = _createBtn('add-task', 'control', ['fas', 'fa-calendar-plus']);
    content.append(contentItems, addTask);

    main.append(titleContainer, contentAttributes, content);
    main.classList.add('gap');
    return main;
  }

  _initializeHeader();
  _initializeNav();
  _initializeMain();
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializePage);

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function setKeyValue(elem, attrs) { Object.entries(attrs).forEach(([key, value]) => elem.setAttribute(key, value)); }

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./src/modules/validation.js":
/*!***********************************!*\
  !*** ./src/modules/validation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Validation)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");


class Validation {

  static confirmDeleteTask = () => {
    return confirm('Are you sure you want to delete this task?');
  }

  static confirmDeleteProject = () => {
    return confirm('Are you sure you want to delete this project?');
  }

  static validateFromInputs = (form) => {
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('focusout', (event) => {
        if (event.target.classList.contains('editTaskTitle')) Validation.checkEditTitle();
        else if (event.target.classList.contains('editTaskDate')) Validation.checkEditDate();
      });
    });
  }

  static isEmpty = value => value === '' ? true : false;
  static isNotBetween = (length, min, max) => min > length || length < max ? false : true;
  static isValid = (value, pattern) => pattern.test(value) ? true : false;

  static checkEditTitle = () => {
    const titleInput = document.querySelector('.editTaskTitle');
    let valid = false;
    const min = 1, max = 20;
    const title = titleInput.value.trim();
    const regex = /^[A-Za-z0-9\s]+[A-Za-z0-9\s]+$(\.0-9+)?/g;

    if (this.isEmpty(title)) alert('Title cannot be blank.');
    else if (this.isNotBetween(title.length, min, max)) alert(`Title must be between ${min} and ${max} characters.`);
    else if (!this.isValid(title, regex)) alert(`Title must be in alphanumeric pattern.`);
    else valid = true;

    return valid;
  };

  static checkEditDate = () => {
    const dateInput = document.querySelector('.editTaskDate');
    let valid = false;
    const date = dateInput.value.trim();
    const regex = /^(19[0-9]{2}|2[0-9]{3})-(0[1-9]|1[012])-([123]0|[012][1-9]|31)$/;

    if (!date) valid = true;
    else if (!this.isValid(date, regex)) alert(`Date must be a valid that is between 01/01/1900 to 12/31/2099.`)
    else valid = true;

    return valid;
  };

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
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