"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// JSX (JavaScript XML)
// JSX allows you to write HTML elements in JavaScript and place them in the DOM without using createElement() or appendChild() methods.

// A simple functional component using JSX
var App = function App() {
  return /*#__PURE__*/_react["default"].createElement("h1", null, "Hello, world!");
};

// Render the App component into the DOM
_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(App, null), document.getElementById("root"));
