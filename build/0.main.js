(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/Comments.js":
/*!*************************!*\
  !*** ./src/Comments.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Comments; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */





const StyledComment = styled_components__WEBPACK_IMPORTED_MODULE_0__["styled"].p.withConfig({
  displayName: "Comments__StyledComment",
  componentId: "sc-hhbzi1-0"
})(["font-size:18px;line-height:1.5;color:pink;"]);
function Comments() {
  const comments = Object(_data__WEBPACK_IMPORTED_MODULE_1__["useData"])();
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: comments.map((comment, i) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(StyledComment, {
      children: comment
    }, i))
  });
}

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: DataProvider, useData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataProvider", function() { return DataProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useData", function() { return useData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



// Note: this file does not demonstrate a real data fetching strategy.
// We only use this to simulate data fetching happening on the server
// while the cache is populated on the client. In a real app, you would
// instead use a data fetching library or Server Components for this.

const DataContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
function DataProvider({
  children,
  data
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(DataContext.Provider, {
    value: data,
    children: children
  });
}

// In a real implementation the data would be streamed with the HTML.
// We haven't integrated this part yet, so we'll just use fake data.
const fakeData = ["Wait, it doesn't wait for React to load?", 'How does this even work?', 'I like marshmallows'];
function useData() {
  const ctx = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(DataContext);
  if (ctx !== null) {
    // This context is only provided on the server.
    // It is here to simulate a suspending data fetch.
    ctx.read();
  }
  return fakeData;
}

/***/ })

}]);
//# sourceMappingURL=0.main.js.map