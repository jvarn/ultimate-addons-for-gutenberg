(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/tabs/settings"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/icon-picker/editor.lazy.scss":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/icon-picker/editor.lazy.scss ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*#######################################################################################*/\n/**\r\n * google-material-color v1.2.6\r\n * https://github.com/danlevan/google-material-color\r\n */\n.rfipbtn--default {\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #fff;\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eee;\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system,\r BlinkMacSystemFont,\r \"Segoe UI\",\r \"Roboto\",\r \"Oxygen\",\r \"Ubuntu\",\r \"Cantarell\",\r \"Fira Sans\",\r \"Droid Sans\",\r \"Helvetica Neue\",\r sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n", "",{"version":3,"sources":["webpack://./src/components/icon-picker/editor.lazy.scss"],"names":[],"mappings":"AAAA,0FAA0F;AAC1F;;;EAGE;AACF;EACE,sBAAsB;EACtB,yBAAyB,EAAE;EAC3B;IACE,4EAA4E;IAC5E,yBAAyB,EAAE;EAC7B;IACE,0BAA0B;IAC1B,8BAA8B;IAC9B,yBAAyB;IACzB,cAAc,EAAE;IAChB;MACE,yBAAyB,EAAE;IAC7B;MACE,oCAAoC,EAAE;EAC1C;IACE,sBAAsB;IACtB,cAAc,EAAE;IAChB;MACE,cAAc,EAAE;EACpB;IACE,sBAAsB,EAAE;IACxB;MACE,yBAAyB,EAAE;IAC7B;MACE,0BAA0B,EAAE;;AAElC;EACE,2EAA2E;EAC3E,cAAc;EACd,sBAAsB;EACtB,yBAAyB,EAAE;EAC3B;;IAEE,cAAc,EAAE;EAClB;IACE,sBAAsB;IACtB,yBAAyB;IACzB,0CAA0C,EAAE;IAC5C;MACE,qBAAqB;MACrB,2BAA2B;MAC3B,eAAe,EAAE;EACrB;IACE,yBAAyB;IACzB,0CAA0C,EAAE;IAC5C;MACE,qBAAqB;MACrB,2BAA2B;MAC3B,eAAe,EAAE;EACrB;IACE,sBAAsB;IACtB,sBAAsB;IACtB,cAAc,EAAE;IAChB;MACE,yBAAyB;MACzB,yBAAyB,EAAE;IAC7B;MACE,yBAAyB,EAAE;EAC/B;IACE,yBAAyB;IACzB,yBAAyB;IACzB,cAAc,EAAE;IAChB;MACE,yBAAyB;MACzB,yBAAyB,EAAE;IAC7B;MACE,yBAAyB,EAAE;IAC7B;MACE,cAAc,EAAE;EACpB;IACE,yBAAyB;IACzB,0CAA0C,EAAE;IAC5C;MACE,qBAAqB;MACrB,2BAA2B;MAC3B,eAAe,EAAE;;AAEvB;;EAEE,SAAS;EACT,UAAU;EACV,wKAAwK;EACxK,eAAe;EACf,oBAAoB;EACpB,wBAAwB;EACxB,sBAAsB,EAAE;EACxB;;IAEE,sBAAsB;IACtB,SAAS;IACT,UAAU,EAAE;EACd;;;;IAIE,eAAe,EAAE;;AAErB;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,sBAAsB;EACtB,WAAW,EAAE;;AAEf;EACE,WAAW;EACX,aAAa;EACb,qBAAqB;EACrB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,gDAAgD;EAChD,eAAe;EACf,iBAAiB,EAAE;EACnB;IACE,0BAA0B,EAAE;EAC9B;IACE,WAAW;IACX,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,gCAAgC;IAChC,8CAA8C,EAAE;IAChD;MACE,eAAe;MACf,2BAA2B,EAAE;IAC/B;MACE,0BAA0B,EAAE;EAChC;IACE,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;IACd;MACE,mBAAmB;MACnB,2BAA2B;MAC3B,iBAAiB;MACjB,qBAAqB,EAAE;EAC3B;IACE,WAAW;IACX,UAAU;IACV,YAAY;IACZ,WAAW;IACX,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,8BAA8B;IAC9B,kBAAkB,EAAE;IACpB;MACE,eAAe;MACf,iBAAiB;MACjB,gBAAgB;MAChB,kBAAkB;MAClB,yBAAyB;MACzB,kBAAkB,EAAE;EACxB;IACE,aAAa;IACb,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,uBAAuB;IACvB,eAAe,EAAE;IACjB;;MAEE,YAAY;MACZ,WAAW,EAAE;EACjB;IACE,WAAW;IACX,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,kCAAkC;IAClC,eAAe,EAAE;;AAErB;EACE,WAAW;EACX,eAAe;EACf,kBAAkB,EAAE;EACpB;IACE,WAAW;IACX,cAAc;IACd,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,wBAAwB;IACxB,qBAAqB;IACrB,gBAAgB;IAChB,yBAAyB;IACzB,0CAA0C;IAC1C,wCAAwC,EAAE;EAC5C;IACE,kBAAkB;IAClB,UAAU;IACV,MAAM;IACN,eAAe;IACf,iBAAiB;IACjB,WAAW,EAAE;;AAEjB;EACE,YAAY;EACZ,kBAAkB;EAClB,OAAO;EACP,gBAAgB;EAChB,kBAAkB;EAClB,4BAA4B,EAAE;EAC9B;IACE,gBAAgB;IAChB,aAAa,EAAE;EACjB;IACE,6DAA6D;IAC7D,aAAa,EAAE;;AAEnB;EACE,aAAa;EACb,qBAAqB;EACrB,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB,EAAE;;AAEtB;EACE,YAAY;EACZ,kBAAkB,EAAE;;AAEtB;EACE,WAAW;EACX,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;EACjB,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB;EACjB,WAAW;EACX,aAAa;EACb,qBAAqB;EACrB,yBAAyB;EACzB,mBAAmB;EACnB,YAAY;EACZ,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,gDAAgD;EAChD,eAAe;EACf,kBAAkB;EAClB,eAAe,EAAE;;AAEnB;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB,EAAE;EACzB;IACE,YAAY;IACZ,WAAW,EAAE;;AAEjB;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,2BAA2B,EAAE;;AAE/B;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,gDAAgD;EAChD,kBAAkB;EAClB,eAAe;EACf,eAAe,EAAE;EACjB;;IAEE,gBAAgB;IAChB,WAAW,EAAE;EACf;IACE,mBAAmB;IACnB,2BAA2B;IAC3B,wBAAwB,EAAE;EAC5B;IACE,qBAAqB,EAAE;EACzB;IACE,yBAAyB;IACzB,kBAAkB,EAAE;;AAExB;EACE,UAAU;EACV,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe,EAAE;EACjB;IACE,cAAc;IACd,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,WAAW;IACX,cAAc,EAAE;;AAEpB;EACE,WAAW;EACX,eAAe,EAAE;EACjB;IACE,WAAW;IACX,cAAc;IACd,YAAY;IACZ,iBAAiB,EAAE;;AAEvB;;EAEE,OAAO;EACP,WAAW,EAAE;;AAEf;EACE,eAAe,EAAE;;AAEnB;EACE,YAAY,EAAE;;AAEhB;EACE,8BAA8B;EAC9B,0BAA0B;EAC1B,sBAAsB,EAAE;;AAE1B;EACE,aAAa,EAAE;;AAEjB;EACE,cAAc;EACd,YAAY;EACZ,SAAS,EAAE;;AAEb;EACE,WAAW;EACX,2BAA2B;EAC3B,cAAc;EACd,iBAAiB;EACjB,yBAAyB;EACzB,mBAAmB;EACnB,iBAAiB,EAAE;;AAErB;;;;EAIE,cAAc;EACd,6BAA6B;EAC7B,SAAS,EAAE;;AAEb;EACE,aAAa,EAAE;;AAEjB;;EAEE,WAAW;EACX,YAAY;EACZ,gBAAgB,EAAE;;AAEpB;EACE,aAAa,EAAE;;AAEjB,+BAA+B;AAC/B;EACE,eAAe,EAAE;;AAEnB;EACE,mBAAmB;EACnB,cAAc,EAAE","sourcesContent":["/*#######################################################################################*/\n/**\r\n * google-material-color v1.2.6\r\n * https://github.com/danlevan/google-material-color\r\n */\n.rfipbtn--default {\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #fff;\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eee;\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system,\r BlinkMacSystemFont,\r \"Segoe UI\",\r \"Roboto\",\r \"Oxygen\",\r \"Ubuntu\",\r \"Cantarell\",\r \"Fira Sans\",\r \"Droid Sans\",\r \"Helvetica Neue\",\r sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/tabs/settings.js":
/*!*************************************!*\
  !*** ./src/blocks/tabs/settings.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_icon_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components/icon-picker */ "./src/components/icon-picker/index.js");
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_responsive_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/responsive-select */ "./src/components/responsive-select/index.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_spacing_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _Components_border__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/border */ "./src/components/border/index.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


















const Settings = props => {
  props = props.parentProps;
  const {
    attributes,
    setAttributes
  } = props;
  const {
    tabsStyleD,
    tabsStyleM,
    tabsStyleT,
    tabActiveFrontend,
    tabHeaders,
    headerBgColor,
    borderStyle,
    borderWidth,
    borderRadius,
    borderColor,
    borderHoverColor,
    headerTextColor,
    activeTabBgColor,
    activeTabTextColor,
    bodyBgColor,
    bodyTextColor,
    tabTitleLeftMargin,
    tabTitleRightMargin,
    tabTitleTopMargin,
    tabTitleBottomMargin,
    tabTitleLeftMarginTablet,
    tabTitleRightMarginTablet,
    tabTitleTopMarginTablet,
    tabTitleBottomMarginTablet,
    tabTitleLeftMarginMobile,
    tabTitleRightMarginMobile,
    tabTitleTopMarginMobile,
    tabTitleBottomMarginMobile,
    tabTitleMarginUnit,
    mobiletabTitleMarginUnit,
    tablettabTitleMarginUnit,
    tabTitleMarginLink,
    tabTitleTopPadding,
    tabTitleRightPadding,
    tabTitleBottomPadding,
    tabTitleLeftPadding,
    tabTitleTopPaddingTablet,
    tabTitleRightPaddingTablet,
    tabTitleBottomPaddingTablet,
    tabTitleLeftPaddingTablet,
    tabTitleTopPaddingMobile,
    tabTitleRightPaddingMobile,
    tabTitleBottomPaddingMobile,
    tabTitleLeftPaddingMobile,
    tabTitlePaddingUnit,
    mobiletabTitlePaddingUnit,
    tablettabTitlePaddingUnit,
    tabTitlePaddingLink,
    tabBodyLeftMargin,
    tabBodyRightMargin,
    tabBodyTopMargin,
    tabBodyBottomMargin,
    tabBodyLeftMarginTablet,
    tabBodyRightMarginTablet,
    tabBodyTopMarginTablet,
    tabBodyBottomMarginTablet,
    tabBodyLeftMarginMobile,
    tabBodyRightMarginMobile,
    tabBodyTopMarginMobile,
    tabBodyBottomMarginMobile,
    tabBodyMarginUnit,
    mobiletabBodyMarginUnit,
    tablettabBodyMarginUnit,
    tabBodyMarginLink,
    tabBodyTopPadding,
    tabBodyRightPadding,
    tabBodyBottomPadding,
    tabBodyLeftPadding,
    tabBodyTopPaddingTablet,
    tabBodyRightPaddingTablet,
    tabBodyBottomPaddingTablet,
    tabBodyLeftPaddingTablet,
    tabBodyTopPaddingMobile,
    tabBodyRightPaddingMobile,
    tabBodyBottomPaddingMobile,
    tabBodyLeftPaddingMobile,
    tabBodyPaddingUnit,
    mobiletabBodyPaddingUnit,
    tablettabBodyPaddingUnit,
    tabBodyPaddingLink,
    titleLoadGoogleFonts,
    titleFontFamily,
    titleFontWeight,
    titleFontSizeType,
    titleFontSize,
    titleFontSizeMobile,
    titleFontSizeTablet,
    titleLineHeightType,
    titleLineHeight,
    titleLineHeightMobile,
    titleLineHeightTablet,
    titleTransform,
    titleDecoration,
    titleAlign,
    tabAlign,
    showIcon,
    icon,
    iconColor,
    iconPosition,
    iconSpacing,
    iconSize,
    activeiconColor,
    titleFontStyle
  } = attributes;

  const tabStyleSettings = () => {
    const tabsStyleOptions = {
      desktop: [{
        value: 'hstyle1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Horizontal Style 1', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Horizontal Style 2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Horizontal Style 3', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Horizontal Style 4', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Horizontal Style 5', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Vertical Style 6', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle7',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Vertical Style 7', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle8',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Vertical Style 8', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle9',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Vertical Style 9', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle10',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Vertical Style 10', 'ultimate-addons-for-gutenberg')
      }],
      tablet: [{
        value: 'hstyle1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Horizontal Style 1', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Horizontal Style 2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Horizontal Style 3', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Horizontal Style 4', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Horizontal Style 5', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Vertical Style 6', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle7',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Vertical Style 7', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle8',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Vertical Style 8', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle9',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Vertical Style 9', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle10',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Vertical Style 10', 'ultimate-addons-for-gutenberg')
      }],
      mobile: [{
        value: 'hstyle1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Horizontal Style 1', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Horizontal Style 2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Horizontal Style 3', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Horizontal Style 4', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Horizontal Style 5', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Vertical Style 6', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle7',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Vertical Style 7', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle8',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Vertical Style 8', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle9',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Vertical Style 9', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle10',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Vertical Style 10', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'stack1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Stack Style 11', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'stack2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Stack Style 12', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'stack3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Stack Style 13', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'stack4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Stack Style 14', 'ultimate-addons-for-gutenberg')
      }]
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Layout', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_responsive_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Style', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: tabsStyleD,
          label: 'tabsStyleD'
        },
        tablet: {
          value: tabsStyleT,
          label: 'tabsStyleT'
        },
        mobile: {
          value: tabsStyleM,
          label: 'tabsStyleM'
        }
      },
      options: tabsStyleOptions,
      setAttributes: setAttributes
    }));
  };

  const tabTitleSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Tabs Title', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Initial Open Tab', 'ultimate-addons-for-gutenberg'),
      value: tabActiveFrontend,
      options: tabHeaders.map((tab, index) => {
        return {
          value: index,
          label: tab
        };
      }),
      onChange: value => setAttributes({
        tabActiveFrontend: parseInt(value)
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Tab Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: tabAlign,
        label: 'tabAlign'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Text Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: titleAlign,
        label: 'titleAlign'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Enable Icon', 'ultimate-addons-for-gutenberg'),
      checked: showIcon,
      onChange: () => setAttributes({
        showIcon: !showIcon
      })
    }), showIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_icon_picker__WEBPACK_IMPORTED_MODULE_0__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Tab Icon', 'ultimate-addons-for-gutenberg'),
      value: icon,
      onChange: value => setAttributes({
        icon: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Icon Position', 'ultimate-addons-for-gutenberg'),
      data: {
        value: iconPosition,
        label: 'iconPosition'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'top',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Top', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'bottom',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Bottom', 'ultimate-addons-for-gutenberg')
      }]
    })));
  };

  const tabBorderSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Border', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_border__WEBPACK_IMPORTED_MODULE_8__["default"], {
      setAttributes: setAttributes,
      borderStyle: {
        value: borderStyle,
        label: 'borderStyle',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Style', 'ultimate-addons-for-gutenberg')
      },
      borderWidth: {
        value: borderWidth,
        label: 'borderWidth',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Width', 'ultimate-addons-for-gutenberg')
      },
      borderRadius: {
        value: borderRadius,
        label: 'borderRadius',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Radius', 'ultimate-addons-for-gutenberg')
      },
      borderColor: {
        value: borderColor,
        label: 'borderColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Color', 'ultimate-addons-for-gutenberg')
      },
      borderHoverColor: {
        value: borderHoverColor,
        label: 'borderHoverColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Hover Color', 'ultimate-addons-for-gutenberg')
      },
      disableBottomSeparator: true
    }));
  };

  const tabBodySettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Body', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: bodyBgColor,
      onColorChange: value => setAttributes({
        bodyBgColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
      colorValue: bodyTextColor,
      onColorChange: value => setAttributes({
        bodyTextColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Margin', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: tabBodyTopMargin,
        label: 'tabBodyTopMargin'
      },
      valueRight: {
        value: tabBodyRightMargin,
        label: 'tabBodyRightMargin'
      },
      valueBottom: {
        value: tabBodyBottomMargin,
        label: 'tabBodyBottomMargin'
      },
      valueLeft: {
        value: tabBodyLeftMargin,
        label: 'tabBodyLeftMargin'
      },
      valueTopTablet: {
        value: tabBodyTopMarginTablet,
        label: 'tabBodyTopMarginTablet'
      },
      valueRightTablet: {
        value: tabBodyRightMarginTablet,
        label: 'tabBodyRightMarginTablet'
      },
      valueBottomTablet: {
        value: tabBodyBottomMarginTablet,
        label: 'tabBodyBottomMarginTablet'
      },
      valueLeftTablet: {
        value: tabBodyLeftMarginTablet,
        label: 'tabBodyLeftMarginTablet'
      },
      valueTopMobile: {
        value: tabBodyTopMarginMobile,
        label: 'tabBodyTopMarginMobile'
      },
      valueRightMobile: {
        value: tabBodyRightMarginMobile,
        label: 'tabBodyRightMarginMobile'
      },
      valueBottomMobile: {
        value: tabBodyBottomMarginMobile,
        label: 'tabBodyBottomMarginMobile'
      },
      valueLeftMobile: {
        value: tabBodyLeftMarginMobile,
        label: 'tabBodyLeftMarginMobile'
      },
      unit: {
        value: tabBodyMarginUnit,
        label: 'tabBodyMarginUnit'
      },
      mUnit: {
        value: mobiletabBodyMarginUnit,
        label: 'mobiletabBodyMarginUnit'
      },
      tUnit: {
        value: tablettabBodyMarginUnit,
        label: 'tablettabBodyMarginUnit'
      },
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: tabBodyMarginLink,
        label: 'tabBodyMarginLink'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Padding', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: tabBodyTopPadding,
        label: 'tabBodyTopPadding'
      },
      valueRight: {
        value: tabBodyRightPadding,
        label: 'tabBodyRightPadding'
      },
      valueBottom: {
        value: tabBodyBottomPadding,
        label: 'tabBodyBottomPadding'
      },
      valueLeft: {
        value: tabBodyLeftPadding,
        label: 'tabBodyLeftPadding'
      },
      valueTopTablet: {
        value: tabBodyTopPaddingTablet,
        label: 'tabBodyTopPaddingTablet'
      },
      valueRightTablet: {
        value: tabBodyRightPaddingTablet,
        label: 'tabBodyRightPaddingTablet'
      },
      valueBottomTablet: {
        value: tabBodyBottomPaddingTablet,
        label: 'tabBodyBottomPaddingTablet'
      },
      valueLeftTablet: {
        value: tabBodyLeftPaddingTablet,
        label: 'tabBodyLeftPaddingTablet'
      },
      valueTopMobile: {
        value: tabBodyTopPaddingMobile,
        label: 'tabBodyTopPaddingMobile'
      },
      valueRightMobile: {
        value: tabBodyRightPaddingMobile,
        label: 'tabBodyRightPaddingMobile'
      },
      valueBottomMobile: {
        value: tabBodyBottomPaddingMobile,
        label: 'tabBodyBottomPaddingMobile'
      },
      valueLeftMobile: {
        value: tabBodyLeftPaddingMobile,
        label: 'tabBodyLeftPaddingMobile'
      },
      unit: {
        value: tabBodyPaddingUnit,
        label: 'tabBodyPaddingUnit'
      },
      mUnit: {
        value: mobiletabBodyPaddingUnit,
        label: 'mobiletabBodyPaddingUnit'
      },
      tUnit: {
        value: tablettabBodyPaddingUnit,
        label: 'tablettabBodyPaddingUnit'
      },
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: tabBodyPaddingLink,
        label: 'tabBodyPaddingLink'
      }
    })));
  };

  const tabTitleStyle = () => {
    const tabOutputNormal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
      colorValue: headerTextColor,
      onColorChange: value => setAttributes({
        headerTextColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: headerBgColor,
      onColorChange: value => setAttributes({
        headerBgColor: value
      })
    }));
    const tabOutputActive = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
      colorValue: activeTabTextColor,
      onColorChange: value => setAttributes({
        activeTabTextColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: activeTabBgColor,
      onColorChange: value => setAttributes({
        activeTabBgColor: value
      })
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Title', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_11__["default"], {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'active',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Active', 'ultimate-addons-for-gutenberg')
      }],
      normal: tabOutputNormal,
      active: tabOutputActive
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: titleLoadGoogleFonts,
        label: 'titleLoadGoogleFonts'
      },
      fontFamily: {
        value: titleFontFamily,
        label: 'titleFontFamily'
      },
      fontWeight: {
        value: titleFontWeight,
        label: 'titleFontWeight'
      },
      fontStyle: {
        value: titleFontStyle,
        label: 'titleFontStyle'
      },
      fontSizeType: {
        value: titleFontSizeType,
        label: 'titleFontSizeType'
      },
      fontSize: {
        value: titleFontSize,
        label: 'titleFontSize'
      },
      fontSizeMobile: {
        value: titleFontSizeMobile,
        label: 'titleFontSizeMobile'
      },
      fontSizeTablet: {
        value: titleFontSizeTablet,
        label: 'titleFontSizeTablet'
      },
      lineHeightType: {
        value: titleLineHeightType,
        label: 'titleLineHeightType'
      },
      lineHeight: {
        value: titleLineHeight,
        label: 'titleLineHeight'
      },
      lineHeightMobile: {
        value: titleLineHeightMobile,
        label: 'titleLineHeightMobile'
      },
      lineHeightTablet: {
        value: titleLineHeightTablet,
        label: 'titleLineHeightTablet'
      },
      transform: {
        value: titleTransform,
        label: 'titleTransform'
      },
      decoration: {
        value: titleDecoration,
        label: 'titleDecoration'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Margin', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: tabTitleTopMargin,
        label: 'tabTitleTopMargin'
      },
      valueRight: {
        value: tabTitleRightMargin,
        label: 'tabTitleRightMargin'
      },
      valueBottom: {
        value: tabTitleBottomMargin,
        label: 'tabTitleBottomMargin'
      },
      valueLeft: {
        value: tabTitleLeftMargin,
        label: 'tabTitleLeftMargin'
      },
      valueTopTablet: {
        value: tabTitleTopMarginTablet,
        label: 'tabTitleTopMarginTablet'
      },
      valueRightTablet: {
        value: tabTitleRightMarginTablet,
        label: 'tabTitleRightMarginTablet'
      },
      valueBottomTablet: {
        value: tabTitleBottomMarginTablet,
        label: 'tabTitleBottomMarginTablet'
      },
      valueLeftTablet: {
        value: tabTitleLeftMarginTablet,
        label: 'tabTitleLeftMarginTablet'
      },
      valueTopMobile: {
        value: tabTitleTopMarginMobile,
        label: 'tabTitleTopMarginMobile'
      },
      valueRightMobile: {
        value: tabTitleRightMarginMobile,
        label: 'tabTitleRightMarginMobile'
      },
      valueBottomMobile: {
        value: tabTitleBottomMarginMobile,
        label: 'tabTitleBottomMarginMobile'
      },
      valueLeftMobile: {
        value: tabTitleLeftMarginMobile,
        label: 'tabTitleLeftMarginMobile'
      },
      unit: {
        value: tabTitleMarginUnit,
        label: 'tabTitleMarginUnit'
      },
      mUnit: {
        value: mobiletabTitleMarginUnit,
        label: 'mobiletabTitleMarginUnit'
      },
      tUnit: {
        value: tablettabTitleMarginUnit,
        label: 'tablettabTitleMarginUnit'
      },
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: tabTitleMarginLink,
        label: 'tabTitleMarginLink'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Padding', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: tabTitleTopPadding,
        label: 'tabTitleTopPadding'
      },
      valueRight: {
        value: tabTitleRightPadding,
        label: 'tabTitleRightPadding'
      },
      valueBottom: {
        value: tabTitleBottomPadding,
        label: 'tabTitleBottomPadding'
      },
      valueLeft: {
        value: tabTitleLeftPadding,
        label: 'tabTitleLeftPadding'
      },
      valueTopTablet: {
        value: tabTitleTopPaddingTablet,
        label: 'tabTitleTopPaddingTablet'
      },
      valueRightTablet: {
        value: tabTitleRightPaddingTablet,
        label: 'tabTitleRightPaddingTablet'
      },
      valueBottomTablet: {
        value: tabTitleBottomPaddingTablet,
        label: 'tabTitleBottomPaddingTablet'
      },
      valueLeftTablet: {
        value: tabTitleLeftPaddingTablet,
        label: 'tabTitleLeftPaddingTablet'
      },
      valueTopMobile: {
        value: tabTitleTopPaddingMobile,
        label: 'tabTitleTopPaddingMobile'
      },
      valueRightMobile: {
        value: tabTitleRightPaddingMobile,
        label: 'tabTitleRightPaddingMobile'
      },
      valueBottomMobile: {
        value: tabTitleBottomPaddingMobile,
        label: 'tabTitleBottomPaddingMobile'
      },
      valueLeftMobile: {
        value: tabTitleLeftPaddingMobile,
        label: 'tabTitleLeftPaddingMobile'
      },
      unit: {
        value: tabTitlePaddingUnit,
        label: 'tabTitlePaddingUnit'
      },
      mUnit: {
        value: mobiletabTitlePaddingUnit,
        label: 'mobiletabTitlePaddingUnit'
      },
      tUnit: {
        value: tablettabTitlePaddingUnit,
        label: 'tablettabTitlePaddingUnit'
      },
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: tabTitlePaddingLink,
        label: 'tabTitlePaddingLink'
      }
    })));
  };

  const tabIconStyle = () => {
    if (!showIcon) {
      return '';
    }

    const tabOutputNormal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: iconColor,
      onColorChange: value => setAttributes({
        iconColor: value
      })
    });
    const tabOutputActive = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: activeiconColor,
      onColorChange: value => setAttributes({
        activeiconColor: value
      })
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Icon', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: iconSpacing,
      onChange: value => setAttributes({
        iconSpacing: value
      }),
      min: 0,
      max: 500,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_11__["default"], {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'active',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Active', 'ultimate-addons-for-gutenberg')
      }],
      normal: tabOutputNormal,
      active: tabOutputActive
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Size', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: iconSize,
      onChange: value => setAttributes({
        iconSize: value
      }),
      min: 0,
      max: 500,
      displayUnit: false
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["UAGTabs"].general, tabStyleSettings(), tabTitleSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["UAGTabs"].style, tabTitleStyle(), tabIconStyle(), tabBodySettings(), tabBorderSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["UAGTabs"].advance, {
    parentProps: props
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.memo(Settings));

/***/ }),

/***/ "./src/components/icon-picker/editor.lazy.scss":
/*!*****************************************************!*\
  !*** ./src/components/icon-picker/editor.lazy.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./editor.lazy.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/icon-picker/editor.lazy.scss");

            

var refs = 0;
var update;
var options = {"injectType":"lazySingletonStyleTag","attributes":{"id":"uagb-editor-styles"}};

options.insert = "head";
options.singleton = true;

var exported = {};

exported.locals = _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {};
exported.use = function() {
  if (!(refs++)) {
    update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);
  }

  return exported;
};
exported.unuse = function() {
  if (refs > 0 && !--refs) {
    update();
    update = null;
  }
};



;
       /* harmony default export */ __webpack_exports__["default"] = (exported);


/***/ }),

/***/ "./src/components/icon-picker/index.js":
/*!*********************************************!*\
  !*** ./src/components/icon-picker/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fonticonpicker/react-fonticonpicker */ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/components/icon-picker/editor.lazy.scss");
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);






const UAGIconPicker = props => {
  // Add and remove the CSS on the drop and remove of the component.
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(() => {
    _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_2__["default"].use();
    return () => {
      _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_2__["default"].unuse();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "components-base-control uag-icon-picker"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "uag-control-label"
  }, (props === null || props === void 0 ? void 0 : props.label) || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Icon', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0___default.a, {
    icons: (props === null || props === void 0 ? void 0 : props.icons) || wp.UAGBSvgIcons,
    renderFunc: _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_3__["default"],
    theme: "default",
    value: props.value,
    onChange: props.onChange,
    isMulti: props.isMulti || false,
    noSelectedPlaceholder: props.noSelectedPlaceholder || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Select Icon', 'ultimate-addons-for-gutenberg')
  }), props.help && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "uag-control-help-notice"
  }, props.help));
};

/* harmony default export */ __webpack_exports__["default"] = (UAGIconPicker);

/***/ }),

/***/ "./src/components/responsive-select/index.js":
/*!***************************************************!*\
  !*** ./src/components/responsive-select/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/**
 * External dependencies
 */






const ResponsiveSelectControl = props => {
  const [displayResponsive, toggleResponsive] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const {
    label,
    data,
    setAttributes,
    options
  } = props;
  const deviceType = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["useSelect"])(select => {
    return select('core/edit-post').__experimentalGetPreviewDeviceType();
  }, []);
  const {
    __experimentalSetPreviewDeviceType: setPreviewDeviceType
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])('core/edit-post');

  const customSetPreviewDeviceType = device => {
    setPreviewDeviceType(device);
    toggleResponsive(!displayResponsive);
  };

  const devicesSvgs = {
    desktop: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      width: "8",
      height: "7",
      viewBox: "0 0 8 7",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"
    })),
    tablet: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      width: "6",
      height: "7",
      viewBox: "0 0 6 7",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"
    })),
    mobile: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      width: "4",
      height: "7",
      viewBox: "0 0 4 7",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"
    }))
  };
  const devices = [{
    name: 'Desktop',
    title: devicesSvgs.desktop,
    itemClass: 'uagb-desktop-tab uagb-responsive-tabs'
  }, {
    name: 'Tablet',
    title: devicesSvgs.tablet,
    itemClass: 'uagb-tablet-tab uagb-responsive-tabs'
  }, {
    name: 'Mobile',
    key: 'mobile',
    title: devicesSvgs.mobile,
    itemClass: 'uagb-mobile-tab uagb-responsive-tabs'
  }];
  const output = {};
  output.Desktop = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    value: data.desktop.value,
    onChange: value => setAttributes({
      [data.desktop.label]: value
    }),
    options: options.desktop
  });
  output.Tablet = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    value: data.tablet.value,
    onChange: value => setAttributes({
      [data.tablet.label]: value
    }),
    options: options.tablet || options.desktop
  });
  output.Mobile = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    value: data.mobile.value,
    onChange: value => setAttributes({
      [data.mobile.label]: value
    }),
    options: options.mobile || options.desktop
  });

  const commonResponsiveHandler = () => {
    toggleResponsive(!displayResponsive);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "components-base-control uagb-responsive-select-control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "uagb-size-type-field-tabs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "uagb-control__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "uag-responsive-label-wrap"
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "uag-control-label"
  }, label), !displayResponsive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    key: "uag-responsive-common-button",
    className: "uag-responsive-common-button",
    onClick: commonResponsiveHandler
  }, devicesSvgs[deviceType.toLowerCase()]), displayResponsive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
    className: "uagb-range-control-responsive components-tab-panel__tabs",
    "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Device', 'ultimate-addons-for-gutenberg')
  }, devices.map(({
    name,
    key,
    title,
    itemClass
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    key: key,
    className: `components-button components-tab-panel__tabs-item uagb-range-control-responsive-item ${itemClass}${name === deviceType ? ' active-tab' : ''}`,
    "aria-pressed": deviceType === name,
    onClick: () => customSetPreviewDeviceType(name)
  }, title))))), output[deviceType] ? output[deviceType] : output.Desktop), props.help && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uag-control-help-notice"
  }, props.help));
};

/* harmony default export */ __webpack_exports__["default"] = (ResponsiveSelectControl);

/***/ })

}]);
//# sourceMappingURL=settings.js.map